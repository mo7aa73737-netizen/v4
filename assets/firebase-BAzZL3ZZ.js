const jc=()=>{};var fo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},qc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],l=n[e++],h=((i&7)<<18|(o&63)<<12|(u&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,l=u?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,_=o>>2,v=(o&3)<<4|l>>4;let w=(l&15)<<2|d>>6,P=d&63;h||(P=64,u||(w=64)),r.push(e[_],e[v],e[w],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ia(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):qc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const v=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||v==null)throw new $c;const w=o<<2|l>>4;if(r.push(w),d!==64){const P=l<<4&240|d>>2;if(r.push(P),v!==64){const D=d<<6&192|v;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zc=function(n){const t=Ia(n);return Aa.encodeByteArray(t,!0)},ir=function(n){return zc(n).replace(/\./g,"")},Gc=function(n){try{return Aa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=()=>Hc().__FIREBASE_DEFAULTS__,Wc=()=>{if(typeof process>"u"||typeof fo>"u")return;const n=fo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Gc(n[1]);return t&&JSON.parse(t)},Ms=()=>{try{return jc()||Kc()||Wc()||Qc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xc=n=>{var t,e;return(e=(t=Ms())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Yc=n=>{const t=Xc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},wa=()=>{var n;return(n=Ms())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zc(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ir(JSON.stringify(e)),ir(JSON.stringify(u)),""].join(".")}const ln={};function el(){const n={prod:[],emulator:[]};for(const t of Object.keys(ln))ln[t]?n.emulator.push(t):n.prod.push(t);return n}function nl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let mo=!1;function rl(n,t){if(typeof window>"u"||typeof document>"u"||!xs(window.location.host)||ln[n]===t||ln[n]||mo)return;ln[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=el().prod.length>0;function u(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{mo=!0,u()},w}function _(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function v(){const w=nl(r),P=e("text"),D=document.getElementById(P)||document.createElement("span"),k=e("learnmore"),b=document.getElementById(k)||document.createElement("a"),G=e("preprendIcon"),U=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const z=w.element;l(z),_(b,k);const et=d();h(U,G),z.append(U,D,b,et),document.body.appendChild(z)}o?(D.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function il(){var t;const n=(t=Ms())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ol(){return!il()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function al(){try{return typeof indexedDB=="object"}catch{return!1}}function ul(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="FirebaseError";class Le extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=cl,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?ll(o,r):"Error",l=`${this.serviceName}: ${u} (${i}).`;return new Le(i,l,r)}}function ll(n,t){return n.replace(hl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const hl=/\{\$([^}]+)}/g;function or(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(po(o)&&po(u)){if(!or(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function po(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n){return n&&n._delegate?n._delegate:n}class pn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Jc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ml(t))try{this.getOrInitializeService({instanceIdentifier:ue})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ue){return this.instances.has(t)}getOptions(t=ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&u.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ue){return this.component?this.component.multipleInstances?t:ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dl(n){return n===ue?void 0:n}function ml(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new fl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const gl={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},_l=$.INFO,yl={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},El=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=yl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sa{constructor(t){this.name=t,this._logLevel=_l,this._logHandler=El,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Tl=(n,t)=>t.some(e=>n instanceof e);let go,_o;function vl(){return go||(go=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Il(){return _o||(_o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ca=new WeakMap,ms=new WeakMap,Pa=new WeakMap,is=new WeakMap,Ls=new WeakMap;function Al(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Wt(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Ca.set(e,n)}).catch(()=>{}),Ls.set(t,n),t}function wl(n){if(ms.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});ms.set(n,t)}let ps={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ms.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Pa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Wt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Rl(n){ps=n(ps)}function Sl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(os(this),t,...e);return Pa.set(r,t.sort?t.sort():[t]),Wt(r)}:Il().includes(n)?function(...t){return n.apply(os(this),t),Wt(Ca.get(this))}:function(...t){return Wt(n.apply(os(this),t))}}function Cl(n){return typeof n=="function"?Sl(n):(n instanceof IDBTransaction&&wl(n),Tl(n,vl())?new Proxy(n,ps):n)}function Wt(n){if(n instanceof IDBRequest)return Al(n);if(is.has(n))return is.get(n);const t=Cl(n);return t!==n&&(is.set(n,t),Ls.set(t,n)),t}const os=n=>Ls.get(n);function Pl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),l=Wt(u);return r&&u.addEventListener("upgradeneeded",h=>{r(Wt(u.result),h.oldVersion,h.newVersion,Wt(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Vl=["get","getKey","getAll","getAllKeys","count"],bl=["put","add","delete","clear"],as=new Map;function yo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(as.get(t))return as.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=bl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Vl.includes(e)))return;const o=async function(u,...l){const h=this.transaction(u,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&h.done]))[0]};return as.set(t,o),o}Rl(n=>({...n,get:(t,e,r)=>yo(t,e)||n.get(t,e,r),has:(t,e)=>!!yo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Nl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Nl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gs="@firebase/app",Eo="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new Sa("@firebase/app"),kl="@firebase/app-compat",Ol="@firebase/analytics-compat",Ml="@firebase/analytics",xl="@firebase/app-check-compat",Ll="@firebase/app-check",Fl="@firebase/auth",Ul="@firebase/auth-compat",Bl="@firebase/database",jl="@firebase/data-connect",ql="@firebase/database-compat",$l="@firebase/functions",zl="@firebase/functions-compat",Gl="@firebase/installations",Hl="@firebase/installations-compat",Kl="@firebase/messaging",Wl="@firebase/messaging-compat",Ql="@firebase/performance",Xl="@firebase/performance-compat",Yl="@firebase/remote-config",Jl="@firebase/remote-config-compat",Zl="@firebase/storage",th="@firebase/storage-compat",eh="@firebase/firestore",nh="@firebase/ai",rh="@firebase/firestore-compat",sh="firebase",ih="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]",oh={[gs]:"fire-core",[kl]:"fire-core-compat",[Ml]:"fire-analytics",[Ol]:"fire-analytics-compat",[Ll]:"fire-app-check",[xl]:"fire-app-check-compat",[Fl]:"fire-auth",[Ul]:"fire-auth-compat",[Bl]:"fire-rtdb",[jl]:"fire-data-connect",[ql]:"fire-rtdb-compat",[$l]:"fire-fn",[zl]:"fire-fn-compat",[Gl]:"fire-iid",[Hl]:"fire-iid-compat",[Kl]:"fire-fcm",[Wl]:"fire-fcm-compat",[Ql]:"fire-perf",[Xl]:"fire-perf-compat",[Yl]:"fire-rc",[Jl]:"fire-rc-compat",[Zl]:"fire-gcs",[th]:"fire-gcs-compat",[eh]:"fire-fst",[rh]:"fire-fst-compat",[nh]:"fire-vertex","fire-js":"fire-js",[sh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new Map,ah=new Map,ys=new Map;function To(n,t){try{n.container.addComponent(t)}catch(e){Bt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ar(n){const t=n.name;if(ys.has(t))return Bt.debug(`There were multiple attempts to register component ${t}.`),!1;ys.set(t,n);for(const e of gn.values())To(e,n);for(const e of ah.values())To(e,n);return!0}function uh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ch(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new Ra("app","Firebase",lh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=ih;function dh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:_s,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Qt.create("bad-app-name",{appName:String(i)});if(e||(e=wa()),!e)throw Qt.create("no-options");const o=gn.get(i);if(o){if(or(e,o.options)&&or(r,o.config))return o;throw Qt.create("duplicate-app",{appName:i})}const u=new pl(i);for(const h of ys.values())u.addComponent(h);const l=new hh(e,r,u);return gn.set(i,l),l}function mh(n=_s){const t=gn.get(n);if(!t&&n===_s&&wa())return dh();if(!t)throw Qt.create("no-app",{appName:n});return t}function $m(){return Array.from(gn.values())}function Se(n,t,e){let r=oh[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const u=[`Unable to register library "${r}" with version "${t}":`];i&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&u.push("and"),o&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bt.warn(u.join(" "));return}ar(new pn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="firebase-heartbeat-database",gh=1,_n="firebase-heartbeat-store";let us=null;function Va(){return us||(us=Pl(ph,gh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(_n)}catch(e){console.warn(e)}}}}).catch(n=>{throw Qt.create("idb-open",{originalErrorMessage:n.message})})),us}async function _h(n){try{const e=(await Va()).transaction(_n),r=await e.objectStore(_n).get(ba(n));return await e.done,r}catch(t){if(t instanceof Le)Bt.warn(t.message);else{const e=Qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Bt.warn(e.message)}}}async function vo(n,t){try{const r=(await Va()).transaction(_n,"readwrite");await r.objectStore(_n).put(t,ba(n)),await r.done}catch(e){if(e instanceof Le)Bt.warn(e.message);else{const r=Qt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(r.message)}}}function ba(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=1024,Eh=30;class Th{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ih(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Io();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Eh){const u=Ah(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Io(),{heartbeatsToSend:r,unsentEntries:i}=vh(this._heartbeatsCache.heartbeats),o=ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Bt.warn(e),""}}}function Io(){return new Date().toISOString().substring(0,10)}function vh(n,t=yh){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Ao(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Ao(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ih{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return al()?ul().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await _h(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return vo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return vo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ao(n){return ir(JSON.stringify({version:2,heartbeats:n})).length}function Ah(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(n){ar(new pn("platform-logger",t=>new Dl(t),"PRIVATE")),ar(new pn("heartbeat",t=>new Th(t),"PRIVATE")),Se(gs,Eo,n),Se(gs,Eo,"esm2020"),Se("fire-js","")}wh("");var Rh="firebase",Sh="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Se(Rh,Sh,"app");var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,Da;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function g(){}g.prototype=m.prototype,T.D=m.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(y,E,A){for(var p=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)p[xt-2]=arguments[xt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=T.g[0],g=T.g[1],E=T.g[2];var A=T.g[3],p=m+(A^g&(E^A))+y[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=A+(E^m&(g^E))+y[1]+3905402710&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(g^A&(m^g))+y[2]+606105819&4294967295,E=A+(p<<17&4294967295|p>>>15),p=g+(m^E&(A^m))+y[3]+3250441966&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(A^g&(E^A))+y[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=A+(E^m&(g^E))+y[5]+1200080426&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(g^A&(m^g))+y[6]+2821735955&4294967295,E=A+(p<<17&4294967295|p>>>15),p=g+(m^E&(A^m))+y[7]+4249261313&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(A^g&(E^A))+y[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=A+(E^m&(g^E))+y[9]+2336552879&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(g^A&(m^g))+y[10]+4294925233&4294967295,E=A+(p<<17&4294967295|p>>>15),p=g+(m^E&(A^m))+y[11]+2304563134&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(A^g&(E^A))+y[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=A+(E^m&(g^E))+y[13]+4254626195&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(g^A&(m^g))+y[14]+2792965006&4294967295,E=A+(p<<17&4294967295|p>>>15),p=g+(m^E&(A^m))+y[15]+1236535329&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(E^A&(g^E))+y[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=A+(g^E&(m^g))+y[6]+3225465664&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(A^m))+y[11]+643717713&4294967295,E=A+(p<<14&4294967295|p>>>18),p=g+(A^m&(E^A))+y[0]+3921069994&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(g^E))+y[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=A+(g^E&(m^g))+y[10]+38016083&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(A^m))+y[15]+3634488961&4294967295,E=A+(p<<14&4294967295|p>>>18),p=g+(A^m&(E^A))+y[4]+3889429448&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(g^E))+y[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=A+(g^E&(m^g))+y[14]+3275163606&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(A^m))+y[3]+4107603335&4294967295,E=A+(p<<14&4294967295|p>>>18),p=g+(A^m&(E^A))+y[8]+1163531501&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(g^E))+y[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=A+(g^E&(m^g))+y[2]+4243563512&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(A^m))+y[7]+1735328473&4294967295,E=A+(p<<14&4294967295|p>>>18),p=g+(A^m&(E^A))+y[12]+2368359562&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(g^E^A)+y[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=A+(m^g^E)+y[8]+2272392833&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^g)+y[11]+1839030562&4294967295,E=A+(p<<16&4294967295|p>>>16),p=g+(E^A^m)+y[14]+4259657740&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^A)+y[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=A+(m^g^E)+y[4]+1272893353&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^g)+y[7]+4139469664&4294967295,E=A+(p<<16&4294967295|p>>>16),p=g+(E^A^m)+y[10]+3200236656&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^A)+y[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=A+(m^g^E)+y[0]+3936430074&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^g)+y[3]+3572445317&4294967295,E=A+(p<<16&4294967295|p>>>16),p=g+(E^A^m)+y[6]+76029189&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^A)+y[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=A+(m^g^E)+y[12]+3873151461&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^g)+y[15]+530742520&4294967295,E=A+(p<<16&4294967295|p>>>16),p=g+(E^A^m)+y[2]+3299628645&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(E^(g|~A))+y[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=A+(g^(m|~E))+y[7]+1126891415&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~g))+y[14]+2878612391&4294967295,E=A+(p<<15&4294967295|p>>>17),p=g+(A^(E|~m))+y[5]+4237533241&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~A))+y[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=A+(g^(m|~E))+y[3]+2399980690&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~g))+y[10]+4293915773&4294967295,E=A+(p<<15&4294967295|p>>>17),p=g+(A^(E|~m))+y[1]+2240044497&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~A))+y[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=A+(g^(m|~E))+y[15]+4264355552&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~g))+y[6]+2734768916&4294967295,E=A+(p<<15&4294967295|p>>>17),p=g+(A^(E|~m))+y[13]+1309151649&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~A))+y[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=A+(g^(m|~E))+y[11]+3174756917&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~g))+y[2]+718787259&4294967295,E=A+(p<<15&4294967295|p>>>17),p=g+(A^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var g=m-this.blockSize,y=this.B,E=this.h,A=0;A<m;){if(E==0)for(;A<=g;)i(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(y[E++]=T.charCodeAt(A++),E==this.blockSize){i(this,y),E=0;break}}else for(;A<m;)if(y[E++]=T[A++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var g=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=g&255,g/=256;for(this.u(T),T=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)T[g++]=this.g[m]>>>y&255;return T};function o(T,m){var g=l;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=m(T)}function u(T,m){this.h=m;for(var g=[],y=!0,E=T.length-1;0<=E;E--){var A=T[E]|0;y&&A==m||(g[E]=A,y=!1)}this.g=g}var l={};function h(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return v;if(0>T)return b(d(-T));for(var m=[],g=1,y=0;T>=g;y++)m[y]=T/g|0,g*=4294967296;return new u(m,0)}function _(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return b(_(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),y=v,E=0;E<T.length;E+=8){var A=Math.min(8,T.length-E),p=parseInt(T.substring(E,E+A),m);8>A?(A=d(Math.pow(m,A)),y=y.j(A).add(d(p))):(y=y.j(g),y=y.add(d(p)))}return y}var v=h(0),w=h(1),P=h(16777216);n=u.prototype,n.m=function(){if(k(this))return-b(this).m();for(var T=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(k(this))return"-"+b(this).toString(T);for(var m=d(Math.pow(T,6)),g=this,y="";;){var E=et(g,m).g;g=G(g,E.j(m));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=E,D(g))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=G(this,T),k(T)?-1:D(T)?0:1};function b(T){for(var m=T.g.length,g=[],y=0;y<m;y++)g[y]=~T.g[y];return new u(g,~T.h).add(w)}n.abs=function(){return k(this)?b(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0,E=0;E<=m;E++){var A=y+(this.i(E)&65535)+(T.i(E)&65535),p=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=p>>>16,A&=65535,p&=65535,g[E]=p<<16|A}return new u(g,g[g.length-1]&-2147483648?-1:0)};function G(T,m){return T.add(b(m))}n.j=function(T){if(D(this)||D(T))return v;if(k(this))return k(T)?b(this).j(b(T)):b(b(this).j(T));if(k(T))return b(this.j(b(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var A=this.i(y)>>>16,p=this.i(y)&65535,xt=T.i(E)>>>16,qe=T.i(E)&65535;g[2*y+2*E]+=p*qe,U(g,2*y+2*E),g[2*y+2*E+1]+=A*qe,U(g,2*y+2*E+1),g[2*y+2*E+1]+=p*xt,U(g,2*y+2*E+1),g[2*y+2*E+2]+=A*xt,U(g,2*y+2*E+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new u(g,0)};function U(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function z(T,m){this.g=T,this.h=m}function et(T,m){if(D(m))throw Error("division by zero");if(D(T))return new z(v,v);if(k(T))return m=et(b(T),m),new z(b(m.g),b(m.h));if(k(m))return m=et(T,b(m)),new z(b(m.g),m.h);if(30<T.g.length){if(k(T)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var g=w,y=m;0>=y.l(T);)g=Mt(g),y=Mt(y);var E=ut(g,1),A=ut(y,1);for(y=ut(y,2),g=ut(g,2);!D(y);){var p=A.add(y);0>=p.l(T)&&(E=E.add(g),A=p),y=ut(y,1),g=ut(g,1)}return m=G(T,E.j(m)),new z(E,m)}for(E=v;0<=T.l(m);){for(g=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=d(g),p=A.j(m);k(p)||0<p.l(T);)g-=y,A=d(g),p=A.j(m);D(A)&&(A=w),E=E.add(A),T=G(T,p)}return new z(E,T)}n.A=function(T){return et(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&T.i(y);return new u(g,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|T.i(y);return new u(g,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^T.i(y);return new u(g,this.h^T.h)};function Mt(T){for(var m=T.g.length+1,g=[],y=0;y<m;y++)g[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(g,T.h)}function ut(T,m){var g=m>>5;m%=32;for(var y=T.g.length-g,E=[],A=0;A<y;A++)E[A]=0<m?T.i(A+g)>>>m|T.i(A+g+1)<<32-m:T.i(A+g);return new u(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Da=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=_,Xt=u}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});var Wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Na,on,ka,Zn,Es,Oa,Ma,xa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wn=="object"&&Wn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in c))break t;c=c[I]}s=s[s.length-1],f=c[s],a=a(f),a!=f&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,f=!1,I={next:function(){if(!f&&c<s.length){var R=c++;return{value:a(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,c){return s.call.apply(s.bind,arguments)}function v(s,a,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function w(s,a,c){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:v,w.apply(null,arguments)}function P(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function D(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,I,R){for(var V=Array(arguments.length-2),W=2;W<arguments.length;W++)V[W-2]=arguments[W];return a.prototype[I].apply(f,V)}}function k(s){const a=s.length;if(0<a){const c=Array(a);for(let f=0;f<a;f++)c[f]=s[f];return c}return[]}function b(s,a){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const I=s.length||0,R=f.length||0;s.length=I+R;for(let V=0;V<R;V++)s[I+V]=f[V]}else s.push(f)}}class G{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function U(s){return/^[\s\xa0]*$/.test(s)}function z(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function et(s){return et[" "](s),s}et[" "]=function(){};var Mt=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ut(s,a,c){for(const f in s)a.call(c,s[f],f,s)}function T(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function m(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(c in f)s[c]=f[c];for(let R=0;R<g.length;R++)c=g[R],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function E(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function A(s){l.setTimeout(()=>{throw s},0)}function p(){var s=Mr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class xt{constructor(){this.h=this.g=null}add(a,c){const f=qe.get();f.set(a,c),this.h?this.h.next=f:this.g=f,this.h=f}}var qe=new G(()=>new oc,s=>s.reset());class oc{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,ze=!1,Mr=new xt,fi=()=>{const s=l.Promise.resolve(void 0);$e=()=>{s.then(ac)}};var ac=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(c){A(c)}var a=qe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}ze=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var uc=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s})();function Ge(s,a){if(dt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Mt){t:{try{et(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:cc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ge.aa.h.call(this)}}D(Ge,dt);var cc={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Vn="closure_listenable_"+(1e6*Math.random()|0),lc=0;function hc(s,a,c,f,I){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!f,this.ha=I,this.key=++lc,this.da=this.fa=!1}function bn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Dn(s){this.src=s,this.g={},this.h=0}Dn.prototype.add=function(s,a,c,f,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var V=Lr(s,a,f,I);return-1<V?(a=s[V],c||(a.fa=!1)):(a=new hc(a,this.src,R,!!f,I),a.fa=c,s.push(a)),a};function xr(s,a){var c=a.type;if(c in s.g){var f=s.g[c],I=Array.prototype.indexOf.call(f,a,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(bn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Lr(s,a,c,f){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==a&&R.capture==!!c&&R.ha==f)return I}return-1}var Fr="closure_lm_"+(1e6*Math.random()|0),Ur={};function di(s,a,c,f,I){if(Array.isArray(a)){for(var R=0;R<a.length;R++)di(s,a[R],c,f,I);return null}return c=gi(c),s&&s[Vn]?s.K(a,c,d(f)?!!f.capture:!1,I):fc(s,a,c,!1,f,I)}function fc(s,a,c,f,I,R){if(!a)throw Error("Invalid event type");var V=d(I)?!!I.capture:!!I,W=jr(s);if(W||(s[Fr]=W=new Dn(s)),c=W.add(a,c,f,V,R),c.proxy)return c;if(f=dc(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)uc||(I=V),I===void 0&&(I=!1),s.addEventListener(a.toString(),f,I);else if(s.attachEvent)s.attachEvent(pi(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function dc(){function s(c){return a.call(s.src,s.listener,c)}const a=mc;return s}function mi(s,a,c,f,I){if(Array.isArray(a))for(var R=0;R<a.length;R++)mi(s,a[R],c,f,I);else f=d(f)?!!f.capture:!!f,c=gi(c),s&&s[Vn]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],c=Lr(R,c,f,I),-1<c&&(bn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=jr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Lr(a,c,f,I)),(c=-1<s?a[s]:null)&&Br(c))}function Br(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Vn])xr(a.i,s);else{var c=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(c,f,s.capture):a.detachEvent?a.detachEvent(pi(c),f):a.addListener&&a.removeListener&&a.removeListener(f),(c=jr(a))?(xr(c,s),c.h==0&&(c.src=null,a[Fr]=null)):bn(s)}}}function pi(s){return s in Ur?Ur[s]:Ur[s]="on"+s}function mc(s,a){if(s.da)s=!0;else{a=new Ge(a,this);var c=s.listener,f=s.ha||s.src;s.fa&&Br(s),s=c.call(f,a)}return s}function jr(s){return s=s[Fr],s instanceof Dn?s:null}var qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function gi(s){return typeof s=="function"?s:(s[qr]||(s[qr]=function(a){return s.handleEvent(a)}),s[qr])}function mt(){$t.call(this),this.i=new Dn(this),this.M=this,this.F=null}D(mt,$t),mt.prototype[Vn]=!0,mt.prototype.removeEventListener=function(s,a,c,f){mi(this,s,a,c,f)};function Tt(s,a){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new dt(a,s);else if(a instanceof dt)a.target=a.target||s;else{var I=a;a=new dt(f,s),y(a,I)}if(I=!0,c)for(var R=c.length-1;0<=R;R--){var V=a.g=c[R];I=Nn(V,f,!0,a)&&I}if(V=a.g=s,I=Nn(V,f,!0,a)&&I,I=Nn(V,f,!1,a)&&I,c)for(R=0;R<c.length;R++)V=a.g=c[R],I=Nn(V,f,!1,a)&&I}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],f=0;f<c.length;f++)bn(c[f]);delete s.g[a],s.h--}}this.F=null},mt.prototype.K=function(s,a,c,f){return this.i.add(String(s),a,!1,c,f)},mt.prototype.L=function(s,a,c,f){return this.i.add(String(s),a,!0,c,f)};function Nn(s,a,c,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,R=0;R<a.length;++R){var V=a[R];if(V&&!V.da&&V.capture==c){var W=V.listener,ct=V.ha||V.src;V.fa&&xr(s.i,V),I=W.call(ct,f)!==!1&&I}}return I&&!f.defaultPrevented}function _i(s,a,c){if(typeof s=="function")c&&(s=w(s,c));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(s,a||0)}function yi(s){s.g=_i(()=>{s.g=null,s.i&&(s.i=!1,yi(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class pc extends $t{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:yi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(s){$t.call(this),this.h=s,this.g={}}D(He,$t);var Ei=[];function Ti(s){ut(s.g,function(a,c){this.g.hasOwnProperty(c)&&Br(a)},s),s.g={}}He.prototype.N=function(){He.aa.N.call(this),Ti(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=l.JSON.stringify,gc=l.JSON.parse,_c=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function zr(){}zr.prototype.h=null;function vi(s){return s.h||(s.h=s.i())}function Ii(){}var Ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gr(){dt.call(this,"d")}D(Gr,dt);function Hr(){dt.call(this,"c")}D(Hr,dt);var se={},Ai=null;function kn(){return Ai=Ai||new mt}se.La="serverreachability";function wi(s){dt.call(this,se.La,s)}D(wi,dt);function We(s){const a=kn();Tt(a,new wi(a))}se.STAT_EVENT="statevent";function Ri(s,a){dt.call(this,se.STAT_EVENT,s),this.stat=a}D(Ri,dt);function vt(s){const a=kn();Tt(a,new Ri(a,s))}se.Ma="timingevent";function Si(s,a){dt.call(this,se.Ma,s),this.size=a}D(Si,dt);function Qe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function Xe(){this.g=!0}Xe.prototype.xa=function(){this.g=!1};function yc(s,a,c,f,I,R){s.info(function(){if(s.g)if(R)for(var V="",W=R.split("&"),ct=0;ct<W.length;ct++){var H=W[ct].split("=");if(1<H.length){var pt=H[0];H=H[1];var gt=pt.split("_");V=2<=gt.length&&gt[1]=="type"?V+(pt+"="+H+"&"):V+(pt+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+a+`
`+c+`
`+V})}function Ec(s,a,c,f,I,R,V){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+a+`
`+c+`
`+R+" "+V})}function ye(s,a,c,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+vc(s,c)+(f?" "+f:"")})}function Tc(s,a){s.info(function(){return"TIMEOUT: "+a})}Xe.prototype.info=function(){};function vc(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<I.length;V++)I[V]=""}}}}return $r(c)}catch{return a}}var On={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ci={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kr;function Mn(){}D(Mn,zr),Mn.prototype.g=function(){return new XMLHttpRequest},Mn.prototype.i=function(){return{}},Kr=new Mn;function zt(s,a,c,f){this.j=s,this.i=a,this.l=c,this.R=f||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pi}function Pi(){this.i=null,this.g="",this.h=!1}var Vi={},Wr={};function Qr(s,a,c){s.L=1,s.v=Un(Lt(a)),s.m=c,s.P=!0,bi(s,null)}function bi(s,a){s.F=Date.now(),xn(s),s.A=Lt(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),zi(c.i,"t",f),s.C=0,c=s.j.J,s.h=new Pi,s.g=uo(s.j,c?a:null,!s.m),0<s.O&&(s.M=new pc(w(s.Y,s,s.g),s.O)),a=s.U,c=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Ei[0]=I.toString()),I=Ei);for(var R=0;R<I.length;R++){var V=di(c,I[R],f||a.handleEvent,!1,a.h||a);if(!V)break;a.g[V.key]=V}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),We(),yc(s.i,s.u,s.A,s.l,s.R,s.m)}zt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ft(s)==3?a.j():this.Y(s)},zt.prototype.Y=function(s){try{if(s==this.g)t:{const gt=Ft(this.g);var a=this.g.Ba();const ve=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Yi(this.g)))){this.J||gt!=4||a==7||(a==8||0>=ve?We(3):We(2)),Xr(this);var c=this.g.Z();this.X=c;e:if(Di(this)){var f=Yi(this.g);s="";var I=f.length,R=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),Ye(this);var V="";break e}this.h.i=new l.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(R&&a==I-1)});f.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=c==200,Ec(this.i,this.u,this.A,this.l,this.R,gt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ct=this.g;if((W=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(W)){var H=W;break e}}H=null}if(c=H)ye(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yr(this,c);else{this.o=!1,this.s=3,vt(12),ie(this),Ye(this);break t}}if(this.P){c=!0;let St;for(;!this.J&&this.C<V.length;)if(St=Ic(this,V),St==Wr){gt==4&&(this.s=4,vt(14),c=!1),ye(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Vi){this.s=4,vt(15),ye(this.i,this.l,V,"[Invalid Chunk]"),c=!1;break}else ye(this.i,this.l,St,null),Yr(this,St);if(Di(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||V.length!=0||this.h.h||(this.s=1,vt(16),c=!1),this.o=this.o&&c,!c)ye(this.i,this.l,V,"[Invalid Chunked Response]"),ie(this),Ye(this);else if(0<V.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),rs(pt),pt.M=!0,vt(11))}}else ye(this.i,this.l,V,null),Yr(this,V);gt==4&&ie(this),this.o&&!this.J&&(gt==4?so(this.j,this):(this.o=!1,xn(this)))}else Uc(this.g),c==400&&0<V.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ie(this),Ye(this)}}}catch{}finally{}};function Di(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Ic(s,a){var c=s.C,f=a.indexOf(`
`,c);return f==-1?Wr:(c=Number(a.substring(c,f)),isNaN(c)?Vi:(f+=1,f+c>a.length?Wr:(a=a.slice(f,f+c),s.C=f+c,a)))}zt.prototype.cancel=function(){this.J=!0,ie(this)};function xn(s){s.S=Date.now()+s.I,Ni(s,s.I)}function Ni(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Qe(w(s.ba,s),a)}function Xr(s){s.B&&(l.clearTimeout(s.B),s.B=null)}zt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Tc(this.i,this.A),this.L!=2&&(We(),vt(17)),ie(this),this.s=2,Ye(this)):Ni(this,this.S-s)};function Ye(s){s.j.G==0||s.J||so(s.j,s)}function ie(s){Xr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ti(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Yr(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Jr(c.h,s))){if(!s.K&&Jr(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Gn(c),$n(c);else break t;ns(c),vt(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=Qe(w(c.Za,c),6e3));if(1>=Mi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ae(c,11)}else if((s.K||c.g==s)&&Gn(c),!U(a))for(I=c.Da.g.parse(a),a=0;a<I.length;a++){let H=I[a];if(c.T=H[0],H=H[1],c.G==2)if(H[0]=="c"){c.K=H[1],c.ia=H[2];const pt=H[3];pt!=null&&(c.la=pt,c.j.info("VER="+c.la));const gt=H[4];gt!=null&&(c.Aa=gt,c.j.info("SVER="+c.Aa));const ve=H[5];ve!=null&&typeof ve=="number"&&0<ve&&(f=1.5*ve,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const St=s.g;if(St){const Kn=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kn){var R=f.h;R.g||Kn.indexOf("spdy")==-1&&Kn.indexOf("quic")==-1&&Kn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Zr(R,R.h),R.h=null))}if(f.D){const ss=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;ss&&(f.ya=ss,Q(f.I,f.D,ss))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var V=s;if(f.qa=ao(f,f.J?f.ia:null,f.W),V.K){xi(f.h,V);var W=V,ct=f.L;ct&&(W.I=ct),W.B&&(Xr(W),xn(W)),f.g=V}else no(f);0<c.i.length&&zn(c)}else H[0]!="stop"&&H[0]!="close"||ae(c,7);else c.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ae(c,7):es(c):H[0]!="noop"&&c.l&&c.l.ta(H),c.v=0)}}We(4)}catch{}}var Ac=class{constructor(s,a){this.g=s,this.map=a}};function ki(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Mi(s){return s.h?1:s.g?s.g.size:0}function Jr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Zr(s,a){s.g?s.g.add(a):s.h=a}function xi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ki.prototype.cancel=function(){if(this.i=Li(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Li(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return k(s.i)}function wc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,f=0;f<c;f++)a.push(s[f]);return a}a=[],c=0;for(f in s)a[c++]=s[f];return a}function Rc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const f in s)a[c++]=f;return a}}}function Fi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Rc(s),f=wc(s),I=f.length,R=0;R<I;R++)a.call(void 0,f[R],c&&c[R],s)}var Ui=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sc(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),I=null;if(0<=f){var R=s[c].substring(0,f);I=s[c].substring(f+1)}else R=s[c];a(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function oe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof oe){this.h=s.h,Ln(this,s.j),this.o=s.o,this.g=s.g,Fn(this,s.s),this.l=s.l;var a=s.i,c=new tn;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),Bi(this,c),this.m=s.m}else s&&(a=String(s).match(Ui))?(this.h=!1,Ln(this,a[1]||"",!0),this.o=Je(a[2]||""),this.g=Je(a[3]||"",!0),Fn(this,a[4]),this.l=Je(a[5]||"",!0),Bi(this,a[6]||"",!0),this.m=Je(a[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}oe.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ze(a,ji,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ze(a,ji,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Ze(c,c.charAt(0)=="/"?Vc:Pc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Ze(c,Dc)),s.join("")};function Lt(s){return new oe(s)}function Ln(s,a,c){s.j=c?Je(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Fn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Bi(s,a,c){a instanceof tn?(s.i=a,Nc(s.i,s.h)):(c||(a=Ze(a,bc)),s.i=new tn(a,s.h))}function Q(s,a,c){s.i.set(a,c)}function Un(s){return Q(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Je(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ze(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Cc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Cc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ji=/[#\/\?@]/g,Pc=/[#\?:]/g,Vc=/[#\?]/g,bc=/[#\?@]/g,Dc=/#/g;function tn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Gt(s){s.g||(s.g=new Map,s.h=0,s.i&&Sc(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=tn.prototype,n.add=function(s,a){Gt(this),this.i=null,s=Ee(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function qi(s,a){Gt(s),a=Ee(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function $i(s,a){return Gt(s),a=Ee(s,a),s.g.has(a)}n.forEach=function(s,a){Gt(this),this.g.forEach(function(c,f){c.forEach(function(I){s.call(a,I,f,this)},this)},this)},n.na=function(){Gt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let f=0;f<a.length;f++){const I=s[f];for(let R=0;R<I.length;R++)c.push(a[f])}return c},n.V=function(s){Gt(this);let a=[];if(typeof s=="string")$i(this,s)&&(a=a.concat(this.g.get(Ee(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return Gt(this),this.i=null,s=Ee(this,s),$i(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function zi(s,a,c){qi(s,a),0<c.length&&(s.i=null,s.g.set(Ee(s,a),k(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var f=a[c];const R=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var I=R;V[f]!==""&&(I+="="+encodeURIComponent(String(V[f]))),s.push(I)}}return this.i=s.join("&")};function Ee(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Nc(s,a){a&&!s.j&&(Gt(s),s.i=null,s.g.forEach(function(c,f){var I=f.toLowerCase();f!=I&&(qi(this,f),zi(this,I,c))},s)),s.j=a}function kc(s,a){const c=new Xe;if(l.Image){const f=new Image;f.onload=P(Ht,c,"TestLoadImage: loaded",!0,a,f),f.onerror=P(Ht,c,"TestLoadImage: error",!1,a,f),f.onabort=P(Ht,c,"TestLoadImage: abort",!1,a,f),f.ontimeout=P(Ht,c,"TestLoadImage: timeout",!1,a,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function Oc(s,a){const c=new Xe,f=new AbortController,I=setTimeout(()=>{f.abort(),Ht(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?Ht(c,"TestPingServer: ok",!0,a):Ht(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Ht(c,"TestPingServer: error",!1,a)})}function Ht(s,a,c,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(c)}catch{}}function Mc(){this.g=new _c}function xc(s,a,c){const f=c||"";try{Fi(s,function(I,R){let V=I;d(I)&&(V=$r(I)),a.push(f+R+"="+encodeURIComponent(V))})}catch(I){throw a.push(f+"type="+encodeURIComponent("_badmap")),I}}function Bn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Bn,zr),Bn.prototype.g=function(){return new jn(this.l,this.j)},Bn.prototype.i=(function(s){return function(){return s}})({});function jn(s,a){mt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(jn,mt),n=jn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,nn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?en(this):nn(this),this.readyState==3&&Gi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,en(this))},n.Qa=function(s){this.g&&(this.response=s,en(this))},n.ga=function(){this.g&&en(this)};function en(s){s.readyState=4,s.l=null,s.j=null,s.v=null,nn(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function nn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Hi(s){let a="";return ut(s,function(c,f){a+=f,a+=":",a+=c,a+=`\r
`}),a}function ts(s,a,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=Hi(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Q(s,a,c))}function Z(s){mt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Z,mt);var Lc=/^https?$/i,Fc=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kr.g(),this.v=this.o?vi(this.o):vi(Kr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){Ki(this,R);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)c.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),I=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Fc,a,void 0))||f||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of c)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xi(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Ki(this,R)}};function Ki(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Wi(s),qn(s)}function Wi(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Qi(this):this.bb())},n.bb=function(){Qi(this)};function Qi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Ft(s)!=4||s.Z()!=2)){if(s.u&&Ft(s)==4)_i(s.Ea,0,s);else if(Tt(s,"readystatechange"),Ft(s)==4){s.h=!1;try{const V=s.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var f;if(f=V===0){var I=String(s.D).match(Ui)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),f=!Lc.test(I?I.toLowerCase():"")}c=f}if(c)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var R=2<Ft(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Wi(s)}}finally{qn(s)}}}}function qn(s,a){if(s.g){Xi(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Tt(s,"ready");try{c.onreadystatechange=f}catch{}}}function Xi(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ft(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),gc(a)}};function Yi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Uc(s){const a={};s=(s.g&&2<=Ft(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(U(s[f]))continue;var c=E(s[f]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=a[I]||[];a[I]=R,R.push(c)}T(a,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rn(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Ji(s){this.Aa=0,this.i=[],this.j=new Xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rn("baseRetryDelayMs",5e3,s),this.cb=rn("retryDelaySeedMs",1e4,s),this.Wa=rn("forwardChannelMaxRetries",2,s),this.wa=rn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ki(s&&s.concurrentRequestLimit),this.Da=new Mc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ji.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,f){vt(0),this.W=s,this.H=a||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=ao(this,null,this.W),zn(this)};function es(s){if(Zi(s),s.G==3){var a=s.U++,c=Lt(s.I);if(Q(c,"SID",s.K),Q(c,"RID",a),Q(c,"TYPE","terminate"),sn(s,c),a=new zt(s,s.j,a),a.L=2,a.v=Un(Lt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.v,c=!0),c||(a.g=uo(a.j,null),a.g.ea(a.v)),a.F=Date.now(),xn(a)}oo(s)}function $n(s){s.g&&(rs(s),s.g.cancel(),s.g=null)}function Zi(s){$n(s),s.u&&(l.clearTimeout(s.u),s.u=null),Gn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function zn(s){if(!Oi(s.h)&&!s.s){s.s=!0;var a=s.Ga;$e||fi(),ze||($e(),ze=!0),Mr.add(a,s),s.B=0}}function Bc(s,a){return Mi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Qe(w(s.Ga,s,a),io(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new zt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=eo(this,I,a),c=Lt(this.I),Q(c,"RID",s),Q(c,"CVER",22),this.D&&Q(c,"X-HTTP-Session-Id",this.D),sn(this,c),R&&(this.O?a="headers="+encodeURIComponent(String(Hi(R)))+"&"+a:this.m&&ts(c,this.m,R)),Zr(this.h,I),this.Ua&&Q(c,"TYPE","init"),this.P?(Q(c,"$req",a),Q(c,"SID","null"),I.T=!0,Qr(I,c,null)):Qr(I,c,a),this.G=2}}else this.G==3&&(s?to(this,s):this.i.length==0||Oi(this.h)||to(this))};function to(s,a){var c;a?c=a.l:c=s.U++;const f=Lt(s.I);Q(f,"SID",s.K),Q(f,"RID",c),Q(f,"AID",s.T),sn(s,f),s.m&&s.o&&ts(f,s.m,s.o),c=new zt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=eo(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Zr(s.h,c),Qr(c,f,a)}function sn(s,a){s.H&&ut(s.H,function(c,f){Q(a,f,c)}),s.l&&Fi({},function(c,f){Q(a,f,c)})}function eo(s,a,c){c=Math.min(s.i.length,c);var f=s.l?w(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const V=["count="+c];R==-1?0<c?(R=I[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let W=!0;for(let ct=0;ct<c;ct++){let H=I[ct].g;const pt=I[ct].map;if(H-=R,0>H)R=Math.max(0,I[ct].g-100),W=!1;else try{xc(pt,V,"req"+H+"_")}catch{f&&f(pt)}}if(W){f=V.join("&");break t}}}return s=s.i.splice(0,c),a.D=s,f}function no(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;$e||fi(),ze||($e(),ze=!0),Mr.add(a,s),s.v=0}}function ns(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Qe(w(s.Fa,s),io(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,ro(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Qe(w(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),$n(this),ro(this))};function rs(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function ro(s){s.g=new zt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Lt(s.qa);Q(a,"RID","rpc"),Q(a,"SID",s.K),Q(a,"AID",s.T),Q(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Q(a,"TO",s.ja),Q(a,"TYPE","xmlhttp"),sn(s,a),s.m&&s.o&&ts(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Un(Lt(a)),c.m=null,c.P=!0,bi(c,s)}n.Za=function(){this.C!=null&&(this.C=null,$n(this),ns(this),vt(19))};function Gn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function so(s,a){var c=null;if(s.g==a){Gn(s),rs(s),s.g=null;var f=2}else if(Jr(s.h,a))c=a.D,xi(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;f=kn(),Tt(f,new Si(f,c)),zn(s)}else no(s);else if(I=a.s,I==3||I==0&&0<a.X||!(f==1&&Bc(s,a)||f==2&&ns(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),I){case 1:ae(s,5);break;case 4:ae(s,10);break;case 3:ae(s,6);break;default:ae(s,2)}}}function io(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function ae(s,a){if(s.j.info("Error code "+a),a==2){var c=w(s.fb,s),f=s.Xa;const I=!f;f=new oe(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ln(f,"https"),Un(f),I?kc(f.toString(),c):Oc(f.toString(),c)}else vt(2);s.G=0,s.l&&s.l.sa(a),oo(s),Zi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function oo(s){if(s.G=0,s.ka=[],s.l){const a=Li(s.h);(a.length!=0||s.i.length!=0)&&(b(s.ka,a),b(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function ao(s,a,c){var f=c instanceof oe?Lt(c):new oe(c);if(f.g!="")a&&(f.g=a+"."+f.g),Fn(f,f.s);else{var I=l.location;f=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var R=new oe(null);f&&Ln(R,f),a&&(R.g=a),I&&Fn(R,I),c&&(R.l=c),f=R}return c=s.D,a=s.ya,c&&a&&Q(f,c,a),Q(f,"VER",s.la),sn(s,f),f}function uo(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Z(new Bn({eb:c})):new Z(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function co(){}n=co.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hn(){}Hn.prototype.g=function(s,a){return new At(s,a)};function At(s,a){mt.call(this),this.g=new Ji(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!U(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!U(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Te(this)}D(At,mt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){es(this.g)},At.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=$r(s),s=c);a.i.push(new Ac(a.Ya++,s)),a.G==3&&zn(a)},At.prototype.N=function(){this.g.l=null,delete this.j,es(this.g),delete this.g,At.aa.N.call(this)};function lo(s){Gr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D(lo,Gr);function ho(){Hr.call(this),this.status=1}D(ho,Hr);function Te(s){this.g=s}D(Te,co),Te.prototype.ua=function(){Tt(this.g,"a")},Te.prototype.ta=function(s){Tt(this.g,new lo(s))},Te.prototype.sa=function(s){Tt(this.g,new ho)},Te.prototype.ra=function(){Tt(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,xa=function(){return new Hn},Ma=function(){return kn()},Oa=se,Es={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},On.NO_ERROR=0,On.TIMEOUT=8,On.HTTP_ERROR=6,Zn=On,Ci.COMPLETE="complete",ka=Ci,Ii.EventType=Ke,Ke.OPEN="a",Ke.CLOSE="b",Ke.ERROR="c",Ke.MESSAGE="d",mt.prototype.listen=mt.prototype.K,on=Ii,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Na=Z}).apply(typeof Wn<"u"?Wn:typeof self<"u"?self:typeof window<"u"?window:{});const Ro="@firebase/firestore",So="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fe="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new Sa("@firebase/firestore");function Ie(){return fe.logLevel}function N(n,...t){if(fe.logLevel<=$.DEBUG){const e=t.map(Fs);fe.debug(`Firestore (${Fe}): ${n}`,...e)}}function jt(n,...t){if(fe.logLevel<=$.ERROR){const e=t.map(Fs);fe.error(`Firestore (${Fe}): ${n}`,...e)}}function De(n,...t){if(fe.logLevel<=$.WARN){const e=t.map(Fs);fe.warn(`Firestore (${Fe}): ${n}`,...e)}}function Fs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,La(n,r,e)}function La(n,t,e){let r=`FIRESTORE (${Fe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw jt(r),new Error(r)}function K(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||La(t,i,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Le{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ch{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(yt.UNAUTHENTICATED)))}shutdown(){}}class Ph{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Vh{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new le;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new le,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new le)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new Fa(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class bh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Dh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new bh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Co{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ch(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Co(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Co(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=kh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Ts(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return cs(i)===cs(o)?B(i,o):cs(i)?1:-1}return B(n.length,t.length)}const Oh=55296,Mh=57343;function cs(n){const t=n.charCodeAt(0);return t>=Oh&&t<=Mh}function Ne(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="__name__";class Pt{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&x(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Pt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=Pt.isNumericId(t),i=Pt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):Ts(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xt.fromString(t.substring(4,t.length-2))}}class X extends Pt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const xh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Pt{construct(t,e,r){return new ht(t,e,r)}static isValidIdentifier(t){return xh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Po}static keyField(){return new ht([Po])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(u=!u,i++):l!=="."||u?(r+=l,i++):(o(),i++)}if(o(),u)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n,t,e){if(!e)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Lh(n,t,e,r){if(t===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Vo(n){if(!M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bo(n){if(M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ba(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Bs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function Ce(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Bs(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n,t){const e={typeString:n};return t&&(e.value=t),e}function wn(n,t){if(!Ba(n))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const u=n[r];if(i&&typeof u!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new O(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=-62135596800,No=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*No);return new Y(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Do)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/No}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(wn(t,Y._jsonSchema))return new Y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Do;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:rt("string",Y._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new Y(0,0))}static max(){return new L(new Y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=-1;function Fh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new Y(e+1,0):new Y(e,r));return new Jt(i,M.empty(),t)}function Uh(n){return new Jt(n.readTime,n.key,yn)}class Jt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Jt(L.min(),M.empty(),yn)}static max(){return new Jt(L.max(),M.empty(),yn)}}function Bh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==jh)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let i=0,o=0,u=!1;t.forEach((l=>{++i,l.next((()=>{++o,u&&o===i&&e()}),(h=>r(h)))})),u=!0,o===i&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((i=>i?S.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,i)=>{const o=t.length,u=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((_=>{u[d]=_,++l,l===o&&r(u)}),(_=>i(_)))}}))}static doWhile(t,e){return new S(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function $h(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Be(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}vr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=-1;function Ir(n){return n==null}function ur(n){return n===0&&1/n==-1/0}function zh(n){return typeof n=="number"&&Number.isInteger(n)&&!ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="";function Gh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ko(t)),t=Hh(n.get(e),t);return ko(t)}function Hh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case ja:e+="";break;default:e+=o}}return e}function ko(n){return n+ja+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function me(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function qa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qn(this.root,t,this.comparator,!0)}}class Qn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new lt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mo(this.data.getIterator())}getIteratorFrom(t){return new Mo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class Mo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new ot(ht.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new $a("Invalid base64 string: "+o):o}})(t);return new ft(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Kh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=Kh.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function te(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="server_timestamp",Ga="__type__",Ha="__previous_value__",Ka="__local_write_time__";function qs(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Ga])==null?void 0:r.stringValue)===za}function Ar(n){const t=n.mapValue.fields[Ha];return qs(t)?Ar(t):t}function En(n){const t=Zt(n.mapValue.fields[Ka].timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e,r,i,o,u,l,h,d,_){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=_}}const cr="(default)";class Tn{constructor(t,e){this.projectId=t,this.database=e||cr}static empty(){return new Tn("","")}get isDefaultDatabase(){return this.database===cr}isEqual(t){return t instanceof Tn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="__type__",Qh="__max__",Xn={mapValue:{}},Qa="__vector__",lr="value";function ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qs(n)?4:Yh(n)?9007199254740991:Xh(n)?10:11:x(28295,{value:n})}function kt(n,t){if(n===t)return!0;const e=ee(n);if(e!==ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return En(n).isEqual(En(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Zt(i.timestampValue),l=Zt(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return te(i.bytesValue).isEqual(te(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=tt(i.doubleValue),l=tt(o.doubleValue);return u===l?ur(u)===ur(l):isNaN(u)&&isNaN(l)}return!1})(n,t);case 9:return Ne(n.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Oo(u)!==Oo(l))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(l[h]===void 0||!kt(u[h],l[h])))return!1;return!0})(n,t);default:return x(52216,{left:n})}}function vn(n,t){return(n.values||[]).find((e=>kt(e,t)))!==void 0}function ke(n,t){if(n===t)return 0;const e=ee(n),r=ee(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return(function(o,u){const l=tt(o.integerValue||o.doubleValue),h=tt(u.integerValue||u.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return xo(n.timestampValue,t.timestampValue);case 4:return xo(En(n),En(t));case 5:return Ts(n.stringValue,t.stringValue);case 6:return(function(o,u){const l=te(o),h=te(u);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,u){const l=o.split("/"),h=u.split("/");for(let d=0;d<l.length&&d<h.length;d++){const _=B(l[d],h[d]);if(_!==0)return _}return B(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,u){const l=B(tt(o.latitude),tt(u.latitude));return l!==0?l:B(tt(o.longitude),tt(u.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Lo(n.arrayValue,t.arrayValue);case 10:return(function(o,u){var w,P,D,k;const l=o.fields||{},h=u.fields||{},d=(w=l[lr])==null?void 0:w.arrayValue,_=(P=h[lr])==null?void 0:P.arrayValue,v=B(((D=d==null?void 0:d.values)==null?void 0:D.length)||0,((k=_==null?void 0:_.values)==null?void 0:k.length)||0);return v!==0?v:Lo(d,_)})(n.mapValue,t.mapValue);case 11:return(function(o,u){if(o===Xn.mapValue&&u===Xn.mapValue)return 0;if(o===Xn.mapValue)return 1;if(u===Xn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=u.fields||{},_=Object.keys(d);h.sort(),_.sort();for(let v=0;v<h.length&&v<_.length;++v){const w=Ts(h[v],_[v]);if(w!==0)return w;const P=ke(l[h[v]],d[_[v]]);if(P!==0)return P}return B(h.length,_.length)})(n.mapValue,t.mapValue);default:throw x(23264,{he:e})}}function xo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=Zt(n),r=Zt(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function Lo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=ke(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function Oe(n){return vs(n)}function vs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Zt(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return te(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return M.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=vs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${vs(e.fields[u])}`;return i+"}"})(n.mapValue):x(61005,{value:n})}function tr(n){switch(ee(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ar(n);return t?16+tr(t):16;case 5:return 2*n.stringValue.length;case 6:return te(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+tr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return me(r.fields,((o,u)=>{i+=o.length+tr(u)})),i})(n.mapValue);default:throw x(13486,{value:n})}}function Is(n){return!!n&&"integerValue"in n}function $s(n){return!!n&&"arrayValue"in n}function Fo(n){return!!n&&"nullValue"in n}function Uo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function er(n){return!!n&&"mapValue"in n}function Xh(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Wa])==null?void 0:r.stringValue)===Qa}function hn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return me(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=hn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(n.arrayValue.values[e]);return t}return{...n}}function Yh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!er(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=ht.emptyPath(),r={},i=[];t.forEach(((u,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}u?r[l.lastSegment()]=hn(u):i.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());er(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];er(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){me(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new wt(hn(this.value))}}function Xa(n){const t=[];return me(n.fields,((e,r)=>{const i=new ht([e]);if(er(r)){const o=Xa(r.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)})),new Ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,r,i,o,u,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new Et(t,0,L.min(),L.min(),L.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new Et(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new Et(t,2,e,L.min(),L.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,L.min(),L.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function Bo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(u.referenceValue),e.key):r=ke(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function jo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!kt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Jh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{}class st extends Ya{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new tf(t,e,r):e==="array-contains"?new rf(t,r):e==="in"?new sf(t,r):e==="not-in"?new of(t,r):e==="array-contains-any"?new af(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ef(t,r):new nf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ke(e,this.value)):e!==null&&ee(this.value)===ee(e)&&this.matchesComparison(ke(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ot extends Ya{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ot(t,e)}matches(t){return Ja(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ja(n){return n.op==="and"}function Za(n){return Zh(n)&&Ja(n)}function Zh(n){for(const t of n.filters)if(t instanceof Ot)return!1;return!0}function As(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+Oe(n.value);if(Za(n))return n.filters.map((t=>As(t))).join(",");{const t=n.filters.map((e=>As(e))).join(",");return`${n.op}(${t})`}}function tu(n,t){return n instanceof st?(function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&kt(r.value,i.value)})(n,t):n instanceof Ot?(function(r,i){return i instanceof Ot&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,u,l)=>o&&tu(u,i.filters[l])),!0):!1})(n,t):void x(19439)}function eu(n){return n instanceof st?(function(e){return`${e.field.canonicalString()} ${e.op} ${Oe(e.value)}`})(n):n instanceof Ot?(function(e){return e.op.toString()+" {"+e.getFilters().map(eu).join(" ,")+"}"})(n):"Filter"}class tf extends st{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class ef extends st{constructor(t,e){super(t,"in",e),this.keys=nu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class nf extends st{constructor(t,e){super(t,"not-in",e),this.keys=nu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function nu(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((r=>M.fromName(r.referenceValue)))}class rf extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return $s(e)&&vn(e.arrayValue,this.value)}}class sf extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&vn(this.value.arrayValue,e)}}class of extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!vn(this.value.arrayValue,e)}}class af extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!$s(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>vn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,e=null,r=[],i=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=l,this.Te=null}}function qo(n,t=null,e=[],r=[],i=null,o=null,u=null){return new uf(n,t,e,r,i,o,u)}function zs(n){const t=F(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>As(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Ir(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Oe(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Oe(r))).join(",")),t.Te=e}return t.Te}function Gs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Jh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!tu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!jo(n.startAt,t.startAt)&&jo(n.endAt,t.endAt)}function ws(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e=null,r=[],i=[],o=null,u="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function cf(n,t,e,r,i,o,u,l){return new wr(n,t,e,r,i,o,u,l)}function Hs(n){return new wr(n)}function $o(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lf(n){return n.collectionGroup!==null}function fn(n){const t=F(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new ot(ht.comparator);return u.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new fr(o,r))})),e.has(ht.keyField().canonicalString())||t.Ie.push(new fr(ht.keyField(),r))}return t.Ie}function Vt(n){const t=F(n);return t.Ee||(t.Ee=hf(t,fn(n))),t.Ee}function hf(n,t){if(n.limitType==="F")return qo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new fr(i.field,o)}));const e=n.endAt?new hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hr(n.startAt.position,n.startAt.inclusive):null;return qo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Rs(n,t,e){return new wr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Rr(n,t){return Gs(Vt(n),Vt(t))&&n.limitType===t.limitType}function ru(n){return`${zs(Vt(n))}|lt:${n.limitType}`}function Ae(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>eu(i))).join(", ")}]`),Ir(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Oe(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Oe(i))).join(",")),`Target(${r})`})(Vt(n))}; limitType=${n.limitType})`}function Sr(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of fn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(u,l,h){const d=Bo(u,l,h);return u.inclusive?d<=0:d<0})(r.startAt,fn(r),i)||r.endAt&&!(function(u,l,h){const d=Bo(u,l,h);return u.inclusive?d>=0:d>0})(r.endAt,fn(r),i))})(n,t)}function ff(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function su(n){return(t,e)=>{let r=!1;for(const i of fn(n)){const o=df(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function df(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):(function(o,u,l){const h=u.data.field(o),d=l.data.field(o);return h!==null&&d!==null?ke(h,d):x(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){me(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return qa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=new J(M.comparator);function qt(){return mf}const iu=new J(M.comparator);function an(...n){let t=iu;for(const e of n)t=t.insert(e.key,e);return t}function ou(n){let t=iu;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ce(){return dn()}function au(){return dn()}function dn(){return new pe((n=>n.toString()),((n,t)=>n.isEqual(t)))}const pf=new J(M.comparator),gf=new ot(M.comparator);function j(...n){let t=gf;for(const e of n)t=t.add(e);return t}const _f=new ot(B);function yf(){return _f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ur(t)?"-0":t}}function uu(n){return{integerValue:""+n}}function Ef(n,t){return zh(t)?uu(t):Ks(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this._=void 0}}function Tf(n,t,e){return n instanceof dr?(function(i,o){const u={fields:{[Ga]:{stringValue:za},[Ka]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&qs(o)&&(o=Ar(o)),o&&(u.fields[Ha]=o),{mapValue:u}})(e,t):n instanceof In?lu(n,t):n instanceof An?hu(n,t):(function(i,o){const u=cu(i,o),l=zo(u)+zo(i.Ae);return Is(u)&&Is(i.Ae)?uu(l):Ks(i.serializer,l)})(n,t)}function vf(n,t,e){return n instanceof In?lu(n,t):n instanceof An?hu(n,t):e}function cu(n,t){return n instanceof mr?(function(r){return Is(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class dr extends Cr{}class In extends Cr{constructor(t){super(),this.elements=t}}function lu(n,t){const e=fu(t);for(const r of n.elements)e.some((i=>kt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class An extends Cr{constructor(t){super(),this.elements=t}}function hu(n,t){let e=fu(t);for(const r of n.elements)e=e.filter((i=>!kt(i,r)));return{arrayValue:{values:e}}}class mr extends Cr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function zo(n){return tt(n.integerValue||n.doubleValue)}function fu(n){return $s(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function If(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof In&&i instanceof In||r instanceof An&&i instanceof An?Ne(r.elements,i.elements,kt):r instanceof mr&&i instanceof mr?kt(r.Ae,i.Ae):r instanceof dr&&i instanceof dr})(n.transform,t.transform)}class Af{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Pr{}function du(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new pu(n.key,Ut.none()):new Rn(n.key,n.data,Ut.none());{const e=n.data,r=wt.empty();let i=new ot(ht.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new ge(n.key,r,new Ct(i.toArray()),Ut.none())}}function wf(n,t,e){n instanceof Rn?(function(i,o,u){const l=i.value.clone(),h=Ho(i.fieldTransforms,o,u.transformResults);l.setAll(h),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()})(n,t,e):n instanceof ge?(function(i,o,u){if(!nr(i.precondition,o))return void o.convertToUnknownDocument(u.version);const l=Ho(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(mu(i)),h.setAll(l),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()})(n,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function mn(n,t,e,r){return n instanceof Rn?(function(o,u,l,h){if(!nr(o.precondition,u))return l;const d=o.value.clone(),_=Ko(o.fieldTransforms,h,u);return d.setAll(_),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof ge?(function(o,u,l,h){if(!nr(o.precondition,u))return l;const d=Ko(o.fieldTransforms,h,u),_=u.data;return _.setAll(mu(o)),_.setAll(d),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((v=>v.field)))})(n,t,e,r):(function(o,u,l){return nr(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l})(n,t,e)}function Rf(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=cu(r.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function Go(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ne(r,i,((o,u)=>If(o,u)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Rn extends Pr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ge extends Pr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function mu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Ho(n,t,e){const r=new Map;K(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,l=t.data.field(o.field);r.set(o.field,vf(u,l,e[i]))}return r}function Ko(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,Tf(o,u,t))}return r}class pu extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sf extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&wf(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=mn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=au();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(i.key)?null:l;const h=du(u,l);h!==null&&r.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),j())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,((e,r)=>Go(e,r)))&&Ne(this.baseMutations,t.baseMutations,((e,r)=>Go(e,r)))}}class Ws{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){K(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return pf})();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,r[u].version);return new Ws(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,q;function bf(n){switch(n){case C.OK:return x(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function gu(n){if(n===void 0)return jt("GRPC error has no .code"),C.UNKNOWN;switch(n){case nt.OK:return C.OK;case nt.CANCELLED:return C.CANCELLED;case nt.UNKNOWN:return C.UNKNOWN;case nt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case nt.INTERNAL:return C.INTERNAL;case nt.UNAVAILABLE:return C.UNAVAILABLE;case nt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case nt.NOT_FOUND:return C.NOT_FOUND;case nt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case nt.ABORTED:return C.ABORTED;case nt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case nt.DATA_LOSS:return C.DATA_LOSS;default:return x(39323,{code:n})}}(q=nt||(nt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Xt([4294967295,4294967295],0);function Wo(n){const t=Df().encode(n),e=new Da;return e.update(t),new Uint8Array(e.digest())}function Qo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Xt([e,r],0),new Xt([i,o],0)]}class Qs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new un(`Invalid padding: ${e}`);if(r<0)throw new un(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new un(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new un(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Xt.fromNumber(this.ge)}ye(t,e,r){let i=t.add(e.multiply(Xt.fromNumber(r)));return i.compare(Nf)===1&&(i=new Xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Wo(t),[r,i]=Qo(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(r,i,o);if(!this.we(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Qs(o,i,e);return r.forEach((l=>u.insert(l))),u}insert(t){if(this.ge===0)return;const e=Wo(t),[r,i]=Qo(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(r,i,o);this.Se(u)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Sn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Vr(L.min(),i,new J(B),qt(),j())}}class Sn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Sn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e,r,i){this.be=t,this.removedTargetIds=e,this.key=r,this.De=i}}class _u{constructor(t,e){this.targetId=t,this.Ce=e}}class yu{constructor(t,e,r=ft.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Xo{constructor(){this.ve=0,this.Fe=Yo(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=j(),e=j(),r=j();return this.Fe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:x(38017,{changeType:o})}})),new Sn(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Yo()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class kf{constructor(t){this.Ge=t,this.ze=new Map,this.je=qt(),this.Je=Yn(),this.He=Yn(),this.Ye=new J(B)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:x(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,r=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(ws(o))if(r===0){const u=new M(o.path);this.et(e,u,Et.newNoDocument(u,L.min()))}else K(r===1,20013,{expectedCount:r});else{const u=this._t(e);if(u!==r){const l=this.ut(t),h=l?this.ct(l,t,u):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,l;try{u=te(r).toUint8Array()}catch(h){if(h instanceof $a)return De("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Qs(u,i,o)}catch(h){return De(h instanceof un?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let i=0;return r.forEach((o=>{const u=this.Ge.ht(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((o,u)=>{const l=this.ot(u);if(l){if(o.current&&ws(l.target)){const h=new M(l.target.path);this.It(h).has(u)||this.Et(u,h)||this.et(u,h,Et.newNoDocument(h,t))}o.Be&&(e.set(u,o.ke()),o.qe())}}));let r=j();this.He.forEach(((o,u)=>{let l=!0;u.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,u)=>u.setReadTime(t)));const i=new Vr(t,e,this.Ye,this.je,r);return this.je=qt(),this.Je=Yn(),this.He=Yn(),this.Ye=new J(B),i}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Xo,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new ot(B),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new ot(B),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Xo),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Yn(){return new J(M.comparator)}function Yo(){return new J(M.comparator)}const Of={asc:"ASCENDING",desc:"DESCENDING"},Mf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xf={and:"AND",or:"OR"};class Lf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ss(n,t){return n.useProto3Json||Ir(t)?t:{value:t}}function pr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ff(n,t){return pr(n,t.toTimestamp())}function bt(n){return K(!!n,49232),L.fromTimestamp((function(e){const r=Zt(e);return new Y(r.seconds,r.nanos)})(n))}function Xs(n,t){return Cs(n,t).canonicalString()}function Cs(n,t){const e=(function(i){return new X(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Tu(n){const t=X.fromString(n);return K(Ru(t),10190,{key:t.toString()}),t}function Ps(n,t){return Xs(n.databaseId,t.path)}function ls(n,t){const e=Tu(t);if(e.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Iu(e))}function vu(n,t){return Xs(n.databaseId,t)}function Uf(n){const t=Tu(n);return t.length===4?X.emptyPath():Iu(t)}function Vs(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Iu(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Jo(n,t,e){return{name:Ps(n,t),fields:e.value.mapValue.fields}}function Bf(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(d,_){return d.useProto3Json?(K(_===void 0||typeof _=="string",58123),ft.fromBase64String(_||"")):(K(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),ft.fromUint8Array(_||new Uint8Array))})(n,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&(function(d){const _=d.code===void 0?C.UNKNOWN:gu(d.code);return new O(_,d.message||"")})(u);e=new yu(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ls(n,r.document.name),o=bt(r.document.updateTime),u=r.document.createTime?bt(r.document.createTime):L.min(),l=new wt({mapValue:{fields:r.document.fields}}),h=Et.newFoundDocument(i,o,u,l),d=r.targetIds||[],_=r.removedTargetIds||[];e=new rr(d,_,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ls(n,r.document),o=r.readTime?bt(r.readTime):L.min(),u=Et.newNoDocument(i,o),l=r.removedTargetIds||[];e=new rr([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ls(n,r.document),o=r.removedTargetIds||[];e=new rr([],o,i,null)}else{if(!("filter"in t))return x(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new Vf(i,o),l=r.targetId;e=new _u(l,u)}}return e}function jf(n,t){let e;if(t instanceof Rn)e={update:Jo(n,t.key,t.value)};else if(t instanceof pu)e={delete:Ps(n,t.key)};else if(t instanceof ge)e={update:Jo(n,t.key,t.data),updateMask:Xf(t.fieldMask)};else{if(!(t instanceof Sf))return x(16599,{Vt:t.type});e={verify:Ps(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,u){const l=u.transform;if(l instanceof dr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof In)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof An)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof mr)return{fieldPath:u.field.canonicalString(),increment:l.Ae};throw x(20930,{transform:u.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Ff(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)})(n,t.precondition)),e}function qf(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map((e=>(function(i,o){let u=i.updateTime?bt(i.updateTime):bt(o);return u.isEqual(L.min())&&(u=bt(o)),new Af(u,i.transformResults||[])})(e,t)))):[]}function $f(n,t){return{documents:[vu(n,t.path)]}}function zf(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=vu(n,i);const o=(function(d){if(d.length!==0)return wu(Ot.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(d){if(d.length!==0)return d.map((_=>(function(w){return{field:we(w.field),direction:Kf(w.dir)}})(_)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=Ss(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:i}}function Gf(n){let t=Uf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){K(r===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=(function(v){const w=Au(v);return w instanceof Ot&&Za(w)?w.getFilters():[w]})(e.where));let u=[];e.orderBy&&(u=(function(v){return v.map((w=>(function(D){return new fr(Re(D.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(w)))})(e.orderBy));let l=null;e.limit&&(l=(function(v){let w;return w=typeof v=="object"?v.value:v,Ir(w)?null:w})(e.limit));let h=null;e.startAt&&(h=(function(v){const w=!!v.before,P=v.values||[];return new hr(P,w)})(e.startAt));let d=null;return e.endAt&&(d=(function(v){const w=!v.before,P=v.values||[];return new hr(P,w)})(e.endAt)),cf(t,i,u,o,l,"F",h,d)}function Hf(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Au(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Re(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Re(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Re(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Re(e.unaryFilter.field);return st.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}})(n):n.fieldFilter!==void 0?(function(e){return st.create(Re(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Ot.create(e.compositeFilter.filters.map((r=>Au(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}})(e.compositeFilter.op))})(n):x(30097,{filter:n})}function Kf(n){return Of[n]}function Wf(n){return Mf[n]}function Qf(n){return xf[n]}function we(n){return{fieldPath:n.canonicalString()}}function Re(n){return ht.fromServerFormat(n.fieldPath)}function wu(n){return n instanceof st?(function(e){if(e.op==="=="){if(Uo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NAN"}};if(Fo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Uo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NAN"}};if(Fo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:we(e.field),op:Wf(e.op),value:e.value}}})(n):n instanceof Ot?(function(e){const r=e.getFilters().map((i=>wu(i)));return r.length===1?r[0]:{compositeFilter:{op:Qf(e.op),filters:r}}})(n):x(54877,{filter:n})}function Xf(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ru(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e,r,i,o=L.min(),u=L.min(),l=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.yt=t}}function Jf(n){const t=Gf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.Cn=new td}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Jt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Jt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class td{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ot(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ot(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Su=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Su,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Me(0)}static cr(){return new Me(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="LruGarbageCollector",ed=1048576;function ea([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class nd{constructor(t){this.Ir=t,this.buffer=new ot(ea),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ea(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class rd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){N(ta,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Be(e)?N(ta,"Ignoring IndexedDB error during garbage collection: ",e):await Ue(e)}await this.Vr(3e5)}))}}class sd{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(vr.ce);const r=new nd(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Zo)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zo):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,u,l,h,d;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((v=>(v>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,u=Date.now(),this.nthSequenceNumber(t,i)))).next((v=>(r=v,l=Date.now(),this.removeTargets(t,r,e)))).next((v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((v=>(d=Date.now(),Ie()<=$.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(l-u)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-_}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:v}))))}}function id(n,t){return new sd(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.changes=new pe((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&mn(r.mutation,i,Ct.empty(),Y.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,j()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=j()){const i=ce();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let u=an();return o.forEach(((l,h)=>{u=u.insert(l,h.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const r=ce();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,j())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,l)=>{e.set(u,l)}))}))}computeViews(t,e,r,i){let o=qt();const u=dn(),l=(function(){return dn()})();return e.forEach(((h,d)=>{const _=r.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof ge)?o=o.insert(d.key,d):_!==void 0?(u.set(d.key,_.mutation.getFieldMask()),mn(_.mutation,d,_.mutation.getFieldMask(),Y.now())):u.set(d.key,Ct.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,_)=>u.set(d,_))),e.forEach(((d,_)=>l.set(d,new ad(_,u.get(d)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=dn();let i=new J(((u,l)=>u-l)),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const l of u)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let _=r.get(h)||Ct.empty();_=l.applyToLocalView(d,_),r.set(h,_);const v=(i.get(l.batchId)||j()).add(h);i=i.insert(l.batchId,v)}))})).next((()=>{const u=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,_=h.value,v=au();_.forEach((w=>{if(!o.has(w)){const P=du(e.get(w),r.get(w));P!==null&&v.set(w,P),o=o.add(w)}})),u.push(this.documentOverlayCache.saveOverlays(t,d,v))}return S.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):lf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(ce());let l=yn,h=o;return u.next((d=>S.forEach(d,((_,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),o.get(_)?S.resolve():this.remoteDocumentCache.getEntry(t,_).next((w=>{h=h.insert(_,w)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,j()))).next((_=>({batchId:l,changes:ou(_)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((r=>{let i=an();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=an();return this.indexManager.getCollectionParents(t,o).next((l=>S.forEach(l,(h=>{const d=(function(v,w){return new wr(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next((_=>{_.forEach(((v,w)=>{u=u.insert(v,w)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((u=>{o.forEach(((h,d)=>{const _=d.getKey();u.get(_)===null&&(u=u.insert(_,Et.newInvalidDocument(_)))}));let l=an();return u.forEach(((h,d)=>{const _=o.get(h);_!==void 0&&mn(_.mutation,d,Ct.empty(),Y.now()),Sr(e,d)&&(l=l.insert(h,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:Jf(i.bundledQuery),readTime:bt(i.readTime)}})(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.overlays=new J(M.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ce();return S.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=ce(),o=e.length+1,u=new M(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new J(((d,_)=>d-_));const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let _=o.get(d.largestBatchId);_===null&&(_=ce(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const l=ce(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,_)=>l.set(d,_))),!(l.size()>=i)););return S.resolve(l)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Pf(e,r));let o=this.qr.get(e);o===void 0&&(o=j(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.Qr=new ot(at.$r),this.Ur=new ot(at.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new at(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new M(new X([])),r=new at(e,t),i=new at(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(u=>{this.Gr(u),o.push(u.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new M(new X([])),r=new at(e,t),i=new at(e,t+1);let o=j();return this.Ur.forEachInRange([r,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new at(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return M.comparator(t.key,e.key)||B(t.Yr,e.Yr)}static Kr(t,e){return B(t.Yr,e.Yr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new ot(at.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Cf(o,e,r,i);this.mutationQueue.push(u);for(const l of i)this.Zr=this.Zr.add(new at(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(u)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?js:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(u=>{const l=this.Xr(u.Yr);o.push(l)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(B);return e.forEach((i=>{const o=new at(i,0),u=new at(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,u],(l=>{r=r.add(l.Yr)}))})),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const u=new at(new M(o),0);let l=new ot(B);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.Yr)),!0)}),u),S.resolve(this.ti(l))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){K(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,(i=>{const o=new at(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new at(e,0),i=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t){this.ri=t,this.docs=(function(){return new J(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=qt();const u=e.path,l=new M(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:_}}=h.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||Bh(Uh(_),r)<=0||(i.has(_.key)||Sr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){x(9500)}ii(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new md(this)}getSize(t){return S.resolve(this.size)}}class md extends od{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t){this.persistence=t,this.si=new pe((e=>zs(e)),Gs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.oi=0,this._i=new Ys,this.targetCount=0,this.ai=Me.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Me(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((u,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)})),S.waitFor(o).next((()=>i))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,e){this.ui={},this.overlays={},this.ci=new vr(0),this.li=!1,this.li=!0,this.hi=new hd,this.referenceDelegate=t(this),this.Pi=new pd(this),this.indexManager=new Zf,this.remoteDocumentCache=(function(i){return new dd(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Yf(e),this.Ii=new cd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ld,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new fd(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new gd(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return S.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class gd extends qh{constructor(t){super(),this.currentSequenceNumber=t}}class Js{constructor(t){this.persistence=t,this.Ri=new Ys,this.Vi=null}static mi(t){return new Js(t)}get fi(){if(this.Vi)return this.Vi;throw x(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(r=>{const i=M.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,L.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class gr{constructor(t,e){this.persistence=t,this.pi=new pe((r=>Gh(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=id(this,e)}static mi(t,e){return new gr(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return S.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?S.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(u=>this.br(t,u,e).next((l=>{l||(r++,o.removeEntry(u,L.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=tr(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Zs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ol()?8:$h(sl())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new _d;return this.Ss(t,e,u).next((l=>{if(o.result=l,this.Vs)return this.bs(t,e,u,l.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(Ie()<=$.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(Ie()<=$.DEBUG&&N("QueryEngine","Query:",Ae(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ie()<=$.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vt(e))):S.resolve())}ys(t,e){if($o(e))return S.resolve(null);let r=Vt(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Rs(e,null,"F"),r=Vt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const u=j(...o);return this.ps.getDocuments(t,u).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.Ds(e,l);return this.Cs(e,d,u,h.readTime)?this.ys(t,Rs(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ws(t,e,r,i){return $o(e)||i.isEqual(L.min())?S.resolve(null):this.ps.getDocuments(t,r).next((o=>{const u=this.Ds(e,o);return this.Cs(e,u,r,i)?S.resolve(null):(Ie()<=$.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ae(e)),this.vs(t,u,e,Fh(i,yn)).next((l=>l)))}))}Ds(t,e){let r=new ot(su(t));return e.forEach(((i,o)=>{Sr(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return Ie()<=$.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.ps.getDocumentsMatchingQuery(t,e,Jt.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="LocalStore",Ed=3e8;class Td{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new J(B),this.xs=new pe((o=>zs(o)),Gs),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ud(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function vd(n,t,e,r){return new Td(n,t,e,r)}async function Pu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const u=[],l=[];let h=j();for(const d of i){u.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}for(const d of o){l.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ls:d,removedBatchIds:u,addedBatchIds:l})))}))}))}function Id(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,_){const v=d.batch,w=v.keys();let P=S.resolve();return w.forEach((D=>{P=P.next((()=>_.getEntry(h,D))).next((k=>{const b=d.docVersions.get(D);K(b!==null,48541),k.version.compareTo(b)<0&&(v.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),_.addEntry(k)))}))})),P.next((()=>l.mutationQueue.removeMutationBatch(h,v)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=j();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function Vu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function Ad(n,t){const e=F(n),r=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const l=[];t.targetChanges.forEach(((_,v)=>{const w=i.get(v);if(!w)return;l.push(e.Pi.removeMatchingKeys(o,_.removedDocuments,v).next((()=>e.Pi.addMatchingKeys(o,_.addedDocuments,v))));let P=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?P=P.withResumeToken(ft.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,r)),i=i.insert(v,P),(function(k,b,G){return k.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Ed?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(w,P,_)&&l.push(e.Pi.updateTargetData(o,P))}));let h=qt(),d=j();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))})),l.push(wd(o,u,t.documentUpdates).next((_=>{h=_.ks,d=_.qs}))),!r.isEqual(L.min())){const _=e.Pi.getLastRemoteSnapshotVersion(o).next((v=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(_)}return S.waitFor(l).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Ms=i,o)))}function wd(n,t,e){let r=j(),i=j();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let u=qt();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),u=u.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),u=u.insert(l,h)):N(ti,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{ks:u,qs:i}}))}function Rd(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=js),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function Sd(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return e.Pi.getTargetData(r,t).next((o=>o?(i=o,S.resolve(i)):e.Pi.allocateTargetId(r).next((u=>(i=new Kt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=e.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function bs(n,t,e){const r=F(n),i=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(u=>r.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!Be(u))throw u;N(ti,`Failed to update sequence numbers for target ${t}: ${u}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function na(n,t,e){const r=F(n);let i=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(h,d,_){const v=F(h),w=v.xs.get(_);return w!==void 0?S.resolve(v.Ms.get(w)):v.Pi.getTargetData(d,_)})(r,u,Vt(t)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(u,l.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:j()))).next((l=>(Cd(r,ff(t),l),{documents:l,Qs:o})))))}function Cd(n,t,e){let r=n.Os.get(t)||L.min();e.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class ra{constructor(){this.activeTargetIds=yf()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pd{constructor(){this.Mo=new ra,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new ra,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="ConnectivityMonitor";class ia{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(sa,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(sa,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn=null;function Ds(){return Jn===null?Jn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Jn++,"0x"+Jn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="RestConnection",bd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Dd{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===cr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const u=Ds(),l=this.zo(t,e.toUriEncodedString());N(hs,`Sending RPC '${t}' ${u}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:d}=new URL(l),_=xs(d);return this.Jo(t,l,h,r,_).then((v=>(N(hs,`Received RPC '${t}' ${u}: `,v),v)),(v=>{throw De(hs,`RPC '${t}' ${u} failed with error: `,v,"url: ",l,"request:",r),v}))}Ho(t,e,r,i,o,u){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fe})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=bd[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class kd extends Dd{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const u=Ds();return new Promise(((l,h)=>{const d=new Na;d.setWithCredentials(!0),d.listenOnce(ka.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Zn.NO_ERROR:const v=d.getResponseJson();N(_t,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(v)),l(v);break;case Zn.TIMEOUT:N(_t,`RPC '${t}' ${u} timed out`),h(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const w=d.getStatus();if(N(_t,`RPC '${t}' ${u} failed with status:`,w,"response text:",d.getResponseText()),w>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const D=P==null?void 0:P.error;if(D&&D.status&&D.message){const k=(function(G){const U=G.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(U)>=0?U:C.UNKNOWN})(D.status);h(new O(k,D.message))}else h(new O(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new O(C.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:t,streamId:u,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(_t,`RPC '${t}' ${u} completed.`)}}));const _=JSON.stringify(i);N(_t,`RPC '${t}' ${u} sending request:`,i),d.send(e,"POST",_,r,15)}))}T_(t,e,r){const i=Ds(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=xa(),l=Ma(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const _=o.join("");N(_t,`Creating RPC '${t}' stream ${i}: ${_}`,h);const v=u.createWebChannel(_,h);this.I_(v);let w=!1,P=!1;const D=new Nd({Yo:b=>{P?N(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(w||(N(_t,`Opening RPC '${t}' stream ${i} transport.`),v.open(),w=!0),N(_t,`RPC '${t}' stream ${i} sending:`,b),v.send(b))},Zo:()=>v.close()}),k=(b,G,U)=>{b.listen(G,(z=>{try{U(z)}catch(et){setTimeout((()=>{throw et}),0)}}))};return k(v,on.EventType.OPEN,(()=>{P||(N(_t,`RPC '${t}' stream ${i} transport opened.`),D.o_())})),k(v,on.EventType.CLOSE,(()=>{P||(P=!0,N(_t,`RPC '${t}' stream ${i} transport closed`),D.a_(),this.E_(v))})),k(v,on.EventType.ERROR,(b=>{P||(P=!0,De(_t,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),D.a_(new O(C.UNAVAILABLE,"The operation could not be completed")))})),k(v,on.EventType.MESSAGE,(b=>{var G;if(!P){const U=b.data[0];K(!!U,16349);const z=U,et=(z==null?void 0:z.error)||((G=z[0])==null?void 0:G.error);if(et){N(_t,`RPC '${t}' stream ${i} received error:`,et);const Mt=et.status;let ut=(function(g){const y=nt[g];if(y!==void 0)return gu(y)})(Mt),T=et.message;ut===void 0&&(ut=C.INTERNAL,T="Unknown error status: "+Mt+" with message "+et.message),P=!0,D.a_(new O(ut,T)),v.close()}else N(_t,`RPC '${t}' stream ${i} received:`,U),D.u_(U)}})),k(l,Oa.STAT_EVENT,(b=>{b.stat===Es.PROXY?N(_t,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===Es.NOPROXY&&N(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{D.__()}),0),D}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function fs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){return new Lf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="PersistentStream";class Du{constructor(t,e,r,i,o,u,l,h){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return N(oa,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(N(oa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Od extends Du{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Bf(this.serializer,t),r=(function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?bt(u.readTime):L.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Vs(this.serializer),e.addTarget=(function(o,u){let l;const h=u.target;if(l=ws(h)?{documents:$f(o,h)}:{query:zf(o,h).ft},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=Eu(o,u.resumeToken);const d=Ss(o,u.expectedCount);d!==null&&(l.expectedCount=d)}else if(u.snapshotVersion.compareTo(L.min())>0){l.readTime=pr(o,u.snapshotVersion.toTimestamp());const d=Ss(o,u.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=Hf(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Vs(this.serializer),e.removeTarget=t,this.q_(e)}}class Md extends Du{constructor(t,e,r,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=qf(t.writeResults,t.commitTime),r=bt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Vs(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>jf(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{}class Ld extends xd{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Go(t,Cs(e,r),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(C.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,l])=>this.connection.Ho(t,Cs(e,r),i,u,l,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new O(C.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Fd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(jt(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de="RemoteStore";class Ud{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((u=>{r.enqueueAndForget((async()=>{_e(this)&&(N(de,"Restarting streams for network reachability change."),await(async function(h){const d=F(h);d.Ea.add(4),await Cn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Dr(d)})(this))}))})),this.Ra=new Fd(r,i)}}async function Dr(n){if(_e(n))for(const t of n.da)await t(!0)}async function Cn(n){for(const t of n.da)await t(!1)}function Nu(n,t){const e=F(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),si(e)?ri(e):je(e).O_()&&ni(e,t))}function ei(n,t){const e=F(n),r=je(e);e.Ia.delete(t),r.O_()&&ku(e,t),e.Ia.size===0&&(r.O_()?r.L_():_e(e)&&e.Ra.set("Unknown"))}function ni(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}je(n).Y_(t)}function ku(n,t){n.Va.Ue(t),je(n).Z_(t)}function ri(n){n.Va=new kf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),je(n).start(),n.Ra.ua()}function si(n){return _e(n)&&!je(n).x_()&&n.Ia.size>0}function _e(n){return F(n).Ea.size===0}function Ou(n){n.Va=void 0}async function Bd(n){n.Ra.set("Online")}async function jd(n){n.Ia.forEach(((t,e)=>{ni(n,t)}))}async function qd(n,t){Ou(n),si(n)?(n.Ra.ha(t),ri(n)):n.Ra.set("Unknown")}async function $d(n,t,e){if(n.Ra.set("Online"),t instanceof yu&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const l of o.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,u),i.Ia.delete(l),i.Va.removeTarget(l))})(n,t)}catch(r){N(de,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await _r(n,r)}else if(t instanceof rr?n.Va.Ze(t):t instanceof _u?n.Va.st(t):n.Va.tt(t),!e.isEqual(L.min()))try{const r=await Vu(n.localStore);e.compareTo(r)>=0&&await(function(o,u){const l=o.Va.Tt(u);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.Ia.get(d);_&&o.Ia.set(d,_.withResumeToken(h.resumeToken,u))}})),l.targetMismatches.forEach(((h,d)=>{const _=o.Ia.get(h);if(!_)return;o.Ia.set(h,_.withResumeToken(ft.EMPTY_BYTE_STRING,_.snapshotVersion)),ku(o,h);const v=new Kt(_.target,h,d,_.sequenceNumber);ni(o,v)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){N(de,"Failed to raise snapshot:",r),await _r(n,r)}}async function _r(n,t,e){if(!Be(t))throw t;n.Ea.add(1),await Cn(n),n.Ra.set("Offline"),e||(e=()=>Vu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(de,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Dr(n)}))}function Mu(n,t){return t().catch((e=>_r(n,e,t)))}async function Nr(n){const t=F(n),e=ne(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:js;for(;zd(t);)try{const i=await Rd(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,Gd(t,i)}catch(i){await _r(t,i)}xu(t)&&Lu(t)}function zd(n){return _e(n)&&n.Ta.length<10}function Gd(n,t){n.Ta.push(t);const e=ne(n);e.O_()&&e.X_&&e.ea(t.mutations)}function xu(n){return _e(n)&&!ne(n).x_()&&n.Ta.length>0}function Lu(n){ne(n).start()}async function Hd(n){ne(n).ra()}async function Kd(n){const t=ne(n);for(const e of n.Ta)t.ea(e.mutations)}async function Wd(n,t,e){const r=n.Ta.shift(),i=Ws.from(r,t,e);await Mu(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Nr(n)}async function Qd(n,t){t&&ne(n).X_&&await(async function(r,i){if((function(u){return bf(u)&&u!==C.ABORTED})(i.code)){const o=r.Ta.shift();ne(r).B_(),await Mu(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Nr(r)}})(n,t),xu(n)&&Lu(n)}async function aa(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),N(de,"RemoteStore received new credentials");const r=_e(e);e.Ea.add(3),await Cn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Dr(e)}async function Xd(n,t){const e=F(n);t?(e.Ea.delete(2),await Dr(e)):t||(e.Ea.add(2),await Cn(e),e.Ra.set("Unknown"))}function je(n){return n.ma||(n.ma=(function(e,r,i){const o=F(e);return o.sa(),new Od(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Bd.bind(null,n),t_:jd.bind(null,n),r_:qd.bind(null,n),H_:$d.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),si(n)?ri(n):n.Ra.set("Unknown")):(await n.ma.stop(),Ou(n))}))),n.ma}function ne(n){return n.fa||(n.fa=(function(e,r,i){const o=F(e);return o.sa(),new Md(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Hd.bind(null,n),r_:Qd.bind(null,n),ta:Kd.bind(null,n),na:Wd.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Nr(n)):(await n.fa.stop(),n.Ta.length>0&&(N(de,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,l=new ii(t,e,u,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oi(n,t){if(jt("AsyncQueue",`${t}: ${n}`),Be(n))return new O(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{static emptySet(t){return new Pe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=an(),this.sortedSet=new J(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Pe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.ga=new J(M.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):x(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class xe{constructor(t,e,r,i,o,u,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach((l=>{u.push({type:0,doc:l})})),new xe(t,e,Pe.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Jd{constructor(){this.queries=ca(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=ca(),o.forEach(((u,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new O(C.ABORTED,"Firestore shutting down"))}}function ca(){return new pe((n=>ru(n)),Rr)}async function Zd(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(r=2):(o=new Yd,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const l=oi(u,`Initialization of query '${Ae(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&ai(e)}async function tm(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.Sa.indexOf(t);u>=0&&(o.Sa.splice(u,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function em(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const l of u.Sa)l.Fa(i)&&(r=!0);u.wa=i}}r&&ai(e)}function nm(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);r.queries.delete(t)}function ai(n){n.Ca.forEach((t=>{t.next()}))}var Ns,la;(la=Ns||(Ns={})).Ma="default",la.Cache="cache";class rm{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new xe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=xe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ns.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t){this.key=t}}class Uu{constructor(t){this.key=t}}class sm{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=j(),this.mutatedKeys=j(),this.eu=su(t),this.tu=new Pe(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new ua,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((_,v)=>{const w=i.get(_),P=Sr(this.query,v)?v:null,D=!!w&&this.mutatedKeys.has(w.key),k=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let b=!1;w&&P?w.data.isEqual(P.data)?D!==k&&(r.track({type:3,doc:P}),b=!0):this.su(w,P)||(r.track({type:2,doc:P}),b=!0,(h&&this.eu(P,h)>0||d&&this.eu(P,d)<0)&&(l=!0)):!w&&P?(r.track({type:0,doc:P}),b=!0):w&&!P&&(r.track({type:1,doc:w}),b=!0,(h||d)&&(l=!0)),b&&(P?(u=u.add(P),o=k?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{tu:u,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const u=t.iu.ya();u.sort(((_,v)=>(function(P,D){const k=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Rt:b})}};return k(P)-k(D)})(_.type,v.type)||this.eu(_.doc,v.doc))),this.ou(r),i=i??!1;const l=e&&!i?this._u():[],h=this.Xa.size===0&&this.current&&!i?1:0,d=h!==this.Za;return this.Za=h,u.length!==0||d?{snapshot:new xe(this.query,t.tu,o,u,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ua,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=j(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new Uu(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new Fu(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=j();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return xe.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ui="SyncEngine";class im{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class om{constructor(t){this.key=t,this.hu=!1}}class am{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new pe((l=>ru(l)),Rr),this.Iu=new Map,this.Eu=new Set,this.du=new J(M.comparator),this.Au=new Map,this.Ru=new Ys,this.Vu={},this.mu=new Map,this.fu=Me.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function um(n,t,e=!0){const r=Gu(n);let i;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await Bu(r,t,e,!0),i}async function cm(n,t){const e=Gu(n);await Bu(e,t,!0,!1)}async function Bu(n,t,e,r){const i=await Sd(n.localStore,Vt(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await lm(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&Nu(n.remoteStore,i),l}async function lm(n,t,e,r,i){n.pu=(v,w,P)=>(async function(k,b,G,U){let z=b.view.ru(G);z.Cs&&(z=await na(k.localStore,b.query,!1).then((({documents:T})=>b.view.ru(T,z))));const et=U&&U.targetChanges.get(b.targetId),Mt=U&&U.targetMismatches.get(b.targetId)!=null,ut=b.view.applyChanges(z,k.isPrimaryClient,et,Mt);return fa(k,b.targetId,ut.au),ut.snapshot})(n,v,w,P);const o=await na(n.localStore,t,!0),u=new sm(t,o.Qs),l=u.ru(o.documents),h=Sn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=u.applyChanges(l,n.isPrimaryClient,h);fa(n,e,d.au);const _=new im(t,e,u);return n.Tu.set(t,_),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function hm(n,t,e){const r=F(n),i=r.Tu.get(t),o=r.Iu.get(i.targetId);if(o.length>1)return r.Iu.set(i.targetId,o.filter((u=>!Rr(u,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bs(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),e&&ei(r.remoteStore,i.targetId),ks(r,i.targetId)})).catch(Ue)):(ks(r,i.targetId),await bs(r.localStore,i.targetId,!0))}async function fm(n,t){const e=F(n),r=e.Tu.get(t),i=e.Iu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ei(e.remoteStore,r.targetId))}async function dm(n,t,e){const r=Tm(n);try{const i=await(function(u,l){const h=F(u),d=Y.now(),_=l.reduce(((P,D)=>P.add(D.key)),j());let v,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let D=qt(),k=j();return h.Ns.getEntries(P,_).next((b=>{D=b,D.forEach(((G,U)=>{U.isValidDocument()||(k=k.add(G))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,D))).next((b=>{v=b;const G=[];for(const U of l){const z=Rf(U,v.get(U.key).overlayedDocument);z!=null&&G.push(new ge(U.key,z,Xa(z.value.mapValue),Ut.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,G,l)})).next((b=>{w=b;const G=b.applyToLocalDocumentSet(v,k);return h.documentOverlayCache.saveOverlays(P,b.batchId,G)}))})).then((()=>({batchId:w.batchId,changes:ou(v)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(u,l,h){let d=u.Vu[u.currentUser.toKey()];d||(d=new J(B)),d=d.insert(l,h),u.Vu[u.currentUser.toKey()]=d})(r,i.batchId,e),await Pn(r,i.changes),await Nr(r.remoteStore)}catch(i){const o=oi(i,"Failed to persist write");e.reject(o)}}async function ju(n,t){const e=F(n);try{const r=await Ad(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Au.get(o);u&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.hu=!0:i.modifiedDocuments.size>0?K(u.hu,14607):i.removedDocuments.size>0&&(K(u.hu,42227),u.hu=!1))})),await Pn(e,r,t)}catch(r){await Ue(r)}}function ha(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,u)=>{const l=u.view.va(t);l.snapshot&&i.push(l.snapshot)})),(function(u,l){const h=F(u);h.onlineState=l;let d=!1;h.queries.forEach(((_,v)=>{for(const w of v.Sa)w.va(l)&&(d=!0)})),d&&ai(h)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function mm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Au.get(t),o=i&&i.key;if(o){let u=new J(M.comparator);u=u.insert(o,Et.newNoDocument(o,L.min()));const l=j().add(o),h=new Vr(L.min(),new Map,new J(B),u,l);await ju(r,h),r.du=r.du.remove(o),r.Au.delete(t),ci(r)}else await bs(r.localStore,t,!1).then((()=>ks(r,t,e))).catch(Ue)}async function pm(n,t){const e=F(n),r=t.batch.batchId;try{const i=await Id(e.localStore,t);$u(e,r,null),qu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Pn(e,i)}catch(i){await Ue(i)}}async function gm(n,t,e){const r=F(n);try{const i=await(function(u,l){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let _;return h.mutationQueue.lookupMutationBatch(d,l).next((v=>(K(v!==null,37113),_=v.keys(),h.mutationQueue.removeMutationBatch(d,v)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,_,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_))).next((()=>h.localDocuments.getDocuments(d,_)))}))})(r.localStore,t);$u(r,t,e),qu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Pn(r,i)}catch(i){await Ue(i)}}function qu(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function $u(n,t,e){const r=F(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}function ks(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||zu(n,r)}))}function zu(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(ei(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),ci(n))}function fa(n,t,e){for(const r of e)r instanceof Fu?(n.Ru.addReference(r.key,t),_m(n,r)):r instanceof Uu?(N(ui,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||zu(n,r.key)):x(19791,{wu:r})}function _m(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(N(ui,"New document in limbo: "+e),n.Eu.add(r),ci(n))}function ci(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new M(X.fromString(t)),r=n.fu.next();n.Au.set(r,new om(e)),n.du=n.du.insert(e,r),Nu(n.remoteStore,new Kt(Vt(Hs(e.path)),r,"TargetPurposeLimboResolution",vr.ce))}}async function Pn(n,t,e){const r=F(n),i=[],o=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{u.push(r.pu(h,t,e).then((d=>{var _;if((d||e)&&r.isPrimaryClient){const v=d?!d.fromCache:(_=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){i.push(d);const v=Zs.As(h.targetId,d);o.push(v)}})))})),await Promise.all(u),r.Pu.H_(i),await(async function(h,d){const _=F(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(v=>S.forEach(d,(w=>S.forEach(w.Es,(P=>_.persistence.referenceDelegate.addReference(v,w.targetId,P))).next((()=>S.forEach(w.ds,(P=>_.persistence.referenceDelegate.removeReference(v,w.targetId,P)))))))))}catch(v){if(!Be(v))throw v;N(ti,"Failed to update sequence numbers: "+v)}for(const v of d){const w=v.targetId;if(!v.fromCache){const P=_.Ms.get(w),D=P.snapshotVersion,k=P.withLastLimboFreeSnapshotVersion(D);_.Ms=_.Ms.insert(w,k)}}})(r.localStore,o))}async function ym(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){N(ui,"User change. New user:",t.toKey());const r=await Pu(e.localStore,t);e.currentUser=t,(function(o,u){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new O(C.CANCELLED,u))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Pn(e,r.Ls)}}function Em(n,t){const e=F(n),r=e.Au.get(t);if(r&&r.hu)return j().add(r.key);{let i=j();const o=e.Iu.get(t);if(!o)return i;for(const u of o){const l=e.Tu.get(u);i=i.unionWith(l.view.nu)}return i}}function Gu(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ju.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Em.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=mm.bind(null,t),t.Pu.H_=em.bind(null,t.eventManager),t.Pu.yu=nm.bind(null,t.eventManager),t}function Tm(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=pm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gm.bind(null,t),t}class yr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=br(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return vd(this.persistence,new yd,t.initialUser,this.serializer)}Cu(t){return new Cu(Js.mi,this.serializer)}Du(t){return new Pd}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yr.provider={build:()=>new yr};class vm extends yr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){K(this.persistence.referenceDelegate instanceof gr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new rd(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Cu((r=>gr.mi(r,e)),this.serializer)}}class Os{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ha(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ym.bind(null,this.syncEngine),await Xd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Jd})()}createDatastore(t){const e=br(t.databaseInfo.databaseId),r=(function(o){return new kd(o)})(t.databaseInfo);return(function(o,u,l,h){return new Ld(o,u,l,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,u,l){return new Ud(r,i,o,u,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>ha(this.syncEngine,e,0)),(function(){return ia.v()?new ia:new Vd})())}createSyncEngine(t,e){return(function(i,o,u,l,h,d,_){const v=new am(i,o,u,l,h,d);return _&&(v.gu=!0),v})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=F(i);N(de,"RemoteStore shutting down."),o.Ea.add(5),await Cn(o),o.Aa.shutdown(),o.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Os.provider={build:()=>new Os};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="FirestoreClient";class Am{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=Us.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async u=>{N(re,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(N(re,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=oi(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ds(n,t){n.asyncQueue.verifyOperationInProgress(),N(re,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Pu(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function da(n,t){n.asyncQueue.verifyOperationInProgress();const e=await wm(n);N(re,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>aa(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>aa(t.remoteStore,i))),n._onlineComponents=t}async function wm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(re,"Using user provided OfflineComponentProvider");try{await ds(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;De("Error using user provided cache. Falling back to memory cache: "+e),await ds(n,new yr)}}else N(re,"Using default OfflineComponentProvider"),await ds(n,new vm(void 0));return n._offlineComponents}async function Hu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(re,"Using user provided OnlineComponentProvider"),await da(n,n._uninitializedComponentsProvider._online)):(N(re,"Using default OnlineComponentProvider"),await da(n,new Os))),n._onlineComponents}function Rm(n){return Hu(n).then((t=>t.syncEngine))}async function ma(n){const t=await Hu(n),e=t.eventManager;return e.onListen=um.bind(null,t.syncEngine),e.onUnlisten=hm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=cm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=fm.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="firestore.googleapis.com",ga=!0;class _a{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wu,this.ssl=ga}else this.host=t.host,this.ssl=t.ssl??ga;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Su;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ed)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Lh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ku(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _a({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _a(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ch;switch(r.type){case"firstParty":return new Dh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=pa.get(e);r&&(N("ComponentProvider","Removing Datastore"),pa.delete(e),r.terminate())})(this),Promise.resolve()}}function Sm(n,t,e,r={}){var d;n=Ce(n,kr);const i=xs(t),o=n._getSettings(),u={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;i&&(Zc(`https://${l}`),rl("Firestore",!0)),o.host!==Wu&&o.host!==l&&De("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:i,emulatorOptions:r};if(!or(h,u)&&(n._setSettings(h),r.mockUserToken)){let _,v;if(typeof r.mockUserToken=="string")_=r.mockUserToken,v=yt.MOCK_USER;else{_=tl(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new yt(w)}n._authCredentials=new Ph(new Fa(_,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Or(this.firestore,t,this._query)}}class it{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new it(this.firestore,t,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(wn(e,it._jsonSchema))return new it(t,r||null,new M(X.fromString(e.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:rt("string",it._jsonSchemaVersion),referencePath:rt("string")};class Yt extends Or{constructor(t,e,r){super(t,e,Hs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new it(this.firestore,null,new M(t))}withConverter(t){return new Yt(this.firestore,t,this._path)}}function Gm(n,t,...e){if(n=be(n),Ua("collection","path",t),n instanceof kr){const r=X.fromString(t,...e);return bo(r),new Yt(n,null,r)}{if(!(n instanceof it||n instanceof Yt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return bo(r),new Yt(n.firestore,null,r)}}function Hm(n,t,...e){if(n=be(n),arguments.length===1&&(t=Us.newId()),Ua("doc","path",t),n instanceof kr){const r=X.fromString(t,...e);return Vo(r),new it(n,null,new M(r))}{if(!(n instanceof it||n instanceof Yt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Vo(r),new it(n.firestore,n instanceof Yt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="AsyncQueue";class Ea{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bu(this,"async_queue_retry"),this._c=()=>{const r=fs();r&&N(ya,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=fs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=fs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new le;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Be(t))throw t;N(ya,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,jt("INTERNAL UNHANDLED ERROR: ",Ta(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=ii.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&x(47125,{Pc:Ta(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Ta(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1})(n,["next","error","complete"])}class Er extends kr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Ea,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ea(t),this._firestoreClient=void 0,await t}}}function Km(n,t){const e=typeof n=="object"?n:mh(),r=typeof n=="string"?n:cr,i=uh(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Yc("firestore");o&&Sm(i,...o)}return i}function Qu(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cm(n),n._firestoreClient}function Cm(n){var r,i,o;const t=n._freezeSettings(),e=(function(l,h,d,_){return new Wh(l,h,d,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Ku(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,t);n._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Am(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rt(ft.fromBase64String(t))}catch(e){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rt(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(wn(t,Rt._jsonSchema))return Rt.fromBase64String(t.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:rt("string",Rt._jsonSchemaVersion),bytes:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dt._jsonSchemaVersion}}static fromJSON(t){if(wn(t,Dt._jsonSchema))return new Dt(t.latitude,t.longitude)}}Dt._jsonSchemaVersion="firestore/geoPoint/1.0",Dt._jsonSchema={type:rt("string",Dt._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(wn(t,Nt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Nt(t.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nt._jsonSchemaVersion="firestore/vectorValue/1.0",Nt._jsonSchema={type:rt("string",Nt._jsonSchemaVersion),vectorValues:rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=/^__.*__$/;class Vm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new Rn(t,this.data,e,this.fieldTransforms)}}function Yu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ac:n})}}class hi{constructor(t,e,r,i,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new hi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Tr(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Yu(this.Ac)&&Pm.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class bm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||br(t)}Cc(t,e,r,i=!1){return new hi({Ac:t,methodName:e,Dc:r,path:ht.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dm(n){const t=n._freezeSettings(),e=br(n._databaseId);return new bm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Nm(n,t,e,r,i,o={}){const u=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);ec("Data must be an object, but it was:",u,r);const l=Zu(r,u);let h,d;if(o.merge)h=new Ct(u.fieldMask),d=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const v of o.mergeFields){const w=km(t,v,e);if(!u.contains(w))throw new O(C.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Mm(_,w)||_.push(w)}h=new Ct(_),d=u.fieldTransforms.filter((v=>h.covers(v.field)))}else h=null,d=u.fieldTransforms;return new Vm(new wt(l),h,d)}function Ju(n,t){if(tc(n=be(n)))return ec("Unsupported field value:",t,n),Zu(n,t);if(n instanceof Xu)return(function(r,i){if(!Yu(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let u=0;for(const l of r){let h=Ju(l,i.wc(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ef(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:pr(i.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pr(i.serializer,o)}}if(r instanceof Dt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:Eu(i.serializer,r._byteString)};if(r instanceof it){const o=i.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw i.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Xs(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Nt)return(function(u,l){return{mapValue:{fields:{[Wa]:{stringValue:Qa},[lr]:{arrayValue:{values:u.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ks(l.serializer,d)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Bs(r)}`)})(n,t)}function Zu(n,t){const e={};return qa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):me(n,((r,i)=>{const o=Ju(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function tc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Dt||n instanceof Rt||n instanceof it||n instanceof Xu||n instanceof Nt)}function ec(n,t,e){if(!tc(e)||!Ba(e)){const r=Bs(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function km(n,t,e){if((t=be(t))instanceof li)return t._internalPath;if(typeof t=="string")return nc(n,t);throw Tr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Om=new RegExp("[~\\*/\\[\\]]");function nc(n,t,e){if(t.search(Om)>=0)throw Tr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new li(...t.split("."))._internalPath}catch{throw Tr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Tr(n,t,e,r,i){const o=r&&!r.isEmpty(),u=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${i}`),h+=")"),new O(C.INVALID_ARGUMENT,l+n+h)}function Mm(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(sc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class xm extends rc{data(){return super.data()}}function sc(n,t){return typeof t=="string"?nc(n,t):t instanceof li?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fm{convertValue(t,e="none"){switch(ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return me(t,((i,o)=>{r[i]=this.convertValue(o,e)})),r}convertVectorValue(t){var r,i,o;const e=(o=(i=(r=t.fields)==null?void 0:r[lr].arrayValue)==null?void 0:i.values)==null?void 0:o.map((u=>tt(u.doubleValue)));return new Nt(e)}convertGeoPoint(t){return new Dt(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ar(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(En(t));default:return null}}convertTimestamp(t){const e=Zt(t);return new Y(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);K(Ru(r),9688,{name:t});const i=new Tn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class cn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class he extends rc{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(sc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=he._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}he._jsonSchemaVersion="firestore/documentSnapshot/1.0",he._jsonSchema={type:rt("string",he._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class sr extends he{data(t={}){return super.data(t)}}class Ve{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new cn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new sr(this._firestore,this._userDataWriter,r.key,r,new cn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((l=>{const h=new sr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new cn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new sr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new cn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,_=-1;return l.type!==0&&(d=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),_=u.indexOf(l.doc.key)),{type:Bm(l.type),doc:h,oldIndex:d,newIndex:_}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ve._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Us.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Bm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}Ve._jsonSchemaVersion="firestore/querySnapshot/1.0",Ve._jsonSchema={type:rt("string",Ve._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class ic extends Fm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new it(this.firestore,null,e)}}function Wm(n,t,e){n=Ce(n,it);const r=Ce(n.firestore,Er),i=Um(n.converter,t,e);return jm(r,[Nm(Dm(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Ut.none())])}function Qm(n,...t){var h,d,_;n=be(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||va(t[r])||(e=t[r++]);const i={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(va(t[r])){const v=t[r];t[r]=(h=v.next)==null?void 0:h.bind(v),t[r+1]=(d=v.error)==null?void 0:d.bind(v),t[r+2]=(_=v.complete)==null?void 0:_.bind(v)}let o,u,l;if(n instanceof it)u=Ce(n.firestore,Er),l=Hs(n._key.path),o={next:v=>{t[r]&&t[r](qm(u,n,v))},error:t[r+1],complete:t[r+2]};else{const v=Ce(n,Or);u=Ce(v.firestore,Er),l=v._query;const w=new ic(u);o={next:P=>{t[r]&&t[r](new Ve(u,w,v,P))},error:t[r+1],complete:t[r+2]},Lm(n._query)}return(function(w,P,D,k){const b=new Im(k),G=new rm(P,b,D);return w.asyncQueue.enqueueAndForget((async()=>Zd(await ma(w),G))),()=>{b.Nu(),w.asyncQueue.enqueueAndForget((async()=>tm(await ma(w),G)))}})(Qu(u),l,i,o)}function jm(n,t){return(function(r,i){const o=new le;return r.asyncQueue.enqueueAndForget((async()=>dm(await Rm(r),i,o))),o.promise})(Qu(n),t)}function qm(n,t,e){const r=e.docs.get(t._key),i=new ic(n);return new he(n,i,t._key,r,new cn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Fe=i})(fh),ar(new pn("firestore",((r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),l=new Er(new Vh(r.getProvider("auth-internal")),new Nh(u,r.getProvider("app-check-internal")),(function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tn(d.options.projectId,_)})(u,i),u);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Se(Ro,So,t),Se(Ro,So,"esm2020")})();export{$m as a,mh as b,Gm as c,Hm as d,Km as g,dh as i,Qm as o,Wm as s};
