const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/webgl-device-2HEPBJxs.js","assets/vue.runtime.esm-bundler-BvZ39CsU.js","assets/item-filter-BDlBasvK.js","assets/map-filter-KWZML0Oz.js","assets/_plugin-vue_export-helper-B67ILkmu.js","assets/stores-CVnysCAS.js","assets/storage-key-DLoMPbu3.js","assets/Primitive-CvlfmRmb.js","assets/Presence-LO-PsHUA.js","assets/VisuallyHiddenInput-DyqnqZA7.js","assets/regular-location-ad0rcR8L.js","assets/map-filter-DD67uVqC.css","assets/item-locale-DSl8d0Py.js","assets/vue-i18n-Cmj-II0X.js","assets/item-locale-ua-UZqE7.css","assets/item-setting-Cr9U7E3A.js","assets/item-setting-BNX5fz4W.css"])))=>i.map(i=>d[i]);
import{A as e,Et as t,G as n,H as r,I as i,K as a,N as o,P as s,R as c,S as l,St as u,U as d,V as f,W as p,X as m,Y as h,_ as g,_t as _,at as v,b as y,c as b,dt as x,g as S,h as C,i as w,k as T,l as E,m as D,p as O,q as k,wt as A,x as j,xt as M,y as ee,yt as te,z as ne}from"./vue.runtime.esm-bundler-BvZ39CsU.js";import{t as re}from"./index-aHlmRunF.js";import{A as ie,C as N,D as ae,E as P,O as oe,S as se,T as ce,_ as le,a as ue,b as de,c as fe,d as pe,f as me,g as F,h as he,i as ge,k as _e,l as ve,m as ye,o as be,p as xe,r as Se,s as Ce,t as we,u as Te,v as Ee,w as De,x as Oe,y as ke}from"./webgl-device-2HEPBJxs.js";import{C as Ae,E as je,T as Me,a as Ne,b as Pe,c as Fe,d as Ie,f as Le,g as Re,h as ze,i as Be,l as Ve,m as He,n as Ue,o as I,p as We,r as Ge,s as Ke,u as qe,w as Je,x as Ye}from"./stores-CVnysCAS.js";import{t as Xe}from"./_plugin-vue_export-helper-B67ILkmu.js";import{t as Ze}from"./regular-location-ad0rcR8L.js";import{n as Qe}from"./vue-i18n-Cmj-II0X.js";import{i as $e,r as et}from"./vue-router-8un6p86k.js";var tt=`set luma.log.level=1 (or higher) to trace rendering`,nt="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.",rt=new class e{static defaultProps={...Ee.defaultProps,type:`best-available`,adapters:void 0,waitForPageLoad:!0};stats=_e;log=P;VERSION=`9.3.6`;spector;preregisteredAdapters=new Map;constructor(){if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw P.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),P.error(`'yarn why @luma.gl/core' can help identify the source of the conflict`)(),Error(`luma.gl - multiple versions detected: see console log`);P.error(`This version of luma.gl has already been initialized`)()}P.log(1,`${this.VERSION} - ${tt}`)(),globalThis.luma=this}async createDevice(t={}){let n={...e.defaultProps,...t},r=this.selectAdapter(n.type,n.adapters);if(!r)throw Error(nt);return n.waitForPageLoad&&await r.pageLoaded,await r.create(n)}async attachDevice(e,t){let n=this._getTypeFromHandle(e,t.adapters),r=n&&this.selectAdapter(n,t.adapters);if(!r)throw Error(nt);return await r?.attach?.(e,t)}registerAdapters(e){for(let t of e)this.preregisteredAdapters.set(t.type,t)}getSupportedAdapters(e=[]){let t=this._getAdapterMap(e);return Array.from(t).map(([,e])=>e).filter(e=>e.isSupported?.()).map(e=>e.type)}getBestAvailableAdapterType(e=[]){let t=[`webgpu`,`webgl`,`null`],n=this._getAdapterMap(e);for(let e of t)if(n.get(e)?.isSupported?.())return e;return null}selectAdapter(e,t=[]){let n=e;e===`best-available`&&(n=this.getBestAvailableAdapterType(t));let r=this._getAdapterMap(t);return n&&r.get(n)||null}enforceWebGL2(e=!0,t=[]){let n=this._getAdapterMap(t).get(`webgl`);n||P.warn(`enforceWebGL2: webgl adapter not found`)(),n?.enforceWebGL2?.(e)}setDefaultDeviceProps(t){Object.assign(e.defaultProps,t)}_getAdapterMap(e=[]){let t=new Map(this.preregisteredAdapters);for(let n of e)t.set(n.type,n);return t}_getTypeFromHandle(e,t=[]){return e instanceof WebGL2RenderingContext?`webgl`:typeof GPUDevice<`u`&&e instanceof GPUDevice||e?.queue?`webgpu`:e===null?`null`:(e instanceof WebGLRenderingContext?P.warn(`WebGL1 is not supported`,e)():P.warn(`Unknown handle type`,e)(),null)}},it=class{get pageLoaded(){return ct()}},at=oe()&&typeof document<`u`,ot=()=>at&&document.readyState===`complete`,st=null;function ct(){return st||=ot()||typeof window>`u`?Promise.resolve():new Promise(e=>window.addEventListener(`load`,()=>e())),st}var lt=class e extends De{get[Symbol.toStringTag](){return`ComputePipeline`}hash=``;shaderLayout;constructor(t,n){super(t,n,e.defaultProps),this.shaderLayout=n.shaderLayout}static defaultProps={...De.defaultProps,shader:void 0,entryPoint:void 0,constants:{},shaderLayout:void 0}},ut=class e{static defaultProps={...xe.defaultProps};static getDefaultPipelineFactory(t){let n=t.getModuleData(`@luma.gl/core`);return n.defaultPipelineFactory||=new e(t),n.defaultPipelineFactory}device;_hashCounter=0;_hashes={};_renderPipelineCache={};_computePipelineCache={};_sharedRenderPipelineCache={};get[Symbol.toStringTag](){return`PipelineFactory`}toString(){return`PipelineFactory(${this.device.id})`}constructor(e){this.device=e}createRenderPipeline(e){if(!this.device.props._cachePipelines)return this.device.createRenderPipeline(e);let t={...xe.defaultProps,...e},n=this._renderPipelineCache,r=this._hashRenderPipeline(t),i=n[r]?.resource;if(i)n[r].useCount++,this.device.props.debugFactories&&P.log(3,`${this}: ${n[r].resource} reused, count=${n[r].useCount}, (id=${e.id})`)();else{let e=this.device.type===`webgl`&&this.device.props._sharePipelines?this.createSharedRenderPipeline(t):void 0;i=this.device.createRenderPipeline({...t,id:t.id?`${t.id}-cached`:ce(`unnamed-cached`),_sharedRenderPipeline:e}),i.hash=r,n[r]={resource:i,useCount:1},this.device.props.debugFactories&&P.log(3,`${this}: ${i} created, count=${n[r].useCount}`)()}return i}createComputePipeline(e){if(!this.device.props._cachePipelines)return this.device.createComputePipeline(e);let t={...lt.defaultProps,...e},n=this._computePipelineCache,r=this._hashComputePipeline(t),i=n[r]?.resource;return i?(n[r].useCount++,this.device.props.debugFactories&&P.log(3,`${this}: ${n[r].resource} reused, count=${n[r].useCount}, (id=${e.id})`)()):(i=this.device.createComputePipeline({...t,id:t.id?`${t.id}-cached`:void 0}),i.hash=r,n[r]={resource:i,useCount:1},this.device.props.debugFactories&&P.log(3,`${this}: ${i} created, count=${n[r].useCount}`)()),i}release(e){if(!this.device.props._cachePipelines){e.destroy();return}let t=this._getCache(e),n=e.hash;t[n].useCount--,t[n].useCount===0?(this._destroyPipeline(e),this.device.props.debugFactories&&P.log(3,`${this}: ${e} released and destroyed`)()):t[n].useCount<0?(P.error(`${this}: ${e} released, useCount < 0, resetting`)(),t[n].useCount=0):this.device.props.debugFactories&&P.log(3,`${this}: ${e} released, count=${t[n].useCount}`)()}createSharedRenderPipeline(e){let t=this._hashSharedRenderPipeline(e),n=this._sharedRenderPipelineCache[t];return n||(n={resource:this.device._createSharedRenderPipelineWebGL(e),useCount:0},this._sharedRenderPipelineCache[t]=n),n.useCount++,n.resource}releaseSharedRenderPipeline(e){if(!e.sharedRenderPipeline)return;let t=this._hashSharedRenderPipeline(e.sharedRenderPipeline.props),n=this._sharedRenderPipelineCache[t];n&&(n.useCount--,n.useCount===0&&(n.resource.destroy(),delete this._sharedRenderPipelineCache[t]))}_destroyPipeline(e){let t=this._getCache(e);return this.device.props._destroyPipelines?(delete t[e.hash],e.destroy(),e instanceof xe&&this.releaseSharedRenderPipeline(e),!0):!1}_getCache(e){let t;if(e instanceof lt&&(t=this._computePipelineCache),e instanceof xe&&(t=this._renderPipelineCache),!t)throw Error(`${this}`);if(!t[e.hash])throw Error(`${this}: ${e} matched incorrect entry`);return t}_hashComputePipeline(e){let{type:t}=this.device;return`${t}/C/${this._getHash(e.shader.source)}SL${this._getHash(JSON.stringify(e.shaderLayout))}`}_hashRenderPipeline(e){let t=e.vs?this._getHash(e.vs.source):0,n=e.fs?this._getHash(e.fs.source):0,r=this._getWebGLVaryingHash(e),i=this._getHash(JSON.stringify(e.shaderLayout)),a=this._getHash(JSON.stringify(e.bufferLayout)),{type:o}=this.device;switch(o){case`webgl`:let s=this._getHash(JSON.stringify(e.parameters));return`${o}/R/${t}/${n}V${r}T${e.topology}P${s}SL${i}BL${a}`;default:let c=this._getHash(JSON.stringify({vertexEntryPoint:e.vertexEntryPoint,fragmentEntryPoint:e.fragmentEntryPoint})),l=this._getHash(JSON.stringify(e.parameters)),u=this._getWebGPUAttachmentHash(e);return`${o}/R/${t}/${n}V${r}T${e.topology}EP${c}P${l}SL${i}BL${a}A${u}`}}_hashSharedRenderPipeline(e){return`webgl/S/${e.vs?this._getHash(e.vs.source):0}/${e.fs?this._getHash(e.fs.source):0}V${this._getWebGLVaryingHash(e)}`}_getHash(e){return this._hashes[e]===void 0&&(this._hashes[e]=this._hashCounter++),this._hashes[e]}_getWebGLVaryingHash(e){let{varyings:t=[],bufferMode:n=null}=e;return this._getHash(JSON.stringify({varyings:t,bufferMode:n}))}_getWebGPUAttachmentHash(e){let t=e.colorAttachmentFormats??[this.device.preferredColorFormat],n=e.parameters?.depthWriteEnabled?e.depthStencilAttachmentFormat||this.device.preferredDepthFormat:null;return this._getHash(JSON.stringify({colorAttachmentFormats:t,depthStencilAttachmentFormat:n}))}},dt=class e{static defaultProps={...ye.defaultProps};static getDefaultShaderFactory(t){let n=t.getModuleData(`@luma.gl/core`);return n.defaultShaderFactory||=new e(t),n.defaultShaderFactory}device;_cache={};get[Symbol.toStringTag](){return`ShaderFactory`}toString(){return`${this[Symbol.toStringTag]}(${this.device.id})`}constructor(e){this.device=e}createShader(e){if(!this.device.props._cacheShaders)return this.device.createShader(e);let t=this._hashShader(e),n=this._cache[t];if(n)n.useCount++,this.device.props.debugFactories&&P.log(3,`${this}: Reusing shader ${n.resource.id} count=${n.useCount}`)();else{let r=this.device.createShader({...e,id:e.id?`${e.id}-cached`:void 0});this._cache[t]=n={resource:r,useCount:1},this.device.props.debugFactories&&P.log(3,`${this}: Created new shader ${r.id}`)()}return n.resource}release(e){if(!this.device.props._cacheShaders){e.destroy();return}let t=this._hashShader(e),n=this._cache[t];if(n)if(n.useCount--,n.useCount===0)this.device.props._destroyShaders&&(delete this._cache[t],n.resource.destroy(),this.device.props.debugFactories&&P.log(3,`${this}: Releasing shader ${e.id}, destroyed`)());else if(n.useCount<0)throw Error(`ShaderFactory: Shader ${e.id} released too many times`);else this.device.props.debugFactories&&P.log(3,`${this}: Releasing shader ${e.id} count=${n.useCount}`)()}_hashShader(e){return`${e.stage}:${e.source}`}};function ft(e,t={}){let n={...e},r=t.layout??`std140`,i={},a=0;for(let[e,t]of Object.entries(n))a=ht(i,e,t,a,r);return a=Ce(a,_t(n,r)),{layout:r,byteLength:a*4,uniformTypes:n,fields:i}}function pt(e,t){let n=pe(e),r=Te(n),i=/^mat(\d)x(\d)<.+>$/.exec(n);if(i){let e=Number(i[1]),a=Number(i[2]),o=vt(a,n,r.type,t),s=xt(o.size,o.alignment,t);return{alignment:o.alignment,size:e*s,components:e*a,columns:e,rows:a,columnStride:s,shaderType:n,type:r.type}}let a=/^vec(\d)<.+>$/.exec(n);return a?vt(Number(a[1]),n,r.type,t):{alignment:1,size:1,components:1,columns:1,rows:1,columnStride:1,shaderType:n,type:r.type}}function mt(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function ht(e,t,n,r,i){if(typeof n==`string`){let a=pt(n,i),o=Ce(r,a.alignment);return e[t]={offset:o,...a},o+a.size}if(Array.isArray(n)){if(Array.isArray(n[0]))throw Error(`Nested arrays are not supported for ${t}`);let a=n[0],o=n[1],s=yt(a,i),c=Ce(r,_t(n,i));for(let n=0;n<o;n++)ht(e,`${t}[${n}]`,a,c+n*s,i);return c+s*o}if(mt(n)){let a=_t(n,i),o=Ce(r,a);for(let[r,a]of Object.entries(n))o=ht(e,`${t}.${r}`,a,o,i);return Ce(o,a)}throw Error(`Unsupported CompositeShaderType for ${t}`)}function gt(e,t){if(typeof e==`string`)return pt(e,t).size;if(Array.isArray(e)){let n=e[0],r=e[1];if(Array.isArray(n))throw Error(`Nested arrays are not supported`);return yt(n,t)*r}let n=0;for(let r of Object.values(e)){let e=r;n=Ce(n,_t(e,t)),n+=gt(e,t)}return Ce(n,_t(e,t))}function _t(e,t){if(typeof e==`string`)return pt(e,t).alignment;if(Array.isArray(e)){let n=e[0],r=_t(n,t);return St(t)?Math.max(r,4):r}let n=1;for(let r of Object.values(e)){let e=_t(r,t);n=Math.max(n,e)}return Ct(t)?Math.max(n,4):n}function vt(e,t,n,r){return{alignment:e===2?2:4,size:e===3?3:e,components:e,columns:1,rows:e,columnStride:e===3?3:e,shaderType:t,type:n}}function yt(e,t){return bt(gt(e,t),_t(e,t),t)}function bt(e,t,n){return Ce(e,St(n)?4:t)}function xt(e,t,n){return n===`std140`?4:Ce(e,t)}function St(e){return e===`std140`||e===`wgsl-uniform`}function Ct(e){return e===`std140`||e===`wgsl-uniform`}function wt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Tt(e){return Array.isArray(e)?e.length===0||typeof e[0]==`number`:wt(e)}var Et=class{layout;constructor(e){this.layout=e}has(e){return!!this.layout.fields[e]}get(e){let t=this.layout.fields[e];return t?{offset:t.offset,size:t.size}:void 0}getFlatUniformValues(e){let t={};for(let[n,r]of Object.entries(e)){let e=this.layout.uniformTypes[n];e?this._flattenCompositeValue(t,n,e,r):this.layout.fields[n]&&(t[n]=r)}return t}getData(e){let t=be(this.layout.byteLength);new Uint8Array(t,0,this.layout.byteLength).fill(0);let n={i32:new Int32Array(t),u32:new Uint32Array(t),f32:new Float32Array(t),f16:new Uint16Array(t)},r=this.getFlatUniformValues(e);for(let[e,t]of Object.entries(r))this._writeLeafValue(n,e,t);return new Uint8Array(t,0,this.layout.byteLength)}_flattenCompositeValue(e,t,n,r){if(r!==void 0){if(typeof n==`string`||this.layout.fields[t]){e[t]=r;return}if(Array.isArray(n)){let i=n[0],a=n[1];if(Array.isArray(i))throw Error(`Nested arrays are not supported for ${t}`);if(typeof i==`string`&&Tt(r)){this._flattenPackedArray(e,t,i,a,r);return}if(!Array.isArray(r)){P.warn(`Unsupported uniform array value for ${t}:`,r)();return}for(let n=0;n<Math.min(r.length,a);n++){let a=r[n];a!==void 0&&this._flattenCompositeValue(e,`${t}[${n}]`,i,a)}return}if(mt(n)&&Dt(r)){for(let[i,a]of Object.entries(r)){if(a===void 0)continue;let r=`${t}.${i}`;this._flattenCompositeValue(e,r,n[i],a)}return}P.warn(`Unsupported uniform value for ${t}:`,r)()}}_flattenPackedArray(e,t,n,r,i){let a=i,o=pt(n,this.layout.layout).components;for(let n=0;n<r;n++){let r=n*o;if(r>=a.length)break;o===1?e[`${t}[${n}]`]=Number(a[r]):e[`${t}[${n}]`]=Ot(i,r,r+o)}}_writeLeafValue(e,t,n){let r=this.layout.fields[t];if(!r){P.warn(`Uniform ${t} not found in layout`)();return}let{type:i,components:a,columns:o,rows:s,offset:c,columnStride:l}=r,u=e[i];if(a===1){u[c]=Number(n);return}let d=n;if(o===1){for(let e=0;e<a;e++)u[c+e]=Number(d[e]??0);return}let f=0;for(let e=0;e<o;e++){let t=c+e*l;for(let e=0;e<s;e++)u[t+e]=Number(d[f++]??0)}}};function Dt(e){return!!e&&typeof e==`object`&&!Array.isArray(e)&&!ArrayBuffer.isView(e)}function Ot(e,t,n){return Array.prototype.slice.call(e,t,n)}var kt=128;function At(e,t,n=16){if(e===t)return!0;let r=e,i=t;if(!Tt(r)||!Tt(i)||r.length!==i.length)return!1;let a=Math.min(n,kt);if(r.length>a)return!1;for(let e=0;e<r.length;++e)if(i[e]!==r[e])return!1;return!0}function jt(e){return Tt(e)?e.slice():e}var Mt=class{name;uniforms={};modifiedUniforms={};modified=!0;bindingLayout={};needsRedraw=`initialized`;constructor(e){if(this.name=e?.name||`unnamed`,e?.name&&e?.shaderLayout){let t=e?.shaderLayout.bindings?.find(t=>t.type===`uniform`&&t.name===e?.name);if(!t)throw Error(e?.name);let n=t;for(let e of n.uniforms||[])this.bindingLayout[e.name]=e}}setUniforms(e){for(let[t,n]of Object.entries(e))this._setUniform(t,n),this.needsRedraw||this.setNeedsRedraw(`${this.name}.${t}=${n}`)}setNeedsRedraw(e){this.needsRedraw=this.needsRedraw||e}getAllUniforms(){return this.modifiedUniforms={},this.needsRedraw=!1,this.uniforms||{}}_setUniform(e,t){At(this.uniforms[e],t)||(this.uniforms[e]=jt(t),this.modifiedUniforms[e]=!0,this.modified=!0)}},Nt=1024,Pt=class{device;uniformBlocks=new Map;shaderBlockLayouts=new Map;shaderBlockWriters=new Map;uniformBuffers=new Map;constructor(e,t){this.device=e;for(let[n,r]of Object.entries(t)){let t=n,i=ft(r.uniformTypes??{},{layout:r.layout??Ft(e)}),a=new Et(i);this.shaderBlockLayouts.set(t,i),this.shaderBlockWriters.set(t,a);let o=new Mt({name:n});o.setUniforms(a.getFlatUniformValues(r.defaultUniforms||{})),this.uniformBlocks.set(t,o)}}destroy(){for(let e of this.uniformBuffers.values())e.destroy()}setUniforms(e){for(let[t,n]of Object.entries(e)){let e=t,r=this.shaderBlockWriters.get(e)?.getFlatUniformValues(n||{});this.uniformBlocks.get(e)?.setUniforms(r||{})}this.updateUniformBuffers()}getUniformBufferByteLength(e){let t=this.shaderBlockLayouts.get(e)?.byteLength||0;return Math.max(t,Nt)}getUniformBufferData(e){let t=this.uniformBlocks.get(e)?.getAllUniforms()||{};return this.shaderBlockWriters.get(e)?.getData(t)||new Uint8Array}createUniformBuffer(e,t){t&&this.setUniforms(t);let n=this.getUniformBufferByteLength(e),r=this.device.createBuffer({usage:N.UNIFORM|N.COPY_DST,byteLength:n}),i=this.getUniformBufferData(e);return r.write(i),r}getManagedUniformBuffer(e){if(!this.uniformBuffers.get(e)){let t=this.getUniformBufferByteLength(e),n=this.device.createBuffer({usage:N.UNIFORM|N.COPY_DST,byteLength:t});this.uniformBuffers.set(e,n)}return this.uniformBuffers.get(e)}updateUniformBuffers(){let e=!1;for(let t of this.uniformBlocks.keys()){let n=this.updateUniformBuffer(t);e||=n}return e&&P.log(3,`UniformStore.updateUniformBuffers(): ${e}`)(),e}updateUniformBuffer(e){let t=this.uniformBlocks.get(e),n=this.uniformBuffers.get(e),r=!1;if(n&&t?.needsRedraw){r||=t.needsRedraw;let i=this.getUniformBufferData(e);n=this.uniformBuffers.get(e),n?.write(i);let a=this.uniformBlocks.get(e)?.getAllUniforms();P.log(4,`Writing to uniform buffer ${String(e)}`,i,a)()}return r}};function Ft(e){return e.type===`webgpu`?`wgsl-uniform`:`std140`}var It={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}},Lt=e=>({drawBuffersWEBGL(t){return e.drawBuffers(t)},COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067}),Rt=e=>({VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES(){return e.createVertexArray()},deleteVertexArrayOES(t){return e.deleteVertexArray(t)},isVertexArrayOES(t){return e.isVertexArray(t)},bindVertexArrayOES(t){return e.bindVertexArray(t)}}),zt=e=>({VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE(...t){return e.drawArraysInstanced(...t)},drawElementsInstancedANGLE(...t){return e.drawElementsInstanced(...t)},vertexAttribDivisorANGLE(...t){return e.vertexAttribDivisor(...t)}});function Bt(e=!0){let t=HTMLCanvasElement.prototype;if(!e&&t.originalGetContext){t.getContext=t.originalGetContext,t.originalGetContext=void 0;return}t.originalGetContext=t.getContext,t.getContext=function(e,t){if(e===`webgl`||e===`experimental-webgl`){let e=this.originalGetContext(`webgl2`,t);return e instanceof HTMLElement&&Vt(e),e}return this.originalGetContext(e,t)}}function Vt(e){e.getExtension(`EXT_color_buffer_float`);let t={...It,WEBGL_disjoint_timer_query:e.getExtension(`EXT_disjoint_timer_query_webgl2`),WEBGL_draw_buffers:Lt(e),OES_vertex_array_object:Rt(e),ANGLE_instanced_arrays:zt(e)},n=e.getExtension;e.getExtension=function(r){return n.call(e,r)||(r in t?t[r]:null)};let r=e.getSupportedExtensions;e.getSupportedExtensions=function(){return(r.apply(e)||[])?.concat(Object.keys(t))}}var Ht=1,Ut=class extends it{type=`webgl`;constructor(){super(),Ee.defaultProps={...Ee.defaultProps,...ge}}enforceWebGL2(e){Bt(e)}isSupported(){return typeof WebGL2RenderingContext<`u`}isDeviceHandle(e){return typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext?!0:(typeof WebGLRenderingContext<`u`&&e instanceof WebGLRenderingContext&&P.warn(`WebGL1 is not supported`,e)(),!1)}async attach(e,t={}){let{WebGLDevice:n}=await re(async()=>{let{WebGLDevice:e}=await import(`./webgl-device-2HEPBJxs.js`).then(e=>e.n);return{WebGLDevice:e}},__vite__mapDeps([0,1]));if(e instanceof n)return e;let r=n.getDeviceFromContext(e);if(r)return r;if(!Wt(e))throw Error(`Invalid WebGL2RenderingContext`);let i=t.createCanvasContext===!0?{}:t.createCanvasContext;return new n({...t,_handle:e,createCanvasContext:{canvas:e.canvas,autoResize:!1,...i}})}async create(e={}){let{WebGLDevice:t}=await re(async()=>{let{WebGLDevice:e}=await import(`./webgl-device-2HEPBJxs.js`).then(e=>e.n);return{WebGLDevice:e}},__vite__mapDeps([0,1])),n=[];(e.debugWebGL||e.debug)&&n.push(Se()),e.debugSpectorJS&&n.push(ue(e));let r=await Promise.allSettled(n);for(let e of r)e.status===`rejected`&&P.error(`Failed to initialize debug libraries ${e.reason}`)();try{let n=new t(e);P.groupCollapsed(Ht,`WebGLDevice ${n.id} created`)();let r=`\
${n._reused?`Reusing`:`Created`} device with WebGL2 ${n.props.debug?`debug `:``}context: \
${n.info.vendor}, ${n.info.renderer} for canvas: ${n.canvasContext.id}`;return P.probe(Ht,r)(),P.table(Ht,n.info)(),n}finally{P.groupEnd(Ht)(),P.info(Ht,`%cWebGL call tracing: luma.log.set('debug-webgl') `,`color: white; background: blue; padding: 2px 6px; border-radius: 3px;`)()}}};function Wt(e){return typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext?!0:!!(e&&typeof e.createVertexArray==`function`)}var Gt=new Ut;function Kt(e){return I(e?.lift)}function qt(e){return function(t){if(Kt(t))return t.lift(function(t){try{return e(t,this)}catch(e){this.error(e)}});throw TypeError(`Unable to lift unknown Observable type`)}}function Jt(e,t,n,r,i){return new Yt(e,t,n,r,i)}var Yt=function(e){Ie(t,e);function t(t,n,r,i,a,o){var s=e.call(this,t)||this;return s.onFinalize=a,s.shouldUnsubscribe=o,s._next=n?function(e){try{n(e)}catch(e){t.error(e)}}:e.prototype._next,s._error=i?function(e){try{i(e)}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._error,s._complete=r?function(){try{r()}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._complete,s}return t.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)==null||t.call(this))}},t}(Be),Xt=(function(e){return e&&typeof e.length==`number`&&typeof e!=`function`});function Zt(e){return I(e?.then)}function Qt(e){return I(e[Ge])}function $t(e){return Symbol.asyncIterator&&I(e?.[Symbol.asyncIterator])}function en(e){return TypeError(`You provided `+(typeof e==`object`&&e?`an invalid object`:`'`+e+`'`)+` where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function tn(){return typeof Symbol!=`function`||!Symbol.iterator?`@@iterator`:Symbol.iterator}var nn=tn();function rn(e){return I(e?.[nn])}function an(e){return Ke(this,arguments,function(){var t,n,r,i;return Le(this,function(a){switch(a.label){case 0:t=e.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,Ve(t.read())];case 3:return n=a.sent(),r=n.value,i=n.done,i?[4,Ve(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,Ve(r)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function on(e){return I(e?.getReader)}function sn(e){if(e instanceof Ue)return e;if(e!=null){if(Qt(e))return cn(e);if(Xt(e))return ln(e);if(Zt(e))return un(e);if($t(e))return fn(e);if(rn(e))return dn(e);if(on(e))return pn(e)}throw en(e)}function cn(e){return new Ue(function(t){var n=e[Ge]();if(I(n.subscribe))return n.subscribe(t);throw TypeError(`Provided object does not correctly implement Symbol.observable`)})}function ln(e){return new Ue(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function un(e){return new Ue(function(t){e.then(function(e){t.closed||(t.next(e),t.complete())},function(e){return t.error(e)}).then(null,Ne)})}function dn(e){return new Ue(function(t){var n,r;try{for(var i=ze(e),a=i.next();!a.done;a=i.next()){var o=a.value;if(t.next(o),t.closed)return}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()})}function fn(e){return new Ue(function(t){mn(e,t).catch(function(e){return t.error(e)})})}function pn(e){return fn(an(e))}function mn(e,t){var n,r,i,a;return qe(this,void 0,void 0,function(){var o,s;return Le(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=Fe(e),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),r.done)return[3,4];if(o=r.value,t.next(o),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),i={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(a=n.return)?[4,a.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function hn(e,t,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var a=t.schedule(function(){n(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(a),!i)return a}function gn(e,t){return qt(function(n,r){var i=0;n.subscribe(Jt(r,function(n){r.next(e.call(t,n,i++))}))})}var _n=Array.isArray;function vn(e,t){return _n(t)?e.apply(void 0,He([],We(t))):e(t)}function yn(e){return gn(function(t){return vn(e,t)})}function bn(e,t,n,r,i,a,o,s){var c=[],l=0,u=0,d=!1,f=function(){d&&!c.length&&!l&&t.complete()},p=function(e){return l<r?m(e):c.push(e)},m=function(e){a&&t.next(e),l++;var s=!1;sn(n(e,u++)).subscribe(Jt(t,function(e){i?.(e),a?p(e):t.next(e)},function(){s=!0},void 0,function(){if(s)try{l--;for(var e=function(){var e=c.shift();o?hn(t,o,function(){return m(e)}):m(e)};c.length&&l<r;)e();f()}catch(e){t.error(e)}}))};return e.subscribe(Jt(t,p,function(){d=!0,f()})),function(){s?.()}}function xn(e,t,n){return n===void 0&&(n=1/0),I(t)?xn(function(n,r){return gn(function(e,i){return t(n,e,r,i)})(sn(e(n,r)))},n):(typeof t==`number`&&(n=t),qt(function(t,r){return bn(t,r,e,n)}))}var Sn=[`addListener`,`removeListener`],Cn=[`addEventListener`,`removeEventListener`],wn=[`on`,`off`];function Tn(e,t,n,r){if(I(n)&&(r=n,n=void 0),r)return Tn(e,t,n).pipe(yn(r));var i=We(kn(e)?Cn.map(function(r){return function(i){return e[r](t,i,n)}}):Dn(e)?Sn.map(En(e,t)):On(e)?wn.map(En(e,t)):[],2),a=i[0],o=i[1];if(!a&&Xt(e))return xn(function(e){return Tn(e,t,n)})(sn(e));if(!a)throw TypeError(`Invalid event target`);return new Ue(function(e){var t=function(){var t=[...arguments];return e.next(1<t.length?t:t[0])};return a(t),function(){return o(t)}})}function En(e,t){return function(n){return function(r){return e[n](t,r)}}}function Dn(e){return I(e.addListener)&&I(e.removeListener)}function On(e){return I(e.on)&&I(e.off)}function kn(e){return I(e.addEventListener)&&I(e.removeEventListener)}var An={width:`100%`,height:`100%`,viewBox:`0 64 1024 960`,xmlns:`http://www.w3.org/2000/svg`},jn=[`id`],Mn=[`id`],Nn=[`href`,`clip-path`],Pn=l({__name:`regular-filter`,setup(e){let t=crypto.getRandomValues(new Uint32Array(1))[0].toString(36);return(e,n)=>(i(),g(`svg`,An,[D(`defs`,null,[D(`path`,{id:`icon-path-${_(t)}`,d:`M0,160C0,146.667 2.5,134.167 7.5,122.5C12.5,110.833 19.3333,100.667 28,92C36.6667,83.3334 46.8333,76.5001 58.5,71.5C70.1667,66.5001 82.6667,64.0001 96,64L928,64C941.333,64.0001 953.833,66.5001 965.5,71.5C977.167,76.5001 987.333,83.3334 996,92C1004.67,100.667 1011.5,110.833 1016.5,122.5C1021.5,134.167 1024,146.667 1024,160C1024,187.333 1014,210.5 994,229.5L670,538.5C665.333,543.167 661.167,548.167 657.5,553.5C653.833,558.833 650.667,564.333 648,570C642.667,581.667 640,594.333 640,608L640,992C640,1000.67 636.833,1008.17 630.5,1014.5C624.167,1020.83 616.667,1024 608,1024C601.667,1024 595.833,1022.17 590.5,1018.5L398.5,890.5C388.833,884.167 384,875.333 384,864L384,608C384,594.667 381.5,582 376.5,570C373.833,564 370.583,558.417 366.75,553.25C362.917,548.083 358.667,543.167 354,538.5L30,229.5C10,210.5 0,187.333 0,160Z`},null,8,jn)]),D(`clipPath`,{id:`icon-clip-${_(t)}`,class:`translate-y-[calc(var(--icon-fill-progress)-100%)]`},[...n[0]||=[D(`rect`,{x:`0`,y:`64`,width:`1024`,height:`960`,fill:`currentColor`},null,-1)]],8,Mn),n[1]||=D(`path`,{d:`M0,160C0,146.667 2.5,134.167 7.5,122.5C12.5,110.833 19.3333,100.667 28,92C36.6667,83.3334 46.8333,76.5001 58.5,71.5C70.1667,66.5001 82.6667,64.0001 96,64L928,64C941.333,64.0001 953.833,66.5001 965.5,71.5C977.167,76.5001 987.333,83.3334 996,92C1004.67,100.667 1011.5,110.833 1016.5,122.5C1021.5,134.167 1024,146.667 1024,160C1024,187.333 1014,210.5 994,229.5L670,538.5C665.333,543.167 661.167,548.167 657.5,553.5C653.833,558.833 650.667,564.333 648,570C642.667,581.667 640,594.333 640,608L640,992C640,1000.67 636.833,1008.17 630.5,1014.5C624.167,1020.83 616.667,1024 608,1024C601.667,1024 595.833,1022.17 590.5,1018.5L398.5,890.5C388.833,884.167 384,875.333 384,864L384,608C384,594.667 381.5,582 376.5,570C373.833,564 370.583,558.417 366.75,553.25C362.917,548.083 358.667,543.167 354,538.5L30,229.5C10,210.5 0,187.333 0,160ZM960,159.5C960,150.833 956.833,143.417 950.5,137.25C944.167,131.083 936.667,128 928,128L96,128C87.3333,128 79.8333,131.083 73.5,137.25C67.1667,143.417 64,150.833 64,159.5C64,169.167 67.3333,177 74,183L398.5,492C414.167,507 426.333,524.667 435,545C443.667,565.333 448,586.333 448,608L448,847L576,932L576,608C576,586.333 580.333,565.333 589,545C597.667,524.667 609.833,507 625.5,492L950,183C956.667,177 960,169.167 960,159.5Z`,fill:`currentColor`},null,-1),D(`use`,{href:`#icon-path-${_(t)}`,fill:`currentColor`,"clip-path":`url(#icon-clip-${_(t)})`},null,8,Nn)]))}}),Fn={},In={height:`100%`,width:`100%`,viewBox:`0 0 1024 960`,xmlns:`http://www.w3.org/2000/svg`};function Ln(e,t){return i(),g(`svg`,In,[...t[0]||=[D(`path`,{d:`M233,628C199.333,619 168.333,604.583 140,584.75C111.667,564.917 87.0833,541.5 66.25,514.5C45.4167,487.5 29.1667,457.667 17.5,425C5.83333,392.333 0,358.667 0,324C0,294.333 3.75,265.667 11.25,238C18.75,210.333 29.3333,184.5 43,160.5C56.6667,136.5 73.1667,114.667 92.5,95C111.833,75.3334 133.333,58.4167 157,44.25C180.667,30.0834 206.25,19.1667 233.75,11.5C261.25,3.83337 290,0 320,0C364.333,0 405.917,8.33337 444.75,25C483.583,41.6667 517.5,64.5 546.5,93.5C575.5,122.5 598.333,156.417 615,195.25C631.667,234.083 640,275.667 640,320L576,320C576,309.333 575.333,298.667 574,288C572.667,277.333 570.667,266.667 568,256L445.5,256C446.167,266.667 446.75,277.333 447.25,288C447.75,298.667 448,309.333 448,320C448,341.667 447.083,362.833 445.25,383.5C443.417,404.167 441.167,425.167 438.5,446.5L438.5,448L266.5,448C268.167,457.667 270.083,467.083 272.25,476.25C274.417,485.417 276.833,494.667 279.5,504L279,504.5C271.333,525.167 263.667,545.75 256,566.25C248.333,586.75 240.667,607.333 233,628ZM266.5,192L373.5,192C372.167,185 370,174.917 367,161.75C364,148.583 360.25,135.25 355.75,121.75C351.25,108.25 346,96.0001 340,85C334,74.0001 327.5,67.0001 320.5,64L319.5,64C312.5,67.0001 306,74.0001 300,85C294,96.0001 288.75,108.25 284.25,121.75C279.75,135.25 276,148.583 273,161.75C270,174.917 267.833,185 266.5,192ZM98,192L201.5,192C207.5,153 217.667,115.5 232,79.5C203.667,89.8334 178,104.667 155,124C132,143.333 113,166 98,192ZM542,192C527,166 508,143.333 485,124C462,104.667 436.333,89.8334 408,79.5C422.333,115.5 432.5,153 438.5,192ZM72,256C69.3333,266.667 67.3333,277.333 66,288C64.6667,298.667 64,309.333 64,320C64,330.667 64.6667,341.333 66,352C67.3333,362.667 69.3333,373.333 72,384L194.5,384C193.833,373.333 193.25,362.667 192.75,352C192.25,341.333 192,330.667 192,320C192,309.333 192.25,298.667 192.75,288C193.25,277.333 193.833,266.667 194.5,256ZM381.5,256L258.5,256C257.833,266.667 257.25,277.333 256.75,288C256.25,298.667 256,309.333 256,320C256,330.667 256.25,341.333 256.75,352C257.25,362.667 257.833,373.333 258.5,384L381.5,384C382.167,373.333 382.75,362.667 383.25,352C383.75,341.333 384,330.667 384,320C384,309.333 383.75,298.667 383.25,288C382.75,277.333 382.167,266.667 381.5,256ZM1024,416L1024,512C1024,520.667 1020.83,528.167 1014.5,534.5C1008.17,540.833 1000.67,544 992,544C983.333,544 975.833,540.833 969.5,534.5C963.167,528.167 960,520.667 960,512L960,448L576,448L576,512C576,520.667 572.833,528.167 566.5,534.5C560.167,540.833 552.667,544 544,544C535.333,544 527.833,540.833 521.5,534.5C515.167,528.167 512,520.667 512,512L512,416C512,407.333 515.167,399.833 521.5,393.5C527.833,387.167 535.333,384 544,384L736,384C736,381.333 735.917,378.583 735.75,375.75C735.583,372.917 735.5,370 735.5,367C735.5,361.333 735.833,355.75 736.5,350.25C737.167,344.75 738.583,339.75 740.75,335.25C742.917,330.75 746.167,327.083 750.5,324.25C754.833,321.417 760.667,320 768,320C775.333,320 781.083,321.417 785.25,324.25C789.417,327.083 792.583,330.75 794.75,335.25C796.917,339.75 798.333,344.75 799,350.25C799.667,355.75 800,361.333 800,367L800,384L992,384C1000.67,384 1008.17,387.167 1014.5,393.5C1020.83,399.833 1024,407.333 1024,416ZM98.5,448C113.5,474 132.5,496.583 155.5,515.75C178.5,534.917 204,549.833 232,560.5C217.667,524.5 207.5,487 201.5,448ZM1024,672C1024,680.667 1020.83,688.167 1014.5,694.5C1008.17,700.833 1000.67,704 992,704L832,704L832,832C832,841 830.333,849.333 827,857C823.667,864.667 819.083,871.417 813.25,877.25C807.417,883.083 800.667,887.667 793,891C785.333,894.333 777,896 768,896L736,896C727.333,896 719.833,892.833 713.5,886.5C707.167,880.167 704,872.667 704,864C704,856.667 705.417,850.917 708.25,846.75C711.083,842.583 714.75,839.417 719.25,837.25C723.75,835.083 728.75,833.667 734.25,833C739.75,832.333 745.333,832 751,832L768,832L768,704L608,704C599.333,704 591.833,700.833 585.5,694.5C579.167,688.167 576,680.667 576,672C576,663.333 579.167,655.833 585.5,649.5C591.833,643.167 599.333,640 608,640L768,640C768,635.667 769.417,630.5 772.25,624.5C775.083,618.5 778.5,612.5 782.5,606.5C786.5,600.5 790.5,594.833 794.5,589.5C798.5,584.167 801.667,579.667 804,576L672,576C663.333,576 655.833,572.833 649.5,566.5C643.167,560.167 640,552.667 640,544C640,535.333 643.167,527.833 649.5,521.5C655.833,515.167 663.333,512 672,512L864,512C872.667,512 880.167,515.167 886.5,521.5C892.833,527.833 896,535.333 896,544C896,550.333 894.167,556.167 890.5,561.5L838.5,640L992,640C1000.67,640 1008.17,643.167 1014.5,649.5C1020.83,655.833 1024,663.333 1024,672ZM560,928C560,937 556.917,944.583 550.75,950.75C544.583,956.917 537,960 528,960C521.333,960 515.25,958.083 509.75,954.25C504.25,950.417 500.333,945.333 498,939L458,832L310,832L270,939C267.667,945.333 263.75,950.417 258.25,954.25C252.75,958.083 246.667,960 240,960C231.333,960 223.833,956.833 217.5,950.5C211.167,944.167 208,936.667 208,928C208,923.333 208.667,919.5 210,916.5L258,789.5C274.333,746.5 290.417,703.667 306.25,661C322.083,618.333 338,575.5 354,532.5C356.333,526.167 360.333,521.5 366,518.5C371.667,515.5 377.667,514 384,514C390.667,514 396.667,515.5 402,518.5C407.333,521.5 411.333,526.167 414,532.5C430,575.5 445.833,618.333 461.5,661C477.167,703.667 493.333,746.5 510,789.5L558,916.5C559.333,919.5 560,923.333 560,928ZM384,635L334,768L434,768Z`,fill:`currentColor`},null,-1)]])}var Rn=Xe(Fn,[[`render`,Ln]]),zn={width:`100%`,height:`100%`,viewBox:`28 0 968 1024`,xmlns:`http://www.w3.org/2000/svg`},Bn=[`id`],Vn=[`clip-path`],Hn=l({__name:`regular-setting`,setup(e){let t=crypto.getRandomValues(new Uint32Array(1))[0].toString(36);return(e,n)=>(i(),g(`svg`,zn,[D(`clipPath`,{id:`icon-clip-${_(t)}`,class:`origin-c scale-[var(--icon-fill-progress)]`},[...n[0]||=[D(`rect`,{x:`28`,y:`0`,width:`968`,height:`1024`,fill:`currentColor`},null,-1)]],8,Bn),n[1]||=D(`path`,{d:`
        M300.5,818.5C288.833,818.5 277.333,820.667 266,825C254.667,829.333 243.417,834 232.25,839C221.083,844 209.833,848.667 198.5,853C187.167,857.333 175.667,859.5 164,859.5C154,859.5 144.833,857.417 136.5,853.25C128.167,849.083 120.667,843.167 114,835.5C109.667,830.5 104.583,823.833 98.75,815.5C92.9167,807.167 86.8333,798 80.5,788C74.1667,778 67.8333,767.417 61.5,756.25C55.1667,745.083 49.5833,734.25 44.75,723.75C39.9167,713.25 36,703.333 33,694C30,684.667 28.5,676.833 28.5,670.5C28.5,658.5 31.5,647.75 37.5,638.25C43.5,628.75 50.9167,620.083 59.75,612.25C68.5833,604.417 78.25,597 88.75,590C99.25,583 108.917,575.583 117.75,567.75C126.583,559.917 134,551.583 140,542.75C146,533.917 149,523.667 149,512C149,500.667 146,490.5 140,481.5C134,472.5 126.5,464.083 117.5,456.25C108.5,448.417 98.8333,440.833 88.5,433.5C78.1667,426.167 68.5,418.417 59.5,410.25C50.5,402.083 43,393.333 37,384C31,374.667 28,364 28,352C28,346 29.5833,338.333 32.75,329C35.9167,319.667 40,309.667 45,299C50,288.333 55.75,277.417 62.25,266.25C68.75,255.083 75.25,244.417 81.75,234.25C88.25,224.083 94.5,214.833 100.5,206.5C106.5,198.167 111.667,191.667 116,187C122.667,179.667 130.25,174 138.75,170C147.25,166 156.333,164 166,164C177.667,164 189,166.167 200,170.5C211,174.833 222,179.583 233,184.75C244,189.917 255.083,194.667 266.25,199C277.417,203.333 288.833,205.5 300.5,205.5C315.5,205.5 328.417,200.917 339.25,191.75C350.083,182.583 356.833,170.667 359.5,156C362.5,139.667 365.5,123.333 368.5,107C371.5,90.6667 374.5,74.3334 377.5,58C380.167,44.0001 386.25,32.5001 395.75,23.5C405.25,14.5001 417,8.66675 431,6C444.333,3.66675 457.833,2.08337 471.5,1.25C485.167,0.416687 498.667,0 512,0C526,0 540,0.5 554,1.5C568,2.5 581.833,4.33337 595.5,7C609.5,9.66669 621,15.5 630,24.5C639,33.5 644.833,45 647.5,59C650.5,75.3334 653.333,91.5001 656,107.5C658.667,123.5 661.5,139.667 664.5,156C667.167,170.333 674,182.167 685,191.5C696,200.833 708.833,205.5 723.5,205.5C735.167,205.5 746.667,203.333 758,199C769.333,194.667 780.583,190 791.75,185C802.917,180 814.167,175.333 825.5,171C836.833,166.667 848.333,164.5 860,164.5C870.333,164.5 879.583,166.583 887.75,170.75C895.917,174.917 903.333,180.833 910,188.5C914.333,193.5 919.417,200.167 925.25,208.5C931.083,216.833 937.167,226 943.5,236C949.833,246 956.167,256.583 962.5,267.75C968.833,278.917 974.417,289.75 979.25,300.25C984.083,310.75 988,320.667 991,330C994,339.333 995.5,347.167 995.5,353.5C995.5,365.833 992.5,376.667 986.5,386C980.5,395.333 973.083,403.917 964.25,411.75C955.417,419.583 945.75,427 935.25,434C924.75,441 915.083,448.417 906.25,456.25C897.417,464.083 890,472.417 884,481.25C878,490.083 875,500.333 875,512C875,523.333 878,533.5 884,542.5C890,551.5 897.5,559.917 906.5,567.75C915.5,575.583 925.167,583.167 935.5,590.5C945.833,597.833 955.5,605.583 964.5,613.75C973.5,621.917 981,630.667 987,640C993,649.333 996,660 996,672C996,678.667 994.417,686.583 991.25,695.75C988.083,704.917 984,714.833 979,725.5C974,736.167 968.25,747 961.75,758C955.25,769 948.75,779.5 942.25,789.5C935.75,799.5 929.417,808.667 923.25,817C917.083,825.333 911.833,832 907.5,837C900.833,844.333 893.417,850 885.25,854C877.083,858 868.167,860 858.5,860C847.5,860 836.25,857.833 824.75,853.5C813.25,849.167 801.833,844.417 790.5,839.25C779.167,834.083 767.833,829.333 756.5,825C745.167,820.667 734.167,818.5 723.5,818.5C708.833,818.5 697.5,821.5 689.5,827.5C681.5,833.5 675.333,841.25 671,850.75C666.667,860.25 663.583,870.75 661.75,882.25C659.917,893.75 658,904.833 656,915.5C654.333,924.167 652.75,932.583 651.25,940.75C649.75,948.917 648.167,957.333 646.5,966C643.833,980.333 637.833,991.917 628.5,1000.75C619.167,1009.58 607.333,1015.33 593,1018C579.667,1020.33 566.25,1021.92 552.75,1022.75C539.25,1023.58 525.667,1024 512,1024C498,1024 484,1023.5 470,1022.5C456,1021.5 442.167,1019.67 428.5,1017C414.5,1014.33 403,1008.42 394,999.25C385,990.083 379.167,978.5 376.5,964.5C373.5,948.5 370.667,932.417 368,916.25C365.333,900.083 362.5,884 359.5,868C356.833,853.667 350,841.833 339,832.5C328,823.167 315.167,818.5 300.5,818.5Z
        M583.5,955C584.833,947.667 586.333,938.583 588,927.75C589.667,916.917 591.5,905.833 593.5,894.5C595.5,883.167 597.667,872.333 600,862C602.333,851.667 604.667,843.333 607,837C616.333,812 631.333,792 652,777C672.667,762 696.5,754.5 723.5,754.5C732.5,754.5 742.917,756.083 754.75,759.25C766.583,762.417 778.75,766.167 791.25,770.5C803.75,774.833 815.833,779.333 827.5,784C839.167,788.667 849.5,792.667 858.5,796C874.167,777.333 888,757.583 900,736.75C912,715.917 922.5,694.333 931.5,672L931.5,671.5L855,606.5C841,594.833 830.167,580.75 822.5,564.25C814.833,547.75 811,530.333 811,512C811,493.667 814.917,476.167 822.75,459.5C830.583,442.833 841.5,428.667 855.5,417L931,354L931,353.5C931,353.167 930.333,351.25 929,347.75C927.667,344.25 926.833,342.333 926.5,342C918.5,321.333 908.917,301.583 897.75,282.75C886.583,263.917 874,245.833 860,228.5L859.5,228.5L765.5,262.5C752.167,267.167 738.5,269.5 724.5,269.5C701.833,269.5 681,264 662,253C646,244 632.75,232 622.25,217C611.75,202 604.833,185.5 601.5,167.5L584.5,70C560.5,66.0001 536.333,64.0001 512,64C500,64.0001 488,64.4167 476,65.25C464,66.0834 452.167,67.3334 440.5,69C437.5,85.6667 434.667,102.167 432,118.5C429.333,134.833 426.167,151.167 422.5,167.5C419.5,182.167 414.333,195.75 407,208.25C399.667,220.75 390.667,231.5 380,240.5C369.333,249.5 357.333,256.583 344,261.75C330.667,266.917 316.333,269.5 301,269.5C286,269.5 271.833,267 258.5,262L258,262L166,228L165.5,228C150.167,247 136.333,266.75 124,287.25C111.667,307.75 101.167,329.333 92.5,352L92.5,352.5L169,417.5C183,429.167 193.833,443.25 201.5,459.75C209.167,476.25 213,493.667 213,512C213,530.333 209.083,547.833 201.25,564.5C193.417,581.167 182.5,595.333 168.5,607L93,670L93,670.5C93,670.833 93.6667,672.75 95,676.25C96.3333,679.75 97.1667,681.667 97.5,682C105.5,702.667 115.083,722.417 126.25,741.25C137.417,760.083 150,778.167 164,795.5L164.5,795.5L258.5,761.5C271.833,756.833 285.5,754.5 299.5,754.5C322.167,754.5 343,760 362,771C378,780 391.25,792 401.75,807C412.25,822 419.167,838.5 422.5,856.5L439.5,954C463.5,958 487.667,960 512,960C524,960 536,959.583 548,958.75C560,957.917 571.833,956.667 583.5,955Z
        M320,512C320,485.333 325,460.333 335,437C345,413.667 358.667,393.333 376,376C393.333,358.667 413.667,345 437,335C460.333,325 485.333,320 512,320C538.667,320 563.667,325 587,335C610.333,345 630.667,358.667 648,376C665.333,393.333 679,413.667 689,437C699,460.333 704,485.333 704,512C704,538.667 699,563.667 689,587C679,610.333 665.333,630.667 648,648C630.667,665.333 610.333,679 587,689C563.667,699 538.667,704 512,704C485.333,704 460.333,699 437,689C413.667,679 393.333,665.333 376,648C358.667,630.667 345,610.333 335,587C325,563.667 320,538.667 320,512ZM640,512C640,494.333 636.667,477.75 630,462.25C623.333,446.75 614.167,433.167 602.5,421.5C590.833,409.833 577.25,400.667 561.75,394C546.25,387.333 529.667,384 512,384C494.333,384 477.75,387.333 462.25,394C446.75,400.667 433.167,409.833 421.5,421.5C409.833,433.167 400.667,446.75 394,462.25C387.333,477.75 384,494.333 384,512C384,529.667 387.333,546.25 394,561.75C400.667,577.25 409.833,590.833 421.5,602.5C433.167,614.167 446.75,623.333 462.25,630C477.75,636.667 494.333,640 512,640C529.667,640 546.25,636.667 561.75,630C577.25,623.333 590.833,614.167 602.5,602.5C614.167,590.833 623.333,577.25 630,561.75C636.667,546.25 640,529.667 640,512Z
      `,fill:`currentColor`},null,-1),D(`path`,{d:`M299,818.5C289.667,818.5 279.167,820.667 267.5,825C255.833,829.333 243.833,834.083 231.5,839.25C219.167,844.417 207.083,849.167 195.25,853.5C183.417,857.833 172.833,860 163.5,860C153.833,860 144.667,857.75 136,853.25C127.333,848.75 120,842.833 114,835.5C109.667,830.167 104.583,823.333 98.75,815C92.9167,806.667 86.8333,797.5 80.5,787.5C74.1667,777.5 67.8333,767.083 61.5,756.25C55.1667,745.417 49.5833,734.75 44.75,724.25C39.9167,713.75 36,703.833 33,694.5C30,685.167 28.5,677.167 28.5,670.5C28.5,661.167 30.5833,652 34.75,643C38.9167,634 44.6667,626.5 52,620.5L128,558C134.667,552.667 139.833,545.75 143.5,537.25C147.167,528.75 149,520.333 149,512C149,503 147.083,494.5 143.25,486.5C139.417,478.5 134.167,471.667 127.5,466L51.5,401.5C36.1667,388.833 28.5,372.5 28.5,352.5C28.5,345.5 30.0833,337.333 33.25,328C36.4167,318.667 40.5,308.75 45.5,298.25C50.5,287.75 56.1667,277.083 62.5,266.25C68.8333,255.417 75.25,245 81.75,235C88.25,225 94.5833,215.833 100.75,207.5C106.917,199.167 112.167,192.333 116.5,187C122.5,179.667 129.833,174 138.5,170C147.167,166 156.333,164 166,164C176,164 186.75,166.167 198.25,170.5C209.75,174.833 221.417,179.583 233.25,184.75C245.083,189.917 256.833,194.667 268.5,199C280.167,203.333 291.333,205.5 302,205.5C316.333,205.5 328.833,200.667 339.5,191C350.167,181.333 356.833,169.667 359.5,156L377.5,58C380.167,43.6667 386.333,32 396,23C405.667,14 417.5,8.33337 431.5,6C457.833,2 484.333,0 511,0C525,0 539.083,0.583374 553.25,1.75C567.417,2.91669 581.5,4.66669 595.5,7C609.5,9.33337 621.083,15.1667 630.25,24.5C639.417,33.8334 645.167,45.3334 647.5,59L664.5,156.5C667.167,170.5 673.917,182.167 684.75,191.5C695.583,200.833 708.167,205.5 722.5,205.5C732.833,205.5 744,203.333 756,199C768,194.667 780,190 792,185C804,180 815.833,175.333 827.5,171C839.167,166.667 850,164.5 860,164.5C869.667,164.5 878.917,166.583 887.75,170.75C896.583,174.917 904,180.833 910,188.5C914.333,193.833 919.417,200.667 925.25,209C931.083,217.333 937.167,226.5 943.5,236.5C949.833,246.5 956.167,256.917 962.5,267.75C968.833,278.583 974.417,289.25 979.25,299.75C984.083,310.25 988,320.167 991,329.5C994,338.833 995.5,346.833 995.5,353.5C995.5,365.833 992.5,376.667 986.5,386C980.5,395.333 973.083,403.917 964.25,411.75C955.417,419.583 945.75,427 935.25,434C924.75,441 915.083,448.417 906.25,456.25C897.417,464.083 890,472.417 884,481.25C878,490.083 875,500.333 875,512C875,520.667 876.917,529.083 880.75,537.25C884.583,545.417 889.833,552.333 896.5,558L973,622.5C980.333,628.5 985.917,635.917 989.75,644.75C993.583,653.583 995.5,662.667 995.5,672C995.5,679 993.917,687.083 990.75,696.25C987.583,705.417 983.5,715.25 978.5,725.75C973.5,736.25 967.833,746.917 961.5,757.75C955.167,768.583 948.75,779 942.25,789C935.75,799 929.417,808.167 923.25,816.5C917.083,824.833 911.833,831.667 907.5,837C901.167,844.333 893.917,850 885.75,854C877.583,858 868.667,860 859,860C851,860 843.333,858.667 836,856L773.5,833C765.167,830 757.083,826.833 749.25,823.5C741.417,820.167 732.833,818.5 723.5,818.5C709.167,818.5 697.917,821.583 689.75,827.75C681.583,833.917 675.25,841.75 670.75,851.25C666.25,860.75 663.083,871.25 661.25,882.75C659.417,894.25 657.5,905.333 655.5,916L646.5,966C643.833,980 637.75,991.667 628.25,1001C618.75,1010.33 607,1016 593,1018C566,1022 539,1024 512,1024C498,1024 484.083,1023.58 470.25,1022.75C456.417,1021.92 442.5,1020.17 428.5,1017.5C414.5,1014.83 403,1008.92 394,999.75C385,990.583 379.167,979 376.5,965L359.5,867.5C356.833,852.5 349.833,840.583 338.5,831.75C327.167,822.917 314,818.5 299,818.5ZM640,512C640,494.333 636.667,477.75 630,462.25C623.333,446.75 614.25,433.167 602.75,421.5C591.25,409.833 577.75,400.667 562.25,394C546.75,387.333 530.167,384 512.5,384C494.5,384 477.75,387.333 462.25,394C446.75,400.667 433.167,409.833 421.5,421.5C409.833,433.167 400.667,446.75 394,462.25C387.333,477.75 384,494.5 384,512.5C384,530.167 387.333,546.75 394,562.25C400.667,577.75 409.833,591.25 421.5,602.75C433.167,614.25 446.75,623.333 462.25,630C477.75,636.667 494.333,640 512,640C529.667,640 546.25,636.667 561.75,630C577.25,623.333 590.833,614.167 602.5,602.5C614.167,590.833 623.333,577.25 630,561.75C636.667,546.25 640,529.667 640,512Z`,fill:`currentColor`,"clip-path":`url(#icon-clip-${_(t)})`},null,8,Vn)]))}}),Un={class:`w-16 h-16 p-2 absolute left-0 top-0 z-10`},Wn=[`id`],Gn=[`id`],Kn=[`id`],qn=[`href`],Jn=[`href`],Yn=[`href`],Xn=[`href`],Zn=[`href`],Qn=[`href`,`clip-path`],$n=Xe(l({__name:`collapse-button`,props:{collapsed:{type:Boolean},collapsedModifiers:{}},emits:[`update:collapsed`],setup(e){let t=d(e,`collapsed`),n=r();return(e,r)=>(i(),g(`div`,Un,[(i(),g(`svg`,{viewBox:`-200 -200 1400 1400`,xmlns:`http://www.w3.org/2000/svg`,class:te([`collapse-button collapse-button-vars`,`rounded-full p-1 cursor-pointer relative`,t.value?`is-collapsed`:``]),fill:`none`,onClick:r[0]||=e=>t.value=!t.value},[D(`defs`,null,[D(`path`,{id:`path-${_(n)}`,d:`M500,0 L580,320 L500,450 L420,320 Z`,"stroke-width":`1`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"vector-effect":`non-scaling-stroke`,class:`translate-y-[var(--zip-width)]`},null,8,Wn),D(`clipPath`,{id:`clip-path-${_(n)}`,class:`origin-c scale-[var(--progress)]`},[...r[1]||=[D(`rect`,{x:`0`,y:`0`,width:`1000`,height:`1000`,fill:`white`},null,-1)]],8,Gn),D(`g`,{id:`g-${_(n)}`,class:`origin-[500px_500px] rotate-[var(--rotate)]`},[D(`use`,{href:`#path-${_(n)}`,"transform-origin":`500 500`,transform:`rotate(-45)`},null,8,qn),D(`use`,{href:`#path-${_(n)}`,"transform-origin":`500 500`,transform:`rotate(+45)`},null,8,Jn),D(`use`,{href:`#path-${_(n)}`,"transform-origin":`500 500`,transform:`rotate(135)`},null,8,Yn),D(`use`,{href:`#path-${_(n)}`,"transform-origin":`500 500`,transform:`rotate(225)`},null,8,Xn)],8,Kn)]),D(`use`,{href:`#g-${_(n)}`,stroke:`currentColor`},null,8,Zn),D(`use`,{href:`#g-${_(n)}`,fill:`#FFFFFFA0`,stroke:`white`,"clip-path":`url(#clip-path-${_(n)})`},null,8,Qn)],2))]))}}),[[`__scopeId`,`data-v-13af2bef`]]),er=e=>{let t=Math.max(0,Number(e.w)||0),n=Math.max(0,Number(e.h)||0),r=Math.max(0,Number(e.strokeWidth)||0),i=Math.max(0,(t-r)/2),a=Math.max(0,(n-r)/2),o=Math.min(i,a),s=Math.max(0,Number(e.r)||0)-r/2;return{w:t,h:n,strokeWidth:r,r:Math.min(o,Math.max(0,s)),n:Math.max(1e-6,Number(e.n)||5),samples:Math.max(2,Math.trunc(Number(e.samples)||16)),precision:Math.max(0,Math.trunc(Number(e.precision)||2))}},tr=e=>{let{r:t,n,samples:r}=e,i=[];if(t<=0){for(let e=0;e<=r;e++)i.push({x:0,y:0});return i}let a=2/n;for(let e=0;e<=r;e++){let n=e/r*(Math.PI/2),o=Math.cos(n),s=Math.sin(n);i.push({x:t*o**+a,y:t*s**+a})}return i},nr=e=>{let{w:t,h:n,strokeWidth:r,r:i,n:a,samples:o,precision:s}=e;if(t<=0||n<=0)return``;let c=10**s,l=e=>Math.round(e*c)/c,u=tr({r:i,n:a,samples:o}),d=u.length-1,f=r/2,p=f,m=t-f,h=f,g=n-f,_=[];_.push(`M ${l(m-i+u[0].x)} ${l(h+i-u[0].y)}`);for(let e=0;e<=d;e++){let t=u[e];_.push(` L ${l(m-i+t.x)} ${l(h+i-t.y)}`)}for(let e=d;e>=0;e--){let t=u[e];_.push(` L ${l(p+i-t.x)} ${l(h+i-t.y)}`)}for(let e=0;e<=d;e++){let t=u[e];_.push(` L ${l(p+i-t.x)} ${l(g-i+t.y)}`)}for(let e=d;e>=0;e--){let t=u[e];_.push(` L ${l(m-i+t.x)} ${l(g-i+t.y)}`)}return _.push(` Z`),_.join(``)},rr=[`id`,`viewBox`],ir=[`id`,`d`,`fill`,`stroke`,`stroke-width`],ar=[`id`],or=[`href`],sr=[`href`],cr=[`viewBox`],lr=[`d`,`fill`,`stroke`,`stroke-width`],ur=l({__name:`g-squircle`,props:{w:{default:160},h:{default:160},r:{default:60},n:{default:5},samples:{default:12},fill:{default:`gray`},stroke:{default:`transparent`},strokeWidth:{default:0},precision:{default:2}},setup(e){let t=e,n=p(),r=crypto.getRandomValues(new Uint8Array(16)).toString(),a=O(()=>er({w:t.w,h:t.h,r:t.r,n:t.n,samples:t.samples,strokeWidth:t.strokeWidth,precision:t.precision})),o=O(()=>nr(a.value));return(t,s)=>n.default?(i(),g(`div`,{key:0,style:M({clipPath:`url(#${_(r)}-clip)`})},[(i(),g(`svg`,{id:_(r),viewBox:`0 0 ${a.value.w} ${a.value.h}`,xmlns:`http://www.w3.org/2000/svg`,class:`absolute inset-0 -z-1`,"aria-hidden":`true`},[D(`defs`,null,[D(`path`,{id:`${_(r)}-path`,d:o.value,fill:e.fill,stroke:e.stroke,"stroke-width":a.value.strokeWidth,"stroke-linejoin":`round`},null,8,ir)]),D(`clipPath`,{id:`${_(r)}-clip`},[D(`use`,{href:`#${_(r)}-path`},null,8,or)],8,ar),D(`use`,{href:`#${_(r)}-path`},null,8,sr)],8,rr)),ne(t.$slots,`default`)],4)):(i(),g(`svg`,{key:1,viewBox:`0 0 ${a.value.w} ${a.value.h}`,xmlns:`http://www.w3.org/2000/svg`,class:`absolute inset-0 pointer-events-none`,"aria-hidden":`true`},[o.value?(i(),g(`path`,{key:0,d:o.value,fill:e.fill,stroke:e.stroke,"stroke-width":a.value.strokeWidth,"stroke-linejoin":`round`},null,8,lr)):S(``,!0)],8,cr))}}),dr=Xe(l({__name:`sider-button`,props:{selected:{type:Boolean},icon:{},label:{}},setup(e){let t=e;return(e,n)=>(i(),C(_(ur),{w:56,h:56,r:12,fill:`transparent`,class:te([`sider-button-vars sider-button`,`w-14 h-14 m-1 relative`,t.selected&&`is-selected`])},{default:h(()=>[(i(),C(f(t.icon),{class:`sider-button-icon p-4.5`})),m(D(`div`,{class:`sider-button-text absolute left-0 bottom-0 w-full text-center text-xs`},u(t.label),513),[[w,!t.selected]])]),_:1},8,[`class`]))}}),[[`__scopeId`,`data-v-23845ac5`]]),fr={class:`sider-toolbar sider-toolbar-vars fixed top-0 left-0 w-[min(100dvw,24rem)] h-100dvh z-1 pointer-events-none`},pr={class:`flex-1 w-full overflow-y-auto overflow-x-hidden scrollbar-hide`},mr={class:`shrink-0 overflow-hidden`},hr={class:`h-17 px-4 gap-2 select-none shrink-0 bg-[--bg-level-1]`},gr={class:`text-lg leading-6 font-bold mt-3`},L=function(e){return e.FILTER=`filter`,e.TRACK=`track`,e.LOCALE=`locale`,e.SETTING=`setting`,e}(L||{}),_r=Xe(l({__name:`index`,props:{collapsed:{type:Boolean,required:!1,default:!0},collapsedModifiers:{},sider:{required:!1,default:L.FILTER},siderModifiers:{}},emits:[`update:collapsed`,`update:sider`],setup(e){let{t}=Qe(),n=d(e,`collapsed`),r=d(e,`sider`),a=O(()=>n.value||!r.value),o=O(()=>({[L.FILTER]:{label:t(`filter`),icon:Pn},[L.TRACK]:{label:t(`track`),icon:Ze},[L.LOCALE]:{label:t(`locale`),icon:Rn},[L.SETTING]:{label:t(`setting`),icon:Hn}})),s=[L.FILTER,L.LOCALE,L.SETTING,L.TRACK],l=[L.FILTER,L.TRACK],f=[L.LOCALE,L.SETTING],p=e=>{e===r.value?r.value=null:r.value=e};return(e,t)=>(i(),g(`div`,fr,[y($n,{class:`pointer-events-auto`,collapsed:n.value,"onUpdate:collapsed":t[0]||=e=>n.value=e},null,8,[`collapsed`]),D(`div`,{class:te([`sider-toolbar-left absolute left-0 top-0 z-2 pt-16`,`w-[calc(var(--tap-width)+1px)] h-full`,`flex flex-col`,`border-r-1 border-[--border-color] bg-[--bg-level-1]`,`select-none`,n.value?`is-collapsed`:`pointer-events-auto`])},[D(`div`,pr,[(i(),g(b,null,c(l,e=>y(dr,{key:e,selected:r.value===e,icon:_(o)[e].icon,label:_(o)[e].label,onClick:()=>p(e)},null,8,[`selected`,`icon`,`label`,`onClick`])),64))]),D(`div`,mr,[(i(),g(b,null,c(f,e=>y(dr,{key:e,selected:r.value===e,icon:_(o)[e].icon,label:_(o)[e].label,onClick:()=>p(e)},null,8,[`selected`,`icon`,`label`,`onClick`])),64))])],2),(i(),g(b,null,c(s,n=>m(D(`div`,{key:n,class:te([`sider-toolbar-right`,`absolute top-0 left-[var(--tap-width)]`,`w-100 h-full flex flex-col`,`bg-[--bg-level-2] border-r-1 border-[--border-color]`,_(a)?`is-collapsed`:`pointer-events-auto`,r.value?`is-selected`:``])},[D(`div`,hr,[D(`div`,gr,u(_(o)[n].label),1),t[1]||=D(`div`,null,`description`,-1)]),(i(),C(E,null,{fallback:h(()=>[...t[2]||=[ee(` Loading... `,-1)]]),default:h(()=>[ne(e.$slots,n,{},void 0,!0)]),_:2},1024))],2),[[w,n===r.value]])),64))]))}}),[[`__scopeId`,`data-v-ef5ca9ac`]]),vr={class:`map-error`},yr={class:`error-content`},br={class:`error-desc`},xr=Xe(l({__name:`map-error`,props:{message:{}},emits:[`retry`],setup(e,{emit:t}){let n=t;return(t,r)=>(i(),g(`div`,vr,[r[3]||=D(`div`,{class:`error-icon`},[D(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.5`},[D(`circle`,{cx:`12`,cy:`12`,r:`10`}),D(`path`,{d:`M12 8v4m0 4h.01`,"stroke-linecap":`round`})])],-1),D(`div`,yr,[r[1]||=D(`h3`,{class:`error-title`},`配置加载失败`,-1),D(`p`,br,u(e.message||`无法获取地图配置，请检查网络连接后重试`),1)]),D(`button`,{class:`retry-btn`,onClick:r[0]||=e=>n(`retry`)},[...r[2]||=[D(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[D(`path`,{d:`M1 4v6h6M23 20v-6h-6`,"stroke-linecap":`round`,"stroke-linejoin":`round`}),D(`path`,{d:`M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1),D(`span`,null,`重新加载`,-1)]])]))}}),[[`__scopeId`,`data-v-d97a7dc0`]]),Sr={class:`map-loading`},Cr={class:`loading-icons`},wr=[`src`,`alt`],Tr=Xe(l({__name:`map-loading`,setup(e){let t=[{src:`/icons/pyro.svg`,alt:`Pyro`},{src:`/icons/hydro.svg`,alt:`Hydro`},{src:`/icons/anemo.svg`,alt:`Anemo`},{src:`/icons/electro.svg`,alt:`Electro`},{src:`/icons/dendro.svg`,alt:`Dendro`},{src:`/icons/cryo.svg`,alt:`Cryo`},{src:`/icons/geo.svg`,alt:`Geo`}];return(e,n)=>(i(),g(`div`,Sr,[D(`div`,Cr,[(i(),g(b,null,c(t,(e,t)=>D(`img`,{key:e.alt,src:e.src,alt:e.alt,class:`loading-icon`,style:M({animationDelay:`${t*.12}s`})},null,12,wr)),64))]),n[0]||=D(`p`,{class:`loading-text`},`正在加载地图配置...`,-1)]))}}),[[`__scopeId`,`data-v-48fe1e65`]]);function Er(e,t){if(!e)throw Error(t||`loader assertion failed.`)}var Dr={self:typeof self<`u`&&self,window:typeof window<`u`&&window,global:typeof global<`u`&&global,document:typeof document<`u`&&document};Dr.self||Dr.window||Dr.global,Dr.window||Dr.self||Dr.global,Dr.global||Dr.self||Dr.window,Dr.document;var Or=!!(typeof process!=`object`||String(process)!==`[object process]`||process.browser),kr=typeof process<`u`&&process.version&&/v([0-9]*)/.exec(process.version);kr&&parseFloat(kr[1]);var Ar=`v4.4.2`;function jr(){let e=new ae({id:`loaders.gl`});return globalThis.loaders||={},globalThis.loaders.log=e,globalThis.loaders.version=Ar,globalThis.probe||={},globalThis.probe.loaders=e,e}var Mr=jr(),Nr=e=>typeof e==`boolean`,Pr=e=>typeof e==`function`,Fr=e=>typeof e==`object`&&!!e,Ir=e=>Fr(e)&&e.constructor==={}.constructor,Lr=e=>typeof SharedArrayBuffer<`u`&&e instanceof SharedArrayBuffer,Rr=e=>Fr(e)&&typeof e.byteLength==`number`&&typeof e.slice==`function`,zr=e=>!!e&&Pr(e[Symbol.iterator]),Br=e=>!!e&&Pr(e[Symbol.asyncIterator]),Vr=e=>typeof Response<`u`&&e instanceof Response||Fr(e)&&Pr(e.arrayBuffer)&&Pr(e.text)&&Pr(e.json),Hr=e=>typeof Blob<`u`&&e instanceof Blob,Ur=e=>typeof ReadableStream<`u`&&e instanceof ReadableStream||Fr(e)&&Pr(e.tee)&&Pr(e.cancel)&&Pr(e.getReader),Wr=e=>Fr(e)&&Pr(e.read)&&Pr(e.pipe)&&Nr(e.readable),Gr=e=>Ur(e)||Wr(e);function Kr(e,t){return qr(e||{},t)}function qr(e,t,n=0){if(n>3)return t;let r={...e};for(let[e,i]of Object.entries(t))i&&typeof i==`object`&&!Array.isArray(i)?r[e]=qr(r[e]||{},t[e],n+1):r[e]=t[e];return r}var Jr=`latest`;function Yr(){return globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version=`4.4.2`),globalThis._loadersgl_.version}var Xr=Yr();function Zr(e,t){if(!e)throw Error(t||`loaders.gl assertion failed.`)}var Qr={self:typeof self<`u`&&self,window:typeof window<`u`&&window,global:typeof global<`u`&&global,document:typeof document<`u`&&document};Qr.self||Qr.window||Qr.global,Qr.window||Qr.self||Qr.global,Qr.global||Qr.self||Qr.window,Qr.document;var $r=typeof process!=`object`||String(process)!==`[object process]`||process.browser,ei=typeof window<`u`&&window.orientation!==void 0,ti=typeof process<`u`&&process.version&&/v([0-9]*)/.exec(process.version);ti&&parseFloat(ti[1]);var ni=class{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,t){this.name=e,this.workerThread=t,this.result=new Promise((e,t)=>{this._resolve=e,this._reject=t})}postMessage(e,t){this.workerThread.postMessage({source:`loaders.gl`,type:e,payload:t})}done(e){Zr(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){Zr(this.isRunning),this.isRunning=!1,this._reject(e)}},ri=class{terminate(){}},ii=new Map;function ai(e){Zr(e.source&&!e.url||!e.source&&e.url);let t=ii.get(e.source||e.url);return t||(e.url&&(t=oi(e.url),ii.set(e.url,t)),e.source&&(t=si(e.source),ii.set(e.source,t))),Zr(t),t}function oi(e){return e.startsWith(`http`)?si(ci(e)):e}function si(e){let t=new Blob([e],{type:`application/javascript`});return URL.createObjectURL(t)}function ci(e){return`\
try {
  importScripts('${e}');
} catch (error) {
  console.error(error);
  throw error;
}`}function li(e,t=!0,n){let r=n||new Set;if(e){if(ui(e))r.add(e);else if(ui(e.buffer))r.add(e.buffer);else if(!ArrayBuffer.isView(e)&&t&&typeof e==`object`)for(let n in e)li(e[n],t,r)}return n===void 0?Array.from(r):[]}function ui(e){return e?e instanceof ArrayBuffer||typeof MessagePort<`u`&&e instanceof MessagePort||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas:!1}var di=()=>{},fi=class{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL=``;static isSupported(){return typeof Worker<`u`&&$r||ri!==void 0&&!$r}constructor(e){let{name:t,source:n,url:r}=e;Zr(n||r),this.name=t,this.source=n,this.url=r,this.onMessage=di,this.onError=e=>console.log(e),this.worker=$r?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=di,this.onError=di,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,t){t||=li(e),this.worker.postMessage(e,t)}_getErrorFromErrorEvent(e){let t=`Failed to load `;return t+=`worker ${this.name} from ${this.url}. `,e.message&&(t+=`${e.message} in `),e.lineno&&(t+=`:${e.lineno}:${e.colno}`),Error(t)}_createBrowserWorker(){this._loadableURL=ai({source:this.source,url:this.url});let e=new Worker(this._loadableURL,{name:this.name});return e.onmessage=e=>{e.data?this.onMessage(e.data):this.onError(Error(`No data received`))},e.onerror=e=>{this.onError(this._getErrorFromErrorEvent(e)),this.terminated=!0},e.onmessageerror=e=>console.error(e),e}_createNodeWorker(){let e;if(this.url)e=new ri(this.url.includes(`:/`)||this.url.startsWith(`/`)?this.url:`./${this.url}`,{eval:!1,type:this.url.endsWith(`.ts`)||this.url.endsWith(`.mjs`)?`module`:`commonjs`});else if(this.source)e=new ri(this.source,{eval:!0});else throw Error(`no worker`);return e.on(`message`,e=>{this.onMessage(e)}),e.on(`error`,e=>{this.onError(e)}),e.on(`exit`,e=>{}),e}},pi=class{name=`unnamed`;source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return fi.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},e.name!==void 0&&(this.name=e.name),e.maxConcurrency!==void 0&&(this.maxConcurrency=e.maxConcurrency),e.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=e.maxMobileConcurrency),e.reuseWorkers!==void 0&&(this.reuseWorkers=e.reuseWorkers),e.onDebug!==void 0&&(this.onDebug=e.onDebug)}async startJob(e,t=(e,t,n)=>e.done(n),n=(e,t)=>e.error(t)){let r=new Promise(r=>(this.jobQueue.push({name:e,onMessage:t,onError:n,onStart:r}),this));return this._startQueuedJob(),await r}async _startQueuedJob(){if(!this.jobQueue.length)return;let e=this._getAvailableWorker();if(!e)return;let t=this.jobQueue.shift();if(t){this.onDebug({message:`Starting job`,name:t.name,workerThread:e,backlog:this.jobQueue.length});let n=new ni(t.name,e);e.onMessage=e=>t.onMessage(n,e.type,e.payload),e.onError=e=>t.onError(n,e),t.onStart(n);try{await n.result}catch(e){console.error(`Worker exception: ${e}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!$r||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){return this.idleQueue.length>0?this.idleQueue.shift()||null:this.count<this._getMaxConcurrency()?(this.count++,new fi({name:`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`,source:this.source,url:this.url})):null}_getMaxConcurrency(){return ei?this.maxMobileConcurrency:this.maxConcurrency}},mi={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}},hi=class e{props;workerPools=new Map;static _workerFarm;static isSupported(){return fi.isSupported()}static getWorkerFarm(t={}){return e._workerFarm=e._workerFarm||new e({}),e._workerFarm.setProps(t),e._workerFarm}constructor(e){this.props={...mi},this.setProps(e),this.workerPools=new Map}destroy(){for(let e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){this.props={...this.props,...e};for(let e of this.workerPools.values())e.setProps(this._getWorkerPoolProps())}getWorkerPool(e){let{name:t,source:n,url:r}=e,i=this.workerPools.get(t);return i||(i=new pi({name:t,source:n,url:r}),i.setProps(this._getWorkerPoolProps()),this.workerPools.set(t,i)),i}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}};function gi(e,t={}){let n=t[e.id]||{},r=$r?`${e.id}-worker.js`:`${e.id}-worker-node.js`,i=n.workerUrl;if(!i&&e.id===`compression`&&(i=t.workerUrl),(t._workerType||t?.core?._workerType)===`test`&&(i=$r?`modules/${e.module}/dist/${r}`:`modules/${e.module}/src/workers/${e.id}-worker-node.ts`),!i){let t=e.version;t===`latest`&&(t=Jr);let n=t?`@${t}`:``;i=`https://unpkg.com/@loaders.gl/${e.module}${n}/dist/${r}`}return Zr(i),i}function _i(e,t=Xr){Zr(e,`no worker provided`);let n=e.version;return!(!t||!n)}function vi(e,t){if(!hi.isSupported())return!1;let n=t?._nodeWorkers??t?.core?._nodeWorkers;if(!$r&&!n)return!1;let r=t?.worker??t?.core?.worker;return!!(e.worker&&r)}async function yi(e,t,n,r,i){let a=e.id,o=gi(e,n),s=hi.getWorkerFarm(n?.core).getWorkerPool({name:a,url:o});n=JSON.parse(JSON.stringify(n)),r=JSON.parse(JSON.stringify(r||{}));let c=await s.startJob(`process-on-worker`,bi.bind(null,i));return c.postMessage(`process`,{input:t,options:n,context:r}),await(await c.result).result}async function bi(e,t,n,r){switch(n){case`done`:t.done(r);break;case`error`:t.error(Error(r.error));break;case`process`:let{id:i,input:a,options:o}=r;try{let n=await e(a,o);t.postMessage(`done`,{id:i,result:n})}catch(e){let n=e instanceof Error?e.message:`unknown error`;t.postMessage(`error`,{id:i,error:n})}break;default:console.warn(`parse-with-worker unknown message ${n}`)}}function xi(e,t,n){if(n||=e.byteLength,e.byteLength<n||t.byteLength<n)return!1;let r=new Uint8Array(e),i=new Uint8Array(t);for(let e=0;e<r.length;++e)if(r[e]!==i[e])return!1;return!0}function Si(...e){return Ci(e)}function Ci(e){let t=e.map(e=>e instanceof ArrayBuffer?new Uint8Array(e):e),n=t.reduce((e,t)=>e+t.byteLength,0),r=new Uint8Array(n),i=0;for(let e of t)r.set(e,i),i+=e.byteLength;return r.buffer}async function wi(e){let t=[];for await(let n of e)t.push(Ti(n));return Si(...t)}function Ti(e){if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e)){let{buffer:t,byteOffset:n,byteLength:r}=e;return Ei(t,n,r)}return Ei(e)}function Ei(e,t=0,n=e.byteLength-t){let r=new Uint8Array(e,t,n),i=new Uint8Array(r.length);return i.set(r),i.buffer}var Di=`Queued Requests`,Oi=`Active Requests`,ki=`Cancelled Requests`,Ai=`Queued Requests Ever`,ji=`Active Requests Ever`,Mi={id:`request-scheduler`,throttleRequests:!0,maxRequests:6,debounceTime:0},Ni=class{props;stats;activeRequestCount=0;requestQueue=[];requestMap=new Map;updateTimer=null;constructor(e={}){this.props={...Mi,...e},this.stats=new ie({id:this.props.id}),this.stats.get(Di),this.stats.get(Oi),this.stats.get(ki),this.stats.get(Ai),this.stats.get(ji)}setProps(e){e.throttleRequests!==void 0&&(this.props.throttleRequests=e.throttleRequests),e.maxRequests!==void 0&&(this.props.maxRequests=e.maxRequests),e.debounceTime!==void 0&&(this.props.debounceTime=e.debounceTime)}scheduleRequest(e,t=()=>0){if(!this.props.throttleRequests)return Promise.resolve({done:()=>{}});if(this.requestMap.has(e))return this.requestMap.get(e);let n={handle:e,priority:0,getPriority:t},r=new Promise(e=>(n.resolve=e,n));return this.requestQueue.push(n),this.requestMap.set(e,r),this._issueNewRequests(),r}_issueRequest(e){let{handle:t,resolve:n}=e,r=!1,i=()=>{r||(r=!0,this.requestMap.delete(t),this.activeRequestCount--,this._issueNewRequests())};return this.activeRequestCount++,n?n({done:i}):Promise.resolve({done:i})}_issueNewRequests(){this.updateTimer!==null&&clearTimeout(this.updateTimer),this.updateTimer=setTimeout(()=>this._issueNewRequestsAsync(),this.props.debounceTime)}_issueNewRequestsAsync(){this.updateTimer!==null&&clearTimeout(this.updateTimer),this.updateTimer=null;let e=Math.max(this.props.maxRequests-this.activeRequestCount,0);if(e!==0){this._updateAllRequests();for(let t=0;t<e;++t){let e=this.requestQueue.shift();e&&this._issueRequest(e)}}}_updateAllRequests(){let e=this.requestQueue;for(let t=0;t<e.length;++t){let n=e[t];this._updateRequest(n)||(e.splice(t,1),this.requestMap.delete(n.handle),t--)}e.sort((e,t)=>e.priority-t.priority)}_updateRequest(e){return e.priority=e.getPriority(e.handle),e.priority<0?(e.resolve(null),!1):!0}},Pi=``,Fi={};function Ii(e){for(let t in Fi)if(e.startsWith(t)){let n=Fi[t];e=e.replace(t,n)}return!e.startsWith(`http://`)&&!e.startsWith(`https://`)&&(e=`${Pi}${e}`),e}function Li(e){return e}function Ri(e){return e&&typeof e==`object`&&e.isBuffer}function zi(e){if(Ri(e))return Li(e);if(e instanceof ArrayBuffer)return e;if(Lr(e))return Vi(e);if(ArrayBuffer.isView(e)){let t=e.buffer;return e.byteOffset===0&&e.byteLength===e.buffer.byteLength?t:t.slice(e.byteOffset,e.byteOffset+e.byteLength)}if(typeof e==`string`){let t=e;return new TextEncoder().encode(t).buffer}if(e&&typeof e==`object`&&e._toArrayBuffer)return e._toArrayBuffer();throw Error(`toArrayBuffer`)}function Bi(e){if(e instanceof ArrayBuffer)return e;if(Lr(e))return Vi(e);let{buffer:t,byteOffset:n,byteLength:r}=e;return t instanceof ArrayBuffer&&n===0&&r===t.byteLength?t:Vi(t,n,r)}function Vi(e,t=0,n=e.byteLength-t){let r=new Uint8Array(e,t,n),i=new Uint8Array(r.length);return i.set(r),i.buffer}function Hi(e){return ArrayBuffer.isView(e)?e:new Uint8Array(e)}function Ui(e){let t=e?e.lastIndexOf(`/`):-1;return t>=0?e.substr(t+1):e}function Wi(e){let t=e?e.lastIndexOf(`/`):-1;return t>=0?e.substr(0,t):``}var Gi=class extends Error{constructor(e,t){super(e),this.reason=t.reason,this.url=t.url,this.response=t.response}reason;url;response},Ki=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,qi=/^([-\w.]+\/[-\w.+]+)/;function Ji(e,t){return e.toLowerCase()===t.toLowerCase()}function Yi(e){let t=qi.exec(e);return t?t[1]:e}function Xi(e){let t=Ki.exec(e);return t?t[1]:``}var Zi=/\?.*/;function Qi(e){let t=e.match(Zi);return t&&t[0]}function $i(e){return e.replace(Zi,``)}function ea(e){if(e.length<50)return e;let t=e.slice(e.length-15);return`${e.substr(0,32)}...${t}`}function ta(e){return Vr(e)?e.url:Hr(e)?(`name`in e?e.name:``)||``:typeof e==`string`?e:``}function na(e){if(Vr(e)){let t=e.headers.get(`content-type`)||``,n=$i(e.url);return Yi(t)||Xi(n)}return Hr(e)?e.type||``:typeof e==`string`?Xi(e):``}function ra(e){return Vr(e)?e.headers[`content-length`]||-1:Hr(e)?e.size:typeof e==`string`?e.length:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?e.byteLength:-1}async function ia(e){if(Vr(e))return e;let t={},n=ra(e);n>=0&&(t[`content-length`]=String(n));let r=ta(e),i=na(e);i&&(t[`content-type`]=i);let a=await sa(e);a&&(t[`x-first-bytes`]=a),typeof e==`string`&&(e=new TextEncoder().encode(e));let o=new Response(e,{headers:t});return Object.defineProperty(o,`url`,{value:r}),o}async function aa(e){if(!e.ok)throw await oa(e)}async function oa(e){let t=ea(e.url),n=`Failed to fetch resource (${e.status}) ${e.statusText}: ${t}`;n=n.length>100?`${n.slice(0,100)}...`:n;let r={reason:e.statusText,url:e.url,response:e};try{let t=e.headers.get(`Content-Type`);r.reason=!e.bodyUsed&&t?.includes(`application/json`)?await e.json():await e.text()}catch{}return new Gi(n,r)}async function sa(e){if(typeof e==`string`)return`data:,${e.slice(0,5)}`;if(e instanceof Blob){let t=e.slice(0,5);return await new Promise(e=>{let n=new FileReader;n.onload=t=>e(t?.target?.result),n.readAsDataURL(t)})}return e instanceof ArrayBuffer?`data:base64,${ca(e.slice(0,5))}`:null}function ca(e){let t=``,n=new Uint8Array(e);for(let e=0;e<n.byteLength;e++)t+=String.fromCharCode(n[e]);return btoa(t)}function la(e){return!ua(e)&&!da(e)}function ua(e){return e.startsWith(`http:`)||e.startsWith(`https:`)}function da(e){return e.startsWith(`data:`)}async function fa(e,t){if(typeof e==`string`){let n=Ii(e);return la(n)&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(n,t):await fetch(n,t)}return await ia(e)}var pa=new ae({id:`loaders.gl`}),ma=class{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}},ha={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new class{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}},useLocalLibraries:!1,CDN:`https://unpkg.com/@loaders.gl`,worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:Or,_nodeWorkers:!1,_workerType:``,limit:0,_limitMB:0,batchSize:`auto`,batchDebounceMs:0,metadata:!1,transforms:[]}},ga={baseUri:`core.baseUrl`,fetch:`core.fetch`,mimeType:`core.mimeType`,fallbackMimeType:`core.fallbackMimeType`,ignoreRegisteredLoaders:`core.ignoreRegisteredLoaders`,nothrow:`core.nothrow`,log:`core.log`,useLocalLibraries:`core.useLocalLibraries`,CDN:`core.CDN`,worker:`core.worker`,maxConcurrency:`core.maxConcurrency`,maxMobileConcurrency:`core.maxMobileConcurrency`,reuseWorkers:`core.reuseWorkers`,_nodeWorkers:`core.nodeWorkers`,_workerType:`core._workerType`,_worker:`core._workerType`,limit:`core.limit`,_limitMB:`core._limitMB`,batchSize:`core.batchSize`,batchDebounceMs:`core.batchDebounceMs`,metadata:`core.metadata`,transforms:`core.transforms`,throws:`nothrow`,dataType:`(no longer used)`,uri:`core.baseUrl`,method:`core.fetch.method`,headers:`core.fetch.headers`,body:`core.fetch.body`,mode:`core.fetch.mode`,credentials:`core.fetch.credentials`,cache:`core.fetch.cache`,redirect:`core.fetch.redirect`,referrer:`core.fetch.referrer`,referrerPolicy:`core.fetch.referrerPolicy`,integrity:`core.fetch.integrity`,keepalive:`core.fetch.keepalive`,signal:`core.fetch.signal`},_a=[`baseUrl`,`fetch`,`mimeType`,`fallbackMimeType`,`ignoreRegisteredLoaders`,`nothrow`,`log`,`useLocalLibraries`,`CDN`,`worker`,`maxConcurrency`,`maxMobileConcurrency`,`reuseWorkers`,`_nodeWorkers`,`_workerType`,`limit`,`_limitMB`,`batchSize`,`batchDebounceMs`,`metadata`,`transforms`];function va(){globalThis.loaders=globalThis.loaders||{};let{loaders:e}=globalThis;return e._state||={},e._state}function ya(){let e=va();return e.globalOptions=e.globalOptions||{...ha,core:{...ha.core}},xa(e.globalOptions)}function ba(e,t,n,r){return n||=[],n=Array.isArray(n)?n:[n],Sa(e,n),xa(Ta(t,e,r))}function xa(e){let t=Oa(e);ka(t);for(let e of _a)t.core&&t.core[e]!==void 0&&delete t[e];return t.core&&t.core._workerType!==void 0&&delete t._worker,t}function Sa(e,t){Ca(e,null,ha,ga,t);for(let n of t){let r=e&&e[n.id]||{},i=n.options&&n.options[n.id]||{},a=n.deprecatedOptions&&n.deprecatedOptions[n.id]||{};Ca(r,n.id,i,a,t)}}function Ca(e,t,n,r,i){let a=t||`Top level`,o=t?`${t}.`:``;for(let s in e){let c=!t&&Fr(e[s]),l=s===`baseUri`&&!t,u=s===`workerUrl`&&t;if(!(s in n)&&!l&&!u){if(s in r)pa.level>0&&pa.warn(`${a} loader option \'${o}${s}\' no longer supported, use \'${r[s]}\'`)();else if(!c&&pa.level>0){let e=wa(s,i);pa.warn(`${a} loader option \'${o}${s}\' not recognized. ${e}`)()}}}}function wa(e,t){let n=e.toLowerCase(),r=``;for(let i of t)for(let t in i.options){if(e===t)return`Did you mean \'${i.id}.${t}\'?`;let a=t.toLowerCase();(n.startsWith(a)||a.startsWith(n))&&(r||=`Did you mean \'${i.id}.${t}\'?`)}return r}function Ta(e,t,n){let r=e.options||{},i={...r};return r.core&&(i.core={...r.core}),ka(i),i.core?.log===null&&(i.core={...i.core,log:new ma}),Ea(i,xa(ya())),Ea(i,xa(t)),Da(i,n),Aa(i),i}function Ea(e,t){for(let n in t)if(n in t){let r=t[n];Ir(r)&&Ir(e[n])?e[n]={...e[n],...t[n]}:e[n]=t[n]}}function Da(e,t){t&&e.core?.baseUrl===void 0&&(e.core||={},e.core.baseUrl=Wi($i(t)))}function Oa(e){let t={...e};return e.core&&(t.core={...e.core}),t}function ka(e){e.baseUri!==void 0&&(e.core||={},e.core.baseUrl===void 0&&(e.core.baseUrl=e.baseUri));for(let t of _a)if(e[t]!==void 0){let n=e.core=e.core||{};n[t]===void 0&&(n[t]=e[t])}let t=e._worker;t!==void 0&&(e.core||={},e.core._workerType===void 0&&(e.core._workerType=t))}function Aa(e){let t=e.core;if(t)for(let n of _a)t[n]!==void 0&&(e[n]=t[n])}function ja(e){return e?(Array.isArray(e)&&(e=e[0]),Array.isArray(e?.extensions)):!1}function Ma(e){Er(e,`null loader`),Er(ja(e),`invalid loader`);let t;return Array.isArray(e)&&(t=e[1],e=e[0],e={...e,options:{...e.options,...t}}),(e?.parseTextSync||e?.parseText)&&(e.text=!0),e.text||(e.binary=!0),e}var Na=()=>{let e=va();return e.loaderRegistry=e.loaderRegistry||[],e.loaderRegistry};function Pa(e){let t=Na();e=Array.isArray(e)?e:[e];for(let n of e){let e=Ma(n);t.find(t=>e===t)||t.unshift(e)}}function Fa(){return Na()}var Ia=/\.([^.]+)$/;async function La(e,t=[],n,r){if(!Va(e))return null;let i=xa(n||{});if(i.core||={},e instanceof Response&&Ra(e)){let n=za(await e.clone().text(),t,{...i,core:{...i.core,nothrow:!0}},r);if(n)return n}let a=za(e,t,{...i,core:{...i.core,nothrow:!0}},r);if(a)return a;if(Hr(e)&&(e=await e.slice(0,10).arrayBuffer(),a=za(e,t,i,r)),!a&&e instanceof Response&&Ra(e)&&(a=za(await e.clone().text(),t,i,r)),!a&&!i.core.nothrow)throw Error(Ha(e));return a}function Ra(e){let t=na(e);return!!(t&&(t.startsWith(`text/`)||t===`application/json`||t.endsWith(`+json`)))}function za(e,t=[],n,r){if(!Va(e))return null;let i=xa(n||{});if(i.core||={},t&&!Array.isArray(t))return Ma(t);let a=[];t&&(a=a.concat(t)),i.core.ignoreRegisteredLoaders||a.push(...Fa()),Ua(a);let o=Ba(e,a,i,r);if(!o&&!i.core.nothrow)throw Error(Ha(e));return o}function Ba(e,t,n,r){let i=ta(e),a=na(e),o=$i(i)||r?.url,s=null,c=``;return n?.core?.mimeType&&(s=Ka(t,n?.core?.mimeType),c=`match forced by supplied MIME type ${n?.core?.mimeType}`),s||=Wa(t,o),c||=s?`matched url ${o}`:``,s||=Ka(t,a),c||=s?`matched MIME type ${a}`:``,s||=qa(t,e),c||=s?`matched initial data ${Za(e)}`:``,n?.core?.fallbackMimeType&&(s||=Ka(t,n?.core?.fallbackMimeType),c||=s?`matched fallback MIME type ${a}`:``),c&&Mr.log(1,`selectLoader selected ${s?.name}: ${c}.`),s}function Va(e){return!(e instanceof Response&&e.status===204)}function Ha(e){let t=ta(e),n=na(e),r=`No valid loader found (`;r+=t?`${Ui(t)}, `:`no url provided, `,r+=`MIME type: ${n?`"${n}"`:`not provided`}, `;let i=e?Za(e):``;return r+=i?` first bytes: "${i}"`:`first bytes: not available`,r+=`)`,r}function Ua(e){for(let t of e)Ma(t)}function Wa(e,t){let n=t&&Ia.exec(t),r=n&&n[1];return r?Ga(e,r):null}function Ga(e,t){t=t.toLowerCase();for(let n of e)for(let e of n.extensions)if(e.toLowerCase()===t)return n;return null}function Ka(e,t){for(let n of e)if(n.mimeTypes?.some(e=>Ji(t,e))||Ji(t,`application/x.${n.id}`))return n;return null}function qa(e,t){if(!t)return null;for(let n of e)if(typeof t==`string`){if(Ja(t,n))return n}else if(ArrayBuffer.isView(t)){if(Ya(t.buffer,t.byteOffset,n))return n}else if(t instanceof ArrayBuffer&&Ya(t,0,n))return n;return null}function Ja(e,t){return t.testText?t.testText(e):(Array.isArray(t.tests)?t.tests:[t.tests]).some(t=>e.startsWith(t))}function Ya(e,t,n){return(Array.isArray(n.tests)?n.tests:[n.tests]).some(r=>Xa(e,t,n,r))}function Xa(e,t,n,r){if(Rr(r))return xi(r,e,r.byteLength);switch(typeof r){case`function`:return r(Bi(e));case`string`:return r===Qa(e,t,r.length);default:return!1}}function Za(e,t=5){return typeof e==`string`?e.slice(0,t):ArrayBuffer.isView(e)?Qa(e.buffer,e.byteOffset,t):e instanceof ArrayBuffer?Qa(e,0,t):``}function Qa(e,t,n){if(e.byteLength<t+n)return``;let r=new DataView(e),i=``;for(let e=0;e<n;e++)i+=String.fromCharCode(r.getUint8(t+e));return i}var $a=256*1024;function*eo(e,t){let n=t?.chunkSize||$a,r=0,i=new TextEncoder;for(;r<e.length;){let t=Math.min(e.length-r,n),a=e.slice(r,r+t);r+=t,yield Bi(i.encode(a))}}var to=256*1024;function*no(e,t={}){let{chunkSize:n=to}=t,r=0;for(;r<e.byteLength;){let t=Math.min(e.byteLength-r,n),i=new ArrayBuffer(t),a=new Uint8Array(e,r,t);new Uint8Array(i).set(a),r+=t,yield i}}var ro=1024*1024;async function*io(e,t){let n=t?.chunkSize||ro,r=0;for(;r<e.size;){let t=r+n,i=await e.slice(r,t).arrayBuffer();r=t,yield i}}function ao(e,t){return Or?oo(e,t):so(e,t)}async function*oo(e,t){let n=e.getReader(),r;try{for(;;){let e=r||n.read();t?._streamReadAhead&&(r=n.read());let{done:i,value:a}=await e;if(i)return;yield zi(a)}}catch{n.releaseLock()}}async function*so(e,t){for await(let t of e)yield zi(t)}function co(e,t){if(typeof e==`string`)return eo(e,t);if(e instanceof ArrayBuffer)return no(e,t);if(Hr(e))return io(e,t);if(Gr(e))return ao(e,t);if(Vr(e)){let n=e.body;if(!n)throw Error(`Readable stream not available on Response`);return ao(n,t)}throw Error(`makeIterator`)}var lo=`Cannot convert supplied data type`;function uo(e,t,n){if(t.text&&typeof e==`string`)return e;if(Ri(e)&&(e=e.buffer),Rr(e)){let n=Hi(e);return t.text&&!t.binary?new TextDecoder(`utf8`).decode(n):zi(n)}throw Error(lo)}async function fo(e,t,n){if(typeof e==`string`||Rr(e))return uo(e,t,n);if(Hr(e)&&(e=await ia(e)),Vr(e))return await aa(e),t.binary?await e.arrayBuffer():await e.text();if(Gr(e)&&(e=co(e,n)),zr(e)||Br(e))return wi(e);throw Error(lo)}function po(e,t){let n=ya(),r=e||n,i=r.fetch??r.core?.fetch;return typeof i==`function`?i:Fr(i)?e=>fa(e,i):t?.fetch?t?.fetch:fa}function mo(e,t,n){if(n)return n;let r={fetch:po(t,e),...e};if(r.url){let e=$i(r.url);r.baseUrl=e,r.queryString=Qi(r.url),r.filename=Ui(e),r.baseUrl=Wi(e)}return Array.isArray(r.loaders)||(r.loaders=null),r}function ho(e,t){if(e&&!Array.isArray(e))return e;let n;if(e&&(n=Array.isArray(e)?e:[e]),t&&t.loaders){let e=Array.isArray(t.loaders)?t.loaders:[t.loaders];n=n?[...n,...e]:e}return n&&n.length?n:void 0}async function go(e,t,n,r){t&&!Array.isArray(t)&&!ja(t)&&(r=void 0,n=t,t=void 0),e=await e,n||={};let i=ta(e),a=ho(t,r),o=await La(e,a,n);if(!o)return null;let s=ba(n,o,a,i);return r=mo({url:i,_parse:go,loaders:a},s,r||null),await _o(o,e,s,r)}async function _o(e,t,n,r){if(_i(e),n=Kr(e.options,n),Vr(t)){let{ok:e,redirected:n,status:i,statusText:a,type:o,url:s}=t;r.response={headers:Object.fromEntries(t.headers.entries()),ok:e,redirected:n,status:i,statusText:a,type:o,url:s}}t=await fo(t,e,n);let i=e;if(i.parseTextSync&&typeof t==`string`)return i.parseTextSync(t,n,r);if(vi(e,n))return await yi(e,t,n,r,go);if(i.parseText&&typeof t==`string`)return await i.parseText(t,n,r);if(i.parse)return await i.parse(t,n,r);throw Zr(!i.parseSync),Error(`${e.id} loader - no parser found and worker is disabled`)}function vo(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function yo(e){return Array.isArray(e)?e.length===0||typeof e[0]==`number`:!1}function bo(e){return vo(e)||yo(e)}async function xo(e,t,n,r){let i,a;!Array.isArray(t)&&!ja(t)?(i=[],a=t,r=void 0):(i=t,a=n);let o=po(a),s=e;return typeof e==`string`&&(s=await o(e)),Hr(e)&&(s=await o(e)),typeof e==`string`&&(xa(a||{}).core?.baseUrl||(a={...a,core:{...a?.core,baseUrl:e}})),await go(s,i,a)}var So=`4.4.2`,Co=globalThis.loaders?.parseImageNode,wo=typeof Image<`u`,To=typeof ImageBitmap<`u`,Eo=Or?!0:!!Co;function Do(e){switch(e){case`auto`:return To||wo||Eo;case`imagebitmap`:return To;case`image`:return wo;case`data`:return Eo;default:throw Error(`@loaders.gl/images: image ${e} not supported in this environment`)}}function Oo(){if(To)return`imagebitmap`;if(wo)return`image`;if(Eo)return`data`;throw Error(`Install '@loaders.gl/polyfills' to parse images under Node.js`)}function ko(e){let t=jo(e);if(!t)throw Error(`Not an image`);return t}function Ao(e){switch(ko(e)){case`data`:return e;case`image`:case`imagebitmap`:let t=document.createElement(`canvas`),n=t.getContext(`2d`);if(!n)throw Error(`getImageData`);return t.width=e.width,t.height=e.height,n.drawImage(e,0,0),n.getImageData(0,0,e.width,e.height);default:throw Error(`getImageData`)}}function jo(e){return typeof ImageBitmap<`u`&&e instanceof ImageBitmap?`imagebitmap`:typeof Image<`u`&&e instanceof Image?`image`:e&&typeof e==`object`&&e.data&&e.width&&e.height?`data`:null}var Mo=/^data:image\/svg\+xml/,No=/\.svg((\?|#).*)?$/;function Po(e){return e&&(Mo.test(e)||No.test(e))}function Fo(e,t){if(Po(t)){let t=new TextDecoder().decode(e);try{typeof unescape==`function`&&typeof encodeURIComponent==`function`&&(t=unescape(encodeURIComponent(t)))}catch(e){throw Error(e.message)}return`data:image/svg+xml;base64,${btoa(t)}`}return Io(e,t)}function Io(e,t){if(Po(t))throw Error(`SVG cannot be parsed directly to imagebitmap`);return new Blob([new Uint8Array(e)])}async function Lo(e,t,n){let r=Fo(e,n),i=self.URL||self.webkitURL,a=typeof r!=`string`&&i.createObjectURL(r);try{return await Ro(a||r,t)}finally{a&&i.revokeObjectURL(a)}}async function Ro(e,t){let n=new Image;return n.src=e,t.image&&t.image.decode&&n.decode?(await n.decode(),n):await new Promise((e,t)=>{try{n.onload=()=>e(n),n.onerror=e=>{let n=e instanceof Error?e.message:`error`;t(Error(n))}}catch(e){t(e)}})}var zo=!0;async function Bo(e,t,n){let r;r=Po(n)?await Lo(e,t,n):Io(e,n);let i=t&&t.imagebitmap;return await Vo(r,i)}async function Vo(e,t=null){if((Ho(t)||!zo)&&(t=null),t)try{return await createImageBitmap(e,t)}catch(e){console.warn(e),zo=!1}return await createImageBitmap(e)}function Ho(e){if(!e)return!0;for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Uo(e){return!qo(e,`ftyp`,4)||!(e[8]&96)?null:Wo(e)}function Wo(e){switch(Go(e,8,12).replace(`\0`,` `).trim()){case`avif`:case`avis`:return{extension:`avif`,mimeType:`image/avif`};default:return null}}function Go(e,t,n){return String.fromCharCode(...e.slice(t,n))}function Ko(e){return[...e].map(e=>e.charCodeAt(0))}function qo(e,t,n=0){let r=Ko(t);for(let t=0;t<r.length;++t)if(r[t]!==e[t+n])return!1;return!0}var Jo=!1,Yo=!0;function Xo(e){let t=rs(e);return Qo(t)||ts(t)||$o(t)||es(t)||Zo(t)}function Zo(e){let t=Uo(new Uint8Array(e instanceof DataView?e.buffer:e));return t?{mimeType:t.mimeType,width:0,height:0}:null}function Qo(e){let t=rs(e);return t.byteLength>=24&&t.getUint32(0,Jo)===2303741511?{mimeType:`image/png`,width:t.getUint32(16,Jo),height:t.getUint32(20,Jo)}:null}function $o(e){let t=rs(e);return t.byteLength>=10&&t.getUint32(0,Jo)===1195984440?{mimeType:`image/gif`,width:t.getUint16(6,Yo),height:t.getUint16(8,Yo)}:null}function es(e){let t=rs(e);return t.byteLength>=14&&t.getUint16(0,Jo)===16973&&t.getUint32(2,Yo)===t.byteLength?{mimeType:`image/bmp`,width:t.getUint32(18,Yo),height:t.getUint32(22,Yo)}:null}function ts(e){let t=rs(e);if(!(t.byteLength>=3&&t.getUint16(0,Jo)===65496&&t.getUint8(2)===255))return null;let{tableMarkers:n,sofMarkers:r}=ns(),i=2;for(;i+9<t.byteLength;){let e=t.getUint16(i,Jo);if(r.has(e))return{mimeType:`image/jpeg`,height:t.getUint16(i+5,Jo),width:t.getUint16(i+7,Jo)};if(!n.has(e))return null;i+=2,i+=t.getUint16(i,Jo)}return null}function ns(){let e=new Set([65499,65476,65484,65501,65534]);for(let t=65504;t<65520;++t)e.add(t);return{tableMarkers:e,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}function rs(e){if(e instanceof DataView)return e;if(ArrayBuffer.isView(e))return new DataView(e.buffer);if(e instanceof ArrayBuffer)return new DataView(e);throw Error(`toDataView`)}async function is(e,t){let{mimeType:n}=Xo(e)||{},r=globalThis.loaders?.parseImageNode;return Er(r),await r(e,n)}async function as(e,t,n){t||={};let r=(t.image||{}).type||`auto`,{url:i}=n||{},a=os(r),o;switch(a){case`imagebitmap`:o=await Bo(e,t,i);break;case`image`:o=await Lo(e,t,i);break;case`data`:o=await is(e,t);break;default:Er(!1)}return r===`data`&&(o=Ao(o)),o}function os(e){switch(e){case`auto`:case`data`:return Oo();default:return Do(e),e}}var ss={dataType:null,batchType:null,id:`image`,module:`images`,name:`Images`,version:So,mimeTypes:[`image/png`,`image/jpeg`,`image/gif`,`image/webp`,`image/avif`,`image/bmp`,`image/vnd.microsoft.icon`,`image/svg+xml`],extensions:[`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`ico`,`svg`,`avif`],parse:as,tests:[e=>!!Xo(new DataView(e))],options:{image:{type:`auto`,decode:!0}}},R=new ae({id:`deck`}),cs={};function ls(e){cs=e}function z(e,t,n,r){R.level>0&&cs[e]&&cs[e].call(null,t,n,r)}function us(e){let t=e[0],n=e[e.length-1];return t===`{`&&n===`}`||t===`[`&&n===`]`}var ds={dataType:null,batchType:null,id:`JSON`,name:`JSON`,module:``,version:``,options:{},extensions:[`json`,`geojson`],mimeTypes:[`application/json`,`application/geo+json`],testText:us,parseTextSync:JSON.parse};function fs(){let e=`9.3.2`,t=globalThis.deck&&globalThis.deck.VERSION;if(t&&t!==e)throw Error(`deck.gl - multiple versions detected: ${t} vs ${e}`);return t||(R.log(1,`deck.gl ${e}`)(),globalThis.deck={...globalThis.deck,VERSION:e,version:e,log:R,_registerLoggers:ls},Pa([ds,[ss,{imagebitmap:{premultiplyAlpha:`none`}}]])),e}var ps=fs();function ms(e,t){if(!e){let e=Error(t||`shadertools: assertion failed.`);throw Error.captureStackTrace?.(e,ms),e}}var hs={number:{type:`number`,validate(e,t){return Number.isFinite(e)&&typeof t==`object`&&(t.max===void 0||e<=t.max)&&(t.min===void 0||e>=t.min)}},array:{type:`array`,validate(e,t){return Array.isArray(e)||ArrayBuffer.isView(e)}}};function gs(e){let t={};for(let[n,r]of Object.entries(e))t[n]=_s(r);return t}function _s(e){let t=vs(e);if(t!==`object`)return{value:e,...hs[t],type:t};if(typeof e==`object`)return e?e.type===void 0?e.value===void 0?{type:`object`,value:e}:(t=vs(e.value),{...e,...hs[t],type:t}):{...e,...hs[e.type],type:e.type}:{type:`object`,value:null};throw Error(`props`)}function vs(e){return Array.isArray(e)||ArrayBuffer.isView(e)?`array`:typeof e}var ys={vertex:`#ifdef MODULE_LOGDEPTH
  logdepth_adjustPosition(gl_Position);
#endif
`,fragment:`#ifdef MODULE_MATERIAL
  fragColor = material_filterColor(fragColor);
#endif

#ifdef MODULE_LIGHTING
  fragColor = lighting_filterColor(fragColor);
#endif

#ifdef MODULE_FOG
  fragColor = fog_filterColor(fragColor);
#endif

#ifdef MODULE_PICKING
  fragColor = picking_filterHighlightColor(fragColor);
  fragColor = picking_filterPickingColor(fragColor);
#endif

#ifdef MODULE_LOGDEPTH
  logdepth_setFragDepth();
#endif
`},bs=/void\s+main\s*\([^)]*\)\s*\{\n?/,xs=/}\n?[^{}]*$/,Ss=[],Cs=`__LUMA_INJECT_DECLARATIONS__`;function ws(e){let t={vertex:{},fragment:{}};for(let n in e){let r=e[n],i=Ts(n);typeof r==`string`&&(r={order:0,injection:r}),t[i][n]=r}return t}function Ts(e){let t=e.slice(0,2);switch(t){case`vs`:return`vertex`;case`fs`:return`fragment`;default:throw Error(t)}}function Es(e,t,n,r=!1){let i=t===`vertex`;for(let t in n){let r=n[t];r.sort((e,t)=>e.order-t.order),Ss.length=r.length;for(let e=0,t=r.length;e<t;++e)Ss[e]=r[e].injection;let a=`${Ss.join(`
`)}\n`;switch(t){case`vs:#decl`:i&&(e=e.replace(Cs,a));break;case`vs:#main-start`:i&&(e=e.replace(bs,e=>e+a));break;case`vs:#main-end`:i&&(e=e.replace(xs,e=>a+e));break;case`fs:#decl`:i||(e=e.replace(Cs,a));break;case`fs:#main-start`:i||(e=e.replace(bs,e=>e+a));break;case`fs:#main-end`:i||(e=e.replace(xs,e=>a+e));break;default:e=e.replace(t,e=>e+a)}}return e=e.replace(Cs,``),r&&(e=e.replace(/\}\s*$/,e=>e+ys[t])),e}function Ds(e){e.map(e=>Os(e))}function Os(e){if(e.instance)return;Ds(e.dependencies||[]);let{propTypes:t={},deprecations:n=[],inject:r={}}=e,i={normalizedInjections:ws(r),parsedDeprecations:As(n)};t&&(i.propValidators=gs(t)),e.instance=i;let a={};t&&(a=Object.entries(t).reduce((e,[t,n])=>{let r=n?.value;return r&&(e[t]=r),e},{})),e.defaultUniforms={...e.defaultUniforms,...a}}function ks(e,t,n){e.deprecations?.forEach(e=>{e.regex?.test(t)&&(e.deprecated?n.deprecated(e.old,e.new)():n.removed(e.old,e.new)())})}function As(e){return e.forEach(e=>{switch(e.type){case`function`:e.regex=RegExp(`\\b${e.old}\\(`);break;default:e.regex=RegExp(`${e.type} ${e.old};`)}}),e}function js(e){Ds(e);let t={},n={};Ms({modules:e,level:0,moduleMap:t,moduleDepth:n});let r=Object.keys(n).sort((e,t)=>n[t]-n[e]).map(e=>t[e]);return Ds(r),r}function Ms(e){let{modules:t,level:n,moduleMap:r,moduleDepth:i}=e;if(n>=5)throw Error(`Possible loop in shader dependency graph`);for(let e of t)r[e.name]=e,(i[e.name]===void 0||i[e.name]<n)&&(i[e.name]=n);for(let e of t)e.dependencies&&Ms({modules:e.dependencies,level:n+1,moduleMap:r,moduleDepth:i})}var Ns=/^(?:uniform\s+)?(?:(?:lowp|mediump|highp)\s+)?[A-Za-z0-9_]+(?:<[^>]+>)?\s+([A-Za-z0-9_]+)(?:\s*\[[^\]]+\])?\s*;/,Ps=/((?:layout\s*\([^)]*\)\s*)*)uniform\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}\s*([A-Za-z_][A-Za-z0-9_]*)?\s*;/g;function Fs(e){return`${e.name}Uniforms`}function Is(e,t){let n=t===`wgsl`?e.source:t===`vertex`?e.vs:e.fs;if(!n)return null;let r=Fs(e);return Vs(n,t===`wgsl`?`wgsl`:`glsl`,r)}function Ls(e,t){let n=Object.keys(e.uniformTypes||{});if(!n.length)return null;let r=Is(e,t);return r?{moduleName:e.name,uniformBlockName:Fs(e),stage:t,expectedUniformNames:n,actualUniformNames:r,matches:Ws(n,r)}:null}function Rs(e,t,n={}){let r=Ls(e,t);if(!r||r.matches)return r;let i=Gs(r);return n.log?.error?.(i,r)(),n.throwOnError!==!1&&ms(!1,i),r}function zs(e){let t=[],n=Ks(e);for(let e of n.matchAll(Ps)){let n=e[1]?.trim()||null;t.push({blockName:e[2],body:e[3],instanceName:e[4]||null,layoutQualifier:n,hasLayoutQualifier:!!n,isStd140:!!(n&&/\blayout\s*\([^)]*\bstd140\b[^)]*\)/.exec(n))})}return t}function Bs(e,t,n,r){let i=zs(e).filter(e=>!e.isStd140),a=new Set;for(let e of i){if(a.has(e.blockName))continue;a.add(e.blockName);let i=r?.label?`${r.label} `:``,o=e.hasLayoutQualifier?`declares ${qs(e.layoutQualifier)} instead of layout(std140)`:`does not declare layout(std140)`,s=`${i}${t} shader uniform block ${e.blockName} ${o}. luma.gl host-side shader block packing assumes explicit layout(std140) for GLSL uniform blocks. Add \`layout(std140)\` to the block declaration.`;n?.warn?.(s,e)()}return i}function Vs(e,t,n){let r=t===`wgsl`?Hs(e,n):Us(e,n);if(!r)return null;let i=[];for(let e of r.split(`
`)){let n=e.replace(/\/\/.*$/,``).trim();if(!n||n.startsWith(`#`))continue;let r=t===`wgsl`?n.match(/^([A-Za-z0-9_]+)\s*:/):n.match(Ns);r&&i.push(r[1])}return i}function Hs(e,t){let n=RegExp(`\\bstruct\\s+${t}\\b`,`m`).exec(e);if(!n)return null;let r=e.indexOf(`{`,n.index);if(r<0)return null;let i=0;for(let t=r;t<e.length;t++){let n=e[t];if(n===`{`){i++;continue}if(n===`}`&&(i--,i===0))return e.slice(r+1,t)}return null}function Us(e,t){return zs(e).find(e=>e.blockName===t)?.body||null}function Ws(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Gs(e){let{expectedUniformNames:t,actualUniformNames:n}=e,r=t.filter(e=>!n.includes(e)),i=n.filter(e=>!t.includes(e)),a=[`Expected ${t.length} fields, found ${n.length}.`],o=Js(t,n);return o&&a.push(o),r.length&&a.push(`Missing from shader block (${r.length}): ${Ys(r)}.`),i.length&&a.push(`Unexpected in shader block (${i.length}): ${Ys(i)}.`),t.length<=12&&n.length<=12&&(r.length||i.length)&&(a.push(`Expected: ${t.join(`, `)}.`),a.push(`Actual: ${n.join(`, `)}.`)),`${e.moduleName}: ${e.stage} shader uniform block ${e.uniformBlockName} does not match module.uniformTypes. ${a.join(` `)}`}function Ks(e){return e.replace(/\/\*[\s\S]*?\*\//g,``).replace(/\/\/.*$/gm,``)}function qs(e){return e.replace(/\s+/g,` `).trim()}function Js(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!==t[r])return`First mismatch at field ${r+1}: expected ${e[r]}, found ${t[r]}.`;return e.length>t.length?`Shader block ends after field ${t.length}; expected next field ${e[t.length]}.`:t.length>e.length?`Shader block has extra field ${t.length}: ${t[e.length]}.`:null}function Ys(e,t=8){if(e.length<=t)return e.join(`, `);let n=e.length-t;return`${e.slice(0,t).join(`, `)}, ... (${n} more)`}function Xs(e){switch(e?.gpu.toLowerCase()){case`apple`:return`#define APPLE_GPU
// Apple optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case`nvidia`:return`#define NVIDIA_GPU
// Nvidia optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
`;case`intel`:return`#define INTEL_GPU
// Intel optimizes away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Intel's built-in 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`;case`amd`:return`#define AMD_GPU
`;default:return`#define DEFAULT_GPU
// Prevent driver from optimizing away the calculation necessary for emulated fp64
#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1
// Headless Chrome's software shader 'tan' function doesn't have acceptable precision
#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1
// If the GPU doesn't have full 32 bits precision, will causes overflow
#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1
`}}function Zs(e,t){if(Number(e.match(/^#version[ \t]+(\d+)/m)?.[1]||100)!==300)throw Error(`luma.gl v9 only supports GLSL 3.00 shader sources`);switch(t){case`vertex`:return e=tc(e,$s),e;case`fragment`:return e=tc(e,ec),e;default:throw Error(t)}}var Qs=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,`#version 300 es
`],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,`textureLod(`],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,`texture(`]],$s=[...Qs,[nc(`attribute`),`in $1`],[nc(`varying`),`out $1`]],ec=[...Qs,[nc(`varying`),`in $1`]];function tc(e,t){for(let[n,r]of t)e=e.replace(n,r);return e}function nc(e){return RegExp(`\\b${e}[ \\t]+(\\w+[ \\t]+\\w+(\\[\\w+\\])?;)`,`g`)}function rc(e,t){let n=``;for(let r in e){let i=e[r];if(n+=`void ${i.signature} {\n`,i.header&&(n+=`  ${i.header}`),t[r]){let e=t[r];e.sort((e,t)=>e.order-t.order);for(let t of e)n+=`  ${t.injection}\n`}i.footer&&(n+=`  ${i.footer}`),n+=`}
`}return n}function ic(e){let t={vertex:{},fragment:{}};for(let n of e){let e,r;typeof n==`string`?(e={},r=n):(e=n,r=e.hook),r=r.trim();let[i,a]=r.split(`:`),o=r.replace(/\(.+/,``),s=Object.assign(e,{signature:a});switch(i){case`vs`:t.vertex[o]=s;break;case`fs`:t.fragment[o]=s;break;default:throw Error(i)}}return t}function ac(e,t){return{name:oc(e,t),language:`glsl`,version:sc(e)}}function oc(e,t=`unnamed`){let n=/#define[^\S\r\n]*SHADER_NAME[^\S\r\n]*([A-Za-z0-9_-]+)\s*/.exec(e);return n?n[1]:t}function sc(e){let t=100,n=e.match(/[^\s]+/g);if(n&&n.length>=2&&n[0]===`#version`){let e=parseInt(n[1],10);Number.isFinite(e)&&(t=e)}if(t!==100&&t!==300)throw Error(`Invalid GLSL version ${t}`);return t}var B=`(?:var<\\s*(uniform|storage(?:\\s*,\\s*[A-Za-z_][A-Za-z0-9_]*)?)\\s*>|var)\\s+([A-Za-z_][A-Za-z0-9_]*)`,cc=`\\s*`,lc=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${cc}@group\\(\\s*(\\d+)\\s*\\)${cc}${B}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${cc}@binding\\(\\s*(auto|\\d+)\\s*\\)${cc}${B}`,`g`)],uc=[RegExp(`@binding\\(\\s*(auto|\\d+)\\s*\\)${cc}@group\\(\\s*(\\d+)\\s*\\)${cc}${B}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${cc}@binding\\(\\s*(auto|\\d+)\\s*\\)${cc}${B}`,`g`)],dc=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)${cc}@group\\(\\s*(\\d+)\\s*\\)${cc}${B}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)${cc}@binding\\(\\s*(\\d+)\\s*\\)${cc}${B}`,`g`)],fc=[RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${B}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)\\s*${B}`,`g`),RegExp(`@binding\\(\\s*(auto)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${B}`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(auto)\\s*\\)(?:[\\s\\n\\r]*@[A-Za-z_][^\\n\\r]*)*[\\s\\n\\r]*${B}`,`g`)];function pc(e){let t=e.split(``),n=0,r=0,i=!1,a=!1,o=!1;for(;n<e.length;){let s=e[n],c=e[n+1];if(a){o?o=!1:s===`\\`?o=!0:s===`"`&&(a=!1),n++;continue}if(i){s===`
`||s===`\r`?i=!1:t[n]=` `,n++;continue}if(r>0){if(s===`/`&&c===`*`){t[n]=` `,t[n+1]=` `,r++,n+=2;continue}if(s===`*`&&c===`/`){t[n]=` `,t[n+1]=` `,r--,n+=2;continue}s!==`
`&&s!==`\r`&&(t[n]=` `),n++;continue}if(s===`"`){a=!0,n++;continue}if(s===`/`&&c===`/`){t[n]=` `,t[n+1]=` `,i=!0,n+=2;continue}if(s===`/`&&c===`*`){t[n]=` `,t[n+1]=` `,r=1,n+=2;continue}n++}return t.join(``)}function mc(e,t){let n=pc(e),r=[];for(let i of t){i.lastIndex=0;let a;for(a=i.exec(n);a;){let o=i===t[0],s=a.index,c=a[0].length;r.push({match:e.slice(s,s+c),index:s,length:c,bindingToken:a[o?1:2],groupToken:a[o?2:1],accessDeclaration:a[3]?.trim(),name:a[4]}),a=i.exec(n)}}return r.sort((e,t)=>e.index-t.index)}function hc(e,t,n){let r=mc(e,t);if(!r.length)return e;let i=``,a=0;for(let t of r)i+=e.slice(a,t.index),i+=n(t),a=t.index+t.length;return i+=e.slice(a),i}function gc(e){return/@binding\(\s*auto\s*\)/.test(pc(e))}function _c(e,t){return mc(e,t===lc||t===uc?fc:t).find(e=>e.bindingToken===`auto`)}var vc=[RegExp(`@binding\\(\\s*(\\d+)\\s*\\)\\s*@group\\(\\s*(\\d+)\\s*\\)\\s*${B}\\s*:\\s*([^;]+);`,`g`),RegExp(`@group\\(\\s*(\\d+)\\s*\\)\\s*@binding\\(\\s*(\\d+)\\s*\\)\\s*${B}\\s*:\\s*([^;]+);`,`g`)];function yc(e,t=[]){let n=pc(e),r=new Map;for(let e of t)r.set(xc(e.name,e.group,e.location),e.moduleName);let i=[];for(let e of vc){e.lastIndex=0;let t;for(t=e.exec(n);t;){let a=e===vc[0],o=Number(t[a?1:2]),s=Number(t[a?2:1]),c=t[3]?.trim(),l=t[4],u=t[5].trim(),d=r.get(xc(l,s,o));i.push(bc({name:l,group:s,binding:o,owner:d?`module`:`application`,moduleName:d,accessDeclaration:c,resourceType:u})),t=e.exec(n)}}return i.sort((e,t)=>e.group===t.group?e.binding===t.binding?e.name.localeCompare(t.name):e.binding-t.binding:e.group-t.group)}function bc(e){let t={name:e.name,group:e.group,binding:e.binding,owner:e.owner,kind:`unknown`,moduleName:e.moduleName,resourceType:e.resourceType};if(e.accessDeclaration){let n=e.accessDeclaration.split(`,`).map(e=>e.trim());if(n[0]===`uniform`)return{...t,kind:`uniform`,access:`uniform`};if(n[0]===`storage`){let e=n[1]||`read_write`;return{...t,kind:e===`read`?`read-only-storage`:`storage`,access:e}}}return e.resourceType===`sampler`||e.resourceType===`sampler_comparison`?{...t,kind:`sampler`,samplerKind:e.resourceType===`sampler_comparison`?`comparison`:`filtering`}:e.resourceType.startsWith(`texture_storage_`)?{...t,kind:`storage-texture`,access:wc(e.resourceType),viewDimension:Sc(e.resourceType)}:e.resourceType.startsWith(`texture_`)?{...t,kind:`texture`,viewDimension:Sc(e.resourceType),sampleType:Cc(e.resourceType),multisampled:e.resourceType.startsWith(`texture_multisampled_`)}:t}function xc(e,t,n){return`${t}:${n}:${e}`}function Sc(e){if(e.includes(`cube_array`))return`cube-array`;if(e.includes(`2d_array`))return`2d-array`;if(e.includes(`cube`))return`cube`;if(e.includes(`3d`))return`3d`;if(e.includes(`2d`))return`2d`;if(e.includes(`1d`))return`1d`}function Cc(e){if(e.startsWith(`texture_depth_`))return`depth`;if(e.includes(`<i32>`))return`sint`;if(e.includes(`<u32>`))return`uint`;if(e.includes(`<f32>`))return`float`}function wc(e){return/,\s*([A-Za-z_][A-Za-z0-9_]*)\s*>$/.exec(e)?.[1]}var Tc=`\n\n${Cs}\n`,Ec=100,Dc=`precision highp float;
`;function Oc(e){let t=js(e.modules||[]),{source:n,bindingAssignments:r}=Ac(e.platformInfo,{...e,source:e.source,stage:`vertex`,modules:t});return{source:n,getUniforms:Mc(t),bindingAssignments:r,bindingTable:yc(n,r)}}function kc(e){let{vs:t,fs:n}=e,r=js(e.modules||[]);return{vs:jc(e.platformInfo,{...e,source:t,stage:`vertex`,modules:r}),fs:jc(e.platformInfo,{...e,source:n,stage:`fragment`,modules:r}),getUniforms:Mc(r)}}function Ac(e,t){let{source:n,stage:r,modules:i,hookFunctions:a=[],inject:o={},log:s}=t;ms(typeof n==`string`,`shader source must be a string`);let c=n,l=``,u=ic(a),d={},f={},p={};for(let e in o){let t=typeof o[e]==`string`?{injection:o[e],order:0}:o[e],n=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(n){let r=n[2],i=n[3];r?i===`decl`?f[e]=[t]:p[e]=[t]:d[e]=[t]}else p[e]=[t]}let m=i,h=Ic(c),g=Fc(h.source),_=Bc(m,t._bindingRegistry,g),v=[];for(let e of m){s&&ks(e,c,s);let n=Lc(Pc(e,`wgsl`,s),e,{usedBindingsByGroup:g,bindingRegistry:t._bindingRegistry,reservedBindingKeysByGroup:_});v.push(...n.bindingAssignments);let i=n.source;l+=i;let a=e.injections?.[r]||{};for(let e in a){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let n=t[2]===`decl`?f:p;n[e]=n[e]||[],n[e].push(a[e])}else d[e]=d[e]||[],d[e].push(a[e])}}return l+=Tc,l=Es(l,r,f),l+=rc(u[r],d),l+=Yc(v),l+=h.source,l=Es(l,r,p),Jc(l),{source:l,bindingAssignments:v}}function jc(e,t){let{source:n,stage:r,language:i=`glsl`,modules:a,defines:o={},hookFunctions:s=[],inject:c={},prologue:l=!0,log:u}=t;ms(typeof n==`string`,`shader source must be a string`);let d=i===`glsl`?ac(n).version:-1,f=e.shaderLanguageVersion,p=d===100?`#version 100`:`#version 300 es`,m=n.split(`
`).slice(1).join(`
`),h={};a.forEach(e=>{Object.assign(h,e.defines)}),Object.assign(h,o);let g=``;switch(i){case`wgsl`:break;case`glsl`:g=l?`\
${p}

// ----- PROLOGUE -------------------------
${`#define SHADER_TYPE_${r.toUpperCase()}`}

${Xs(e)}
${r===`fragment`?Dc:``}

// ----- APPLICATION DEFINES -------------------------

${Nc(h)}

`:`${p}
`;break}let _=ic(s),v={},y={},b={};for(let e in c){let t=typeof c[e]==`string`?{injection:c[e],order:0}:c[e],n=/^(v|f)s:(#)?([\w-]+)$/.exec(e);if(n){let r=n[2],i=n[3];r?i===`decl`?y[e]=[t]:b[e]=[t]:v[e]=[t]}else b[e]=[t]}for(let e of a){u&&ks(e,m,u);let t=Pc(e,r,u);g+=t;let n=e.instance?.normalizedInjections[r]||{};for(let e in n){let t=/^(v|f)s:#([\w-]+)$/.exec(e);if(t){let r=t[2]===`decl`?y:b;r[e]=r[e]||[],r[e].push(n[e])}else v[e]=v[e]||[],v[e].push(n[e])}}return g+=`// ----- MAIN SHADER SOURCE -------------------------`,g+=Tc,g=Es(g,r,y),g+=rc(_[r],v),g+=m,g=Es(g,r,b),i===`glsl`&&d!==f&&(g=Zs(g,r)),i===`glsl`&&Bs(g,r,u),g.trim()}function Mc(e){return function(t){let n={};for(let r of e){let e=r.getUniforms?.(t,n);Object.assign(n,e)}return n}}function Nc(e={}){let t=``;for(let n in e){let r=e[n];(r||Number.isFinite(r))&&(t+=`#define ${n.toUpperCase()} ${e[n]}\n`)}return t}function Pc(e,t,n){let r;switch(t){case`vertex`:r=e.vs||``;break;case`fragment`:r=e.fs||``;break;case`wgsl`:r=e.source||``;break;default:ms(!1)}if(!e.name)throw Error(`Shader module must have a name`);Rs(e,t,{log:n});let i=e.name.toUpperCase().replace(/[^0-9a-z]/gi,`_`),a=`\
// ----- MODULE ${e.name} ---------------

`;return t!==`wgsl`&&(a+=`#define MODULE_${i}\n`),a+=`${r}\n`,a}function Fc(e){let t=new Map;for(let n of mc(e,dc)){let e=Number(n.bindingToken),r=Number(n.groupToken);Uc(r,e,n.name),Gc(t,r,e,`application binding "${n.name}"`)}return t}function Ic(e){let t=mc(e,uc),n=new Map;for(let e of t){if(e.bindingToken===`auto`)continue;let t=Number(e.bindingToken),r=Number(e.groupToken);Uc(r,t,e.name),Gc(n,r,t,`application binding "${e.name}"`)}let r={sawSupportedBindingDeclaration:t.length>0},i=hc(e,uc,e=>zc(e,n,r));if(gc(e)&&!r.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in application WGSL. Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:i}}function Lc(e,t,n){let r=[],i={sawSupportedBindingDeclaration:mc(e,lc).length>0,nextHintedBindingLocation:typeof t.firstBindingSlot==`number`?t.firstBindingSlot:null},a=hc(e,lc,e=>Rc(e,{module:t,context:n,bindingAssignments:r,relocationState:i}));if(gc(e)&&!i.sawSupportedBindingDeclaration)throw Error(`Unsupported @binding(auto) declaration form in module "${t.name}". Use adjacent "@group(N)" and "@binding(auto)" decorators followed by a bindable "var" declaration.`);return{source:a,bindingAssignments:r}}function Rc(e,t){let{module:n,context:r,bindingAssignments:i,relocationState:a}=t,{match:o,bindingToken:s,groupToken:c,name:l}=e,u=Number(c);if(s===`auto`){let e=Xc(u,n.name,l),t=r.bindingRegistry?.get(e),s=t===void 0?a.nextHintedBindingLocation===null?Kc(u,r.usedBindingsByGroup):Kc(u,r.usedBindingsByGroup,a.nextHintedBindingLocation):t;return Wc(n.name,u,s,l),t!==void 0&&Vc(r.reservedBindingKeysByGroup,u,s,e)?(i.push({moduleName:n.name,name:l,group:u,location:s}),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${s})`)):(Gc(r.usedBindingsByGroup,u,s,`module "${n.name}" binding "${l}"`),r.bindingRegistry?.set(e,s),i.push({moduleName:n.name,name:l,group:u,location:s}),a.nextHintedBindingLocation!==null&&t===void 0&&(a.nextHintedBindingLocation=s+1),o.replace(/@binding\(\s*auto\s*\)/,`@binding(${s})`))}let d=Number(s);return Wc(n.name,u,d,l),Gc(r.usedBindingsByGroup,u,d,`module "${n.name}" binding "${l}"`),i.push({moduleName:n.name,name:l,group:u,location:d}),o}function zc(e,t,n){let{match:r,bindingToken:i,groupToken:a,name:o}=e,s=Number(a);if(i===`auto`){let e=qc(s,t);return Uc(s,e,o),Gc(t,s,e,`application binding "${o}"`),r.replace(/@binding\(\s*auto\s*\)/,`@binding(${e})`)}return n.sawSupportedBindingDeclaration=!0,r}function Bc(e,t,n){let r=new Map;if(!t)return r;for(let i of e)for(let e of Hc(i)){let a=Xc(e.group,i.name,e.name),o=t.get(a);if(o!==void 0){let t=r.get(e.group)||new Map,i=t.get(o);if(i&&i!==a)throw Error(`Duplicate WGSL binding reservation for modules "${i}" and "${a}": group ${e.group}, binding ${o}.`);Gc(n,e.group,o,`registered module binding "${a}"`),t.set(o,a),r.set(e.group,t)}}return r}function Vc(e,t,n,r){let i=e.get(t);if(!i)return!1;let a=i.get(n);if(!a)return!1;if(a!==r)throw Error(`Registered module binding "${r}" collided with "${a}": group ${t}, binding ${n}.`);return!0}function Hc(e){let t=[],n=e.source||``;for(let e of mc(n,lc))t.push({name:e.name,group:Number(e.groupToken)});return t}function Uc(e,t,n){if(e===0&&t>=Ec)throw Error(`Application binding "${n}" in group 0 uses reserved binding ${t}. Application-owned explicit group-0 bindings must stay below ${Ec}.`)}function Wc(e,t,n,r){if(t===0&&n<Ec)throw Error(`Module "${e}" binding "${r}" in group 0 uses reserved application binding ${n}. Module-owned explicit group-0 bindings must be ${Ec} or higher.`)}function Gc(e,t,n,r){let i=e.get(t)||new Set;if(i.has(n))throw Error(`Duplicate WGSL binding assignment for ${r}: group ${t}, binding ${n}.`);i.add(n),e.set(t,i)}function Kc(e,t,n){let r=t.get(e)||new Set,i=n??(e===0?Ec:r.size>0?Math.max(...r)+1:0);for(;r.has(i);)i++;return i}function qc(e,t){let n=t.get(e)||new Set,r=0;for(;n.has(r);)r++;return r}function Jc(e){let t=_c(e,lc);if(!t)return;let n=Zc(e,t.index);throw n?Error(`Unresolved @binding(auto) for module "${n}" binding "${t.name}" remained in assembled WGSL source.`):Qc(e,t.index)?Error(`Unresolved @binding(auto) for application binding "${t.name}" remained in assembled WGSL source.`):Error(`Unresolved @binding(auto) remained in assembled WGSL source near "${$c(t.match)}".`)}function Yc(e){if(e.length===0)return``;let t=`// ----- MODULE WGSL BINDING ASSIGNMENTS ---------------
`;for(let n of e)t+=`// ${n.moduleName}.${n.name} -> @group(${n.group}) @binding(${n.location})\n`;return t+=`
`,t}function Xc(e,t,n){return`${e}:${t}:${n}`}function Zc(e,t){let n=/^\/\/ ----- MODULE ([^\n]+) ---------------$/gm,r,i;for(i=n.exec(e);i&&i.index<=t;)r=i[1],i=n.exec(e);return r}function Qc(e,t){let n=e.indexOf(Tc);return n>=0?t>n:!0}function $c(e){return e.replace(/\s+/g,` `).trim()}var el=`([a-zA-Z_][a-zA-Z0-9_]*)`,tl=RegExp(`^\\s*\\#\\s*ifdef\\s*${el}\\s*$`),nl=RegExp(`^\\s*\\#\\s*ifndef\\s*${el}\\s*(?:\\/\\/.*)?$`),rl=/^\s*\#\s*else\s*(?:\/\/.*)?$/,il=/^\s*\#\s*endif\s*$/,al=RegExp(`^\\s*\\#\\s*ifdef\\s*${el}\\s*(?:\\/\\/.*)?$`),ol=/^\s*\#\s*endif\s*(?:\/\/.*)?$/;function sl(e,t){let n=e.split(`
`),r=[],i=[],a=!0;for(let e of n){let n=e.match(al)||e.match(tl),o=e.match(nl),s=e.match(rl),c=e.match(ol)||e.match(il);if(n||o){let e=(n||o)?.[1],r=!!t?.defines?.[e],s=n?r:!r,c=a&&s;i.push({parentActive:a,branchTaken:s,active:c}),a=c}else if(s){let e=i[i.length-1];if(!e)throw Error(`Encountered #else without matching #ifdef or #ifndef`);e.active=e.parentActive&&!e.branchTaken,e.branchTaken=!0,a=e.active}else c?(i.pop(),a=i.length?i[i.length-1].active:!0):a&&r.push(e)}if(i.length>0)throw Error(`Unterminated conditional block in shader source`);return r.join(`
`)}var cl=class e{static defaultShaderAssembler;_hookFunctions=[];_defaultModules=[];_wgslBindingRegistry=new Map;static getDefaultShaderAssembler(){return e.defaultShaderAssembler=e.defaultShaderAssembler||new e,e.defaultShaderAssembler}addDefaultModule(e){this._defaultModules.find(t=>t.name===(typeof e==`string`?e:e.name))||this._defaultModules.push(e)}removeDefaultModule(e){let t=typeof e==`string`?e:e.name;this._defaultModules=this._defaultModules.filter(e=>e.name!==t)}addShaderHook(e,t){t&&(e=Object.assign(t,{hook:e})),this._hookFunctions.push(e)}assembleWGSLShader(e){let t=this._getModuleList(e.modules),n=this._hookFunctions,{source:r,getUniforms:i,bindingAssignments:a}=Oc({...e,source:e.source,_bindingRegistry:this._wgslBindingRegistry,modules:t,hookFunctions:n}),o={...t.reduce((e,t)=>(Object.assign(e,t.defines),e),{}),...e.defines},s=e.platformInfo.shaderLanguage===`wgsl`?sl(r,{defines:o}):r;return{source:s,getUniforms:i,modules:t,bindingAssignments:a,bindingTable:yc(s,a)}}assembleGLSLShaderPair(e){let t=this._getModuleList(e.modules),n=this._hookFunctions;return{...kc({...e,vs:e.vs,fs:e.fs,modules:t,hookFunctions:n}),modules:t}}_getModuleList(e=[]){let t=Array(this._defaultModules.length+e.length),n={},r=0;for(let e=0,i=this._defaultModules.length;e<i;++e){let i=this._defaultModules[e],a=i.name;t[r++]=i,n[a]=!0}for(let i=0,a=e.length;i<a;++i){let a=e[i],o=a.name;n[o]||(t[r++]=a,n[o]=!0)}return t.length=r,Ds(t),t}},ll=`#version 300 es
out vec4 transform_output;
void main() {
  transform_output = vec4(0);
}`;function ul(e){let{input:t,inputChannels:n,output:r}=e||{};if(!t)return ll;if(!n)throw Error(`inputChannels`);return`\
#version 300 es
in ${dl(n)} ${t};
out vec4 ${r};
void main() {
  ${r} = ${fl(t,n)};
}`}function dl(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`invalid channels: ${e}`)}}function fl(e,t){switch(t){case 1:return`vec4(${e}, 0.0, 0.0, 1.0)`;case 2:return`vec4(${e}, 0.0, 1.0)`;case 3:return`vec4(${e}, 1.0)`;case 4:return e;default:throw Error(`invalid channels: ${t}`)}}1/Math.PI*180,1/180*Math.PI,globalThis.mathgl=globalThis.mathgl||{config:{EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1}};var V=globalThis.mathgl.config;function pl(e,{precision:t=V.precision}={}){return e=_l(e),`${parseFloat(e.toPrecision(t))}`}function ml(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}function H(e,t,n){return yl(e,e=>Math.max(t,Math.min(n,e)))}function hl(e,t,n){return ml(e)?e.map((e,r)=>hl(e,t[r],n)):n*t+(1-n)*e}function gl(e,t,n){let r=V.EPSILON;n&&(V.EPSILON=n);try{if(e===t)return!0;if(ml(e)&&ml(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!gl(e[n],t[n]))return!1;return!0}return e&&e.equals?e.equals(t):t&&t.equals?t.equals(e):typeof e==`number`&&typeof t==`number`?Math.abs(e-t)<=V.EPSILON*Math.max(1,Math.abs(e),Math.abs(t)):!1}finally{V.EPSILON=r}}function _l(e){return Math.round(e/V.EPSILON)*V.EPSILON}function vl(e){return e.clone?e.clone():Array(e.length)}function yl(e,t,n){if(ml(e)){let r=e;n||=vl(r);for(let i=0;i<n.length&&i<r.length;++i){let r=typeof e==`number`?e:e[i];n[i]=t(r,i,n)}return n}return t(e)}var bl=class extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,t=0){for(let n=0;n<this.ELEMENTS;++n)this[n]=e[n+t];return this.check()}toArray(e=[],t=0){for(let n=0;n<this.ELEMENTS;++n)e[t+n]=this[n];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:ml(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(V)}formatString(e){let t=``;for(let n=0;n<this.ELEMENTS;++n)t+=(n>0?`, `:``)+pl(this[n],e);return`${e.printTypes?this.constructor.name:``}[${t}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(!gl(this[t],e[t]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(this[t]!==e[t])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,t,n){if(n===void 0)return this.lerp(this,e,t);for(let r=0;r<this.ELEMENTS;++r){let i=e[r];this[r]=i+n*((typeof t==`number`?t:t[r])-i)}return this.check()}min(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.min(e[t],this[t]);return this.check()}max(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.max(e[t],this[t]);return this.check()}clamp(e,t){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e[n]),t[n]);return this.check()}add(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]+=t[e];return this.check()}subtract(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]-=t[e];return this.check()}scale(e){if(typeof e==`number`)for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;else for(let t=0;t<this.ELEMENTS&&t<e.length;++t)this[t]*=e[t];return this.check()}multiplyByScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}check(){if(V.debug&&!this.validate())throw Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let t=0;t<this.ELEMENTS;++t)e&&=Number.isFinite(this[t]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=e;return this.check()}addScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,t){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e),t);return this.check()}get elements(){return this}};function xl(e,t){if(e.length!==t)return!1;for(let t=0;t<e.length;++t)if(!Number.isFinite(e[t]))return!1;return!0}function U(e){if(!Number.isFinite(e))throw Error(`Invalid number ${JSON.stringify(e)}`);return e}function Sl(e,t,n=``){if(V.debug&&!xl(e,t))throw Error(`math.gl: ${n} some fields set to invalid numbers'`);return e}function Cl(e,t){if(!e)throw Error(`math.gl assertion ${t}`)}var wl=class extends bl{get x(){return this[0]}set x(e){this[0]=U(e)}get y(){return this[1]}set y(e){this[1]=U(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let t=0;t<this.ELEMENTS;++t)e+=this[t]*this[t];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let t=0;for(let n=0;n<this.ELEMENTS;++n){let r=this[n]-e[n];t+=r*r}return U(t)}dot(e){let t=0;for(let n=0;n<this.ELEMENTS;++n)t+=this[n]*e[n];return U(t)}normalize(){let e=this.magnitude();if(e!==0)for(let t=0;t<this.ELEMENTS;++t)this[t]/=e;return this.check()}multiply(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]*=t[e];return this.check()}divide(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]/=t[e];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return Cl(e>=0&&e<this.ELEMENTS,`index is out of range`),U(this[e])}setComponent(e,t){return Cl(e>=0&&e<this.ELEMENTS,`index is out of range`),this[e]=t,this.check()}addVectors(e,t){return this.copy(e).add(t)}subVectors(e,t){return this.copy(e).subtract(t)}multiplyVectors(e,t){return this.copy(e).multiply(t)}addScaledVector(e,t){return this.add(new this.constructor(e).multiplyScalar(t))}},Tl=typeof Float32Array<`u`?Float32Array:Array;Math.PI/180;function El(){let e=new Tl(2);return Tl!=Float32Array&&(e[0]=0,e[1]=0),e}function Dl(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function Ol(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function kl(e,t){return e[0]=-t[0],e[1]=-t[1],e}function Al(e,t,n,r){let i=t[0],a=t[1];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e}function jl(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[3]*i+n[6],e[1]=n[1]*r+n[4]*i+n[7],e}function Ml(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[4]*i+n[12],e[1]=n[1]*r+n[5]*i+n[13],e}var Nl=Ol;(function(){let e=El();return function(t,n,r,i,a,o){let s,c;for(n||=2,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}})();function Pl(e,t,n){let r=t[0],i=t[1],a=n[3]*r+n[7]*i||1;return e[0]=(n[0]*r+n[4]*i)/a,e[1]=(n[1]*r+n[5]*i)/a,e}function Fl(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a||1;return e[0]=(n[0]*r+n[4]*i+n[8]*a)/o,e[1]=(n[1]*r+n[5]*i+n[9]*a)/o,e[2]=(n[2]*r+n[6]*i+n[10]*a)/o,e}function Il(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e[2]=t[2],e}function Ll(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e[2]=t[2],e[3]=t[3],e}function Rl(e,t,n){let r=t[0],i=t[1],a=t[2];return e[0]=n[0]*r+n[3]*i+n[6]*a,e[1]=n[1]*r+n[4]*i+n[7]*a,e[2]=n[2]*r+n[5]*i+n[8]*a,e[3]=t[3],e}function zl(){let e=new Tl(3);return Tl!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Bl(e){let t=e[0],n=e[1],r=e[2];return Math.sqrt(t*t+n*n+r*r)}function Vl(e,t,n){let r=new Tl(3);return r[0]=e,r[1]=t,r[2]=n,r}function Hl(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function Ul(e){let t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}function Wl(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function Gl(e,t){let n=t[0],r=t[1],i=t[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function Kl(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ql(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function Jl(e,t,n,r){let i=t[0],a=t[1],o=t[2];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e}function Yl(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a+n[15];return o||=1,e[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])/o,e[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])/o,e[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])/o,e}function Xl(e,t,n){let r=t[0],i=t[1],a=t[2];return e[0]=r*n[0]+i*n[3]+a*n[6],e[1]=r*n[1]+i*n[4]+a*n[7],e[2]=r*n[2]+i*n[5]+a*n[8],e}function Zl(e,t,n){let r=n[0],i=n[1],a=n[2],o=n[3],s=t[0],c=t[1],l=t[2],u=i*l-a*c,d=a*s-r*l,f=r*c-i*s,p=i*f-a*d,m=a*u-r*f,h=r*d-i*u,g=o*2;return u*=g,d*=g,f*=g,p*=2,m*=2,h*=2,e[0]=s+u+p,e[1]=c+d+m,e[2]=l+f+h,e}function Ql(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function $l(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function eu(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),a[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),a[2]=i[2],e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function tu(e,t){let n=e[0],r=e[1],i=e[2],a=t[0],o=t[1],s=t[2],c=Math.sqrt((n*n+r*r+i*i)*(a*a+o*o+s*s)),l=c&&Kl(e,t)/c;return Math.acos(Math.min(Math.max(l,-1),1))}var nu=Hl,ru=Bl,iu=Ul;(function(){let e=zl();return function(t,n,r,i,a,o){let s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})();var au=[0,0,0],ou,W=class e extends wl{static get ZERO(){return ou||(ou=new e(0,0,0),Object.freeze(ou)),ou}constructor(e=0,t=0,n=0){super(-0,-0,-0),arguments.length===1&&ml(e)?this.copy(e):(V.debug&&(U(e),U(t),U(n)),this[0]=e,this[1]=t,this[2]=n)}set(e,t,n){return this[0]=e,this[1]=t,this[2]=n,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return V.debug&&(U(e.x),U(e.y),U(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=U(e)}angle(e){return tu(this,e)}cross(e){return ql(this,this,e),this.check()}rotateX({radians:e,origin:t=au}){return Ql(this,this,t,e),this.check()}rotateY({radians:e,origin:t=au}){return $l(this,this,t,e),this.check()}rotateZ({radians:e,origin:t=au}){return eu(this,this,t,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return Yl(this,this,e),this.check()}transformAsVector(e){return Fl(this,this,e),this.check()}transformByMatrix3(e){return Xl(this,this,e),this.check()}transformByMatrix2(e){return Il(this,this,e),this.check()}transformByQuaternion(e){return Zl(this,this,e),this.check()}},su,cu=class e extends wl{static get ZERO(){return su||(su=new e(0,0,0,0),Object.freeze(su)),su}constructor(e=0,t=0,n=0,r=0){super(-0,-0,-0,-0),ml(e)&&arguments.length===1?this.copy(e):(V.debug&&(U(e),U(t),U(n),U(r)),this[0]=e,this[1]=t,this[2]=n,this[3]=r)}set(e,t,n,r){return this[0]=e,this[1]=t,this[2]=n,this[3]=r,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this.check()}fromObject(e){return V.debug&&(U(e.x),U(e.y),U(e.z),U(e.w)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this[3]=e.w,this}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e.w=this[3],e}get ELEMENTS(){return 4}get z(){return this[2]}set z(e){this[2]=U(e)}get w(){return this[3]}set w(e){this[3]=U(e)}transform(e){return Yl(this,this,e),this.check()}transformByMatrix3(e){return Rl(this,this,e),this.check()}transformByMatrix2(e){return Ll(this,this,e),this.check()}transformByQuaternion(e){return Zl(this,this,e),this.check()}applyMatrix4(e){return e.transform(this,this),this}},lu=class extends bl{toString(){let e=`[`;if(V.printRowMajor){e+=`row-major:`;for(let t=0;t<this.RANK;++t)for(let n=0;n<this.RANK;++n)e+=` ${this[n*this.RANK+t]}`}else{e+=`column-major:`;for(let t=0;t<this.ELEMENTS;++t)e+=` ${this[t]}`}return e+=`]`,e}getElementIndex(e,t){return t*this.RANK+e}getElement(e,t){return this[t*this.RANK+e]}setElement(e,t,n){return this[t*this.RANK+e]=U(n),this}getColumn(e,t=Array(this.RANK).fill(-0)){let n=e*this.RANK;for(let e=0;e<this.RANK;++e)t[e]=this[n+e];return t}setColumn(e,t){let n=e*this.RANK;for(let e=0;e<this.RANK;++e)this[n+e]=t[e];return this}};function uu(){let e=new Tl(9);return Tl!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function du(e,t){if(e===t){let n=t[1],r=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=n,e[5]=t[7],e[6]=r,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function fu(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=u*o-s*l,f=-u*a+s*c,p=l*a-o*c,m=n*d+r*f+i*p;return m?(m=1/m,e[0]=d*m,e[1]=(-u*r+i*l)*m,e[2]=(s*r-i*o)*m,e[3]=f*m,e[4]=(u*n-i*c)*m,e[5]=(-s*n+i*a)*m,e[6]=p*m,e[7]=(-l*n+r*c)*m,e[8]=(o*n-r*a)*m,e):null}function pu(e){let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*(l*a-o*c)+n*(-l*i+o*s)+r*(c*i-a*s)}function mu(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=n[0],p=n[1],m=n[2],h=n[3],g=n[4],_=n[5],v=n[6],y=n[7],b=n[8];return e[0]=f*r+p*o+m*l,e[1]=f*i+p*s+m*u,e[2]=f*a+p*c+m*d,e[3]=h*r+g*o+_*l,e[4]=h*i+g*s+_*u,e[5]=h*a+g*c+_*d,e[6]=v*r+y*o+b*l,e[7]=v*i+y*s+b*u,e[8]=v*a+y*c+b*d,e}function hu(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=n[0],p=n[1];return e[0]=r,e[1]=i,e[2]=a,e[3]=o,e[4]=s,e[5]=c,e[6]=f*r+p*o+l,e[7]=f*i+p*s+u,e[8]=f*a+p*c+d,e}function gu(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=Math.sin(n),p=Math.cos(n);return e[0]=p*r+f*o,e[1]=p*i+f*s,e[2]=p*a+f*c,e[3]=p*o-f*r,e[4]=p*s-f*i,e[5]=p*c-f*a,e[6]=l,e[7]=u,e[8]=d,e}function _u(e,t,n){let r=n[0],i=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function vu(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[3]=u-_,e[6]=f+g,e[1]=u+_,e[4]=1-l-m,e[7]=p-h,e[2]=f-g,e[5]=p+h,e[8]=1-l-d,e}var yu;(function(e){e[e.COL0ROW0=0]=`COL0ROW0`,e[e.COL0ROW1=1]=`COL0ROW1`,e[e.COL0ROW2=2]=`COL0ROW2`,e[e.COL1ROW0=3]=`COL1ROW0`,e[e.COL1ROW1=4]=`COL1ROW1`,e[e.COL1ROW2=5]=`COL1ROW2`,e[e.COL2ROW0=6]=`COL2ROW0`,e[e.COL2ROW1=7]=`COL2ROW1`,e[e.COL2ROW2=8]=`COL2ROW2`})(yu||={});var bu=Object.freeze([1,0,0,0,1,0,0,0,1]),G=class extends lu{static get IDENTITY(){return wu()}static get ZERO(){return Cu()}get ELEMENTS(){return 9}get RANK(){return 3}get INDICES(){return yu}constructor(e,...t){super(-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):t.length>0?this.copy([e,...t]):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this.check()}identity(){return this.copy(bu)}fromObject(e){return this.check()}fromQuaternion(e){return vu(this,e),this.check()}set(e,t,n,r,i,a,o,s,c){return this[0]=e,this[1]=t,this[2]=n,this[3]=r,this[4]=i,this[5]=a,this[6]=o,this[7]=s,this[8]=c,this.check()}setRowMajor(e,t,n,r,i,a,o,s,c){return this[0]=e,this[1]=r,this[2]=o,this[3]=t,this[4]=i,this[5]=s,this[6]=n,this[7]=a,this[8]=c,this.check()}determinant(){return pu(this)}transpose(){return du(this,this),this.check()}invert(){return fu(this,this),this.check()}multiplyLeft(e){return mu(this,e,this),this.check()}multiplyRight(e){return mu(this,this,e),this.check()}rotate(e){return gu(this,this,e),this.check()}scale(e){return Array.isArray(e)?_u(this,this,e):_u(this,this,[e,e]),this.check()}translate(e){return hu(this,this,e),this.check()}transform(e,t){let n;switch(e.length){case 2:n=jl(t||[-0,-0],e,this);break;case 3:n=Xl(t||[-0,-0,-0],e,this);break;case 4:n=Rl(t||[-0,-0,-0,-0],e,this);break;default:throw Error(`Illegal vector`)}return Sl(n,e.length),n}transformVector(e,t){return this.transform(e,t)}transformVector2(e,t){return this.transform(e,t)}transformVector3(e,t){return this.transform(e,t)}},xu,Su=null;function Cu(){return xu||(xu=new G([0,0,0,0,0,0,0,0,0]),Object.freeze(xu)),xu}function wu(){return Su||(Su=new G,Object.freeze(Su)),Su}function Tu(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Eu(e,t){if(e===t){let n=t[1],r=t[2],i=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function Du(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,e):null}function Ou(e){let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=n*s-r*o,b=l*m-u*p,x=l*h-d*p,S=u*h-d*m,C=t*S-n*x+r*b,w=a*S-o*x+s*b,T=l*y-u*v+d*_,E=p*y-m*v+h*_;return c*C-i*w+g*T-f*E}function ku(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function Au(e,t,n){let r=n[0],i=n[1],a=n[2],o,s,c,l,u,d,f,p,m,h,g,_;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],f=t[6],p=t[7],m=t[8],h=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=o*r+u*i+m*a+t[12],e[13]=s*r+d*i+h*a+t[13],e[14]=c*r+f*i+g*a+t[14],e[15]=l*r+p*i+_*a+t[15]),e}function ju(e,t,n){let r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Mu(e,t,n,r){let i=r[0],a=r[1],o=r[2],s=Math.sqrt(i*i+a*a+o*o),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;return s<1e-6?null:(s=1/s,i*=s,a*=s,o*=s,l=Math.sin(n),c=Math.cos(n),u=1-c,d=t[0],f=t[1],p=t[2],m=t[3],h=t[4],g=t[5],_=t[6],v=t[7],y=t[8],b=t[9],x=t[10],S=t[11],C=i*i*u+c,w=a*i*u+o*l,T=o*i*u-a*l,E=i*a*u-o*l,D=a*a*u+c,O=o*a*u+i*l,k=i*o*u+a*l,A=a*o*u-i*l,j=o*o*u+c,e[0]=d*C+h*w+y*T,e[1]=f*C+g*w+b*T,e[2]=p*C+_*w+x*T,e[3]=m*C+v*w+S*T,e[4]=d*E+h*D+y*O,e[5]=f*E+g*D+b*O,e[6]=p*E+_*D+x*O,e[7]=m*E+v*D+S*O,e[8]=d*k+h*A+y*j,e[9]=f*k+g*A+b*j,e[10]=p*k+_*A+x*j,e[11]=m*k+v*A+S*j,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function Nu(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+l*r,e[5]=o*i+u*r,e[6]=s*i+d*r,e[7]=c*i+f*r,e[8]=l*i-a*r,e[9]=u*i-o*r,e[10]=d*i-s*r,e[11]=f*i-c*r,e}function Pu(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-l*r,e[1]=o*i-u*r,e[2]=s*i-d*r,e[3]=c*i-f*r,e[8]=a*r+l*i,e[9]=o*r+u*i,e[10]=s*r+d*i,e[11]=c*r+f*i,e}function Fu(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[4],u=t[5],d=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+l*r,e[1]=o*i+u*r,e[2]=s*i+d*r,e[3]=c*i+f*r,e[4]=l*i-a*r,e[5]=u*i-o*r,e[6]=d*i-s*r,e[7]=f*i-c*r,e}function Iu(e,t){let n=t[0],r=t[1],i=t[2],a=t[4],o=t[5],s=t[6],c=t[8],l=t[9],u=t[10];return e[0]=Math.sqrt(n*n+r*r+i*i),e[1]=Math.sqrt(a*a+o*o+s*s),e[2]=Math.sqrt(c*c+l*l+u*u),e}function Lu(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[1]=u+_,e[2]=f-g,e[3]=0,e[4]=u-_,e[5]=1-l-m,e[6]=p+h,e[7]=0,e[8]=f+g,e[9]=p-h,e[10]=1-l-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Ru(e,t,n,r,i,a,o){let s=1/(n-t),c=1/(i-r),l=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(n+t)*s,e[9]=(i+r)*c,e[10]=(o+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*l,e[15]=0,e}function zu(e,t,n,r,i){let a=1/Math.tan(t/2);if(e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){let t=1/(r-i);e[10]=(i+r)*t,e[14]=2*i*r*t}else e[10]=-1,e[14]=-2*r;return e}var Bu=zu;function Vu(e,t,n,r,i,a,o){let s=1/(t-n),c=1/(r-i),l=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+n)*s,e[13]=(i+r)*c,e[14]=(o+a)*l,e[15]=1,e}var Hu=Vu;function Uu(e,t,n,r){let i,a,o,s,c,l,u,d,f,p,m=t[0],h=t[1],g=t[2],_=r[0],v=r[1],y=r[2],b=n[0],x=n[1],S=n[2];return Math.abs(m-b)<1e-6&&Math.abs(h-x)<1e-6&&Math.abs(g-S)<1e-6?Tu(e):(d=m-b,f=h-x,p=g-S,i=1/Math.sqrt(d*d+f*f+p*p),d*=i,f*=i,p*=i,a=v*p-y*f,o=y*d-_*p,s=_*f-v*d,i=Math.sqrt(a*a+o*o+s*s),i?(i=1/i,a*=i,o*=i,s*=i):(a=0,o=0,s=0),c=f*s-p*o,l=p*a-d*s,u=d*o-f*a,i=Math.sqrt(c*c+l*l+u*u),i?(i=1/i,c*=i,l*=i,u*=i):(c=0,l=0,u=0),e[0]=a,e[1]=c,e[2]=d,e[3]=0,e[4]=o,e[5]=l,e[6]=f,e[7]=0,e[8]=s,e[9]=u,e[10]=p,e[11]=0,e[12]=-(a*m+o*h+s*g),e[13]=-(c*m+l*h+u*g),e[14]=-(d*m+f*h+p*g),e[15]=1,e)}function Wu(){let e=new Tl(4);return Tl!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Gu(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function Ku(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function qu(e){let t=e[0],n=e[1],r=e[2],i=e[3];return Math.sqrt(t*t+n*n+r*r+i*i)}function Ju(e){let t=e[0],n=e[1],r=e[2],i=e[3];return t*t+n*n+r*r+i*i}function Yu(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a;return o>0&&(o=1/Math.sqrt(o)),e[0]=n*o,e[1]=r*o,e[2]=i*o,e[3]=a*o,e}function Xu(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function Zu(e,t,n,r){let i=t[0],a=t[1],o=t[2],s=t[3];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e[2]=o+r*(n[2]-o),e[3]=s+r*(n[3]-s),e}function Qu(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}function $u(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2],l=n[3],u=l*r+s*a-c*i,d=l*i+c*r-o*a,f=l*a+o*i-s*r,p=-o*r-s*i-c*a;return e[0]=u*l+p*-o+d*-c-f*-s,e[1]=d*l+p*-s+f*-o-u*-c,e[2]=f*l+p*-c+u*-s-d*-o,e[3]=t[3],e}(function(){let e=Wu();return function(t,n,r,i,a,o){let s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}})();var ed;(function(e){e[e.COL0ROW0=0]=`COL0ROW0`,e[e.COL0ROW1=1]=`COL0ROW1`,e[e.COL0ROW2=2]=`COL0ROW2`,e[e.COL0ROW3=3]=`COL0ROW3`,e[e.COL1ROW0=4]=`COL1ROW0`,e[e.COL1ROW1=5]=`COL1ROW1`,e[e.COL1ROW2=6]=`COL1ROW2`,e[e.COL1ROW3=7]=`COL1ROW3`,e[e.COL2ROW0=8]=`COL2ROW0`,e[e.COL2ROW1=9]=`COL2ROW1`,e[e.COL2ROW2=10]=`COL2ROW2`,e[e.COL2ROW3=11]=`COL2ROW3`,e[e.COL3ROW0=12]=`COL3ROW0`,e[e.COL3ROW1=13]=`COL3ROW1`,e[e.COL3ROW2=14]=`COL3ROW2`,e[e.COL3ROW3=15]=`COL3ROW3`})(ed||={});var td=45*Math.PI/180,nd=1,rd=.1,id=500,ad=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),K=class extends lu{static get IDENTITY(){return ld()}static get ZERO(){return cd()}get ELEMENTS(){return 16}get RANK(){return 4}get INDICES(){return ed}constructor(e){super(-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this[9]=e[9],this[10]=e[10],this[11]=e[11],this[12]=e[12],this[13]=e[13],this[14]=e[14],this[15]=e[15],this.check()}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return this[0]=e,this[1]=t,this[2]=n,this[3]=r,this[4]=i,this[5]=a,this[6]=o,this[7]=s,this[8]=c,this[9]=l,this[10]=u,this[11]=d,this[12]=f,this[13]=p,this[14]=m,this[15]=h,this.check()}setRowMajor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return this[0]=e,this[1]=i,this[2]=c,this[3]=f,this[4]=t,this[5]=a,this[6]=l,this[7]=p,this[8]=n,this[9]=o,this[10]=u,this[11]=m,this[12]=r,this[13]=s,this[14]=d,this[15]=h,this.check()}toRowMajor(e){return e[0]=this[0],e[1]=this[4],e[2]=this[8],e[3]=this[12],e[4]=this[1],e[5]=this[5],e[6]=this[9],e[7]=this[13],e[8]=this[2],e[9]=this[6],e[10]=this[10],e[11]=this[14],e[12]=this[3],e[13]=this[7],e[14]=this[11],e[15]=this[15],e}identity(){return this.copy(ad)}fromObject(e){return this.check()}fromQuaternion(e){return Lu(this,e),this.check()}frustum(e){let{left:t,right:n,bottom:r,top:i,near:a=rd,far:o=id}=e;return o===1/0?dd(this,t,n,r,i,a):Ru(this,t,n,r,i,a,o),this.check()}lookAt(e){let{eye:t,center:n=[0,0,0],up:r=[0,1,0]}=e;return Uu(this,t,n,r),this.check()}ortho(e){let{left:t,right:n,bottom:r,top:i,near:a=rd,far:o=id}=e;return Hu(this,t,n,r,i,a,o),this.check()}orthographic(e){let{fovy:t=td,aspect:n=nd,focalDistance:r=1,near:i=rd,far:a=id}=e;ud(t);let o=t/2,s=r*Math.tan(o),c=s*n;return this.ortho({left:-c,right:c,bottom:-s,top:s,near:i,far:a})}perspective(e){let{fovy:t=45*Math.PI/180,aspect:n=1,near:r=.1,far:i=500}=e;return ud(t),Bu(this,t,n,r,i),this.check()}determinant(){return Ou(this)}getScale(e=[-0,-0,-0]){return e[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),e[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),e[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),e}getTranslation(e=[-0,-0,-0]){return e[0]=this[12],e[1]=this[13],e[2]=this[14],e}getRotation(e,t){e||=[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],t||=[-0,-0,-0];let n=this.getScale(t),r=1/n[0],i=1/n[1],a=1/n[2];return e[0]=this[0]*r,e[1]=this[1]*i,e[2]=this[2]*a,e[3]=0,e[4]=this[4]*r,e[5]=this[5]*i,e[6]=this[6]*a,e[7]=0,e[8]=this[8]*r,e[9]=this[9]*i,e[10]=this[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}getRotationMatrix3(e,t){e||=[-0,-0,-0,-0,-0,-0,-0,-0,-0],t||=[-0,-0,-0];let n=this.getScale(t),r=1/n[0],i=1/n[1],a=1/n[2];return e[0]=this[0]*r,e[1]=this[1]*i,e[2]=this[2]*a,e[3]=this[4]*r,e[4]=this[5]*i,e[5]=this[6]*a,e[6]=this[8]*r,e[7]=this[9]*i,e[8]=this[10]*a,e}transpose(){return Eu(this,this),this.check()}invert(){return Du(this,this),this.check()}multiplyLeft(e){return ku(this,e,this),this.check()}multiplyRight(e){return ku(this,this,e),this.check()}rotateX(e){return Nu(this,this,e),this.check()}rotateY(e){return Pu(this,this,e),this.check()}rotateZ(e){return Fu(this,this,e),this.check()}rotateXYZ(e){return this.rotateX(e[0]).rotateY(e[1]).rotateZ(e[2])}rotateAxis(e,t){return Mu(this,this,e,t),this.check()}scale(e){return ju(this,this,Array.isArray(e)?e:[e,e,e]),this.check()}translate(e){return Au(this,this,e),this.check()}transform(e,t){return e.length===4?(t=Qu(t||[-0,-0,-0,-0],e,this),Sl(t,4),t):this.transformAsPoint(e,t)}transformAsPoint(e,t){let{length:n}=e,r;switch(n){case 2:r=Ml(t||[-0,-0],e,this);break;case 3:r=Yl(t||[-0,-0,-0],e,this);break;default:throw Error(`Illegal vector`)}return Sl(r,e.length),r}transformAsVector(e,t){let n;switch(e.length){case 2:n=Pl(t||[-0,-0],e,this);break;case 3:n=Fl(t||[-0,-0,-0],e,this);break;default:throw Error(`Illegal vector`)}return Sl(n,e.length),n}transformPoint(e,t){return this.transformAsPoint(e,t)}transformVector(e,t){return this.transformAsPoint(e,t)}transformDirection(e,t){return this.transformAsVector(e,t)}makeRotationX(e){return this.identity().rotateX(e)}makeTranslation(e,t,n){return this.identity().translate([e,t,n])}},od,sd;function cd(){return od||(od=new K([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),Object.freeze(od)),od}function ld(){return sd||(sd=new K,Object.freeze(sd)),sd}function ud(e){if(e>Math.PI*2)throw Error(`expected radians`)}function dd(e,t,n,r,i,a){let o=2*a/(n-t),s=2*a/(i-r),c=(n+t)/(n-t),l=(i+r)/(i-r),u=-2*a;return e[0]=o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=c,e[9]=l,e[10]=-1,e[11]=-1,e[12]=0,e[13]=0,e[14]=u,e[15]=0,e}function fd(){let e=new Tl(4);return Tl!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function pd(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function md(e,t,n){n*=.5;let r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function hd(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=n[0],c=n[1],l=n[2],u=n[3];return e[0]=r*u+o*s+i*l-a*c,e[1]=i*u+o*c+a*s-r*l,e[2]=a*u+o*l+r*c-i*s,e[3]=o*u-r*s-i*c-a*l,e}function gd(e,t,n){n*=.5;let r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c+o*s,e[1]=i*c+a*s,e[2]=a*c-i*s,e[3]=o*c-r*s,e}function _d(e,t,n){n*=.5;let r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c-a*s,e[1]=i*c+o*s,e[2]=a*c+r*s,e[3]=o*c-i*s,e}function vd(e,t,n){n*=.5;let r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c+i*s,e[1]=i*c-r*s,e[2]=a*c+o*s,e[3]=o*c-a*s,e}function yd(e,t){let n=t[0],r=t[1],i=t[2];return e[0]=n,e[1]=r,e[2]=i,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-i*i)),e}function bd(e,t,n,r){let i=t[0],a=t[1],o=t[2],s=t[3],c=n[0],l=n[1],u=n[2],d=n[3],f,p,m,h,g;return f=i*c+a*l+o*u+s*d,f<0&&(f=-f,c=-c,l=-l,u=-u,d=-d),1-f>1e-6?(p=Math.acos(f),g=Math.sin(p),m=Math.sin((1-r)*p)/g,h=Math.sin(r*p)/g):(m=1-r,h=r),e[0]=m*i+h*c,e[1]=m*a+h*l,e[2]=m*o+h*u,e[3]=m*s+h*d,e}function xd(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n*n+r*r+i*i+a*a,s=o?1/o:0;return e[0]=-n*s,e[1]=-r*s,e[2]=-i*s,e[3]=a*s,e}function Sd(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function Cd(e,t){let n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);let i=(n+1)%3,a=(n+2)%3;r=Math.sqrt(t[n*3+n]-t[i*3+i]-t[a*3+a]+1),e[n]=.5*r,r=.5/r,e[3]=(t[i*3+a]-t[a*3+i])*r,e[i]=(t[i*3+n]+t[n*3+i])*r,e[a]=(t[a*3+n]+t[n*3+a])*r}return e}var wd=Gu,Td=Ku,Ed=Xu,Dd=Zu,Od=qu,kd=Ju,Ad=Yu,jd=(function(){let e=zl(),t=Vl(1,0,0),n=Vl(0,1,0);return function(r,i,a){let o=Kl(i,a);return o<-.999999?(ql(e,t,i),ru(e)<1e-6&&ql(e,n,i),Gl(e,e),md(r,e,Math.PI),r):o>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(ql(e,i,a),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=1+o,Ad(r,r))}})();(function(){let e=fd(),t=fd();return function(n,r,i,a,o,s){return bd(e,r,o,s),bd(t,i,a,s),bd(n,e,t,2*s*(1-s)),n}})(),(function(){let e=uu();return function(t,n,r,i){return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],Ad(t,Cd(t,e))}})();var Md=[0,0,0,1],Nd=class extends bl{constructor(e=0,t=0,n=0,r=1){super(-0,-0,-0,-0),Array.isArray(e)&&arguments.length===1?this.copy(e):this.set(e,t,n,r)}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this.check()}set(e,t,n,r){return this[0]=e,this[1]=t,this[2]=n,this[3]=r,this.check()}fromObject(e){return this[0]=e.x,this[1]=e.y,this[2]=e.z,this[3]=e.w,this.check()}fromMatrix3(e){return Cd(this,e),this.check()}fromAxisRotation(e,t){return md(this,e,t),this.check()}identity(){return pd(this),this.check()}setAxisAngle(e,t){return this.fromAxisRotation(e,t)}get ELEMENTS(){return 4}get x(){return this[0]}set x(e){this[0]=U(e)}get y(){return this[1]}set y(e){this[1]=U(e)}get z(){return this[2]}set z(e){this[2]=U(e)}get w(){return this[3]}set w(e){this[3]=U(e)}len(){return Od(this)}lengthSquared(){return kd(this)}dot(e){return Ed(this,e)}rotationTo(e,t){return jd(this,e,t),this.check()}add(e){return wd(this,this,e),this.check()}calculateW(){return yd(this,this),this.check()}conjugate(){return Sd(this,this),this.check()}invert(){return xd(this,this),this.check()}lerp(e,t,n){return n===void 0?this.lerp(this,e,t):(Dd(this,e,t,n),this.check())}multiplyRight(e){return hd(this,this,e),this.check()}multiplyLeft(e){return hd(this,e,this),this.check()}normalize(){let e=this.len(),t=e>0?1/e:0;return this[0]*=t,this[1]*=t,this[2]*=t,this[3]*=t,e===0&&(this[3]=1),this.check()}rotateX(e){return gd(this,this,e),this.check()}rotateY(e){return _d(this,this,e),this.check()}rotateZ(e){return vd(this,this,e),this.check()}scale(e){return Td(this,this,e),this.check()}slerp(e,t,n){let r,i,a;switch(arguments.length){case 1:({start:r=Md,target:i,ratio:a}=e);break;case 2:r=this,i=e,a=t;break;default:r=e,i=t,a=n}return bd(this,r,i,a),this.check()}transformVector4(e,t=new cu){return $u(t,e,this),Sl(t,4)}lengthSq(){return this.lengthSquared()}setFromAxisAngle(e,t){return this.setAxisAngle(e,t)}premultiply(e){return this.multiplyLeft(e)}multiply(e){return this.multiplyRight(e)}},Pd=1e-15,Fd=1e-20;Math.PI/2,Math.PI/4,Math.PI/6,Math.PI*2;function Id(e,t=[],n=0){let r=Math.fround(e),i=e-r;return t[n]=r,t[n+1]=i,t}function Ld(e){return e-Math.fround(e)}function Rd(e){let t=new Float32Array(32);for(let n=0;n<4;++n)for(let r=0;r<4;++r){let i=n*4+r;Id(e[r*4+n],t,i*2)}return t}function zd(e,t=!0){return e??t}function Bd(e=[0,0,0],t=!0){return t?e.map(e=>e/255):[...e]}function Vd(e,t=!0){let n=Bd(e.slice(0,3),t),r=Number.isFinite(e[3]),i=r?e[3]:1;return[n[0],n[1],n[2],t&&r?i/255:i]}var Hd={name:`fp32`,vs:`#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND

// All these functions are for substituting tan() function from Intel GPU only
const float TWO_PI = 6.2831854820251465;
const float PI_2 = 1.5707963705062866;
const float PI_16 = 0.1963495463132858;

const float SIN_TABLE_0 = 0.19509032368659973;
const float SIN_TABLE_1 = 0.3826834261417389;
const float SIN_TABLE_2 = 0.5555702447891235;
const float SIN_TABLE_3 = 0.7071067690849304;

const float COS_TABLE_0 = 0.9807852506637573;
const float COS_TABLE_1 = 0.9238795042037964;
const float COS_TABLE_2 = 0.8314695954322815;
const float COS_TABLE_3 = 0.7071067690849304;

const float INVERSE_FACTORIAL_3 = 1.666666716337204e-01; // 1/3!
const float INVERSE_FACTORIAL_5 = 8.333333767950535e-03; // 1/5!
const float INVERSE_FACTORIAL_7 = 1.9841270113829523e-04; // 1/7!
const float INVERSE_FACTORIAL_9 = 2.75573188446287533e-06; // 1/9!

float sin_taylor_fp32(float a) {
  float r, s, t, x;

  if (a == 0.0) {
    return 0.0;
  }

  x = -a * a;
  s = a;
  r = a;

  r = r * x;
  t = r * INVERSE_FACTORIAL_3;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_5;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_7;
  s = s + t;

  r = r * x;
  t = r * INVERSE_FACTORIAL_9;
  s = s + t;

  return s;
}

void sincos_taylor_fp32(float a, out float sin_t, out float cos_t) {
  if (a == 0.0) {
    sin_t = 0.0;
    cos_t = 1.0;
  }
  sin_t = sin_taylor_fp32(a);
  cos_t = sqrt(1.0 - sin_t * sin_t);
}

float tan_taylor_fp32(float a) {
    float sin_a;
    float cos_a;

    if (a == 0.0) {
        return 0.0;
    }

    // 2pi range reduction
    float z = floor(a / TWO_PI);
    float r = a - TWO_PI * z;

    float t;
    float q = floor(r / PI_2 + 0.5);
    int j = int(q);

    if (j < -2 || j > 2) {
        return 1.0 / 0.0;
    }

    t = r - PI_2 * q;

    q = floor(t / PI_16 + 0.5);
    int k = int(q);
    int abs_k = int(abs(float(k)));

    if (abs_k > 4) {
        return 1.0 / 0.0;
    } else {
        t = t - PI_16 * q;
    }

    float u = 0.0;
    float v = 0.0;

    float sin_t, cos_t;
    float s, c;
    sincos_taylor_fp32(t, sin_t, cos_t);

    if (k == 0) {
        s = sin_t;
        c = cos_t;
    } else {
        if (abs(float(abs_k) - 1.0) < 0.5) {
            u = COS_TABLE_0;
            v = SIN_TABLE_0;
        } else if (abs(float(abs_k) - 2.0) < 0.5) {
            u = COS_TABLE_1;
            v = SIN_TABLE_1;
        } else if (abs(float(abs_k) - 3.0) < 0.5) {
            u = COS_TABLE_2;
            v = SIN_TABLE_2;
        } else if (abs(float(abs_k) - 4.0) < 0.5) {
            u = COS_TABLE_3;
            v = SIN_TABLE_3;
        }
        if (k > 0) {
            s = u * sin_t + v * cos_t;
            c = u * cos_t - v * sin_t;
        } else {
            s = u * sin_t - v * cos_t;
            c = u * cos_t + v * sin_t;
        }
    }

    if (j == 0) {
        sin_a = s;
        cos_a = c;
    } else if (j == 1) {
        sin_a = c;
        cos_a = -s;
    } else if (j == -1) {
        sin_a = -c;
        cos_a = s;
    } else {
        sin_a = -s;
        cos_a = -c;
    }
    return sin_a / cos_a;
}
#endif

float tan_fp32(float a) {
#ifdef LUMA_FP32_TAN_PRECISION_WORKAROUND
  return tan_taylor_fp32(a);
#else
  return tan(a);
#endif
}
`},Ud=`
layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`,Wd={name:`fp64arithmetic`,source:`struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}

fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}

fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
`,fs:Ud,vs:Ud,defaultUniforms:{ONE:1,SPLIT:4097},uniformTypes:{ONE:`f32`,SPLIT:`f32`},fp64ify:Id,fp64LowPart:Ld,fp64ifyMatrix4:Rd},Gd=`layout(std140) uniform floatColorsUniforms {
  float useByteColors;
} floatColors;

vec3 floatColors_normalize(vec3 inputColor) {
  return floatColors.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 floatColors_normalize(vec4 inputColor) {
  return floatColors.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 floatColors_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 floatColors_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 floatColors_premultiply_alpha(vec4 inputColor) {
  return floatColors_premultiplyAlpha(inputColor);
}

vec4 floatColors_unpremultiply_alpha(vec4 inputColor) {
  return floatColors_unpremultiplyAlpha(inputColor);
}
`,Kd={name:`floatColors`,props:{},uniforms:{},vs:Gd,fs:Gd,source:`struct floatColorsUniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> floatColors : floatColorsUniforms;

fn floatColors_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, floatColors.useByteColors > 0.5);
}

fn floatColors_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, floatColors.useByteColors > 0.5);
}

fn floatColors_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn floatColors_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn floatColors_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return floatColors_premultiplyAlpha(inputColor);
}

fn floatColors_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return floatColors_unpremultiplyAlpha(inputColor);
}
`,uniformTypes:{useByteColors:`f32`},defaultUniforms:{useByteColors:!0}},qd={props:{},uniforms:{},name:`picking`,uniformTypes:{isActive:`f32`,isAttribute:`f32`,isHighlightActive:`f32`,useByteColors:`f32`,highlightedObjectColor:`vec3<f32>`,highlightColor:`vec4<f32>`},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useByteColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,getUniforms:Jd};function Jd(e={},t){let n={},r=zd(e.useByteColors,!0);return e.highlightedObjectColor===void 0||(e.highlightedObjectColor===null?n.isHighlightActive=!1:(n.isHighlightActive=!0,n.highlightedObjectColor=e.highlightedObjectColor.slice(0,3))),e.highlightColor&&(n.highlightColor=Vd(e.highlightColor,r)),e.isActive!==void 0&&(n.isActive=!!e.isActive,n.isAttribute=!!e.isAttribute),e.useByteColors!==void 0&&(n.useByteColors=!!e.useByteColors),n}var Yd=`precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`,Xd=`// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`,Zd=5,Qd={props:{},uniforms:{},name:`lighting`,defines:{},uniformTypes:{enabled:`i32`,directionalLightCount:`i32`,pointLightCount:`i32`,spotLightCount:`i32`,ambientColor:`vec3<f32>`,lights:[{color:`vec3<f32>`,position:`vec3<f32>`,direction:`vec3<f32>`,attenuation:`vec3<f32>`,coneCos:`vec2<f32>`},Zd]},defaultUniforms:rf(),bindingLayout:[{name:`lighting`,group:2}],firstBindingSlot:0,source:Xd,vs:Yd,fs:Yd,getUniforms:$d};function $d(e,t={}){if(e&&={...e},!e)return rf();e.lights&&(e={...e,...tf(e.lights),lights:void 0});let{useByteColors:n,ambientLight:r,pointLights:i,spotLights:a,directionalLights:o}=e||{};if(!(r||i&&i.length>0||a&&a.length>0||o&&o.length>0))return{...rf(),enabled:0};let s={...rf(),...ef({useByteColors:n,ambientLight:r,pointLights:i,spotLights:a,directionalLights:o})};return e.enabled!==void 0&&(s.enabled=e.enabled?1:0),s}function ef({useByteColors:e,ambientLight:t,pointLights:n=[],spotLights:r=[],directionalLights:i=[]}){let a=af(),o=0,s=0,c=0,l=0;for(let t of n){if(o>=Zd)break;a[o]={...a[o],color:nf(t,e),position:t.position,attenuation:t.attenuation||[1,0,0]},o++,s++}for(let t of r){if(o>=Zd)break;a[o]={...a[o],color:nf(t,e),position:t.position,direction:t.direction,attenuation:t.attenuation||[1,0,0],coneCos:sf(t)},o++,c++}for(let t of i){if(o>=Zd)break;a[o]={...a[o],color:nf(t,e),direction:t.direction},o++,l++}return n.length+r.length+i.length>Zd&&P.warn(`MAX_LIGHTS exceeded, truncating to ${Zd}`)(),{ambientColor:nf(t,e),directionalLightCount:l,pointLightCount:s,spotLightCount:c,lights:a}}function tf(e){let t={pointLights:[],spotLights:[],directionalLights:[]};for(let n of e||[])switch(n.type){case`ambient`:t.ambientLight=n;break;case`directional`:t.directionalLights?.push(n);break;case`point`:t.pointLights?.push(n);break;case`spot`:t.spotLights?.push(n);break;default:}return t}function nf(e={},t){let{color:n=[0,0,0],intensity:r=1}=e;return Bd(n,zd(t,!0)).map(e=>e*r)}function rf(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:af()}}function af(){return Array.from({length:Zd},()=>of())}function of(){return{color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}}function sf(e){let t=e.innerConeAngle??0,n=e.outerConeAngle??Math.PI/4;return[Math.cos(t),Math.cos(n)]}var cf={props:{},name:`gouraudMaterial`,bindingLayout:[{name:`gouraudMaterial`,group:3}],vs:`layout(std140) uniform gouraudMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`,fs:`layout(std140) uniform gouraudMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,source:`struct gouraudMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> gouraudMaterial : gouraudMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, gouraudMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * gouraudMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(gouraudMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (gouraudMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = gouraudMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,defines:{LIGHTING_VERTEX:!0},dependencies:[Qd,Kd],uniformTypes:{unlit:`i32`,ambient:`f32`,diffuse:`f32`,shininess:`f32`,specularColor:`vec3<f32>`},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms(e){return{...cf.defaultUniforms,...e}}},lf=`struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(auto)
var<uniform> layer: LayerUniforms;
`,uf=`layout(std140) uniform layerUniforms {
  uniform float opacity;
} layer;
`,df={name:`layer`,source:lf,vs:uf,fs:uf,getUniforms:e=>({opacity:e.opacity**(1/2.2)}),uniformTypes:{opacity:`f32`}},ff={name:`color`,dependencies:[],source:`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,getUniforms:e=>({})},pf=`const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,mf=`#define SMOOTH_EDGE_RADIUS 0.5`,hf={name:`geometry`,source:pf,vs:`\
${mf}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,fs:`\
${mf}

struct FragmentGeometry {
  vec2 uv;
} geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`},q;(function(e){e[e.Start=1]=`Start`,e[e.Move=2]=`Move`,e[e.End=4]=`End`,e[e.Cancel=8]=`Cancel`})(q||={});var J;(function(e){e[e.None=0]=`None`,e[e.Left=1]=`Left`,e[e.Right=2]=`Right`,e[e.Up=4]=`Up`,e[e.Down=8]=`Down`,e[e.Horizontal=3]=`Horizontal`,e[e.Vertical=12]=`Vertical`,e[e.All=15]=`All`})(J||={});var Y;(function(e){e[e.Possible=1]=`Possible`,e[e.Began=2]=`Began`,e[e.Changed=4]=`Changed`,e[e.Ended=8]=`Ended`,e[e.Recognized=8]=`Recognized`,e[e.Cancelled=16]=`Cancelled`,e[e.Failed=32]=`Failed`})(Y||={});var gf=`auto`,_f=`manipulation`,vf=`none`,yf=`pan-x`,bf=`pan-y`;function xf(e){if(e.includes(`none`))return vf;let t=e.includes(yf),n=e.includes(bf);return t&&n?vf:t||n?t?yf:bf:e.includes(`manipulation`)?_f:gf}var Sf=class{constructor(e,t){this.actions=``,this.manager=e,this.set(t)}set(e){e===`compute`&&(e=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=e,this.actions=e)}update(){this.set(this.manager.options.touchAction)}compute(){let e=[];for(let t of this.manager.recognizers)t.options.enable&&(e=e.concat(t.getTouchAction()));return xf(e.join(` `))}};function Cf(e){return e.trim().split(/\s+/g)}function wf(e,t,n){if(e)for(let r of Cf(t))e.addEventListener(r,n,!1)}function Tf(e,t,n){if(e)for(let r of Cf(t))e.removeEventListener(r,n,!1)}function Ef(e){return(e.ownerDocument||e).defaultView}function Df(e,t){let n=e;for(;n;){if(n===t)return!0;n=n.parentNode}return!1}function Of(e){let t=e.length;if(t===1)return{x:Math.round(e[0].clientX),y:Math.round(e[0].clientY)};let n=0,r=0,i=0;for(;i<t;)n+=e[i].clientX,r+=e[i].clientY,i++;return{x:Math.round(n/t),y:Math.round(r/t)}}function kf(e){let t=[],n=0;for(;n<e.pointers.length;)t[n]={clientX:Math.round(e.pointers[n].clientX),clientY:Math.round(e.pointers[n].clientY)},n++;return{timeStamp:Date.now(),pointers:t,center:Of(t),deltaX:e.deltaX,deltaY:e.deltaY}}function Af(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)}function jf(e,t){let n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.sqrt(n*n+r*r)}function Mf(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.atan2(r,n)*180/Math.PI}function Nf(e,t){let n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.atan2(r,n)*180/Math.PI}function Pf(e,t){return e===t?J.None:Math.abs(e)>=Math.abs(t)?e<0?J.Left:J.Right:t<0?J.Up:J.Down}function Ff(e,t){let n=t.center,r=e.offsetDelta,i=e.prevDelta,a=e.prevInput;return(t.eventType===q.Start||a?.eventType===q.End)&&(i=e.prevDelta={x:a?.deltaX||0,y:a?.deltaY||0},r=e.offsetDelta={x:n.x,y:n.y}),{deltaX:i.x+(n.x-r.x),deltaY:i.y+(n.y-r.y)}}function If(e,t,n){return{x:t/e||0,y:n/e||0}}function Lf(e,t){return jf(t[0],t[1])/jf(e[0],e[1])}function Rf(e,t){return Nf(t[1],t[0])-Nf(e[1],e[0])}function zf(e,t){let n=e.lastInterval||t,r=t.timeStamp-n.timeStamp,i,a,o,s;if(t.eventType!==q.Cancel&&(r>25||n.velocity===void 0)){let c=t.deltaX-n.deltaX,l=t.deltaY-n.deltaY,u=If(r,c,l);a=u.x,o=u.y,i=Math.abs(u.x)>Math.abs(u.y)?u.x:u.y,s=Pf(c,l),e.lastInterval=t}else i=n.velocity,a=n.velocityX,o=n.velocityY,s=n.direction;t.velocity=i,t.velocityX=a,t.velocityY=o,t.direction=s}function Bf(e,t){let{session:n}=e,{pointers:r}=t,{length:i}=r;n.firstInput||=kf(t),i>1&&!n.firstMultiple?n.firstMultiple=kf(t):i===1&&(n.firstMultiple=!1);let{firstInput:a,firstMultiple:o}=n,s=o?o.center:a.center,c=t.center=Of(r);t.timeStamp=Date.now(),t.deltaTime=t.timeStamp-a.timeStamp,t.angle=Mf(s,c),t.distance=Af(s,c);let{deltaX:l,deltaY:u}=Ff(n,t);t.deltaX=l,t.deltaY=u,t.offsetDirection=Pf(t.deltaX,t.deltaY);let d=If(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=d.x,t.overallVelocityY=d.y,t.overallVelocity=Math.abs(d.x)>Math.abs(d.y)?d.x:d.y,t.scale=o?Lf(o.pointers,r):1,t.rotation=o?Rf(o.pointers,r):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length;let f=e.element;return Df(t.srcEvent.target,f)&&(f=t.srcEvent.target),t.target=f,zf(n,t),t}function Vf(e,t,n){let r=n.pointers.length,i=n.changedPointers.length,a=t&q.Start&&r-i===0,o=t&(q.End|q.Cancel)&&r-i===0;n.isFirst=!!a,n.isFinal=!!o,a&&(e.session={}),n.eventType=t;let s=Bf(e,n);e.emit(`hammer.input`,s),e.recognize(s),e.session.prevInput=s}var Hf=class{constructor(e){this.evEl=``,this.evWin=``,this.evTarget=``,this.domHandler=e=>{this.manager.options.enable&&this.handler(e)},this.manager=e,this.element=e.element,this.target=e.options.inputTarget||e.element}callback(e,t){Vf(this.manager,e,t)}init(){wf(this.element,this.evEl,this.domHandler),wf(this.target,this.evTarget,this.domHandler),wf(Ef(this.element),this.evWin,this.domHandler)}destroy(){Tf(this.element,this.evEl,this.domHandler),Tf(this.target,this.evTarget,this.domHandler),Tf(Ef(this.element),this.evWin,this.domHandler)}},Uf={pointerdown:q.Start,pointermove:q.Move,pointerup:q.End,pointercancel:q.Cancel,pointerout:q.Cancel},Wf=`pointerdown`,Gf=`pointermove pointerup pointercancel`,Kf=class extends Hf{constructor(e){super(e),this.evEl=Wf,this.evWin=Gf,this.store=this.manager.session.pointerEvents=[],this.init()}handler(e){let{store:t}=this,n=!1,r=Uf[e.type],i=e.pointerType,a=i===`touch`,o=t.findIndex(t=>t.pointerId===e.pointerId);r&q.Start&&(e.buttons||a)?o<0&&(t.push(e),o=t.length-1):r&(q.End|q.Cancel)&&(n=!0),!(o<0)&&(t[o]=e,this.callback(r,{pointers:t,changedPointers:[e],eventType:r,pointerType:i,srcEvent:e}),n&&t.splice(o,1))}},qf=[``,`webkit`,`Moz`,`MS`,`ms`,`o`];function Jf(e,t){let n=t[0].toUpperCase()+t.slice(1);for(let r of qf){let i=r?r+n:t;if(i in e)return i}}var Yf=1,Xf=2,Zf={touchAction:`compute`,enable:!0,inputTarget:null,cssProps:{userSelect:`none`,userDrag:`none`,touchCallout:`none`,tapHighlightColor:`rgba(0,0,0,0)`}},Qf=class{constructor(e,t){this.options={...Zf,...t,cssProps:{...Zf.cssProps,...t.cssProps},inputTarget:t.inputTarget||e},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new Kf(this),this.touchAction=new Sf(this,this.options.touchAction),this.toggleCssProps(!0)}set(e){return Object.assign(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this}stop(e){this.session.stopped=e?Xf:Yf}recognize(e){let{session:t}=this;if(t.stopped)return;this.session.prevented&&e.srcEvent.preventDefault();let n,{recognizers:r}=this,{curRecognizer:i}=t;(!i||i&&i.state&Y.Recognized)&&(i=t.curRecognizer=null);let a=0;for(;a<r.length;)n=r[a],t.stopped!==Xf&&(!i||n===i||n.canRecognizeWith(i))?n.recognize(e):n.reset(),!i&&n.state&(Y.Began|Y.Changed|Y.Ended)&&(i=t.curRecognizer=n),a++}get(e){let{recognizers:t}=this;for(let n=0;n<t.length;n++)if(t[n].options.event===e)return t[n];return null}add(e){if(Array.isArray(e)){for(let t of e)this.add(t);return this}let t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e}remove(e){if(Array.isArray(e)){for(let t of e)this.remove(t);return this}let t=typeof e==`string`?this.get(e):e;if(t){let{recognizers:e}=this,n=e.indexOf(t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this}on(e,t){if(!e||!t)return;let{handlers:n}=this;for(let r of Cf(e))n[r]=n[r]||[],n[r].push(t)}off(e,t){if(!e)return;let{handlers:n}=this;for(let r of Cf(e))t?n[r]&&n[r].splice(n[r].indexOf(t),1):delete n[r]}emit(e,t){let n=this.handlers[e]&&this.handlers[e].slice();if(!n||!n.length)return;let r=t;r.type=e,r.preventDefault=function(){t.srcEvent.preventDefault()};let i=0;for(;i<n.length;)n[i](r),i++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(e){let{element:t}=this;if(t){for(let[n,r]of Object.entries(this.options.cssProps)){let i=Jf(t.style,n);e?(this.oldCssProps[i]=t.style[i],t.style[i]=r):t.style[i]=this.oldCssProps[i]||``}e||(this.oldCssProps={})}}},$f=1;function ep(){return $f++}function tp(e){return e&Y.Cancelled?`cancel`:e&Y.Ended?`end`:e&Y.Changed?`move`:e&Y.Began?`start`:``}var np=class{constructor(e){this.options=e,this.id=ep(),this.state=Y.Possible,this.simultaneous={},this.requireFail=[]}set(e){return Object.assign(this.options,e),this.manager.touchAction.update(),this}recognizeWith(e){if(Array.isArray(e)){for(let t of e)this.recognizeWith(t);return this}let t;if(typeof e==`string`){if(t=this.manager.get(e),!t)throw Error(`Cannot find recognizer ${e}`)}else t=e;let{simultaneous:n}=this;return n[t.id]||(n[t.id]=t,t.recognizeWith(this)),this}dropRecognizeWith(e){if(Array.isArray(e)){for(let t of e)this.dropRecognizeWith(t);return this}let t;return t=typeof e==`string`?this.manager.get(e):e,t&&delete this.simultaneous[t.id],this}requireFailure(e){if(Array.isArray(e)){for(let t of e)this.requireFailure(t);return this}let t;if(typeof e==`string`){if(t=this.manager.get(e),!t)throw Error(`Cannot find recognizer ${e}`)}else t=e;let{requireFail:n}=this;return n.indexOf(t)===-1&&(n.push(t),t.requireFailure(this)),this}dropRequireFailure(e){if(Array.isArray(e)){for(let t of e)this.dropRequireFailure(t);return this}let t;if(t=typeof e==`string`?this.manager.get(e):e,t){let e=this.requireFail.indexOf(t);e>-1&&this.requireFail.splice(e,1)}return this}hasRequireFailures(){return!!this.requireFail.find(e=>e.options.enable)}canRecognizeWith(e){return!!this.simultaneous[e.id]}emit(e){if(!e)return;let{state:t}=this;t<Y.Ended&&this.manager.emit(this.options.event+tp(t),e),this.manager.emit(this.options.event,e),e.additionalEvent&&this.manager.emit(e.additionalEvent,e),t>=Y.Ended&&this.manager.emit(this.options.event+tp(t),e)}tryEmit(e){this.canEmit()?this.emit(e):this.state=Y.Failed}canEmit(){let e=0;for(;e<this.requireFail.length;){if(!(this.requireFail[e].state&(Y.Failed|Y.Possible)))return!1;e++}return!0}recognize(e){let t={...e};if(!this.options.enable){this.reset(),this.state=Y.Failed;return}this.state&(Y.Recognized|Y.Cancelled|Y.Failed)&&(this.state=Y.Possible),this.state=this.process(t),this.state&(Y.Began|Y.Changed|Y.Ended|Y.Cancelled)&&this.tryEmit(t)}getEventNames(){return[this.options.event]}reset(){}},rp=class extends np{attrTest(e){let t=this.options.pointers;return t===0||e.pointers.length===t}process(e){let{state:t}=this,{eventType:n}=e,r=t&(Y.Began|Y.Changed),i=this.attrTest(e);return r&&(n&q.Cancel||!i)?t|Y.Cancelled:r||i?n&q.End?t|Y.Ended:t&Y.Began?t|Y.Changed:Y.Began:Y.Failed}},ip=class extends np{constructor(e={}){super({enable:!0,event:`tap`,pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...e}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[_f]}process(e){let{options:t}=this,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,i=e.deltaTime<t.time;if(this.reset(),e.eventType&q.Start&&this.count===0)return this.failTimeout();if(r&&i&&n){if(e.eventType!==q.End)return this.failTimeout();let n=this.pTime?e.timeStamp-this.pTime<t.interval:!0,r=!this.pCenter||Af(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,!r||!n?this.count=1:this.count+=1,this._input=e,this.count%t.taps===0)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=Y.Recognized,this.tryEmit(this._input)},t.interval),Y.Began):Y.Recognized}return Y.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=Y.Failed},this.options.interval),Y.Failed}reset(){clearTimeout(this._timer)}emit(e){this.state===Y.Recognized&&(e.tapCount=this.count,this.manager.emit(this.options.event,e))}},ap=[``,`start`,`move`,`end`,`cancel`,`up`,`down`,`left`,`right`],op=class extends rp{constructor(e={}){super({enable:!0,pointers:1,event:`pan`,threshold:10,direction:J.All,...e}),this.pX=null,this.pY=null}getTouchAction(){let{options:{direction:e}}=this,t=[];return e&J.Horizontal&&t.push(bf),e&J.Vertical&&t.push(yf),t}getEventNames(){return ap.map(e=>this.options.event+e)}directionTest(e){let{options:t}=this,n=!0,{distance:r}=e,{direction:i}=e,a=e.deltaX,o=e.deltaY;return i&t.direction||(t.direction&J.Horizontal?(i=a===0?J.None:a<0?J.Left:J.Right,n=a!==this.pX,r=Math.abs(e.deltaX)):(i=o===0?J.None:o<0?J.Up:J.Down,n=o!==this.pY,r=Math.abs(e.deltaY))),e.direction=i,n&&r>t.threshold&&!!(i&t.direction)}attrTest(e){return super.attrTest(e)&&(!!(this.state&Y.Began)||!(this.state&Y.Began)&&this.directionTest(e))}emit(e){this.pX=e.deltaX,this.pY=e.deltaY;let t=J[e.direction].toLowerCase();t&&(e.additionalEvent=this.options.event+t),super.emit(e)}},sp=[``,`start`,`move`,`end`,`cancel`,`in`,`out`],cp=class extends rp{constructor(e={}){super({enable:!0,event:`pinch`,threshold:0,pointers:2,...e})}getTouchAction(){return[vf]}getEventNames(){return sp.map(e=>this.options.event+e)}attrTest(e){return super.attrTest(e)&&(Math.abs(e.scale-1)>this.options.threshold||!!(this.state&Y.Began))}emit(e){if(e.scale!==1){let t=e.scale<1?`in`:`out`;e.additionalEvent=this.options.event+t}super.emit(e)}},lp=class{constructor(e,t,n){this.element=e,this.callback=t,this.options=n}},up=typeof navigator<`u`&&navigator.userAgent?navigator.userAgent.toLowerCase():``;typeof window<`u`||global;var dp=up.indexOf(`firefox`)!==-1,fp=4.000244140625,pp=40,mp=.25,hp=class extends lp{constructor(e,t,n){super(e,t,{enable:!0,...n}),this.handleEvent=e=>{if(!this.options.enable)return;let t=e.deltaY;globalThis.WheelEvent&&(dp&&e.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(t/=globalThis.devicePixelRatio),e.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(t*=pp)),t!==0&&t%fp===0&&(t=Math.floor(t/fp)),e.shiftKey&&t&&(t*=mp),this.callback({type:`wheel`,center:{x:e.clientX,y:e.clientY},delta:-t,srcEvent:e,pointerType:`mouse`,target:e.target})},e.addEventListener(`wheel`,this.handleEvent,{passive:!1})}destroy(){this.element.removeEventListener(`wheel`,this.handleEvent)}enableEventType(e,t){e===`wheel`&&(this.options.enable=t)}},gp=[`mousedown`,`mousemove`,`mouseup`,`mouseover`,`mouseout`,`mouseleave`],_p=class extends lp{constructor(e,t,n){super(e,t,{enable:!0,...n}),this.handleEvent=e=>{this.handleOverEvent(e),this.handleOutEvent(e),this.handleEnterEvent(e),this.handleLeaveEvent(e),this.handleMoveEvent(e)},this.pressed=!1;let{enable:r}=this.options;this.enableMoveEvent=r,this.enableLeaveEvent=r,this.enableEnterEvent=r,this.enableOutEvent=r,this.enableOverEvent=r,gp.forEach(t=>e.addEventListener(t,this.handleEvent))}destroy(){gp.forEach(e=>this.element.removeEventListener(e,this.handleEvent))}enableEventType(e,t){switch(e){case`pointermove`:this.enableMoveEvent=t;break;case`pointerover`:this.enableOverEvent=t;break;case`pointerout`:this.enableOutEvent=t;break;case`pointerenter`:this.enableEnterEvent=t;break;case`pointerleave`:this.enableLeaveEvent=t;break;default:}}handleOverEvent(e){this.enableOverEvent&&e.type===`mouseover`&&this._emit(`pointerover`,e)}handleOutEvent(e){this.enableOutEvent&&e.type===`mouseout`&&this._emit(`pointerout`,e)}handleEnterEvent(e){this.enableEnterEvent&&e.type===`mouseenter`&&this._emit(`pointerenter`,e)}handleLeaveEvent(e){this.enableLeaveEvent&&e.type===`mouseleave`&&this._emit(`pointerleave`,e)}handleMoveEvent(e){if(this.enableMoveEvent)switch(e.type){case`mousedown`:e.button>=0&&(this.pressed=!0);break;case`mousemove`:e.buttons===0&&(this.pressed=!1),this.pressed||this._emit(`pointermove`,e);break;case`mouseup`:this.pressed=!1;break;default:}}_emit(e,t){this.callback({type:e,center:{x:t.clientX,y:t.clientY},srcEvent:t,pointerType:`mouse`,target:t.target})}},vp=[`keydown`,`keyup`],yp=class extends lp{constructor(e,t,n){super(e,t,{enable:!0,tabIndex:0,...n}),this.handleEvent=e=>{let t=e.target||e.srcElement;t.tagName===`INPUT`&&t.type===`text`||t.tagName===`TEXTAREA`||(this.enableDownEvent&&e.type===`keydown`&&this.callback({type:`keydown`,srcEvent:e,key:e.key,target:e.target}),this.enableUpEvent&&e.type===`keyup`&&this.callback({type:`keyup`,srcEvent:e,key:e.key,target:e.target}))},this.enableDownEvent=this.options.enable,this.enableUpEvent=this.options.enable,e.tabIndex=this.options.tabIndex,e.style.outline=`none`,vp.forEach(t=>e.addEventListener(t,this.handleEvent))}destroy(){vp.forEach(e=>this.element.removeEventListener(e,this.handleEvent))}enableEventType(e,t){e===`keydown`&&(this.enableDownEvent=t),e===`keyup`&&(this.enableUpEvent=t)}},bp=class extends lp{constructor(e,t,n){super(e,t,n),this.handleEvent=e=>{this.options.enable&&this.callback({type:`contextmenu`,center:{x:e.clientX,y:e.clientY},srcEvent:e,pointerType:`mouse`,target:e.target})},e.addEventListener(`contextmenu`,this.handleEvent)}destroy(){this.element.removeEventListener(`contextmenu`,this.handleEvent)}enableEventType(e,t){e===`contextmenu`&&(this.options.enable=t)}},xp=1,Sp=2,Cp=4,wp={pointerdown:xp,pointermove:Sp,pointerup:Cp,mousedown:xp,mousemove:Sp,mouseup:Cp},Tp=0,Ep=1,Dp=2,Op=1,kp=2,Ap=4;function jp(e){let t=wp[e.srcEvent.type];if(!t)return null;let{buttons:n,button:r}=e.srcEvent,i=!1,a=!1,o=!1;return t===Sp?(i=!!(n&Op),a=!!(n&Ap),o=!!(n&kp)):(i=r===Tp,a=r===Ep,o=r===Dp),{leftButton:i,middleButton:a,rightButton:o}}function Mp(e,t){let n=e.center;if(!n)return null;let r=t.getBoundingClientRect(),i=r.width/t.offsetWidth||1,a=r.height/t.offsetHeight||1;return{center:n,offsetCenter:{x:(n.x-r.left-t.clientLeft)/i,y:(n.y-r.top-t.clientTop)/a}}}var Np={srcElement:`root`,priority:0},Pp=class{constructor(e,t){this.handleEvent=e=>{if(this.isEmpty())return;let t=this._normalizeEvent(e),n=e.srcEvent.target;for(;n&&n!==t.rootElement;){if(this._emit(t,n),t.handled)return;n=n.parentNode}this._emit(t,`root`)},this.eventManager=e,this.recognizerName=t,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(e,t,n,r=!1,i=!1){let{handlers:a,handlersByElement:o}=this,s={...Np,...n},c=o.get(s.srcElement);c||(c=[],o.set(s.srcElement,c));let l={type:e,handler:t,srcElement:s.srcElement,priority:s.priority};r&&(l.once=!0),i&&(l.passive=!0),a.push(l),this._active=this._active||!l.passive;let u=c.length-1;for(;u>=0&&!(c[u].priority>=l.priority);)u--;c.splice(u+1,0,l)}remove(e,t){let{handlers:n,handlersByElement:r}=this;for(let i=n.length-1;i>=0;i--){let a=n[i];if(a.type===e&&a.handler===t){n.splice(i,1);let e=r.get(a.srcElement);e.splice(e.indexOf(a),1),e.length===0&&r.delete(a.srcElement)}}this._active=n.some(e=>!e.passive)}_emit(e,t){let n=this.handlersByElement.get(t);if(n){let t=!1,r=()=>{e.handled=!0},i=()=>{e.handled=!0,t=!0},a=[];for(let o=0;o<n.length;o++){let{type:s,handler:c,once:l}=n[o];if(c({...e,type:s,stopPropagation:r,stopImmediatePropagation:i}),l&&a.push(n[o]),t)break}for(let e=0;e<a.length;e++){let{type:t,handler:n}=a[e];this.remove(t,n)}}}_normalizeEvent(e){let t=this.eventManager.getElement();return{...e,...jp(e),...Mp(e,t),preventDefault:()=>{e.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:t}}};function Fp(e){if(`recognizer`in e)return e;let t,n=Array.isArray(e)?[...e]:[e];return t=typeof n[0]==`function`?new(n.shift())(n.shift()||{}):n.shift(),{recognizer:t,recognizeWith:typeof n[0]==`string`?[n[0]]:n[0],requireFailure:typeof n[1]==`string`?[n[1]]:n[1]}}var Ip=class{constructor(e=null,t={}){if(this._onBasicInput=e=>{this.manager.emit(e.srcEvent.type,e)},this._onOtherEvent=e=>{this.manager.emit(e.type,e)},this.options={recognizers:[],events:{},touchAction:`compute`,tabIndex:0,cssProps:{},...t},this.events=new Map,this.element=e,e){this.manager=new Qf(e,this.options);for(let e of this.options.recognizers){let{recognizer:t,recognizeWith:n,requireFailure:r}=Fp(e);this.manager.add(t),n&&t.recognizeWith(n),r&&t.requireFailure(r)}this.manager.on(`hammer.input`,this._onBasicInput),this.wheelInput=new hp(e,this._onOtherEvent,{enable:!1}),this.moveInput=new _p(e,this._onOtherEvent,{enable:!1}),this.keyInput=new yp(e,this._onOtherEvent,{enable:!1,tabIndex:t.tabIndex}),this.contextmenuInput=new bp(e,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}}getElement(){return this.element}destroy(){this.element&&(this.wheelInput.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy())}on(e,t,n){this._addEventHandler(e,t,n,!1)}once(e,t,n){this._addEventHandler(e,t,n,!0)}watch(e,t,n){this._addEventHandler(e,t,n,!1,!0)}off(e,t){this._removeEventHandler(e,t)}_toggleRecognizer(e,t){let{manager:n}=this;if(!n)return;let r=n.get(e);r&&(r.set({enable:t}),n.touchAction.update()),this.wheelInput?.enableEventType(e,t),this.moveInput?.enableEventType(e,t),this.keyInput?.enableEventType(e,t),this.contextmenuInput?.enableEventType(e,t)}_addEventHandler(e,t,n,r,i){if(typeof e!=`string`){n=t;for(let[t,a]of Object.entries(e))this._addEventHandler(t,a,n,r,i);return}let{manager:a,events:o}=this;if(!a)return;let s=o.get(e);if(!s){let t=this._getRecognizerName(e)||e;s=new Pp(this,t),o.set(e,s),a&&a.on(e,s.handleEvent)}s.add(e,t,n,r,i),s.isEmpty()||this._toggleRecognizer(s.recognizerName,!0)}_removeEventHandler(e,t){if(typeof e!=`string`){for(let[t,n]of Object.entries(e))this._removeEventHandler(t,n);return}let{events:n}=this,r=n.get(e);if(r&&(r.remove(e,t),r.isEmpty())){let{recognizerName:e}=r,t=!1;for(let r of n.values())if(r.recognizerName===e&&!r.isEmpty()){t=!0;break}t||this._toggleRecognizer(e,!1)}}_getRecognizerName(e){return this.manager.recognizers.find(t=>t.getEventNames().includes(e))?.options.event}},Lp={DEFAULT:`default`,LNGLAT:`lnglat`,METER_OFFSETS:`meter-offsets`,LNGLAT_OFFSETS:`lnglat-offsets`,CARTESIAN:`cartesian`};Object.defineProperty(Lp,`IDENTITY`,{get:()=>(R.deprecated(`COORDINATE_SYSTEM.IDENTITY`,`COORDINATE_SYSTEM.CARTESIAN`)(),Lp.CARTESIAN)});var X={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},Rp={common:0,meters:1,pixels:2},zp={click:`onClick`,dblclick:`onClick`,panstart:`onDragStart`,panmove:`onDrag`,panend:`onDragEnd`},Bp={multipan:[op,{threshold:10,direction:J.Vertical,pointers:2}],pinch:[cp,{},null,[`multipan`]],pan:[op,{threshold:1},[`pinch`],[`multipan`]],dblclick:[ip,{event:`dblclick`,taps:2}],click:[ip,{event:`click`},null,[`dblclick`]]};function Vp(e,t){if(e===t)return!0;if(Array.isArray(e)){let n=e.length;if(!t||t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}return!1}function Hp(e){let t={},n;return r=>{for(let i in r)if(!Vp(r[i],t[i])){n=e(r),t=r;break}return n}}var Up=[0,0,0,0],Wp=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],Gp=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Kp=[0,0,0],qp=[0,0,0],Jp={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function Yp(e){let t=Jp[e];if(t===void 0)throw Error(`Invalid coordinateSystem: ${e}`);return t}var Xp=Hp(em);function Zp(e,t,n=qp){n.length<3&&(n=[n[0],n[1],0]);let r=n,i,a=!0;switch(i=t===`lnglat-offsets`||t===`meter-offsets`?n:e.isGeospatial?[Math.fround(e.longitude),Math.fround(e.latitude),0]:null,e.projectionMode){case X.WEB_MERCATOR:(t===`lnglat`||t===`cartesian`)&&(i=[0,0,0],a=!1);break;case X.WEB_MERCATOR_AUTO_OFFSET:t===`lnglat`?r=i:t===`cartesian`&&(r=[Math.fround(e.center[0]),Math.fround(e.center[1]),0],i=e.unprojectPosition(r),r[0]-=n[0],r[1]-=n[1],r[2]-=n[2]);break;case X.IDENTITY:r=e.position.map(Math.fround),r[2]=r[2]||0;break;case X.GLOBE:a=!1,i=null;break;default:a=!1}return{geospatialOrigin:i,shaderCoordinateOrigin:r,offsetMode:a}}function Qp(e,t,n){let{viewMatrixUncentered:r,projectionMatrix:i}=e,{viewMatrix:a,viewProjectionMatrix:o}=e,s=Up,c=Up,l=e.cameraPosition,{geospatialOrigin:u,shaderCoordinateOrigin:d,offsetMode:f}=Zp(e,t,n);return f&&(c=e.projectPosition(u||d),l=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],c[3]=1,s=Qu([],c,o),a=r||a,o=ku([],i,a),o=ku([],o,Wp)),{viewMatrix:a,viewProjectionMatrix:o,projectionCenter:s,originCommon:c,cameraPosCommon:l,shaderCoordinateOrigin:d,geospatialOrigin:u}}function $p({viewport:e,devicePixelRatio:t=1,modelMatrix:n=null,coordinateSystem:r=`default`,coordinateOrigin:i=qp,autoWrapLongitude:a=!1}){r===`default`&&(r=e.isGeospatial?`lnglat`:`cartesian`);let o=Xp({viewport:e,devicePixelRatio:t,coordinateSystem:r,coordinateOrigin:i});return o.wrapLongitude=a,o.modelMatrix=n||Gp,o}function em({viewport:e,devicePixelRatio:t,coordinateSystem:n,coordinateOrigin:r}){let{projectionCenter:i,viewProjectionMatrix:a,originCommon:o,cameraPosCommon:s,shaderCoordinateOrigin:c,geospatialOrigin:l}=Qp(e,n,r),u=e.getDistanceScales(),d=[e.width*t,e.height*t],f=Qu([],[0,0,-e.focalDistance,1],e.projectionMatrix)[3]||1,p={coordinateSystem:Yp(n),projectionMode:e.projectionMode,coordinateOrigin:c,commonOrigin:o.slice(0,3),center:i,pseudoMeters:!!e._pseudoMeters,viewportSize:d,devicePixelRatio:t,focalDistance:f,commonUnitsPerMeter:u.unitsPerMeter,commonUnitsPerWorldUnit:u.unitsPerMeter,commonUnitsPerWorldUnit2:Kp,scale:e.scale,wrapLongitude:!1,viewProjectionMatrix:a,modelMatrix:Gp,cameraPosition:s};if(l){let t=e.getDistanceScales(l);switch(n){case`meter-offsets`:p.commonUnitsPerWorldUnit=t.unitsPerMeter,p.commonUnitsPerWorldUnit2=t.unitsPerMeter2;break;case`lnglat`:case`lnglat-offsets`:e._pseudoMeters||(p.commonUnitsPerMeter=t.unitsPerMeter),p.commonUnitsPerWorldUnit=t.unitsPerDegree,p.commonUnitsPerWorldUnit2=t.unitsPerDegree2;break;case`cartesian`:p.commonUnitsPerWorldUnit=[1,1,t.unitsPerMeter[2]],p.commonUnitsPerWorldUnit2=[0,0,t.unitsPerMeter2[2]];break;default:break}}return p}var tm=`\
${`\
${[`default`,`lnglat`,`meter-offsets`,`lnglat-offsets`,`cartesian`].map(e=>`const COORDINATE_SYSTEM_${e.toUpperCase().replaceAll(`-`,`_`)}: i32 = ${Yp(e)};`).join(``)}
${Object.keys(X).map(e=>`const PROJECTION_MODE_${e}: i32 = ${X[e]};`).join(``)}
${Object.keys(Rp).map(e=>`const UNIT_${e.toUpperCase()}: i32 = ${Rp[e]};`).join(``)}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  return viewProjectionMatrix * position + center;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`,nm=`\
${[`default`,`lnglat`,`meter-offsets`,`lnglat-offsets`,`cartesian`].map(e=>`const int COORDINATE_SYSTEM_${e.toUpperCase().replaceAll(`-`,`_`)} = ${Yp(e)};`).join(``)}
${Object.keys(X).map(e=>`const int PROJECTION_MODE_${e} = ${X[e]};`).join(``)}
${Object.keys(Rp).map(e=>`const int UNIT_${e.toUpperCase()} = ${Rp[e]};`).join(``)}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`,rm={};function im(e=rm){return`viewport`in e?$p(e):{}}var am={name:`project`,dependencies:[Hd,hf],source:tm,vs:nm,getUniforms:im,uniformTypes:{wrapLongitude:`f32`,coordinateSystem:`i32`,commonUnitsPerMeter:`vec3<f32>`,projectionMode:`i32`,scale:`f32`,commonUnitsPerWorldUnit:`vec3<f32>`,commonUnitsPerWorldUnit2:`vec3<f32>`,center:`vec4<f32>`,modelMatrix:`mat4x4<f32>`,viewProjectionMatrix:`mat4x4<f32>`,viewportSize:`vec2<f32>`,devicePixelRatio:`f32`,focalDistance:`f32`,cameraPosition:`vec3<f32>`,coordinateOrigin:`vec3<f32>`,commonOrigin:`vec3<f32>`,pseudoMeters:`f32`}},om={name:`project32`,dependencies:[am],source:`// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,vs:`vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`};function sm(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function cm(e,t){let n=Qu([],t,e);return Ku(n,n,1/n[3]),n}function lm(e,t,n){return e<t?t:e>n?n:e}function um(e){return Math.log(e)*Math.LOG2E}var dm=Math.log2||um;function fm(e,t){if(!e)throw Error(t||`@math.gl/web-mercator: assertion failed.`)}var pm=Math.PI,mm=pm/4,hm=pm/180,gm=180/pm,_m=512,vm=4003e4,ym=85.051129,bm=1.5;function xm(e){return dm(e)}function Sm(e){let[t,n]=e;fm(Number.isFinite(t)),fm(Number.isFinite(n)&&n>=-90&&n<=90,`invalid latitude`);let r=t*hm,i=n*hm;return[_m*(r+pm)/(2*pm),_m*(pm+Math.log(Math.tan(mm+i*.5)))/(2*pm)]}function Cm(e){let[t,n]=e,r=t/_m*(2*pm)-pm,i=2*(Math.atan(Math.exp(n/_m*(2*pm)-pm))-mm);return[r*gm,i*gm]}function wm(e){let{latitude:t}=e;return fm(Number.isFinite(t)),xm(vm*Math.cos(t*hm))-9}function Tm(e){let t=Math.cos(e*hm);return _m/vm/t}function Em(e){let{latitude:t,longitude:n,highPrecision:r=!1}=e;fm(Number.isFinite(t)&&Number.isFinite(n));let i=_m,a=Math.cos(t*hm),o=i/360,s=o/a,c=i/vm/a,l={unitsPerMeter:[c,c,c],metersPerUnit:[1/c,1/c,1/c],unitsPerDegree:[o,s,c],degreesPerUnit:[1/o,1/s,1/c]};if(r){let e=hm*Math.tan(t*hm)/a,n=o*e/2,r=i/vm*e,u=r/s*c;l.unitsPerDegree2=[0,n,r],l.unitsPerMeter2=[u,0,u]}return l}function Dm(e,t){let[n,r,i]=e,[a,o,s]=t,{unitsPerMeter:c,unitsPerMeter2:l}=Em({longitude:n,latitude:r,highPrecision:!0}),u=Sm(e);u[0]+=a*(c[0]+l[0]*o),u[1]+=o*(c[1]+l[1]*o);let d=Cm(u),f=(i||0)+(s||0);return Number.isFinite(i)||Number.isFinite(s)?[d[0],d[1],f]:d}function Om(e){let{height:t,pitch:n,bearing:r,altitude:i,scale:a,center:o}=e,s=sm();Au(s,s,[0,0,-i]),Nu(s,s,-n*hm),Fu(s,s,r*hm);let c=a/t;return ju(s,s,[c,c,c]),o&&Au(s,s,Wl([],o)),s}function km(e){let{width:t,height:n,altitude:r,pitch:i=0,offset:a,center:o,scale:s,nearZMultiplier:c=1,farZMultiplier:l=1}=e,{fovy:u=Am(bm)}=e;r!==void 0&&(u=Am(r));let d=u*hm,f=i*hm,p=jm(u),m=p;o&&(m+=o[2]*s/Math.cos(f)/n);let h=d*(.5+(a?a[1]:0)/n),g=Math.sin(h)*m/Math.sin(lm(Math.PI/2-f-h,.01,Math.PI-.01)),_=Math.sin(f)*g+m,v=m*10,y=Math.min(_*l,v);return{fov:d,aspect:t/n,focalDistance:p,near:c,far:y}}function Am(e){return 2*Math.atan(.5/e)*gm}function jm(e){return .5/Math.tan(.5*e*hm)}function Mm(e,t){let[n,r,i=0]=e;return fm(Number.isFinite(n)&&Number.isFinite(r)&&Number.isFinite(i)),cm(t,[n,r,i,1])}function Nm(e,t,n=0){let[r,i,a]=e;if(fm(Number.isFinite(r)&&Number.isFinite(i),`invalid pixel coordinate`),Number.isFinite(a))return cm(t,[r,i,a,1]);let o=cm(t,[r,i,0,1]),s=cm(t,[r,i,1,1]),c=o[2],l=s[2];return Al([],o,s,c===l?0:((n||0)-c)/(l-c))}function Pm(e){let{width:t,height:n,bounds:r,minExtent:i=0,maxZoom:a=24,offset:o=[0,0]}=e,[[s,c],[l,u]]=r,d=Fm(e.padding),f=Sm([s,lm(u,-ym,ym)]),p=Sm([l,lm(c,-ym,ym)]),m=[Math.max(Math.abs(p[0]-f[0]),i),Math.max(Math.abs(p[1]-f[1]),i)],h=[t-d.left-d.right-Math.abs(o[0])*2,n-d.top-d.bottom-Math.abs(o[1])*2];fm(h[0]>0&&h[1]>0);let g=h[0]/m[0],_=h[1]/m[1],v=(d.right-d.left)/2/g,y=(d.top-d.bottom)/2/_,b=Cm([(p[0]+f[0])/2+v,(p[1]+f[1])/2+y]),x=Math.min(a,dm(Math.abs(Math.min(g,_))));return fm(Number.isFinite(x)),{longitude:b[0],latitude:b[1],zoom:x}}function Fm(e=0){return typeof e==`number`?{top:e,bottom:e,left:e,right:e}:(fm(Number.isFinite(e.top)&&Number.isFinite(e.bottom)&&Number.isFinite(e.left)&&Number.isFinite(e.right)),e)}var Im=Math.PI/180;function Lm(e,t=0){let{width:n,height:r,unproject:i}=e,a={targetZ:t},o=i([0,r],a),s=i([n,r],a),c,l;return(e.fovy?.5*e.fovy*Im:Math.atan(.5/e.altitude))>(90-e.pitch)*Im-.01?(c=Rm(e,0,t),l=Rm(e,n,t)):(c=i([0,0],a),l=i([n,0],a)),[o,s,l,c]}function Rm(e,t,n){let{pixelUnprojectionMatrix:r}=e,i=cm(r,[t,0,1,1]),a=cm(r,[t,e.height,1,1]),o=Cm(Al([],i,a,(n*e.distanceScales.unitsPerMeter[2]-i[2])/(a[2]-i[2])));return o.push(n),o}var zm=`
layout(std140) uniform shadowUniforms {
  bool drawShadowMap;
  bool useShadowMap;
  vec4 color;
  highp int lightId;
  float lightCount;
  mat4 viewProjectionMatrix0;
  mat4 viewProjectionMatrix1;
  vec4 projectCenter0;
  vec4 projectCenter1;
} shadow;
`,Bm=`
${zm}

const int max_lights = 2;

out vec3 shadow_vPosition[max_lights];

vec4 shadow_setVertexPosition(vec4 position_commonspace) {
  mat4 viewProjectionMatrices[max_lights];
  viewProjectionMatrices[0] = shadow.viewProjectionMatrix0;
  viewProjectionMatrices[1] = shadow.viewProjectionMatrix1;
  vec4 projectCenters[max_lights];
  projectCenters[0] = shadow.projectCenter0;
  projectCenters[1] = shadow.projectCenter1;

  if (shadow.drawShadowMap) {
    return project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[shadow.lightId], projectCenters[shadow.lightId]);
  }
  if (shadow.useShadowMap) {
    for (int i = 0; i < max_lights; i++) {
      if(i < int(shadow.lightCount)) {
        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[i], projectCenters[i]);
        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;
      }
    }
  }
  return gl_Position;
}

`,Vm=`
${zm}

const int max_lights = 2;
uniform sampler2D shadow_uShadowMap0;
uniform sampler2D shadow_uShadowMap1;

in vec3 shadow_vPosition[max_lights];

const vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);
const vec4 bitUnpackShift = 1.0 / bitPackShift;
const vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);

float shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {
  vec4 rgbaDepth = texture(shadowMap, position.xy);

  float z = dot(rgbaDepth, bitUnpackShift);
  return smoothstep(0.001, 0.01, position.z - z);
}

vec4 shadow_filterShadowColor(vec4 color) {
  if (shadow.drawShadowMap) {
    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);
    rgbaDepth -= rgbaDepth.gbaa * bitMask;
    return rgbaDepth;
  }
  if (shadow.useShadowMap) {
    float shadowAlpha = 0.0;
    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);
    if(shadow.lightCount > 1.0) {
      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);
    }
    shadowAlpha *= shadow.color.a / shadow.lightCount;
    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);

    return vec4(
      mix(color.rgb, shadow.color.rgb, shadowAlpha / blendedAlpha),
      blendedAlpha
    );
  }
  return color;
}

`,Hm=Hp(qm),Um=Hp(Jm),Wm=[0,0,0,1],Gm=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];function Km(e,t){let[n,r,i]=e,a=Nm([n,r,i],t);return Number.isFinite(i)?a:[a[0],a[1],0]}function qm({viewport:e,center:t}){return new K(e.viewProjectionMatrix).invert().transform(t)}function Jm({viewport:e,shadowMatrices:t}){let n=[],r=e.pixelUnprojectionMatrix,i=e.isGeospatial?void 0:1,a=[[0,0,i],[e.width,0,i],[0,e.height,i],[e.width,e.height,i],[0,0,-1],[e.width,0,-1],[0,e.height,-1],[e.width,e.height,-1]].map(e=>Km(e,r));for(let r of t){let t=r.clone().translate(new W(e.center).negate()),i=a.map(e=>t.transform(e)),o=new K().ortho({left:Math.min(...i.map(e=>e[0])),right:Math.max(...i.map(e=>e[0])),bottom:Math.min(...i.map(e=>e[1])),top:Math.max(...i.map(e=>e[1])),near:Math.min(...i.map(e=>-e[2])),far:Math.max(...i.map(e=>-e[2]))});n.push(o.multiplyRight(r))}return n}function Ym(e){let{shadowEnabled:t=!0,project:n}=e;if(!t||!n||!e.shadowMatrices||!e.shadowMatrices.length)return{drawShadowMap:!1,useShadowMap:!1,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};let r=am.getUniforms(n),i=Hm({viewport:n.viewport,center:r.center}),a=[],o=Um({shadowMatrices:e.shadowMatrices,viewport:n.viewport}).slice();for(let t=0;t<e.shadowMatrices.length;t++){let e=o[t],s=e.clone().translate(new W(n.viewport.center).negate());r.coordinateSystem===Yp(`lnglat`)&&r.projectionMode===X.WEB_MERCATOR?(o[t]=s,a[t]=i):(o[t]=e.clone().multiplyRight(Gm),a[t]=s.transform(i))}let s={drawShadowMap:!!e.drawToShadowMap,useShadowMap:e.shadowMaps?e.shadowMaps.length>0:!1,color:e.shadowColor||Wm,lightId:e.shadowLightId||0,lightCount:e.shadowMatrices.length,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};for(let e=0;e<o.length;e++)s[`viewProjectionMatrix${e}`]=o[e],s[`projectCenter${e}`]=a[e];for(let t=0;t<2;t++)s[`shadow_uShadowMap${t}`]=e.shadowMaps&&e.shadowMaps[t]||e.dummyShadowMap;return s}var Xm={name:`shadow`,dependencies:[am],vs:Bm,fs:Vm,inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    position = shadow_setVertexPosition(geometry.position);
    `,"fs:DECKGL_FILTER_COLOR":`
    color = shadow_filterShadowColor(color);
    `},getUniforms:Ym,uniformTypes:{drawShadowMap:`f32`,useShadowMap:`f32`,color:`vec4<f32>`,lightId:`i32`,lightCount:`f32`,viewProjectionMatrix0:`mat4x4<f32>`,viewProjectionMatrix1:`mat4x4<f32>`,projectCenter0:`vec4<f32>`,projectCenter1:`vec4<f32>`}},Zm=`struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}
`,Qm={...qd,source:Zm,defaultUniforms:{...qd.defaultUniforms,useByteColors:!0},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}},$m=[hf],eh=[`vs:DECKGL_FILTER_SIZE(inout vec3 size, VertexGeometry geometry)`,`vs:DECKGL_FILTER_GL_POSITION(inout vec4 position, VertexGeometry geometry)`,`vs:DECKGL_FILTER_COLOR(inout vec4 color, VertexGeometry geometry)`,`fs:DECKGL_FILTER_COLOR(inout vec4 color, FragmentGeometry geometry)`],th=[];function nh(e){let t=cl.getDefaultShaderAssembler();for(let e of $m)t.addDefaultModule(e);t._hookFunctions.length=0;let n=e===`glsl`?eh:th;for(let e of n)t.addShaderHook(e);return t}var rh=[255,255,255],ih=1,ah=0,oh=class{constructor(e={}){this.type=`ambient`;let{color:t=rh}=e,{intensity:n=ih}=e;this.id=e.id||`ambient-${ah++}`,this.color=t,this.intensity=n}},sh=[255,255,255],ch=1,lh=[0,0,-1],uh=0,dh=class{constructor(e={}){this.type=`directional`;let{color:t=sh}=e,{intensity:n=ch}=e,{direction:r=lh}=e,{_shadow:i=!1}=e;this.id=e.id||`directional-${uh++}`,this.color=t,this.intensity=n,this.type=`directional`,this.direction=new W(r).normalize().toArray(),this.shadow=i}getProjectedLight(e){return this}},fh=class{constructor(e,t={id:`pass`}){let{id:n}=t;this.id=n,this.device=e,this.props={...t}}setProps(e){Object.assign(this.props,e)}render(e){}cleanup(){}},ph={depthWriteEnabled:!0,depthCompare:`less-equal`,blendColorOperation:`add`,blendColorSrcFactor:`src-alpha`,blendColorDstFactor:`one`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one-minus-dst-alpha`,blendAlphaDstFactor:`one`},mh=class extends fh{constructor(){super(...arguments),this._lastRenderIndex=-1}render(e){this._render(e)}_render(e){let t=this.device.canvasContext,n=e.target??t.getCurrentFramebuffer(),[r,i]=t.getDrawingBufferSize(),a=e.clearCanvas??!0,o=e.clearColor??(a?[0,0,0,0]:!1),s=a?1:!1,c=a?0:!1,l=e.colorMask??15,u={viewport:[0,0,r,i]};e.colorMask&&(u.colorMask=l),e.scissorRect&&(u.scissorRect=e.scissorRect);let d=this.device.beginRenderPass({framebuffer:n,parameters:u,clearColor:o,clearDepth:s,clearStencil:c});try{return this._drawLayers(d,e)}finally{d.end(),this.device.submit()}}_drawLayers(e,t){let{target:n,shaderModuleProps:r,viewports:i,views:a,onViewportActive:o,clearStack:s=!0}=t;t.pass=t.pass||`unknown`,s&&(this._lastRenderIndex=-1);let c=[];for(let s of i){let i=a&&a[s.id];o?.(s);let l=this._getDrawLayerParams(s,t),u=s.subViewports||[s];for(let a of u){let o=this._drawLayersInViewport(e,{target:n,shaderModuleProps:r,viewport:a,view:i,pass:t.pass,layers:t.layers},l);c.push(o)}}return c}_getDrawLayerParams(e,{layers:t,pass:n,isPicking:r=!1,layerFilter:i,cullRect:a,effects:o,shaderModuleProps:s},c=!1){let l=[],u=hh(this._lastRenderIndex+1),d={layer:t[0],viewport:e,isPicking:r,renderPass:n,cullRect:a},f={};for(let r=0;r<t.length;r++){let a=t[r],p=this._shouldDrawLayer(a,d,i,f),m={shouldDrawLayer:p};p&&!c&&(m.shouldDrawLayer=!0,m.layerRenderIndex=u(a,p),m.shaderModuleProps=this._getShaderModuleProps(a,o,n,s),m.layerParameters={...a.context.device.type===`webgpu`?ph:null,...a.context.deck?.props.parameters,...this.getLayerParameters(a,r,e)}),l[r]=m}return l}_drawLayersInViewport(e,{layers:t,shaderModuleProps:n,pass:r,target:i,viewport:a,view:o},s){let c=gh(this.device,{shaderModuleProps:n,target:i,viewport:a});if(o){let{clear:e,clearColor:t,clearDepth:n,clearStencil:r}=o.props;if(e){let e=[0,0,0,0],a=1,o=0;Array.isArray(t)?e=[...t.slice(0,3),t[3]||255].map(e=>e/255):t===!1&&(e=!1),n!==void 0&&(a=n),r!==void 0&&(o=r),this.device.beginRenderPass({framebuffer:i,parameters:{viewport:c,scissorRect:c},clearColor:e,clearDepth:a,clearStencil:o}).end()}}let l={totalCount:t.length,visibleCount:0,compositeCount:0,pickableCount:0};e.setParameters({viewport:c});for(let n=0;n<t.length;n++){let i=t[n],o=s[n],{shouldDrawLayer:c}=o;if(c&&i.props.pickable&&l.pickableCount++,i.isComposite&&l.compositeCount++,i.isDrawable&&o.shouldDrawLayer){let{layerRenderIndex:t,shaderModuleProps:n,layerParameters:s}=o;l.visibleCount++,this._lastRenderIndex=Math.max(this._lastRenderIndex,t),n.project&&(n.project.viewport=a),i.context.renderPass=e;try{i._drawLayer({renderPass:e,shaderModuleProps:n,uniforms:{layerIndex:t},parameters:s})}catch(e){i.raiseError(e,`drawing ${i} to ${r}`)}}}return l}shouldDrawLayer(e){return!0}getShaderModuleProps(e,t,n){return null}getLayerParameters(e,t,n){return e.props.parameters}_shouldDrawLayer(e,t,n,r){if(!(e.props.visible&&this.shouldDrawLayer(e)))return!1;t.layer=e;let i=e.parent;for(;i;){if(!i.props.visible||!i.filterSubLayer(t))return!1;t.layer=i,i=i.parent}if(n){let e=t.layer.id;if(e in r||(r[e]=n(t)),!r[e])return!1}return e.activateViewport(t.viewport),!0}_getShaderModuleProps(e,t,n,r){let i=this.device.canvasContext.cssToDeviceRatio(),a=e.internalState?.propsInTransition||e.props,o={layer:a,picking:{isActive:!1},project:{viewport:e.context.viewport,devicePixelRatio:i,modelMatrix:a.modelMatrix,coordinateSystem:a.coordinateSystem,coordinateOrigin:a.coordinateOrigin,autoWrapLongitude:e.wrapLongitude}};if(t)for(let n of t)_h(o,n.getShaderModuleProps?.(e,o));return _h(o,this.getShaderModuleProps(e,t,o),r)}};function hh(e=0,t={}){let n={},r=(i,a)=>{let o=i.props._offset,s=i.id,c=i.parent&&i.parent.id,l;if(c&&!(c in t)&&r(i.parent,!1),c in n){let e=n[c]=n[c]||hh(t[c],t);l=e(i,a),n[s]=e}else Number.isFinite(o)?(l=o+(t[c]||0),n[s]=null):l=e;return a&&l>=e&&(e=l+1),t[s]=l,l};return r}function gh(e,{shaderModuleProps:t,target:n,viewport:r}){let i=t?.project?.devicePixelRatio??e.canvasContext.cssToDeviceRatio(),[,a]=e.canvasContext.getDrawingBufferSize(),o=n?n.height:a,s=r;return[s.x*i,o-(s.y+s.height)*i,s.width*i,s.height*i]}function _h(e,...t){for(let n of t)if(n)for(let t in n)e[t]?Object.assign(e[t],n[t]):e[t]=n[t];return e}var vh=class extends mh{constructor(e,t){super(e,t);let n=e.createTexture({format:`rgba8unorm`,width:1,height:1,sampler:{minFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`}}),r=e.createTexture({format:`depth16unorm`,width:1,height:1});this.fbo=e.createFramebuffer({id:`shadowmap`,width:1,height:1,colorAttachments:[n],depthStencilAttachment:r})}delete(){this.fbo&&=(this.fbo.destroy(),null)}getShadowMap(){return this.fbo.colorAttachments[0].texture}render(e){let t=this.fbo,n=this.device.canvasContext.cssToDeviceRatio(),r=e.viewports[0],i=r.width*n,a=r.height*n,o=[1,1,1,1];(i!==t.width||a!==t.height)&&t.resize({width:i,height:a}),super.render({...e,clearColor:o,target:t,pass:`shadow`})}getLayerParameters(e,t,n){return{...e.props.parameters,blend:!1,depthWriteEnabled:!0,depthCompare:`less-equal`}}shouldDrawLayer(e){return e.props.shadowEnabled!==!1}getShaderModuleProps(e,t,n){return{shadow:{project:n.project,drawToShadowMap:!0}}}},yh={color:[255,255,255],intensity:1},bh=[{color:[255,255,255],intensity:1,direction:[-1,3,-1]},{color:[255,255,255],intensity:.9,direction:[1,-8,-2.5]}],xh=[0,0,0,200/255],Sh=class{constructor(e={}){this.id=`lighting-effect`,this.shadowColor=xh,this.shadow=!1,this.directionalLights=[],this.pointLights=[],this.shadowPasses=[],this.dummyShadowMap=null,this.setProps(e)}setup(e){this.context=e;let{device:t,deck:n}=e;this.shadow&&!this.dummyShadowMap&&(this._createShadowPasses(t),n._addDefaultShaderModule(Xm),this.dummyShadowMap=t.createTexture({width:1,height:1}))}setProps(e){this.ambientLight=void 0,this.directionalLights=[],this.pointLights=[];for(let t in e){let n=e[t];switch(n.type){case`ambient`:this.ambientLight=n;break;case`directional`:this.directionalLights.push(n);break;case`point`:this.pointLights.push(n);break;default:}}this._applyDefaultLights(),this.shadow=this.directionalLights.some(e=>e.shadow),this.context&&this.setup(this.context),this.props=e}preRender({layers:e,layerFilter:t,viewports:n,onViewportActive:r,views:i}){if(this.shadow){this.shadowMatrices=this._calculateMatrices();for(let a=0;a<this.shadowPasses.length;a++)this.shadowPasses[a].render({layers:e,layerFilter:t,viewports:n,onViewportActive:r,views:i,shaderModuleProps:{shadow:{shadowLightId:a,dummyShadowMap:this.dummyShadowMap,shadowMatrices:this.shadowMatrices}}})}}getShaderModuleProps(e,t){let n=this.shadow?{project:t.project,shadowMaps:this.shadowPasses.map(e=>e.getShadowMap()),dummyShadowMap:this.dummyShadowMap,shadowColor:this.shadowColor,shadowMatrices:this.shadowMatrices}:{},r={enabled:!0,lights:this._getLights(e)},i=e.props.material;return{shadow:n,lighting:r,phongMaterial:i,gouraudMaterial:i}}cleanup(e){for(let e of this.shadowPasses)e.delete();this.shadowPasses.length=0,this.dummyShadowMap&&(this.dummyShadowMap.destroy(),this.dummyShadowMap=null,e.deck._removeDefaultShaderModule(Xm))}_calculateMatrices(){let e=[];for(let t of this.directionalLights){let n=new K().lookAt({eye:new W(t.direction).negate()});e.push(n)}return e}_createShadowPasses(e){for(let t=0;t<this.directionalLights.length;t++){let n=new vh(e);this.shadowPasses[t]=n}}_applyDefaultLights(){let{ambientLight:e,pointLights:t,directionalLights:n}=this;!e&&t.length===0&&n.length===0&&(this.ambientLight=new oh(yh),this.directionalLights.push(new dh(bh[0]),new dh(bh[1])))}_getLights(e){let t=[];this.ambientLight&&t.push(this.ambientLight);for(let n of this.pointLights)t.push(n.getProjectedLight({layer:e}));for(let n of this.directionalLights)t.push(n.getProjectedLight({layer:e}));return t}},Ch=new class{constructor(e={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(e)}setOptions(e){Object.assign(this.opts,e)}allocate(e,t,{size:n=1,type:r,padding:i=0,copy:a=!1,initialize:o=!1,maxCount:s}){let c=r||e&&e.constructor||Float32Array,l=t*n+i;if(ArrayBuffer.isView(e)){if(l<=e.length)return e;if(l*e.BYTES_PER_ELEMENT<=e.buffer.byteLength)return new c(e.buffer,0,l)}let u=1/0;s&&(u=s*n+i);let d=this._allocate(c,l,o,u);return e&&a?d.set(e):o||d.fill(0,0,4),this._release(e),d}release(e){this._release(e)}_allocate(e,t,n,r){let i=Math.max(Math.ceil(t*this.opts.overAlloc),1);i>r&&(i=r);let a=this._pool,o=e.BYTES_PER_ELEMENT*i,s=a.findIndex(e=>e.byteLength>=o);if(s>=0){let t=new e(a.splice(s,1)[0],0,i);return n&&t.fill(0),t}return new e(i)}_release(e){if(!ArrayBuffer.isView(e))return;let t=this._pool,{buffer:n}=e,{byteLength:r}=n,i=t.findIndex(e=>e.byteLength>=r);i<0?t.push(n):(i>0||t.length<this.opts.poolSize)&&t.splice(i,0,n),t.length>this.opts.poolSize&&t.shift()}};function wh(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Th(e,t){let n=e%t;return n<0?t+n:n}function Eh(e){return[e[12],e[13],e[14]]}function Dh(e){return{left:kh(e[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),right:kh(e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),bottom:kh(e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),top:kh(e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),near:kh(e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]),far:kh(e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14])}}var Oh=new W;function kh(e,t,n,r){Oh.set(e,t,n);let i=Oh.len();return{distance:r/i,normal:new W(-e/i,-t/i,-n/i)}}function Ah(e){return e-Math.fround(e)}var jh;function Mh(e,t){let{size:n=1,startIndex:r=0}=t,i=t.endIndex===void 0?e.length:t.endIndex,a=(i-r)/n;jh=Ch.allocate(jh,a,{type:Float32Array,size:n*2});let o=r,s=0;for(;o<i;){for(let t=0;t<n;t++){let r=e[o++];jh[s+t]=r,jh[s+t+n]=Ah(r)}s+=n*2}return jh.subarray(0,a*n*2)}function Nh(e){let t=null,n=!1;for(let r of e)r&&(t?(n||=(t=[[t[0][0],t[0][1]],[t[1][0],t[1][1]]],!0),t[0][0]=Math.min(t[0][0],r[0][0]),t[0][1]=Math.min(t[0][1],r[0][1]),t[1][0]=Math.max(t[1][0],r[1][0]),t[1][1]=Math.max(t[1][1],r[1][1])):t=r);return t}var Ph=Math.PI/180,Fh=wh(),Ih=[0,0,0],Lh={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]};function Rh({width:e,height:t,orthographic:n,fovyRadians:r,focalDistance:i,padding:a,near:o,far:s}){let c=e/t,l=n?new K().orthographic({fovy:r,aspect:c,focalDistance:i,near:o,far:s}):new K().perspective({fovy:r,aspect:c,near:o,far:s});if(a){let{left:n=0,right:r=0,top:i=0,bottom:o=0}=a,s=H((n+e-r)/2,0,e)-e/2,c=H((i+t-o)/2,0,t)-t/2;l[8]-=s*2/e,l[9]+=c*2/t}return l}var zh=class e{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||`viewport`,this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||Lh,this.focalDistance=e.focalDistance||1,this.position=e.position||Ih,this.modelMatrix=e.modelMatrix||null;let{longitude:t,latitude:n}=e;this.isGeospatial=Number.isFinite(n)&&Number.isFinite(t),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?X.WEB_MERCATOR:X.WEB_MERCATOR_AUTO_OFFSET:X.IDENTITY}equals(t){return t instanceof e?this===t?!0:t.width===this.width&&t.height===this.height&&t.scale===this.scale&&gl(t.projectionMatrix,this.projectionMatrix)&&gl(t.viewMatrix,this.viewMatrix):!1}project(e,{topLeft:t=!0}={}){let n=Mm(this.projectPosition(e),this.pixelProjectionMatrix),[r,i]=n,a=t?i:this.height-i;return e.length===2?[r,a]:[r,a,n[2]]}unproject(e,{topLeft:t=!0,targetZ:n}={}){let[r,i,a]=e,o=t?i:this.height-i,s=n&&n*this.distanceScales.unitsPerMeter[2],c=Nm([r,o,a],this.pixelUnprojectionMatrix,s),[l,u,d]=this.unprojectPosition(c);return Number.isFinite(a)?[l,u,d]:Number.isFinite(n)?[l,u,n]:[l,u]}projectPosition(e){let[t,n]=this.projectFlat(e);return[t,n,(e[2]||0)*this.distanceScales.unitsPerMeter[2]]}unprojectPosition(e){let[t,n]=this.unprojectFlat(e);return[t,n,(e[2]||0)*this.distanceScales.metersPerUnit[2]]}projectFlat(e){if(this.isGeospatial){let t=Sm(e);return t[1]=H(t[1],-318,830),t}return e}unprojectFlat(e){return this.isGeospatial?Cm(e):e}getBounds(e={}){let t={targetZ:e.z||0},n=this.unproject([0,0],t),r=this.unproject([this.width,0],t),i=this.unproject([0,this.height],t),a=this.unproject([this.width,this.height],t);return[Math.min(n[0],r[0],i[0],a[0]),Math.min(n[1],r[1],i[1],a[1]),Math.max(n[0],r[0],i[0],a[0]),Math.max(n[1],r[1],i[1],a[1])]}getDistanceScales(e){return e&&this.isGeospatial?Em({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:t,width:n=1,height:r=1}){return e<this.x+this.width&&this.x<e+n&&t<this.y+this.height&&this.y<t+r}getFrustumPlanes(){return this._frustumPlanes.near||Object.assign(this._frustumPlanes,Dh(this.viewProjectionMatrix)),this._frustumPlanes}panByPosition(e,t,n){return null}_initProps(e){let t=e.longitude,n=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=wm({latitude:n})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||Em({latitude:n,longitude:t})),this.scale=2**this.zoom;let{position:r,modelMatrix:i}=e,a=Ih;if(r&&(a=i?new K(i).transformAsVector(r,[]):r),this.isGeospatial){let e=this.projectPosition([t,n,0]);this.center=new W(a).scale(this.distanceScales.unitsPerMeter).add(e)}else this.center=this.projectPosition(a)}_initMatrices(e){let{viewMatrix:t=Fh,projectionMatrix:n=null,orthographic:r=!1,fovyRadians:i,fovy:a=75,near:o=.1,far:s=1e3,padding:c=null,focalDistance:l=1}=e;this.viewMatrixUncentered=t,this.viewMatrix=new K().multiplyRight(t).translate(new W(this.center).negate()),this.projectionMatrix=n||Rh({width:this.width,height:this.height,orthographic:r,fovyRadians:i||a*Ph,focalDistance:l,padding:c,near:o,far:s});let u=wh();ku(u,u,this.projectionMatrix),ku(u,u,this.viewMatrix),this.viewProjectionMatrix=u,this.viewMatrixInverse=Du([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=Eh(this.viewMatrixInverse);let d=wh(),f=wh();ju(d,d,[this.width/2,-this.height/2,1]),Au(d,d,[1,-1,0]),ku(f,d,this.viewProjectionMatrix),this.pixelProjectionMatrix=f,this.pixelUnprojectionMatrix=Du(wh(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||R.warn(`Pixel project matrix not invertible`)()}};zh.displayName=`Viewport`;var Bh=class e extends zh{constructor(e={}){let{latitude:t=0,longitude:n=0,zoom:r=0,pitch:i=0,bearing:a=0,nearZMultiplier:o=.1,farZMultiplier:s=1.01,nearZ:c,farZ:l,orthographic:u=!1,projectionMatrix:d,repeat:f=!1,worldOffset:p=0,position:m,padding:h,legacyMeterSizes:g=!1}=e,{width:_,height:v,altitude:y=1.5}=e,b=2**r;_||=1,v||=1;let x,S=null;if(d)y=d[5]/2,x=Am(y);else{e.fovy?(x=e.fovy,y=jm(x)):x=Am(y);let n;if(h){let{top:e=0,bottom:t=0}=h;n=[0,H((e+v-t)/2,0,v)-v/2]}S=km({width:_,height:v,scale:b,center:m&&[0,0,m[2]*Tm(t)],offset:n,pitch:i,fovy:x,nearZMultiplier:o,farZMultiplier:s}),Number.isFinite(c)&&(S.near=c),Number.isFinite(l)&&(S.far=l)}let C=Om({height:v,pitch:i,bearing:a,scale:b,altitude:y});p&&(C=new K().translate([512*p,0,0]).multiplyLeft(C)),super({...e,width:_,height:v,viewMatrix:C,longitude:n,latitude:t,zoom:r,...S,fovy:x,focalDistance:y}),this.latitude=t,this.longitude=n,this.zoom=r,this.pitch=i,this.bearing=a,this.altitude=y,this.fovy=x,this.orthographic=u,this._subViewports=f?[]:null,this._pseudoMeters=g,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){let t=this.getBounds(),n=Math.floor((t[0]+180)/360),r=Math.ceil((t[2]-180)/360);for(let t=n;t<=r;t++){let n=t?new e({...this,worldOffset:t}):this;this._subViewports.push(n)}}return this._subViewports}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);let[t,n]=this.projectFlat(e);return[t,n,(e[2]||0)*Tm(e[1])]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);let[t,n]=this.unprojectFlat(e);return[t,n,(e[2]||0)/Tm(n)]}addMetersToLngLat(e,t){return Dm(e,t)}panByPosition(e,t,n){let r=Nm(t,this.pixelUnprojectionMatrix),i=Dl([],this.projectFlat(e),kl([],r)),a=Dl([],this.center,i),[o,s]=this.unprojectFlat(a);return{longitude:o,latitude:s}}panByPosition3D(e,t){let n=e[2]||0,r=Nl([],e,this.unproject(t,{targetZ:n}));return{longitude:this.longitude+r[0],latitude:this.latitude+r[1]}}getBounds(e={}){let t=Lm(this,e.z||0);return[Math.min(t[0][0],t[1][0],t[2][0],t[3][0]),Math.min(t[0][1],t[1][1],t[2][1],t[3][1]),Math.max(t[0][0],t[1][0],t[2][0],t[3][0]),Math.max(t[0][1],t[1][1],t[2][1],t[3][1])]}fitBounds(t,n={}){let{width:r,height:i}=this,{longitude:a,latitude:o,zoom:s}=Pm({width:r,height:i,bounds:t,...n});return new e({width:r,height:i,longitude:a,latitude:o,zoom:s})}};Bh.displayName=`WebMercatorViewport`;var Vh=[0,0,0];function Hh(e,t,n=!1){let r=t.projectPosition(e);if(n&&t instanceof Bh){let[n,i,a=0]=e;r[2]=a*t.getDistanceScales([n,i]).unitsPerMeter[2]}return r}function Uh(e){let{viewport:t,modelMatrix:n,coordinateOrigin:r}=e,{coordinateSystem:i,fromCoordinateSystem:a,fromCoordinateOrigin:o}=e;return i===`default`&&(i=t.isGeospatial?`lnglat`:`cartesian`),a===void 0?a=i:a===`default`&&(a=t.isGeospatial?`lnglat`:`cartesian`),o===void 0&&(o=r),{viewport:t,coordinateSystem:i,coordinateOrigin:r,modelMatrix:n,fromCoordinateSystem:a,fromCoordinateOrigin:o}}function Wh(e,{viewport:t,modelMatrix:n,coordinateSystem:r,coordinateOrigin:i,offsetMode:a}){let[o,s,c=0]=e;switch(n&&([o,s,c]=Qu([],[o,s,c,1],n)),r){case`default`:return Wh(e,{viewport:t,modelMatrix:n,coordinateSystem:t.isGeospatial?`lnglat`:`cartesian`,coordinateOrigin:i,offsetMode:a});case`lnglat`:return Hh([o,s,c],t,a);case`lnglat-offsets`:return Hh([o+i[0],s+i[1],c+(i[2]||0)],t,a);case`meter-offsets`:return Hh(Dm(i,[o,s,c]),t,a);case`cartesian`:return t.isGeospatial?[o+i[0],s+i[1],c+i[2]]:t.projectPosition([o,s,c]);default:throw Error(`Invalid coordinateSystem: ${r}`)}}function Gh(e,t){let{viewport:n,coordinateSystem:r,coordinateOrigin:i,modelMatrix:a,fromCoordinateSystem:o,fromCoordinateOrigin:s}=Uh(t),{autoOffset:c=!0}=t,{geospatialOrigin:l=Vh,shaderCoordinateOrigin:u=Vh,offsetMode:d=!1}=c?Zp(n,r,i):{},f=Wh(e,{viewport:n,modelMatrix:a,coordinateSystem:o,coordinateOrigin:s,offsetMode:d});return d&&nu(f,f,n.projectPosition(l||u)),f}var Kh=1,qh=1,Jh=class{time=0;channels=new Map;animations=new Map;playing=!1;lastEngineTime=-1;constructor(){}addChannel(e){let{delay:t=0,duration:n=1/0,rate:r=1,repeat:i=1}=e,a=Kh++,o={time:0,delay:t,duration:n,rate:r,repeat:i};return this._setChannelTime(o,this.time),this.channels.set(a,o),a}removeChannel(e){this.channels.delete(e);for(let[t,n]of this.animations)n.channel===e&&this.detachAnimation(t)}isFinished(e){let t=this.channels.get(e);return t===void 0?!1:this.time>=t.delay+t.duration*t.repeat}getTime(e){if(e===void 0)return this.time;let t=this.channels.get(e);return t===void 0?-1:t.time}setTime(e){this.time=Math.max(0,e);let t=this.channels.values();for(let e of t)this._setChannelTime(e,this.time);let n=this.animations.values();for(let e of n){let{animation:t,channel:n}=e;t.setTime(this.getTime(n))}}play(){this.playing=!0}pause(){this.playing=!1,this.lastEngineTime=-1}reset(){this.setTime(0)}attachAnimation(e,t){let n=qh++;return this.animations.set(n,{animation:e,channel:t}),e.setTime(this.getTime(t)),n}detachAnimation(e){this.animations.delete(e)}update(e){this.playing&&(this.lastEngineTime===-1&&(this.lastEngineTime=e),this.setTime(this.time+(e-this.lastEngineTime)),this.lastEngineTime=e)}_setChannelTime(e,t){let n=t-e.delay;n>=e.duration*e.repeat?e.time=e.duration*e.rate:(e.time=Math.max(0,n)%e.duration,e.time*=e.rate)}};function Yh(e){let t=typeof window<`u`?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:null;return t?t.call(window,e):setTimeout(()=>e(typeof performance<`u`?performance.now():Date.now()),1e3/60)}function Xh(e){let t=typeof window<`u`?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame:null;if(t){t.call(window,e);return}clearTimeout(e)}var Zh=0,Qh=`Animation Loop`,$h=class e{static defaultAnimationLoopProps={device:null,onAddHTML:()=>``,onInitialize:async()=>null,onRender:()=>{},onFinalize:()=>{},onError:e=>console.error(e),stats:void 0,autoResizeViewport:!1};device=null;canvas=null;props;animationProps=null;timeline=null;stats;sharedStats;cpuTime;gpuTime;frameRate;display;_needsRedraw=`initialized`;_initialized=!1;_running=!1;_animationFrameId=null;_nextFramePromise=null;_resolveNextFrame=null;_cpuStartTime=0;_error=null;_lastFrameTime=0;constructor(t){if(this.props={...e.defaultAnimationLoopProps,...t},t=this.props,!t.device)throw Error(`No device provided`);this.stats=t.stats||new ie({id:`animation-loop-${Zh++}`}),this.sharedStats=rt.stats.get(Qh),this.frameRate=this.stats.get(`Frame Rate`),this.frameRate.setSampleSize(1),this.cpuTime=this.stats.get(`CPU Time`),this.gpuTime=this.stats.get(`GPU Time`),this.setProps({autoResizeViewport:t.autoResizeViewport}),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onMouseleave=this._onMouseleave.bind(this)}destroy(){this.stop(),this._setDisplay(null),this.device?._disableDebugGPUTime()}delete(){this.destroy()}reportError(e){this.props.onError(e),this._error=e}setNeedsRedraw(e){return this._needsRedraw=this._needsRedraw||e,this}needsRedraw(){let e=this._needsRedraw;return this._needsRedraw=!1,e}setProps(e){return`autoResizeViewport`in e&&(this.props.autoResizeViewport=e.autoResizeViewport||!1),this}async start(){if(this._running)return this;this._running=!0;try{if(!this._initialized){if(this._initialized=!0,await this._initDevice(),this._initialize(),!this._running)return null;await this.props.onInitialize(this._getAnimationProps())}return this._running?(this._cancelAnimationFrame(),this._requestAnimationFrame(),this):null}catch(e){let t=e instanceof Error?e:Error(`Unknown error`);throw this.props.onError(t),t}}stop(){return this._running&&(this.animationProps&&!this._error&&this.props.onFinalize(this.animationProps),this._cancelAnimationFrame(),this._nextFramePromise=null,this._resolveNextFrame=null,this._running=!1,this._lastFrameTime=0),this}redraw(e){return this.device?.isLost||this._error?this:(this._beginFrameTimers(e),this._setupFrame(),this._updateAnimationProps(),this._renderFrame(this._getAnimationProps()),this._clearNeedsRedraw(),this._resolveNextFrame&&=(this._resolveNextFrame(this),this._nextFramePromise=null,null),this._endFrameTimers(),this)}attachTimeline(e){return this.timeline=e,this.timeline}detachTimeline(){this.timeline=null}waitForRender(){return this.setNeedsRedraw(`waitForRender`),this._nextFramePromise||=new Promise(e=>{this._resolveNextFrame=e}),this._nextFramePromise}async toDataURL(){if(this.setNeedsRedraw(`toDataURL`),await this.waitForRender(),this.canvas instanceof HTMLCanvasElement)return this.canvas.toDataURL();throw Error(`OffscreenCanvas`)}_initialize(){this._startEventHandling(),this._initializeAnimationProps(),this._updateAnimationProps(),this._resizeViewport(),this.device?._enableDebugGPUTime()}_setDisplay(e){this.display&&(this.display.destroy(),this.display.animationLoop=null),e&&(e.animationLoop=this),this.display=e}_requestAnimationFrame(){this._running&&(this._animationFrameId=Yh(this._animationFrame.bind(this)))}_cancelAnimationFrame(){this._animationFrameId!==null&&(Xh(this._animationFrameId),this._animationFrameId=null)}_animationFrame(e){this._running&&(this.redraw(e),this._requestAnimationFrame())}_renderFrame(e){if(this.display){this.display._renderFrame(e);return}this.props.onRender(this._getAnimationProps()),this.device?.submit()}_clearNeedsRedraw(){this._needsRedraw=!1}_setupFrame(){this._resizeViewport()}_initializeAnimationProps(){let e=this.device?.getDefaultCanvasContext();if(!this.device||!e)throw Error(`loop`);let t=e?.canvas,n=e.props.useDevicePixels;this.animationProps={animationLoop:this,device:this.device,canvasContext:e,canvas:t,useDevicePixels:n,timeline:this.timeline,needsRedraw:!1,width:1,height:1,aspect:1,time:0,startTime:Date.now(),engineTime:0,tick:0,tock:0,_mousePosition:null}}_getAnimationProps(){if(!this.animationProps)throw Error(`animationProps`);return this.animationProps}_updateAnimationProps(){if(!this.animationProps)return;let{width:e,height:t,aspect:n}=this._getSizeAndAspect();(e!==this.animationProps.width||t!==this.animationProps.height)&&this.setNeedsRedraw(`drawing buffer resized`),n!==this.animationProps.aspect&&this.setNeedsRedraw(`drawing buffer aspect changed`),this.animationProps.width=e,this.animationProps.height=t,this.animationProps.aspect=n,this.animationProps.needsRedraw=this._needsRedraw,this.animationProps.engineTime=Date.now()-this.animationProps.startTime,this.timeline&&this.timeline.update(this.animationProps.engineTime),this.animationProps.tick=Math.floor(this.animationProps.time/1e3*60),this.animationProps.tock++,this.animationProps.time=this.timeline?this.timeline.getTime():this.animationProps.engineTime}async _initDevice(){if(this.device=await this.props.device,!this.device)throw Error(`No device provided`);this.canvas=this.device.getDefaultCanvasContext().canvas||null}_createInfoDiv(){if(this.canvas&&this.props.onAddHTML){let e=document.createElement(`div`);document.body.appendChild(e),e.style.position=`relative`;let t=document.createElement(`div`);t.style.position=`absolute`,t.style.left=`10px`,t.style.bottom=`10px`,t.style.width=`300px`,t.style.background=`white`,this.canvas instanceof HTMLCanvasElement&&e.appendChild(this.canvas),e.appendChild(t);let n=this.props.onAddHTML(t);n&&(t.innerHTML=n)}}_getSizeAndAspect(){if(!this.device)return{width:1,height:1,aspect:1};let[e,t]=this.device.getDefaultCanvasContext().getDrawingBufferSize();return{width:e,height:t,aspect:e>0&&t>0?e/t:1}}_resizeViewport(){this.props.autoResizeViewport&&this.device.gl&&this.device.gl.viewport(0,0,this.device.gl.drawingBufferWidth,this.device.gl.drawingBufferHeight)}_beginFrameTimers(e){let t=e??(typeof performance<`u`?performance.now():Date.now());if(this._lastFrameTime){let e=t-this._lastFrameTime;e>0&&this.frameRate.addTime(e)}this._lastFrameTime=t,this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeStart()}_endFrameTimers(){this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeEnd(),this._updateSharedStats()}_consumeEncodedGpuTime(){if(!this.device)return;let e=this.device.commandEncoder._gpuTimeMs;e!==void 0&&(this.gpuTime.addTime(e),this.device.commandEncoder._gpuTimeMs=void 0)}_updateSharedStats(){if(this.stats!==this.sharedStats){for(let e of Object.keys(this.sharedStats.stats))this.stats.stats[e]||delete this.sharedStats.stats[e];this.stats.forEach(e=>{let t=this.sharedStats.get(e.name,e.type);t.sampleSize=e.sampleSize,t.time=e.time,t.count=e.count,t.samples=e.samples,t.lastTiming=e.lastTiming,t.lastSampleTime=e.lastSampleTime,t.lastSampleCount=e.lastSampleCount,t._count=e._count,t._time=e._time,t._samples=e._samples,t._startTime=e._startTime,t._timerPending=e._timerPending})}}_startEventHandling(){this.canvas&&(this.canvas.addEventListener(`mousemove`,this._onMousemove.bind(this)),this.canvas.addEventListener(`mouseleave`,this._onMouseleave.bind(this)))}_onMousemove(e){e instanceof MouseEvent&&(this._getAnimationProps()._mousePosition=[e.offsetX,e.offsetY])}_onMouseleave(e){this._getAnimationProps()._mousePosition=null}},eg={};function tg(e=`id`){return eg[e]=eg[e]||1,`${e}-${eg[e]++}`}var ng=class{id;userData={};topology;bufferLayout=[];vertexCount;indices;attributes;constructor(e){if(this.id=e.id||tg(`geometry`),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&N.INDEX))throw Error(`Index buffer must have INDEX usage`)}destroy(){this.indices?.destroy();for(let e of Object.values(this.attributes))e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}};function rg(e,t){if(t instanceof ng)return t;let n=ig(e,t),{attributes:r,bufferLayout:i}=ag(e,t);return new ng({topology:t.topology||`triangle-list`,bufferLayout:i,vertexCount:t.vertexCount,indices:n,attributes:r})}function ig(e,t){if(!t.indices)return;let n=t.indices.value;return e.createBuffer({usage:N.INDEX,data:n})}function ag(e,t){let n=[],r={};for(let[i,a]of Object.entries(t.attributes)){let t=i;switch(i){case`POSITION`:t=`positions`;break;case`NORMAL`:t=`normals`;break;case`TEXCOORD_0`:t=`texCoords`;break;case`TEXCOORD_1`:t=`texCoords1`;break;case`COLOR_0`:t=`colors`;break}if(a){r[t]=e.createBuffer({data:a.value,id:`${i}-buffer`});let{value:o,size:s,normalized:c}=a;if(s===void 0)throw Error(`Attribute ${i} is missing a size`);n.push({name:t,format:Oe.getVertexFormatFromAttribute(o,s,c)})}}return{attributes:r,bufferLayout:n,vertexCount:t._calculateVertexCount(t.attributes,t.indices)}}function og(e,t){let n={},r=`Values`;if(e.attributes.length===0&&!e.varyings?.length)return{"No attributes or varyings":{[r]:`N/A`}};for(let t of e.attributes)if(t){let e=`${t.location} ${t.name}: ${t.type}`;n[`in ${e}`]={[r]:t.stepMode||`vertex`}}for(let t of e.varyings||[]){let e=`${t.location} ${t.name}`;n[`out ${e}`]={[r]:JSON.stringify(t)}}return n}var sg=`__debugFramebufferState`,cg=8;function lg(e,t,n){if(e.device.type!==`webgl`)return;let r=fg(e.device);if(!r.flushing){if(mg(e)){ug(e,n,r);return}t&&pg(t)&&t.handle!==null&&(r.queuedFramebuffers.includes(t)||r.queuedFramebuffers.push(t))}}function ug(e,t,n){if(n.queuedFramebuffers.length===0)return;let{gl:r}=e.device,i=r.getParameter(36010),a=r.getParameter(36006),[o,s]=e.device.getDefaultCanvasContext().getDrawingBufferSize(),c=hg(t.top,cg),l=hg(t.left,cg);n.flushing=!0;try{for(let e of n.queuedFramebuffers){let[n,i,a,u,d]=dg({framebuffer:e,targetWidth:o,targetHeight:s,topPx:c,leftPx:l,minimap:t.minimap});r.bindFramebuffer(36008,e.handle),r.bindFramebuffer(36009,null),r.blitFramebuffer(0,0,e.width,e.height,n,i,a,u,16384,9728),c+=d+cg}}finally{r.bindFramebuffer(36008,i),r.bindFramebuffer(36009,a),n.flushing=!1}}function dg(e){let{framebuffer:t,targetWidth:n,targetHeight:r,topPx:i,leftPx:a,minimap:o}=e,s=o?Math.max(Math.floor(n/4),1):n,c=o?Math.max(Math.floor(r/4),1):r,l=Math.min(s/t.width,c/t.height),u=Math.max(Math.floor(t.width*l),1),d=Math.max(Math.floor(t.height*l),1),f=a,p=Math.max(r-i-d,0);return[f,p,f+u,p+d,d]}function fg(e){return e.userData[sg]||={flushing:!1,queuedFramebuffers:[]},e.userData[sg]}function pg(e){return`colorAttachments`in e}function mg(e){let t=e.props.framebuffer;return!t||t.handle===null}function hg(e,t){if(!e)return t;let n=Number.parseInt(e,10);return Number.isFinite(n)?n:t}function gg(e,t,n){if(e===t)return!0;if(!n||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!gg(e[r],t[r],n-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e==`object`&&typeof t==`object`){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let i of r)if(!t.hasOwnProperty(i)||!gg(e[i],t[i],n-1))return!1;return!0}return!1}var _g=class{bufferLayouts;constructor(e){this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(t=>t.name===e)||null}getAttributeNamesForBuffer(e){return e.attributes?e.attributes?.map(e=>e.attribute):[e.name]}mergeBufferLayouts(e,t){let n=[...e];for(let e of t){let t=n.findIndex(t=>t.name===e.name);t<0?n.push(e):n[t]=e}return n}getBufferIndex(e){let t=this.bufferLayouts.findIndex(t=>t.name===e);return t===-1&&P.warn(`BufferLayout: Missing buffer for "${e}".`)(),t}};function vg(e,t){let n=1/0;for(let r of e){let e=t[r];e!==void 0&&(n=Math.min(n,e))}return n}function yg(e,t){let n=Object.fromEntries(e.attributes.map(e=>[e.name,e.location])),r=t.slice();return r.sort((e,t)=>{let r=e.attributes?e.attributes.map(e=>e.attribute):[e.name],i=t.attributes?t.attributes.map(e=>e.attribute):[t.name];return vg(r,n)-vg(i,n)}),r}function bg(e,t){if(!e||!t.some(e=>e.bindingLayout?.length))return e;let n={...e,bindings:e.bindings.map(e=>({...e}))};`attributes`in(e||{})&&(n.attributes=e?.attributes||[]);for(let e of t)for(let t of e.bindingLayout||[])for(let e of Sg(t.name)){let r=n.bindings.find(t=>t.name===e);r?.group===0&&(r.group=t.group)}return n}function xg(e){return!!(e.uniformTypes&&!Cg(e.uniformTypes))}function Sg(e){let t=new Set([e,`${e}Uniforms`]);return e.endsWith(`Uniforms`)||t.add(`${e}Sampler`),[...t]}function Cg(e){for(let t in e)return!1;return!0}function wg(e){return bo(e)||typeof e==`number`||typeof e==`boolean`}function Tg(e,t={}){let n={bindings:{},uniforms:{}};return Object.keys(e).forEach(r=>{let i=e[r];Object.prototype.hasOwnProperty.call(t,r)||wg(i)?n.uniforms[r]=i:n.bindings[r]=i}),n}var Eg=class{options={disableWarnings:!1};modules;moduleUniforms;moduleBindings;constructor(e,t){Object.assign(this.options,t);let n=js(Object.values(e).filter(Mg));for(let t of n)e[t.name]=t;P.log(1,`Creating ShaderInputs with modules`,Object.keys(e))(),this.modules=e,this.moduleUniforms={},this.moduleBindings={};for(let[t,n]of Object.entries(e))n&&(this._addModule(n),n.name&&t!==n.name&&!this.options.disableWarnings&&P.warn(`Module name: ${t} vs ${n.name}`)())}destroy(){}setProps(e){for(let t of Object.keys(e)){let n=t,r=e[n]||{},i=this.modules[n];if(!i)this.options.disableWarnings||P.warn(`Module ${t} not found`)();else{let e=this.moduleUniforms[n],t=this.moduleBindings[n],{uniforms:a,bindings:o}=Tg(i.getUniforms?.(r,e)||r,i.uniformTypes);this.moduleUniforms[n]=Dg(e,a,i.uniformTypes),this.moduleBindings[n]={...t,...o}}}}getModules(){return Object.values(this.modules)}getUniformValues(){return this.moduleUniforms}getBindingValues(){let e={};for(let t of Object.values(this.moduleBindings))Object.assign(e,t);return e}getDebugTable(){let e={};for(let[t,n]of Object.entries(this.moduleUniforms))for(let[r,i]of Object.entries(n))e[`${t}.${r}`]={type:this.modules[t].uniformTypes?.[r],value:String(i)};return e}_addModule(e){let t=e.name;this.moduleUniforms[t]=Dg({},e.defaultUniforms||{},e.uniformTypes),this.moduleBindings[t]={}}};function Dg(e={},t={},n={}){let r={...e};for(let[i,a]of Object.entries(t))a!==void 0&&(r[i]=Og(e[i],a,n[i]));return r}function Og(e,t,n){if(!n||typeof n==`string`)return kg(t);if(Array.isArray(n)){if(Ag(t)||!Array.isArray(t))return kg(t);let r=Array.isArray(e)&&!Ag(e)?[...e]:[],i=r.slice();for(let e=0;e<t.length;e++){let a=t[e];a!==void 0&&(i[e]=Og(r[e],a,n[0]))}return i}if(!jg(t))return kg(t);let r=n,i=jg(e)?e:{},a={...i};for(let[e,n]of Object.entries(t))n!==void 0&&(a[e]=Og(i[e],n,r[e]));return a}function kg(e){return ArrayBuffer.isView(e)?Array.prototype.slice.call(e):Array.isArray(e)?Ag(e)?e.slice():e.map(e=>e===void 0?void 0:kg(e)):jg(e)?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,t===void 0?void 0:kg(t)])):e}function Ag(e){return ArrayBuffer.isView(e)||Array.isArray(e)&&(e.length===0||typeof e[0]==`number`)}function jg(e){return!!e&&typeof e==`object`&&!Array.isArray(e)&&!ArrayBuffer.isView(e)}function Mg(e){return!!e?.dependencies}var Ng={"+X":0,"-X":1,"+Y":2,"-Y":3,"+Z":4,"-Z":5};function Pg(e){return e?Array.isArray(e)?e[0]??null:e:null}function Fg(e){let{dimension:t,data:n}=e;if(!n)return null;switch(t){case`1d`:{let e=Pg(n);if(!e)return null;let{width:t}=Ig(e);return{width:t,height:1}}case`2d`:{let e=Pg(n);return e?Ig(e):null}case`3d`:case`2d-array`:{if(!Array.isArray(n)||n.length===0)return null;let e=Pg(n[0]);return e?Ig(e):null}case`cube`:{let e=Object.keys(n)[0]??null;if(!e)return null;let t=n[e],r=Pg(t);return r?Ig(r):null}case`cube-array`:{if(!Array.isArray(n)||n.length===0)return null;let e=n[0],t=Object.keys(e)[0]??null;if(!t)return null;let r=Pg(e[t]);return r?Ig(r):null}default:return null}}function Ig(e){if(de(e))return ke(e);if(typeof e==`object`&&`width`in e&&`height`in e)return{width:e.width,height:e.height};throw Error(`Unsupported mip-level data`)}function Lg(e){return typeof e==`object`&&!!e&&`data`in e&&`width`in e&&`height`in e}function Rg(e){return ArrayBuffer.isView(e)}function zg(e){let{textureFormat:t,format:n}=e;if(t&&n&&t!==n)throw Error(`Conflicting texture formats "${t}" and "${n}" provided for the same mip level`);return t??n}function Bg(e){let t=Ng[e];if(t===void 0)throw Error(`Invalid cube face: ${e}`);return t}function Vg(e,t){return 6*e+Bg(t)}function Hg(e){throw Error(`setTexture1DData not supported in WebGL.`)}function Ug(e){return Array.isArray(e)?e:[e]}function Wg(e,t,n,r){let i=Ug(t),a=e,o=[];for(let e=0;e<i.length;e++){let t=i[e];if(de(t))o.push({type:`external-image`,image:t,z:a,mipLevel:e});else if(Lg(t))o.push({type:`texture-data`,data:t,textureFormat:zg(t),z:a,mipLevel:e});else if(Rg(t)&&n)o.push({type:`texture-data`,data:{data:t,width:Math.max(1,n.width>>e),height:Math.max(1,n.height>>e),...r?{format:r}:{}},textureFormat:r,z:a,mipLevel:e});else throw Error(`Unsupported 2D mip-level payload`)}return o}function Gg(e){let t=[];for(let n=0;n<e.length;n++)t.push(...Wg(n,e[n]));return t}function Kg(e){let t=[];for(let n=0;n<e.length;n++)t.push(...Wg(n,e[n]));return t}function qg(e){let t=[];for(let[n,r]of Object.entries(e)){let e=Bg(n);t.push(...Wg(e,r))}return t}function Jg(e){let t=[];return e.forEach((e,n)=>{for(let[r,i]of Object.entries(e)){let e=Vg(n,r);t.push(...Wg(e,i))}}),t}var Yg=class e{device;id;props;_texture=null;_sampler=null;_view=null;ready;isReady=!1;destroyed=!1;resolveReady=()=>{};rejectReady=()=>{};get texture(){if(!this._texture)throw Error(`Texture not initialized yet`);return this._texture}get sampler(){if(!this._sampler)throw Error(`Sampler not initialized yet`);return this._sampler}get view(){if(!this._view)throw Error(`View not initialized yet`);return this._view}get[Symbol.toStringTag](){return`DynamicTexture`}toString(){let e=this._texture?.width??this.props.width??`?`,t=this._texture?.height??this.props.height??`?`;return`DynamicTexture:"${this.id}":${e}x${t}px:(${this.isReady?`ready`:`loading...`})`}constructor(t,n){this.device=t;let r=tg(`dynamic-texture`),i=n;this.props={...e.defaultProps,id:r,...n,data:null},this.id=this.props.id,this.ready=new Promise((e,t)=>{this.resolveReady=e,this.rejectReady=t}),this.initAsync(i)}async initAsync(e){try{let t=await this._loadAllData(e);this._checkNotDestroyed();let n=t.data?Xg({...t,width:e.width,height:e.height,format:e.format}):[],r=`format`in e&&e.format!==void 0,i=`usage`in e&&e.usage!==void 0,a=this.props.width&&this.props.height?{width:this.props.width,height:this.props.height}:Fg(t)||{width:this.props.width||1,height:this.props.height||1};if(!a||a.width<=0||a.height<=0)throw Error(`${this} size could not be determined or was zero`);let o=Zg(this.device,n,a,{format:r?e.format:void 0}),s=o.format??this.props.format,c={...this.props,...a,format:s,mipLevels:1,data:void 0};this.device.isTextureFormatCompressed(s)&&!i&&(c.usage=F.SAMPLE|F.COPY_DST);let l=this.props.mipmaps&&!o.hasExplicitMipChain&&!this.device.isTextureFormatCompressed(s);if(this.device.type===`webgpu`&&l){let e=this.props.dimension===`3d`?F.SAMPLE|F.STORAGE|F.COPY_DST|F.COPY_SRC:F.SAMPLE|F.RENDER|F.COPY_DST|F.COPY_SRC;c.usage|=e}let u=this.device.getMipLevelCount(c.width,c.height),d=o.hasExplicitMipChain?o.mipLevels:this.props.mipLevels===`auto`?u:Math.max(1,Math.min(u,this.props.mipLevels??1)),f={...c,mipLevels:d};this._texture=this.device.createTexture(f),this._sampler=this.texture.sampler,this._view=this.texture.view,o.subresources.length&&this._setTextureSubresources(o.subresources),this.props.mipmaps&&!o.hasExplicitMipChain&&!l&&P.warn(`${this} skipping auto-generated mipmaps for compressed texture format`)(),l&&this.generateMipmaps(),this.isReady=!0,this.resolveReady(this.texture),P.info(0,`${this} created`)()}catch(e){let t=e instanceof Error?e:Error(String(e));this.rejectReady(t)}}destroy(){this._texture&&(this._texture.destroy(),this._texture=null,this._sampler=null,this._view=null),this.destroyed=!0}generateMipmaps(){this.device.type===`webgl`?this.texture.generateMipmapsWebGL():this.device.type===`webgpu`?this.device.generateMipmapsWebGPU(this.texture):P.warn(`${this} mipmaps not supported on ${this.device.type}`)}setSampler(e={}){this._checkReady();let t=e instanceof le?e:this.device.createSampler(e);this.texture.setSampler(t),this._sampler=t}async readBuffer(e={}){this.isReady||await this.ready;let t=e.width??this.texture.width,n=e.height??this.texture.height,r=e.depthOrArrayLayers??this.texture.depth,i=this.texture.computeMemoryLayout({width:t,height:n,depthOrArrayLayers:r}),a=this.device.createBuffer({byteLength:i.byteLength,usage:N.COPY_DST|N.MAP_READ});this.texture.readBuffer({...e,width:t,height:n,depthOrArrayLayers:r},a);let o=this.device.createFence();return await o.signaled,o.destroy(),a}async readAsync(e={}){this.isReady||await this.ready;let t=e.width??this.texture.width,n=e.height??this.texture.height,r=e.depthOrArrayLayers??this.texture.depth,i=this.texture.computeMemoryLayout({width:t,height:n,depthOrArrayLayers:r}),a=await this.readBuffer(e),o=await a.readAsync(0,i.byteLength);return a.destroy(),o.buffer}resize(e){if(this._checkReady(),e.width===this.texture.width&&e.height===this.texture.height)return!1;let t=this.texture;return this._texture=t.clone(e),this._sampler=this.texture.sampler,this._view=this.texture.view,t.destroy(),P.info(`${this} resized`),!0}getCubeFaceIndex(e){let t=Ng[e];if(t===void 0)throw Error(`Invalid cube face: ${e}`);return t}getCubeArrayFaceIndex(e,t){return 6*e+this.getCubeFaceIndex(t)}setTexture1DData(e){if(this._checkReady(),this.texture.props.dimension!==`1d`)throw Error(`${this} is not 1d`);let t=Hg(e);this._setTextureSubresources(t)}setTexture2DData(e,t=0){if(this._checkReady(),this.texture.props.dimension!==`2d`)throw Error(`${this} is not 2d`);let n=Wg(t,e);this._setTextureSubresources(n)}setTexture3DData(e){if(this.texture.props.dimension!==`3d`)throw Error(`${this} is not 3d`);let t=Gg(e);this._setTextureSubresources(t)}setTextureArrayData(e){if(this.texture.props.dimension!==`2d-array`)throw Error(`${this} is not 2d-array`);let t=Kg(e);this._setTextureSubresources(t)}setTextureCubeData(e){if(this.texture.props.dimension!==`cube`)throw Error(`${this} is not cube`);let t=qg(e);this._setTextureSubresources(t)}setTextureCubeArrayData(e){if(this.texture.props.dimension!==`cube-array`)throw Error(`${this} is not cube-array`);let t=Jg(e);this._setTextureSubresources(t)}_setTextureSubresources(e){for(let t of e){let{z:e,mipLevel:n}=t;switch(t.type){case`external-image`:let{image:r,flipY:i}=t;this.texture.copyExternalImage({image:r,z:e,mipLevel:n,flipY:i});break;case`texture-data`:let{data:a,textureFormat:o}=t;if(o&&o!==this.texture.format)throw Error(`${this} mip level ${n} uses format "${o}" but texture format is "${this.texture.format}"`);this.texture.writeData(a.data,{x:0,y:0,z:e,width:a.width,height:a.height,depthOrArrayLayers:1,mipLevel:n});break;default:throw Error(`Unsupported 2D mip-level payload`)}}}async _loadAllData(e){let t=await t_(e.data);return{dimension:e.dimension??`2d`,data:t??null}}_checkNotDestroyed(){this.destroyed&&P.warn(`${this} already destroyed`)}_checkReady(){this.isReady||P.warn(`${this} Cannot perform this operation before ready`)}static defaultProps={...F.defaultProps,dimension:`2d`,data:null,mipmaps:!1}};function Xg(e){if(!e.data)return[];let t=e.width&&e.height?{width:e.width,height:e.height}:void 0,n=`format`in e?e.format:void 0;switch(e.dimension){case`1d`:return Hg(e.data);case`2d`:return Wg(0,e.data,t,n);case`3d`:return Gg(e.data);case`2d-array`:return Kg(e.data);case`cube`:return qg(e.data);case`cube-array`:return Jg(e.data);default:throw Error(`Unhandled dimension ${e.dimension}`)}}function Zg(e,t,n,r){if(t.length===0)return{subresources:t,mipLevels:1,format:r.format,hasExplicitMipChain:!1};let i=new Map;for(let e of t){let t=i.get(e.z)??[];t.push(e),i.set(e.z,t)}let a=t.some(e=>e.mipLevel>0),o=r.format,s=1/0,c=[];for(let[t,r]of i){let i=[...r].sort((e,t)=>e.mipLevel-t.mipLevel),a=i[0];if(!a||a.mipLevel!==0)throw Error(`DynamicTexture: slice ${t} is missing mip level 0`);let l=$g(e,a);if(l.width!==n.width||l.height!==n.height)throw Error(`DynamicTexture: slice ${t} base level dimensions ${l.width}x${l.height} do not match expected ${n.width}x${n.height}`);let u=Qg(a);if(u){if(o&&o!==u)throw Error(`DynamicTexture: slice ${t} base level format "${u}" does not match texture format "${o}"`);o=u}let d=o&&e.isTextureFormatCompressed(o)?e_(e,l.width,l.height,o):e.getMipLevelCount(l.width,l.height),f=0;for(let t=0;t<i.length;t++){let n=i[t];if(!n||n.mipLevel!==t||t>=d)break;let r=$g(e,n),a=Math.max(1,l.width>>t),s=Math.max(1,l.height>>t);if(r.width!==a||r.height!==s)break;let u=Qg(n);if(u&&(o||=u,u!==o))break;f++,c.push(n)}s=Math.min(s,f)}let l=Number.isFinite(s)?Math.max(1,s):1;return{subresources:c.filter(e=>e.mipLevel<l),mipLevels:l,format:o,hasExplicitMipChain:a}}function Qg(e){if(e.type===`texture-data`)return e.textureFormat??zg(e.data)}function $g(e,t){switch(t.type){case`external-image`:return e.getExternalImageSize(t.image);case`texture-data`:return{width:t.data.width,height:t.data.height};default:throw Error(`Unsupported texture subresource`)}}function e_(e,t,n,r){let{blockWidth:i=1,blockHeight:a=1}=e.getTextureFormatInfo(r),o=1;for(let e=1;;e++){let r=Math.max(1,t>>e),s=Math.max(1,n>>e);if(r<i||s<a)break;o++}return o}async function t_(e){if(e=await e,Array.isArray(e))return await Promise.all(e.map(t_));if(e&&typeof e==`object`&&e.constructor===Object){let t=e,n=await Promise.all(Object.values(t).map(t_)),r=Object.keys(t),i={};for(let e=0;e<r.length;e++)i[r[e]]=n[e];return i}return e}var n_=2,r_=1e4,i_=`render pipeline initialization failed`,a_=class e{static defaultProps={...xe.defaultProps,source:void 0,vs:null,fs:null,id:`unnamed`,handle:void 0,userData:{},defines:{},modules:[],geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:cl.getDefaultShaderAssembler(),debugShaders:void 0,disableWarnings:void 0};device;id;source;vs;fs;pipelineFactory;shaderFactory;userData={};parameters;topology;bufferLayout;isInstanced=void 0;instanceCount=0;vertexCount;indexBuffer=null;bufferAttributes={};constantAttributes={};bindings={};vertexArray;transformFeedback=null;pipeline;shaderInputs;material=null;_uniformStore;_attributeInfos={};_gpuGeometry=null;props;_pipelineNeedsUpdate=`newly created`;_needsRedraw=`initializing`;_destroyed=!1;_lastDrawTimestamp=-1;_bindingTable=[];get[Symbol.toStringTag](){return`Model`}toString(){return`Model(${this.id})`}constructor(t,n){this.props={...e.defaultProps,...n},n=this.props,this.id=n.id||tg(`model`),this.device=t,Object.assign(this.userData,n.userData),this.material=n.material||null;let r=Object.fromEntries(this.props.modules?.map(e=>[e.name,e])||[]),i=n.shaderInputs||new Eg(r,{disableWarnings:this.props.disableWarnings});this.setShaderInputs(i);let a=o_(t),o=(this.props.modules?.length>0?this.props.modules:this.shaderInputs?.getModules())||[];if(this.props.shaderLayout=bg(this.props.shaderLayout,o)||null,this.device.type===`webgpu`&&this.props.source){let{source:e,getUniforms:n,bindingTable:r}=this.props.shaderAssembler.assembleWGSLShader({platformInfo:a,...this.props,modules:o});this.source=e,this._getModuleUniforms=n,this._bindingTable=r;let i=t.getShaderLayout?.(this.source);this.props.shaderLayout=bg(this.props.shaderLayout||i||null,o)||null}else{let{vs:e,fs:t,getUniforms:n}=this.props.shaderAssembler.assembleGLSLShaderPair({platformInfo:a,...this.props,modules:o});this.vs=e,this.fs=t,this._getModuleUniforms=n,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,n.geometry&&this.setGeometry(n.geometry),this.pipelineFactory=n.pipelineFactory||ut.getDefaultPipelineFactory(this.device),this.shaderFactory=n.shaderFactory||dt.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=t.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),`isInstanced`in n&&(this.isInstanced=n.isInstanced),n.instanceCount&&this.setInstanceCount(n.instanceCount),n.vertexCount&&this.setVertexCount(n.vertexCount),n.indexBuffer&&this.setIndexBuffer(n.indexBuffer),n.attributes&&this.setAttributes(n.attributes),n.constantAttributes&&this.setConstantAttributes(n.constantAttributes),n.bindings&&this.setBindings(n.bindings),n.transformFeedback&&(this.transformFeedback=n.transformFeedback)}destroy(){this._destroyed||=(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw(`contents of bound textures or buffers updated`);let e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||=e}getBindingDebugTable(){return this._bindingTable}predraw(){this.updateShaderInputs(),this.pipeline=this._updatePipeline()}draw(e){let t=this._areBindingsLoading();if(t)return P.info(n_,`>>> DRAWING ABORTED ${this.id}: ${t} not loaded`)(),!1;try{e.pushDebugGroup(`${this}.predraw(${e})`),this.predraw()}finally{e.popDebugGroup()}let n,r=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),r=this.pipeline.isErrored,r)P.info(n_,`>>> DRAWING ABORTED ${this.id}: ${i_}`)(),n=!1;else{let t=this._getBindings(),r=this._getBindGroups(),{indexBuffer:i}=this.vertexArray,a=i?i.byteLength/(i.indexType===`uint32`?4:2):void 0;n=this.pipeline.draw({renderPass:e,vertexArray:this.vertexArray,isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.instanceCount,indexCount:a,transformFeedback:this.transformFeedback||void 0,bindings:t,bindGroups:r,_bindGroupCacheKeys:this._getBindGroupCacheKeys(),uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),n?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):r?this._needsRedraw=i_:this._needsRedraw=`waiting for resource initialization`,n}setGeometry(e){this._gpuGeometry?.destroy();let t=e&&rg(this.device,e);t&&(this.setTopology(t.topology||`triangle-list`),this.bufferLayout=new _g(this.bufferLayout).mergeBufferLayouts(t.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t)),this._gpuGeometry=t}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate(`topology`))}setBufferLayout(e){let t=new _g(this.bufferLayout);this.bufferLayout=this._gpuGeometry?t.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e,this._setPipelineNeedsUpdate(`bufferLayout`),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(e){gg(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate(`parameters`))}setInstanceCount(e){this.instanceCount=e,this.isInstanced===void 0&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw(`instanceCount`)}setVertexCount(e){this.vertexCount=e,this.setNeedsRedraw(`vertexCount`)}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new Pt(this.device,this.shaderInputs.modules);for(let[e,t]of Object.entries(this.shaderInputs.modules))if(xg(t)&&!this.material?.ownsModule(e)){let t=this._uniformStore.getManagedUniformBuffer(e);this.bindings[`${e}Uniforms`]=t}this.setNeedsRedraw(`shaderInputs`)}setMaterial(e){this.material=e,this.setNeedsRedraw(`material`)}updateShaderInputs(){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues()),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw(`shaderInputs`)}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw(`bindings`)}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw(`transformFeedback`)}setIndexBuffer(e){this.vertexArray.setIndexBuffer(e),this.setNeedsRedraw(`indexBuffer`)}setAttributes(e,t){let n=t?.disableWarnings??this.props.disableWarnings;e.indices&&P.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=yg(this.pipeline.shaderLayout,this.bufferLayout);let r=new _g(this.bufferLayout);for(let[t,i]of Object.entries(e)){let e=r.getBufferLayout(t);if(!e){n||P.warn(`Model(${this.id}): Missing layout for buffer "${t}".`)();continue}let a=r.getAttributeNamesForBuffer(e),o=!1;for(let e of a){let t=this._attributeInfos[e];if(t){let e=this.device.type===`webgpu`?r.getBufferIndex(t.bufferName):t.location;this.vertexArray.setBuffer(e,i),o=!0}}!o&&!n&&P.warn(`Model(${this.id}): Ignoring buffer "${i.id}" for unknown attribute "${t}"`)()}this.setNeedsRedraw(`attributes`)}setConstantAttributes(e,t){for(let[n,r]of Object.entries(e)){let e=this._attributeInfos[n];e?this.vertexArray.setConstantWebGL(e.location,r):(t?.disableWarnings??this.props.disableWarnings)||P.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${n}"`)()}this.setNeedsRedraw(`constants`)}_areBindingsLoading(){for(let e of Object.values(this.bindings))if(e instanceof Yg&&!e.isReady)return e.id;for(let e of Object.values(this.material?.bindings||{}))if(e instanceof Yg&&!e.isReady)return e.id;return!1}_getBindings(){let e={};for(let[t,n]of Object.entries(this.bindings))n instanceof Yg?n.isReady&&(e[t]=n.texture):e[t]=n;return e}_getBindGroups(){let e=this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]},t=e.bindings.length?me(e,this._getBindings()):{0:this._getBindings()};if(!this.material)return t;for(let[e,n]of Object.entries(this.material.getBindingsByGroup())){let r=Number(e);t[r]={...t[r]||{},...n}}return t}_getBindGroupCacheKeys(){let e=this.material?.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){let e=0;for(let t of Object.values(this.bindings))t instanceof he?e=Math.max(e,t.texture.updateTimestamp):t instanceof N||t instanceof F?e=Math.max(e,t.updateTimestamp):t instanceof Yg?e=t.texture?Math.max(e,t.texture.updateTimestamp):1/0:t instanceof le||(e=Math.max(e,t.buffer.updateTimestamp));return Math.max(e,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(e){let t={...e.attributes};for(let[e]of Object.entries(t))!this.pipeline.shaderLayout.attributes.find(t=>t.name===e)&&e!==`positions`&&delete t[e];this.vertexCount=e.vertexCount,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(t,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw(`geometry attributes`)}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||=e,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,t=null;this.pipeline&&(P.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,t=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let n=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:`vertex`,source:this.source||this.vs,debugShaders:this.props.debugShaders}),r=null;this.source?r=n:this.fs&&(r=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:`fragment`,source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,bindGroups:this._getBindGroups(),vs:n,fs:r}),this._attributeInfos=ve(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),t&&t!==e&&this.shaderFactory.release(t)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=P.level>3?0:r_;P.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,P.group(n_,`>>> DRAWING MODEL ${this.id}`,{collapsed:P.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=og(this.pipeline.shaderLayout,this.id);P.table(n_,e)();let t=this.shaderInputs.getDebugTable();P.table(n_,t)();let n=this._getAttributeDebugTable();P.table(n_,this._attributeInfos)(),P.table(n_,n)(),P.groupEnd(n_)(),this._logOpen=!1}}_drawCount=0;_logFramebuffer(e){let t=this.device.props.debugFramebuffers;if(this._drawCount++,!t)return;let n=e.props.framebuffer;lg(e,n,{id:n?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let e={};for(let[t,n]of Object.entries(this._attributeInfos)){let r=this.vertexArray.attributes[n.location];e[n.location]={name:t,type:n.shaderType,values:r?this._getBufferOrConstantValues(r,n.bufferDataType):`null`}}if(this.vertexArray.indexBuffer){let{indexBuffer:t}=this.vertexArray,n=t.indexType===`uint32`?new Uint32Array(t.debugData):new Uint16Array(t.debugData);e.indices={name:`indices`,type:t.indexType,values:n.toString()}}return e}_getBufferOrConstantValues(e,t){let n=se.getTypedArrayConstructor(t);return(e instanceof N?new n(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;let t={};for(let[n,r]of Object.entries(e))this.material.ownsBinding(n)||(t[n]=r);return t}};function o_(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,features:e.features}}var s_=class e{device;model;transformFeedback;static defaultProps={...a_.defaultProps,outputs:void 0,feedbackBuffers:void 0};static isSupported(e){return e?.info?.type===`webgl`}constructor(t,n=e.defaultProps){if(!e.isSupported(t))throw Error(`BufferTransform not yet implemented on WebGPU`);this.device=t,this.model=new a_(this.device,{id:n.id||`buffer-transform-model`,fs:n.fs||ul(),topology:n.topology||`point-list`,varyings:n.outputs||n.varyings,...n}),this.transformFeedback=this.device.createTransformFeedback({layout:this.model.pipeline.shaderLayout,buffers:n.feedbackBuffers}),this.model.setTransformFeedback(this.transformFeedback),Object.seal(this)}destroy(){this.model&&this.model.destroy()}delete(){this.destroy()}run(e){e?.inputBuffers&&this.model.setAttributes(e.inputBuffers),e?.outputBuffers&&this.transformFeedback.setBuffers(e.outputBuffers);let t=this.device.beginRenderPass(e);this.model.draw(t),t.end()}getBuffer(e){return this.transformFeedback.getBuffer(e)}readAsync(e){let t=this.getBuffer(e);if(!t)throw Error(`BufferTransform#getBuffer`);if(t instanceof N)return t.readAsync();let{buffer:n,byteOffset:r=0,byteLength:i=n.byteLength}=t;return n.readAsync(r,i)}},c_=class{id;topology;vertexCount;indices;attributes;userData={};constructor(e){let{attributes:t={},indices:n=null,vertexCount:r=null}=e;this.id=e.id||tg(`geometry`),this.topology=e.topology,n&&(this.indices=ArrayBuffer.isView(n)?{value:n,size:1}:n),this.attributes={};for(let[e,n]of Object.entries(t)){let t=ArrayBuffer.isView(n)?{value:n}:n;if(!ArrayBuffer.isView(t.value))throw Error(`${this._print(e)}: must be typed array or object with value as typed array`);if((e===`POSITION`||e===`positions`)&&!t.size&&(t.size=3),e===`indices`){if(this.indices)throw Error(`Multiple indices detected`);this.indices=t}else this.attributes[e]=t}this.indices&&this.indices.isIndexed!==void 0&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(e){return`Geometry ${this.id} attribute ${e}`}_setAttributes(e,t){return this}_calculateVertexCount(e,t){if(t)return t.value.length;let n=1/0;for(let t of Object.values(e)){let{value:e,size:r,constant:i}=t;!i&&e&&r!==void 0&&r>=1&&(n=Math.min(n,e.length/r))}return n}},l_={blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`zero`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`constant`,blendAlphaDstFactor:`zero`},u_=class extends mh{constructor(){super(...arguments),this._colorEncoderState=null}render(e){return`pickingFBO`in e?this._drawPickingBuffer(e):{decodePickingColor:null,stats:super._render(e)}}_drawPickingBuffer({layers:e,layerFilter:t,views:n,viewports:r,onViewportActive:i,pickingFBO:a,deviceRect:{x:o,y:s,width:c,height:l},cullRect:u,effects:d,pass:f=`picking`,pickZ:p,shaderModuleProps:m,clearColor:h}){this.pickZ=p;let g=this._resetColorEncoder(p),_=[o,s,c,l],v=super._render({target:a,layers:e,layerFilter:t,views:n,viewports:r,onViewportActive:i,cullRect:u,effects:d?.filter(e=>e.useInPicking),pass:f,isPicking:!0,shaderModuleProps:m,clearColor:h??[0,0,0,0],colorMask:15,scissorRect:_});return this._colorEncoderState=null,{decodePickingColor:g&&f_.bind(null,g),stats:v}}shouldDrawLayer(e){let{pickable:t,operation:n}=e.props;return t&&n.includes(`draw`)||n.includes(`terrain`)||n.includes(`mask`)}getShaderModuleProps(e,t,n){return{picking:{isActive:1,isAttribute:this.pickZ},lighting:{enabled:!1}}}getLayerParameters(e,t,n){let r={...e.props.parameters},{pickable:i,operation:a}=e.props;return this._colorEncoderState?i&&a.includes(`draw`)?(Object.assign(r,l_),r.blend=!0,this.device.type===`webgpu`?r.blendConstant=d_(this._colorEncoderState,e,n):r.blendColor=d_(this._colorEncoderState,e,n),a.includes(`terrain`)&&e.state?._hasPickingCover&&(r.blendAlphaSrcFactor=`one`)):a.includes(`terrain`)&&(r.blend=!1):r.blend=!1,r}_resetColorEncoder(e){return this._colorEncoderState=e?null:{byLayer:new Map,byAlpha:[]},this._colorEncoderState}};function d_(e,t,n){let{byLayer:r,byAlpha:i}=e,a,o=r.get(t);return o?(o.viewports.push(n),a=o.a):(a=r.size+1,a<=255?(o={a,layer:t,viewports:[n]},r.set(t,o),i[a]=o):(R.warn(`Too many pickable layers, only picking the first 255`)(),a=0)),[0,0,0,a/255]}function f_(e,t){let n=e.byAlpha[t[3]];return n&&{pickedLayer:n.layer,pickedViewports:n.viewports,pickedObjectIndex:n.layer.decodePickingColor(t)}}var p_={NO_STATE:`Awaiting state`,MATCHED:`Matched. State transferred from previous layer`,INITIALIZED:`Initialized`,AWAITING_GC:`Discarded. Awaiting garbage collection`,AWAITING_FINALIZATION:`No longer matched. Awaiting garbage collection`,FINALIZED:`Finalized! Awaiting garbage collection`},m_=Symbol.for(`component`),h_=Symbol.for(`propTypes`),g_=Symbol.for(`deprecatedProps`),__=Symbol.for(`asyncPropDefaults`),v_=Symbol.for(`asyncPropOriginal`),y_=Symbol.for(`asyncPropResolved`);function b_(e,t=()=>!0){return Array.isArray(e)?x_(e,t,[]):t(e)?[e]:[]}function x_(e,t,n){let r=-1;for(;++r<e.length;){let i=e[r];Array.isArray(i)?x_(i,t,n):t(i)&&n.push(i)}return n}function S_({target:e,source:t,start:n=0,count:r=1}){let i=t.length,a=r*i,o=0;for(let r=n;o<i;o++)e[r++]=t[o];for(;o<a;)o<a-o?(e.copyWithin(n+o,n,n+o),o*=2):(e.copyWithin(n+o,n,n+a-o),o=a);return e}var C_=class{constructor(e,t,n){this._loadCount=0,this._subscribers=new Set,this.id=e,this.context=n,this.setData(t)}subscribe(e){this._subscribers.add(e)}unsubscribe(e){this._subscribers.delete(e)}inUse(){return this._subscribers.size>0}delete(){}getData(){return this.isLoaded?this._error?Promise.reject(this._error):this._content:this._loader.then(()=>this.getData())}setData(e,t){if(e===this._data&&!t)return;this._data=e;let n=++this._loadCount,r=e;typeof e==`string`&&(r=xo(e)),r instanceof Promise?(this.isLoaded=!1,this._loader=r.then(e=>{this._loadCount===n&&(this.isLoaded=!0,this._error=void 0,this._content=e)}).catch(e=>{this._loadCount===n&&(this.isLoaded=!0,this._error=e||!0)})):(this.isLoaded=!0,this._error=void 0,this._content=e);for(let e of this._subscribers)e.onChange(this.getData())}},w_=class{constructor(e){this.protocol=e.protocol||`resource://`,this._context={device:e.device,gl:e.device?.gl,resourceManager:this},this._resources={},this._consumers={},this._pruneRequest=null}contains(e){return e.startsWith(this.protocol)?!0:e in this._resources}add({resourceId:e,data:t,forceUpdate:n=!1,persistent:r=!0}){let i=this._resources[e];i?i.setData(t,n):(i=new C_(e,t,this._context),this._resources[e]=i),i.persistent=r}remove(e){let t=this._resources[e];t&&(t.delete(),delete this._resources[e])}unsubscribe({consumerId:e}){let t=this._consumers[e];if(t){for(let e in t){let n=t[e],r=this._resources[n.resourceId];r&&r.unsubscribe(n)}delete this._consumers[e],this.prune()}}subscribe({resourceId:e,onChange:t,consumerId:n,requestId:r=`default`}){let{_resources:i,protocol:a}=this;e.startsWith(a)&&(e=e.replace(a,``),i[e]||this.add({resourceId:e,data:null,persistent:!1}));let o=i[e];if(this._track(n,r,o,t),o)return o.getData()}prune(){this._pruneRequest||=setTimeout(()=>this._prune(),0)}finalize(){for(let e in this._resources)this._resources[e].delete()}_track(e,t,n,r){let i=this._consumers,a=i[e]=i[e]||{},o=a[t],s=o&&o.resourceId&&this._resources[o.resourceId];s&&(s.unsubscribe(o),this.prune()),n&&(o?(o.onChange=r,o.resourceId=n.id):o={onChange:r,resourceId:n.id},a[t]=o,n.subscribe(o))}_prune(){this._pruneRequest=null;for(let e of Object.keys(this._resources)){let t=this._resources[e];!t.persistent&&!t.inUse()&&(t.delete(),delete this._resources[e])}}},T_=`layerManager.setLayers`,E_=`layerManager.activateViewport`,D_=class{constructor(e,t){this._lastRenderedLayers=[],this._needsRedraw=!1,this._needsUpdate=!1,this._nextLayers=null,this._debug=!1,this._defaultShaderModulesChanged=!1,this.activateViewport=e=>{z(E_,this,e),e&&(this.context.viewport=e)};let{deck:n,stats:r,viewport:i,timeline:a}=t||{};this.layers=[],this.resourceManager=new w_({device:e,protocol:`deck://`}),this.context={mousePosition:null,userData:{},layerManager:this,device:e,gl:e?.gl,deck:n,shaderAssembler:nh(e?.info?.shadingLanguage||`glsl`),defaultShaderModules:[df],renderPass:void 0,stats:r||new ie({id:`deck.gl`}),viewport:i||new zh({id:`DEFAULT-INITIAL-VIEWPORT`}),timeline:a||new Jh,resourceManager:this.resourceManager,onError:void 0},Object.seal(this)}finalize(){this.resourceManager.finalize();for(let e of this.layers)this._finalizeLayer(e)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);for(let n of this.layers){let r=n.getNeedsRedraw(e);t||=r}return t}needsUpdate(){return this._nextLayers&&this._nextLayers!==this._lastRenderedLayers?`layers changed`:this._defaultShaderModulesChanged?`shader modules changed`:this._needsUpdate}setNeedsRedraw(e){this._needsRedraw=this._needsRedraw||e}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e}getLayers({layerIds:e}={}){return e?this.layers.filter(t=>e.find(e=>t.id.indexOf(e)===0)):this.layers}setProps(e){`debug`in e&&(this._debug=e.debug),`userData`in e&&(this.context.userData=e.userData),`layers`in e&&(this._nextLayers=e.layers),`onError`in e&&(this.context.onError=e.onError)}setLayers(e,t){z(T_,this,t,e),this._lastRenderedLayers=e;let n=b_(e,Boolean);for(let e of n)e.context=this.context;this._updateLayers(this.layers,n)}updateLayers(){let e=this.needsUpdate();e&&(this.setNeedsRedraw(`updating layers: ${e}`),this.setLayers(this._nextLayers||this._lastRenderedLayers,e)),this._nextLayers=null}addDefaultShaderModule(e){let{defaultShaderModules:t}=this.context;t.find(t=>t.name===e.name)||(t.push(e),this._defaultShaderModulesChanged=!0)}removeDefaultShaderModule(e){let{defaultShaderModules:t}=this.context,n=t.findIndex(t=>t.name===e.name);n>=0&&(t.splice(n,1),this._defaultShaderModulesChanged=!0)}_handleError(e,t,n){n.raiseError(t,`${e} of ${n}`)}_updateLayers(e,t){let n={};for(let t of e)n[t.id]?R.warn(`Multiple old layers with same id ${t.id}`)():n[t.id]=t;if(this._defaultShaderModulesChanged){for(let t of e)t.setNeedsUpdate(),t.setChangeFlags({extensionsChanged:!0});this._defaultShaderModulesChanged=!1}let r=[];this._updateSublayersRecursively(t,n,r),this._finalizeOldLayers(n);let i=!1;for(let e of r)if(e.hasUniformTransition()){i=`Uniform transition in ${e}`;break}this._needsUpdate=i,this.layers=r}_updateSublayersRecursively(e,t,n){for(let r of e){r.context=this.context;let e=t[r.id];e===null&&R.warn(`Multiple new layers with same id ${r.id}`)(),t[r.id]=null;let i=null;try{this._debug&&e!==r&&r.validateProps(),e?(this._transferLayerState(e,r),this._updateLayer(r)):this._initializeLayer(r),n.push(r),i=r.isComposite?r.getSubLayers():null}catch(e){this._handleError(`matching`,e,r)}i&&this._updateSublayersRecursively(i,t,n)}}_finalizeOldLayers(e){for(let t in e){let n=e[t];n&&this._finalizeLayer(n)}}_initializeLayer(e){try{e._initialize(),e.lifecycle=p_.INITIALIZED}catch(t){this._handleError(`initialization`,t,e)}}_transferLayerState(e,t){t._transferState(e),t.lifecycle=p_.MATCHED,t!==e&&(e.lifecycle=p_.AWAITING_GC)}_updateLayer(e){try{e._update()}catch(t){this._handleError(`update`,t,e)}}_finalizeLayer(e){this._needsRedraw=this._needsRedraw||`finalized ${e}`,e.lifecycle=p_.AWAITING_FINALIZATION;try{e._finalize(),e.lifecycle=p_.FINALIZED}catch(t){this._handleError(`finalization`,t,e)}}};function Z(e,t,n){if(e===t)return!0;if(!n||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!Z(e[r],t[r],n-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e==`object`&&typeof t==`object`){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let i of r)if(!t.hasOwnProperty(i)||!Z(e[i],t[i],n-1))return!1;return!0}return!1}var O_=class{constructor(e){this.views=[],this.width=100,this.height=100,this.viewState={},this.controllers={},this.timeline=e.timeline,this._viewports=[],this._viewportMap={},this._isUpdating=!1,this._needsRedraw=`First render`,this._needsUpdate=`Initialize`,this._eventManager=e.eventManager,this._eventCallbacks={onViewStateChange:e.onViewStateChange,onInteractionStateChange:e.onInteractionStateChange},this._pickPosition=e.pickPosition,Object.seal(this),this.setProps(e)}finalize(){for(let e in this.controllers){let t=this.controllers[e];t&&t.finalize()}this.controllers={}}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e,this._needsRedraw=this._needsRedraw||e}updateViewStates(){for(let e in this.controllers){let t=this.controllers[e];t&&t.updateTransition()}}getViewports(e){return e?this._viewports.filter(t=>t.containsPixel(e)):this._viewports}getViews(){let e={};return this.views.forEach(t=>{e[t.id]=t}),e}getView(e){return this.views.find(t=>t.id===e)}getViewState(e){let t=typeof e==`string`?this.getView(e):e,n=t&&this.viewState[t.getViewStateId()]||this.viewState;return t?t.filterViewState(n):n}getViewport(e){return this._viewportMap[e]}unproject(e,t){let n=this.getViewports(),r={x:e[0],y:e[1]};for(let i=n.length-1;i>=0;--i){let a=n[i];if(a.containsPixel(r)){let n=e.slice();return n[0]-=a.x,n[1]-=a.y,a.unproject(n,t)}}return null}setProps(e){e.views&&this._setViews(e.views),e.viewState&&this._setViewState(e.viewState),(`width`in e||`height`in e)&&this._setSize(e.width,e.height),`pickPosition`in e&&(this._pickPosition=e.pickPosition),this._isUpdating||this._update()}_update(){this._isUpdating=!0,this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._isUpdating=!1}_setSize(e,t){(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.setNeedsUpdate(`Size changed`))}_setViews(e){e=b_(e,Boolean),this._diffViews(e,this.views)&&this.setNeedsUpdate(`views changed`),this.views=e}_setViewState(e){e?(Z(e,this.viewState,3)||this.setNeedsUpdate(`viewState changed`),this.viewState=e):R.warn("missing `viewState` or `initialViewState`")()}_createController(e,t){let n=t.type;return new n({timeline:this.timeline,eventManager:this._eventManager,onViewStateChange:this._eventCallbacks.onViewStateChange,onStateChange:this._eventCallbacks.onInteractionStateChange,makeViewport:t=>this.getView(e.id)?.makeViewport({viewState:t,width:this.width,height:this.height}),pickPosition:this._pickPosition})}_updateController(e,t,n,r){let i=e.controller;if(i&&n){let a={...t,...i,id:e.id,x:n.x,y:n.y,width:n.width,height:n.height};return(!r||r.constructor!==i.type)&&(r=this._createController(e,a)),r&&r.setProps(a),r}return null}_rebuildViewports(){let{views:e}=this,t=this.controllers;this._viewports=[],this.controllers={};let n=!1;for(let r=e.length;r--;){let i=e[r],a=this.getViewState(i),o=i.makeViewport({viewState:a,width:this.width,height:this.height}),s=t[i.id],c=!!i.controller;c&&!s&&(n=!0),(n||!c)&&s&&(s.finalize(),s=null),this.controllers[i.id]=this._updateController(i,a,o,s),o&&this._viewports.unshift(o)}for(let e in t){let n=t[e];n&&!this.controllers[e]&&n.finalize()}this._buildViewportMap()}_buildViewportMap(){this._viewportMap={},this._viewports.forEach(e=>{e.id&&(this._viewportMap[e.id]=this._viewportMap[e.id]||e)})}_diffViews(e,t){return e.length===t.length?e.some((n,r)=>!e[r].equals(t[r])):!0}},k_=/^(?:\d+\.?\d*|\.\d+)$/;function A_(e){switch(typeof e){case`number`:if(!Number.isFinite(e))throw Error(`Could not parse position string ${e}`);return{type:`literal`,value:e};case`string`:try{return new P_(N_(e)).parseExpression()}catch(t){let n=t instanceof Error?t.message:String(t);throw Error(`Could not parse position string ${e}: ${n}`)}default:throw Error(`Could not parse position string ${e}`)}}function j_(e,t){switch(e.type){case`literal`:return e.value;case`percentage`:return Math.round(e.value*t);case`binary`:let n=j_(e.left,t),r=j_(e.right,t);return e.operator===`+`?n+r:n-r;default:throw Error(`Unknown layout expression type`)}}function M_(e,t){return j_(e,t)}function N_(e){let t=[],n=0;for(;n<e.length;){let r=e[n];if(/\s/.test(r)){n++;continue}if(r===`+`||r===`-`||r===`(`||r===`)`||r===`%`){t.push({type:`symbol`,value:r}),n++;continue}if(F_(r)||r===`.`){let i=n,a=r===`.`;for(n++;n<e.length;){let t=e[n];if(F_(t)){n++;continue}if(t===`.`&&!a){a=!0,n++;continue}break}let o=e.slice(i,n);if(!k_.test(o))throw Error(`Invalid number token`);t.push({type:`number`,value:parseFloat(o)});continue}if(I_(r)){let r=n;for(;n<e.length&&I_(e[n]);)n++;let i=e.slice(r,n).toLowerCase();t.push({type:`word`,value:i});continue}throw Error(`Invalid token in position string`)}return t}var P_=class{constructor(e){this.index=0,this.tokens=e}parseExpression(){let e=this.parseBinaryExpression();if(this.index<this.tokens.length)throw Error(`Unexpected token at end of expression`);return e}parseBinaryExpression(){let e=this.parseFactor(),t=this.peek();for(;L_(t);){this.index++;let n=this.parseFactor();e={type:`binary`,operator:t.value,left:e,right:n},t=this.peek()}return e}parseFactor(){let e=this.peek();if(!e)throw Error(`Unexpected end of expression`);if(e.type===`symbol`&&e.value===`+`)return this.index++,this.parseFactor();if(e.type===`symbol`&&e.value===`-`)return this.index++,{type:`binary`,operator:`-`,left:{type:`literal`,value:0},right:this.parseFactor()};if(e.type===`symbol`&&e.value===`(`){this.index++;let e=this.parseBinaryExpression();if(!this.consumeSymbol(`)`))throw Error(`Missing closing parenthesis`);return e}if(e.type===`word`&&e.value===`calc`){if(this.index++,!this.consumeSymbol(`(`))throw Error(`Missing opening parenthesis after calc`);let e=this.parseBinaryExpression();if(!this.consumeSymbol(`)`))throw Error(`Missing closing parenthesis`);return e}if(e.type===`number`){this.index++;let t=e.value,n=this.peek();return n&&n.type===`symbol`&&n.value===`%`?(this.index++,{type:`percentage`,value:t/100}):(n&&n.type===`word`&&n.value===`px`&&this.index++,{type:`literal`,value:t})}throw Error(`Unexpected token in expression`)}consumeSymbol(e){let t=this.peek();return t&&t.type===`symbol`&&t.value===e?(this.index++,!0):!1}peek(){return this.tokens[this.index]||null}};function F_(e){return e>=`0`&&e<=`9`}function I_(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`}function L_(e){return!!(e&&e.type===`symbol`&&(e.value===`+`||e.value===`-`))}function R_(e,t){let n={...e};for(let e in t)e!==`id`&&(Array.isArray(n[e])&&Array.isArray(t[e])?n[e]=z_(n[e],t[e]):n[e]=t[e]);return n}function z_(e,t){e=e.slice();for(let n=0;n<t.length;n++){let r=t[n];Number.isFinite(r)&&(e[n]=r)}return e}var B_=class{constructor(e){let{id:t,x:n=0,y:r=0,width:i=`100%`,height:a=`100%`,padding:o=null}=e;this.id=t||this.constructor.displayName||`view`,this.props={...e,id:this.id},this._x=A_(n),this._y=A_(r),this._width=A_(i),this._height=A_(a),this._padding=o&&{left:A_(o.left||0),right:A_(o.right||0),top:A_(o.top||0),bottom:A_(o.bottom||0)},this.equals=this.equals.bind(this),Object.seal(this)}equals(e){return this===e?!0:this.constructor===e.constructor&&Z(this.props,e.props,2)}clone(e){let t=this.constructor;return new t({...this.props,...e})}makeViewport({width:e,height:t,viewState:n}){n=this.filterViewState(n);let r=this.getDimensions({width:e,height:t});return!r.height||!r.width?null:new(this.getViewportType(n))({...n,...this.props,...r})}getViewStateId(){let{viewState:e}=this.props;return typeof e==`string`?e:e?.id||this.id}filterViewState(e){return this.props.viewState&&typeof this.props.viewState==`object`?this.props.viewState.id?R_(e,this.props.viewState):this.props.viewState:e}getDimensions({width:e,height:t}){let n={x:M_(this._x,e),y:M_(this._y,t),width:M_(this._width,e),height:M_(this._height,t)};return this._padding&&(n.padding={left:M_(this._padding.left,e),top:M_(this._padding.top,t),right:M_(this._padding.right,e),bottom:M_(this._padding.bottom,t)}),n}get controller(){let e=this.props.controller;return e?e===!0?{type:this.ControllerType}:typeof e==`function`?{type:e}:{type:this.ControllerType,...e}:null}},V_=class{constructor(e){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=e}get inProgress(){return this._inProgress}start(e){this.cancel(),this.settings=e,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&=(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,!1)}update(){if(!this._inProgress)return!1;if(this._handle===null){let{_timeline:e,settings:t}=this;this._handle=e.addChannel({delay:e.getTime(),duration:t.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}},H_=()=>{},U_={BREAK:1,SNAP_TO_END:2,IGNORE:3},W_=e=>e,G_=U_.BREAK,K_=class{constructor(e){this._onTransitionUpdate=e=>{let{time:t,settings:{interpolator:n,startProps:r,endProps:i,duration:a,easing:o}}=e,s=o(t/a),c=n.interpolateProps(r,i,s);this.propsInTransition=this.getControllerState({...this.props,...c}).getViewportProps(),this.onViewStateChange({viewState:this.propsInTransition,oldViewState:this.props})},this.getControllerState=e.getControllerState,this.propsInTransition=null,this.transition=new V_(e.timeline),this.onViewStateChange=e.onViewStateChange||H_,this.onStateChange=e.onStateChange||H_}finalize(){this.transition.cancel()}getViewportInTransition(){return this.propsInTransition}processViewStateChange(e){let t=!1,n=this.props;if(this.props=e,!n||this._shouldIgnoreViewportChange(n,e))return!1;if(this._isTransitionEnabled(e)){let r=n;if(this.transition.inProgress){let{interruption:e,endProps:t}=this.transition.settings;r={...n,...e===U_.SNAP_TO_END?t:this.propsInTransition||n}}this._triggerTransition(r,e),t=!0}else this.transition.cancel();return t}updateTransition(){this.transition.update()}_isTransitionEnabled(e){let{transitionDuration:t,transitionInterpolator:n}=e;return(t>0||t===`auto`)&&!!n}_isUpdateDueToCurrentTransition(e){return this.transition.inProgress&&this.propsInTransition?this.transition.settings.interpolator.arePropsEqual(e,this.propsInTransition):!1}_shouldIgnoreViewportChange(e,t){return this.transition.inProgress?this.transition.settings.interruption===U_.IGNORE||this._isUpdateDueToCurrentTransition(t):this._isTransitionEnabled(t)?t.transitionInterpolator.arePropsEqual(e,t):!0}_triggerTransition(e,t){let n=this.getControllerState(e),r=this.getControllerState(t).shortestPathFrom(n),i=t.transitionInterpolator,a=i.getDuration?i.getDuration(e,t):t.transitionDuration;if(a===0)return;let o=i.initializeProps(e,r);this.propsInTransition={};let s={duration:a,easing:t.transitionEasing||W_,interpolator:i,interruption:t.transitionInterruption||G_,startProps:o.start,endProps:o.end,onStart:t.onTransitionStart,onUpdate:this._onTransitionUpdate,onInterrupt:this._onTransitionEnd(t.onTransitionInterrupt),onEnd:this._onTransitionEnd(t.onTransitionEnd)};this.transition.start(s),this.onStateChange({inTransition:!0}),this.updateTransition()}_onTransitionEnd(e){return t=>{this.propsInTransition=null,this.onStateChange({inTransition:!1,isZooming:!1,isPanning:!1,isRotating:!1}),e?.(t)}}};function Q(e,t){if(!e)throw Error(t||`deck.gl: assertion failed.`)}var q_=class{constructor(e){let{compare:t,extract:n,required:r}=e;this._propsToCompare=t,this._propsToExtract=n||t,this._requiredProps=r}arePropsEqual(e,t){for(let n of this._propsToCompare)if(!(n in e)||!(n in t)||!gl(e[n],t[n]))return!1;return!0}initializeProps(e,t){let n={},r={};for(let i of this._propsToExtract)(i in e||i in t)&&(n[i]=e[i],r[i]=t[i]);return this._checkRequiredProps(n),this._checkRequiredProps(r),{start:n,end:r}}getDuration(e,t){return t.transitionDuration}_checkRequiredProps(e){this._requiredProps&&this._requiredProps.forEach(t=>{let n=e[t];Q(Number.isFinite(n)||Array.isArray(n),`${t} is required for transition`)})}},J_=Math.PI/180,Y_=180/Math.PI,X_=6370972;function Z_(){let e=256/X_,t=Math.PI/180*256;return{unitsPerMeter:[e,e,e],unitsPerMeter2:[0,0,0],metersPerUnit:[1/e,1/e,1/e],unitsPerDegree:[t,t,e],unitsPerDegree2:[0,0,0],degreesPerUnit:[1/t,1/t,1/e]}}var Q_=class extends zh{constructor(e={}){let{longitude:t=0,zoom:n=0,nearZMultiplier:r=.5,farZMultiplier:i=1,resolution:a=10}=e,{latitude:o=0,height:s,altitude:c=1.5,fovy:l}=e;o=Math.max(Math.min(o,ym),-ym),s||=1,l?c=jm(l):l=Am(c);let u=2**(n-$_(o)),d=e.nearZ??r,f=e.farZ??(c+256*2*u/s)*i,p=new K().lookAt({eye:[0,-c,0],up:[0,0,1]});p.rotateX(o*J_),p.rotateZ(-t*J_),p.scale(u/s),super({...e,height:s,viewMatrix:p,longitude:t,latitude:o,zoom:n,distanceScales:Z_(),fovy:l,focalDistance:c,near:d,far:f}),this.scale=u,this.latitude=o,this.longitude=t,this.fovy=l,this.resolution=a}get projectionMode(){return X.GLOBE}getDistanceScales(){return this.distanceScales}getBounds(e={}){let t={targetZ:e.z||0},n=this.unproject([0,this.height/2],t),r=this.unproject([this.width/2,0],t),i=this.unproject([this.width,this.height/2],t),a=this.unproject([this.width/2,this.height],t);return i[0]<this.longitude&&(i[0]+=360),n[0]>this.longitude&&(n[0]-=360),[Math.min(n[0],i[0],r[0],a[0]),Math.min(n[1],i[1],r[1],a[1]),Math.max(n[0],i[0],r[0],a[0]),Math.max(n[1],i[1],r[1],a[1])]}unproject(e,{topLeft:t=!0,targetZ:n}={}){let[r,i,a]=e,o=t?i:this.height-i,{pixelUnprojectionMatrix:s}=this,c;if(Number.isFinite(a))c=ev(s,[r,o,a,1]);else{let e=ev(s,[r,o,-1,1]),t=ev(s,[r,o,1,1]),i=((n||0)/X_+1)*256,a=iu(nu([],e,t)),l=iu(e),u=iu(t),d=4*((4*l*u-(a-l-u)**2)/16)/a;c=Jl([],e,t,(Math.sqrt(l-d)-Math.sqrt(Math.max(0,i*i-d)))/Math.sqrt(a))}let[l,u,d]=this.unprojectPosition(c);return Number.isFinite(a)?[l,u,d]:Number.isFinite(n)?[l,u,n]:[l,u]}projectPosition(e){let[t,n,r=0]=e,i=t*J_,a=n*J_,o=Math.cos(a),s=(r/X_+1)*256;return[Math.sin(i)*o*s,-Math.cos(i)*o*s,Math.sin(a)*s]}unprojectPosition(e){let[t,n,r]=e,i=ru(e),a=Math.asin(r/i);return[Math.atan2(t,-n)*Y_,a*Y_,(i/256-1)*X_]}projectFlat(e){return e}unprojectFlat(e){return e}panByPosition([e,t,n],r,i){let a=.25/2**(this.zoom-$_(this.latitude)),o=e+a*(i[0]-r[0]),s=t-a*(i[1]-r[1]);s=Math.max(Math.min(s,ym),-ym);let c={longitude:o,latitude:s,zoom:n-$_(t)};return c.zoom+=$_(c.latitude),c}};Q_.displayName=`GlobeViewport`;function $_(e){let t=Math.PI*Math.cos(e*Math.PI/180);return Math.log2(t)}function ev(e,t){let n=Qu([],t,e);return Ku(n,n,1/n[3]),n}var tv=[`longitude`,`latitude`,`zoom`,`bearing`,`pitch`],nv=[`longitude`,`latitude`,`zoom`],rv=class extends q_{constructor(e={}){let t=Array.isArray(e)?e:e.transitionProps,n=Array.isArray(e)?{}:e;n.transitionProps=Array.isArray(t)?{compare:t,required:t}:t||{compare:tv,required:nv},super(n.transitionProps),this.opts=n}initializeProps(e,t){let n=super.initializeProps(e,t),{makeViewport:r,around:i}=this.opts;if(r&&i)if(r(e)instanceof Q_)R.warn(`around not supported in GlobeView`)();else{let a=r(e),o=r(t),s=a.unproject(i);n.start.around=i,Object.assign(n.end,{around:o.project(s),aroundPosition:s,width:t.width,height:t.height})}return n}interpolateProps(e,t,n){let r={};for(let i of this._propsToExtract)r[i]=hl(e[i]||0,t[i]||0,n);if(t.aroundPosition&&this.opts.makeViewport){let i=this.opts.makeViewport({...t,...r});Object.assign(r,i.panByPosition(t.aroundPosition,hl(e.around,t.around,n)))}return r}},iv={transitionDuration:0},av=300,ov=e=>1-(1-e)*(1-e),sv={WHEEL:[`wheel`],PAN:[`panstart`,`panmove`,`panend`],PINCH:[`pinchstart`,`pinchmove`,`pinchend`],MULTI_PAN:[`multipanstart`,`multipanmove`,`multipanend`],DOUBLE_CLICK:[`dblclick`],KEYBOARD:[`keydown`]},cv={},lv=class{constructor(e){this.state={},this._events={},this._interactionState={isDragging:!1},this._customEvents=[],this._eventStartBlocked=null,this._panMove=!1,this.invertPan=!1,this.dragMode=`rotate`,this.inertia=0,this.scrollZoom=!0,this.dragPan=!0,this.dragRotate=!0,this.doubleClickZoom=!0,this.touchZoom=!0,this.touchRotate=!1,this.keyboard=!0,this.transitionManager=new K_({...e,getControllerState:e=>new this.ControllerState(e),onViewStateChange:this._onTransition.bind(this),onStateChange:this._setInteractionState.bind(this)}),this.handleEvent=this.handleEvent.bind(this),this.eventManager=e.eventManager,this.onViewStateChange=e.onViewStateChange||(()=>{}),this.onStateChange=e.onStateChange||(()=>{}),this.makeViewport=e.makeViewport,this.pickPosition=e.pickPosition}set events(e){this.toggleEvents(this._customEvents,!1),this.toggleEvents(e,!0),this._customEvents=e,this.props&&this.setProps(this.props)}finalize(){for(let e in this._events)this._events[e]&&this.eventManager?.off(e,this.handleEvent);this.transitionManager.finalize()}handleEvent(e){this._controllerState=void 0;let t=this._eventStartBlocked;switch(e.type){case`panstart`:return t?!1:this._onPanStart(e);case`panmove`:return this._onPan(e);case`panend`:return this._onPanEnd(e);case`pinchstart`:return t?!1:this._onPinchStart(e);case`pinchmove`:return this._onPinch(e);case`pinchend`:return this._onPinchEnd(e);case`multipanstart`:return t?!1:this._onMultiPanStart(e);case`multipanmove`:return this._onMultiPan(e);case`multipanend`:return this._onMultiPanEnd(e);case`dblclick`:return this._onDoubleClick(e);case`wheel`:return this._onWheel(e);case`keydown`:return this._onKeyDown(e);default:return!1}}get controllerState(){return this._controllerState=this._controllerState||new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),this._controllerState}getCenter(e){let{x:t,y:n}=this.props,{offsetCenter:r}=e;return[r.x-t,r.y-n]}isPointInBounds(e,t){let{width:n,height:r}=this.props;if(t&&t.handled)return!1;let i=e[0]>=0&&e[0]<=n&&e[1]>=0&&e[1]<=r;return i&&t&&t.stopPropagation(),i}isFunctionKeyPressed(e){let{srcEvent:t}=e;return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}isDragging(){return this._interactionState.isDragging||!1}blockEvents(e){let t=setTimeout(()=>{this._eventStartBlocked===t&&(this._eventStartBlocked=null)},e);this._eventStartBlocked=t}setProps(e){e.dragMode&&(this.dragMode=e.dragMode);let t=this.props;this.props=e,`transitionInterpolator`in e||(e.transitionInterpolator=this._getTransitionProps().transitionInterpolator),this.transitionManager.processViewStateChange(e);let{inertia:n}=e;this.inertia=Number.isFinite(n)?n:n===!0?av:0;let{scrollZoom:r=!0,dragPan:i=!0,dragRotate:a=!0,doubleClickZoom:o=!0,touchZoom:s=!0,touchRotate:c=!1,keyboard:l=!0}=e,u=!!this.onViewStateChange;if(this.toggleEvents(sv.WHEEL,u&&r),this.toggleEvents(sv.PAN,u),this.toggleEvents(sv.PINCH,u&&(s||c)),this.toggleEvents(sv.MULTI_PAN,u&&c),this.toggleEvents(sv.DOUBLE_CLICK,u&&o),this.toggleEvents(sv.KEYBOARD,u&&l),this.scrollZoom=r,this.dragPan=i,this.dragRotate=a,this.doubleClickZoom=o,this.touchZoom=s,this.touchRotate=c,this.keyboard=l,(!t||t.height!==e.height||t.width!==e.width||t.maxBounds!==e.maxBounds)&&e.maxBounds){let t=new this.ControllerState({...e,makeViewport:this.makeViewport}),n=t.getViewportProps();Object.keys(n).some(t=>!Z(n[t],e[t],1))&&this.updateViewport(t)}}updateTransition(){this.transitionManager.updateTransition()}toggleEvents(e,t){this.eventManager&&e.forEach(e=>{this._events[e]!==t&&(this._events[e]=t,t?this.eventManager.on(e,this.handleEvent):this.eventManager.off(e,this.handleEvent))})}updateViewport(e,t=null,n={}){let r={...e.getViewportProps(),...t},i=this.controllerState!==e;if(this.state=e.getState(),this._setInteractionState(n),i){let e=this.controllerState&&this.controllerState.getViewportProps();this.onViewStateChange&&this.onViewStateChange({viewState:r,interactionState:this._interactionState,oldViewState:e,viewId:this.props.id})}}_onTransition(e){this.onViewStateChange({...e,interactionState:this._interactionState,viewId:this.props.id})}_setInteractionState(e){Object.assign(this._interactionState,e),this.onStateChange(this._interactionState)}_onPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.isFunctionKeyPressed(e)||e.rightButton||!1;(this.invertPan||this.dragMode===`pan`)&&(n=!n);let r=this.controllerState[n?`panStart`:`rotateStart`]({pos:t});return this._panMove=n,this.updateViewport(r,iv,{isDragging:!0}),!0}_onPan(e){return this.isDragging()?this._panMove?this._onPanMove(e):this._onPanRotate(e):!1}_onPanEnd(e){return this.isDragging()?this._panMove?this._onPanMoveEnd(e):this._onPanRotateEnd(e):!1}_onPanMove(e){if(!this.dragPan)return!1;let t=this.getCenter(e),n=this.controllerState.pan({pos:t});return this.updateViewport(n,iv,{isDragging:!0,isPanning:!0}),!0}_onPanMoveEnd(e){let{inertia:t}=this;if(this.dragPan&&t&&e.velocity){let n=this.getCenter(e),r=[n[0]+e.velocityX*t/2,n[1]+e.velocityY*t/2],i=this.controllerState.pan({pos:r}).panEnd();this.updateViewport(i,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:ov},{isDragging:!1,isPanning:!0})}else{let e=this.controllerState.panEnd();this.updateViewport(e,null,{isDragging:!1,isPanning:!1})}return!0}_onPanRotate(e){if(!this.dragRotate)return!1;let t=this.getCenter(e),n=this.controllerState.rotate({pos:t});return this.updateViewport(n,iv,{isDragging:!0,isRotating:!0}),!0}_onPanRotateEnd(e){let{inertia:t}=this;if(this.dragRotate&&t&&e.velocity){let n=this.getCenter(e),r=[n[0]+e.velocityX*t/2,n[1]+e.velocityY*t/2],i=this.controllerState.rotate({pos:r}).rotateEnd();this.updateViewport(i,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:ov},{isDragging:!1,isRotating:!0})}else{let e=this.controllerState.rotateEnd();this.updateViewport(e,null,{isDragging:!1,isRotating:!1})}return!0}_onWheel(e){if(!this.scrollZoom)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;e.srcEvent.preventDefault();let{speed:n=.01,smooth:r=!1}=this.scrollZoom===!0?{}:this.scrollZoom,{delta:i}=e,a=2/(1+Math.exp(-Math.abs(i*n)));i<0&&a!==0&&(a=1/a);let o=r?{...this._getTransitionProps({around:t}),transitionDuration:250}:iv,s=this.controllerState.zoom({pos:t,scale:a});return this.updateViewport(s,o,{isZooming:!0,isPanning:!0}),r||this._setInteractionState({isZooming:!1,isPanning:!1}),!0}_onMultiPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.controllerState.rotateStart({pos:t});return this.updateViewport(n,iv,{isDragging:!0}),!0}_onMultiPan(e){if(!this.touchRotate||!this.isDragging())return!1;let t=this.getCenter(e);t[0]-=e.deltaX;let n=this.controllerState.rotate({pos:t});return this.updateViewport(n,iv,{isDragging:!0,isRotating:!0}),!0}_onMultiPanEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this;if(this.touchRotate&&t&&e.velocityY){let n=this.getCenter(e),r=[n[0],n[1]+=e.velocityY*t/2],i=this.controllerState.rotate({pos:r});this.updateViewport(i,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:ov},{isDragging:!1,isRotating:!0}),this.blockEvents(t)}else{let e=this.controllerState.rotateEnd();this.updateViewport(e,null,{isDragging:!1,isRotating:!1})}return!0}_onPinchStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.controllerState.zoomStart({pos:t}).rotateStart({pos:t});return cv._startPinchRotation=e.rotation,cv._lastPinchEvent=e,this.updateViewport(n,iv,{isDragging:!0}),!0}_onPinch(e){if(!this.touchZoom&&!this.touchRotate||!this.isDragging())return!1;let t=this.controllerState;if(this.touchZoom){let{scale:n}=e,r=this.getCenter(e);t=t.zoom({pos:r,scale:n})}if(this.touchRotate){let{rotation:n}=e;t=t.rotate({deltaAngleX:cv._startPinchRotation-n})}return this.updateViewport(t,iv,{isDragging:!0,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:this.touchRotate}),cv._lastPinchEvent=e,!0}_onPinchEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this,{_lastPinchEvent:n}=cv;if(this.touchZoom&&t&&n&&e.scale!==n.scale){let r=this.getCenter(e),i=this.controllerState.rotateEnd(),a=Math.log2(e.scale),o=2**(a+(a-Math.log2(n.scale))/(e.deltaTime-n.deltaTime)*t/2);i=i.zoom({pos:r,scale:o}).zoomEnd(),this.updateViewport(i,{...this._getTransitionProps({around:r}),transitionDuration:t,transitionEasing:ov},{isDragging:!1,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:!1}),this.blockEvents(t)}else{let e=this.controllerState.zoomEnd().rotateEnd();this.updateViewport(e,null,{isDragging:!1,isPanning:!1,isZooming:!1,isRotating:!1})}return cv._startPinchRotation=null,cv._lastPinchEvent=null,!0}_onDoubleClick(e){if(!this.doubleClickZoom)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.isFunctionKeyPressed(e),r=this.controllerState.zoom({pos:t,scale:n?.5:2});return this.updateViewport(r,this._getTransitionProps({around:t}),{isZooming:!0,isPanning:!0}),this.blockEvents(100),!0}_onKeyDown(e){if(!this.keyboard)return!1;let t=this.isFunctionKeyPressed(e),{zoomSpeed:n,moveSpeed:r,rotateSpeedX:i,rotateSpeedY:a}=this.keyboard===!0?{}:this.keyboard,{controllerState:o}=this,s,c={};switch(e.srcEvent.code){case`Minus`:s=t?o.zoomOut(n).zoomOut(n):o.zoomOut(n),c.isZooming=!0;break;case`Equal`:s=t?o.zoomIn(n).zoomIn(n):o.zoomIn(n),c.isZooming=!0;break;case`ArrowLeft`:t?(s=o.rotateLeft(i),c.isRotating=!0):(s=o.moveLeft(r),c.isPanning=!0);break;case`ArrowRight`:t?(s=o.rotateRight(i),c.isRotating=!0):(s=o.moveRight(r),c.isPanning=!0);break;case`ArrowUp`:t?(s=o.rotateUp(a),c.isRotating=!0):(s=o.moveUp(r),c.isPanning=!0);break;case`ArrowDown`:t?(s=o.rotateDown(a),c.isRotating=!0):(s=o.moveDown(r),c.isPanning=!0);break;default:return!1}return this.updateViewport(s,this._getTransitionProps(),c),!0}_getTransitionProps(e){let{transition:t}=this;return!t||!t.transitionInterpolator?iv:e?{...t,transitionInterpolator:new rv({...e,...t.transitionInterpolator.opts,makeViewport:this.controllerState.makeViewport})}:t}},uv=class{constructor(e,t,n){this.makeViewport=n,this._viewportProps=this.applyConstraints(e),this._state=t}getViewportProps(){return this._viewportProps}getState(){return this._state}},dv=5,fv=1.2,pv=512,mv=[[-1/0,-90],[1/0,90]];function hv([e,t]){if(Math.abs(t)>90&&(t=Math.sign(t)*90),Number.isFinite(e)){let[n,r]=Sm([e,t]);return[n,H(r,0,pv)]}let[,n]=Sm([0,t]);return[e,H(n,0,pv)]}var gv=class extends uv{constructor(e){let{width:t,height:n,latitude:r,longitude:i,zoom:a,bearing:o=0,pitch:s=0,altitude:c=1.5,position:l=[0,0,0],maxZoom:u=20,minZoom:d=0,maxPitch:f=60,minPitch:p=0,startPanLngLat:m,startZoomLngLat:h,startRotatePos:g,startRotateLngLat:_,startBearing:v,startPitch:y,startZoom:b,normalize:x=!0}=e;Q(Number.isFinite(i)),Q(Number.isFinite(r)),Q(Number.isFinite(a));let S=e.maxBounds||(x?mv:null);super({width:t,height:n,latitude:r,longitude:i,zoom:a,bearing:o,pitch:s,altitude:c,maxZoom:u,minZoom:d,maxPitch:f,minPitch:p,normalize:x,position:l,maxBounds:S},{startPanLngLat:m,startZoomLngLat:h,startRotatePos:g,startRotateLngLat:_,startBearing:v,startPitch:y,startZoom:b},e.makeViewport),this.getAltitude=e.getAltitude}panStart({pos:e}){return this._getUpdatedState({startPanLngLat:this._unproject(e)})}pan({pos:e,startPos:t}){let n=this.getState().startPanLngLat||this._unproject(t);if(!n)return this;let r=this.makeViewport(this.getViewportProps()).panByPosition(n,e);return this._getUpdatedState(r)}panEnd(){return this._getUpdatedState({startPanLngLat:null})}rotateStart({pos:e}){let t=this.getAltitude?.(e);return this._getUpdatedState({startRotatePos:e,startRotateLngLat:t===void 0?void 0:this._unproject3D(e,t),startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:e,deltaAngleX:t=0,deltaAngleY:n=0}){let{startRotatePos:r,startRotateLngLat:i,startBearing:a,startPitch:o}=this.getState();if(!r||a===void 0||o===void 0)return this;let s;if(s=e?this._getNewRotation(e,r,o,a):{bearing:a+t,pitch:o+n},i){let e=this.makeViewport({...this.getViewportProps(),...s}),t=`panByPosition3D`in e?`panByPosition3D`:`panByPosition`;return this._getUpdatedState({...s,...e[t](i,r)})}return this._getUpdatedState(s)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startRotateLngLat:null,startBearing:null,startPitch:null})}zoomStart({pos:e}){return this._getUpdatedState({startZoomLngLat:this._unproject(e),startZoom:this.getViewportProps().zoom})}zoom({pos:e,startPos:t,scale:n}){let{startZoom:r,startZoomLngLat:i}=this.getState();if(i||=(r=this.getViewportProps().zoom,this._unproject(t)||this._unproject(e)),!i)return this;let a=this._constrainZoom(r+Math.log2(n)),o=this.makeViewport({...this.getViewportProps(),zoom:a});return this._getUpdatedState({zoom:a,...o.panByPosition(i,e)})}zoomEnd(){return this._getUpdatedState({startZoomLngLat:null,startZoom:null})}zoomIn(e=2){return this._zoomFromCenter(e)}zoomOut(e=2){return this._zoomFromCenter(1/e)}moveLeft(e=100){return this._panFromCenter([e,0])}moveRight(e=100){return this._panFromCenter([-e,0])}moveUp(e=100){return this._panFromCenter([0,e])}moveDown(e=100){return this._panFromCenter([0,-e])}rotateLeft(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-e})}rotateRight(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+e})}rotateUp(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+e})}rotateDown(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-e})}shortestPathFrom(e){let t=e.getViewportProps(),n={...this.getViewportProps()},{bearing:r,longitude:i}=n;return Math.abs(r-t.bearing)>180&&(n.bearing=r<0?r+360:r-360),Math.abs(i-t.longitude)>180&&(n.longitude=i<0?i+360:i-360),n}applyConstraints(e){let{maxPitch:t,minPitch:n,pitch:r,longitude:i,bearing:a,normalize:o,maxBounds:s}=e;if(o&&((i<-180||i>180)&&(e.longitude=Th(i+180,360)-180),(a<-180||a>180)&&(e.bearing=Th(a+180,360)-180)),e.pitch=H(r,n,t),e.zoom=this._constrainZoom(e.zoom,e),s){let t=hv(s[0]),n=hv(s[1]),r=2**e.zoom,i=e.width/2/r,a=e.height/2/r,[o,c]=Cm([t[0]+i,t[1]+a]),[l,u]=Cm([n[0]-i,n[1]-a]);e.longitude=H(e.longitude,o,l),e.latitude=H(e.latitude,c,u)}return e}_constrainZoom(e,t){t||=this.getViewportProps();let{maxZoom:n,maxBounds:r}=t,i=r!==null&&t.width>0&&t.height>0,{minZoom:a}=t;if(i){let e=hv(r[0]),i=hv(r[1]),o=i[0]-e[0],s=i[1]-e[1];Number.isFinite(o)&&o>0&&(a=Math.max(a,Math.log2(t.width/o))),Number.isFinite(s)&&s>0&&(a=Math.max(a,Math.log2(t.height/s))),a>n&&(a=n)}return H(e,a,n)}_zoomFromCenter(e){let{width:t,height:n}=this.getViewportProps();return this.zoom({pos:[t/2,n/2],scale:e})}_panFromCenter(e){let{width:t,height:n}=this.getViewportProps();return this.pan({startPos:[t/2,n/2],pos:[t/2+e[0],n/2+e[1]]})}_getUpdatedState(e){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e})}_unproject(e){let t=this.makeViewport(this.getViewportProps());return e&&t.unproject(e)}_unproject3D(e,t){return this.makeViewport(this.getViewportProps()).unproject(e,{targetZ:t})}_getNewRotation(e,t,n,r){let i=e[0]-t[0],a=e[1]-t[1],o=e[1],s=t[1],{width:c,height:l}=this.getViewportProps(),u=i/c,d=0;a>0?Math.abs(l-s)>dv&&(d=a/(s-l)*fv):a<0&&s>dv&&(d=1-o/s),d=H(d,-1,1);let{minPitch:f,maxPitch:p}=this.getViewportProps(),m=r+180*u,h=n;return d>0?h=n+d*(p-n):d<0&&(h=n-d*(f-n)),{pitch:h,bearing:m}}},_v=class extends lv{constructor(){super(...arguments),this.ControllerState=gv,this.transition={transitionDuration:300,transitionInterpolator:new rv({transitionProps:{compare:[`longitude`,`latitude`,`zoom`,`bearing`,`pitch`,`position`],required:[`longitude`,`latitude`,`zoom`]}})},this.dragMode=`pan`,this.rotationPivot=`center`,this._getAltitude=e=>{if(this.rotationPivot===`2d`)return 0;if(this.rotationPivot===`3d`&&this.pickPosition){let{x:t,y:n}=this.props,r=this.pickPosition(t+e[0],n+e[1]);if(r&&r.coordinate&&r.coordinate.length>=3)return r.coordinate[2]}}}setProps(e){`rotationPivot`in e&&(this.rotationPivot=e.rotationPivot||`center`),e.getAltitude=this._getAltitude,e.position=e.position||[0,0,0],e.maxBounds=e.maxBounds||(e.normalize===!1?null:mv),super.setProps(e)}updateViewport(e,t=null,n={}){let r=e.getState();n.isDragging&&r.startRotateLngLat?n={...n,rotationPivotPosition:r.startRotateLngLat}:n.isDragging===!1&&(n={...n,rotationPivotPosition:void 0}),super.updateViewport(e,t,n)}},vv=class extends B_{constructor(e={}){super(e)}getViewportType(){return Bh}get ControllerType(){return _v}};vv.displayName=`MapView`;var yv=new Sh;function bv(e,t){return(e.order??1/0)-(t.order??1/0)}var xv=class{constructor(e){this._resolvedEffects=[],this._defaultEffects=[],this.effects=[],this._context=e,this._needsRedraw=`Initial render`,this._setEffects([])}addDefaultEffect(e){let t=this._defaultEffects;if(!t.find(t=>t.id===e.id)){let n=t.findIndex(t=>bv(t,e)>0);n<0?t.push(e):t.splice(n,0,e),e.setup(this._context),this._setEffects(this.effects)}}setProps(e){`effects`in e&&(Z(e.effects,this.effects,1)||this._setEffects(e.effects))}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}getEffects(){return this._resolvedEffects}_setEffects(e){let t={};for(let e of this.effects)t[e.id]=e;let n=[];for(let r of e){let e=t[r.id],i=r;e&&e!==r?e.setProps?(e.setProps(r.props),i=e):e.cleanup(this._context):e||r.setup(this._context),n.push(i),delete t[r.id]}for(let e in t)t[e].cleanup(this._context);this.effects=n,this._resolvedEffects=n.concat(this._defaultEffects),e.some(e=>e instanceof Sh)||this._resolvedEffects.push(yv),this._needsRedraw=`effects changed`}finalize(){for(let e of this._resolvedEffects)e.cleanup(this._context);this.effects.length=0,this._resolvedEffects.length=0,this._defaultEffects.length=0}},Sv=class extends mh{shouldDrawLayer(e){let{operation:t}=e.props;return t.includes(`draw`)||t.includes(`terrain`)}render(e){return this._render(e)}},Cv=`deckRenderer.renderLayers`,wv=class{constructor(e,t={}){this.device=e,this.stats=t.stats,this.layerFilter=null,this.drawPickingColors=!1,this.drawLayersPass=new Sv(e),this.pickLayersPass=new u_(e),this.renderCount=0,this._needsRedraw=`Initial render`,this.renderBuffers=[],this.lastPostProcessEffect=null}setProps(e){this.layerFilter!==e.layerFilter&&(this.layerFilter=e.layerFilter,this._needsRedraw=`layerFilter changed`),this.drawPickingColors!==e.drawPickingColors&&(this.drawPickingColors=e.drawPickingColors,this._needsRedraw=`drawPickingColors changed`)}renderLayers(e){if(!e.viewports.length)return;let t=this.drawPickingColors?this.pickLayersPass:this.drawLayersPass,n={layerFilter:this.layerFilter,isPicking:this.drawPickingColors,...e};n.effects&&this._preRender(n.effects,n);let r=this.lastPostProcessEffect?this.renderBuffers[0]:n.target;this.lastPostProcessEffect&&(n.clearColor=[0,0,0,0],n.clearCanvas=!0);let i=t.render({...n,target:r}),a=`stats`in i?i.stats:i;n.effects&&(this.lastPostProcessEffect&&(n.clearCanvas=e.clearCanvas===void 0?!0:e.clearCanvas),this._postRender(n.effects,n)),this.renderCount++,z(Cv,this,a,e),this._updateStats(a)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}finalize(){let{renderBuffers:e}=this;for(let t of e)t.delete();e.length=0}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:n}of e)t+=n;this.stats.get(`Layers rendered`).addCount(t)}_preRender(e,t){this.lastPostProcessEffect=null,t.preRenderStats=t.preRenderStats||{};for(let n of e)t.preRenderStats[n.id]=n.preRender(t),n.postRender&&(this.lastPostProcessEffect=n.id);this.lastPostProcessEffect&&this._resizeRenderBuffers()}_resizeRenderBuffers(){let{renderBuffers:e}=this,t=this.device.canvasContext.getDrawingBufferSize(),[n,r]=t;e.length===0&&[0,1].map(t=>{let i=this.device.createTexture({sampler:{minFilter:`linear`,magFilter:`linear`},width:n,height:r});e.push(this.device.createFramebuffer({id:`deck-renderbuffer-${t}`,colorAttachments:[i]}))});for(let n of e)n.resize(t)}_postRender(e,t){let{renderBuffers:n}=this,r={...t,inputBuffer:n[0],swapBuffer:n[1]};for(let i of e)if(i.postRender){r.target=i.id===this.lastPostProcessEffect?t.target:void 0;let e=i.postRender(r);r.inputBuffer=e,r.swapBuffer=e===n[0]?n[1]:n[0]}}},Tv={pickedColor:null,pickedObjectIndex:-1};function Ev({pickedColors:e,decodePickingColor:t,deviceX:n,deviceY:r,deviceRadius:i,deviceRect:a}){let{x:o,y:s,width:c,height:l}=a,u=i*i,d=-1,f=0;for(let t=0;t<l;t++){let i=t+s-r,a=i*i;if(a>u)f+=4*c;else for(let t=0;t<c;t++){if(e[f+3]-1>=0){let e=t+o-n,r=e*e+a;r<=u&&(u=r,d=f)}f+=4}}if(d>=0){let n=e.slice(d,d+4),r=t(n);if(r){let e=Math.floor(d/4/c),t=d/4-e*c;return{...r,pickedColor:n,pickedX:o+t,pickedY:s+e}}R.error(`Picked non-existent layer. Is picking buffer corrupt?`)()}return Tv}function Dv({pickedColors:e,decodePickingColor:t}){let n=new Map;if(e){for(let r=0;r<e.length;r+=4)if(e[r+3]-1>=0){let i=e.slice(r,r+4),a=i.join(`,`);if(!n.has(a)){let e=t(i);e?n.set(a,{...e,color:i}):R.error(`Picked non-existent layer. Is picking buffer corrupt?`)()}}}return Array.from(n.values())}function Ov({pickInfo:e,viewports:t,pixelRatio:n,x:r,y:i,z:a}){let o=t[0];t.length>1&&(o=jv(e?.pickedViewports||t,{x:r,y:i}));let s;if(o){let e=[r-o.x,i-o.y];a!==void 0&&(e[2]=a),s=o.unproject(e)}return{color:null,layer:null,viewport:o,index:-1,picked:!1,x:r,y:i,pixel:[r,i],coordinate:s,devicePixel:e&&`pickedX`in e?[e.pickedX,e.pickedY]:void 0,pixelRatio:n}}function kv(e){let{pickInfo:t,lastPickedInfo:n,mode:r,layers:i}=e,{pickedColor:a,pickedLayer:o,pickedObjectIndex:s}=t,c=o?[o]:[];if(r===`hover`){let e=n.index,t=n.layerId,r=o?o.props.id:null;if(r!==t||s!==e){if(r!==t){let e=i.find(e=>e.props.id===t);e&&c.unshift(e)}n.layerId=r,n.index=s,n.info=null}}let l=Ov(e),u=new Map;return u.set(null,l),c.forEach(e=>{let t={...l};e===o&&(t.color=a,t.index=s,t.picked=!0),t=Av({layer:e,info:t,mode:r});let i=t.layer;e===o&&r===`hover`&&(n.info=t),u.set(i.id,t),r===`hover`&&i.updateAutoHighlight(t)}),u}function Av({layer:e,info:t,mode:n}){for(;e&&t;){let r=t.layer||null;t.sourceLayer=r,t.layer=e,t=e.getPickingInfo({info:t,mode:n,sourceLayer:r}),e=e.parent}return t}function jv(e,t){for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.containsPixel(t))return r}return e[0]}var Mv=class{constructor(e,t={}){this._pickable=!0,this.device=e,this.stats=t.stats,this.pickLayersPass=new u_(e),this.lastPickedInfo={index:-1,layerId:null,info:null}}setProps(e){`layerFilter`in e&&(this.layerFilter=e.layerFilter),`_pickable`in e&&(this._pickable=e._pickable)}finalize(){this.pickingFBO&&this.pickingFBO.destroy(),this.depthFBO&&this.depthFBO.destroy()}pickObjectAsync(e){return this._pickClosestObjectAsync(e)}pickObjectsAsync(e){return this._pickVisibleObjectsAsync(e)}pickObject(e){return this._pickClosestObject(e)}pickObjects(e){return this._pickVisibleObjects(e)}getLastPickedObject({x:e,y:t,layers:n,viewports:r},i=this.lastPickedInfo.info){let a=i&&i.layer&&i.layer.id,o=i&&i.viewport&&i.viewport.id,s=a?n.find(e=>e.id===a):null,c=o&&r.find(e=>e.id===o)||r[0],l={x:e,y:t,viewport:c,coordinate:c&&c.unproject([e-c.x,t-c.y]),layer:s};return{...i,...l}}_resizeBuffer(){if(!this.pickingFBO){let e=this.device.createTexture({format:`rgba8unorm`,width:1,height:1,usage:F.RENDER_ATTACHMENT|F.COPY_SRC});if(this.pickingFBO=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:`depth16unorm`}),this.device.isTextureFormatRenderable(`rgba32float`)){let e=this.device.createTexture({format:`rgba32float`,width:1,height:1,usage:F.RENDER_ATTACHMENT|F.COPY_SRC});this.depthFBO=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:`depth16unorm`})}}let{canvas:e}=this.device.getDefaultCanvasContext();this.pickingFBO?.resize({width:e.width,height:e.height}),this.depthFBO?.resize({width:e.width,height:e.height})}_getPickable(e){if(this._pickable===!1)return null;let t=e.filter(e=>this.pickLayersPass.shouldDrawLayer(e)&&!e.isComposite);return t.length?t:null}async _pickClosestObjectAsync({layers:e,views:t,viewports:n,x:r,y:i,radius:a=0,depth:o=1,mode:s=`query`,unproject3D:c,onViewportActive:l,effects:u}){let d=this.device.canvasContext.cssToDeviceRatio(),f=this._getPickable(e);if(!f||n.length===0)return{result:[],emptyInfo:Ov({viewports:n,x:r,y:i,pixelRatio:d})};this._resizeBuffer();let p=this.device.canvasContext.cssToDevicePixels([r,i],!0),m=[p.x+Math.floor(p.width/2),p.y+Math.floor(p.height/2)],h=Math.round(a*d),{width:g,height:_}=this.pickingFBO,v=this._getPickingRect({deviceX:m[0],deviceY:m[1],deviceRadius:h,deviceWidth:g,deviceHeight:_}),y={x:r-a,y:i-a,width:a*2+1,height:a*2+1},b,x=[],S=new Set;for(let e=0;e<o;e++){let a;a=v?Ev({...await this._drawAndSampleAsync({layers:f,views:t,viewports:n,onViewportActive:l,deviceRect:v,cullRect:y,effects:u,pass:`picking:${s}`}),deviceX:m[0],deviceY:m[1],deviceRadius:h,deviceRect:v}):{pickedColor:null,pickedObjectIndex:-1};let p,g=this._getDepthLayers(a,f,c);if(g.length>0){let{pickedColors:e}=await this._drawAndSampleAsync({layers:g,views:t,viewports:n,onViewportActive:l,deviceRect:{x:a.pickedX??m[0],y:a.pickedY??m[1],width:1,height:1},cullRect:y,effects:u,pass:`picking:${s}:z`},!0);e[3]&&(p=e[0])}a.pickedLayer&&e+1<o&&(S.add(a.pickedLayer),a.pickedLayer.disablePickingIndex(a.pickedObjectIndex)),b=kv({pickInfo:a,lastPickedInfo:this.lastPickedInfo,mode:s,layers:f,viewports:n,x:r,y:i,z:p,pixelRatio:d});for(let e of b.values())e.layer&&x.push(e);if(!a.pickedColor)break}for(let e of S)e.restorePickingColors();return{result:x,emptyInfo:b.get(null)}}_pickClosestObject({layers:e,views:t,viewports:n,x:r,y:i,radius:a=0,depth:o=1,mode:s=`query`,unproject3D:c,onViewportActive:l,effects:u}){let d=this.device.canvasContext.cssToDeviceRatio(),f=this._getPickable(e);if(!f||n.length===0)return{result:[],emptyInfo:Ov({viewports:n,x:r,y:i,pixelRatio:d})};this._resizeBuffer();let p=this.device.canvasContext.cssToDevicePixels([r,i],!0),m=[p.x+Math.floor(p.width/2),p.y+Math.floor(p.height/2)],h=Math.round(a*d),{width:g,height:_}=this.pickingFBO,v=this._getPickingRect({deviceX:m[0],deviceY:m[1],deviceRadius:h,deviceWidth:g,deviceHeight:_}),y={x:r-a,y:i-a,width:a*2+1,height:a*2+1},b,x=[],S=new Set;for(let e=0;e<o;e++){let a;a=v?Ev({...this._drawAndSample({layers:f,views:t,viewports:n,onViewportActive:l,deviceRect:v,cullRect:y,effects:u,pass:`picking:${s}`}),deviceX:m[0],deviceY:m[1],deviceRadius:h,deviceRect:v}):{pickedColor:null,pickedObjectIndex:-1};let p,g=this._getDepthLayers(a,f,c);if(g.length>0){let{pickedColors:e}=this._drawAndSample({layers:g,views:t,viewports:n,onViewportActive:l,deviceRect:{x:a.pickedX??m[0],y:a.pickedY??m[1],width:1,height:1},cullRect:y,effects:u,pass:`picking:${s}:z`},!0);e[3]&&(p=e[0])}a.pickedLayer&&e+1<o&&(S.add(a.pickedLayer),a.pickedLayer.disablePickingIndex(a.pickedObjectIndex)),b=kv({pickInfo:a,lastPickedInfo:this.lastPickedInfo,mode:s,layers:f,viewports:n,x:r,y:i,z:p,pixelRatio:d});for(let e of b.values())e.layer&&x.push(e);if(!a.pickedColor)break}for(let e of S)e.restorePickingColors();return{result:x,emptyInfo:b.get(null)}}async _pickVisibleObjectsAsync({layers:e,views:t,viewports:n,x:r,y:i,width:a=1,height:o=1,mode:s=`query`,maxObjects:c=null,onViewportActive:l,effects:u}){let d=this._getPickable(e);if(!d||n.length===0)return[];this._resizeBuffer();let f=this.device.canvasContext.cssToDeviceRatio(),p=this.device.canvasContext.cssToDevicePixels([r,i],!0),m=p.x,h=p.y+p.height,g=this.device.canvasContext.cssToDevicePixels([r+a,i+o],!0),_=g.x+g.width,v=g.y,y={x:m,y:v,width:_-m,height:h-v},b=Dv(await this._drawAndSampleAsync({layers:d,views:t,viewports:n,onViewportActive:l,deviceRect:y,cullRect:{x:r,y:i,width:a,height:o},effects:u,pass:`picking:${s}`})),x=new Map,S=[],C=Number.isFinite(c);for(let e=0;e<b.length&&!(C&&S.length>=c);e++){let t=b[e],n={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:i,pixelRatio:f};n=Av({layer:t.pickedLayer,info:n,mode:s});let a=n.layer.id;x.has(a)||x.set(a,new Set);let o=x.get(a),c=n.object??n.index;o.has(c)||(o.add(c),S.push(n))}return S}_pickVisibleObjects({layers:e,views:t,viewports:n,x:r,y:i,width:a=1,height:o=1,mode:s=`query`,maxObjects:c=null,onViewportActive:l,effects:u}){let d=this._getPickable(e);if(!d||n.length===0)return[];this._resizeBuffer();let f=this.device.canvasContext.cssToDeviceRatio(),p=this.device.canvasContext.cssToDevicePixels([r,i],!0),m=p.x,h=p.y+p.height,g=this.device.canvasContext.cssToDevicePixels([r+a,i+o],!0),_=g.x+g.width,v=g.y,y={x:m,y:v,width:_-m,height:h-v},b=Dv(this._drawAndSample({layers:d,views:t,viewports:n,onViewportActive:l,deviceRect:y,cullRect:{x:r,y:i,width:a,height:o},effects:u,pass:`picking:${s}`})),x=new Map,S=[],C=Number.isFinite(c);for(let e=0;e<b.length&&!(C&&S.length>=c);e++){let t=b[e],n={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:i,pixelRatio:f};n=Av({layer:t.pickedLayer,info:n,mode:s});let a=n.layer.id;x.has(a)||x.set(a,new Set);let o=x.get(a),c=n.object??n.index;o.has(c)||(o.add(c),S.push(n))}return S}async _drawAndSampleAsync({layers:e,views:t,viewports:n,onViewportActive:r,deviceRect:i,cullRect:a,effects:o,pass:s},c=!1){let l=c?this.depthFBO:this.pickingFBO,u={layers:e,layerFilter:this.layerFilter,views:t,viewports:n,onViewportActive:r,pickingFBO:l,deviceRect:i,cullRect:a,effects:o,pass:s,pickZ:c,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(u.preRenderStats[e.id]=e.preRender(u));let{decodePickingColor:d,stats:f}=this.pickLayersPass.render(u);this._updateStats(f);let{x:p,y:m,width:h,height:g}=i,_=l.colorAttachments[0]?.texture;if(!_)throw Error(`Picking framebuffer color attachment is missing`);let v=await this._readTextureDataAsync(_,{x:p,y:m,width:h,height:g},c?Float32Array:Uint8Array);if(!c){let e=!1;for(let t=3;t<v.length;t+=4)if(v[t]!==0){e=!0;break}!e&&v.length>0&&R.warn(`Async pick readback returned only zero alpha values`,{deviceRect:i,bytes:Array.from(v.subarray(0,Math.min(v.length,16)))})()}return{pickedColors:v,decodePickingColor:d}}async _readTextureDataAsync(e,t,n){let{width:r,height:i}=t,a=e.computeMemoryLayout(t),o=this.device.createBuffer({byteLength:a.byteLength,usage:N.COPY_DST|N.MAP_READ});try{e.readBuffer(t,o);let s=await o.readAsync(0,a.byteLength),c=n.BYTES_PER_ELEMENT;if(a.bytesPerRow%c!==0)throw Error(`Texture readback row stride ${a.bytesPerRow} is not aligned to ${c}-byte elements.`);let l=new n(s.buffer,s.byteOffset,a.byteLength/c),u=r*4,d=a.bytesPerRow/c;if(d<u)throw Error(`Texture readback row stride ${d} is smaller than packed row length ${u}.`);let f=new n(r*i*4);for(let e=0;e<i;e++){let t=e*d;f.set(l.subarray(t,t+u),e*u)}return f}finally{o.destroy()}}_drawAndSample({layers:e,views:t,viewports:n,onViewportActive:r,deviceRect:i,cullRect:a,effects:o,pass:s},c=!1){let l=c?this.depthFBO:this.pickingFBO,u={layers:e,layerFilter:this.layerFilter,views:t,viewports:n,onViewportActive:r,pickingFBO:l,deviceRect:i,cullRect:a,effects:o,pass:s,pickZ:c,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(u.preRenderStats[e.id]=e.preRender(u));let{decodePickingColor:d,stats:f}=this.pickLayersPass.render(u);this._updateStats(f);let{x:p,y:m,width:h,height:g}=i,_=new(c?Float32Array:Uint8Array)(h*g*4);return this.device.readPixelsToArrayWebGL(l,{sourceX:p,sourceY:m,sourceWidth:h,sourceHeight:g,target:_}),{pickedColors:_,decodePickingColor:d}}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:n}of e)t+=n;this.stats.get(`Layers picked`).addCount(t)}_getDepthLayers(e,t,n){if(!n||!this.depthFBO)return[];let{pickedLayer:r}=e,i=r?.state?.terrainDrawMode===`drape`;return r&&!i?[r]:t.filter(e=>e.props.operation.includes(`terrain`))}_getPickingRect({deviceX:e,deviceY:t,deviceRadius:n,deviceWidth:r,deviceHeight:i}){let a=Math.max(0,e-n),o=Math.max(0,t-n),s=Math.min(r,e+n+1)-a,c=Math.min(i,t+n+1)-o;return s<=0||c<=0?null:{x:a,y:o,width:s,height:c}}},Nv={"top-left":{top:0,left:0},"top-right":{top:0,right:0},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},fill:{top:0,left:0,bottom:0,right:0}},Pv=`top-left`,Fv=`root`,Iv=class{constructor({deck:e,parentElement:t}){this.defaultWidgets=[],this.widgets=[],this.resolvedWidgets=[],this.containers={},this.lastViewports={},this.deck=e,t?.classList.add(`deck-widget-container`),this.parentElement=t}getWidgets(){return this.resolvedWidgets}setProps(e){if(e.widgets&&!Z(e.widgets,this.widgets,1)){let t=e.widgets.filter(Boolean);this._setWidgets(t)}}finalize(){for(let e of this.getWidgets())this._removeWidget(e);this.defaultWidgets.length=0,this.resolvedWidgets.length=0;for(let e in this.containers)this.containers[e].remove()}addDefault(e){this.defaultWidgets.find(t=>t.id===e.id)||(this._addWidget(e),this.defaultWidgets.push(e),this._setWidgets(this.widgets))}onRedraw({viewports:e,layers:t}){let n=e.reduce((e,t)=>(e[t.id]=t,e),{});for(let r of this.getWidgets()){let{viewId:i}=r;if(i){let e=n[i];e&&(r.onViewportChange&&r.onViewportChange(e),r.onRedraw?.({viewports:[e],layers:t}))}else{if(r.onViewportChange)for(let t of e)r.onViewportChange(t);r.onRedraw?.({viewports:e,layers:t})}}this.lastViewports=n,this._updateContainers()}onHover(e,t){for(let n of this.getWidgets()){let{viewId:r}=n;(!r||r===e.viewport?.id)&&n.onHover?.(e,t)}}onEvent(e,t){let n=zp[t.type];if(n)for(let r of this.getWidgets()){let{viewId:i}=r;(!i||i===e.viewport?.id)&&r[n]?.(e,t)}}_setWidgets(e){let t={};for(let e of this.resolvedWidgets)t[e.id]=e;this.resolvedWidgets.length=0;for(let e of this.defaultWidgets)t[e.id]=null,this.resolvedWidgets.push(e);for(let n of e){let e=t[n.id];e?e.viewId!==n.viewId||e.placement!==n.placement?(this._removeWidget(e),this._addWidget(n)):n!==e&&(e.setProps(n.props),n=e):this._addWidget(n),t[n.id]=null,this.resolvedWidgets.push(n)}for(let e in t){let n=t[e];n&&this._removeWidget(n)}this.widgets=e}_addWidget(e){let{viewId:t=null,placement:n=Pv}=e,r=e.props._container??t;e.widgetManager=this,e.deck=this.deck,e.rootElement=e._onAdd({deck:this.deck,viewId:t}),e.rootElement&&this._getContainer(r,n).append(e.rootElement),e.updateHTML()}_removeWidget(e){e.onRemove?.(),e.rootElement&&e.rootElement.remove(),e.rootElement=void 0,e.deck=void 0,e.widgetManager=void 0}_getContainer(e,t){if(e&&typeof e!=`string`)return e;let n=e||Fv,r=this.containers[n];r||(r=document.createElement(`div`),r.style.pointerEvents=`none`,r.style.position=`absolute`,r.style.overflow=`hidden`,this.parentElement?.append(r),this.containers[n]=r);let i=r.querySelector(`.${t}`);return i||(i=globalThis.document.createElement(`div`),i.className=t,i.style.position=`absolute`,i.style.zIndex=`2`,Object.assign(i.style,Nv[t]),r.append(i)),i}_updateContainers(){let e=this.deck.width,t=this.deck.height;for(let n in this.containers){let r=this.lastViewports[n]||null,i=n===Fv||r,a=this.containers[n];i?(a.style.display=`block`,a.style.left=`${r?r.x:0}px`,a.style.top=`${r?r.y:0}px`,a.style.width=`${r?r.width:e}px`,a.style.height=`${r?r.height:t}px`):a.style.display=`none`}}};function Lv(e,t){t&&Object.entries(t).map(([t,n])=>{t.startsWith(`--`)?e.style.setProperty(t,n):e.style[t]=n})}function Rv(e,t){t&&Object.keys(t).map(t=>{t.startsWith(`--`)?e.style.removeProperty(t):e.style[t]=``})}var zv=class{constructor(e){this.viewId=null,this.props={...this.constructor.defaultProps,...e},this.id=this.props.id}setProps(e){let t=this.props,n=this.rootElement;n&&t.className!==e.className&&(t.className&&n.classList.remove(t.className),e.className&&n.classList.add(e.className)),n&&!Z(t.style,e.style,1)&&(Rv(n,t.style),Lv(n,e.style)),Object.assign(this.props,e),this.updateHTML()}updateHTML(){this.rootElement&&this.onRenderHTML(this.rootElement)}get viewIds(){return this.viewId?[this.viewId]:this.deck?.getViews().map(e=>e.id)??[]}getViewState(e){return this.deck?.viewManager?.getViewState(e)||{}}setViewState(e,t){this.deck?._onViewStateChange({viewId:e,viewState:t,interactionState:{}})}onCreateRootElement(){let e=[`deck-widget`,this.className,this.props.className],t=document.createElement(`div`);return e.filter(e=>typeof e==`string`&&e.length>0).forEach(e=>t.classList.add(e)),Lv(t,this.props.style),t}_onAdd(e){return this.onAdd(e)??this.onCreateRootElement()}onAdd(e){}onRemove(){}onViewportChange(e){}onRedraw(e){}onHover(e,t){}onClick(e,t){}onDrag(e,t){}onDragStart(e,t){}onDragEnd(e,t){}};zv.defaultProps={id:`widget`,style:{},_container:null,className:``};var Bv={zIndex:`1`,position:`absolute`,pointerEvents:`none`,color:`#a0a7b4`,backgroundColor:`#29323c`,padding:`10px`,top:`0`,left:`0`,display:`none`},Vv=class extends zv{constructor(e={}){super(e),this.id=`default-tooltip`,this.placement=`fill`,this.className=`deck-tooltip`,this.isVisible=!1,this.setProps(e)}onCreateRootElement(){let e=document.createElement(`div`);return e.className=this.className,Object.assign(e.style,Bv),e}onRenderHTML(e){}onViewportChange(e){this.isVisible&&e.id===this.lastViewport?.id&&!e.equals(this.lastViewport)&&this.setTooltip(null),this.lastViewport=e}onHover(e){let{deck:t}=this,n=t&&t.props.getTooltip;if(!n)return;let r=n(e);this.setTooltip(r,e.x,e.y)}setTooltip(e,t,n){let r=this.rootElement;if(r){if(typeof e==`string`)r.innerText=e;else if(e)e.text&&(r.innerText=e.text),e.html&&(r.innerHTML=e.html),e.className&&(r.className=e.className);else{this.isVisible=!1,r.style.display=`none`;return}this.isVisible=!0,r.style.display=`block`,r.style.transform=`translate(${t}px, ${n}px)`,e&&typeof e==`object`&&`style`in e&&Object.assign(r.style,e.style)}}};Vv.defaultProps={...zv.defaultProps};function Hv(){}var Uv={id:``,width:`100%`,height:`100%`,style:null,viewState:null,initialViewState:null,pickingRadius:0,pickAsync:`auto`,layerFilter:null,parameters:{},parent:null,device:null,deviceProps:{},gl:null,canvas:null,layers:[],effects:[],views:null,controller:null,useDevicePixels:!0,touchAction:`none`,eventRecognizerOptions:{},_framebuffer:null,_animate:!1,_pickable:!0,_typedArrayManagerProps:{},_customRender:null,widgets:[],onDeviceInitialized:Hv,onWebGLInitialized:Hv,onResize:Hv,onViewStateChange:Hv,onInteractionStateChange:Hv,onBeforeRender:Hv,onAfterRender:Hv,onLoad:Hv,onError:e=>R.error(e.message,e.cause)(),onHover:null,onClick:null,onDragStart:null,onDrag:null,onDragEnd:null,_onMetrics:null,getCursor:({isDragging:e})=>e?`grabbing`:`grab`,getTooltip:null,debug:!1,drawPickingColors:!1},Wv=class{constructor(e){this.width=0,this.height=0,this.userData={},this.device=null,this.canvas=null,this.viewManager=null,this.layerManager=null,this.effectManager=null,this.deckRenderer=null,this.deckPicker=null,this.eventManager=null,this.widgetManager=null,this.tooltip=null,this.animationLoop=null,this.cursorState={isHovering:!1,isDragging:!1},this.stats=new ie({id:`deck.gl`}),this.metrics={fps:0,setPropsTime:0,layersCount:0,drawLayersCount:0,updateLayersCount:0,updateAttributesCount:0,updateAttributesTime:0,framesRedrawn:0,pickTime:0,pickCount:0,pickLayersCount:0,gpuTime:0,gpuTimePerFrame:0,cpuTime:0,cpuTimePerFrame:0,bufferMemory:0,textureMemory:0,renderbufferMemory:0,gpuMemory:0},this._metricsCounter=0,this._hoverPickSequence=0,this._pointerDownPickSequence=0,this._needsRedraw=`Initial render`,this._pickRequest={mode:`hover`,x:-1,y:-1,radius:0,event:null,unproject3D:!1},this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this._onPointerMove=e=>{let{_pickRequest:t}=this;if(e.type===`pointerleave`)t.x=-1,t.y=-1,t.radius=0;else if(e.leftButton||e.rightButton)return;else{let n=e.offsetCenter;if(!n)return;t.x=n.x,t.y=n.y,t.radius=this.props.pickingRadius}this.layerManager&&(this.layerManager.context.mousePosition={x:t.x,y:t.y}),t.event=e},this._onEvent=e=>{let t=zp[e.type],n=e.offsetCenter;if(!t||!n||!this.layerManager)return;let r=this.layerManager.getLayers(),i=this._getInternalPickingMode();if(i){if(i===`sync`){let t=e.type===`click`&&this._shouldUnproject3D(r)?this._getFirstPickedInfo(this._pickPointSync(this._getPointPickOptions(n.x,n.y,{unproject3D:!0},r))):this._getLastPointerDownPickingInfo(n.x,n.y,r);this._dispatchPickingEvent(t,e);return}(this._lastPointerDownInfoPromise||Promise.resolve(this._getLastPointerDownPickingInfo(n.x,n.y,r))).then(t=>{this._dispatchPickingEvent(t,e)}).catch(e=>this.props.onError?.(e))}},this._onPointerDown=e=>{let t=e.offsetCenter;if(!t)return;let n=this._getInternalPickingMode();if(!n)return;let r=this.layerManager?.getLayers()||[],i=++this._pointerDownPickSequence;if(n===`sync`){let e=this._pickPointSync({x:t.x,y:t.y,radius:this.props.pickingRadius}),n=this._getFirstPickedInfo(e);this._lastPointerDownInfo=n,this._lastPointerDownInfoPromise=Promise.resolve(n);return}let a=this._pickPointAsync(this._getPointPickOptions(t.x,t.y,{},r)).then(e=>this._getFirstPickedInfo(e)).then(e=>(i===this._pointerDownPickSequence&&(this._lastPointerDownInfo=e),e)).catch(e=>{this.props.onError?.(e);let n=this.deckPicker&&this.viewManager?this._getLastPointerDownPickingInfo(t.x,t.y,r):{};return i===this._pointerDownPickSequence&&(this._lastPointerDownInfo=n),n});this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=a},this.props={...Uv,...e},e=this.props,e.viewState&&e.initialViewState&&R.warn("View state tracking is disabled. Use either `initialViewState` for auto update or `viewState` for manual update.")(),this.viewState=this.props.initialViewState,e.device&&(this.device=e.device);let t=this.device;if(!t&&e.gl){e.gl instanceof WebGLRenderingContext&&R.error(`WebGL1 context not supported.`)();let n=this.props.deviceProps?.onResize;t=Gt.attach(e.gl,{_cacheShaders:!0,_cachePipelines:!0,...this.props.deviceProps,onResize:(e,t)=>{let{width:r,height:i}=e.canvas;e.setDrawingBufferSize(r,i),this._needsRedraw=`Canvas resized`,n?.(e,t)}})}t||=this._createDevice(e),this.animationLoop=this._createAnimationLoop(t,e),this.setProps(e),e._typedArrayManagerProps&&Ch.setOptions(e._typedArrayManagerProps),this.animationLoop.start()}finalize(){this.animationLoop?.stop(),this.animationLoop?.destroy(),this.animationLoop=null,this._hoverPickSequence++,this._pointerDownPickSequence++,this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this.layerManager?.finalize(),this.layerManager=null,this.viewManager?.finalize(),this.viewManager=null,this.effectManager?.finalize(),this.effectManager=null,this.deckRenderer?.finalize(),this.deckRenderer=null,this.deckPicker?.finalize(),this.deckPicker=null,this.eventManager?.destroy(),this.eventManager=null,this.widgetManager?.finalize(),this.widgetManager=null,!this.props.canvas&&!this.props.device&&!this.props.gl&&this.canvas&&(this.canvas.parentElement?.removeChild(this.canvas),this.canvas=null)}setProps(e){this.stats.get(`setProps Time`).timeStart(),`onLayerHover`in e&&R.removed(`onLayerHover`,`onHover`)(),`onLayerClick`in e&&R.removed(`onLayerClick`,`onClick`)(),e.initialViewState&&!Z(this.props.initialViewState,e.initialViewState,3)&&(this.viewState=e.initialViewState),Object.assign(this.props,e),this._validateInternalPickingMode(),this._setCanvasSize(this.props);let t=Object.create(this.props);Object.assign(t,{views:this._getViews(),width:this.width,height:this.height,viewState:this._getViewState()}),e.device&&e.device.id!==this.device?.id&&(this.animationLoop?.stop(),this.canvas!==e.device.canvasContext?.canvas&&(this.canvas?.remove(),this.eventManager?.destroy(),this.canvas=null),R.log(`recreating animation loop for new device! id=${e.device.id}`)(),this.animationLoop=this._createAnimationLoop(e.device,e),this.animationLoop.start()),this.animationLoop?.setProps(t),e.useDevicePixels!==void 0&&this.device?.canvasContext?.setProps&&this.device.canvasContext.setProps({useDevicePixels:e.useDevicePixels}),this.layerManager&&(this.viewManager.setProps(t),this.layerManager.activateViewport(this.getViewports()[0]),this.layerManager.setProps(t),this.effectManager.setProps(t),this.deckRenderer.setProps(t),this.deckPicker.setProps(t),this.widgetManager.setProps(t)),this.stats.get(`setProps Time`).timeEnd()}needsRedraw(e={clearRedrawFlags:!1}){if(!this.layerManager)return!1;if(this.props._animate)return`Deck._animate`;let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);let n=this.viewManager.needsRedraw(e),r=this.layerManager.needsRedraw(e),i=this.effectManager.needsRedraw(e),a=this.deckRenderer.needsRedraw(e);return t=t||n||r||i||a,t}redraw(e){if(!this.layerManager)return;let t=this.needsRedraw({clearRedrawFlags:!0});t=e||t,t&&(this.stats.get(`Redraw Count`).incrementCount(),this.props._customRender?this.props._customRender(t):this._drawLayers(t))}get isInitialized(){return this.viewManager!==null}getViews(){return Q(this.viewManager),this.viewManager.views}getView(e){return Q(this.viewManager),this.viewManager.getView(e)}getViewports(e){return Q(this.viewManager),this.viewManager.getViewports(e)}getCanvas(){return this.canvas}async pickObjectAsync(e){let t=(await this._pickAsync(`pickObjectAsync`,`pickObject Time`,e)).result;return t.length?t[0]:null}async pickObjectsAsync(e){return await this._pickAsync(`pickObjectsAsync`,`pickObjects Time`,e)}pickObject(e){let t=this._pick(`pickObject`,`pickObject Time`,e).result;return t.length?t[0]:null}pickMultipleObjects(e){return e.depth=e.depth||10,this._pick(`pickObject`,`pickMultipleObjects Time`,e).result}pickObjects(e){return this._pick(`pickObjects`,`pickObjects Time`,e)}_pickPositionForController(e,t){return this._getInternalPickingMode()===`sync`?this.pickObject({x:e,y:t,radius:0,unproject3D:!0}):null}_addResources(e,t=!1){for(let n in e)this.layerManager.resourceManager.add({resourceId:n,data:e[n],forceUpdate:t})}_removeResources(e){for(let t of e)this.layerManager.resourceManager.remove(t)}_addDefaultEffect(e){this.effectManager.addDefaultEffect(e)}_addDefaultShaderModule(e){this.layerManager.addDefaultShaderModule(e)}_removeDefaultShaderModule(e){this.layerManager?.removeDefaultShaderModule(e)}_resolveInternalPickingMode(){let{pickAsync:e}=this.props,t=this.device?.type||this.props.deviceProps?.type;if(e===`auto`)return t===`webgpu`?`async`:`sync`;if(e===`sync`&&t===`webgpu`)throw Error('`pickAsync: "sync"` is not supported when Deck is using a WebGPU device.');return e}_getInternalPickingMode(){try{return this._resolveInternalPickingMode()}catch(e){return this.props.onError?.(e),null}}_validateInternalPickingMode(){this._getInternalPickingMode()}_getFirstPickedInfo({result:e,emptyInfo:t}){return e[0]||t}_shouldUnproject3D(e=this.layerManager?.getLayers()||[]){return e.some(e=>e.props.pickable===`3d`)}_getPointPickOptions(e,t,n={},r=this.layerManager?.getLayers()||[]){return{x:e,y:t,radius:this.props.pickingRadius,unproject3D:this._shouldUnproject3D(r),...n}}_pickPointSync(e){return this._pick(`pickObject`,`pickObject Time`,e)}_pickPointAsync(e){return this._pickAsync(`pickObjectAsync`,`pickObject Time`,e)}_getLastPointerDownPickingInfo(e,t,n=this.layerManager?.getLayers()||[]){return this.deckPicker.getLastPickedObject({x:e,y:t,layers:n,viewports:this.getViewports({x:e,y:t})},this._lastPointerDownInfo)}_applyHoverCallbacks({result:e,emptyInfo:t},n){if(!this.widgetManager)return;this.cursorState.isHovering=e.length>0;let r=t,i=!1;for(let t of e)r=t,i=t.layer?.onHover(t,n)||i;i||(this.props.onHover?.(r,n),this.widgetManager.onHover(r,n))}_dispatchPickingEvent(e,t){if(!this.layerManager||!this.widgetManager)return;let n=zp[t.type];if(!n)return;let{layer:r}=e,i=r&&(r[n]||r.props[n]),a=this.props[n],o=!1;i&&(o=i.call(r,e,t)),o||(a?.(e,t),this.widgetManager.onEvent(e,t))}_pickAsync(e,t,n){Q(this.deckPicker);let{stats:r}=this;r.get(`Pick Count`).incrementCount(),r.get(t).timeStart();let i=this.deckPicker[e]({layers:this.layerManager.getLayers(n),views:this.viewManager.getViews(),viewports:this.getViewports(n),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...n});return r.get(t).timeEnd(),i}_pick(e,t,n){Q(this.deckPicker);let{stats:r}=this;r.get(`Pick Count`).incrementCount(),r.get(t).timeStart();let i=this.deckPicker[e]({layers:this.layerManager.getLayers(n),views:this.viewManager.getViews(),viewports:this.getViewports(n),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...n});return r.get(t).timeEnd(),i}_createCanvas(e){let t=e.canvas;return typeof t==`string`&&(t=document.getElementById(t),Q(t)),t||(t=document.createElement(`canvas`),t.id=e.id||`deckgl-overlay`,e.width&&typeof e.width==`number`&&(t.width=e.width),e.height&&typeof e.height==`number`&&(t.height=e.height),(e.parent||document.body).appendChild(t)),Object.assign(t.style,e.style),t}_setCanvasSize(e){if(!this.canvas)return;let{width:t,height:n}=e;if(t||t===0){let e=Number.isFinite(t)?`${t}px`:t;this.canvas.style.width=e}if(n||n===0){let t=Number.isFinite(n)?`${n}px`:n;this.canvas.style.position=e.style?.position||`absolute`,this.canvas.style.height=t}}_updateCanvasSize(){let{canvas:e}=this;if(!e)return;let t=e.clientWidth??e.width,n=e.clientHeight??e.height;(t!==this.width||n!==this.height)&&(this.width=t,this.height=n,this.viewManager?.setProps({width:t,height:n}),this.layerManager?.activateViewport(this.getViewports()[0]),this.props.onResize({width:t,height:n}))}_createAnimationLoop(e,t){let{gl:n,onError:r}=t;return new $h({device:e,autoResizeDrawingBuffer:!n,autoResizeViewport:!1,onInitialize:e=>this._setDevice(e.device),onRender:this._onRenderFrame.bind(this),onError:r})}_createDevice(e){let t=this.props.deviceProps?.createCanvasContext,n=typeof t==`object`?t:void 0,r={adapters:[],_cacheShaders:!0,_cachePipelines:!0,...e.deviceProps};r.adapters.includes(Gt)||r.adapters.push(Gt);let i={alphaMode:this.props.deviceProps?.type===`webgpu`?`premultiplied`:void 0},a=this.props.deviceProps?.onResize;return rt.createDevice({_reuseDevices:!0,type:`webgl`,...r,createCanvasContext:{...i,...n,canvas:this._createCanvas(e),useDevicePixels:this.props.useDevicePixels,autoResize:!0},onResize:(e,t)=>{this._needsRedraw=`Canvas resized`,a?.(e,t)}})}_getViewState(){return this.props.viewState||this.viewState}_getViews(){let{views:e}=this.props,t=Array.isArray(e)?e:e?[e]:[new vv({id:`default-view`})];return t.length&&this.props.controller&&(t[0].props.controller=this.props.controller),t}_onContextLost(){let{onError:e}=this.props;this.animationLoop&&e&&e(Error(`WebGL context is lost`))}_pickAndCallback(){let{_pickRequest:e}=this;if(e.event){let t=e.event,n=this.layerManager?.getLayers()||[],r=this._getPointPickOptions(e.x,e.y,{radius:e.radius,mode:e.mode},n),i=this._getInternalPickingMode(),a=++this._hoverPickSequence;if(e.event=null,!i)return;if(i===`sync`){this._applyHoverCallbacks(this._pickPointSync(r),t);return}this._pickPointAsync(r).then(({result:e,emptyInfo:n})=>{a===this._hoverPickSequence&&this._applyHoverCallbacks({result:e,emptyInfo:n},t)}).catch(e=>this.props.onError?.(e))}}_updateCursor(){let e=this.props.parent||this.canvas;e&&(e.style.cursor=this.props.getCursor(this.cursorState))}_setDevice(e){if(this.device=e,this._validateInternalPickingMode(),!this.animationLoop)return;this.canvas||(this.canvas=this.device.canvasContext?.canvas,!this.canvas.isConnected&&this.props.parent&&this.props.parent.insertBefore(this.canvas,this.props.parent.firstChild)),this.device.type===`webgl`&&this.device.setParametersWebGL({blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthTest:!0,depthFunc:515}),this.props.onDeviceInitialized(this.device),this.device.type===`webgl`&&this.props.onWebGLInitialized(this.device.gl);let t=new Jh;t.play(),this.animationLoop.attachTimeline(t),this.eventManager=new Ip(this.props.parent?.querySelector(`.deck-events-root`)||this.canvas,{touchAction:this.props.touchAction,recognizers:Object.keys(Bp).map(e=>{let[t,n,r,i]=Bp[e],a=this.props.eventRecognizerOptions?.[e];return{recognizer:new t({...n,...a,event:e}),recognizeWith:r,requestFailure:i}}),events:{pointerdown:this._onPointerDown,pointermove:this._onPointerMove,pointerleave:this._onPointerMove}});for(let e in zp)this.eventManager.on(e,this._onEvent);this.viewManager=new O_({timeline:t,eventManager:this.eventManager,onViewStateChange:this._onViewStateChange.bind(this),onInteractionStateChange:this._onInteractionStateChange.bind(this),pickPosition:this._pickPositionForController.bind(this),views:this._getViews(),viewState:this._getViewState(),width:this.width,height:this.height});let n=this.viewManager.getViewports()[0];this.layerManager=new D_(this.device,{deck:this,stats:this.stats,viewport:n,timeline:t}),this.effectManager=new xv({deck:this,device:this.device}),this.deckRenderer=new wv(this.device,{stats:this.stats}),this.deckPicker=new Mv(this.device,{stats:this.stats});let r=this.props.parent?.querySelector(`.deck-widgets-root`)||this.canvas?.parentElement;this.widgetManager=new Iv({deck:this,parentElement:r}),this.widgetManager.addDefault(new Vv),this.setProps(this.props),this._updateCanvasSize(),this.props.onLoad()}_drawLayers(e,t){let{device:n,gl:r}=this.layerManager.context;this.props.onBeforeRender({device:n,gl:r});let i={target:this.props._framebuffer,layers:this.layerManager.getLayers(),viewports:this.viewManager.getViewports(),onViewportActive:this.layerManager.activateViewport,views:this.viewManager.getViews(),pass:`screen`,effects:this.effectManager.getEffects(),...t};this.deckRenderer?.renderLayers(i),i.pass===`screen`&&this.widgetManager.onRedraw({viewports:i.viewports,layers:i.layers}),this.props.onAfterRender({device:n,gl:r})}_onRenderFrame(){this._getFrameStats(),this._metricsCounter++%60==0&&(this._getMetrics(),this.stats.reset(),R.table(4,this.metrics)(),this.props._onMetrics&&this.props._onMetrics(this.metrics)),this._updateCanvasSize(),this._updateCursor(),this.layerManager.updateLayers(),this._pickAndCallback(),this.redraw(),this.viewManager&&this.viewManager.updateViewStates()}_onViewStateChange(e){let t=this.props.onViewStateChange(e)||e.viewState;this.viewState&&(this.viewState={...this.viewState,[e.viewId]:t},this.props.viewState||this.viewManager&&this.viewManager.setProps({viewState:this.viewState}))}_onInteractionStateChange(e){this.cursorState.isDragging=e.isDragging||!1,this.props.onInteractionStateChange(e)}_getFrameStats(){let{stats:e}=this;e.get(`frameRate`).timeEnd(),e.get(`frameRate`).timeStart();let t=this.animationLoop.stats;e.get(`GPU Time`).addTime(t.get(`GPU Time`).lastTiming),e.get(`CPU Time`).addTime(t.get(`CPU Time`).lastTiming)}_getMetrics(){let{metrics:e,stats:t}=this;e.fps=t.get(`frameRate`).getHz(),e.setPropsTime=t.get(`setProps Time`).time,e.updateAttributesTime=t.get(`Update Attributes`).time,e.framesRedrawn=t.get(`Redraw Count`).count,e.pickTime=t.get(`pickObject Time`).time+t.get(`pickMultipleObjects Time`).time+t.get(`pickObjects Time`).time,e.pickCount=t.get(`Pick Count`).count,e.layersCount=this.layerManager?.layers.length??0,e.drawLayersCount=t.get(`Layers rendered`).lastSampleCount,e.pickLayersCount=t.get(`Layers picked`).lastSampleCount,e.updateAttributesCount=t.get(`Layers updated`).count,e.updateAttributesCount=t.get(`Attributes updated`).count,e.gpuTime=t.get(`GPU Time`).time,e.cpuTime=t.get(`CPU Time`).time,e.gpuTimePerFrame=t.get(`GPU Time`).getAverageTime(),e.cpuTimePerFrame=t.get(`CPU Time`).getAverageTime();let n=rt.stats.get(`GPU Time and Memory`);e.bufferMemory=n.get(`Buffer Memory`).count,e.textureMemory=n.get(`Texture Memory`).count,e.renderbufferMemory=n.get(`Renderbuffer Memory`).count,e.gpuMemory=n.get(`GPU Memory`).count}};Wv.defaultProps=Uv,Wv.VERSION=ps;function Gv(e){switch(e){case`float64`:return Float64Array;case`uint8`:case`unorm8`:return Uint8ClampedArray;default:return fe(e)}}var Kv=se.getDataType.bind(se);function qv(e,t,n){if(t.size>4)return null;let r=n===`webgpu`&&t.type===`uint8`?`unorm8`:t.type;return{attribute:e,format:t.size>1?`${r}x${t.size}`:t.type,byteOffset:t.offset||0}}function Jv(e){return e.stride||e.size*e.bytesPerElement}function Yv(e,t){return e.type===t.type&&e.size===t.size&&Jv(e)===Jv(t)&&(e.offset||0)===(t.offset||0)}function Xv(e,t){t.offset&&R.removed(`shaderAttribute.offset`,`vertexOffset, elementOffset`)();let n=Jv(e),r=t.vertexOffset===void 0?e.vertexOffset||0:t.vertexOffset,i=t.elementOffset||0,a=r*n+i*e.bytesPerElement+(e.offset||0);return{...t,offset:a,stride:n}}function Zv(e,t){let n=Xv(e,t);return{high:n,low:{...n,offset:n.offset+e.size*4}}}var Qv=class{constructor(e,t,n){this._buffer=null,this.device=e,this.id=t.id||``,this.size=t.size||1;let r=t.logicalType||t.type,i=r===`float64`,{defaultValue:a}=t;a=Number.isFinite(a)?[a]:a||Array(this.size).fill(0);let o;o=i?`float32`:!r&&t.isIndexed?`uint32`:r||`float32`;let s=Gv(r||o);this.doublePrecision=i,i&&t.fp64===!1&&(s=Float32Array),this.value=null,this.settings={...t,defaultType:s,defaultValue:a,logicalType:r,type:o,normalized:o.includes(`norm`),size:this.size,bytesPerElement:s.BYTES_PER_ELEMENT},this.state={...n,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){let e=this.getAccessor();return e.vertexOffset?e.vertexOffset*Jv(e):0}get numInstances(){return this.state.numInstances}set numInstances(e){this.state.numInstances=e}delete(){this._buffer&&=(this._buffer.delete(),null),Ch.release(this.state.allocatedValue)}getBuffer(){return this.state.constant?null:this.state.externalBuffer||this._buffer}getValue(e=this.id,t=null){let n={};if(this.state.constant){let r=this.value;if(t){let i=Xv(this.getAccessor(),t),a=i.offset/r.BYTES_PER_ELEMENT,o=i.size||this.size;n[e]=r.subarray(a,a+o)}else n[e]=r}else n[e]=this.getBuffer();return this.doublePrecision&&(this.value instanceof Float64Array?n[`${e}64Low`]=n[e]:n[`${e}64Low`]=new Float32Array(this.size)),n}_getBufferLayout(e=this.id,t=null){let n=this.getAccessor(),r=[],i={name:this.id,byteStride:Jv(n)};if(this.doublePrecision){let i=Zv(n,t||{});r.push(qv(e,{...n,...i.high},this.device.type),qv(`${e}64Low`,{...n,...i.low},this.device.type))}else if(t){let i=Xv(n,t);r.push(qv(e,{...n,...i},this.device.type))}else r.push(qv(e,n,this.device.type));return i.attributes=r.filter(Boolean),i}setAccessor(e){this.state.bufferAccessor=e}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let e=null;if(this.state.constant&&this.value){let t=Array.from(this.value);e=[t,t]}else{let{value:t,numInstances:n,size:r}=this,i=n*r;if(t&&i&&t.length>=i){let n=Array(r).fill(1/0),a=Array(r).fill(-1/0);for(let e=0;e<i;)for(let i=0;i<r;i++){let r=t[e++];r<n[i]&&(n[i]=r),r>a[i]&&(a[i]=r)}e=[n,a]}}return this.state.bounds=e,e}setData(e){let{state:t}=this,n;n=ArrayBuffer.isView(e)?{value:e}:e instanceof N?{buffer:e}:e;let r={...this.settings,...n};if(ArrayBuffer.isView(n.value)){if(!n.type)if(this.doublePrecision&&n.value instanceof Float64Array)r.type=`float32`;else{let e=Kv(n.value);r.type=r.normalized?e.replace(`int`,`norm`):e}r.bytesPerElement=n.value.BYTES_PER_ELEMENT,r.stride=Jv(r)}if(t.bounds=null,n.constant){let e=n.value;if(e=this._normalizeValue(e,[],0),this.settings.normalized&&(e=this.normalizeConstant(e)),!(!t.constant||!this._areValuesEqual(e,this.value)))return!1;t.externalBuffer=null,t.constant=!0,this.value=ArrayBuffer.isView(e)?e:new Float32Array(e)}else if(n.buffer)t.externalBuffer=n.buffer,t.constant=!1,this.value=n.value||null;else if(n.value){this._checkExternalBuffer(n);let e=n.value;t.externalBuffer=null,t.constant=!1,this.value=e;let{buffer:i}=this,a=Jv(r),o=(r.vertexOffset||0)*a;if(this.doublePrecision&&e instanceof Float64Array&&(e=Mh(e,r)),this.settings.isIndexed){let t=this.settings.defaultType;e.constructor!==t&&(e=new t(e))}let s=e.byteLength+o+a*2;(!i||i.byteLength<s)&&(i=this._createBuffer(s)),i.write(e,o)}return this.setAccessor(r),!0}updateSubBuffer(e={}){this.state.bounds=null;let t=this.value,{startOffset:n=0,endOffset:r}=e;this.buffer.write(this.doublePrecision&&t instanceof Float64Array?Mh(t,{size:this.size,startIndex:n,endIndex:r}):t.subarray(n,r),n*t.BYTES_PER_ELEMENT+this.byteOffset)}allocate(e,t=!1){let{state:n}=this,r=n.allocatedValue,i=Ch.allocate(r,e+1,{size:this.size,type:this.settings.defaultType,copy:t});this.value=i;let{byteOffset:a}=this,{buffer:o}=this;return(!o||o.byteLength<i.byteLength+a)&&(o=this._createBuffer(i.byteLength+a),t&&r&&o.write(r instanceof Float64Array?Mh(r,this):r,a)),n.allocatedValue=i,n.constant=!1,n.externalBuffer=null,this.setAccessor(this.settings),!0}_checkExternalBuffer(e){let{value:t}=e;if(!ArrayBuffer.isView(t))throw Error(`Attribute ${this.id} value is not TypedArray`);let n=this.settings.defaultType,r=!1;if(this.doublePrecision&&(r=t.BYTES_PER_ELEMENT<4),r)throw Error(`Attribute ${this.id} does not support ${t.constructor.name}`);!(t instanceof n)&&this.settings.normalized&&!(`normalized`in e)&&R.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(e){switch(this.settings.type){case`snorm8`:return new Float32Array(e).map(e=>(e+128)/255*2-1);case`snorm16`:return new Float32Array(e).map(e=>(e+32768)/65535*2-1);case`unorm8`:return new Float32Array(e).map(e=>e/255);case`unorm16`:return new Float32Array(e).map(e=>e/65535);default:return e}}_normalizeValue(e,t,n){let{defaultValue:r,size:i}=this.settings;if(Number.isFinite(e))return t[n]=e,t;if(!e){let e=i;for(;--e>=0;)t[n+e]=r[e];return t}switch(i){case 4:t[n+3]=Number.isFinite(e[3])?e[3]:r[3];case 3:t[n+2]=Number.isFinite(e[2])?e[2]:r[2];case 2:t[n+1]=Number.isFinite(e[1])?e[1]:r[1];case 1:t[n+0]=Number.isFinite(e[0])?e[0]:r[0];break;default:let a=i;for(;--a>=0;)t[n+a]=Number.isFinite(e[a])?e[a]:r[a]}return t}_areValuesEqual(e,t){if(!e||!t)return!1;let{size:n}=this;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}_createBuffer(e){this._buffer&&this._buffer.destroy();let{isIndexed:t,type:n}=this.settings;return this._buffer=this.device.createBuffer({...this._buffer?.props,id:this.id,usage:(t?N.INDEX:N.VERTEX)|N.COPY_DST,indexType:t?n:void 0,byteLength:e}),this._buffer}},$v=[],ey=[];function ty(e,t=0,n=1/0){let r=$v,i={index:-1,data:e,target:[]};return e?typeof e[Symbol.iterator]==`function`?r=e:e.length>0&&(ey.length=e.length,r=ey):r=$v,(t>0||Number.isFinite(n))&&(r=(Array.isArray(r)?r:Array.from(r)).slice(t,n),i.index=t-1),{iterable:r,objectInfo:i}}function ny(e){return e&&e[Symbol.asyncIterator]}function ry(e,t){let{size:n,stride:r,offset:i,startIndices:a,nested:o}=t,s=e.BYTES_PER_ELEMENT,c=r?r/s:n,l=i?i/s:0,u=Math.floor((e.length-l)/c);return(t,{index:r,target:i})=>{if(!a){let t=r*c+l;for(let r=0;r<n;r++)i[r]=e[t+r];return i}let s=a[r],d=a[r+1]||u,f;if(o){f=Array(d-s);for(let t=s;t<d;t++){let r=t*c+l;i=Array(n);for(let t=0;t<n;t++)i[t]=e[r+t];f[t-s]=i}}else if(c===n)f=e.subarray(s*n+l,d*n+l);else{f=new e.constructor((d-s)*n);let t=0;for(let r=s;r<d;r++){let i=r*c+l;for(let r=0;r<n;r++)f[t++]=e[i+r]}}return f}}var iy=[],ay=[[0,1/0]];function oy(e,t){if(e===ay||(t[0]<0&&(t[0]=0),t[0]>=t[1]))return e;let n=[],r=e.length,i=0;for(let a=0;a<r;a++){let r=e[a];r[1]<t[0]?(n.push(r),i=a+1):r[0]>t[1]?n.push(r):t=[Math.min(r[0],t[0]),Math.max(r[1],t[1])]}return n.splice(i,0,t),n}var sy={interpolation:{duration:0,easing:e=>e},spring:{stiffness:.05,damping:.5}};function cy(e,t){if(!e)return null;Number.isFinite(e)&&(e={type:`interpolation`,duration:e});let n=e.type||`interpolation`;return{...sy[n],...t,...e,type:n}}var ly=class extends Qv{constructor(e,t){super(e,t,{startIndices:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:ay}),this.constant=!1,this.settings.update=t.update||(t.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(e){this.state.startIndices=e}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:e=!1}={}){let t=this.state.needsRedraw;return this.state.needsRedraw=t&&!e,t}layoutChanged(){return this.state.layoutChanged}setAccessor(e){var t;(t=this.state).layoutChanged||(t.layoutChanged=!Yv(e,this.getAccessor())),super.setAccessor(e)}getUpdateTriggers(){let{accessor:e}=this.settings;return[this.id].concat(typeof e!=`function`&&e||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(e){if(!e||!this.supportsTransition())return null;let{accessor:t}=this.settings,n=this.settings.transition;return cy(Array.isArray(t)?e[t.find(t=>e[t])]:e[t],n)}setNeedsUpdate(e=this.id,t){if(this.state.needsUpdate=this.state.needsUpdate||e,this.setNeedsRedraw(e),t){let{startRow:e=0,endRow:n=1/0}=t;this.state.updateRanges=oy(this.state.updateRanges,[e,n])}else this.state.updateRanges=ay}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=iy}setNeedsRedraw(e=this.id){this.state.needsRedraw=this.state.needsRedraw||e}allocate(e){let{state:t,settings:n}=this;return n.noAlloc?!1:n.update?(super.allocate(e,t.updateRanges!==ay),!0):!1}updateBuffer({numInstances:e,data:t,props:n,context:r}){if(!this.needsUpdate())return!1;let{state:{updateRanges:i},settings:{update:a,noAlloc:o}}=this,s=!0;if(a){for(let[o,s]of i)a.call(r,this,{data:t,startRow:o,endRow:s,props:n,numInstances:e});if(this.value)if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset)this.constant?this.setConstantValue(r,this.value):this.setData({value:this.value,constant:this.constant}),this.constant=!1;else for(let[t,n]of i){let r=Number.isFinite(t)?this.getVertexOffset(t):0,i=Number.isFinite(n)?this.getVertexOffset(n):o||!Number.isFinite(e)?this.value.length:e*this.size;super.updateSubBuffer({startOffset:r,endOffset:i})}this._checkAttributeArray()}else s=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),s}setConstantValue(e,t){if(t===void 0||typeof t==`function`)return!1;let n=this.settings.transform&&e?this.settings.transform.call(e,t):t;return this.device.type===`webgpu`?this.setConstantBufferValue(n,this.numInstances):(this.setData({constant:!0,value:n})&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0)}setConstantBufferValue(e,t){let n=this.settings.defaultType,r=this._normalizeValue(e,new n(this.size),0);if(this._hasConstantBufferValue(r,t))return this.constant=!1,this.clearNeedsUpdate(),!1;let i=new n(Math.max(t,1)*this.size);for(let e=0;e<i.length;e+=this.size)i.set(r,e);let a=this.setData({value:i});return this.constant=!1,this.clearNeedsUpdate(),a&&this.setNeedsRedraw(),a}_hasConstantBufferValue(e,t){let n=this.value,r=Math.max(t,1)*this.size;if(!ArrayBuffer.isView(n)||n.length!==r||n.length%this.size!==0)return!1;for(let t=0;t<n.length;t+=this.size)for(let r=0;r<this.size;r++)if(n[t+r]!==e[r])return!1;return!0}setExternalBuffer(e){let{state:t}=this;return e?(this.clearNeedsUpdate(),t.lastExternalBuffer===e?!0:(t.lastExternalBuffer=e,this.setNeedsRedraw(),this.setData(e),!0)):(t.lastExternalBuffer=null,!1)}setBinaryValue(e,t=null){let{state:n,settings:r}=this;if(!e)return n.binaryValue=null,n.binaryAccessor=null,!1;if(r.noAlloc)return!1;if(n.binaryValue===e)return this.clearNeedsUpdate(),!0;if(n.binaryValue=e,this.setNeedsRedraw(),r.transform||t!==this.startIndices){ArrayBuffer.isView(e)&&(e={value:e});let i=e;Q(ArrayBuffer.isView(i.value),`invalid ${r.accessor}`);let a=!!i.size&&i.size!==this.size;return n.binaryAccessor=ry(i.value,{size:i.size||this.size,stride:i.stride,offset:i.offset,startIndices:t,nested:a}),!1}return this.clearNeedsUpdate(),this.setData(e),!0}getVertexOffset(e){let{startIndices:t}=this;return(t?e<t.length?t[e]:this.numInstances:e)*this.size}getValue(){let e=this.settings.shaderAttributes,t=super.getValue();if(!e)return t;for(let n in e)Object.assign(t,super.getValue(n,e[n]));return t}getBufferLayout(e){this.state.layoutChanged=!1;let t=this.settings.shaderAttributes,n=super._getBufferLayout(),{stepMode:r}=this.settings;if(r===`dynamic`?n.stepMode=e?e.isInstanced?`instance`:`vertex`:`instance`:n.stepMode=r??`vertex`,!t)return n;for(let e in t){let r=super._getBufferLayout(e,t[e]);n.attributes.push(...r.attributes)}return n}_autoUpdater(e,{data:t,startRow:n,endRow:r,props:i,numInstances:a}){let{settings:o,state:s,value:c,size:l,startIndices:u}=e,{accessor:d,transform:f}=o,p=s.binaryAccessor||(typeof d==`function`?d:i[d]);Q(typeof p==`function`,`accessor "${d}" is not a function`);let m=e.getVertexOffset(n),{iterable:h,objectInfo:g}=ty(t,n,r);for(let t of h){g.index++;let n=p(t,g);if(f&&(n=f.call(this,n)),u){let t=(g.index<u.length-1?u[g.index+1]:a)-u[g.index];if(n&&Array.isArray(n[0])){let t=m;for(let r of n)e._normalizeValue(r,c,t),t+=l}else n&&n.length>l?c.set(n,m):(e._normalizeValue(n,g.target,0),S_({target:c,source:g.target,start:m,count:t}));m+=t*l}else e._normalizeValue(n,c,m),m+=l}}_validateAttributeUpdaters(){let{settings:e}=this;if(!(e.noAlloc||typeof e.update==`function`))throw Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){let{value:e}=this,t=Math.min(4,this.size);if(e&&e.length>=t){let n=!0;switch(t){case 4:n&&=Number.isFinite(e[3]);case 3:n&&=Number.isFinite(e[2]);case 2:n&&=Number.isFinite(e[1]);case 1:n&&=Number.isFinite(e[0]);break;default:n=!1}if(!n)throw Error(`Illegal attribute generated for ${this.id}`)}}};function uy(e){let{source:t,target:n,start:r=0,size:i,getData:a}=e,o=e.end||n.length,s=t.length,c=o-r;if(s>c){n.set(t.subarray(0,c),r);return}if(n.set(t,r),!a)return;let l=s;for(;l<c;){let e=a(l,t);for(let t=0;t<i;t++)n[r+l]=e[t]||0,l++}}function dy({source:e,target:t,size:n,getData:r,sourceStartIndices:i,targetStartIndices:a}){if(!i||!a)return uy({source:e,target:t,size:n,getData:r}),t;let o=0,s=0,c=r&&((e,t)=>r(e+s,t)),l=Math.min(i.length,a.length);for(let r=1;r<l;r++){let l=i[r]*n,u=a[r]*n;uy({source:e.subarray(o,l),target:t,start:s,end:u,size:n,getData:c}),o=l,s=u}return s<t.length&&uy({source:[],target:t,start:s,size:n,getData:c}),t}function fy(e){let{device:t,settings:n,value:r}=e,i=new ly(t,n);return i.setData({value:r instanceof Float64Array?new Float64Array:new Float32Array,normalized:n.normalized}),i}function py(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`No defined attribute type for size "${e}"`)}}function my(e){switch(e){case 1:return`float32`;case 2:return`float32x2`;case 3:return`float32x3`;case 4:return`float32x4`;default:throw Error(`invalid type size`)}}function hy(e){e.push(e.shift())}function gy(e,t){let{doublePrecision:n,settings:r,value:i,size:a}=e,o=n&&i instanceof Float64Array?2:1,s=0,{shaderAttributes:c}=e.settings;if(c)for(let e of Object.values(c))s=Math.max(s,e.vertexOffset??0);return(r.noAlloc?i.length:(t+s)*a)*o}function _y({device:e,source:t,target:n}){return(!n||n.byteLength<t.byteLength)&&(n?.destroy(),n=e.createBuffer({byteLength:t.byteLength,usage:t.usage})),n}function vy({device:e,buffer:t,attribute:n,fromLength:r,toLength:i,fromStartIndices:a,getData:o=e=>e}){let s=n.doublePrecision&&n.value instanceof Float64Array?2:1,c=n.size*s,l=n.byteOffset,u=n.settings.bytesPerElement<4?l/n.settings.bytesPerElement*4:l,d=n.startIndices,f=a&&d,p=n.isConstant;if(!f&&t&&r>=i)return t;let m=n.value instanceof Float64Array?Float32Array:n.value.constructor,h=p?n.value:new m(n.getBuffer().readSyncWebGL(l,i*m.BYTES_PER_ELEMENT).buffer);if(n.settings.normalized&&!p){let e=o;o=(t,r)=>n.normalizeConstant(e(t,r))}let g=p?(e,t)=>o(h,t):(e,t)=>o(h.subarray(e+l,e+l+c),t),_=t?new Float32Array(t.readSyncWebGL(u,r*4).buffer):new Float32Array,v=new Float32Array(i);return dy({source:_,target:v,sourceStartIndices:a,targetStartIndices:d,size:c,getData:g}),(!t||t.byteLength<v.byteLength+u)&&(t?.destroy(),t=e.createBuffer({byteLength:v.byteLength+u,usage:35050})),t.write(v,u),t}var yy=class{constructor({device:e,attribute:t,timeline:n}){this.buffers=[],this.currentLength=0,this.device=e,this.transition=new V_(n),this.attribute=t,this.attributeInTransition=fy(t),this.currentStartIndices=t.startIndices}get inProgress(){return this.transition.inProgress}start(e,t,n=1/0){this.settings=e,this.currentStartIndices=this.attribute.startIndices,this.currentLength=gy(this.attribute,t),this.transition.start({...e,duration:n})}update(){let e=this.transition.update();return e&&this.onUpdate(),e}setBuffer(e){this.attributeInTransition.setData({buffer:e,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value})}cancel(){this.transition.cancel()}delete(){this.cancel();for(let e of this.buffers)e.destroy();this.buffers.length=0}},by=class extends yy{constructor({device:e,attribute:t,timeline:n}){super({device:e,attribute:t,timeline:n}),this.type=`interpolation`,this.transform=Ty(e,t)}start(e,t){let n=this.currentLength,r=this.currentStartIndices;if(super.start(e,t,e.duration),e.duration<=0){this.transition.cancel();return}let{buffers:i,attribute:a}=this;hy(i),i[0]=vy({device:this.device,buffer:i[0],attribute:a,fromLength:n,toLength:this.currentLength,fromStartIndices:r,getData:e.enter}),i[1]=_y({device:this.device,source:i[0],target:i[1]}),this.setBuffer(i[1]);let{transform:o}=this,s=o.model,c=Math.floor(this.currentLength/a.size);wy(a)&&(c/=2),s.setVertexCount(c),a.isConstant?(s.setAttributes({aFrom:i[0]}),s.setConstantAttributes({aTo:a.value})):s.setAttributes({aFrom:i[0],aTo:a.getBuffer()}),o.transformFeedback.setBuffers({vCurrent:i[1]})}onUpdate(){let{duration:e,easing:t}=this.settings,{time:n}=this.transition,r=n/e;t&&(r=t(r));let{model:i}=this.transform,a={time:r};i.shaderInputs.setProps({interpolation:a}),this.transform.run({discard:!0})}delete(){super.delete(),this.transform.destroy()}},xy={name:`interpolation`,vs:`layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,uniformTypes:{time:`f32`}},Sy=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,Cy=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`;function wy(e){return e.doublePrecision&&e.value instanceof Float64Array}function Ty(e,t){let n=t.size,r=py(n),i=my(n),a=t.getBufferLayout();return wy(t)?new s_(e,{vs:Cy,bufferLayout:[{name:`aFrom`,byteStride:8*n,attributes:[{attribute:`aFrom`,format:i,byteOffset:0},{attribute:`aFrom64Low`,format:i,byteOffset:4*n}]},{name:`aTo`,byteStride:8*n,attributes:[{attribute:`aTo`,format:i,byteOffset:0},{attribute:`aTo64Low`,format:i,byteOffset:4*n}]}],modules:[Wd,xy],defines:{ATTRIBUTE_TYPE:r,ATTRIBUTE_SIZE:n},moduleSettings:{},varyings:[`vCurrent`,`vCurrent64Low`],bufferMode:35980,disableWarnings:!0}):new s_(e,{vs:Sy,bufferLayout:[{name:`aFrom`,format:i},{name:`aTo`,format:a.attributes[0].format}],modules:[xy],defines:{ATTRIBUTE_TYPE:r},varyings:[`vCurrent`],disableWarnings:!0})}var Ey=class extends yy{constructor({device:e,attribute:t,timeline:n}){super({device:e,attribute:t,timeline:n}),this.type=`spring`,this.texture=jy(e),this.framebuffer=My(e,this.texture),this.transform=Ay(e,t)}start(e,t){let n=this.currentLength,r=this.currentStartIndices;super.start(e,t);let{buffers:i,attribute:a}=this;for(let t=0;t<2;t++)i[t]=vy({device:this.device,buffer:i[t],attribute:a,fromLength:n,toLength:this.currentLength,fromStartIndices:r,getData:e.enter});i[2]=_y({device:this.device,source:i[0],target:i[2]}),this.setBuffer(i[1]);let{model:o}=this.transform;o.setVertexCount(Math.floor(this.currentLength/a.size)),a.isConstant?o.setConstantAttributes({aTo:a.value}):o.setAttributes({aTo:a.getBuffer()})}onUpdate(){let{buffers:e,transform:t,framebuffer:n,transition:r}=this,i=this.settings;t.model.setAttributes({aPrev:e[0],aCur:e[1]}),t.transformFeedback.setBuffers({vNext:e[2]});let a={stiffness:i.stiffness,damping:i.damping};t.model.shaderInputs.setProps({spring:a}),t.run({framebuffer:n,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),hy(e),this.setBuffer(e[1]),this.device.readPixelsToArrayWebGL(n)[0]>0||r.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}},Dy={name:`spring`,vs:`layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,uniformTypes:{damping:`f32`,stiffness:`f32`}},Oy=`#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,ky=`#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`;function Ay(e,t){let n=py(t.size),r=my(t.size);return new s_(e,{vs:Oy,fs:ky,bufferLayout:[{name:`aPrev`,format:r},{name:`aCur`,format:r},{name:`aTo`,format:t.getBufferLayout().attributes[0].format}],varyings:[`vNext`],modules:[Dy],defines:{ATTRIBUTE_TYPE:n},parameters:{depthCompare:`always`,blendColorOperation:`max`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`max`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`}})}function jy(e){return e.createTexture({data:new Uint8Array(4),format:`rgba8unorm`,width:1,height:1})}function My(e,t){return e.createFramebuffer({id:`spring-transition-is-transitioning-framebuffer`,width:1,height:1,colorAttachments:[t]})}var Ny={interpolation:by,spring:Ey},Py=class{constructor(e,{id:t,timeline:n}){if(!e)throw Error(`AttributeTransitionManager is constructed without device`);this.id=t,this.device=e,this.timeline=n,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(let e in this.transitions)this._removeTransition(e)}update({attributes:e,transitions:t,numInstances:n}){this.numInstances=n||1;for(let n in e){let r=e[n],i=r.getTransitionSetting(t);i&&this._updateAttribute(n,r,i)}for(let n in this.transitions){let r=e[n];(!r||!r.getTransitionSetting(t))&&this._removeTransition(n)}}hasAttribute(e){let t=this.transitions[e];return t&&t.inProgress}getAttributes(){let e={};for(let t in this.transitions){let n=this.transitions[t];n.inProgress&&(e[t]=n.attributeInTransition)}return e}run(){if(this.numInstances===0)return!1;for(let e in this.transitions)this.transitions[e].update()&&(this.needsRedraw=!0);let e=this.needsRedraw;return this.needsRedraw=!1,e}_removeTransition(e){this.transitions[e].delete(),delete this.transitions[e]}_updateAttribute(e,t,n){let r=this.transitions[e],i=!r||r.type!==n.type;if(i){r&&this._removeTransition(e);let a=Ny[n.type];a?this.transitions[e]=new a({attribute:t,timeline:this.timeline,device:this.device}):(R.error(`unsupported transition type '${n.type}'`)(),i=!1)}(i||t.needsRedraw())&&(this.needsRedraw=!0,this.transitions[e].start(n,this.numInstances))}},Fy=`attributeManager.invalidate`,Iy=`attributeManager.updateStart`,Ly=`attributeManager.updateEnd`,Ry=`attribute.updateStart`,zy=`attribute.allocate`,By=`attribute.updateEnd`,Vy=class{constructor(e,{id:t=`attribute-manager`,stats:n,timeline:r}={}){this.mergeBoundsMemoized=Hp(Nh),this.id=t,this.device=e,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=n,this.attributeTransitionManager=new Py(e,{id:`${t}-transitions`,timeline:r}),Object.seal(this)}finalize(){for(let e in this.attributes)this.attributes[e].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(e={clearRedrawFlags:!1}){let t=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!e.clearRedrawFlags,t&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(e){this._add(e)}addInstanced(e){this._add(e,{stepMode:`instance`})}remove(e){for(let t of e)this.attributes[t]!==void 0&&(this.attributes[t].delete(),delete this.attributes[t])}invalidate(e,t){let n=this._invalidateTrigger(e,t);z(Fy,this,e,n)}invalidateAll(e){for(let t in this.attributes)this.attributes[t].setNeedsUpdate(t,e);z(Fy,this,`all`)}update({data:e,numInstances:t,startIndices:n=null,transitions:r,props:i={},buffers:a={},context:o={}}){let s=!1;z(Iy,this),this.stats&&this.stats.get(`Update Attributes`).timeStart();for(let r in this.attributes){let c=this.attributes[r],l=c.settings.accessor;c.startIndices=n,c.numInstances=t,i[r]&&R.removed(`props.${r}`,`data.attributes.${r}`)(),c.setExternalBuffer(a[r])||c.setBinaryValue(typeof l==`string`?a[l]:void 0,e.startIndices)||typeof l==`string`&&!a[l]&&c.setConstantValue(o,i[l])||c.needsUpdate()&&(s=!0,this._updateAttribute({attribute:c,numInstances:t,data:e,props:i,context:o})),this.needsRedraw=this.needsRedraw||c.needsRedraw()}s&&z(Ly,this,t),this.stats&&(this.stats.get(`Update Attributes`).timeEnd(),s&&this.stats.get(`Attributes updated`).incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:t,transitions:r})}updateTransition(){let{attributeTransitionManager:e}=this,t=e.run();return this.needsRedraw=this.needsRedraw||t,t}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(e){let t=e.map(e=>this.attributes[e]?.getBounds());return this.mergeBoundsMemoized(t)}getChangedAttributes(e={clearChangedFlags:!1}){let{attributes:t,attributeTransitionManager:n}=this,r={...n.getAttributes()};for(let i in t){let a=t[i];a.needsRedraw(e)&&!n.hasAttribute(i)&&(r[i]=a)}return r}getBufferLayouts(e){return Object.values(this.getAttributes()).map(t=>t.getBufferLayout(e))}_add(e,t){for(let n in e){let r=e[n],i={...r,id:n,size:r.isIndexed&&1||r.size||1,...t};this.attributes[n]=new ly(this.device,i)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){let e={};for(let t in this.attributes)this.attributes[t].getUpdateTriggers().forEach(n=>{e[n]||(e[n]=[]),e[n].push(t)});this.updateTriggers=e}_invalidateTrigger(e,t){let{attributes:n,updateTriggers:r}=this,i=r[e];return i&&i.forEach(e=>{let r=n[e];r&&r.setNeedsUpdate(r.id,t)}),i}_updateAttribute(e){let{attribute:t,numInstances:n}=e;if(z(Ry,t),t.constant){t.setConstantValue(e.context,t.value);return}t.allocate(n)&&z(zy,t,n),t.updateBuffer(e)&&(this.needsRedraw=!0,z(By,t,n))}},Hy=class extends V_{get value(){return this._value}_onUpdate(){let{time:e,settings:{fromValue:t,toValue:n,duration:r,easing:i}}=this;this._value=hl(t,n,i(e/r))}},Uy=1e-5;function Wy(e,t,n,r,i){let a=t-e;return(n-t)*i+-a*r+a+t}function Gy(e,t,n,r,i){if(Array.isArray(n)){let a=[];for(let o=0;o<n.length;o++)a[o]=Wy(e[o],t[o],n[o],r,i);return a}return Wy(e,t,n,r,i)}function Ky(e,t){if(Array.isArray(e)){let n=0;for(let r=0;r<e.length;r++){let i=e[r]-t[r];n+=i*i}return Math.sqrt(n)}return Math.abs(e-t)}var qy={interpolation:Hy,spring:class extends V_{get value(){return this._currValue}_onUpdate(){let{fromValue:e,toValue:t,damping:n,stiffness:r}=this.settings,{_prevValue:i=e,_currValue:a=e}=this,o=Gy(i,a,t,n,r),s=Ky(o,t),c=Ky(o,a);s<Uy&&c<Uy&&(o=t,this.end()),this._prevValue=a,this._currValue=o}}},Jy=class{constructor(e){this.transitions=new Map,this.timeline=e}get active(){return this.transitions.size>0}add(e,t,n,r){let{transitions:i}=this;if(i.has(e)){let n=i.get(e),{value:r=n.settings.fromValue}=n;t=r,this.remove(e)}if(r=cy(r),!r)return;let a=qy[r.type];if(!a){R.error(`unsupported transition type '${r.type}'`)();return}let o=new a(this.timeline);o.start({...r,fromValue:t,toValue:n}),i.set(e,o)}remove(e){let{transitions:t}=this;t.has(e)&&(t.get(e).cancel(),t.delete(e))}update(){let e={};for(let[t,n]of this.transitions)n.update(),e[t]=n.value,n.inProgress||this.remove(t);return e}clear(){for(let e of this.transitions.keys())this.remove(e)}};function Yy(e){let t=e[h_];for(let n in t){let r=t[n],{validate:i}=r;if(i&&!i(e[n],r))throw Error(`Invalid prop ${n}: ${e[n]}`)}}function Xy(e,t){let n=Qy({newProps:e,oldProps:t,propTypes:e[h_],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),r=eb(e,t),i=!1;return r||(i=tb(e,t)),{dataChanged:r,propsChanged:n,updateTriggersChanged:i,extensionsChanged:nb(e,t),transitionsChanged:Zy(e,t)}}function Zy(e,t){if(!e.transitions)return!1;let n={},r=e[h_],i=!1;for(let a in e.transitions){let o=r[a],s=o&&o.type;(s===`number`||s===`color`||s===`array`)&&$y(e[a],t[a],o)&&(n[a]=!0,i=!0)}return i?n:!1}function Qy({newProps:e,oldProps:t,ignoreProps:n={},propTypes:r={},triggerName:i=`props`}){if(t===e)return!1;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return`${i} changed shallowly`;for(let a of Object.keys(e))if(!(a in n)){if(!(a in t))return`${i}.${a} added`;let n=$y(e[a],t[a],r[a]);if(n)return`${i}.${a} ${n}`}for(let a of Object.keys(t))if(!(a in n)){if(!(a in e))return`${i}.${a} dropped`;if(!Object.hasOwnProperty.call(e,a)){let n=$y(e[a],t[a],r[a]);if(n)return`${i}.${a} ${n}`}}return!1}function $y(e,t,n){let r=n&&n.equal;return r&&!r(e,t,n)||!r&&(r=e&&t&&e.equals,r&&!r.call(e,t))?`changed deeply`:!r&&t!==e?`changed shallowly`:null}function eb(e,t){if(t===null)return`oldProps is null, initial diff`;let n=!1,{dataComparator:r,_dataDiff:i}=e;return r?r(e.data,t.data)||(n=`Data comparator detected a change`):e.data!==t.data&&(n=`A new data container was supplied`),n&&i&&(n=i(e.data,t.data)||n),n}function tb(e,t){if(t===null||`all`in e.updateTriggers&&rb(e,t,`all`))return{all:!0};let n={},r=!1;for(let i in e.updateTriggers)i!==`all`&&rb(e,t,i)&&(n[i]=!0,r=!0);return r?n:!1}function nb(e,t){if(t===null)return!0;let n=t.extensions,{extensions:r}=e;if(r===n)return!1;if(!n||!r||r.length!==n.length)return!0;for(let e=0;e<r.length;e++)if(!r[e].equals(n[e]))return!0;return!1}function rb(e,t,n){let r=e.updateTriggers[n];r??={};let i=t.updateTriggers[n];return i??={},Qy({oldProps:i,newProps:r,triggerName:n})}var ib=`count(): argument not an object`,ab=`count(): argument not a container`;function ob(e){if(!cb(e))throw Error(ib);if(typeof e.count==`function`)return e.count();if(Number.isFinite(e.size))return e.size;if(Number.isFinite(e.length))return e.length;if(sb(e))return Object.keys(e).length;throw Error(ab)}function sb(e){return typeof e==`object`&&!!e&&e.constructor===Object}function cb(e){return typeof e==`object`&&!!e}function lb(e,t){if(!t)return e;let n={...e,...t};if(`defines`in t&&(n.defines={...e.defines,...t.defines}),`modules`in t&&(n.modules=(e.modules||[]).concat(t.modules),t.modules.some(e=>e.name===`project64`))){let e=n.modules.findIndex(e=>e.name===`project32`);e>=0&&n.modules.splice(e,1)}if(`inject`in t)if(!e.inject)n.inject=t.inject;else{let r={...e.inject};for(let e in t.inject)r[e]=(r[e]||``)+t.inject[e];n.inject=r}return n}var ub={minFilter:`linear`,mipmapFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`},db={};function fb(e,t,n,r){if(n instanceof F)return n;n.constructor&&n.constructor.name!==`Object`&&(n={data:n});let i=null;n.compressed&&(i={minFilter:`linear`,mipmapFilter:n.data.length>1?`nearest`:`linear`});let{width:a,height:o}=n.data,s=t.createTexture({...n,sampler:{...ub,...i,...r},mipLevels:t.getMipLevelCount(a,o)});return t.type===`webgl`?s.generateMipmapsWebGL():t.type===`webgpu`&&t.generateMipmapsWebGPU(s),db[s.id]=e,s}function pb(e,t){!t||!(t instanceof F)||db[t.id]===e&&(t.delete(),delete db[t.id])}var mb={boolean:{validate(e,t){return!0},equal(e,t,n){return!!e==!!t}},number:{validate(e,t){return Number.isFinite(e)&&(!(`max`in t)||e<=t.max)&&(!(`min`in t)||e>=t.min)}},color:{validate(e,t){return t.optional&&!e||vb(e)&&(e.length===3||e.length===4)},equal(e,t,n){return Z(e,t,1)}},accessor:{validate(e,t){let n=yb(e);return n===`function`||n===yb(t.value)},equal(e,t,n){return typeof t==`function`?!0:Z(e,t,1)}},array:{validate(e,t){return t.optional&&!e||vb(e)},equal(e,t,n){let{compare:r}=n;return r?Z(e,t,Number.isInteger(r)?r:r?1:0):e===t}},object:{equal(e,t,n){if(n.ignore)return!0;let{compare:r}=n;return r?Z(e,t,Number.isInteger(r)?r:r?1:0):e===t}},function:{validate(e,t){return t.optional&&!e||typeof e==`function`},equal(e,t,n){return!n.compare&&n.ignore!==!1||e===t}},data:{transform:(e,t,n)=>{if(!e)return e;let{dataTransform:r}=n.props;return r?r(e):typeof e.shape==`string`&&e.shape.endsWith(`-table`)&&Array.isArray(e.data)?e.data:e}},image:{transform:(e,t,n)=>{let r=n.context;return!r||!r.device?null:fb(n.id,r.device,e,{...t.parameters,...n.props.textureParameters})},release:(e,t,n)=>{pb(n.id,e)}}};function hb(e){let t={},n={},r={};for(let[i,a]of Object.entries(e)){let e=a?.deprecatedFor;if(e)r[i]=Array.isArray(e)?e:[e];else{let e=gb(i,a);t[i]=e,n[i]=e.value}}return{propTypes:t,defaultProps:n,deprecatedProps:r}}function gb(e,t){switch(yb(t)){case`object`:return _b(e,t);case`array`:return _b(e,{type:`array`,value:t,compare:!1});case`boolean`:return _b(e,{type:`boolean`,value:t});case`number`:return _b(e,{type:`number`,value:t});case`function`:return _b(e,{type:`function`,value:t,compare:!0});default:return{name:e,type:`unknown`,value:t}}}function _b(e,t){return`type`in t?{name:e,...mb[t.type],...t}:`value`in t?{name:e,type:yb(t.value),...t}:{name:e,type:`object`,value:t}}function vb(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function yb(e){return vb(e)?`array`:e===null?`null`:typeof e}function bb(e,t){let n;for(let e=t.length-1;e>=0;e--){let r=t[e];`extensions`in r&&(n=r.extensions)}let r=Sb(e.constructor,n),i=Object.create(r);i[m_]=e,i[v_]={},i[y_]={};for(let e=0;e<t.length;++e){let n=t[e];for(let e in n)i[e]=n[e]}return Object.freeze(i),i}var xb=`_mergedDefaultProps`;function Sb(e,t){if(!(e instanceof Mb.constructor))return{};let n=xb;if(t)for(let e of t){let t=e.constructor;t&&(n+=`:${t.extensionName||t.name}`)}return kb(e,n)||(e[n]=Cb(e,t||[]))}function Cb(e,t){if(!e.prototype)return null;let n=Sb(Object.getPrototypeOf(e)),r=hb(kb(e,`defaultProps`)||{}),i=Object.assign(Object.create(null),n,r.defaultProps),a=Object.assign(Object.create(null),n?.[h_],r.propTypes),o=Object.assign(Object.create(null),n?.[g_],r.deprecatedProps);for(let e of t){let t=Sb(e.constructor);t&&(Object.assign(i,t),Object.assign(a,t[h_]),Object.assign(o,t[g_]))}return wb(i,e),Eb(i,a),Tb(i,o),i[h_]=a,i[g_]=o,t.length===0&&!Ob(e,`_propTypes`)&&(e._propTypes=a),i}function wb(e,t){let n=Ab(t);Object.defineProperties(e,{id:{writable:!0,value:n}})}function Tb(e,t){for(let n in t)Object.defineProperty(e,n,{enumerable:!1,set(e){let r=`${this.id}: ${n}`;for(let r of t[n])Ob(this,r)||(this[r]=e);R.deprecated(r,t[n].join(`/`))()}})}function Eb(e,t){let n={},r={};for(let e in t){let i=t[e],{name:a,value:o}=i;i.async&&(n[a]=o,r[a]=Db(a))}e[__]=n,e[v_]={},Object.defineProperties(e,r)}function Db(e){return{enumerable:!0,set(t){typeof t==`string`||t instanceof Promise||ny(t)?this[v_][e]=t:this[y_][e]=t},get(){if(this[y_]){if(e in this[y_])return this[y_][e]||this[__][e];if(e in this[v_]){let t=this[m_]&&this[m_].internalState;if(t&&t.hasAsyncProp(e))return t.getAsyncProp(e)||this[__][e]}}return this[__][e]}}}function Ob(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function kb(e,t){return Ob(e,t)&&e[t]}function Ab(e){let t=e.componentName;return t||R.warn(`${e.name}.componentName not specified`)(),t||e.name}var jb=0,Mb=class{constructor(...e){this.props=bb(this,e),this.id=this.props.id,this.count=jb++}clone(e){let{props:t}=this,n={};for(let e in t[__])e in t[y_]?n[e]=t[y_][e]:e in t[v_]&&(n[e]=t[v_][e]);return new this.constructor({...t,...n,...e})}};Mb.componentName=`Component`,Mb.defaultProps={};var Nb=Object.freeze({}),Pb=class{constructor(e){this.component=e,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(let e in this.asyncProps){let t=this.asyncProps[e];t&&t.type&&t.type.release&&t.type.release(t.resolvedValue,t.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||Nb}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(e){return e in this.asyncProps}getAsyncProp(e){let t=this.asyncProps[e];return t&&t.resolvedValue}isAsyncPropLoading(e){if(e){let t=this.asyncProps[e];return!!(t&&t.pendingLoadCount>0&&t.pendingLoadCount!==t.resolvedLoadCount)}for(let e in this.asyncProps)if(this.isAsyncPropLoading(e))return!0;return!1}reloadAsyncProp(e,t){this._watchPromise(e,Promise.resolve(t))}setAsyncProps(e){this.component=e[m_]||this.component;let t=e[y_]||{},n=e[v_]||e,r=e[__]||{};for(let e in t){let n=t[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,n),t[e]=this.getAsyncProp(e)}for(let e in n){let t=n[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,t)}}_fetch(e,t){return null}_onResolve(e,t){}_onError(e,t){}_updateAsyncProp(e,t){if(this._didAsyncInputValueChange(e,t)){if(typeof t==`string`&&(t=this._fetch(e,t)),t instanceof Promise){this._watchPromise(e,t);return}if(ny(t)){this._resolveAsyncIterable(e,t);return}this._setPropValue(e,t)}}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps){this.oldAsyncProps=Object.create(this.oldProps);for(let e in this.asyncProps)Object.defineProperty(this.oldAsyncProps,e,{enumerable:!0,value:this.oldProps[e]})}}_didAsyncInputValueChange(e,t){let n=this.asyncProps[e];return t===n.resolvedValue||t===n.lastValue?!1:(n.lastValue=t,!0)}_setPropValue(e,t){this._freezeAsyncOldProps();let n=this.asyncProps[e];n&&(t=this._postProcessValue(n,t),n.resolvedValue=t,n.pendingLoadCount++,n.resolvedLoadCount=n.pendingLoadCount)}_setAsyncPropValue(e,t,n){let r=this.asyncProps[e];r&&n>=r.resolvedLoadCount&&t!==void 0&&(this._freezeAsyncOldProps(),r.resolvedValue=t,r.resolvedLoadCount=n,this.onAsyncPropUpdated(e,t))}_watchPromise(e,t){let n=this.asyncProps[e];if(n){n.pendingLoadCount++;let r=n.pendingLoadCount;t.then(t=>{this.component&&(t=this._postProcessValue(n,t),this._setAsyncPropValue(e,t,r),this._onResolve(e,t))}).catch(t=>{this._onError(e,t)})}}async _resolveAsyncIterable(e,t){if(e!==`data`){this._setPropValue(e,t);return}let n=this.asyncProps[e];if(!n)return;n.pendingLoadCount++;let r=n.pendingLoadCount,i=[],a=0;for await(let n of t){if(!this.component)return;let{dataTransform:t}=this.component.props;i=t?t(n,i):i.concat(n),Object.defineProperty(i,`__diff`,{enumerable:!1,value:[{startRow:a,endRow:i.length}]}),a=i.length,this._setAsyncPropValue(e,i,r)}this._onResolve(e,i)}_postProcessValue(e,t){let n=e.type;return n&&this.component&&(n.release&&n.release(e.resolvedValue,n,this.component),n.transform)?n.transform(t,n,this.component):t}_createAsyncPropData(e,t){if(!this.asyncProps[e]){let n=this.component&&this.component.props[h_];this.asyncProps[e]={type:n&&n[e],lastValue:null,resolvedValue:t,pendingLoadCount:0,resolvedLoadCount:0}}}},Fb=class extends Pb{constructor({attributeManager:e,layer:t}){super(t),this.attributeManager=e,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1}get layer(){return this.component}_fetch(e,t){let n=this.layer,r=n?.props.fetch;return r?r(t,{propName:e,layer:n}):super._fetch(e,t)}_onResolve(e,t){let n=this.layer;if(n){let r=n.props.onDataLoad;e===`data`&&r&&r(t,{propName:e,layer:n})}}_onError(e,t){let n=this.layer;n&&n.raiseError(t,`loading ${e} of ${this.layer}`)}},Ib=`layer.changeFlag`,Lb=`layer.initialize`,Rb=`layer.update`,zb=`layer.finalize`,Bb=`layer.matched`,Vb=2**24-1,Hb=Object.freeze([]),Ub=Hp(({oldViewport:e,viewport:t})=>e.equals(t)),Wb=new Uint8ClampedArray,Gb={data:{type:`data`,value:Hb,async:!0},dataComparator:{type:`function`,value:null,optional:!0},_dataDiff:{type:`function`,value:e=>e&&e.__diff,optional:!0},dataTransform:{type:`function`,value:null,optional:!0},onDataLoad:{type:`function`,value:null,optional:!0},onError:{type:`function`,value:null,optional:!0},fetch:{type:`function`,value:(e,{propName:t,layer:n,loaders:r,loadOptions:i,signal:a})=>{let{resourceManager:o}=n.context;i||=n.getLoadOptions(),r||=n.props.loaders,a&&(i={...i,core:{...i?.core,fetch:{...i?.core?.fetch,signal:a}}});let s=o.contains(e);return!s&&!i&&(o.add({resourceId:e,data:xo(e,r),persistent:!1}),s=!0),s?o.subscribe({resourceId:e,onChange:e=>n.internalState?.reloadAsyncProp(t,e),consumerId:n.id,requestId:t}):xo(e,r,i)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:`number`,min:0,max:1,value:1},operation:`draw`,onHover:{type:`function`,value:null,optional:!0},onClick:{type:`function`,value:null,optional:!0},onDragStart:{type:`function`,value:null,optional:!0},onDrag:{type:`function`,value:null,optional:!0},onDragEnd:{type:`function`,value:null,optional:!0},coordinateSystem:`default`,coordinateOrigin:{type:`array`,value:[0,0,0],compare:!0},modelMatrix:{type:`array`,value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:`XYZ`,colorFormat:`RGBA`,parameters:{type:`object`,value:{},optional:!0,compare:2},loadOptions:{type:`object`,value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:`array`,value:[],optional:!0,ignore:!0},getPolygonOffset:{type:`function`,value:({layerIndex:e})=>[0,-e*100]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:`accessor`,value:[0,0,128,128]}},Kb=class extends Mb{constructor(){super(...arguments),this.internalState=null,this.lifecycle=p_.NO_STATE,this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,`layerName`)?this.layerName:``}get root(){let e=this;for(;e.parent;)e=e.parent;return e}toString(){return`${this.constructor.layerName||this.constructor.name}({id: '${this.props.id}'})`}project(e){Q(this.internalState);let t=this.internalState.viewport||this.context.viewport,[n,r,i]=Mm(Wh(e,{viewport:t,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),t.pixelProjectionMatrix);return e.length===2?[n,r]:[n,r,i]}unproject(e){return Q(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(e)}projectPosition(e,t){return Q(this.internalState),Gh(e,{viewport:this.internalState.viewport||this.context.viewport,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...t})}get isComposite(){return!1}get isDrawable(){return!0}setState(e){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,e),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return this.internalState?!this.internalState.isAsyncPropLoading():!1}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){let e=this.state;return e&&(e.models||e.model&&[e.model])||[]}setShaderModuleProps(...e){for(let t of this.getModels())t.shaderInputs.setProps(...e)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){let{coordinateSystem:e}=this.props;return e===`default`||e===`lnglat`||e===`cartesian`}onHover(e,t){return this.props.onHover&&this.props.onHover(e,t)||!1}onClick(e,t){return this.props.onClick&&this.props.onClick(e,t)||!1}nullPickingColor(){return[0,0,0]}encodePickingColor(e,t=[]){return t[0]=e+1&255,t[1]=e+1>>8&255,t[2]=e+1>>8>>8&255,t}decodePickingColor(e){Q(e instanceof Uint8Array);let[t,n,r]=e;return t+n*256+r*65536-1}getNumInstances(){return Number.isFinite(this.props.numInstances)?this.props.numInstances:this.state&&this.state.numInstances!==void 0?this.state.numInstances:ob(this.props.data)}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){return this.getAttributeManager()?.getBounds([`positions`,`instancePositions`])}getShaders(e){e=lb(e,{disableWarnings:!0,modules:this.context.defaultShaderModules});for(let t of this.props.extensions)e=lb(e,t.getShaders.call(this,t));return e}shouldUpdateState(e){return e.changeFlags.propsOrDataChanged}updateState(e){let t=this.getAttributeManager(),{dataChanged:n}=e.changeFlags;if(n&&t)if(Array.isArray(n))for(let e of n)t.invalidateAll(e);else t.invalidateAll();if(t){let{props:n}=e,r=this.internalState.hasPickingBuffer,i=Number.isInteger(n.highlightedObjectIndex)||!!n.pickable||n.extensions.some(e=>e.getNeedsPickingBuffer.call(this,e));if(r!==i){this.internalState.hasPickingBuffer=i;let{pickingColors:e,instancePickingColors:n}=t.attributes,r=e||n;r&&(i&&r.constant&&(r.constant=!1,t.invalidate(r.id)),!r.value&&!i&&(r.constant=!0,r.value=[0,0,0]))}}}finalizeState(e){for(let e of this.getModels())e.destroy();let t=this.getAttributeManager();t&&t.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(e){for(let t of this.getModels())t.draw(e.renderPass)}getPickingInfo({info:e,mode:t,sourceLayer:n}){let{index:r}=e;return r>=0&&Array.isArray(this.props.data)&&(e.object=this.props.data[r]),e}raiseError(e,t){t&&(e=Error(`${t}: ${e.message}`,{cause:e})),this.props.onError?.(e)||this.context?.onError?.(e,this)}getNeedsRedraw(e={clearRedrawFlags:!1}){return this._getNeedsRedraw(e)}needsUpdate(){return this.internalState?this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()):!1}hasUniformTransition(){return this.internalState?.uniformTransitions.active||!1}activateViewport(e){if(!this.internalState)return;let t=this.internalState.viewport;this.internalState.viewport=e,(!t||!Ub({oldViewport:t,viewport:e}))&&(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(e=`all`){let t=this.getAttributeManager();t&&(e===`all`?t.invalidateAll():t.invalidate(e))}updateAttributes(e){let t=!1;for(let n in e)e[n].layoutChanged()&&(t=!0);for(let n of this.getModels())this._setModelAttributes(n,e,t)}_updateAttributes(){let e=this.getAttributeManager();if(!e)return;let t=this.props,n=this.getNumInstances(),r=this.getStartIndices();e.update({data:t.data,numInstances:n,startIndices:r,props:t,transitions:t.transitions,buffers:t.data.attributes,context:this});let i=e.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(i)}_updateAttributeTransition(){let e=this.getAttributeManager();e&&e.updateTransition()}_updateUniformTransition(){let{uniformTransitions:e}=this.internalState;if(e.active){let t=e.update(),n=Object.create(this.props);for(let e in t)Object.defineProperty(n,e,{value:t[e]});return n}return this.props}calculateInstancePickingColors(e,{numInstances:t}){if(e.constant)return;let n=Math.floor(Wb.length/4);if(this.internalState.usesPickingColorCache=!0,n<t){t>Vb&&R.warn(`Layer has too many data objects. Picking might not be able to distinguish all objects.`)(),Wb=Ch.allocate(Wb,t,{size:4,copy:!0,maxCount:Math.max(t,Vb)});let e=Math.floor(Wb.length/4),r=[0,0,0];for(let t=n;t<e;t++)this.encodePickingColor(t,r),Wb[t*4+0]=r[0],Wb[t*4+1]=r[1],Wb[t*4+2]=r[2],Wb[t*4+3]=0}e.value=Wb.subarray(0,t*4)}_setModelAttributes(e,t,n=!1){if(!Object.keys(t).length)return;if(n){let n=this.getAttributeManager();e.setBufferLayout(n.getBufferLayouts(e)),t=n.getAttributes()}let r=e.userData?.excludeAttributes||{},i={},a={};for(let n in t){if(r[n])continue;let o=t[n].getValue();for(let r in o){let s=o[r];s instanceof N?t[n].settings.isIndexed?e.setIndexBuffer(s):i[r]=s:s&&(a[r]=s)}}e.setAttributes(i),e.setConstantAttributes(a)}disablePickingIndex(e){let t=this.props.data;if(!(`attributes`in t)){this._disablePickingIndex(e);return}let{pickingColors:n,instancePickingColors:r}=this.getAttributeManager().attributes,i=n||r,a=i&&t.attributes&&t.attributes[i.id];if(a&&a.value){let n=a.value,r=this.encodePickingColor(e);for(let e=0;e<t.length;e++){let t=i.getVertexOffset(e);n[t]===r[0]&&n[t+1]===r[1]&&n[t+2]===r[2]&&this._disablePickingIndex(e)}}else this._disablePickingIndex(e)}_disablePickingIndex(e){let{pickingColors:t,instancePickingColors:n}=this.getAttributeManager().attributes,r=t||n;if(!r)return;let i=r.getVertexOffset(e),a=r.getVertexOffset(e+1);r.buffer.write(new Uint8Array(a-i),i)}restorePickingColors(){let{pickingColors:e,instancePickingColors:t}=this.getAttributeManager().attributes,n=e||t;n&&(this.internalState.usesPickingColorCache&&n.value.buffer!==Wb.buffer&&(n.value=Wb.subarray(0,n.value.length)),n.updateSubBuffer({startOffset:0}))}_initialize(){Q(!this.internalState),z(Lb,this);let e=this._getAttributeManager();e&&e.addInstanced({instancePickingColors:{type:`uint8`,size:4,noAlloc:!0,update:this.calculateInstancePickingColors}}),this.internalState=new Fb({attributeManager:e,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,`attributeManager`,{get:()=>(R.deprecated(`layer.state.attributeManager`,`layer.getAttributeManager()`)(),e)}),this.internalState.uniformTransitions=new Jy(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context);for(let e of this.props.extensions)e.initializeState.call(this,this.context,e);this.setChangeFlags({dataChanged:`init`,propsChanged:`init`,viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(e){z(Bb,this,this===e);let{state:t,internalState:n}=e;this!==e&&(this.internalState=n,this.state=t,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){let e=this.needsUpdate();if(z(Rb,this,e),!e)return;this.context.stats.get(`Layer updates`).incrementCount();let t=this.props,n=this.context,r=this.internalState,i=n.viewport,a=this._updateUniformTransition();r.propsInTransition=a,n.viewport=r.viewport||i,this.props=a;try{let e=this._getUpdateParams(),t=this.getModels();if(n.device)this.updateState(e);else try{this.updateState(e)}catch{}for(let t of this.props.extensions)t.updateState.call(this,e,t);this.setNeedsRedraw(),this._updateAttributes();let r=this.getModels()[0]!==t[0];this._postUpdate(e,r)}finally{n.viewport=i,this.props=t,this._clearChangeFlags(),r.needsUpdate=!1,r.resetOldProps()}}_finalize(){z(zb,this),this.finalizeState(this.context);for(let e of this.props.extensions)e.finalizeState.call(this,this.context,e)}_drawLayer({renderPass:e,shaderModuleProps:t=null,uniforms:n={},parameters:r={}}){this._updateAttributeTransition();let i=this.props,a=this.context;this.props=this.internalState.propsInTransition||i;try{t&&this.setShaderModuleProps(t);let{getPolygonOffset:i}=this.props,o=i&&i(n)||[0,0];a.device instanceof we&&a.device.setParametersWebGL({polygonOffset:o});let s=a.device instanceof we?null:qb(r);if(Jb(this.getModels(),e,r,s),a.device instanceof we)a.device.withParametersWebGL(r,()=>{let i={renderPass:e,shaderModuleProps:t,uniforms:n,parameters:r,context:a};for(let e of this.props.extensions)e.draw.call(this,i,e);this.draw(i)});else{s?.renderPassParameters&&e.setParameters(s.renderPassParameters);let i={renderPass:e,shaderModuleProps:t,uniforms:n,parameters:r,context:a};for(let e of this.props.extensions)e.draw.call(this,i,e);this.draw(i)}}finally{this.props=i}}getChangeFlags(){return this.internalState?.changeFlags}setChangeFlags(e){if(!this.internalState)return;let{changeFlags:t}=this.internalState;for(let n in e)if(e[n]){let r=!1;switch(n){case`dataChanged`:let i=e[n],a=t[n];i&&Array.isArray(a)&&(t.dataChanged=Array.isArray(i)?a.concat(i):i,r=!0);default:t[n]||(t[n]=e[n],r=!0)}r&&z(Ib,this,n,e)}let n=!!(t.dataChanged||t.updateTriggersChanged||t.propsChanged||t.extensionsChanged);t.propsOrDataChanged=n,t.somethingChanged=n||t.viewportChanged||t.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(e,t){let n=Xy(e,t);if(n.updateTriggersChanged)for(let e in n.updateTriggersChanged)n.updateTriggersChanged[e]&&this.invalidateAttribute(e);if(n.transitionsChanged)for(let r in n.transitionsChanged)this.internalState.uniformTransitions.add(r,t[r],e[r],e.transitions?.[r]);return this.setChangeFlags(n)}validateProps(){Yy(this.props)}updateAutoHighlight(e){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(e)}_updateAutoHighlight(e){let t={highlightedObjectColor:e.picked?e.color:null},{highlightColor:n}=this.props;e.picked&&typeof n==`function`&&(t.highlightColor=n(e)),this.setShaderModuleProps({picking:t}),this.setNeedsRedraw()}_getAttributeManager(){let e=this.context;return new Vy(e.device,{id:this.props.id,stats:e.stats,timeline:e.timeline})}_postUpdate(e,t){let{props:n,oldProps:r}=e,i=this.state.model;i?.isInstanced&&i.setInstanceCount(this.getNumInstances());let{autoHighlight:a,highlightedObjectIndex:o,highlightColor:s}=n;if(t||r.autoHighlight!==a||r.highlightedObjectIndex!==o||r.highlightColor!==s){let e={};Array.isArray(s)&&(e.highlightColor=s),(t||r.autoHighlight!==a||o!==r.highlightedObjectIndex)&&(e.highlightedObjectColor=Number.isFinite(o)&&o>=0?this.encodePickingColor(o):null),this.setShaderModuleProps({picking:e})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(e){if(!this.internalState)return!1;let t=!1;t||=this.internalState.needsRedraw&&this.id;let n=this.getAttributeManager(),r=n?n.getNeedsRedraw(e):!1;if(t||=r,t)for(let e of this.props.extensions)e.onNeedsRedraw.call(this,e);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!e.clearRedrawFlags,t}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}};Kb.defaultProps=Gb,Kb.layerName=`Layer`;function qb(e){let{blendConstant:t,...n}=e;return t?{pipelineParameters:n,renderPassParameters:{blendConstant:t}}:{pipelineParameters:n}}function Jb(e,t,n,r){for(let i of e)i.device.type===`webgpu`?(Yb(i,t),i.setParameters({...i.parameters,...r?.pipelineParameters})):i.setParameters(n)}function Yb(e,t){let n=t.props.framebuffer||(t.framebuffer??null);if(!n)return;let r=n.colorAttachments.map(e=>e?.texture?.format??null),i=n.depthStencilAttachment?.texture?.format,a=e;(!Xb(a.props.colorAttachmentFormats,r)||a.props.depthStencilAttachmentFormat!==i)&&(a.props.colorAttachmentFormats=r,a.props.depthStencilAttachmentFormat=i,a._setPipelineNeedsUpdate(`attachment formats`))}function Xb(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var Zb=`compositeLayer.renderLayers`,Qb=class extends Kb{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id?(e.object=t.__source.object,e.index=t.__source.index,e):e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){let{_subLayerProps:n}=this.props;return n&&n[e]&&n[e].type||t}getSubLayerRow(e,t,n){return e.__source={parent:this,object:t,index:n},e}getSubLayerAccessor(e){if(typeof e==`function`){let t={index:-1,data:this.props.data,target:[]};return(n,r)=>n&&n.__source?(t.index=n.__source.index,e(n.__source.object,t)):e(n,r)}return e}getSubLayerProps(e={}){let{opacity:t,pickable:n,visible:r,parameters:i,getPolygonOffset:a,highlightedObjectIndex:o,autoHighlight:s,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:m,fetch:h,operation:g,_subLayerProps:_}=this.props,v={id:``,updateTriggers:{},opacity:t,pickable:n,visible:r,parameters:i,getPolygonOffset:a,highlightedObjectIndex:o,autoHighlight:s,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:m,fetch:h,operation:g},y=_&&e.id&&_[e.id],b=y&&y.updateTriggers,x=e.id||`sublayer`;if(y){let t=this.props[h_],n=e.type?e.type._propTypes:{};for(let e in y){let r=n[e]||t[e];r&&r.type===`accessor`&&(y[e]=this.getSubLayerAccessor(y[e]))}}Object.assign(v,e,y),v.id=`${this.props.id}-${x}`,v.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,...b};for(let e of m){let t=e.getSubLayerProps.call(this,e);t&&Object.assign(v,t,{updateTriggers:Object.assign(v.updateTriggers,t.updateTriggers)})}return v}_updateAutoHighlight(e){for(let t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let n=this.internalState.subLayers,r=!n||this.needsUpdate();r&&(n=b_(this.renderLayers(),Boolean),this.internalState.subLayers=n),z(Zb,this,r,n);for(let e of n)e.parent=this}};Qb.layerName=`CompositeLayer`;var $b=new K().lookAt({eye:[0,0,1]});function ex({width:e,height:t,near:n,far:r,padding:i}){let a=-e/2,o=e/2,s=-t/2,c=t/2;if(i){let{left:n=0,right:r=0,top:l=0,bottom:u=0}=i,d=H((n+e-r)/2,0,e)-e/2,f=H((l+t-u)/2,0,t)-t/2;a-=d,o-=d,s+=f,c+=f}return new K().ortho({left:a,right:o,bottom:s,top:c,near:n,far:r})}var tx=class extends zh{constructor(e){let{width:t,height:n,near:r=.1,far:i=1e3,zoom:a=0,target:o=[0,0,0],padding:s=null,flipY:c=!0}=e,l=e.zoomX??(Array.isArray(a)?a[0]:a),u=e.zoomY??(Array.isArray(a)?a[1]:a),d=Math.min(l,u),f=2**d,p;if(l!==u){let e=2**l,t=2**u;p={unitsPerMeter:[e/f,t/f,1],metersPerUnit:[f/e,f/t,1]}}super({...e,longitude:void 0,position:o,viewMatrix:$b.clone().scale([f,f*(c?-1:1),f]),projectionMatrix:ex({width:t||1,height:n||1,padding:s,near:r,far:i}),zoom:d,distanceScales:p}),this.target=o,this.zoomX=l,this.zoomY=u,this.flipY=c}projectFlat([e,t]){let{unitsPerMeter:n}=this.distanceScales;return[e*n[0],t*n[1]]}unprojectFlat([e,t]){let{metersPerUnit:n}=this.distanceScales;return[e*n[0],t*n[1]]}panByPosition(e,t,n){let r=Nm(t,this.pixelUnprojectionMatrix),i=Dl([],this.projectFlat(e),kl([],r)),a=Dl([],this.center,i);return{target:this.unprojectFlat(a)}}};tx.displayName=`OrthographicViewport`;function nx({zoom:e=0,zoomX:t,zoomY:n}){return t??=Array.isArray(e)?e[0]:e,n??=Array.isArray(e)?e[1]:e,{zoomX:t,zoomY:n}}var rx=class extends uv{constructor(e){let{width:t,height:n,target:r=[0,0,0],zoom:i=0,zoomAxis:a=`all`,minZoom:o=-1/0,maxZoom:s=1/0,minZoomX:c=o,maxZoomX:l=s,minZoomY:u=o,maxZoomY:d=s,maxBounds:f=null,startPanPosition:p,startZoomPosition:m,startZoom:h}=e,{zoomX:g,zoomY:_}=nx(e);super({width:t,height:n,target:r,zoom:i,zoomX:g,zoomY:_,zoomAxis:a,minZoomX:c,maxZoomX:l,minZoomY:u,maxZoomY:d,maxBounds:f},{startPanPosition:p,startZoomPosition:m,startZoom:h},e.makeViewport)}panStart({pos:e}){return this._getUpdatedState({startPanPosition:this._unproject(e)})}pan({pos:e,startPosition:t}){let n=this.getState().startPanPosition||t;if(!n)return this;let r=this.makeViewport(this.getViewportProps()).panByPosition(n,e);return this._getUpdatedState(r)}panEnd(){return this._getUpdatedState({startPanPosition:null})}rotateStart(){return this}rotate(){return this}rotateEnd(){return this}shortestPathFrom(e){return e.getViewportProps(),{...this.getViewportProps()}}zoomStart({pos:e}){let{zoomX:t,zoomY:n}=this.getViewportProps();return this._getUpdatedState({startZoomPosition:this._unproject(e),startZoom:[t,n]})}zoom({pos:e,startPos:t,scale:n}){let{startZoom:r,startZoomPosition:i}=this.getState();if(!i){let{zoomX:n,zoomY:a}=this.getViewportProps();r=[n,a],i=this._unproject(t||e)}if(!i)return this;let a=this._constrainZoom(this._calculateNewZoom({scale:n,startZoom:r})),o=this.makeViewport({...this.getViewportProps(),...a});return this._getUpdatedState({...a,...o.panByPosition(i,e)})}zoomEnd(){return this._getUpdatedState({startZoomPosition:null,startZoom:null})}zoomIn(e=2){return this._getUpdatedState(this._calculateNewZoom({scale:e}))}zoomOut(e=2){return this._getUpdatedState(this._calculateNewZoom({scale:1/e}))}moveLeft(e=50){return this._panFromCenter([-e,0])}moveRight(e=50){return this._panFromCenter([e,0])}moveUp(e=50){return this._panFromCenter([0,-e])}moveDown(e=50){return this._panFromCenter([0,e])}rotateLeft(e=15){return this}rotateRight(e=15){return this}rotateUp(e=10){return this}rotateDown(e=10){return this}_project(e){return this.makeViewport(this.getViewportProps()).project(e)}_unproject(e){return this.makeViewport(this.getViewportProps()).unproject(e)}_calculateNewZoom({scale:e,startZoom:t}){let{zoomX:n,zoomY:r,zoomAxis:i}=this.getViewportProps();t===void 0&&(t=[n,r]);let a=Math.log2(e),[o,s]=t;switch(i){case`X`:o+=a;break;case`Y`:s+=a;break;default:o+=a,s+=a}return{zoomX:o,zoomY:s}}_panFromCenter(e){let{target:t}=this.getViewportProps(),n=this._project(t);return this.pan({startPosition:t,pos:[n[0]+e[0],n[1]+e[1]]})}_getUpdatedState(e){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e})}applyConstraints(e){let{zoomX:t,zoomY:n}=this._constrainZoom(e,e);e.zoomX=t,e.zoomY=n,e.zoom=Array.isArray(e.zoom)||e.zoomX!==e.zoomY?[e.zoomX,e.zoomY]:e.zoomX;let{maxBounds:r,target:i}=e;if(r){let a=e.width/2/2**t,o=e.height/2/2**n,s=r[0][0]+a,c=r[1][0]-a,l=r[0][1]+o,u=r[1][1]-o,d=H(i[0],s,c),f=H(i[1],l,u);(d!==i[0]||f!==i[1])&&(e.target=i.slice(),e.target[0]=d,e.target[1]=f)}return e}_constrainZoom({zoomX:e,zoomY:t},n){n||=this.getViewportProps();let{zoomAxis:r,maxZoomX:i,maxZoomY:a,maxBounds:o}=n,{minZoomX:s,minZoomY:c}=n;if(o!==null&&n.width>0&&n.height>0){let e=o[0],t=o[1],r=t[0]-e[0],l=t[1]-e[1];Number.isFinite(r)&&r>0&&(s=Math.max(s,Math.log2(n.width/r)),s>i&&(s=i)),Number.isFinite(l)&&l>0&&(c=Math.max(c,Math.log2(n.height/l)),c>a&&(c=a))}switch(r){case`X`:e=H(e,s,i);break;case`Y`:t=H(t,c,a);break;default:let n=Math.min(i-e,a-t,0);n===0&&(n=Math.max(s-e,c-t,0)),n!==0&&(e+=n,t+=n)}return{zoomX:e,zoomY:t}}},ix=class extends lv{constructor(){super(...arguments),this.ControllerState=rx,this.transition={transitionDuration:300,transitionInterpolator:new rv([`target`,`zoomX`,`zoomY`])},this.dragMode=`pan`}setProps(e){Object.assign(e,nx(e)),super.setProps(e)}_onPanRotate(){return!1}},ax=class extends B_{constructor(e={}){super(e)}getViewportType(){return tx}get ControllerType(){return ix}};ax.displayName=`OrthographicView`;var ox=class{constructor(e){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;let{attributes:t={}}=e;this.typedArrayManager=Ch,this.attributes={},this._attributeDefs=t,this.opts=e,this.updateGeometry(e)}updateGeometry(e){Object.assign(this.opts,e);let{data:t,buffers:n={},getGeometry:r,geometryBuffer:i,positionFormat:a,dataChanged:o,normalize:s=!0}=this.opts;if(this.data=t,this.getGeometry=r,this.positionSize=i&&i.size||(a===`XY`?2:3),this.buffers=n,this.normalize=s,i&&(Q(t.startIndices),this.getGeometry=this.getGeometryFromBuffer(i),s||(n.vertexPositions=i)),this.geometryBuffer=n.vertexPositions,Array.isArray(o))for(let e of o)this._rebuildGeometry(e);else this._rebuildGeometry()}updatePartialGeometry({startRow:e,endRow:t}){this._rebuildGeometry({startRow:e,endRow:t})}getGeometryFromBuffer(e){let t=e.value||e;return ArrayBuffer.isView(t)?ry(t,{size:this.positionSize,offset:e.offset,stride:e.stride,startIndices:this.data.startIndices}):null}_allocate(e,t){let{attributes:n,buffers:r,_attributeDefs:i,typedArrayManager:a}=this;for(let o in i)if(o in r)a.release(n[o]),n[o]=null;else{let r=i[o];r.copy=t,n[o]=a.allocate(n[o],e,r)}}_forEachGeometry(e,t,n){let{data:r,getGeometry:i}=this,{iterable:a,objectInfo:o}=ty(r,t,n);for(let t of a)o.index++,e(i?i(t,o):null,o.index)}_rebuildGeometry(e){if(!this.data)return;let{indexStarts:t,vertexStarts:n,instanceCount:r}=this,{data:i,geometryBuffer:a}=this,{startRow:o=0,endRow:s=1/0}=e||{},c={};if(e||(t=[0],n=[0]),this.normalize||!a)this._forEachGeometry((e,t)=>{let r=e&&this.normalizeGeometry(e);c[t]=r,n[t+1]=n[t]+(r?this.getGeometrySize(r):0)},o,s),r=n[n.length-1];else if(n=i.startIndices,r=n[i.length]||0,ArrayBuffer.isView(a))r||=a.length/this.positionSize;else if(a instanceof N){let e=this.positionSize*4;r||=a.byteLength/e}else if(a.buffer){let e=a.stride||this.positionSize*4;r||=a.buffer.byteLength/e}else if(a.value){let e=a.value,t=a.stride/e.BYTES_PER_ELEMENT||this.positionSize;r||=e.length/t}this._allocate(r,!!e),this.indexStarts=t,this.vertexStarts=n,this.instanceCount=r;let l={};this._forEachGeometry((e,i)=>{let a=c[i]||e;l.vertexStart=n[i],l.indexStart=t[i],l.geometrySize=(i<n.length-1?n[i+1]:r)-n[i],l.geometryIndex=i,this.updateGeometryAttributes(a,l)},o,s),this.vertexCount=t[t.length-1]}},sx=new Uint32Array([0,2,1,0,3,2]),cx=new Float32Array([0,1,0,0,1,0,1,1]);function lx(e,t){if(!t)return ux(e);let n=Math.max(Math.abs(e[0][0]-e[3][0]),Math.abs(e[1][0]-e[2][0])),r=Math.max(Math.abs(e[1][1]-e[0][1]),Math.abs(e[2][1]-e[3][1])),i=Math.ceil(n/t)+1,a=Math.ceil(r/t)+1,o=(i-1)*(a-1)*6,s=new Uint32Array(o),c=new Float32Array(i*a*2),l=new Float64Array(i*a*3),u=0,d=0;for(let t=0;t<i;t++){let n=t/(i-1);for(let r=0;r<a;r++){let i=r/(a-1),o=dx(e,n,i);l[u*3+0]=o[0],l[u*3+1]=o[1],l[u*3+2]=o[2]||0,c[u*2+0]=n,c[u*2+1]=1-i,t>0&&r>0&&(s[d++]=u-a,s[d++]=u-a-1,s[d++]=u-1,s[d++]=u-a,s[d++]=u-1,s[d++]=u),u++}}return{vertexCount:o,positions:l,indices:s,texCoords:c}}function ux(e){let t=new Float64Array(12);for(let n=0;n<e.length;n++)t[n*3+0]=e[n][0],t[n*3+1]=e[n][1],t[n*3+2]=e[n][2]||0;return{vertexCount:6,positions:t,indices:sx,texCoords:cx}}function dx(e,t,n){return hl(hl(e[0],e[1],n),hl(e[3],e[2],n),t)}var fx=`layout(std140) uniform bitmapUniforms {
  vec4 bounds;
  float coordinateConversion;
  float desaturate;
  vec3 tintColor;
  vec4 transparentColor;
} bitmap;
`,px={name:`bitmap`,vs:fx,fs:fx,uniformTypes:{bounds:`vec4<f32>`,coordinateConversion:`f32`,desaturate:`f32`,tintColor:`vec3<f32>`,transparentColor:`vec4<f32>`}},mx=`#version 300 es
#define SHADER_NAME bitmap-layer-vertex-shader

in vec2 texCoords;
in vec3 positions;
in vec3 positions64Low;

out vec2 vTexCoord;
out vec2 vTexPos;

const vec3 pickingColor = vec3(1.0, 0.0, 0.0);

void main(void) {
  geometry.worldPosition = positions;
  geometry.uv = texCoords;
  geometry.pickingColor = pickingColor;

  gl_Position = project_position_to_clipspace(positions, positions64Low, vec3(0.0), geometry.position);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  vTexCoord = texCoords;

  if (bitmap.coordinateConversion < -0.5) {
    vTexPos = geometry.position.xy + project.commonOrigin.xy;
  } else if (bitmap.coordinateConversion > 0.5) {
    vTexPos = geometry.worldPosition.xy;
  }

  vec4 color = vec4(0.0);
  DECKGL_FILTER_COLOR(color, geometry);
}
`,hx=`#version 300 es
#define SHADER_NAME bitmap-layer-fragment-shader

#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D bitmapTexture;

in vec2 vTexCoord;
in vec2 vTexPos;

out vec4 fragColor;

/* projection utils */
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / PI / 2.0;

// from degrees to Web Mercator
vec2 lnglat_to_mercator(vec2 lnglat) {
  float x = lnglat.x;
  float y = clamp(lnglat.y, -89.9, 89.9);
  return vec2(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// from Web Mercator to degrees
vec2 mercator_to_lnglat(vec2 xy) {
  xy /= WORLD_SCALE;
  return degrees(vec2(
    xy.x - PI,
    atan(exp(xy.y - PI)) * 2.0 - PI * 0.5
  ));
}
/* End projection utils */

// apply desaturation
vec3 color_desaturate(vec3 color) {
  float luminance = (color.r + color.g + color.b) * 0.333333333;
  return mix(color, vec3(luminance), bitmap.desaturate);
}

// apply tint
vec3 color_tint(vec3 color) {
  return color * bitmap.tintColor;
}

// blend with background color
vec4 apply_opacity(vec3 color, float alpha) {
  if (bitmap.transparentColor.a == 0.0) {
    return vec4(color, alpha);
  }
  float blendedAlpha = alpha + bitmap.transparentColor.a * (1.0 - alpha);
  float highLightRatio = alpha / blendedAlpha;
  vec3 blendedRGB = mix(bitmap.transparentColor.rgb, color, highLightRatio);
  return vec4(blendedRGB, blendedAlpha);
}

vec2 getUV(vec2 pos) {
  return vec2(
    (pos.x - bitmap.bounds[0]) / (bitmap.bounds[2] - bitmap.bounds[0]),
    (pos.y - bitmap.bounds[3]) / (bitmap.bounds[1] - bitmap.bounds[3])
  );
}


vec3 packUVsIntoRGB(vec2 uv) {
  // Extract the top 8 bits. We want values to be truncated down so we can add a fraction
  vec2 uv8bit = floor(uv * 256.);

  // Calculate the normalized remainders of u and v parts that do not fit into 8 bits
  // Scale and clamp to 0-1 range
  vec2 uvFraction = fract(uv * 256.);
  vec2 uvFraction4bit = floor(uvFraction * 16.);

  // Remainder can be encoded in blue channel, encode as 4 bits for pixel coordinates
  float fractions = uvFraction4bit.x + uvFraction4bit.y * 16.;

  return vec3(uv8bit, fractions) / 255.;
}


void main(void) {
  vec2 uv = vTexCoord;
  if (bitmap.coordinateConversion < -0.5) {
    vec2 lnglat = mercator_to_lnglat(vTexPos);
    uv = getUV(lnglat);
  } else if (bitmap.coordinateConversion > 0.5) {
    vec2 commonPos = lnglat_to_mercator(vTexPos);
    uv = getUV(commonPos);
  }
  vec4 bitmapColor = texture(bitmapTexture, uv);

  fragColor = apply_opacity(color_tint(color_desaturate(bitmapColor.rgb)), bitmapColor.a * layer.opacity);

  geometry.uv = uv;
  DECKGL_FILTER_COLOR(fragColor, geometry);

  if (bool(picking.isActive) && !bool(picking.isAttribute)) {
    // Since instance information is not used, we can use picking color for pixel index
    fragColor.rgb = packUVsIntoRGB(uv);
  }
}
`,gx={image:{type:`image`,value:null,async:!0},bounds:{type:`array`,value:[1,0,0,1],compare:!0},_imageCoordinateSystem:`default`,desaturate:{type:`number`,min:0,max:1,value:0},transparentColor:{type:`color`,value:[0,0,0,0]},tintColor:{type:`color`,value:[255,255,255]},textureParameters:{type:`object`,ignore:!0,value:null}},_x=class extends Kb{getShaders(){return super.getShaders({vs:mx,fs:hx,modules:[om,Qm,px]})}initializeState(){let e=this.getAttributeManager();e.remove([`instancePickingColors`]),e.add({indices:{size:1,isIndexed:!0,update:e=>e.value=this.state.mesh.indices,noAlloc:!0},positions:{size:3,type:`float64`,fp64:this.use64bitPositions(),update:e=>e.value=this.state.mesh.positions,noAlloc:!0},texCoords:{size:2,update:e=>e.value=this.state.mesh.texCoords,noAlloc:!0}})}updateState({props:e,oldProps:t,changeFlags:n}){let r=this.getAttributeManager();if(n.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),r.invalidateAll()),e.bounds!==t.bounds){let e=this.state.mesh,t=this._createMesh();this.state.model.setVertexCount(t.vertexCount);for(let n in t)e&&e[n]!==t[n]&&r.invalidate(n);this.setState({mesh:t,...this._getCoordinateUniforms()})}else e._imageCoordinateSystem!==t._imageCoordinateSystem&&this.setState(this._getCoordinateUniforms())}getPickingInfo(e){let{image:t}=this.props,n=e.info;if(!n.color||!t)return n.bitmap=null,n;let{width:r,height:i}=t;n.index=0;let a=vx(n.color);return n.bitmap={size:{width:r,height:i},uv:a,pixel:[Math.floor(a[0]*r),Math.floor(a[1]*i)]},n}disablePickingIndex(){this.setState({disablePicking:!0})}restorePickingColors(){this.setState({disablePicking:!1})}_updateAutoHighlight(e){super._updateAutoHighlight({...e,color:this.encodePickingColor(0)})}_createMesh(){let{bounds:e}=this.props,t=e;return yx(e)&&(t=[[e[0],e[1]],[e[0],e[3]],[e[2],e[3]],[e[2],e[1]]]),lx(t,this.context.viewport.resolution)}_getModel(){return new a_(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),topology:`triangle-list`,isInstanced:!1})}draw(e){let{shaderModuleProps:t}=e,{model:n,coordinateConversion:r,bounds:i,disablePicking:a}=this.state,{image:o,desaturate:s,transparentColor:c,tintColor:l}=this.props;if(!(t.picking.isActive&&a)&&o&&n){let e={bitmapTexture:o,bounds:i,coordinateConversion:r,desaturate:s,tintColor:l.slice(0,3).map(e=>e/255),transparentColor:c.map(e=>e/255)};n.shaderInputs.setProps({bitmap:e}),n.draw(this.context.renderPass)}}_getCoordinateUniforms(){let{_imageCoordinateSystem:e}=this.props;if(e!==`default`){let{bounds:t}=this.props;if(!yx(t))throw Error(`_imageCoordinateSystem only supports rectangular bounds`);let n=this.context.viewport.resolution?`lnglat`:`cartesian`;if(e=e===`lnglat`?`lnglat`:`cartesian`,e===`lnglat`&&n===`cartesian`)return{coordinateConversion:-1,bounds:t};if(e===`cartesian`&&n===`lnglat`){let e=Sm([t[0],t[1]]),n=Sm([t[2],t[3]]);return{coordinateConversion:1,bounds:[e[0],e[1],n[0],n[1]]}}}return{coordinateConversion:0,bounds:[0,0,0,0]}}};_x.layerName=`BitmapLayer`,_x.defaultProps=gx;function vx(e){let[t,n,r]=e,i=(r&240)/256;return[(t+(r&15)/16)/256,(n+i)/256]}function yx(e){return Number.isFinite(e[0])}var bx=`layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,xx={name:`icon`,vs:bx,fs:bx,uniformTypes:{sizeScale:`f32`,iconsTextureDim:`vec2<f32>`,sizeBasis:`f32`,sizeMinPixels:`f32`,sizeMaxPixels:`f32`,billboard:`f32`,sizeUnits:`i32`,alphaCutoff:`f32`}},Sx=`#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,Cx=`#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,wx=`struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instancePickingColors: vec3<f32>,
  @location(7) instanceIconFrames: vec4<f32>,
  @location(8) instanceColorModes: f32,
  @location(9) instanceOffsets: vec2<f32>,
  @location(10) instancePixelOffset: vec2<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = inp.instancePickingColors;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = inp.instancePickingColors;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`,Tx=1024,Ex=4,Dx=()=>{},Ox={minFilter:`linear`,mipmapFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`},kx={x:0,y:0,width:0,height:0};function Ax(e){return 2**Math.ceil(Math.log2(e))}function jx(e,t,n,r){let i=Math.min(n/t.width,r/t.height),a=Math.floor(t.width*i),o=Math.floor(t.height*i);return i===1?{image:t,width:a,height:o}:(e.canvas.height=o,e.canvas.width=a,e.clearRect(0,0,a,o),e.drawImage(t,0,0,t.width,t.height,0,0,a,o),{image:e.canvas,width:a,height:o})}function Mx(e){return e&&(e.id||e.url)}function Nx(e){let{device:t}=e;t.type===`webgl`?e.generateMipmapsWebGL():t.type===`webgpu`&&t.generateMipmapsWebGPU(e)}function Px(e,t,n,r){let{width:i,height:a,device:o}=e,s=o.createTexture({format:`rgba8unorm`,width:t,height:n,sampler:r,mipLevels:o.getMipLevelCount(t,n)}),c=o.createCommandEncoder();c.copyTextureToTexture({sourceTexture:e,destinationTexture:s,width:i,height:a});let l=c.finish();return o.submit(l),Nx(s),e.destroy(),s}function Fx(e,t,n){for(let r=0;r<t.length;r++){let{icon:i,xOffset:a}=t[r],o=Mx(i);e[o]={...i,x:a,y:n}}}function Ix({icons:e,buffer:t,mapping:n={},xOffset:r=0,yOffset:i=0,rowHeight:a=0,canvasWidth:o}){let s=[];for(let c=0;c<e.length;c++){let l=e[c];if(!n[Mx(l)]){let{height:e,width:c}=l;r+c+t>o&&(Fx(n,s,i),r=0,i=a+i+t,a=0,s=[]),s.push({icon:l,xOffset:r}),r=r+c+t,a=Math.max(a,e)}}return s.length>0&&Fx(n,s,i),{mapping:n,rowHeight:a,xOffset:r,yOffset:i,canvasWidth:o,canvasHeight:Ax(a+i+t)}}function Lx(e,t,n){if(!e||!t)return null;n||={};let r={},{iterable:i,objectInfo:a}=ty(e);for(let e of i){a.index++;let i=t(e,a),o=Mx(i);if(!i)throw Error(`Icon is missing.`);if(!i.url)throw Error(`Icon url is missing.`);!r[o]&&(!n[o]||i.url!==n[o].url)&&(r[o]={...i,source:e,sourceIndex:a.index})}return r}var Rx=class{constructor(e,{onUpdate:t=Dx,onError:n=Dx}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=Ex,this._canvasWidth=Tx,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=n}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let t=this._autoPacking?Mx(e):e;return this._mapping[t]||kx}setProps({loadOptions:e,autoPacking:t,iconAtlas:n,iconMapping:r,textureParameters:i}){e&&(this._loadOptions=e),t!==void 0&&(this._autoPacking=t),r&&(this._mapping=r),n&&(this._texture?.delete(),this._texture=null,this._externalTexture=n),i&&(this._samplerParameters=i)}get isLoaded(){return this._pendingCount===0}packIcons(e,t){if(!this._autoPacking||typeof document>`u`)return;let n=Object.values(Lx(e,t,this._mapping)||{});if(n.length>0){let{mapping:e,xOffset:t,yOffset:r,rowHeight:i,canvasHeight:a}=Ix({icons:n,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=i,this._mapping=e,this._xOffset=t,this._yOffset=r,this._canvasHeight=a,this._texture||=this.device.createTexture({format:`rgba8unorm`,data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||Ox,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)}),this._texture.height!==this._canvasHeight&&(this._texture=Px(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||Ox)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement(`canvas`),this._loadIcons(n)}}_loadIcons(e){let t=this._canvas.getContext(`2d`,{willReadFrequently:!0});for(let n of e)this._pendingCount++,xo(n.url,this._loadOptions).then(e=>{let r=Mx(n),i=this._mapping[r],{x:a,y:o,width:s,height:c}=i,{image:l,width:u,height:d}=jx(t,e,s,c),f=a+(s-u)/2,p=o+(c-d)/2;this._texture?.copyExternalImage({image:l,x:f,y:p,width:u,height:d}),i.x=f,i.y=p,i.width=u,i.height=d,this._texture&&Nx(this._texture),this.onUpdate(u!==s||d!==c)}).catch(e=>{this.onError({url:n.url,source:n.source,sourceIndex:n.sourceIndex,loadOptions:this._loadOptions,error:e})}).finally(()=>{this._pendingCount--})}},zx=[0,0,0,255],Bx={iconAtlas:{type:`image`,value:null,async:!0},iconMapping:{type:`object`,value:{},async:!0},sizeScale:{type:`number`,value:1,min:0},billboard:!0,sizeUnits:`pixels`,sizeBasis:`height`,sizeMinPixels:{type:`number`,min:0,value:0},sizeMaxPixels:{type:`number`,min:0,value:2**53-1},alphaCutoff:{type:`number`,value:.05,min:0,max:1},getPosition:{type:`accessor`,value:e=>e.position},getIcon:{type:`accessor`,value:e=>e.icon},getColor:{type:`accessor`,value:zx},getSize:{type:`accessor`,value:1},getAngle:{type:`accessor`,value:0},getPixelOffset:{type:`accessor`,value:[0,0]},onIconError:{type:`function`,value:null,optional:!0},textureParameters:{type:`object`,ignore:!0,value:null}},Vx=class extends Kb{getShaders(){return super.getShaders({vs:Sx,fs:Cx,source:wx,modules:[om,ff,Qm,xx]})}initializeState(){this.state={iconManager:new Rx(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceSizes:{size:1,transition:!0,accessor:`getSize`,defaultValue:1},instanceIconDefs:{size:7,accessor:`getIcon`,transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,accessor:`getColor`,defaultValue:zx},instanceAngles:{size:1,transition:!0,accessor:`getAngle`},instancePixelOffset:{size:2,transition:!0,accessor:`getPixelOffset`}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager(),{iconAtlas:a,iconMapping:o,data:s,getIcon:c,textureParameters:l}=t,{iconManager:u}=this.state;if(typeof a==`string`)return;let d=a||this.internalState.isAsyncPropLoading(`iconAtlas`);u.setProps({loadOptions:t.loadOptions,autoPacking:!d,iconAtlas:a,iconMapping:d?o:null,textureParameters:l}),d?n.iconMapping!==t.iconMapping&&i.invalidate(`getIcon`):(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getIcon))&&u.packIcons(s,c),r.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),i.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){let{sizeScale:t,sizeBasis:n,sizeMinPixels:r,sizeMaxPixels:i,sizeUnits:a,billboard:o,alphaCutoff:s}=this.props,{iconManager:c}=this.state,l=c.getTexture();if(l){let e=this.state.model,c={iconsTexture:l,iconsTextureDim:[l.width,l.height],sizeUnits:Rp[a],sizeScale:t,sizeBasis:n===`height`?1:0,sizeMinPixels:r,sizeMaxPixels:i,billboard:o,alphaCutoff:s};e.shaderInputs.setProps({icon:c}),e.draw(this.context.renderPass)}}_getModel(){let e=[-1,-1,1,-1,-1,1,1,1];return new a_(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new c_({topology:`triangle-strip`,attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate(`getIcon`),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let t=this.getCurrentLayer()?.props.onIconError;t?t(e):R.error(e.error.message)()}getInstanceIconDef(e){let{x:t,y:n,width:r,height:i,mask:a,anchorX:o=r/2,anchorY:s=i/2}=this.state.iconManager.getIconMapping(e);return[r/2-o,i/2-s,t,n,r,i,a?1:0]}};Vx.defaultProps=Bx,Vx.layerName=`IconLayer`;var Hx=`layout(std140) uniform lineUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float useShortestPath;
  highp int widthUnits;
} line;
`,Ux={name:`line`,source:``,vs:Hx,fs:Hx,uniformTypes:{widthScale:`f32`,widthMinPixels:`f32`,widthMaxPixels:`f32`,useShortestPath:`f32`,widthUnits:`i32`}},Wx=`// ---------- Helper Structures & Functions ----------

// Placeholder filter functions.
fn deckgl_filter_size(offset: vec3<f32>, geometry: Geometry) -> vec3<f32> {
  return offset;
}
fn deckgl_filter_gl_position(p: vec4<f32>, geometry: Geometry) -> vec4<f32> {
  if (picking.isAttribute > 0.5) {
    // For depth picking, write normalized depth into the picking payload.
    // This mirrors the legacy DECKGL_FILTER_GL_POSITION hook on WebGL.
  }
  return p;
}

// Compute an extrusion offset given a line direction (in clipspace),
// an offset direction (-1 or 1), and a width in pixels.
// Assumes a uniform "project" with a viewportSize field is available.
fn getExtrusionOffset(line_clipspace: vec2<f32>, offset_direction: f32, width: f32) -> vec2<f32> {
  // project.viewportSize should be provided as a uniform (not shown here)
  let dir_screenspace = normalize(line_clipspace * project.viewportSize);
  // Rotate by 90°: (x,y) becomes (-y,x)
  let rotated = vec2<f32>(-dir_screenspace.y, dir_screenspace.x);
  return rotated * offset_direction * width / 2.0;
}

// Splits the line between two points at a given x coordinate.
// Interpolates the y and z components.
fn splitLine(a: vec3<f32>, b: vec3<f32>, x: f32) -> vec3<f32> {
  let t: f32 = (x - a.x) / (b.x - a.x);
  return vec3<f32>(x, a.yz + t * (b.yz - a.yz));
}

// ---------- Uniforms & Global Structures ----------

struct LineUniforms {
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  useShortestPath: f32,
  widthUnits: i32,
};

@group(0) @binding(0)
var<uniform> line: LineUniforms;



// ---------- Vertex Output Structure ----------

struct Varyings {
  @builtin(position) gl_Position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) uv: vec2<f32>,
  @location(2) pickingColor: vec3<f32>,
};

// ---------- Vertex Shader Entry Point ----------

@vertex
fn vertexMain(
  @location(0) positions: vec3<f32>,
  @location(1) instanceSourcePositions: vec3<f32>,
  @location(2) instanceTargetPositions: vec3<f32>,
  @location(3) instanceSourcePositions64Low: vec3<f32>,
  @location(4) instanceTargetPositions64Low: vec3<f32>,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instancePickingColors: vec3<f32>,
  @location(7) instanceWidths: f32
) -> Varyings {
  geometry.worldPosition = instanceSourcePositions;
  geometry.worldPositionAlt = instanceTargetPositions;

  var source_world: vec3<f32> = instanceSourcePositions;
  var target_world: vec3<f32> = instanceTargetPositions;
  var source_world_64low: vec3<f32> = instanceSourcePositions64Low;
  var target_world_64low: vec3<f32> = instanceTargetPositions64Low;

  // Apply shortest-path adjustments if needed.
  if (line.useShortestPath > 0.5 || line.useShortestPath < -0.5) {
    source_world.x = (source_world.x + 180.0 % 360.0) - 180.0;
    target_world.x = (target_world.x + 180.0 % 360.0) - 180.0;
    let deltaLng: f32 = target_world.x - source_world.x;

    if (deltaLng * line.useShortestPath > 180.0) {
      source_world.x = source_world.x + 360.0 * line.useShortestPath;
      source_world = splitLine(source_world, target_world, 180.0 * line.useShortestPath);
      source_world_64low = vec3<f32>(0.0, 0.0, 0.0);
    } else if (deltaLng * line.useShortestPath < -180.0) {
      target_world.x = target_world.x + 360.0 * line.useShortestPath;
      target_world = splitLine(source_world, target_world, 180.0 * line.useShortestPath);
      target_world_64low = vec3<f32>(0.0, 0.0, 0.0);
    } else if (line.useShortestPath < 0.0) {
      var abortOut: Varyings;
      abortOut.gl_Position = vec4<f32>(0.0);
      abortOut.vColor = vec4<f32>(0.0);
      abortOut.uv = vec2<f32>(0.0);
      return abortOut;
    }
  }

  // Project Pos and target positions to clip space.
  let sourceResult = project_position_to_clipspace_and_commonspace(source_world, source_world_64low, vec3<f32>(0.0));
  let targetResult = project_position_to_clipspace_and_commonspace(target_world, target_world_64low, vec3<f32>(0.0));
  let sourcePos: vec4<f32> = sourceResult.clipPosition;
  let targetPos: vec4<f32> = targetResult.clipPosition;
  let source_commonspace: vec4<f32> = sourceResult.commonPosition;
  let target_commonspace: vec4<f32> = targetResult.commonPosition;

  // Interpolate along the line segment.
  let segmentIndex: f32 = positions.x;
  let p: vec4<f32> = sourcePos + segmentIndex * (targetPos - sourcePos);
  geometry.position = source_commonspace + segmentIndex * (target_commonspace - source_commonspace);
  let uv: vec2<f32> = positions.xy;
  geometry.uv = uv;
  geometry.pickingColor = instancePickingColors;

  // Determine width in pixels.
  let widthPixels: f32 = clamp(
    project_unit_size_to_pixel(instanceWidths * line.widthScale, line.widthUnits),
    line.widthMinPixels, line.widthMaxPixels
  );

  // Compute extrusion offset.
  let extrusion: vec2<f32> = getExtrusionOffset(targetPos.xy - sourcePos.xy, positions.y, widthPixels);
  let offset: vec3<f32> = vec3<f32>(extrusion, 0.0);

  // Apply deck.gl filter functions.
  let filteredOffset = deckgl_filter_size(offset, geometry);
  let filteredP = deckgl_filter_gl_position(p, geometry);

  let clipOffset: vec2<f32> = project_pixel_size_to_clipspace(filteredOffset.xy);
  let finalPosition: vec4<f32> = filteredP + vec4<f32>(clipOffset, 0.0, 0.0);

  // Compute color.
  var vColor: vec4<f32> = vec4<f32>(instanceColors.rgb, instanceColors.a * layer.opacity);
  // vColor = deckgl_filter_color(vColor, geometry);

  var output: Varyings;
  output.gl_Position = finalPosition;
  output.vColor = vColor;
  output.uv = uv;
  output.pickingColor = instancePickingColors;
  return output;
}

@fragment
fn fragmentMain(
  @location(0) vColor: vec4<f32>,
  @location(1) uv: vec2<f32>,
  @location(2) pickingColor: vec3<f32>
) -> @location(0) vec4<f32> {
  // Create and initialize geometry with the provided uv.
  var geometry: Geometry;
  geometry.uv = uv;

  // Start with the input color.
  var fragColor: vec4<f32> = vColor;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(pickingColor)) {
      discard;
    }
    return vec4<f32>(pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
}
`,Gx=`#version 300 es
#define SHADER_NAME line-layer-vertex-shader
in vec3 positions;
in vec3 instanceSourcePositions;
in vec3 instanceTargetPositions;
in vec3 instanceSourcePositions64Low;
in vec3 instanceTargetPositions64Low;
in vec4 instanceColors;
in vec3 instancePickingColors;
in float instanceWidths;
out vec4 vColor;
out vec2 uv;
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
vec2 dir_screenspace = normalize(line_clipspace * project.viewportSize);
dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);
return dir_screenspace * offset_direction * width / 2.0;
}
vec3 splitLine(vec3 a, vec3 b, float x) {
float t = (x - a.x) / (b.x - a.x);
return vec3(x, mix(a.yz, b.yz, t));
}
void main(void) {
geometry.worldPosition = instanceSourcePositions;
geometry.worldPositionAlt = instanceTargetPositions;
vec3 source_world = instanceSourcePositions;
vec3 target_world = instanceTargetPositions;
vec3 source_world_64low = instanceSourcePositions64Low;
vec3 target_world_64low = instanceTargetPositions64Low;
if (line.useShortestPath > 0.5 || line.useShortestPath < -0.5) {
source_world.x = mod(source_world.x + 180., 360.0) - 180.;
target_world.x = mod(target_world.x + 180., 360.0) - 180.;
float deltaLng = target_world.x - source_world.x;
if (deltaLng * line.useShortestPath > 180.) {
source_world.x += 360. * line.useShortestPath;
source_world = splitLine(source_world, target_world, 180. * line.useShortestPath);
source_world_64low = vec3(0.0);
} else if (deltaLng * line.useShortestPath < -180.) {
target_world.x += 360. * line.useShortestPath;
target_world = splitLine(source_world, target_world, 180. * line.useShortestPath);
target_world_64low = vec3(0.0);
} else if (line.useShortestPath < 0.) {
gl_Position = vec4(0.);
return;
}
}
vec4 source_commonspace;
vec4 target_commonspace;
vec4 source = project_position_to_clipspace(source_world, source_world_64low, vec3(0.), source_commonspace);
vec4 target = project_position_to_clipspace(target_world, target_world_64low, vec3(0.), target_commonspace);
float segmentIndex = positions.x;
vec4 p = mix(source, target, segmentIndex);
geometry.position = mix(source_commonspace, target_commonspace, segmentIndex);
uv = positions.xy;
geometry.uv = uv;
geometry.pickingColor = instancePickingColors;
float widthPixels = clamp(
project_size_to_pixel(instanceWidths * line.widthScale, line.widthUnits),
line.widthMinPixels, line.widthMaxPixels
);
vec3 offset = vec3(
getExtrusionOffset(target.xy - source.xy, positions.y, widthPixels),
0.0);
DECKGL_FILTER_SIZE(offset, geometry);
DECKGL_FILTER_GL_POSITION(p, geometry);
gl_Position = p + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,Kx=`#version 300 es
#define SHADER_NAME line-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
fragColor = vColor;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,qx={getSourcePosition:{type:`accessor`,value:e=>e.sourcePosition},getTargetPosition:{type:`accessor`,value:e=>e.targetPosition},getColor:{type:`accessor`,value:[0,0,0,255]},getWidth:{type:`accessor`,value:1},widthUnits:`pixels`,widthScale:{type:`number`,value:1,min:0},widthMinPixels:{type:`number`,value:0,min:0},widthMaxPixels:{type:`number`,value:2**53-1,min:0}},Jx=class extends Kb{getBounds(){return this.getAttributeManager()?.getBounds([`instanceSourcePositions`,`instanceTargetPositions`])}getShaders(){return super.getShaders({vs:Gx,fs:Kx,source:Wx,modules:[om,ff,Qm,Ux]})}get wrapLongitude(){return!1}initializeState(){this.getAttributeManager().addInstanced({instanceSourcePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getSourcePosition`},instanceTargetPositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getTargetPosition`},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,accessor:`getColor`,defaultValue:[0,0,0,255]},instanceWidths:{size:1,transition:!0,accessor:`getWidth`,defaultValue:1}})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{widthUnits:t,widthScale:n,widthMinPixels:r,widthMaxPixels:i,wrapLongitude:a}=this.props,o=this.state.model,s={widthUnits:Rp[t],widthScale:n,widthMinPixels:r,widthMaxPixels:i,useShortestPath:a?1:0};o.shaderInputs.setProps({line:s}),o.draw(this.context.renderPass),a&&(o.shaderInputs.setProps({line:{...s,useShortestPath:-1}}),o.draw(this.context.renderPass))}_getModel(){let e=[0,-1,0,0,1,0,1,-1,0,1,1,0];return new a_(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new c_({topology:`triangle-strip`,attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}};Jx.layerName=`LineLayer`,Jx.defaultProps=qx;var Yx=`layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,Xx={name:`scatterplot`,vs:Yx,fs:Yx,source:``,uniformTypes:{radiusScale:`f32`,radiusMinPixels:`f32`,radiusMaxPixels:`f32`,lineWidthScale:`f32`,lineWidthMinPixels:`f32`,lineWidthMaxPixels:`f32`,stroked:`f32`,filled:`f32`,antialiasing:`f32`,billboard:`f32`,radiusUnits:`i32`,lineWidthUnits:`i32`}},Zx=`#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
geometry.pickingColor = instancePickingColors;
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,Qx=`#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,$x=`// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

struct ConstantAttributeUniforms {
 instancePositions: vec3<f32>,
 instancePositions64Low: vec3<f32>,
 instanceRadius: f32,
 instanceLineWidths: f32,
 instanceFillColors: vec4<f32>,
 instanceLineColors: vec4<f32>,
 instancePickingColors: vec3<f32>,

 instancePositionsConstant: i32,
 instancePositions64LowConstant: i32,
 instanceRadiusConstant: i32,
 instanceLineWidthsConstant: i32,
 instanceFillColorsConstant: i32,
 instanceLineColorsConstant: i32,
 instancePickingColorsConstant: i32
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct ConstantAttributes {
  instancePositions: vec3<f32>,
  instancePositions64Low: vec3<f32>,
  instanceRadius: f32,
  instanceLineWidths: f32,
  instanceFillColors: vec4<f32>,
  instanceLineColors: vec4<f32>,
  instancePickingColors: vec3<f32>
};

const constants = ConstantAttributes(
  vec3<f32>(0.0),
  vec3<f32>(0.0),
  0.0,
  0.0,
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec3<f32>(0.0)
);

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePickingColors: vec3<f32>,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  let edgePadding = select(
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    1.0,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = attributes.instancePickingColors;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, vec3<f32>(0.0)); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    let offset = attributes.positions; // * edgePadding * varyings.outerRadiusPixels;
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position.x = clipPixels.x;
    varyings.position.y = clipPixels.y;
  } else {
    let offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    // DECKGL_FILTER_SIZE(offset, geometry);
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, offset); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = attributes.instancePickingColors;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    step(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`,eS=[0,0,0,255],tS={radiusUnits:`meters`,radiusScale:{type:`number`,min:0,value:1},radiusMinPixels:{type:`number`,min:0,value:0},radiusMaxPixels:{type:`number`,min:0,value:2**53-1},lineWidthUnits:`meters`,lineWidthScale:{type:`number`,min:0,value:1},lineWidthMinPixels:{type:`number`,min:0,value:0},lineWidthMaxPixels:{type:`number`,min:0,value:2**53-1},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:`accessor`,value:e=>e.position},getRadius:{type:`accessor`,value:1},getFillColor:{type:`accessor`,value:eS},getLineColor:{type:`accessor`,value:eS},getLineWidth:{type:`accessor`,value:1},strokeWidth:{deprecatedFor:`getLineWidth`},outline:{deprecatedFor:`stroked`},getColor:{deprecatedFor:[`getFillColor`,`getLineColor`]}},nS=class extends Kb{getShaders(){return super.getShaders({vs:Zx,fs:Qx,source:$x,modules:[om,ff,Qm,Xx]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceRadius:{size:1,transition:!0,accessor:`getRadius`,defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:`unorm8`,accessor:`getFillColor`,defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:`unorm8`,accessor:`getLineColor`,defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:`getLineWidth`,defaultValue:1}})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:t,radiusScale:n,radiusMinPixels:r,radiusMaxPixels:i,stroked:a,filled:o,billboard:s,antialiasing:c,lineWidthUnits:l,lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:f}=this.props,p={stroked:a,filled:o,billboard:s,antialiasing:c,radiusUnits:Rp[t],radiusScale:n,radiusMinPixels:r,radiusMaxPixels:i,lineWidthUnits:Rp[l],lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:f},m=this.state.model;m.shaderInputs.setProps({scatterplot:p}),m.draw(this.context.renderPass)}_getModel(){let e=[-1,-1,0,1,-1,0,-1,1,0,1,1,0];return new a_(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new c_({topology:`triangle-strip`,attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}};nS.defaultProps=tS,nS.layerName=`ScatterplotLayer`;var rS={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function iS(e,t,n={}){return aS(e,n)===t?!1:(cS(e,n),!0)}function aS(e,t={}){return Math.sign(sS(e,t))}var oS={x:0,y:1,z:2};function sS(e,t={}){let{start:n=0,end:r=e.length,plane:i=`xy`}=t,a=t.size||2,o=0,s=oS[i[0]],c=oS[i[1]];for(let t=n,i=r-a;t<r;t+=a)o+=(e[t+s]-e[i+s])*(e[t+c]+e[i+c]),i=t;return o/2}function cS(e,t){let{start:n=0,end:r=e.length,size:i=2}=t,a=(r-n)/i,o=Math.floor(a/2);for(let t=0;t<o;++t){let r=n+t*i,o=n+(a-1-t)*i;for(let t=0;t<i;++t){let n=e[r+t];e[r+t]=e[o+t],e[o+t]=n}}}function lS(e,t){let n=t.length,r=e.length;if(r>0){let i=!0;for(let a=0;a<n;a++)if(e[r-n+a]!==t[a]){i=!1;break}if(i)return!1}for(let i=0;i<n;i++)e[r+i]=t[i];return!0}function uS(e,t){let n=t.length;for(let r=0;r<n;r++)e[r]=t[r]}function dS(e,t,n,r,i=[]){let a=r+t*n;for(let t=0;t<n;t++)i[t]=e[a+t];return i}function fS(e,t,n,r,i=[]){let a,o;if(n&8)a=(r[3]-e[1])/(t[1]-e[1]),o=3;else if(n&4)a=(r[1]-e[1])/(t[1]-e[1]),o=1;else if(n&2)a=(r[2]-e[0])/(t[0]-e[0]),o=2;else if(n&1)a=(r[0]-e[0])/(t[0]-e[0]),o=0;else return null;for(let n=0;n<e.length;n++)i[n]=(o&1)===n?r[o]:a*(t[n]-e[n])+e[n];return i}function pS(e,t){let n=0;return e[0]<t[0]?n|=1:e[0]>t[2]&&(n|=2),e[1]<t[1]?n|=4:e[1]>t[3]&&(n|=8),n}function mS(e,t){let{size:n=2,broken:r=!1,gridResolution:i=10,gridOffset:a=[0,0],startIndex:o=0,endIndex:s=e.length}=t||{},c=(s-o)/n,l=[],u=[l],d=dS(e,0,n,o),f,p,m=yS(d,i,a,[]),h=[];lS(l,d);for(let t=1;t<c;t++){for(f=dS(e,t,n,o,f),p=pS(f,m);p;){fS(d,f,p,m,h);let e=pS(h,m);e&&(fS(d,h,e,m,h),p=e),lS(l,h),uS(d,h),bS(m,i,p),r&&l.length>n&&(l=[],u.push(l),lS(l,d)),p=pS(f,m)}lS(l,f),uS(d,f)}return r?u:u[0]}var hS=0,gS=1;function _S(e,t=null,n){if(!e.length)return[];let{size:r=2,gridResolution:i=10,gridOffset:a=[0,0],edgeTypes:o=!1}=n||{},s=[],c=[{pos:e,types:o?Array(e.length/r).fill(gS):null,holes:t||[]}],l=[[],[]],u=[];for(;c.length;){let{pos:e,types:t,holes:n}=c.shift();xS(e,r,n[0]||e.length,l),u=yS(l[0],i,a,u);let d=pS(l[1],u);if(d){let i=vS(e,t,r,0,n[0]||e.length,u,d),a={pos:i[0].pos,types:i[0].types,holes:[]},s={pos:i[1].pos,types:i[1].types,holes:[]};c.push(a,s);for(let c=0;c<n.length;c++)i=vS(e,t,r,n[c],n[c+1]||e.length,u,d),i[0]&&(a.holes.push(a.pos.length),a.pos=SS(a.pos,i[0].pos),o&&(a.types=SS(a.types,i[0].types))),i[1]&&(s.holes.push(s.pos.length),s.pos=SS(s.pos,i[1].pos),o&&(s.types=SS(s.types,i[1].types)))}else{let r={positions:e};o&&(r.edgeTypes=t),n.length&&(r.holeIndices=n),s.push(r)}}return s}function vS(e,t,n,r,i,a,o){let s=(i-r)/n,c=[],l=[],u=[],d=[],f=[],p,m,h,g=dS(e,s-1,n,r),_=Math.sign(o&8?g[1]-a[3]:g[0]-a[2]),v=t&&t[s-1],y=0,b=0;for(let i=0;i<s;i++)p=dS(e,i,n,r,p),m=Math.sign(o&8?p[1]-a[3]:p[0]-a[2]),h=t&&t[r/n+i],m&&_&&_!==m&&(fS(g,p,o,a,f),lS(c,f)&&u.push(v),lS(l,f)&&d.push(v)),m<=0?(lS(c,p)&&u.push(h),y-=m):u.length&&(u[u.length-1]=hS),m>=0?(lS(l,p)&&d.push(h),b+=m):d.length&&(d[d.length-1]=hS),uS(g,p),_=m,v=h;return[y?{pos:c,types:t&&u}:null,b?{pos:l,types:t&&d}:null]}function yS(e,t,n,r){let i=Math.floor((e[0]-n[0])/t)*t+n[0],a=Math.floor((e[1]-n[1])/t)*t+n[1];return r[0]=i,r[1]=a,r[2]=i+t,r[3]=a+t,r}function bS(e,t,n){n&8?(e[1]+=t,e[3]+=t):n&4?(e[1]-=t,e[3]-=t):n&2?(e[0]+=t,e[2]+=t):n&1&&(e[0]-=t,e[2]-=t)}function xS(e,t,n,r){let i=1/0,a=-1/0,o=1/0,s=-1/0;for(let r=0;r<n;r+=t){let t=e[r],n=e[r+1];i=t<i?t:i,a=t>a?t:a,o=n<o?n:o,s=n>s?n:s}return r[0][0]=i,r[0][1]=o,r[1][0]=a,r[1][1]=s,r}function SS(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}var CS=85.051129;function wS(e,t){let{size:n=2,startIndex:r=0,endIndex:i=e.length,normalize:a=!0}=t||{},o=e.slice(r,i);OS(o,n,0,i-r);let s=mS(o,{size:n,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(a)for(let e of s)kS(e,n);return s}function TS(e,t=null,n){let{size:r=2,normalize:i=!0,edgeTypes:a=!1}=n||{};t||=[];let o=[],s=[],c=0,l=0;for(let i=0;i<=t.length;i++){let a=t[i]||e.length,u=l,d=ES(e,r,c,a);for(let t=d;t<a;t++)o[l++]=e[t];for(let t=c;t<d;t++)o[l++]=e[t];OS(o,r,u,l),DS(o,r,u,l,n?.maxLatitude),c=a,s[i]=l}s.pop();let u=_S(o,s,{size:r,gridResolution:360,gridOffset:[-180,-180],edgeTypes:a});if(i)for(let e of u)kS(e.positions,r);return u}function ES(e,t,n,r){let i=-1,a=-1;for(let o=n+1;o<r;o+=t){let t=Math.abs(e[o]);t>i&&(i=t,a=o-1)}return a}function DS(e,t,n,r,i=CS){let a=e[n],o=e[r-t];if(Math.abs(a-o)>180){let r=dS(e,0,t,n);r[0]+=Math.round((o-a)/360)*360,lS(e,r),r[1]=Math.sign(r[1])*i,lS(e,r),r[0]=a,lS(e,r)}}function OS(e,t,n,r){let i=e[0],a;for(let o=n;o<r;o+=t){a=e[o];let t=a-i;(t>180||t<-180)&&(a-=Math.round(t/360)*360),e[o]=i=a}}function kS(e,t){let n,r=e.length/t;for(let i=0;i<r&&(n=e[i*t],(n+180)%360==0);i++);let i=-Math.round(n/360)*360;if(i!==0)for(let n=0;n<r;n++)e[n*t]+=i}function AS(e,t,n,r){let i;if(Array.isArray(e[0])){let n=e.length*t;i=Array(n);for(let n=0;n<e.length;n++)for(let r=0;r<t;r++)i[n*t+r]=e[n][r]||0}else i=e;return n?mS(i,{size:t,gridResolution:n}):r?wS(i,{size:t}):i}var jS=1,MS=2,NS=4,PS=class extends ox{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getGeometryFromBuffer(e){return this.normalize?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?AS(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(FS(e)){let t=0;for(let n of e)t+=this.getGeometrySize(n);return t}let t=this.getPathLength(e);return t<2?0:this.isClosed(e)?t<3?0:t+2:t}updateGeometryAttributes(e,t){if(t.geometrySize!==0)if(e&&FS(e))for(let n of e){let e=this.getGeometrySize(n);t.geometrySize=e,this.updateGeometryAttributes(n,t),t.vertexStart+=e}else this._updateSegmentTypes(e,t),this._updatePositions(e,t)}_updateSegmentTypes(e,t){let n=this.attributes.segmentTypes,r=e?this.isClosed(e):!1,{vertexStart:i,geometrySize:a}=t;n.fill(0,i,i+a),r?(n[i]=NS,n[i+a-2]=NS):(n[i]+=jS,n[i+a-2]+=MS),n[i+a-1]=NS}_updatePositions(e,t){let{positions:n}=this.attributes;if(!n||!e)return;let{vertexStart:r,geometrySize:i}=t,a=[,,,];for(let t=r,o=0;o<i;t++,o++)this.getPointOnPath(e,o,a),n[t*3]=a[0],n[t*3+1]=a[1],n[t*3+2]=a[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,t,n=[]){let{positionSize:r}=this;t*r>=e.length&&(t+=1-e.length/r);let i=t*r;return n[0]=e[i],n[1]=e[i+1],n[2]=r===3&&e[i+2]||0,n}isClosed(e){if(!this.normalize)return!!this.opts.loop;let{positionSize:t}=this,n=e.length-t;return e[0]===e[n]&&e[1]===e[n+1]&&(t===2||e[2]===e[n+2])}};function FS(e){return Array.isArray(e[0])}var IS=`layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,LS={name:`path`,vs:IS,fs:IS,uniformTypes:{widthScale:`f32`,widthMinPixels:`f32`,widthMaxPixels:`f32`,jointType:`f32`,capType:`f32`,miterLimit:`f32`,billboard:`f32`,widthUnits:`i32`}},RS=`#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in vec3 instancePickingColors;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
vPathLength = L;
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
dot(offsetFromStartOfPath, dir)
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
void main() {
geometry.pickingColor = instancePickingColors;
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64Low, ZERO_OFFSET);
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64Low, ZERO_OFFSET);
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
);
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
vec3 offset = getLineJoinOffset(prevPosition, currPosition, nextPosition, width.xy);
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,zS=`#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,BS=[0,0,0,255],VS={widthUnits:`meters`,widthScale:{type:`number`,min:0,value:1},widthMinPixels:{type:`number`,min:0,value:0},widthMaxPixels:{type:`number`,min:0,value:2**53-1},jointRounded:!1,capRounded:!1,miterLimit:{type:`number`,min:0,value:4},billboard:!1,_pathType:null,getPath:{type:`accessor`,value:e=>e.path},getColor:{type:`accessor`,value:BS},getWidth:{type:`accessor`,value:1},rounded:{deprecatedFor:[`jointRounded`,`capRounded`]}},HS={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e},US=class extends Kb{getShaders(){return super.getShaders({vs:RS,fs:zS,modules:[om,Qm,LS]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds([`vertexPositions`])}initializeState(){this.getAttributeManager().addInstanced({vertexPositions:{size:3,vertexOffset:1,type:`float64`,fp64:this.use64bitPositions(),transition:HS,accessor:`getPath`,update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}},instanceTypes:{size:1,type:`uint8`,update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:`getWidth`,transition:HS,defaultValue:1},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,accessor:`getColor`,transition:HS,defaultValue:BS},instancePickingColors:{size:4,type:`uint8`,accessor:(e,{index:t,target:n})=>this.encodePickingColor(e&&e.__source?e.__source.index:t,n)}}),this.setState({pathTesselator:new PS({fp64:this.use64bitPositions()})})}updateState(e){super.updateState(e);let{props:t,changeFlags:n}=e,r=this.getAttributeManager();if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPath)){let{pathTesselator:e}=this.state,i=t.data.attributes||{};e.updateGeometry({data:t.data,geometryBuffer:i.getPath,buffers:i,normalize:!t._pathType,loop:t._pathType===`loop`,getGeometry:t.getPath,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:this.context.viewport.resolution,dataChanged:n.dataChanged}),this.setState({numInstances:e.instanceCount,startIndices:e.vertexStarts}),n.dataChanged||r.invalidateAll()}n.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),r.invalidateAll())}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===n)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let n=0;n<t.length;n++)t[n].__source.index===e&&this._disablePickingIndex(n);else super.disablePickingIndex(e)}draw({uniforms:e}){let{jointRounded:t,capRounded:n,billboard:r,miterLimit:i,widthUnits:a,widthScale:o,widthMinPixels:s,widthMaxPixels:c}=this.props,l=this.state.model,u={jointType:Number(t),capType:Number(n),billboard:r,widthUnits:Rp[a],widthScale:o,miterLimit:i,widthMinPixels:s,widthMaxPixels:c};l.shaderInputs.setProps({path:u}),l.draw(this.context.renderPass)}_getModel(){let e=[0,1,2,1,4,2,1,3,4,3,5,4],t=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new a_(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new c_({topology:`triangle-list`,attributes:{indices:new Uint16Array(e),positions:{value:new Float32Array(t),size:2}}}),isInstanced:!0})}calculatePositions(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`positions`)}calculateSegmentTypes(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`segmentTypes`)}};US.defaultProps=VS,US.layerName=`PathLayer`;var WS=t(A(((e,t)=>{t.exports=n,t.exports.default=n;function n(e,t,n){n||=2;var i=t&&t.length,o=i?t[0]*n:e.length,s=r(e,0,o,n,!0),c=[];if(!s||s.next===s.prev)return c;var l,d,f,p,m,h,g;if(i&&(s=u(e,t,s,n)),e.length>80*n){l=f=e[0],d=p=e[1];for(var _=n;_<o;_+=n)m=e[_],h=e[_+1],m<l&&(l=m),h<d&&(d=h),m>f&&(f=m),h>p&&(p=h);g=Math.max(f-l,p-d),g=g===0?0:32767/g}return a(s,c,n,l,d,g,0),c}function r(e,t,n,r,i){var a,o;if(i===ee(e,t,n,r)>0)for(a=t;a<n;a+=r)o=A(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=A(a,e[a],e[a+1],o);return o&&S(o,o.next)&&(j(o),o=o.next),o}function i(e,t){if(!e)return e;t||=e;var n=e,r;do if(r=!1,!n.steiner&&(S(n,n.next)||x(n.prev,n,n.next)===0)){if(j(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function a(e,t,n,r,u,d,f){if(e){!f&&d&&h(e,r,u,d);for(var p=e,m,g;e.prev!==e.next;){if(m=e.prev,g=e.next,d?s(e,r,u,d):o(e)){t.push(m.i/n|0),t.push(e.i/n|0),t.push(g.i/n|0),j(e),e=g.next,p=g.next;continue}if(e=g,e===p){f?f===1?(e=c(i(e),t,n),a(e,t,n,r,u,d,2)):f===2&&l(e,t,n,r,u,d):a(i(e),t,n,r,u,d,1);break}}}}function o(e){var t=e.prev,n=e,r=e.next;if(x(t,n,r)>=0)return!1;for(var i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&y(i,s,a,c,o,l,m.x,m.y)&&x(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function s(e,t,n,r){var i=e.prev,a=e,o=e.next;if(x(i,a,o)>=0)return!1;for(var s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,v=_(p,m,t,n,r),b=_(h,g,t,n,r),S=e.prevZ,C=e.nextZ;S&&S.z>=v&&C&&C.z<=b;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0||(S=S.prevZ,C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;S&&S.z>=v;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;C&&C.z<=b;){if(C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function c(e,t,n){var r=e;do{var a=r.prev,o=r.next.next;!S(a,o)&&C(a,r,r.next,o)&&D(a,o)&&D(o,a)&&(t.push(a.i/n|0),t.push(r.i/n|0),t.push(o.i/n|0),j(r),j(r.next),r=e=o),r=r.next}while(r!==e);return i(r)}function l(e,t,n,r,o,s){var c=e;do{for(var l=c.next.next;l!==c.prev;){if(c.i!==l.i&&b(c,l)){var u=k(c,l);c=i(c,c.next),u=i(u,u.next),a(c,t,n,r,o,s,0),a(u,t,n,r,o,s,0);return}l=l.next}c=c.next}while(c!==e)}function u(e,t,n,i){var a=[],o,s,c,l,u;for(o=0,s=t.length;o<s;o++)c=t[o]*i,l=o<s-1?t[o+1]*i:e.length,u=r(e,c,l,i,!1),u===u.next&&(u.steiner=!0),a.push(v(u));for(a.sort(d),o=0;o<a.length;o++)n=f(a[o],n);return n}function d(e,t){return e.x-t.x}function f(e,t){var n=p(e,t);if(!n)return t;var r=k(n,e);return i(r,r.next),i(n,n.next)}function p(e,t){var n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var s=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=r&&s>a&&(a=s,o=n.x<n.next.x?n:n.next,s===r))return o}n=n.next}while(n!==t);if(!o)return null;var c=o,l=o.x,u=o.y,d=1/0,f;n=o;do r>=n.x&&n.x>=l&&r!==n.x&&y(i<u?r:a,i,l,u,i<u?a:r,i,n.x,n.y)&&(f=Math.abs(i-n.y)/(r-n.x),D(n,e)&&(f<d||f===d&&(n.x>o.x||n.x===o.x&&m(o,n)))&&(o=n,d=f)),n=n.next;while(n!==c);return o}function m(e,t){return x(e.prev,e,t.prev)<0&&x(t.next,e,e.next)<0}function h(e,t,n,r){var i=e;do i.z===0&&(i.z=_(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,g(i)}function g(e){var t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function _(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function v(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function y(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function b(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!E(e,t)&&(D(e,t)&&D(t,e)&&O(e,t)&&(x(e.prev,e,t.prev)||x(e,t.prev,t))||S(e,t)&&x(e.prev,e,e.next)>0&&x(t.prev,t,t.next)>0)}function x(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function S(e,t){return e.x===t.x&&e.y===t.y}function C(e,t,n,r){var i=T(x(e,t,n)),a=T(x(e,t,r)),o=T(x(n,r,e)),s=T(x(n,r,t));return!!(i!==a&&o!==s||i===0&&w(e,n,t)||a===0&&w(e,r,t)||o===0&&w(n,e,r)||s===0&&w(n,t,r))}function w(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function T(e){return e>0?1:e<0?-1:0}function E(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&C(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function D(e,t){return x(e.prev,e,e.next)<0?x(e,t,e.next)>=0&&x(e,e.prev,t)>=0:x(e,t,e.prev)<0||x(e,e.next,t)<0}function O(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function k(e,t){var n=new M(e.i,e.x,e.y),r=new M(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function A(e,t,n,r){var i=new M(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function j(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function M(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}n.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(ee(e,0,a,n));if(i)for(var s=0,c=t.length;s<c;s++){var l=t[s]*n,u=s<c-1?t[s+1]*n:e.length;o-=Math.abs(ee(e,l,u,n))}var d=0;for(s=0;s<r.length;s+=3){var f=r[s]*n,p=r[s+1]*n,m=r[s+2]*n;d+=Math.abs((e[f]-e[m])*(e[p+1]-e[f+1])-(e[f]-e[p])*(e[m+1]-e[f+1]))}return o===0&&d===0?0:Math.abs((d-o)/o)};function ee(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}n.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)n.vertices.push(e[i][a][o]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n}}))(),1),GS=rS.CLOCKWISE,KS=rS.COUNTER_CLOCKWISE,qS={isClosed:!0};function JS(e){if(e=e&&e.positions||e,!Array.isArray(e)&&!ArrayBuffer.isView(e))throw Error(`invalid polygon`)}function YS(e){return`positions`in e?e.positions:e}function XS(e){return`holeIndices`in e?e.holeIndices:null}function ZS(e){return Array.isArray(e[0])}function QS(e){return e.length>=1&&e[0].length>=2&&Number.isFinite(e[0][0])}function $S(e){let t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function eC(e,t,n,r){for(let i=0;i<t;i++)if(e[n+i]!==e[r-t+i])return!1;return!0}function tC(e,t,n,r,i){let a=t,o=n.length;for(let t=0;t<o;t++)for(let i=0;i<r;i++)e[a++]=n[t][i]||0;if(!$S(n))for(let t=0;t<r;t++)e[a++]=n[0][t]||0;return qS.start=t,qS.end=a,qS.size=r,iS(e,i,qS),a}function nC(e,t,n,r,i=0,a,o){a||=n.length;let s=a-i;if(s<=0)return t;let c=t;for(let t=0;t<s;t++)e[c++]=n[i+t];if(!eC(n,r,i,a))for(let t=0;t<r;t++)e[c++]=n[i+t];return qS.start=t,qS.end=c,qS.size=r,iS(e,o,qS),c}function rC(e,t){JS(e);let n=[],r=[];if(`positions`in e){let{positions:i,holeIndices:a}=e;if(a){let e=0;for(let o=0;o<=a.length;o++)e=nC(n,e,i,t,a[o-1],a[o],o===0?GS:KS),r.push(e);return r.pop(),{positions:n,holeIndices:r}}e=i}if(!ZS(e))return nC(n,0,e,t,0,n.length,GS),n;if(!QS(e)){let i=0;for(let[a,o]of e.entries())i=tC(n,i,o,t,a===0?GS:KS),r.push(i);return r.pop(),{positions:n,holeIndices:r}}return tC(n,0,e,t,GS),n}function iC(e,t,n){let r=e.length/3,i=0;for(let a=0;a<r;a++){let o=(a+1)%r;i+=e[a*3+t]*e[o*3+n],i-=e[o*3+t]*e[a*3+n]}return Math.abs(i/2)}function aC(e,t,n,r){let i=e.length/3;for(let a=0;a<i;a++){let i=a*3,o=e[i+0],s=e[i+1],c=e[i+2];e[i+t]=o,e[i+n]=s,e[i+r]=c}}function oC(e,t,n,r){let i=XS(e);i&&=i.map(e=>e/t);let a=YS(e),o=r&&t===3;if(n){let e=a.length;a=a.slice();let r=[];for(let i=0;i<e;i+=t){r[0]=a[i],r[1]=a[i+1],o&&(r[2]=a[i+2]);let e=n(r);a[i]=e[0],a[i+1]=e[1],o&&(a[i+2]=e[2])}}if(o){let e=iC(a,0,1),t=iC(a,0,2),r=iC(a,1,2);if(!e&&!t&&!r)return[];e>t&&e>r||(t>r?(n||(a=a.slice()),aC(a,0,2,1)):(n||(a=a.slice()),aC(a,2,0,1)))}return(0,WS.default)(a,i,t)}var sC=class extends ox{constructor(e){let{fp64:t,IndexType:n=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:n,size:1}}})}get(e){let{attributes:t}=this;return e===`indices`?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);let t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw Error(`missing indices buffer`)}normalizeGeometry(e){if(this.normalize){let t=rC(e,this.positionSize);return this.opts.resolution?_S(YS(t),XS(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?TS(YS(t),XS(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(cC(e)){let t=0;for(let n of e)t+=this.getGeometrySize(n);return t}return YS(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&cC(e))for(let n of e){let e=this.getGeometrySize(n);t.geometrySize=e,this.updateGeometryAttributes(n,t),t.vertexStart+=e,t.indexStart=this.indexStarts[t.geometryIndex+1]}else{let n=e;this._updateIndices(n,t),this._updatePositions(n,t),this._updateVertexValid(n,t)}}_updateIndices(e,{geometryIndex:t,vertexStart:n,indexStart:r}){let{attributes:i,indexStarts:a,typedArrayManager:o}=this,s=i.indices;if(!s||!e)return;let c=r,l=oC(e,this.positionSize,this.opts.preproject,this.opts.full3d);s=o.allocate(s,r+l.length,{copy:!0});for(let e=0;e<l.length;e++)s[c++]=l[e]+n;a[t+1]=r+l.length,i.indices=s}_updatePositions(e,{vertexStart:t,geometrySize:n}){let{attributes:{positions:r},positionSize:i}=this;if(!r||!e)return;let a=YS(e);for(let e=t,o=0;o<n;e++,o++){let t=a[o*i],n=a[o*i+1],s=i>2?a[o*i+2]:0;r[e*3]=t,r[e*3+1]=n,r[e*3+2]=s}}_updateVertexValid(e,{vertexStart:t,geometrySize:n}){let{positionSize:r}=this,i=this.attributes.vertexValid,a=e&&XS(e);if(e&&e.edgeTypes?i.set(e.edgeTypes,t):i.fill(1,t,t+n),a)for(let e=0;e<a.length;e++)i[t+a[e]/r-1]=0;i[t+n-1]=0}};function cC(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}var lC=`layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,uC={name:`solidPolygon`,vs:lC,fs:lC,uniformTypes:{extruded:`f32`,isWireframe:`f32`,elevationScale:`f32`}},dC=`in vec4 fillColors;
in vec4 lineColors;
in vec3 pickingColors;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = pickingColors;
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,fC=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${dC}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,pC=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${dC}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,mC=`#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,hC=[0,0,0,255],gC={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:`CW`,_full3d:!1,elevationScale:{type:`number`,min:0,value:1},getPolygon:{type:`accessor`,value:e=>e.polygon},getElevation:{type:`accessor`,value:1e3},getFillColor:{type:`accessor`,value:hC},getLineColor:{type:`accessor`,value:hC},material:!0},_C={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e},vC=class extends Kb{getShaders(e){return super.getShaders({vs:e===`top`?fC:pC,fs:mC,defines:{RING_WINDING_ORDER_CW:!this.props._normalize&&this.props._windingOrder===`CCW`?0:1},modules:[om,cf,Qm,uC]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds([`vertexPositions`])}initializeState(){let{viewport:e}=this.context,{coordinateSystem:t}=this.props,{_full3d:n}=this.props;e.isGeospatial&&t===`default`&&(t=`lnglat`);let r;t===`lnglat`&&(r=n?e.projectPosition.bind(e):e.projectFlat.bind(e)),this.setState({numInstances:0,polygonTesselator:new sC({preproject:r,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let i=this.getAttributeManager();i.remove([`instancePickingColors`]),i.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:!0},vertexPositions:{size:3,type:`float64`,stepMode:`dynamic`,fp64:this.use64bitPositions(),transition:_C,accessor:`getPolygon`,update:this.calculatePositions,noAlloc:!0,shaderAttributes:{nextVertexPositions:{vertexOffset:1}}},instanceVertexValid:{size:1,type:`uint16`,stepMode:`instance`,update:this.calculateVertexValid,noAlloc:!0},elevations:{size:1,stepMode:`dynamic`,transition:_C,accessor:`getElevation`},fillColors:{size:this.props.colorFormat.length,type:`unorm8`,stepMode:`dynamic`,transition:_C,accessor:`getFillColor`,defaultValue:hC},lineColors:{size:this.props.colorFormat.length,type:`unorm8`,stepMode:`dynamic`,transition:_C,accessor:`getLineColor`,defaultValue:hC},pickingColors:{size:4,type:`uint8`,stepMode:`dynamic`,accessor:(e,{index:t,target:n})=>this.encodePickingColor(e&&e.__source?e.__source.index:t,n)}})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===n)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let n=0;n<t.length;n++)t[n].__source.index===e&&this._disablePickingIndex(n);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:t,filled:n,wireframe:r,elevationScale:i}=this.props,{topModel:a,sideModel:o,wireframeModel:s,polygonTesselator:c}=this.state,l={extruded:!!t,elevationScale:i,isWireframe:!1};s&&r&&(s.setInstanceCount(c.instanceCount-1),s.shaderInputs.setProps({solidPolygon:{...l,isWireframe:!0}}),s.draw(this.context.renderPass)),o&&n&&(o.setInstanceCount(c.instanceCount-1),o.shaderInputs.setProps({solidPolygon:l}),o.draw(this.context.renderPass)),a&&n&&(a.setVertexCount(c.vertexCount),a.shaderInputs.setProps({solidPolygon:l}),a.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager();(r.extensionsChanged||t.filled!==n.filled||t.extruded!==n.extruded)&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),i.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:n}){if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPolygon)){let{polygonTesselator:t}=this.state,r=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:r.getPolygon,buffers:r,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:n.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),n.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let{id:e,filled:t,extruded:n}=this.props,r,i,a;if(t){let t=this.getShaders(`top`);t.defines.NON_INSTANCED_MODEL=1;let n=this.getAttributeManager().getBufferLayouts({isInstanced:!1});r=new a_(this.context.device,{...t,id:`${e}-top`,topology:`triangle-list`,bufferLayout:n,isIndexed:!0,userData:{excludeAttributes:{instanceVertexValid:!0}}})}if(n){let t=this.getAttributeManager().getBufferLayouts({isInstanced:!0});i=new a_(this.context.device,{...this.getShaders(`side`),id:`${e}-side`,bufferLayout:t,geometry:new c_({topology:`triangle-strip`,attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),a=new a_(this.context.device,{...this.getShaders(`side`),id:`${e}-wireframe`,bufferLayout:t,geometry:new c_({topology:`line-strip`,attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[i,a,r].filter(Boolean),topModel:r,sideModel:i,wireframeModel:a}}calculateIndices(e){let{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get(`indices`)}calculatePositions(e){let{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`positions`)}calculateVertexValid(e){e.value=this.state.polygonTesselator.get(`vertexValid`)}};vC.defaultProps=gC,vC.layerName=`SolidPolygonLayer`;function yC({data:e,getIndex:t,dataRange:n,replace:r}){let{startRow:i=0,endRow:a=1/0}=n,o=e.length,s=o,c=o;for(let n=0;n<o;n++){let r=t(e[n]);if(s>n&&r>=i&&(s=n),r>=a){c=n;break}}let l=s,u=c-s===r.length?void 0:e.slice(c);for(let t=0;t<r.length;t++)e[l++]=r[t];if(u){for(let t=0;t<u.length;t++)e[l++]=u[t];e.length=l}return{startRow:s,endRow:s+r.length}}var bC=[0,0,0,255],xC={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:`CW`,lineWidthUnits:`meters`,lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:2**53-1,lineJointRounded:!1,lineMiterLimit:4,getPolygon:{type:`accessor`,value:e=>e.polygon},getFillColor:{type:`accessor`,value:[0,0,0,255]},getLineColor:{type:`accessor`,value:bC},getLineWidth:{type:`accessor`,value:1},getElevation:{type:`accessor`,value:1e3},material:!0},SC=class extends Qb{initializeState(){this.state={paths:[],pathsDiff:null},this.props.getLineDashArray&&R.removed(`getLineDashArray`,`PathStyleExtension`)()}updateState({changeFlags:e}){let t=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getPolygon);if(t&&Array.isArray(e.dataChanged)){let t=this.state.paths.slice(),n=e.dataChanged.map(e=>yC({data:t,getIndex:e=>e.__source.index,dataRange:e,replace:this._getPaths(e)}));this.setState({paths:t,pathsDiff:n})}else t&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(e={}){let{data:t,getPolygon:n,positionFormat:r,_normalize:i}=this.props,a=[],o=r===`XY`?2:3,{startRow:s,endRow:c}=e,{iterable:l,objectInfo:u}=ty(t,s,c);for(let e of l){u.index++;let t=n(e,u);i&&(t=rC(t,o));let{holeIndices:r}=t,s=t.positions||t;if(r)for(let t=0;t<=r.length;t++){let n=s.slice(r[t-1]||0,r[t]||s.length);a.push(this.getSubLayerRow({path:n},e,u.index))}else a.push(this.getSubLayerRow({path:s},e,u.index))}return a}renderLayers(){let{data:e,_dataDiff:t,stroked:n,filled:r,extruded:i,wireframe:a,_normalize:o,_windingOrder:s,elevationScale:c,transitions:l,positionFormat:u}=this.props,{lineWidthUnits:d,lineWidthScale:f,lineWidthMinPixels:p,lineWidthMaxPixels:m,lineJointRounded:h,lineMiterLimit:g,lineDashJustified:_}=this.props,{getFillColor:v,getLineColor:y,getLineWidth:b,getLineDashArray:x,getElevation:S,getPolygon:C,updateTriggers:w,material:T}=this.props,{paths:E,pathsDiff:D}=this.state,O=this.getSubLayerClass(`fill`,vC),k=this.getSubLayerClass(`stroke`,US),A=this.shouldRenderSubLayer(`fill`,E)&&new O({_dataDiff:t,extruded:i,elevationScale:c,filled:r,wireframe:a,_normalize:o,_windingOrder:s,getElevation:S,getFillColor:v,getLineColor:i&&a?y:bC,material:T,transitions:l},this.getSubLayerProps({id:`fill`,updateTriggers:w&&{getPolygon:w.getPolygon,getElevation:w.getElevation,getFillColor:w.getFillColor,lineColors:i&&a,getLineColor:w.getLineColor}}),{data:e,positionFormat:u,getPolygon:C}),j=!i&&n&&this.shouldRenderSubLayer(`stroke`,E)&&new k({_dataDiff:D&&(()=>D),widthUnits:d,widthScale:f,widthMinPixels:p,widthMaxPixels:m,jointRounded:h,miterLimit:g,dashJustified:_,_pathType:`loop`,transitions:l&&{getWidth:l.getLineWidth,getColor:l.getLineColor,getPath:l.getPolygon},getColor:this.getSubLayerAccessor(y),getWidth:this.getSubLayerAccessor(b),getDashArray:this.getSubLayerAccessor(x)},this.getSubLayerProps({id:`stroke`,updateTriggers:w&&{getWidth:w.getLineWidth,getColor:w.getLineColor,getDashArray:w.getLineDashArray}}),{data:E,positionFormat:u,getPath:e=>e.path});return[!i&&A,j,i&&A]}};SC.layerName=`PolygonLayer`,SC.defaultProps=xC;function CC(e,t){if(!e)return null;let n=`startIndices`in e?e.startIndices[t]:t,r=e.featureIds.value[n];return n===-1?null:wC(e,r,n)}function wC(e,t,n){let r={properties:{...e.properties[t]}};for(let t in e.numericProps)r.properties[t]=e.numericProps[t].value[n];return r}function TC(e,t){let n={points:null,lines:null,polygons:null};for(let r in n){let i=e[r].globalFeatureIds.value;n[r]=new Uint8ClampedArray(i.length*4);let a=[];for(let e=0;e<i.length;e++)t(i[e],a),n[r][e*4+0]=a[0],n[r][e*4+1]=a[1],n[r][e*4+2]=a[2],n[r][e*4+3]=255}return n}var EC=`layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,DC={name:`sdf`,vs:EC,fs:EC,uniformTypes:{gamma:`f32`,enabled:`f32`,buffer:`f32`,outlineBuffer:`f32`,outlineColor:`vec4<f32>`}},OC={none:0,start:1,center:2,end:3},kC={name:`text`,vs:`\
layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${OC.start}
#define ALIGN_MODE_CENTER ${OC.center}
#define ALIGN_MODE_END ${OC.end}
`,getUniforms:({contentCutoffPixels:e=[0,0],contentAlignHorizontal:t=`none`,contentAlignVertical:n=`none`,fontSize:r,viewport:i})=>({cutoffPixels:e,align:[OC[t],OC[n]],fontSize:r,flipY:i?.flipY??!1}),uniformTypes:{cutoffPixels:`vec2<f32>`,align:`vec2<i32>`,fontSize:`f32`,flipY:`f32`}},AC=`#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,jC=`#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,MC=192/256,NC={getIconOffsets:{type:`accessor`,value:e=>e.offsets},getContentBox:{type:`accessor`,value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:`color`,value:[0,0,0,255]},contentCutoffPixels:{type:`array`,value:[0,0]},contentAlignHorizontal:`none`,contentAlignVertical:`none`},PC=class extends Vx{getShaders(){let e=super.getShaders();return{...e,modules:[...e.modules,kC,DC],vs:AC,fs:jC}}initializeState(){super.initializeState();let e=this.getAttributeManager(),t=e.attributes.instanceIconDefs;t.settings.update=this.calculateInstanceIconDefs,e.addInstanced({instancePickingColors:{type:`uint8`,size:4,accessor:(e,{index:t,target:n})=>this.encodePickingColor(t,n)},instanceClipRect:{size:4,accessor:`getContentBox`,defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,{outlineColor:i}=t;if(r.updateTriggersChanged&&(r.updateTriggersChanged.getIcon||r.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate(`instanceIconDefs`),i!==n.outlineColor){let e=[i[0]/255,i[1]/255,i[2]/255,(i[3]??255)/255];this.setState({outlineColor:e})}!t.sdf&&t.outlineWidth&&R.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){let{sdf:t,smoothing:n,fontSize:r,outlineWidth:i,contentCutoffPixels:a,contentAlignHorizontal:o,contentAlignVertical:s}=this.props,{outlineColor:c}=this.state,l=i?Math.max(n,MC*(1-i)):-1,u=this.state.model,d={buffer:MC,outlineBuffer:l,gamma:n,enabled:!!t,outlineColor:c},f={contentCutoffPixels:a,contentAlignHorizontal:o,contentAlignVertical:s,fontSize:r,viewport:this.context.viewport};if(u.shaderInputs.setProps({sdf:d,text:f}),super.draw(e),t&&i){let{iconManager:e}=this.state;e.getTexture()&&(u.shaderInputs.setProps({sdf:{...d,outlineBuffer:MC}}),u.draw(this.context.renderPass))}}calculateInstanceIconDefs(e,{startRow:t,endRow:n}){let{data:r,getIcon:i,getIconOffsets:a}=this.props,o=e.getVertexOffset(t),s=e.value,{iterable:c,objectInfo:l}=ty(r,t,n);for(let t of c){l.index++;let n=i(t,l),r=a(t,l);if(n){let t=0;for(let i of Array.from(n)){let n=super.getInstanceIconDef(i);n[0]=r[t*2],n[1]+=r[t*2+1],n[6]=1,s.set(n,o),o+=e.size,t++}}}}};PC.defaultProps=NC,PC.layerName=`MultiIconLayer`;var FC=0x56bc75e2d63100000,IC=class{constructor({fontSize:e=24,buffer:t=3,radius:n=8,cutoff:r=.25,fontFamily:i=`sans-serif`,fontWeight:a=`normal`,fontStyle:o=`normal`,lang:s=null}={}){this.buffer=t,this.cutoff=r,this.radius=n,this.lang=s;let c=this.size=e+t*4,l=this.ctx=this._createCanvas(c).getContext(`2d`,{willReadFrequently:!0});l.font=`${o} ${a} ${e}px ${i}`,l.textBaseline=`alphabetic`,l.textAlign=`left`,l.fillStyle=`black`,this.gridOuter=new Float64Array(c*c),this.gridInner=new Float64Array(c*c),this.f=new Float64Array(c),this.z=new Float64Array(c+1),this.v=new Uint16Array(c)}_createCanvas(e){let t=document.createElement(`canvas`);return t.width=t.height=e,t}draw(e){let{width:t,actualBoundingBoxAscent:n,actualBoundingBoxDescent:r,actualBoundingBoxLeft:i,actualBoundingBoxRight:a}=this.ctx.measureText(e),o=Math.ceil(n),s=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(a-i))),c=Math.min(this.size-this.buffer,o+Math.ceil(r)),l=s+2*this.buffer,u=c+2*this.buffer,d=Math.max(l*u,0),f=new Uint8ClampedArray(d),p={data:f,width:l,height:u,glyphWidth:s,glyphHeight:c,glyphTop:o,glyphLeft:0,glyphAdvance:t};if(s===0||c===0)return p;let{ctx:m,buffer:h,gridInner:g,gridOuter:_}=this;this.lang&&(m.lang=this.lang),m.clearRect(h,h,s,c),m.fillText(e,h,h+o);let v=m.getImageData(h,h,s,c);_.fill(FC,0,d),g.fill(0,0,d);for(let e=0;e<c;e++)for(let t=0;t<s;t++){let n=v.data[4*(e*s+t)+3]/255;if(n===0)continue;let r=(e+h)*l+t+h;if(n===1)_[r]=0,g[r]=FC;else{let e=.5-n;_[r]=e>0?e*e:0,g[r]=e<0?e*e:0}}LC(_,0,0,l,u,l,this.f,this.v,this.z),LC(g,h,h,s,c,l,this.f,this.v,this.z);for(let e=0;e<d;e++){let t=Math.sqrt(_[e])-Math.sqrt(g[e]);f[e]=Math.round(255-255*(t/this.radius+this.cutoff))}return p}};function LC(e,t,n,r,i,a,o,s,c){for(let l=t;l<t+r;l++)RC(e,n*a+l,a,i,o,s,c);for(let l=n;l<n+i;l++)RC(e,l*a+t,1,r,o,s,c)}function RC(e,t,n,r,i,a,o){a[0]=0,o[0]=-FC,o[1]=FC,i[0]=e[t];for(let s=1,c=0,l=0;s<r;s++){i[s]=e[t+s*n];let r=s*s;do{let e=a[c];l=(i[s]-i[e]+r-e*e)/(s-e)/2}while(l<=o[c]&&--c>-1);c++,a[c]=s,o[c]=l,o[c+1]=FC}for(let s=0,c=0;s<r;s++){for(;o[c+1]<s;)c++;let r=a[c],l=s-r;e[t+s*n]=i[r]+l*l}}var zC=32,BC=[];function VC(e){return 2**Math.ceil(Math.log2(e))}function HC({characterSet:e,measureText:t,buffer:n,maxCanvasWidth:r,mapping:i={},xOffset:a=0,yOffsetMin:o=0,yOffsetMax:s=0}){let c=a,l=o,u=s;for(let a of e)if(!i[a]){let{advance:e,width:o,ascent:s,descent:d}=t(a),f=s+d;c+o+n*2>r&&(c=0,l=u),i[a]={x:c+n,y:l+n,width:o,height:f,advance:e,anchorX:o/2,anchorY:s},c+=o+n*2,u=Math.max(u,l+f+n*2)}return{mapping:i,xOffset:c,yOffsetMin:l,yOffsetMax:u,canvasHeight:VC(u)}}function UC(e,t,n,r){let i=0;for(let a=t;a<n;a++){let t=e[a];i+=r[t]?.advance||0}return i}function WC(e,t,n,r,i,a){let o=t,s=0;for(let c=t;c<n;c++){let t=UC(e,c,c+1,i);s+t>r&&(o<c&&a.push(c),o=c,s=0),s+=t}return s}function GC(e,t,n,r,i,a){let o=t,s=t,c=t,l=0;for(let u=t;u<n;u++)if((e[u]===` `||e[u+1]===` `||u+1===n)&&(c=u+1),c>s){let t=UC(e,s,c,i);l+t>r&&(o<s&&(a.push(s),o=s,l=0),t>r&&(t=WC(e,s,c,r,i,a),o=a[a.length-1])),s=c,l+=t}return l}function KC(e,t,n,r,i=0,a){a===void 0&&(a=e.length);let o=[];return t===`break-all`?WC(e,i,a,n,r,o):GC(e,i,a,n,r,o),o}function qC(e,t,n,r,i,a){let o=0,s=0;for(let i=t;i<n;i++){let t=r[e[i]];t&&(s=Math.max(s,t.height))}for(let a=t;a<n;a++){let t=e[a],n=r[t];n?(i[a]=o+n.anchorX,o+=n.advance):(R.warn(`Missing character: ${t} (${t.codePointAt(0)})`)(),i[a]=o,o+=zC)}a[0]=o,a[1]=s}function JC(e,t,n,r,i,a){let o=Array.from(e),s=o.length,c=Array(s),l=Array(s),u=Array(s),d=(r===`break-word`||r===`break-all`)&&isFinite(i)&&i>0,f=[0,0],p=[0,0],m=0,h=t+n/2,g=0,_=0;for(let e=0;e<=s;e++){let t=o[e];if((t===`
`||e===s)&&(_=e),_>g){let e=d?KC(o,r,i,a,g,_):BC;for(let t=0;t<=e.length;t++){let r=t===0?g:e[t-1],i=t<e.length?e[t]:_;qC(o,r,i,a,c,p);for(let e=r;e<i;e++)l[e]=h,u[e]=p[0];m++,h+=n,f[0]=Math.max(f[0],p[0])}g=_}t===`
`&&(c[g]=0,l[g]=0,u[g]=0,g++)}return f[1]=m*n,{x:c,y:l,rowWidth:u,size:f}}function YC({value:e,length:t,stride:n,offset:r,startIndices:i,characterSet:a}){let o=e.BYTES_PER_ELEMENT,s=n?n/o:1,c=r?r/o:0,l=i[t]||Math.ceil((e.length-c)/s),u=a&&new Set,d=Array(t),f=e;if(s>1||c>0){let t=e.constructor;f=new t(l);for(let t=0;t<l;t++)f[t]=e[t*s+c]}for(let e=0;e<t;e++){let t=i[e],n=i[e+1]||l,r=f.subarray(t,n);d[e]=String.fromCodePoint.apply(null,r),u&&r.forEach(u.add,u)}if(u)for(let e of u)a.add(String.fromCodePoint(e));return{texts:d,characterCount:l}}var XC=class{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){let t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?(this.delete(e),this._cache[e]=t,this._appendOrder(e)):(Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e))}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){let t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}};function ZC(){let e=[];for(let t=32;t<128;t++)e.push(String.fromCharCode(t));return e}var QC={fontFamily:`Monaco, monospace`,fontWeight:`normal`,characterSet:ZC(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},$C=1024,ew=.9,tw=.3,nw=3,rw=new XC(nw);function iw(e,t){let n;n=typeof t==`string`?new Set(Array.from(t)):new Set(t);let r=rw.get(e);if(!r)return n;for(let e in r.mapping)n.has(e)&&n.delete(e);return n}function aw(e,t){for(let n=0;n<e.length;n++)t.data[4*n+3]=e[n]}function ow(e,t,n,r){e.font=`${r} ${n}px ${t}`,e.fillStyle=`#000`,e.textBaseline=`alphabetic`,e.textAlign=`left`}function sw(e,t,n){if(n===void 0){let n=e.measureText(`A`);return n.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(n.fontBoundingBoxAscent),descent:Math.ceil(n.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:t*ew,descent:t*tw}}let r=e.measureText(n);return r.actualBoundingBoxAscent?{advance:r.width,width:Math.ceil(r.actualBoundingBoxRight-r.actualBoundingBoxLeft),ascent:Math.ceil(r.actualBoundingBoxAscent),descent:Math.ceil(r.actualBoundingBoxDescent)}:{advance:r.width,width:r.width,ascent:t*ew,descent:t*tw}}function cw(e){R.assert(Number.isFinite(e)&&e>=nw,`Invalid cache limit`),rw=new XC(e)}var lw=class{constructor(){this.props={...QC}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();let t=iw(this._key,this.props.characterSet),n=rw.get(this._key);if(n&&t.size===0){this._atlas!==n&&(this._atlas=n);return}let r=this._generateFontAtlas(t,n);this._atlas=r,rw.set(this._key,r)}_generateFontAtlas(e,t){let{fontFamily:n,fontWeight:r,fontSize:i,buffer:a,sdf:o,radius:s,cutoff:c}=this.props,l=t&&t.data;l||(l=document.createElement(`canvas`),l.width=$C);let u=l.getContext(`2d`,{willReadFrequently:!0});ow(u,n,i,r);let d=e=>sw(u,i,e),f;this._getFontRenderer?f=this._getFontRenderer(this.props):o&&(f={measure:d,draw:uw(this.props)});let{mapping:p,canvasHeight:m,xOffset:h,yOffsetMin:g,yOffsetMax:_}=HC({measureText:e=>f?f.measure(e):d(e),buffer:a,characterSet:e,maxCanvasWidth:$C,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(l.height!==m){let e=l.height>0?u.getImageData(0,0,l.width,l.height):null;l.height=m,e&&u.putImageData(e,0,0)}if(ow(u,n,i,r),f)for(let t of e){let e=p[t],{data:n,left:r=0,top:i=0}=f.draw(t),a=e.x-r,o=e.y-i,s=Math.max(0,Math.round(a)),c=Math.max(0,Math.round(o)),d=Math.min(n.width,l.width-s),m=Math.min(n.height,l.height-c);u.putImageData(n,s,c,0,0,d,m),e.x+=s-a,e.y+=c-o}else for(let t of e){let e=p[t];u.fillText(t,e.x,e.y+e.anchorY)}let v=f?f.measure():d();return{baselineOffset:(v.ascent-v.descent)/2,xOffset:h,yOffsetMin:g,yOffsetMax:_,mapping:p,data:l,width:l.width,height:l.height}}_getKey(){let{fontFamily:e,fontWeight:t,fontSize:n,buffer:r,sdf:i,radius:a,cutoff:o}=this.props;return i?`${e} ${t} ${n} ${r} ${a} ${o}`:`${e} ${t} ${n} ${r}`}};function uw({fontSize:e,buffer:t,radius:n,cutoff:r,fontFamily:i,fontWeight:a}){let o=new IC({fontSize:e,buffer:t,radius:n,cutoff:r,fontFamily:i,fontWeight:`${a}`});return e=>{let{data:n,width:r,height:i}=o.draw(e),a=new ImageData(r,i);return aw(n,a),{data:a,left:t,top:t}}}var dw=`layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,fw={name:`textBackground`,vs:dw,fs:dw,uniformTypes:{billboard:`f32`,sizeScale:`f32`,sizeMinPixels:`f32`,sizeMaxPixels:`f32`,borderRadius:`vec4<f32>`,padding:`vec4<f32>`,sizeUnits:`i32`,stroked:`f32`}},pw=`#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,mw=`#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,hw={billboard:!0,sizeScale:1,sizeUnits:`pixels`,sizeMinPixels:0,sizeMaxPixels:2**53-1,fontSize:1,borderRadius:{type:`object`,value:0},padding:{type:`array`,value:[0,0,0,0]},getPosition:{type:`accessor`,value:e=>e.position},getSize:{type:`accessor`,value:1},getAngle:{type:`accessor`,value:0},getPixelOffset:{type:`accessor`,value:[0,0]},getBoundingRect:{type:`accessor`,value:[0,0,0,0]},getClipRect:{type:`accessor`,value:[0,0,-1,-1]},getFillColor:{type:`accessor`,value:[0,0,0,255]},getLineColor:{type:`accessor`,value:[0,0,0,255]},getLineWidth:{type:`accessor`,value:1}},gw=class extends Kb{getShaders(){return super.getShaders({vs:pw,fs:mw,modules:[om,Qm,fw,kC]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceSizes:{size:1,transition:!0,accessor:`getSize`,defaultValue:1},instanceAngles:{size:1,transition:!0,accessor:`getAngle`},instanceRects:{size:4,accessor:`getBoundingRect`},instanceClipRect:{size:4,accessor:`getClipRect`,defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,accessor:`getPixelOffset`},instanceFillColors:{size:4,transition:!0,type:`unorm8`,accessor:`getFillColor`,defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:`unorm8`,accessor:`getLineColor`,defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:`getLineWidth`,defaultValue:1}})}updateState(e){super.updateState(e);let{changeFlags:t}=e;t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{billboard:t,sizeScale:n,sizeUnits:r,sizeMinPixels:i,sizeMaxPixels:a,getLineWidth:o,fontSize:s}=this.props,{padding:c,borderRadius:l}=this.props;c.length<4&&(c=[c[0],c[1],c[0],c[1]]),Array.isArray(l)||(l=[l,l,l,l]);let u=this.state.model,d={billboard:t,stroked:!!o,borderRadius:l,padding:c,sizeUnits:Rp[r],sizeScale:n,sizeMinPixels:i,sizeMaxPixels:a},f={fontSize:s,viewport:this.context.viewport};u.shaderInputs.setProps({textBackground:d,text:f}),u.draw(this.context.renderPass)}_getModel(){let e=[0,0,1,0,0,1,1,1];return new a_(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new c_({topology:`triangle-strip`,vertexCount:4,attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}};gw.defaultProps=hw,gw.layerName=`TextBackgroundLayer`;var _w={start:1,middle:0,end:-1},vw={top:1,center:0,bottom:-1},yw=[0,0,0,255],bw={billboard:!0,sizeScale:1,sizeUnits:`pixels`,sizeMinPixels:0,sizeMaxPixels:2**53-1,background:!1,getBackgroundColor:{type:`accessor`,value:[255,255,255,255]},getBorderColor:{type:`accessor`,value:yw},getBorderWidth:{type:`accessor`,value:0},backgroundBorderRadius:{type:`object`,value:0},backgroundPadding:{type:`array`,value:[0,0,0,0]},characterSet:{type:`object`,value:QC.characterSet},fontFamily:QC.fontFamily,fontWeight:QC.fontWeight,lineHeight:1,outlineWidth:{type:`number`,value:0,min:0},outlineColor:{type:`color`,value:yw},fontSettings:{type:`object`,value:{},compare:1},wordBreak:`break-word`,maxWidth:{type:`number`,value:-1},contentCutoffPixels:{type:`array`,value:[0,0]},contentAlignHorizontal:`none`,contentAlignVertical:`none`,getText:{type:`accessor`,value:e=>e.text},getPosition:{type:`accessor`,value:e=>e.position},getColor:{type:`accessor`,value:yw},getSize:{type:`accessor`,value:32},getAngle:{type:`accessor`,value:0},getTextAnchor:{type:`accessor`,value:`middle`},getAlignmentBaseline:{type:`accessor`,value:`center`},getPixelOffset:{type:`accessor`,value:[0,0]},getContentBox:{type:`accessor`,value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:[`background`,`getBackgroundColor`]}},xw=class extends Qb{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{let{size:[n,r]}=this.transformParagraph(e,t),{getTextAnchor:i,getAlignmentBaseline:a}=this.props,o=_w[typeof i==`function`?i(e,t):i],s=vw[typeof a==`function`?a(e,t):a];return[(o-1)*n/2,(s-1)*r/2,n,r]},this.getIconOffsets=(e,t)=>{let{getTextAnchor:n,getAlignmentBaseline:r}=this.props,{x:i,y:a,rowWidth:o,size:[,s]}=this.transformParagraph(e,t),c=_w[typeof n==`function`?n(e,t):n],l=vw[typeof r==`function`?r(e,t):r],u=i.length,d=Array(u*2),f=0;for(let e=0;e<u;e++)d[f++]=(c-1)*o[e]/2+i[e],d[f++]=(l-1)*s/2+a[e];return d}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new lw},this.props.maxWidth>0&&R.once(1,`v8.9 breaking change: TextLayer maxWidth is now relative to text size`)()}updateState(e){let{props:t,oldProps:n,changeFlags:r}=e;(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==n.lineHeight||t.wordBreak!==n.wordBreak||t.maxWidth!==n.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){let{fontSettings:e,fontFamily:t,fontWeight:n,_getFontRenderer:r}=this.props,{fontAtlasManager:i,characterSet:a}=this.state,o={...e,characterSet:a,fontFamily:t,fontWeight:n,_getFontRenderer:r};if(!i.mapping)return i.setProps(o),!0;for(let e in o)if(o[e]!==i.props[e])return i.setProps(o),!0;return!1}_updateText(){let{data:e,characterSet:t}=this.props,n=e.attributes?.getText,{getText:r}=this.props,i=e.startIndices,a,o=t===`auto`&&new Set;if(n&&i){let{texts:t,characterCount:s}=YC({...ArrayBuffer.isView(n)?{value:n}:n,length:e.length,startIndices:i,characterSet:o});a=s,r=(e,{index:n})=>t[n]}else{let{iterable:t,objectInfo:n}=ty(e);i=[0],a=0;for(let e of t){n.index++;let t=Array.from(r(e,n)||``);o&&t.forEach(o.add,o),a+=t.length,i.push(a)}}this.setState({getText:r,startIndices:i,numInstances:a,characterSet:o||t})}transformParagraph(e,t){let{fontAtlasManager:n}=this.state,r=n.mapping,{baselineOffset:i}=n.atlas,{fontSize:a}=n.props,o=this.state.getText,{wordBreak:s,lineHeight:c,maxWidth:l}=this.props;return JC(o(e,t)||``,i,c*a,s,l*a,r)}renderLayers(){let{startIndices:e,numInstances:t,getText:n,fontAtlasManager:{atlas:r,mapping:i},styleVersion:a}=this.state,{data:o,_dataDiff:s,getPosition:c,getColor:l,getSize:u,getAngle:d,getPixelOffset:f,getBackgroundColor:p,getBorderColor:m,getBorderWidth:h,getContentBox:g,backgroundBorderRadius:_,backgroundPadding:v,background:y,billboard:b,fontSettings:x,outlineWidth:S,outlineColor:C,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,contentCutoffPixels:O,contentAlignHorizontal:k,contentAlignVertical:A,transitions:j,updateTriggers:M}=this.props,ee=this.getSubLayerClass(`characters`,PC),te=this.getSubLayerClass(`background`,gw),{fontSize:ne}=this.state.fontAtlasManager.props;return[y&&new te({getFillColor:p,getLineColor:m,getLineWidth:h,borderRadius:_,padding:v,getPosition:c,getSize:u,getAngle:d,getPixelOffset:f,getClipRect:g,billboard:b,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,fontSize:ne,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getSize:j.getSize,getFillColor:j.getBackgroundColor,getLineColor:j.getBorderColor,getLineWidth:j.getBorderWidth,getPixelOffset:j.getPixelOffset}},this.getSubLayerProps({id:`background`,updateTriggers:{getPosition:M.getPosition,getAngle:M.getAngle,getSize:M.getSize,getFillColor:M.getBackgroundColor,getLineColor:M.getBorderColor,getLineWidth:M.getBorderWidth,getPixelOffset:M.getPixelOffset,getBoundingRect:{getText:M.getText,getTextAnchor:M.getTextAnchor,getAlignmentBaseline:M.getAlignmentBaseline,styleVersion:a}}}),{data:o.attributes&&o.attributes.background?{length:o.length,attributes:o.attributes.background}:o,_dataDiff:s,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new ee({sdf:x.sdf,smoothing:Number.isFinite(x.smoothing)?x.smoothing:QC.smoothing,outlineWidth:S/(x.radius||QC.radius),outlineColor:C,iconAtlas:r,iconMapping:i,getPosition:c,getColor:l,getSize:u,getAngle:d,getPixelOffset:f,getContentBox:g,billboard:b,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,fontSize:ne,contentCutoffPixels:O,contentAlignHorizontal:k,contentAlignVertical:A,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getColor:j.getColor,getSize:j.getSize,getPixelOffset:j.getPixelOffset,getContentBox:j.getContentBox}},this.getSubLayerProps({id:`characters`,updateTriggers:{all:M.getText,getPosition:M.getPosition,getAngle:M.getAngle,getColor:M.getColor,getSize:M.getSize,getPixelOffset:M.getPixelOffset,getContentBox:M.getContentBox,getIconOffsets:{getTextAnchor:M.getTextAnchor,getAlignmentBaseline:M.getAlignmentBaseline,styleVersion:a}}}),{data:o,_dataDiff:s,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:n})]}static set fontAtlasCacheLimit(e){cw(e)}};xw.defaultProps=bw,xw.layerName=`TextLayer`;var Sw={circle:{type:nS,props:{filled:`filled`,stroked:`stroked`,lineWidthMaxPixels:`lineWidthMaxPixels`,lineWidthMinPixels:`lineWidthMinPixels`,lineWidthScale:`lineWidthScale`,lineWidthUnits:`lineWidthUnits`,pointRadiusMaxPixels:`radiusMaxPixels`,pointRadiusMinPixels:`radiusMinPixels`,pointRadiusScale:`radiusScale`,pointRadiusUnits:`radiusUnits`,pointAntialiasing:`antialiasing`,pointBillboard:`billboard`,getFillColor:`getFillColor`,getLineColor:`getLineColor`,getLineWidth:`getLineWidth`,getPointRadius:`getRadius`}},icon:{type:Vx,props:{iconAtlas:`iconAtlas`,iconMapping:`iconMapping`,iconSizeMaxPixels:`sizeMaxPixels`,iconSizeMinPixels:`sizeMinPixels`,iconSizeScale:`sizeScale`,iconSizeUnits:`sizeUnits`,iconAlphaCutoff:`alphaCutoff`,iconBillboard:`billboard`,getIcon:`getIcon`,getIconAngle:`getAngle`,getIconColor:`getColor`,getIconPixelOffset:`getPixelOffset`,getIconSize:`getSize`}},text:{type:xw,props:{textSizeMaxPixels:`sizeMaxPixels`,textSizeMinPixels:`sizeMinPixels`,textSizeScale:`sizeScale`,textSizeUnits:`sizeUnits`,textBackground:`background`,textBackgroundPadding:`backgroundPadding`,textFontFamily:`fontFamily`,textFontWeight:`fontWeight`,textLineHeight:`lineHeight`,textMaxWidth:`maxWidth`,textOutlineColor:`outlineColor`,textOutlineWidth:`outlineWidth`,textWordBreak:`wordBreak`,textCharacterSet:`characterSet`,textBillboard:`billboard`,textFontSettings:`fontSettings`,getText:`getText`,getTextAngle:`getAngle`,getTextColor:`getColor`,getTextPixelOffset:`getPixelOffset`,getTextSize:`getSize`,getTextAnchor:`getTextAnchor`,getTextAlignmentBaseline:`getAlignmentBaseline`,getTextBackgroundColor:`getBackgroundColor`,getTextBorderColor:`getBorderColor`,getTextBorderWidth:`getBorderWidth`}}},Cw={type:US,props:{lineWidthUnits:`widthUnits`,lineWidthScale:`widthScale`,lineWidthMinPixels:`widthMinPixels`,lineWidthMaxPixels:`widthMaxPixels`,lineJointRounded:`jointRounded`,lineCapRounded:`capRounded`,lineMiterLimit:`miterLimit`,lineBillboard:`billboard`,getLineColor:`getColor`,getLineWidth:`getWidth`}},ww={type:vC,props:{extruded:`extruded`,filled:`filled`,wireframe:`wireframe`,elevationScale:`elevationScale`,material:`material`,_full3d:`_full3d`,getElevation:`getElevation`,getFillColor:`getFillColor`,getLineColor:`getLineColor`}};function Tw({type:e,props:t}){let n={};for(let r in t)n[r]=e.defaultProps[t[r]];return n}function Ew(e,t){let{transitions:n,updateTriggers:r}=e.props,i={updateTriggers:{},transitions:n&&{getPosition:n.geometry}};for(let a in t){let o=t[a],s=e.props[a];a.startsWith(`get`)&&(s=e.getSubLayerAccessor(s),i.updateTriggers[o]=r[a],n&&(i.transitions[o]=n[a])),i[o]=s}return i}function Dw(e){if(Array.isArray(e))return e;switch(R.assert(e.type,`GeoJSON does not have type`),e.type){case`Feature`:return[e];case`FeatureCollection`:return R.assert(Array.isArray(e.features),`GeoJSON does not have features array`),e.features;default:return[{geometry:e}]}}function Ow(e,t,n={}){let r={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},{startRow:i=0,endRow:a=e.length}=n;for(let n=i;n<a;n++){let i=e[n],{geometry:a}=i;if(a)if(a.type===`GeometryCollection`){R.assert(Array.isArray(a.geometries),`GeoJSON does not have geometries array`);let{geometries:e}=a;for(let a=0;a<e.length;a++){let o=e[a];kw(o,r,t,i,n)}}else kw(a,r,t,i,n)}return r}function kw(e,t,n,r,i){let{type:a,coordinates:o}=e,{pointFeatures:s,lineFeatures:c,polygonFeatures:l,polygonOutlineFeatures:u}=t;if(!jw(a,o)){R.warn(`${a} coordinates are malformed`)();return}switch(a){case`Point`:s.push(n({geometry:e},r,i));break;case`MultiPoint`:o.forEach(e=>{s.push(n({geometry:{type:`Point`,coordinates:e}},r,i))});break;case`LineString`:c.push(n({geometry:e},r,i));break;case`MultiLineString`:o.forEach(e=>{c.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))});break;case`Polygon`:l.push(n({geometry:e},r,i)),o.forEach(e=>{u.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))});break;case`MultiPolygon`:o.forEach(e=>{l.push(n({geometry:{type:`Polygon`,coordinates:e}},r,i)),e.forEach(e=>{u.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))})});break;default:}}var Aw={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};function jw(e,t){let n=Aw[e];for(R.assert(n,`Unknown GeoJSON type ${e}`);t&&--n>0;)t=t[0];return t&&Number.isFinite(t[0])}function Mw(){return{points:{},lines:{},polygons:{},polygonsOutline:{}}}function Nw(e){return e.geometry.coordinates}function Pw(e,t){let n=Mw(),{pointFeatures:r,lineFeatures:i,polygonFeatures:a,polygonOutlineFeatures:o}=e;return n.points.data=r,n.points._dataDiff=t.pointFeatures&&(()=>t.pointFeatures),n.points.getPosition=Nw,n.lines.data=i,n.lines._dataDiff=t.lineFeatures&&(()=>t.lineFeatures),n.lines.getPath=Nw,n.polygons.data=a,n.polygons._dataDiff=t.polygonFeatures&&(()=>t.polygonFeatures),n.polygons.getPolygon=Nw,n.polygonsOutline.data=o,n.polygonsOutline._dataDiff=t.polygonOutlineFeatures&&(()=>t.polygonOutlineFeatures),n.polygonsOutline.getPath=Nw,n}function Fw(e,t){let n=Mw(),{points:r,lines:i,polygons:a}=e,o=TC(e,t);n.points.data={length:r.positions.value.length/r.positions.size,attributes:{...r.attributes,getPosition:r.positions,instancePickingColors:{size:4,value:o.points}},properties:r.properties,numericProps:r.numericProps,featureIds:r.featureIds},n.lines.data={length:i.pathIndices.value.length-1,startIndices:i.pathIndices.value,attributes:{...i.attributes,getPath:i.positions,instancePickingColors:{size:4,value:o.lines}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},n.lines._pathType=`open`;let s=a.positions.value.length/a.positions.size,c=Array(s).fill(1);for(let e of a.primitivePolygonIndices.value)c[e-1]=0;return n.polygons.data={length:a.polygonIndices.value.length-1,startIndices:a.polygonIndices.value,attributes:{...a.attributes,getPolygon:a.positions,instanceVertexValid:{size:1,value:new Uint16Array(c)},pickingColors:{size:4,value:o.polygons}},properties:a.properties,numericProps:a.numericProps,featureIds:a.featureIds},n.polygons._normalize=!1,a.triangles&&(n.polygons.data.attributes.indices=a.triangles.value),n.polygonsOutline.data={length:a.primitivePolygonIndices.value.length-1,startIndices:a.primitivePolygonIndices.value,attributes:{...a.attributes,getPath:a.positions,instancePickingColors:{size:4,value:o.polygons}},properties:a.properties,numericProps:a.numericProps,featureIds:a.featureIds},n.polygonsOutline._pathType=`open`,n}var Iw=[`points`,`linestrings`,`polygons`],Lw={...Tw(Sw.circle),...Tw(Sw.icon),...Tw(Sw.text),...Tw(Cw),...Tw(ww),stroked:!0,filled:!0,extruded:!1,wireframe:!1,_full3d:!1,iconAtlas:{type:`object`,value:null},iconMapping:{type:`object`,value:{}},getIcon:{type:`accessor`,value:e=>e.properties.icon},getText:{type:`accessor`,value:e=>e.properties.text},pointType:`circle`,getRadius:{deprecatedFor:`getPointRadius`}},Rw=class extends Qb{initializeState(){this.state={layerProps:{},features:{},featuresDiff:{}}}updateState({props:e,changeFlags:t}){if(!t.dataChanged)return;let{data:n}=this.props,r=n&&`points`in n&&`polygons`in n&&`lines`in n;this.setState({binary:r}),r?this._updateStateBinary({props:e,changeFlags:t}):this._updateStateJSON({props:e,changeFlags:t})}_updateStateBinary({props:e,changeFlags:t}){let n=Fw(e.data,this.encodePickingColor);this.setState({layerProps:n})}_updateStateJSON({props:e,changeFlags:t}){let n=Dw(e.data),r=this.getSubLayerRow.bind(this),i={},a={};if(Array.isArray(t.dataChanged)){let e=this.state.features;for(let t in e)i[t]=e[t].slice(),a[t]=[];for(let o of t.dataChanged){let t=Ow(n,r,o);for(let n in e)a[n].push(yC({data:i[n],getIndex:e=>e.__source.index,dataRange:o,replace:t[n]}))}}else i=Ow(n,r);let o=Pw(i,a);this.setState({features:i,featuresDiff:a,layerProps:o})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n,sourceLayer:r}=t;return t.featureType=Iw.find(e=>r.id.startsWith(`${this.id}-${e}-`)),n>=0&&r.id.startsWith(`${this.id}-points-text`)&&this.state.binary&&(t.index=this.props.data.points.globalFeatureIds.value[n]),t}_updateAutoHighlight(e){let t=`${this.id}-points-`,n=e.featureType===`points`;for(let r of this.getSubLayers())r.id.startsWith(t)===n&&r.updateAutoHighlight(e)}_renderPolygonLayer(){let{extruded:e,wireframe:t}=this.props,{layerProps:n}=this.state,r=`polygons-fill`,i=this.shouldRenderSubLayer(r,n.polygons?.data)&&this.getSubLayerClass(r,ww.type);if(i){let a=Ew(this,ww.props),o=e&&t;return o||delete a.getLineColor,a.updateTriggers.lineColors=o,new i(a,this.getSubLayerProps({id:r,updateTriggers:a.updateTriggers}),n.polygons)}return null}_renderLineLayers(){let{extruded:e,stroked:t}=this.props,{layerProps:n}=this.state,r=`polygons-stroke`,i=`linestrings`,a=!e&&t&&this.shouldRenderSubLayer(r,n.polygonsOutline?.data)&&this.getSubLayerClass(r,Cw.type),o=this.shouldRenderSubLayer(i,n.lines?.data)&&this.getSubLayerClass(i,Cw.type);if(a||o){let e=Ew(this,Cw.props);return[a&&new a(e,this.getSubLayerProps({id:r,updateTriggers:e.updateTriggers}),n.polygonsOutline),o&&new o(e,this.getSubLayerProps({id:i,updateTriggers:e.updateTriggers}),n.lines)]}return null}_renderPointLayers(){let{pointType:e}=this.props,{layerProps:t,binary:n}=this.state,{highlightedObjectIndex:r}=this.props;!n&&Number.isFinite(r)&&(r=t.points.data.findIndex(e=>e.__source.index===r));let i=new Set(e.split(`+`)),a=[];for(let e of i){let i=`points-${e}`,o=Sw[e],s=o&&this.shouldRenderSubLayer(i,t.points?.data)&&this.getSubLayerClass(i,o.type);if(s){let c=Ew(this,o.props),l=t.points;if(e===`text`&&n){let{instancePickingColors:e,...t}=l.data.attributes;l={...l,data:{...l.data,attributes:t}}}a.push(new s(c,this.getSubLayerProps({id:i,updateTriggers:c.updateTriggers,highlightedObjectIndex:r}),l))}}return a}renderLayers(){let{extruded:e}=this.props,t=this._renderPolygonLayer(),n=this._renderLineLayers(),r=this._renderPointLayers();return[!e&&t,n,r,e&&t]}getSubLayerAccessor(e){let{binary:t}=this.state;return!t||typeof e!=`function`?super.getSubLayerAccessor(e):(t,n)=>{let{data:r,index:i}=n;return e(CC(r,i),n)}}};Rw.layerName=`GeoJsonLayer`,Rw.defaultProps=Lw;var zw=class{constructor(e){this.index=e,this.isVisible=!1,this.isSelected=!1,this.parent=null,this.children=[],this.content=null,this._loader=void 0,this._abortController=null,this._loaderId=0,this._isLoaded=!1,this._isCancelled=!1,this._needsReload=!1}get bbox(){return this._bbox}set bbox(e){this._bbox||(this._bbox=e,`west`in e?this.boundingBox=[[e.west,e.south],[e.east,e.north]]:this.boundingBox=[[e.left,e.top],[e.right,e.bottom]])}get data(){return this.isLoading&&this._loader?this._loader.then(()=>this.data):this.content}get isLoaded(){return this._isLoaded&&!this._needsReload}get isLoading(){return!!this._loader&&!this._isCancelled}get needsReload(){return this._needsReload||this._isCancelled}get byteLength(){let e=this.content?this.content.byteLength:0;return Number.isFinite(e)||console.error(`byteLength not defined in tile data`),e}async _loadData({getData:e,requestScheduler:t,onLoad:n,onError:r}){let{index:i,id:a,bbox:o,userData:s,zoom:c}=this,l=this._loaderId;this._abortController=new AbortController;let{signal:u}=this._abortController,d=await t.scheduleRequest(this,e=>e.isSelected?1:-1);if(!d){this._isCancelled=!0;return}if(this._isCancelled){d.done();return}let f=null,p;try{f=await e({index:i,id:a,bbox:o,userData:s,zoom:c,signal:u})}catch(e){p=e||!0}finally{d.done()}if(l===this._loaderId){if(this._loader=void 0,this.content=f,this._isCancelled&&!f){this._isLoaded=!1;return}this._isLoaded=!0,this._isCancelled=!1,p?r(p,this):n(this)}}loadData(e){return this._isLoaded=!1,this._isCancelled=!1,this._needsReload=!1,this._loaderId++,this._loader=this._loadData(e),this._loader}setNeedsReload(){this.isLoading&&(this.abort(),this._loader=void 0),this._needsReload=!0}abort(){this.isLoaded||(this._isCancelled=!0,this._abortController?.abort())}},$={OUTSIDE:-1,INTERSECTING:0,INSIDE:1},Bw=new W,Vw=new W,Hw=class e{constructor(e=[0,0,0],t=[0,0,0],n){n||=Bw.copy(e).add(t).scale(.5),this.center=new W(n),this.halfDiagonal=new W(t).subtract(this.center),this.minimum=new W(e),this.maximum=new W(t)}clone(){return new e(this.minimum,this.maximum,this.center)}equals(e){return this===e||!!e&&this.minimum.equals(e.minimum)&&this.maximum.equals(e.maximum)}transform(e){return this.center.transformAsPoint(e),this.halfDiagonal.transform(e),this.minimum.transform(e),this.maximum.transform(e),this}intersectPlane(e){let{halfDiagonal:t}=this,n=Vw.from(e.normal),r=t.x*Math.abs(n.x)+t.y*Math.abs(n.y)+t.z*Math.abs(n.z),i=this.center.dot(n)+e.distance;return i-r>0?$.INSIDE:i+r<0?$.OUTSIDE:$.INTERSECTING}distanceTo(e){return Math.sqrt(this.distanceSquaredTo(e))}distanceSquaredTo(e){let t=Bw.from(e).subtract(this.center),{halfDiagonal:n}=this,r=0,i;return i=Math.abs(t.x)-n.x,i>0&&(r+=i*i),i=Math.abs(t.y)-n.y,i>0&&(r+=i*i),i=Math.abs(t.z)-n.z,i>0&&(r+=i*i),r}},Uw=new W,Ww=new W,Gw=class e{constructor(e=[0,0,0],t=0){this.radius=-0,this.center=new W,this.fromCenterRadius(e,t)}fromCenterRadius(e,t){return this.center.from(e),this.radius=t,this}fromCornerPoints(e,t){return t=Uw.from(t),this.center=new W().from(e).add(t).scale(.5),this.radius=this.center.distance(t),this}equals(e){return this===e||!!e&&this.center.equals(e.center)&&this.radius===e.radius}clone(){return new e(this.center,this.radius)}union(e){let t=this.center,n=this.radius,r=e.center,i=e.radius,a=Uw.copy(r).subtract(t),o=a.magnitude();if(n>=o+i)return this.clone();if(i>=o+n)return e.clone();let s=(n+o+i)*.5;return Ww.copy(a).scale((-n+s)/o).add(t),this.center.copy(Ww),this.radius=s,this}expand(e){let t=Uw.from(e).subtract(this.center).magnitude();return t>this.radius&&(this.radius=t),this}transform(e){this.center.transform(e);let t=Iu(Uw,e);return this.radius=Math.max(t[0],Math.max(t[1],t[2]))*this.radius,this}distanceSquaredTo(e){let t=this.distanceTo(e);return t*t}distanceTo(e){let t=Uw.from(e).subtract(this.center);return Math.max(0,t.len()-this.radius)}intersectPlane(e){let t=this.center,n=this.radius,r=e.normal.dot(t)+e.distance;return r<-n?$.OUTSIDE:r<n?$.INTERSECTING:$.INSIDE}},Kw=new W,qw=new W,Jw=new W,Yw=new W,Xw=new W,Zw=new W,Qw=new W,$w={COLUMN0ROW0:0,COLUMN0ROW1:1,COLUMN0ROW2:2,COLUMN1ROW0:3,COLUMN1ROW1:4,COLUMN1ROW2:5,COLUMN2ROW0:6,COLUMN2ROW1:7,COLUMN2ROW2:8},eT=class e{constructor(e=[0,0,0],t=[0,0,0,0,0,0,0,0,0]){this.center=new W().from(e),this.halfAxes=new G(t)}get halfSize(){let e=this.halfAxes.getColumn(0),t=this.halfAxes.getColumn(1),n=this.halfAxes.getColumn(2);return[new W(e).len(),new W(t).len(),new W(n).len()]}get quaternion(){let e=this.halfAxes.getColumn(0),t=this.halfAxes.getColumn(1),n=this.halfAxes.getColumn(2),r=new W(e).normalize(),i=new W(t).normalize(),a=new W(n).normalize();return new Nd().fromMatrix3(new G([...r,...i,...a]))}fromCenterHalfSizeQuaternion(e,t,n){let r=new Nd(n),i=new G().fromQuaternion(r);return i[0]*=t[0],i[1]*=t[0],i[2]*=t[0],i[3]*=t[1],i[4]*=t[1],i[5]*=t[1],i[6]*=t[2],i[7]*=t[2],i[8]*=t[2],this.center=new W().from(e),this.halfAxes=i,this}clone(){return new e(this.center,this.halfAxes)}equals(e){return this===e||!!e&&this.center.equals(e.center)&&this.halfAxes.equals(e.halfAxes)}getBoundingSphere(e=new Gw){let t=this.halfAxes,n=t.getColumn(0,Jw),r=t.getColumn(1,Yw),i=t.getColumn(2,Xw),a=Kw.copy(n).add(r).add(i);return e.center.copy(this.center),e.radius=a.magnitude(),e}intersectPlane(e){let t=this.center,n=e.normal,r=this.halfAxes,i=n.x,a=n.y,o=n.z,s=Math.abs(i*r[$w.COLUMN0ROW0]+a*r[$w.COLUMN0ROW1]+o*r[$w.COLUMN0ROW2])+Math.abs(i*r[$w.COLUMN1ROW0]+a*r[$w.COLUMN1ROW1]+o*r[$w.COLUMN1ROW2])+Math.abs(i*r[$w.COLUMN2ROW0]+a*r[$w.COLUMN2ROW1]+o*r[$w.COLUMN2ROW2]),c=n.dot(t)+e.distance;return c<=-s?$.OUTSIDE:c>=s?$.INSIDE:$.INTERSECTING}distanceTo(e){return Math.sqrt(this.distanceSquaredTo(e))}distanceSquaredTo(e){let t=qw.from(e).subtract(this.center),n=this.halfAxes,r=n.getColumn(0,Jw),i=n.getColumn(1,Yw),a=n.getColumn(2,Xw),o=r.magnitude(),s=i.magnitude(),c=a.magnitude();r.normalize(),i.normalize(),a.normalize();let l=0,u;return u=Math.abs(t.dot(r))-o,u>0&&(l+=u*u),u=Math.abs(t.dot(i))-s,u>0&&(l+=u*u),u=Math.abs(t.dot(a))-c,u>0&&(l+=u*u),l}computePlaneDistances(e,t,n=[-0,-0]){let r=1/0,i=-1/0,a=this.center,o=this.halfAxes,s=o.getColumn(0,Jw),c=o.getColumn(1,Yw),l=o.getColumn(2,Xw),u=Zw.copy(s).add(c).add(l).add(a),d=Qw.copy(u).subtract(e),f=t.dot(d);return r=Math.min(f,r),i=Math.max(f,i),u.copy(a).add(s).add(c).subtract(l),d.copy(u).subtract(e),f=t.dot(d),r=Math.min(f,r),i=Math.max(f,i),u.copy(a).add(s).subtract(c).add(l),d.copy(u).subtract(e),f=t.dot(d),r=Math.min(f,r),i=Math.max(f,i),u.copy(a).add(s).subtract(c).subtract(l),d.copy(u).subtract(e),f=t.dot(d),r=Math.min(f,r),i=Math.max(f,i),a.copy(u).subtract(s).add(c).add(l),d.copy(u).subtract(e),f=t.dot(d),r=Math.min(f,r),i=Math.max(f,i),a.copy(u).subtract(s).add(c).subtract(l),d.copy(u).subtract(e),f=t.dot(d),r=Math.min(f,r),i=Math.max(f,i),a.copy(u).subtract(s).subtract(c).add(l),d.copy(u).subtract(e),f=t.dot(d),r=Math.min(f,r),i=Math.max(f,i),a.copy(u).subtract(s).subtract(c).subtract(l),d.copy(u).subtract(e),f=t.dot(d),r=Math.min(f,r),i=Math.max(f,i),n[0]=r,n[1]=i,n}transform(e){this.center.transformAsPoint(e);let t=this.halfAxes.getColumn(0,Jw);t.transformAsPoint(e);let n=this.halfAxes.getColumn(1,Yw);n.transformAsPoint(e);let r=this.halfAxes.getColumn(2,Xw);return r.transformAsPoint(e),this.halfAxes=new G([...t,...n,...r]),this}getTransform(){throw Error(`not implemented`)}},tT=new W,nT=new W,rT=class e{constructor(e=[0,0,1],t=0){this.normal=new W,this.distance=-0,this.fromNormalDistance(e,t)}fromNormalDistance(e,t){return Cl(Number.isFinite(t)),this.normal.from(e).normalize(),this.distance=t,this}fromPointNormal(e,t){return e=tT.from(e),this.normal.from(t).normalize(),this.distance=-this.normal.dot(e),this}fromCoefficients(e,t,n,r){return this.normal.set(e,t,n),Cl(gl(this.normal.len(),1)),this.distance=r,this}clone(){return new e(this.normal,this.distance)}equals(e){return gl(this.distance,e.distance)&&gl(this.normal,e.normal)}getPointDistance(e){return this.normal.dot(e)+this.distance}transform(e){let t=nT.copy(this.normal).transformAsVector(e).normalize(),n=this.normal.scale(-this.distance).transform(e);return this.fromPointNormal(n,t)}projectPointOntoPlane(e,t=[0,0,0]){let n=tT.from(e),r=this.getPointDistance(n),i=nT.copy(this.normal).scale(r);return n.subtract(i).to(t)}},iT=[new W([1,0,0]),new W([0,1,0]),new W([0,0,1])],aT=new W,oT=new W,sT=class e{constructor(e=[]){this.planes=e}fromBoundingSphere(e){this.planes.length=2*iT.length;let t=e.center,n=e.radius,r=0;for(let e of iT){let i=this.planes[r],a=this.planes[r+1];i||=this.planes[r]=new rT,a||=this.planes[r+1]=new rT;let o=aT.copy(e).scale(-n).add(t);i.fromPointNormal(o,e);let s=aT.copy(e).scale(n).add(t),c=oT.copy(e).negate();a.fromPointNormal(s,c),r+=2}return this}computeVisibility(e){let t=$.INSIDE;for(let n of this.planes)switch(e.intersectPlane(n)){case $.OUTSIDE:return $.OUTSIDE;case $.INTERSECTING:t=$.INTERSECTING;break;default:}return t}computeVisibilityWithPlaneMask(t,n){if(Cl(Number.isFinite(n),`parentPlaneMask is required.`),n===e.MASK_OUTSIDE||n===e.MASK_INSIDE)return n;let r=e.MASK_INSIDE,i=this.planes;for(let a=0;a<this.planes.length;++a){let o=a<31?1<<a:0;if(a<31&&(n&o)===0)continue;let s=i[a],c=t.intersectPlane(s);if(c===$.OUTSIDE)return e.MASK_OUTSIDE;c===$.INTERSECTING&&(r|=o)}return r}};sT.MASK_OUTSIDE=4294967295,sT.MASK_INSIDE=0,sT.MASK_INDETERMINATE=2147483647,new W,new W,new W,new W,new W,new W,new W,new W,new W,new W,new W,new W,new W,new W,new W,new W,new W;var cT=new G,lT=new G,uT=new G,dT=new G,fT=new G;function pT(e,t={}){let n=Fd,r=0,i=0,a=lT,o=uT;a.identity(),o.copy(e);let s=n*mT(o);for(;i<10&&_T(o)>s;)vT(o,dT),fT.copy(dT).transpose(),o.multiplyRight(dT),o.multiplyLeft(fT),a.multiplyRight(dT),++r>2&&(++i,r=0);return t.unitary=a.toTarget(t.unitary),t.diagonal=o.toTarget(t.diagonal),t}function mT(e){let t=0;for(let n=0;n<9;++n){let r=e[n];t+=r*r}return Math.sqrt(t)}var hT=[1,0,0],gT=[2,2,1];function _T(e){let t=0;for(let n=0;n<3;++n){let r=e[cT.getElementIndex(gT[n],hT[n])];t+=2*r*r}return Math.sqrt(t)}function vT(e,t){let n=Pd,r=0,i=1;for(let t=0;t<3;++t){let n=Math.abs(e[cT.getElementIndex(gT[t],hT[t])]);n>r&&(i=t,r=n)}let a=hT[i],o=gT[i],s=1,c=0;if(Math.abs(e[cT.getElementIndex(o,a)])>n){let t=e[cT.getElementIndex(o,o)],n=e[cT.getElementIndex(a,a)],r=e[cT.getElementIndex(o,a)],i=(t-n)/2/r,l;l=i<0?-1/(-i+Math.sqrt(1+i*i)):1/(i+Math.sqrt(1+i*i)),s=1/Math.sqrt(1+l*l),c=l*s}return G.IDENTITY.to(t),t[cT.getElementIndex(a,a)]=t[cT.getElementIndex(o,o)]=s,t[cT.getElementIndex(o,a)]=c,t[cT.getElementIndex(a,o)]=-c,t}var yT=new W,bT=new W,xT=new W,ST=new W,CT=new W,wT=new G,TT={diagonal:new G,unitary:new G};function ET(e,t=new eT){if(!e||e.length===0)return t.halfAxes=new G([0,0,0,0,0,0,0,0,0]),t.center=new W,t;let n=e.length,r=new W(0,0,0);for(let t of e)r.add(t);let i=1/n;r.multiplyByScalar(i);let a=0,o=0,s=0,c=0,l=0,u=0;for(let t of e){let e=yT.copy(t).subtract(r);a+=e.x*e.x,o+=e.x*e.y,s+=e.x*e.z,c+=e.y*e.y,l+=e.y*e.z,u+=e.z*e.z}a*=i,o*=i,s*=i,c*=i,l*=i,u*=i;let d=wT;d[0]=a,d[1]=o,d[2]=s,d[3]=o,d[4]=c,d[5]=l,d[6]=s,d[7]=l,d[8]=u;let{unitary:f}=pT(d,TT),p=t.halfAxes.copy(f),m=p.getColumn(0,xT),h=p.getColumn(1,ST),g=p.getColumn(2,CT),_=-Number.MAX_VALUE,v=-Number.MAX_VALUE,y=-Number.MAX_VALUE,b=Number.MAX_VALUE,x=Number.MAX_VALUE,S=Number.MAX_VALUE;for(let t of e)yT.copy(t),_=Math.max(yT.dot(m),_),v=Math.max(yT.dot(h),v),y=Math.max(yT.dot(g),y),b=Math.min(yT.dot(m),b),x=Math.min(yT.dot(h),x),S=Math.min(yT.dot(g),S);m=m.multiplyByScalar(.5*(b+_)),h=h.multiplyByScalar(.5*(x+v)),g=g.multiplyByScalar(.5*(S+y)),t.center.copy(m).add(h).add(g);let C=bT.set(_-b,v-x,y-S).multiplyByScalar(.5),w=new G([C[0],0,0,0,C[1],0,0,0,C[2]]);return t.halfAxes.multiplyRight(w),t}var DT=512,OT=3,kT=[[.5,.5],[0,0],[0,1],[1,0],[1,1]],AT=kT.concat([[0,.5],[.5,0],[1,.5],[.5,1]]),jT=AT.concat([[.25,.5],[.75,.5]]),MT=class e{constructor(e,t,n){this.x=e,this.y=t,this.z=n}get children(){if(!this._children){let t=this.x*2,n=this.y*2,r=this.z+1;this._children=[new e(t,n,r),new e(t,n+1,r),new e(t+1,n,r),new e(t+1,n+1,r)]}return this._children}update(e){let{viewport:t,cullingVolume:n,elevationBounds:r,minZ:i,maxZ:a,bounds:o,offset:s,project:c}=e,l=this.getBoundingVolume(r,s,c);if(o&&!this.insideBounds(o)||n.computeVisibility(l)<0)return!1;if(!this.childVisible){let{z:e}=this;if(e<a&&e>=i){let n=l.distanceTo(t.cameraPosition)*t.scale/t.height;e+=Math.floor(Math.log2(n))}if(e>=a)return this.selected=!0,!0}this.selected=!1,this.childVisible=!0;for(let t of this.children)t.update(e);return!0}getSelected(e=[]){if(this.selected&&e.push(this),this._children)for(let t of this._children)t.getSelected(e);return e}insideBounds([e,t,n,r]){let i=DT/2**this.z;return this.x*i<n&&this.y*i<r&&(this.x+1)*i>e&&(this.y+1)*i>t}getBoundingVolume(e,t,n){if(n){let t=this.z<1?jT:this.z<2?AT:kT,r=[];for(let i of t){let t=GT(this.x+i[0],this.y+i[1],this.z);t[2]=e[0],r.push(n(t)),e[0]!==e[1]&&(t[2]=e[1],r.push(n(t)))}return ET(r)}let r=DT/2**this.z,i=this.x*r+t*DT,a=DT-(this.y+1)*r;return new Hw([i,a,e[0]],[i+r,a+r,e[1]])}};function NT(e,t,n,r){let i=e instanceof Q_&&e.resolution?e.projectPosition:null,a=new sT(Object.values(e.getFrustumPlanes()).map(({normal:e,distance:t})=>new rT(e.clone().negate(),t))),o=e.distanceScales.unitsPerMeter[2],s=n&&n[0]*o||0,c=n&&n[1]*o||0,l=e instanceof Bh&&e.pitch<=60?t:0;if(r){let[e,t,n,i]=r,a=Sm([e,i]),o=Sm([n,t]);r=[a[0],DT-a[1],o[0],DT-o[1]]}let u=new MT(0,0,0),d={viewport:e,project:i,cullingVolume:a,elevationBounds:[s,c],minZ:l,maxZ:t,bounds:r,offset:0};if(u.update(d),e instanceof Bh&&e.subViewports&&e.subViewports.length>1){for(d.offset=-1;u.update(d)&&!(--d.offset<-OT););for(d.offset=1;u.update(d)&&!(++d.offset>OT););}return u.getSelected()}var PT=512,FT=[-1/0,-1/0,1/0,1/0],IT={type:`object`,value:null,validate:(e,t)=>t.optional&&e===null||typeof e==`string`||Array.isArray(e)&&e.every(e=>typeof e==`string`),equal:(e,t)=>{if(e===t)return!0;if(!Array.isArray(e)||!Array.isArray(t))return!1;let n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}};function LT(e,t){let n=[t.transformAsPoint([e[0],e[1]]),t.transformAsPoint([e[2],e[1]]),t.transformAsPoint([e[0],e[3]]),t.transformAsPoint([e[2],e[3]])];return[Math.min(...n.map(e=>e[0])),Math.min(...n.map(e=>e[1])),Math.max(...n.map(e=>e[0])),Math.max(...n.map(e=>e[1]))]}function RT(e){return Math.abs(e.split(``).reduce((e,t)=>(e<<5)-e+t.charCodeAt(0)|0,0))}function zT(e,t){if(!e||!e.length)return null;let{index:n,id:r}=t;if(Array.isArray(e)){let t=RT(r)%e.length;e=e[t]}let i=e;for(let e of Object.keys(n)){let t=RegExp(`{${e}}`,`g`);i=i.replace(t,String(n[e]))}return Number.isInteger(n.y)&&Number.isInteger(n.z)&&(i=i.replace(/\{-y\}/g,String(2**n.z-n.y-1))),i}function BT(e,t,n){let r;if(t&&t.length===2){let[n,i]=t,a=e.getBounds({z:n}),o=e.getBounds({z:i});r=[Math.min(a[0],o[0]),Math.min(a[1],o[1]),Math.max(a[2],o[2]),Math.max(a[3],o[3])]}else r=e.getBounds();return e.isGeospatial?[Math.max(r[0],n[0]),Math.max(r[1],n[1]),Math.min(r[2],n[2]),Math.min(r[3],n[3])]:[Math.max(Math.min(r[0],n[2]),n[0]),Math.max(Math.min(r[1],n[3]),n[1]),Math.min(Math.max(r[2],n[0]),n[2]),Math.min(Math.max(r[3],n[1]),n[3])]}function VT({viewport:e,z:t,cullRect:n}){return(e.subViewports||[e]).map(e=>HT(e,t||0,n))}function HT(e,t,n){if(!Array.isArray(t)){let r=n.x-e.x,i=n.y-e.y,{width:a,height:o}=n,s={targetZ:t},c=e.unproject([r,i],s),l=e.unproject([r+a,i],s),u=e.unproject([r,i+o],s),d=e.unproject([r+a,i+o],s);return[Math.min(c[0],l[0],u[0],d[0]),Math.min(c[1],l[1],u[1],d[1]),Math.max(c[0],l[0],u[0],d[0]),Math.max(c[1],l[1],u[1],d[1])]}let r=HT(e,t[0],n),i=HT(e,t[1],n);return[Math.min(r[0],i[0]),Math.min(r[1],i[1]),Math.max(r[2],i[2]),Math.max(r[3],i[3])]}function UT(e,t,n){return n?LT(e,n).map(e=>e*t/PT):e.map(e=>e*t/PT)}function WT(e,t){return 2**e*PT/t}function GT(e,t,n){let r=WT(n,PT),i=e/r*360-180,a=Math.PI-2*Math.PI*t/r;return[i,180/Math.PI*Math.atan(.5*(Math.exp(a)-Math.exp(-a)))]}function KT(e,t,n,r){let i=WT(n,r);return[e/i*PT,t/i*PT]}function qT(e,t,n,r,i=PT){if(e.isGeospatial){let[e,i]=GT(t,n,r),[a,o]=GT(t+1,n+1,r);return{west:e,north:i,east:a,south:o}}let[a,o]=KT(t,n,r,i),[s,c]=KT(t+1,n+1,r,i);return{left:a,top:o,right:s,bottom:c}}function JT(e,t,n,r,i){let[a,o,s,c]=UT(BT(e,null,r),WT(t,n),i),l=[];for(let e=Math.floor(a);e<s;e++)for(let n=Math.floor(o);n<c;n++)l.push({x:e,y:n,z:t});return l}function YT({viewport:e,maxZoom:t,minZoom:n,zRange:r,extent:i,tileSize:a=PT,modelMatrix:o,modelMatrixInverse:s,zoomOffset:c=0,visibleMinZoom:l,visibleMaxZoom:u}){let d=e.isGeospatial?Math.round(e.zoom+Math.log2(PT/a)+c):Math.ceil(e.zoom+c);if(typeof n==`number`&&Number.isFinite(n)&&d<n){if(!i)return[];d=n}if(typeof t==`number`&&Number.isFinite(t)&&d>t&&(d=t),l!=null&&e.zoom<l||u!=null&&e.zoom>u)return[];let f=i;return o&&s&&i&&!e.isGeospatial&&(f=LT(i,o)),e.isGeospatial?NT(e,d,r,i):JT(e,d,a,f||FT,s)}function XT(e){let t={},n;return r=>{for(let i in r)if(!ZT(r[i],t[i])){n=e(r),t=r;break}return n}}function ZT(e,t){if(e===t)return!0;if(Array.isArray(e)){let n=e.length;if(!t||t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}return!1}var QT=1,$T=2,eE=`never`,tE=`no-overlap`,nE=`best-available`,rE=5,iE={[nE]:sE,[tE]:cE,[eE]:()=>{}},aE={extent:null,tileSize:512,maxZoom:null,minZoom:null,maxCacheSize:null,maxCacheByteSize:null,refinementStrategy:`best-available`,zRange:null,maxRequests:6,debounceTime:0,zoomOffset:0,visibleMinZoom:null,visibleMaxZoom:null,onTileLoad:()=>{},onTileUnload:()=>{},onTileError:()=>{}},oE=class{constructor(e){this._getCullBounds=XT(VT),this.opts={...aE,...e},this.setOptions(this.opts),this.onTileLoad=e=>{this.opts.onTileLoad?.(e),this.opts.maxCacheByteSize!==null&&(this._cacheByteSize+=e.byteLength,this._resizeCache())},this._requestScheduler=new Ni({throttleRequests:this.opts.maxRequests>0||this.opts.debounceTime>0,maxRequests:this.opts.maxRequests,debounceTime:this.opts.debounceTime}),this._cache=new Map,this._tiles=[],this._dirty=!1,this._cacheByteSize=0,this._viewport=null,this._zRange=null,this._selectedTiles=null,this._frameNumber=0,this._modelMatrix=new K,this._modelMatrixInverse=new K}get tiles(){return this._tiles}get selectedTiles(){return this._selectedTiles}get isLoaded(){return this._selectedTiles!==null&&this._selectedTiles.every(e=>e.isLoaded)}get needsReload(){return this._selectedTiles!==null&&this._selectedTiles.some(e=>e.needsReload)}setOptions(e){Object.assign(this.opts,e),Number.isFinite(e.maxZoom)&&(this._maxZoom=Math.floor(e.maxZoom)),Number.isFinite(e.minZoom)&&(this._minZoom=Math.ceil(e.minZoom)),this._viewport=null}finalize(){for(let e of this._cache.values())e.isLoading&&e.abort();this._cache.clear(),this._tiles=[],this._selectedTiles=null}reloadAll(){for(let e of this._cache.keys()){let t=this._cache.get(e);!this._selectedTiles||!this._selectedTiles.includes(t)?this._cache.delete(e):t.setNeedsReload()}}update(e,{zRange:t,modelMatrix:n}={zRange:null,modelMatrix:null}){let r=n?new K(n):new K,i=!r.equals(this._modelMatrix);!this._viewport||!e.equals(this._viewport)||!gl(this._zRange,t)||i?(i&&(this._modelMatrixInverse=r.clone().invert(),this._modelMatrix=r),this._viewport=e,this._zRange=t,this._selectedTiles=this.getTileIndices({viewport:e,maxZoom:this._maxZoom,minZoom:this._minZoom,zRange:t,modelMatrix:this._modelMatrix,modelMatrixInverse:this._modelMatrixInverse}).map(e=>this._getTile(e,!0)),this._dirty&&this._rebuildTree()):this.needsReload&&(this._selectedTiles=this._selectedTiles.map(e=>this._getTile(e.index,!0)));let a=this.updateTileStates();return this._pruneRequests(),this._dirty&&this._resizeCache(),a&&this._frameNumber++,this._frameNumber}isTileVisible(e,t,n){if(!e.isVisible)return!1;if(t&&this._viewport){let r=this._getCullBounds({viewport:this._viewport,z:this._zRange,cullRect:t}),{bbox:i}=e;for(let[e,t,a,o]of r){let r;if(`west`in i)r=i.west<a&&i.east>e&&i.south<o&&i.north>t;else{if(n&&!K.IDENTITY.equals(n)){let[e,t,r,a]=LT([i.left,i.top,i.right,i.bottom],n);i={left:e,top:t,right:r,bottom:a}}let s=Math.min(i.top,i.bottom),c=Math.max(i.top,i.bottom);r=i.left<a&&i.right>e&&s<o&&c>t}if(r)return!0}return!1}return!0}getTileIndices({viewport:e,maxZoom:t,minZoom:n,zRange:r,modelMatrix:i,modelMatrixInverse:a}){let{tileSize:o,extent:s,zoomOffset:c,visibleMinZoom:l,visibleMaxZoom:u}=this.opts;return YT({viewport:e,maxZoom:t,minZoom:n,zRange:r,tileSize:o,extent:s,modelMatrix:i,modelMatrixInverse:a,zoomOffset:c,visibleMinZoom:l,visibleMaxZoom:u})}getTileId(e){return`${e.x}-${e.y}-${e.z}`}getTileZoom(e){return e.z}getTileMetadata(e){let{tileSize:t}=this.opts;return{bbox:qT(this._viewport,e.x,e.y,e.z,t)}}getParentIndex(e){return{x:Math.floor(e.x/2),y:Math.floor(e.y/2),z:e.z-1}}updateTileStates(){let e=this.opts.refinementStrategy||`best-available`,t=Array(this._cache.size),n=0;for(let e of this._cache.values())t[n++]=e.isVisible,e.isSelected=!1,e.isVisible=!1;for(let e of this._selectedTiles)e.isSelected=!0,e.isVisible=!0;(typeof e==`function`?e:iE[e])(Array.from(this._cache.values())),n=0;for(let e of this._cache.values())if(t[n++]!==e.isVisible)return!0;return!1}_pruneRequests(){let{maxRequests:e=0}=this.opts,t=[],n=0;for(let e of this._cache.values())e.isLoading&&(n++,!e.isSelected&&!e.isVisible&&t.push(e));for(;e>0&&n>e&&t.length>0;)t.shift().abort(),n--}_rebuildTree(){let{_cache:e}=this;for(let t of e.values())t.parent=null,t.children&&(t.children.length=0);for(let t of e.values()){let e=this._getNearestAncestor(t);t.parent=e,e?.children&&e.children.push(t)}}_resizeCache(){let{_cache:e,opts:t}=this,n=t.maxCacheSize??(t.maxCacheByteSize===null?rE*this.selectedTiles.length:1/0),r=t.maxCacheByteSize??1/0;if(e.size>n||this._cacheByteSize>r){for(let[i,a]of e)if(!a.isVisible&&!a.isSelected&&(this._cacheByteSize-=t.maxCacheByteSize===null?0:a.byteLength,e.delete(i),this.opts.onTileUnload?.(a)),e.size<=n&&this._cacheByteSize<=r)break;this._rebuildTree(),this._dirty=!0}this._dirty&&=(this._tiles=Array.from(this._cache.values()).sort((e,t)=>e.zoom-t.zoom),!1)}_getTile(e,t){let n=this.getTileId(e),r=this._cache.get(n),i=!1;return!r&&t?(r=new zw(e),Object.assign(r,this.getTileMetadata(r.index)),Object.assign(r,{id:n,zoom:this.getTileZoom(r.index)}),i=!0,this._cache.set(n,r),this._dirty=!0):r&&r.needsReload&&(i=!0),r&&i&&r.loadData({getData:this.opts.getTileData,requestScheduler:this._requestScheduler,onLoad:this.onTileLoad,onError:this.opts.onTileError}),r}_getNearestAncestor(e){let{_minZoom:t=0}=this,n=e.index;for(;this.getTileZoom(n)>t;){n=this.getParentIndex(n);let e=this._getTile(n);if(e)return e}return null}};function sE(e){for(let t of e)t.state=0;for(let t of e)t.isSelected&&!lE(t)&&uE(t);for(let t of e)t.isVisible=!!(t.state&$T)}function cE(e){for(let t of e)t.state=0;for(let t of e)t.isSelected&&lE(t);let t=Array.from(e).sort((e,t)=>e.zoom-t.zoom);for(let e of t)if(e.isVisible=!!(e.state&$T),e.children&&(e.isVisible||e.state&QT))for(let t of e.children)t.state=QT;else e.isSelected&&uE(e)}function lE(e){let t=e;for(;t;){if(t.isLoaded||t.content)return t.state|=$T,!0;t=t.parent}return!1}function uE(e){for(let t of e.children)t.isLoaded||t.content?t.state|=$T:uE(t)}var dE={TilesetClass:oE,data:{type:`data`,value:[]},dataComparator:IT.equal,renderSubLayers:{type:`function`,value:e=>new Rw(e)},getTileData:{type:`function`,optional:!0,value:null},onViewportLoad:{type:`function`,optional:!0,value:null},onTileLoad:{type:`function`,value:e=>{}},onTileUnload:{type:`function`,value:e=>{}},onTileError:{type:`function`,value:e=>console.error(e)},extent:{type:`array`,optional:!0,value:null,compare:!0},tileSize:512,maxZoom:null,minZoom:0,maxCacheSize:null,maxCacheByteSize:null,refinementStrategy:nE,zRange:null,maxRequests:6,debounceTime:0,zoomOffset:0,visibleMinZoom:null,visibleMaxZoom:null},fE=class extends Qb{initializeState(){this.state={tileset:null,isLoaded:!1}}finalizeState(){this.state?.tileset?.finalize()}get isLoaded(){return!!this.state?.tileset?.selectedTiles?.every(e=>e.isLoaded&&(!e.content||!e.layers||e.layers.every(e=>e.isLoaded)))}shouldUpdateState({changeFlags:e}){return e.somethingChanged}updateState({changeFlags:e}){let{tileset:t}=this.state,n=e.propsOrDataChanged||e.updateTriggersChanged,r=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getTileData);t?n&&(t.setOptions(this._getTilesetOptions()),r?t.reloadAll():t.tiles.forEach(e=>{e.layers=null})):(t=new this.props.TilesetClass(this._getTilesetOptions()),this.setState({tileset:t})),this._updateTileset()}_getTilesetOptions(){let{tileSize:e,maxCacheSize:t,maxCacheByteSize:n,refinementStrategy:r,extent:i,maxZoom:a,minZoom:o,maxRequests:s,debounceTime:c,zoomOffset:l,visibleMinZoom:u,visibleMaxZoom:d}=this.props;return{maxCacheSize:t,maxCacheByteSize:n,maxZoom:a,minZoom:o,tileSize:e,refinementStrategy:r,extent:i,maxRequests:s,debounceTime:c,zoomOffset:l,visibleMinZoom:u,visibleMaxZoom:d,getTileData:this.getTileData.bind(this),onTileLoad:this._onTileLoad.bind(this),onTileError:this._onTileError.bind(this),onTileUnload:this._onTileUnload.bind(this)}}_updateTileset(){let e=this.state.tileset,{zRange:t,modelMatrix:n}=this.props,r=e.update(this.context.viewport,{zRange:t,modelMatrix:n}),{isLoaded:i}=e,a=this.state.isLoaded!==i,o=this.state.frameNumber!==r;i&&(a||o)&&this._onViewportLoad(),o&&this.setState({frameNumber:r}),this.state.isLoaded=i}_onViewportLoad(){let{tileset:e}=this.state,{onViewportLoad:t}=this.props;t&&t(e.selectedTiles)}_onTileLoad(e){this.props.onTileLoad(e),e.layers=null,this.setNeedsUpdate()}_onTileError(e,t){this.props.onTileError(e),t.layers=null,this.setNeedsUpdate()}_onTileUnload(e){this.props.onTileUnload(e)}getTileData(e){let{data:t,getTileData:n,fetch:r}=this.props,{signal:i}=e;return e.url=typeof t==`string`||Array.isArray(t)?zT(t,e):null,n?n(e):r&&e.url?r(e.url,{propName:`data`,layer:this,signal:i}):null}renderSubLayers(e){return this.props.renderSubLayers(e)}getSubLayerPropsByTile(e){return null}getPickingInfo(e){let t=e.sourceLayer,n=t.props.tile,r=e.info;return r.picked&&(r.tile=n),r.sourceTile=n,r.sourceTileSubLayer=t,r}_updateAutoHighlight(e){e.sourceTileSubLayer.updateAutoHighlight(e)}renderLayers(){let{visibleMinZoom:e,visibleMaxZoom:t,minZoom:n,extent:r}=this.props,i=this.context.viewport.zoom;if(e!=null&&i<e||t!=null&&i>t||n!=null&&!r&&i<n){for(let e of this.state.tileset.tiles)e.layers=null;return[]}return this.state.tileset.tiles.map(e=>{let t=this.getSubLayerPropsByTile(e);return!e.isLoaded&&!e.content||(e.layers?t&&e.layers[0]&&Object.keys(t).some(n=>e.layers[0].props[n]!==t[n])&&(e.layers=e.layers.map(e=>e.clone(t))):e.layers=b_(this.renderSubLayers({...this.props,...this.getSubLayerProps({id:e.id,updateTriggers:this.props.updateTriggers}),data:e.content,_offset:0,tile:e}),Boolean).map(n=>n.clone({tile:e,...t}))),e.layers})}filterSubLayer({layer:e,cullRect:t}){let{tile:n}=e.props,{modelMatrix:r}=this.props;return this.state.tileset.isTileVisible(n,t,r?new K(r):null)}};fE.defaultProps=dE,fE.layerName=`TileLayer`;var pE=class extends Wv{getLiveViewState(){let e=this.viewManager;if(!e)return null;let t=e.views[0];return t?e.getViewState(t):null}},mE={class:`fixed w-100dvw h-100dvh overflow-hidden bg-black truncate`},hE=l({__name:`deck-gl`,emits:[`viewStateChange`],setup(t,{emit:r}){let a=r,c=n(`canvasRef`),l=x(null);return o(()=>{let e=c.value;if(!e)throw Error(`Canvas not found.`);let t=new pE({canvas:e,views:new ax,onInteractionStateChange:e=>{let n=!(e.inTransition||e.isDragging||e.isPanning||e.isZooming||e.isRotating);t.props._pickable!==n&&t.setProps({_pickable:n})},onViewStateChange:({viewState:e})=>(a(`viewStateChange`,e),e),getCursor:({isDragging:e,isHovering:t})=>e?`grabbing`:t?`pointer`:`default`}),n=()=>{if(t.isInitialized){l.value=t;return}requestIdleCallback(n)};n(),l.value=t,s(()=>{t.finalize()})}),(t,n)=>(i(),g(`div`,mE,[D(`canvas`,e(t.$attrs,{ref_key:`canvasRef`,ref:c}),null,16),_(c)&&_(l)?ne(t.$slots,`default`,{key:0,deck:_(l),canvas:_(c)}):S(``,!0)]))}}),gE=`#version 300 es
#define SHADER_NAME icon-layer-fragment-shader

precision highp float;
precision highp int;

uniform sampler2D iconsTexture;

in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;

in vec2 vMixtureTextureCoords;
in vec2 vMixtureUV;
in vec2 vMixtureStateCoords[MIXTURE_MAX_STATE_BITS];

// per-instance 掩码 (来自 vertex shader 的 flat varying,值为 0~255)
// flat 限定符确保同一实例内所有 fragment 的掩码值一致,因此 if 分支不会产生 warp 发散
flat in float vBottomMask;
flat in float vTopMask;

out vec4 fragColor;

void main(void) {
  geometry.uv = uv;

  // ==========================================
  // 1. 原始纹理采样 (UV 越界时抹零)
  // ==========================================
  // step(edge, x): x >= edge ? 1.0 : 0.0
  // 结合 4 个边界的 step 结果，如果都在 [0, 1] 范围内，乘积为 1.0，否则为 0.0
  vec4 inBounds = step(vec4(0.0, 0.0, vMixtureUV), vec4(vMixtureUV, 1.0, 1.0));
  float isSafe = inBounds.x * inBounds.y * inBounds.z * inBounds.w;
  vec4 originalColor = texture(iconsTexture, vMixtureTextureCoords) * isSafe;

  // 2. 按 z-order 混合: bottomMask -> 原始纹理 -> topMask
  vec4 texColor = vec4(0.0);

  // ==========================================
  // 2a. bottomMask 状态混合
  // ==========================================
  // vBottomMask 为 flat varying,同一实例内所有 fragment 一致,if 分支无 warp 发散。
  // 外层 if 跳过 mask 为 0 的整个循环;内层 if 跳过未激活 bit 的纹理采样。
  if (vBottomMask > 0.0) {
    int mask = int(vBottomMask);
    for (int i = 0; i < MIXTURE_MAX_STATE_BITS; ++i) {
      if ((mask >> i & 1) == 1) {
        vec4 stateColor = texture(iconsTexture, vMixtureStateCoords[i]);
        texColor = mix(texColor, stateColor, stateColor.a);
      }
    }
  }

  // 2b. 原始纹理混合
  texColor = mix(texColor, originalColor, originalColor.a);

  // ==========================================
  // 2c. topMask 状态混合 (同 2a)
  // ==========================================
  if (vTopMask > 0.0) {
    int mask = int(vTopMask);
    for (int i = 0; i < MIXTURE_MAX_STATE_BITS; ++i) {
      if ((mask >> i & 1) == 1) {
        vec4 stateColor = texture(iconsTexture, vMixtureStateCoords[i]);
        texColor = mix(texColor, stateColor, stateColor.a);
      }
    }
  }

  // 3. 颜色与 Alpha 计算
  vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
  float a = texColor.a * layer.opacity * vColor.a;

  // alphaCutoff discard: 让 GPU 尽早结束当前像素流,提升 Early-Z 效率
  if (a < icon.alphaCutoff) {
    discard;
  }

  fragColor = vec4(color, a);
  DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,_E=`
layout(std140) uniform mixtureUniforms {
  vec2 mixtureIconTranslate;
  float mixtureIconScale;
  float mixtureIconGap;
} mixture;
`,vE={name:`mixture`,vs:_E,fs:_E,uniformTypes:{mixtureIconTranslate:`vec2<f32>`,mixtureIconScale:`f32`,mixtureIconGap:`f32`},defaultUniforms:{mixtureIconTranslate:[0,0],mixtureIconScale:1,mixtureIconGap:1}},yE=class extends Vx{static layerName=`MixtureIconLayer`;static defaultProps={...Vx.defaultProps,getBottomMask:{type:`accessor`,value:0},getTopMask:{type:`accessor`,value:0},iconScale:.54,iconTranslate:[0,0],maxStateBits:8};initializeState(){super.initializeState(),this.getAttributeManager().addInstanced({instanceBottomMask:{size:1,accessor:`getBottomMask`,defaultValue:0},instanceTopMask:{size:1,accessor:`getTopMask`,defaultValue:0}})}getShaders(){let e=super.getShaders();return{...e,fs:gE,modules:[...e.modules,vE],defines:{...e.defines,MIXTURE_MAX_STATE_BITS:Math.max(1,this.props.maxStateBits??8)},inject:{...e.inject,"vs:#decl":`
in float instanceBottomMask;
in float instanceTopMask;
out vec2 vMixtureTextureCoords;
out vec2 vMixtureUV;
out vec2 vMixtureStateCoords[MIXTURE_MAX_STATE_BITS];
// per-instance 掩码传递给 fragment shader (flat: 禁止插值)
flat out float vBottomMask;
flat out float vTopMask;
`,"vs:#main-end":`
// === MixtureIconLayer: 传递 per-instance 掩码 ===
vBottomMask = instanceBottomMask;
vTopMask = instanceTopMask;

// === MixtureIconLayer: 计算缩放/平移后的原始纹理 UV 与各状态纹理 UV ===

// 1. 基础 quadUV ([0, 1] 区间,0 = 左上,1 = 右下)
vec2 quadUV = (positions.xy + 1.0) / 2.0;

// 2. 应用 iconScale: 以图标中心 (0.5, 0.5) 为原点缩放
//    iconScale < 1: 图标缩小,只显示中心区域
//    iconScale > 1: 图标放大,只看到中心 1/iconScale 范围
//    边界处理: max 防止 0 除
vec2 mixtureUV = (quadUV - 0.5) / max(mixture.mixtureIconScale, 0.0001) + 0.5;

// 3. 应用 iconTranslate: 以图标中心偏移 (绝对像素 → UV 空间)
//    iconSize 是 atlas 像素单位,instanceScale 来自 IconLayer vertex shader 主流程
//    X: 正向 = 屏幕右移 → UV 减小(采样左侧)
//    Y: deck.gl IconLayer 末尾 pixelOffset.y *= -1.0 翻转,UV 同步翻转
vec2 translateInUV = mixture.mixtureIconTranslate / (iconSize * instanceScale);
translateInUV.y = -translateInUV.y;
mixtureUV -= translateInUV;

// 4. 写入 vMixtureTextureCoords (原始纹理 UV)
vMixtureTextureCoords = mix(
  instanceIconFrames.xy,
  instanceIconFrames.xy + iconSize,
  mixtureUV
) / icon.iconsTextureDim;

// 4a. 输出 sprite-local UV,供 fragment shader 做越界判断
//     iconScale < 1 时 mixtureUV 会超出 [0, 1],若直接采样将读到 atlas 中相邻精灵
vMixtureUV = mixtureUV;

// 5. 计算每个状态纹理在当前 fragment 位置的 UV
//    状态 i 位于首行第 (i+1) 列:X 偏移 = (i+1) * (iconSize.x + mixtureIconGap),Y = 0
//    状态纹理不参与缩放/平移,使用与 quad 相同的 quadUV
for (int i = 0; i < MIXTURE_MAX_STATE_BITS; ++i) {
  float x = float(i + 1) * (iconSize.x + mixture.mixtureIconGap);
  vec2 stateRawCoord = vec2(x, 0.0);
  vMixtureStateCoords[i] = mix(
    stateRawCoord,
    stateRawCoord + iconSize,
    quadUV
  ) / icon.iconsTextureDim;
}
`}}}draw(e){let{iconScale:t=1,iconTranslate:n=[0,0]}=this.props,r=this.state.model;r&&r.shaderInputs.setProps({mixture:{mixtureIconScale:t,mixtureIconTranslate:n,mixtureIconGap:1}}),super.draw(e)}},bE=[0,0],xE=e=>e.isOverlay?2:0,SE=class extends Qb{static layerName=`GenshinMarkerLayer`;constructor(e){super(e)}#e(e){let[t=0,n=0]=e.offset;return new nS({id:`GenshinMarkerLayer-Scatterplot`,data:e.data,stroked:!0,getPosition:({pos:e})=>[e[0]+t,e[1]+n],getFillColor:[255,200,0,255],getLineColor:[0,0,0,255],getLineWidth:1,lineWidthMaxPixels:1,getRadius:16,radiusMinPixels:4,radiusMaxPixels:16,pickable:!0,updateTriggers:{getPosition:e.offset}})}#t(e){let[t=0,n=0]=e.offset;return new yE({pickable:!0,getBottomMask:e.getBottomMask??1,getTopMask:e.getTopMask??xE,maxStateBits:e.maxStateBits,id:`GenshinMarkerLayer-MixtureIcon`,data:e.data,iconAtlas:e.iconAtlas,iconMapping:e.iconMapping,getPosition:({pos:e})=>[e[0]+t,e[1]+n],getIcon:({icon:e})=>e,getSize:40,updateTriggers:{getPosition:e.offset,getBottomMask:e.updateTriggers?.getBottomMask,getTopMask:e.updateTriggers?.getTopMask}})}renderLayers(){let{data:e,iconAtlas:t,iconMapping:n,positionOffset:r=bE,getBottomMask:i,getTopMask:a,maxStateBits:o,updateTriggers:s}=this.props;return[t?null:this.#e({data:e,offset:r}),t?this.#t({data:e,iconAtlas:t,iconMapping:n,offset:r,getBottomMask:i,getTopMask:a,maxStateBits:o,updateTriggers:s}):null]}},CE=(e,t,n)=>{if(!n)return;let r=[...e.props.layers??[]];r[t]=null,e.setProps({layers:r})},wE=(e,t,n)=>{let r=[...e.props.layers??[]],i=r.findIndex(e=>!e||Array.isArray(e)?!1:e.id===n.id);i>-1&&(r[i]=null),r[t]=n,e.setProps({layers:r})},TE=(e,t)=>new Promise(n=>{let r=()=>{if(e.isInitialized){n();return}let i=requestIdleCallback(r);t?.onSchedulerUpdate?.(i)},i=requestIdleCallback(r);t?.onSchedulerUpdate?.(i)}),EE=l({__name:`marker-layer`,props:{deck:{},data:{},positionOffset:{},iconAtlas:{},iconMapping:{},index:{},getBottomMask:{type:[Number,Function]},getTopMask:{type:[Number,Function]},updateTriggers:{}},emits:[`click`,`hover`,`drag`,`dragEnd`,`dragStart`],setup(e,{emit:t}){let n=e,r=t;return o(()=>{let e=null,{stop:t}=k(()=>{let t=new SE({data:n.data,positionOffset:n.positionOffset,iconAtlas:n.iconAtlas,iconMapping:n.iconMapping,getBottomMask:n.getBottomMask,getTopMask:n.getTopMask,maxStateBits:Pe.length,updateTriggers:n.updateTriggers??{},onClick:e=>{!e.layer||!e.object||r(`click`,e.object)},onHover:e=>{!e.layer||!e.object||r(`hover`,e.object)},onDrag:e=>{!e.layer||!e.object||r(`drag`,e.object)},onDragEnd:e=>{!e.layer||!e.object||r(`dragEnd`,e.object)},onDragStart:e=>{!e.layer||!e.object||r(`dragStart`,e.object)}});wE(n.deck,n.index,t),e=t});s(()=>{t(),e&&CE(n.deck,n.index,e)})}),(e,t)=>(i(),C(b))}}),DE=e=>1-(1-e)**4,OE=l({__name:`scroll-zoom-controller`,props:{target:{},deck:{}},setup(e){let t=e,n=(e,t,n)=>{let r=2**n,i=e.x-e.w/2,a=e.y-e.h/2;return{x:t.x+i/r,y:t.y+a/r}};return a(()=>[t.deck,t.target],async()=>{let{deck:e,target:r}=t,i=Tn(r,`wheel`),a=null,o=!1,s=null;v(()=>{a&&=(cancelIdleCallback(a),null),s&&=(s.unsubscribe(),null),o=!0}),await TE(e,{onSchedulerUpdate:e=>{a=e}}),!o&&(s=i.subscribe(r=>{let i=e.getLiveViewState();if(!i)return;let{target:a}=t,{x:o,y:s,deltaY:c}=r,{clientWidth:l,clientHeight:u}=a,{target:[d,f]=[0,0],zoomX:p=0,minZoomX:m=0,maxZoomX:h=0}=i,g=p,_=Math.min(Math.max(g-c*.005,m),h),{x:v,y}=n({x:o,y:s,h:u,w:l},{x:d,y:f},g),b=2**(g-_),x=v-(v-d)*b,S=y-(y-f)*b,C=new rv({transitionProps:[`target`,`zoomX`,`zoomY`],around:[o,s],makeViewport:e=>new tx({...e,width:e.width??l,height:e.height??u})});e.setProps({initialViewState:{...i,zoomX:_,zoomY:_,target:[x,S],transitionDuration:500,transitionEasing:DE,transitionInterpolator:C}})}))},{immediate:!0}),(e,t)=>(i(),C(b))}}),kE=`https://resource.example.com`,AE=13,jE=-3,ME=0,NE=256,PE=e=>{let{size:{0:t,1:n},tilesOffset:{0:r,1:i}}=e;return{xmin:r,xmax:t+r,ymin:i,ymax:n+i}},FE=e=>{let t=Math.ceil(e);return t<jE&&(t=jE),t>ME&&(t=ME),t},IE=e=>NE*2**-e,LE=(e,t)=>{let n=IE(t),r=Math.floor(e.xmin/n),i=Math.ceil(e.xmax/n),a=Math.floor(e.ymin/n),o=Math.ceil(e.ymax/n),s=r*n,c=i*n,l=a*n,u=o*n,d=[];for(let e=r;e<=i;e++){let t=e*n;d.push({sourcePosition:[t,l],targetPosition:[t,u]})}for(let e=a;e<=o;e++){let t=e*n;d.push({sourcePosition:[s,t],targetPosition:[c,t]})}return d},RE=(e,t)=>{let n=IE(t),r=Math.floor(e.xmin/n),i=Math.ceil(e.xmax/n)-1,a=Math.floor(e.ymin/n),o=Math.ceil(e.ymax/n)-1,s=[];for(let e=r;e<=i;e++)for(let r=a;r<=o;r++)s.push({position:[(e+.5)*n,(r+.5)*n],text:`${e},${r},${t}`});return s},zE=e=>{if(!e.settings?.center)return[0,0];let[t,n]=e.settings.center,[r,i]=e.center;return[t+r,n+i]},BE=(e,t)=>{let{x:n,y:r,z:i}=t;return`${kE}/tiles_${e.pathId}/${i+AE}/${n}_${r}.png`},VE=(e,t)=>{let{xmax:n,xmin:r,ymax:i,ymin:a}=PE(e);return new fE({id:`TileLayer(${e.pathId})`,data:null,visible:t,minZoom:-3,maxZoom:0,tileSize:256,extent:[r,a,n,i],refinementStrategy:`best-available`,maxCacheByteSize:2**53-1,maxCacheSize:512*2**20,maxRequests:64,getTileData:async({index:t,signal:n})=>{if(n?.aborted)return null;try{let r=BE(e,t),i=await Je.assets.getTile({pathId:e.pathId,x:t.x,y:t.y,z:t.z,zMapping:AE,extension:e.extension},n);return{byteLength:i.width*i.height*4,image:i,url:r}}catch(e){if(n?.aborted)throw e;return null}},renderSubLayers:({data:e,tile:t})=>{if(!e||typeof e==`string`)return null;let{0:{0:n,1:r},1:{0:i,1:a}}=t.boundingBox;return new _x({id:`BitmapLayer(${e.url})`,image:e.image,bounds:[n,a,i,r]})}})},HE=class extends Qb{static layerName=`GenshinTileLayer`;constructor(e,t=!0,n){let{xmax:r,xmin:i,ymax:a,ymin:o}=PE(e);super({id:`GenshinTileLayer`,data:e,visible:t,debug:n,bounds:[[i,o],[r,a]],initViewState:{target:zE(e),zoom:e.settings?.zoom??-1}})}#e=null;shouldUpdateState(e){return this.props.debug?e.changeFlags.somethingChanged:e.changeFlags.propsOrDataChanged}renderLayers(){let{data:e,visible:t,debug:n}=this.props,r=PE(e),i=!n||n.showTile?[VE(e,t)]:[];if(n){let e=FE(this.context.viewport.zoom);if(n.showLayout&&i.push(new Jx({id:`debug-tile-layout`,visible:t,data:LE(r,e),getSourcePosition:e=>e.sourcePosition,getTargetPosition:e=>e.targetPosition,getColor:[0,255,255],widthUnits:`pixels`,widthScale:1,widthMinPixels:1})),n.showBounds){let e=[[r.xmin,r.ymin],[r.xmax,r.ymin],[r.xmax,r.ymax],[r.xmin,r.ymax]];i.push(new SC({id:`debug-tile-bounds`,visible:t,data:[e],getPolygon:e=>e,stroked:!0,filled:!1,getLineColor:[255,0,255],getLineWidth:1,lineWidthUnits:`pixels`,lineWidthMinPixels:1}))}n.showTileIndex&&i.push(new xw({id:`debug-tile-info`,visible:t,data:RE(r,e),getPosition:e=>e.position,getText:e=>e.text,getColor:[255,255,255],getSize:12,sizeUnits:`pixels`,getTextAnchor:`middle`,getAlignmentBaseline:`center`}))}return i}finalizeState(e){super.finalizeState(e),this.#e&&cancelIdleCallback(this.#e)}async applyDeck(e){let{bounds:t,initViewState:n,debug:r}=this.props;await TE(e,{onSchedulerUpdate:e=>{this.#e=e}}),e.setProps({controller:{dragMode:`pan`,dragRotate:!1,inertia:500,touchRotate:!1,maxBounds:r?void 0:t,scrollZoom:!1}}),e.getLiveViewState()?.target||(console.log(`init viewState`),e.setProps({initialViewState:{target:n.target,zoom:0}})),await new Promise(e=>setTimeout(e,500)),e.setProps({initialViewState:{...n,maxZoom:2,minZoom:-4,transitionEasing:DE,transitionDuration:500}})}},UE=l({__name:`tile-layer`,props:{deck:{},data:{},index:{},visible:{type:Boolean,default:!0},debug:{}},setup(e){let t=e;return o(()=>{let e=null,{stop:n}=k(()=>{let{deck:n,data:r,index:i,visible:a,debug:o}=t,s=new HE(r,a,o);wE(n,i,s),s.applyDeck(n),e=s});s(()=>{n(),e&&CE(t.deck,t.index,e)})}),(e,t)=>(i(),C(b))}}),WE=l({__name:`index`,props:T({tileset:{}},{areaCode:{required:!1,default:``},areaCodeModifiers:{}}),emits:[`update:areaCode`],setup(e){let t=j(()=>re(()=>import(`./item-filter-BDlBasvK.js`),__vite__mapDeps([2,1,3,4,5,6,7,8,9,10,11]))),n=j(()=>re(()=>import(`./item-locale-DSl8d0Py.js`),__vite__mapDeps([12,4,1,5,6,13,14]))),r=j(()=>re(()=>import(`./item-setting-Cr9U7E3A.js`),__vite__mapDeps([15,4,1,6,7,9,16]))),a=d(e,`areaCode`),o=Re(),s=Ye(),c=O(()=>o.result.toSorted((e,t)=>e.pos[1]-t.pos[1]));return(o,l)=>(i(),C(hE,null,{default:h(({deck:i,canvas:o})=>[y(OE,{deck:i,target:o},null,8,[`deck`,`target`]),y(_(_r),null,{filter:h(()=>[y(_(t),{"area-code":a.value,"onUpdate:areaCode":l[0]||=e=>a.value=e},null,8,[`area-code`])]),locale:h(()=>[y(_(n))]),setting:h(()=>[y(_(r))]),_:1}),y(UE,{deck:i,index:0,data:e.tileset,debug:{showTile:!1,showBounds:!0,showLayout:!0,showTileIndex:!0}},null,8,[`deck`,`data`]),y(EE,{deck:i,index:1,data:_(c),"position-offset":e.tileset.center,"icon-atlas":_(s).textureUrl,"icon-mapping":_(s).mapping},null,8,[`deck`,`data`,`position-offset`,`icon-atlas`,`icon-mapping`])]),_:1}))}}),GE=Me({area:je().optional().meta({description:`地区代码`})}),KE=()=>{let e=et(),t=$e();if(e.path!==`/map`)throw Error(`This useRouteQuery only works on /map route`);return O(()=>{let n=GE.parse(e.query);return new Proxy(n,{get(e,t){return Reflect.get(e,t)},set(e,n,r){let i={...e,[n]:r},a=GE.parse(i);return t.replace({query:a}),!0}})})},qE=l({__name:`index`,setup(e){let t=KE(),n=Ae(),r=O(()=>t.value.area?n.tiles.get(t.value.area):n.tiles.get(`A:MD:MENGDE`)),a=()=>{n.loadConfig()};return(e,o)=>_(n).loading?(i(),C(_(Tr),{key:0})):_(n).error?(i(),C(_(xr),{key:1,message:_(n).error.message,onRetry:a},null,8,[`message`])):_(r)?(i(),C(WE,{key:2,"area-code":_(t).area,"onUpdate:areaCode":o[0]||=e=>_(t).area=e,tileset:_(r)},null,8,[`area-code`,`tileset`])):S(``,!0)}});export{qE as default};