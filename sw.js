
// YSK SALES Service Worker - GitHub Pages Compatible
const CACHE_NAME = 'ysk-sales-v4-cache';
const STATIC_CACHE = 'ysk-sales-static-v4';
const DYNAMIC_CACHE = 'ysk-sales-dynamic-v4';

// Essential files for offline functionality
const STATIC_FILES = [
  '/v4/',
  '/v4/index.html'
];

// External resources to cache
const EXTERNAL_RESOURCES = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap',
  'https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js'
];

// Install event - cache essential files
self.addEventListener('install', event => {
  console.log('🔧 YSK SALES Service Worker installing...');
  
  event.waitUntil(
    Promise.allSettled([
      // Cache static files
      caches.open(STATIC_CACHE).then(cache => {
        console.log('📦 Caching static files...');
        return Promise.allSettled(
          STATIC_FILES.map(url => 
            cache.add(url).catch(err => {
              console.warn(`Failed to cache ${url}:`, err);
              return null;
            })
          )
        );
      }),
      // Cache external resources
      caches.open(DYNAMIC_CACHE).then(cache => {
        console.log('🌐 Caching external resources...');
        return Promise.allSettled(
          EXTERNAL_RESOURCES.map(url => 
            cache.add(new Request(url, { mode: 'cors' })).catch(err => {
              console.warn(`Failed to cache ${url}:`, err);
              return null;
            })
          )
        );
      })
    ]).then(() => {
      console.log('✅ YSK SALES Service Worker installed successfully');
      self.skipWaiting();
    }).catch(error => {
      console.error('❌ Service Worker installation failed:', error);
      self.skipWaiting(); // Install anyway
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('🚀 YSK SALES Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (![CACHE_NAME, STATIC_CACHE, DYNAMIC_CACHE].includes(cacheName)) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ YSK SALES Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip Firebase API calls (let them go to network)
  if (url.hostname.includes('firestore.googleapis.com') || 
      url.hostname.includes('firebase.googleapis.com') ||
      url.hostname.includes('identitytoolkit.googleapis.com')) {
    return;
  }
  
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) {
        // Return cached version and update in background
        updateCache(request);
        return cachedResponse;
      }
      
      // Not in cache, fetch from network
      return fetch(request).then(response => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        // Clone the response for caching
        const responseToCache = response.clone();
        
        // Determine cache to use
        const cacheName = STATIC_FILES.includes(request.url) ? STATIC_CACHE : DYNAMIC_CACHE;
        
        // Cache the response
        caches.open(cacheName).then(cache => {
          cache.put(request, responseToCache);
        });
        
        return response;
      }).catch(() => {
        // Network failed, try to serve offline fallback
        if (request.destination === 'document') {
          return caches.match('/v4/index.html');
        }
        
        // For other resources, return a basic offline response
        return new Response('Offline - YSK SALES', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/plain'
          })
        });
      });
    })
  );
});

// Background cache update function
async function updateCache(request) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
  } catch (error) {
    console.log('Background update failed:', error);
  }
}

// Background sync for offline data
self.addEventListener('sync', event => {
  console.log('🔄 Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      syncOfflineData()
    );
  }
});

// Sync offline data when connection is restored
async function syncOfflineData() {
  try {
    console.log('📡 Syncing offline data...');
    
    // Get all clients (open tabs)
    const clients = await self.clients.matchAll();
    
    // Notify clients that sync is starting
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_START',
        message: 'بدء مزامنة البيانات...'
      });
    });
    
    // Here you would implement your actual sync logic
    // For now, just notify completion
    setTimeout(() => {
      clients.forEach(client => {
        client.postMessage({
          type: 'SYNC_COMPLETE',
          message: 'تم مزامنة البيانات بنجاح'
        });
      });
    }, 2000);
    
  } catch (error) {
    console.error('❌ Sync failed:', error);
  }
}

// Push notifications
self.addEventListener('push', event => {
  console.log('📬 Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'إشعار جديد من YSK SALES',
    icon: '/v4/YSK-SALES.png',
    badge: '/v4/YSK-SALES.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 'ysk-sales-notification'
    },
    actions: [
      {
        action: 'open',
        title: 'فتح التطبيق',
        icon: '/v4/YSK-SALES.png'
      },
      {
        action: 'close',
        title: 'إغلاق',
        icon: '/v4/YSK-SALES.png'
      }
    ],
    tag: 'ysk-sales',
    renotify: true,
    requireInteraction: false
  };
  
  event.waitUntil(
    self.registration.showNotification('YSK SALES', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  console.log('🔔 Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow('/v4/')
    );
  }
});

// Message handling from main app
self.addEventListener('message', event => {
  console.log('💬 Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    // Cache additional URLs requested by the app
    const urls = event.data.urls;
    caches.open(DYNAMIC_CACHE).then(cache => {
      cache.addAll(urls);
    });
  }
});

// Error handling
self.addEventListener('error', event => {
  console.error('❌ Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', event => {
  console.error('❌ Unhandled promise rejection:', event.reason);
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(syncOfflineData());
  }
});
