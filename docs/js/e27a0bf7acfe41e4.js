/* @kuscamara/code-sample */
var xt=Object.defineProperty;var h=(i,t)=>xt(i,"name",{value:t,configurable:!0});window.JSCompiler_renameProperty=function(i,t){return i};var Et=/(url\()([^)]*)(\))/g,Ot=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,W,b;function N(i,t){if(i&&Ot.test(i)||i==="//")return i;if(W===void 0){W=!1;try{let n=new URL("b","http://a");n.pathname="c%20d",W=n.href==="http://a/c%20d"}catch(n){}}if(t||(t=document.baseURI||window.location.href),W)try{return new URL(i,t).href}catch(n){return i}return b||(b=document.implementation.createHTMLDocument("temp"),b.base=b.createElement("base"),b.head.appendChild(b.base),b.anchor=b.createElement("a"),b.body.appendChild(b.anchor)),b.base.href=t,b.anchor.href=i,b.anchor.href||i}h(N,"resolveUrl");function k(i,t){return i.replace(Et,function(n,l,o,e){return l+"'"+N(o.replace(/["']/g,""),t)+"'"+e})}h(k,"resolveCss");function A(i){return i.substring(0,i.lastIndexOf("/")+1)}h(A,"pathFromUrl");var Nt=!window.ShadyDOM||!window.ShadyDOM.inUse,Jr=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss),Wr=!window.customElements.polyfillWrapFlushCallback,Te=Nt&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{let i=new CSSStyleSheet;i.replaceSync("");let t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[i],t.shadowRoot.adoptedStyleSheets[0]===i}catch(i){return!1}})(),Se=window.Polymer&&window.Polymer.rootPath||A(document.baseURI||window.location.href);var j=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;var Gr=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;var F=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;var xe=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;var Ee=window.Polymer&&window.Polymer.legacyOptimizations||!1;var Oe=window.Polymer&&window.Polymer.legacyWarnings||!1;var Ne=window.Polymer&&window.Polymer.syncInitialRender||!1;var G=window.Polymer&&window.Polymer.legacyUndefined||!1;var ve=window.Polymer&&window.Polymer.orderedComputed||!1;var se=window.Polymer&&window.Polymer.removeNestedTemplates||!1;var Ae=window.Polymer&&window.Polymer.fastDomIf||!1;var Xr=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;var Kr=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;var Me=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;var vt=0;function De(){}h(De,"MixinFunction");De.prototype.__mixinApplications;De.prototype.__mixinSet;var T=h(function(i){let t=i.__mixinApplications;t||(t=new WeakMap,i.__mixinApplications=t);let n=vt++;function l(o){let e=o.__mixinSet;if(e&&e[n])return o;let r=t,s=r.get(o);if(!s){s=i(o),r.set(o,s);let a=Object.create(s.__mixinSet||e||null);a[n]=!0,s.__mixinSet=a}return s}return h(l,"dedupingMixin"),l},"dedupingMixin");var oe={},ke={};function Le(i,t){oe[i]=ke[i.toLowerCase()]=t}h(Le,"setModule");function Re(i){return oe[i]||ke[i.toLowerCase()]}h(Re,"findModule");function At(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}h(At,"styleOutsideTemplateCheck");var ne=class ne extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,n){if(t){let l=Re(t);return l&&n?l.querySelector(n):l}return null}attributeChangedCallback(t,n,l,o){n!==l&&this.register()}get assetpath(){if(!this.__assetpath){let t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,n=N(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=A(n)}return this.__assetpath}register(t){if(t=t||this.id,t){if(F&&Re(t)!==void 0)throw Le(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Le(t,this),At(this)}}};h(ne,"DomModule");var E=ne;E.prototype.modules=oe;customElements.define("dom-module",E);var Mt="link[rel=import][type~=css]",Dt="include",je="shady-unscoped";function Ie(i){return E.import(i)}h(Ie,"importModule");function Fe(i){let t=i.body?i.body:i,n=k(t.textContent,i.baseURI),l=document.createElement("style");return l.textContent=n,l}h(Fe,"styleForImport");function Lt(i){let t=i.trim().split(/\s+/),n=[];for(let l=0;l<t.length;l++)n.push(...Rt(t[l]));return n}h(Lt,"stylesFromModules");function Rt(i){let t=Ie(i);if(!t)return console.warn("Could not find style data in module named",i),[];if(t._styles===void 0){let n=[];n.push(...Be(t));let l=t.querySelector("template");l&&n.push(...ae(l,t.assetpath)),t._styles=n}return t._styles}h(Rt,"stylesFromModule");function ae(i,t){if(!i._styles){let n=[],l=i.content.querySelectorAll("style");for(let o=0;o<l.length;o++){let e=l[o],r=e.getAttribute(Dt);r&&n.push(...Lt(r).filter(function(s,a,c){return c.indexOf(s)===a})),t&&(e.textContent=k(e.textContent,t)),n.push(e)}i._styles=n}return i._styles}h(ae,"stylesFromTemplate");function ze(i){let t=Ie(i);return t?Be(t):[]}h(ze,"stylesFromModuleImports");function Be(i){let t=[],n=i.querySelectorAll(Mt);for(let l=0;l<n.length;l++){let o=n[l];if(o.import){let e=o.import,r=o.hasAttribute(je);if(r&&!e._unscopedStyle){let s=Fe(e);s.setAttribute(je,""),e._unscopedStyle=s}else e._style||(e._style=Fe(e));t.push(r?e._unscopedStyle:e._style)}}return t}h(Be,"_stylesFromModuleImports");var y=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;function X(i){return i.indexOf(".")>=0}h(X,"isPath");function O(i){let t=i.indexOf(".");return t===-1?i:i.slice(0,t)}h(O,"root");function He(i,t){return i.indexOf(t+".")===0}h(He,"isAncestor");function I(i,t){return t.indexOf(i+".")===0}h(I,"isDescendant");function z(i,t,n){return t+n.slice(i.length)}h(z,"translate");function M(i){if(Array.isArray(i)){let t=[];for(let n=0;n<i.length;n++){let l=i[n].toString().split(".");for(let o=0;o<l.length;o++)t.push(l[o])}return t.join(".")}else return i}h(M,"normalize");function Ue(i){return Array.isArray(i)?M(i).split("."):i.toString().split(".")}h(Ue,"split");function P(i,t,n){let l=i,o=Ue(t);for(let e=0;e<o.length;e++){if(!l)return;let r=o[e];l=l[r]}return n&&(n.path=o.join(".")),l}h(P,"get");function le(i,t,n){let l=i,o=Ue(t),e=o[o.length-1];if(o.length>1){for(let r=0;r<o.length-1;r++){let s=o[r];if(l=l[s],!l)return}l[e]=n}else l[t]=n;return o.join(".")}h(le,"set");var K={},kt=/-[a-z]/g,jt=/([A-Z])/g;function Z(i){return K[i]||(K[i]=i.indexOf("-")<0?i:i.replace(kt,t=>t[1].toUpperCase()))}h(Z,"dashToCamelCase");function D(i){return K[i]||(K[i]=i.replace(jt,"-$1").toLowerCase())}h(D,"camelToDashCase");var Ft=0,$e=0,L=[],It=0,ce=!1,Ve=document.createTextNode("");new window.MutationObserver(zt).observe(Ve,{characterData:!0});function zt(){ce=!1;let i=L.length;for(let t=0;t<i;t++){let n=L[t];if(n)try{n()}catch(l){setTimeout(()=>{throw l})}}L.splice(0,i),$e+=i}h(zt,"microtaskFlush");var Q={run(i){return ce||(ce=!0,Ve.textContent=It++),L.push(i),Ft++},cancel(i){let t=i-$e;if(t>=0){if(!L[t])throw new Error("invalid async handle: "+i);L[t]=null}}};var Bt=Q,ee=T(i=>{let n=class n extends i{static createProperties(o){let e=this.prototype;for(let r in o)r in e||e._createPropertyAccessor(r)}static attributeNameForProperty(o){return o.toLowerCase()}static typeForProperty(o){}_createPropertyAccessor(o,e){this._addPropertyToAttributeMap(o),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[o]||(this.__dataHasAccessor[o]=!0,this._definePropertyAccessor(o,e))}_addPropertyToAttributeMap(o){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[o];return e||(e=this.constructor.attributeNameForProperty(o),this.__dataAttributes[e]=o),e}_definePropertyAccessor(o,e){Object.defineProperty(this,o,{get(){return this.__data[o]},set:e?function(){}:function(r){this._setPendingProperty(o,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let o in this.__dataHasAccessor)this.hasOwnProperty(o)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[o]=this[o],delete this[o])}_initializeInstanceProperties(o){Object.assign(this,o)}_setProperty(o,e){this._setPendingProperty(o,e)&&this._invalidateProperties()}_getProperty(o){return this.__data[o]}_setPendingProperty(o,e,r){let s=this.__data[o],a=this._shouldPropertyChange(o,e,s);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(o in this.__dataOld)&&(this.__dataOld[o]=s),this.__data[o]=e,this.__dataPending[o]=e),a}_isPropertyPending(o){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(o))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Bt.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;let o=this.__data,e=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(o,e,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(o,e,r)),this.__dataCounter--}_shouldPropertiesChange(o,e,r){return!!e}_propertiesChanged(o,e,r){}_shouldPropertyChange(o,e,r){return r!==e&&(r===r||e===e)}attributeChangedCallback(o,e,r,s){e!==r&&this._attributeToProperty(o,r),super.attributeChangedCallback&&super.attributeChangedCallback(o,e,r,s)}_attributeToProperty(o,e,r){if(!this.__serializing){let s=this.__dataAttributes,a=s&&s[o]||o;this[a]=this._deserializeValue(e,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(o,e,r){this.__serializing=!0,r=arguments.length<3?this[o]:r,this._valueToNodeAttribute(this,r,e||this.constructor.attributeNameForProperty(o)),this.__serializing=!1}_valueToNodeAttribute(o,e,r){let s=this._serializeValue(e);(r==="class"||r==="name"||r==="slot")&&(o=y(o)),s===void 0?o.removeAttribute(r):o.setAttribute(r,s===""&&window.trustedTypes?window.trustedTypes.emptyScript:s)}_serializeValue(o){switch(typeof o){case"boolean":return o?"":void 0;default:return o!=null?o.toString():void 0}}_deserializeValue(o,e){switch(e){case Boolean:return o!==null;case Number:return Number(o);default:return o}}};h(n,"PropertiesChanged");let t=n;return t});var Ye={},te=HTMLElement.prototype;for(;te;){let i=Object.getOwnPropertyNames(te);for(let t=0;t<i.length;t++)Ye[i[t]]=!0;te=Object.getPrototypeOf(te)}var Ht=(()=>window.trustedTypes?i=>trustedTypes.isHTML(i)||trustedTypes.isScript(i)||trustedTypes.isScriptURL(i):()=>!1)();function Ut(i,t){if(!Ye[t]){let n=i[t];n!==void 0&&(i.__data?i._setPendingProperty(t,n):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[t]=n))}}h(Ut,"saveAccessorValue");var qe=T(i=>{let t=ee(i),l=class l extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let r=0;r<e.length;r++)this.prototype._createPropertyAccessor(Z(e[r]))}static attributeNameForProperty(e){return D(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let r in e)this._setProperty(r,e[r])}_ensureAttribute(e,r){let s=this;s.hasAttribute(e)||this._valueToNodeAttribute(s,r,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e){if(Ht(e))return e;try{return JSON.stringify(e)}catch(r){return""}}default:return super._serializeValue(e)}}_deserializeValue(e,r){let s;switch(r){case Object:try{s=JSON.parse(e)}catch(a){s=e}break;case Array:try{s=JSON.parse(e)}catch(a){s=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:s=isNaN(e)?String(e):Number(e),s=new Date(s);break;default:s=super._deserializeValue(e,r);break}return s}_definePropertyAccessor(e,r){Ut(this,e),super._definePropertyAccessor(e,r)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}};h(l,"PropertyAccessors");let n=l;return n});var $t={"dom-if":!0,"dom-repeat":!0},Je=!1,We=!1;function Vt(){if(!Je){Je=!0;let i=document.createElement("textarea");i.placeholder="a",We=i.placeholder===i.textContent}return We}h(Vt,"hasPlaceholderBug");function Yt(i){Vt()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}h(Yt,"fixPlaceholder");var qt=(()=>{let i=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,n,l)=>{let o=n.getAttribute(l);if(i&&l.startsWith("on-")){t.setAttribute(l,i.createScript(o,l));return}t.setAttribute(l,o)}})();function Jt(i){let t=i.getAttribute("is");if(t&&$t[t]){let n=i;for(n.removeAttribute("is"),i=n.ownerDocument.createElement(t),n.parentNode.replaceChild(i,n),i.appendChild(n);n.attributes.length;){let{name:l}=n.attributes[0];qt(i,n,l),n.removeAttribute(l)}}return i}h(Jt,"wrapTemplateExtension");function Ge(i,t){let n=t.parentInfo&&Ge(i,t.parentInfo);if(n){for(let l=n.firstChild,o=0;l;l=l.nextSibling)if(t.parentIndex===o++)return l}else return i}h(Ge,"findTemplateNode");function Wt(i,t,n,l){l.id&&(t[l.id]=n)}h(Wt,"applyIdToMap");function Gt(i,t,n){if(n.events&&n.events.length)for(let l=0,o=n.events,e;l<o.length&&(e=o[l]);l++)i._addMethodEventListenerToNode(t,e.name,e.value,i)}h(Gt,"applyEventListener");function Xt(i,t,n,l){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=l)}h(Xt,"applyTemplateInfo");function Kt(i,t,n){return i=i._methodHost||i,h(function(o){i[n]?i[n](o,o.detail):console.warn("listener method `"+n+"` not defined")},"handler")}h(Kt,"createNodeEventHandler");var Xe=T(i=>{let n=class n extends i{static _parseTemplate(o,e){if(!o._templateInfo){let r=o._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!e,r.stripWhiteSpace=e&&e.stripWhiteSpace||o.hasAttribute&&o.hasAttribute("strip-whitespace"),this._parseTemplateContent(o,r,{parent:null})}return o._templateInfo}static _parseTemplateContent(o,e,r){return this._parseTemplateNode(o.content,e,r)}static _parseTemplateNode(o,e,r){let s=!1,a=o;return a.localName=="template"&&!a.hasAttribute("preserve-content")?s=this._parseTemplateNestedTemplate(a,e,r)||s:a.localName==="slot"&&(e.hasInsertionPoint=!0),Yt(a),a.firstChild&&this._parseTemplateChildNodes(a,e,r),a.hasAttributes&&a.hasAttributes()&&(s=this._parseTemplateNodeAttributes(a,e,r)||s),s||r.noted}static _parseTemplateChildNodes(o,e,r){if(!(o.localName==="script"||o.localName==="style"))for(let s=o.firstChild,a=0,c;s;s=c){if(s.localName=="template"&&(s=Jt(s)),c=s.nextSibling,s.nodeType===Node.TEXT_NODE){let p=c;for(;p&&p.nodeType===Node.TEXT_NODE;)s.textContent+=p.textContent,c=p.nextSibling,o.removeChild(p),p=c;if(e.stripWhiteSpace&&!s.textContent.trim()){o.removeChild(s);continue}}let d={parentIndex:a,parentInfo:r};this._parseTemplateNode(s,e,d)&&(d.infoIndex=e.nodeInfoList.push(d)-1),s.parentNode&&a++}}static _parseTemplateNestedTemplate(o,e,r){let s=o,a=this._parseTemplate(s,e);return(a.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(o,e,r){let s=!1,a=Array.from(o.attributes);for(let c=a.length-1,d;d=a[c];c--)s=this._parseTemplateNodeAttribute(o,e,r,d.name,d.value)||s;return s}static _parseTemplateNodeAttribute(o,e,r,s,a){return s.slice(0,3)==="on-"?(o.removeAttribute(s),r.events=r.events||[],r.events.push({name:s.slice(3),value:a}),!0):s==="id"?(r.id=a,!0):!1}static _contentForTemplate(o){let e=o._templateInfo;return e&&e.content||o.content}_stampTemplate(o,e){o&&!o.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(o),e=e||this.constructor._parseTemplate(o);let r=e.nodeInfoList,s=e.content||o.content,a=document.importNode(s,!0);a.__noInsertionPoint=!e.hasInsertionPoint;let c=a.nodeList=new Array(r.length);a.$={};for(let d=0,p=r.length,f;d<p&&(f=r[d]);d++){let u=c[d]=Ge(a,f);Wt(this,a.$,u,f),Xt(this,u,f,e),Gt(this,u,f)}return a=a,a}_addMethodEventListenerToNode(o,e,r,s){s=s||o;let a=Kt(s,e,r);return this._addEventListenerToNode(o,e,a),a}_addEventListenerToNode(o,e,r){o.addEventListener(e,r)}_removeEventListenerFromNode(o,e,r){o.removeEventListener(e,r)}};h(n,"TemplateStamp");let t=n;return t});var $=0,V=[],_={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},st="__computeInfo",Zt=/[A-Z]/;function de(i,t,n){let l=i[t];if(!l)l=i[t]={};else if(!i.hasOwnProperty(t)&&(l=i[t]=Object.create(i[t]),n))for(let o in l){let e=l[o],r=l[o]=Array(e.length);for(let s=0;s<e.length;s++)r[s]=e[s]}return l}h(de,"ensureOwnEffectMap");function U(i,t,n,l,o,e){if(t){let r=!1,s=$++;for(let a in n){let c=o?O(a):a,d=t[c];if(d)for(let p=0,f=d.length,u;p<f&&(u=d[p]);p++)(!u.info||u.info.lastRun!==s)&&(!o||ue(a,u.trigger))&&(u.info&&(u.info.lastRun=s),u.fn(i,a,n,l,u.info,o,e),r=!0)}return r}return!1}h(U,"runEffects");function Qt(i,t,n,l,o,e,r,s){let a=!1,c=r?O(l):l,d=t[c];if(d)for(let p=0,f=d.length,u;p<f&&(u=d[p]);p++)(!u.info||u.info.lastRun!==n)&&(!r||ue(l,u.trigger))&&(u.info&&(u.info.lastRun=n),u.fn(i,l,o,e,u.info,r,s),a=!0);return a}h(Qt,"runEffectsForProperty");function ue(i,t){if(t){let n=t.name;return n==i||!!(t.structured&&He(n,i))||!!(t.wildcard&&I(n,i))}else return!0}h(ue,"pathMatchesTrigger");function Ke(i,t,n,l,o){let e=typeof o.method=="string"?i[o.method]:o.method,r=o.property;e?e.call(i,i.__data[r],l[r]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}h(Ke,"runObserverEffect");function er(i,t,n,l,o){let e=i[_.NOTIFY],r,s=$++;for(let c in t)t[c]&&(e&&Qt(i,e,s,c,n,l,o)||o&&tr(i,c,n))&&(r=!0);let a;r&&(a=i.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}h(er,"runNotifyEffects");function tr(i,t,n){let l=O(t);if(l!==t){let o=D(l)+"-changed";return ot(i,o,n[t],t),!0}return!1}h(tr,"notifyPath");function ot(i,t,n,l){let o={value:n,queueProperty:!0};l&&(o.path=l),y(i).dispatchEvent(new CustomEvent(t,{detail:o}))}h(ot,"dispatchNotifyEvent");function rr(i,t,n,l,o,e){let s=(e?O(t):t)!=t?t:null,a=s?P(i,s):i.__data[t];s&&a===void 0&&(a=n[t]),ot(i,o.eventName,a,s)}h(rr,"runNotifyEffect");function ir(i,t,n,l,o){let e,r=i.detail,s=r&&r.path;s?(l=z(n,l,s),e=r&&r.value):e=i.currentTarget[n],e=o?!e:e,(!t[_.READ_ONLY]||!t[_.READ_ONLY][l])&&t._setPendingPropertyOrPath(l,e,!0,!!s)&&(!r||!r.queueProperty)&&t._invalidateProperties()}h(ir,"handleNotification");function sr(i,t,n,l,o){let e=i.__data[t];j&&(e=j(e,o.attrName,"attribute",i)),i._propertyToAttribute(t,o.attrName,e)}h(sr,"runReflectEffect");function or(i,t,n,l){let o=i[_.COMPUTE];if(o)if(ve){$++;let e=ar(i),r=[];for(let a in t)Ze(a,o,r,e,l);let s;for(;s=r.shift();)nt(i,"",t,n,s)&&Ze(s.methodInfo,o,r,e,l);Object.assign(n,i.__dataOld),Object.assign(t,i.__dataPending),i.__dataPending=null}else{let e=t;for(;U(i,o,e,n,l);)Object.assign(n,i.__dataOld),Object.assign(t,i.__dataPending),e=i.__dataPending,i.__dataPending=null}}h(or,"runComputedEffects");var nr=h((i,t,n)=>{let l=0,o=t.length-1,e=-1;for(;l<=o;){let r=l+o>>1,s=n.get(t[r].methodInfo)-n.get(i.methodInfo);if(s<0)l=r+1;else if(s>0)o=r-1;else{e=r;break}}e<0&&(e=o+1),t.splice(e,0,i)},"insertEffect"),Ze=h((i,t,n,l,o)=>{let e=o?O(i):i,r=t[e];if(r)for(let s=0;s<r.length;s++){let a=r[s];a.info.lastRun!==$&&(!o||ue(i,a.trigger))&&(a.info.lastRun=$,nr(a.info,n,l))}},"enqueueEffectsFor");function ar(i){let t=i.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=i[_.COMPUTE],{counts:l,ready:o,total:e}=lr(i),r;for(;r=o.shift();){t.set(r,t.size);let s=n[r];s&&s.forEach(a=>{let c=a.info.methodInfo;--e,--l[c]===0&&o.push(c)})}e!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=t}return t}h(ar,"getComputedOrder");function lr(i){let t=i[st],n={},l=i[_.COMPUTE],o=[],e=0;for(let r in t){let s=t[r];e+=n[r]=s.args.filter(a=>!a.literal).length+(s.dynamicFn?1:0)}for(let r in l)t[r]||o.push(r);return{counts:n,ready:o,total:e}}h(lr,"dependencyCounts");function nt(i,t,n,l,o){let e=fe(i,t,n,l,o);if(e===V)return!1;let r=o.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[r]?i._setPendingProperty(r,e,!0):(i[r]=e,!1)}h(nt,"runComputedEffect");function cr(i,t,n){let l=i.__dataLinkedPaths;if(l){let o;for(let e in l){let r=l[e];I(e,t)?(o=z(e,r,t),i._setPendingPropertyOrPath(o,n,!0,!0)):I(r,t)&&(o=z(r,e,t),i._setPendingPropertyOrPath(o,n,!0,!0))}}}h(cr,"computeLinkedPaths");function he(i,t,n,l,o,e,r){n.bindings=n.bindings||[];let s={kind:l,target:o,parts:e,literal:r,isCompound:e.length!==1};if(n.bindings.push(s),ur(s)){let{event:c,negate:d}=s.parts[0];s.listenerEvent=c||D(o)+"-changed",s.listenerNegate=d}let a=t.nodeInfoList.length;for(let c=0;c<s.parts.length;c++){let d=s.parts[c];d.compoundIndex=c,dr(i,t,s,d,a)}}h(he,"addBinding");function dr(i,t,n,l,o){if(!l.literal)if(n.kind==="attribute"&&n.target[0]==="-")console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let e=l.dependencies,r={index:o,binding:n,part:l,evaluator:i};for(let s=0;s<e.length;s++){let a=e[s];typeof a=="string"&&(a=lt(a),a.wildcard=!0),i._addTemplatePropertyEffect(t,a.rootProperty,{fn:hr,info:r,trigger:a})}}}h(dr,"addEffectForBindingPart");function hr(i,t,n,l,o,e,r){let s=r[o.index],a=o.binding,c=o.part;if(e&&c.source&&t.length>c.source.length&&a.kind=="property"&&!a.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[a.target]){let d=n[t];t=z(c.source,a.target,t),s._setPendingPropertyOrPath(t,d,!1,!0)&&i._enqueueClient(s)}else{let d=o.evaluator._evaluateBinding(i,c,t,n,l,e);d!==V&&pr(i,s,a,c,d)}}h(hr,"runBindingEffect");function pr(i,t,n,l,o){if(o=fr(t,o,n,l),j&&(o=j(o,n.target,n.kind,t)),n.kind=="attribute")i._valueToNodeAttribute(t,o,n.target);else{let e=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[e]?(!t[_.READ_ONLY]||!t[_.READ_ONLY][e])&&t._setPendingProperty(e,o)&&i._enqueueClient(t):i._setUnmanagedPropertyToNode(t,e,o)}}h(pr,"applyBindingValue");function fr(i,t,n,l){if(n.isCompound){let o=i.__dataCompoundStorage[n.target];o[l.compoundIndex]=t,t=o.join("")}return n.kind!=="attribute"&&(n.target==="textContent"||n.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(t=t==null?"":t),t}h(fr,"computeBindingValue");function ur(i){return!!i.target&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}h(ur,"shouldAddListener");function _r(i,t){let{nodeList:n,nodeInfoList:l}=t;if(l.length)for(let o=0;o<l.length;o++){let e=l[o],r=n[o],s=e.bindings;if(s)for(let a=0;a<s.length;a++){let c=s[a];mr(r,c),yr(r,i,c)}r.__dataHost=i}}h(_r,"setupBindings");function mr(i,t){if(t.isCompound){let n=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),l=t.parts,o=new Array(l.length);for(let r=0;r<l.length;r++)o[r]=l[r].literal;let e=t.target;n[e]=o,t.literal&&t.kind=="property"&&(e==="className"&&(i=y(i)),i[e]=t.literal)}}h(mr,"setupCompoundStorage");function yr(i,t,n){if(n.listenerEvent){let l=n.parts[0];i.addEventListener(n.listenerEvent,function(o){ir(o,t,n.target,l.source,l.negate)})}}h(yr,"addNotifyListener");function Qe(i,t,n,l,o,e){e=t.static||e&&(typeof e!="object"||e[t.methodName]);let r={methodName:t.methodName,args:t.args,methodInfo:o,dynamicFn:e};for(let s=0,a;s<t.args.length&&(a=t.args[s]);s++)a.literal||i._addPropertyEffect(a.rootProperty,n,{fn:l,info:r,trigger:a});return e&&i._addPropertyEffect(t.methodName,n,{fn:l,info:r}),r}h(Qe,"createMethodEffect");function fe(i,t,n,l,o){let e=i._methodHost||i,r=e[o.methodName];if(r){let s=i._marshalArgs(o.args,t,n);return s===V?V:r.apply(e,s)}else o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}h(fe,"runMethodEffect");var gr=[],at="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Pr="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",wr="(?:'(?:[^'\\\\]|\\\\.)*')",Cr='(?:"(?:[^"\\\\]|\\\\.)*")',br="(?:"+wr+"|"+Cr+")",et="(?:("+at+"|"+Pr+"|"+br+")\\s*)",Tr="(?:"+et+"(?:,\\s*"+et+")*)",Sr="(?:\\(\\s*(?:"+Tr+"?)\\)\\s*)",xr="("+at+"\\s*"+Sr+"?)",Er="(\\[\\[|{{)\\s*",Or="(?:]]|}})",Nr="(?:(!)\\s*)?",vr=Er+Nr+xr+Or,tt=new RegExp(vr,"g");function rt(i){let t="";for(let n=0;n<i.length;n++){let l=i[n].literal;t+=l||""}return t}h(rt,"literalFromParts");function pe(i){let t=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let l={methodName:t[1],static:!0,args:gr};if(t[2].trim()){let o=t[2].replace(/\\,/g,"&comma;").split(",");return Ar(o,l)}else return l}return null}h(pe,"parseMethod");function Ar(i,t){return t.args=i.map(function(n){let l=lt(n);return l.literal||(t.static=!1),l},this),t}h(Ar,"parseArgs");function lt(i){let t=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},l=t[0];switch(l==="-"&&(l=t[1]),l>="0"&&l<="9"&&(l="#"),l){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=O(t),n.structured=X(t),n.structured&&(n.wildcard=t.slice(-2)==".*",n.wildcard&&(n.name=t.slice(0,-2)))),n}h(lt,"parseArg");function it(i,t,n){let l=P(i,n);return l===void 0&&(l=t[n]),l}h(it,"getArgValue");function ct(i,t,n,l){let o={indexSplices:l};G&&!i._overrideLegacyUndefined&&(t.splices=o),i.notifyPath(n+".splices",o),i.notifyPath(n+".length",t.length),G&&!i._overrideLegacyUndefined&&(o.indexSplices=[])}h(ct,"notifySplices");function B(i,t,n,l,o,e){ct(i,t,n,[{index:l,addedCount:o,removed:e,object:t,type:"splice"}])}h(B,"notifySplice");function Mr(i){return i[0].toUpperCase()+i.substring(1)}h(Mr,"upper");var dt=T(i=>{let t=Xe(qe(i)),l=class l extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return _}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(H.length){let e=H[H.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let r=this[_.READ_ONLY];for(let s in e)(!r||!r[s])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[s]=this.__dataPending[s]=e[s])}_addPropertyEffect(e,r,s){this._createPropertyAccessor(e,r==_.READ_ONLY);let a=de(this,r,!0)[e];a||(a=this[r][e]=[]),a.push(s)}_removePropertyEffect(e,r,s){let a=de(this,r,!0)[e],c=a.indexOf(s);c>=0&&a.splice(c,1)}_hasPropertyEffect(e,r){let s=this[r];return!!(s&&s[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,_.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,_.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,_.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,_.COMPUTE)}_setPendingPropertyOrPath(e,r,s,a){if(a||O(Array.isArray(e)?e[0]:e)!==e){if(!a){let c=P(this,e);if(e=le(this,e,r),!e||!super._shouldPropertyChange(e,r,c))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,r,s))return cr(this,e,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,r,s);this[e]=r}return!1}_setUnmanagedPropertyToNode(e,r,s){(s!==e[r]||typeof s=="object")&&(r==="className"&&(e=y(e)),e[r]=s)}_setPendingProperty(e,r,s){let a=this.__dataHasPaths&&X(e),c=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,r,c[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),a?this.__dataTemp[e]=r:this.__data[e]=r,this.__dataPending[e]=r,(a||this[_.NOTIFY]&&this[_.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=s),!0):!1}_setProperty(e,r){this._setPendingProperty(e,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let r=0;r<e.length;r++){let s=e[r];s.__dataEnabled?s.__dataPending&&s._flushProperties():s._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,r){for(let s in e)(r||!this[_.READ_ONLY]||!this[_.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,e[s],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,r,s){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let c;or(this,r,s,a),c=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,s,a),this._flushClients(),U(this,this[_.REFLECT],r,s,a),U(this,this[_.OBSERVE],r,s,a),c&&er(this,c,r,s,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,r,s){this[_.PROPAGATE]&&U(this,this[_.PROPAGATE],e,r,s),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,r,s)}_runEffectsForTemplate(e,r,s,a){let c=h((d,p)=>{U(this,e.propertyEffects,d,s,p,e.nodeList);for(let f=e.firstChild;f;f=f.nextSibling)this._runEffectsForTemplate(f,d,s,p)},"baseRunEffects");e.runEffects?e.runEffects(c,r,a):c(r,a)}linkPaths(e,r){e=M(e),r=M(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=r}unlinkPaths(e){e=M(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,r){let s={path:""},a=P(this,e,s);ct(this,a,s.path,r)}get(e,r){return P(r||this,e)}set(e,r,s){s?le(s,e,r):(!this[_.READ_ONLY]||!this[_.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,r,!0)&&this._invalidateProperties()}push(e,...r){let s={path:""},a=P(this,e,s),c=a.length,d=a.push(...r);return r.length&&B(this,a,s.path,c,r.length,[]),d}pop(e){let r={path:""},s=P(this,e,r),a=!!s.length,c=s.pop();return a&&B(this,s,r.path,s.length,0,[c]),c}splice(e,r,s,...a){let c={path:""},d=P(this,e,c);r<0?r=d.length-Math.floor(-r):r&&(r=Math.floor(r));let p;return arguments.length===2?p=d.splice(r):p=d.splice(r,s,...a),(a.length||p.length)&&B(this,d,c.path,r,a.length,p),p}shift(e){let r={path:""},s=P(this,e,r),a=!!s.length,c=s.shift();return a&&B(this,s,r.path,0,0,[c]),c}unshift(e,...r){let s={path:""},a=P(this,e,s),c=a.unshift(...r);return r.length&&B(this,a,s.path,0,r.length,[]),c}notifyPath(e,r){let s;if(arguments.length==1){let a={path:""};r=P(this,e,a),s=a.path}else Array.isArray(e)?s=M(e):s=e;this._setPendingPropertyOrPath(s,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,r){this._addPropertyEffect(e,_.READ_ONLY),r&&(this["_set"+Mr(e)]=function(s){this._setProperty(e,s)})}_createPropertyObserver(e,r,s){let a={property:e,method:r,dynamicFn:!!s};this._addPropertyEffect(e,_.OBSERVE,{fn:Ke,info:a,trigger:{name:e}}),s&&this._addPropertyEffect(r,_.OBSERVE,{fn:Ke,info:a,trigger:{name:r}})}_createMethodObserver(e,r){let s=pe(e);if(!s)throw new Error("Malformed observer expression '"+e+"'");Qe(this,s,_.OBSERVE,fe,null,r)}_createNotifyingProperty(e){this._addPropertyEffect(e,_.NOTIFY,{fn:rr,info:{eventName:D(e)+"-changed",property:e}})}_createReflectedProperty(e){let r=this.constructor.attributeNameForProperty(e);r[0]==="-"?console.warn("Property "+e+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,_.REFLECT,{fn:sr,info:{attrName:r}})}_createComputedProperty(e,r,s){let a=pe(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");let c=Qe(this,a,_.COMPUTE,nt,e,s);de(this,st)[e]=c}_marshalArgs(e,r,s){let a=this.__data,c=[];for(let d=0,p=e.length;d<p;d++){let{name:f,structured:u,wildcard:g,value:m,literal:S}=e[d];if(!S)if(g){let x=I(f,r),w=it(a,s,x?r:f);m={path:x?r:f,value:w,base:x?P(a,f):w}}else m=u?it(a,s,f):a[f];if(G&&!this._overrideLegacyUndefined&&m===void 0&&e.length>1)return V;c[d]=m}return c}static addPropertyEffect(e,r,s){this.prototype._addPropertyEffect(e,r,s)}static createPropertyObserver(e,r,s){this.prototype._createPropertyObserver(e,r,s)}static createMethodObserver(e,r){this.prototype._createMethodObserver(e,r)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,r){this.prototype._createReadOnlyProperty(e,r)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,r,s){this.prototype._createComputedProperty(e,r,s)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,r){let s=this.constructor._parseTemplate(e),a=this.__preBoundTemplateInfo==s;if(!a)for(let c in s.propertyEffects)this._createPropertyAccessor(c);if(r)if(s=Object.create(s),s.wasPreBound=a,!this.__templateInfo)this.__templateInfo=s;else{let c=e._parentTemplateInfo||this.__templateInfo,d=c.lastChild;s.parent=c,c.lastChild=s,s.previousSibling=d,d?d.nextSibling=s:c.firstChild=s}else this.__preBoundTemplateInfo=s;return s}static _addTemplatePropertyEffect(e,r,s){let a=e.hostProps=e.hostProps||{};a[r]=!0;let c=e.propertyEffects=e.propertyEffects||{};(c[r]=c[r]||[]).push(s)}_stampTemplate(e,r){r=r||this._bindTemplate(e,!0),H.push(this);let s=super._stampTemplate(e,r);if(H.pop(),r.nodeList=s.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let c=s.firstChild;c;c=c.nextSibling)a.push(c)}return s.templateInfo=r,_r(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),s}_removeBoundDom(e){let r=e.templateInfo,{previousSibling:s,nextSibling:a,parent:c}=r;s?s.nextSibling=a:c&&(c.firstChild=a),a?a.previousSibling=s:c&&(c.lastChild=s),r.nextSibling=r.previousSibling=null;let d=r.childNodes;for(let p=0;p<d.length;p++){let f=d[p];y(y(f).parentNode).removeChild(f)}}static _parseTemplateNode(e,r,s){let a=t._parseTemplateNode.call(this,e,r,s);if(e.nodeType===Node.TEXT_NODE){let c=this._parseBindings(e.textContent,r);c&&(e.textContent=rt(c)||" ",he(this,r,s,"text","textContent",c),a=!0)}return a}static _parseTemplateNodeAttribute(e,r,s,a,c){let d=this._parseBindings(c,r);if(d){let p=a,f="property";Zt.test(a)?f="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),f="attribute");let u=rt(d);return u&&f=="attribute"&&(a=="class"&&e.hasAttribute("class")&&(u+=" "+e.getAttribute(a)),e.setAttribute(a,u)),f=="attribute"&&p=="disable-upgrade$"&&e.setAttribute(a,""),e.localName==="input"&&p==="value"&&e.setAttribute(p,""),e.removeAttribute(p),f==="property"&&(a=Z(a)),he(this,r,s,f,a,d,u),!0}else return t._parseTemplateNodeAttribute.call(this,e,r,s,a,c)}static _parseTemplateNestedTemplate(e,r,s){let a=t._parseTemplateNestedTemplate.call(this,e,r,s),c=e.parentNode,d=s.templateInfo,p=c.localName==="dom-if",f=c.localName==="dom-repeat";se&&(p||f)&&(c.removeChild(e),s=s.parentInfo,s.templateInfo=d,s.noted=!0,a=!1);let u=d.hostProps;if(Ae&&p)u&&(r.hostProps=Object.assign(r.hostProps||{},u),se||(s.parentInfo.noted=!0));else{let g="{";for(let m in u){let S=[{mode:g,source:m,dependencies:[m],hostProp:!0}];he(this,r,s,"property","_host_"+m,S)}}return a}static _parseBindings(e,r){let s=[],a=0,c;for(;(c=tt.exec(e))!==null;){c.index>a&&s.push({literal:e.slice(a,c.index)});let d=c[1][0],p=!!c[2],f=c[3].trim(),u=!1,g="",m=-1;d=="{"&&(m=f.indexOf("::"))>0&&(g=f.substring(m+2),f=f.substring(0,m),u=!0);let S=pe(f),x=[];if(S){let{args:w,methodName:C}=S;for(let ie=0;ie<w.length;ie++){let be=w[ie];be.literal||x.push(be)}let v=r.dynamicFns;(v&&v[C]||S.static)&&(x.push(C),S.dynamicFn=!0)}else x.push(f);s.push({source:f,mode:d,negate:p,customEvent:u,signature:S,dependencies:x,event:g}),a=tt.lastIndex}if(a&&a<e.length){let d=e.substring(a);d&&s.push({literal:d})}return s.length?s:null}static _evaluateBinding(e,r,s,a,c,d){let p;return r.signature?p=fe(e,s,a,c,r.signature):s!=r.source?p=P(e,r.source):d&&X(s)?p=P(e,s):p=e.__data[s],r.negate&&(p=!p),p}};h(l,"PropertyEffects");let n=l;return n}),H=[];var Dr=0;function ht(){Dr++}h(ht,"incrementInstanceCount");var Lr=[];function pt(i){Lr.push(i)}h(pt,"register");function Rr(i){let t={};for(let n in i){let l=i[n];t[n]=typeof l=="function"?{type:l}:l}return t}h(Rr,"normalizeProperties");var ft=T(i=>{let t=ee(i);function n(r){let s=Object.getPrototypeOf(r);return s.prototype instanceof o?s:null}h(n,"superPropertiesClass");function l(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let s=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){let a=r.properties;a&&(s=Rr(a))}r.__ownProperties=s}return r.__ownProperties}h(l,"ownProperties");let e=class e extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){pt(this.prototype);let s=this._properties;this.__observedAttributes=s?Object.keys(s).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){let s=n(this);s&&s.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let s=l(this);s&&this.createProperties(s)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){let s=n(this);this.__properties=Object.assign({},s&&s._properties,l(this))}return this.__properties}static typeForProperty(s){let a=this._properties[s];return a&&a.type}_initializeProperties(){ht(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}};h(e,"PropertiesMixin");let o=e;return o});var _t="3.5.1",ut=window.ShadyCSS&&window.ShadyCSS.cssBuild,mt=T(i=>{let t=ft(dt(i));function n(c){if(!c.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",c))){c.__propertyDefaults=null;let d=c._properties;for(let p in d){let f=d[p];"value"in f&&(c.__propertyDefaults=c.__propertyDefaults||{},c.__propertyDefaults[p]=f)}}return c.__propertyDefaults}h(n,"propertyDefaults");function l(c){return c.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",c))||(c.__ownObservers=c.hasOwnProperty(JSCompiler_renameProperty("observers",c))?c.observers:null),c.__ownObservers}h(l,"ownObservers");function o(c,d,p,f){p.computed&&(p.readOnly=!0),p.computed&&(c._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):c._createComputedProperty(d,p.computed,f)),p.readOnly&&!c._hasReadOnlyEffect(d)?c._createReadOnlyProperty(d,!p.computed):p.readOnly===!1&&c._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),p.reflectToAttribute&&!c._hasReflectEffect(d)?c._createReflectedProperty(d):p.reflectToAttribute===!1&&c._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),p.notify&&!c._hasNotifyEffect(d)?c._createNotifyingProperty(d):p.notify===!1&&c._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),p.observer&&c._createPropertyObserver(d,p.observer,f[p.observer]),c._addPropertyToAttributeMap(d)}h(o,"createPropertyFromConfig");function e(c,d,p,f){if(!ut){let u=d.content.querySelectorAll("style"),g=ae(d),m=ze(p),S=d.content.firstElementChild;for(let w=0;w<m.length;w++){let C=m[w];C.textContent=c._processStyleText(C.textContent,f),d.content.insertBefore(C,S)}let x=0;for(let w=0;w<g.length;w++){let C=g[w],v=u[x];v!==C?(C=C.cloneNode(!0),v.parentNode.insertBefore(C,v)):x++,C.textContent=c._processStyleText(C.textContent,f)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,p),Me&&ut&&Te){let u=d.content.querySelectorAll("style");if(u){let g="";Array.from(u).forEach(m=>{g+=m.textContent,m.parentNode.removeChild(m)}),c._styleSheet=new CSSStyleSheet,c._styleSheet.replaceSync(g)}}}h(e,"processElementStyles");function r(c){let d=null;if(c&&(!F||xe)&&(d=E.import(c,"template"),F&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${c}`);return d}h(r,"getTemplateFromDomModule");let a=class a extends t{static get polymerElementVersion(){return _t}static _finalizeClass(){t._finalizeClass.call(this);let d=l(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):Ee||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let p in d)o(this.prototype,p,d[p],d)}static createObservers(d,p){let f=this.prototype;for(let u=0;u<d.length;u++)f._createMethodObserver(d[u],p)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&r(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){let d=this.importMeta;if(d)this._importPath=A(d.url);else{let p=E.import(this.is);this._importPath=p&&p.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Se,this.importPath=this.constructor.importPath;let d=n(this.constructor);if(d)for(let p in d){let f=d[p];if(this._canApplyPropertyDefault(p)){let u=typeof f.value=="function"?f.value.call(this):f.value;this._hasAccessor(p)?this._setPendingProperty(p,u,!0):this[p]=u}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,p){return k(d,p)}static _finalizeTemplate(d){let p=this.prototype._template;if(p&&!p.__polymerFinalized){p.__polymerFinalized=!0;let f=this.importPath,u=f?N(f):"";e(this,p,d,u),this.prototype._bindTemplate(p)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){let p=y(this);if(p.attachShadow)return d?(p.shadowRoot||(p.attachShadow({mode:"open",shadyUpgradeFragment:d}),p.shadowRoot.appendChild(d),this.constructor._styleSheet&&(p.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Ne&&window.ShadyDOM&&window.ShadyDOM.flushInitial(p.shadowRoot),p.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,p){return!p&&this.importPath&&(p=N(this.importPath)),N(d,p)}static _parseTemplateContent(d,p,f){return p.dynamicFns=p.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,p,f)}static _addTemplatePropertyEffect(d,p,f){return Oe&&!(p in this._properties)&&!(f.info.part.signature&&f.info.part.signature.static)&&!f.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${p}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,p,f)}};h(a,"PolymerElement");let s=a;return s});var yt=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:i=>i}),_e=class _e{constructor(t,n){Pt(t,n);let l=n.reduce((o,e,r)=>o+gt(e)+t[r+1],t[0]);this.value=l.toString()}toString(){return this.value}};h(_e,"LiteralString");var re=_e;function gt(i){if(i instanceof re)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}h(gt,"literalValue");function kr(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof re)return gt(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}h(kr,"htmlValue");var Y=h(function(t,...n){Pt(t,n);let l=document.createElement("template"),o=n.reduce((e,r,s)=>e+kr(r)+t[s+1],t[0]);return yt&&(o=yt.createHTML(o)),l.innerHTML=o,l},"html"),Pt=h((i,t)=>{if(!Array.isArray(i)||!Array.isArray(i.raw)||t.length!==i.length-1)throw new TypeError("Invalid call to the html template tag")},"assertValidTemplateStringParameters");var wt=mt(HTMLElement);function q(i,t,n){return{index:i,removed:t,addedCount:n}}h(q,"newSplice");var Ct=0,bt=1,me=2,ye=3;function jr(i,t,n,l,o,e){let r=e-o+1,s=n-t+1,a=new Array(r);for(let c=0;c<r;c++)a[c]=new Array(s),a[c][0]=c;for(let c=0;c<s;c++)a[0][c]=c;for(let c=1;c<r;c++)for(let d=1;d<s;d++)if(ge(i[t+d-1],l[o+c-1]))a[c][d]=a[c-1][d-1];else{let p=a[c-1][d]+1,f=a[c][d-1]+1;a[c][d]=p<f?p:f}return a}h(jr,"calcEditDistances");function Fr(i){let t=i.length-1,n=i[0].length-1,l=i[t][n],o=[];for(;t>0||n>0;){if(t==0){o.push(me),n--;continue}if(n==0){o.push(ye),t--;continue}let e=i[t-1][n-1],r=i[t-1][n],s=i[t][n-1],a;r<s?a=r<e?r:e:a=s<e?s:e,a==e?(e==l?o.push(Ct):(o.push(bt),l=e),t--,n--):a==r?(o.push(ye),t--,l=r):(o.push(me),n--,l=s)}return o.reverse(),o}h(Fr,"spliceOperationsFromEditDistances");function Ir(i,t,n,l,o,e){let r=0,s=0,a,c=Math.min(n-t,e-o);if(t==0&&o==0&&(r=zr(i,l,c)),n==i.length&&e==l.length&&(s=Br(i,l,c-r)),t+=r,o+=r,n-=s,e-=s,n-t==0&&e-o==0)return[];if(t==n){for(a=q(t,[],0);o<e;)a.removed.push(l[o++]);return[a]}else if(o==e)return[q(t,[],n-t)];let d=Fr(jr(i,t,n,l,o,e));a=void 0;let p=[],f=t,u=o;for(let g=0;g<d.length;g++)switch(d[g]){case Ct:a&&(p.push(a),a=void 0),f++,u++;break;case bt:a||(a=q(f,[],0)),a.addedCount++,f++,a.removed.push(l[u]),u++;break;case me:a||(a=q(f,[],0)),a.addedCount++,f++;break;case ye:a||(a=q(f,[],0)),a.removed.push(l[u]),u++;break}return a&&p.push(a),p}h(Ir,"calcSplices");function zr(i,t,n){for(let l=0;l<n;l++)if(!ge(i[l],t[l]))return l;return n}h(zr,"sharedPrefix");function Br(i,t,n){let l=i.length,o=t.length,e=0;for(;e<n&&ge(i[--l],t[--o]);)e++;return e}h(Br,"sharedSuffix");function Tt(i,t){return Ir(i,0,i.length,t,0,t.length)}h(Tt,"calculateSplices");function ge(i,t){return i===t}h(ge,"equals");function R(i){return i.localName==="slot"}h(R,"isSlot");var J,Pe=(J=class{static getFlattenedNodes(t){let n=y(t);return R(t)?(t=t,n.assignedNodes({flatten:!0})):Array.from(n.childNodes).map(l=>R(l)?(l=l,y(l).assignedNodes({flatten:!0})):[l]).reduce((l,o)=>l.concat(o),[])}constructor(t,n){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=n,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){R(this._target)?this._listenSlots([this._target]):y(this._target).children&&(this._listenSlots(y(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){R(this._target)?this._unlistenSlots([this._target]):y(this._target).children&&(this._unlistenSlots(y(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Q.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let n=0;n<t.length;n++){let l=t[n];l.addedNodes&&this._listenSlots(l.addedNodes),l.removedNodes&&this._unlistenSlots(l.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},n=this.constructor.getFlattenedNodes(this._target),l=Tt(n,this._effectiveNodes);for(let e=0,r;e<l.length&&(r=l[e]);e++)for(let s=0,a;s<r.removed.length&&(a=r.removed[s]);s++)t.removedNodes.push(a);for(let e=0,r;e<l.length&&(r=l[e]);e++)for(let s=r.index;s<r.index+r.addedCount;s++)t.addedNodes.push(n[s]);this._effectiveNodes=n;let o=!1;return(t.addedNodes.length||t.removedNodes.length)&&(o=!0,this.callback.call(this._target,t)),o}_listenSlots(t){for(let n=0;n<t.length;n++){let l=t[n];R(l)&&l.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let n=0;n<t.length;n++){let l=t[n];R(l)&&l.removeEventListener("slotchange",this._boundSchedule)}}},h(J,"FlattenedNodesObserver"),J);var St=Y`
<style>
  /*

  Atom One Dark by Daniel Gamage
  Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

  base:    #282c34
  mono-1:  #abb2bf
  mono-2:  #818896
  mono-3:  #5c6370
  hue-1:   #56b6c2
  hue-2:   #61aeee
  hue-3:   #c678dd
  hue-4:   #98c379
  hue-5:   #e06c75
  hue-5-2: #be5046
  hue-6:   #d19a66
  hue-6-2: #e6c07b

  */

  .hljs {
    display: block;
    overflow-x: auto;
    color: var(--code-sample-color, #abb2bf);
    background: var(--code-sample-background, #282c34);
  }

  .hljs-comment,
  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #c678dd;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst,
  .hljs-tag {
    color: #e06c75;
  }

  .hljs-literal {
    color: #56b6c2;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #98c379;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }

  .hljs-params {
    color: #e6c07b;
  }
</style>`;var Ce=class Ce extends wt{static get template(){return Y`
    ${this.constructor.theme||St}
    <style include="code-sample-theme" id="baseStyle">
    :host {
      display: block;
    }

    :host([hidden]),
    [hidden] {
      display: none;
    }

    pre {
      margin: 0;
      @apply --code-sample-pre;
    }

    pre, code {
      font-family: var(--code-sample-font-family, Operator Mono, Inconsolata, Roboto Mono, monaco, consolas, monospace);
      font-size: var(--code-sample-font-size, 0.875rem);
    }

    .hljs {
      padding: 0 1.25rem;
      line-height: var(--code-sample-line-height, 1.3);
      @apply --code-sample-hljs;
    }

    .demo:not(:empty) {
      padding: var(--code-sample-demo-padding, 0 0 1.25rem);
      @apply --code-sample-demo-not-empty;
    }

    .demo {
      @apply --code-sample-demo;
    }

    #code-container {
      position: relative;
      @apply --code-sample-code-container;
    }

    #code-container:hover {
      @apply --code-sample-code-container-hover;
    }

    #code-container:hover > button {
      @apply --code-sample-code-container-hover-button;
    }

    button {
      background: var(--code-sample-copy-button-bg-color, #e0e0e0);
      border: none;
      cursor: pointer;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      text-transform: uppercase;
      @apply --code-sample-copy-clipboard-button;
    }
    </style>

    <div id="demo" class="demo"></div>
    <slot id="content"></slot>

    <div id="code-container">
      <button
        type="button"
        hidden="[[!copyClipboardButton]]"
        id="copyButton"
        title="Copy to clipboard"
        on-click="_copyToClipboard">Copy</button>
      <pre id="code"></pre>
    </div>
    `}static get properties(){return{copyClipboardButton:{type:Boolean,value:!1},theme:{type:String,observer:"_themeChanged"},render:{type:Boolean,value:!1},type:{type:String}}}_themeChanged(t){if(t&&this._themeCanBeChanged()){let n=this.shadowRoot.querySelector("style:not(#baseStyle)");this.shadowRoot.replaceChild(document.importNode(t.content,!0),n)}}_themeCanBeChanged(){if(window.ShadyCSS){console.error("<code-sample>:","Theme changing is not supported in Shady DOM.");return}if(this.theme.tagName!=="TEMPLATE"){console.error("<code-sample>:","theme must be a template");return}return!0}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.querySelector("template")?this._observer=new Pe(this.$.content,()=>this._updateContent()):this.childNodes.length&&console.error("<code-sample>:","content must be provided inside a <template> tag")})}disconnectedCallback(){this._observer&&(this._observer.disconnect(),this._observer=null)}_updateContent(){this._code&&this._code.parentNode.removeChild(this._code),this._demo&&(this.$.demo.innerHTML="");let t=this._getCodeTemplate();this.render&&(this._demo=this.$.demo.appendChild(document.importNode(t.content,!0))),this._highlight(t.innerHTML)}_getCodeTemplate(){let t=Pe.getFlattenedNodes(this.$.content);return[].filter.call(t,n=>n.nodeType===Node.ELEMENT_NODE)[0]}_highlight(t){this._code=document.createElement("code"),this.type&&this._code.classList.add(this.type),this._code.innerHTML=this._entitize(this._cleanIndentation(t)),this.$.code.appendChild(this._code),HighlightJS.highlightElement(this._code)}_cleanIndentation(t){let n=t.match(/\s*\n[\t\s]*/);return t.replace(new RegExp(n,"g"),`
`)}_entitize(t){return String(t).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/=""/g,"").replace(/=&gt;/g,"=>").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}_copyToClipboard(t){let n=t.target,l=this._textAreaWithClonedContent();l.select();try{document.execCommand("copy",!1),n.textContent="Done"}catch(o){console.error(o),n.textContent="Error"}l.remove(),setTimeout(()=>{n.textContent="Copy"},1e3)}_textAreaWithClonedContent(){let t=document.createElement("textarea");return document.body.appendChild(t),t.value=this._cleanIndentation(this._getCodeTemplate().innerHTML),t}};h(Ce,"CodeSample");var we=Ce;customElements.define("code-sample",we);
/*! Bundled license information:

@polymer/polymer/lib/utils/boot.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/resolve-url.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/settings.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/mixin.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/elements/dom-module.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/style-gather.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/wrap.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/path.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/case-map.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/async.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/properties-changed.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/property-accessors.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/template-stamp.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/property-effects.js:
  (**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   *)

@polymer/polymer/lib/utils/telemetry.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/properties-mixin.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/mixins/element-mixin.js:
  (**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   *)

@polymer/polymer/lib/utils/html-tag.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/polymer-element.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/array-splice.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)

@polymer/polymer/lib/utils/flattened-nodes-observer.js:
  (**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  *)
*/