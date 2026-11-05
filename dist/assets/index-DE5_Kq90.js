(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const ef="modulepreload",tf=function(n){return"/"+n},tl={},nf=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){let s=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");a=s(t.map(c=>{if(c=tf(c),c in tl)return;tl[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":ef,d||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((f,g)=>{h.addEventListener("load",f),h.addEventListener("error",()=>g(Error(`Unable to preload CSS for ${c}`)))})}))}function r(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return a.then(s=>{for(const o of s||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};function af(n={}){const{immediate:e=!1,onNeedReload:t,onNeedRefresh:i,onOfflineReady:a,onRegistered:r,onRegisteredSW:s,onRegisterError:o}=n;let l,c;const d=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){if(l=await nf(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/sw.js",{scope:"/",type:"classic"})).catch(h=>{o?.(h)}),!l)return;l.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&(t?t():window.location.reload())}),l.addEventListener("installed",h=>{h.isUpdate||a?.()}),l.register({immediate:e}).then(h=>{s?s("/sw.js",h):r?.(h)}).catch(h=>{o?.(h)})}}return c=u(),d}const wo="182",Xn={ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rf=0,il=1,sf=2,cr=1,of=2,_a=3,an=0,Vt=1,di=2,Bi=0,jn=1,nl=2,al=3,rl=4,lf=5,fn=100,cf=101,df=102,uf=103,hf=104,pf=200,ff=201,mf=202,gf=203,ys=204,bs=205,yf=206,bf=207,vf=208,_f=209,xf=210,wf=211,Sf=212,Mf=213,Tf=214,vs=0,_s=1,xs=2,ea=3,ws=4,Ss=5,Ms=6,Ts=7,Lc=0,Ef=1,Rf=2,Ti=0,kc=1,Nc=2,Fc=3,Oc=4,Uc=5,zc=6,Bc=7,Wc=300,Sn=301,ta=302,Es=303,Rs=304,Sr=306,Sa=1e3,Ui=1001,As=1002,Qe=1003,Af=1004,Ua=1005,Dt=1006,Pr=1007,gn=1008,Qt=1009,Hc=1010,Gc=1011,Ma=1012,So=1013,Ri=1014,Si=1015,Hi=1016,Mo=1017,To=1018,Ta=1020,Vc=35902,qc=35899,Kc=1021,$c=1022,pi=1023,Gi=1026,yn=1027,Xc=1028,Eo=1029,ia=1030,Ro=1031,Ao=1033,dr=33776,ur=33777,hr=33778,pr=33779,Cs=35840,Is=35841,Ps=35842,Ds=35843,Ls=36196,ks=37492,Ns=37496,Fs=37488,Os=37489,Us=37490,zs=37491,Bs=37808,Ws=37809,Hs=37810,Gs=37811,Vs=37812,qs=37813,Ks=37814,$s=37815,Xs=37816,js=37817,Ys=37818,Zs=37819,Js=37820,Qs=37821,eo=36492,to=36494,io=36495,no=36283,ao=36284,ro=36285,so=36286,Cf=3200,jc=0,If=1,Ji="",Zt="srgb",na="srgb-linear",gr="linear",Je="srgb",An=7680,sl=519,Pf=512,Df=513,Lf=514,Co=515,kf=516,Nf=517,Io=518,Ff=519,oo=35044,ol="300 es",Mi=2e3,yr=2001;function Yc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Of(){const n=br("canvas");return n.style.display="block",n}const ll={};function vr(...n){const e="THREE."+n.shift();console.log(e,...n)}function Pe(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Ge(...n){const e="THREE."+n.shift();console.error(e,...n)}function Ea(...n){const e=n.join(" ");e in ll||(ll[e]=!0,Pe(...n))}function Uf(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class En{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,lo=180/Math.PI;function nn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function zf(n,e){return(n%e+e)%e}function Dr(n,e,t){return(1-t)*n+t*e}function wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Bf={DEG2RAD:fr};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mn{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],u=i[a+3],h=r[s+0],f=r[s+1],g=r[s+2],b=r[s+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o>=1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||l!==h||c!==f||d!==g){let m=l*h+c*f+d*g+u*b;m<0&&(h=-h,f=-f,g=-g,b=-b,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+h*o,c=c*p+f*o,d=d*p+g*o,u=u*p+b*o}else{l=l*p+h*o,c=c*p+f*o,d=d*p+g*o,u=u*p+b*o;const M=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=M,c*=M,d*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],u=r[s],h=r[s+1],f=r[s+2],g=r[s+3];return e[t]=o*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-o*f,e[t+2]=c*g+d*f+o*h-l*u,e[t+3]=d*g-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),u=o(r/2),h=l(i/2),f=l(a/2),g=l(r/2);switch(s){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(s-a)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(a+s)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(a+s)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(s-a)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+r*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),d=2*(o*t-r*a),u=2*(r*i-s*t);return this.x=t+l*c+s*u-o*d,this.y=i+l*d+o*c-r*u,this.z=a+l*u+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lr.copy(this).projectOnVector(e),this.sub(Lr)}reflect(e){return this.sub(Lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new F,cl=new Mn;class Fe{constructor(e,t,i,a,r,s,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,l,c)}set(e,t,i,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],b=a[0],m=a[3],p=a[6],M=a[1],T=a[4],w=a[7],E=a[2],R=a[5],A=a[8];return r[0]=s*b+o*M+l*E,r[3]=s*m+o*T+l*R,r[6]=s*p+o*w+l*A,r[1]=c*b+d*M+u*E,r[4]=c*m+d*T+u*R,r[7]=c*p+d*w+u*A,r[2]=h*b+f*M+g*E,r[5]=h*m+f*T+g*R,r[8]=h*p+f*w+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*s-o*c,h=o*l-d*r,f=c*r-s*l,g=t*u+i*h+a*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=u*b,e[1]=(a*c-d*i)*b,e[2]=(o*i-a*s)*b,e[3]=h*b,e[4]=(d*t-a*l)*b,e[5]=(a*r-o*t)*b,e[6]=f*b,e[7]=(i*l-c*t)*b,e[8]=(s*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Fe,dl=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){const n={enabled:!0,workingColorSpace:na,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Je&&(a.r=Wi(a.r),a.g=Wi(a.g),a.b=Wi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Je&&(a.r=Yn(a.r),a.g=Yn(a.g),a.b=Yn(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ji?gr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[na]:{primaries:e,whitePoint:i,transfer:gr,toXYZ:dl,fromXYZ:ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:dl,fromXYZ:ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}const qe=Wf();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cn;class Hf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cn===void 0&&(Cn=br("canvas")),Cn.width=e.width,Cn.height=e.height;const a=Cn.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Cn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Wi(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gf=0;class Po{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Nr(a[s].image)):r.push(Nr(a[s]))}else r=Nr(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function Nr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Vf=0;const Fr=new F;class Lt extends En{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Ui,a=Ui,r=Dt,s=gn,o=pi,l=Qt,c=Lt.DEFAULT_ANISOTROPY,d=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=nn(),this.name="",this.source=new Po(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fr).x}get height(){return this.source.getSize(Fr).y}get depth(){return this.source.getSize(Fr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case As:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case As:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Wc;Lt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,a=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,w=(f+1)/2,E=(p+1)/2,R=(d+h)/4,A=(u+b)/4,N=(g+m)/4;return T>w&&T>E?T<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(T),a=R/i,r=A/i):w>E?w<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(w),i=R/a,r=N/a):E<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(E),i=A/r,a=N/r),this.set(i,a,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-b)/M,this.z=(h-d)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qf extends En{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const a={width:e,height:t,depth:i.depth},r=new Lt(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Po(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends qf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zc extends Lt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kf extends Lt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,si):si.fromBufferAttribute(r,s),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Ba.subVectors(this.max,da),In.subVectors(e.a,da),Pn.subVectors(e.b,da),Dn.subVectors(e.c,da),qi.subVectors(Pn,In),Ki.subVectors(Dn,Pn),ln.subVectors(In,Dn);let t=[0,-qi.z,qi.y,0,-Ki.z,Ki.y,0,-ln.z,ln.y,qi.z,0,-qi.x,Ki.z,0,-Ki.x,ln.z,0,-ln.x,-qi.y,qi.x,0,-Ki.y,Ki.x,0,-ln.y,ln.x,0];return!Or(t,In,Pn,Dn,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,In,Pn,Dn,Ba))?!1:(Wa.crossVectors(qi,Ki),t=[Wa.x,Wa.y,Wa.z],Or(t,In,Pn,Dn,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Di=[new F,new F,new F,new F,new F,new F,new F,new F],si=new F,za=new Ca,In=new F,Pn=new F,Dn=new F,qi=new F,Ki=new F,ln=new F,da=new F,Ba=new F,Wa=new F,cn=new F;function Or(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){cn.fromArray(n,r);const o=a.x*Math.abs(cn.x)+a.y*Math.abs(cn.y)+a.z*Math.abs(cn.z),l=e.dot(cn),c=t.dot(cn),d=i.dot(cn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const $f=new Ca,ua=new F,Ur=new F;class Do{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$f.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(ua,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(Ur)),this.expandByPoint(ua.copy(e.center).sub(Ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Li=new F,zr=new F,Ha=new F,$i=new F,Br=new F,Ga=new F,Wr=new F;class Lo{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){zr.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(zr);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ha),o=$i.dot(this.direction),l=-$i.dot(Ha),c=$i.lengthSq(),d=Math.abs(1-s*s);let u,h,f,g;if(d>0)if(u=s*l-o,h=s*o-l,g=r*d,u>=0)if(h>=-g)if(h<=g){const b=1/d;u*=b,h*=b,f=u*(u+s*h+2*o)+h*(s*u+h+2*l)+c}else h=r,u=Math.max(0,-(s*h+o)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(s*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-s*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(s*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=s>0?-r:r,u=Math.max(0,-(s*h+o)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(zr).addScaledVector(Ha,h),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),a=Li.dot(Li)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,a,r){Br.subVectors(t,e),Ga.subVectors(i,e),Wr.crossVectors(Br,Ga);let s=this.direction.dot(Wr),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;$i.subVectors(this.origin,e);const l=o*this.direction.dot(Ga.crossVectors($i,Ga));if(l<0)return null;const c=o*this.direction.dot(Br.cross($i));if(c<0||l+c>s)return null;const d=-o*$i.dot(Wr);return d<0?null:this.at(d/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,a,r,s,o,l,c,d,u,h,f,g,b,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,l,c,d,u,h,f,g,b,m)}set(e,t,i,a,r,s,o,l,c,d,u,h,f,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=a,p[1]=r,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,a=1/Ln.setFromMatrixColumn(e,0).length(),r=1/Ln.setFromMatrixColumn(e,1).length(),s=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=s*d,f=s*u,g=o*d,b=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,g=c*d,b=c*u;t[0]=h+b*o,t[4]=g*o-f,t[8]=s*c,t[1]=s*u,t[5]=s*d,t[9]=-o,t[2]=f*o-g,t[6]=b+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,g=c*d,b=c*u;t[0]=h-b*o,t[4]=-s*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*d,t[9]=b-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*d,f=s*u,g=o*d,b=o*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+b,t[1]=l*u,t[5]=b*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,f=s*c,g=o*l,b=o*c;t[0]=l*d,t[4]=b-h*u,t[8]=g*u+f,t[1]=u,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-b*u}else if(e.order==="XZY"){const h=s*l,f=s*c,g=o*l,b=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+b,t[5]=s*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*d,t[10]=b*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,jf)}lookAt(e,t,i){const a=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Xi.crossVectors(i,jt),Xi.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Xi.crossVectors(i,jt)),Xi.normalize(),Va.crossVectors(jt,Xi),a[0]=Xi.x,a[4]=Va.x,a[8]=jt.x,a[1]=Xi.y,a[5]=Va.y,a[9]=jt.y,a[2]=Xi.z,a[6]=Va.z,a[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],b=i[6],m=i[10],p=i[14],M=i[3],T=i[7],w=i[11],E=i[15],R=a[0],A=a[4],N=a[8],v=a[12],x=a[1],I=a[5],W=a[9],U=a[13],X=a[2],V=a[6],G=a[10],L=a[14],q=a[3],Q=a[7],ie=a[11],ce=a[15];return r[0]=s*R+o*x+l*X+c*q,r[4]=s*A+o*I+l*V+c*Q,r[8]=s*N+o*W+l*G+c*ie,r[12]=s*v+o*U+l*L+c*ce,r[1]=d*R+u*x+h*X+f*q,r[5]=d*A+u*I+h*V+f*Q,r[9]=d*N+u*W+h*G+f*ie,r[13]=d*v+u*U+h*L+f*ce,r[2]=g*R+b*x+m*X+p*q,r[6]=g*A+b*I+m*V+p*Q,r[10]=g*N+b*W+m*G+p*ie,r[14]=g*v+b*U+m*L+p*ce,r[3]=M*R+T*x+w*X+E*q,r[7]=M*A+T*I+w*V+E*Q,r[11]=M*N+T*W+w*G+E*ie,r[15]=M*v+T*U+w*L+E*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15],M=l*f-c*h,T=o*f-c*u,w=o*h-l*u,E=s*f-c*d,R=s*h-l*d,A=s*u-o*d;return t*(b*M-m*T+p*w)-i*(g*M-m*E+p*R)+a*(g*T-b*E+p*A)-r*(g*w-b*R+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],M=u*m*c-b*h*c+b*l*f-o*m*f-u*l*p+o*h*p,T=g*h*c-d*m*c-g*l*f+s*m*f+d*l*p-s*h*p,w=d*b*c-g*u*c+g*o*f-s*b*f-d*o*p+s*u*p,E=g*u*l-d*b*l-g*o*h+s*b*h+d*o*m-s*u*m,R=t*M+i*T+a*w+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=M*A,e[1]=(b*h*r-u*m*r-b*a*f+i*m*f+u*a*p-i*h*p)*A,e[2]=(o*m*r-b*l*r+b*a*c-i*m*c-o*a*p+i*l*p)*A,e[3]=(u*l*r-o*h*r-u*a*c+i*h*c+o*a*f-i*l*f)*A,e[4]=T*A,e[5]=(d*m*r-g*h*r+g*a*f-t*m*f-d*a*p+t*h*p)*A,e[6]=(g*l*r-s*m*r-g*a*c+t*m*c+s*a*p-t*l*p)*A,e[7]=(s*h*r-d*l*r+d*a*c-t*h*c-s*a*f+t*l*f)*A,e[8]=w*A,e[9]=(g*u*r-d*b*r-g*i*f+t*b*f+d*i*p-t*u*p)*A,e[10]=(s*b*r-g*o*r+g*i*c-t*b*c-s*i*p+t*o*p)*A,e[11]=(d*o*r-s*u*r-d*i*c+t*u*c+s*i*f-t*o*f)*A,e[12]=E*A,e[13]=(d*b*a-g*u*a+g*i*h-t*b*h-d*i*m+t*u*m)*A,e[14]=(g*o*a-s*b*a-g*i*l+t*b*l+s*i*m-t*o*m)*A,e[15]=(s*u*a-d*o*a+d*i*l-t*u*l-s*i*h+t*o*h)*A,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,d=s+s,u=o+o,h=r*c,f=r*d,g=r*u,b=s*d,m=s*u,p=o*u,M=l*c,T=l*d,w=l*u,E=i.x,R=i.y,A=i.z;return a[0]=(1-(b+p))*E,a[1]=(f+w)*E,a[2]=(g-T)*E,a[3]=0,a[4]=(f-w)*R,a[5]=(1-(h+p))*R,a[6]=(m+M)*R,a[7]=0,a[8]=(g+T)*A,a[9]=(m-M)*A,a[10]=(1-(h+b))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Ln.set(a[0],a[1],a[2]).length();const s=Ln.set(a[4],a[5],a[6]).length(),o=Ln.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),oi.copy(this);const c=1/r,d=1/s,u=1/o;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=d,oi.elements[5]*=d,oi.elements[6]*=d,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),i.x=r,i.y=s,i.z=o,this}makePerspective(e,t,i,a,r,s,o=Mi,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(i-a),h=(t+e)/(t-e),f=(i+a)/(i-a);let g,b;if(l)g=r/(s-r),b=s*r/(s-r);else if(o===Mi)g=-(s+r)/(s-r),b=-2*s*r/(s-r);else if(o===yr)g=-s/(s-r),b=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=Mi,l=!1){const c=this.elements,d=2/(t-e),u=2/(i-a),h=-(t+e)/(t-e),f=-(i+a)/(i-a);let g,b;if(l)g=1/(s-r),b=s/(s-r);else if(o===Mi)g=-2/(s-r),b=-(s+r)/(s-r);else if(o===yr)g=-1/(s-r),b=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ln=new F,oi=new ht,Xf=new F(0,0,0),jf=new F(1,1,1),Xi=new F,Va=new F,jt=new F,hl=new ht,pl=new Mn;class Ai{constructor(e=0,t=0,i=0,a=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],u=a[2],h=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pl.setFromEuler(this),this.setFromQuaternion(pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yf=0;const fl=new F,kn=new Mn,ki=new ht,qa=new F,ha=new F,Zf=new F,Jf=new Mn,ml=new F(1,0,0),gl=new F(0,1,0),yl=new F(0,0,1),bl={type:"added"},Qf={type:"removed"},Nn={type:"childadded",child:null},Hr={type:"childremoved",child:null};class At extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new F,t=new Ai,i=new Mn,a=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ht},normalMatrix:{value:new Fe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.multiply(kn),this}rotateOnWorldAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.premultiply(kn),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(gl,e)}rotateZ(e){return this.rotateOnAxis(yl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(gl,e)}translateZ(e){return this.translateOnAxis(yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qa.copy(e):qa.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ha,qa,this.up):ki.lookAt(qa,ha,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),kn.setFromRotationMatrix(ki),this.quaternion.premultiply(kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bl),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qf),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bl),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,Jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),u=s(e.shapes),h=s(e.skeletons),f=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}At.DEFAULT_UP=new F(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new F,Ni=new F,Gr=new F,Fi=new F,Fn=new F,On=new F,vl=new F,Vr=new F,qr=new F,Kr=new F,$r=new mt,Xr=new mt,jr=new mt;class ii{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),li.subVectors(e,t),a.cross(li);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){li.subVectors(a,t),Ni.subVectors(i,t),Gr.subVectors(e,t);const s=li.dot(li),o=li.dot(Ni),l=li.dot(Gr),c=Ni.dot(Ni),d=Ni.dot(Gr),u=s*c-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-o*d)*h,g=(s*d-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,i,a,r,s,o,l){return this.getBarycoord(e,t,i,a,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(s,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,t,i,a,r,s){return $r.setScalar(0),Xr.setScalar(0),jr.setScalar(0),$r.fromBufferAttribute(e,t),Xr.fromBufferAttribute(e,i),jr.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector($r,r.x),s.addScaledVector(Xr,r.y),s.addScaledVector(jr,r.z),s}static isFrontFacing(e,t,i,a){return li.subVectors(i,t),Ni.subVectors(e,t),li.cross(Ni).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;Fn.subVectors(a,i),On.subVectors(r,i),Vr.subVectors(e,i);const l=Fn.dot(Vr),c=On.dot(Vr);if(l<=0&&c<=0)return t.copy(i);qr.subVectors(e,a);const d=Fn.dot(qr),u=On.dot(qr);if(d>=0&&u<=d)return t.copy(a);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(Fn,s);Kr.subVectors(e,r);const f=Fn.dot(Kr),g=On.dot(Kr);if(g>=0&&f<=g)return t.copy(r);const b=f*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(On,o);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return vl.subVectors(r,a),o=(u-d)/(u-d+(f-g)),t.copy(a).addScaledVector(vl,o);const p=1/(m+b+h);return s=b*p,o=h*p,t.copy(i).addScaledVector(Fn,s).addScaledVector(On,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Yr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=qe.workingColorSpace){if(e=zf(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Yr(s,r,e+1/3),this.g=Yr(s,r,e),this.b=Yr(s,r,e-1/3)}return qe.colorSpaceToWorking(this,a),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=Jc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return qe.workingToColorSpace(It.copy(this),e),Math.round(We(It.r*255,0,255))*65536+Math.round(We(It.g*255,0,255))*256+Math.round(We(It.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(It.copy(this),t);const i=It.r,a=It.g,r=It.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=d<=.5?u/(s+o):u/(2-s-o),s){case i:l=(a-r)/u+(a<r?6:0);break;case a:l=(r-i)/u+2;break;case r:l=(i-a)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Zt){qe.workingToColorSpace(It.copy(this),e);const t=It.r,i=It.g,a=It.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Ka);const i=Dr(ji.h,Ka.h,t),a=Dr(ji.s,Ka.s,t),r=Dr(ji.l,Ka.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new He;He.NAMES=Jc;let em=0;class ra extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=jn,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ys,this.blendDst=bs,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=An,this.stencilZFail=An,this.stencilZPass=An,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(i.blending=this.blending),this.side!==an&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ys&&(i.blendSrc=this.blendSrc),this.blendDst!==bs&&(i.blendDst=this.blendDst),this.blendEquation!==fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==An&&(i.stencilFail=this.stencilFail),this.stencilZFail!==An&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==An&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ia extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new F,$a=new Ee;let tm=0;class fi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oo,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),a=it(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),a=it(a,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oo&&(e.usage=this.usage),e}}class Qc extends fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ed extends fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ni extends fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let im=0;const ti=new ht,Zr=new At,Un=new F,Yt=new Ca,pa=new Ca,Et=new F;class gi extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yc(e)?ed:Qc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Fe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return Zr.lookAt(e),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Un).negate(),this.translate(Un.x,Un.y,Un.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ni(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Yt.min,pa.min),Yt.expandByPoint(Et),Et.addVectors(Yt.max,pa.max),Yt.expandByPoint(Et)):(Yt.expandByPoint(pa.min),Yt.expandByPoint(pa.max))}Yt.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)Et.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Et));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Et.fromBufferAttribute(o,c),l&&(Un.fromBufferAttribute(e,c),Et.add(Un)),a=Math.max(a,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new F,l[N]=new F;const c=new F,d=new F,u=new F,h=new Ee,f=new Ee,g=new Ee,b=new F,m=new F;function p(N,v,x){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,v),u.fromBufferAttribute(i,x),h.fromBufferAttribute(r,N),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(I),o[N].add(b),o[v].add(b),o[x].add(b),l[N].add(m),l[v].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let N=0,v=M.length;N<v;++N){const x=M[N],I=x.start,W=x.count;for(let U=I,X=I+W;U<X;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const T=new F,w=new F,E=new F,R=new F;function A(N){E.fromBufferAttribute(a,N),R.copy(E);const v=o[N];T.copy(v),T.sub(E.multiplyScalar(E.dot(v))).normalize(),w.crossVectors(R,v);const I=w.dot(l[N])<0?-1:1;s.setXYZW(N,T.x,T.y,T.z,I)}for(let N=0,v=M.length;N<v;++N){const x=M[N],I=x.start,W=x.count;for(let U=I,X=I+W;U<X;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const a=new F,r=new F,s=new F,o=new F,l=new F,c=new F,d=new F,u=new F;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),s.fromBufferAttribute(t,m),d.subVectors(s,r),u.subVectors(a,r),d.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)a.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,r),u.subVectors(a,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new fi(h,d,u)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _l=new ht,dn=new Lo,Xa=new Do,xl=new F,ja=new F,Ya=new F,Za=new F,Jr=new F,Ja=new F,wl=new F,Qa=new F;class Ut extends At{constructor(e=new gi,t=new Ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(Jr.fromBufferAttribute(u,e),s?Ja.addScaledVector(Jr,d):Ja.addScaledVector(Jr.sub(t),d))}t.add(Ja)}return t}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),dn.copy(e.ray).recast(e.near),!(Xa.containsPoint(dn.origin)===!1&&(dn.intersectSphere(Xa,xl)===null||dn.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(_l.copy(r).invert(),dn.copy(e.ray).applyMatrix4(_l),!(i.boundingBox!==null&&dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,dn)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,b=h.length;g<b;g++){const m=h[g],p=s[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=M,E=T;w<E;w+=3){const R=o.getX(w),A=o.getX(w+1),N=o.getX(w+2);a=er(this,p,e,i,c,d,u,R,A,N),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const M=o.getX(m),T=o.getX(m+1),w=o.getX(m+2);a=er(this,s,e,i,c,d,u,M,T,w),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,b=h.length;g<b;g++){const m=h[g],p=s[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=M,E=T;w<E;w+=3){const R=w,A=w+1,N=w+2;a=er(this,p,e,i,c,d,u,R,A,N),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const M=m,T=m+1,w=m+2;a=er(this,s,e,i,c,d,u,M,T,w),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function nm(n,e,t,i,a,r,s,o){let l;if(e.side===Vt?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===an,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:n}}function er(n,e,t,i,a,r,s,o,l,c){n.getVertexPosition(o,ja),n.getVertexPosition(l,Ya),n.getVertexPosition(c,Za);const d=nm(n,e,t,i,ja,Ya,Za,wl);if(d){const u=new F;ii.getBarycoord(wl,ja,Ya,Za,u),a&&(d.uv=ii.getInterpolatedAttribute(a,o,l,c,u,new Ee)),r&&(d.uv1=ii.getInterpolatedAttribute(r,o,l,c,u,new Ee)),s&&(d.normal=ii.getInterpolatedAttribute(s,o,l,c,u,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};ii.getNormal(ja,Ya,Za,h.normal),d.face=h,d.barycoord=u}return d}class Pa extends gi{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,s,r,0),g("z","y","x",1,-1,i,t,-e,s,r,1),g("x","z","y",1,1,e,i,t,a,s,2),g("x","z","y",1,-1,e,i,-t,a,s,3),g("x","y","z",1,-1,e,t,i,a,r,4),g("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new ni(c,3)),this.setAttribute("normal",new ni(d,3)),this.setAttribute("uv",new ni(u,2));function g(b,m,p,M,T,w,E,R,A,N,v){const x=w/A,I=E/N,W=w/2,U=E/2,X=R/2,V=A+1,G=N+1;let L=0,q=0;const Q=new F;for(let ie=0;ie<G;ie++){const ce=ie*I-U;for(let Re=0;Re<V;Re++){const ke=Re*x-W;Q[b]=ke*M,Q[m]=ce*T,Q[p]=X,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[m]=0,Q[p]=R>0?1:-1,d.push(Q.x,Q.y,Q.z),u.push(Re/A),u.push(1-ie/N),L+=1}}for(let ie=0;ie<N;ie++)for(let ce=0;ce<A;ce++){const Re=h+ce+V*ie,ke=h+ce+V*(ie+1),ut=h+(ce+1)+V*(ie+1),at=h+(ce+1)+V*ie;l.push(Re,ke,at),l.push(ke,ut,at),q+=6}o.addGroup(f,q,v),f+=q,h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function aa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=aa(n[t]);for(const a in i)e[a]=i[a]}return e}function am(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function td(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const rm={clone:aa,merge:Ft};var sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class id extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new F,Sl=new Ee,Ml=new Ee;class ci extends id{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,Ml),t.subVectors(Ml,Sl)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,t-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zn=-90,Bn=1;class lm extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(zn,Bn,e,t);a.layers=this.layers,this.add(a);const r=new ci(zn,Bn,e,t);r.layers=this.layers,this.add(r);const s=new ci(zn,Bn,e,t);s.layers=this.layers,this.add(s);const o=new ci(zn,Bn,e,t);o.layers=this.layers,this.add(o);const l=new ci(zn,Bn,e,t);l.layers=this.layers,this.add(l);const c=new ci(zn,Bn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,r),e.setRenderTarget(i,1,a),e.render(t,s),e.setRenderTarget(i,2,a),e.render(t,o),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nd extends Lt{constructor(e=[],t=Sn,i,a,r,s,o,l,c,d){super(e,t,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ad extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new nd(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Pa(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Bi});r.uniforms.tEquirect.value=t;const s=new Ut(a,r),o=t.minFilter;return t.minFilter===gn&&(t.minFilter=Dt),new lm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}class bn extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cm={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class rd extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oo,this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new F;class _r{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),a=it(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),a=it(a,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new fi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sd extends ra{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wn;const fa=new F,Hn=new F,Gn=new F,Vn=new Ee,ma=new Ee,od=new ht,tr=new F,ga=new F,ir=new F,Tl=new Ee,es=new Ee,El=new Ee;class um extends At{constructor(e=new sd){if(super(),this.isSprite=!0,this.type="Sprite",Wn===void 0){Wn=new gi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dm(t,5);Wn.setIndex([0,1,2,0,2,3]),Wn.setAttribute("position",new _r(i,3,0,!1)),Wn.setAttribute("uv",new _r(i,2,3,!1))}this.geometry=Wn,this.material=e,this.center=new Ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hn.setFromMatrixScale(this.matrixWorld),od.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hn.multiplyScalar(-Gn.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;nr(tr.set(-.5,-.5,0),Gn,s,Hn,a,r),nr(ga.set(.5,-.5,0),Gn,s,Hn,a,r),nr(ir.set(.5,.5,0),Gn,s,Hn,a,r),Tl.set(0,0),es.set(1,0),El.set(1,1);let o=e.ray.intersectTriangle(tr,ga,ir,!1,fa);if(o===null&&(nr(ga.set(-.5,.5,0),Gn,s,Hn,a,r),es.set(0,1),o=e.ray.intersectTriangle(tr,ir,ga,!1,fa),o===null))return;const l=e.ray.origin.distanceTo(fa);l<e.near||l>e.far||t.push({distance:l,point:fa.clone(),uv:ii.getInterpolation(fa,tr,ga,ir,Tl,es,El,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nr(n,e,t,i,a,r){Vn.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(ma.x=r*Vn.x-a*Vn.y,ma.y=a*Vn.x+r*Vn.y):ma.copy(Vn),n.copy(e),n.x+=ma.x,n.y+=ma.y,n.applyMatrix4(od)}class hm extends Lt{constructor(e=null,t=1,i=1,a,r,s,o,l,c=Qe,d=Qe,u,h){super(null,s,o,l,c,d,a,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ts=new F,pm=new F,fm=new Fe;class Zi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=ts.subVectors(i,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ts),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fm.getNormalMatrix(e),a=this.coplanarPoint(ts).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const un=new Do,mm=new Ee(.5,.5),ar=new F;class No{constructor(e=new Zi,t=new Zi,i=new Zi,a=new Zi,r=new Zi,s=new Zi){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],M=r[12],T=r[13],w=r[14],E=r[15];if(a[0].setComponents(c-s,f-d,p-g,E-M).normalize(),a[1].setComponents(c+s,f+d,p+g,E+M).normalize(),a[2].setComponents(c+o,f+u,p+b,E+T).normalize(),a[3].setComponents(c-o,f-u,p-b,E-T).normalize(),i)a[4].setComponents(l,h,m,w).normalize(),a[5].setComponents(c-l,f-h,p-m,E-w).normalize();else if(a[4].setComponents(c-l,f-h,p-m,E-w).normalize(),t===Mi)a[5].setComponents(c+l,f+h,p+m,E+w).normalize();else if(t===yr)a[5].setComponents(l,h,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(e){un.center.set(0,0,0);const t=mm.distanceTo(e.center);return un.radius=.7071067811865476+t,un.applyMatrix4(e.matrixWorld),this.intersectsSphere(un)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(ar.x=a.normal.x>0?e.max.x:e.min.x,ar.y=a.normal.y>0?e.max.y:e.min.y,ar.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sa extends Lt{constructor(e,t,i,a,r,s,o,l,c){super(e,t,i,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ra extends Lt{constructor(e,t,i=Ri,a,r,s,o=Qe,l=Qe,c,d=Gi,u=1){if(d!==Gi&&d!==yn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gm extends Ra{constructor(e,t=Ri,i=Sn,a,r,s=Qe,o=Qe,l,c=Gi){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,i,a,r,s,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ld extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fo extends gi{constructor(e=1,t=1,i=4,a=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:a,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),a=Math.max(3,Math.floor(a)),r=Math.max(1,Math.floor(r));const s=[],o=[],l=[],c=[],d=t/2,u=Math.PI/2*e,h=t,f=2*u+h,g=i*2+r,b=a+1,m=new F,p=new F;for(let M=0;M<=g;M++){let T=0,w=0,E=0,R=0;if(M<=i){const v=M/i,x=v*Math.PI/2;w=-d-e*Math.cos(x),E=e*Math.sin(x),R=-e*Math.cos(x),T=v*u}else if(M<=i+r){const v=(M-i)/r;w=-d+v*t,E=e,R=0,T=u+v*h}else{const v=(M-i-r)/i,x=v*Math.PI/2;w=d+e*Math.sin(x),E=e*Math.cos(x),R=e*Math.sin(x),T=u+h+v*u}const A=Math.max(0,Math.min(1,T/f));let N=0;M===0?N=.5/a:M===g&&(N=-.5/a);for(let v=0;v<=a;v++){const x=v/a,I=x*Math.PI*2,W=Math.sin(I),U=Math.cos(I);p.x=-E*U,p.y=w,p.z=E*W,o.push(p.x,p.y,p.z),m.set(-E*U,R,E*W),m.normalize(),l.push(m.x,m.y,m.z),c.push(x+N,A)}if(M>0){const v=(M-1)*b;for(let x=0;x<a;x++){const I=v+x,W=v+x+1,U=M*b+x,X=M*b+x+1;s.push(I,W,U),s.push(W,X,U)}}}this.setIndex(s),this.setAttribute("position",new ni(o,3)),this.setAttribute("normal",new ni(l,3)),this.setAttribute("uv",new ni(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class zi extends gi{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,u=e/o,h=t/l,f=[],g=[],b=[],m=[];for(let p=0;p<d;p++){const M=p*h-s;for(let T=0;T<c;T++){const w=T*u-r;g.push(w,-M,0),b.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const T=M+c*p,w=M+c*(p+1),E=M+1+c*(p+1),R=M+1+c*p;f.push(T,w,R),f.push(w,E,R)}this.setIndex(f),this.setAttribute("position",new ni(g,3)),this.setAttribute("normal",new ni(b,3)),this.setAttribute("uv",new ni(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class ym extends Ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bm extends ra{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vm extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _m extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cd extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const is=new ht,Rl=new F,Al=new F;class xm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rl),Al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Al),t.updateMatrixWorld(),is.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(is,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(is)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Da extends id{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wm extends xm{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sm extends cd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new wm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Mm extends cd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tm extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Cl=new ht;class Rm{constructor(e,t,i=0,a=1/0){this.ray=new Lo(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(e,t=!0,i=[]){return co(e,this,i,t),i.sort(Il),i}intersectObjects(e,t=!0,i=[]){for(let a=0,r=e.length;a<r;a++)co(e[a],this,i,t);return i.sort(Il),i}}function Il(n,e){return n.distance-e.distance}function co(n,e,t,i){let a=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)co(r[s],e,t,!0)}}class Pl{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Am extends En{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Pe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Dl(n,e,t,i){const a=Cm(i);switch(t){case Kc:return n*e;case Xc:return n*e/a.components*a.byteLength;case Eo:return n*e/a.components*a.byteLength;case ia:return n*e*2/a.components*a.byteLength;case Ro:return n*e*2/a.components*a.byteLength;case $c:return n*e*3/a.components*a.byteLength;case pi:return n*e*4/a.components*a.byteLength;case Ao:return n*e*4/a.components*a.byteLength;case dr:case ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Is:case Ds:return Math.max(n,16)*Math.max(e,8)/4;case Cs:case Ps:return Math.max(n,8)*Math.max(e,8)/2;case Ls:case ks:case Fs:case Os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Us:case zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ws:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qs:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ks:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $s:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case js:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ys:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zs:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Js:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qs:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case eo:case to:case io:return Math.ceil(n/4)*Math.ceil(e/4)*16;case no:case ao:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ro:case so:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cm(n){switch(n){case Qt:case Hc:return{byteLength:1,components:1};case Ma:case Gc:case Hi:return{byteLength:2,components:1};case Mo:case To:return{byteLength:2,components:4};case Ri:case So:case Si:return{byteLength:4,components:1};case Vc:case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);function dd(){let n=null,e=!1,t=null,i=null;function a(r,s){t(r,s),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Im(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,u[h]=b)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const b=u[f];n.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ig=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ig=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,my=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,My=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ty=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Oy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Pm,alphahash_pars_fragment:Dm,alphamap_fragment:Lm,alphamap_pars_fragment:km,alphatest_fragment:Nm,alphatest_pars_fragment:Fm,aomap_fragment:Om,aomap_pars_fragment:Um,batching_pars_vertex:zm,batching_vertex:Bm,begin_vertex:Wm,beginnormal_vertex:Hm,bsdfs:Gm,iridescence_fragment:Vm,bumpmap_pars_fragment:qm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:$m,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:jm,color_fragment:Ym,color_pars_fragment:Zm,color_pars_vertex:Jm,color_vertex:Qm,common:eg,cube_uv_reflection_fragment:tg,defaultnormal_vertex:ig,displacementmap_pars_vertex:ng,displacementmap_vertex:ag,emissivemap_fragment:rg,emissivemap_pars_fragment:sg,colorspace_fragment:og,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:dg,envmap_pars_fragment:ug,envmap_pars_vertex:hg,envmap_physical_pars_fragment:Sg,envmap_vertex:pg,fog_vertex:fg,fog_pars_vertex:mg,fog_fragment:gg,fog_pars_fragment:yg,gradientmap_pars_fragment:bg,lightmap_pars_fragment:vg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:xg,lights_pars_begin:wg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Eg,lights_phong_pars_fragment:Rg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Cg,lights_fragment_begin:Ig,lights_fragment_maps:Pg,lights_fragment_end:Dg,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:kg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Fg,map_fragment:Og,map_pars_fragment:Ug,map_particle_fragment:zg,map_particle_pars_fragment:Bg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Gg,morphcolor_vertex:Vg,morphnormal_vertex:qg,morphtarget_pars_vertex:Kg,morphtarget_vertex:$g,normal_fragment_begin:Xg,normal_fragment_maps:jg,normal_pars_fragment:Yg,normal_pars_vertex:Zg,normal_vertex:Jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:iy,iridescence_pars_fragment:ny,opaque_fragment:ay,packing:ry,premultiplied_alpha_fragment:sy,project_vertex:oy,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:dy,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:hy,shadowmap_pars_vertex:py,shadowmap_vertex:fy,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:yy,skinning_vertex:by,skinnormal_vertex:vy,specularmap_fragment:_y,specularmap_pars_fragment:xy,tonemapping_fragment:wy,tonemapping_pars_fragment:Sy,transmission_fragment:My,transmission_pars_fragment:Ty,uv_pars_fragment:Ey,uv_pars_vertex:Ry,uv_vertex:Ay,worldpos_vertex:Cy,background_vert:Iy,background_frag:Py,backgroundCube_vert:Dy,backgroundCube_frag:Ly,cube_vert:ky,cube_frag:Ny,depth_vert:Fy,depth_frag:Oy,distance_vert:Uy,distance_frag:zy,equirect_vert:By,equirect_frag:Wy,linedashed_vert:Hy,linedashed_frag:Gy,meshbasic_vert:Vy,meshbasic_frag:qy,meshlambert_vert:Ky,meshlambert_frag:$y,meshmatcap_vert:Xy,meshmatcap_frag:jy,meshnormal_vert:Yy,meshnormal_frag:Zy,meshphong_vert:Jy,meshphong_frag:Qy,meshphysical_vert:eb,meshphysical_frag:tb,meshtoon_vert:ib,meshtoon_frag:nb,points_vert:ab,points_frag:rb,shadow_vert:sb,shadow_frag:ob,sprite_vert:lb,sprite_frag:cb},le={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},xi={basic:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ft([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ft([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ft([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ft([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ft([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ft([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ft([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ft([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ft([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Ft([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Ft([le.lights,le.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};xi.physical={uniforms:Ft([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const rr={r:0,b:0,g:0},hn=new Ai,db=new ht;function ub(n,e,t,i,a,r,s){const o=new He(0);let l=r===!0?0:1,c,d,u=null,h=0,f=null;function g(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function b(T){let w=!1;const E=g(T);E===null?p(o,l):E&&E.isColor&&(p(E,1),w=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,w){const E=g(w);E&&(E.isCubeTexture||E.mapping===Sr)?(d===void 0&&(d=new Ut(new Pa(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:aa(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),hn.copy(w.backgroundRotation),hn.x*=-1,hn.y*=-1,hn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hn.y*=-1,hn.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(db.makeRotationFromEuler(hn)),d.material.toneMapped=qe.getTransfer(E.colorSpace)!==Je,(u!==E||h!==E.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,u=E,h=E.version,f=n.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ut(new zi(2,2),new Ci({name:"BackgroundMaterial",uniforms:aa(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=qe.getTransfer(E.colorSpace)!==Je,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,w){T.getRGB(rr,td(n)),i.buffers.color.setClear(rr.r,rr.g,rr.b,w,s)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:b,addToRenderList:m,dispose:M}}function hb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=h(null);let r=a,s=!1;function o(x,I,W,U,X){let V=!1;const G=u(U,W,I);r!==G&&(r=G,c(r.object)),V=f(x,U,W,X),V&&g(x,U,W,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,w(x,I,W,U),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function d(x){return n.deleteVertexArray(x)}function u(x,I,W){const U=W.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let V=X[I.id];V===void 0&&(V={},X[I.id]=V);let G=V[U];return G===void 0&&(G=h(l()),V[U]=G),G}function h(x){const I=[],W=[],U=[];for(let X=0;X<t;X++)I[X]=0,W[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:U,object:x,attributes:{},index:null}}function f(x,I,W,U){const X=r.attributes,V=I.attributes;let G=0;const L=W.getAttributes();for(const q in L)if(L[q].location>=0){const ie=X[q];let ce=V[q];if(ce===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),ie===void 0||ie.attribute!==ce||ce&&ie.data!==ce.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function g(x,I,W,U){const X={},V=I.attributes;let G=0;const L=W.getAttributes();for(const q in L)if(L[q].location>=0){let ie=V[q];ie===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor));const ce={};ce.attribute=ie,ie&&ie.data&&(ce.data=ie.data),X[q]=ce,G++}r.attributes=X,r.attributesNum=G,r.index=U}function b(){const x=r.newAttributes;for(let I=0,W=x.length;I<W;I++)x[I]=0}function m(x){p(x,0)}function p(x,I){const W=r.newAttributes,U=r.enabledAttributes,X=r.attributeDivisors;W[x]=1,U[x]===0&&(n.enableVertexAttribArray(x),U[x]=1),X[x]!==I&&(n.vertexAttribDivisor(x,I),X[x]=I)}function M(){const x=r.newAttributes,I=r.enabledAttributes;for(let W=0,U=I.length;W<U;W++)I[W]!==x[W]&&(n.disableVertexAttribArray(W),I[W]=0)}function T(x,I,W,U,X,V,G){G===!0?n.vertexAttribIPointer(x,I,W,X,V):n.vertexAttribPointer(x,I,W,U,X,V)}function w(x,I,W,U){b();const X=U.attributes,V=W.getAttributes(),G=I.defaultAttributeValues;for(const L in V){const q=V[L];if(q.location>=0){let Q=X[L];if(Q===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const ie=Q.normalized,ce=Q.itemSize,Re=e.get(Q);if(Re===void 0)continue;const ke=Re.buffer,ut=Re.type,at=Re.bytesPerElement,$=ut===n.INT||ut===n.UNSIGNED_INT||Q.gpuType===So;if(Q.isInterleavedBufferAttribute){const Z=Q.data,me=Z.stride,Ne=Q.offset;if(Z.isInstancedInterleavedBuffer){for(let be=0;be<q.locationSize;be++)p(q.location+be,Z.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let be=0;be<q.locationSize;be++)m(q.location+be);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let be=0;be<q.locationSize;be++)T(q.location+be,ce/q.locationSize,ut,ie,me*at,(Ne+ce/q.locationSize*be)*at,$)}else{if(Q.isInstancedBufferAttribute){for(let Z=0;Z<q.locationSize;Z++)p(q.location+Z,Q.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Z=0;Z<q.locationSize;Z++)m(q.location+Z);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Z=0;Z<q.locationSize;Z++)T(q.location+Z,ce/q.locationSize,ut,ie,ce*at,ce/q.locationSize*Z*at,$)}}else if(G!==void 0){const ie=G[L];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(q.location,ie);break;case 3:n.vertexAttrib3fv(q.location,ie);break;case 4:n.vertexAttrib4fv(q.location,ie);break;default:n.vertexAttrib1fv(q.location,ie)}}}}M()}function E(){N();for(const x in i){const I=i[x];for(const W in I){const U=I[W];for(const X in U)d(U[X].object),delete U[X];delete I[W]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const I=i[x.id];for(const W in I){const U=I[W];for(const X in U)d(U[X].object),delete U[X];delete I[W]}delete i[x.id]}function A(x){for(const I in i){const W=i[I];if(W[x.id]===void 0)continue;const U=W[x.id];for(const X in U)d(U[X].object),delete U[X];delete W[x.id]}}function N(){v(),s=!0,r!==a&&(r=a,c(r.object))}function v(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:M}}function pb(n,e,t){let i;function a(c){i=c}function r(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function s(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function o(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,i,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)s(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let g=0;for(let b=0;b<u;b++)g+=d[b]*h[b];t.update(g,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function fb(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==pi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const N=A===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Qt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Si&&!N)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Pe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:w,maxSamples:E,samples:R}}function mb(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new Zi,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||a;return a=h,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!a||g===null||g.length===0||r&&!m)r?d(null):c();else{const M=r?0:i,T=M*4;let w=p.clippingState||null;l.value=w,w=d(g,h,T,f);for(let E=0;E!==T;++E)w[E]=t[E];p.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,g){const b=u!==null?u.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const p=f+b*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,w=f;T!==b;++T,w+=4)s.copy(u[T]).applyMatrix4(M,o),s.normal.toArray(m,w),m[w+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function gb(n){let e=new WeakMap;function t(s,o){return o===Es?s.mapping=Sn:o===Rs&&(s.mapping=ta),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Es||o===Rs)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new ad(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const en=4,Ll=[.125,.215,.35,.446,.526,.582],mn=20,yb=256,ya=new Da,kl=new He;let ns=null,as=0,rs=0,ss=!1;const bb=new F;class Nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=bb}=r;ns=this._renderer.getRenderTarget(),as=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ns,as,rs),this._renderer.xr.enabled=ss,e.scissorTest=!1,qn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sn||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ns=this._renderer.getRenderTarget(),as=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Hi,format:pi,colorSpace:na,depthBuffer:!1},a=Fl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vb(r)),this._blurMaterial=xb(r,e,t),this._ggxMaterial=_b(r,e,t)}return a}_compileMaterial(e){const t=new Ut(new gi,e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,i,a,r){const l=new ci(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(kl),u.toneMapping=Ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(a),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Pa,new Ia({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(kl),p=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[T],r.y,r.z)):w===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[T]));const E=this._cubeSize;qn(a,w*E,T>2?E:0,E,E),u.setRenderTarget(a),p&&u.render(b,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Sn||e.mapping===ta;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;qn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,f=u*h,{_lodMax:g}=this,b=this._sizeLods[i],m=3*b*(i>g-en?i-g+en:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,qn(r,m,p,3*b,2*b),a.setRenderTarget(r),a.render(o,ya),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,qn(e,m,p,3*b,2*b),a.setRenderTarget(e),a.render(o,ya)}_blur(e,t,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,t,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[a];u.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mn-1),b=r/g,m=isFinite(r)?1+Math.floor(d*b):mn;m>mn&&Pe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mn}`);const p=[];let M=0;for(let A=0;A<mn;++A){const N=A/b,v=Math.exp(-N*N/2);p.push(v),A===0?M+=v:A<m&&(M+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const w=this._sizeLods[a],E=3*w*(a>T-en?a-T+en:0),R=4*(this._cubeSize-w);qn(t,E,R,3*w,2*w),l.setRenderTarget(t),l.render(u,ya)}}function vb(n){const e=[],t=[],i=[];let a=n;const r=n-en+1+Ll.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let l=1/o;s>n-en?l=Ll[s-n+en-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,b=3,m=2,p=1,M=new Float32Array(b*g*f),T=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,N=R>2?0:-1,v=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];M.set(v,b*g*R),T.set(h,m*g*R);const x=[R,R,R,R,R,R];w.set(x,p*g*R)}const E=new gi;E.setAttribute("position",new fi(M,b)),E.setAttribute("uv",new fi(T,m)),E.setAttribute("faceIndex",new fi(w,p)),i.push(new Ut(E,null)),a>en&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Fl(n,e,t){const i=new Ei(n,e,t);return i.texture.mapping=Sr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qn(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function _b(n,e,t){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function xb(n,e,t){const i=new Float32Array(mn),a=new F(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ol(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ul(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Mr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wb(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Es||l===Rs,d=l===Sn||l===ta;if(c||d){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Nl(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&a(f)?(t===null&&(t=new Nl(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Sb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Ea("WebGLRenderer: "+i+" extension not supported."),a}}}function Mb(n,e,t,i){const a={},r=new WeakMap;function s(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete a[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,g=u.attributes.position;let b=0;if(f!==null){const M=f.array;b=f.version;for(let T=0,w=M.length;T<w;T+=3){const E=M[T+0],R=M[T+1],A=M[T+2];h.push(E,R,R,A,A,E)}}else if(g!==void 0){const M=g.array;b=g.version;for(let T=0,w=M.length/3-1;T<w;T+=3){const E=T+0,R=T+1,A=T+2;h.push(E,R,R,A,A,E)}}else return;const m=new(Yc(h)?ed:Qc)(h,1);m.version=b;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Tb(n,e,t){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*s),t.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,h*s,g),t.update(f,i,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(h,f,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/s,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,b,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*b[M];t.update(p,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Eb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Rb(n,e,t){const i=new WeakMap,a=new mt;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let x=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),b===!0&&(w=2),m===!0&&(w=3);let E=o.attributes.position.count*w,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*R*4*u),N=new Zc(A,E,R,u);N.type=Si,N.needsUpdate=!0;const v=w*4;for(let I=0;I<u;I++){const W=p[I],U=M[I],X=T[I],V=E*R*4*I;for(let G=0;G<W.count;G++){const L=G*v;g===!0&&(a.fromBufferAttribute(W,G),A[V+L+0]=a.x,A[V+L+1]=a.y,A[V+L+2]=a.z,A[V+L+3]=0),b===!0&&(a.fromBufferAttribute(U,G),A[V+L+4]=a.x,A[V+L+5]=a.y,A[V+L+6]=a.z,A[V+L+7]=0),m===!0&&(a.fromBufferAttribute(X,G),A[V+L+8]=a.x,A[V+L+9]=a.y,A[V+L+10]=a.z,A[V+L+11]=X.itemSize===4?a.w:1)}}h={count:u,texture:N,size:new Ee(E,R)},i.set(o,h),o.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Ab(n,e,t,i){let a=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(a.get(u)!==c&&(e.update(u),a.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return u}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Cb={[kc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[Oc]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[Bc]:"NEUTRAL_TONE_MAPPING",[Uc]:"CUSTOM_TONE_MAPPING"};function Ib(n,e,t,i,a){const r=new Ei(e,t,{type:n,depthBuffer:i,stencilBuffer:a}),s=new Ei(e,t,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),o=new gi;o.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ni([0,2,0,0,2,0],2));const l=new ym({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ut(o,l),d=new Da(-1,1,1,-1,0,1);let u=null,h=null,f=!1,g,b=null,m=[],p=!1;this.setSize=function(M,T){r.setSize(M,T),s.setSize(M,T);for(let w=0;w<m.length;w++){const E=m[w];E.setSize&&E.setSize(M,T)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const T=r.width,w=r.height;for(let E=0;E<m.length;E++){const R=m[E];R.setSize&&R.setSize(T,w)}},this.begin=function(M,T){if(f||M.toneMapping===Ti&&m.length===0)return!1;if(b=T,T!==null){const w=T.width,E=T.height;(r.width!==w||r.height!==E)&&this.setSize(w,E)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=Ti,!0},this.hasRenderPass=function(){return p},this.end=function(M,T){M.toneMapping=g,f=!0;let w=r,E=s;for(let R=0;R<m.length;R++){const A=m[R];if(A.enabled!==!1&&(A.render(M,E,w,T),A.needsSwap!==!1)){const N=w;w=E,E=N}}if(u!==M.outputColorSpace||h!==M.toneMapping){u=M.outputColorSpace,h=M.toneMapping,l.defines={},qe.getTransfer(u)===Je&&(l.defines.SRGB_TRANSFER="");const R=Cb[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(b),M.render(c,d),b=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),s.dispose(),o.dispose(),l.dispose()}}const ud=new Lt,uo=new Ra(1,1),hd=new Zc,pd=new Kf,fd=new nd,zl=[],Bl=[],Wl=new Float32Array(16),Hl=new Float32Array(9),Gl=new Float32Array(4);function oa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=zl[a];if(r===void 0&&(r=new Float32Array(a),zl[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Tr(n,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Pb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Nb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Gl.set(i),n.uniformMatrix2fv(this.addr,!1,Gl),Mt(t,i)}}function Fb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Hl.set(i),n.uniformMatrix3fv(this.addr,!1,Hl),Mt(t,i)}}function Ob(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Wl.set(i),n.uniformMatrix4fv(this.addr,!1,Wl),Mt(t,i)}}function Ub(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function Wb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function Hb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function Vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function Kb(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(uo.compareFunction=t.isReversedDepthBuffer()?Io:Co,r=uo):r=ud,t.setTexture2D(e||r,a)}function $b(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||pd,a)}function Xb(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||fd,a)}function jb(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||hd,a)}function Yb(n){switch(n){case 5126:return Pb;case 35664:return Db;case 35665:return Lb;case 35666:return kb;case 35674:return Nb;case 35675:return Fb;case 35676:return Ob;case 5124:case 35670:return Ub;case 35667:case 35671:return zb;case 35668:case 35672:return Bb;case 35669:case 35673:return Wb;case 5125:return Hb;case 36294:return Gb;case 36295:return Vb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return jb}}function Zb(n,e){n.uniform1fv(this.addr,e)}function Jb(n,e){const t=oa(e,this.size,2);n.uniform2fv(this.addr,t)}function Qb(n,e){const t=oa(e,this.size,3);n.uniform3fv(this.addr,t)}function ev(n,e){const t=oa(e,this.size,4);n.uniform4fv(this.addr,t)}function tv(n,e){const t=oa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function iv(n,e){const t=oa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nv(n,e){const t=oa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function av(n,e){n.uniform1iv(this.addr,e)}function rv(n,e){n.uniform2iv(this.addr,e)}function sv(n,e){n.uniform3iv(this.addr,e)}function ov(n,e){n.uniform4iv(this.addr,e)}function lv(n,e){n.uniform1uiv(this.addr,e)}function cv(n,e){n.uniform2uiv(this.addr,e)}function dv(n,e){n.uniform3uiv(this.addr,e)}function uv(n,e){n.uniform4uiv(this.addr,e)}function hv(n,e,t){const i=this.cache,a=e.length,r=Tr(t,a);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=uo:s=ud;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function pv(n,e,t){const i=this.cache,a=e.length,r=Tr(t,a);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||pd,r[s])}function fv(n,e,t){const i=this.cache,a=e.length,r=Tr(t,a);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||fd,r[s])}function mv(n,e,t){const i=this.cache,a=e.length,r=Tr(t,a);St(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||hd,r[s])}function gv(n){switch(n){case 5126:return Zb;case 35664:return Jb;case 35665:return Qb;case 35666:return ev;case 35674:return tv;case 35675:return iv;case 35676:return nv;case 5124:case 35670:return av;case 35667:case 35671:return rv;case 35668:case 35672:return sv;case 35669:case 35673:return ov;case 5125:return lv;case 36294:return cv;case 36295:return dv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return mv}}class yv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yb(t.type)}}class bv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gv(t.type)}}class vv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const os=/(\w+)(\])?(\[|\.)?/g;function Vl(n,e){n.seq.push(e),n.map[e.id]=e}function _v(n,e,t){const i=n.name,a=i.length;for(os.lastIndex=0;;){const r=os.exec(i),s=os.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Vl(t,c===void 0?new yv(o,n,e):new bv(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new vv(o),Vl(t,u)),t=u}}}class mr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);_v(o,l,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function ql(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const xv=37297;let wv=0;function Sv(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Kl=new Fe;function Mv(n){qe._getMatrix(Kl,qe.workingColorSpace,n);const e=`mat3( ${Kl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case gr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $l(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Sv(n.getShaderSource(e),o)}else return r}function Tv(n,e){const t=Mv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ev={[kc]:"Linear",[Nc]:"Reinhard",[Fc]:"Cineon",[Oc]:"ACESFilmic",[zc]:"AgX",[Bc]:"Neutral",[Uc]:"Custom"};function Rv(n,e){const t=Ev[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sr=new F;function Av(){qe.getLuminanceCoefficients(sr);const n=sr.x.toFixed(4),e=sr.y.toFixed(4),t=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Iv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Pv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function xa(n){return n!==""}function Xl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(n){return n.replace(Dv,kv)}const Lv=new Map;function kv(n,e){let t=Oe[e];if(t===void 0){const i=Lv.get(e);if(i!==void 0)t=Oe[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ho(t)}const Nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(n){return n.replace(Nv,Fv)}function Fv(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Zl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ov={[cr]:"SHADOWMAP_TYPE_PCF",[_a]:"SHADOWMAP_TYPE_VSM"};function Uv(n){return Ov[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zv={[Sn]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE_UV"};function Bv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":zv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Wv={[ta]:"ENVMAP_MODE_REFRACTION"};function Hv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Wv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gv={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[Ef]:"ENVMAP_BLENDING_MIX",[Rf]:"ENVMAP_BLENDING_ADD"};function Vv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Gv[n.combine]||"ENVMAP_BLENDING_NONE"}function qv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Kv(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Uv(t),c=Bv(t),d=Hv(t),u=Vv(t),h=qv(t),f=Cv(t),g=Iv(r),b=a.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),p.length>0&&(p+=`
`)):(m=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),p=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Tv("linearToOutputTexel",t.outputColorSpace),Av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),s=ho(s),s=Xl(s,t),s=jl(s,t),o=ho(o),o=Xl(o,t),o=jl(o,t),s=Yl(s),o=Yl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+m+s,w=M+p+o,E=ql(a,a.VERTEX_SHADER,T),R=ql(a,a.FRAGMENT_SHADER,w);a.attachShader(b,E),a.attachShader(b,R),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function A(I){if(n.debug.checkShaderErrors){const W=a.getProgramInfoLog(b)||"",U=a.getShaderInfoLog(E)||"",X=a.getShaderInfoLog(R)||"",V=W.trim(),G=U.trim(),L=X.trim();let q=!0,Q=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,b,E,R);else{const ie=$l(a,E,"vertex"),ce=$l(a,R,"fragment");Ge("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+ie+`
`+ce)}else V!==""?Pe("WebGLProgram: Program Info Log:",V):(G===""||L==="")&&(Q=!1);Q&&(I.diagnostics={runnable:q,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:L,prefix:p}})}a.deleteShader(E),a.deleteShader(R),N=new mr(a,b),v=Pv(a,b)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=a.getProgramParameter(b,xv)),x},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=R,this}let $v=0;class Xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jv(e),t.set(e,i)),i}}class jv{constructor(e){this.id=$v++,this.code=e,this.usedTimes=0}}function Yv(n,e,t,i,a,r,s){const o=new ko,l=new Xv,c=new Set,d=[],u=new Map,h=a.logarithmicDepthBuffer;let f=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,I,W,U){const X=W.fog,V=U.geometry,G=v.isMeshStandardMaterial?W.environment:null,L=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),q=L&&L.mapping===Sr?L.image.height:null,Q=g[v.type];v.precision!==null&&(f=a.getMaxPrecision(v.precision),f!==v.precision&&Pe("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const ie=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=ie!==void 0?ie.length:0;let Re=0;V.morphAttributes.position!==void 0&&(Re=1),V.morphAttributes.normal!==void 0&&(Re=2),V.morphAttributes.color!==void 0&&(Re=3);let ke,ut,at,$;if(Q){const Ye=xi[Q];ke=Ye.vertexShader,ut=Ye.fragmentShader}else ke=v.vertexShader,ut=v.fragmentShader,l.update(v),at=l.getVertexShaderID(v),$=l.getFragmentShaderID(v);const Z=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ne=U.isInstancedMesh===!0,be=U.isBatchedMesh===!0,Ke=!!v.map,Tt=!!v.matcap,Ve=!!L,je=!!v.aoMap,rt=!!v.lightMap,Ue=!!v.bumpMap,bt=!!v.normalMap,C=!!v.displacementMap,vt=!!v.emissiveMap,Xe=!!v.metalnessMap,lt=!!v.roughnessMap,_e=v.anisotropy>0,S=v.clearcoat>0,y=v.dispersion>0,D=v.iridescence>0,K=v.sheen>0,Y=v.transmission>0,H=_e&&!!v.anisotropyMap,we=S&&!!v.clearcoatMap,ae=S&&!!v.clearcoatNormalMap,ve=S&&!!v.clearcoatRoughnessMap,Ce=D&&!!v.iridescenceMap,ee=D&&!!v.iridescenceThicknessMap,se=K&&!!v.sheenColorMap,ye=K&&!!v.sheenRoughnessMap,xe=!!v.specularMap,re=!!v.specularColorMap,ze=!!v.specularIntensityMap,P=Y&&!!v.transmissionMap,ue=Y&&!!v.thicknessMap,te=!!v.gradientMap,pe=!!v.alphaMap,J=v.alphaTest>0,j=!!v.alphaHash,ne=!!v.extensions;let De=Ti;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(De=n.toneMapping);const ct={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:ut,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:be,batchingColor:be&&U._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&U.instanceColor!==null,instancingMorph:Ne&&U.morphTexture!==null,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:na,alphaToCoverage:!!v.alphaToCoverage,map:Ke,matcap:Tt,envMap:Ve,envMapMode:Ve&&L.mapping,envMapCubeUVHeight:q,aoMap:je,lightMap:rt,bumpMap:Ue,normalMap:bt,displacementMap:C,emissiveMap:vt,normalMapObjectSpace:bt&&v.normalMapType===If,normalMapTangentSpace:bt&&v.normalMapType===jc,metalnessMap:Xe,roughnessMap:lt,anisotropy:_e,anisotropyMap:H,clearcoat:S,clearcoatMap:we,clearcoatNormalMap:ae,clearcoatRoughnessMap:ve,dispersion:y,iridescence:D,iridescenceMap:Ce,iridescenceThicknessMap:ee,sheen:K,sheenColorMap:se,sheenRoughnessMap:ye,specularMap:xe,specularColorMap:re,specularIntensityMap:ze,transmission:Y,transmissionMap:P,thicknessMap:ue,gradientMap:te,opaque:v.transparent===!1&&v.blending===jn&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:J,alphaHash:j,combine:v.combine,mapUv:Ke&&b(v.map.channel),aoMapUv:je&&b(v.aoMap.channel),lightMapUv:rt&&b(v.lightMap.channel),bumpMapUv:Ue&&b(v.bumpMap.channel),normalMapUv:bt&&b(v.normalMap.channel),displacementMapUv:C&&b(v.displacementMap.channel),emissiveMapUv:vt&&b(v.emissiveMap.channel),metalnessMapUv:Xe&&b(v.metalnessMap.channel),roughnessMapUv:lt&&b(v.roughnessMap.channel),anisotropyMapUv:H&&b(v.anisotropyMap.channel),clearcoatMapUv:we&&b(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&b(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&b(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&b(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&b(v.iridescenceThicknessMap.channel),sheenColorMapUv:se&&b(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&b(v.sheenRoughnessMap.channel),specularMapUv:xe&&b(v.specularMap.channel),specularColorMapUv:re&&b(v.specularColorMap.channel),specularIntensityMapUv:ze&&b(v.specularIntensityMap.channel),transmissionMapUv:P&&b(v.transmissionMap.channel),thicknessMapUv:ue&&b(v.thicknessMap.channel),alphaMapUv:pe&&b(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(bt||_e),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(Ke||pe),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:me,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Re,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Ke&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===Je,decodeVideoTextureEmissive:vt&&v.emissiveMap.isVideoTexture===!0&&qe.getTransfer(v.emissiveMap.colorSpace)===Je,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===di,flipSided:v.side===Vt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)x.push(I),x.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(M(x,v),T(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function M(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function T(v,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)}function w(v){const x=g[v.type];let I;if(x){const W=xi[x];I=rm.clone(W.uniforms)}else I=v.uniforms;return I}function E(v,x){let I=u.get(x);return I!==void 0?++I.usedTimes:(I=new Kv(n,x,v,r),d.push(I),u.set(x,I)),I}function R(v){if(--v.usedTimes===0){const x=d.indexOf(v);d[x]=d[d.length-1],d.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){l.remove(v)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:E,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:N}}function Zv(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,l){n.get(s)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function Jv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ql(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(u,h,f,g,b,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function o(u,h,f,g,b,m){const p=s(u,h,f,g,b,m);f.transmission>0?i.push(p):f.transparent===!0?a.push(p):t.push(p)}function l(u,h,f,g,b,m){const p=s(u,h,f,g,b,m);f.transmission>0?i.unshift(p):f.transparent===!0?a.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||Jv),i.length>1&&i.sort(h||Jl),a.length>1&&a.sort(h||Jl)}function d(){for(let u=e,h=n.length;u<h;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:d,sort:c}}function Qv(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new Ql,n.set(i,[s])):a>=r.length?(s=new Ql,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function e_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new He};break;case"SpotLight":t={position:new F,direction:new F,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function t_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let i_=0;function n_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a_(n){const e=new e_,t=t_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const a=new F,r=new ht,s=new ht;function o(c){let d=0,u=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,M=0,T=0,w=0,E=0,R=0,A=0;c.sort(n_);for(let v=0,x=c.length;v<x;v++){const I=c[v],W=I.color,U=I.intensity,X=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ia?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=W.r*U,u+=W.g*U,h+=W.b*U;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],U);A++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const L=I.shadow,q=t.get(I);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=I.shadow.matrix,M++}i.directional[f]=G,f++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(W).multiplyScalar(U),G.distance=X,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[b]=G;const L=I.shadow;if(I.map&&(i.spotLightMap[E]=I.map,E++,L.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[b]=L.matrix,I.castShadow){const q=t.get(I);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,i.spotShadow[b]=q,i.spotShadowMap[b]=V,w++}b++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(W).multiplyScalar(U),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const L=I.shadow,q=t.get(I);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,q.shadowCameraNear=L.camera.near,q.shadowCameraFar=L.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=I.shadow.matrix,T++}i.point[g]=G,g++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(U),G.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==b||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==M||N.numPointShadows!==T||N.numSpotShadows!==w||N.numSpotMaps!==E||N.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=b,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=w+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,N.directionalLength=f,N.pointLength=g,N.spotLength=b,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=M,N.numPointShadows=T,N.numSpotShadows=w,N.numSpotMaps=E,N.numLightProbes=A,i.version=i_++)}function l(c,d){let u=0,h=0,f=0,g=0,b=0;const m=d.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const T=c[p];if(T.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),u++}else if(T.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),s.identity(),r.copy(T.matrixWorld),r.premultiply(m),s.extractRotation(r),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),g++}else if(T.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const w=i.hemi[b];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function ec(n){const e=new a_(n),t=[],i=[];function a(d){c.camera=d,t.length=0,i.length=0}function r(d){t.push(d)}function s(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function r_(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new ec(n),e.set(a,[o])):r>=s.length?(o=new ec(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,l_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],c_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],tc=new ht,ba=new F,ls=new F;function d_(n,e,t){let i=new No;const a=new Ee,r=new Ee,s=new mt,o=new vm,l=new _m,c={},d=t.maxTextureSize,u={[an]:Vt,[Vt]:an,[di]:di},h=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:s_,fragmentShader:o_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new gi;g.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ut(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let p=this.type;this.render=function(R,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===of&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=cr);const v=n.getRenderTarget(),x=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Bi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const U=p!==this.type;U&&A.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(V=>V.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,V=R.length;X<V;X++){const G=R[X],L=G.shadow;if(L===void 0){Pe("WebGLShadowMap:",G,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;a.copy(L.mapSize);const q=L.getFrameExtents();if(a.multiply(q),r.copy(L.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/q.x),a.x=r.x*q.x,L.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/q.y),a.y=r.y*q.y,L.mapSize.y=r.y)),L.map===null||U===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===_a){if(G.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Ei(a.x,a.y,{format:ia,type:Hi,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),L.map.texture.name=G.name+".shadowMap",L.map.depthTexture=new Ra(a.x,a.y,Si),L.map.depthTexture.name=G.name+".shadowMapDepth",L.map.depthTexture.format=Gi,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Qe,L.map.depthTexture.magFilter=Qe}else{G.isPointLight?(L.map=new ad(a.x),L.map.depthTexture=new gm(a.x,Ri)):(L.map=new Ei(a.x,a.y),L.map.depthTexture=new Ra(a.x,a.y,Ri)),L.map.depthTexture.name=G.name+".shadowMap",L.map.depthTexture.format=Gi;const ie=n.state.buffers.depth.getReversed();this.type===cr?(L.map.depthTexture.compareFunction=ie?Io:Co,L.map.depthTexture.minFilter=Dt,L.map.depthTexture.magFilter=Dt):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Qe,L.map.depthTexture.magFilter=Qe)}L.camera.updateProjectionMatrix()}const Q=L.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<Q;ie++){if(L.map.isWebGLCubeRenderTarget)n.setRenderTarget(L.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(L.map),n.clear());const ce=L.getViewport(ie);s.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),W.viewport(s)}if(G.isPointLight){const ce=L.camera,Re=L.matrix,ke=G.distance||ce.far;ke!==ce.far&&(ce.far=ke,ce.updateProjectionMatrix()),ba.setFromMatrixPosition(G.matrixWorld),ce.position.copy(ba),ls.copy(ce.position),ls.add(l_[ie]),ce.up.copy(c_[ie]),ce.lookAt(ls),ce.updateMatrixWorld(),Re.makeTranslation(-ba.x,-ba.y,-ba.z),tc.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),L._frustum.setFromProjectionMatrix(tc,ce.coordinateSystem,ce.reversedDepth)}else L.updateMatrices(G);i=L.getFrustum(),w(A,N,L.camera,G,this.type)}L.isPointLightShadow!==!0&&this.type===_a&&M(L,N),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,x,I)};function M(R,A){const N=e.update(b);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ei(a.x,a.y,{format:ia,type:Hi})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,N,h,b,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,N,f,b,null)}function T(R,A,N,v){let x=null;const I=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)x=I;else if(x=N.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const W=x.uuid,U=A.uuid;let X=c[W];X===void 0&&(X={},c[W]=X);let V=X[U];V===void 0&&(V=x.clone(),X[U]=V,A.addEventListener("dispose",E)),x=V}if(x.visible=A.visible,x.wireframe=A.wireframe,v===_a?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=n.properties.get(x);W.light=N}return x}function w(R,A,N,v,x){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===_a)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const U=e.update(R),X=R.material;if(Array.isArray(X)){const V=U.groups;for(let G=0,L=V.length;G<L;G++){const q=V[G],Q=X[q.materialIndex];if(Q&&Q.visible){const ie=T(R,Q,v,x);R.onBeforeShadow(n,R,A,N,U,ie,q),n.renderBufferDirect(N,null,U,ie,R,q),R.onAfterShadow(n,R,A,N,U,ie,q)}}}else if(X.visible){const V=T(R,X,v,x);R.onBeforeShadow(n,R,A,N,U,V,null),n.renderBufferDirect(N,null,U,V,R,null),R.onAfterShadow(n,R,A,N,U,V,null)}}const W=R.children;for(let U=0,X=W.length;U<X;U++)w(W[U],A,N,v,x)}function E(R){R.target.removeEventListener("dispose",E);for(const N in c){const v=c[N],x=R.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const u_={[vs]:_s,[xs]:Ms,[ws]:Ts,[ea]:Ss,[_s]:vs,[Ms]:xs,[Ts]:ws,[Ss]:ea};function h_(n,e){function t(){let P=!1;const ue=new mt;let te=null;const pe=new mt(0,0,0,0);return{setMask:function(J){te!==J&&!P&&(n.colorMask(J,J,J,J),te=J)},setLocked:function(J){P=J},setClear:function(J,j,ne,De,ct){ct===!0&&(J*=De,j*=De,ne*=De),ue.set(J,j,ne,De),pe.equals(ue)===!1&&(n.clearColor(J,j,ne,De),pe.copy(ue))},reset:function(){P=!1,te=null,pe.set(-1,0,0,0)}}}function i(){let P=!1,ue=!1,te=null,pe=null,J=null;return{setReversed:function(j){if(ue!==j){const ne=e.get("EXT_clip_control");j?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),ue=j;const De=J;J=null,this.setClear(De)}},getReversed:function(){return ue},setTest:function(j){j?Z(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(j){te!==j&&!P&&(n.depthMask(j),te=j)},setFunc:function(j){if(ue&&(j=u_[j]),pe!==j){switch(j){case vs:n.depthFunc(n.NEVER);break;case _s:n.depthFunc(n.ALWAYS);break;case xs:n.depthFunc(n.LESS);break;case ea:n.depthFunc(n.LEQUAL);break;case ws:n.depthFunc(n.EQUAL);break;case Ss:n.depthFunc(n.GEQUAL);break;case Ms:n.depthFunc(n.GREATER);break;case Ts:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=j}},setLocked:function(j){P=j},setClear:function(j){J!==j&&(ue&&(j=1-j),n.clearDepth(j),J=j)},reset:function(){P=!1,te=null,pe=null,J=null,ue=!1}}}function a(){let P=!1,ue=null,te=null,pe=null,J=null,j=null,ne=null,De=null,ct=null;return{setTest:function(Ye){P||(Ye?Z(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(Ye){ue!==Ye&&!P&&(n.stencilMask(Ye),ue=Ye)},setFunc:function(Ye,yi,Pi){(te!==Ye||pe!==yi||J!==Pi)&&(n.stencilFunc(Ye,yi,Pi),te=Ye,pe=yi,J=Pi)},setOp:function(Ye,yi,Pi){(j!==Ye||ne!==yi||De!==Pi)&&(n.stencilOp(Ye,yi,Pi),j=Ye,ne=yi,De=Pi)},setLocked:function(Ye){P=Ye},setClear:function(Ye){ct!==Ye&&(n.clearStencil(Ye),ct=Ye)},reset:function(){P=!1,ue=null,te=null,pe=null,J=null,j=null,ne=null,De=null,ct=null}}}const r=new t,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,b=!1,m=null,p=null,M=null,T=null,w=null,E=null,R=null,A=new He(0,0,0),N=0,v=!1,x=null,I=null,W=null,U=null,X=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,L=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=L>=1):q.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=L>=2);let Q=null,ie={};const ce=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),ke=new mt().fromArray(ce),ut=new mt().fromArray(Re);function at(P,ue,te,pe){const J=new Uint8Array(4),j=n.createTexture();n.bindTexture(P,j),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ne=0;ne<te;ne++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(ue+ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return j}const $={};$[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),s.setFunc(ea),Ue(!1),bt(il),Z(n.CULL_FACE),je(Bi);function Z(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function me(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function Ne(P,ue){return u[P]!==ue?(n.bindFramebuffer(P,ue),u[P]=ue,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ue),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(P,ue){let te=f,pe=!1;if(P){te=h.get(ue),te===void 0&&(te=[],h.set(ue,te));const J=P.textures;if(te.length!==J.length||te[0]!==n.COLOR_ATTACHMENT0){for(let j=0,ne=J.length;j<ne;j++)te[j]=n.COLOR_ATTACHMENT0+j;te.length=J.length,pe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,pe=!0);pe&&n.drawBuffers(te)}function Ke(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const Tt={[fn]:n.FUNC_ADD,[cf]:n.FUNC_SUBTRACT,[df]:n.FUNC_REVERSE_SUBTRACT};Tt[uf]=n.MIN,Tt[hf]=n.MAX;const Ve={[pf]:n.ZERO,[ff]:n.ONE,[mf]:n.SRC_COLOR,[ys]:n.SRC_ALPHA,[xf]:n.SRC_ALPHA_SATURATE,[vf]:n.DST_COLOR,[yf]:n.DST_ALPHA,[gf]:n.ONE_MINUS_SRC_COLOR,[bs]:n.ONE_MINUS_SRC_ALPHA,[_f]:n.ONE_MINUS_DST_COLOR,[bf]:n.ONE_MINUS_DST_ALPHA,[wf]:n.CONSTANT_COLOR,[Sf]:n.ONE_MINUS_CONSTANT_COLOR,[Mf]:n.CONSTANT_ALPHA,[Tf]:n.ONE_MINUS_CONSTANT_ALPHA};function je(P,ue,te,pe,J,j,ne,De,ct,Ye){if(P===Bi){b===!0&&(me(n.BLEND),b=!1);return}if(b===!1&&(Z(n.BLEND),b=!0),P!==lf){if(P!==m||Ye!==v){if((p!==fn||w!==fn)&&(n.blendEquation(n.FUNC_ADD),p=fn,w=fn),Ye)switch(P){case jn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nl:n.blendFunc(n.ONE,n.ONE);break;case al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ge("WebGLState: Invalid blending: ",P);break}else switch(P){case jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case al:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",P);break}M=null,T=null,E=null,R=null,A.set(0,0,0),N=0,m=P,v=Ye}return}J=J||ue,j=j||te,ne=ne||pe,(ue!==p||J!==w)&&(n.blendEquationSeparate(Tt[ue],Tt[J]),p=ue,w=J),(te!==M||pe!==T||j!==E||ne!==R)&&(n.blendFuncSeparate(Ve[te],Ve[pe],Ve[j],Ve[ne]),M=te,T=pe,E=j,R=ne),(De.equals(A)===!1||ct!==N)&&(n.blendColor(De.r,De.g,De.b,ct),A.copy(De),N=ct),m=P,v=!1}function rt(P,ue){P.side===di?me(n.CULL_FACE):Z(n.CULL_FACE);let te=P.side===Vt;ue&&(te=!te),Ue(te),P.blending===jn&&P.transparent===!1?je(Bi):je(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const pe=P.stencilWrite;o.setTest(pe),pe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),vt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(P){x!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),x=P)}function bt(P){P!==rf?(Z(n.CULL_FACE),P!==I&&(P===il?n.cullFace(n.BACK):P===sf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),I=P}function C(P){P!==W&&(G&&n.lineWidth(P),W=P)}function vt(P,ue,te){P?(Z(n.POLYGON_OFFSET_FILL),(U!==ue||X!==te)&&(n.polygonOffset(ue,te),U=ue,X=te)):me(n.POLYGON_OFFSET_FILL)}function Xe(P){P?Z(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function lt(P){P===void 0&&(P=n.TEXTURE0+V-1),Q!==P&&(n.activeTexture(P),Q=P)}function _e(P,ue,te){te===void 0&&(Q===null?te=n.TEXTURE0+V-1:te=Q);let pe=ie[te];pe===void 0&&(pe={type:void 0,texture:void 0},ie[te]=pe),(pe.type!==P||pe.texture!==ue)&&(Q!==te&&(n.activeTexture(te),Q=te),n.bindTexture(P,ue||$[P]),pe.type=P,pe.texture=ue)}function S(){const P=ie[Q];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function K(){try{n.texSubImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function Y(){try{n.texSubImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function ae(){try{n.texStorage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function ve(){try{n.texStorage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function Ce(){try{n.texImage2D(...arguments)}catch(P){Ge("WebGLState:",P)}}function ee(){try{n.texImage3D(...arguments)}catch(P){Ge("WebGLState:",P)}}function se(P){ke.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ke.copy(P))}function ye(P){ut.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ut.copy(P))}function xe(P,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let pe=te.get(P);pe===void 0&&(pe=n.getUniformBlockIndex(ue,P.name),te.set(P,pe))}function re(P,ue){const pe=c.get(ue).get(P);l.get(ue)!==pe&&(n.uniformBlockBinding(ue,pe,P.__bindingPointIndex),l.set(ue,pe))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Q=null,ie={},u={},h=new WeakMap,f=[],g=null,b=!1,m=null,p=null,M=null,T=null,w=null,E=null,R=null,A=new He(0,0,0),N=0,v=!1,x=null,I=null,W=null,U=null,X=null,ke.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Z,disable:me,bindFramebuffer:Ne,drawBuffers:be,useProgram:Ke,setBlending:je,setMaterial:rt,setFlipSided:Ue,setCullFace:bt,setLineWidth:C,setPolygonOffset:vt,setScissorTest:Xe,activeTexture:lt,bindTexture:_e,unbindTexture:S,compressedTexImage2D:y,compressedTexImage3D:D,texImage2D:Ce,texImage3D:ee,updateUBOMapping:xe,uniformBlockBinding:re,texStorage2D:ae,texStorage3D:ve,texSubImage2D:K,texSubImage3D:Y,compressedTexSubImage2D:H,compressedTexSubImage3D:we,scissor:se,viewport:ye,reset:ze}}function p_(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,y){return f?new OffscreenCanvas(S,y):br("canvas")}function b(S,y,D){let K=1;const Y=_e(S);if((Y.width>D||Y.height>D)&&(K=D/Math.max(Y.width,Y.height)),K<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const H=Math.floor(K*Y.width),we=Math.floor(K*Y.height);u===void 0&&(u=g(H,we));const ae=y?g(H,we):u;return ae.width=H,ae.height=we,ae.getContext("2d").drawImage(S,0,0,H,we),Pe("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+H+"x"+we+")."),ae}else return"data"in S&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function M(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(S,y,D,K,Y=!1){if(S!==null){if(n[S]!==void 0)return n[S];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let H=y;if(y===n.RED&&(D===n.FLOAT&&(H=n.R32F),D===n.HALF_FLOAT&&(H=n.R16F),D===n.UNSIGNED_BYTE&&(H=n.R8)),y===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.R8UI),D===n.UNSIGNED_SHORT&&(H=n.R16UI),D===n.UNSIGNED_INT&&(H=n.R32UI),D===n.BYTE&&(H=n.R8I),D===n.SHORT&&(H=n.R16I),D===n.INT&&(H=n.R32I)),y===n.RG&&(D===n.FLOAT&&(H=n.RG32F),D===n.HALF_FLOAT&&(H=n.RG16F),D===n.UNSIGNED_BYTE&&(H=n.RG8)),y===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RG8UI),D===n.UNSIGNED_SHORT&&(H=n.RG16UI),D===n.UNSIGNED_INT&&(H=n.RG32UI),D===n.BYTE&&(H=n.RG8I),D===n.SHORT&&(H=n.RG16I),D===n.INT&&(H=n.RG32I)),y===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGB8UI),D===n.UNSIGNED_SHORT&&(H=n.RGB16UI),D===n.UNSIGNED_INT&&(H=n.RGB32UI),D===n.BYTE&&(H=n.RGB8I),D===n.SHORT&&(H=n.RGB16I),D===n.INT&&(H=n.RGB32I)),y===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),D===n.UNSIGNED_INT&&(H=n.RGBA32UI),D===n.BYTE&&(H=n.RGBA8I),D===n.SHORT&&(H=n.RGBA16I),D===n.INT&&(H=n.RGBA32I)),y===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),y===n.RGBA){const we=Y?gr:qe.getTransfer(K);D===n.FLOAT&&(H=n.RGBA32F),D===n.HALF_FLOAT&&(H=n.RGBA16F),D===n.UNSIGNED_BYTE&&(H=we===Je?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function w(S,y){let D;return S?y===null||y===Ri||y===Ta?D=n.DEPTH24_STENCIL8:y===Si?D=n.DEPTH32F_STENCIL8:y===Ma&&(D=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ri||y===Ta?D=n.DEPTH_COMPONENT24:y===Si?D=n.DEPTH_COMPONENT32F:y===Ma&&(D=n.DEPTH_COMPONENT16),D}function E(S,y){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Qe&&S.minFilter!==Dt?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function R(S){const y=S.target;y.removeEventListener("dispose",R),N(y),y.isVideoTexture&&d.delete(y)}function A(S){const y=S.target;y.removeEventListener("dispose",A),x(y)}function N(S){const y=i.get(S);if(y.__webglInit===void 0)return;const D=S.source,K=h.get(D);if(K){const Y=K[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&v(S),Object.keys(K).length===0&&h.delete(D)}i.remove(S)}function v(S){const y=i.get(S);n.deleteTexture(y.__webglTexture);const D=S.source,K=h.get(D);delete K[y.__cacheKey],s.memory.textures--}function x(S){const y=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Y=0;Y<y.__webglFramebuffer[K].length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[K][Y]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const D=S.textures;for(let K=0,Y=D.length;K<Y;K++){const H=i.get(D[K]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),s.memory.textures--),i.remove(D[K])}i.remove(S)}let I=0;function W(){I=0}function U(){const S=I;return S>=a.maxTextures&&Pe("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),I+=1,S}function X(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.colorSpace),y.join()}function V(S,y){const D=i.get(S);if(S.isVideoTexture&&Xe(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&D.__version!==S.version){const K=S.image;if(K===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,S,y);return}}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+y)}function G(S,y){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){$(D,S,y);return}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+y)}function L(S,y){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){$(D,S,y);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+y)}function q(S,y){const D=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&D.__version!==S.version){Z(D,S,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+y)}const Q={[Sa]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[As]:n.MIRRORED_REPEAT},ie={[Qe]:n.NEAREST,[Af]:n.NEAREST_MIPMAP_NEAREST,[Ua]:n.NEAREST_MIPMAP_LINEAR,[Dt]:n.LINEAR,[Pr]:n.LINEAR_MIPMAP_NEAREST,[gn]:n.LINEAR_MIPMAP_LINEAR},ce={[Pf]:n.NEVER,[Ff]:n.ALWAYS,[Df]:n.LESS,[Co]:n.LEQUAL,[Lf]:n.EQUAL,[Io]:n.GEQUAL,[kf]:n.GREATER,[Nf]:n.NOTEQUAL};function Re(S,y){if(y.type===Si&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Dt||y.magFilter===Pr||y.magFilter===Ua||y.magFilter===gn||y.minFilter===Dt||y.minFilter===Pr||y.minFilter===Ua||y.minFilter===gn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Q[y.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Q[y.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Q[y.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ie[y.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ie[y.minFilter]),y.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qe||y.minFilter!==Ua&&y.minFilter!==gn||y.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ke(S,y){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",R));const K=y.source;let Y=h.get(K);Y===void 0&&(Y={},h.set(K,Y));const H=X(y);if(H!==S.__cacheKey){Y[H]===void 0&&(Y[H]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,D=!0),Y[H].usedTimes++;const we=Y[S.__cacheKey];we!==void 0&&(Y[S.__cacheKey].usedTimes--,we.usedTimes===0&&v(y)),S.__cacheKey=H,S.__webglTexture=Y[H].texture}return D}function ut(S,y,D){return Math.floor(Math.floor(S/D)/y)}function at(S,y,D,K){const H=S.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,D,K,y.data);else{H.sort((ee,se)=>ee.start-se.start);let we=0;for(let ee=1;ee<H.length;ee++){const se=H[we],ye=H[ee],xe=se.start+se.count,re=ut(ye.start,y.width,4),ze=ut(se.start,y.width,4);ye.start<=xe+1&&re===ze&&ut(ye.start+ye.count-1,y.width,4)===re?se.count=Math.max(se.count,ye.start+ye.count-se.start):(++we,H[we]=ye)}H.length=we+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),ve=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ee=0,se=H.length;ee<se;ee++){const ye=H[ee],xe=Math.floor(ye.start/4),re=Math.ceil(ye.count/4),ze=xe%y.width,P=Math.floor(xe/y.width),ue=re,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,ze,P,ue,te,D,K,y.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ve),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function $(S,y,D){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const Y=ke(S,y),H=y.source;t.bindTexture(K,S.__webglTexture,n.TEXTURE0+D);const we=i.get(H);if(H.version!==we.__version||Y===!0){t.activeTexture(n.TEXTURE0+D);const ae=qe.getPrimaries(qe.workingColorSpace),ve=y.colorSpace===Ji?null:qe.getPrimaries(y.colorSpace),Ce=y.colorSpace===Ji||ae===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ee=b(y.image,!1,a.maxTextureSize);ee=lt(y,ee);const se=r.convert(y.format,y.colorSpace),ye=r.convert(y.type);let xe=T(y.internalFormat,se,ye,y.colorSpace,y.isVideoTexture);Re(K,y);let re;const ze=y.mipmaps,P=y.isVideoTexture!==!0,ue=we.__version===void 0||Y===!0,te=H.dataReady,pe=E(y,ee);if(y.isDepthTexture)xe=w(y.format===yn,y.type),ue&&(P?t.texStorage2D(n.TEXTURE_2D,1,xe,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,xe,ee.width,ee.height,0,se,ye,null));else if(y.isDataTexture)if(ze.length>0){P&&ue&&t.texStorage2D(n.TEXTURE_2D,pe,xe,ze[0].width,ze[0].height);for(let J=0,j=ze.length;J<j;J++)re=ze[J],P?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,re.width,re.height,se,ye,re.data):t.texImage2D(n.TEXTURE_2D,J,xe,re.width,re.height,0,se,ye,re.data);y.generateMipmaps=!1}else P?(ue&&t.texStorage2D(n.TEXTURE_2D,pe,xe,ee.width,ee.height),te&&at(y,ee,se,ye)):t.texImage2D(n.TEXTURE_2D,0,xe,ee.width,ee.height,0,se,ye,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){P&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,xe,ze[0].width,ze[0].height,ee.depth);for(let J=0,j=ze.length;J<j;J++)if(re=ze[J],y.format!==pi)if(se!==null)if(P){if(te)if(y.layerUpdates.size>0){const ne=Dl(re.width,re.height,y.format,y.type);for(const De of y.layerUpdates){const ct=re.data.subarray(De*ne/re.data.BYTES_PER_ELEMENT,(De+1)*ne/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,De,re.width,re.height,1,se,ct)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,ee.depth,se,re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,xe,re.width,re.height,ee.depth,0,re.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,ee.depth,se,ye,re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,xe,re.width,re.height,ee.depth,0,se,ye,re.data)}else{P&&ue&&t.texStorage2D(n.TEXTURE_2D,pe,xe,ze[0].width,ze[0].height);for(let J=0,j=ze.length;J<j;J++)re=ze[J],y.format!==pi?se!==null?P?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,re.width,re.height,se,re.data):t.compressedTexImage2D(n.TEXTURE_2D,J,xe,re.width,re.height,0,re.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,re.width,re.height,se,ye,re.data):t.texImage2D(n.TEXTURE_2D,J,xe,re.width,re.height,0,se,ye,re.data)}else if(y.isDataArrayTexture)if(P){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,xe,ee.width,ee.height,ee.depth),te)if(y.layerUpdates.size>0){const J=Dl(ee.width,ee.height,y.format,y.type);for(const j of y.layerUpdates){const ne=ee.data.subarray(j*J/ee.data.BYTES_PER_ELEMENT,(j+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,ee.width,ee.height,1,se,ye,ne)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,se,ye,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,ee.width,ee.height,ee.depth,0,se,ye,ee.data);else if(y.isData3DTexture)P?(ue&&t.texStorage3D(n.TEXTURE_3D,pe,xe,ee.width,ee.height,ee.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,se,ye,ee.data)):t.texImage3D(n.TEXTURE_3D,0,xe,ee.width,ee.height,ee.depth,0,se,ye,ee.data);else if(y.isFramebufferTexture){if(ue)if(P)t.texStorage2D(n.TEXTURE_2D,pe,xe,ee.width,ee.height);else{let J=ee.width,j=ee.height;for(let ne=0;ne<pe;ne++)t.texImage2D(n.TEXTURE_2D,ne,xe,J,j,0,se,ye,null),J>>=1,j>>=1}}else if(ze.length>0){if(P&&ue){const J=_e(ze[0]);t.texStorage2D(n.TEXTURE_2D,pe,xe,J.width,J.height)}for(let J=0,j=ze.length;J<j;J++)re=ze[J],P?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,se,ye,re):t.texImage2D(n.TEXTURE_2D,J,xe,se,ye,re);y.generateMipmaps=!1}else if(P){if(ue){const J=_e(ee);t.texStorage2D(n.TEXTURE_2D,pe,xe,J.width,J.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,ye,ee)}else t.texImage2D(n.TEXTURE_2D,0,xe,se,ye,ee);m(y)&&p(K),we.__version=H.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Z(S,y,D){if(y.image.length!==6)return;const K=ke(S,y),Y=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);const H=i.get(Y);if(Y.version!==H.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const we=qe.getPrimaries(qe.workingColorSpace),ae=y.colorSpace===Ji?null:qe.getPrimaries(y.colorSpace),ve=y.colorSpace===Ji||we===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,se=[];for(let j=0;j<6;j++)!Ce&&!ee?se[j]=b(y.image[j],!0,a.maxCubemapSize):se[j]=ee?y.image[j].image:y.image[j],se[j]=lt(y,se[j]);const ye=se[0],xe=r.convert(y.format,y.colorSpace),re=r.convert(y.type),ze=T(y.internalFormat,xe,re,y.colorSpace),P=y.isVideoTexture!==!0,ue=H.__version===void 0||K===!0,te=Y.dataReady;let pe=E(y,ye);Re(n.TEXTURE_CUBE_MAP,y);let J;if(Ce){P&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ze,ye.width,ye.height);for(let j=0;j<6;j++){J=se[j].mipmaps;for(let ne=0;ne<J.length;ne++){const De=J[ne];y.format!==pi?xe!==null?P?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,De.width,De.height,xe,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,ze,De.width,De.height,0,De.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,De.width,De.height,xe,re,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,ze,De.width,De.height,0,xe,re,De.data)}}}else{if(J=y.mipmaps,P&&ue){J.length>0&&pe++;const j=_e(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,ze,j.width,j.height)}for(let j=0;j<6;j++)if(ee){P?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,se[j].width,se[j].height,xe,re,se[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,se[j].width,se[j].height,0,xe,re,se[j].data);for(let ne=0;ne<J.length;ne++){const ct=J[ne].image[j].image;P?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,ct.width,ct.height,xe,re,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,ze,ct.width,ct.height,0,xe,re,ct.data)}}else{P?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xe,re,se[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,xe,re,se[j]);for(let ne=0;ne<J.length;ne++){const De=J[ne];P?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,xe,re,De.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,ze,xe,re,De.image[j])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),H.__version=Y.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function me(S,y,D,K,Y,H){const we=r.convert(D.format,D.colorSpace),ae=r.convert(D.type),ve=T(D.internalFormat,we,ae,D.colorSpace),Ce=i.get(y),ee=i.get(D);if(ee.__renderTarget=y,!Ce.__hasExternalTextures){const se=Math.max(1,y.width>>H),ye=Math.max(1,y.height>>H);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,H,ve,se,ye,y.depth,0,we,ae,null):t.texImage2D(Y,H,ve,se,ye,0,we,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),vt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Y,ee.__webglTexture,0,C(y)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Y,ee.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(S,y,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),y.depthBuffer){const K=y.depthTexture,Y=K&&K.isDepthTexture?K.type:null,H=w(y.stencilBuffer,Y),we=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;vt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(y),H,y.width,y.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(y),H,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,H,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,S)}else{const K=y.textures;for(let Y=0;Y<K.length;Y++){const H=K[Y],we=r.convert(H.format,H.colorSpace),ae=r.convert(H.type),ve=T(H.internalFormat,we,ae,H.colorSpace);vt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(y),ve,y.width,y.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(y),ve,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ve,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(S,y,D){const K=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(y.depthTexture);if(Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Re(n.TEXTURE_CUBE_MAP,y.depthTexture);const Ce=r.convert(y.depthTexture.format),ee=r.convert(y.depthTexture.type);let se;y.depthTexture.format===Gi?se=n.DEPTH_COMPONENT24:y.depthTexture.format===yn&&(se=n.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,se,y.width,y.height,0,Ce,ee,null)}}else V(y.depthTexture,0);const H=Y.__webglTexture,we=C(y),ae=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,ve=y.depthTexture.format===yn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Gi)vt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,ae,H,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,ve,ae,H,0);else if(y.depthTexture.format===yn)vt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,ae,H,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,ve,ae,H,0);else throw new Error("Unknown depthTexture format")}function Ke(S){const y=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==S.depthTexture){const K=S.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Y)};K.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=K}if(S.depthTexture&&!y.__autoAllocateDepthBuffer)if(D)for(let K=0;K<6;K++)be(y.__webglFramebuffer[K],S,K);else{const K=S.texture.mipmaps;K&&K.length>0?be(y.__webglFramebuffer[0],S,0):be(y.__webglFramebuffer,S,0)}else if(D){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),Ne(y.__webglDepthbuffer[K],S,!1);else{const Y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,H)}}else{const K=S.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ne(y.__webglDepthbuffer,S,!1);else{const Y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(S,y,D){const K=i.get(S);y!==void 0&&me(K.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Ke(S)}function Ve(S){const y=S.texture,D=i.get(S),K=i.get(y);S.addEventListener("dispose",A);const Y=S.textures,H=S.isWebGLCubeRenderTarget===!0,we=Y.length>1;if(we||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,s.memory.textures++),H){D.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[ae]=[];for(let ve=0;ve<y.mipmaps.length;ve++)D.__webglFramebuffer[ae][ve]=n.createFramebuffer()}else D.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)D.__webglFramebuffer[ae]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(we)for(let ae=0,ve=Y.length;ae<ve;ae++){const Ce=i.get(Y[ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),s.memory.textures++)}if(S.samples>0&&vt(S)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ae=0;ae<Y.length;ae++){const ve=Y[ae];D.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ae]);const Ce=r.convert(ve.format,ve.colorSpace),ee=r.convert(ve.type),se=T(ve.internalFormat,Ce,ee,ve.colorSpace,S.isXRRenderTarget===!0),ye=C(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,se,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,D.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(D.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Re(n.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)me(D.__webglFramebuffer[ae][ve],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve);else me(D.__webglFramebuffer[ae],S,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ae=0,ve=Y.length;ae<ve;ae++){const Ce=Y[ae],ee=i.get(Ce);let se=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,ee.__webglTexture),Re(se,Ce),me(D.__webglFramebuffer,S,Ce,n.COLOR_ATTACHMENT0+ae,se,0),m(Ce)&&p(se)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),Re(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)me(D.__webglFramebuffer[ve],S,y,n.COLOR_ATTACHMENT0,ae,ve);else me(D.__webglFramebuffer,S,y,n.COLOR_ATTACHMENT0,ae,0);m(y)&&p(ae),t.unbindTexture()}S.depthBuffer&&Ke(S)}function je(S){const y=S.textures;for(let D=0,K=y.length;D<K;D++){const Y=y[D];if(m(Y)){const H=M(S),we=i.get(Y).__webglTexture;t.bindTexture(H,we),p(H),t.unbindTexture()}}}const rt=[],Ue=[];function bt(S){if(S.samples>0){if(vt(S)===!1){const y=S.textures,D=S.width,K=S.height;let Y=n.COLOR_BUFFER_BIT;const H=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(S),ae=y.length>1;if(ae)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const ve=S.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const ee=i.get(y[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,D,K,0,0,D,K,Y,n.NEAREST),l===!0&&(rt.length=0,Ue.length=0,rt.push(n.COLOR_ATTACHMENT0+Ce),S.depthBuffer&&S.resolveDepthBuffer===!1&&(rt.push(H),Ue.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const ee=i.get(y[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const y=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function C(S){return Math.min(a.maxSamples,S.samples)}function vt(S){const y=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Xe(S){const y=s.render.frame;d.get(S)!==y&&(d.set(S,y),S.update())}function lt(S,y){const D=S.colorSpace,K=S.format,Y=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==na&&D!==Ji&&(qe.getTransfer(D)===Je?(K!==pi||Y!==Qt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",D)),y}function _e(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=L,this.setTextureCube=q,this.rebindTextures=Tt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=me,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function f_(n,e){function t(i,a=Ji){let r;const s=qe.getTransfer(a);if(i===Qt)return n.UNSIGNED_BYTE;if(i===Mo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===To)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hc)return n.BYTE;if(i===Gc)return n.SHORT;if(i===Ma)return n.UNSIGNED_SHORT;if(i===So)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===Hi)return n.HALF_FLOAT;if(i===Kc)return n.ALPHA;if(i===$c)return n.RGB;if(i===pi)return n.RGBA;if(i===Gi)return n.DEPTH_COMPONENT;if(i===yn)return n.DEPTH_STENCIL;if(i===Xc)return n.RED;if(i===Eo)return n.RED_INTEGER;if(i===ia)return n.RG;if(i===Ro)return n.RG_INTEGER;if(i===Ao)return n.RGBA_INTEGER;if(i===dr||i===ur||i===hr||i===pr)if(s===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cs||i===Is||i===Ps||i===Ds)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cs)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Is)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ps)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ds)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ls||i===ks||i===Ns||i===Fs||i===Os||i===Us||i===zs)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ls||i===ks)return s===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ns)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fs)return r.COMPRESSED_R11_EAC;if(i===Os)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Us)return r.COMPRESSED_RG11_EAC;if(i===zs)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bs||i===Ws||i===Hs||i===Gs||i===Vs||i===qs||i===Ks||i===$s||i===Xs||i===js||i===Ys||i===Zs||i===Js||i===Qs)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bs)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ws)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hs)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gs)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vs)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qs)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ks)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$s)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xs)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===js)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ys)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zs)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Js)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qs)return s===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eo||i===to||i===io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===eo)return s===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===no||i===ao||i===ro||i===so)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===no)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ld(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ci({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b_ extends En{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const b=typeof XRWebGLBinding<"u",m=new y_,p={},M=t.getContextAttributes();let T=null,w=null;const E=[],R=[],A=new Ee;let N=null;const v=new ci;v.viewport=new mt;const x=new ci;x.viewport=new mt;const I=[v,x],W=new Tm;let U=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=E[$];return Z===void 0&&(Z=new Qr,E[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=E[$];return Z===void 0&&(Z=new Qr,E[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=E[$];return Z===void 0&&(Z=new Qr,E[$]=Z),Z.getHandSpace()};function V($){const Z=R.indexOf($.inputSource);if(Z===-1)return;const me=E[Z];me!==void 0&&(me.update($.inputSource,$.frame,c||s),me.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",L);for(let $=0;$<E.length;$++){const Z=R[$];Z!==null&&(R[$]=null,E[$].disconnect(Z))}U=null,X=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(T),f=null,h=null,u=null,a=null,w=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(a,t)),u},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",G),a.addEventListener("inputsourceschange",L),M.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ne=null,be=null;M.depth&&(be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?yn:Gi,Ne=M.stencil?Ta:Ri);const Ke={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Ke),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Ei(h.textureWidth,h.textureHeight,{format:pi,type:Qt,depthTexture:new Ra(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(a,t,me),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Ei(f.framebufferWidth,f.framebufferHeight,{format:pi,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),at.setContext(a),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L($){for(let Z=0;Z<$.removed.length;Z++){const me=$.removed[Z],Ne=R.indexOf(me);Ne>=0&&(R[Ne]=null,E[Ne].disconnect(me))}for(let Z=0;Z<$.added.length;Z++){const me=$.added[Z];let Ne=R.indexOf(me);if(Ne===-1){for(let Ke=0;Ke<E.length;Ke++)if(Ke>=R.length){R.push(me),Ne=Ke;break}else if(R[Ke]===null){R[Ke]=me,Ne=Ke;break}if(Ne===-1)break}const be=E[Ne];be&&be.connect(me)}}const q=new F,Q=new F;function ie($,Z,me){q.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const Ne=q.distanceTo(Q),be=Z.projectionMatrix.elements,Ke=me.projectionMatrix.elements,Tt=be[14]/(be[10]-1),Ve=be[14]/(be[10]+1),je=(be[9]+1)/be[5],rt=(be[9]-1)/be[5],Ue=(be[8]-1)/be[0],bt=(Ke[8]+1)/Ke[0],C=Tt*Ue,vt=Tt*bt,Xe=Ne/(-Ue+bt),lt=Xe*-Ue;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(lt),$.translateZ(Xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const _e=Tt+Xe,S=Ve+Xe,y=C-lt,D=vt+(Ne-lt),K=je*Ve/S*_e,Y=rt*Ve/S*_e;$.projectionMatrix.makePerspective(y,D,K,Y,_e,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let Z=$.near,me=$.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(me=m.depthFar)),W.near=x.near=v.near=Z,W.far=x.far=v.far=me,(U!==W.near||X!==W.far)&&(a.updateRenderState({depthNear:W.near,depthFar:W.far}),U=W.near,X=W.far),W.layers.mask=$.layers.mask|6,v.layers.mask=W.layers.mask&3,x.layers.mask=W.layers.mask&5;const Ne=$.parent,be=W.cameras;ce(W,Ne);for(let Ke=0;Ke<be.length;Ke++)ce(be[Ke],Ne);be.length===2?ie(W,v,x):W.projectionMatrix.copy(v.projectionMatrix),Re($,W,Ne)};function Re($,Z,me){me===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=lo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function($){return p[$]};let ke=null;function ut($,Z){if(d=Z.getViewerPose(c||s),g=Z,d!==null){const me=d.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let Ne=!1;me.length!==W.cameras.length&&(W.cameras.length=0,Ne=!0);for(let Ve=0;Ve<me.length;Ve++){const je=me[Ve];let rt=null;if(f!==null)rt=f.getViewport(je);else{const bt=u.getViewSubImage(h,je);rt=bt.viewport,Ve===0&&(e.setRenderTargetTextures(w,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(w))}let Ue=I[Ve];Ue===void 0&&(Ue=new ci,Ue.layers.enable(Ve),Ue.viewport=new mt,I[Ve]=Ue),Ue.matrix.fromArray(je.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(je.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(rt.x,rt.y,rt.width,rt.height),Ve===0&&(W.matrix.copy(Ue.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ne===!0&&W.cameras.push(Ue)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){u=i.getBinding();const Ve=u.getDepthInformation(me[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,a.renderState)}if(be&&be.includes("camera-access")&&b){e.state.unbindTexture(),u=i.getBinding();for(let Ve=0;Ve<me.length;Ve++){const je=me[Ve].camera;if(je){let rt=p[je];rt||(rt=new ld,p[je]=rt);const Ue=u.getCameraImage(je);rt.sourceTexture=Ue}}}}for(let me=0;me<E.length;me++){const Ne=R[me],be=E[me];Ne!==null&&be!==void 0&&be.update(Ne,Z,c||s)}ke&&ke($,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const at=new dd;at.setAnimationLoop(ut),this.setAnimationLoop=function($){ke=$},this.dispose=function(){}}}const pn=new Ai,v_=new ht;function __(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,td(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,M,T,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,w=M.envMapRotation;T&&(m.envMap.value=T,pn.copy(w),pn.x*=-1,pn.y*=-1,pn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(pn.y*=-1,pn.z*=-1),m.envMapRotation.value.setFromMatrix4(v_.makeRotationFromEuler(pn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function x_(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const w=T.program;i.uniformBlockBinding(M,w)}function c(M,T){let w=a[M.id];w===void 0&&(g(M),w=d(M),a[M.id]=w,M.addEventListener("dispose",m));const E=T.program;i.updateUBOMapping(M,E);const R=e.render.frame;r[M.id]!==R&&(h(M),r[M.id]=R)}function d(M){const T=u();M.__bindingPointIndex=T;const w=n.createBuffer(),E=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,w),w}function u(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const T=a[M.id],w=M.uniforms,E=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,A=w.length;R<A;R++){const N=Array.isArray(w[R])?w[R]:[w[R]];for(let v=0,x=N.length;v<x;v++){const I=N[v];if(f(I,R,v,E)===!0){const W=I.__offset,U=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let V=0;V<U.length;V++){const G=U[V],L=b(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,W+X,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,X),X+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,T,w,E){const R=M.value,A=T+"_"+w;if(E[A]===void 0)return typeof R=="number"||typeof R=="boolean"?E[A]=R:E[A]=R.clone(),!0;{const N=E[A];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return E[A]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(M){const T=M.uniforms;let w=0;const E=16;for(let A=0,N=T.length;A<N;A++){const v=Array.isArray(T[A])?T[A]:[T[A]];for(let x=0,I=v.length;x<I;x++){const W=v[x],U=Array.isArray(W.value)?W.value:[W.value];for(let X=0,V=U.length;X<V;X++){const G=U[X],L=b(G),q=w%E,Q=q%L.boundary,ie=q+Q;w+=Q,ie!==0&&E-ie<L.storage&&(w+=E-ie),W.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=L.storage}}}const R=w%E;return R>0&&(w+=E-R),M.__size=w,M.__cache={},this}function b(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",M),T}function m(M){const T=M.target;T.removeEventListener("dispose",m);const w=s.indexOf(T.__bindingPointIndex);s.splice(w,1),n.deleteBuffer(a[T.id]),delete a[T.id],delete r[T.id]}function p(){for(const M in a)n.deleteBuffer(a[M]);s=[],a={},r={}}return{bind:l,update:c,dispose:p}}const w_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bi=null;function S_(){return bi===null&&(bi=new hm(w_,16,16,ia,Hi),bi.name="DFG_LUT",bi.minFilter=Dt,bi.magFilter=Dt,bi.wrapS=Ui,bi.wrapT=Ui,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class md{constructor(e={}){const{canvas:t=Of(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Qt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;const b=f,m=new Set([Ao,Ro,Eo]),p=new Set([Qt,Ri,Ma,Ta,Mo,To]),M=new Uint32Array(4),T=new Int32Array(4);let w=null,E=null;const R=[],A=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let x=!1;this._outputColorSpace=Zt;let I=0,W=0,U=null,X=-1,V=null;const G=new mt,L=new mt;let q=null;const Q=new He(0);let ie=0,ce=t.width,Re=t.height,ke=1,ut=null,at=null;const $=new mt(0,0,ce,Re),Z=new mt(0,0,ce,Re);let me=!1;const Ne=new No;let be=!1,Ke=!1;const Tt=new ht,Ve=new F,je=new mt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function bt(){return U===null?ke:1}let C=i;function vt(_,k){return t.getContext(_,k)}try{const _={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),C===null){const k="webgl2";if(C=vt(k,_),C===null)throw vt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw Ge("WebGLRenderer: "+_.message),_}let Xe,lt,_e,S,y,D,K,Y,H,we,ae,ve,Ce,ee,se,ye,xe,re,ze,P,ue,te,pe,J;function j(){Xe=new Sb(C),Xe.init(),te=new f_(C,Xe),lt=new fb(C,Xe,e,te),_e=new h_(C,Xe),lt.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),S=new Eb(C),y=new Zv,D=new p_(C,Xe,_e,y,lt,te,S),K=new gb(v),Y=new wb(v),H=new Im(C),pe=new hb(C,H),we=new Mb(C,H,S,pe),ae=new Ab(C,we,H,S),ze=new Rb(C,lt,D),ye=new mb(y),ve=new Yv(v,K,Y,Xe,lt,pe,ye),Ce=new __(v,y),ee=new Qv,se=new r_(Xe),re=new ub(v,K,Y,_e,ae,g,l),xe=new d_(v,ae,lt),J=new x_(C,S,lt,_e),P=new pb(C,Xe,S),ue=new Tb(C,Xe,S),S.programs=ve.programs,v.capabilities=lt,v.extensions=Xe,v.properties=y,v.renderLists=ee,v.shadowMap=xe,v.state=_e,v.info=S}j(),b!==Qt&&(N=new Ib(b,t.width,t.height,a,r));const ne=new b_(v,C);this.xr=ne,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const _=Xe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Xe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(_){_!==void 0&&(ke=_,this.setSize(ce,Re,!1))},this.getSize=function(_){return _.set(ce,Re)},this.setSize=function(_,k,B=!0){if(ne.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=_,Re=k,t.width=Math.floor(_*ke),t.height=Math.floor(k*ke),B===!0&&(t.style.width=_+"px",t.style.height=k+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,_,k)},this.getDrawingBufferSize=function(_){return _.set(ce*ke,Re*ke).floor()},this.setDrawingBufferSize=function(_,k,B){ce=_,Re=k,ke=B,t.width=Math.floor(_*B),t.height=Math.floor(k*B),this.setViewport(0,0,_,k)},this.setEffects=function(_){if(b===Qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let k=0;k<_.length;k++)if(_[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(G)},this.getViewport=function(_){return _.copy($)},this.setViewport=function(_,k,B,z){_.isVector4?$.set(_.x,_.y,_.z,_.w):$.set(_,k,B,z),_e.viewport(G.copy($).multiplyScalar(ke).round())},this.getScissor=function(_){return _.copy(Z)},this.setScissor=function(_,k,B,z){_.isVector4?Z.set(_.x,_.y,_.z,_.w):Z.set(_,k,B,z),_e.scissor(L.copy(Z).multiplyScalar(ke).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(_){_e.setScissorTest(me=_)},this.setOpaqueSort=function(_){ut=_},this.setTransparentSort=function(_){at=_},this.getClearColor=function(_){return _.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(_=!0,k=!0,B=!0){let z=0;if(_){let O=!1;if(U!==null){const oe=U.texture.format;O=m.has(oe)}if(O){const oe=U.texture.type,fe=p.has(oe),de=re.getClearColor(),ge=re.getClearAlpha(),Se=de.r,Ae=de.g,Me=de.b;fe?(M[0]=Se,M[1]=Ae,M[2]=Me,M[3]=ge,C.clearBufferuiv(C.COLOR,0,M)):(T[0]=Se,T[1]=Ae,T[2]=Me,T[3]=ge,C.clearBufferiv(C.COLOR,0,T))}else z|=C.COLOR_BUFFER_BIT}k&&(z|=C.DEPTH_BUFFER_BIT),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),re.dispose(),ee.dispose(),se.dispose(),y.dispose(),K.dispose(),Y.dispose(),ae.dispose(),pe.dispose(),J.dispose(),ve.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Xo),ne.removeEventListener("sessionend",jo),sn.stop()};function De(_){_.preventDefault(),vr("WebGLRenderer: Context Lost."),x=!0}function ct(){vr("WebGLRenderer: Context Restored."),x=!1;const _=S.autoReset,k=xe.enabled,B=xe.autoUpdate,z=xe.needsUpdate,O=xe.type;j(),S.autoReset=_,xe.enabled=k,xe.autoUpdate=B,xe.needsUpdate=z,xe.type=O}function Ye(_){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function yi(_){const k=_.target;k.removeEventListener("dispose",yi),Pi(k)}function Pi(_){Kp(_),y.remove(_)}function Kp(_){const k=y.get(_).programs;k!==void 0&&(k.forEach(function(B){ve.releaseProgram(B)}),_.isShaderMaterial&&ve.releaseShaderCache(_))}this.renderBufferDirect=function(_,k,B,z,O,oe){k===null&&(k=rt);const fe=O.isMesh&&O.matrixWorld.determinant()<0,de=Xp(_,k,B,z,O);_e.setMaterial(z,fe);let ge=B.index,Se=1;if(z.wireframe===!0){if(ge=we.getWireframeAttribute(B),ge===void 0)return;Se=2}const Ae=B.drawRange,Me=B.attributes.position;let Be=Ae.start*Se,tt=(Ae.start+Ae.count)*Se;oe!==null&&(Be=Math.max(Be,oe.start*Se),tt=Math.min(tt,(oe.start+oe.count)*Se)),ge!==null?(Be=Math.max(Be,0),tt=Math.min(tt,ge.count)):Me!=null&&(Be=Math.max(Be,0),tt=Math.min(tt,Me.count));const pt=tt-Be;if(pt<0||pt===1/0)return;pe.setup(O,z,de,B,ge);let ft,st=P;if(ge!==null&&(ft=H.get(ge),st=ue,st.setIndex(ft)),O.isMesh)z.wireframe===!0?(_e.setLineWidth(z.wireframeLinewidth*bt()),st.setMode(C.LINES)):st.setMode(C.TRIANGLES);else if(O.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),_e.setLineWidth(Te*bt()),O.isLineSegments?st.setMode(C.LINES):O.isLineLoop?st.setMode(C.LINE_LOOP):st.setMode(C.LINE_STRIP)}else O.isPoints?st.setMode(C.POINTS):O.isSprite&&st.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ea("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Te=O._multiDrawStarts,Ze=O._multiDrawCounts,$e=O._multiDrawCount,$t=ge?H.get(ge).bytesPerElement:1,Rn=y.get(z).currentProgram.getUniforms();for(let Xt=0;Xt<$e;Xt++)Rn.setValue(C,"_gl_DrawID",Xt),st.render(Te[Xt]/$t,Ze[Xt])}else if(O.isInstancedMesh)st.renderInstances(Be,pt,O.count);else if(B.isInstancedBufferGeometry){const Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ze=Math.min(B.instanceCount,Te);st.renderInstances(Be,pt,Ze)}else st.render(Be,pt)};function $o(_,k,B){_.transparent===!0&&_.side===di&&_.forceSinglePass===!1?(_.side=Vt,_.needsUpdate=!0,Oa(_,k,B),_.side=an,_.needsUpdate=!0,Oa(_,k,B),_.side=di):Oa(_,k,B)}this.compile=function(_,k,B=null){B===null&&(B=_),E=se.get(B),E.init(k),A.push(E),B.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),_!==B&&_.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),E.setupLights();const z=new Set;return _.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const de=oe[fe];$o(de,B,O),z.add(de)}else $o(oe,B,O),z.add(oe)}),E=A.pop(),z},this.compileAsync=function(_,k,B=null){const z=this.compile(_,k,B);return new Promise(O=>{function oe(){if(z.forEach(function(fe){y.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){O(_);return}setTimeout(oe,10)}Xe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ar=null;function $p(_){Ar&&Ar(_)}function Xo(){sn.stop()}function jo(){sn.start()}const sn=new dd;sn.setAnimationLoop($p),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(_){Ar=_,ne.setAnimationLoop(_),_===null?sn.stop():sn.start()},ne.addEventListener("sessionstart",Xo),ne.addEventListener("sessionend",jo),this.render=function(_,k){if(k!==void 0&&k.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;const B=ne.enabled===!0&&ne.isPresenting===!0,z=N!==null&&(U===null||B)&&N.begin(v,U);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(k),k=ne.getCamera()),_.isScene===!0&&_.onBeforeRender(v,_,k,U),E=se.get(_,A.length),E.init(k),A.push(E),Tt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ne.setFromProjectionMatrix(Tt,Mi,k.reversedDepth),Ke=this.localClippingEnabled,be=ye.init(this.clippingPlanes,Ke),w=ee.get(_,R.length),w.init(),R.push(w),ne.enabled===!0&&ne.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Cr(fe,k,-1/0,v.sortObjects)}Cr(_,k,0,v.sortObjects),w.finish(),v.sortObjects===!0&&w.sort(ut,at),Ue=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ue&&re.addToRenderList(w,_),this.info.render.frame++,be===!0&&ye.beginShadows();const O=E.state.shadowsArray;if(xe.render(O,_,k),be===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&N.hasRenderPass())===!1){const fe=w.opaque,de=w.transmissive;if(E.setupLights(),k.isArrayCamera){const ge=k.cameras;if(de.length>0)for(let Se=0,Ae=ge.length;Se<Ae;Se++){const Me=ge[Se];Zo(fe,de,_,Me)}Ue&&re.render(_);for(let Se=0,Ae=ge.length;Se<Ae;Se++){const Me=ge[Se];Yo(w,_,Me,Me.viewport)}}else de.length>0&&Zo(fe,de,_,k),Ue&&re.render(_),Yo(w,_,k)}U!==null&&W===0&&(D.updateMultisampleRenderTarget(U),D.updateRenderTargetMipmap(U)),z&&N.end(v),_.isScene===!0&&_.onAfterRender(v,_,k),pe.resetDefaultState(),X=-1,V=null,A.pop(),A.length>0?(E=A[A.length-1],be===!0&&ye.setGlobalState(v.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null};function Cr(_,k,B,z){if(_.visible===!1)return;if(_.layers.test(k.layers)){if(_.isGroup)B=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(k);else if(_.isLight)E.pushLight(_),_.castShadow&&E.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Ne.intersectsSprite(_)){z&&je.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Tt);const fe=ae.update(_),de=_.material;de.visible&&w.push(_,fe,de,B,je.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Ne.intersectsObject(_))){const fe=ae.update(_),de=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),je.copy(_.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),je.copy(fe.boundingSphere.center)),je.applyMatrix4(_.matrixWorld).applyMatrix4(Tt)),Array.isArray(de)){const ge=fe.groups;for(let Se=0,Ae=ge.length;Se<Ae;Se++){const Me=ge[Se],Be=de[Me.materialIndex];Be&&Be.visible&&w.push(_,fe,Be,B,je.z,Me)}}else de.visible&&w.push(_,fe,de,B,je.z,null)}}const oe=_.children;for(let fe=0,de=oe.length;fe<de;fe++)Cr(oe[fe],k,B,z)}function Yo(_,k,B,z){const{opaque:O,transmissive:oe,transparent:fe}=_;E.setupLightsView(B),be===!0&&ye.setGlobalState(v.clippingPlanes,B),z&&_e.viewport(G.copy(z)),O.length>0&&Fa(O,k,B),oe.length>0&&Fa(oe,k,B),fe.length>0&&Fa(fe,k,B),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Zo(_,k,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){const Be=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new Ei(1,1,{generateMipmaps:!0,type:Be?Hi:Qt,minFilter:gn,samples:lt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const oe=E.state.transmissionRenderTarget[z.id],fe=z.viewport||G;oe.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);const de=v.getRenderTarget(),ge=v.getActiveCubeFace(),Se=v.getActiveMipmapLevel();v.setRenderTarget(oe),v.getClearColor(Q),ie=v.getClearAlpha(),ie<1&&v.setClearColor(16777215,.5),v.clear(),Ue&&re.render(B);const Ae=v.toneMapping;v.toneMapping=Ti;const Me=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),be===!0&&ye.setGlobalState(v.clippingPlanes,z),Fa(_,B,z),D.updateMultisampleRenderTarget(oe),D.updateRenderTargetMipmap(oe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let tt=0,pt=k.length;tt<pt;tt++){const ft=k[tt],{object:st,geometry:Te,material:Ze,group:$e}=ft;if(Ze.side===di&&st.layers.test(z.layers)){const $t=Ze.side;Ze.side=Vt,Ze.needsUpdate=!0,Jo(st,B,z,Te,Ze,$e),Ze.side=$t,Ze.needsUpdate=!0,Be=!0}}Be===!0&&(D.updateMultisampleRenderTarget(oe),D.updateRenderTargetMipmap(oe))}v.setRenderTarget(de,ge,Se),v.setClearColor(Q,ie),Me!==void 0&&(z.viewport=Me),v.toneMapping=Ae}function Fa(_,k,B){const z=k.isScene===!0?k.overrideMaterial:null;for(let O=0,oe=_.length;O<oe;O++){const fe=_[O],{object:de,geometry:ge,group:Se}=fe;let Ae=fe.material;Ae.allowOverride===!0&&z!==null&&(Ae=z),de.layers.test(B.layers)&&Jo(de,k,B,ge,Ae,Se)}}function Jo(_,k,B,z,O,oe){_.onBeforeRender(v,k,B,z,O,oe),_.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),O.onBeforeRender(v,k,B,z,_,oe),O.transparent===!0&&O.side===di&&O.forceSinglePass===!1?(O.side=Vt,O.needsUpdate=!0,v.renderBufferDirect(B,k,z,O,_,oe),O.side=an,O.needsUpdate=!0,v.renderBufferDirect(B,k,z,O,_,oe),O.side=di):v.renderBufferDirect(B,k,z,O,_,oe),_.onAfterRender(v,k,B,z,O,oe)}function Oa(_,k,B){k.isScene!==!0&&(k=rt);const z=y.get(_),O=E.state.lights,oe=E.state.shadowsArray,fe=O.state.version,de=ve.getParameters(_,O.state,oe,k,B),ge=ve.getProgramCacheKey(de);let Se=z.programs;z.environment=_.isMeshStandardMaterial?k.environment:null,z.fog=k.fog,z.envMap=(_.isMeshStandardMaterial?Y:K).get(_.envMap||z.environment),z.envMapRotation=z.environment!==null&&_.envMap===null?k.environmentRotation:_.envMapRotation,Se===void 0&&(_.addEventListener("dispose",yi),Se=new Map,z.programs=Se);let Ae=Se.get(ge);if(Ae!==void 0){if(z.currentProgram===Ae&&z.lightsStateVersion===fe)return el(_,de),Ae}else de.uniforms=ve.getUniforms(_),_.onBeforeCompile(de,v),Ae=ve.acquireProgram(de,ge),Se.set(ge,Ae),z.uniforms=de.uniforms;const Me=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Me.clippingPlanes=ye.uniform),el(_,de),z.needsLights=Yp(_),z.lightsStateVersion=fe,z.needsLights&&(Me.ambientLightColor.value=O.state.ambient,Me.lightProbe.value=O.state.probe,Me.directionalLights.value=O.state.directional,Me.directionalLightShadows.value=O.state.directionalShadow,Me.spotLights.value=O.state.spot,Me.spotLightShadows.value=O.state.spotShadow,Me.rectAreaLights.value=O.state.rectArea,Me.ltc_1.value=O.state.rectAreaLTC1,Me.ltc_2.value=O.state.rectAreaLTC2,Me.pointLights.value=O.state.point,Me.pointLightShadows.value=O.state.pointShadow,Me.hemisphereLights.value=O.state.hemi,Me.directionalShadowMap.value=O.state.directionalShadowMap,Me.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Me.spotShadowMap.value=O.state.spotShadowMap,Me.spotLightMatrix.value=O.state.spotLightMatrix,Me.spotLightMap.value=O.state.spotLightMap,Me.pointShadowMap.value=O.state.pointShadowMap,Me.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ae,z.uniformsList=null,Ae}function Qo(_){if(_.uniformsList===null){const k=_.currentProgram.getUniforms();_.uniformsList=mr.seqWithValue(k.seq,_.uniforms)}return _.uniformsList}function el(_,k){const B=y.get(_);B.outputColorSpace=k.outputColorSpace,B.batching=k.batching,B.batchingColor=k.batchingColor,B.instancing=k.instancing,B.instancingColor=k.instancingColor,B.instancingMorph=k.instancingMorph,B.skinning=k.skinning,B.morphTargets=k.morphTargets,B.morphNormals=k.morphNormals,B.morphColors=k.morphColors,B.morphTargetsCount=k.morphTargetsCount,B.numClippingPlanes=k.numClippingPlanes,B.numIntersection=k.numClipIntersection,B.vertexAlphas=k.vertexAlphas,B.vertexTangents=k.vertexTangents,B.toneMapping=k.toneMapping}function Xp(_,k,B,z,O){k.isScene!==!0&&(k=rt),D.resetTextureUnits();const oe=k.fog,fe=z.isMeshStandardMaterial?k.environment:null,de=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:na,ge=(z.isMeshStandardMaterial?Y:K).get(z.envMap||fe),Se=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ae=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!B.morphAttributes.position,Be=!!B.morphAttributes.normal,tt=!!B.morphAttributes.color;let pt=Ti;z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(pt=v.toneMapping);const ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,st=ft!==void 0?ft.length:0,Te=y.get(z),Ze=E.state.lights;if(be===!0&&(Ke===!0||_!==V)){const kt=_===V&&z.id===X;ye.setState(z,_,kt)}let $e=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Ze.state.version||Te.outputColorSpace!==de||O.isBatchedMesh&&Te.batching===!1||!O.isBatchedMesh&&Te.batching===!0||O.isBatchedMesh&&Te.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Te.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Te.instancing===!1||!O.isInstancedMesh&&Te.instancing===!0||O.isSkinnedMesh&&Te.skinning===!1||!O.isSkinnedMesh&&Te.skinning===!0||O.isInstancedMesh&&Te.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Te.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Te.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Te.instancingMorph===!1&&O.morphTexture!==null||Te.envMap!==ge||z.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ye.numPlanes||Te.numIntersection!==ye.numIntersection)||Te.vertexAlphas!==Se||Te.vertexTangents!==Ae||Te.morphTargets!==Me||Te.morphNormals!==Be||Te.morphColors!==tt||Te.toneMapping!==pt||Te.morphTargetsCount!==st)&&($e=!0):($e=!0,Te.__version=z.version);let $t=Te.currentProgram;$e===!0&&($t=Oa(z,k,O));let Rn=!1,Xt=!1,ca=!1;const dt=$t.getUniforms(),Bt=Te.uniforms;if(_e.useProgram($t.program)&&(Rn=!0,Xt=!0,ca=!0),z.id!==X&&(X=z.id,Xt=!0),Rn||V!==_){_e.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),dt.setValue(C,"projectionMatrix",_.projectionMatrix),dt.setValue(C,"viewMatrix",_.matrixWorldInverse);const Wt=dt.map.cameraPosition;Wt!==void 0&&Wt.setValue(C,Ve.setFromMatrixPosition(_.matrixWorld)),lt.logarithmicDepthBuffer&&dt.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),V!==_&&(V=_,Xt=!0,ca=!0)}if(Te.needsLights&&(Ze.state.directionalShadowMap.length>0&&dt.setValue(C,"directionalShadowMap",Ze.state.directionalShadowMap,D),Ze.state.spotShadowMap.length>0&&dt.setValue(C,"spotShadowMap",Ze.state.spotShadowMap,D),Ze.state.pointShadowMap.length>0&&dt.setValue(C,"pointShadowMap",Ze.state.pointShadowMap,D)),O.isSkinnedMesh){dt.setOptional(C,O,"bindMatrix"),dt.setOptional(C,O,"bindMatrixInverse");const kt=O.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),dt.setValue(C,"boneTexture",kt.boneTexture,D))}O.isBatchedMesh&&(dt.setOptional(C,O,"batchingTexture"),dt.setValue(C,"batchingTexture",O._matricesTexture,D),dt.setOptional(C,O,"batchingIdTexture"),dt.setValue(C,"batchingIdTexture",O._indirectTexture,D),dt.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&dt.setValue(C,"batchingColorTexture",O._colorsTexture,D));const ei=B.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&ze.update(O,B,$t),(Xt||Te.receiveShadow!==O.receiveShadow)&&(Te.receiveShadow=O.receiveShadow,dt.setValue(C,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Bt.envMap.value=ge,Bt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&k.environment!==null&&(Bt.envMapIntensity.value=k.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=S_()),Xt&&(dt.setValue(C,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&jp(Bt,ca),oe&&z.fog===!0&&Ce.refreshFogUniforms(Bt,oe),Ce.refreshMaterialUniforms(Bt,z,ke,Re,E.state.transmissionRenderTarget[_.id]),mr.upload(C,Qo(Te),Bt,D)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(mr.upload(C,Qo(Te),Bt,D),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(C,"center",O.center),dt.setValue(C,"modelViewMatrix",O.modelViewMatrix),dt.setValue(C,"normalMatrix",O.normalMatrix),dt.setValue(C,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const kt=z.uniformsGroups;for(let Wt=0,Ir=kt.length;Wt<Ir;Wt++){const on=kt[Wt];J.update(on,$t),J.bind(on,$t)}}return $t}function jp(_,k){_.ambientLightColor.needsUpdate=k,_.lightProbe.needsUpdate=k,_.directionalLights.needsUpdate=k,_.directionalLightShadows.needsUpdate=k,_.pointLights.needsUpdate=k,_.pointLightShadows.needsUpdate=k,_.spotLights.needsUpdate=k,_.spotLightShadows.needsUpdate=k,_.rectAreaLights.needsUpdate=k,_.hemisphereLights.needsUpdate=k}function Yp(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(_,k,B){const z=y.get(_);z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),y.get(_.texture).__webglTexture=k,y.get(_.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,k){const B=y.get(_);B.__webglFramebuffer=k,B.__useDefaultFramebuffer=k===void 0};const Zp=C.createFramebuffer();this.setRenderTarget=function(_,k=0,B=0){U=_,I=k,W=B;let z=null,O=!1,oe=!1;if(_){const de=y.get(_);if(de.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(C.FRAMEBUFFER,de.__webglFramebuffer),G.copy(_.viewport),L.copy(_.scissor),q=_.scissorTest,_e.viewport(G),_e.scissor(L),_e.setScissorTest(q),X=-1;return}else if(de.__webglFramebuffer===void 0)D.setupRenderTarget(_);else if(de.__hasExternalTextures)D.rebindTextures(_,y.get(_.texture).__webglTexture,y.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Ae=_.depthTexture;if(de.__boundDepthTexture!==Ae){if(Ae!==null&&y.has(Ae)&&(_.width!==Ae.image.width||_.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(_)}}const ge=_.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(oe=!0);const Se=y.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Se[k])?z=Se[k][B]:z=Se[k],O=!0):_.samples>0&&D.useMultisampledRTT(_)===!1?z=y.get(_).__webglMultisampledFramebuffer:Array.isArray(Se)?z=Se[B]:z=Se,G.copy(_.viewport),L.copy(_.scissor),q=_.scissorTest}else G.copy($).multiplyScalar(ke).floor(),L.copy(Z).multiplyScalar(ke).floor(),q=me;if(B!==0&&(z=Zp),_e.bindFramebuffer(C.FRAMEBUFFER,z)&&_e.drawBuffers(_,z),_e.viewport(G),_e.scissor(L),_e.setScissorTest(q),O){const de=y.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,de.__webglTexture,B)}else if(oe){const de=k;for(let ge=0;ge<_.textures.length;ge++){const Se=y.get(_.textures[ge]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ge,Se.__webglTexture,B,de)}}else if(_!==null&&B!==0){const de=y.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,de.__webglTexture,B)}X=-1},this.readRenderTargetPixels=function(_,k,B,z,O,oe,fe,de=0){if(!(_&&_.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=y.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){_e.bindFramebuffer(C.FRAMEBUFFER,ge);try{const Se=_.textures[de],Ae=Se.format,Me=Se.type;if(!lt.textureFormatReadable(Ae)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Me)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=_.width-z&&B>=0&&B<=_.height-O&&(_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),C.readPixels(k,B,z,O,te.convert(Ae),te.convert(Me),oe))}finally{const Se=U!==null?y.get(U).__webglFramebuffer:null;_e.bindFramebuffer(C.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(_,k,B,z,O,oe,fe,de=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=y.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(k>=0&&k<=_.width-z&&B>=0&&B<=_.height-O){_e.bindFramebuffer(C.FRAMEBUFFER,ge);const Se=_.textures[de],Ae=Se.format,Me=Se.type;if(!lt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Be),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),C.readPixels(k,B,z,O,te.convert(Ae),te.convert(Me),0);const tt=U!==null?y.get(U).__webglFramebuffer:null;_e.bindFramebuffer(C.FRAMEBUFFER,tt);const pt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Uf(C,pt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Be),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(Be),C.deleteSync(pt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,k=null,B=0){const z=Math.pow(2,-B),O=Math.floor(_.image.width*z),oe=Math.floor(_.image.height*z),fe=k!==null?k.x:0,de=k!==null?k.y:0;D.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,fe,de,O,oe),_e.unbindTexture()};const Jp=C.createFramebuffer(),Qp=C.createFramebuffer();this.copyTextureToTexture=function(_,k,B=null,z=null,O=0,oe=null){oe===null&&(O!==0?(Ea("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let fe,de,ge,Se,Ae,Me,Be,tt,pt;const ft=_.isCompressedTexture?_.mipmaps[oe]:_.image;if(B!==null)fe=B.max.x-B.min.x,de=B.max.y-B.min.y,ge=B.isBox3?B.max.z-B.min.z:1,Se=B.min.x,Ae=B.min.y,Me=B.isBox3?B.min.z:0;else{const ei=Math.pow(2,-O);fe=Math.floor(ft.width*ei),de=Math.floor(ft.height*ei),_.isDataArrayTexture?ge=ft.depth:_.isData3DTexture?ge=Math.floor(ft.depth*ei):ge=1,Se=0,Ae=0,Me=0}z!==null?(Be=z.x,tt=z.y,pt=z.z):(Be=0,tt=0,pt=0);const st=te.convert(k.format),Te=te.convert(k.type);let Ze;k.isData3DTexture?(D.setTexture3D(k,0),Ze=C.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),Ze=C.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),Ze=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const $e=C.getParameter(C.UNPACK_ROW_LENGTH),$t=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Rn=C.getParameter(C.UNPACK_SKIP_PIXELS),Xt=C.getParameter(C.UNPACK_SKIP_ROWS),ca=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ft.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ft.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Se),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ae),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Me);const dt=_.isDataArrayTexture||_.isData3DTexture,Bt=k.isDataArrayTexture||k.isData3DTexture;if(_.isDepthTexture){const ei=y.get(_),kt=y.get(k),Wt=y.get(ei.__renderTarget),Ir=y.get(kt.__renderTarget);_e.bindFramebuffer(C.READ_FRAMEBUFFER,Wt.__webglFramebuffer),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let on=0;on<ge;on++)dt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,y.get(_).__webglTexture,O,Me+on),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,y.get(k).__webglTexture,oe,pt+on)),C.blitFramebuffer(Se,Ae,fe,de,Be,tt,fe,de,C.DEPTH_BUFFER_BIT,C.NEAREST);_e.bindFramebuffer(C.READ_FRAMEBUFFER,null),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||_.isRenderTargetTexture||y.has(_)){const ei=y.get(_),kt=y.get(k);_e.bindFramebuffer(C.READ_FRAMEBUFFER,Jp),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,Qp);for(let Wt=0;Wt<ge;Wt++)dt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ei.__webglTexture,O,Me+Wt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ei.__webglTexture,O),Bt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,kt.__webglTexture,oe,pt+Wt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,kt.__webglTexture,oe),O!==0?C.blitFramebuffer(Se,Ae,fe,de,Be,tt,fe,de,C.COLOR_BUFFER_BIT,C.NEAREST):Bt?C.copyTexSubImage3D(Ze,oe,Be,tt,pt+Wt,Se,Ae,fe,de):C.copyTexSubImage2D(Ze,oe,Be,tt,Se,Ae,fe,de);_e.bindFramebuffer(C.READ_FRAMEBUFFER,null),_e.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Bt?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(Ze,oe,Be,tt,pt,fe,de,ge,st,Te,ft.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(Ze,oe,Be,tt,pt,fe,de,ge,st,ft.data):C.texSubImage3D(Ze,oe,Be,tt,pt,fe,de,ge,st,Te,ft):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,oe,Be,tt,fe,de,st,Te,ft.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,oe,Be,tt,ft.width,ft.height,st,ft.data):C.texSubImage2D(C.TEXTURE_2D,oe,Be,tt,fe,de,st,Te,ft);C.pixelStorei(C.UNPACK_ROW_LENGTH,$e),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$t),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Rn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ca),oe===0&&k.generateMipmaps&&C.generateMipmap(Ze),_e.unbindTexture()},this.initRenderTarget=function(_){y.get(_).__webglFramebuffer===void 0&&D.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?D.setTextureCube(_,0):_.isData3DTexture?D.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?D.setTexture2DArray(_,0):D.setTexture2D(_,0),_e.unbindTexture()},this.resetState=function(){I=0,W=0,U=null,_e.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const ic={type:"change"},Oo={type:"start"},gd={type:"end"},or=new Lo,nc=new Zi,M_=Math.cos(70*Bf.DEG2RAD),xt=new F,Ht=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cs=1e-6;class T_ extends Am{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Mn,this._lastTargetPosition=new F,this._quat=new Mn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pl,this._sphericalDelta=new Pl,this._scale=1,this._panOffset=new F,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new F,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=R_.bind(this),this._onPointerDown=E_.bind(this),this._onPointerUp=A_.bind(this),this._onContextMenu=N_.bind(this),this._onMouseWheel=P_.bind(this),this._onKeyDown=D_.bind(this),this._onTouchStart=L_.bind(this),this._onTouchMove=k_.bind(this),this._onMouseDown=C_.bind(this),this._onMouseMove=I_.bind(this),this._interceptControlDown=F_.bind(this),this._interceptControlUp=O_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ic),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Ht:i>Math.PI&&(i-=Ht),a<-Math.PI?a+=Ht:a>Math.PI&&(a-=Ht),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=xt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(or.origin.copy(this.object.position),or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(or.direction))<M_?this.object.lookAt(this.target):(nc.setFromNormalAndCoplanarPoint(this.object.up,this.target),or.intersectPlane(nc,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>cs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cs||this._lastTargetPosition.distanceToSquared(this.target)>cs?(this.dispatchEvent(ic),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ht/60*this.autoRotateSpeed*e:Ht/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;xt.copy(a).sub(this.target);let r=xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,r=t-i.top,s=i.width,o=i.height;this._mouse.x=a/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(i*i+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function E_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function R_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function A_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gd),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function C_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=nt.DOLLY;break;case Xn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=nt.ROTATE}break;case Xn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Oo)}function I_(n){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function P_(n){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(n.preventDefault(),this.dispatchEvent(Oo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(gd))}function D_(n){this.enabled!==!1&&this._handleKeyDown(n)}function L_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Kn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=nt.TOUCH_ROTATE;break;case Kn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Kn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=nt.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Oo)}function k_(n){switch(this._trackPointer(n),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=nt.NONE}}function N_(n){this.enabled!==!1&&n.preventDefault()}function F_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var wa=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),i(++n%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function i(d){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===d?"block":"none";n=d}var a=(performance||Date).now(),r=a,s=0,o=t(new wa.Panel("FPS","#0ff","#002")),l=t(new wa.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new wa.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){s++;var d=(performance||Date).now();if(l.update(d-a,200),d>=r+1e3&&(o.update(s*1e3/(d-r),100),r=d,s=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:e,setMode:i}};wa.Panel=function(n,e,t){var i=1/0,a=0,r=Math.round,s=r(window.devicePixelRatio||1),o=80*s,l=48*s,c=3*s,d=2*s,u=3*s,h=15*s,f=74*s,g=30*s,b=document.createElement("canvas");b.width=o,b.height=l,b.style.cssText="width:80px;height:48px";var m=b.getContext("2d");return m.font="bold "+9*s+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,o,l),m.fillStyle=e,m.fillText(n,c,d),m.fillRect(u,h,f,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u,h,f,g),{dom:b,update:function(p,M){i=Math.min(i,p),a=Math.max(a,p),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,o,h),m.fillStyle=e,m.fillText(r(p)+" "+n+" ("+r(i)+"-"+r(a)+")",c,d),m.drawImage(b,u+s,h,f-s,g,u,h,f-s,g),m.fillRect(u+f-s,h,s,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(u+f-s,h,s,r((1-p/M)*g))}}};const U_=10,z_=JSON.parse(`[{"name":"mcrdsd","width":60,"height":50,"objects":[{"name":"Family Day","type":"activity","spriteId":"activity/training","x":5,"y":0,"z":5},{"name":"Church Auditorium","type":"building","spriteId":"building/chapel","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":5},{"name":"Parade Deck","type":"activity","spriteId":"activity/training","x":25,"y":0,"z":5},{"name":"Receiving Barracks","type":"building","spriteId":"building/barracks","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":5},{"name":"Lecture Hall","type":"building","spriteId":"building/office","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":5},{"name":"Dental","type":"building","spriteId":"building/office","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":5},{"name":"Rifle Range","type":"activity","spriteId":"activity/training","x":45,"y":0,"z":5},{"name":"Road","type":"road","spriteId":"ground/road","x":5,"y":0,"z":15},{"name":"Road","type":"road","spriteId":"ground/road","x":15,"y":0,"z":15},{"name":"Road","type":"road","spriteId":"ground/road","x":25,"y":0,"z":15},{"name":"Road","type":"road","spriteId":"ground/road","x":35,"y":0,"z":15},{"name":"Road","type":"road","spriteId":"ground/road","x":45,"y":0,"z":15},{"name":"Road","type":"road","spriteId":"ground/road","x":55,"y":0,"z":15},{"name":"Company Office","type":"building","spriteId":"building/office","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":25},{"name":"Barracks","type":"building","spriteId":"building/barracks","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":25},{"name":"Barracks","type":"building","spriteId":"building/barracks","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":25},{"name":"Chow Hall","type":"building","spriteId":"building/chow","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":25},{"name":"MCX","type":"building","spriteId":"building/chow","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":25},{"name":"Armoury","type":"building","spriteId":"building/office","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"Medical","type":"building","spriteId":"building/office","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":35},{"name":"Supply","type":"building","spriteId":"building/office","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":35},{"name":"Drill Practice","type":"activity","spriteId":"activity/training","x":25,"y":0,"z":35},{"name":"Obstacle Course","type":"activity","spriteId":"activity/training","x":35,"y":0,"z":35},{"name":"Rappell Course","type":"activity","spriteId":"activity/training","x":45,"y":0,"z":35},{"name":"Pool","type":"activity","spriteId":"activity/pool","x":55,"y":0,"z":35},{"name":"The trail loop","type":"activity","spriteId":"activity/track","x":5,"y":0,"z":45},{"name":"Pull-up Bars","type":"activity","spriteId":"activity/training","x":15,"y":0,"z":45},{"name":"400m track","type":"activity","spriteId":"activity/track","x":25,"y":0,"z":45},{"name":"MCMAP Pit","type":"activity","spriteId":"activity/training","x":35,"y":0,"z":45},{"name":"Logs","type":"activity","spriteId":"activity/training","x":45,"y":0,"z":45},{"name":"Thunderdown","type":"activity","spriteId":"activity/training","x":55,"y":0,"z":45},{"name":"Crucible Trail","type":"activity","spriteId":"activity/track","x":55,"y":0,"z":40},{"name":"Gas Chamber","type":"activity","spriteId":"activity/training","x":5,"y":0,"z":40}]},{"name":"guadalcanal","width":60,"height":50,"objects":[{"name":"Transport Ship","type":"activity","spriteId":"activity/landing","x":5,"y":0,"z":5},{"name":"Landing Beach","type":"activity","spriteId":"activity/landing","x":15,"y":0,"z":5},{"name":"Command Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":5},{"name":"Henderson Field","type":"activity","spriteId":"activity/track","x":35,"y":0,"z":5},{"name":"Field Hospital","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":5},{"name":"Supply Dump","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":5},{"name":"Jungle Trail","type":"activity","spriteId":"ground/jungle","x":5,"y":0,"z":15},{"name":"Jungle Trail","type":"activity","spriteId":"ground/jungle","x":15,"y":0,"z":15},{"name":"Jungle Trail","type":"activity","spriteId":"ground/jungle","x":25,"y":0,"z":15},{"name":"River Crossing","type":"activity","spriteId":"activity/pool","x":35,"y":0,"z":15},{"name":"Jungle Patrol","type":"activity","spriteId":"ground/jungle","x":45,"y":0,"z":15},{"name":"Foxhole Line","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":15},{"name":"Ridge","type":"activity","spriteId":"activity/training","x":5,"y":0,"z":25},{"name":"Ridge","type":"activity","spriteId":"activity/training","x":15,"y":0,"z":25},{"name":"Command Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":25},{"name":"Supply Dump","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":25},{"name":"Henderson Field","type":"activity","spriteId":"activity/track","x":45,"y":0,"z":25},{"name":"Field Hospital","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"Landing Beach","type":"activity","spriteId":"ground/sand","x":5,"y":0,"z":35},{"name":"Jungle Trail","type":"activity","spriteId":"ground/jungle","x":15,"y":0,"z":35},{"name":"Foxhole Line","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":35},{"name":"River Crossing","type":"activity","spriteId":"activity/pool","x":35,"y":0,"z":35},{"name":"Jungle Patrol","type":"activity","spriteId":"ground/jungle","x":45,"y":0,"z":35},{"name":"Ridge","type":"activity","spriteId":"activity/training","x":55,"y":0,"z":35},{"name":"Transport Ship","type":"activity","spriteId":"activity/landing","x":5,"y":0,"z":45},{"name":"Supply Dump","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":45},{"name":"Command Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Henderson Field","type":"activity","spriteId":"activity/track","x":35,"y":0,"z":45},{"name":"Field Hospital","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":45},{"name":"Foxhole Line","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":45}]},{"name":"iwojima","width":60,"height":50,"objects":[{"name":"Invasion Beach","type":"activity","spriteId":"activity/landing","x":5,"y":0,"z":5},{"name":"Black Sand Beach","type":"activity","spriteId":"ground/volcanic","x":15,"y":0,"z":5},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":5},{"name":"Motoyama Airfield","type":"activity","spriteId":"activity/track","x":35,"y":0,"z":5},{"name":"Field Hospital","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":5},{"name":"Pillbox Row","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":5},{"name":"Mt. Suribachi Base","type":"activity","spriteId":"activity/suribachi","x":5,"y":0,"z":15},{"name":"Mt. Suribachi Slope","type":"activity","spriteId":"activity/suribachi","x":15,"y":0,"z":15},{"name":"Mt. Suribachi Summit","type":"activity","spriteId":"activity/flag","x":25,"y":0,"z":15},{"name":"Cave Network","type":"building","spriteId":"building/cave","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":15},{"name":"Supply Line","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":15},{"name":"Pillbox Row","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":15},{"name":"Invasion Beach","type":"activity","spriteId":"activity/landing","x":5,"y":0,"z":25},{"name":"Black Sand Beach","type":"activity","spriteId":"ground/volcanic","x":15,"y":0,"z":25},{"name":"Motoyama Airfield","type":"activity","spriteId":"activity/track","x":25,"y":0,"z":25},{"name":"Cave Network","type":"building","spriteId":"building/cave","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":25},{"name":"Mt. Suribachi Summit","type":"activity","spriteId":"activity/flag","x":45,"y":0,"z":25},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"Mt. Suribachi Base","type":"activity","spriteId":"activity/suribachi","x":5,"y":0,"z":35},{"name":"Mt. Suribachi Slope","type":"activity","spriteId":"activity/suribachi","x":15,"y":0,"z":35},{"name":"Supply Line","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":35},{"name":"Field Hospital","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":35},{"name":"Mt. Suribachi Summit","type":"activity","spriteId":"activity/flag","x":45,"y":0,"z":35},{"name":"Pillbox Row","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":35},{"name":"Invasion Beach","type":"activity","spriteId":"ground/volcanic","x":5,"y":0,"z":45},{"name":"Motoyama Airfield","type":"activity","spriteId":"activity/track","x":15,"y":0,"z":45},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Cave Network","type":"building","spriteId":"building/cave","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":45},{"name":"Mt. Suribachi Summit","type":"activity","spriteId":"activity/flag","x":45,"y":0,"z":45},{"name":"Supply Line","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":45}]},{"name":"inchon","width":60,"height":50,"objects":[{"name":"Landing Craft","type":"activity","spriteId":"activity/landing","x":5,"y":0,"z":5},{"name":"Sea Wall","type":"building","spriteId":"building/seawall","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":5},{"name":"Inchon Harbor","type":"activity","spriteId":"activity/landing","x":25,"y":0,"z":5},{"name":"Kimpo Airfield","type":"activity","spriteId":"activity/track","x":35,"y":0,"z":5},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":5},{"name":"Supply Dock","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":5},{"name":"Han River","type":"activity","spriteId":"activity/pool","x":5,"y":0,"z":15},{"name":"Seoul Streets","type":"activity","spriteId":"building/urban","x":15,"y":0,"z":15},{"name":"Barricade Row","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":15},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":15},{"name":"Kimpo Airfield","type":"activity","spriteId":"activity/track","x":45,"y":0,"z":15},{"name":"Landing Craft","type":"activity","spriteId":"activity/landing","x":55,"y":0,"z":15},{"name":"Inchon Harbor","type":"activity","spriteId":"ground/sand","x":5,"y":0,"z":25},{"name":"Seoul Streets","type":"activity","spriteId":"building/urban","x":15,"y":0,"z":25},{"name":"Han River","type":"activity","spriteId":"activity/pool","x":25,"y":0,"z":25},{"name":"Barricade Row","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":25},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":25},{"name":"Supply Dock","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"Sea Wall","type":"building","spriteId":"building/seawall","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":35},{"name":"Kimpo Airfield","type":"activity","spriteId":"activity/track","x":15,"y":0,"z":35},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":35},{"name":"Seoul Streets","type":"activity","spriteId":"building/urban","x":35,"y":0,"z":35},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":35},{"name":"Landing Craft","type":"activity","spriteId":"activity/landing","x":55,"y":0,"z":35},{"name":"Inchon Harbor","type":"activity","spriteId":"activity/landing","x":5,"y":0,"z":45},{"name":"Han River","type":"activity","spriteId":"activity/pool","x":15,"y":0,"z":45},{"name":"Barricade Row","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Supply Dock","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":45},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":45},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":45}]},{"name":"chosin","width":60,"height":50,"objects":[{"name":"Yudam-ni Perimeter","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":5},{"name":"Toktong Pass","type":"activity","spriteId":"ground/snow","x":15,"y":0,"z":5},{"name":"Fox Hill","type":"activity","spriteId":"ground/snow","x":25,"y":0,"z":5},{"name":"Hagaru-ri","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":5},{"name":"Warming Tents","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":5},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":5},{"name":"Frozen Reservoir","type":"activity","spriteId":"ground/ice","x":5,"y":0,"z":15},{"name":"Koto-ri","type":"activity","spriteId":"ground/snow","x":15,"y":0,"z":15},{"name":"Funchilin Bridge","type":"activity","spriteId":"activity/bridge","x":25,"y":0,"z":15},{"name":"Hungnam Docks","type":"activity","spriteId":"activity/landing","x":35,"y":0,"z":15},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":15},{"name":"Toktong Pass","type":"activity","spriteId":"ground/snow","x":55,"y":0,"z":15},{"name":"Yudam-ni Perimeter","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":25},{"name":"Fox Hill","type":"activity","spriteId":"ground/snow","x":15,"y":0,"z":25},{"name":"Hagaru-ri","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":25},{"name":"Warming Tents","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":25},{"name":"Frozen Reservoir","type":"activity","spriteId":"ground/ice","x":45,"y":0,"z":25},{"name":"Funchilin Bridge","type":"activity","spriteId":"activity/bridge","x":55,"y":0,"z":25},{"name":"Koto-ri","type":"activity","spriteId":"ground/snow","x":5,"y":0,"z":35},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":35},{"name":"Hungnam Docks","type":"activity","spriteId":"activity/landing","x":25,"y":0,"z":35},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":35},{"name":"Toktong Pass","type":"activity","spriteId":"ground/snow","x":45,"y":0,"z":35},{"name":"Yudam-ni Perimeter","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":35},{"name":"Fox Hill","type":"activity","spriteId":"ground/snow","x":5,"y":0,"z":45},{"name":"Frozen Reservoir","type":"activity","spriteId":"ground/ice","x":15,"y":0,"z":45},{"name":"Funchilin Bridge","type":"activity","spriteId":"activity/bridge","x":25,"y":0,"z":45},{"name":"Hungnam Docks","type":"activity","spriteId":"activity/landing","x":35,"y":0,"z":45},{"name":"Hagaru-ri","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":45},{"name":"Warming Tents","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":45}]},{"name":"khesanh","width":60,"height":50,"objects":[{"name":"Combat Base","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":5},{"name":"Trenchline","type":"activity","spriteId":"ground/mud","x":15,"y":0,"z":5},{"name":"Hill 881","type":"activity","spriteId":"ground/jungle","x":25,"y":0,"z":5},{"name":"The Wire","type":"activity","spriteId":"ground/mud","x":35,"y":0,"z":5},{"name":"Ammo Dump","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":5},{"name":"Airstrip","type":"activity","spriteId":"activity/track","x":55,"y":0,"z":5},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":15},{"name":"Drop Zone","type":"activity","spriteId":"activity/helipad","x":15,"y":0,"z":15},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":15},{"name":"Listening Post","type":"activity","spriteId":"ground/jungle","x":35,"y":0,"z":15},{"name":"Combat Base","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":15},{"name":"Trenchline","type":"activity","spriteId":"ground/mud","x":55,"y":0,"z":15},{"name":"Hill 881","type":"activity","spriteId":"ground/jungle","x":5,"y":0,"z":25},{"name":"The Wire","type":"activity","spriteId":"ground/mud","x":15,"y":0,"z":25},{"name":"Ammo Dump","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":25},{"name":"Airstrip","type":"activity","spriteId":"activity/track","x":35,"y":0,"z":25},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":25},{"name":"Drop Zone","type":"activity","spriteId":"activity/helipad","x":55,"y":0,"z":25},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":35},{"name":"Listening Post","type":"activity","spriteId":"ground/jungle","x":15,"y":0,"z":35},{"name":"Combat Base","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":35},{"name":"Trenchline","type":"activity","spriteId":"ground/mud","x":35,"y":0,"z":35},{"name":"Hill 881","type":"activity","spriteId":"ground/jungle","x":45,"y":0,"z":35},{"name":"The Wire","type":"activity","spriteId":"ground/mud","x":55,"y":0,"z":35},{"name":"Ammo Dump","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":45},{"name":"Airstrip","type":"activity","spriteId":"activity/track","x":15,"y":0,"z":45},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Drop Zone","type":"activity","spriteId":"activity/helipad","x":35,"y":0,"z":45},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":45},{"name":"Listening Post","type":"activity","spriteId":"ground/jungle","x":55,"y":0,"z":45}]},{"name":"hue","width":60,"height":50,"objects":[{"name":"Boat Ramp","type":"activity","spriteId":"activity/landing","x":5,"y":0,"z":5},{"name":"Perfume River","type":"activity","spriteId":"activity/pool","x":15,"y":0,"z":5},{"name":"MACV Compound","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":5},{"name":"Treasury Building","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":5},{"name":"University","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":5},{"name":"Citadel Wall","type":"building","spriteId":"building/citadel","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":5},{"name":"Citadel Gate","type":"building","spriteId":"building/citadel","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":15},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":15},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":15},{"name":"Courtyard LZ","type":"activity","spriteId":"activity/helipad","x":35,"y":0,"z":15},{"name":"Boat Ramp","type":"activity","spriteId":"activity/landing","x":45,"y":0,"z":15},{"name":"Perfume River","type":"activity","spriteId":"activity/pool","x":55,"y":0,"z":15},{"name":"MACV Compound","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":25},{"name":"Treasury Building","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":25},{"name":"University","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":25},{"name":"Citadel Wall","type":"building","spriteId":"building/citadel","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":25},{"name":"Citadel Gate","type":"building","spriteId":"building/citadel","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":25},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":35},{"name":"Courtyard LZ","type":"activity","spriteId":"activity/helipad","x":15,"y":0,"z":35},{"name":"Boat Ramp","type":"activity","spriteId":"activity/landing","x":25,"y":0,"z":35},{"name":"Perfume River","type":"activity","spriteId":"activity/pool","x":35,"y":0,"z":35},{"name":"MACV Compound","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":35},{"name":"Treasury Building","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":35},{"name":"University","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":45},{"name":"Citadel Wall","type":"building","spriteId":"building/citadel","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":45},{"name":"Citadel Gate","type":"building","spriteId":"building/citadel","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":45},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":45},{"name":"Courtyard LZ","type":"activity","spriteId":"activity/helipad","x":55,"y":0,"z":45}]},{"name":"baghdad","width":60,"height":50,"objects":[{"name":"Line of Departure","type":"activity","spriteId":"ground/sand","x":5,"y":0,"z":5},{"name":"Nasiriyah Bridge","type":"activity","spriteId":"activity/bridge","x":15,"y":0,"z":5},{"name":"Highway 1","type":"activity","spriteId":"ground/sand","x":25,"y":0,"z":5},{"name":"Checkpoint","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":5},{"name":"Diyala Bridge","type":"activity","spriteId":"activity/bridge","x":45,"y":0,"z":5},{"name":"Firdos Square","type":"activity","spriteId":"ground/sand","x":55,"y":0,"z":5},{"name":"Palace District","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":15},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":15},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":15},{"name":"Supply Point","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":15},{"name":"Line of Departure","type":"activity","spriteId":"ground/sand","x":45,"y":0,"z":15},{"name":"Nasiriyah Bridge","type":"activity","spriteId":"activity/bridge","x":55,"y":0,"z":15},{"name":"Highway 1","type":"activity","spriteId":"ground/sand","x":5,"y":0,"z":25},{"name":"Checkpoint","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":25},{"name":"Diyala Bridge","type":"activity","spriteId":"activity/bridge","x":25,"y":0,"z":25},{"name":"Firdos Square","type":"activity","spriteId":"ground/sand","x":35,"y":0,"z":25},{"name":"Palace District","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":25},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":35},{"name":"Supply Point","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":35},{"name":"Line of Departure","type":"activity","spriteId":"ground/sand","x":25,"y":0,"z":35},{"name":"Nasiriyah Bridge","type":"activity","spriteId":"activity/bridge","x":35,"y":0,"z":35},{"name":"Highway 1","type":"activity","spriteId":"ground/sand","x":45,"y":0,"z":35},{"name":"Checkpoint","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":35},{"name":"Diyala Bridge","type":"activity","spriteId":"activity/bridge","x":5,"y":0,"z":45},{"name":"Firdos Square","type":"activity","spriteId":"ground/sand","x":15,"y":0,"z":45},{"name":"Palace District","type":"building","spriteId":"building/mosque","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":45},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":45},{"name":"Supply Point","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":45}]},{"name":"fallujah","width":60,"height":50,"objects":[{"name":"Berm Breach","type":"activity","spriteId":"ground/sand","x":5,"y":0,"z":5},{"name":"Jolan District","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":5},{"name":"Train Station","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":5},{"name":"Government Center","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":5},{"name":"Grand Mosque","type":"building","spriteId":"building/mosque","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":5},{"name":"Industrial District","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":5},{"name":"Rooftop OP","type":"activity","spriteId":"ground/sand","x":5,"y":0,"z":15},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":15},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":15},{"name":"Phase Line Fran","type":"activity","spriteId":"activity/helipad","x":35,"y":0,"z":15},{"name":"Berm Breach","type":"activity","spriteId":"ground/sand","x":45,"y":0,"z":15},{"name":"Jolan District","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":15},{"name":"Train Station","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":25},{"name":"Government Center","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":25},{"name":"Grand Mosque","type":"building","spriteId":"building/mosque","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":25},{"name":"Industrial District","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":25},{"name":"Rooftop OP","type":"activity","spriteId":"ground/sand","x":45,"y":0,"z":25},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":35},{"name":"Phase Line Fran","type":"activity","spriteId":"activity/helipad","x":15,"y":0,"z":35},{"name":"Berm Breach","type":"activity","spriteId":"ground/sand","x":25,"y":0,"z":35},{"name":"Jolan District","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":35},{"name":"Train Station","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":35},{"name":"Government Center","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":35},{"name":"Grand Mosque","type":"building","spriteId":"building/mosque","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":45},{"name":"Industrial District","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":45},{"name":"Rooftop OP","type":"activity","spriteId":"ground/sand","x":25,"y":0,"z":45},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":45},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":45},{"name":"Phase Line Fran","type":"activity","spriteId":"activity/helipad","x":55,"y":0,"z":45}]},{"name":"desertmarch","width":60,"height":50,"objects":[{"name":"Alexandria Camp","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":5},{"name":"The Caravan","type":"activity","spriteId":"ground/sand","x":15,"y":0,"z":5},{"name":"The Wells","type":"activity","spriteId":"activity/oasis","x":25,"y":0,"z":5},{"name":"Dead March Flats","type":"activity","spriteId":"ground/sand","x":35,"y":0,"z":5},{"name":"Bomba Bay","type":"activity","spriteId":"activity/landing","x":45,"y":0,"z":5},{"name":"Star Route","type":"activity","spriteId":"ground/sand","x":55,"y":0,"z":5},{"name":"Aid Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":15},{"name":"Command Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":15},{"name":"Supply Cache","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":15},{"name":"Mercenary Camp","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":15},{"name":"Alexandria Camp","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":15},{"name":"The Caravan","type":"activity","spriteId":"ground/sand","x":55,"y":0,"z":15},{"name":"The Wells","type":"activity","spriteId":"activity/oasis","x":5,"y":0,"z":25},{"name":"Dead March Flats","type":"activity","spriteId":"ground/sand","x":15,"y":0,"z":25},{"name":"Bomba Bay","type":"activity","spriteId":"activity/landing","x":25,"y":0,"z":25},{"name":"Star Route","type":"activity","spriteId":"ground/sand","x":35,"y":0,"z":25},{"name":"Aid Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":25},{"name":"Command Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"Supply Cache","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":35},{"name":"Mercenary Camp","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":35},{"name":"Alexandria Camp","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":35},{"name":"The Caravan","type":"activity","spriteId":"ground/sand","x":35,"y":0,"z":35},{"name":"The Wells","type":"activity","spriteId":"activity/oasis","x":45,"y":0,"z":35},{"name":"Dead March Flats","type":"activity","spriteId":"ground/sand","x":55,"y":0,"z":35},{"name":"Bomba Bay","type":"activity","spriteId":"activity/landing","x":5,"y":0,"z":45},{"name":"Star Route","type":"activity","spriteId":"ground/sand","x":15,"y":0,"z":45},{"name":"Aid Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Command Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":45},{"name":"Supply Cache","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":45},{"name":"Mercenary Camp","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":45}]},{"name":"derne","width":60,"height":50,"objects":[{"name":"Harbor Battery","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":5},{"name":"The Breach","type":"activity","spriteId":"ground/sand","x":15,"y":0,"z":5},{"name":"Governor's Palace","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":5},{"name":"Ramparts","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":5},{"name":"Old Town","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":5},{"name":"Derne Harbor","type":"activity","spriteId":"activity/pool","x":55,"y":0,"z":5},{"name":"Aid Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":15},{"name":"Command Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":15},{"name":"Water Gate","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":15},{"name":"Flag Bastion","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":15},{"name":"Harbor Battery","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":15},{"name":"The Breach","type":"activity","spriteId":"ground/sand","x":55,"y":0,"z":15},{"name":"Governor's Palace","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":25},{"name":"Ramparts","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":25},{"name":"Old Town","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":25},{"name":"Derne Harbor","type":"activity","spriteId":"activity/pool","x":35,"y":0,"z":25},{"name":"Aid Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":25},{"name":"Command Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"Water Gate","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":35},{"name":"Flag Bastion","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":35},{"name":"Harbor Battery","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":35},{"name":"The Breach","type":"activity","spriteId":"ground/sand","x":35,"y":0,"z":35},{"name":"Governor's Palace","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":35},{"name":"Ramparts","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":35},{"name":"Old Town","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":45},{"name":"Derne Harbor","type":"activity","spriteId":"activity/pool","x":15,"y":0,"z":45},{"name":"Aid Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Command Tent","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":45},{"name":"Water Gate","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":45},{"name":"Flag Bastion","type":"building","spriteId":"building/fort","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":45}]},{"name":"belleauwood","width":60,"height":50,"objects":[{"name":"The Wheat Field","type":"activity","spriteId":"ground/grass","x":5,"y":0,"z":5},{"name":"Hunting Lodge","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":5},{"name":"The Wood","type":"activity","spriteId":"ground/jungle","x":25,"y":0,"z":5},{"name":"Trenchline","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":5},{"name":"Lucy-le-Bocage","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":5},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":5},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":15},{"name":"Supply Dump","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":15},{"name":"The Ravine","type":"activity","spriteId":"ground/grass","x":25,"y":0,"z":15},{"name":"Hill 142","type":"activity","spriteId":"ground/grass","x":35,"y":0,"z":15},{"name":"The Wheat Field","type":"activity","spriteId":"ground/grass","x":45,"y":0,"z":15},{"name":"Hunting Lodge","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":15},{"name":"The Wood","type":"activity","spriteId":"ground/jungle","x":5,"y":0,"z":25},{"name":"Trenchline","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":25},{"name":"Lucy-le-Bocage","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":25},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":25},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":25},{"name":"Supply Dump","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"The Ravine","type":"activity","spriteId":"ground/grass","x":5,"y":0,"z":35},{"name":"Hill 142","type":"activity","spriteId":"ground/grass","x":15,"y":0,"z":35},{"name":"The Wheat Field","type":"activity","spriteId":"ground/grass","x":25,"y":0,"z":35},{"name":"Hunting Lodge","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":35},{"name":"The Wood","type":"activity","spriteId":"ground/jungle","x":45,"y":0,"z":35},{"name":"Trenchline","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":35},{"name":"Lucy-le-Bocage","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":45},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":45},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Supply Dump","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":45},{"name":"The Ravine","type":"activity","spriteId":"ground/grass","x":45,"y":0,"z":45},{"name":"Hill 142","type":"activity","spriteId":"ground/grass","x":55,"y":0,"z":45}]},{"name":"nicaragua","width":60,"height":50,"objects":[{"name":"Managua Barracks","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":5},{"name":"Jungle Trail","type":"activity","spriteId":"ground/jungle","x":15,"y":0,"z":5},{"name":"Ocotal","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":5},{"name":"The Airstrip","type":"activity","spriteId":"activity/track","x":35,"y":0,"z":5},{"name":"Mule Corral","type":"activity","spriteId":"ground/sand","x":45,"y":0,"z":5},{"name":"River Crossing","type":"activity","spriteId":"activity/pool","x":55,"y":0,"z":5},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":15},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":15},{"name":"Coffee Plantation","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":15},{"name":"The Ridge","type":"activity","spriteId":"ground/jungle","x":35,"y":0,"z":15},{"name":"Managua Barracks","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":15},{"name":"Jungle Trail","type":"activity","spriteId":"ground/jungle","x":55,"y":0,"z":15},{"name":"Ocotal","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":25},{"name":"The Airstrip","type":"activity","spriteId":"activity/track","x":15,"y":0,"z":25},{"name":"Mule Corral","type":"activity","spriteId":"ground/sand","x":25,"y":0,"z":25},{"name":"River Crossing","type":"activity","spriteId":"activity/pool","x":35,"y":0,"z":25},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":25},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"Coffee Plantation","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":35},{"name":"The Ridge","type":"activity","spriteId":"ground/jungle","x":15,"y":0,"z":35},{"name":"Managua Barracks","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":35},{"name":"Jungle Trail","type":"activity","spriteId":"ground/jungle","x":35,"y":0,"z":35},{"name":"Ocotal","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":35},{"name":"The Airstrip","type":"activity","spriteId":"activity/track","x":55,"y":0,"z":35},{"name":"Mule Corral","type":"activity","spriteId":"ground/sand","x":5,"y":0,"z":45},{"name":"River Crossing","type":"activity","spriteId":"activity/pool","x":15,"y":0,"z":45},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":45},{"name":"Coffee Plantation","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":45},{"name":"The Ridge","type":"activity","spriteId":"ground/jungle","x":55,"y":0,"z":45}]},{"name":"mogadishu","width":60,"height":50,"objects":[{"name":"Green Ramp","type":"activity","spriteId":"activity/landing","x":5,"y":0,"z":5},{"name":"The Market","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":5},{"name":"Airfield Perimeter","type":"activity","spriteId":"activity/helipad","x":25,"y":0,"z":5},{"name":"Checkpoint Condor","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":5},{"name":"The K-4 Circle","type":"activity","spriteId":"ground/sand","x":45,"y":0,"z":5},{"name":"Feeding Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":5},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":5,"y":1.5,"z":15},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":15},{"name":"The Port","type":"activity","spriteId":"activity/landing","x":25,"y":0,"z":15},{"name":"Embassy Compound","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":15},{"name":"Green Ramp","type":"activity","spriteId":"activity/landing","x":45,"y":0,"z":15},{"name":"The Market","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":15},{"name":"Airfield Perimeter","type":"activity","spriteId":"activity/helipad","x":5,"y":0,"z":25},{"name":"Checkpoint Condor","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":25},{"name":"The K-4 Circle","type":"activity","spriteId":"ground/sand","x":25,"y":0,"z":25},{"name":"Feeding Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":25},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":45,"y":1.5,"z":25},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":25},{"name":"The Port","type":"activity","spriteId":"activity/landing","x":5,"y":0,"z":35},{"name":"Embassy Compound","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":35},{"name":"Green Ramp","type":"activity","spriteId":"activity/landing","x":25,"y":0,"z":35},{"name":"The Market","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":35},{"name":"Airfield Perimeter","type":"activity","spriteId":"activity/helipad","x":45,"y":0,"z":35},{"name":"Checkpoint Condor","type":"building","spriteId":"building/bunker","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":35},{"name":"The K-4 Circle","type":"activity","spriteId":"ground/sand","x":5,"y":0,"z":45},{"name":"Feeding Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":15,"y":1.5,"z":45},{"name":"Aid Station","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":25,"y":1.5,"z":45},{"name":"Command Post","type":"building","spriteId":"building/tent","size":{"x":4,"y":3,"z":4},"x":35,"y":1.5,"z":45},{"name":"The Port","type":"activity","spriteId":"activity/landing","x":45,"y":0,"z":45},{"name":"Embassy Compound","type":"building","spriteId":"building/urban","size":{"x":4,"y":3,"z":4},"x":55,"y":1.5,"z":45}]}]`),ds={tileSize:U_,maps:z_};function B_(n){const e=n.tileSize??10,t=new Map;for(const i of n.maps??[]){if(!i?.name)continue;const{width:a=20,height:r=20}=i,s=Math.ceil(a/e),o=Math.ceil(r/e),l={};for(const c of i.objects??[]){const d=Math.floor(c.x/e),u=Math.floor(c.z/e),h=`${d},${u}`;l[h]||(l[h]=[]),l[h].push(c)}t.set(i.name,{name:i.name,width:a,height:r,tileSize:e,tilesX:s,tilesZ:o,tiles:l})}return{tileSize:e,maps:t}}function yd(n,e,t){const{tileSize:i}=n;return{minX:e*i,maxX:(e+1)*i,minZ:t*i,maxZ:(t+1)*i}}function W_(n,e,t){const i=Math.floor(e/n.tileSize),a=Math.floor(t/n.tileSize);return`${i},${a}`}const bd="activity/bridge",vd="activity",_d=16,xd=16,wd=["................","................","oooooooooooooooo","oWWWWWWWWWWWWWWo","oWWWWWWWWWWWWWWo","oWWWWWWWWWWWWWWo","oWWWWWWWWWWWWWWo","oWWWWWWWWWWWWWWo","oWWWWWWWWWWWWWWo","oWWWWWWWWWWWWWWo","oWWWWWWWWWWWWWWo","oWWWWWWWWWWWWWWo","oooooooooooooooo","................","................","................"],H_={id:bd,category:vd,width:_d,height:xd,pixels:wd},G_=Object.freeze(Object.defineProperty({__proto__:null,category:vd,default:H_,height:xd,id:bd,pixels:wd,width:_d},Symbol.toStringTag,{value:"Module"})),Sd="activity/flag",Md="activity",Td=16,Ed=16,Rd=["................","....qq..........","...qqq..........","..qqqq..........",".qqqqq..........","qqqqqq..........",".qqqqq..........","..qqqq..........","...qqq..........","....qq..........","....WW..........","....WW..........","....WW..........","....WW..........","....WW..........","....oo.........."],V_={id:Sd,category:Md,width:Td,height:Ed,pixels:Rd},q_=Object.freeze(Object.defineProperty({__proto__:null,category:Md,default:V_,height:Ed,id:Sd,pixels:Rd,width:Td},Symbol.toStringTag,{value:"Module"})),Ad="activity/helipad",Cd="activity",Id=16,Pd=16,Dd=["rrrrRrrrrrrrrrrr","rrrrrrrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrryrrrrrrrrrr","rrrrrrrrrrrrrrrr","rrrrRrrrrrrrrrrr","rrrrrrrrrrrrrrrr"],K_={id:Ad,category:Cd,width:Id,height:Pd,pixels:Dd},$_=Object.freeze(Object.defineProperty({__proto__:null,category:Cd,default:K_,height:Pd,id:Ad,pixels:Dd,width:Id},Symbol.toStringTag,{value:"Module"})),Ld="activity/landing",kd="activity",Nd=16,Fd=16,Od=["................","....oooooooo....","...oqqqqqqqqo...","..oqqqqqqqqqqo..",".oqqqqqqqqqqqqo.","oqqqqqqqqqqqqqqo","oqqqqqqqqqqqqqqo","oqqqqqqqqqqqqqqo","oqqqqqqqqqqqqqqo","oqqqqqqqqqqqqqqo","oqqqqqqqqqqqqqqo","oqqqqqqqqqqqqqqo",".oqqqqqqqqqqqqo.","..oqqqqqqqqqqo..","...oqqqqqqqqo...","....oooooooo...."],X_={id:Ld,category:kd,width:Nd,height:Fd,pixels:Od},j_=Object.freeze(Object.defineProperty({__proto__:null,category:kd,default:X_,height:Fd,id:Ld,pixels:Od,width:Nd},Symbol.toStringTag,{value:"Module"})),Ud="activity/oasis",zd="activity",Bd=16,Wd=16,Hd=["gggggggggggggggg","ggggppppppgggggg","gggppPPPPppggggg","ggppPPPPPPppgggg","ggppPPPPPPppgggg","gggppPPPPppggggg","ggggppppppgggggg","gggggggggggggggg","gggggggggggggggg","gggggggggggggggg","gggggggggggggggg","gggggggggggggggg","gggggggggggggggg","gggggggggggggggg","gggggggggggggggg","gggggggggggggggg"],Y_={id:Ud,category:zd,width:Bd,height:Wd,pixels:Hd},Z_=Object.freeze(Object.defineProperty({__proto__:null,category:zd,default:Y_,height:Wd,id:Ud,pixels:Hd,width:Bd},Symbol.toStringTag,{value:"Module"})),Gd="activity/pool",Vd="activity",qd=16,Kd=16,$d=["pppppppppppppppp","ppPPppppppPPpppp","pppppppppppppppp","pppppwppppppppPP","pPPpppppppPPpppp","pppppppppppppppp","ppppppPPpppppppp","pPPpppppppppwppp","ppppppppppPPpppp","pppppppppppppppp","PPppppPPpppppppp","ppppppppppppPPpp","ppwppppppppppppp","ppppPPpppppppppp","pppppppppPPppppp","pPPppppppppppppp"],J_={id:Gd,category:Vd,width:qd,height:Kd,pixels:$d},Q_=Object.freeze(Object.defineProperty({__proto__:null,category:Vd,default:J_,height:Kd,id:Gd,pixels:$d,width:qd},Symbol.toStringTag,{value:"Module"})),Xd="activity/suribachi",jd="activity",Yd=16,Zd=16,Jd=["................","......kkkk......",".....kKKKKk.....","....kKKKKKKk....","...kKKKKKKKKk...","..kKKKKKKKKKKk..",".kKKKKKKKKKKKKk.","kKKKKKKKKKKKKKKk","kKKKKKKKKKKKKKKk",".kKKKKKKKKKKKKk.","..kKKKKKKKKKKk..","...kKKKKKKKKk...","....kKKKKKKk....",".....kKKKKk.....","......kkkk......","................"],e0={id:Xd,category:jd,width:Yd,height:Zd,pixels:Jd},t0=Object.freeze(Object.defineProperty({__proto__:null,category:jd,default:e0,height:Zd,id:Xd,pixels:Jd,width:Yd},Symbol.toStringTag,{value:"Module"})),Qd="activity/track",eu="activity",tu=16,iu=16,nu=["kkkkKkkkkkkkkkkk","kkkkkkkkkKkkkkkk","kKkkkkkkkkkkkkKk","kkkkkkKkkkkkkkkk","wkkwkkwkkwkkwkkw","kkKkkkkkkkkkkkkk","kkkkkkkkkKkkkkkk","kkkkKkkkkkkkkkkk","kKkkkkkkkkkkKkkk","kkkkkkkKkkkkkkkk","kkkkkkkkkkkkkkKk","wkkwkkwkkwkkwkkw","kkKkkkkkkkKkkkkk","kkkkkkkkkkkkkkkk","kkkKkkkkkkkkkKkk","kkkkkkkkkKkkkkkk"],i0={id:Qd,category:eu,width:tu,height:iu,pixels:nu},n0=Object.freeze(Object.defineProperty({__proto__:null,category:eu,default:i0,height:iu,id:Qd,pixels:nu,width:tu},Symbol.toStringTag,{value:"Module"})),au="activity/training",ru="activity",su=16,ou=16,lu=["ddddtddddDdddddd","dDddddddtddddtdd","ddddDddddddDdddd","dtdddddDddddddtd","dddddtddddtddddd","dDdddddDdddddDdd","ddddtddddddgtddd","ddDdddddtDdddddd","dtddddDddddddotd","ddddddddtdddDddd","dDddtddddddtdddd","ddddddDddddddDdd","ddtdddddgtdddddd","dddDdddDddddtddd","dtddddtddddDdddd","ddddDdddtddddddd"],a0={id:au,category:ru,width:su,height:ou,pixels:lu},r0=Object.freeze(Object.defineProperty({__proto__:null,category:ru,default:a0,height:ou,id:au,pixels:lu,width:su},Symbol.toStringTag,{value:"Module"})),cu="building/barracks",du="building",uu=24,hu=24,pu=["........bbbbbbbb........",".......bbbbbbbbbb.......","......bbbbbbbbbbbb......",".....bbbbbbbbbbbbbb.....","....bbbbbbbbbbbbbbbb....","...bbbbbbbbbbbbbbbbbb...","..bbbbbbbbbbbbbbbbbbbb..",".bbbbbbbbbbbbbbbbbbbbbb.","BBBBBBBBBBBBBBBBBBBBBBBB",".tttttttttttttttttttttt.",".tttttttttttttttttttttt.",".tttfffttttttttttfffttt.",".tttfffttttttttttfffttt.",".tttfffttttttttttfffttt.",".tttfffttttttttttfffttt.",".tttttttttttttttttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".oooooooooooooooooooooo."],s0={id:cu,category:du,width:uu,height:hu,pixels:pu},o0=Object.freeze(Object.defineProperty({__proto__:null,category:du,default:s0,height:hu,id:cu,pixels:pu,width:uu},Symbol.toStringTag,{value:"Module"})),fu="building/bunker",mu="building",gu=24,yu=24,bu=["........................","........................","........................","........................","........................","........................","........................","....oooooooooooooooo....","...oWWWWWrWWrWWWWWWWo...","..oWWWWWWrWWWWWWWWrWWo..","..orWrWWWWWWWWWWWWWWWo..","..oRRRRRRRRRRRRRRRRRRo..","...oWWWrrWrrrWrWrWWWo...","...oWWrooooooooooWWWo...","...oWWWooooooooooWWWo...","..otttTtttTtttTtttTtto..",".ooTTTTTTTTTTTTTTTTTToo.","otttTtttTtttTtttTtttTtto","oTTTTTTTTTTTTTTTTTTTTTTo","otTtttTtttTtttTtttTtttTo","oTTTTTTTTTTTTTTTTTTTTTTo","otttTtttTtttTtttTtttTtto","oTTTTTTTTTTTTTTTTTTTTTTo",".oooooooooooooooooooooo."],l0={id:fu,category:mu,width:gu,height:yu,pixels:bu},c0=Object.freeze(Object.defineProperty({__proto__:null,category:mu,default:l0,height:yu,id:fu,pixels:bu,width:gu},Symbol.toStringTag,{value:"Module"})),vu="building/cave",_u="building",xu=24,wu=24,Su=["........................","........................","..........oooo..........",".........oRRWro.........","........oWWrWWro........",".......oWRrrWrRro.......","......orrRrRWRrrRo......",".....orWrWrRrRrWWWo.....","....orrrrrrrRrrrrrro....","...orRrRRRrrrrRRrRrro...","..orrRrddddddddddrRRro..",".orrRrRDooooooooDrRWrro.","oRrrrrrDooooooooDrRrrrRo","orrrrrrDooooooooDrRrrrro","oRRrrrrDooooooooDRrrrrRo","orrrrRRDooooooooDrrRrrRo","orRrRrrDooooooooDrrrrrro","orrrrRrDooooooooDRrRRrro","orRrrrrDooooooooDrRrrrro","orrRrRrDooooooooDrrrRrro","oRrRrRrDooooooooDrrrrrro","orrRRrrDddddddddDrRrrrro","oRRRRRRRRRRRRRRRRRRRRRRo",".oooooooooooooooooooooo."],d0={id:vu,category:_u,width:xu,height:wu,pixels:Su},u0=Object.freeze(Object.defineProperty({__proto__:null,category:_u,default:d0,height:wu,id:vu,pixels:Su,width:xu},Symbol.toStringTag,{value:"Module"})),Mu="building/chapel",Tu="building",Eu=24,Ru=24,Au=["...........oo...........","...........oo...........",".........wwwwww.........",".........wwwwww.........",".........BBBBBB.........","........wwwwwwww........","........wwwwwwww........",".bbbbbbbbbbbbbbbbbbbbbb.","bbbbbbbbbbbbbbbbbbbbbbbb","BBBBBBBBBBBBBBBBBBBBBBBB",".wwwwwwwwwwwwwwwwwwwwww.",".wwwwwwwwwwwwwwwwwwwwww.",".wwwwfffwwwwwwwwfffwwww.",".wwwwfffwwwwwwwwfffwwww.",".wwwwfffwwwwwwwwfffwwww.",".wwwwfffwwwwwwwwfffwwww.",".wwwwwwwwwwwwwwwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".oooooooooooooooooooooo."],h0={id:Mu,category:Tu,width:Eu,height:Ru,pixels:Au},p0=Object.freeze(Object.defineProperty({__proto__:null,category:Tu,default:h0,height:Ru,id:Mu,pixels:Au,width:Eu},Symbol.toStringTag,{value:"Module"})),Cu="building/chow",Iu="building",Pu=24,Du=24,Lu=["........................","........................","..BBBBBBBBBBBBBBBBBBBB..",".bbbbbbbbbbbbbbbbbbbbbb.","bbbbbbbbbbbbbbbbbbbbbbbb","BBBBBBBBBBBBBBBBBBBBBBBB",".tttttttttttttttttttttt.",".tttttttttttttttttttttt.",".ttffffffttttfffffftttt.",".ttffffffttttfffffftttt.",".ttffffffttttfffffftttt.",".tttttttttttttttttttttt.",".tttttttttttttttttttttt.",".tttttttttttttttttttttt.",".tttttttttttttttttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".oooooooooooooooooooooo."],f0={id:Cu,category:Iu,width:Pu,height:Du,pixels:Lu},m0=Object.freeze(Object.defineProperty({__proto__:null,category:Iu,default:f0,height:Du,id:Cu,pixels:Lu,width:Pu},Symbol.toStringTag,{value:"Module"})),ku="building/citadel",Nu="building",Fu=24,Ou=24,Uu=["........................","........................","........oooooooo........","....o.ooyyyyyyyyoo.o....","...oyoyyyyyyyyyyyyoyo...","...oyyyyyyyyyyyyyyyyo...","....oTTTTTTTTTTTTTTo....",".....oobbbbbbbbbboo.....","......obBbboobbBbo......",".oo..oobBbboobbBboo..oo.","oWWooWWbBbboobbBbWWooWWo","oWWooWWooWWooWWooWWooWWo","oWWWWWRWWWWWRWWWWWRWWWWo","oWWWWWRWWWooooWWWWRWWWWo","oRRRRRRRRooooooRRRRRRRRo","oWWRWWWWWooooooRWWWWWRWo","oWWRWWWWWooooooRWWWWWRWo","oRRRRRRRRooooooRRRRRRRRo","oWWWWWRWWooooooWWWRWWWWo","oWWWWWRWWooooooWWWRWWWWo","oRRRRRRRRooooooRRRRRRRRo","oWWRWWWWWooooooRWWWWWRWo","oWWRWWWWWooooooRWWWWWRWo",".oooooooooooooooooooooo."],g0={id:ku,category:Nu,width:Fu,height:Ou,pixels:Uu},y0=Object.freeze(Object.defineProperty({__proto__:null,category:Nu,default:g0,height:Ou,id:ku,pixels:Uu,width:Fu},Symbol.toStringTag,{value:"Module"})),zu="building/fort",Bu="building",Wu=24,Hu=24,Gu=["........................","............onnqq.......","............onnww.......","............oqqqq.......",".o.o.o......o.....o.o.o.","otototo.....o....otototo","otttttTo....o...oTttttto","oTTTTTTo....o...oTTTTTTo","otttttToo.o.oo.ooTttttto","otttttTototoototoTttttto","ottottTttttttttttTttotto","ottottTTTTTTTTTTTTttotto","otttttTttttttttttTttttto","otttttTttttttttttTttttto","otttttTttttoottttTttttto","otttttTtttooootttTttttto","ottottTtttooootttTttotto","ottottTtttooootttTttotto","otttttTtttooootttTttttto","otttttTtttooootttTttttto","otttttTtttooootttTttttto","otttttTtttooootttTttttto","otttttTtttooootttTttttto",".oooooooooooooooooooooo."],b0={id:zu,category:Bu,width:Wu,height:Hu,pixels:Gu},v0=Object.freeze(Object.defineProperty({__proto__:null,category:Bu,default:b0,height:Hu,id:zu,pixels:Gu,width:Wu},Symbol.toStringTag,{value:"Module"})),Vu="building/mosque",qu="building",Ku=24,$u=24,Xu=[".o....................o.","oio..................oio","oiio.......oo.......oiio","oiio......oyyo......oiio","owwo......oyyo......owwo","owwo......oyyo......owwo","owwo....ooiiiioo....owwo","owwo...owiiiiiIwo...owwo","TTTTo.oiwiiiiiIwIo.oTTTT","owwo.oiiiiiiiiIIIIo.owwo","owwo.oiiiiiiiiIIIIo.owwo","owwo.oiiiiiiiiIIIIo.owwo","oWWoooiiiiiiiiIIIIoooWWo","owwottttttttttttttttowwo","owwoiiiiiiiiiiIIIIiiowwo","owwottttttttttttttttowwo","owwottoottttttttoottowwo","owwottoottoooottoottowwo","owwottoottoooottoottowwo","owwottttttoooottttttowwo","owwottttttoooottttttowwo","owwottttttoooottttttowwo","owwottttttoooottttttowwo",".oo.oooooooooooooooo.oo."],_0={id:Vu,category:qu,width:Ku,height:$u,pixels:Xu},x0=Object.freeze(Object.defineProperty({__proto__:null,category:qu,default:_0,height:$u,id:Vu,pixels:Xu,width:Ku},Symbol.toStringTag,{value:"Module"})),ju="building/office",Yu="building",Zu=24,Ju=24,Qu=["........................","........................","........................","........................","RRRRRRRRRRRRRRRRRRRRRRRR",".WWWWWWWWWWWWWWWWWWWWWW.",".WWWWWWWWWWWWWWWWWWWWWW.",".WWfffWWWWffffWWWWfffWW.",".WWfffWWWWffffWWWWfffWW.",".WWfffWWWWffffWWWWfffWW.",".WWWWWWWWWWWWWWWWWWWWWW.",".WWWWWWWWWWWWWWWWWWWWWW.",".WWWWWWWWWWWWWWWWWWWWWW.",".WWfffWWWWffffWWWWfffWW.",".WWfffWWWWffffWWWWfffWW.",".WWfffWWWWffffWWWWfffWW.",".WWWWWWWWWWWWWWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".oooooooooooooooooooooo."],w0={id:ju,category:Yu,width:Zu,height:Ju,pixels:Qu},S0=Object.freeze(Object.defineProperty({__proto__:null,category:Yu,default:w0,height:Ju,id:ju,pixels:Qu,width:Zu},Symbol.toStringTag,{value:"Module"})),eh="building/seawall",th="building",ih=24,nh=24,ah=["........................","........................","........................","........................","........................","................o..o....","...............odoodo...",".ooooooooooooooodDDdooo.","oWWWWWWWWWWWWWWWdWWdWWWo","oWWWWWWWWWWWWWWWdWWdWWWo","oRRRRRRRRRRRRRRRdDDdRRRo","orrrrrRrrrrrRrrrdrRdrrro","orrrrrRrrrrrRrrrdrRdrrro","oRRRRRRRRRRRRRRRdDDdRRRo","orrRrrrrrRrrrrrRdrrdrRro","orrRrrrrrRrrrrrRdrrdrRro","oRRRRRRRRRRRRRRRdDDdRRRo","orrrrrRrrrrrRrrrdrRdrrro","orGrrrRrrrGrRrGrdrRdrrGo","oRRRRRRRRRRRRRRRdDDdRRRo","orrRGrrrGRrrGrrRdrrdGRro","oPPppPppPPPpPpppPPpppppo","oppPpPpppppppPpPPppppppo",".oooooooooooooooooooooo."],M0={id:eh,category:th,width:ih,height:nh,pixels:ah},T0=Object.freeze(Object.defineProperty({__proto__:null,category:th,default:M0,height:nh,id:eh,pixels:ah,width:ih},Symbol.toStringTag,{value:"Module"})),rh="building/tent",sh="building",oh=24,lh=24,ch=["........................","........................","........................","...........oo...........","..........oDDo..........",".........ovvVVo.........","........ovvvVVVo........",".......ovvvvVVVVo.......","......ovvvvvVVVVVo......",".....ovvvvvvVVVVVVo.....","....ovvvvvvvVVVVVVVo....","...ovvvvvvvvVVVVVVVVo...","..ovvvvvvvvvVVVVVVVVVo..",".ovvvvvvvvvvVVVVVVVVVVo.","ovvvvvvvvvvvVVVVVVVVVVVo","oVVVVVVVVVVVVVVVVVVVVVVo","ovvvvvvvvVVVVVVvvvvvvvvo","ovvVVVvvvVVooVVvvvVVVvvo","ovvVVVvvvVVooVVvvvVVVvvo","ovvvvvvvvVVooVVvvvvvvvvo","ovvvvvvvvVVooVVvvvvvvvvo","ovvvvvvvvVVooVVvvvvvvvvo",".oooooooooooooooooooooo.","........................"],E0={id:rh,category:sh,width:oh,height:lh,pixels:ch},R0=Object.freeze(Object.defineProperty({__proto__:null,category:sh,default:E0,height:lh,id:rh,pixels:ch,width:oh},Symbol.toStringTag,{value:"Module"})),dh="building/urban",uh="building",hh=24,ph=24,fh=["........................","........................","........................","..ooooooooooooooo...oo..",".oBBBBBBBBBBBBBBBo.oBBo.","obbbbbbbbbbbbbbbbboobbbo","obbbbbbbbbbbbbbbbbobbbbo",".oTTTTTTTTTTTTTTTTTTTTo.",".oyyyyyyyyyyyWWyyyyyyyo.",".oyyffffyyffffWyffffyyo.",".oyyooooyyooooyyooooyyo.",".oyyooooyyooooyyooooyTo.",".oyyooooyyooooyyooooyTo.",".oTyyyyyyyyyyyyyTyyyyyo.",".oTTTTTTTTTTTTTTTTTTTTo.",".oyyyyyyyyyyyyTyyyyyyTo.",".oyyffffyyooooyyffffyTo.",".oyyooooyyooooyyooooTyo.",".oyyooooyyooooyyooooyyo.",".oyyooooyyooooyyoWooyyo.",".oyyyyyyyyooooyyRRRRyyo.",".oyyyyyTyyooooyWWWWWWyo.","..oooooooooooooooooooo..","........................"],A0={id:dh,category:uh,width:hh,height:ph,pixels:fh},C0=Object.freeze(Object.defineProperty({__proto__:null,category:uh,default:A0,height:ph,id:dh,pixels:fh,width:hh},Symbol.toStringTag,{value:"Module"})),mh="ground/grass",gh="ground",yh=16,bh=16,vh=["gggglggggGgggggg","gGgggggglgggglgg","ggggGggggggGgggg","glgggggGgggggglg","ggggglgggglggggg","gGgggggGgggggGgg","gggglggggggglggg","ggGggggglGgggggg","glggggGggggggglg","gggggggglgggGggg","gGgglgggggglgggg","ggggggGggggggGgg","gglgggggglgggggg","gggGgggGgggglggg","glgggglggggGgggg","ggggGgggglgggggg"],I0={id:mh,category:gh,width:yh,height:bh,pixels:vh},P0=Object.freeze(Object.defineProperty({__proto__:null,category:gh,default:I0,height:bh,id:mh,pixels:vh,width:yh},Symbol.toStringTag,{value:"Module"})),_h="ground/ice",xh="ground",wh=16,Sh=16,Mh=["wwwwwwwwwwwwwwww","wffwwwwwwwwffwww","wwwwwfwwwwwwwwww","wwwfwwwwwwfwwwww","wwwwwwwwwwwwwwww","wffwwwfwwwwwfwww","wwwwwwwwfwwwwwww","wwwwfwwwwwwwwwww","wwwwwfwwwwfwwwww","wwwwwwwwwwwwfwww","wffwwwwwwwwwwwww","wwwwfwwwwwwfwwww","wwwwwwwwwwwwwwww","wwwfwwwwfwwwwwww","wwwwwwwwfwwwwwww","wwwwwwwwwfwwwwww"],D0={id:_h,category:xh,width:wh,height:Sh,pixels:Mh},L0=Object.freeze(Object.defineProperty({__proto__:null,category:xh,default:D0,height:Sh,id:_h,pixels:Mh,width:wh},Symbol.toStringTag,{value:"Module"})),Th="ground/jungle",Eh="ground",Rh=16,Ah=16,Ch=["eeeeEeeeeEeeeeee","eEeeeeeegeeeegee","eeeeEeeeeeeEeeee","egeeeeeEeeeeeege","eeeeegeeeegeeeee","eEeeeeeEeeeeeEee","eeeegeeeeeeegeee","eeEeeeeegEeeeeee","egeeeeEeeeeeeege","eeeeeeeegeeeEeee","eEeegeeeeeegeeee","eeeeeeEeeeeeeEee","eegeeeeeegeeeeee","eeeEeeeEeeeegeee","egeeeegeeeeEeeee","eeeeEeeeegeeeeee"],k0={id:Th,category:Eh,width:Rh,height:Ah,pixels:Ch},N0=Object.freeze(Object.defineProperty({__proto__:null,category:Eh,default:k0,height:Ah,id:Th,pixels:Ch,width:Rh},Symbol.toStringTag,{value:"Module"})),Ih="ground/mud",Ph="ground",Dh=16,Lh=16,kh=["ddddDddddDdddddd","dDddddddddddDddd","ddddddDddddddddd","ddDddddddddDdddd","dddddddddddddDdd","dDddddDddddddddd","dddddddddDdddddd","ddddDddddddddddd","dddddDddddDddddd","ddddddddddddDddd","dDdddddddddddddd","ddddddDddddddDdd","ddddddddDddddddd","ddDddddddddddddd","ddddDddddDdddddd","ddddddddddddDddd"],F0={id:Ih,category:Ph,width:Dh,height:Lh,pixels:kh},O0=Object.freeze(Object.defineProperty({__proto__:null,category:Ph,default:F0,height:Lh,id:Ih,pixels:kh,width:Dh},Symbol.toStringTag,{value:"Module"})),Nh="ground/road",Fh="ground",Oh=16,Uh=16,zh=["rrrrRrrrrrrrrrrr","rrrrrrrrrRrrrrrr","rRrrrrrrrrrrrrRr","rrrrrrRrrrrrrrrr","rrrrrrrrrrrRrrrr","rrRrrrrrrrrrrrrr","rrrrrrrrrRrrrrrr","yyyyrrrryyyyrrrr","rryyyyrrrryyyyrr","rrrrrRrrrrrrrrrr","rrrrrrrrrrrrRrrr","rRrrrrrrrrrrrrrr","rrrrrrrRrrrrrrrr","rrrrrrrrrrrrrrRr","rrrRrrrrrrrrrrrr","rrrrrrrrrRrrrrrr"],U0={id:Nh,category:Fh,width:Oh,height:Uh,pixels:zh},z0=Object.freeze(Object.defineProperty({__proto__:null,category:Fh,default:U0,height:Uh,id:Nh,pixels:zh,width:Oh},Symbol.toStringTag,{value:"Module"})),Bh="ground/sand",Wh="ground",Hh=16,Gh=16,Vh=["aaaaAaaaaaaaaaaa","aAaaaaaaAaaaaaaa","aaaaaaAaaaaaaaaa","aaAaaaaaaaaAaaaa","aaaaaaaaaaaaaaaa","aAaaaaAaaaaaaAaa","aaaaaaaaaAaaaaaa","aaaaAaaaaaaaaaaa","aaaaaAaaaaAaaaaa","aaaaaaaaaaaaAaaa","aAaaaaaaaaaaaaaa","aaaaAaaaaaaAaaaa","aaaaaaaaaaaaaaaa","aaAaaaaAaaaaaaaa","aaaaaaaaAaaaaaaa","aaaaaaaaaAaaaaaa"],B0={id:Bh,category:Wh,width:Hh,height:Gh,pixels:Vh},W0=Object.freeze(Object.defineProperty({__proto__:null,category:Wh,default:B0,height:Gh,id:Bh,pixels:Vh,width:Hh},Symbol.toStringTag,{value:"Module"})),qh="ground/snow",Kh="ground",$h=16,Xh=16,jh=["wwwwWwwwwwwwwwww","wWwwwwwwWwwwwwww","wwwwwWwwwwwwwwww","wwWwwwwwwwwWwwww","wwwwwwwwwwwwwwww","wWwwwwWwwwwwwWww","wwwwwwwwWwwwwwww","wwwwWwwwwwwwwwww","wwwwwWwwwwWwwwww","wwwwwwwwwwwwWwww","wWwwwwwwwwwwwwww","wwwwWwwwwwwWwwww","wwwwwwwwwwwwwwww","wwWwwwwWwwwwwwww","wwwwwwwwWwwwwwww","wwwwwwwwwWwwwwww"],H0={id:qh,category:Kh,width:$h,height:Xh,pixels:jh},G0=Object.freeze(Object.defineProperty({__proto__:null,category:Kh,default:H0,height:Xh,id:qh,pixels:jh,width:$h},Symbol.toStringTag,{value:"Module"})),Yh="ground/volcanic",Zh="ground",Jh=16,Qh=16,ep=["rrrrRrrrrrrrrrrr","rRrrrrrrRrrrrrrr","rrrrrRrrrrrrrrrr","rrRrrrrrrrrRrrrr","rrrrrrrrrrrrrrrr","rRrrrrRrrrrrrRrr","rrrrrrrrRrrrrrrr","rrrrRrrrrrrrrrrr","rrrrrRrrrrRrrrrr","rrrrrrrrrrrrRrrr","rRrrrrrrrrrrrrrr","rrrrRrrrrrrRrrrr","rrrrrrrrrrrrrrrr","rrRrrrrRrrrrrrrr","rrrrrrrrRrrrrrrr","rrrrrrrrrRrrrrrr"],V0={id:Yh,category:Zh,width:Jh,height:Qh,pixels:ep},q0=Object.freeze(Object.defineProperty({__proto__:null,category:Zh,default:V0,height:Qh,id:Yh,pixels:ep,width:Jh},Symbol.toStringTag,{value:"Module"})),tp="npc/nco",ip="npc",np=32,ap=48,rp=["................................","..........oooooooooooo..........","........oowwwwwwwwwwwwoo........",".......owwwwwwwyywwwwwwwo.......",".......owwwwwwyyyywwwwwwo.......",".......oWWWWWWWWWWWWWWWWo.......","........oNNNNNNNNNNNNNNo........",".........oooooooooooooo.........","..........oSSSSSSSSSSo..........","..........osoossssooso..........",".........oSswossssowsSo.........",".........oSssssSSssssSo.........","..........osssssssssso..........","..........osssSooSssso..........","...........oSssssssSo...........","............ooSSSSoo............","...........oNyNqqNyNo...........","......oooooNnnnNNnnnNooooo......",".....onnnnnNnnnyynnnNnnnnno.....","....onnnnNnnnnnNNnnnnnNnnnno....","....oyyyyNnnnnnNNnnnnnNyyyyo....","....oqqqqNnnnnnyynqypqNqqqqo....","....oyyyyNnnnnnNNngqypNyyyyo....","....oqqqqNnnnnnNNnnnnnNqqqqo....","....oyyyyNnnnnnyynnnnnNyyyyo....","....onnnnNnnnnnNNnnnnnNnnnno....","....onnnnNwwwwyyyywwwwNnnnno....","....onnnnNwwwwyyyywwwwNnnnno....","....onnnnNnnnnnNNnnnnnNnnnno....","....oqqqqNnnnnnyynnnnnNqqqqo....","....ossssoNnnnnNNnnnnNosssso....","....oSssSoNnnnnNNnnnnNoSssSo....",".....oooooooooooooooooooooo.....","........oqmmmmmmmmmmmmqo........","........oqmmmmMooMmmmmqo........","........oqmmmmMooMmmmmqo........","........oqmmmmMooMmmmmqo........","........oqmmmmMooMmmmmqo........","........oqmmmmMooMmmmmqo........","........oqmmmmMooMmmmmqo........","........oqmmmmMooMmmmmqo........",".......oooooooo..oooooooo.......",".......oWoooooo..ooooooWo.......",".......oooooooo..oooooooo.......","................................","................................","................................","................................"],K0={id:tp,category:ip,width:np,height:ap,pixels:rp},$0=Object.freeze(Object.defineProperty({__proto__:null,category:ip,default:K0,height:ap,id:tp,pixels:rp,width:np},Symbol.toStringTag,{value:"Module"})),sp="recruit/civilian",op="recruit",lp=24,cp=36,dp=["s","h","c","j"],up=["......hhhhhhhhhhhh......","......hhhhhhhhhhhh......","....hhhhhhhhhhhhhhhh....","....hhhhhhhhhhhhhhhh....","....hhsssssssssssshh....","....hhsssssssssssshh....","....ssssssssssssssss....","....ssssssssssssssss....","....ssssoossssoossss....","....ssssoossssoossss....","....ssssssssssssssss....","....ssssssssssssssss....","......ssssssssssss......","......ssssssssssss......","....cccccccccccccccc....","....cccccccccccccccc....","..cccccccccccccccccccc..","..cccccccccccccccccccc..","..ssccccccccccccccccss..","..ssccccccccccccccccss..","..ssccccccccccccccccss..","..ssccccccccccccccccss..","..ssccccccccccccccccss..","..ssccccccccccccccccss..","....cccccccccccccccc....","....cccccccccccccccc....","....jjjjjjjjjjjjjjjj....","....jjjjjjjjjjjjjjjj....","....jjjjjj....jjjjjj....","....jjjjjj....jjjjjj....","....jjjjjj....jjjjjj....","....jjjjjj....jjjjjj....","....jjjjjj....jjjjjj....","....jjjjjj....jjjjjj....","....oooooo....oooooo....","....oooooo....oooooo...."],X0={id:sp,category:op,width:lp,height:cp,swapKeys:dp,pixels:up},j0=Object.freeze(Object.defineProperty({__proto__:null,category:op,default:X0,height:cp,id:sp,pixels:up,swapKeys:dp,width:lp},Symbol.toStringTag,{value:"Module"})),Y0={".":{name:"transparent",color:null},o:{name:"outline",color:"#26261e"},g:{name:"grass",color:"#7a8f4a"},G:{name:"grass-dark",color:"#5f7539"},l:{name:"grass-light",color:"#93a95d"},r:{name:"asphalt",color:"#6f6f6f"},R:{name:"asphalt-dark",color:"#585858"},y:{name:"paint-yellow",color:"#d9c86a"},t:{name:"tan-wall",color:"#cfa96b"},T:{name:"tan-dark",color:"#a8874f"},b:{name:"brick-red",color:"#a5442a"},B:{name:"brick-dark",color:"#7c331f"},w:{name:"white",color:"#e9e5d9"},W:{name:"gray-wall",color:"#9c9c94"},f:{name:"window",color:"#7ab8d8"},d:{name:"dirt",color:"#8a6f47"},D:{name:"dirt-dark",color:"#6d5637"},k:{name:"track-clay",color:"#b06a4a"},K:{name:"track-dark",color:"#8f5138"},p:{name:"pool",color:"#4a90c2"},P:{name:"pool-dark",color:"#366d9b"},s:{name:"skin-swap",color:"#d8a878"},h:{name:"hair-swap",color:"#5c4632"},c:{name:"top-swap",color:"#8a8f5a"},j:{name:"bottom-swap",color:"#4a5a78"},n:{name:"navy",color:"#1c2540"},N:{name:"navy-dark",color:"#10162a"},S:{name:"skin-shadow",color:"#b07f55"},m:{name:"dress-trousers",color:"#3b5a8c"},M:{name:"dress-trousers-dark",color:"#2b4672"},q:{name:"scarlet",color:"#b3202e"},v:{name:"olive-drab",color:"#6b7040"},V:{name:"olive-drab-dark",color:"#4f5430"},i:{name:"tile-teal",color:"#3f9a95"},I:{name:"tile-teal-dark",color:"#2b6f6b"},e:{name:"jungle",color:"#4c7a34"},E:{name:"jungle-dark",color:"#355a26"},a:{name:"sand",color:"#d9c48f"},A:{name:"sand-dark",color:"#bca773"}},Z0={palette:Y0},J0={ground:"ground/grass",road:"ground/road",building:"building/office",activity:"activity/training",recruit:"recruit/civilian",npc:"npc/nco"},Uo={defaults:J0},hp=Math.PI/4,Q0=Math.atan(.5),ex=Object.assign({"../../assets/art/spriteDefinitions/activity_bridge.json":G_,"../../assets/art/spriteDefinitions/activity_flag.json":q_,"../../assets/art/spriteDefinitions/activity_helipad.json":$_,"../../assets/art/spriteDefinitions/activity_landing.json":j_,"../../assets/art/spriteDefinitions/activity_oasis.json":Z_,"../../assets/art/spriteDefinitions/activity_pool.json":Q_,"../../assets/art/spriteDefinitions/activity_suribachi.json":t0,"../../assets/art/spriteDefinitions/activity_track.json":n0,"../../assets/art/spriteDefinitions/activity_training.json":r0,"../../assets/art/spriteDefinitions/building_barracks.json":o0,"../../assets/art/spriteDefinitions/building_bunker.json":c0,"../../assets/art/spriteDefinitions/building_cave.json":u0,"../../assets/art/spriteDefinitions/building_chapel.json":p0,"../../assets/art/spriteDefinitions/building_chow.json":m0,"../../assets/art/spriteDefinitions/building_citadel.json":y0,"../../assets/art/spriteDefinitions/building_fort.json":v0,"../../assets/art/spriteDefinitions/building_mosque.json":x0,"../../assets/art/spriteDefinitions/building_office.json":S0,"../../assets/art/spriteDefinitions/building_seawall.json":T0,"../../assets/art/spriteDefinitions/building_tent.json":R0,"../../assets/art/spriteDefinitions/building_urban.json":C0,"../../assets/art/spriteDefinitions/ground_grass.json":P0,"../../assets/art/spriteDefinitions/ground_ice.json":L0,"../../assets/art/spriteDefinitions/ground_jungle.json":N0,"../../assets/art/spriteDefinitions/ground_mud.json":O0,"../../assets/art/spriteDefinitions/ground_road.json":z0,"../../assets/art/spriteDefinitions/ground_sand.json":W0,"../../assets/art/spriteDefinitions/ground_snow.json":G0,"../../assets/art/spriteDefinitions/ground_volcanic.json":q0,"../../assets/art/spriteDefinitions/npc_nco.json":$0,"../../assets/art/spriteDefinitions/recruit_civilian.json":j0}),pp={};for(const n of Object.values(ex)){const e=n.default??n;pp[e.id]=e}function lr(n){return Uo.defaults[n]}function tx(n){return typeof n=="number"?`#${n.toString(16).padStart(6,"0")}`:n}function ix(n){return[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)]}function La(n,e={}){const t=pp[n];if(!t)throw new Error(`Unknown sprite: ${n}`);const i=document.createElement("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d"),r=a.createImageData(t.width,t.height);for(let s=0;s<t.height;s++){const o=t.pixels[s]??"";for(let l=0;l<t.width;l++){const c=o[l]??".",d=e[c],u=Z0.palette[c]?.color,h=d!==void 0?tx(d):u;if(h==null)continue;const[f,g,b]=ix(h),m=(s*t.width+l)*4;r.data[m]=f,r.data[m+1]=g,r.data[m+2]=b,r.data[m+3]=255}}return a.putImageData(r,0,0),i}function Er(n){const e=new sa(n);return e.magFilter=Qe,e.minFilter=Qe,e.colorSpace=Zt,e}const Zn=new Map;function us(n,e){const t=`${n}|tile|${e}`;if(Zn.has(t))return Zn.get(t);const i=Er(La(n));i.wrapS=Sa,i.wrapT=Sa,i.repeat.set(e,e);const a=new Ia({map:i});return a.userData.shared=!0,Zn.set(t,a),a}function nx(n){const e=`${n}|billboard`;if(Zn.has(e))return Zn.get(e);const t=new Ia({map:Er(La(n)),alphaTest:.5,side:di});return t.userData.shared=!0,Zn.set(e,t),t}function ax(n){return new Ia({map:Er(La(Uo.defaults.recruit,n)),alphaTest:.5,side:di})}function rx(n,e){n.map?.dispose(),n.map=Er(La(Uo.defaults.recruit,e)),n.needsUpdate=!0}const hs=2,ps=6,ac=4;class sx extends bn{constructor(e,t,i,a){super(),this.parsedMap=e,this.tileX=t,this.tileZ=i,this.tileSize=e.tileSize;const r=yd(e,t,i);this.position.set(r.minX+this.tileSize/2,0,r.minZ+this.tileSize/2),this.userData.key=`${t},${i}`;const s=new Ut(new zi(this.tileSize,this.tileSize),us(lr("ground"),this.tileSize/hs));s.rotation.x=-Math.PI/2,s.position.y=0,this.add(s);for(const o of a){const l=this.createObjectMesh(o);l&&this.add(l)}}createObjectMesh(e){const{type:t,x:i,z:a}=e,r=i-this.position.x,s=a-this.position.z;switch(t){case"building":{const o=e.size??{x:ac,y:ac},l=Math.max(o.x,o.y),c=new Ut(new zi(o.x,l),nx(e.spriteId??lr("building")));return c.rotation.y=hp,c.position.set(r,l/2,s),c.userData.object=e,c}case"npc":{const o=new Ut(new Fo(.2,.5),new bm({color:16776960}));return o.userData.ownMaterial=!0,o.position.set(r,.35,s),o.userData.object=e,o}case"activity":{const o=new Ut(new zi(ps,ps),us(e.spriteId??lr("activity"),ps/hs));return o.rotation.x=-Math.PI/2,o.position.set(r,.02,s),o.userData.object=e,o}case"road":{const o=new Ut(new zi(this.tileSize,this.tileSize),us(e.spriteId??lr("road"),this.tileSize/hs));return o.rotation.x=-Math.PI/2,o.position.set(r,.01,s),o.userData.object=e,o}default:return null}}dispose(){this.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.userData.ownMaterial&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}}const ox=.2;class lx{constructor(e,t,i={}){this.parent=t,this.positionGetter=i.positionGetter??(()=>({x:0,z:0})),this.unloadDistance=i.unloadDistance??3;const a=e.maps?B_(e):null;this.parsedMaps=a?.maps??e.parsedMaps??new Map,this.tileSize=a?.tileSize??e.tileSize??10,this.loadedTiles=new Map,this.currentMapName=null}setMap(e){this.currentMapName=e,this.update()}getParsedMap(e=this.currentMapName){return this.parsedMaps.get(e)??null}getTilesToLoad(e,t,i){const{tileSize:a}=i,r=Math.floor(e/a),s=Math.floor(t/a),o=a*ox,l=new Set;l.add(`${r},${s}`);const c=yd(i,r,s);return e>=c.maxX-o&&l.add(`${r+1},${s}`),e<=c.minX+o&&l.add(`${r-1},${s}`),t>=c.maxZ-o&&l.add(`${r},${s+1}`),t<=c.minZ+o&&l.add(`${r},${s-1}`),e>=c.maxX-o&&t>=c.maxZ-o&&l.add(`${r+1},${s+1}`),e<=c.minX+o&&t>=c.maxZ-o&&l.add(`${r-1},${s+1}`),e>=c.maxX-o&&t<=c.minZ+o&&l.add(`${r+1},${s-1}`),e<=c.minX+o&&t<=c.minZ+o&&l.add(`${r-1},${s-1}`),Array.from(l).map(d=>{const[u,h]=d.split(",").map(Number);return{tileX:u,tileZ:h}}).filter(({tileX:d,tileZ:u})=>d>=0&&d<i.tilesX&&u>=0&&u<i.tilesZ)}loadTile(e,t,i){if(e<0||e>=i.tilesX||t<0||t>=i.tilesZ)return;const a=`${e},${t}`;if(this.loadedTiles.has(a))return;const r=i.tiles[a]??[],s=new sx(i,e,t,r);this.loadedTiles.set(a,s),this.parent.add(s)}unloadDistantTiles(e,t){const i=Math.floor(e/this.tileSize),a=Math.floor(t/this.tileSize);for(const[r,s]of this.loadedTiles.entries()){const[o,l]=r.split(",").map(Number),c=Math.abs(o-i),d=Math.abs(l-a);(c>this.unloadDistance||d>this.unloadDistance)&&(this.parent.remove(s),s.dispose(),this.loadedTiles.delete(r))}}update(){const e=this.getParsedMap();if(!e)return;const{x:t,z:i}=this.positionGetter(),a=this.getTilesToLoad(t,i,e);for(const{tileX:r,tileZ:s}of a)this.loadTile(r,s,e);this.unloadDistantTiles(t,i)}}const Pt=["strength","dexterity","intelligence","endurance","leadership"],ui=10,Rt=6,ai=16,fp={strength:"Pull-ups, log carries, pugel sticks",dexterity:"Obstacle course, MCMAP, rappelling, movement speed",intelligence:"Lecture hall, tactics, written tests",endurance:"Trail run, track, swim",leadership:"Drill, parade deck, leading peers"};function mp(){return{strength:ui,dexterity:ui,intelligence:ui,endurance:ui,leadership:ui}}function rn(n){return Math.max(Rt,Math.min(ai,n))}function cx(n){const e={};for(const t of Pt)e[t]=rn(n[t]??ui);return e}function gp(n,e={}){const t={...n};for(const i of Pt)t[i]=rn((t[i]??ui)+(e[i]??0));return t}function Jt(n){return{strength:"STR",dexterity:"DEX",intelligence:"INT",endurance:"END",leadership:"LDR"}[n]??n.toUpperCase()}const rc=.85,dx=1.15;function ux(n){const e=(n-Rt)/(ai-Rt);return rc+e*(dx-rc)}const sc=45,hx=55;function px(n){return Pt.reduce((e,t)=>e+(n[t]??ui),0)}function fx(){const n=sc+Math.floor(Math.random()*(hx-sc+1)),e={};for(const r of Pt)e[r]=Rt;let t=n-Pt.length*Rt;const i=Pt.length*(ai-Rt);t=Math.max(0,Math.min(t,i));let a=i*4;for(;t>0&&a-- >0;){const r=Pt[Math.floor(Math.random()*Pt.length)];e[r]<ai&&(e[r]++,t--)}return cx(e)}function po(n,e={}){return gp(n,e)}function oc(n,e){return(n[e]??ui)>Rt}function lc(n,e,t){return t>0&&(n[e]??ui)<ai}function Vi(n){return(Math.max(Rt,Math.min(ai,n))-Rt)/(ai-Rt)}function mx(n,e){const t=(Vi(n)+Vi(e))/2;return Math.round(180+t*170)}function gx(n){return Math.round(900-Vi(n)*350)}function yx(n,e){const t=(Vi(n)+Vi(e))/2;return Math.round(700-t*250)}function bx(n,e){const t=(Vi(n)+Vi(e))/2;return Math.round(70+t*40)}function vx(n,e,t){const a=14-(Vi(n)+Vi(e))/2*4;return t?a*.6:a}const fo=[{id:"tshirt_jeans",name:"T-shirt & Jeans",topColor:8886705,bottomColor:2829615},{id:"hoodie_joggers",name:"Hoodie & Joggers",topColor:3355443,bottomColor:5592405},{id:"polo_khakis",name:"Polo & Khakis",topColor:9127187,bottomColor:12045528},{id:"flannel_workboots",name:"Flannel & Work Pants",topColor:9127187,bottomColor:2829615}],mo=[{id:"fair",name:"Fair",color:16764080},{id:"light",name:"Light",color:15587128},{id:"medium",name:"Medium",color:12095058},{id:"olive",name:"Olive",color:9132587},{id:"tan",name:"Tan",color:10254648},{id:"brown",name:"Brown",color:6700590},{id:"dark",name:"Dark",color:4637373},{id:"deep",name:"Deep",color:2894892}],go=[{id:"black",name:"Black",color:1710618},{id:"dark_brown",name:"Dark Brown",color:2894892},{id:"brown",name:"Brown",color:6040119},{id:"auburn",name:"Auburn",color:9127187},{id:"red",name:"Red",color:9109504},{id:"blonde",name:"Blonde",color:13808703},{id:"gray",name:"Gray",color:8421504},{id:"white",name:"White",color:14079702}],_n=3,cc=.85,_x=1.15,dc=.85,xx=1.15,yp=50,bp="tshirt_jeans",vp="medium",_p="brown",xp="male";function wx(n){const e=Math.max(0,Math.min(100,n))/100;return cc+e*(_x-cc)}function Sx(n){const e=(n-Rt)/(ai-Rt);return dc+e*(xx-dc)}function Mx(n){return n==="female"?.98:1.02}function Tx(n){return fo.find(e=>e.id===n)??fo[0]}function Ex(n){return mo.find(e=>e.id===n)??mo[2]}function Rx(n){return go.find(e=>e.id===n)??go[2]}function Ax(){return fo}function Cx(){return mo}function Ix(){return go}function wp(){return{height:yp,skinToneId:vp,hairColorId:_p,gender:xp,civilianOutfitId:bp}}const Px=.9,Sp=1.35;function Mp(n){const e=n?.appearance??{},t=Tx(e.civilianOutfitId??bp),i=Ex(e.skinToneId??vp),a=Rx(e.hairColorId??_p);return{s:i.color,h:a.color,c:t.topColor,j:t.bottomColor}}function Tp(n){const e=new Ut(new zi(Px,Sp),ax(Mp(n)));return e.name="recruitSprite",zo(e,n),e}function zo(n,e){if(!n||!e)return;const t=e.appearance??{},i=wx(t.height??yp),a=Mx(t.gender??xp),r=Sx(e.stats?.strength??10),s=i*a;n.scale.set(r,s,1),n.position.y=Sp*s/2,rx(n.material,Mp(e))}const Dx=14,Lx=.05;class kx extends bn{raycaster=new Rm;constructor(e,t,i,a={width:50,height:40}){super(),this.character=i,this.sprite=Tp(i),this.sprite.rotation.y=hp,this.add(this.sprite),this.position.set(5,0,5),this.camera=e,this.map=t,this.bounds=a,this.target=null,this.inputEnabled=!0,this._onMouseDown=this.onMouseDown.bind(this),window.addEventListener("mousedown",this._onMouseDown)}updateAppearance(){zo(this.sprite,this.character)}getWalkSpeed(){const e=this.character?.stats?.dexterity??ui;return Dx*ux(e)}update(e){if(!this.inputEnabled||!this.target)return;const t=this.target.x-this.position.x,i=this.target.z-this.position.z,a=Math.hypot(t,i);if(a<=Lx){this.position.set(this.target.x,0,this.target.z),this.target=null;return}const r=this.getWalkSpeed()*e,s=Math.min(1,r/a);this.position.x+=t*s,this.position.z+=i*s}onMouseDown(e){if(!this.inputEnabled||e.button!==0)return;const t=new Ee(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1);this.raycaster.setFromCamera(t,this.camera);const i=this.raycaster.intersectObjects([this.map],!0);if(i.length>0){const{x:a,z:r}=i[0].point,s=Math.max(0,Math.min(this.bounds.width,a)),o=Math.max(0,Math.min(this.bounds.height,r));this.target=new F(s,0,o)}}dispose(){window.removeEventListener("mousedown",this._onMouseDown)}}const Nx=[{id:1,name:"Receiving",theme:"Phase 1 — Receiving, processing, pick-up",days:[{id:"w1d1",title:"Yellow Footprints",briefing:"Report to the Receiving Barracks. Step off the bus onto the yellow footprints and stand at attention until every command is executed.",locationName:"Receiving Barracks",activityId:"yellowFootprints",stats:["leadership","dexterity"]},{id:"w1d2",title:"Haircuts & Medical",briefing:"Report to Medical. Run the receiving pipeline — haircut, hygiene issue, medical screening, dental, and initial gear issue.",locationName:"Medical",activityId:"processing",stats:["endurance","intelligence"]},{id:"w1d3",title:"Black Friday",briefing:"Report to the Barracks. Today you are assigned to a company and platoon. Your Senior Drill Instructor takes charge.",locationName:"Barracks",activityId:"blackFriday",stats:["leadership"]}],sideQuests:[{id:"w1_straggler",title:"The Straggler",availableAfterDay:1,locationName:"Barracks",questId:"theStraggler"},{id:"w1_chow",title:"Chow Hall Protocol",availableAfterDay:1,locationName:"Chow Hall",questId:"chowProtocol"}]},{id:2,name:"Drill & PT",theme:"Phase 1 — Dressing drill, close order, baseline fitness",days:[{id:"w2d1",title:"Dressing Drill",briefing:"Report to the Barracks. The D.I. calls an article of clothing — don it before the countdown expires.",locationName:"Barracks",activityId:"dressDrill",stats:["dexterity"]},{id:"w2d2",title:"Close Order Drill",briefing:"Report to the Parade Deck for close-order drill. Learn the cadence and execute every command on the beat.",locationName:"Parade Deck",activityId:"drillCadence",stats:["leadership","dexterity"]},{id:"w2d3",title:"PFT Baseline",briefing:"Report to the 400m track. Alternate stride keys and keep your pace in the green band.",locationName:"400m track",activityId:"paceRunner",stats:["endurance"]},{id:"w2d4",title:"Letter Home",briefing:"Report to the Barracks. Write your first letter home — your family is waiting to hear from you.",locationName:"Barracks",activityId:"writeLetter",stats:["intelligence"]}],sideQuests:[{id:"w2_church",title:"Sunday Service",availableAfterDay:1,locationName:"Church Auditorium",questId:"sundayService"},{id:"w2_remedial_drill",title:"Remedial Drill",availableAfterDay:2,locationName:"Parade Deck",questId:"remedialDrill",maxStats:{dexterity:9}},{id:"w2_body_comp",title:"Body Composition Program",availableAfterDay:3,locationName:"400m track",questId:"bodyCompProgram",maxStats:{endurance:9}}]},{id:3,name:"Fundamentals",theme:"Phase 1 — Core values, MCMAP, firewatch discipline",days:[{id:"w3d1",title:"Core Values Class",briefing:"Report to the Lecture Hall for Core Values instruction. Know the traits — lives depend on Marines who live the code.",locationName:"Lecture Hall",activityId:"coreValues",stats:["intelligence","leadership"]},{id:"w3d2",title:"MCMAP Intro",briefing:"Report to the MCMAP Pit. Execute strike and block combos on command.",locationName:"MCMAP Pit",activityId:"mcmapSpar",stats:["strength","dexterity"]},{id:"w3d3",title:"Night Cleanup",briefing:"Report to the Barracks. Firewatch quarterdeck scrub — clean quietly without waking the platoon.",locationName:"Barracks",activityId:"nightCleanup",stats:["dexterity"]}],sideQuests:[{id:"w3_housemouse",title:"House Mouse",availableAfterDay:1,locationName:"Barracks",questId:"houseMouse",maxHeight:35},{id:"w3_remedial_knowledge",title:"Remedial Knowledge",availableAfterDay:1,locationName:"Lecture Hall",questId:"remedialKnowledge",maxStats:{intelligence:9}},{id:"w3_remedial_strength",title:"Remedial Strength",availableAfterDay:2,locationName:"Pull-up Bars",questId:"remedialStrength",maxStats:{strength:9}}]},{id:4,name:"Swim Week",theme:"Phase 2 — Water survival, gear shed, inspections",days:[{id:"w4d1",title:"Swim Qualification",briefing:"Report to the Pool. Match stroke rhythm and surface to breathe on cue.",locationName:"Pool",activityId:"swimStrokes",stats:["endurance"]},{id:"w4d2",title:"Gear Shed",briefing:"Report to the Pool. Shed gear in the correct order before your air runs out.",locationName:"Pool",activityId:"gearShed",stats:["dexterity","endurance"]},{id:"w4d3",title:"Footlocker Inspection",briefing:"Report to the Barracks. Spot every discrepancy in your footlocker before the D.I. finishes his walk.",locationName:"Barracks",activityId:"footlockerInspection",stats:["leadership","intelligence"]}],sideQuests:[{id:"w4_scared",title:"Scared of the Water",availableAfterDay:1,locationName:"Pool",questId:"scaredOfWater"}]},{id:5,name:"Team Week / Interior Guard",theme:"Phase 2 — Log drills, obstacle courses, squad leadership",days:[{id:"w5d1",title:"Log Drills",briefing:"Report to the Logs. Sync your lift when all four teammates align in the zone.",locationName:"Logs",activityId:"logTeamLift",stats:["strength","leadership"]},{id:"w5d2",title:"Fire Team Course",briefing:"Report to the Obstacle Course. Hit each obstacle key before the window closes.",locationName:"Obstacle Course",activityId:"obstacleRun",stats:["dexterity"]},{id:"w5d3",title:"High Obstacle Course",briefing:"Report to the Obstacle Course. Climb the high course — missed grips cost you height.",locationName:"Obstacle Course",activityId:"highObstacle",stats:["strength","dexterity"]},{id:"w5d4",title:"Reaction Course",briefing:"Report to the Obstacle Course. Sequence planks and ropes to cross the gap.",locationName:"Obstacle Course",activityId:"reactionCourse",stats:["intelligence","leadership"]}],sideQuests:[{id:"w5_blister",title:"Blister Check",availableAfterDay:1,locationName:"Barracks",questId:"blisterCheck"},{id:"w5_squadleader",title:"Squad Leader",availableAfterDay:1,locationName:"Barracks",questId:"squadLeader",minStats:{leadership:13}}]},{id:6,name:"Combat Week",theme:"Phase 2 — Pugil sticks, bayonet, rappelling",days:[{id:"w6d1",title:"Pugil Sticks",briefing:"Report to Thunderdown. Read your opponent and counter before impact.",locationName:"Thunderdown",activityId:"pugilDuel",stats:["strength","dexterity"]},{id:"w6d2",title:"Bayonet Course",briefing:"Report to Drill Practice. Thrust and slash in rhythm down the lane.",locationName:"Drill Practice",activityId:"bayonetCourse",stats:["strength"]},{id:"w6d3",title:"Rappelling",briefing:"Report to the Rappell Course. Control your brake hand on the descent — bounce cadence matters.",locationName:"Rappell Course",activityId:"rappelTower",stats:["dexterity"]}]},{id:7,name:"Grass Week",theme:"Phase 3 — Snapping in, weapons maintenance, knowledge",days:[{id:"w7d1",title:"Snapping In",briefing:"Report to the Rifle Range. Steady your aim, control your breath, and place shots inside the ring.",locationName:"Rifle Range",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"w7d2",title:"Weapons Maintenance",briefing:"Report to the Armoury. Field-strip the rifle in the correct order before time runs out.",locationName:"Armoury",activityId:"fieldStrip",stats:["intelligence","dexterity"]},{id:"w7d3",title:"Knowledge Exam",briefing:"Report to the Lecture Hall. Complete the General Orders — every word matters.",locationName:"Lecture Hall",activityId:"knowledgeExam",stats:["intelligence"]}],sideQuests:[{id:"w7_carepkg",title:"Care Package",availableAfterDay:1,locationName:"MCX",questId:"carePackage"}]},{id:8,name:"Table 1",theme:"Phase 3 — Live-fire qualification, inspections, buddy aid",days:[{id:"w8d1",title:"Table 1 Qualification",briefing:"Report to the Rifle Range. Adjust for wind and qualify across three positions.",locationName:"Rifle Range",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"w8d2",title:"Uniform Inspection",briefing:"Report to the Barracks. Spot every discrepancy before the D.I. finishes his walk.",locationName:"Barracks",activityId:"inspection",stats:["leadership","intelligence"]},{id:"w8d3",title:"Buddy Aid",briefing:"Report to Medical. Triage casualties and execute first aid in the correct order.",locationName:"Medical",activityId:"buddyAid",stats:["intelligence"]}],sideQuests:[{id:"w8_companymouse",title:"Company House Mouse",availableAfterDay:1,locationName:"Company Office",questId:"companyHouseMouse",maxHeight:35,requiresQuest:"w3_housemouse"}]},{id:9,name:"Table 2 / BWT",theme:"Phase 3 — Land nav, gas chamber, night ops, field hike",days:[{id:"w9d1",title:"Land Navigation",briefing:"Report to the trail loop. Follow bearings and paces to each checkpoint.",locationName:"The trail loop",activityId:"landNav",stats:["intelligence"]},{id:"w9d2",title:"Gas Chamber",briefing:"Report to the Gas Chamber. Don and clear your mask on command — controlled breathing under CS gas.",locationName:"Gas Chamber",activityId:"gasChamber",stats:["endurance"]},{id:"w9d3",title:"Night Infiltration",briefing:"Report to Drill Practice. Move quietly — freeze when the flare pops.",locationName:"Drill Practice",activityId:"nightMove",stats:["dexterity"]},{id:"w9d4",title:"Full Gear Hike",briefing:"Report to the trail loop. Manage pace and help struggling teammates.",locationName:"The trail loop",activityId:"humpPrep",stats:["endurance","leadership"]}],sideQuests:[{id:"w9_doubter",title:"The Doubter",availableAfterDay:1,locationName:"Barracks",questId:"theDoubter"}]},{id:10,name:"The Crucible",theme:"Phase 3 — 54-hour culminating event",days:[{id:"w10d1",title:"Crucible: Day Events",briefing:"Report to the Crucible Trail. Complete the day gauntlet on shared fatigue.",locationName:"Crucible Trail",activityId:"crucibleDay",stats:["endurance","strength"]},{id:"w10d2",title:"Crucible: Night Events",briefing:"Return to the Crucible Trail. Night movement and navigation under fatigue.",locationName:"Crucible Trail",activityId:"crucibleNight",stats:["endurance","intelligence"]},{id:"w10d3",title:"The Reaper",briefing:"Final hike on the Crucible Trail. Finish strong — the title is earned here.",locationName:"Crucible Trail",activityId:"reaperHike",stats:["endurance","leadership"]}]},{id:11,name:"Warrior Week",theme:"Phase 4 — Recovery, mail call, gear turn-in",days:[{id:"w11d1",title:"Warrior Breakfast",briefing:"Report to the Chow Hall. Grab what the line calls for — you earned this meal.",locationName:"Chow Hall",activityId:"warriorBreakfast",stats:["endurance"]},{id:"w11d2",title:"Mail Call",briefing:"Report to the Barracks. Packages and letters from home — after the Crucible, they hit different.",locationName:"Barracks",activityId:"mailCall",stats:["leadership"]},{id:"w11d3",title:"Gear Turn-In",briefing:"Report to Supply. Match issued gear counts and find every shortage.",locationName:"Supply",activityId:"gearTurnIn",stats:["intelligence"]}]},{id:12,name:"Final Drill",theme:"Phase 4 — Field day, parade prep, command inspection",days:[{id:"w12d1",title:"Field Day",briefing:"Report to the Barracks. Clean every station in order before the D.I. white-glove pass.",locationName:"Barracks",activityId:"fieldDay",stats:["endurance","leadership"]},{id:"w12d2",title:"Final Drill Eval",briefing:"Report to the Parade Deck. Execute the full command sequence from memory.",locationName:"Parade Deck",activityId:"finalDrill",stats:["leadership"]},{id:"w12d3",title:"Battalion Commander's Inspection",briefing:"Report to the Company Office. Answer rapid-fire questions with composure.",locationName:"Company Office",activityId:"billetBoard",stats:["leadership","intelligence"]}],sideQuests:[{id:"w12_squared",title:"Squared Away",availableAfterDay:1,locationName:"Barracks",questId:"squaredAway"},{id:"w12_guide",title:"The Guide",availableAfterDay:1,locationName:"Parade Deck",questId:"guide",minStats:{leadership:14},requiresQuest:"w5_squadleader"}]},{id:13,name:"Graduation",theme:"Phase 4 — Family Day, ceremony, MOS school orders",days:[{id:"w13d1",title:"Family Day",briefing:"Report to Family Day. Walk your family through the depot — show them who you became.",locationName:"Family Day",activityId:"familyDay",stats:["leadership"]},{id:"w13d2",title:"Graduation Parade",briefing:"Report to the Parade Deck. Final drill performance and the Eagle, Globe, and Anchor.",locationName:"Parade Deck",activityId:"graduationParade",stats:["leadership"]}]}],Fx=[{id:1,name:"The Landing",theme:"Operation 1 — Ship out, beach assault, establish the beachhead",days:[{id:"o1d1",title:"Ship Out",briefing:"Report to the Transport Ship. The 1st Marine Division is bound for Guadalcanal. Stand by for final orders before the Higgins boats launch.",locationName:"Transport Ship",activityId:"shipOut",stats:["leadership","intelligence"]},{id:"o1d2",title:"Beach Landing",briefing:"Report to the Landing Beach. Ride the Higgins boat in, hit the ramp on the cadence, and get off the beach before the Japanese zero in on your position.",locationName:"Landing Beach",activityId:"beachLanding",stats:["dexterity","endurance"]},{id:"o1d3",title:"Beachhead",briefing:"Report to the Supply Dump. Dig in, establish a perimeter, and secure the initial beachhead before nightfall.",locationName:"Supply Dump",activityId:"foxholeDig",stats:["strength","endurance"]}],sideQuests:[{id:"o1_green",title:"The Green Replacement",availableAfterDay:1,locationName:"Command Tent",questId:"greenReplacement"}]},{id:2,name:"Henderson Field",theme:"Operation 2 — Secure and defend the airstrip",days:[{id:"o2d1",title:"Secure the Strip",briefing:"Report to Henderson Field. Japanese snipers still hold the treeline. Steady your aim and clear the approaches to the airstrip.",locationName:"Henderson Field",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"o2d2",title:"Dig In",briefing:"Report to the Foxhole Line. Every Marine digs. Establish fighting positions along the perimeter before the counterattack comes.",locationName:"Foxhole Line",activityId:"foxholeDig",stats:["strength","endurance"]},{id:"o2d3",title:"Counterattack",briefing:"Report to the Ridge. The Japanese are coming in force. Fix bayonets and hold the high ground.",locationName:"Ridge",activityId:"bayonetCourse",stats:["strength","dexterity"]}],sideQuests:[{id:"o2_dog",title:"War Dog Handler",availableAfterDay:1,locationName:"Henderson Field",questId:"warDogHandler"}]},{id:3,name:"Jungle Patrols",theme:"Operation 3 — Patrol routes, river crossings, jungle alertness",days:[{id:"o3d1",title:"Trail March",briefing:"Report to the Jungle Trail. Force march through the jungle heat. Keep your pace and your water discipline.",locationName:"Jungle Trail",activityId:"paceRunner",stats:["endurance"]},{id:"o3d2",title:"River Crossing",briefing:"Report to the River Crossing. The patrol must cross under fire. Vault, crawl, and climb — do not break formation.",locationName:"River Crossing",activityId:"obstacleRun",stats:["dexterity","strength"]},{id:"o3d3",title:"Sniper Alley",briefing:"Report to the Jungle Patrol route. Movement in the treeline — spot hostiles before they spot you. Do not shoot friendlies.",locationName:"Jungle Patrol",activityId:"nightWatch",stats:["dexterity","intelligence"]},{id:"o3d4",title:"Booby Traps",briefing:"Report to the Supply Dump. Follow the patrol map and mark every suspected trap before the column moves through.",locationName:"Supply Dump",activityId:"landNav",stats:["intelligence"]}],sideQuests:[{id:"o3_corpsman",title:"Corpsman Down",availableAfterDay:2,locationName:"Field Hospital",questId:"corpsmanDown"}]},{id:4,name:"The Ridge",theme:"Operation 4 — Night defense, mortar support, hold the line",days:[{id:"o4d1",title:"Night Watch",briefing:"Report to the Foxhole Line. Stand watch through the night. Freeze when illumination pops — movement draws fire.",locationName:"Foxhole Line",activityId:"nightMove",stats:["dexterity"]},{id:"o4d2",title:"Mortar Support",briefing:"Report to the Ridge. Call for mortar fire. Adjust range and deflection until rounds bracket the Japanese position.",locationName:"Ridge",activityId:"mortarBracket",stats:["intelligence","dexterity"]},{id:"o4d3",title:"Hold the Line",briefing:"Report to the Ridge. Close combat on the high ground. Read your opponent and counter before they close the distance.",locationName:"Ridge",activityId:"pugilDuel",stats:["strength","dexterity"]}]},{id:5,name:"Attrition",theme:"Operation 5 — Supply runs, malaria, morale, forced marches",days:[{id:"o5d1",title:"Supply Run",briefing:"Report to the Supply Dump. Hump ammo and rations to the forward line under time pressure. Every crate counts.",locationName:"Supply Dump",activityId:"supplyRun",stats:["endurance","strength"]},{id:"o5d2",title:"Malaria",briefing:"Report to the Field Hospital. The sick bay is overflowing. Triage casualties and execute field medicine in the correct order.",locationName:"Field Hospital",activityId:"fieldMedic",stats:["intelligence"]},{id:"o5d3",title:"Mail from Home",briefing:"Report to the Command Tent. Letters from home hit different out here. Choose how you handle what arrives.",locationName:"Command Tent",activityId:"writeLetter",stats:["leadership","intelligence"]},{id:"o5d4",title:"Forced March",briefing:"Report to the Jungle Trail. Full gear march through the jungle. Manage pace and help Marines who are falling out.",locationName:"Jungle Trail",activityId:"humpPrep",stats:["endurance","leadership"]}],sideQuests:[{id:"o5_salty",title:"The Salty Vet",availableAfterDay:1,locationName:"Command Tent",questId:"saltyVet"}]},{id:6,name:"Relief and Victory",theme:"Operation 6 — Final push, Army relief, Guadalcanal honors",days:[{id:"o6d1",title:"Final Push",briefing:"Report to the Ridge. Final assault to clear the Japanese positions. Adjust for wind and qualify across three firing positions.",locationName:"Ridge",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"o6d2",title:"Army Relief",briefing:"Report to the Command Tent. Army units are arriving to relieve the division. Debrief with your officers on what you endured.",locationName:"Command Tent",activityId:"familyDay",stats:["leadership"]},{id:"o6d3",title:"Guadalcanal Honors",briefing:"Report to Henderson Field. Formation on the airstrip. The division held Guadalcanal — new orders will come soon.",locationName:"Henderson Field",activityId:"graduationParade",stats:["leadership"]}]},{id:7,name:"Iwo Jima: Invasion",theme:"Operation 7 — D-Day on black sand, February 1945",days:[{id:"o7d1",title:"D-Day Landing",briefing:"Report to the Invasion Beach. Twenty-six thousand Marines hit the volcanic ash today. Get off the beach before the Japanese gunners find your range.",locationName:"Invasion Beach",activityId:"beachLanding",stats:["dexterity","endurance"]},{id:"o7d2",title:"Black Sand",briefing:"Report to the Black Sand Beach. Dig in on the ash — every scoop exposes you to fire from the high ground.",locationName:"Black Sand Beach",activityId:"foxholeDig",stats:["strength","endurance"]},{id:"o7d3",title:"Pillbox Assault",briefing:"Report to Pillbox Row. Steady your aim and clear the reinforced positions blocking the advance inland.",locationName:"Pillbox Row",activityId:"steadyAim",stats:["dexterity","intelligence"]}],sideQuests:[{id:"o7_flame",title:"Flamethrower Team",availableAfterDay:1,locationName:"Supply Line",questId:"flamethrowerTeam"}]},{id:8,name:"Motoyama Airfield",theme:"Operation 8 — Secure the airfield, fight the caves",days:[{id:"o8d1",title:"Secure the Strip",briefing:"Report to Motoyama Airfield. The Japanese buried themselves under the runways. Clear the approaches and take the field.",locationName:"Motoyama Airfield",activityId:"obstacleRun",stats:["dexterity","strength"]},{id:"o8d2",title:"Cave Fighting",briefing:"Report to the Cave Network. Movement in the tunnels — spot hostiles before they spot you. Do not shoot Marines behind you.",locationName:"Cave Network",activityId:"nightWatch",stats:["dexterity","intelligence"]},{id:"o8d3",title:"Adjust Fire",briefing:"Report to the Supply Line. Call for supporting fire on the cave mouths. Bracket the targets before the infantry moves up.",locationName:"Supply Line",activityId:"mortarBracket",stats:["intelligence","dexterity"]}]},{id:9,name:"Mt. Suribachi",theme:"Operation 9 — Assault the mountain",days:[{id:"o9d1",title:"Base of Suribachi",briefing:"Report to Mt. Suribachi Base. Full gear march up the volcanic slope. Help Marines who are falling out on the climb.",locationName:"Mt. Suribachi Base",activityId:"humpPrep",stats:["endurance","leadership"]},{id:"o9d2",title:"Climb Suribachi",briefing:"Report to the Mt. Suribachi Slope. Force the pace up the mountain under fire. Keep your stride in the green band.",locationName:"Mt. Suribachi Slope",activityId:"paceRunner",stats:["endurance"]},{id:"o9d3",title:"Recon the Summit",briefing:"Report to Mt. Suribachi Summit. Patrol the ridgeline and mark every position before the assault platoon moves up.",locationName:"Mt. Suribachi Summit",activityId:"landNav",stats:["intelligence"]}],sideQuests:[{id:"o9_codetalker",title:"Code Talker",availableAfterDay:1,locationName:"Command Post",questId:"codeTalker"}]},{id:10,name:"Underground War",theme:"Operation 10 — Tunnel rats, corpsmen, hold the line",days:[{id:"o10d1",title:"Tunnel Rats",briefing:"Report to the Cave Network. Fix bayonets and clear the tunnels room by room. Keep the rhythm — hesitation gets Marines killed.",locationName:"Cave Network",activityId:"bayonetCourse",stats:["strength","dexterity"]},{id:"o10d2",title:"Corpsman Forward",briefing:"Report to the Field Hospital. Casualties are pouring in from the caves. Triage and treat in the correct order.",locationName:"Field Hospital",activityId:"fieldMedic",stats:["intelligence"]},{id:"o10d3",title:"Hold Motoyama",briefing:"Report to Pillbox Row. Close combat to hold the airfield perimeter. Read your opponent and counter before they close.",locationName:"Pillbox Row",activityId:"pugilDuel",stats:["strength","dexterity"]}]},{id:11,name:"Raising the Colors",theme:"Operation 11 — Mt. Suribachi, 23 February 1945",days:[{id:"o11d1",title:"Find the Pipe",briefing:"Report to Mt. Suribachi Summit. A patrol has reached the top. Locate a pipe, assemble the pole, and prepare to raise the flag.",locationName:"Mt. Suribachi Summit",activityId:"flagRaising",stats:["leadership","strength"]},{id:"o11d2",title:"Raising the Flag",briefing:"Report to Mt. Suribachi Summit. Six Marines, one flagpole, the world watching. Hoist the colors on Suribachi.",locationName:"Mt. Suribachi Summit",activityId:"flagRaising",stats:["leadership","dexterity"]}]},{id:12,name:"Island Secured",theme:"Operation 12 — Final clearing, after-action, Pacific victory",days:[{id:"o12d1",title:"Final Clearing",briefing:"Report to Motoyama Airfield. Last Japanese holdouts on the island. Adjust for wind and qualify across three firing positions.",locationName:"Motoyama Airfield",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"o12d2",title:"After Action",briefing:"Report to the Command Post. Officers debrief the battle. The flag on Suribachi is already an icon — tell them what it cost.",locationName:"Command Post",activityId:"familyDay",stats:["leadership"]},{id:"o12d3",title:"Pacific Victory",briefing:"Report to Mt. Suribachi Summit. Formation below the flag. Guadalcanal to Iwo Jima — earn your campaign honors.",locationName:"Mt. Suribachi Summit",activityId:"graduationParade",stats:["leadership"]}]}],Ox=[{id:1,name:"The Landing at Inchon",theme:"Operation 1 — Amphibious assault, sea wall, secure the harbor",days:[{id:"k1d1",title:"Ship Out",briefing:"Report to the Landing Craft. X Corps is hitting Inchon behind enemy lines. Stand by for final orders before the ramps drop.",locationName:"Landing Craft",activityId:"shipOut",stats:["leadership","intelligence"]},{id:"k1d2",title:"Scale the Sea Wall",briefing:"Report to the Sea Wall. Thirty-foot tidal seawall — climb it under fire before the tide turns and traps the boats.",locationName:"Sea Wall",activityId:"highObstacle",stats:["strength","dexterity"]},{id:"k1d3",title:"Secure the Harbor",briefing:"Report to Inchon Harbor. Dig in and establish a beachhead before the North Koreans counterattack from the high ground.",locationName:"Inchon Harbor",activityId:"foxholeDig",stats:["strength","endurance"]}],sideQuests:[{id:"k1_tootsie",title:"Tootsie Rolls",availableAfterDay:1,locationName:"Supply Dock",questId:"tootsieRolls"}]},{id:2,name:"Kimpo Airfield",theme:"Operation 2 — Clear approaches, take the field, hold the line",days:[{id:"k2d1",title:"Clear Approaches",briefing:"Report to Kimpo Airfield. North Korean snipers hold the treeline. Steady your aim and clear the approaches.",locationName:"Kimpo Airfield",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"k2d2",title:"Take the Field",briefing:"Report to Kimpo Airfield. Assault the runways under fire. Vault, crawl, and climb — do not break formation.",locationName:"Kimpo Airfield",activityId:"obstacleRun",stats:["dexterity","strength"]},{id:"k2d3",title:"Hold the Line",briefing:"Report to Barricade Row. Counterattack incoming. Fix bayonets and hold the perimeter.",locationName:"Barricade Row",activityId:"bayonetCourse",stats:["strength","dexterity"]}]},{id:3,name:"Han River Crossing",theme:"Operation 3 — River assault, recon routes, mortar support",days:[{id:"k3d1",title:"Cross Under Fire",briefing:"Report to the Han River. The regiment crosses under fire. Vault, crawl, and climb — keep moving.",locationName:"Han River",activityId:"obstacleRun",stats:["dexterity","endurance"]},{id:"k3d2",title:"Recon Routes",briefing:"Report to Seoul Streets. Follow the patrol map and mark every checkpoint before the column moves through.",locationName:"Seoul Streets",activityId:"landNav",stats:["intelligence"]},{id:"k3d3",title:"Mortars on the Far Bank",briefing:"Report to Barricade Row. Call for mortar fire on the far bank. Bracket the targets before the infantry moves up.",locationName:"Barricade Row",activityId:"mortarBracket",stats:["intelligence","dexterity"]}]},{id:4,name:"Seoul Street Fighting",theme:"Operation 4 — House-to-house, barricades, rooftop marksman",days:[{id:"k4d1",title:"House to House",briefing:"Report to Seoul Streets. Movement in the alleys — spot hostiles before they spot you. Do not shoot civilians.",locationName:"Seoul Streets",activityId:"nightWatch",stats:["dexterity","intelligence"]},{id:"k4d2",title:"Barricade Assault",briefing:"Report to Barricade Row. Clear barricades and haul supplies forward under time pressure.",locationName:"Barricade Row",activityId:"supplyRun",stats:["endurance","strength"]},{id:"k4d3",title:"Rooftop Marksman",briefing:"Report to Seoul Streets. North Korean snipers on the rooftops. Adjust for wind and qualify across three positions.",locationName:"Seoul Streets",activityId:"rifleQual",stats:["dexterity","intelligence"]}],sideQuests:[{id:"k4_chosin_few",title:"The Chosin Few",availableAfterDay:1,locationName:"Aid Station",questId:"chosinFew"}]},{id:5,name:"North to the Reservoir",theme:"Operation 5 — Mail from home, forced march north, first snow",days:[{id:"k5d1",title:"Mail from Home",briefing:"Report to the Command Post. Letters from home before the march north. Choose how you handle what arrives.",locationName:"Command Post",activityId:"writeLetter",stats:["leadership","intelligence"]},{id:"k5d2",title:"Forced March North",briefing:"Report to Seoul Streets. Full gear march toward the reservoir. Manage pace and help Marines who are falling out.",locationName:"Seoul Streets",activityId:"humpPrep",stats:["endurance","leadership"]},{id:"k5d3",title:"First Snow",briefing:"Report to the Command Post. Officers brief the division on what waits at the Chosin Reservoir. Winter is coming.",locationName:"Command Post",activityId:"familyDay",stats:["leadership"]}]},{id:6,name:"Yudam-ni",theme:"Operation 6 — Dig in frozen ground, night watch at -30, hold the perimeter",days:[{id:"k6d1",title:"Frozen Foxholes",briefing:"Report to Yudam-ni Perimeter. Dig fighting positions in frozen ground. Every stroke of the entrenching tool costs warmth.",locationName:"Yudam-ni Perimeter",activityId:"foxholeDig",stats:["strength","endurance"]},{id:"k6d2",title:"Night Watch",briefing:"Report to Yudam-ni Perimeter. Stand watch at thirty below. Freeze when illumination pops — movement draws Chinese fire.",locationName:"Yudam-ni Perimeter",activityId:"nightMove",stats:["dexterity"]},{id:"k6d3",title:"Hold the Perimeter",briefing:"Report to Yudam-ni Perimeter. Close combat on the frozen line. Read your opponent and counter before they close.",locationName:"Yudam-ni Perimeter",activityId:"pugilDuel",stats:["strength","dexterity"]}],sideQuests:[{id:"k6_fox_runner",title:"Fox Company Runner",availableAfterDay:1,locationName:"Toktong Pass",questId:"foxCompanyRunner"}]},{id:7,name:"Toktong Pass",theme:"Operation 7 — Relief march, night watch, mortar support for Fox Company",days:[{id:"k7d1",title:"Relief March",briefing:"Report to Toktong Pass. Force march through the snow to relieve Fox Company. Keep your stride in the green band.",locationName:"Toktong Pass",activityId:"paceRunner",stats:["endurance"]},{id:"k7d2",title:"Pass at Night",briefing:"Report to Fox Hill. Chinese probes in the dark — spot movement before they overrun the pass.",locationName:"Fox Hill",activityId:"nightWatch",stats:["dexterity","intelligence"]},{id:"k7d3",title:"Mortars for Fox",briefing:"Report to Toktong Pass. Fox Company is surrounded. Adjust fire and bracket the Chinese positions on the ridgeline.",locationName:"Toktong Pass",activityId:"mortarBracket",stats:["intelligence","dexterity"]}]},{id:8,name:"Frozen Wounded",theme:"Operation 8 — Frostbite triage, supply drop, frozen weapons",days:[{id:"k8d1",title:"Frostbite Triage",briefing:"Report to the Aid Station. Casualties with frozen feet and hands. Triage frostbite in the correct order.",locationName:"Aid Station",activityId:"frostbiteCheck",stats:["intelligence"]},{id:"k8d2",title:"Supply Drop",briefing:"Report to Hagaru-ri. Recover ammo and rations from the airdrop before the column moves out.",locationName:"Hagaru-ri",activityId:"supplyRun",stats:["endurance","strength"]},{id:"k8d3",title:"Frozen Weapons",briefing:"Report to Warming Tents. M1 bolts are freezing shut. Work the actions and keep the rifles firing.",locationName:"Warming Tents",activityId:"weaponsCold",stats:["dexterity","intelligence"]}],sideQuests:[{id:"k8_chesty",title:"Chesty's Words",availableAfterDay:1,locationName:"Koto-ri",questId:"chestysWords"}]},{id:9,name:"Attack in a Different Direction",theme:"Operation 9 — Fighting withdrawal, roadblocks, rear guard",days:[{id:"k9d1",title:"Fighting Withdrawal",briefing:"Report to Frozen Reservoir. Attack in a different direction — escort the column south under fire.",locationName:"Frozen Reservoir",activityId:"convoyEscort",stats:["endurance","leadership"]},{id:"k9d2",title:"Clear Roadblocks",briefing:"Report to Koto-ri. Chinese roadblocks on the MSR. Steady your aim and clear the positions.",locationName:"Koto-ri",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"k9d3",title:"Rear Guard",briefing:"Report to Toktong Pass. Hold the rear while the column withdraws. Bayonet work at close range.",locationName:"Toktong Pass",activityId:"bayonetCourse",stats:["strength","dexterity"]}]},{id:10,name:"Funchilin Pass",theme:"Operation 10 — Bridge repair, cross under guard, final ridge fight",days:[{id:"k10d1",title:"Bridge Out",briefing:"Report to Funchilin Bridge. The bridge is destroyed. Assemble treadway sections before the column is cut off.",locationName:"Funchilin Bridge",activityId:"bridgeRepair",stats:["intelligence","strength"]},{id:"k10d2",title:"Cross Under Guard",briefing:"Report to Funchilin Bridge. Move the column across under fire. Freeze when illumination pops.",locationName:"Funchilin Bridge",activityId:"nightMove",stats:["dexterity"]},{id:"k10d3",title:"Final Ridge Fight",briefing:"Report to Fox Hill. Last ridge before Hungnam. Adjust for wind and qualify across three firing positions.",locationName:"Fox Hill",activityId:"rifleQual",stats:["dexterity","intelligence"]}]},{id:11,name:"Hungnam Evacuation",theme:"Operation 11 — Embark the division, after action, campaign honors",days:[{id:"k11d1",title:"Embark the Division",briefing:"Report to Hungnam Docks. One hundred thousand troops and refugees evacuate by sea. Execute every command on the loading ramp.",locationName:"Hungnam Docks",activityId:"shipOut",stats:["leadership","endurance"]},{id:"k11d2",title:"After Action",briefing:"Report to the Command Post. Officers debrief the breakout. Tell them what the Chosin cost.",locationName:"Command Post",activityId:"familyDay",stats:["leadership"]},{id:"k11d3",title:"Campaign Honors",briefing:"Report to Hungnam Docks. Formation on the pier. Inchon to Chosin — earn your campaign honors.",locationName:"Hungnam Docks",activityId:"graduationParade",stats:["leadership"]}]}],Ux=[{id:1,name:"Arrival at Khe Sanh",theme:"Operation 1 — Helo in, dig the trenchline, hump ammo",days:[{id:"v1d1",title:"Helo In",briefing:"Report to the Combat Base. CH-46 drops you on the Khe Sanh plateau. NVA trenches are visible on the ridgelines — dig in before nightfall.",locationName:"Combat Base",activityId:"shipOut",stats:["leadership","intelligence"]},{id:"v1d2",title:"Dig the Trenchline",briefing:"Report to the Trenchline. Monsoon mud and NVA mortars — establish fighting positions along the perimeter.",locationName:"Trenchline",activityId:"foxholeDig",stats:["strength","endurance"]},{id:"v1d3",title:"Hump Ammo",briefing:"Report to the Ammo Dump. Hump crates to the trenchline under time pressure. Every round counts.",locationName:"Ammo Dump",activityId:"supplyRun",stats:["endurance","strength"]}],sideQuests:[{id:"v1_shorttimer",title:"The Short-Timer",availableAfterDay:1,locationName:"Aid Station",questId:"shortTimer"}]},{id:2,name:"The Hill Fights",theme:"Operation 2 — Hill 881, clear the crest, fire support",days:[{id:"v2d1",title:"Climb Hill 881",briefing:"Report to Hill 881. Force the pace up the jungle slope under fire. Keep your stride in the green band.",locationName:"Hill 881",activityId:"paceRunner",stats:["endurance"]},{id:"v2d2",title:"Clear the Crest",briefing:"Report to Hill 881. NVA bunkers on the crest. Steady your aim and clear the approaches.",locationName:"Hill 881",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"v2d3",title:"Fire Support",briefing:"Report to the Command Post. Call for mortar and artillery. Bracket the NVA positions on the ridgeline.",locationName:"Command Post",activityId:"mortarBracket",stats:["intelligence","dexterity"]}]},{id:3,name:"The Siege Begins",theme:"Operation 3 — Incoming barrage, rebuild bunker, night watch",days:[{id:"v3d1",title:"Incoming Barrage",briefing:"Report to the Trenchline. NVA rockets and mortars — hit the deck on INCOMING, hold position on ALL CLEAR.",locationName:"Trenchline",activityId:"incomingArtillery",stats:["dexterity","endurance"]},{id:"v3d2",title:"Rebuild the Bunker",briefing:"Report to the Combat Base. A direct hit collapsed the bunker. Rebuild before the next barrage.",locationName:"Combat Base",activityId:"bunkerRepair",stats:["strength","intelligence"]},{id:"v3d3",title:"Night Watch on the Wire",briefing:"Report to The Wire. Movement in the treeline — spot hostiles before they probe the perimeter.",locationName:"The Wire",activityId:"nightWatch",stats:["dexterity","intelligence"]}],sideQuests:[{id:"v3_tunnel",title:"Tunnel Rat",availableAfterDay:1,locationName:"Listening Post",questId:"tunnelRat"}]},{id:4,name:"Patrols in the Wire",theme:"Operation 4 — Night movement, map treelines, listening post",days:[{id:"v4d1",title:"Night Movement",briefing:"Report to The Wire. Patrol outside the perimeter. Freeze when illumination pops — movement draws fire.",locationName:"The Wire",activityId:"nightMove",stats:["dexterity"]},{id:"v4d2",title:"Map the Treelines",briefing:"Report to Hill 881. Follow the patrol map and mark every NVA position before the column moves through.",locationName:"Hill 881",activityId:"landNav",stats:["intelligence"]},{id:"v4d3",title:"Listening Post",briefing:"Report to the Listening Post. Movement in the dark — spot probes before they reach the wire.",locationName:"Listening Post",activityId:"nightWatch",stats:["dexterity","intelligence"]}]},{id:5,name:"Resupply Under Fire",theme:"Operation 5 — Medevac, forced march, word of Tet",days:[{id:"v5d1",title:"Guide the Medevac",briefing:"Report to the Drop Zone. Pop smoke, clear the LZ, and load casualties before the NVA adjust fire.",locationName:"Drop Zone",activityId:"medevacSmoke",stats:["leadership","intelligence"]},{id:"v5d2",title:"Forced March",briefing:"Report to the Airstrip. Full gear march through monsoon mud. Manage pace and help Marines falling out.",locationName:"Airstrip",activityId:"humpPrep",stats:["endurance","leadership"]},{id:"v5d3",title:"Word of Tet",briefing:"Report to the Command Post. Officers brief the company — Tet is coming. Everything is about to change.",locationName:"Command Post",activityId:"familyDay",stats:["leadership"]}]},{id:6,name:"Crossing the Perfume",theme:"Operation 6 — Boat ramp, secure compound, first contact",days:[{id:"v6d1",title:"Boat Ramp Under Fire",briefing:"Report to the Boat Ramp. Cross the Perfume River under fire. Vault, crawl, and climb — keep moving.",locationName:"Boat Ramp",activityId:"obstacleRun",stats:["dexterity","strength"]},{id:"v6d2",title:"Secure the Compound",briefing:"Report to the MACV Compound. Dig in and establish a foothold in the city before the NVA counterattack.",locationName:"MACV Compound",activityId:"foxholeDig",stats:["strength","endurance"]},{id:"v6d3",title:"First Contact",briefing:"Report to the Treasury Building. First contact in the streets. Fix bayonets and clear the block.",locationName:"Treasury Building",activityId:"bayonetCourse",stats:["strength","dexterity"]}],sideQuests:[{id:"v6_photog",title:"Combat Photographer",availableAfterDay:1,locationName:"University",questId:"combatPhotographer"}]},{id:7,name:"MACV Compound",theme:"Operation 7 — House-to-house, ammo carry, rooftop sniper",days:[{id:"v7d1",title:"House to House",briefing:"Report to the MACV Compound. Movement in the rubble — spot NVA before they spot you. Do not shoot civilians.",locationName:"MACV Compound",activityId:"nightWatch",stats:["dexterity","intelligence"]},{id:"v7d2",title:"Ammo Up the Stairs",briefing:"Report to the University. Haul ammo crates up the stairwells under time pressure.",locationName:"University",activityId:"supplyRun",stats:["endurance","strength"]},{id:"v7d3",title:"Rooftop Sniper",briefing:"Report to the Treasury Building. NVA snipers on the rooftops. Steady your aim and clear the positions.",locationName:"Treasury Building",activityId:"steadyAim",stats:["dexterity","intelligence"]}]},{id:8,name:"Block by Block",theme:"Operation 8 — Breach and clear, close quarters, covering fire",days:[{id:"v8d1",title:"Breach and Clear",briefing:"Report to the University. Stack up, breach the wall, frag out, and clear the room.",locationName:"University",activityId:"wallBreach",stats:["dexterity","strength"]},{id:"v8d2",title:"Close Quarters",briefing:"Report to the MACV Compound. Room-to-room fighting. Read your opponent and counter before they close.",locationName:"MACV Compound",activityId:"pugilDuel",stats:["strength","dexterity"]},{id:"v8d3",title:"Covering Fire",briefing:"Report to the Treasury Building. Adjust for wind and qualify across three firing positions.",locationName:"Treasury Building",activityId:"rifleQual",stats:["dexterity","intelligence"]}],sideQuests:[{id:"v8_lieutenant",title:"The New Lieutenant",availableAfterDay:1,locationName:"Command Post",questId:"newLieutenant"}]},{id:9,name:"The Citadel Walls",theme:"Operation 9 — Bracket wall guns, scale rubble, night assault",days:[{id:"v9d1",title:"Bracket the Wall Guns",briefing:"Report to the Citadel Wall. NVA guns behind the ancient ramparts. Adjust fire and bracket the positions.",locationName:"Citadel Wall",activityId:"mortarBracket",stats:["intelligence","dexterity"]},{id:"v9d2",title:"Scale the Rubble",briefing:"Report to the Citadel Gate. Climb the rubble under fire — missed grips cost you height.",locationName:"Citadel Gate",activityId:"highObstacle",stats:["strength","dexterity"]},{id:"v9d3",title:"Night Assault",briefing:"Report to the Citadel Wall. Assault the walls at night. Freeze when illumination pops.",locationName:"Citadel Wall",activityId:"nightMove",stats:["dexterity"]}]},{id:10,name:"Casualties of Tet",theme:"Operation 10 — Triage, medevac, letters home",days:[{id:"v10d1",title:"Triage the Aid Station",briefing:"Report to the Aid Station. Casualties overflow the triage tents. Treat in the correct order.",locationName:"Aid Station",activityId:"fieldMedic",stats:["intelligence"]},{id:"v10d2",title:"Medevac from the Courtyard",briefing:"Report to the Courtyard LZ. Pop smoke, clear the LZ, and load casualties before the NVA adjust fire.",locationName:"Courtyard LZ",activityId:"medevacSmoke",stats:["leadership","intelligence"]},{id:"v10d3",title:"Letters Home",briefing:"Report to the Command Post. Write letters that may be the last ones home. Choose your words carefully.",locationName:"Command Post",activityId:"writeLetter",stats:["leadership","intelligence"]}]},{id:11,name:"The Citadel Falls",theme:"Operation 11 — Final assault, after action, campaign honors",days:[{id:"v11d1",title:"Final Assault",briefing:"Report to the Citadel Gate. Final push to clear the Citadel. Adjust for wind and qualify across three positions.",locationName:"Citadel Gate",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"v11d2",title:"After Action",briefing:"Report to the Command Post. Officers debrief the battle for Hue. Tell them what Tet cost.",locationName:"Command Post",activityId:"familyDay",stats:["leadership"]},{id:"v11d3",title:"Campaign Honors",briefing:"Report to the Citadel Wall. Formation below the ramparts. Khe Sanh to Hue — earn your campaign honors.",locationName:"Citadel Wall",activityId:"graduationParade",stats:["leadership"]}]}],zx=[{id:1,name:"Crossing the LD",theme:"Operation 1 — Convoy staging, dig in at the breach, water resupply",days:[{id:"i1d1",title:"Convoy Staging",briefing:"Report to the Line of Departure. 1st Marine Division stages for the push into Iraq. Man your stations and check your gear.",locationName:"Line of Departure",activityId:"shipOut",stats:["leadership","intelligence"]},{id:"i1d2",title:"Dig In at the Breach",briefing:"Report to the Line of Departure. Establish fighting positions before the column crosses the berm into Iraq.",locationName:"Line of Departure",activityId:"foxholeDig",stats:["strength","endurance"]},{id:"i1d3",title:"Water Resupply",briefing:"Report to the Supply Point. Hump water crates to the staging area under time pressure. Hydration saves lives in the desert.",locationName:"Supply Point",activityId:"supplyRun",stats:["endurance","strength"]}],sideQuests:[{id:"i1_interpreter",title:"The Interpreter",availableAfterDay:1,locationName:"Command Post",questId:"theInterpreter"}]},{id:2,name:"Nasiriyah",theme:"Operation 2 — Bridge gauntlet, rooftop overwatch, casualty collection",days:[{id:"i2d1",title:"The Gauntlet",briefing:"Report to Nasiriyah Bridge. Fedayeen hold the approaches — advance the column and freeze on flares.",locationName:"Nasiriyah Bridge",activityId:"convoyEscort",stats:["dexterity","endurance"]},{id:"i2d2",title:"Rooftop Overwatch",briefing:"Report to Nasiriyah Bridge. Overwatch the bridge from the rooftops. Steady your aim and clear the approaches.",locationName:"Nasiriyah Bridge",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"i2d3",title:"Casualty Collection",briefing:"Report to the Aid Station. Marines are coming off the bridge. Triage and treat in the correct order.",locationName:"Aid Station",activityId:"fieldMedic",stats:["intelligence"]}]},{id:3,name:"The Sandstorm",theme:"Operation 3 — Orange-out navigation, checkpoint duty, night perimeter",days:[{id:"i3d1",title:"Navigate the Orange-Out",briefing:"Report to Highway 1. Sandstorm drops visibility to zero — follow the patrol map and mark every checkpoint.",locationName:"Highway 1",activityId:"landNav",stats:["intelligence"]},{id:"i3d2",title:"Checkpoint Duty",briefing:"Report to the Checkpoint. Vehicles approach the wire — wave through, search, or halt based on the cues.",locationName:"Checkpoint",activityId:"checkpointSearch",stats:["intelligence","dexterity"]},{id:"i3d3",title:"Night Perimeter",briefing:"Report to the Checkpoint. Movement in the dark — spot probes before they reach the wire.",locationName:"Checkpoint",activityId:"nightWatch",stats:["dexterity","intelligence"]}],sideQuests:[{id:"i3_reservist",title:"The Reservist",availableAfterDay:1,locationName:"Supply Point",questId:"theReservist"}]},{id:4,name:"Highway 1",theme:"Operation 4 — Turret gunner, IED sweep, forced pace to the Diyala",days:[{id:"i4d1",title:"Turret Gunner",briefing:"Report to Highway 1. Ride the turret on the march — traverse on contact, hold fire on civilian vehicles.",locationName:"Highway 1",activityId:"turretGunner",stats:["dexterity","intelligence"]},{id:"i4d2",title:"IED Sweep",briefing:"Report to Highway 1. Sweep ahead of the column — mark suspicious objects, ignore roadside clutter.",locationName:"Highway 1",activityId:"iedSweep",stats:["dexterity","intelligence"]},{id:"i4d3",title:"Forced Pace to the Diyala",briefing:"Report to Diyala Bridge. Full gear march through the heat. Keep your stride in the green band.",locationName:"Diyala Bridge",activityId:"paceRunner",stats:["endurance"]}]},{id:5,name:"Baghdad Falls",theme:"Operation 5 — Bridge assault, Firdos Square, letters home",days:[{id:"i5d1",title:"Bridge Assault",briefing:"Report to Diyala Bridge. Assault the bridge under fire. Vault, crawl, and climb — keep moving.",locationName:"Diyala Bridge",activityId:"obstacleRun",stats:["dexterity","strength"]},{id:"i5d2",title:"Firdos Square",briefing:"Report to Firdos Square. Rig the chain, clear the square, and pull down the statue on the cadence.",locationName:"Firdos Square",activityId:"statueTopple",stats:["leadership","dexterity"]},{id:"i5d3",title:"Letters Home",briefing:"Report to the Command Post. Baghdad has fallen. Write letters home — choose your words carefully.",locationName:"Command Post",activityId:"writeLetter",stats:["leadership","intelligence"]}],sideQuests:[{id:"i5_carepackages",title:"Care Packages",availableAfterDay:1,locationName:"Supply Point",questId:"carePackages"}]},{id:6,name:"Cross the Berm",theme:"Operation 6 — Berm breach, first block, overwatch the advance",days:[{id:"i6d1",title:"Breach the Berm",briefing:"Report to the Berm Breach. Full gear march through the breach point. Manage pace and help Marines falling out.",locationName:"Berm Breach",activityId:"humpPrep",stats:["endurance","leadership"]},{id:"i6d2",title:"First Block",briefing:"Report to the Jolan District. Stack up, breach the wall, frag out, and clear the room.",locationName:"Jolan District",activityId:"wallBreach",stats:["dexterity","strength"]},{id:"i6d3",title:"Overwatch the Advance",briefing:"Report to the Rooftop OP. Adjust for wind and qualify across three firing positions.",locationName:"Rooftop OP",activityId:"rifleQual",stats:["dexterity","intelligence"]}]},{id:7,name:"The Jolan District",theme:"Operation 7 — House-to-house, IEDs in doorways, ammo resupply",days:[{id:"i7d1",title:"House to House",briefing:"Report to the Jolan District. Movement in the rubble — spot insurgents before they spot you.",locationName:"Jolan District",activityId:"nightWatch",stats:["dexterity","intelligence"]},{id:"i7d2",title:"IEDs in the Doorways",briefing:"Report to the Train Station. Sweep every doorway — mark suspicious objects, ignore roadside clutter.",locationName:"Train Station",activityId:"iedSweep",stats:["dexterity","intelligence"]},{id:"i7d3",title:"Ammo Resupply",briefing:"Report to the Government Center. Haul ammo crates under time pressure before the next assault.",locationName:"Government Center",activityId:"supplyRun",stats:["endurance","strength"]}],sideQuests:[{id:"i7_hellhouse",title:"Hell House",availableAfterDay:1,locationName:"Jolan District",questId:"hellHouseQuest"}]},{id:8,name:"Government Center",theme:"Operation 8 — Breach and clear, close quarters, mark the medevac",days:[{id:"i8d1",title:"Breach and Clear",briefing:"Report to the Government Center. Stack up, breach, frag out, and clear the room.",locationName:"Government Center",activityId:"wallBreach",stats:["dexterity","strength"]},{id:"i8d2",title:"Close Quarters",briefing:"Report to the Industrial District. Room-to-room fighting. Read your opponent and counter before they close.",locationName:"Industrial District",activityId:"pugilDuel",stats:["strength","dexterity"]},{id:"i8d3",title:"Mark the Medevac",briefing:"Report to the Aid Station. Pop smoke, clear the LZ, and load casualties before the enemy adjusts fire.",locationName:"Aid Station",activityId:"medevacSmoke",stats:["leadership","intelligence"]}]},{id:9,name:"Hell House",theme:"Operation 9 — Entry under fire, pull the wounded, rooftop cordon",days:[{id:"i9d1",title:"Entry Under Fire",briefing:"Report to the Jolan District. Fortified house — fix bayonets and clear the entry.",locationName:"Jolan District",activityId:"bayonetCourse",stats:["strength","dexterity"]},{id:"i9d2",title:"Pull the Wounded",briefing:"Report to the Aid Station. Marines are trapped inside. Treat casualties in the correct order.",locationName:"Aid Station",activityId:"buddyAid",stats:["intelligence"]},{id:"i9d3",title:"Rooftop Cordon",briefing:"Report to the Rooftop OP. Insurgent snipers on the rooftops. Steady your aim and clear the positions.",locationName:"Rooftop OP",activityId:"steadyAim",stats:["dexterity","intelligence"]}]},{id:10,name:"Phase Line Fran",theme:"Operation 10 — Mortars on strongpoints, night push, aid station triage",days:[{id:"i10d1",title:"Mortars on the Strongpoints",briefing:"Report to Phase Line Fran. Insurgent positions behind the berm. Adjust fire and bracket the strongpoints.",locationName:"Phase Line Fran",activityId:"mortarBracket",stats:["intelligence","dexterity"]},{id:"i10d2",title:"Night Push",briefing:"Report to the Industrial District. Push through the district at night. Freeze when illumination pops.",locationName:"Industrial District",activityId:"nightMove",stats:["dexterity"]},{id:"i10d3",title:"Aid Station Triage",briefing:"Report to the Aid Station. Casualties overflow the triage tents. Treat in the correct order.",locationName:"Aid Station",activityId:"fieldMedic",stats:["intelligence"]}]},{id:11,name:"The City Falls",theme:"Operation 11 — Final clearance, after action, campaign honors",days:[{id:"i11d1",title:"Final Clearance",briefing:"Report to the Grand Mosque. Final push to clear the city. Adjust for wind and qualify across three positions.",locationName:"Grand Mosque",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"i11d2",title:"After Action",briefing:"Report to the Command Post. Officers debrief the battle for Fallujah. Tell them what Phantom Fury cost.",locationName:"Command Post",activityId:"familyDay",stats:["leadership"]},{id:"i11d3",title:"Campaign Honors",briefing:"Report to Phase Line Fran. Formation at the phase line. Baghdad to Fallujah — earn your campaign honors.",locationName:"Phase Line Fran",activityId:"graduationParade",stats:["leadership"]}]}],Bx=[{id:1,name:"Eight Marines",theme:"Operation 1 — Muster at Alexandria, load the caravan, first march",days:[{id:"t1d1",title:"Muster at Alexandria",briefing:"Report to Alexandria Camp. Eight Marines and Lieutenant O'Bannon join Eaton's expedition. Man your stations.",locationName:"Alexandria Camp",activityId:"shipOut",stats:["leadership","intelligence"]},{id:"t1d2",title:"Load the Caravan",briefing:"Report to the Supply Cache. Load water skins, powder, and rations before the column moves out.",locationName:"Supply Cache",activityId:"supplyRun",stats:["endurance","strength"]},{id:"t1d3",title:"First Day's March",briefing:"Report to The Caravan. Force the pace across the Libyan desert. Keep your stride in the green band.",locationName:"The Caravan",activityId:"paceRunner",stats:["endurance"]}],sideQuests:[{id:"t1_guard",title:"The Marine Guard",availableAfterDay:1,locationName:"Alexandria Camp",questId:"marineGuard"}]},{id:2,name:"The Caravan",theme:"Operation 2 — Camels bolt, navigate by stars, guard the water",days:[{id:"t2d1",title:"Camels Bolt",briefing:"Report to The Caravan. A spooked camel breaks the column — grab the lead before the train scatters.",locationName:"The Caravan",activityId:"camelCaravan",stats:["dexterity","endurance"]},{id:"t2d2",title:"Navigate by the Stars",briefing:"Report to Star Route. Follow Eaton's map and mark every checkpoint before the column moves through.",locationName:"Star Route",activityId:"landNav",stats:["intelligence"]},{id:"t2d3",title:"Guard the Water",briefing:"Report to The Wells. Movement in the dark — spot probes before they reach the water skins.",locationName:"The Wells",activityId:"nightWatch",stats:["dexterity","intelligence"]}],sideQuests:[{id:"t2_map",title:"Eaton's Map",availableAfterDay:1,locationName:"Command Tent",questId:"eatonsMap"}]},{id:3,name:"Mutiny at the Wells",theme:"Operation 3 — Parley with mercenaries, share rations, hold the column",days:[{id:"t3d1",title:"Parley with the Mercenaries",briefing:"Report to Mercenary Camp. Greek and Arab mercenaries block the well — defuse the flashpoint.",locationName:"Mercenary Camp",activityId:"mutinyParley",stats:["leadership","intelligence"]},{id:"t3d2",title:"Share the Rations",briefing:"Report to the Supply Cache. Issue gear in the correct order before the column moves again.",locationName:"Supply Cache",activityId:"gearShed",stats:["intelligence"]},{id:"t3d3",title:"Hold the Column Together",briefing:"Report to The Caravan. Full gear march through the desert. Manage pace and help Marines falling out.",locationName:"The Caravan",activityId:"humpPrep",stats:["endurance","leadership"]}],sideQuests:[{id:"t3_hamet",title:"Hamet's Cause",availableAfterDay:1,locationName:"Command Tent",questId:"hametsCause"}]},{id:4,name:"The Dead March",theme:"Operation 4 — Forced march, heat casualties, Eaton's resolve",days:[{id:"t4d1",title:"Forced March",briefing:"Report to Dead March Flats. Water skins are empty — force the pace across the flats.",locationName:"Dead March Flats",activityId:"paceRunner",stats:["endurance"]},{id:"t4d2",title:"Heat Casualties",briefing:"Report to Aid Tent. Marines are dropping in the heat. Triage and treat in the correct order.",locationName:"Aid Tent",activityId:"fieldMedic",stats:["intelligence"]},{id:"t4d3",title:"Eaton's Resolve",briefing:"Report to Command Tent. General Eaton addresses the column — five hundred miles and the fortress awaits.",locationName:"Command Tent",activityId:"familyDay",stats:["leadership"]}],sideQuests:[{id:"t4_pay",title:"The Promised Pay",availableAfterDay:1,locationName:"Mercenary Camp",questId:"promisedPay"}]},{id:5,name:"Bomba Bay",theme:"Operation 5 — Signal the Argus, resupply, eve of battle",days:[{id:"t5d1",title:"Signal the Argus",briefing:"Report to Bomba Bay. Signal the Constitution offshore. Steady your aim and clear the approaches.",locationName:"Bomba Bay",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"t5d2",title:"Resupply from the Boats",briefing:"Report to Bomba Bay. Haul powder and rations from the landing craft under time pressure.",locationName:"Bomba Bay",activityId:"supplyRun",stats:["endurance","strength"]},{id:"t5d3",title:"Eve of Battle",briefing:"Report to Command Tent. Write letters home before the assault on Derne. Choose your words carefully.",locationName:"Command Tent",activityId:"writeLetter",stats:["leadership","intelligence"]}]},{id:6,name:"The Assault Begins",theme:"Operation 6 — Charge the battery, naval gunfire, through the breach",days:[{id:"t6d1",title:"Charge the Harbor Battery",briefing:"Report to Harbor Battery. Fix bayonets and charge the harbor guns with O'Bannon's Marines.",locationName:"Harbor Battery",activityId:"derneCharge",stats:["strength","dexterity"]},{id:"t6d2",title:"Naval Gunfire",briefing:"Report to Derne Harbor. Constitution's guns bracket the fortress. Adjust fire on the ramparts.",locationName:"Derne Harbor",activityId:"mortarBracket",stats:["intelligence","dexterity"]},{id:"t6d3",title:"Through the Breach",briefing:"Report to The Breach. Assault through the breach under fire. Vault, crawl, and climb — keep moving.",locationName:"The Breach",activityId:"obstacleRun",stats:["dexterity","strength"]}]},{id:7,name:"The Harbor Battery",theme:"Operation 7 — Man the guns, hold ramparts, counterattack",days:[{id:"t7d1",title:"Man the Captured Guns",briefing:"Report to Harbor Battery. Load and fire the captured guns before the counterattack.",locationName:"Harbor Battery",activityId:"cannonBattery",stats:["intelligence","dexterity"]},{id:"t7d2",title:"Hold the Ramparts",briefing:"Report to Ramparts. Adjust for wind and qualify across three firing positions.",locationName:"Ramparts",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"t7d3",title:"Counterattack at Dusk",briefing:"Report to Ramparts. Movement on the walls — spot hostiles before they retake the battery.",locationName:"Ramparts",activityId:"nightWatch",stats:["dexterity","intelligence"]}]},{id:8,name:"Governor's Palace",theme:"Operation 8 — House-to-house, bayonets, secure the walls",days:[{id:"t8d1",title:"House to House",briefing:"Report to Old Town. Assault through the streets at night. Freeze when illumination pops.",locationName:"Old Town",activityId:"nightMove",stats:["dexterity"]},{id:"t8d2",title:"Bayonets in the Courtyard",briefing:"Report to Governor's Palace. Fix bayonets and clear the courtyard.",locationName:"Governor's Palace",activityId:"bayonetCourse",stats:["strength","dexterity"]},{id:"t8d3",title:"Secure the Walls",briefing:"Report to Water Gate. Dig in and establish fighting positions along the fortress walls.",locationName:"Water Gate",activityId:"foxholeDig",stats:["strength","endurance"]}]},{id:9,name:"The Counterattack",theme:"Operation 9 — Repel assault, close quarters, patch the wounded",days:[{id:"t9d1",title:"Repel the Assault",briefing:"Report to Ramparts. Tripolitan forces counterattack the walls. Steady your aim and hold.",locationName:"Ramparts",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"t9d2",title:"Close Quarters",briefing:"Report to Governor's Palace. Room-to-room fighting. Read your opponent and counter before they close.",locationName:"Governor's Palace",activityId:"pugilDuel",stats:["strength","dexterity"]},{id:"t9d3",title:"Patch the Wounded",briefing:"Report to Aid Tent. Treat casualties in the correct order before the next assault.",locationName:"Aid Tent",activityId:"buddyAid",stats:["intelligence"]}]},{id:10,name:"Holding Derne",theme:"Operation 10 — Rebuild battery, ration garrison, word from fleet",days:[{id:"t10d1",title:"Rebuild the Battery",briefing:"Report to Harbor Battery. Rebuild the captured guns before the next bombardment.",locationName:"Harbor Battery",activityId:"bunkerRepair",stats:["strength","intelligence"]},{id:"t10d2",title:"Ration the Garrison",briefing:"Report to Command Tent. Issue gear in the correct order — every ration counts.",locationName:"Command Tent",activityId:"gearShed",stats:["intelligence"]},{id:"t10d3",title:"Word from the Fleet",briefing:"Report to Command Tent. Mail from the Argus and Constitution — read what the fleet sends.",locationName:"Command Tent",activityId:"mailCall",stats:["leadership"]}]},{id:11,name:"The Colors Over Derne",theme:"Operation 11 — Final defense, raise the colors, campaign honors",days:[{id:"t11d1",title:"Final Defense",briefing:"Report to Flag Bastion. Final push to hold Derne. Adjust for wind and qualify across three positions.",locationName:"Flag Bastion",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"t11d2",title:"Raise the Colors",briefing:"Report to Flag Bastion. Rig the halyard and hoist the first US flag over an Old World fortress.",locationName:"Flag Bastion",activityId:"derneColors",stats:["leadership","dexterity"]},{id:"t11d3",title:"Campaign Honors",briefing:"Report to Governor's Palace. Formation in the courtyard. Alexandria to Derne — earn your campaign honors.",locationName:"Governor's Palace",activityId:"graduationParade",stats:["leadership"]}]}],Wx=[{id:1,name:"Into the Line",theme:"Operation 1 — Ship out, dig in, night watch",days:[{id:"b1d1",title:"Into the Line",briefing:"Report to The Wheat Field. Marines deploy to the Marne front. Man your stations.",locationName:"The Wheat Field",activityId:"shipOut",stats:["leadership","intelligence"]},{id:"b1d2",title:"Dig In",briefing:"Report to Trenchline. Establish fighting positions before the German advance.",locationName:"Trenchline",activityId:"foxholeDig",stats:["strength","endurance"]},{id:"b1d3",title:"Night Watch",briefing:"Report to Trenchline. Movement in no-man's-land — spot hostiles before they probe the line.",locationName:"Trenchline",activityId:"nightWatch",stats:["dexterity","intelligence"]}],sideQuests:[{id:"b1_retreat",title:"Retreat Hell",availableAfterDay:1,locationName:"Command Post",questId:"retreatHell"}]},{id:2,name:"The Wheat Field",theme:"Operation 2 — Charge the field, overwatch, casualties",days:[{id:"b2d1",title:"Charge the Wheat Field",briefing:"Report to The Wheat Field. Force the pace across open ground under machine-gun fire.",locationName:"The Wheat Field",activityId:"paceRunner",stats:["endurance"]},{id:"b2d2",title:"Overwatch",briefing:"Report to Hill 142. Steady your aim and clear the German approaches.",locationName:"Hill 142",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"b2d3",title:"Casualty Collection",briefing:"Report to Aid Station. Marines are coming off the field. Triage in the correct order.",locationName:"Aid Station",activityId:"fieldMedic",stats:["intelligence"]}]},{id:3,name:"Gas Attack",theme:"Operation 3 — Mask up, buddy aid, night push",days:[{id:"b3d1",title:"Gas Attack",briefing:"Report to The Ravine. German gas on the line — mask up on GAS! GAS! GAS!",locationName:"The Ravine",activityId:"gasAlarm",stats:["dexterity","intelligence"]},{id:"b3d2",title:"Buddy Aid",briefing:"Report to Aid Station. Treat gas casualties in the correct order.",locationName:"Aid Station",activityId:"buddyAid",stats:["intelligence"]},{id:"b3d3",title:"Night Push",briefing:"Report to The Wood. Push through the forest at night. Freeze when illumination pops.",locationName:"The Wood",activityId:"nightMove",stats:["dexterity"]}],sideQuests:[{id:"b3_nickname",title:"The Nickname",availableAfterDay:1,locationName:"Hunting Lodge",questId:"theNickname"}]},{id:4,name:"The Wood Itself",theme:"Operation 4 — Bayonets, close quarters, mortars",days:[{id:"b4d1",title:"Bayonets in the Wood",briefing:"Report to The Wood. Fix bayonets and clear the German positions in the trees.",locationName:"The Wood",activityId:"bayonetCourse",stats:["strength","dexterity"]},{id:"b4d2",title:"Close Quarters",briefing:"Report to Hunting Lodge. Room-to-room fighting in the lodge ruins.",locationName:"Hunting Lodge",activityId:"pugilDuel",stats:["strength","dexterity"]},{id:"b4d3",title:"Mortars on the Line",briefing:"Report to Command Post. Bracket the German positions in the wood.",locationName:"Command Post",activityId:"mortarBracket",stats:["intelligence","dexterity"]}]},{id:5,name:"Devil Dogs",theme:"Operation 5 — Final assault, letters home, honors",days:[{id:"b5d1",title:"Final Assault",briefing:"Report to Lucy-le-Bocage. Final push to clear the wood. Qualify across three positions.",locationName:"Lucy-le-Bocage",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"b5d2",title:"Letters Home",briefing:"Report to Command Post. Write letters home after Belleau Wood. Choose your words carefully.",locationName:"Command Post",activityId:"writeLetter",stats:["leadership","intelligence"]},{id:"b5d3",title:"Campaign Honors",briefing:"Report to The Wheat Field. Formation in the field. Teufel Hunden — earn your expedition honors.",locationName:"The Wheat Field",activityId:"graduationParade",stats:["leadership"]}]}],Hx=[{id:1,name:"Managua Detail",theme:"Operation 1 — Ship out, supply run, checkpoint",days:[{id:"n1d1",title:"Managua Detail",briefing:"Report to Managua Barracks. Marines deploy to Nicaragua. Man your stations.",locationName:"Managua Barracks",activityId:"shipOut",stats:["leadership","intelligence"]},{id:"n1d2",title:"Supply Run",briefing:"Report to The Airstrip. Haul supplies to the outpost under time pressure.",locationName:"The Airstrip",activityId:"supplyRun",stats:["endurance","strength"]},{id:"n1d3",title:"Checkpoint Duty",briefing:"Report to Managua Barracks. Vehicles approach the wire — wave through, search, or halt.",locationName:"Managua Barracks",activityId:"checkpointSearch",stats:["intelligence","dexterity"]}],sideQuests:[{id:"n1_mule",title:"The Mule Skinner",availableAfterDay:1,locationName:"Mule Corral",questId:"muleSkinner"}]},{id:2,name:"Jungle Patrol",theme:"Operation 2 — Land nav, ambush, field medic",days:[{id:"n2d1",title:"Jungle Patrol",briefing:"Report to Jungle Trail. Follow the patrol map and mark every checkpoint.",locationName:"Jungle Trail",activityId:"landNav",stats:["intelligence"]},{id:"n2d2",title:"Jungle Ambush",briefing:"Report to Jungle Trail. Sandinista ambush — return fire on muzzle flash, hold on villagers.",locationName:"Jungle Trail",activityId:"jungleAmbush",stats:["dexterity","intelligence"]},{id:"n2d3",title:"Field Medic",briefing:"Report to Aid Station. Treat casualties in the correct order.",locationName:"Aid Station",activityId:"fieldMedic",stats:["intelligence"]}]},{id:3,name:"Ocotal",theme:"Operation 3 — Night watch, overwatch, bunker repair",days:[{id:"n3d1",title:"Night Watch",briefing:"Report to Ocotal. Movement in the dark — spot probes before they reach the garrison.",locationName:"Ocotal",activityId:"nightWatch",stats:["dexterity","intelligence"]},{id:"n3d2",title:"Overwatch",briefing:"Report to The Ridge. Steady your aim and clear the approaches to Ocotal.",locationName:"The Ridge",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"n3d3",title:"Rebuild the Bunker",briefing:"Report to Ocotal. Rebuild the garrison bunker before the next attack.",locationName:"Ocotal",activityId:"bunkerRepair",stats:["strength","intelligence"]}],sideQuests:[{id:"n3_coffee",title:"Coffee With the Alcalde",availableAfterDay:1,locationName:"Coffee Plantation",questId:"coffeeAlcalde"}]},{id:4,name:"The Mule Train",theme:"Operation 4 — Convoy escort, forced march, night move",days:[{id:"n4d1",title:"Convoy Escort",briefing:"Report to Mule Corral. Escort the mule train — advance on W, freeze on flares.",locationName:"Mule Corral",activityId:"convoyEscort",stats:["dexterity","endurance"]},{id:"n4d2",title:"Forced March",briefing:"Report to River Crossing. Full gear march through the jungle. Manage pace and help Marines falling out.",locationName:"River Crossing",activityId:"humpPrep",stats:["endurance","leadership"]},{id:"n4d3",title:"Night Movement",briefing:"Report to Jungle Trail. Patrol at night. Freeze when illumination pops.",locationName:"Jungle Trail",activityId:"nightMove",stats:["dexterity"]}]},{id:5,name:"The Long Watch",theme:"Operation 5 — Final defense, after action, honors",days:[{id:"n5d1",title:"Final Defense",briefing:"Report to The Ridge. Hold the ridge against the final Sandinista push.",locationName:"The Ridge",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"n5d2",title:"After Action",briefing:"Report to Command Post. Officers debrief the Nicaragua deployment.",locationName:"Command Post",activityId:"familyDay",stats:["leadership"]},{id:"n5d3",title:"Expedition Honors",briefing:"Report to Managua Barracks. Formation at the barracks. Earn your expedition honors.",locationName:"Managua Barracks",activityId:"graduationParade",stats:["leadership"]}]}],Gx=[{id:1,name:"Green Ramp",theme:"Operation 1 — Ship out, supply run, checkpoint",days:[{id:"s1d1",title:"Green Ramp",briefing:"Report to Green Ramp. Marines deploy to Mogadishu for Operation Restore Hope. Man your stations.",locationName:"Green Ramp",activityId:"shipOut",stats:["leadership","intelligence"]},{id:"s1d2",title:"Supply Run",briefing:"Report to The Port. Haul relief supplies to the feeding stations under time pressure.",locationName:"The Port",activityId:"supplyRun",stats:["endurance","strength"]},{id:"s1d3",title:"Checkpoint Duty",briefing:"Report to Checkpoint Condor. Vehicles approach the wire — wave through, search, or halt.",locationName:"Checkpoint Condor",activityId:"checkpointSearch",stats:["intelligence","dexterity"]}],sideQuests:[{id:"s1_well",title:"The Water Well",availableAfterDay:1,locationName:"Feeding Station",questId:"waterWell"}]},{id:2,name:"Food Convoy",theme:"Operation 2 — Convoy escort, IED sweep, crowd control",days:[{id:"s2d1",title:"Convoy Escort",briefing:"Report to The K-4 Circle. Escort the food convoy — advance on W, freeze on flares.",locationName:"The K-4 Circle",activityId:"convoyEscort",stats:["dexterity","endurance"]},{id:"s2d2",title:"IED Sweep",briefing:"Report to The Market. Sweep the route — mark suspicious objects, ignore clutter.",locationName:"The Market",activityId:"iedSweep",stats:["dexterity","intelligence"]},{id:"s2d3",title:"Crowd Control",briefing:"Report to Feeding Station. Hungry crowds at the wire — hold the line, open the gate, or call the terp.",locationName:"Feeding Station",activityId:"crowdControl",stats:["leadership","intelligence"]}],sideQuests:[{id:"s2_kid",title:"The Kid at the Wire",availableAfterDay:1,locationName:"Checkpoint Condor",questId:"kidAtWire"}]},{id:3,name:"The Market",theme:"Operation 3 — Night watch, medevac, triage",days:[{id:"s3d1",title:"Night Watch",briefing:"Report to The Market. Movement in the dark — spot probes before they reach the perimeter.",locationName:"The Market",activityId:"nightWatch",stats:["dexterity","intelligence"]},{id:"s3d2",title:"Medevac",briefing:"Report to Aid Station. Pop smoke, clear the LZ, and load casualties.",locationName:"Aid Station",activityId:"medevacSmoke",stats:["leadership","intelligence"]},{id:"s3d3",title:"Triage",briefing:"Report to Aid Station. Treat casualties in the correct order.",locationName:"Aid Station",activityId:"fieldMedic",stats:["intelligence"]}]},{id:4,name:"The Airfield",theme:"Operation 4 — Turret gunner, dig in, night push",days:[{id:"s4d1",title:"Turret Gunner",briefing:"Report to Airfield Perimeter. Ride the turret — traverse on contact, hold on civilian vehicles.",locationName:"Airfield Perimeter",activityId:"turretGunner",stats:["dexterity","intelligence"]},{id:"s4d2",title:"Dig In",briefing:"Report to Airfield Perimeter. Establish fighting positions around the airfield.",locationName:"Airfield Perimeter",activityId:"foxholeDig",stats:["strength","endurance"]},{id:"s4d3",title:"Night Push",briefing:"Report to Embassy Compound. Patrol at night. Freeze when illumination pops.",locationName:"Embassy Compound",activityId:"nightMove",stats:["dexterity"]}]},{id:5,name:"Handoff",theme:"Operation 5 — Final clearance, letters home, honors",days:[{id:"s5d1",title:"Final Clearance",briefing:"Report to Embassy Compound. Final security sweep before UN handoff.",locationName:"Embassy Compound",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"s5d2",title:"Letters Home",briefing:"Report to Command Post. Write letters home from Mogadishu. Choose your words carefully.",locationName:"Command Post",activityId:"writeLetter",stats:["leadership","intelligence"]},{id:"s5d3",title:"Expedition Honors",briefing:"Report to Green Ramp. Formation on the ramp. Restore Hope — earn your expedition honors.",locationName:"Green Ramp",activityId:"graduationParade",stats:["leadership"]}]}],Vx={resourceLabel:"Water",pickupStyle:"canteen",exhaustionTitle:"Heat Exhaustion",exhaustionCopy:"You collapsed from dehydration. Corpsman revived you — readiness -5, hydration refilled to 50%.",pickupHint:"Find canteens on the map before your next patrol.",casualtyLabel:"Heat Casualty"},qx={mcrdsd:3029800,guadalcanal:3820078,iwojima:2762016,inchon:3818816,chosin:13161696,khesanh:4864558,hue:4014664,baghdad:5917750,fallujah:4866616,desertmarch:7035450,derne:5918524,belleauwood:4146480,nicaragua:3099180,mogadishu:6049592},yo={bootcamp:{id:"bootcamp",title:"8-BIT BOOTCAMP",subtitle:"MCRD San Diego — Present Day",mapName:"mcrdsd",weeks:Nx,status:"available",usesRecruiter:!0,periodLabel:"Week",unitLabel:"Recruit",mapHint:"Walk to the location on the MCRD map. A prompt will appear when you arrive.",completion:{title:"Graduation",subtitle:"MCRD San Diego",honors:[{min:80,title:"Honor Graduate"},{min:50,title:"Company Honors"},{min:0,title:"United States Marine"}],footer:"Semper Fidelis. Free roam the depot or start a new recruit."}},wwii:{id:"wwii",title:"PACIFIC THEATER",subtitle:"Guadalcanal & Iwo Jima",mapName:"guadalcanal",weeks:Fx,status:"available",usesRecruiter:!1,periodLabel:"Operation",unitLabel:"Marine",mapHint:"Move to the marked location on the island map. A prompt will appear when you arrive.",briefing:{officer:"Capt. Halsey",lines:["You are deploying with the 1st Marine Division. Guadalcanal is not training — it is combat.","The Japanese hold the island. Your orders: land, secure Henderson Field, and hold until relieved.","If you survive Guadalcanal, new orders will come. Iwo Jima waits — and a flag on Mt. Suribachi.","Every operation on the schedule is a mission. Report to each location on the island map."]},theaters:[{mapName:"guadalcanal",fromWeek:1},{mapName:"iwojima",fromWeek:7,transition:{title:"New Orders",subtitle:"February 1945 — Iwo Jima",paragraphs:["Guadalcanal is behind you. Three years of war later, the Fleet turns toward a volcanic speck in the Pacific.","Twenty-six thousand Marines will land on black sand. Mt. Suribachi dominates the island — take it, and the world will remember what happens on top."],hint:"Your map has changed. Report to each mission location on Iwo Jima.",button:"Ship Out"}}],completion:{title:"Campaign Victory",subtitle:"Pacific Theater — Guadalcanal to Iwo Jima",honors:[{min:80,title:"Navy Cross"},{min:50,title:"Silver Star"},{min:0,title:"Combat Veteran"}],footer:"From Guadalcanal to Suribachi — the Corps held the line. Free roam or deploy again."}},korea:{id:"korea",title:"FROZEN CHOSIN",subtitle:"Inchon to Chosin, 1950",mapName:"inchon",weeks:Ox,status:"available",usesRecruiter:!1,periodLabel:"Operation",unitLabel:"Marine",mapHint:"Move to the marked location on the map. A prompt will appear when you arrive.",climate:{resourceLabel:"Warmth",pickupStyle:"fire",exhaustionTitle:"Frostbite",exhaustionCopy:"You went down in the snow. Corpsman got you to a warming tent — readiness -5, warmth restored to 50%.",pickupHint:"Find warming fires on the map before your next patrol.",casualtyLabel:"Cold Casualty"},briefing:{officer:"Col. Puller",lines:["You are X Corps, 1st Marine Division. Inchon is not a rehearsal — it is an amphibious assault behind enemy lines.","Land at Inchon, take Kimpo Airfield, cross the Han, and fight through Seoul.","Then we go north. Orders say the war will be over by Christmas. The Chosin Reservoir says otherwise.","Every operation on the schedule is a mission. Report to each location on the map."]},theaters:[{mapName:"inchon",fromWeek:1},{mapName:"chosin",fromWeek:6,transition:{title:"New Orders",subtitle:"November 1950 — Chosin Reservoir",paragraphs:["Seoul is behind you. The division pushed north into the mountains — and into winter.","Chinese forces hit the reservoir in force. Temperatures plunge to thirty below. You will fight your way out — or die trying."],hint:"Your map has changed. Find warming fires on the frozen ground. Report to each mission location.",button:"March North"}}],completion:{title:"Campaign Victory",subtitle:"Inchon to Hungnam, 1950",honors:[{min:80,title:"Navy Cross"},{min:50,title:"Silver Star"},{min:0,title:"The Chosin Few"}],footer:"Retreat hell — we are attacking in a different direction. Free roam or deploy again."}},vietnam:{id:"vietnam",title:"HUE CITY",subtitle:"Khe Sanh to Hue City, 1968",mapName:"khesanh",weeks:Ux,status:"available",usesRecruiter:!1,periodLabel:"Operation",unitLabel:"Marine",mapHint:"Move to the marked location on the map. A prompt will appear when you arrive.",climate:{resourceLabel:"Morale",pickupStyle:"poncho",exhaustionTitle:"Immersion Foot",exhaustionCopy:"Weeks of monsoon rot took you down. Corpsman dried you out in the rear — readiness -5, morale restored to 50%.",pickupHint:"Find dry ponchos on the map before your next patrol.",casualtyLabel:"Monsoon Casualty"},briefing:{officer:"Capt. Reyes",lines:["You are 3rd Marine Division, deployed to the Khe Sanh plateau. This is not a training exercise — the NVA are digging in around the combat base.","Hold the wire, patrol the hills, and keep the airstrip open. Every resupply run matters.","When Tet breaks, everything changes. Hue City will need Marines in the streets and inside the Citadel.","Every operation on the schedule is a mission. Report to each location on the map."]},theaters:[{mapName:"khesanh",fromWeek:1},{mapName:"hue",fromWeek:6,transition:{title:"Tet Offensive",subtitle:"January 1968 — Hue City",paragraphs:["The siege at Khe Sanh is behind you — orders pull the division south. While Marines held the wire, the NVA took Hue during the Tet ceasefire.","Street fighting, house-to-house, and the ancient Citadel walls. The world is watching. Mount up."],hint:"Your map has changed. Find dry ponchos in the monsoon. Report to each mission location in Hue.",button:"Mount Up"}}],completion:{title:"Campaign Victory",subtitle:"Khe Sanh to Hue, Tet 1968",honors:[{min:80,title:"Navy Cross"},{min:50,title:"Silver Star"},{min:0,title:"Tet Veteran"}],footer:"The Citadel colors flew again. Free roam or deploy again."}},iraq:{id:"iraq",title:"FALLUJAH",subtitle:"Baghdad to Fallujah, 2003–04",mapName:"baghdad",weeks:zx,status:"available",usesRecruiter:!1,periodLabel:"Operation",unitLabel:"Marine",mapHint:"Move to the marked location on the map. A prompt will appear when you arrive.",climate:{resourceLabel:"Water",pickupStyle:"bottle",exhaustionTitle:"Heat Casualty",exhaustionCopy:"120 degrees in full battle rattle. Corpsman got an IV in you in the shade of the ampitrac — readiness -5, water restored to 50%.",pickupHint:"Find bottled water on the map before your next patrol.",casualtyLabel:"Heat Casualty"},briefing:{officer:"Maj. Torres",lines:["You are 1st Marine Division, crossing the line of departure into Iraq. This is not a training exercise — Fedayeen and irregulars are waiting on Highway 1.","Fight through Nasiriyah, push to Baghdad, and take Firdos Square. Every convoy and checkpoint matters.","Baghdad will fall — but the war will not end. A year later they will call you back for Fallujah. House by house.","Every operation on the schedule is a mission. Report to each location on the map."]},theaters:[{mapName:"baghdad",fromWeek:1},{mapName:"fallujah",fromWeek:6,transition:{title:"Operation Phantom Fury",subtitle:"November 2004 — Fallujah",paragraphs:["Baghdad fell but the war did not end. Insurgents hold Fallujah — the city that became a symbol of resistance.","The division goes back to clear it block by block, house by house. Cross the berm and finish what started in the desert."],hint:"Your map has changed. Find bottled water in the heat. Report to each mission location in Fallujah.",button:"Cross the Berm"}}],completion:{title:"Campaign Victory",subtitle:"Baghdad to Fallujah, 2003–04",honors:[{min:80,title:"Navy Cross"},{min:50,title:"Silver Star"},{min:0,title:"Phantom Fury Veteran"}],footer:"The city was cleared block by block. Free roam or deploy again."}},tripoli:{id:"tripoli",title:"SHORES OF TRIPOLI",subtitle:"Alexandria to Derne, 1805",mapName:"desertmarch",weeks:Bx,status:"available",usesRecruiter:!1,periodLabel:"Operation",unitLabel:"Marine",mapHint:"Move to the marked location on the map. A prompt will appear when you arrive.",climate:{resourceLabel:"Water",pickupStyle:"waterskin",exhaustionTitle:"Desert Thirst",exhaustionCopy:"Five hundred miles of Libyan desert took you down. The caravan shared its last skins — readiness -5, water restored to 50%.",pickupHint:"Find water skins on the map before the column moves again.",casualtyLabel:"Desert Casualty"},briefing:{officer:"Lt. O'Bannon",lines:["You are eight Marines attached to William Eaton's expedition. Five hundred miles of Libyan desert stand between Alexandria and Derne.","March with the caravan, hold the mercenaries together, and keep the water skins full.","Derne awaits — the first time the flag will fly over a captured fortress of the Old World.","Every operation on the schedule is a mission. Report to each location on the map."]},theaters:[{mapName:"desertmarch",fromWeek:1},{mapName:"derne",fromWeek:6,transition:{title:"The Shores of Tripoli",subtitle:"April 1805 — Derne",paragraphs:["The march is over. Five hundred miles behind you — the fortress and harbor batteries of Derne ahead.","The Constitution is offshore. Fix bayonets and take the harbor battery. The flag has never flown over an Old World fortress — until today."],hint:"Your map has changed. Find water skins in the heat. Report to each mission location at Derne.",button:"Fix Bayonets"}}],completion:{title:"Campaign Victory",subtitle:"Alexandria to Derne, 1805",honors:[{min:80,title:"Presidential Citation"},{min:50,title:"Brevet Officer"},{min:0,title:"Leatherneck"}],footer:"The first US flag over an Old World fortress. Free roam or deploy again."}},belleau:{id:"belleau",title:"BELLEAU WOOD",subtitle:"Devil Dogs, 1918",mapName:"belleauwood",weeks:Wx,status:"available",usesRecruiter:!1,periodLabel:"Operation",unitLabel:"Marine",mapHint:"Move to the marked location on the map. A prompt will appear when you arrive.",briefing:{officer:"Gunnery Sgt. Daly",lines:["You are 4th Marine Brigade, deploying to the Marne front. The Germans are advancing through the wheat fields.","Retreat? Hell — we're just attacking in a different direction. Take Belleau Wood and hold the line.","The Boche will call you Teufel Hunden — Devil Dogs. Earn the name.","Every operation on the schedule is a mission. Report to each location on the map."]},completion:{title:"Expedition Victory",subtitle:"Belleau Wood, 1918",honors:[{min:80,title:"Medal of Honor"},{min:50,title:"Croix de Guerre"},{min:0,title:"Devil Dog"}],footer:"Teufel Hunden. The wood is yours. Free roam or deploy again."}},nicaragua:{id:"nicaragua",title:"BANANA WARS",subtitle:"Nicaragua, 1927",mapName:"nicaragua",weeks:Hx,status:"available",usesRecruiter:!1,periodLabel:"Operation",unitLabel:"Marine",mapHint:"Move to the marked location on the map. A prompt will appear when you arrive.",briefing:{officer:"Capt. Hatfield",lines:["You are 5th Marine Regiment, deploying to Nicaragua. Sandinistas hold the jungle and the trails.","Protect the elections, escort the mule trains, and hold Ocotal when they come.","This is the Banana Wars — small wars, long watches, and mules that matter more than tanks.","Every operation on the schedule is a mission. Report to each location on the map."]},completion:{title:"Expedition Victory",subtitle:"Nicaragua, 1927",honors:[{min:80,title:"Navy Cross"},{min:50,title:"Silver Star"},{min:0,title:"Old Breed"}],footer:"The long watch is over. Free roam or deploy again."}},somalia:{id:"somalia",title:"RESTORE HOPE",subtitle:"Somalia, 1993",mapName:"mogadishu",weeks:Gx,status:"available",usesRecruiter:!1,periodLabel:"Operation",unitLabel:"Marine",mapHint:"Move to the marked location on the map. A prompt will appear when you arrive.",briefing:{officer:"Col. Marsh",lines:["You are 1st Marine Expeditionary Force, deploying to Mogadishu for Operation Restore Hope.","Feed the hungry, secure the convoys, and hold the line when the crowds press the wire.","This is peacekeeping — until it isn't. Every checkpoint and feeding station matters.","Every operation on the schedule is a mission. Report to each location on the map."]},completion:{title:"Expedition Victory",subtitle:"Mogadishu, 1993",honors:[{min:80,title:"Navy Cross"},{min:50,title:"Bronze Star"},{min:0,title:"Peacekeeper"}],footer:"Restore Hope — handoff complete. Free roam or deploy again."}}},Kx=["bootcamp","tripoli","belleau","nicaragua","wwii","korea","vietnam","somalia","iraq"],bo="bootcamp";function $x(n=bo){return yo[n]??yo[bo]}function qt(n){const e=n?.campaign?.campaignId??bo;return $x(e)}function Bo(n){return qt(n).weeks??[]}function Ep(n,e){const t=n.theaters;if(!t?.length)return null;let i=t[0];for(const a of t)e>=a.fromWeek&&(i=a);return i}function ka(n){const e=qt(n);return{...Vx,...e.climate}}function Rp(n){qt(n);const e=n?.campaign?.week??1;return Ap(n,e)}function Ap(n,e){const t=qt(n),i=Ep(t,e);return i?i.mapName:t.mapName??"mcrdsd"}function Xx(n,e){const t=qt(n),i=Ep(t,e);return!i||i.fromWeek!==e?null:i.transition??null}function uc(n){return qx[n]??3029800}const jx={honor:8,passing:4,unsat:1},Yx=1;function Tn(n={}){return{campaignId:"bootcamp",week:1,dayInWeek:1,completed:{},readiness:0,weekStatGains:{},sideQuests:{},phase:"training",difficulty:"story",hydration:100,recycleTokens:0,itUsed:{},...n}}function wt(n){if(!n)return n;const e=n.campaign??Tn();return{...n,schemaVersion:_n,mode:n.mode??"campaign",campaign:{...Tn(),...e,completed:{...e.completed},weekStatGains:{...e.weekStatGains},sideQuests:{...e.sideQuests},itUsed:{...e.itUsed}}}}function Cp(n){return n?.campaign?.difficulty==="ironman"}function Rr(n){return n?.mode==="sandbox"}function Wo(n,e){const t=wt(n);return{...t,campaign:{...t.campaign,hydration:Math.max(0,Math.min(100,e))}}}function Zx(n){const e=wt(n),t=e.campaign.recycleTokens??0;return t<=0?e:{...e,campaign:{...e.campaign,recycleTokens:t-1}}}function Jx(n){const e=wt(n),t={...e.campaign};return t.readiness=Math.max(0,t.readiness-5),t.hydration=50,{...e,campaign:t}}function Qx(n,e){return!n?.campaign?.itUsed?.[e]}function ew(n,e){const t=wt(n);return{...t,campaign:{...t.campaign,itUsed:{...t.campaign.itUsed,[e]:!0}}}}function tw(n){return n>=.85?"honor":n>=.5?"passing":"unsat"}function iw(n){return jx[n]??0}function Ip(n,e){return`w${n}_${e}`}function nw(n,e,t){const i=Ip(e,t);return(n.weekStatGains[i]??0)<Yx}function aw(n,e,t){const i=wt(n),a={...i.campaign},r={...i.stats},s=a.week,o=iw(t.grade);a.readiness=Math.min(100,a.readiness+o),a.completed={...a.completed,[e]:{grade:t.grade,score:t.score}};const l={};if(t.grade==="honor"&&t.stats?.length){for(const d of t.stats)if(nw(a,s,d)){const u=Ip(s,d);a.weekStatGains={...a.weekStatGains,[u]:(a.weekStatGains[u]??0)+1},r[d]=rn((r[d]??10)+1),l[d]=1}}const c=(i.bootDay??0)+1;return{...i,stats:r,bootDay:c,campaign:a,_lastResult:{dayId:e,...t,readinessDelta:o,statDeltas:l}}}function rw(n,e){const t=wt(n),i={...t.campaign};let a=!1;return i.dayInWeek>=e?(a=!0,i.week+=1,i.dayInWeek=1,i.weekStatGains={}):i.dayInWeek+=1,{character:{...t,campaign:i},weekComplete:a}}function sw(n,e,t={}){const i=wt(n),a={...i.campaign};a.sideQuests={...a.sideQuests,[e]:"done"};let r=a.readiness;t.readiness&&(r=Math.min(100,r+t.readiness));const s={...i.stats};return t.stat&&t.statKey&&(s[t.statKey]=rn((s[t.statKey]??10)+t.stat)),{...i,stats:s,campaign:{...a,readiness:r}}}function ow(n,e){return n?.campaign?.sideQuests?.[e]==="done"}function lw(n,e){const i=[...qt(e).completion?.honors??[]].sort((a,r)=>r.min-a.min);for(const a of i)if(n>=a.min)return a.title;return i[i.length-1]?.title??"United States Marine"}function cw(n){const e=wt(n),t=lw(e.campaign.readiness,e);return{...e,honorsTitle:t,campaign:{...e.campaign,phase:"graduated"}}}function hc(n){return n?.campaign?.phase==="graduated"}const Na=3,dw="bootcamp-save-";function Ho(n){return`${dw}${n}`}function uw(){return Na}function hw(n){return!n||typeof n!="object"||!n.name||!n.stats||!n.appearance?null:n.schemaVersion===1?wt({...n,schemaVersion:_n,mode:"campaign",campaign:Tn({difficulty:"story"})}):n.schemaVersion===2?wt({...n,schemaVersion:_n,mode:n.mode??"campaign",campaign:{...Tn({difficulty:"story"}),...n.campaign,difficulty:n.campaign?.difficulty??"story",hydration:n.campaign?.hydration??100,recycleTokens:n.campaign?.recycleTokens??0,itUsed:n.campaign?.itUsed??{}}}):n.schemaVersion===_n?wt(n):null}function pw(n){return hw(n)}function fw(n){if(n<0||n>=Na)return null;try{const e=localStorage.getItem(Ho(n));return e?pw(JSON.parse(e)):null}catch{return null}}function Go(n,e){if(n<0||n>=Na)return!1;try{const t=wt({...e,schemaVersion:_n,slotIndex:n});return localStorage.setItem(Ho(n),JSON.stringify(t)),!0}catch{return!1}}function Pp(n){n<0||n>=Na||localStorage.removeItem(Ho(n))}function fs(){return Array.from({length:Na},(n,e)=>fw(e))}const vo=[{id:"high_school_athlete",name:"High School Athlete",description:"Varsity sports. Strong and durable, but bookwork was never your priority.",modifiers:{strength:2,dexterity:1,intelligence:-2,endurance:2,leadership:-1},defaultOutfitId:"tshirt_jeans"},{id:"team_captain",name:"Team Captain",description:"Led a team or club. Natural leader with quick feet, but the long haul wears on you.",modifiers:{strength:0,dexterity:2,intelligence:0,endurance:-2,leadership:2},defaultOutfitId:"polo_khakis"},{id:"honor_student",name:"Honor Student",description:"Strong academics. Sharp mind, but you skipped gym more than you'd admit.",modifiers:{strength:-2,dexterity:0,intelligence:3,endurance:-1,leadership:0},defaultOutfitId:"polo_khakis"},{id:"jrotc",name:"JROTC",description:"Prior drill exposure. Disciplined and coordinated, light on classroom edge.",modifiers:{strength:0,dexterity:2,intelligence:-1,endurance:0,leadership:2},defaultOutfitId:"polo_khakis"},{id:"manual_labor",name:"Manual Labor",description:"Physical job background. Built tough from work, not from giving orders.",modifiers:{strength:2,dexterity:0,intelligence:-1,endurance:2,leadership:-2},defaultOutfitId:"flannel_workboots"},{id:"student_council",name:"Student Council",description:"Organized peers and ran meetings. Smart and persuasive, not the most athletic.",modifiers:{strength:-1,dexterity:-1,intelligence:2,endurance:0,leadership:2},defaultOutfitId:"polo_khakis"}],Dp="bootcamp-meta",Lp={pooleePrep:{id:"pooleePrep",name:"Poolee Prep",cost:15,description:"+1 to one starting stat of your choice"},secondCanteen:{id:"secondCanteen",name:"Second Canteen",cost:20,description:"Hydration drains 30% slower on patrol"},recyclePaperwork:{id:"recyclePaperwork",name:"Recycle Paperwork",cost:30,description:"Start each campaign run with 1 recycle token"},motivated:{id:"motivated",name:"Motivated",cost:25,description:"Start each campaign run at +5 readiness"}};function ms(){return{grit:0,perks:{},runsCompleted:0,bestReadiness:0}}function la(){try{const n=localStorage.getItem(Dp);if(!n)return ms();const e=JSON.parse(n);return{...ms(),...e,perks:{...e.perks}}}catch{return ms()}}function kp(n){try{return localStorage.setItem(Dp,JSON.stringify(n)),!0}catch{return!1}}function Np(n){return!!la().perks[n]}function mw(n){const e=Lp[n];if(!e)return{ok:!1,reason:"Unknown perk"};const t=la();return t.perks[n]?{ok:!1,reason:"Already owned"}:t.grit<e.cost?{ok:!1,reason:"Not enough grit"}:(t.grit-=e.cost,t.perks[n]=!0,kp(t),{ok:!0,meta:t})}function gw(n,{graduated:e=!1}={}){const t=n?.campaign??{},i=Object.values(t.completed??{}),a=i.length,r=i.filter(o=>o.grade==="honor").length;let s=a+r*2;return e&&(s+=25),t.difficulty==="ironman"&&(s*=2),s}function pc(n,{graduated:e=!1}={}){const t=gw(n,{graduated:e}),i=la();i.grit+=t,i.runsCompleted+=1;const a=n?.campaign?.readiness??0;return i.bestReadiness=Math.max(i.bestReadiness,a),kp(i),t}function yw(n,{perkStat:e=null}={}){if(n.mode==="sandbox")return n;const t=la();let i={...n.stats},a={...n.campaign};return t.perks.pooleePrep&&e&&Pt.includes(e)&&(i[e]=rn((i[e]??10)+1)),t.perks.recyclePaperwork&&(a.recycleTokens=(a.recycleTokens??0)+1),t.perks.motivated&&(a.readiness=Math.min(100,(a.readiness??0)+5)),{...n,stats:i,campaign:a}}function bw(){return Np("secondCanteen")?.7:1}function xn(n){return vo.find(e=>e.id===n)??vo[0]}function vw(){return vo}function _w(n,e,t,i=0,a=null,r={}){const{mode:s="campaign",difficulty:o="story",perkStat:l=null}=r,c=xn(e),d=gp(a??mp(),c.modifiers),u=wp(),h=s==="sandbox"?{}:{difficulty:o};let f={schemaVersion:_n,name:n.trim(),mode:s,backgroundId:c.id,stats:d,appearance:{height:t?.height??u.height,skinToneId:t?.skinToneId??u.skinToneId,hairColorId:t?.hairColorId??u.hairColorId,gender:t?.gender??u.gender,civilianOutfitId:t?.civilianOutfitId??c.defaultOutfitId??u.civilianOutfitId},bootDay:0,campaign:Tn(h),createdAt:new Date().toISOString(),slotIndex:i};return s!=="sandbox"&&(f=yw(f,{perkStat:l})),f}function xw(n,e={},t=null){const i=xn(n),a=wp(),r=t??mp();return{schemaVersion:_n,name:"",backgroundId:i.id,coreStats:{...r},stats:po(r,i.modifiers),appearance:{...a,civilianOutfitId:i.defaultOutfitId??a.civilianOutfitId,...e},bootDay:0,createdAt:null,slotIndex:null}}function ww(n){const e=n.trim();return e.length<2?"Name must be at least 2 characters":e.length>24?"Name must be 24 characters or less":null}function Sw(){return new Promise(n=>{const e=document.createElement("div");e.className="menu-overlay";function t(){const i=la(),a=Object.values(Lp).map(r=>{const s=!!i.perks[r.id],o=!s&&i.grit>=r.cost;return`
          <div class="locker-perk${s?" locker-perk--owned":""}">
            <div class="locker-perk-info">
              <span class="locker-perk-name">${r.name}</span>
              <span class="locker-perk-desc">${r.description}</span>
            </div>
            ${s?'<span class="locker-owned-badge">Owned</span>':`<button type="button" class="btn btn-secondary locker-buy-btn" data-perk="${r.id}" ${o?"":"disabled"}>${r.cost} Grit</button>`}
          </div>`}).join("");e.innerHTML=`
        <div class="menu-panel locker-panel">
          <h2 class="menu-title">The Locker</h2>
          <p class="menu-subtitle">Permanent perks for future recruits</p>
          <p class="locker-grit-balance">Grit: <strong>${i.grit}</strong></p>
          <div class="locker-perk-list">${a}</div>
          <div class="schedule-actions">
            <button type="button" class="btn btn-primary" id="locker-close">Close</button>
          </div>
        </div>
      `,e.querySelector("#locker-close")?.addEventListener("click",()=>{e.remove(),n()},{once:!0}),e.querySelectorAll(".locker-buy-btn").forEach(r=>{r.addEventListener("click",()=>{mw(r.dataset.perk).ok&&t()})})}t(),document.body.appendChild(e)})}function Mw(n,{confirmLabel:e="Confirm",cancelLabel:t="Cancel"}={}){return new Promise(i=>{const a=document.createElement("div");a.className="menu-overlay confirm-overlay",a.innerHTML=`
      <div class="confirm-box">
        <p>${n}</p>
        <div class="confirm-actions">
          <button type="button" class="btn btn-danger" data-action="yes">${e}</button>
          <button type="button" class="btn btn-secondary" data-action="no">${t}</button>
        </div>
      </div>
    `;const r=o=>{if(o.key==="Escape"&&s(!1),o.key==="Enter"){const l=document.activeElement?.dataset?.action;l==="yes"&&s(!0),l==="no"&&s(!1)}},s=o=>{document.removeEventListener("keydown",r),a.remove(),i(o)};a.addEventListener("click",o=>{const l=o.target.closest("[data-action]")?.dataset.action;l==="yes"&&s(!0),l==="no"&&s(!1)}),document.addEventListener("keydown",r),document.body.appendChild(a),a.querySelector("[data-action=no]").focus()})}function Tw(n){return n.mode==="sandbox"?'<span class="slot-badge slot-badge--sandbox">SANDBOX</span>':n.campaign?.difficulty==="ironman"?'<span class="slot-badge slot-badge--ironman">IRONMAN</span>':""}function Ew(n){const e=qt(n);return e.id==="bootcamp"?"":`<span class="slot-badge slot-badge--campaign">${{wwii:"WWII",korea:"KOREA",vietnam:"VIETNAM",iraq:"IRAQ",tripoli:"TRIPOLI",belleau:"WWI",nicaragua:"BANANA",somalia:"SOMALIA"}[e.id]??e.id.toUpperCase()}</span>`}function Rw(n){const e=qt(n),t=n.campaign,i=e.periodLabel??"Week";return n.mode==="sandbox"?"Sandbox · free play":t?.phase==="graduated"?`Complete · ${n.honorsTitle??e.completion?.honors?.[2]?.title??"Marine"}`:t?`${i} ${t.week} · Day ${t.dayInWeek} · ${t.readiness}% ready`:`Day ${n.bootDay??0}`}function Aw(){return new Promise(n=>{let e=0;const t=document.createElement("div");t.className="menu-overlay",t.innerHTML=`
      <div class="menu-panel slot-panel">
        <h1 class="menu-title">8-BIT BOOTCAMP</h1>
        <p class="menu-subtitle">Select a save slot</p>
        <p class="slot-grit" id="slot-grit"></p>
        <div class="slot-list" role="listbox"></div>
        <div class="slot-footer-actions">
          <button type="button" class="btn btn-secondary" id="btn-locker">The Locker</button>
        </div>
        <p class="menu-hint">Press 1–3 to select · Enter to confirm · Delete to reset focused slot</p>
      </div>
    `;const i=t.querySelector(".slot-list"),a=t.querySelector("#slot-grit");function r(){const u=la();a.innerHTML=`Grit: <strong>${u.grit}</strong> · Runs: ${u.runsCompleted} · Best readiness: ${u.bestReadiness}%`;const h=fs();i.innerHTML=h.map((f,g)=>{const b=g===e?" slot-row--focused":"";if(!f)return`
            <div class="slot-row${b}">
              <button type="button" class="slot-card slot-card--empty" data-slot="${g}" role="option">
                <span class="slot-label">Slot ${g+1}</span>
                <span class="slot-name">New Recruit</span>
              </button>
            </div>`;const m=xn(f.backgroundId),p=Rw(f);return`
          <div class="slot-row${b}">
            <button type="button" class="slot-card slot-card--filled" data-slot="${g}" role="option">
              <span class="slot-label">Slot ${g+1} ${Tw(f)} ${Ew(f)}</span>
              <span class="slot-name">${f.name}</span>
              <span class="slot-meta">${p} · ${m.name}</span>
            </button>
            <button type="button" class="btn btn-danger slot-reset-btn" data-slot="${g}" aria-label="Reset save slot ${g+1}">Reset</button>
          </div>`}).join("")}function s(u){e=Math.max(0,Math.min(uw()-1,u)),r(),i.querySelector(`.slot-card[data-slot="${e}"]`)?.focus()}function o(u){const h=fs()[u];c(),n(h?{type:"continue",character:h,slotIndex:u}:{type:"create",slotIndex:u})}async function l(u){const h=fs()[u];if(!h)return;await Mw(`Reset slot ${u+1} and delete ${h.name}? This cannot be undone.`,{confirmLabel:"Reset Save"})&&(Pp(u),e=u,r(),i.querySelector(`.slot-card[data-slot="${u}"]`)?.focus())}function c(){document.removeEventListener("keydown",d),t.remove()}function d(u){u.key==="1"&&s(0),u.key==="2"&&s(1),u.key==="3"&&s(2),u.key==="ArrowUp"&&s(e-1),u.key==="ArrowDown"&&s(e+1),u.key==="Enter"&&o(e),u.key==="Delete"&&l(e)}i.addEventListener("click",u=>{const h=u.target.closest(".slot-reset-btn");if(h){u.stopPropagation(),l(Number(h.dataset.slot));return}const f=u.target.closest(".slot-card");if(!f)return;const g=Number(f.dataset.slot);s(g),o(g)}),i.addEventListener("focusin",u=>{const h=u.target.closest(".slot-card");h&&(e=Number(h.dataset.slot))}),t.querySelector("#btn-locker").addEventListener("click",async()=>{await Sw(),r()}),document.addEventListener("keydown",d),document.body.appendChild(t),r(),i.querySelector(`.slot-card[data-slot="${e}"]`)?.focus()})}const Cw=.9;class Vo{constructor(e,t={}){this.container=e,this.width=t.width??220,this.height=t.height??320;const i=t.pixelScale??4;this.renderer=new md({alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(this.width/i,this.height/i,!1),this.renderer.domElement.style.width=`${this.width}px`,this.renderer.domElement.style.height=`${this.height}px`,this.renderer.domElement.style.imageRendering="pixelated",e.appendChild(this.renderer.domElement),this.scene=new rd,t.background===null?this.scene.background=null:this.scene.background=new He(t.background??1710638);const a=this.width/this.height,r=2;this.camera=new Da(-r*a/2,r*a/2,r/2,-r/2,.1,10),this.camera.position.set(0,.85,3),this.camera.lookAt(0,.85,0),this.mesh=Tp({stats:{},appearance:{}}),this.scene.add(this.mesh),this._baseY=this.mesh.position.y,this._pullT=0,this._boundAnimate=this._animate.bind(this),this._animating=!0,requestAnimationFrame(this._boundAnimate)}update(e){zo(this.mesh,e),this._baseY=this.mesh.position.y,this._applyPull()}setPullHeight(e){this._pullT=Math.max(0,Math.min(1,e)),this._applyPull()}_applyPull(){this.mesh.position.y=this._baseY+this._pullT*Cw}_animate(){this._animating&&(this.renderer.render(this.scene,this.camera),requestAnimationFrame(this._boundAnimate))}dispose(){this._animating=!1,this.renderer.dispose(),this.renderer.domElement.remove()}}const Iw=["James Martinez","Michael Chen","David Thompson","Robert Garcia","William Johnson","Christopher Lee","Daniel Wilson","Matthew Brown","Anthony Davis","Joshua Miller","Andrew Taylor","Ryan Anderson"],Pw=["Sarah Martinez","Emily Chen","Jessica Thompson","Ashley Garcia","Amanda Johnson","Jennifer Lee","Nicole Wilson","Michelle Brown","Stephanie Davis","Elizabeth Miller","Rebecca Taylor","Lauren Anderson"];function Dw(n="male"){const e=n==="female"?Pw:Iw;return e[Math.floor(Math.random()*e.length)]}function Lw(){return new Promise(n=>{let e={mode:"campaign",difficulty:"story",perkStat:null};const t=Np("pooleePrep"),i=document.createElement("div");i.className="menu-overlay";function a(){const r=t&&e.mode!=="sandbox"?`<fieldset class="field perk-stat-field">
            <legend>Poolee Prep — +1 stat</legend>
            <div class="perk-stat-row">${Pt.map(s=>`<button type="button" class="btn btn-secondary perk-stat-btn${e.perkStat===s?" perk-stat-btn--selected":""}" data-stat="${s}">${Jt(s)}</button>`).join("")}</div>
          </fieldset>`:"";i.innerHTML=`
        <div class="menu-panel mode-panel">
          <h2 class="menu-title">Select Mode</h2>
          <p class="menu-subtitle">How do you want to train?</p>
          <div class="mode-cards">
            <button type="button" class="mode-card${e.mode==="campaign"&&e.difficulty==="story"?" mode-card--selected":""}" data-mode="campaign" data-difficulty="story">
              <span class="mode-card-title">Story Campaign</span>
              <span class="mode-card-desc">Forgiving 13-week schedule. Failed activities cost readiness. Hydration penalties, not death.</span>
            </button>
            <button type="button" class="mode-card${e.mode==="campaign"&&e.difficulty==="ironman"?" mode-card--selected":""}" data-mode="campaign" data-difficulty="ironman">
              <span class="mode-card-title">Ironman Campaign</span>
              <span class="mode-card-desc">Rogue-lite rules. Unsat grades or dehydration end the run. Earn grit for The Locker. Recycle tokens forgive one failure.</span>
            </button>
            <button type="button" class="mode-card${e.mode==="sandbox"?" mode-card--selected":""}" data-mode="sandbox" data-difficulty="story">
              <span class="mode-card-title">Sandbox Free Play</span>
              <span class="mode-card-desc">Roam the depot and replay any activity at its location. No scheduler, no hydration.</span>
            </button>
          </div>
          ${r}
          <div class="builder-actions">
            <button type="button" class="btn btn-secondary" id="mode-back">Back</button>
            <button type="button" class="btn btn-primary" id="mode-continue">Continue</button>
          </div>
        </div>
      `,i.querySelector("#mode-back").addEventListener("click",()=>{i.remove(),n(null)},{once:!0}),i.querySelector("#mode-continue").addEventListener("click",()=>{t&&e.mode!=="sandbox"&&!e.perkStat&&(e.perkStat="leadership"),i.remove(),n({...e})},{once:!0}),i.querySelectorAll(".mode-card").forEach(s=>{s.addEventListener("click",()=>{e.mode=s.dataset.mode,e.difficulty=s.dataset.difficulty,a()})}),i.querySelectorAll(".perk-stat-btn").forEach(s=>{s.addEventListener("click",()=>{e.perkStat=s.dataset.stat,a()})})}a(),document.body.appendChild(i)})}async function kw(n){const e=await Lw();return e?new Promise(t=>{const i=vw(),a=Ax(),r=Cx(),s=Ix();let o=xw(i[0].id),l=0,c=null;const d=document.createElement("div");d.className="menu-overlay",d.innerHTML=`
      <div class="menu-panel builder-panel">
        <div class="builder-preview" id="builder-preview"></div>
        <div class="builder-form">
          <h2 class="menu-title">New Recruit</h2>
          <p class="menu-subtitle mode-badge-label">${e.mode==="sandbox"?"Sandbox":e.difficulty==="ironman"?"Ironman":"Story"} mode</p>
          <label class="field">
            <span>Name</span>
            <div class="name-row">
              <input type="text" id="char-name" maxlength="24" placeholder="Full name" autocomplete="off" />
              <button type="button" class="btn btn-secondary" id="btn-random-name">Randomize</button>
            </div>
            <span class="field-error" id="name-error"></span>
          </label>
          <fieldset class="field">
            <legend>Gender</legend>
            <label><input type="radio" name="gender" value="male" checked /> Male</label>
            <label><input type="radio" name="gender" value="female" /> Female</label>
          </fieldset>
          <fieldset class="field">
            <legend>Skin Tone</legend>
            <div class="swatch-row" id="skin-swatches"></div>
          </fieldset>
          <fieldset class="field">
            <legend>Hair Color</legend>
            <div class="swatch-row" id="hair-swatches"></div>
          </fieldset>
          <fieldset class="field">
            <legend>Background</legend>
            <div class="background-list" id="background-list"></div>
          </fieldset>
          <fieldset class="field">
            <legend>Stats</legend>
            <div class="stat-toolbar">
              <button type="button" class="btn btn-secondary btn-compact" id="btn-roll-stats">Roll Stats</button>
              <span class="stat-meta" id="stat-total">Total: 50</span>
              <span class="stat-meta stat-meta--points" id="stat-points">Points: 0</span>
            </div>
            <p class="stat-hint">Lower a stat (−) to earn a point, then raise another (+). Background bonuses apply on top.</p>
            <div class="stats-grid" id="stats-grid"></div>
          </fieldset>
          <label class="field">
            <span>Height</span>
            <input type="range" id="char-height" min="0" max="100" value="50" />
          </label>
          <fieldset class="field">
            <legend>Civilian Outfit</legend>
            <div class="outfit-row" id="outfit-row"></div>
          </fieldset>
          <div class="builder-actions">
            <button type="button" class="btn btn-secondary" id="btn-back">Back</button>
            <button type="button" class="btn btn-primary" id="btn-enter" disabled>Visit Recruiter</button>
          </div>
        </div>
      </div>
    `,document.body.appendChild(d);const u=d.querySelector("#builder-preview");c=new Vo(u);const h=d.querySelector("#char-name"),f=d.querySelector("#name-error"),g=d.querySelector("#btn-enter"),b=d.querySelector("#char-height"),m=d.querySelector("#skin-swatches"),p=d.querySelector("#hair-swatches"),M=d.querySelector("#background-list"),T=d.querySelector("#stats-grid"),w=d.querySelector("#stat-total"),E=d.querySelector("#stat-points"),R=d.querySelector("#outfit-row");function A(L,q,Q,ie,ce="color"){L.innerHTML=q.map(Re=>`
        <button type="button"
          class="swatch${Re.id===Q?" swatch--selected":""}"
          data-${ie}="${Re.id}"
          title="${Re.name}"
          style="background:#${Re[ce].toString(16).padStart(6,"0")}"
          aria-label="${Re.name}"
          aria-pressed="${Re.id===Q}"
        ></button>
      `).join("")}function N(){M.innerHTML=i.map(L=>`
        <label class="background-option${o.backgroundId===L.id?" background-option--selected":""}">
          <input type="radio" name="background" value="${L.id}" ${o.backgroundId===L.id?"checked":""} />
          <span class="background-name">${L.name}</span>
          <span class="background-desc">${L.description}</span>
        </label>
      `).join("")}function v(){const L=xn(o.backgroundId);o.stats=po(o.coreStats,L.modifiers)}function x(){const L=xn(o.backgroundId),q=po(o.coreStats,L.modifiers);T.innerHTML=Pt.map(Q=>{const ie=o.coreStats[Q],ce=q[Q],Re=ce-ie,ke=Re!==0?`<span class="stat-bg-mod">${Re>0?"+":""}${Re}</span>`:"",ut=Q==="strength"?" stat--str":"",at=oc(o.coreStats,Q),$=lc(o.coreStats,Q,l);return`
          <div class="stat-row${ut}" title="${fp[Q]}">
            <span class="stat-label">${Jt(Q)}</span>
            <div class="stat-controls">
              <button type="button" class="stat-btn" data-stat="${Q}" data-delta="-1" ${at?"":"disabled"} aria-label="Decrease ${Jt(Q)}">−</button>
              <span class="stat-value">${ce}</span>
              <button type="button" class="stat-btn" data-stat="${Q}" data-delta="1" ${$?"":"disabled"} aria-label="Increase ${Jt(Q)}">+</button>
            </div>
            ${ke}
          </div>`}).join(""),w.textContent=`Total: ${px(o.coreStats)}`,E.textContent=`Points: ${l}`}function I(){R.innerHTML=a.map(L=>`
        <button type="button"
          class="outfit-btn${o.appearance.civilianOutfitId===L.id?" outfit-btn--selected":""}"
          data-outfit="${L.id}"
          aria-pressed="${o.appearance.civilianOutfitId===L.id}"
        >${L.name}</button>
      `).join("")}function W(){o.name=h.value,o.appearance.gender=d.querySelector('input[name="gender"]:checked')?.value??"male",o.appearance.height=Number(b.value)}function U(){W(),v(),A(m,r,o.appearance.skinToneId,"skin"),A(p,s,o.appearance.hairColorId,"hair"),N(),x(),I(),c.update(o),X()}function X(){const L=ww(h.value);return f.textContent=L??"",g.disabled=!!L||!o.backgroundId,!L}function V(L){c?.dispose(),document.removeEventListener("keydown",G),d.remove(),t(L)}function G(L){L.key==="Escape"&&V(null)}h.addEventListener("input",U),d.querySelector("#btn-random-name").addEventListener("click",()=>{h.value=Dw(o.appearance.gender),U()}),d.querySelectorAll('input[name="gender"]').forEach(L=>{L.addEventListener("change",U)}),b.addEventListener("input",U),m.addEventListener("click",L=>{const q=L.target.closest("[data-skin]");q&&(o.appearance.skinToneId=q.dataset.skin,U())}),p.addEventListener("click",L=>{const q=L.target.closest("[data-hair]");q&&(o.appearance.hairColorId=q.dataset.hair,U())}),M.addEventListener("change",L=>{if(L.target.name!=="background")return;o.backgroundId=L.target.value;const q=xn(o.backgroundId);o.appearance.civilianOutfitId=q.defaultOutfitId,U()}),d.querySelector("#btn-roll-stats").addEventListener("click",()=>{o.coreStats=fx(),l=0,U()}),T.addEventListener("click",L=>{const q=L.target.closest(".stat-btn");if(!q||q.disabled)return;const Q=q.dataset.stat,ie=Number(q.dataset.delta);if(ie<0&&oc(o.coreStats,Q)){o.coreStats={...o.coreStats,[Q]:o.coreStats[Q]-1},l++,U();return}ie>0&&lc(o.coreStats,Q,l)&&(o.coreStats={...o.coreStats,[Q]:o.coreStats[Q]+1},l--,U())}),R.addEventListener("click",L=>{const q=L.target.closest("[data-outfit]");q&&(o.appearance.civilianOutfitId=q.dataset.outfit,U())}),d.querySelector("#btn-back").addEventListener("click",()=>V(null)),d.querySelector("#btn-enter").addEventListener("click",()=>{if(!X())return;W();const L=_w(h.value,o.backgroundId,o.appearance,n,o.coreStats,{mode:e.mode,difficulty:e.difficulty,perkStat:e.perkStat});V(L)}),document.addEventListener("keydown",G),U(),h.focus()}):null}const Nw=[{id:"easy_1",prompt:"How many push-ups are in a single push-up?",choices:["1","10","50","100"],answer:0},{id:"easy_2",prompt:"Boot camp training happens on land, not in the ___. ",choices:["ocean","sky","desert","forest"],answer:0},{id:"easy_3",prompt:"What does “left face” tell a formation to do?",choices:["Turn left","Turn right","About face","Fall out"],answer:0},{id:"easy_4",prompt:"2 + 3 = ?",choices:["4","5","6","7"],answer:1},{id:"easy_5",prompt:"Which meal is served in the chow hall?",choices:["Breakfast","Only snacks","Only dessert","None"],answer:0},{id:"easy_6",prompt:"A week has how many days?",choices:["5","6","7","8"],answer:2}],Fw=[{id:"med_1",prompt:"A squad has 13 recruits. Two fall out. How many remain?",choices:["10","11","12","15"],answer:1},{id:"med_2",prompt:"Military time 1400 is the same as:",choices:["2:00 PM","4:00 PM","2:00 AM","12:00 PM"],answer:0},{id:"med_3",prompt:"If you run 2 laps on a 400 m track, how far did you run?",choices:["400 m","600 m","800 m","1600 m"],answer:2},{id:"med_4",prompt:"Which order is correct for a typical training day?",choices:["Wake → PT → Chow","Chow → Sleep → PT","Liberty → Wake → PT","PT → Sleep → Wake"],answer:0},{id:"med_5",prompt:"A gear locker holds 6 canteens per recruit. For 5 recruits, how many canteens?",choices:["11","25","30","36"],answer:2},{id:"med_6",prompt:"Which word is closest in meaning to “discipline”?",choices:["Chaos","Self-control","Laziness","Confusion"],answer:1}],Ow=[{id:"hard_1",prompt:"A ruck march covers 12 km in 3 hours. What is the average speed in km/h?",choices:["3","4","5","6"],answer:1},{id:"hard_2",prompt:"If 3 squads of 13 link up, how many recruits total?",choices:["26","36","39","42"],answer:2},{id:"hard_3",prompt:"A right triangle has legs 3 and 4. How long is the hypotenuse?",choices:["5","6","7","8"],answer:0},{id:"hard_4",prompt:"Convert 2500 meters to kilometers.",choices:["0.25 km","2.5 km","25 km","250 km"],answer:1},{id:"hard_5",prompt:"A platoon loses 15% of 40 recruits to medical. How many remain (whole recruits)?",choices:["32","34","35","36"],answer:1},{id:"hard_6",prompt:"Which sequence shows proper escalation of command?",choices:["Fire team → Squad → Platoon","Platoon → Fire team → Squad","Squad → Fire team → Platoon","Fire team → Platoon → Squad"],answer:0}],fc={easy:Nw,medium:Fw,hard:Ow},Uw=6;function zw(n){return n<=8?["easy","easy","easy","easy","easy","medium"]:n<=11?["easy","easy","medium","medium","medium","hard"]:n<=13?["easy","medium","medium","medium","hard","hard"]:["medium","medium","hard","hard","hard","hard"]}function Fp(n){const e=[...n];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function Bw(n,e){const t=Fp(fc[n]??fc.easy);return t.find(i=>!e.has(i.id))??t[0]}function Ww(n){const e=Fp(zw(n)),t=new Set,i=[];for(const a of e.slice(0,Uw)){const r=Bw(a,t);t.add(r.id),i.push({...r,difficulty:a})}return i}function Hw(n,e){let t=0;for(let s=0;s<e.length;s++)n[s]===e[s].answer&&t++;const i=e.length,a=i>0?t/i:0;let r=0;return a>=1?r=1:a<.15&&(r=-1),{correct:t,total:i,percent:a,intDelta:r}}function Gw(n,e){if(!e)return n;const t={...n.stats};return t.intelligence=rn(t.intelligence+e),{...n,stats:t}}const _o=45,Jn={pull:"KeyF",top:"KeyJ",bottom:"KeyK"},Vw=[Jn.pull,Jn.top,Jn.bottom];function qw(n){let e=0;return n>=10?e=1:n<3&&(e=-1),{reps:n,strDelta:e}}function Kw(n,e){if(!e)return n;const t={...n.stats};return t.strength=rn(t.strength+e),{...n,stats:t}}const mc="Press <b>F</b> to pull up",$w="Rise! Press <b>J</b> at the top",Xw="Lower down. Press <b>K</b> at full hang";function Op(n,e){return new Promise(t=>{const i=e.stats.strength,a=e.stats.endurance,r=mx(i,a),s=gx(i),o=yx(i,a),l=bx(i,a);let c="hang",d=0,u=0,h=l,f=0,g=0,b=!0,m=performance.now(),p=0;const M=_o*1e3;n.setReps(0),n.setEnergy(1),n.setTimer(_o),n.setPullHeight(0),n.setPhaseHint(mc);function T(){b&&(b=!1,window.removeEventListener("keydown",E),t({reps:d,perfectReps:u,energyLeft:h,...qw(d)}))}function w(A){if(h=Math.max(0,h-vx(i,a,A)),n.setEnergy(h/l),c="hang",n.setPullHeight(0),h<=0){T();return}n.setPhaseHint(mc)}function E(A){if(!(!b||A.repeat||!Vw.includes(A.code)))switch(A.preventDefault(),c){case"hang":A.code===Jn.pull&&(c="rising",f=performance.now(),n.setPhaseHint($w));break;case"top":A.code===Jn.top?(d++,n.setReps(d),n.flash("perfect"),c="falling",f=performance.now(),n.setPhaseHint(Xw)):(n.flash("miss"),w(!1));break;case"bottom":A.code===Jn.bottom?(u++,n.flash("perfect"),w(!0)):(n.flash("miss"),w(!1));break;default:n.flash("miss"),w(!1)}}function R(A){if(b){if(p+=A-m,m=A,n.setTimer((M-p)/1e3),p>=M){T();return}if(c==="rising"){const N=Math.min(1,(A-f)/s);n.setPullHeight(N),N>=1&&(c="top",g=A)}else if(c==="top")n.setPullHeight(1),A-g>r&&(n.flash("miss"),w(!1));else if(c==="falling"){const N=Math.min(1,(A-f)/o);n.setPullHeight(1-N),N>=1&&(c="bottom",g=A)}else c==="bottom"&&(n.setPullHeight(0),A-g>r&&(n.flash("miss"),w(!1)));requestAnimationFrame(R)}}window.addEventListener("keydown",E),requestAnimationFrame(R)})}class jw{constructor(e,t){this.container=e,this.character=t,this.preview=null,this._choiceHandler=null,e.innerHTML=`
      <div class="asvab-scene">
        <div class="asvab-room">
          <div class="asvab-table-unit">
            <div class="folding-table">
              <div class="folding-table-top"></div>
              <div class="folding-table-legs">
                <span class="folding-leg folding-leg--left"></span>
                <span class="folding-leg folding-leg--right"></span>
              </div>
            </div>
            <div class="asvab-paper" id="asvab-paper">
              <div class="asvab-paper-header">
                <span>ASVAB</span>
                <span id="asvab-paper-meta">Form 183 · MEPS</span>
              </div>
              <div class="asvab-paper-body" id="asvab-paper-body"></div>
            </div>
            <div class="asvab-crayon" title="Issue crayon — do not lose">
              <span class="asvab-crayon-body"></span>
              <span class="asvab-crayon-label">CRAYON</span>
            </div>
          </div>
          <div class="asvab-recruit-seat">
            <div class="asvab-chair-back"></div>
            <div class="asvab-recruit-slot" id="asvab-recruit-slot"></div>
          </div>
        </div>
      </div>
    `;const i=e.querySelector("#asvab-recruit-slot");this.preview=new Vo(i,{width:120,height:160,background:null,pixelScale:3}),this.preview.update(t)}showQuestion(e,t,i){return new Promise(a=>{const r=this.container.querySelector("#asvab-paper-meta"),s=this.container.querySelector("#asvab-paper-body");r.textContent=`Q ${t}/${i} · ${e.difficulty}`,s.innerHTML=`
        <p class="asvab-question">${e.prompt}</p>
        <div class="asvab-bubbles" id="asvab-bubbles">
          ${e.choices.map((l,c)=>`
            <button type="button" class="asvab-bubble" data-choice="${c}">
              <span class="asvab-bubble-mark" aria-hidden="true"></span>
              <span class="asvab-bubble-letter">${String.fromCharCode(65+c)}.</span>
              <span class="asvab-bubble-text">${l}</span>
            </button>
          `).join("")}
        </div>
        <p class="asvab-paper-footer">Use issue crayon. Fill bubble completely.</p>
      `;const o=s.querySelector("#asvab-bubbles");this._choiceHandler&&o.removeEventListener("click",this._choiceHandler),this._choiceHandler=l=>{const c=l.target.closest("[data-choice]");c&&(o.removeEventListener("click",this._choiceHandler),this._choiceHandler=null,c.classList.add("asvab-bubble--filled"),a(Number(c.dataset.choice)))},o.addEventListener("click",this._choiceHandler)})}dispose(){this._choiceHandler&&this.container.querySelector("#asvab-bubbles")?.removeEventListener("click",this._choiceHandler),this.preview?.dispose(),this.container.innerHTML=""}}class Up{constructor(e,t){this.container=e,this.character=t,this.preview=null,this._flashTimer=null,e.innerHTML=`
      <div class="pullup-scene">
        <div class="pullup-yard">
          <div class="pullup-station pullup-station--active">
            <div class="pullup-bar"></div>
            <span class="pullup-post pullup-post--left"></span>
            <span class="pullup-post pullup-post--right"></span>
            <div class="pullup-recruit-slot" id="pullup-recruit-slot"></div>
            <div class="pullup-timing-flash" id="pullup-flash"></div>
          </div>
          <div class="pullup-station">
            <div class="pullup-bar"></div>
            <span class="pullup-post pullup-post--left"></span>
            <span class="pullup-post pullup-post--right"></span>
          </div>
        </div>
        <div class="pullup-hud">
          <div class="pullup-hud-row">
            <span class="pullup-reps">Reps: <span id="pullup-reps">0</span></span>
            <span class="pullup-timer" id="pullup-timer">0.0s</span>
          </div>
          <div class="pullup-energy">
            <span class="pullup-energy-label">Energy</span>
            <div class="pullup-energy-track"><div class="pullup-energy-bar" id="pullup-energy-bar"></div></div>
          </div>
          <div class="pullup-phase-hint" id="pullup-phase-hint">Get on the bar</div>
        </div>
      </div>
    `;const i=e.querySelector("#pullup-recruit-slot");this.preview=new Vo(i,{width:110,height:150,background:null,pixelScale:3}),this.preview.update(t),this.repsEl=e.querySelector("#pullup-reps"),this.timerEl=e.querySelector("#pullup-timer"),this.energyBarEl=e.querySelector("#pullup-energy-bar"),this.phaseHintEl=e.querySelector("#pullup-phase-hint"),this.flashEl=e.querySelector("#pullup-flash")}setPullHeight(e){this.preview?.setPullHeight(e)}setReps(e){this.repsEl.textContent=String(e)}setTimer(e){this.timerEl.textContent=`${Math.max(0,e).toFixed(1)}s`}setEnergy(e){this.energyBarEl.style.width=`${Math.max(0,Math.min(1,e))*100}%`}setPhaseHint(e){this.phaseHintEl.innerHTML=e}flash(e){this.flashEl&&(clearTimeout(this._flashTimer),this.flashEl.textContent=e==="perfect"?"PERFECT":"MISS",this.flashEl.className=`pullup-timing-flash pullup-timing-flash--${e} pullup-timing-flash--show`,this._flashTimer=setTimeout(()=>{this.flashEl.className="pullup-timing-flash"},500))}dispose(){clearTimeout(this._flashTimer),this.preview?.dispose(),this.container.innerHTML=""}}const Yw="Sgt. Vasquez";class qo{constructor(e){this.container=e,this._keyHandler=null,this._resolveContinue=null,e.innerHTML=`
      <div class="station-scene">
        <div class="station-room">
          <div class="station-flag" aria-hidden="true"></div>
          <div class="station-desk" aria-hidden="true"></div>
          <div class="station-nco" id="station-nco"></div>
        </div>
        <div class="nco-dialogue">
          <div class="nco-nameplate">${Yw}</div>
          <p class="nco-text" id="nco-text"></p>
          <div class="nco-choices" id="nco-choices"></div>
          <div class="nco-actions" id="nco-actions"></div>
        </div>
      </div>
    `;const t=e.querySelector("#station-nco"),i=La("npc/nco");i.className="station-nco-sprite";const a=4;i.style.width=`${i.width*a}px`,i.style.height=`${i.height*a}px`,t.appendChild(i),this.textEl=e.querySelector("#nco-text"),this.choicesEl=e.querySelector("#nco-choices"),this.actionsEl=e.querySelector("#nco-actions")}say(e){return new Promise(t=>{this.choicesEl.innerHTML="",this.textEl.textContent=e,this.actionsEl.innerHTML='<button type="button" class="btn btn-primary nco-continue" id="nco-continue">Continue</button>';const i=this.actionsEl.querySelector("#nco-continue"),a=()=>{r(),t()},r=()=>{i.removeEventListener("click",a),this._keyHandler&&(window.removeEventListener("keydown",this._keyHandler),this._keyHandler=null)};this._keyHandler=s=>{s.key==="Enter"&&a()},window.addEventListener("keydown",this._keyHandler),i.addEventListener("click",a,{once:!0}),i.focus()})}ask(e){return new Promise(t=>{this.actionsEl.innerHTML="",this.textEl.textContent=e.prompt,this.choicesEl.innerHTML=e.choices.map((i,a)=>`
        <button type="button" class="btn btn-secondary nco-choice" data-choice="${a}">${i.text}</button>
      `).join(""),this.choicesEl.addEventListener("click",i=>{const a=i.target.closest("[data-choice]");a&&t(Number(a.dataset.choice))},{once:!0})})}dispose(){this._keyHandler&&window.removeEventListener("keydown",this._keyHandler),this.container.innerHTML=""}}const zp=[{id:"why_join",prompt:"Why do you want to join the Marines?",weight:2,choices:[{text:"To lead Marines and earn respect.",stat:"leadership"},{text:"To prove I can handle anything.",stat:"endurance"},{text:"To get stronger and push my limits.",stat:"strength"},{text:"For education benefits and a fresh start.",stat:"intelligence"},{text:"To serve my country with honor.",stat:"leadership"}]},{id:"what_bring",prompt:"What do you bring to the table?",weight:1,choices:[{text:"I can take charge when things get rough.",stat:"leadership"},{text:"Quick feet and coordination.",stat:"dexterity"},{text:"I never quit on a long haul.",stat:"endurance"},{text:"I study hard and learn fast.",stat:"intelligence"},{text:"Raw physical strength.",stat:"strength"}]}];function Zw(n){const e=Object.fromEntries(Pt.map(a=>[a,0]));for(const a of n){const r=zp.find(o=>o.id===a.questionId);if(!r)continue;const s=r.choices[a.choiceIndex];s&&(e[s.stat]=(e[s.stat]??0)+r.weight)}let t=Pt[0],i=-1;for(const a of Pt)e[a]>i&&(i=e[a],t=a);return t}function Jw(n,e){if(!Pt.includes(e))return n;const t={...n.stats};return t[e]=rn(t[e]+1),{...n,stats:t}}function Qw(n){return new Promise(e=>{const t=document.createElement("div");t.className="menu-overlay",t.innerHTML=`
      <div class="menu-panel recruiter-panel">
        <h2 class="menu-title" id="recruiter-title">Recruiting Office</h2>
        <p class="menu-subtitle" id="recruiter-subtitle"></p>
        <div class="recruiter-body" id="recruiter-body"></div>
        <div class="recruiter-actions" id="recruiter-actions"></div>
      </div>
    `,document.body.appendChild(t);const i=t.querySelector("#recruiter-title"),a=t.querySelector("#recruiter-subtitle"),r=t.querySelector("#recruiter-body"),s=t.querySelector("#recruiter-actions");let o={...n,stats:{...n.stats}},l=null,c=null,d=null,u=null;const h=t.querySelector(".recruiter-panel");function f(R){t.remove(),e(R)}function g(R){s.innerHTML=R}async function b(){h.classList.add("recruiter-panel--station"),i.textContent="Recruiting Station",a.textContent="MEPS — Processing",g(""),r.innerHTML="";const R=new qo(r),A=[];await R.say(`At ease, ${o.name}. I'm your processing NCO.`),await R.say("Before you ship to MCRD, I need to know what kind of recruit I'm signing for."),await R.say("Answer straight — your motivation goes in your file.");for(const N of zp){const v=await R.ask(N);A.push({questionId:N.id,choiceIndex:v})}d=Zw(A),o=Jw(o,d),await R.say(`Good answer. That'll serve you well. ${Jt(d)} +1.`),await R.say(`Next up: the ASVAB at the folding table, then pull-ups on the bar. You've got ${_o} seconds — don't gas out early.`),R.dispose(),h.classList.remove("recruiter-panel--station"),await p(),T()}function m(R,A,N){return u?u.showQuestion(R,A,N):Promise.resolve(0)}async function p(){h.classList.add("recruiter-panel--asvab"),i.textContent="ASVAB",a.textContent="Six-foot folding table · paper · issue crayon",r.innerHTML="",u=new jw(r,o);const R=Ww(o.stats.intelligence),A=[];for(let N=0;N<R.length;N++)A.push(await m(R[N],N+1,R.length));u.dispose(),u=null,h.classList.remove("recruiter-panel--asvab"),l=Hw(A,R),o=Gw(o,l.intDelta)}function M(R){return R>0?`<span class="stat-delta stat-delta--up">+${R}</span>`:R<0?`<span class="stat-delta stat-delta--down">${R}</span>`:'<span class="stat-delta">No change</span>'}function T(){i.textContent="ASVAB Results",a.textContent='Sgt. Vasquez — "Score recorded."',r.innerHTML=`
        <p class="recruiter-copy">${l.correct} / ${l.total} correct (${Math.round(l.percent*100)}%). ${Jt("intelligence")}: ${o.stats.intelligence} ${M(l.intDelta)}</p>
      `,g('<button type="button" class="btn btn-primary" id="btn-start-pullups">Pull-Up Test</button>'),t.querySelector("#btn-start-pullups").addEventListener("click",()=>{w()},{once:!0})}function w(){i.textContent="Pull-Up Test",a.textContent=`Sgt. Vasquez — "Show me what you've got on the bar."`,r.innerHTML=`
        <p class="recruiter-copy">Step up to the bar. Press <strong>F</strong> to pull, <strong>J</strong> as your chin clears the bar, and <strong>K</strong> at full hang.</p>
        <p class="recruiter-copy recruiter-copy--small">Strength and endurance widen your timing windows and set your energy. Perfect reps cost less energy. The test ends at the buzzer or when you gas out.</p>
      `,g('<button type="button" class="btn btn-primary" id="btn-begin-pullups">Approach the Bar</button>'),t.querySelector("#btn-begin-pullups").addEventListener("click",async()=>{h.classList.add("recruiter-panel--pullup"),i.textContent="Pull-Up Test",a.textContent="F: pull · J: chin over bar · K: full hang",g(""),r.innerHTML="";const R=new Up(r,o),A=await Op(R,o);R.dispose(),h.classList.remove("recruiter-panel--pullup"),c=A,o=Kw(o,c.strDelta),E()},{once:!0})}function E(){i.textContent="Cleared for Boot Camp",a.textContent=`Sgt. Vasquez — "You're cleared to ship."`,r.innerHTML=`
        <div class="recruiter-results">
          ${d?`
          <div class="recruiter-result-row">
            <span>Interview</span>
            <span>${Jt(d)} ${M(1)}</span>
          </div>`:""}
          <div class="recruiter-result-row">
            <span>ASVAB</span>
            <span>${l.correct}/${l.total} · ${Jt("intelligence")} ${M(l.intDelta)}</span>
          </div>
          <div class="recruiter-result-row">
            <span>Pull-ups</span>
            <span>${c.reps} reps (${c.perfectReps} perfect) · ${Jt("strength")} ${M(c.strDelta)}</span>
          </div>
          <div class="recruiter-final-stats">
            ${Jt("intelligence")} ${o.stats.intelligence} ·
            ${Jt("strength")} ${o.stats.strength}
          </div>
        </div>
      `,g('<button type="button" class="btn btn-primary" id="btn-ship-out">Ship to MCRD</button>'),t.querySelector("#btn-ship-out").addEventListener("click",()=>{f({...o,recruiterCompleted:!0})},{once:!0})}b()})}function eS(){return new Promise(n=>{let e=0;const t=Kx.map(d=>yo[d]),i=document.createElement("div");i.className="menu-overlay",i.innerHTML=`
      <div class="menu-panel slot-panel campaign-panel">
        <h1 class="menu-title">SELECT CAMPAIGN</h1>
        <p class="menu-subtitle">Choose your deployment</p>
        <div class="campaign-list" role="listbox"></div>
        <p class="menu-hint">Arrow keys to focus · Enter to select · Esc to cancel</p>
      </div>
    `;const a=i.querySelector(".campaign-list");function r(){a.innerHTML=t.map((d,u)=>{const h=u===e?" campaign-card--focused":"",f=d.status==="comingSoon",g=f?'<span class="slot-badge slot-badge--locked">COMING SOON</span>':'<span class="slot-badge slot-badge--available">AVAILABLE</span>';return`
          <button type="button"
            class="campaign-card${h}${f?" campaign-card--locked":""}"
            data-index="${u}"
            data-id="${d.id}"
            role="option"
            ${f?"disabled":""}>
            <span class="campaign-card-title">${d.title} ${g}</span>
            <span class="campaign-card-subtitle">${d.subtitle}</span>
          </button>`}).join("")}function s(d){e=Math.max(0,Math.min(t.length-1,d)),r(),a.querySelector(`[data-index="${e}"]`)?.focus()}function o(d){const u=t[d];u.status==="available"&&(l(),n(u))}function l(){document.removeEventListener("keydown",c),i.remove()}function c(d){d.key==="Escape"&&(l(),n(null)),d.key==="ArrowUp"&&s(e-1),d.key==="ArrowDown"&&s(e+1),d.key==="Enter"&&o(e)}a.addEventListener("click",d=>{const u=d.target.closest(".campaign-card");if(!u||u.disabled)return;const h=Number(u.dataset.index);s(h),o(h)}),a.addEventListener("focusin",d=>{const u=d.target.closest(".campaign-card");u&&(e=Number(u.dataset.index))}),document.addEventListener("keydown",c),document.body.appendChild(i),r(),a.querySelector(`[data-index="${e}"]`)?.focus()})}function tS(n,e){return new Promise(t=>{const i=document.createElement("div");i.className="menu-overlay",i.innerHTML=`
      <div class="menu-panel recruiter-panel">
        <h2 class="menu-title" id="briefing-title">Deployment Briefing</h2>
        <p class="menu-subtitle" id="briefing-subtitle">${e.subtitle}</p>
        <div class="recruiter-body" id="briefing-body"></div>
        <div class="recruiter-actions" id="briefing-actions"></div>
      </div>
    `,document.body.appendChild(i);const a=i.querySelector("#briefing-body"),r=i.querySelector("#briefing-actions");function s(l){i.remove(),t(l)}async function o(){const l=new qo(a),c=e.briefing??{},d=a.querySelector(".nco-nameplate");d&&(d.textContent=c.officer??"Briefing Officer"),await l.say(`Marine ${n.name}, the ${e.title} briefing is now in effect.`);for(const u of c.lines??[])await l.say(u);await l.say(`Good luck, Marine. ${e.subtitle}.`),l.dispose(),r.innerHTML=`
        <button type="button" class="btn btn-primary" id="briefing-deploy">Deploy</button>
        <button type="button" class="btn btn-secondary" id="briefing-cancel">Cancel</button>
      `,r.querySelector("#briefing-deploy").addEventListener("click",()=>{s({...n,campaign:Tn({campaignId:e.id})})},{once:!0}),r.querySelector("#briefing-cancel").addEventListener("click",()=>{s(null)},{once:!0})}o()})}function iS(n){const e=document.createElement("div");e.className="recruit-hud",e.id="recruit-hud";function t(){if(!n){e.innerHTML="";return}const i=xn(n.backgroundId),a=qt(n),r=ka(n),s=Pt.map(p=>`
      <div class="recruit-stat" title="${fp[p]}">
        <span class="recruit-stat-label">${Jt(p)}</span>
        <span class="recruit-stat-value">${n.stats[p]}</span>
      </div>
    `).join(""),o=n.campaign,l=Rr(n),c=o?.difficulty==="ironman",d=a.periodLabel??"Week",u=o?.phase==="graduated"?`Complete · ${n.honorsTitle??"Marine"}`:l?"Sandbox · Free Play":o?`${d} ${o.week} · Day ${o.dayInWeek} · Ready ${o.readiness}%`:`Day ${n.bootDay??0}`,h=o?.hydration??100,f=o?.recycleTokens??0,g=!l&&o?.phase!=="graduated"?`<div class="recruit-hydration">
          <span class="recruit-hydration-label">${r.resourceLabel}</span>
          <div class="recruit-hydration-track"><div class="recruit-hydration-fill" style="width:${h}%"></div></div>
          <span class="recruit-hydration-value">${Math.round(h)}%</span>
        </div>`:"",b=c&&f>0?`<span class="recruit-token-badge" title="Recycle tokens">${f} recycle</span>`:"",m=l?'<span class="recruit-mode-badge recruit-mode-badge--sandbox">SANDBOX</span>':c?'<span class="recruit-mode-badge recruit-mode-badge--ironman">IRONMAN</span>':"";e.innerHTML=`
      <div class="recruit-hud-name">${n.name} ${m}</div>
      <div class="recruit-hud-meta">${u} · ${i.name} ${b}</div>
      ${g}
      <div class="recruit-hud-stats">${s}</div>
    `}return t(),{element:e,update(i){n=i,t()}}}function Ko(n,e){return Bo(e).find(i=>i.id===n)??null}function nS(n,e,t){const i=Ko(n,t);return i?i.days[e-1]??null:null}function Bp(n,e){if(!n?.tiles)return null;for(const t of Object.values(n.tiles)){const i=t.find(a=>a.name===e);if(i)return i}return null}function aS(n,e,t){const i=t?.campaign??t,a=Ko(n,t);return a?.sideQuests?a.sideQuests.filter(r=>{if(i.sideQuests?.[r.id]==="done"||e<r.availableAfterDay||r.maxHeight!=null&&(t?.appearance?.height??50)>r.maxHeight)return!1;if(r.minStats){const s=t?.stats??{};for(const[o,l]of Object.entries(r.minStats))if((s[o]??10)<l)return!1}if(r.maxStats){const s=t?.stats??{};for(const[o,l]of Object.entries(r.maxStats))if((s[o]??10)>l)return!1}return!(r.requiresQuest&&i.sideQuests?.[r.requiresQuest]!=="done")}):[]}function gc(n,e){return n>Bo(e).length}function rS(n){const e=(n.paragraphs??[]).map(i=>`<p class="recruiter-copy">${i}</p>`).join(""),t=n.hint?`<p class="recruiter-copy recruiter-copy--small">${n.hint}</p>`:"";return new Promise(i=>{const a=document.createElement("div");a.className="menu-overlay",a.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">${n.title??"New Orders"}</h2>
        <p class="menu-subtitle">${n.subtitle??""}</p>
        <div class="schedule-body">
          ${e}
          ${t}
        </div>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="theater-continue">${n.button??"Continue"}</button>
        </div>
      </div>
    `,a.querySelector("#theater-continue").addEventListener("click",()=>{a.remove(),i()},{once:!0}),document.body.appendChild(a),a.querySelector("#theater-continue").focus()})}function sS(n,e,t){const i=qt(n),a=i.periodLabel??"Week",r=i.usesRecruiter===!1,s=r?"Mission Day":"Training Day";return new Promise(o=>{const l=document.createElement("div");l.className="menu-overlay",l.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">${a} ${t.id}: ${t.name}</h2>
        <p class="menu-subtitle">${s} ${n.campaign.dayInWeek}</p>
        <div class="schedule-body">
          <p class="schedule-assignment">${e.title}</p>
          <p class="recruiter-copy">${e.briefing}</p>
          <div class="schedule-location">
            <span class="schedule-label">Report to</span>
            <span class="schedule-value">${e.locationName}</span>
          </div>
          <p class="recruiter-copy recruiter-copy--small">${i.mapHint}</p>
        </div>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="schedule-begin">${r?"Begin Mission":"Begin Patrol"}</button>
        </div>
      </div>
    `,l.querySelector("#schedule-begin").addEventListener("click",()=>{l.remove(),o()},{once:!0}),document.body.appendChild(l),l.querySelector("#schedule-begin").focus()})}function oS(n,e){const i=qt(e).periodLabel??"Week";return new Promise(a=>{const r=document.createElement("div");r.className="menu-overlay",r.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">${i} ${n.id} Complete</h2>
        <p class="menu-subtitle">${n.name}</p>
        <p class="recruiter-copy">${n.theme}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="week-continue">Continue</button>
        </div>
      </div>
    `,r.querySelector("#week-continue").addEventListener("click",()=>{r.remove(),a()},{once:!0}),document.body.appendChild(r)})}function lS(n){return new Promise(e=>{const t=document.createElement("div");t.className="menu-overlay",t.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Week ${n.id}: ${n.name}</h2>
        <p class="menu-subtitle">Coming in a future update</p>
        <p class="recruiter-copy">${n.theme}</p>
        <p class="recruiter-copy recruiter-copy--small">Week 1 vertical slice is complete. More training weeks are on the way. Free roam the depot until then.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="coming-soon-ok">Roger</button>
        </div>
      </div>
    `,t.querySelector("#coming-soon-ok").addEventListener("click",()=>{t.remove(),e()},{once:!0}),document.body.appendChild(t)})}function cS(n){const e=qt(n),t=e.completion??{},i=n.honorsTitle??"United States Marine",a=n.campaign?.readiness??0,r=Object.keys(n.campaign?.completed??{}).length,s=e.usesRecruiter===!1?"Missions completed":"Training days";return new Promise(o=>{const l=document.createElement("div");l.className="menu-overlay",l.innerHTML=`
      <div class="menu-panel schedule-panel graduation-panel">
        <h2 class="menu-title">${t.title??"Graduation"}</h2>
        <p class="menu-subtitle">${t.subtitle??e.subtitle}</p>
        <p class="schedule-assignment">${n.name}</p>
        <p class="recruiter-copy">You have earned the title <strong>${i}</strong>.</p>
        <div class="graduation-stats">
          <div class="recruiter-result-row"><span>Readiness</span><span>${a}%</span></div>
          <div class="recruiter-result-row"><span>${s}</span><span>${r}</span></div>
          <div class="recruiter-result-row"><span>Status</span><span>Complete</span></div>
        </div>
        <p class="recruiter-copy recruiter-copy--small">${t.footer??"Semper Fidelis."}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="grad-ok">Dismiss</button>
        </div>
      </div>
    `,l.querySelector("#grad-ok").addEventListener("click",()=>{l.remove(),o()},{once:!0}),document.body.appendChild(l)})}function dS(n){const e=ka(n);return new Promise(t=>{const i=document.createElement("div");i.className="menu-overlay",i.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">${e.exhaustionTitle}</h2>
        <p class="menu-subtitle">Story mode</p>
        <p class="recruiter-copy">${e.exhaustionCopy}</p>
        <p class="recruiter-copy recruiter-copy--small">${e.pickupHint}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="heat-ok">Roger</button>
        </div>
      </div>
    `,i.querySelector("#heat-ok").addEventListener("click",()=>{i.remove(),t()},{once:!0}),document.body.appendChild(i)})}function uS(n,e){const i={performance:"Performance Drop",heat:ka(n).casualtyLabel};return new Promise(a=>{const r=document.createElement("div");r.className="menu-overlay",r.innerHTML=`
      <div class="menu-panel schedule-panel runend-panel">
        <h2 class="menu-title">Recycled</h2>
        <p class="menu-subtitle">${i[e]??"Failure"} — last chance</p>
        <p class="recruiter-copy">Your recycle paperwork was approved. One token consumed. Do not fail again.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="recycled-ok">Continue Training</button>
        </div>
      </div>
    `,r.querySelector("#recycled-ok").addEventListener("click",()=>{r.remove(),a()},{once:!0}),document.body.appendChild(r)})}function hS(n,e,t){const i=qt(n),a=ka(n),r=i.periodLabel??"Week",s={performance:"Performance Drop",heat:a.casualtyLabel},o=n.campaign?.week??1,l=n.campaign?.readiness??0,c=Object.keys(n.campaign?.completed??{}).length;return new Promise(d=>{const u=document.createElement("div");u.className="menu-overlay",u.innerHTML=`
      <div class="menu-panel schedule-panel runend-panel">
        <h2 class="menu-title">Run Ended</h2>
        <p class="menu-subtitle">${s[e]??"Dropped"}</p>
        <p class="schedule-assignment">${n.name}</p>
        <p class="recruiter-copy">Ironman run over. Grit earned carries to The Locker for your next recruit.</p>
        <div class="graduation-stats">
          <div class="recruiter-result-row"><span>${r}s reached</span><span>${o}</span></div>
          <div class="recruiter-result-row"><span>Days completed</span><span>${c}</span></div>
          <div class="recruiter-result-row"><span>Readiness</span><span>${l}%</span></div>
          <div class="recruiter-result-row"><span>Grit earned</span><span class="stat-delta stat-delta--up">+${t}</span></div>
        </div>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="runend-ok">Return to Slots</button>
        </div>
      </div>
    `,u.querySelector("#runend-ok").addEventListener("click",()=>{u.remove(),d()},{once:!0}),document.body.appendChild(u)})}class pS{constructor(e){this.container=e,e.innerHTML=`
      <div class="drill-scene">
        <div class="drill-deck" aria-hidden="true"></div>
        <div class="drill-command" id="drill-command">READY</div>
        <div class="drill-beat" id="drill-beat"></div>
        <div class="drill-hud">
          <span>Hits: <span id="drill-hits">0</span> / <span id="drill-total">0</span></span>
          <span class="drill-flash" id="drill-flash"></span>
        </div>
        <div class="drill-keys">
          <span><kbd>L</kbd> Left Face</span>
          <span><kbd>R</kbd> Right Face</span>
          <span><kbd>M</kbd> March</span>
          <span><kbd>H</kbd> Halt</span>
        </div>
      </div>
    `,this.commandEl=e.querySelector("#drill-command"),this.beatEl=e.querySelector("#drill-beat"),this.hitsEl=e.querySelector("#drill-hits"),this.totalEl=e.querySelector("#drill-total"),this.flashEl=e.querySelector("#drill-flash")}setCommand(e){this.commandEl.textContent=e}setHits(e,t){this.hitsEl.textContent=String(e),this.totalEl.textContent=String(t)}pulseBeat(){this.beatEl.classList.add("drill-beat--pulse"),setTimeout(()=>this.beatEl.classList.remove("drill-beat--pulse"),120)}flash(e){this.flashEl.textContent=e==="hit"?"HIT":"MISS",this.flashEl.className=`drill-flash drill-flash--${e} drill-flash--show`,setTimeout(()=>{this.flashEl.className="drill-flash"},400)}dispose(){this.container.innerHTML=""}}const vi=[{label:"LEFT FACE",key:"KeyL"},{label:"RIGHT FACE",key:"KeyR"},{label:"FORWARD MARCH",key:"KeyM"},{label:"HALT",key:"KeyH"},{label:"LEFT FACE",key:"KeyL"},{label:"HALT",key:"KeyH"},{label:"RIGHT FACE",key:"KeyR"},{label:"FORWARD MARCH",key:"KeyM"},{label:"HALT",key:"KeyH"},{label:"LEFT FACE",key:"KeyL"},{label:"RIGHT FACE",key:"KeyR"},{label:"HALT",key:"KeyH"}];function xr(n){return(Math.max(Rt,Math.min(ai,n))-Rt)/(ai-Rt)}function fS(n,e){const t=(xr(n)+xr(e))/2;return Math.round(1400-t*400)}function mS(n,e){const t=(xr(n)+xr(e))/2;return Math.round(500+t*350)}function gS(n,e){return new Promise(t=>{const i=new pS(n),a=e.stats.dexterity,r=e.stats.leadership,s=fS(a,r),o=mS(a,r);let l=0,c=0,d=!1,u=!0,h=null;i.setHits(0,vi.length),i.setCommand("READY...");function f(){if(!u)return;u=!1,clearTimeout(h),window.removeEventListener("keydown",b),i.dispose();const m=vi.length>0?c/vi.length:0;t(he(m,["leadership","dexterity"],{hits:c,total:vi.length}))}function g(){if(l>=vi.length){f();return}const m=vi[l];i.pulseBeat(),i.setCommand(m.label),d=!0,performance.now(),h=setTimeout(()=>{d&&(i.flash("miss"),l++,i.setHits(c,vi.length),d=!1,setTimeout(g,s*.4))},o)}function b(m){if(!u||!d)return;["KeyL","KeyR","KeyM","KeyH"].includes(m.code)&&m.preventDefault();const p=vi[l];m.code===p.key?(clearTimeout(h),c++,i.flash("hit"),l++,i.setHits(c,vi.length),d=!1,setTimeout(g,s*.35)):["KeyL","KeyR","KeyM","KeyH"].includes(m.code)&&(clearTimeout(h),i.flash("miss"),l++,i.setHits(c,vi.length),d=!1,setTimeout(g,s*.35))}window.addEventListener("keydown",b),setTimeout(g,s)})}class yS{constructor(e){this.container=e,e.innerHTML=`
      <div class="corevalues-scene">
        <div class="corevalues-trait" id="cv-trait"></div>
        <div class="corevalues-choices" id="cv-choices"></div>
        <div class="corevalues-progress" id="cv-progress"></div>
      </div>
    `,this.traitEl=e.querySelector("#cv-trait"),this.choicesEl=e.querySelector("#cv-choices"),this.progressEl=e.querySelector("#cv-progress")}showRound(e,t,i,a){this.traitEl.textContent=e,this.progressEl.textContent=`${i} / ${a}`,this.choicesEl.innerHTML=t.map((r,s)=>`
      <button type="button" class="btn btn-secondary cv-choice" data-choice="${s}">${r}</button>
    `).join("")}dispose(){this.container.innerHTML=""}}const va=[{trait:"Justice",definition:"Giving reward and punishment according to the merits of the case in question.",distractors:["Following orders without question.","Winning at all costs in every situation.","Keeping your uniform squared away at all times."]},{trait:"Judgment",definition:"The ability to weigh facts and possible solutions on which to base sound decisions.",distractors:["Never admitting when you are wrong.","Making the fastest decision every time.","Deferring every decision to a senior Marine."]},{trait:"Dependability",definition:"The willing and voluntary support of the policies and orders of the chain of command.",distractors:["Doing only what is explicitly ordered.","Never volunteering for extra duty.","Keeping personal plans above unit commitments."]},{trait:"Integrity",definition:"Uprightness of character and soundness of moral principles; truthfulness and honesty.",distractors:["Telling people what they want to hear.","Protecting your friends even when they are wrong.","Avoiding paperwork whenever possible."]},{trait:"Decisiveness",definition:"Ability to make decisions promptly and to announce them in a clear, forceful manner.",distractors:["Waiting until every detail is perfect.","Letting the squad vote on tactical calls.","Changing your mind after every new report."]},{trait:"Tact",definition:"The ability to deal with others without creating offense.",distractors:["Saying exactly what you think at all times.","Avoiding difficult conversations entirely.","Using sarcasm to keep junior Marines in line."]}];function bS(n){const e=[...n];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function vS(n,e){return new Promise(t=>{const i=new yS(n);let a=0,r=0;function s(){if(a>=va.length){i.dispose();const d=r/va.length;t(he(d,["intelligence","leadership"],{correct:r,total:va.length}));return}const o=va[a],l=bS([o.definition,...o.distractors]),c=l.indexOf(o.definition);i.showRound(o.trait,l,a+1,va.length),i.choicesEl.addEventListener("click",function d(u){const h=u.target.closest("[data-choice]");h&&(i.choicesEl.removeEventListener("click",d),Number(h.dataset.choice)===c&&r++,a++,s())},{once:!1})}s()})}function _S(n){return n>=10?1:n>=8?.9:n>=6?.75:n>=4?.6:n>=2?.4:n>0?.25:0}function xS(n,e){const t=new Up(n,e);return Op(t,e).then(i=>{t.dispose();const a=_S(i.reps);return he(a,["strength","endurance"],{reps:i.reps,perfectReps:i.perfectReps,energyLeft:i.energyLeft})})}function wS(n){return(Math.max(Rt,Math.min(ai,n))-Rt)/(ai-Rt)}function Wp(n,e){const t=n?.stats??{},i=e.map(a=>wS(t[a]??10));return i.reduce((a,r)=>a+r,0)/i.length}function Kt(n,e,t=500,i=900){const a=Wp(n,e);return Math.round(t+a*(i-t))}function ri({onTick:n,durationMs:e,onFinish:t}){let i=!0,a=0,r=0;const s=()=>{i&&(i=!1,t?.())},o=l=>{if(!i)return;a||(a=l,r=l);const c=l-a,d=l-r;if(r=l,e!=null&&c>=e){s();return}n(l,c,d),i&&requestAnimationFrame(o)};return requestAnimationFrame(o),{stop:s,isRunning:()=>i}}function yt(n,e){const t=i=>{n.includes(i.code)&&(i.preventDefault(),e(i.code,i))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)}function ot(n,{title:e="",hint:t=""}={}){return n.innerHTML=`
    <div class="mg-scene">
      <div class="mg-title" id="mg-title">${e}</div>
      <div class="mg-main" id="mg-main"></div>
      <div class="mg-hud">
        <span id="mg-progress"></span>
        <span class="mg-flash" id="mg-flash"></span>
      </div>
      <div class="mg-meter-track"><div class="mg-meter-bar" id="mg-meter"></div></div>
      <div class="mg-hint" id="mg-hint">${t}</div>
    </div>
  `,{main:n.querySelector("#mg-main"),progress:n.querySelector("#mg-progress"),flash:n.querySelector("#mg-flash"),meter:n.querySelector("#mg-meter"),hint:n.querySelector("#mg-hint"),title:n.querySelector("#mg-title"),dispose:()=>{n.innerHTML=""}}}function et(n,e,t){n.progress&&(n.progress.textContent=`${e} / ${t}`)}function mi(n,e){n.meter&&(n.meter.style.width=`${Math.max(0,Math.min(1,e))*100}%`)}function Ie(n,e){n.flash&&(n.flash.textContent=e==="hit"?"HIT":"MISS",n.flash.className=`mg-flash mg-flash--${e} mg-flash--show`,setTimeout(()=>{n.flash.className="mg-flash"},400))}function gt(n,e,{prompts:t,statKeys:i,title:a,hint:r}){return new Promise(s=>{const o=ot(n,{title:a,hint:r});let l=0,c=0;const d=Kt(e,i),u=()=>{if(o._unbindOne?.(),l>=t.length){h(),o.dispose(),s({hits:c,total:t.length,score:c/t.length});return}const f=t[l];o.main.innerHTML=`<div class="mg-prompt">${f.label}</div><div class="mg-key-hint">Press <kbd>${f.keyLabel}</kbd></div>`,et(o,l,t.length);let g=!1;const b=setTimeout(()=>{g||(Ie(o,"miss"),l++,setTimeout(u,300))},d),m=M=>{g||(M===f.code?(g=!0,clearTimeout(b),c++,Ie(o,"hit"),l++,setTimeout(u,250)):t.some(T=>T.code===M)&&(g=!0,clearTimeout(b),Ie(o,"miss"),l++,setTimeout(u,250)))},p=yt(t.map(M=>M.code),m);o._unbindOne=p};let h=()=>{};u(),h=()=>o._unbindOne?.()})}function zt(n,{items:e,correctOrder:t,timeMs:i,title:a,hint:r}){return new Promise(s=>{const o=ot(n,{title:a,hint:r});let l=[],c=i;const d=[...e].sort(()=>Math.random()-.5),u=()=>{o.main.innerHTML=d.map((b,m)=>`<button type="button" class="btn btn-secondary mg-seq-btn" data-i="${m}">${b}</button>`).join(""),o.hint.textContent=`Select in order (${l.length}/${t.length}) · ${Math.ceil(c/1e3)}s`},h=ri({durationMs:i,onTick:(b,m)=>{c=i-m,o.hint.textContent=`Select in order (${l.length}/${t.length}) · ${Math.ceil(c/1e3)}s`},onFinish:f});function f(){h.stop(),o.main.removeEventListener("click",g);const b=l.filter((m,p)=>m===t[p]).length;o.dispose(),s({score:b/t.length,correct:b,total:t.length})}function g(b){const m=b.target.closest("[data-i]");if(!m)return;const p=d[Number(m.dataset.i)];l.push(p),m.disabled=!0,et(o,l.length,t.length),l.length>=t.length&&f()}u(),o.main.addEventListener("click",g),et(o,0,t.length)})}function Ii(n,{rounds:e,title:t,hint:i}){return new Promise(a=>{const r=ot(n,{title:t,hint:i});let s=0,o=0;function l(){if(s>=e.length){r.dispose(),a({score:o/e.length,correct:o,total:e.length});return}const c=e[s],d=[...c.choices].sort(()=>Math.random()-.5);r.main.innerHTML=`
        <div class="mg-prompt">${c.prompt}</div>
        <div class="mg-choices">${d.map((u,h)=>`<button type="button" class="btn btn-secondary mg-choice" data-i="${d.indexOf(u)}">${u}</button>`).join("")}</div>`,et(r,s+1,e.length),r.main.onclick=u=>{const h=u.target.closest(".mg-choice");h&&(r.main.onclick=null,Number(h.dataset.i)===c.answer&&o++,s++,l())}}l()})}async function Hp(n,e){return new Promise(t=>{const i=ot(n,{title:"Steady Aim",hint:"Hold <kbd>Space</kbd> to steady · <kbd>F</kbd> to fire when aligned"});let a=0,r=0;const s=6;let o=50,l=1.5,c=1,d=!1;i.main.innerHTML='<div class="mg-aim-ring"><div class="mg-reticle" id="mg-reticle"></div></div>';const u=i.main.querySelector("#mg-reticle"),h=ri({durationMs:3e4,onTick:(b,m,p)=>{d?(c-=.003*(p/16),c<=0&&(d=!1,c=0)):(o+=l*(p/16),(o>85||o<15)&&(l*=-1)),u.style.left=`${o}%`,mi(i,c)},onFinish:g}),f=yt(["Space","KeyF"],b=>{b==="Space"&&c>.1&&(d=!0),b==="KeyF"&&a<s&&(a++,Math.abs(o-50)<12?(r++,Ie(i,"hit")):Ie(i,"miss"),et(i,a,s),d=!1,a>=s&&g())});function g(){h.stop(),f(),i.dispose(),t(he(r/s,["dexterity","intelligence"],{hits:r,total:s}))}et(i,0,s)})}async function SS(n,e){const t=Array.from({length:14},(a,r)=>({label:r%2===0?"LEFT STRIDE":"RIGHT STRIDE",code:r%2===0?"KeyJ":"KeyK",keyLabel:r%2===0?"J":"K"})),i=await gt(n,e,{prompts:t,statKeys:["endurance"],title:"PFT Pace Run",hint:"Alternate J and K to stay in stride"});return he(i.score,["endurance"],i)}const yc=["Clear rifle","Remove bolt","Remove charging handle","Remove buffer","Separate upper/lower","Remove trigger group"];async function MS(n,e){const t=await zt(n,{items:yc,correctOrder:yc,timeMs:2e4+Kt(e,["intelligence","dexterity"],0,8e3),title:"Field Strip",hint:"Click parts in correct disassembly order"});return he(t.score,["intelligence","dexterity"],t)}async function TS(n,e){const i=await gt(n,e,{prompts:[{label:"FREESTYLE",code:"KeyF",keyLabel:"F"},{label:"BREATHE",code:"Space",keyLabel:"Space"},{label:"FREESTYLE",code:"KeyF",keyLabel:"F"},{label:"BREATHE",code:"Space",keyLabel:"Space"},{label:"FREESTYLE",code:"KeyF",keyLabel:"F"},{label:"BREATHE",code:"Space",keyLabel:"Space"},{label:"FREESTYLE",code:"KeyF",keyLabel:"F"},{label:"TURN",code:"KeyT",keyLabel:"T"}],statKeys:["endurance"],title:"Swim Qual",hint:"F to stroke · Space to breathe at the wall"});return he(i.score,["endurance"],i)}async function ES(n,e){const i=await gt(n,e,{prompts:[{label:"DROP HELMET",code:"KeyH",keyLabel:"H"},{label:"DROP FLAK",code:"KeyF",keyLabel:"F"},{label:"DROP BELT",code:"KeyB",keyLabel:"B"},{label:"DROP BOOTS",code:"KeyN",keyLabel:"N"},{label:"DROP TROUSERS",code:"KeyT",keyLabel:"T"},{label:"SURFACE",code:"Space",keyLabel:"Space"}],statKeys:["dexterity","endurance"],title:"Gear Shed",hint:"Shed gear in order before air runs out"});return he(i.score,["dexterity","endurance"],i)}async function RS(n,e){return new Promise(t=>{const i=ot(n,{title:"Log Team Lift",hint:"Press <kbd>Space</kbd> when all markers align in the green zone"});let a=0,r=0;const s=8,o=[0,0,0,0],l=15+Wp(e,["leadership"])*10;i.main.innerHTML=`<div class="mg-log-lane">${o.map((u,h)=>`<div class="mg-log-marker" id="m${h}"></div>`).join("")}</div><div class="mg-log-zone"></div>`;const c=ri({onTick:()=>{o.forEach((u,h)=>{o[h]=(o[h]+2+h*.3)%100;const f=i.main.querySelector(`#m${h}`);f&&(f.style.left=`${o[h]}%`)})}}),d=yt(["Space"],()=>{const u=o.every(h=>h>40&&h<40+l);a++,u?(r++,Ie(i,"hit")):Ie(i,"miss"),et(i,a,s),a>=s&&(c.stop(),d(),i.dispose(),t(he(r/s,["strength","leadership"],{hits:r,total:s})))});et(i,0,s)})}async function AS(n,e){const i=await gt(n,e,{prompts:[{label:"VAULT",code:"KeyV",keyLabel:"V"},{label:"CRAWL",code:"KeyC",keyLabel:"C"},{label:"CLIMB",code:"KeyL",keyLabel:"L"},{label:"SWING",code:"KeyS",keyLabel:"S"},{label:"VAULT",code:"KeyV",keyLabel:"V"},{label:"CRAWL",code:"KeyC",keyLabel:"C"},{label:"CLIMB",code:"KeyL",keyLabel:"L"},{label:"FINISH",code:"Enter",keyLabel:"Enter"}],statKeys:["dexterity"],title:"Fire Team Course",hint:"V vault · C crawl · L climb · S swing"});return he(i.score,["dexterity"],i)}const CS=[{bearing:"045°",paces:200,answer:0,choices:["NE ridge","SW draw","East trail","North creek"]},{bearing:"270°",paces:150,answer:2,choices:["West fence","South road","West boulder","East hill"]},{bearing:"180°",paces:100,answer:1,choices:["North CP","South ravine","East pond","West tower"]},{bearing:"315°",paces:250,answer:3,choices:["SE field","NW path","East bridge","NW checkpoint"]},{bearing:"090°",paces:175,answer:0,choices:["East trail marker","West bunker","South pit","North gate"]}];async function IS(n,e){const t=CS.map(a=>({prompt:`Bearing ${a.bearing} · ${a.paces} paces — which checkpoint?`,choices:a.choices,answer:a.answer})),i=await Ii(n,{rounds:t,title:"Land Navigation",hint:"Pick the correct checkpoint for each leg"});return he(i.score,["intelligence"],i)}const bc=["Assess scene","Check breathing","Stop bleeding","Treat shock","Evacuate"];async function PS(n,e){let t=0;for(let i=0;i<3;i++){const a=await zt(n,{items:bc,correctOrder:bc,timeMs:15e3,title:`Casualty ${i+1}`,hint:"ABC sequence — assess, breathing, bleeding, shock, evac"});t+=a.score}return he(t/3,["intelligence"],{casualties:3})}async function DS(n,e){const i=await gt(n,e,{prompts:[{label:"JAB",code:"KeyJ",keyLabel:"J"},{label:"BLOCK",code:"KeyB",keyLabel:"B"},{label:"CROSS",code:"KeyC",keyLabel:"C"},{label:"BLOCK",code:"KeyB",keyLabel:"B"},{label:"HOOK",code:"KeyH",keyLabel:"H"},{label:"BLOCK",code:"KeyB",keyLabel:"B"},{label:"UPPERCUT",code:"KeyU",keyLabel:"U"},{label:"BLOCK",code:"KeyB",keyLabel:"B"}],statKeys:["strength","dexterity"],title:"MCMAP Sparring",hint:"Execute strikes and blocks on command"});return he(i.score,["strength","dexterity"],i)}async function LS(n,e){return new Promise(t=>{const i=ot(n,{title:"Pugil Duel",hint:"H high block · L low block · D dodge feint"}),a=[{tell:"HIGH STRIKE",counter:"KeyH",label:"H"},{tell:"LOW STRIKE",counter:"KeyL",label:"L"},{tell:"FEINT",counter:"KeyD",label:"D"},{tell:"HIGH STRIKE",counter:"KeyH",label:"H"},{tell:"LOW STRIKE",counter:"KeyL",label:"L"}];let r=0,s=0;const o=Kt(e,["strength","dexterity"]);function l(){if(r>=a.length){c(),i.dispose(),t(he(s/a.length,["strength","dexterity"],{wins:s,total:a.length}));return}const d=a[r];i.main.innerHTML=`<div class="mg-prompt">Opponent: ${d.tell}</div><div class="mg-key-hint">Counter: <kbd>${d.label}</kbd></div>`,et(i,r+1,a.length);let u=!1;const h=setTimeout(()=>{u||(Ie(i,"miss"),r++,setTimeout(l,300))},o),f=g=>{u||(u=!0,clearTimeout(h),g===d.counter?(s++,Ie(i,"hit")):Ie(i,"miss"),r++,setTimeout(l,300))};i._handler=f}const c=yt(["KeyH","KeyL","KeyD"],d=>i._handler?.(d));l()})}async function kS(n,e){const i=await gt(n,e,{prompts:[{label:"THRUST",code:"KeyT",keyLabel:"T"},{label:"SLASH",code:"KeyS",keyLabel:"S"},{label:"THRUST",code:"KeyT",keyLabel:"T"},{label:"SLASH",code:"KeyS",keyLabel:"S"},{label:"THRUST",code:"KeyT",keyLabel:"T"},{label:"SLASH",code:"KeyS",keyLabel:"S"},{label:"THRUST",code:"KeyT",keyLabel:"T"},{label:"FINISH",code:"Enter",keyLabel:"Enter"}],statKeys:["strength"],title:"Bayonet Course",hint:"T thrust · S slash — keep the rhythm"});return he(i.score,["strength"],i)}const NS=[{prompt:'General Order 1: "To take charge of this post..." — finish:',choices:["...and all government property in view.","...and guard the chow hall.","...and report to the D.I. only.","...and sleep when able."],answer:0},{prompt:'General Order 2: "To walk my post in a military manner..." — finish:',choices:["...keeping always on the alert.","...only when the D.I. is watching.","...at a relaxed pace.","...with headphones permitted."],answer:0},{prompt:'General Order 3: "To report all violations..." — finish:',choices:["...of orders I am instructed to enforce.","...to my roommate only.","...at the end of the week.","...if I feel like it."],answer:0},{prompt:'General Order 4: "To repeat all calls..." — finish:',choices:["...from posts more distant from the guardhouse than my own.","...only during daylight.","...when I have spare time.","...to the recruit on my left."],answer:0},{prompt:'General Order 5: "To quit my post only when properly..." — finish:',choices:["...relieved.","...tired.","...the D.I. says so.","...chow is served."],answer:0}];async function FS(n,e){const t=await Ii(n,{rounds:NS,title:"General Orders Exam",hint:"Complete each order with the correct phrase"});return he(t.score,["intelligence"],t)}async function OS(n,e){return new Promise(t=>{const i=ot(n,{title:"Uniform Inspection",hint:"Click every discrepancy before time runs out"}),a=[{id:"gig",label:"Gig line off",x:45,y:55},{id:"boots",label:"Boots unbloused",x:30,y:80},{id:"cover",label:"Cover tilted",x:50,y:15},{id:"ribbon",label:"Ribbon out of order",x:60,y:45}],r=new Set;i.main.innerHTML=`<div class="mg-inspect-board">${a.map(l=>`<button type="button" class="mg-inspect-spot" data-id="${l.id}" style="left:${l.x}%;top:${l.y}%"></button>`).join("")}</div>`;const s=ri({durationMs:12e3,onFinish:()=>{i.main.removeEventListener("click",o),i.dispose(),t(he(r.size/a.length,["leadership","intelligence"],{found:r.size,total:a.length}))}});function o(l){const c=l.target.closest("[data-id]");c&&(r.add(c.dataset.id),c.classList.add("mg-inspect-found"),et(i,r.size,a.length),r.size>=a.length&&s.stop())}i.main.addEventListener("click",o),et(i,0,a.length)})}async function US(n,e){return new Promise(t=>{const i=ot(n,{title:"Table 1 Qualification",hint:"Arrow keys adjust wind · F to fire at each position"}),a=["STANDING","KNEELING","PRONE"];let r=0,s=0,o=0;function l(){i.main.innerHTML=`
        <div class="mg-prompt">${a[r]}</div>
        <div class="mg-wind">Wind: ${o>0?"+":""}${o} · ← → adjust · F fire</div>
        <div class="mg-aim-ring"><div class="mg-reticle" style="left:${50+o*5}%"></div></div>`,et(i,r+1,a.length)}const c=yt(["ArrowLeft","ArrowRight","KeyF"],d=>{if(d==="ArrowLeft"&&(o=Math.max(-3,o-1)),d==="ArrowRight"&&(o=Math.min(3,o+1)),d==="KeyF"){const u=[1,-1,0][r],h=Math.abs(o-u);h===0?(s+=3,Ie(i,"hit")):h===1?(s+=2,Ie(i,"hit")):Ie(i,"miss"),r++,o=0,r>=a.length?(c(),i.dispose(),t(he(s/9,["dexterity","intelligence"],{points:s,max:9}))):l()}else l()});l()})}async function zS(n,e){return new Promise(t=>{const i=ot(n,{title:"Night Infiltration",hint:"W to advance quietly · freeze when flare pops (do nothing)"});let a=0,r=!1,s=!1;i.main.innerHTML='<div class="mg-night-bar"><div class="mg-night-fill" id="mg-night-fill"></div></div><div class="mg-flare" id="mg-flare"></div>';const o=i.main.querySelector("#mg-night-fill"),l=i.main.querySelector("#mg-flare"),c=ri({onTick:()=>{s&&!r&&(a+=.3,o.style.width=`${Math.min(100,a)}%`),a>=100&&f()}});let d=setInterval(()=>{r=!0,l.classList.add("mg-flare--on"),setTimeout(()=>{s&&(a=Math.max(0,a-15),Ie(i,"miss")),r=!1,l.classList.remove("mg-flare--on")},1500)},4e3);const u=yt(["KeyW"],()=>{r||(s=!0)}),h=g=>{g.code==="KeyW"&&(s=!1)};window.addEventListener("keyup",h);function f(){clearInterval(d),c.stop(),u(),window.removeEventListener("keyup",h),i.dispose(),t(he(a/100,["dexterity"],{progress:a}))}})}async function BS(n,e){return new Promise(t=>{const i=ot(n,{title:"Full Gear Hike",hint:"W to march · Space to help a falling teammate (costs stamina)"});let a=0,r=1,s=!1,o=0;i.main.innerHTML='<div class="mg-hike-bar"><div class="mg-hike-fill" id="mg-hike-fill"></div></div>';const l=i.main.querySelector("#mg-hike-fill"),c=ri({onTick:(f,g,b)=>{s&&(a+=.15*(b/16),r-=.001*(b/16),l.style.width=`${Math.min(100,a)}%`,mi(i,r)),r<=0&&(r=0,s=!1),a>=100&&h(.85)}});let d=setInterval(()=>{o<3&&Math.random()>.5&&(o++,i.hint.textContent="Buddy falling back! Press Space to help (+LDR, -stamina)",i._helpNeeded=!0)},5e3);const u=yt(["KeyW","Space"],f=>{f==="KeyW"&&r>0&&(s=!0),f==="Space"&&i._helpNeeded&&(i._helpNeeded=!1,r-=.15,i.hint.textContent="Good leadership. Keep marching.",i._ldrBonus=(i._ldrBonus??0)+1)});window.addEventListener("keyup",f=>{f.code==="KeyW"&&(s=!1)});function h(f){clearInterval(d),c.stop(),u();const g=(i._ldrBonus??0)*.05;i.dispose(),t(he(Math.min(1,f+g),["endurance","leadership"],{progress:a,ldrHelps:i._ldrBonus??0}))}mi(i,1)})}async function WS(n,e){const t=["Plank A","Rope swing","Barrel roll","Plank B","Team pull"],i=await zt(n,{items:t,correctOrder:t,timeMs:18e3,title:"Reaction Course",hint:"Sequence the crossing in the fewest correct moves"});return he(i.score,["intelligence","leadership"],i)}async function HS(n,e){const t=await Hp(n);return he(t.score*.9,["endurance","strength"],{station:"day",...t.details})}async function GS(n,e){const i=await gt(n,e,{prompts:[{label:"FREEZE",code:"Space",keyLabel:"Space"},{label:"MOVE",code:"KeyW",keyLabel:"W"},{label:"NAV LEFT",code:"KeyA",keyLabel:"A"},{label:"NAV RIGHT",code:"KeyD",keyLabel:"D"},{label:"FREEZE",code:"Space",keyLabel:"Space"},{label:"MOVE",code:"KeyW",keyLabel:"W"}],statKeys:["endurance","intelligence"],title:"Crucible Night",hint:"Night movement — freeze on command"});return he(i.score,["endurance","intelligence"],i)}async function VS(n,e){return new Promise(t=>{const i=ot(n,{title:"The Reaper",hint:"W to hike — stamina barely recovers. Finish to pass."});let a=0,r=.6,s=!1;i.main.innerHTML='<div class="mg-hike-bar"><div class="mg-hike-fill" id="mg-reaper-fill"></div></div>';const o=i.main.querySelector("#mg-reaper-fill"),l=ri({onTick:(u,h,f)=>{if(s&&r>0?(a+=.12*(f/16),r-=.002*(f/16)):r=Math.min(.6,r+3e-4*(f/16)),o.style.width=`${Math.min(100,a)}%`,mi(i,r),a>=100){const g=r>.2?.95:.65;d(g)}}}),c=yt(["KeyW"],()=>{r>.05&&(s=!0)});window.addEventListener("keyup",u=>{u.code==="KeyW"&&(s=!1)});function d(u){l.stop(),c(),i.dispose(),t(he(u,["endurance","leadership"],{progress:a}))}mi(i,r)})}async function qS(n,e){const i=["Eggs","Bacon","Pancakes","Sausage","Toast","Fruit","Juice","Coffee","Eggs","Bacon"].map(r=>({label:`Grab ${r}`,code:"Space",keyLabel:"Space"})),a=await gt(n,e,{prompts:i,statKeys:["endurance"],title:"Warrior Breakfast",hint:"Press Space when the called item appears — generous windows"});return he(Math.max(.7,a.score),["endurance"],a)}async function KS(n,e){const i=await Ii(n,{rounds:[{prompt:"Issued: 2 canteens. Shelf shows:",choices:["2 canteens","1 canteen","3 canteens","0 canteens"],answer:0},{prompt:"Issued: 1 flak jacket. Shelf shows:",choices:["2 jackets","1 jacket","0 jackets","1 jacket + cover"],answer:1},{prompt:"Issued: 3 magazines. Shelf shows:",choices:["3 magazines","2 magazines","4 magazines","1 magazine"],answer:0},{prompt:"Issued: 1 E-tool. Shelf shows:",choices:["1 E-tool","2 E-tools","0 E-tools","1 shovel"],answer:0},{prompt:"Issued: 2 pairs socks. Shelf shows:",choices:["1 pair","2 pairs","3 pairs","0 pairs"],answer:1}],title:"Gear Turn-In",hint:"Match issued quantities to shelf counts"});return he(i.score,["intelligence"],i)}async function $S(n,e){const i=await gt(n,e,{prompts:[{label:"LEFT FACE",code:"KeyL",keyLabel:"L"},{label:"RIGHT FACE",code:"KeyR",keyLabel:"R"},{label:"ABOUT FACE",code:"KeyA",keyLabel:"A"},{label:"FORWARD MARCH",code:"KeyM",keyLabel:"M"},{label:"HALT",code:"KeyH",keyLabel:"H"},{label:"LEFT FACE",code:"KeyL",keyLabel:"L"},{label:"RIGHT FACE",code:"KeyR",keyLabel:"R"},{label:"HALT",code:"KeyH",keyLabel:"H"},{label:"ABOUT FACE",code:"KeyA",keyLabel:"A"},{label:"HALT",code:"KeyH",keyLabel:"H"}],statKeys:["leadership","dexterity"],title:"Final Drill Eval",hint:"Execute from memory — no second chances on timing"});return he(i.score,["leadership"],i)}async function XS(n,e){const i=await Ii(n,{rounds:[{prompt:"What are the three core values?",choices:["Honor, Courage, Commitment","Duty, Honor, Country","Semper Fi","Adapt, Overcome"],answer:0},{prompt:"What does JJDIDTIEBUCKLE represent?",choices:["Leadership traits","Rifle parts","Chain of command","Uniform regs"],answer:0},{prompt:"Who is your Battalion Commander?",choices:["The senior officer present","My D.I.","The Sergeant Major","The President"],answer:0},{prompt:"What is your weapon condition?",choices:["Condition 4 until ordered","Always loaded","Condition 1 at all times","Unloaded in garrison"],answer:0},{prompt:"Purpose of the Crucible?",choices:["Test core values under stress","Extra PT","Punishment week","Family visit prep"],answer:0}],title:"Billet Board",hint:"Answer with composure — hesitation costs points"});return he(i.score,["leadership","intelligence"],i)}async function jS(n,e){return new Promise(t=>{const i=document.createElement("div");i.className="menu-overlay";const a=e.campaign?.readiness??0;i.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Family Day</h2>
        <p class="menu-subtitle">${e.name} — show them the depot</p>
        <p class="recruiter-copy">Your family sees a different person than the one who left home. Readiness: ${a}%.</p>
        <p class="recruiter-copy">You walk them past the Parade Deck, the Chow Hall, the barracks. They don't fully understand what you went through — but they see the pride.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="family-ok">Continue</button>
        </div>
      </div>`,document.body.appendChild(i),i.querySelector("#family-ok").addEventListener("click",()=>{i.remove(),t(he(.9,["leadership"],{narrative:!0}))},{once:!0})})}async function YS(n,e){const i=await gt(n,e,{prompts:[{label:"PRESENT ARMS",code:"KeyP",keyLabel:"P"},{label:"ORDER ARMS",code:"KeyO",keyLabel:"O"},{label:"EYES RIGHT",code:"KeyE",keyLabel:"E"},{label:"FORWARD MARCH",code:"KeyM",keyLabel:"M"},{label:"HALT",code:"KeyH",keyLabel:"H"},{label:"EGA CEREMONY",code:"Enter",keyLabel:"Enter"}],statKeys:["leadership"],title:"Graduation Parade",hint:"Final drill — then receive the Eagle, Globe, and Anchor"});return he(Math.max(.85,i.score),["leadership"],i)}const ZS=[{label:"GET ON THE FOOTPRINTS!",code:"Space",keyLabel:"Space"},{label:"EYES FRONT!",code:"KeyF",keyLabel:"F"},{label:"STAND AT ATTENTION!",code:"KeyA",keyLabel:"A"},{label:"HANDS AT YOUR SIDES!",code:"KeyH",keyLabel:"H"},{label:"CHIN UP!",code:"KeyC",keyLabel:"C"},{label:"DO NOT MOVE!",code:"KeyD",keyLabel:"D"}];async function JS(n,e){Math.round(Kt(e,["leadership","dexterity"],700,1100));const t=await gt(n,e,{prompts:ZS,statKeys:["leadership","dexterity"],title:"Yellow Footprints",hint:"Execute every command on the yellow footprints"});return he(t.score,["leadership","dexterity"],t)}const vc=["Haircut","Hygiene issue","Medical screening","Dental","Initial gear issue"];async function QS(n,e){const t=await zt(n,{items:vc,correctOrder:vc,timeMs:2e4,title:"Receiving Pipeline",hint:"Complete each station in the correct order"});return he(t.score,["endurance","intelligence"],t)}const eM=[{prompt:`The Senior Drill Instructor barks: "WHAT'S YOUR NAME, RECRUIT?"`,choices:["Sir, this recruit's name is [name], sir!","Uh... my name is...","Sir, recruit [name] reporting as ordered, sir!"],answer:0},{prompt:'"WHERE ARE YOU FROM?"',choices:["Sir, this recruit is from [hometown], sir!","Sir, the United States of America, sir!","Sir, MCRD San Diego, sir!"],answer:1},{prompt:'"WHY ARE YOU HERE?"',choices:["Sir, to become a United States Marine, sir!","Sir, because my recruiter said so, sir!","Sir, to get in shape, sir!"],answer:0},{prompt:'"DO YOU UNDERSTAND?"',choices:["Sir, yes sir!","Sir, no sir!","Sir, aye aye sir!"],answer:0}];async function tM(n,e){const t=await Ii(n,{rounds:eM,title:"Black Friday",hint:"Respond with proper bearing to your Senior Drill Instructor"}),i=Math.max(.5,t.score);return he(i,["leadership"],t)}const gs=[{call:"BLOUSE!",label:"Blouse",id:"blouse"},{call:"TROUSERS!",label:"Trousers",id:"trousers"},{call:"BOOTS!",label:"Boots",id:"boots"},{call:"COVER!",label:"Cover",id:"cover"},{call:"BELT!",label:"Belt",id:"belt"},{call:"SOCKS!",label:"Socks",id:"socks"}];async function iM(n,e){return new Promise(t=>{const i=ot(n,{title:"Dressing Drill",hint:"Click the correct gear when the D.I. calls it"});let a=0,r=0;const s=8;let o=0,l=null,c=null;function d(h){const f=[...gs].sort(()=>Math.random()-.5);i.main.innerHTML=`
        <div class="mg-prompt">${l.call}</div>
        <div class="mg-countdown" id="mg-countdown">${Math.ceil(o/1e3)}</div>
        <div class="mg-choices">${f.map(g=>`<button type="button" class="btn btn-secondary mg-choice" data-id="${g.id}">${g.label}</button>`).join("")}</div>`,i.main.onclick=g=>{const b=g.target.closest("[data-id]");!b||!l||(i.main.onclick=null,clearInterval(c),b.dataset.id===h?(r++,Ie(i,"hit")):Ie(i,"miss"),a++,setTimeout(u,400))}}function u(){if(a>=s){i.dispose(),t(he(r/s,["dexterity"],{hits:r,total:s}));return}l=gs[a%gs.length];const h=Kt(e,["dexterity"],1200,2e3);o=Math.max(600,h-a*80),et(i,a+1,s),d(l.id);const f=Date.now()+o;c=setInterval(()=>{o=f-Date.now();const g=i.main.querySelector("#mg-countdown");g&&(g.textContent=Math.max(0,Math.ceil(o/1e3))),o<=0&&(clearInterval(c),i.main.onclick=null,Ie(i,"miss"),a++,setTimeout(u,400))},100)}u()})}async function nM(n,e){const i=await gt(n,e,{prompts:[{label:"GRIP LEFT",code:"KeyJ",keyLabel:"J"},{label:"GRIP RIGHT",code:"KeyK",keyLabel:"K"},{label:"GRIP LEFT",code:"KeyJ",keyLabel:"J"},{label:"GRIP RIGHT",code:"KeyK",keyLabel:"K"},{label:"PULL UP",code:"Space",keyLabel:"Space"},{label:"GRIP LEFT",code:"KeyJ",keyLabel:"J"},{label:"GRIP RIGHT",code:"KeyK",keyLabel:"K"},{label:"MOUNT TOP",code:"Enter",keyLabel:"Enter"}],statKeys:["strength","dexterity"],title:"High Obstacle Course",hint:"J/K alternate grips · Space pull · Enter mount"});return he(i.score,["strength","dexterity"],i)}async function aM(n,e){return new Promise(t=>{const i=ot(n,{title:"Rappel Tower",hint:"Press B in the green band each bounce"});let a=0,r=0;const s=10;let o=50,l=1;const c=ri({onTick:(u,h,f)=>{o+=l*f*40,(o>=85||o<=15)&&(l*=-1),i.main.innerHTML=`
          <div class="mg-prompt">Bounce ${a+1} / ${s}</div>
          <div class="mg-meter-track"><div class="mg-meter-bar" style="width:${o}%;background:#6dff8a"></div></div>
          <div class="mg-key-hint">Press <kbd>B</kbd> in the green zone (40–70%)</div>`}}),d=yt(["KeyB"],()=>{a>=s||(o>=40&&o<=70?(r++,Ie(i,"hit")):Ie(i,"miss"),a++,et(i,a,s),a>=s&&(c.stop(),d(),i.dispose(),t(he(r/s,["dexterity"],{hits:r,total:s}))))})})}async function rM(n,e){return new Promise(t=>{const i=ot(n,{title:"Gas Chamber",hint:"Hold breath on GAS · Clear mask on CLEAR · Exhale on BREATHE"}),a=[{label:"GAS — HOLD BREATH",code:"Space",hold:!0},{label:"CLEAR — MASK OFF",code:"KeyC"},{label:"BREATHE — CONTROLLED EXHALE",code:"KeyB"},{label:"GAS — HOLD BREATH",code:"Space",hold:!0},{label:"CLEAR — MASK OFF",code:"KeyC"},{label:"BREATHE — CONTROLLED EXHALE",code:"KeyB"}];let r=0,s=0,o=100;function l(){if(r>=a.length){c(),i.dispose(),t(he(s/a.length,["endurance"],{hits:s,total:a.length}));return}const d=a[r];i.main.innerHTML=`<div class="mg-prompt">${d.label}</div><div class="mg-key-hint">Press <kbd>${d.code==="Space"?"Space":d.code.replace("Key","")}</kbd></div>`,et(i,r+1,a.length),mi(i,o/100);let u=!1;const h=setTimeout(()=>{u||(o=Math.max(0,o-20),Ie(i,"miss"),r++,setTimeout(l,300))},Kt(e,["endurance"],800,1400));i._onPhase=f=>{u||f===d.code&&(u=!0,clearTimeout(h),s++,Ie(i,"hit"),r++,setTimeout(l,250))}}const c=yt(["Space","KeyC","KeyB"],d=>i._onPhase?.(d));l()})}async function sM(n,e){return new Promise(t=>{const i=ot(n,{title:"Night Cleanup",hint:"Hold S to scrub · release on creaks"});let a=0,r=20,s=!1,o=!1;i.main.innerHTML=`<div class="mg-night-bar"><div class="mg-night-fill" id="nc-fill"></div></div><div class="mg-prompt">Noise: <span id="nc-noise">${r}</span>%</div>`;const l=i.main.querySelector("#nc-fill"),c=i.main.querySelector("#nc-noise"),d=ri({onTick:()=>{s&&!o&&(a+=.4,r=Math.min(100,r+.15),l.style.width=`${Math.min(100,a)}%`,c.textContent=Math.round(r),r>=100&&g(!1),a>=100&&g(!0))}}),u=setInterval(()=>{o=!0,i.hint.textContent="CREAK — freeze!",setTimeout(()=>{o=!1,i.hint.textContent="Hold S to scrub · release on creaks"},1200)},3500),h=b=>{b.code==="KeyS"&&!o&&(s=!0)},f=b=>{b.code==="KeyS"&&(s=!1)};window.addEventListener("keydown",h),window.addEventListener("keyup",f);function g(b){clearInterval(u),d.stop(),window.removeEventListener("keydown",h),window.removeEventListener("keyup",f),i.dispose(),t(he(b?.85:a/100,["dexterity"],{progress:a,noise:r}))}})}const oM=[{prompt:"How do you open the letter?",choices:["Tell them you're doing fine and training hard.","Admit it's harder than you expected but you're not quitting.","Brag about how easy boot camp is."],answer:1},{prompt:"What do you tell them about the D.I.?",choices:["He's tough but fair — you're learning.","You hate him and want to come home.","You don't mention the D.I. at all."],answer:0},{prompt:"How do you close?",choices:["Love you. I'll make you proud.","See you whenever.","Don't write back, too busy."],answer:0}];async function lM(n,e){const t=await Ii(n,{rounds:oM,title:"Letter Home",hint:"Compose your first letter — tone matters"});return he(Math.max(.6,t.score),["intelligence"],t)}const cM=[{prompt:"A care package arrives for your rack-mate. He offers to share.",choices:["Politely decline — contraband isn't worth it.","Take one piece and enjoy it quietly.","Report it to the D.I. immediately."],answer:0},{prompt:"Your mom sent cookies. The whole platoon smells them.",choices:["Share with your fire team after chow.","Hide them under your rack.","Eat them all yourself tonight."],answer:0},{prompt:"A letter says your girlfriend is moving on.",choices:["Read it alone, square yourself away, press on.","Throw a fit in the squad bay.","Ignore it and pretend it never came."],answer:0}];async function dM(n,e){const t=await Ii(n,{rounds:cM,title:"Mail Call",hint:"Packages and letters after the Crucible"});return he(Math.max(.65,t.score),["leadership"],t)}const _c=["Quarterdeck","Head","Racks","Windows","Gear locker"];async function uM(n,e){const t=await zt(n,{items:_c,correctOrder:_c,timeMs:18e3,title:"Field Day",hint:"Clean stations in order before the white-glove pass"});return he(t.score,["endurance","leadership"],t)}async function hM(n,e){return new Promise(t=>{const i=ot(n,{title:"Footlocker Inspection",hint:"Click every discrepancy before time runs out"}),a=[{id:"socks",x:25,y:70},{id:"boots",x:40,y:75},{id:"gig",x:55,y:40},{id:"locker",x:70,y:55},{id:"photos",x:35,y:25}],r=new Set;i.main.innerHTML=`<div class="mg-inspect-board">${a.map(c=>`<button type="button" class="mg-inspect-spot" data-id="${c.id}" style="left:${c.x}%;top:${c.y}%"></button>`).join("")}</div>`;const s=ri({durationMs:14e3,onFinish:o});function o(){i.main.removeEventListener("click",l),i.dispose(),t(he(r.size/a.length,["leadership","intelligence"],{found:r.size,total:a.length}))}function l(c){const d=c.target.closest("[data-id]");d&&(r.add(d.dataset.id),d.classList.add("mg-inspect-found"),et(i,r.size,a.length),r.size>=a.length&&s.stop())}i.main.addEventListener("click",l),et(i,0,a.length)})}const xc=[{label:"PUSH-UPS",keys:["KeyJ","KeyK"],alternates:!0},{label:"MOUNTAIN CLIMBERS",keys:["KeyJ","KeyK"],alternates:!0},{label:"SIDE STRADDLE HOPS",keys:["Space"],alternates:!1},{label:"PUSH-UPS",keys:["KeyJ","KeyK"],alternates:!0},{label:"MOUNTAIN CLIMBERS",keys:["KeyJ","KeyK"],alternates:!0}];async function pM(n,e){return new Promise(t=>{const i=ot(n,{title:"Incentive Training",hint:"Quarterdeck — keep pace in the red zone"});let a=0,r=50,s=0;const o=xc.length;let l=null;function c(){if(a>=o){d(),i.dispose(),t(he(s/o,["endurance","strength"],{hits:s,total:o}));return}const u=xc[a];i.main.innerHTML=`<div class="mg-prompt">${u.label}</div><div class="mg-key-hint">${u.alternates?"Alternate J / K rapidly":"Mash Space"}</div>`,et(i,a+1,o),r=40;let h=0;const f=12,g=setInterval(()=>{r=Math.max(0,r-2),mi(i,r/100),r<=0&&(clearInterval(g),Ie(i,"miss"),a++,setTimeout(c,300))},200);i._onKey=b=>{if(u.alternates){if(b!=="KeyJ"&&b!=="KeyK"||l===b)return;l=b}else if(b!=="Space")return;h++,r=Math.min(100,r+8),mi(i,r/100),h>=f&&(clearInterval(g),s++,Ie(i,"hit"),a++,l=null,setTimeout(c,300))}}const d=yt(["KeyJ","KeyK","Space"],u=>i._onKey?.(u));c()})}const fM=[{label:"MAN YOUR STATIONS!",code:"KeyM",keyLabel:"M"},{label:"CHECK YOUR GEAR!",code:"KeyG",keyLabel:"G"},{label:"STAND BY TO LAND!",code:"Space",keyLabel:"Space"},{label:"BOATS AWAY!",code:"KeyB",keyLabel:"B"},{label:"HIT THE BEACH!",code:"KeyH",keyLabel:"H"}];async function mM(n,e){const t=await gt(n,e,{prompts:fM,statKeys:["leadership","intelligence"],title:"Ship Out",hint:"Execute every command before the Higgins boats launch"});return he(t.score,["leadership","intelligence"],t)}const gM=[{label:"STAY LOW IN THE BOAT!",code:"KeyS",keyLabel:"S"},{label:"RAMP DOWN — GO!",code:"Space",keyLabel:"Space"},{label:"MOVE LEFT!",code:"KeyA",keyLabel:"A"},{label:"DODGE INCOMING!",code:"KeyD",keyLabel:"D"},{label:"HIT THE SAND!",code:"KeyH",keyLabel:"H"},{label:"GET OFF THE BEACH!",code:"KeyW",keyLabel:"W"}];async function yM(n,e){const t=await gt(n,e,{prompts:gM,statKeys:["dexterity","endurance"],title:"Beach Landing",hint:"Ride the Higgins boat in and get off the beach on the cadence"});return he(t.score,["dexterity","endurance"],t)}async function bM(n,e){return new Promise(t=>{const i=ot(n,{title:"Dig In",hint:"Alternate J and K to dig — keep the pace in the green band"});let a=0,r=0,s=30,o="";const l=12e3;Kt(e,["strength","endurance"],400,700),i.main.innerHTML=`
      <div class="mg-prompt">Digging foxhole — ${s} shovel strokes</div>
      <div class="mg-key-hint">Alternate <kbd>J</kbd> and <kbd>K</kbd></div>
    `;const c=ri({durationMs:l,onTick:(f,g)=>{mi(i,g/l),et(i,r,s)},onFinish:d});function d(){h(),c.stop(),i.dispose();const f=Math.min(1,r/s);t(he(f,["strength","endurance"],{hits:r,target:s}))}const h=yt(["KeyJ","KeyK"],f=>{if(!(f!=="KeyJ"&&f!=="KeyK")){if(f===o){Ie(i,"miss");return}o=f,a++,a%2===0&&(r++,Ie(i,"hit"),r>=s&&d())}});et(i,0,s)})}async function vM(n,e){return new Promise(t=>{const i=ot(n,{title:"Mortar Bracket",hint:"Arrow keys adjust range/deflection — Space to fire each volley"});let a=50,r=50,s=30+Math.floor(Math.random()*40),o=30+Math.floor(Math.random()*40),l=0,c=100;const d=5;function u(){const b=Math.abs(a-s)+Math.abs(r-o);i.main.innerHTML=`
        <div class="mg-prompt">Adjust fire — bracket the target</div>
        <div class="mg-mortar-grid">
          <div>Range: <strong>${a}</strong> (target ~${s})</div>
          <div>Deflection: <strong>${r}</strong> (target ~${o})</div>
          <div>Bracket: <strong>${b}</strong> mils off</div>
        </div>
        <div class="mg-key-hint">↑↓ range · ←→ deflection · <kbd>Space</kbd> fire</div>
      `,et(i,l,d)}function h(){const b=Math.abs(a-s)+Math.abs(r-o);if(c=Math.min(c,b),l++,Ie(i,b<=10?"hit":"miss"),s+=Math.floor(Math.random()*11)-5,o+=Math.floor(Math.random()*11)-5,s=Math.max(10,Math.min(90,s)),o=Math.max(10,Math.min(90,o)),l>=d){g(),i.dispose();const m=Math.max(0,1-c/60);t(he(m,["intelligence","dexterity"],{bestDistance:c,volleys:l}))}else u()}const g=yt(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"],b=>{b==="ArrowUp"&&(a=Math.min(90,a+5)),b==="ArrowDown"&&(a=Math.max(10,a-5)),b==="ArrowRight"&&(r=Math.min(90,r+5)),b==="ArrowLeft"&&(r=Math.max(10,r-5)),b==="Space"&&h(),u()});u()})}async function _M(n,e){return new Promise(t=>{const i=ot(n,{title:"Sniper Alley",hint:"Press F on hostile movement — do NOT fire on friendlies (green flash)"});let a=0,r=0,s=0;const o=8;let l="hostile",c=!1,d=null;function u(){if(s>=o){f(),i.dispose();const b=a/o;t(he(b,["dexterity","intelligence"],{hits:a,misses:r}));return}s++,l=Math.random()<.65?"hostile":"friendly",c=!0;const g=Kt(e,["dexterity","intelligence"],600,1200);i.main.innerHTML=`
        <div class="mg-prompt ${l==="hostile"?"mg-prompt--hostile":"mg-prompt--friendly"}">
          ${l==="hostile"?"MOVEMENT — HOSTILE!":"MOVEMENT — FRIENDLY!"}
        </div>
        <div class="mg-key-hint">${l==="hostile"?"Press <kbd>F</kbd> to engage":"Hold fire — do nothing"}</div>
      `,et(i,s,o),d=setTimeout(()=>{c&&(l==="hostile"&&r++,Ie(i,l==="hostile"?"miss":"hit"),c=!1,setTimeout(u,400))},g)}const f=yt(["KeyF"],g=>{!c||g!=="KeyF"||(c=!1,clearTimeout(d),l==="hostile"?(a++,Ie(i,"hit")):(r++,Ie(i,"miss")),setTimeout(u,400))});u()})}const wc=["Ammo crates","Water cans","K-rations","Medical kit","Bandoliers","Mortar rounds"];async function xM(n,e){const t=await zt(n,{items:wc,correctOrder:wc,timeMs:18e3,title:"Supply Run",hint:"Load supplies in the correct order before the patrol moves out"});return he(t.score,["endurance","strength"],t)}const Sc=["Assess casualty","Stop bleeding","Open airway","Treat shock","Evacuate to aid station"];async function wM(n,e){const t=await zt(n,{items:Sc,correctOrder:Sc,timeMs:16e3,title:"Field Medic",hint:"Triage and treat casualties in the correct order"});return he(t.score,["intelligence"],t)}const Mc=["Locate pipe","Sink base in ash","First pipe section","Second pipe section","Attach the flag"],SM=[{label:"MARINES — HEAVE!",code:"Space",keyLabel:"Space"},{label:"AGAIN — HEAVE HO!",code:"Space",keyLabel:"Space"},{label:"SECURE THE BASE!",code:"KeyS",keyLabel:"S"},{label:"COLORS ARE UP!",code:"Enter",keyLabel:"Enter"}];async function MM(n,e){const t=await zt(n,{items:Mc,correctOrder:Mc,timeMs:2e4,title:"Raising the Colors",hint:"Assemble the flagpole on Mt. Suribachi"}),i=await gt(n,e,{prompts:SM,statKeys:["leadership","dexterity"],title:"Raising the Flag",hint:"Six Marines, one pole — hoist on the cadence"}),a=(t.score+i.score)/2;return he(a,["leadership","dexterity"],{assembly:t,hoist:i})}const Tc=["Check extremities","Rewarm gradually","Dry socks and boots","No rubbing — tissue damage","Evacuate to aid station"];async function TM(n,e){const t=await zt(n,{items:Tc,correctOrder:Tc,timeMs:18e3,title:"Frostbite Triage",hint:"Treat frostbite casualties in the correct order"});return he(t.score,["intelligence"],t)}const EM=[{label:"WORK THE BOLT!",code:"KeyB",keyLabel:"B"},{label:"HAND-WARM THE ACTION!",code:"KeyH",keyLabel:"H"},{label:"DRY-FIRE CHECK!",code:"KeyD",keyLabel:"D"},{label:"CYCLE AND CLEAR!",code:"KeyC",keyLabel:"C"},{label:"RIFLE IS HOT!",code:"Enter",keyLabel:"Enter"}];async function RM(n,e){const t=await gt(n,e,{prompts:EM,statKeys:["dexterity","intelligence"],title:"Frozen Weapons",hint:"Keep the M1 firing in sub-zero temperatures"});return he(t.score,["dexterity","intelligence"],t)}async function AM(n,e){return new Promise(t=>{const i=ot(n,{title:"Fighting Withdrawal",hint:"W to advance · freeze on flare · Space to help a straggler"});let a=0,r=1,s=!1,o=!1,l=!1,c=0;i.main.innerHTML='<div class="mg-hike-bar"><div class="mg-hike-fill" id="mg-hike-fill"></div></div>';const d=i.main.querySelector("#mg-hike-fill"),u=ri({onTick:(p,M,T)=>{s&&!o&&(a+=.12*(T/16),r-=.0012*(T/16),d.style.width=`${Math.min(100,a)}%`,mi(i,r)),r<=0&&(r=0,s=!1),a>=100&&m()}});let h=setInterval(()=>{Math.random()>.55&&(o=!0,s=!1,i.hint.textContent="FLARE — FREEZE!",setTimeout(()=>{o=!1,i.hint.textContent="W to advance · Space to help straggler"},1500))},4500),f=setInterval(()=>{Math.random()>.6&&(l=!0,i.hint.textContent="Marine falling out! Press Space to help (+LDR, -stamina)")},6e3);const g=yt(["KeyW","Space"],p=>{p==="KeyW"&&r>0&&!o&&(s=!0),p==="Space"&&l&&(l=!1,r-=.12,c+=1,i.hint.textContent="Good leadership. Keep the column moving.")}),b=p=>{p.code==="KeyW"&&(s=!1)};window.addEventListener("keyup",b);function m(){clearInterval(h),clearInterval(f),u.stop(),g(),window.removeEventListener("keyup",b);const p=Math.min(1,.75+c*.08);i.dispose(),t(he(p,["endurance","leadership"],{progress:a,ldrBonus:c}))}mi(i,1),et(i,0,1)})}const Ec=["Position truck","Offload treadway","Align first section","Bolt sections","Guide vehicles across"];async function CM(n,e){const t=await zt(n,{items:Ec,correctOrder:Ec,timeMs:2e4,title:"Bridge Repair",hint:"Assemble treadway sections before the column is cut off"});return he(t.score,["intelligence","strength"],t)}async function IM(n,e){return new Promise(t=>{const i=ot(n,{title:"Incoming Barrage",hint:"Press D to dive on INCOMING — hold on ALL CLEAR"});let a=0,r=0,s=0;const o=8;let l="incoming",c=!1,d=null;function u(){if(s>=o){f(),i.dispose();const b=a/o;t(he(b,["dexterity","endurance"],{hits:a,misses:r}));return}s++,l=Math.random()<.55?"incoming":"clear",c=!0;const g=Kt(e,["dexterity","endurance"],500,1e3);i.main.innerHTML=`
        <div class="mg-prompt ${l==="incoming"?"mg-prompt--hostile":"mg-prompt--friendly"}">
          ${l==="incoming"?"INCOMING!":"ALL CLEAR"}
        </div>
        <div class="mg-key-hint">${l==="incoming"?"Press <kbd>D</kbd> to dive":"Hold position — do nothing"}</div>
      `,et(i,s,o),d=setTimeout(()=>{c&&(l==="incoming"&&r++,Ie(i,l==="incoming"?"miss":"hit"),c=!1,setTimeout(u,400))},g)}const f=yt(["KeyD"],g=>{!c||g!=="KeyD"||(c=!1,clearTimeout(d),l==="incoming"?(a++,Ie(i,"hit")):(r++,Ie(i,"miss")),setTimeout(u,400))});u()})}const Rc=["Fill sandbags","Stack the wall","Brace the timbers","Restring the wire","Camouflage"];async function PM(n,e){const t=await zt(n,{items:Rc,correctOrder:Rc,timeMs:18e3,title:"Rebuild the Bunker",hint:"Repair the bunker before the next barrage"});return he(t.score,["strength","intelligence"],t)}const Ac=["Pop smoke","Clear the LZ","Mark approach"],DM=[{label:"STRETCHER TEAM — MOVE!",code:"KeyM",keyLabel:"M"},{label:"LOAD CASUALTY!",code:"Space",keyLabel:"Space"},{label:"SECURE LITTER!",code:"KeyS",keyLabel:"S"},{label:"LIFT OFF!",code:"Enter",keyLabel:"Enter"}];async function LM(n,e){const t=await zt(n,{items:Ac,correctOrder:Ac,timeMs:15e3,title:"Guide the Medevac",hint:"Prepare the landing zone before loading casualties"}),i=await gt(n,e,{prompts:DM,statKeys:["leadership","intelligence"],title:"Load Casualties",hint:"Load casualties on the medevac cadence"}),a=(t.score+i.score)/2;return he(a,["leadership","intelligence"],{prep:t,load:i})}const kM=[{label:"STACK UP!",code:"KeyS",keyLabel:"S"},{label:"BREACH!",code:"KeyB",keyLabel:"B"},{label:"FRAG OUT!",code:"KeyF",keyLabel:"F"},{label:"CLEAR LEFT!",code:"KeyA",keyLabel:"A"},{label:"CLEAR RIGHT!",code:"KeyD",keyLabel:"D"},{label:"ROOM CLEAR!",code:"Enter",keyLabel:"Enter"}];async function NM(n,e){const t=await gt(n,e,{prompts:kM,statKeys:["dexterity","strength"],title:"Breach and Clear",hint:"Stack up, breach, frag out, and clear the room"});return he(t.score,["dexterity","strength"],t)}async function FM(n,e){return new Promise(t=>{const i=ot(n,{title:"IED Sweep",hint:"Press M to mark SUSPICIOUS OBJECT — hold on ROADSIDE CLUTTER"});let a=0,r=0,s=0;const o=8;let l="suspicious",c=!1,d=null;function u(){if(s>=o){f(),i.dispose();const b=a/o;t(he(b,["dexterity","intelligence"],{hits:a,misses:r}));return}s++,l=Math.random()<.55?"suspicious":"clutter",c=!0;const g=Kt(e,["dexterity","intelligence"],500,1e3);i.main.innerHTML=`
        <div class="mg-prompt ${l==="suspicious"?"mg-prompt--hostile":"mg-prompt--friendly"}">
          ${l==="suspicious"?"SUSPICIOUS OBJECT":"ROADSIDE CLUTTER"}
        </div>
        <div class="mg-key-hint">${l==="suspicious"?"Press <kbd>M</kbd> to mark":"Hold position — do nothing"}</div>
      `,et(i,s,o),d=setTimeout(()=>{c&&(l==="suspicious"&&r++,Ie(i,l==="suspicious"?"miss":"hit"),c=!1,setTimeout(u,400))},g)}const f=yt(["KeyM"],g=>{!c||g!=="KeyM"||(c=!1,clearTimeout(d),l==="suspicious"?(a++,Ie(i,"hit")):(r++,Ie(i,"miss")),setTimeout(u,400))});u()})}async function OM(n,e){return new Promise(t=>{const i=ot(n,{title:"Turret Gunner",hint:"Press A/D on CONTACT — hold fire on CIVILIAN VEHICLE"});let a=0,r=0,s=0;const o=8;let l="left",c=!1,d=null;function u(){if(s>=o){f(),i.dispose();const M=a/o;t(he(M,["dexterity","intelligence"],{hits:a,misses:r}));return}s++;const g=Math.random();l=g<.35?"left":g<.7?"right":"civilian",c=!0;const b=Kt(e,["dexterity","intelligence"],500,1e3),m={left:"CONTACT LEFT!",right:"CONTACT RIGHT!",civilian:"CIVILIAN VEHICLE"},p={left:"Press <kbd>A</kbd> to traverse left",right:"Press <kbd>D</kbd> to traverse right",civilian:"Hold fire — do nothing"};i.main.innerHTML=`
        <div class="mg-prompt ${l==="civilian"?"mg-prompt--friendly":"mg-prompt--hostile"}">
          ${m[l]}
        </div>
        <div class="mg-key-hint">${p[l]}</div>
      `,et(i,s,o),d=setTimeout(()=>{c&&(l!=="civilian"&&r++,Ie(i,l!=="civilian"?"miss":"hit"),c=!1,setTimeout(u,400))},b)}const f=yt(["KeyA","KeyD"],g=>{if(!c)return;const b=l==="left"?"KeyA":l==="right"?"KeyD":null;if(l==="civilian"){c=!1,clearTimeout(d),r++,Ie(i,"miss"),setTimeout(u,400);return}g===b&&(c=!1,clearTimeout(d),a++,Ie(i,"hit"),setTimeout(u,400))});u()})}const UM=["Wave Through","Search","Halt"],zM=[{prompt:"Family sedan, papers in order, driver waves — no weapons visible.",answer:0},{prompt:"Panel van, no markings, driver avoids eye contact, wires visible under tarp.",answer:2},{prompt:"Pickup truck, local contractor badge, empty bed, routine route.",answer:0},{prompt:"SUV with tinted windows, nervous passenger, bulge under seat.",answer:1},{prompt:"Water truck, UN markings, driver known to the terp.",answer:0},{prompt:"Motorcycle approaches fast, rider reaches under jacket at the wire.",answer:2},{prompt:"Taxi, three occupants, one refuses to exit when signaled.",answer:1},{prompt:"Ambulance, red crescent, wounded visible through rear window.",answer:0}];async function BM(n,e){const t=zM.map(a=>({prompt:a.prompt,choices:UM,answer:a.answer})),i=await Ii(n,{rounds:t,title:"Checkpoint Duty",hint:"Wave Through, Search, or Halt — read the vehicle cues"});return he(i.score,["intelligence","dexterity"],i)}const Cc=["Rig the chain","Clear the square","Signal the M88"],WM=[{label:"TAKE UP SLACK!",code:"Space",keyLabel:"Space"},{label:"HEAVE — PULL!",code:"Space",keyLabel:"Space"},{label:"SECURE THE RIG!",code:"KeyS",keyLabel:"S"},{label:"STATUE DOWN!",code:"Enter",keyLabel:"Enter"}];async function HM(n,e){const t=await zt(n,{items:Cc,correctOrder:Cc,timeMs:15e3,title:"Firdos Square",hint:"Rig the chain and clear the square before the pull"}),i=await gt(n,e,{prompts:WM,statKeys:["leadership","dexterity"],title:"Pull It Down",hint:"Marines and the M88 — pull the statue down on the cadence"}),a=(t.score+i.score)/2;return he(a,["leadership","dexterity"],{prep:t,pull:i})}async function GM(n,e){return new Promise(t=>{const i=ot(n,{title:"The Caravan",hint:"Press C to grab the lead on CAMEL BOLTS — hold on STEADY COLUMN"});let a=0,r=0,s=0;const o=8;let l="bolt",c=!1,d=null;function u(){if(s>=o){f(),i.dispose();const b=a/o;t(he(b,["dexterity","endurance"],{hits:a,misses:r}));return}s++,l=Math.random()<.55?"bolt":"steady",c=!0;const g=Kt(e,["dexterity","endurance"],500,1e3);i.main.innerHTML=`
        <div class="mg-prompt ${l==="bolt"?"mg-prompt--hostile":"mg-prompt--friendly"}">
          ${l==="bolt"?"CAMEL BOLTS!":"STEADY COLUMN"}
        </div>
        <div class="mg-key-hint">${l==="bolt"?"Press <kbd>C</kbd> to grab the lead":"Hold position — do nothing"}</div>
      `,et(i,s,o),d=setTimeout(()=>{c&&(l==="bolt"&&r++,Ie(i,l==="bolt"?"miss":"hit"),c=!1,setTimeout(u,400))},g)}const f=yt(["KeyC"],g=>{!c||g!=="KeyC"||(c=!1,clearTimeout(d),l==="bolt"?(a++,Ie(i,"hit")):(r++,Ie(i,"miss")),setTimeout(u,400))});u()})}const VM=["Pay Them","Promise Gold","Stand Firm"],qM=[{prompt:'Greek mercenaries block the well. "No gold, no march."',answer:1},{prompt:"Arab riders demand double rations before dawn.",answer:0},{prompt:"A lieutenant draws steel on Eaton at the campfire.",answer:2},{prompt:"The column refuses to move without water skins refilled.",answer:0},{prompt:"Hamet's men threaten to desert back to Cairo.",answer:1},{prompt:"Mutineers seize the supply cache at gunpoint.",answer:2},{prompt:"Mercenaries demand payment before crossing the next ridge.",answer:1},{prompt:"A Greek captain says his men will not fight without coin.",answer:0}];async function KM(n,e){const t=qM.map(a=>({prompt:a.prompt,choices:VM,answer:a.answer})),i=await Ii(n,{rounds:t,title:"Mutiny at the Wells",hint:"Pay Them, Promise Gold, or Stand Firm — read the flashpoint"});return he(i.score,["leadership","intelligence"],i)}const $M=[{label:"FIX BAYONETS!",code:"KeyF",keyLabel:"F"},{label:"OVER THE WALL!",code:"KeyW",keyLabel:"W"},{label:"CLEAR THE BATTERY!",code:"KeyA",keyLabel:"A"},{label:"TURN THE GUNS!",code:"KeyD",keyLabel:"D"},{label:"COLORS UP!",code:"Enter",keyLabel:"Enter"}];async function XM(n,e){const t=await gt(n,e,{prompts:$M,statKeys:["strength","dexterity"],title:"Charge the Harbor Battery",hint:"Fix bayonets, over the wall, clear the battery, turn the guns"});return he(t.score,["strength","dexterity"],t)}const Ic=["Swab the bore","Load powder","Ram the shot","Prime the vent","Run out the gun"],jM=[{label:"MATCH TO THE VENT!",code:"Space",keyLabel:"Space"},{label:"FIRE!",code:"Space",keyLabel:"Space"},{label:"RELOAD!",code:"KeyR",keyLabel:"R"},{label:"FIRE!",code:"Space",keyLabel:"Space"}];async function YM(n,e){const t=await zt(n,{items:Ic,correctOrder:Ic,timeMs:16e3,title:"Man the Harbor Battery",hint:"Load and prime the captured guns before the counterattack"}),i=await gt(n,e,{prompts:jM,statKeys:["intelligence","dexterity"],title:"Fire on the Cadence",hint:"Turn the captured guns on the harbor"}),a=(t.score+i.score)/2;return he(a,["intelligence","dexterity"],{prep:t,fire:i})}const Pc=["Rig the halyard","Clear the bastion","Attach the colors","Signal the fleet"],ZM=[{label:"MARINES — HEAVE!",code:"Space",keyLabel:"Space"},{label:"AGAIN — HEAVE HO!",code:"Space",keyLabel:"Space"},{label:"SECURE THE STAFF!",code:"KeyS",keyLabel:"S"},{label:"COLORS ARE UP!",code:"Enter",keyLabel:"Enter"}];async function JM(n,e){const t=await zt(n,{items:Pc,correctOrder:Pc,timeMs:18e3,title:"Raise the Colors",hint:"Rig the halyard on the Flag Bastion — first US flag over an Old World fortress"}),i=await gt(n,e,{prompts:ZM,statKeys:["leadership","dexterity"],title:"Hoist the Flag",hint:"Eight Marines and one flagstaff — hoist on the cadence"}),a=(t.score+i.score)/2;return he(a,["leadership","dexterity"],{rig:t,hoist:i})}async function QM(n,e){return new Promise(t=>{const i=ot(n,{title:"Gas Attack",hint:"Press G to mask on GAS! GAS! GAS! — hold on FALSE ALARM"});let a=0,r=0,s=0;const o=8;let l="gas",c=!1,d=null;function u(){if(s>=o){f(),i.dispose();const b=a/o;t(he(b,["dexterity","intelligence"],{hits:a,misses:r}));return}s++,l=Math.random()<.55?"gas":"false",c=!0;const g=Kt(e,["dexterity","intelligence"],500,1e3);i.main.innerHTML=`
        <div class="mg-prompt ${l==="gas"?"mg-prompt--hostile":"mg-prompt--friendly"}">
          ${l==="gas"?"GAS! GAS! GAS!":"FALSE ALARM"}
        </div>
        <div class="mg-key-hint">${l==="gas"?"Press <kbd>G</kbd> to mask":"Hold position — do nothing"}</div>
      `,et(i,s,o),d=setTimeout(()=>{c&&(l==="gas"&&r++,Ie(i,l==="gas"?"miss":"hit"),c=!1,setTimeout(u,400))},g)}const f=yt(["KeyG"],g=>{!c||g!=="KeyG"||(c=!1,clearTimeout(d),l==="gas"?(a++,Ie(i,"hit")):(r++,Ie(i,"miss")),setTimeout(u,400))});u()})}async function eT(n,e){return new Promise(t=>{const i=ot(n,{title:"Jungle Ambush",hint:"Press F on MUZZLE FLASH — hold on VILLAGERS ON THE TRAIL"});let a=0,r=0,s=0;const o=8;let l="flash",c=!1,d=null;function u(){if(s>=o){f(),i.dispose();const b=a/o;t(he(b,["dexterity","intelligence"],{hits:a,misses:r}));return}s++,l=Math.random()<.55?"flash":"villagers",c=!0;const g=Kt(e,["dexterity","intelligence"],500,1e3);i.main.innerHTML=`
        <div class="mg-prompt ${l==="flash"?"mg-prompt--hostile":"mg-prompt--friendly"}">
          ${l==="flash"?"MUZZLE FLASH — RETURN FIRE!":"VILLAGERS ON THE TRAIL"}
        </div>
        <div class="mg-key-hint">${l==="flash"?"Press <kbd>F</kbd> to return fire":"Hold fire — do nothing"}</div>
      `,et(i,s,o),d=setTimeout(()=>{c&&(l==="flash"&&r++,Ie(i,l==="flash"?"miss":"hit"),c=!1,setTimeout(u,400))},g)}const f=yt(["KeyF"],g=>{!c||g!=="KeyF"||(c=!1,clearTimeout(d),l==="flash"?(a++,Ie(i,"hit")):(r++,Ie(i,"miss")),setTimeout(u,400))});u()})}const tT=["Hold the Line","Open the Gate","Call the Terp"],iT=[{prompt:"Hungry crowd presses the wire at the feeding station. Children in front.",answer:1},{prompt:"Armed militia approaches the checkpoint. Weapons visible.",answer:0},{prompt:"Elder demands to speak with the commander through the terp.",answer:2},{prompt:"Looters break into the warehouse while Marines watch.",answer:0},{prompt:"Peaceful demonstration blocks the convoy route.",answer:2},{prompt:"Rioters throw rocks at the perimeter. No weapons yet.",answer:0},{prompt:"Families with food vouchers queue peacefully at the gate.",answer:1},{prompt:"Unknown vehicle speeds toward the wire. No flag.",answer:0}];async function nT(n,e){const t=iT.map(a=>({prompt:a.prompt,choices:tT,answer:a.answer})),i=await Ii(n,{rounds:t,title:"Crowd Control",hint:"Hold the Line, Open the Gate, or Call the Terp — read the situation"});return he(i.score,["leadership","intelligence"],i)}const aT={drillCadence:{title:"Close Order Drill",subtitle:"Parade Deck — on the cadence",intro:"Press the matching key when the command flashes. <strong>L</strong> Left Face · <strong>R</strong> Right Face · <strong>M</strong> March · <strong>H</strong> Halt",run:gS},coreValues:{title:"Core Values Class",subtitle:"Lecture Hall — know the code",intro:"Match each leadership trait to its definition.",run:vS},ist:{title:"Initial Strength Test",subtitle:"Pull-up Bars — counted reps",intro:"Press <strong>F</strong> to pull, <strong>J</strong> at chin-over-bar, <strong>K</strong> at full hang.",run:xS},steadyAim:{title:"Snapping In",subtitle:"Rifle Range — steady aim",intro:"Hold <strong>Space</strong> to steady your breath. Press <strong>F</strong> to fire when the reticle aligns with the ring.",run:Hp},paceRunner:{title:"PFT Baseline",subtitle:"400m track — pace run",intro:"Alternate <strong>J</strong> and <strong>K</strong> to maintain stride in the green band.",run:SS},fieldStrip:{title:"Weapons Maintenance",subtitle:"Armoury — field strip",intro:"Click rifle parts in the correct disassembly order before time runs out.",run:MS},swimStrokes:{title:"Swim Qualification",subtitle:"Pool — stroke rhythm",intro:"<strong>F</strong> to stroke · <strong>Space</strong> to breathe at the wall · <strong>T</strong> to turn.",run:TS},gearShed:{title:"Gear Shed",subtitle:"Pool — underwater shed",intro:"Shed gear in the prompted order: H helmet · F flak · B belt · N boots · T trousers · Space surface.",run:ES},logTeamLift:{title:"Log Drills",subtitle:"Logs — team sync lift",intro:"Press <strong>Space</strong> when all four teammate markers align in the green zone.",run:RS},obstacleRun:{title:"Fire Team Course",subtitle:"Obstacle Course — QTE run",intro:"<strong>V</strong> vault · <strong>C</strong> crawl · <strong>L</strong> climb · <strong>S</strong> swing · <strong>Enter</strong> finish.",run:AS},landNav:{title:"Land Navigation",subtitle:"Trail loop — map reading",intro:"Given a bearing and pace count, choose the correct checkpoint for each leg.",run:IS},buddyAid:{title:"Buddy Aid",subtitle:"Medical — triage",intro:"Order first-aid steps correctly for each casualty: assess, breathing, bleeding, shock, evac.",run:PS},mcmapSpar:{title:"MCMAP Intro",subtitle:"MCMAP Pit — combos",intro:"Execute strike and block combos on command.",run:DS},pugilDuel:{title:"Pugil Sticks",subtitle:"Thunderdown — duel",intro:"Read the opponent's tell. <strong>H</strong> high block · <strong>L</strong> low block · <strong>D</strong> dodge feint.",run:LS},bayonetCourse:{title:"Bayonet Course",subtitle:"Drill Practice — thrust and slash",intro:"<strong>T</strong> thrust · <strong>S</strong> slash — keep the rhythm down the lane.",run:kS},knowledgeExam:{title:"Knowledge Exam",subtitle:"Lecture Hall — General Orders",intro:"Complete each General Order with the correct missing phrase.",run:FS},inspection:{title:"Uniform Inspection",subtitle:"Barracks — spot discrepancies",intro:"Click every uniform error on the board before the D.I. finishes his walk.",run:OS},rifleQual:{title:"Table 1 Qualification",subtitle:"Rifle Range — wind and positions",intro:"Arrow keys adjust wind. <strong>F</strong> to fire at standing, kneeling, and prone.",run:US},nightMove:{title:"Night Infiltration",subtitle:"Drill Practice — quiet movement",intro:"Hold <strong>W</strong> to advance. Freeze when the flare pops — do not move.",run:zS},humpPrep:{title:"Full Gear Hike",subtitle:"Trail loop — pace and leadership",intro:"<strong>W</strong> to march. <strong>Space</strong> to help a falling teammate (costs stamina).",run:BS},reactionCourse:{title:"Reaction Course",subtitle:"Obstacle Course — team crossing",intro:"Sequence planks, ropes, and barrels to cross the gap in the correct order.",run:WS},crucibleDay:{title:"Crucible: Day Events",subtitle:"Crucible Trail — day gauntlet",intro:"Marksmanship station under fatigue. Steady aim and execute.",run:HS},crucibleNight:{title:"Crucible: Night Events",subtitle:"Crucible Trail — night movement",intro:"Freeze and move on command through the night course.",run:GS},reaperHike:{title:"The Reaper",subtitle:"Crucible Trail — final hike",intro:"<strong>W</strong> to hike. Stamina barely recovers. Finish to earn the title.",run:VS},warriorBreakfast:{title:"Warrior Breakfast",subtitle:"Chow Hall — earned meal",intro:"Press <strong>Space</strong> when the called item appears on the serving line.",run:qS},gearTurnIn:{title:"Gear Turn-In",subtitle:"Supply — inventory check",intro:"Match issued gear quantities against what is on the shelf.",run:KS},finalDrill:{title:"Final Drill Eval",subtitle:"Parade Deck — from memory",intro:"Execute the full command sequence from memory. L · R · A · M · H.",run:$S},billetBoard:{title:"Battalion Commander's Inspection",subtitle:"Company Office — billet board",intro:"Answer rapid-fire knowledge questions with composure.",run:XS},familyDay:{title:"Family Day",subtitle:"Family Day — epilogue",intro:"Walk your family through the depot. Show them who you became.",run:jS},graduationParade:{title:"Graduation Parade",subtitle:"Parade Deck — EGA ceremony",intro:"Final drill performance. P · O · E · M · H · Enter for the Eagle, Globe, and Anchor.",run:YS},yellowFootprints:{title:"Yellow Footprints",subtitle:"Receiving Barracks — first formation",intro:"Step off the bus onto the yellow footprints. Execute every barked command on time.",run:JS},processing:{title:"Haircuts & Medical",subtitle:"Medical — receiving pipeline",intro:"Complete each receiving station in order: haircut, hygiene, medical, dental, gear issue.",run:QS},blackFriday:{title:"Black Friday",subtitle:"Barracks — D.I. pick-up",intro:"Your Senior Drill Instructor takes charge. Respond with proper bearing.",run:tM},dressDrill:{title:"Dressing Drill",subtitle:"Barracks — blouses ready, MOVE",intro:"The D.I. calls an article of clothing — click the correct gear before the countdown expires.",run:iM},writeLetter:{title:"Letter Home",subtitle:"Barracks — first letter",intro:"Compose your first letter home. Your tone and honesty matter.",run:lM},nightCleanup:{title:"Night Cleanup",subtitle:"Barracks — firewatch scrub",intro:"Hold <strong>S</strong> to scrub the quarterdeck. Release when you hear a creak.",run:sM},footlockerInspection:{title:"Footlocker Inspection",subtitle:"Barracks — spot discrepancies",intro:"Click every footlocker error before the D.I. finishes his walk.",run:hM},highObstacle:{title:"High Obstacle Course",subtitle:"Obstacle Course — climb",intro:"<strong>J</strong>/<strong>K</strong> alternate grips · <strong>Space</strong> pull · <strong>Enter</strong> mount.",run:nM},rappelTower:{title:"Rappelling",subtitle:"Rappell Course — controlled descent",intro:"Press <strong>B</strong> in the green band on each bounce down the tower.",run:aM},gasChamber:{title:"Gas Chamber",subtitle:"Gas Chamber — mask discipline",intro:"<strong>Space</strong> hold breath · <strong>C</strong> clear mask · <strong>B</strong> controlled exhale.",run:rM},mailCall:{title:"Mail Call",subtitle:"Barracks — letters and packages",intro:"Packages and letters from home. Choose how you handle what arrives.",run:dM},fieldDay:{title:"Field Day",subtitle:"Barracks — white-glove clean",intro:"Click cleaning stations in the correct order before the D.I. inspects.",run:uM},shipOut:{title:"Ship Out",subtitle:"Transport Ship — boats away",intro:"Execute every command before the Higgins boats launch for Guadalcanal.",run:mM},beachLanding:{title:"Beach Landing",subtitle:"Landing Beach — Higgins boat assault",intro:"Ride the Higgins boat in, hit the ramp on the cadence, and get off the beach.",run:yM},foxholeDig:{title:"Dig In",subtitle:"Foxhole Line — shovel strokes",intro:"Alternate <strong>J</strong> and <strong>K</strong> to dig your fighting position.",run:bM},mortarBracket:{title:"Mortar Support",subtitle:"Ridge — adjust fire",intro:"Arrow keys adjust range and deflection. <strong>Space</strong> to fire each volley.",run:vM},nightWatch:{title:"Sniper Alley",subtitle:"Jungle Patrol — night watch",intro:"Press <strong>F</strong> on hostile movement. Do NOT fire on friendlies.",run:_M},supplyRun:{title:"Supply Run",subtitle:"Supply Dump — hump rations",intro:"Load supplies in the correct order before the patrol moves out.",run:xM},fieldMedic:{title:"Field Medic",subtitle:"Field Hospital — triage",intro:"Triage casualties and execute field medicine in the correct order.",run:wM},flagRaising:{title:"Raising the Colors",subtitle:"Mt. Suribachi — 23 February 1945",intro:"Assemble the pipe, attach the flag, and hoist the colors on Suribachi. <strong>Space</strong> on the cadence.",run:MM},frostbiteCheck:{title:"Frostbite Triage",subtitle:"Aid Station — frozen casualties",intro:"Treat frostbite casualties in the correct order before evac.",run:TM},weaponsCold:{title:"Frozen Weapons",subtitle:"Warming Tents — keep rifles firing",intro:"Work the bolt and hand-warm the action. <strong>B</strong> bolt · <strong>H</strong> warm · <strong>D</strong> dry-fire · <strong>C</strong> cycle.",run:RM},convoyEscort:{title:"Fighting Withdrawal",subtitle:"Frozen Reservoir — attack in a different direction",intro:"<strong>W</strong> to advance the column. Freeze on flares. <strong>Space</strong> to help a straggler.",run:AM},bridgeRepair:{title:"Bridge Repair",subtitle:"Funchilin Pass — treadway assembly",intro:"Assemble treadway sections in the correct order before the column is cut off.",run:CM},incomingArtillery:{title:"Incoming Barrage",subtitle:"Trenchline — rockets and mortars",intro:"Press <strong>D</strong> to dive on INCOMING — hold position on ALL CLEAR.",run:IM},bunkerRepair:{title:"Rebuild the Bunker",subtitle:"Combat Base — sandbags and timbers",intro:"Fill sandbags, stack the wall, and brace the bunker before the next barrage.",run:PM},medevacSmoke:{title:"Guide the Medevac",subtitle:"Drop Zone — pop smoke and load casualties",intro:"Pop smoke, clear the LZ, mark approach, then load casualties on the cadence.",run:LM},wallBreach:{title:"Breach and Clear",subtitle:"University — stack up and clear the room",intro:"Stack up, breach, frag out, clear left and right, then room clear.",run:NM},iedSweep:{title:"IED Sweep",subtitle:"Highway 1 — mark suspicious objects",intro:"Press <strong>M</strong> to mark SUSPICIOUS OBJECT — hold on ROADSIDE CLUTTER.",run:FM},turretGunner:{title:"Turret Gunner",subtitle:"Highway 1 — traverse on contact",intro:"Press <strong>A</strong>/<strong>D</strong> on CONTACT LEFT/RIGHT — hold fire on CIVILIAN VEHICLE.",run:OM},checkpointSearch:{title:"Checkpoint Duty",subtitle:"Checkpoint — wave, search, or halt",intro:"Read each vehicle's cues and choose Wave Through, Search, or Halt.",run:BM},statueTopple:{title:"Firdos Square",subtitle:"Baghdad — pull down the statue",intro:"Rig the chain, clear the square, signal the M88, then pull it down on the cadence.",run:HM},camelCaravan:{title:"The Caravan",subtitle:"Libyan Desert — grab the lead",intro:"Press <strong>C</strong> to grab the lead on CAMEL BOLTS — hold on STEADY COLUMN.",run:GM},mutinyParley:{title:"Mutiny at the Wells",subtitle:"Mercenary Camp — defuse the flashpoint",intro:"Pay Them, Promise Gold, or Stand Firm — read each mercenary flashpoint.",run:KM},derneCharge:{title:"Charge the Harbor Battery",subtitle:"Derne — fix bayonets and charge",intro:"Fix bayonets, over the wall, clear the battery, turn the guns, colors up.",run:XM},cannonBattery:{title:"Man the Harbor Battery",subtitle:"Derne — load and fire captured guns",intro:"Swab, powder, shot, ram, prime — then fire on the cadence.",run:YM},derneColors:{title:"Raise the Colors",subtitle:"Flag Bastion — first US flag over an Old World fortress",intro:"Rig the halyard, clear the bastion, attach the colors, hoist on the cadence.",run:JM},gasAlarm:{title:"Gas Attack",subtitle:"Belleau Wood — mask up",intro:"Press <strong>G</strong> to mask on GAS! GAS! GAS! — hold on FALSE ALARM.",run:QM},jungleAmbush:{title:"Jungle Ambush",subtitle:"Nicaragua — return fire on muzzle flash",intro:"Press <strong>F</strong> on MUZZLE FLASH — hold on VILLAGERS ON THE TRAIL.",run:eT},crowdControl:{title:"Crowd Control",subtitle:"Mogadishu — hold the line at the wire",intro:"Hold the Line, Open the Gate, or Call the Terp — read each crowd situation.",run:nT}};function Gp(n){return aT[n]??null}function he(n,e,t={}){return{score:n,grade:tw(n),stats:e,details:t}}const rT=20,sT=.6;function Vp(n,e,t={}){const i=Gp(e);return i?new Promise(a=>{const r=document.createElement("div");r.className="menu-overlay",r.innerHTML=`
      <div class="menu-panel recruiter-panel campaign-panel">
        <h2 class="menu-title" id="activity-title"></h2>
        <p class="menu-subtitle" id="activity-subtitle"></p>
        <div class="recruiter-body" id="activity-body"></div>
        <div class="recruiter-actions" id="activity-actions"></div>
      </div>
    `,document.body.appendChild(r);const s=r.querySelector("#activity-title"),o=r.querySelector("#activity-subtitle"),l=r.querySelector("#activity-body"),c=r.querySelector("#activity-actions"),d=r.querySelector(".campaign-panel");let u=n;const h=t.stats??[];function f(w){r.remove(),a(w)}function g(w){return w==="honor"?'<span class="grade-badge grade-badge--honor">HONOR</span>':w==="passing"?'<span class="grade-badge grade-badge--passing">PASSING</span>':'<span class="grade-badge grade-badge--unsat">UNSAT</span>'}function b(w,E){s.textContent="Activity Complete",o.textContent=`${Math.round(w.score*100)}% performance`;const R=E._lastResult?.statDeltas??{},A=Object.entries(R).map(([N,v])=>`<div class="recruiter-result-row"><span>${Jt(N)}</span><span class="stat-delta stat-delta--up">+${v}</span></div>`).join("");l.innerHTML=`
        <div class="recruiter-results">
          <div class="recruiter-result-row">
            <span>Grade</span>
            <span>${g(w.grade)}</span>
          </div>
          <div class="recruiter-result-row">
            <span>Readiness</span>
            <span class="stat-delta stat-delta--up">+${E._lastResult?.readinessDelta??0}</span>
          </div>
          ${A}
          <div class="recruiter-final-stats">Readiness: ${E.campaign.readiness} / 100</div>
        </div>
      `,c.innerHTML='<button type="button" class="btn btn-primary" id="activity-continue">Continue</button>',r.querySelector("#activity-continue").addEventListener("click",()=>{f(E)},{once:!0})}async function m(w){const E=aw(u,t.dayId,w);u=E,b(w,E)}async function p(w){s.textContent="Performance Drop",o.textContent=`${Math.round(w.score*100)}% — UNSAT`,l.innerHTML=`
        <p class="recruiter-copy">The D.I. is not impressed. Get on the quarterdeck for Incentive Training, or accept your grade.</p>
        <p class="recruiter-copy recruiter-copy--small">IT costs <strong>20% hydration</strong>. One attempt per activity. Pass IT to retry the event.</p>
      `,c.innerHTML=`
        <button type="button" class="btn btn-danger" id="accept-grade">Accept Grade</button>
        <button type="button" class="btn btn-primary" id="incentive-training">Incentive Training</button>
      `,r.querySelector("#accept-grade").addEventListener("click",()=>{m(w)},{once:!0}),r.querySelector("#incentive-training").addEventListener("click",async()=>{u=ew(u,t.dayId);const E=(u.campaign.hydration??100)-rT;u=Wo(u,E),d.classList.add("recruiter-panel--pullup"),s.textContent="Incentive Training",o.textContent="Quarterdeck",c.innerHTML="",l.innerHTML="";const R=await pM(l);if(d.classList.remove("recruiter-panel--pullup"),R.score>=sT){s.textContent=t.title??i.title,o.textContent="Retry — no second IT",l.innerHTML="";const A=await i.run(l,u),N={...A,stats:A.stats??h};await m(N)}else l.innerHTML='<p class="recruiter-copy">You failed Incentive Training. The unsat stands.</p>',c.innerHTML='<button type="button" class="btn btn-primary" id="it-fail-ok">Continue</button>',r.querySelector("#it-fail-ok").addEventListener("click",()=>{m(w)},{once:!0})},{once:!0})}async function M(w){if(!Rr(u)&&w.grade==="unsat"&&t.dayId&&Qx(u,t.dayId)){await p(w);return}await m(w)}function T(){s.textContent=t.title??i.title,o.textContent=i.subtitle,l.innerHTML=`<p class="recruiter-copy">${i.intro}</p>`,c.innerHTML='<button type="button" class="btn btn-primary" id="activity-begin">Begin</button>',r.querySelector("#activity-begin").addEventListener("click",async()=>{d.classList.add("recruiter-panel--pullup"),s.textContent=t.title??i.title,o.textContent="In progress",c.innerHTML="",l.innerHTML="";const w=await i.run(l,u),E={...w,stats:w.stats??h};d.classList.remove("recruiter-panel--pullup"),await M(E)},{once:!0})}T()}):Promise.resolve(n)}const oT={theStraggler:{id:"theStraggler",title:"The Straggler",run:n=>Le(n,"w1_straggler","The Straggler",[{say:"Recruit, a boot in your platoon is falling behind on gear prep."},{ask:{prompt:"How do you handle it?",choices:[{text:"Help them square away their gear before lights out.",reward:{readiness:5,stat:1,statKey:"leadership"}},{text:"Tell them to figure it out — not your problem.",reward:{readiness:1},say:"Every recruit for themselves doesn't cut it here."},{text:"Report them to the firewatch.",reward:{readiness:3},say:"Sometimes the book answer is right — but they won't trust you after that."}],bestSay:"Good. We leave no Marine behind. That's leadership."}}])},scaredOfWater:{id:"scaredOfWater",title:"Scared of the Water",run:n=>Le(n,"w4_scared","Scared of the Water",[{say:"Your fire team buddy is frozen at the pool edge. Swim qual is in an hour."},{ask:{prompt:"What do you do?",choices:[{text:"Walk him through breathing drills at the shallow end.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"You got him in the water. That's what teammates do."},{text:"Tell the D.I. he can't hack it.",reward:{readiness:1},say:"He'll remember that when you need help someday."},{text:"Ignore it — not your problem.",reward:{readiness:0},say:"Leadership is choosing to act when nobody makes you."}]}}])},blisterCheck:{id:"blisterCheck",title:"Blister Check",run:n=>Le(n,"w5_blister","Blister Check",[{say:"A recruit is limping on the quarterdeck with blood soaking through his sock."},{ask:{prompt:"Your call?",choices:[{text:"Help him moleskin it and tell him to report to Medical.",reward:{readiness:4,stat:1,statKey:"leadership"},say:"Good initiative. He'll make the hike tomorrow."},{text:"March him straight to Medical without stopping.",reward:{readiness:3},say:"By the book. Safe choice."},{text:"Tell him to suck it up.",reward:{readiness:0},say:"That blister becomes an infection by field week."}]}}])},carePackage:{id:"carePackage",title:"Care Package",run:n=>Le(n,"w7_carepkg","Care Package",[{say:"Your rack-mate got a care package. Candy, cookies, contraband."},{ask:{prompt:"The D.I. doesn't know yet.",choices:[{text:"Convince him to turn it in to the duty NCO.",reward:{readiness:5,stat:1,statKey:"intelligence"},say:"Integrity matters. He learned something."},{text:"Share one piece and say nothing.",reward:{readiness:1},say:"You both ate Article 15 for breakfast."},{text:"Report him immediately.",reward:{readiness:2},say:"Right by the book — but your platoon won't forget."}]}}])},theDoubter:{id:"theDoubter",title:"The Doubter",run:n=>Le(n,"w9_doubter","The Doubter",[{say:"A recruit in your squad says he's done. The Crucible starts tomorrow."},{ask:{prompt:"He's sitting on his rack staring at the wall.",choices:[{text:"Sit with him and remind him why he came.",reward:{readiness:6,stat:1,statKey:"leadership"},say:"He stood up. That's the whole point of the Crucible."},{text:"Tell the D.I. he's quitting.",reward:{readiness:2},say:"Process is process. He's on the bus home."},{text:"Leave him alone — he'll figure it out.",reward:{readiness:1},say:"He didn't figure it out. He's gone."}]}}])},squaredAway:{id:"squaredAway",title:"Squared Away",run:n=>Le(n,"w12_squared","Squared Away",[{say:"Final inspection is tomorrow. Your rack-mate's uniform is a disaster."},{ask:{prompt:"Lights out in ten minutes.",choices:[{text:"Help him press, align, and square away his rack.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"Both racks passed inspection. That's a team."},{text:"Focus on your own gear only.",reward:{readiness:2},say:"You passed. He didn't."},{text:"Let him fail — he had thirteen weeks.",reward:{readiness:0},say:"He's on extra duty during Warrior Week."}]}}])},chowProtocol:{id:"chowProtocol",title:"Chow Hall Protocol",run:n=>Le(n,"w1_chow","Chow Hall Protocol",[{say:"First chow hall visit. The D.I. barks: eyes forward, no talking in line."},{ask:{prompt:"Your buddy whispers a joke in the chow line.",choices:[{text:"Stay silent and keep your eyes forward.",reward:{readiness:4,stat:1,statKey:"leadership"},say:"Good discipline. The D.I. noticed."},{text:"Laugh quietly — it's harmless.",reward:{readiness:1},say:"The whole squad got IT because of you."},{text:"Tell him to shut up.",reward:{readiness:2},say:"Better than laughing — but the D.I. heard you anyway."}]}}])},sundayService:{id:"sundayService",title:"Sunday Service",run:n=>Le(n,"w2_church","Sunday Service",[{say:"Sunday morning. Church is optional — extra rack time if you skip."},{ask:{prompt:"What do you do?",choices:[{text:"Attend church service.",reward:{readiness:4},say:"A quiet hour. Your head is clearer."},{text:"Skip church and square away your gear instead.",reward:{readiness:3,stat:1,statKey:"intelligence"},say:"Your footlocker has never looked better."},{text:"Sleep in and hope nobody notices.",reward:{readiness:0},say:"The D.I. noticed. Extra duty."}]}}])},houseMouse:{id:"houseMouse",title:"House Mouse",run:n=>Le(n,"w3_housemouse","House Mouse",[{say:`The D.I. points at you. "You're the shortest. You're cleaning my duty hut tonight."`},{ask:{prompt:"The duty hut is off-limits to recruits.",choices:[{text:"Clean it squared-away and say nothing.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"The D.I. found it spotless. He remembers."},{text:"Snoop through his desk while you clean.",reward:{readiness:1},say:"He knew. You paid for that curiosity."},{text:"Rush it and get back before lights out.",reward:{readiness:2},say:"It passed — barely."}]}}])},companyHouseMouse:{id:"companyHouseMouse",title:"Company House Mouse",run:n=>Le(n,"w8_companymouse","Company House Mouse",[{say:"Promotion: the First Sergeant wants you cleaning the Company Office tonight."},{ask:{prompt:"The First Sergeant is still in the building.",choices:[{text:"Work quietly and leave it inspection-ready.",reward:{readiness:6,stat:1,statKey:"intelligence"},say:"The First Sergeant shook your hand. That never happens."},{text:"Do the minimum and get out.",reward:{readiness:2},say:"It was acceptable. Nothing more."},{text:"Try to chat him up while you work.",reward:{readiness:0},say:"He told the D.I. you have too much mouth."}]}}])},squadLeader:{id:"squadLeader",title:"Squad Leader",run:n=>Le(n,"w5_squadleader","Squad Leader",[{say:'The D.I. appoints you squad leader. "Your squad. Your problem."'},{ask:{prompt:"A squadmate fails inspection because of a gig line.",choices:[{text:"Own it with the D.I. and fix it as a squad.",reward:{readiness:6,stat:1,statKey:"leadership"},say:"That's leadership. The D.I. saw it."},{text:"Cover for him quietly.",reward:{readiness:2},say:"He owes you — but the D.I. isn't stupid."},{text:"Throw him under the bus.",reward:{readiness:1},say:"The D.I. kept you as squad leader. Nobody trusts you."}]}}])},guide:{id:"guide",title:"The Guide",run:n=>Le(n,"w12_guide","The Guide",[{say:"You're handed the guidon for final drill and graduation parade."},{ask:{prompt:"A recruit in your platoon is shaking before the parade.",choices:[{text:"Talk him through it — steady voice, steady guidon.",reward:{readiness:8,stat:1,statKey:"leadership"},say:"He marched. You carried the guidon like you were born to it."},{text:"Tell him to suck it up.",reward:{readiness:3},say:"He made it. Barely."},{text:"Focus only on your own performance.",reward:{readiness:4},say:"The guidon was steady. The platoon was not."}]}}])},remedialDrill:{id:"remedialDrill",title:"Remedial Drill",run:n=>Le(n,"w2_remedial_drill","Remedial Drill",[{say:'The D.I. pulls you aside after drill. "You move like a recruit in a body bag. Extra drill for you."'},{ask:{prompt:"Two hours of close-order drill on the quarterdeck. How do you handle it?",choices:[{text:"Execute every command sharp — treat it as a chance to improve.",reward:{readiness:4,stat:1,statKey:"dexterity"},say:"Your facing movements actually looked crisp by the end."},{text:"Go through the motions and count the minutes.",reward:{readiness:1},say:"You survived. The D.I. wasn't impressed."},{text:"Complain that it's unfair.",reward:{readiness:0},say:"The whole platoon got IT because of your mouth."}]}}])},bodyCompProgram:{id:"bodyCompProgram",title:"Body Composition Program",run:n=>Le(n,"w2_body_comp","Body Composition Program",[{say:`After the PFT baseline, the D.I. reads your name. "Body composition program. You're on the quarterdeck after chow."`},{ask:{prompt:"Extra incentive training — push-ups, mountain climbers, side straddle hops until the D.I. is tired.",choices:[{text:"Attack the IT session — outwork the program.",reward:{readiness:4,stat:1,statKey:"endurance"},say:"You were still standing when it ended. He noticed."},{text:"Do the minimum reps and conserve energy.",reward:{readiness:2},say:"You passed the program. Barely."},{text:"Skip reps when the D.I. turns his back.",reward:{readiness:0},say:"He turned back. You're on the program another week."}]}}])},remedialKnowledge:{id:"remedialKnowledge",title:"Remedial Knowledge",run:n=>Le(n,"w3_remedial_knowledge","Remedial Knowledge",[{say:`The knowledge instructor flags you after class. "You don't know the General Orders. Remedial tutoring."`},{ask:{prompt:"Extra study session in the Lecture Hall. The instructor drills the orders until you recite them.",choices:[{text:"Study hard and recite from memory without prompts.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"You nailed every order. The instructor signed you off."},{text:"Mumble through and hope he moves on.",reward:{readiness:1},say:"He moved on. You'll need it again at mid-cycle."},{text:"Ask a smart recruit to whisper answers.",reward:{readiness:0},say:"The instructor caught you. Extra duty."}]}}])},remedialStrength:{id:"remedialStrength",title:"Remedial Strength",run:n=>Le(n,"w3_remedial_strength","Remedial Strength",[{say:`The D.I. marches you to the pull-up bars. "You've got noodle arms. Remedial strength training."`},{ask:{prompt:"Max set pull-ups, flexed-arm hang, and negative reps until failure.",choices:[{text:"Give maximum effort on every rep — no half pulls.",reward:{readiness:4,stat:1,statKey:"strength"},say:"You got one more rep than last time. Progress."},{text:"Kip and cheat the reps to finish faster.",reward:{readiness:0},say:"The D.I. counted zero. Start over."},{text:"Quit when it burns and ask to be excused.",reward:{readiness:1},say:"You're back tomorrow. Same bars."}]}}])},greenReplacement:{id:"greenReplacement",title:"The Green Replacement",run:n=>Le(n,"o1_green","The Green Replacement",[{say:"A replacement just landed on the beach. He's never been under fire."},{ask:{prompt:"How do you bring him up to speed?",choices:[{text:"Walk him through your foxhole and sector of fire.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"He held the line on first contact. Good work, Marine."},{text:"Tell him to figure it out — survival of the fittest.",reward:{readiness:1},say:"He panicked at the first mortar round."},{text:"Send him straight to the aid station.",reward:{readiness:2},say:"By the book, but he won't learn out here."}]}}])},warDogHandler:{id:"warDogHandler",title:"War Dog Handler",run:n=>Le(n,"o2_dog","War Dog Handler",[{say:"A war dog handler needs help securing the airstrip perimeter before nightfall."},{ask:{prompt:"The dog is alerting on movement in the treeline.",choices:[{text:"Follow the handler and set up a listening post.",reward:{readiness:5,stat:1,statKey:"intelligence"},say:"Hostile patrol spotted. The dog saved your section."},{text:"Open fire on the treeline immediately.",reward:{readiness:0},say:"Friendly patrol. That was a near disaster."},{text:"Ignore it — dogs false-alert all the time.",reward:{readiness:1},say:"Japanese scouts got through the gap."}]}}])},corpsmanDown:{id:"corpsmanDown",title:"Corpsman Down",run:n=>Le(n,"o3_corpsman","Corpsman Down",[{say:"Your corpsman took shrapnel on the patrol. The aid station is two klicks back."},{ask:{prompt:"What do you do?",choices:[{text:"Carry him back and apply field dressings en route.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"He made it. The battalion surgeon says you saved his life."},{text:"Leave him with the walking wounded and push on.",reward:{readiness:2},say:"Mission continued. He'll remember that."},{text:"Call for mortar smoke and evacuate under cover.",reward:{readiness:4},say:"Smart call. He's stable."}]}}])},saltyVet:{id:"saltyVet",title:"The Salty Vet",run:n=>Le(n,"o5_salty","The Salty Vet",[{say:'A Guadalcanal veteran pulls you aside in the command tent. "You look like hell, kid."'},{ask:{prompt:"He offers advice on jungle survival.",choices:[{text:"Listen and take notes — he's been here since August.",reward:{readiness:5,stat:1,statKey:"intelligence"},say:"His tricks kept your section alive through the next patrol."},{text:"Tell him you don't need advice from an old-timer.",reward:{readiness:0},say:"Pride kills Marines out here."},{text:"Nod politely but stick to the field manual.",reward:{readiness:3},say:"The book is right. Experience is faster."}]}}])},flamethrowerTeam:{id:"flamethrowerTeam",title:"Flamethrower Team",run:n=>Le(n,"o7_flame","Flamethrower Team",[{say:"A flamethrower team is pinned down short of a cave mouth. The operator is asking for covering fire."},{ask:{prompt:"What do you do?",choices:[{text:"Suppress the cave while they advance into position.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"The cave is cleared. The team owes you one."},{text:"Tell them to wait for mortar support.",reward:{readiness:3},say:"Safer. Slower. The cave is still there tonight."},{text:"Let them handle it — not your sector.",reward:{readiness:0},say:"The operator didn't make it back."}]}}])},codeTalker:{id:"codeTalker",title:"Code Talker",run:n=>Le(n,"o9_codetalker","Code Talker",[{say:"A Navajo code talker needs a runner to deliver an encoded message to the command post under fire."},{ask:{prompt:"The route crosses open ground.",choices:[{text:"Take the message yourself — low and fast.",reward:{readiness:5,stat:1,statKey:"endurance"},say:"Message delivered. The assault timetable holds."},{text:"Find a covered route even if it takes longer.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"Smart route. The code talker nods approval."},{text:"Refuse — you're not a runner.",reward:{readiness:1},say:"Someone else went. They took shrapnel doing it."}]}}])},tootsieRolls:{id:"tootsieRolls",title:"Tootsie Rolls",run:n=>Le(n,"k1_tootsie","Tootsie Rolls",[{say:'Supply dropped "Tootsie Rolls" instead of 60mm mortar ammo. The tubes are useless — but the candy bars are everywhere.'},{ask:{prompt:"What do you do with the mislabeled crates?",choices:[{text:"Use them to plug bullet holes in vehicles and share the rest with the platoon.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"Improvise, adapt, overcome. The Marines remember."},{text:"Report the supply error and wait for correct ammo.",reward:{readiness:3},say:"By the book. The mortar section waits."},{text:"Eat them and say nothing.",reward:{readiness:1},say:"Morale up. Mortar section not amused."}]}}])},chosinFew:{id:"chosinFew",title:"The Chosin Few",run:n=>Le(n,"k4_chosin_few","The Chosin Few",[{say:"A frostbitten replacement can barely hold his rifle. He's nineteen and shaking."},{ask:{prompt:"The column moves north tomorrow.",choices:[{text:"Get him warmed up and walk him through weapon drills tonight.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"He holds the line at Yudam-ni. You made a Marine."},{text:"Send him to the aid station — he's combat ineffective.",reward:{readiness:3},say:"Correct call. He'll survive."},{text:"Tell him to toughen up — everyone's cold.",reward:{readiness:0},say:"He falls out on the march. You carry the guilt."}]}}])},foxCompanyRunner:{id:"foxCompanyRunner",title:"Fox Company Runner",run:n=>Le(n,"k6_fox_runner","Fox Company Runner",[{say:"Fox Company is cut off at Toktong Pass. The CO needs a runner with a situation report — now."},{ask:{prompt:"The route is under Chinese machine-gun fire.",choices:[{text:"Low-crawl the whole way with the message.",reward:{readiness:5,stat:1,statKey:"endurance"},say:"Fox Company holds because you got through."},{text:"Wait for mortar smoke then sprint.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"Smart. Message delivered."},{text:"Send someone else — you're not a runner.",reward:{readiness:1},say:"The runner didn't make it. Fox Company fought alone."}]}}])},chestysWords:{id:"chestysWords",title:"Chesty's Words",run:n=>Le(n,"k8_chesty","Chesty's Words",[{say:`Colonel Puller addresses the column: "Retreat, hell — we're just attacking in a different direction."`},{ask:{prompt:"A scared private asks you what that means.",choices:[{text:"Explain we're fighting our way out — not running.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"He straightens up. Chesty's words travel down the line."},{text:"Tell him to keep marching and not ask questions.",reward:{readiness:2},say:"He marches. Fear stays."},{text:"Admit you don't know if you'll make it out.",reward:{readiness:0},say:"Honesty costs you both."}]}}])},shortTimer:{id:"shortTimer",title:"The Short-Timer",run:n=>Le(n,"v1_shorttimer","The Short-Timer",[{say:"A Marine with eleven days left on his tour is frozen at the bunker entrance. He won't move."},{ask:{prompt:"The column is moving out.",choices:[{text:"Talk him through it — eleven days means he finishes with honor.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"He picks up his pack. Short-timer stick still on his helmet."},{text:"Pull him by the strap and march him out.",reward:{readiness:3},say:"He moves. Resentment stays."},{text:"Leave him — not your problem.",reward:{readiness:0},say:"He never caught up. You heard about it later."}]}}])},tunnelRat:{id:"tunnelRat",title:"Tunnel Rat",run:n=>Le(n,"v3_tunnel","Tunnel Rat",[{say:"Intel found a spider hole under the listening post. The lieutenant needs a volunteer to go down with a pistol and a flashlight."},{ask:{prompt:"The hole is narrow, dark, and probably booby-trapped.",choices:[{text:"Volunteer — go down and map what you find.",reward:{readiness:5,stat:1,statKey:"dexterity"},say:"You come back shaking. Intel got what they needed."},{text:"Suggest sending two Marines with a rope and comm wire.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"Smart. The tunnel is cleared without a casualty."},{text:"Decline — that's a one-way ticket.",reward:{readiness:1},say:"Someone else went. He didn't come back."}]}}])},combatPhotographer:{id:"combatPhotographer",title:"Combat Photographer",run:n=>Le(n,"v6_photog","Combat Photographer",[{say:"A civilian photographer from the Associated Press wants to follow your squad through the rubble. Command says escort him — the world is watching Hue."},{ask:{prompt:"He has no weapon and no training.",choices:[{text:"Keep him in the middle of the stack and move block to block.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"He gets his shots. Your squad gets home."},{text:"Send him to the rear — this isn't a photo op.",reward:{readiness:3},say:"He protests. Command is not pleased."},{text:"Let him wander for the dramatic angle.",reward:{readiness:0},say:"Shrapnel finds him. The headline writes itself."}]}}])},newLieutenant:{id:"newLieutenant",title:"The New Lieutenant",run:n=>Le(n,"v8_lieutenant","The New Lieutenant",[{say:"A butter-bar lieutenant fresh from Quantico wants to assault the Citadel walls head-on. Your squad has been in Hue for three days."},{ask:{prompt:"He outranks you. The NVA have the high ground.",choices:[{text:"Suggest flanking through the university — show him the map.",reward:{readiness:5,stat:1,statKey:"intelligence"},say:"He listens. The assault works."},{text:"Follow orders — Marines obey.",reward:{readiness:2},say:"The assault stalls. Casualties mount."},{text:"Tell him he'll get everyone killed.",reward:{readiness:0},say:"He relieves you of fire team leader. The assault stalls anyway."}]}}])},theInterpreter:{id:"theInterpreter",title:"The Interpreter",run:n=>Le(n,"i1_interpreter","The Interpreter",[{say:'Your terp — call sign "Phoenix" — is the only one who speaks the dialect in this sector. Insurgents know it.'},{ask:{prompt:"A firefight breaks out at the checkpoint. Phoenix is exposed on the berm.",choices:[{text:"Pull him behind the HESCO and keep him on comms.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"He stays alive. The patrol gets its translations."},{text:"Tell him to stay down and translate from cover.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"Smart. He keeps working."},{text:"He's a local — he knows how to survive.",reward:{readiness:0},say:"Phoenix didn't make it. The patrol goes blind."}]}}])},theReservist:{id:"theReservist",title:"The Reservist",run:n=>Le(n,"i3_reservist","The Reservist",[{say:"A activated reservist in your squad is forty-two — twice the age of most of the platoon. He's been a plumber in Ohio for twenty years."},{ask:{prompt:"The column is pushing through the sandstorm.",choices:[{text:"Pair him with a young Marine and share the load.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"He keeps pace. Experience counts."},{text:"Put him on vehicle maintenance — he's a plumber.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"The column's vehicles stay running."},{text:"Tell him to keep up or fall out.",reward:{readiness:1},say:"He falls out. You carry the guilt."}]}}])},carePackages:{id:"carePackages",title:"Care Packages",run:n=>Le(n,"i5_carepackages","Care Packages",[{say:"Mail call at the Supply Point. Half the care packages have the wrong names — sent to Marines who rotated out weeks ago."},{ask:{prompt:"Your squad is watching.",choices:[{text:"Redistribute by need — everyone gets something.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"Morale lifts. The platoon remembers."},{text:"Send the mislabeled boxes back through supply.",reward:{readiness:3},say:"By the book. Nobody gets extra."},{text:"Take the good stuff for your fire team.",reward:{readiness:0},say:"The squad notices. Trust erodes."}]}}])},hellHouseQuest:{id:"hellHouseQuest",title:"Hell House",run:n=>Le(n,"i7_hellhouse","Hell House",[{say:"Intel says wounded Marines are trapped inside a fortified house in the Jolan District. The lieutenant wants volunteers for a rescue."},{ask:{prompt:"The house is booby-trapped. Casualties are certain.",choices:[{text:"Volunteer — breach and pull them out.",reward:{readiness:5,stat:1,statKey:"strength"},say:"You get them out. Two wounded, zero KIA."},{text:"Suggest breaching from the rear with EOD support.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"Smart breach. Everyone comes home."},{text:"Wait for armor — we're not going in blind.",reward:{readiness:2},say:"Armor arrives. The wounded wait longer."}]}}])},marineGuard:{id:"marineGuard",title:"The Marine Guard",run:n=>Le(n,"t1_guard","The Marine Guard",[{say:"Seven privates and one sergeant — that's the entire Marine detachment on Eaton's expedition."},{ask:{prompt:'A mercenary laughs: "Eight Marines cannot take a fortress."',choices:[{text:"Tell him Marines have taken worse with less.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"The column hears. Morale holds."},{text:"Let O'Bannon answer — he outranks you.",reward:{readiness:3},say:"O'Bannon handles it. Professional."},{text:"Say nothing — not your fight yet.",reward:{readiness:1},say:"The mercenary smirks. Doubt spreads."}]}}])},eatonsMap:{id:"eatonsMap",title:"Eaton's Map",run:n=>Le(n,"t2_map","Eaton's Map",[{say:"General Eaton's map shows a route through terrain no caravan has crossed. The Greeks refuse to follow it."},{ask:{prompt:"Eaton asks the Marines to scout the next ridge.",choices:[{text:"Scout ahead and verify the route is passable.",reward:{readiness:5,stat:1,statKey:"intelligence"},say:"The route holds. Eaton's map is right."},{text:"Suggest an alternate path the mercenaries will accept.",reward:{readiness:4,stat:1,statKey:"leadership"},say:"Compromise route. Column moves."},{text:"Refuse — you're not a surveyor.",reward:{readiness:1},say:"Someone else went. They found a dead end."}]}}])},hametsCause:{id:"hametsCause",title:"Hamet's Cause",run:n=>Le(n,"t3_hamet","Hamet's Cause",[{say:"Hamet Karamanli — the exiled pasha — rides with the column. His cause is Eaton's cause. The mercenaries are not sure."},{ask:{prompt:"Hamet's men demand precedence at the well.",choices:[{text:"Back Hamet — his legitimacy holds the alliance together.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"Hamet remembers. The alliance holds."},{text:"Split the water fairly — Marines mediate.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"Fair split. Nobody happy, nobody dead."},{text:"Let the mercenaries sort it out.",reward:{readiness:0},say:"A fight breaks out. Water wasted."}]}}])},promisedPay:{id:"promisedPay",title:"The Promised Pay",run:n=>Le(n,"t4_pay","The Promised Pay",[{say:"The mercenaries demand gold before the final march. Eaton has promises, not coin."},{ask:{prompt:"They block the column at Dead March Flats.",choices:[{text:"Stand with Eaton — the fleet will pay when Derne falls.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"Eaton's resolve wins. Column moves."},{text:"Offer your own pay to buy a day's march.",reward:{readiness:3},say:"One more day. Derne closer."},{text:"Side with the mercenaries — Marines need allies.",reward:{readiness:0},say:"Eaton loses face. Column fractures."}]}}])},retreatHell:{id:"retreatHell",title:"Retreat Hell",run:n=>Le(n,"b1_retreat","Retreat Hell",[{say:`A French officer advises retreat. Captain Williams' reply echoes down the line: "Retreat? Hell, we just got here."`},{ask:{prompt:"Your squad hears the exchange.",choices:[{text:"Pass the word — we hold Belleau Wood.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"The line stiffens. Williams' words travel."},{text:"Dig in deeper — show you mean it.",reward:{readiness:4,stat:1,statKey:"strength"},say:"Positions improve. Message received."},{text:"Stay quiet — let the officers decide.",reward:{readiness:2},say:"You hold. No credit taken."}]}}])},theNickname:{id:"theNickname",title:"The Nickname",run:n=>Le(n,"b3_nickname","The Nickname",[{say:'German prisoners call the Marines "Teufel Hunden" — Devil Dogs. The name is spreading.'},{ask:{prompt:"A correspondent asks what it means.",choices:[{text:"Tell him it means we bite and we don't let go.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"The story runs. Devil Dogs forever."},{text:`Say it's German for "damned fools."`,reward:{readiness:3},say:"Laughs in the trench. Morale up."},{text:"Refuse to talk to press.",reward:{readiness:1},say:"He writes it anyway."}]}}])},muleSkinner:{id:"muleSkinner",title:"The Mule Skinner",run:n=>Le(n,"n1_mule","The Mule Skinner",[{say:"The mule skinner is drunk and the train won't move. Ocotal needs those supplies by dawn."},{ask:{prompt:"The lieutenant looks at you.",choices:[{text:"Sober him up and walk the lead mule yourself.",reward:{readiness:5,stat:1,statKey:"endurance"},say:"Train moves. Ocotal gets resupply."},{text:"Find another skinner in the village.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"Local hired. Train moves."},{text:"Wait for him to sleep it off.",reward:{readiness:1},say:"Dawn passes. Ocotal waits."}]}}])},coffeeAlcalde:{id:"coffeeAlcalde",title:"Coffee With the Alcalde",run:n=>Le(n,"n3_coffee","Coffee With the Alcalde",[{say:"The alcalde invites the patrol to coffee at the plantation. Intel says Sandinistas watch the road."},{ask:{prompt:"Accept the invitation or stay on the ridge?",choices:[{text:"Accept — rapport wins more than rifles.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"The alcalde talks. Intel flows both ways."},{text:"Send one Marine with gifts, keep the patrol on the ridge.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"Smart. Relationship without exposure."},{text:"Decline — coffee is a trap.",reward:{readiness:1},say:"The alcalde is offended. Village goes quiet."}]}}])},waterWell:{id:"waterWell",title:"The Water Well",run:n=>Le(n,"s1_well","The Water Well",[{say:"The feeding station well is dry. Two thousand people are in the queue."},{ask:{prompt:"Engineers say the pump needs twelve hours.",choices:[{text:"Ration what's left and organize the queue by need.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"No riot. Pump fixed by nightfall."},{text:"Truck water from the port until the pump runs.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"Convoy runs. Crowd calms."},{text:"Close the station until the pump works.",reward:{readiness:0},say:"Riot at the wire. Casualties."}]}}])},kidAtWire:{id:"kidAtWire",title:"The Kid at the Wire",run:n=>Le(n,"s2_kid","The Kid at the Wire",[{say:"A kid keeps coming to the wire asking for food. Tonight he's alone. No adults visible."},{ask:{prompt:"SOP says don't engage at the wire after dark.",choices:[{text:"Pass food through the wire and send him back.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"He goes. You sleep uneasy but clear."},{text:"Call the terp to find his family.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"Family found. Kid home."},{text:"Wave him off — rules are rules.",reward:{readiness:1},say:"He leaves. You never know if he ate."}]}}])}};function lT(n){return oT[n]??null}function Le(n,e,t,i){return new Promise(a=>{const r=document.createElement("div");r.className="menu-overlay",r.innerHTML=`
      <div class="menu-panel recruiter-panel recruiter-panel--station">
        <h2 class="menu-title">Side Quest</h2>
        <p class="menu-subtitle">${t}</p>
        <div class="recruiter-body" id="sq-body"></div>
        <div class="recruiter-actions" id="sq-actions"></div>
      </div>
    `,document.body.appendChild(r);const s=r.querySelector("#sq-body"),o=new qo(s);(async()=>{let l={readiness:2};for(const c of i)if(c.say&&await o.say(c.say),c.ask){const d=await o.ask(c.ask),u=c.ask.choices[d];l=u.reward??{readiness:2},u.say?await o.say(u.say):c.ask.bestSay&&d===0&&await o.say(c.ask.bestSay)}o.dispose(),r.remove(),a(sw(n,e,l))})()})}function cT(n,e){const t=lT(e.questId);return t?new Promise(i=>{const a=document.createElement("div");a.className="menu-overlay",a.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Side Quest Available</h2>
        <p class="menu-subtitle">${e.title}</p>
        <p class="recruiter-copy">Near ${e.locationName}. Optional — small readiness reward.${e.maxStats?" <em>Remedial — offered based on your stats.</em>":""}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="sq-accept">Investigate</button>
          <button type="button" class="btn btn-secondary" id="sq-skip">Skip</button>
        </div>
      </div>
    `,a.querySelector("#sq-accept").addEventListener("click",async()=>{a.remove();const r=await t.run(n);i(r)},{once:!0}),a.querySelector("#sq-skip").addEventListener("click",()=>{a.remove(),i(n)},{once:!0}),document.body.appendChild(a)}):Promise.resolve(n)}const dT=8;class uT{constructor({character:e,slotIndex:t,player:i,parsedMap:a,recruitHUD:r,hydrationSystem:s,onRunEnd:o,onMapChange:l}){this.character=wt(e),this.slotIndex=t??e.slotIndex??0,this.player=i,this.parsedMap=a,this.recruitHUD=r,this.hydrationSystem=s??null,this.onRunEnd=o??null,this.onMapChange=l??null,this.currentMapName=Rp(this.character),this.busy=!1,this.runEnded=!1,this.awaitingProximity=!1,this.currentDayDef=null,this._activityResolve=null,this.promptEl=document.createElement("div"),this.promptEl.className="activity-prompt",this.promptEl.innerHTML=`
      <span class="activity-prompt-text" id="activity-prompt-text"></span>
      <button type="button" class="btn btn-primary activity-prompt-btn" id="activity-prompt-btn">Begin</button>
    `,this.promptEl.style.display="none",document.body.appendChild(this.promptEl),this.promptTextEl=this.promptEl.querySelector("#activity-prompt-text"),this.promptBtn=this.promptEl.querySelector("#activity-prompt-btn"),this.promptBtn.addEventListener("click",()=>this.triggerActivity()),this._onPromptKey=c=>{c.key==="Enter"&&this.promptEl.style.display!=="none"&&!this.busy&&this.triggerActivity()},window.addEventListener("keydown",this._onPromptKey)}updateCharacter(e){this.character=wt(e),this.player.character=this.character,this.player.updateAppearance(),this.recruitHUD.update(this.character),this.hydrationSystem?.updateCharacter(this.character),Go(this.slotIndex,this.character)}async start(){hc(this.character)||(await this.dayLoop(),!this.runEnded&&gc(this.character.campaign.week,this.character)&&!hc(this.character)&&await this.handleGraduation())}async handleGraduation(){const e=cw(this.character);pc(e,{graduated:!0}),await cS(e),this.updateCharacter(e)}async handleRunFailure(e){if(this.runEnded)return!0;if((this.character.campaign.recycleTokens??0)>0){let a=Zx(this.character);return e==="heat"&&(a=Wo(a,50)),this.updateCharacter(a),await uS(this.character,e),this.awaitingProximity||(this.player.inputEnabled=!0),!1}this.runEnded=!0,this.busy=!0,this.player.inputEnabled=!1,this.hidePrompt();const i=pc(this.character,{graduated:!1});return await hS(this.character,e,i),Pp(this.slotIndex),this.onRunEnd?.(),!0}async dayLoop(){for(;!gc(this.character.campaign.week,this.character)&&!this.runEnded;){const e=Ko(this.character.campaign.week,this.character);if(!e)break;if(!e.days?.length){await lS(e);return}const t=nS(this.character.campaign.week,this.character.campaign.dayInWeek,this.character);if(!t)break;if(this.character.campaign.completed[t.id]){this.advanceDay(e);continue}if(await this.runSingleDay(t,e),this.runEnded)return}}async runSingleDay(e,t){if(this.busy=!0,this.player.inputEnabled=!1,await sS(this.character,e,t),this.hydrationSystem?.onNewDay(),this.currentDayDef=e,this.awaitingProximity=!0,this.busy=!1,this.player.inputEnabled=!0,await new Promise(r=>{this._activityResolve=r}),this.runEnded)return;const i=aS(this.character.campaign.week,this.character.campaign.dayInWeek,this.character);for(const r of i)if(!ow(this.character,r.id)){const s=await cT(this.character,r);this.updateCharacter(s)}this.advanceDay(t)&&(await oS(t,this.character),await this.maybeTransitionMap(t.id))}async maybeTransitionMap(e){const t=this.character.campaign.week,i=Ap(this.character,t);if(!this.onMapChange||i===this.currentMapName)return;const a=Xx(this.character,t);a&&await rS(a);const r=await this.onMapChange(i);r&&(this.parsedMap=r,this.currentMapName=i)}advanceDay(e){const{character:t,weekComplete:i}=rw(this.character,e.days.length);return this.updateCharacter(t),i}updateProximity(){if(!this.awaitingProximity||this.busy||!this.currentDayDef||this.runEnded){this.hidePrompt();return}const e=Bp(this.parsedMap,this.currentDayDef.locationName);if(!e){this.hidePrompt();return}Math.hypot(this.player.position.x-e.x,this.player.position.z-e.z)<=dT?this.showPrompt(this.currentDayDef):this.hidePrompt()}showPrompt(e){this.promptTextEl.textContent=`${e.title} — ${e.locationName}`,this.promptEl.style.display="flex"}hidePrompt(){this.promptEl.style.display="none"}async triggerActivity(){if(!this.awaitingProximity||this.busy||!this.currentDayDef||this.runEnded)return;this.busy=!0,this.awaitingProximity=!1,this.player.inputEnabled=!1,this.hidePrompt();const e=this.currentDayDef,t=await Vp(this.character,e.activityId,{dayId:e.id,title:e.title,stats:e.stats});this.updateCharacter(t),this.hydrationSystem?.postActivityDrain(e.stats??[]),!(Cp(this.character)&&t._lastResult?.grade==="unsat"&&await this.handleRunFailure("performance"))&&(this.currentDayDef=null,this.busy=!1,this._activityResolve&&(this._activityResolve(),this._activityResolve=null))}dispose(){window.removeEventListener("keydown",this._onPromptKey),this.promptEl.remove()}}const hT=8,pT=[{locationName:"Pull-up Bars",activityId:"ist",title:"Initial Strength Test"}];function fT(n){const e=new Map;for(const t of Bo(n))for(const i of t.days??[]){const a=i.locationName;e.has(a)||e.set(a,[]);const r=e.get(a);r.some(s=>s.activityId===i.activityId)||r.push({activityId:i.activityId,title:i.title})}for(const t of pT){e.has(t.locationName)||e.set(t.locationName,[]);const i=e.get(t.locationName);i.some(a=>a.activityId===t.activityId)||i.push({activityId:t.activityId,title:t.title})}return e}class mT{constructor({character:e,slotIndex:t,player:i,parsedMap:a,recruitHUD:r}){this.character=wt(e),this.slotIndex=t??e.slotIndex??0,this.player=i,this.parsedMap=a,this.recruitHUD=r,this.locationMap=fT(this.character),this.busy=!1,this.nearbyLocation=null,this.nearbyActivities=[],this.promptEl=document.createElement("div"),this.promptEl.className="activity-prompt sandbox-prompt",this.promptEl.innerHTML=`
      <span class="activity-prompt-text" id="sandbox-prompt-text"></span>
      <div class="sandbox-activity-btns" id="sandbox-activity-btns"></div>
    `,this.promptEl.style.display="none",document.body.appendChild(this.promptEl),this.promptTextEl=this.promptEl.querySelector("#sandbox-prompt-text"),this.activityBtnsEl=this.promptEl.querySelector("#sandbox-activity-btns"),this.activityBtnsEl.addEventListener("click",s=>{const o=s.target.closest("[data-activity]");!o||this.busy||this.triggerActivity(o.dataset.activity,o.dataset.title)})}updateCharacter(e){this.character=wt(e),this.player.character=this.character,this.player.updateAppearance(),this.recruitHUD.update(this.character),Go(this.slotIndex,this.character)}async start(){}updateProximity(){if(this.busy){this.hidePrompt();return}let e=null,t=1/0,i=[];for(const[a,r]of this.locationMap){const s=Bp(this.parsedMap,a);if(!s)continue;const o=Math.hypot(this.player.position.x-s.x,this.player.position.z-s.z);o<=hT&&o<t&&(t=o,e=a,i=r)}e?(this.nearbyLocation=e,this.nearbyActivities=i,this.showPrompt(e,i)):(this.nearbyLocation=null,this.nearbyActivities=[],this.hidePrompt())}showPrompt(e,t){this.promptTextEl.textContent=e,this.activityBtnsEl.innerHTML=t.map(i=>{const r=Gp(i.activityId)?.title??i.title;return`<button type="button" class="btn btn-primary activity-prompt-btn" data-activity="${i.activityId}" data-title="${i.title}">${r}</button>`}).join(""),this.promptEl.style.display="flex"}hidePrompt(){this.promptEl.style.display="none"}async triggerActivity(e,t){if(this.busy)return;this.busy=!0,this.player.inputEnabled=!1,this.hidePrompt();const i=await Vp(this.character,e,{dayId:`sandbox_${e}`,title:t,stats:[]});this.updateCharacter(i),this.busy=!1,this.player.inputEnabled=!0}dispose(){this.promptEl.remove()}}const gT=240,yT=3,bT=3,vT=40,_T=15;function xT(){const n=document.createElement("canvas");n.width=16,n.height=16;const e=n.getContext("2d");e.fillStyle="#3d6b8a",e.fillRect(4,2,8,12),e.fillStyle="#6db8e8",e.fillRect(5,4,6,8),e.fillStyle="#8b6914",e.fillRect(6,0,4,3);const t=new sa(n);return t.magFilter=Qe,t.minFilter=Qe,t}function wT(){const n=document.createElement("canvas");n.width=16,n.height=16;const e=n.getContext("2d");e.fillStyle="#4a3020",e.fillRect(2,12,12,3),e.fillStyle="#8b4513",e.fillRect(4,10,8,2),e.fillStyle="#d9a020",e.fillRect(5,5,6,6),e.fillStyle="#ff6b20",e.fillRect(6,3,4,5),e.fillStyle="#ffd94a",e.fillRect(7,1,2,4);const t=new sa(n);return t.magFilter=Qe,t.minFilter=Qe,t}function ST(){const n=document.createElement("canvas");n.width=16,n.height=16;const e=n.getContext("2d");e.fillStyle="#4a5a3a",e.fillRect(3,4,10,10),e.fillStyle="#5c6b4a",e.fillRect(4,5,8,8),e.fillStyle="#3d4a2e",e.fillRect(3,4,10,2),e.fillStyle="#6a7a58",e.fillRect(5,7,6,4);const t=new sa(n);return t.magFilter=Qe,t.minFilter=Qe,t}function MT(){const n=document.createElement("canvas");n.width=16,n.height=16;const e=n.getContext("2d");e.fillStyle="#8ec8e8",e.fillRect(5,3,6,11),e.fillStyle="#b8e0f8",e.fillRect(6,5,4,7),e.fillStyle="#4a90c2",e.fillRect(5,2,6,2),e.fillStyle="#ffffff",e.fillRect(7,0,2,3);const t=new sa(n);return t.magFilter=Qe,t.minFilter=Qe,t}function TT(){const n=document.createElement("canvas");n.width=16,n.height=16;const e=n.getContext("2d");e.fillStyle="#8a6f47",e.fillRect(4,5,8,9),e.fillStyle="#6d5637",e.fillRect(5,6,6,7),e.fillStyle="#a8874f",e.fillRect(6,3,4,3),e.fillStyle="#cfa96b",e.fillRect(7,1,2,4);const t=new sa(n);return t.magFilter=Qe,t.minFilter=Qe,t}class ET{constructor({character:e,player:t,mapContainer:i,bounds:a,onCharacterUpdate:r,onRunFailure:s}){this.character=wt(e),this.player=t,this.mapContainer=i,this.bounds=a,this.onCharacterUpdate=r,this.onRunFailure=s,this.pickups=[],this.pickupMeshes=[],this.exhaustionBusy=!1,this.runFailureBusy=!1,this._canteenTexture=xT(),this._fireTexture=wT(),this._ponchoTexture=ST(),this._bottleTexture=MT(),this._waterskinTexture=TT(),this.spawnPickups()}get climate(){return ka(this.character)}updateCharacter(e){this.character=wt(e)}updateBounds(e){this.bounds=e,this.spawnPickups()}get isActive(){return!Rr(this.character)&&this.character.campaign?.phase!=="graduated"}getPickupTexture(){const e=this.climate.pickupStyle;return e==="fire"?this._fireTexture:e==="poncho"?this._ponchoTexture:e==="bottle"?this._bottleTexture:e==="waterskin"?this._waterskinTexture:this._canteenTexture}spawnPickups(){this.clearPickups();for(let e=0;e<bT;e++){const t=8+Math.random()*(this.bounds.width-16),i=8+Math.random()*(this.bounds.height-16);this.pickups.push({x:t,z:i,id:`pickup-${Date.now()}-${e}`});const a=new sd({map:this.getPickupTexture(),transparent:!0}),r=new um(a);r.scale.set(2,2,1),r.position.set(t,1.5,i),this.mapContainer.add(r),this.pickupMeshes.push(r)}}clearPickups(){for(const e of this.pickupMeshes)this.mapContainer.remove(e),e.material?.dispose();this.pickupMeshes=[],this.pickups=[]}onNewDay(){this.isActive&&this.spawnPickups()}postActivityDrain(e=[]){if(!this.isActive||!e.includes("endurance"))return;const t=(this.character.campaign.hydration??100)-_T;this.applyHydration(t)}applyHydration(e){const t=this.character.campaign.hydration??100,i=Math.max(0,e),a=Wo(this.character,i);this.character=a,this.onCharacterUpdate(a),i<=0&&t>0&&this.handleExhaustion()}async handleExhaustion(){if(this.exhaustionBusy||this.runFailureBusy)return;if(Cp(this.character)){this.runFailureBusy=!0,this.player.inputEnabled=!1,await this.onRunFailure("heat"),this.runFailureBusy=!1;return}this.exhaustionBusy=!0,this.player.inputEnabled=!1;const e=Jx(this.character);this.character=e,this.onCharacterUpdate(e),await dS(this.character),this.player.inputEnabled=!0,this.exhaustionBusy=!1}checkPickup(){const e=this.player.position.x,t=this.player.position.z;for(let i=this.pickups.length-1;i>=0;i--){const a=this.pickups[i];if(Math.hypot(e-a.x,t-a.z)<=yT){const s=Math.min(100,(this.character.campaign.hydration??0)+vT);this.applyHydration(s),this.pickups.splice(i,1);const o=this.pickupMeshes.splice(i,1)[0];o&&(this.mapContainer.remove(o),o.material?.dispose())}}}update(e){if(!this.isActive||!this.player.inputEnabled||this.exhaustionBusy||this.runFailureBusy)return;const t=100/gT,i=bw(),a=(this.character.campaign.hydration??100)-t*e*i;this.applyHydration(a),this.checkPickup()}dispose(){this.clearPickups(),this._canteenTexture?.dispose(),this._fireTexture?.dispose(),this._ponchoTexture?.dispose(),this._bottleTexture?.dispose(),this._waterskinTexture?.dispose()}}af({immediate:!0});const wr=3,tn=24;let Gt,_i,hi,vn,Ot,Qi,$n,wn,Aa,Oi,Qn;const RT=new Em;let xo=null;async function AT(){for(;;){const n=await Aw();if(n.type==="continue"){await Dc(n.character);continue}if(n.type==="create"){const e=await eS();if(!e)continue;const t=await kw(n.slotIndex);if(!t)continue;let i;if(e.usesRecruiter?(i=await Qw(t),i&&(i={...i,campaign:Tn({campaignId:e.id,...i.campaign??{}})})):i=await tS(t,e),!i)continue;if(!Go(n.slotIndex,i)){alert("Could not save character. Check browser storage settings.");continue}await Dc(i)}}}function Dc(n){return new Promise(e=>{xo=e,IT(n)})}function CT(){Gt?.setAnimationLoop(null),Oi?.dispose(),Oi=null,Qn?.dispose(),Qn=null,Ot?.dispose(),Ot=null,Qi=null,vn?.dispose(),vn=null,$n?.element?.remove(),$n=null,wn?.remove(),wn=null,Aa?.dom?.remove(),Aa=null,Gt&&(Gt.domElement.remove(),Gt.dispose(),Gt=null),_i=null,hi=null,window.removeEventListener("resize",qp);const n=xo;xo=null,n?.()}function IT(n){n=wt(n),Aa=new wa,document.body.appendChild(Aa.dom),wn=document.createElement("div"),wn.className="location-hud",document.body.appendChild(wn),$n=iS(n),document.body.appendChild($n.element),Gt=new md,Gt.setPixelRatio(1),Gt.setSize(window.innerWidth/wr,window.innerHeight/wr,!1),Gt.domElement.classList.add("game-canvas"),document.body.appendChild(Gt.domElement),_i=new rd,_i.background=new He(3029800);const e=window.innerWidth/window.innerHeight;hi=new Da(-tn*e/2,tn*e/2,tn/2,-tn/2,.1,200),vn=new T_(hi,Gt.domElement),vn.enableRotate=!1;const t=new Sm;t.intensity=3,t.position.set(1,2,3),_i.add(t);const i=new Mm;i.intensity=.5,_i.add(i);const a=new bn;_i.add(a),qt(n);const r=Rp(n),s=ds.maps?.find(b=>b.name===r),o={width:s?.width??60,height:s?.height??50};Ot=new kx(hi,a,n,o),_i.add(Ot);const l=o.width/2,c=o.height/2;Ot.position.set(l,0,c),Qi=new lx(ds,a,{positionGetter:()=>({x:Ot.position.x,z:Ot.position.z}),unloadDistance:3}),Qi.setMap(r);const d=Qi.getParsedMap(),u=n.slotIndex??0;_i.background=new He(uc(r));const h=async b=>{const m=ds.maps?.find(w=>w.name===b),p={width:m?.width??60,height:m?.height??50};Ot.bounds=p;const M=p.width/2,T=p.height/2;return Ot.position.set(M,0,T),Qi.setMap(b),_i.background=new He(uc(b)),Qn?.updateBounds?.(p),Qi.getParsedMap()};Rr(n)?Oi=new mT({character:n,slotIndex:u,player:Ot,parsedMap:d,recruitHUD:$n}):(Oi=new uT({character:n,slotIndex:u,player:Ot,parsedMap:d,recruitHUD:$n,onRunEnd:()=>CT(),onMapChange:h}),Qn=new ET({character:n,player:Ot,mapContainer:a,bounds:o,onCharacterUpdate:b=>Oi.updateCharacter(b),onRunFailure:b=>Oi.handleRunFailure(b)}),Oi.hydrationSystem=Qn),Oi.start();const f=40,g=f*Math.SQRT1_2;vn.target.set(l,0,c),hi.position.set(l+g,f*Math.tan(Q0),c+g),vn.update(),Gt.setAnimationLoop(PT),window.addEventListener("resize",qp)}function PT(){const n=RT.getDelta();Ot.update(n),Qn?.update(n),Oi?.updateProximity(),Qi.update(),vn.update(),Aa.update();const e=Qi.getParsedMap();if(e){const t=W_(e,Ot.position.x,Ot.position.z),a=(e.tiles[t]??[]).map(r=>r.name).filter(Boolean);wn.textContent=a.length>0?a.join(" · "):`Tile ${t}`}else wn.textContent="--";Gt.render(_i,hi)}function qp(){const n=window.innerWidth/window.innerHeight;hi.left=-tn*n/2,hi.right=tn*n/2,hi.top=tn/2,hi.bottom=-tn/2,hi.updateProjectionMatrix(),Gt.setSize(window.innerWidth/wr,window.innerHeight/wr,!1)}AT();
