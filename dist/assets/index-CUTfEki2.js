(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const go="182",Gi={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gu=0,Ko=1,Vu=2,ar=1,qu=2,ms=3,Jn=0,Ht=1,an=2,Un=0,Vi=1,Yo=2,jo=3,Zo=4,Xu=5,ci=100,$u=101,Ku=102,Yu=103,ju=104,Zu=200,Ju=201,Qu=202,eh=203,fa=204,pa=205,th=206,nh=207,ih=208,sh=209,rh=210,ah=211,oh=212,lh=213,ch=214,ma=0,ga=1,_a=2,Yi=3,va=4,ya=5,xa=6,ba=7,mc=0,dh=1,uh=2,xn=0,gc=1,_c=2,vc=3,yc=4,xc=5,bc=6,Sc=7,Mc=300,vi=301,ji=302,Sa=303,Ma=304,xr=306,vs=1e3,In=1001,Ea=1002,ht=1003,hh=1004,Us=1005,Pt=1006,Rr=1007,ui=1008,Kt=1009,Ec=1010,wc=1011,ys=1012,_o=1013,Sn=1014,vn=1015,Fn=1016,vo=1017,yo=1018,xs=1020,Tc=35902,Ac=35899,Rc=1021,Cc=1022,cn=1023,On=1026,hi=1027,Pc=1028,xo=1029,Zi=1030,bo=1031,So=1033,or=33776,lr=33777,cr=33778,dr=33779,wa=35840,Ta=35841,Aa=35842,Ra=35843,Ca=36196,Pa=37492,Da=37496,La=37488,Ia=37489,Na=37490,Ua=37491,ka=37808,Fa=37809,Oa=37810,Ba=37811,Ha=37812,za=37813,Wa=37814,Ga=37815,Va=37816,qa=37817,Xa=37818,$a=37819,Ka=37820,Ya=37821,ja=36492,Za=36494,Ja=36495,Qa=36283,eo=36284,to=36285,no=36286,fh=3200,Dc=0,ph=1,Kn="",Xt="srgb",Ji="srgb-linear",fr="linear",je="srgb",Mi=7680,Jo=519,mh=512,gh=513,_h=514,Mo=515,vh=516,yh=517,Eo=518,xh=519,io=35044,Qo="300 es",yn=2e3,pr=2001;function Lc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bh(){const i=mr("canvas");return i.style.display="block",i}const el={};function gr(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ce(...i){const e="THREE."+i.shift();console.warn(e,...i)}function He(...i){const e="THREE."+i.shift();console.error(e,...i)}function bs(...i){const e=i.join(" ");e in el||(el[e]=!0,Ce(...i))}function Sh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ur=Math.PI/180,so=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function Mh(i,e){return(i%e+e)%e}function Cr(i,e,t){return(1-t)*i+t*e}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Eh={DEG2RAD:ur};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o>=1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==h||c!==m||d!==_){let p=l*h+c*m+d*_+u*v;p<0&&(h=-h,m=-m,_=-_,v=-v,p=-p);let f=1-o;if(p<.9995){const E=Math.acos(p),A=Math.sin(E);f=Math.sin(f*E)/A,o=Math.sin(o*E)/A,l=l*f+h*o,c=c*f+m*o,d=d*f+_*o,u=u*f+v*o}else{l=l*f+h*o,c=c*f+m*o,d=d*f+_*o,u=u*f+v*o;const E=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=E,c*=E,d*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],h=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+d*u+l*m-c*h,e[t+1]=l*_+d*h+c*u-o*m,e[t+2]=c*_+d*m+o*h-l*u,e[t+3]=d*_-o*u-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),h=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*m*_,this._y=c*m*u-h*d*_,this._z=c*d*_+h*m*u,this._w=c*d*u-h*m*_;break;case"YXZ":this._x=h*d*u+c*m*_,this._y=c*m*u-h*d*_,this._z=c*d*_-h*m*u,this._w=c*d*u+h*m*_;break;case"ZXY":this._x=h*d*u-c*m*_,this._y=c*m*u+h*d*_,this._z=c*d*_+h*m*u,this._w=c*d*u-h*m*_;break;case"ZYX":this._x=h*d*u-c*m*_,this._y=c*m*u+h*d*_,this._z=c*d*_-h*m*u,this._w=c*d*u+h*m*_;break;case"YZX":this._x=h*d*u+c*m*_,this._y=c*m*u+h*d*_,this._z=c*d*_-h*m*u,this._w=c*d*u-h*m*_;break;case"XZY":this._x=h*d*u-c*m*_,this._y=c*m*u-h*d*_,this._z=c*d*_+h*m*u,this._w=c*d*u+h*m*_;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pr.copy(this).projectOnVector(e),this.sub(Pr)}reflect(e){return this.sub(Pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pr=new k,tl=new yi;class Ne{constructor(e,t,n,s,r,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],m=n[5],_=n[8],v=s[0],p=s[3],f=s[6],E=s[1],A=s[4],M=s[7],w=s[2],T=s[5],R=s[8];return r[0]=a*v+o*E+l*w,r[3]=a*p+o*A+l*T,r[6]=a*f+o*M+l*R,r[1]=c*v+d*E+u*w,r[4]=c*p+d*A+u*T,r[7]=c*f+d*M+u*R,r[2]=h*v+m*E+_*w,r[5]=h*p+m*A+_*T,r[8]=h*f+m*M+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,m=c*r-a*l,_=t*u+n*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(s*c-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Dr.makeScale(e,t)),this}rotate(e){return this.premultiply(Dr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dr=new Ne,nl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wh(){const i={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===je&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ji]:{primaries:e,whitePoint:n,transfer:fr,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const Ge=wh();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ei;class Th{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ei===void 0&&(Ei=mr("canvas")),Ei.width=e.width,Ei.height=e.height;const s=Ei.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ah=0;class wo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lr(s[a].image)):r.push(Lr(s[a]))}else r=Lr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Th.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Rh=0;const Ir=new k;class Dt extends xi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=In,s=In,r=Pt,a=ui,o=cn,l=Kt,c=Dt.DEFAULT_ANISOTROPY,d=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Zn(),this.name="",this.source=new wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ir).x}get height(){return this.source.getSize(Ir).y}get depth(){return this.source.getSize(Ir).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Mc;Dt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],m=l[5],_=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,M=(m+1)/2,w=(f+1)/2,T=(d+h)/4,R=(u+v)/4,U=(_+p)/4;return A>M&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=R/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=U/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=U/r),this.set(n,s,r,t),this}let E=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(u-v)/E,this.z=(h-d)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ch extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Dt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends Ch{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ic extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ht,this.minFilter=ht,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ph extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ht,this.minFilter=ht,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Fs.subVectors(this.max,rs),wi.subVectors(e.a,rs),Ti.subVectors(e.b,rs),Ai.subVectors(e.c,rs),Hn.subVectors(Ti,wi),zn.subVectors(Ai,Ti),ii.subVectors(wi,Ai);let t=[0,-Hn.z,Hn.y,0,-zn.z,zn.y,0,-ii.z,ii.y,Hn.z,0,-Hn.x,zn.z,0,-zn.x,ii.z,0,-ii.x,-Hn.y,Hn.x,0,-zn.y,zn.x,0,-ii.y,ii.x,0];return!Nr(t,wi,Ti,Ai,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Nr(t,wi,Ti,Ai,Fs))?!1:(Os.crossVectors(Hn,zn),t=[Os.x,Os.y,Os.z],Nr(t,wi,Ti,Ai,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new k,new k,new k,new k,new k,new k,new k,new k],tn=new k,ks=new Ts,wi=new k,Ti=new k,Ai=new k,Hn=new k,zn=new k,ii=new k,rs=new k,Fs=new k,Os=new k,si=new k;function Nr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),d=n.dot(si);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Dh=new Ts,as=new k,Ur=new k;class To{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Ur)),this.expandByPoint(as.copy(e.center).sub(Ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rn=new k,kr=new k,Bs=new k,Wn=new k,Fr=new k,Hs=new k,Or=new k;class Ao{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){kr.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(kr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Bs),o=Wn.dot(this.direction),l=-Wn.dot(Bs),c=Wn.lengthSq(),d=Math.abs(1-a*a);let u,h,m,_;if(d>0)if(u=a*l-o,h=a*o-l,_=r*d,u>=0)if(h>=-_)if(h<=_){const v=1/d;u*=v,h*=v,m=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(kr).addScaledVector(Bs,h),m}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){Fr.subVectors(t,e),Hs.subVectors(n,e),Or.crossVectors(Fr,Hs);let a=this.direction.dot(Or),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(Hs.crossVectors(Wn,Hs));if(l<0)return null;const c=o*this.direction.dot(Fr.cross(Wn));if(c<0||l+c>a)return null;const d=-o*Wn.dot(Or);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,a,o,l,c,d,u,h,m,_,v,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,h,m,_,v,p)}set(e,t,n,s,r,a,o,l,c,d,u,h,m,_,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=h,f[3]=m,f[7]=_,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=a*d,m=a*u,_=o*d,v=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*u,_=c*d,v=c*u;t[0]=h+v*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=m*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*u,_=c*d,v=c*u;t[0]=h-v*o,t[4]=-a*u,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*u,_=o*d,v=o*u;t[0]=l*d,t[4]=_*c-m,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*d,t[4]=v-h*u,t[8]=_*u+m,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*u+_,t[10]=h-v*u}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,v=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=a*d,t[9]=m*u-_,t[2]=_*u-m,t[6]=o*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lh,e,Ih)}lookAt(e,t,n){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Gn.crossVectors(n,Gt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Gn.crossVectors(n,Gt)),Gn.normalize(),zs.crossVectors(Gt,Gn),s[0]=Gn.x,s[4]=zs.x,s[8]=Gt.x,s[1]=Gn.y,s[5]=zs.y,s[9]=Gt.y,s[2]=Gn.z,s[6]=zs.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],m=n[13],_=n[2],v=n[6],p=n[10],f=n[14],E=n[3],A=n[7],M=n[11],w=n[15],T=s[0],R=s[4],U=s[8],y=s[12],b=s[1],P=s[5],z=s[9],O=s[13],K=s[2],V=s[6],G=s[10],I=s[14],q=s[3],Q=s[7],ne=s[11],ce=s[15];return r[0]=a*T+o*b+l*K+c*q,r[4]=a*R+o*P+l*V+c*Q,r[8]=a*U+o*z+l*G+c*ne,r[12]=a*y+o*O+l*I+c*ce,r[1]=d*T+u*b+h*K+m*q,r[5]=d*R+u*P+h*V+m*Q,r[9]=d*U+u*z+h*G+m*ne,r[13]=d*y+u*O+h*I+m*ce,r[2]=_*T+v*b+p*K+f*q,r[6]=_*R+v*P+p*V+f*Q,r[10]=_*U+v*z+p*G+f*ne,r[14]=_*y+v*O+p*I+f*ce,r[3]=E*T+A*b+M*K+w*q,r[7]=E*R+A*P+M*V+w*Q,r[11]=E*U+A*z+M*G+w*ne,r[15]=E*y+A*O+M*I+w*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],m=e[14],_=e[3],v=e[7],p=e[11],f=e[15],E=l*m-c*h,A=o*m-c*u,M=o*h-l*u,w=a*m-c*d,T=a*h-l*d,R=a*u-o*d;return t*(v*E-p*A+f*M)-n*(_*E-p*w+f*T)+s*(_*A-v*w+f*R)-r*(_*M-v*T+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],m=e[11],_=e[12],v=e[13],p=e[14],f=e[15],E=u*p*c-v*h*c+v*l*m-o*p*m-u*l*f+o*h*f,A=_*h*c-d*p*c-_*l*m+a*p*m+d*l*f-a*h*f,M=d*v*c-_*u*c+_*o*m-a*v*m-d*o*f+a*u*f,w=_*u*l-d*v*l-_*o*h+a*v*h+d*o*p-a*u*p,T=t*E+n*A+s*M+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=E*R,e[1]=(v*h*r-u*p*r-v*s*m+n*p*m+u*s*f-n*h*f)*R,e[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*f+n*l*f)*R,e[3]=(u*l*r-o*h*r-u*s*c+n*h*c+o*s*m-n*l*m)*R,e[4]=A*R,e[5]=(d*p*r-_*h*r+_*s*m-t*p*m-d*s*f+t*h*f)*R,e[6]=(_*l*r-a*p*r-_*s*c+t*p*c+a*s*f-t*l*f)*R,e[7]=(a*h*r-d*l*r+d*s*c-t*h*c-a*s*m+t*l*m)*R,e[8]=M*R,e[9]=(_*u*r-d*v*r-_*n*m+t*v*m+d*n*f-t*u*f)*R,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*f+t*o*f)*R,e[11]=(d*o*r-a*u*r-d*n*c+t*u*c+a*n*m-t*o*m)*R,e[12]=w*R,e[13]=(d*v*s-_*u*s+_*n*h-t*v*h-d*n*p+t*u*p)*R,e[14]=(_*o*s-a*v*s-_*n*l+t*v*l+a*n*p-t*o*p)*R,e[15]=(a*u*s-d*o*s+d*n*l-t*u*l-a*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,m=r*d,_=r*u,v=a*d,p=a*u,f=o*u,E=l*c,A=l*d,M=l*u,w=n.x,T=n.y,R=n.z;return s[0]=(1-(v+f))*w,s[1]=(m+M)*w,s[2]=(_-A)*w,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(h+f))*T,s[6]=(p+E)*T,s[7]=0,s[8]=(_+A)*R,s[9]=(p-E)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Ri.set(s[0],s[1],s[2]).length();const a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),nn.copy(this);const c=1/r,d=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=d,nn.elements[5]*=d,nn.elements[6]*=d,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=yn,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s);let _,v;if(l)_=r/(a-r),v=a*r/(a-r);else if(o===yn)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===pr)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=yn,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,v;if(l)_=1/(a-r),v=a/(a-r);else if(o===yn)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===pr)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new k,nn=new ot,Lh=new k(0,0,0),Ih=new k(1,1,1),Gn=new k,zs=new k,Gt=new k,sl=new ot,rl=new yi;class Mn{constructor(e=0,t=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Ro{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nh=0;const al=new k,Ci=new yi,Cn=new ot,Ws=new k,os=new k,Uh=new k,kh=new yi,ol=new k(1,0,0),ll=new k(0,1,0),cl=new k(0,0,1),dl={type:"added"},Fh={type:"removed"},Pi={type:"childadded",child:null},Br={type:"childremoved",child:null};class Et extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new k,t=new Mn,n=new yi,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ne}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(os,Ws,this.up):Cn.lookAt(Ws,os,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fh),Br.child=e,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new k(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new k,Pn=new k,Hr=new k,Dn=new k,Di=new k,Li=new k,ul=new k,zr=new k,Wr=new k,Gr=new k,Vr=new ut,qr=new ut,Xr=new ut;class Zt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),Pn.subVectors(n,t),Hr.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(Pn),l=sn.dot(Hr),c=Pn.dot(Pn),d=Pn.dot(Hr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,m=(c*l-o*d)*h,_=(a*d-o*l)*h;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Vr.setScalar(0),qr.setScalar(0),Xr.setScalar(0),Vr.fromBufferAttribute(e,t),qr.fromBufferAttribute(e,n),Xr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Vr,r.x),a.addScaledVector(qr,r.y),a.addScaledVector(Xr,r.z),a}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),Pn.subVectors(e,t),sn.cross(Pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),sn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Di.subVectors(s,n),Li.subVectors(r,n),zr.subVectors(e,n);const l=Di.dot(zr),c=Li.dot(zr);if(l<=0&&c<=0)return t.copy(n);Wr.subVectors(e,s);const d=Di.dot(Wr),u=Li.dot(Wr);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Di,a);Gr.subVectors(e,r);const m=Di.dot(Gr),_=Li.dot(Gr);if(_>=0&&m<=_)return t.copy(r);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Li,o);const p=d*_-m*u;if(p<=0&&u-d>=0&&m-_>=0)return ul.subVectors(r,s),o=(u-d)/(u-d+(m-_)),t.copy(s).addScaledVector(ul,o);const f=1/(p+v+h);return a=v*f,o=h*f,t.copy(n).addScaledVector(Di,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function $r(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=Mh(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$r(a,r,e+1/3),this.g=$r(a,r,e),this.b=$r(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Nc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ge.workingToColorSpace(At.copy(this),e),Math.round(Be(At.r*255,0,255))*65536+Math.round(Be(At.g*255,0,255))*256+Math.round(Be(At.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(At.copy(this),t);const n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Xt){Ge.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,s=At.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Gs);const n=Cr(Vn.h,Gs.h,t),s=Cr(Vn.s,Gs.s,t),r=Cr(Vn.l,Gs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new ze;ze.NAMES=Nc;let Oh=0;class es extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Vi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class As extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new k,Vs=new we;let Bh=0;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=io,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),e}}class Uc extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kc extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hh=0;const jt=new ot,Kr=new Et,Ii=new k,Vt=new Ts,ls=new Ts,bt=new k;class un extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?kc:Uc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Kr.lookAt(e),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Vt.min,ls.min),Vt.expandByPoint(bt),bt.addVectors(Vt.max,ls.max),Vt.expandByPoint(bt)):(Vt.expandByPoint(ls.min),Vt.expandByPoint(ls.max))}Vt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)bt.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),bt.add(Ii)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new k,l[U]=new k;const c=new k,d=new k,u=new k,h=new we,m=new we,_=new we,v=new k,p=new k;function f(U,y,b){c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,y),u.fromBufferAttribute(n,b),h.fromBufferAttribute(r,U),m.fromBufferAttribute(r,y),_.fromBufferAttribute(r,b),d.sub(c),u.sub(c),m.sub(h),_.sub(h);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(P),o[U].add(v),o[y].add(v),o[b].add(v),l[U].add(p),l[y].add(p),l[b].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,y=E.length;U<y;++U){const b=E[U],P=b.start,z=b.count;for(let O=P,K=P+z;O<K;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const A=new k,M=new k,w=new k,T=new k;function R(U){w.fromBufferAttribute(s,U),T.copy(w);const y=o[U];A.copy(y),A.sub(w.multiplyScalar(w.dot(y))).normalize(),M.crossVectors(T,y);const P=M.dot(l[U])<0?-1:1;a.setXYZW(U,A.x,A.y,A.z,P)}for(let U=0,y=E.length;U<y;++U){const b=E[U],P=b.start,z=b.count;for(let O=P,K=P+z;O<K;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,d=new k,u=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*d;for(let f=0;f<d;f++)h[_++]=c[m++]}return new dn(h,d,u)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,m=u.length;h<m;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new ot,ri=new Ao,qs=new To,fl=new k,Xs=new k,$s=new k,Ks=new k,Yr=new k,Ys=new k,pl=new k,js=new k;class Ut extends Et{constructor(e=new un,t=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(Yr.fromBufferAttribute(u,e),a?Ys.addScaledVector(Yr,d):Ys.addScaledVector(Yr.sub(t),d))}t.add(Ys)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(qs.containsPoint(ri.origin)===!1&&(ri.intersectSphere(qs,fl)===null||ri.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(hl.copy(r).invert(),ri.copy(e.ray).applyMatrix4(hl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],f=a[p.materialIndex],E=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,w=A;M<w;M+=3){const T=o.getX(M),R=o.getX(M+1),U=o.getX(M+2);s=Zs(this,f,e,n,c,d,u,T,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){const E=o.getX(p),A=o.getX(p+1),M=o.getX(p+2);s=Zs(this,a,e,n,c,d,u,E,A,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const p=h[_],f=a[p.materialIndex],E=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,w=A;M<w;M+=3){const T=M,R=M+1,U=M+2;s=Zs(this,f,e,n,c,d,u,T,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){const E=p,A=p+1,M=p+2;s=Zs(this,a,e,n,c,d,u,E,A,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function zh(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Jn,o),l===null)return null;js.copy(o),js.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:i}}function Zs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Xs),i.getVertexPosition(l,$s),i.getVertexPosition(c,Ks);const d=zh(i,e,t,n,Xs,$s,Ks,pl);if(d){const u=new k;Zt.getBarycoord(pl,Xs,$s,Ks,u),s&&(d.uv=Zt.getInterpolatedAttribute(s,o,l,c,u,new we)),r&&(d.uv1=Zt.getInterpolatedAttribute(r,o,l,c,u,new we)),a&&(d.normal=Zt.getInterpolatedAttribute(a,o,l,c,u,new k),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new k,materialIndex:0};Zt.getNormal(Xs,$s,Ks,h.normal),d.face=h,d.barycoord=u}return d}class Rs extends un{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(u,2));function _(v,p,f,E,A,M,w,T,R,U,y){const b=M/R,P=w/U,z=M/2,O=w/2,K=T/2,V=R+1,G=U+1;let I=0,q=0;const Q=new k;for(let ne=0;ne<G;ne++){const ce=ne*P-O;for(let Te=0;Te<V;Te++){const Le=Te*b-z;Q[v]=Le*E,Q[p]=ce*A,Q[f]=K,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[p]=0,Q[f]=T>0?1:-1,d.push(Q.x,Q.y,Q.z),u.push(Te/R),u.push(1-ne/U),I+=1}}for(let ne=0;ne<U;ne++)for(let ce=0;ce<R;ce++){const Te=h+ce+V*ne,Le=h+ce+V*(ne+1),at=h+(ce+1)+V*(ne+1),et=h+(ce+1)+V*ne;l.push(Te,Le,et),l.push(Le,at,et),q+=6}o.addGroup(m,q,y),m+=q,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Qi(i[t]);for(const s in n)e[s]=n[s]}return e}function Wh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Gh={clone:Qi,merge:Nt};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Oc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new k,ml=new we,gl=new we;class rn extends Oc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=so*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return so*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,ml,gl),t.subVectors(gl,ml)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Ui=1;class Xh extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Ni,Ui,e,t);s.layers=this.layers,this.add(s);const r=new rn(Ni,Ui,e,t);r.layers=this.layers,this.add(r);const a=new rn(Ni,Ui,e,t);a.layers=this.layers,this.add(a);const o=new rn(Ni,Ui,e,t);o.layers=this.layers,this.add(o);const l=new rn(Ni,Ui,e,t);l.layers=this.layers,this.add(l);const c=new rn(Ni,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Bc extends Dt{constructor(e=[],t=vi,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hc extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rs(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Un});r.uniforms.tEquirect.value=t;const a=new Ut(s,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=Pt),new Xh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class fi extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $h={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($h)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class zc extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=io,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new k;class _r{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wc extends es{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ki;const cs=new k,Fi=new k,Oi=new k,Bi=new we,ds=new we,Gc=new ot,Js=new k,us=new k,Qs=new k,_l=new we,Zr=new we,vl=new we;class Yh extends Et{constructor(e=new Wc){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new un;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kh(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new _r(n,3,0,!1)),ki.setAttribute("uv",new _r(n,2,3,!1))}this.geometry=ki,this.material=e,this.center=new we(.5,.5),this.count=1}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),Gc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;er(Js.set(-.5,-.5,0),Oi,a,Fi,s,r),er(us.set(.5,-.5,0),Oi,a,Fi,s,r),er(Qs.set(.5,.5,0),Oi,a,Fi,s,r),_l.set(0,0),Zr.set(1,0),vl.set(1,1);let o=e.ray.intersectTriangle(Js,us,Qs,!1,cs);if(o===null&&(er(us.set(-.5,.5,0),Oi,a,Fi,s,r),Zr.set(0,1),o=e.ray.intersectTriangle(Js,Qs,us,!1,cs),o===null))return;const l=e.ray.origin.distanceTo(cs);l<e.near||l>e.far||t.push({distance:l,point:cs.clone(),uv:Zt.getInterpolation(cs,Js,us,Qs,_l,Zr,vl,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function er(i,e,t,n,s,r){Bi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ds.x=r*Bi.x-s*Bi.y,ds.y=s*Bi.x+r*Bi.y):ds.copy(Bi),i.copy(e),i.x+=ds.x,i.y+=ds.y,i.applyMatrix4(Gc)}class jh extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ht,d=ht,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jr=new k,Zh=new k,Jh=new Ne;class Xn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Jr.subVectors(n,t).cross(Zh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jh.getNormalMatrix(e),s=this.coplanarPoint(Jr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new To,Qh=new we(.5,.5),tr=new k;class Co{constructor(e=new Xn,t=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],m=r[7],_=r[8],v=r[9],p=r[10],f=r[11],E=r[12],A=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,m-d,f-_,w-E).normalize(),s[1].setComponents(c+a,m+d,f+_,w+E).normalize(),s[2].setComponents(c+o,m+u,f+v,w+A).normalize(),s[3].setComponents(c-o,m-u,f-v,w-A).normalize(),n)s[4].setComponents(l,h,p,M).normalize(),s[5].setComponents(c-l,m-h,f-p,w-M).normalize();else if(s[4].setComponents(c-l,m-h,f-p,w-M).normalize(),t===yn)s[5].setComponents(c+l,m+h,f+p,w+M).normalize();else if(t===pr)s[5].setComponents(l,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=Qh.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(tr.x=s.normal.x>0?e.max.x:e.min.x,tr.y=s.normal.y>0?e.max.y:e.min.y,tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vc extends Dt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ss extends Dt{constructor(e,t,n=Sn,s,r,a,o=ht,l=ht,c,d=On,u=1){if(d!==On&&d!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ef extends Ss{constructor(e,t=Sn,n=vi,s,r,a=ht,o=ht,l,c=On){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qc extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Po extends un{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],d=t/2,u=Math.PI/2*e,h=t,m=2*u+h,_=n*2+r,v=s+1,p=new k,f=new k;for(let E=0;E<=_;E++){let A=0,M=0,w=0,T=0;if(E<=n){const y=E/n,b=y*Math.PI/2;M=-d-e*Math.cos(b),w=e*Math.sin(b),T=-e*Math.cos(b),A=y*u}else if(E<=n+r){const y=(E-n)/r;M=-d+y*t,w=e,T=0,A=u+y*h}else{const y=(E-n-r)/n,b=y*Math.PI/2;M=d+e*Math.sin(b),w=e*Math.cos(b),T=e*Math.sin(b),A=u+h+y*u}const R=Math.max(0,Math.min(1,A/m));let U=0;E===0?U=.5/s:E===_&&(U=-.5/s);for(let y=0;y<=s;y++){const b=y/s,P=b*Math.PI*2,z=Math.sin(P),O=Math.cos(P);f.x=-w*O,f.y=M,f.z=w*z,o.push(f.x,f.y,f.z),p.set(-w*O,T,w*z),p.normalize(),l.push(p.x,p.y,p.z),c.push(b+U,R)}if(E>0){const y=(E-1)*v;for(let b=0;b<s;b++){const P=y+b,z=y+b+1,O=E*v+b,K=E*v+b+1;a.push(P,z,O),a.push(z,K,O)}}}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Nn extends un{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,m=[],_=[],v=[],p=[];for(let f=0;f<d;f++){const E=f*h-a;for(let A=0;A<c;A++){const M=A*u-r;_.push(M,-E,0),v.push(0,0,1),p.push(A/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const A=E+c*f,M=E+c*(f+1),w=E+1+c*(f+1),T=E+1+c*f;m.push(A,M,T),m.push(M,w,T)}this.setIndex(m),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.widthSegments,e.heightSegments)}}class tf extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nf extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sf extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rf extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xc extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Qr=new ot,yl=new k,xl=new k;class af{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(yl),xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xl),t.updateMatrixWorld(),Qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cs extends Oc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class of extends af{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lf extends Xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new of}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class cf extends Xc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class df extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const bl=new ot;class hf{constructor(e,t,n=0,s=1/0){this.ray=new Ao(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bl),this}intersectObject(e,t=!0,n=[]){return ro(e,this,n,t),n.sort(Sl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ro(e[s],this,n,t);return n.sort(Sl),n}}function Sl(i,e){return i.distance-e.distance}function ro(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ro(r[a],e,t,!0)}}class Ml{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ff extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function El(i,e,t,n){const s=pf(n);switch(t){case Rc:return i*e;case Pc:return i*e/s.components*s.byteLength;case xo:return i*e/s.components*s.byteLength;case Zi:return i*e*2/s.components*s.byteLength;case bo:return i*e*2/s.components*s.byteLength;case Cc:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case So:return i*e*4/s.components*s.byteLength;case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cr:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:case Ra:return Math.max(i,16)*Math.max(e,8)/4;case wa:case Aa:return Math.max(i,8)*Math.max(e,8)/2;case Ca:case Pa:case La:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ja:case Za:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qa:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pf(i){switch(i){case Kt:case Ec:return{byteLength:1,components:1};case ys:case wc:case Fn:return{byteLength:2,components:1};case vo:case yo:return{byteLength:2,components:4};case Sn:case _o:case vn:return{byteLength:4,components:1};case Tc:case Ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);function $c(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mf(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<u.length;m++){const _=u[h],v=u[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,u[h]=v)}u.length=h+1;for(let m=0,_=u.length;m<_;m++){const v=u[m];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bf=`#define PI 3.141592653589793
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
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,pp=`uniform sampler2D dfgLUT;
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
}`,mp=`
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wp=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
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
}`,Sm=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,Om=`#define PHONG
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
}`,Bm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:gf,alphahash_pars_fragment:_f,alphamap_fragment:vf,alphamap_pars_fragment:yf,alphatest_fragment:xf,alphatest_pars_fragment:bf,aomap_fragment:Sf,aomap_pars_fragment:Mf,batching_pars_vertex:Ef,batching_vertex:wf,begin_vertex:Tf,beginnormal_vertex:Af,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Nf,color_fragment:Uf,color_pars_fragment:kf,color_pars_vertex:Ff,color_vertex:Of,common:Bf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:zf,displacementmap_pars_vertex:Wf,displacementmap_vertex:Gf,emissivemap_fragment:Vf,emissivemap_pars_fragment:qf,colorspace_fragment:Xf,colorspace_pars_fragment:$f,envmap_fragment:Kf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:jf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:lp,envmap_vertex:Jf,fog_vertex:Qf,fog_pars_vertex:ep,fog_fragment:tp,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:ap,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:dp,lights_phong_fragment:up,lights_phong_pars_fragment:hp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:_p,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:bp,map_fragment:Sp,map_pars_fragment:Mp,map_particle_fragment:Ep,map_particle_pars_fragment:wp,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Ap,morphinstance_vertex:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Lp,normal_fragment_begin:Ip,normal_fragment_maps:Np,normal_pars_fragment:Up,normal_pars_vertex:kp,normal_vertex:Fp,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Wp,opaque_fragment:Gp,packing:Vp,premultiplied_alpha_fragment:qp,project_vertex:Xp,dithering_fragment:$p,dithering_pars_fragment:Kp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:Jp,shadowmap_vertex:Qp,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:sm,specularmap_fragment:rm,specularmap_pars_fragment:am,tonemapping_fragment:om,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:dm,uv_pars_fragment:um,uv_pars_vertex:hm,uv_vertex:fm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:_m,backgroundCube_frag:vm,cube_vert:ym,cube_frag:xm,depth_vert:bm,depth_frag:Sm,distance_vert:Mm,distance_frag:Em,equirect_vert:wm,equirect_frag:Tm,linedashed_vert:Am,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Dm,meshlambert_frag:Lm,meshmatcap_vert:Im,meshmatcap_frag:Nm,meshnormal_vert:Um,meshnormal_frag:km,meshphong_vert:Fm,meshphong_frag:Om,meshphysical_vert:Bm,meshphysical_frag:Hm,meshtoon_vert:zm,meshtoon_frag:Wm,points_vert:Gm,points_frag:Vm,shadow_vert:qm,shadow_frag:Xm,sprite_vert:$m,sprite_frag:Km},le={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},gn={basic:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Nt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Nt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Nt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Nt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Nt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Nt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Nt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Nt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Nt([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Nt([le.lights,le.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};gn.physical={uniforms:Nt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const nr={r:0,b:0,g:0},oi=new Mn,Ym=new ot;function jm(i,e,t,n,s,r,a){const o=new ze(0);let l=r===!0?0:1,c,d,u=null,h=0,m=null;function _(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?t:e).get(M)),M}function v(A){let M=!1;const w=_(A);w===null?f(o,l):w&&w.isColor&&(f(w,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,M){const w=_(M);w&&(w.isCubeTexture||w.mapping===xr)?(d===void 0&&(d=new Ut(new Rs(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Qi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),oi.copy(M.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(oi)),d.material.toneMapped=Ge.getTransfer(w.colorSpace)!==je,(u!==w||h!==w.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=w,h=w.version,m=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ut(new Nn(2,2),new En({name:"BackgroundMaterial",uniforms:Qi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(w.colorSpace)!==je,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||h!==w.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,h=w.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,M){A.getRGB(nr,Fc(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,M,a)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,M=1){o.set(A),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(o,l)},render:v,addToRenderList:p,dispose:E}}function Zm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(b,P,z,O,K){let V=!1;const G=u(O,z,P);r!==G&&(r=G,c(r.object)),V=m(b,O,z,K),V&&_(b,O,z,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(b,P,z,O),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function u(b,P,z){const O=z.wireframe===!0;let K=n[b.id];K===void 0&&(K={},n[b.id]=K);let V=K[P.id];V===void 0&&(V={},K[P.id]=V);let G=V[O];return G===void 0&&(G=h(l()),V[O]=G),G}function h(b){const P=[],z=[],O=[];for(let K=0;K<t;K++)P[K]=0,z[K]=0,O[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:b,attributes:{},index:null}}function m(b,P,z,O){const K=r.attributes,V=P.attributes;let G=0;const I=z.getAttributes();for(const q in I)if(I[q].location>=0){const ne=K[q];let ce=V[q];if(ce===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ne===void 0||ne.attribute!==ce||ce&&ne.data!==ce.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function _(b,P,z,O){const K={},V=P.attributes;let G=0;const I=z.getAttributes();for(const q in I)if(I[q].location>=0){let ne=V[q];ne===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));const ce={};ce.attribute=ne,ne&&ne.data&&(ce.data=ne.data),K[q]=ce,G++}r.attributes=K,r.attributesNum=G,r.index=O}function v(){const b=r.newAttributes;for(let P=0,z=b.length;P<z;P++)b[P]=0}function p(b){f(b,0)}function f(b,P){const z=r.newAttributes,O=r.enabledAttributes,K=r.attributeDivisors;z[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),K[b]!==P&&(i.vertexAttribDivisor(b,P),K[b]=P)}function E(){const b=r.newAttributes,P=r.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==b[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function A(b,P,z,O,K,V,G){G===!0?i.vertexAttribIPointer(b,P,z,K,V):i.vertexAttribPointer(b,P,z,O,K,V)}function M(b,P,z,O){v();const K=O.attributes,V=z.getAttributes(),G=P.defaultAttributeValues;for(const I in V){const q=V[I];if(q.location>=0){let Q=K[I];if(Q===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),Q!==void 0){const ne=Q.normalized,ce=Q.itemSize,Te=e.get(Q);if(Te===void 0)continue;const Le=Te.buffer,at=Te.type,et=Te.bytesPerElement,$=at===i.INT||at===i.UNSIGNED_INT||Q.gpuType===_o;if(Q.isInterleavedBufferAttribute){const Z=Q.data,pe=Z.stride,Ie=Q.offset;if(Z.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)f(q.location+_e,Z.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let _e=0;_e<q.locationSize;_e++)A(q.location+_e,ce/q.locationSize,at,ne,pe*et,(Ie+ce/q.locationSize*_e)*et,$)}else{if(Q.isInstancedBufferAttribute){for(let Z=0;Z<q.locationSize;Z++)f(q.location+Z,Q.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Z=0;Z<q.locationSize;Z++)p(q.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Z=0;Z<q.locationSize;Z++)A(q.location+Z,ce/q.locationSize,at,ne,ce*et,ce/q.locationSize*Z*et,$)}}else if(G!==void 0){const ne=G[I];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(q.location,ne);break;case 3:i.vertexAttrib3fv(q.location,ne);break;case 4:i.vertexAttrib4fv(q.location,ne);break;default:i.vertexAttrib1fv(q.location,ne)}}}}E()}function w(){U();for(const b in n){const P=n[b];for(const z in P){const O=P[z];for(const K in O)d(O[K].object),delete O[K];delete P[z]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const z in P){const O=P[z];for(const K in O)d(O[K].object),delete O[K];delete P[z]}delete n[b.id]}function R(b){for(const P in n){const z=n[P];if(z[b.id]===void 0)continue;const O=z[b.id];for(const K in O)d(O[K].object),delete O[K];delete z[b.id]}}function U(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function Jm(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function o(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=d[_];t.update(m,n,1)}function l(c,d,u,h){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let _=0;for(let v=0;v<u;v++)_+=d[v]*h[v];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Qm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Kt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vn&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ce("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:M,maxSamples:w,samples:T}}function eg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Xn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||n!==0||s;return s=h,n=u.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,m){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?d(null):c();else{const E=r?0:n,A=E*4;let M=f.clippingState||null;l.value=M,M=d(_,h,A,m);for(let w=0;w!==A;++w)M[w]=t[w];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,m,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const f=m+v*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let A=0,M=m;A!==v;++A,M+=4)a.copy(u[A]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function tg(i){let e=new WeakMap;function t(a,o){return o===Sa?a.mapping=vi:o===Ma&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sa||o===Ma)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Yn=4,wl=[.125,.215,.35,.446,.526,.582],di=20,ng=256,hs=new Cs,Tl=new ze;let ea=null,ta=0,na=0,ia=!1;const ig=new k;class Al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=ig}=r;ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ea,ta,na),this._renderer.xr.enabled=ia,e.scissorTest=!1,Hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Fn,format:cn,colorSpace:Ji,depthBuffer:!1},s=Rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sg(r)),this._blurMaterial=ag(r,e,t),this._ggxMaterial=rg(r,e,t)}return s}_compileMaterial(e){const t=new Ut(new un,e);this._renderer.compile(t,hs)}_sceneToCubeUV(e,t,n,s,r){const l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,m=u.toneMapping;u.getClearColor(Tl),u.toneMapping=xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Rs,new As({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let f=!1;const E=e.background;E?E.isColor&&(p.color.copy(E),e.background=null,f=!0):(p.color.copy(Tl),f=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[A]));const w=this._cubeSize;Hi(s,M*w,A>2?w:0,w,w),u.setRenderTarget(s),f&&u.render(v,l),u.render(e,l)}u.toneMapping=m,u.autoClear=h,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===vi||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Hi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,hs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,m=u*h,{_lodMax:_}=this,v=this._sizeLods[n],p=3*v*(n>_-Yn?n-_+Yn:0),f=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,Hi(r,p,f,3*v,2*v),s.setRenderTarget(r),s.render(o,hs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Hi(e,p,f,3*v,2*v),s.setRenderTarget(e),s.render(o,hs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[s];u.material=c;const h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*di-1),v=r/_,p=isFinite(r)?1+Math.floor(d*v):di;p>di&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);const f=[];let E=0;for(let R=0;R<di;++R){const U=R/v,y=Math.exp(-U*U/2);f.push(y),R===0?E+=y:R<p&&(E+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-n;const M=this._sizeLods[s],w=3*M*(s>A-Yn?s-A+Yn:0),T=4*(this._cubeSize-M);Hi(t,w,T,3*M,2*M),l.setRenderTarget(t),l.render(u,hs)}}function sg(i){const e=[],t=[],n=[];let s=i;const r=i-Yn+1+wl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Yn?l=wl[a-i+Yn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,_=6,v=3,p=2,f=1,E=new Float32Array(v*_*m),A=new Float32Array(p*_*m),M=new Float32Array(f*_*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,U=T>2?0:-1,y=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];E.set(y,v*_*T),A.set(h,p*_*T);const b=[T,T,T,T,T,T];M.set(b,f*_*T)}const w=new un;w.setAttribute("position",new dn(E,v)),w.setAttribute("uv",new dn(A,p)),w.setAttribute("faceIndex",new dn(M,f)),n.push(new Ut(w,null)),s>Yn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Rl(i,e,t){const n=new bn(i,e,t);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rg(i,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ng,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:br(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ag(i,e,t){const n=new Float32Array(di),s=new k(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:br(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Cl(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:br(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Pl(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function br(){return`

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
	`}function og(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sa||l===Ma,d=l===vi||l===ji;if(c||d){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Al(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&s(m)?(t===null&&(t=new Al(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function lg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function cg(i,e,t,n){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(u){const h=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let A=0,M=E.length;A<M;A+=3){const w=E[A+0],T=E[A+1],R=E[A+2];h.push(w,T,T,R,R,w)}}else if(_!==void 0){const E=_.array;v=_.version;for(let A=0,M=E.length/3-1;A<M;A+=3){const w=A+0,T=A+1,R=A+2;h.push(w,T,T,R,R,w)}}else return;const p=new(Lc(h)?kc:Uc)(h,1);p.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,p)}function d(u){const h=r.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function dg(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,m){i.drawElements(n,m,r,h*a),t.update(m,n,1)}function c(h,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,h*a,_),t.update(m,n,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,h,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];t.update(p,n,1)}function u(h,m,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/a,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,h,0,v,0,_);let f=0;for(let E=0;E<_;E++)f+=m[E]*v[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function ug(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hg(i,e,t){const n=new WeakMap,s=new ut;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let b=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var m=b;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let w=o.attributes.position.count*M,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*T*4*u),U=new Ic(R,w,T,u);U.type=vn,U.needsUpdate=!0;const y=M*4;for(let P=0;P<u;P++){const z=f[P],O=E[P],K=A[P],V=w*T*4*P;for(let G=0;G<z.count;G++){const I=G*y;_===!0&&(s.fromBufferAttribute(z,G),R[V+I+0]=s.x,R[V+I+1]=s.y,R[V+I+2]=s.z,R[V+I+3]=0),v===!0&&(s.fromBufferAttribute(O,G),R[V+I+4]=s.x,R[V+I+5]=s.y,R[V+I+6]=s.z,R[V+I+7]=0),p===!0&&(s.fromBufferAttribute(K,G),R[V+I+8]=s.x,R[V+I+9]=s.y,R[V+I+10]=s.z,R[V+I+11]=K.itemSize===4?s.w:1)}}h={count:u,texture:U,size:new we(w,T)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function fg(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const pg={[gc]:"LINEAR_TONE_MAPPING",[_c]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[bc]:"AGX_TONE_MAPPING",[Sc]:"NEUTRAL_TONE_MAPPING",[xc]:"CUSTOM_TONE_MAPPING"};function mg(i,e,t,n,s){const r=new bn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new bn(e,t,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),o=new un;o.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const l=new tf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ut(o,l),d=new Cs(-1,1,1,-1,0,1);let u=null,h=null,m=!1,_,v=null,p=[],f=!1;this.setSize=function(E,A){r.setSize(E,A),a.setSize(E,A);for(let M=0;M<p.length;M++){const w=p[M];w.setSize&&w.setSize(E,A)}},this.setEffects=function(E){p=E,f=p.length>0&&p[0].isRenderPass===!0;const A=r.width,M=r.height;for(let w=0;w<p.length;w++){const T=p[w];T.setSize&&T.setSize(A,M)}},this.begin=function(E,A){if(m||E.toneMapping===xn&&p.length===0)return!1;if(v=A,A!==null){const M=A.width,w=A.height;(r.width!==M||r.height!==w)&&this.setSize(M,w)}return f===!1&&E.setRenderTarget(r),_=E.toneMapping,E.toneMapping=xn,!0},this.hasRenderPass=function(){return f},this.end=function(E,A){E.toneMapping=_,m=!0;let M=r,w=a;for(let T=0;T<p.length;T++){const R=p[T];if(R.enabled!==!1&&(R.render(E,w,M,A),R.needsSwap!==!1)){const U=M;M=w,w=U}}if(u!==E.outputColorSpace||h!==E.toneMapping){u=E.outputColorSpace,h=E.toneMapping,l.defines={},Ge.getTransfer(u)===je&&(l.defines.SRGB_TRANSFER="");const T=pg[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(v),E.render(c,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Kc=new Dt,ao=new Ss(1,1),Yc=new Ic,jc=new Ph,Zc=new Bc,Dl=[],Ll=[],Il=new Float32Array(16),Nl=new Float32Array(9),Ul=new Float32Array(4);function ts(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Dl[s];if(r===void 0&&(r=new Float32Array(s),Dl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sr(i,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function xg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;Ul.set(n),i.uniformMatrix2fv(this.addr,!1,Ul),yt(t,n)}}function bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;Nl.set(n),i.uniformMatrix3fv(this.addr,!1,Nl),yt(t,n)}}function Sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),yt(t,n)}}function Mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Dg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ao.compareFunction=t.isReversedDepthBuffer()?Eo:Mo,r=ao):r=Kc,t.setTexture2D(e||r,s)}function Lg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jc,s)}function Ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zc,s)}function Ng(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yc,s)}function Ug(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return yg;case 35674:return xg;case 35675:return bg;case 35676:return Sg;case 5124:case 35670:return Mg;case 35667:case 35671:return Eg;case 35668:case 35672:return wg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ng}}function kg(i,e){i.uniform1fv(this.addr,e)}function Fg(i,e){const t=ts(e,this.size,2);i.uniform2fv(this.addr,t)}function Og(i,e){const t=ts(e,this.size,3);i.uniform3fv(this.addr,t)}function Bg(i,e){const t=ts(e,this.size,4);i.uniform4fv(this.addr,t)}function Hg(i,e){const t=ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zg(i,e){const t=ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wg(i,e){const t=ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gg(i,e){i.uniform1iv(this.addr,e)}function Vg(i,e){i.uniform2iv(this.addr,e)}function qg(i,e){i.uniform3iv(this.addr,e)}function Xg(i,e){i.uniform4iv(this.addr,e)}function $g(i,e){i.uniform1uiv(this.addr,e)}function Kg(i,e){i.uniform2uiv(this.addr,e)}function Yg(i,e){i.uniform3uiv(this.addr,e)}function jg(i,e){i.uniform4uiv(this.addr,e)}function Zg(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ao:a=Kc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Jg(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jc,r[a])}function Qg(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Zc,r[a])}function e_(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yc,r[a])}function t_(i){switch(i){case 5126:return kg;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return Hg;case 35675:return zg;case 35676:return Wg;case 5124:case 35670:return Gg;case 35667:case 35671:return Vg;case 35668:case 35672:return qg;case 35669:case 35673:return Xg;case 5125:return $g;case 36294:return Kg;case 36295:return Yg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return e_}}class n_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ug(t.type)}}class i_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t_(t.type)}}class s_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function kl(i,e){i.seq.push(e),i.map[e.id]=e}function r_(i,e,t){const n=i.name,s=n.length;for(sa.lastIndex=0;;){const r=sa.exec(n),a=sa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){kl(t,c===void 0?new n_(o,i,e):new i_(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new s_(o),kl(t,u)),t=u}}}class hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);r_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Fl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const a_=37297;let o_=0;function l_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ol=new Ne;function c_(i){Ge._getMatrix(Ol,Ge.workingColorSpace,i);const e=`mat3( ${Ol.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case fr:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+l_(i.getShaderSource(e),o)}else return r}function d_(i,e){const t=c_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const u_={[gc]:"Linear",[_c]:"Reinhard",[vc]:"Cineon",[yc]:"ACESFilmic",[bc]:"AgX",[Sc]:"Neutral",[xc]:"Custom"};function h_(i,e){const t=u_[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new k;function f_(){Ge.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function m_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function gs(i){return i!==""}function Hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(__,y_)}const v_=new Map;function y_(i,e){let t=Ue[e];if(t===void 0){const n=v_.get(e);if(n!==void 0)t=Ue[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oo(t)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(i){return i.replace(x_,b_)}function b_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const S_={[ar]:"SHADOWMAP_TYPE_PCF",[ms]:"SHADOWMAP_TYPE_VSM"};function M_(i){return S_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E_={[vi]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE_UV"};function w_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":E_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const T_={[ji]:"ENVMAP_MODE_REFRACTION"};function A_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R_={[mc]:"ENVMAP_BLENDING_MULTIPLY",[dh]:"ENVMAP_BLENDING_MIX",[uh]:"ENVMAP_BLENDING_ADD"};function C_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R_[i.combine]||"ENVMAP_BLENDING_NONE"}function P_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function D_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=M_(t),c=w_(t),d=A_(t),u=C_(t),h=P_(t),m=p_(t),_=m_(r),v=s.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gs).join(`
`),f.length>0&&(f+=`
`)):(p=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),f=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==xn?h_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,d_("linearToOutputTexel",t.outputColorSpace),f_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),a=oo(a),a=Hl(a,t),a=zl(a,t),o=oo(o),o=Hl(o,t),o=zl(o,t),a=Wl(a),o=Wl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=E+p+a,M=E+f+o,w=Fl(s,s.VERTEX_SHADER,A),T=Fl(s,s.FRAGMENT_SHADER,M);s.attachShader(v,w),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(w)||"",K=s.getShaderInfoLog(T)||"",V=z.trim(),G=O.trim(),I=K.trim();let q=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,T);else{const ne=Bl(s,w,"vertex"),ce=Bl(s,T,"fragment");He("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ne+`
`+ce)}else V!==""?Ce("WebGLProgram: Program Info Log:",V):(G===""||I==="")&&(Q=!1);Q&&(P.diagnostics={runnable:q,programLog:V,vertexShader:{log:G,prefix:p},fragmentShader:{log:I,prefix:f}})}s.deleteShader(w),s.deleteShader(T),U=new hr(s,v),y=g_(s,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,a_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let L_=0;class I_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new N_(e),t.set(e,n)),n}}class N_{constructor(e){this.id=L_++,this.code=e,this.usedTimes=0}}function U_(i,e,t,n,s,r,a){const o=new Ro,l=new I_,c=new Set,d=[],u=new Map,h=s.logarithmicDepthBuffer;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,b,P,z,O){const K=z.fog,V=O.geometry,G=y.isMeshStandardMaterial?z.environment:null,I=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),q=I&&I.mapping===xr?I.image.height:null,Q=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&Ce("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=ne!==void 0?ne.length:0;let Te=0;V.morphAttributes.position!==void 0&&(Te=1),V.morphAttributes.normal!==void 0&&(Te=2),V.morphAttributes.color!==void 0&&(Te=3);let Le,at,et,$;if(Q){const Ke=gn[Q];Le=Ke.vertexShader,at=Ke.fragmentShader}else Le=y.vertexShader,at=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),$=l.getFragmentShaderID(y);const Z=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,_e=O.isBatchedMesh===!0,Ve=!!y.map,xt=!!y.matcap,We=!!I,$e=!!y.aoMap,tt=!!y.lightMap,ke=!!y.bumpMap,ft=!!y.normalMap,C=!!y.displacementMap,pt=!!y.emissiveMap,Xe=!!y.metalnessMap,it=!!y.roughnessMap,ye=y.anisotropy>0,S=y.clearcoat>0,g=y.dispersion>0,L=y.iridescence>0,X=y.sheen>0,j=y.transmission>0,W=ye&&!!y.anisotropyMap,be=S&&!!y.clearcoatMap,se=S&&!!y.clearcoatNormalMap,ve=S&&!!y.clearcoatRoughnessMap,Re=L&&!!y.iridescenceMap,ee=L&&!!y.iridescenceThicknessMap,ae=X&&!!y.sheenColorMap,ge=X&&!!y.sheenRoughnessMap,xe=!!y.specularMap,re=!!y.specularColorMap,Fe=!!y.specularIntensityMap,D=j&&!!y.transmissionMap,ue=j&&!!y.thicknessMap,te=!!y.gradientMap,he=!!y.alphaMap,J=y.alphaTest>0,Y=!!y.alphaHash,ie=!!y.extensions;let Pe=xn;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const st={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Le,fragmentShader:at,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:_e,batchingColor:_e&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ji,alphaToCoverage:!!y.alphaToCoverage,map:Ve,matcap:xt,envMap:We,envMapMode:We&&I.mapping,envMapCubeUVHeight:q,aoMap:$e,lightMap:tt,bumpMap:ke,normalMap:ft,displacementMap:C,emissiveMap:pt,normalMapObjectSpace:ft&&y.normalMapType===ph,normalMapTangentSpace:ft&&y.normalMapType===Dc,metalnessMap:Xe,roughnessMap:it,anisotropy:ye,anisotropyMap:W,clearcoat:S,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:ve,dispersion:g,iridescence:L,iridescenceMap:Re,iridescenceThicknessMap:ee,sheen:X,sheenColorMap:ae,sheenRoughnessMap:ge,specularMap:xe,specularColorMap:re,specularIntensityMap:Fe,transmission:j,transmissionMap:D,thicknessMap:ue,gradientMap:te,opaque:y.transparent===!1&&y.blending===Vi&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:J,alphaHash:Y,combine:y.combine,mapUv:Ve&&v(y.map.channel),aoMapUv:$e&&v(y.aoMap.channel),lightMapUv:tt&&v(y.lightMap.channel),bumpMapUv:ke&&v(y.bumpMap.channel),normalMapUv:ft&&v(y.normalMap.channel),displacementMapUv:C&&v(y.displacementMap.channel),emissiveMapUv:pt&&v(y.emissiveMap.channel),metalnessMapUv:Xe&&v(y.metalnessMap.channel),roughnessMapUv:it&&v(y.roughnessMap.channel),anisotropyMapUv:W&&v(y.anisotropyMap.channel),clearcoatMapUv:be&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(y.sheenRoughnessMap.channel),specularMapUv:xe&&v(y.specularMap.channel),specularColorMapUv:re&&v(y.specularColorMap.channel),specularIntensityMapUv:Fe&&v(y.specularIntensityMap.channel),transmissionMapUv:D&&v(y.transmissionMap.channel),thicknessMapUv:ue&&v(y.thicknessMap.channel),alphaMapUv:he&&v(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ft||ye),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Ve||he),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ve&&y.map.isVideoTexture===!0&&Ge.getTransfer(y.map.colorSpace)===je,decodeVideoTextureEmissive:pt&&y.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(y.emissiveMap.colorSpace)===je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===an,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ie&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&y.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function f(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(E(b,y),A(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function E(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function A(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const b=_[y.type];let P;if(b){const z=gn[b];P=Gh.clone(z.uniforms)}else P=y.uniforms;return P}function w(y,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new D_(i,b,y,r),d.push(P),u.set(b,P)),P}function T(y){if(--y.usedTimes===0){const b=d.indexOf(y);d[b]=d[d.length-1],d.pop(),u.delete(y.cacheKey),y.destroy()}}function R(y){l.remove(y)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:w,releaseProgram:T,releaseShaderCache:R,programs:d,dispose:U}}function k_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function F_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ql(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,h,m,_,v,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:h,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=p),e++,f}function o(u,h,m,_,v,p){const f=a(u,h,m,_,v,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,h,m,_,v,p){const f=a(u,h,m,_,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,h){t.length>1&&t.sort(u||F_),n.length>1&&n.sort(h||Vl),s.length>1&&s.sort(h||Vl)}function d(){for(let u=e,h=i.length;u<h;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function O_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ql,i.set(n,[a])):s>=r.length?(a=new ql,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function B_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ze};break;case"SpotLight":t={position:new k,direction:new k,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function H_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let z_=0;function W_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function G_(i){const e=new B_,t=H_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new ot,a=new ot;function o(c){let d=0,u=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,_=0,v=0,p=0,f=0,E=0,A=0,M=0,w=0,T=0,R=0;c.sort(W_);for(let y=0,b=c.length;y<b;y++){const P=c[y],z=P.color,O=P.intensity,K=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Zi?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=z.r*O,u+=z.g*O,h+=z.b*O;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],O);R++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const I=P.shadow,q=t.get(P);q.shadowIntensity=I.intensity,q.shadowBias=I.bias,q.shadowNormalBias=I.normalBias,q.shadowRadius=I.radius,q.shadowMapSize=I.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=G,m++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(z).multiplyScalar(O),G.distance=K,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[v]=G;const I=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,I.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=I.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=I.intensity,q.shadowBias=I.bias,q.shadowNormalBias=I.normalBias,q.shadowRadius=I.radius,q.shadowMapSize=I.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=V,M++}v++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(z).multiplyScalar(O),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=G,p++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const I=P.shadow,q=t.get(P);q.shadowIntensity=I.intensity,q.shadowBias=I.bias,q.shadowNormalBias=I.normalBias,q.shadowRadius=I.radius,q.shadowMapSize=I.mapSize,q.shadowCameraNear=I.camera.near,q.shadowCameraFar=I.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=V,n.pointShadowMatrix[_]=P.shadow.matrix,A++}n.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(O),G.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=G,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const U=n.hash;(U.directionalLength!==m||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==p||U.hemiLength!==f||U.numDirectionalShadows!==E||U.numPointShadows!==A||U.numSpotShadows!==M||U.numSpotMaps!==w||U.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=M+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,U.directionalLength=m,U.pointLength=_,U.spotLength=v,U.rectAreaLength=p,U.hemiLength=f,U.numDirectionalShadows=E,U.numPointShadows=A,U.numSpotShadows=M,U.numSpotMaps=w,U.numLightProbes=R,n.version=z_++)}function l(c,d){let u=0,h=0,m=0,_=0,v=0;const p=d.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const A=c[f];if(A.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(A.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(A.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),h++}else if(A.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Xl(i){const e=new G_(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function V_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Xl(i),e.set(s,[o])):r>=a.length?(o=new Xl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
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
}`,$_=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],K_=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],$l=new ot,fs=new k,ra=new k;function Y_(i,e,t){let n=new Co;const s=new we,r=new we,a=new ut,o=new sf,l=new rf,c={},d=t.maxTextureSize,u={[Jn]:Ht,[Ht]:Jn,[an]:an},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:q_,fragmentShader:X_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new un;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ut(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let f=this.type;this.render=function(T,R,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;T.type===qu&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=ar);const y=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Un),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=f!==this.type;O&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(V=>V.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,V=T.length;K<V;K++){const G=T[K],I=G.shadow;if(I===void 0){Ce("WebGLShadowMap:",G,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const q=I.getFrameExtents();if(s.multiply(q),r.copy(I.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/q.x),s.x=r.x*q.x,I.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/q.y),s.y=r.y*q.y,I.mapSize.y=r.y)),I.map===null||O===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ms){if(G.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new bn(s.x,s.y,{format:Zi,type:Fn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),I.map.texture.name=G.name+".shadowMap",I.map.depthTexture=new Ss(s.x,s.y,vn),I.map.depthTexture.name=G.name+".shadowMapDepth",I.map.depthTexture.format=On,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=ht,I.map.depthTexture.magFilter=ht}else{G.isPointLight?(I.map=new Hc(s.x),I.map.depthTexture=new ef(s.x,Sn)):(I.map=new bn(s.x,s.y),I.map.depthTexture=new Ss(s.x,s.y,Sn)),I.map.depthTexture.name=G.name+".shadowMap",I.map.depthTexture.format=On;const ne=i.state.buffers.depth.getReversed();this.type===ar?(I.map.depthTexture.compareFunction=ne?Eo:Mo,I.map.depthTexture.minFilter=Pt,I.map.depthTexture.magFilter=Pt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=ht,I.map.depthTexture.magFilter=ht)}I.camera.updateProjectionMatrix()}const Q=I.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<Q;ne++){if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(I.map),i.clear());const ce=I.getViewport(ne);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),z.viewport(a)}if(G.isPointLight){const ce=I.camera,Te=I.matrix,Le=G.distance||ce.far;Le!==ce.far&&(ce.far=Le,ce.updateProjectionMatrix()),fs.setFromMatrixPosition(G.matrixWorld),ce.position.copy(fs),ra.copy(ce.position),ra.add($_[ne]),ce.up.copy(K_[ne]),ce.lookAt(ra),ce.updateMatrixWorld(),Te.makeTranslation(-fs.x,-fs.y,-fs.z),$l.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),I._frustum.setFromProjectionMatrix($l,ce.coordinateSystem,ce.reversedDepth)}else I.updateMatrices(G);n=I.getFrustum(),M(R,U,I.camera,G,this.type)}I.isPointLightShadow!==!0&&this.type===ms&&E(I,U),I.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(y,b,P)};function E(T,R){const U=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bn(s.x,s.y,{format:Zi,type:Fn})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,U,h,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,U,m,v,null)}function A(T,R,U,y){let b=null;const P=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=b.uuid,O=R.uuid;let K=c[z];K===void 0&&(K={},c[z]=K);let V=K[O];V===void 0&&(V=b.clone(),K[O]=V,R.addEventListener("dispose",w)),b=V}if(b.visible=R.visible,b.wireframe=R.wireframe,y===ms?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=i.properties.get(b);z.light=U}return b}function M(T,R,U,y,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===ms)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);const O=e.update(T),K=T.material;if(Array.isArray(K)){const V=O.groups;for(let G=0,I=V.length;G<I;G++){const q=V[G],Q=K[q.materialIndex];if(Q&&Q.visible){const ne=A(T,Q,y,b);T.onBeforeShadow(i,T,R,U,O,ne,q),i.renderBufferDirect(U,null,O,ne,T,q),T.onAfterShadow(i,T,R,U,O,ne,q)}}}else if(K.visible){const V=A(T,K,y,b);T.onBeforeShadow(i,T,R,U,O,V,null),i.renderBufferDirect(U,null,O,V,T,null),T.onAfterShadow(i,T,R,U,O,V,null)}}const z=T.children;for(let O=0,K=z.length;O<K;O++)M(z[O],R,U,y,b)}function w(T){T.target.removeEventListener("dispose",w);for(const U in c){const y=c[U],b=T.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const j_={[ma]:ga,[_a]:xa,[va]:ba,[Yi]:ya,[ga]:ma,[xa]:_a,[ba]:va,[ya]:Yi};function Z_(i,e){function t(){let D=!1;const ue=new ut;let te=null;const he=new ut(0,0,0,0);return{setMask:function(J){te!==J&&!D&&(i.colorMask(J,J,J,J),te=J)},setLocked:function(J){D=J},setClear:function(J,Y,ie,Pe,st){st===!0&&(J*=Pe,Y*=Pe,ie*=Pe),ue.set(J,Y,ie,Pe),he.equals(ue)===!1&&(i.clearColor(J,Y,ie,Pe),he.copy(ue))},reset:function(){D=!1,te=null,he.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,te=null,he=null,J=null;return{setReversed:function(Y){if(ue!==Y){const ie=e.get("EXT_clip_control");Y?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),ue=Y;const Pe=J;J=null,this.setClear(Pe)}},getReversed:function(){return ue},setTest:function(Y){Y?Z(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Y){te!==Y&&!D&&(i.depthMask(Y),te=Y)},setFunc:function(Y){if(ue&&(Y=j_[Y]),he!==Y){switch(Y){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case xa:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Y}},setLocked:function(Y){D=Y},setClear:function(Y){J!==Y&&(ue&&(Y=1-Y),i.clearDepth(Y),J=Y)},reset:function(){D=!1,te=null,he=null,J=null,ue=!1}}}function s(){let D=!1,ue=null,te=null,he=null,J=null,Y=null,ie=null,Pe=null,st=null;return{setTest:function(Ke){D||(Ke?Z(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Ke){ue!==Ke&&!D&&(i.stencilMask(Ke),ue=Ke)},setFunc:function(Ke,fn,Tn){(te!==Ke||he!==fn||J!==Tn)&&(i.stencilFunc(Ke,fn,Tn),te=Ke,he=fn,J=Tn)},setOp:function(Ke,fn,Tn){(Y!==Ke||ie!==fn||Pe!==Tn)&&(i.stencilOp(Ke,fn,Tn),Y=Ke,ie=fn,Pe=Tn)},setLocked:function(Ke){D=Ke},setClear:function(Ke){st!==Ke&&(i.clearStencil(Ke),st=Ke)},reset:function(){D=!1,ue=null,te=null,he=null,J=null,Y=null,ie=null,Pe=null,st=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,m=[],_=null,v=!1,p=null,f=null,E=null,A=null,M=null,w=null,T=null,R=new ze(0,0,0),U=0,y=!1,b=null,P=null,z=null,O=null,K=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,I=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=I>=1):q.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=I>=2);let Q=null,ne={};const ce=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),Le=new ut().fromArray(ce),at=new ut().fromArray(Te);function et(D,ue,te,he){const J=new Uint8Array(4),Y=i.createTexture();i.bindTexture(D,Y),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<te;ie++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(ue+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return Y}const $={};$[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Yi),ke(!1),ft(Ko),Z(i.CULL_FACE),$e(Un);function Z(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function pe(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ie(D,ue){return u[D]!==ue?(i.bindFramebuffer(D,ue),u[D]=ue,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(D,ue){let te=m,he=!1;if(D){te=h.get(ue),te===void 0&&(te=[],h.set(ue,te));const J=D.textures;if(te.length!==J.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,ie=J.length;Y<ie;Y++)te[Y]=i.COLOR_ATTACHMENT0+Y;te.length=J.length,he=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,he=!0);he&&i.drawBuffers(te)}function Ve(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const xt={[ci]:i.FUNC_ADD,[$u]:i.FUNC_SUBTRACT,[Ku]:i.FUNC_REVERSE_SUBTRACT};xt[Yu]=i.MIN,xt[ju]=i.MAX;const We={[Zu]:i.ZERO,[Ju]:i.ONE,[Qu]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[th]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[ah]:i.CONSTANT_COLOR,[oh]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(D,ue,te,he,J,Y,ie,Pe,st,Ke){if(D===Un){v===!0&&(pe(i.BLEND),v=!1);return}if(v===!1&&(Z(i.BLEND),v=!0),D!==Xu){if(D!==p||Ke!==y){if((f!==ci||M!==ci)&&(i.blendEquation(i.FUNC_ADD),f=ci,M=ci),Ke)switch(D){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.ONE,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",D);break}else switch(D){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jo:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zo:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",D);break}E=null,A=null,w=null,T=null,R.set(0,0,0),U=0,p=D,y=Ke}return}J=J||ue,Y=Y||te,ie=ie||he,(ue!==f||J!==M)&&(i.blendEquationSeparate(xt[ue],xt[J]),f=ue,M=J),(te!==E||he!==A||Y!==w||ie!==T)&&(i.blendFuncSeparate(We[te],We[he],We[Y],We[ie]),E=te,A=he,w=Y,T=ie),(Pe.equals(R)===!1||st!==U)&&(i.blendColor(Pe.r,Pe.g,Pe.b,st),R.copy(Pe),U=st),p=D,y=!1}function tt(D,ue){D.side===an?pe(i.CULL_FACE):Z(i.CULL_FACE);let te=D.side===Ht;ue&&(te=!te),ke(te),D.blending===Vi&&D.transparent===!1?$e(Un):$e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const he=D.stencilWrite;o.setTest(he),he&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function ft(D){D!==Gu?(Z(i.CULL_FACE),D!==P&&(D===Ko?i.cullFace(i.BACK):D===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),P=D}function C(D){D!==z&&(G&&i.lineWidth(D),z=D)}function pt(D,ue,te){D?(Z(i.POLYGON_OFFSET_FILL),(O!==ue||K!==te)&&(i.polygonOffset(ue,te),O=ue,K=te)):pe(i.POLYGON_OFFSET_FILL)}function Xe(D){D?Z(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function it(D){D===void 0&&(D=i.TEXTURE0+V-1),Q!==D&&(i.activeTexture(D),Q=D)}function ye(D,ue,te){te===void 0&&(Q===null?te=i.TEXTURE0+V-1:te=Q);let he=ne[te];he===void 0&&(he={type:void 0,texture:void 0},ne[te]=he),(he.type!==D||he.texture!==ue)&&(Q!==te&&(i.activeTexture(te),Q=te),i.bindTexture(D,ue||$[D]),he.type=D,he.texture=ue)}function S(){const D=ne[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function X(){try{i.texSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function j(){try{i.texSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function se(){try{i.texStorage2D(...arguments)}catch(D){He("WebGLState:",D)}}function ve(){try{i.texStorage3D(...arguments)}catch(D){He("WebGLState:",D)}}function Re(){try{i.texImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function ae(D){Le.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Le.copy(D))}function ge(D){at.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),at.copy(D))}function xe(D,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let he=te.get(D);he===void 0&&(he=i.getUniformBlockIndex(ue,D.name),te.set(D,he))}function re(D,ue){const he=c.get(ue).get(D);l.get(ue)!==he&&(i.uniformBlockBinding(ue,he,D.__bindingPointIndex),l.set(ue,he))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,ne={},u={},h=new WeakMap,m=[],_=null,v=!1,p=null,f=null,E=null,A=null,M=null,w=null,T=null,R=new ze(0,0,0),U=0,y=!1,b=null,P=null,z=null,O=null,K=null,Le.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:pe,bindFramebuffer:Ie,drawBuffers:_e,useProgram:Ve,setBlending:$e,setMaterial:tt,setFlipSided:ke,setCullFace:ft,setLineWidth:C,setPolygonOffset:pt,setScissorTest:Xe,activeTexture:it,bindTexture:ye,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Re,texImage3D:ee,updateUBOMapping:xe,uniformBlockBinding:re,texStorage2D:se,texStorage3D:ve,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:be,scissor:ae,viewport:ge,reset:Fe}}function J_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,d=new WeakMap;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return m?new OffscreenCanvas(S,g):mr("canvas")}function v(S,g,L){let X=1;const j=ye(S);if((j.width>L||j.height>L)&&(X=L/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const W=Math.floor(X*j.width),be=Math.floor(X*j.height);u===void 0&&(u=_(W,be));const se=g?_(W,be):u;return se.width=W,se.height=be,se.getContext("2d").drawImage(S,0,0,W,be),Ce("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+be+")."),se}else return"data"in S&&Ce("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function p(S){return S.generateMipmaps}function f(S){i.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(S,g,L,X,j=!1){if(S!==null){if(i[S]!==void 0)return i[S];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=g;if(g===i.RED&&(L===i.FLOAT&&(W=i.R32F),L===i.HALF_FLOAT&&(W=i.R16F),L===i.UNSIGNED_BYTE&&(W=i.R8)),g===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.R8UI),L===i.UNSIGNED_SHORT&&(W=i.R16UI),L===i.UNSIGNED_INT&&(W=i.R32UI),L===i.BYTE&&(W=i.R8I),L===i.SHORT&&(W=i.R16I),L===i.INT&&(W=i.R32I)),g===i.RG&&(L===i.FLOAT&&(W=i.RG32F),L===i.HALF_FLOAT&&(W=i.RG16F),L===i.UNSIGNED_BYTE&&(W=i.RG8)),g===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RG8UI),L===i.UNSIGNED_SHORT&&(W=i.RG16UI),L===i.UNSIGNED_INT&&(W=i.RG32UI),L===i.BYTE&&(W=i.RG8I),L===i.SHORT&&(W=i.RG16I),L===i.INT&&(W=i.RG32I)),g===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RGB8UI),L===i.UNSIGNED_SHORT&&(W=i.RGB16UI),L===i.UNSIGNED_INT&&(W=i.RGB32UI),L===i.BYTE&&(W=i.RGB8I),L===i.SHORT&&(W=i.RGB16I),L===i.INT&&(W=i.RGB32I)),g===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),L===i.UNSIGNED_INT&&(W=i.RGBA32UI),L===i.BYTE&&(W=i.RGBA8I),L===i.SHORT&&(W=i.RGBA16I),L===i.INT&&(W=i.RGBA32I)),g===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),g===i.RGBA){const be=j?fr:Ge.getTransfer(X);L===i.FLOAT&&(W=i.RGBA32F),L===i.HALF_FLOAT&&(W=i.RGBA16F),L===i.UNSIGNED_BYTE&&(W=be===je?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(S,g){let L;return S?g===null||g===Sn||g===xs?L=i.DEPTH24_STENCIL8:g===vn?L=i.DEPTH32F_STENCIL8:g===ys&&(L=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Sn||g===xs?L=i.DEPTH_COMPONENT24:g===vn?L=i.DEPTH_COMPONENT32F:g===ys&&(L=i.DEPTH_COMPONENT16),L}function w(S,g){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==ht&&S.minFilter!==Pt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function T(S){const g=S.target;g.removeEventListener("dispose",T),U(g),g.isVideoTexture&&d.delete(g)}function R(S){const g=S.target;g.removeEventListener("dispose",R),b(g)}function U(S){const g=n.get(S);if(g.__webglInit===void 0)return;const L=S.source,X=h.get(L);if(X){const j=X[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(S),Object.keys(X).length===0&&h.delete(L)}n.remove(S)}function y(S){const g=n.get(S);i.deleteTexture(g.__webglTexture);const L=S.source,X=h.get(L);delete X[g.__cacheKey],a.memory.textures--}function b(S){const g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let j=0;j<g.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[X][j]);else i.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)i.deleteFramebuffer(g.__webglFramebuffer[X]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=S.textures;for(let X=0,j=L.length;X<j;X++){const W=n.get(L[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(L[X])}n.remove(S)}let P=0;function z(){P=0}function O(){const S=P;return S>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function K(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function V(S,g){const L=n.get(S);if(S.isVideoTexture&&Xe(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&L.__version!==S.version){const X=S.image;if(X===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{$(L,S,g);return}}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+g)}function G(S,g){const L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){$(L,S,g);return}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+g)}function I(S,g){const L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){$(L,S,g);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+g)}function q(S,g){const L=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&L.__version!==S.version){Z(L,S,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+g)}const Q={[vs]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},ne={[ht]:i.NEAREST,[hh]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},ce={[mh]:i.NEVER,[xh]:i.ALWAYS,[gh]:i.LESS,[Mo]:i.LEQUAL,[_h]:i.EQUAL,[Eo]:i.GEQUAL,[vh]:i.GREATER,[yh]:i.NOTEQUAL};function Te(S,g){if(g.type===vn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Pt||g.magFilter===Rr||g.magFilter===Us||g.magFilter===ui||g.minFilter===Pt||g.minFilter===Rr||g.minFilter===Us||g.minFilter===ui)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,Q[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Q[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Q[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ne[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ne[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ht||g.minFilter!==Us&&g.minFilter!==ui||g.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Le(S,g){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",T));const X=g.source;let j=h.get(X);j===void 0&&(j={},h.set(X,j));const W=K(g);if(W!==S.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),j[W].usedTimes++;const be=j[S.__cacheKey];be!==void 0&&(j[S.__cacheKey].usedTimes--,be.usedTimes===0&&y(g)),S.__cacheKey=W,S.__webglTexture=j[W].texture}return L}function at(S,g,L){return Math.floor(Math.floor(S/L)/g)}function et(S,g,L,X){const W=S.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,L,X,g.data);else{W.sort((ee,ae)=>ee.start-ae.start);let be=0;for(let ee=1;ee<W.length;ee++){const ae=W[be],ge=W[ee],xe=ae.start+ae.count,re=at(ge.start,g.width,4),Fe=at(ae.start,g.width,4);ge.start<=xe+1&&re===Fe&&at(ge.start+ge.count-1,g.width,4)===re?ae.count=Math.max(ae.count,ge.start+ge.count-ae.start):(++be,W[be]=ge)}W.length=be+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ee=0,ae=W.length;ee<ae;ee++){const ge=W[ee],xe=Math.floor(ge.start/4),re=Math.ceil(ge.count/4),Fe=xe%g.width,D=Math.floor(xe/g.width),ue=re,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Fe,D,ue,te,L,X,g.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function $(S,g,L){let X=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=i.TEXTURE_3D);const j=Le(S,g),W=g.source;t.bindTexture(X,S.__webglTexture,i.TEXTURE0+L);const be=n.get(W);if(W.version!==be.__version||j===!0){t.activeTexture(i.TEXTURE0+L);const se=Ge.getPrimaries(Ge.workingColorSpace),ve=g.colorSpace===Kn?null:Ge.getPrimaries(g.colorSpace),Re=g.colorSpace===Kn||se===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ee=v(g.image,!1,s.maxTextureSize);ee=it(g,ee);const ae=r.convert(g.format,g.colorSpace),ge=r.convert(g.type);let xe=A(g.internalFormat,ae,ge,g.colorSpace,g.isVideoTexture);Te(X,g);let re;const Fe=g.mipmaps,D=g.isVideoTexture!==!0,ue=be.__version===void 0||j===!0,te=W.dataReady,he=w(g,ee);if(g.isDepthTexture)xe=M(g.format===hi,g.type),ue&&(D?t.texStorage2D(i.TEXTURE_2D,1,xe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,xe,ee.width,ee.height,0,ae,ge,null));else if(g.isDataTexture)if(Fe.length>0){D&&ue&&t.texStorage2D(i.TEXTURE_2D,he,xe,Fe[0].width,Fe[0].height);for(let J=0,Y=Fe.length;J<Y;J++)re=Fe[J],D?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,ae,ge,re.data):t.texImage2D(i.TEXTURE_2D,J,xe,re.width,re.height,0,ae,ge,re.data);g.generateMipmaps=!1}else D?(ue&&t.texStorage2D(i.TEXTURE_2D,he,xe,ee.width,ee.height),te&&et(g,ee,ae,ge)):t.texImage2D(i.TEXTURE_2D,0,xe,ee.width,ee.height,0,ae,ge,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,Fe[0].width,Fe[0].height,ee.depth);for(let J=0,Y=Fe.length;J<Y;J++)if(re=Fe[J],g.format!==cn)if(ae!==null)if(D){if(te)if(g.layerUpdates.size>0){const ie=El(re.width,re.height,g.format,g.type);for(const Pe of g.layerUpdates){const st=re.data.subarray(Pe*ie/re.data.BYTES_PER_ELEMENT,(Pe+1)*ie/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Pe,re.width,re.height,1,ae,st)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,ee.depth,ae,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,xe,re.width,re.height,ee.depth,0,re.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,ee.depth,ae,ge,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,xe,re.width,re.height,ee.depth,0,ae,ge,re.data)}else{D&&ue&&t.texStorage2D(i.TEXTURE_2D,he,xe,Fe[0].width,Fe[0].height);for(let J=0,Y=Fe.length;J<Y;J++)re=Fe[J],g.format!==cn?ae!==null?D?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,ae,re.data):t.compressedTexImage2D(i.TEXTURE_2D,J,xe,re.width,re.height,0,re.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,ae,ge,re.data):t.texImage2D(i.TEXTURE_2D,J,xe,re.width,re.height,0,ae,ge,re.data)}else if(g.isDataArrayTexture)if(D){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,ee.width,ee.height,ee.depth),te)if(g.layerUpdates.size>0){const J=El(ee.width,ee.height,g.format,g.type);for(const Y of g.layerUpdates){const ie=ee.data.subarray(Y*J/ee.data.BYTES_PER_ELEMENT,(Y+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,ae,ge,ie)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ae,ge,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,ee.width,ee.height,ee.depth,0,ae,ge,ee.data);else if(g.isData3DTexture)D?(ue&&t.texStorage3D(i.TEXTURE_3D,he,xe,ee.width,ee.height,ee.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ae,ge,ee.data)):t.texImage3D(i.TEXTURE_3D,0,xe,ee.width,ee.height,ee.depth,0,ae,ge,ee.data);else if(g.isFramebufferTexture){if(ue)if(D)t.texStorage2D(i.TEXTURE_2D,he,xe,ee.width,ee.height);else{let J=ee.width,Y=ee.height;for(let ie=0;ie<he;ie++)t.texImage2D(i.TEXTURE_2D,ie,xe,J,Y,0,ae,ge,null),J>>=1,Y>>=1}}else if(Fe.length>0){if(D&&ue){const J=ye(Fe[0]);t.texStorage2D(i.TEXTURE_2D,he,xe,J.width,J.height)}for(let J=0,Y=Fe.length;J<Y;J++)re=Fe[J],D?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ae,ge,re):t.texImage2D(i.TEXTURE_2D,J,xe,ae,ge,re);g.generateMipmaps=!1}else if(D){if(ue){const J=ye(ee);t.texStorage2D(i.TEXTURE_2D,he,xe,J.width,J.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ge,ee)}else t.texImage2D(i.TEXTURE_2D,0,xe,ae,ge,ee);p(g)&&f(X),be.__version=W.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Z(S,g,L){if(g.image.length!==6)return;const X=Le(S,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+L);const W=n.get(j);if(j.version!==W.__version||X===!0){t.activeTexture(i.TEXTURE0+L);const be=Ge.getPrimaries(Ge.workingColorSpace),se=g.colorSpace===Kn?null:Ge.getPrimaries(g.colorSpace),ve=g.colorSpace===Kn||be===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Re=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,ae=[];for(let Y=0;Y<6;Y++)!Re&&!ee?ae[Y]=v(g.image[Y],!0,s.maxCubemapSize):ae[Y]=ee?g.image[Y].image:g.image[Y],ae[Y]=it(g,ae[Y]);const ge=ae[0],xe=r.convert(g.format,g.colorSpace),re=r.convert(g.type),Fe=A(g.internalFormat,xe,re,g.colorSpace),D=g.isVideoTexture!==!0,ue=W.__version===void 0||X===!0,te=j.dataReady;let he=w(g,ge);Te(i.TEXTURE_CUBE_MAP,g);let J;if(Re){D&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Fe,ge.width,ge.height);for(let Y=0;Y<6;Y++){J=ae[Y].mipmaps;for(let ie=0;ie<J.length;ie++){const Pe=J[ie];g.format!==cn?xe!==null?D?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,Pe.width,Pe.height,xe,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,Fe,Pe.width,Pe.height,0,Pe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,Pe.width,Pe.height,xe,re,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,Fe,Pe.width,Pe.height,0,xe,re,Pe.data)}}}else{if(J=g.mipmaps,D&&ue){J.length>0&&he++;const Y=ye(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Fe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ae[Y].width,ae[Y].height,xe,re,ae[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,ae[Y].width,ae[Y].height,0,xe,re,ae[Y].data);for(let ie=0;ie<J.length;ie++){const st=J[ie].image[Y].image;D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,st.width,st.height,xe,re,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,Fe,st.width,st.height,0,xe,re,st.data)}}else{D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xe,re,ae[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Fe,xe,re,ae[Y]);for(let ie=0;ie<J.length;ie++){const Pe=J[ie];D?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,xe,re,Pe.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,Fe,xe,re,Pe.image[Y])}}}p(g)&&f(i.TEXTURE_CUBE_MAP),W.__version=j.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function pe(S,g,L,X,j,W){const be=r.convert(L.format,L.colorSpace),se=r.convert(L.type),ve=A(L.internalFormat,be,se,L.colorSpace),Re=n.get(g),ee=n.get(L);if(ee.__renderTarget=g,!Re.__hasExternalTextures){const ae=Math.max(1,g.width>>W),ge=Math.max(1,g.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,W,ve,ae,ge,g.depth,0,be,se,null):t.texImage2D(j,W,ve,ae,ge,0,be,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),pt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,ee.__webglTexture,0,C(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,ee.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(S,g,L){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){const X=g.depthTexture,j=X&&X.isDepthTexture?X.type:null,W=M(g.stencilBuffer,j),be=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),W,g.width,g.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),W,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,W,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,S)}else{const X=g.textures;for(let j=0;j<X.length;j++){const W=X[j],be=r.convert(W.format,W.colorSpace),se=r.convert(W.type),ve=A(W.internalFormat,be,se,W.colorSpace);pt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),ve,g.width,g.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),ve,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ve,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(S,g,L){const X=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",T)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Te(i.TEXTURE_CUBE_MAP,g.depthTexture);const Re=r.convert(g.depthTexture.format),ee=r.convert(g.depthTexture.type);let ae;g.depthTexture.format===On?ae=i.DEPTH_COMPONENT24:g.depthTexture.format===hi&&(ae=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ae,g.width,g.height,0,Re,ee,null)}}else V(g.depthTexture,0);const W=j.__webglTexture,be=C(g),se=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,ve=g.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===On)pt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,se,W,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,ve,se,W,0);else if(g.depthTexture.format===hi)pt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,se,W,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,ve,se,W,0);else throw new Error("Unknown depthTexture format")}function Ve(S){const g=n.get(S),L=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const X=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=X}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let X=0;X<6;X++)_e(g.__webglFramebuffer[X],S,X);else{const X=S.texture.mipmaps;X&&X.length>0?_e(g.__webglFramebuffer[0],S,0):_e(g.__webglFramebuffer,S,0)}else if(L){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=i.createRenderbuffer(),Ie(g.__webglDepthbuffer[X],S,!1);else{const j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else{const X=S.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ie(g.__webglDepthbuffer,S,!1);else{const j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(S,g,L){const X=n.get(S);g!==void 0&&pe(X.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Ve(S)}function We(S){const g=S.texture,L=n.get(S),X=n.get(g);S.addEventListener("dispose",R);const j=S.textures,W=S.isWebGLCubeRenderTarget===!0,be=j.length>1;if(be||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=g.version,a.memory.textures++),W){L.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[se]=[];for(let ve=0;ve<g.mipmaps.length;ve++)L.__webglFramebuffer[se][ve]=i.createFramebuffer()}else L.__webglFramebuffer[se]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)L.__webglFramebuffer[se]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(be)for(let se=0,ve=j.length;se<ve;se++){const Re=n.get(j[se]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&pt(S)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const ve=j[se];L.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[se]);const Re=r.convert(ve.format,ve.colorSpace),ee=r.convert(ve.type),ae=A(ve.internalFormat,Re,ee,ve.colorSpace,S.isXRRenderTarget===!0),ge=C(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ae,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,L.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Te(i.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let ve=0;ve<g.mipmaps.length;ve++)pe(L.__webglFramebuffer[se][ve],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve);else pe(L.__webglFramebuffer[se],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(g)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let se=0,ve=j.length;se<ve;se++){const Re=j[se],ee=n.get(Re);let ae=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,ee.__webglTexture),Te(ae,Re),pe(L.__webglFramebuffer,S,Re,i.COLOR_ATTACHMENT0+se,ae,0),p(Re)&&f(ae)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,X.__webglTexture),Te(se,g),g.mipmaps&&g.mipmaps.length>0)for(let ve=0;ve<g.mipmaps.length;ve++)pe(L.__webglFramebuffer[ve],S,g,i.COLOR_ATTACHMENT0,se,ve);else pe(L.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,se,0);p(g)&&f(se),t.unbindTexture()}S.depthBuffer&&Ve(S)}function $e(S){const g=S.textures;for(let L=0,X=g.length;L<X;L++){const j=g[L];if(p(j)){const W=E(S),be=n.get(j).__webglTexture;t.bindTexture(W,be),f(W),t.unbindTexture()}}}const tt=[],ke=[];function ft(S){if(S.samples>0){if(pt(S)===!1){const g=S.textures,L=S.width,X=S.height;let j=i.COLOR_BUFFER_BIT;const W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(S),se=g.length>1;if(se)for(let Re=0;Re<g.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ve=S.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Re]);const ee=n.get(g[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,L,X,0,0,L,X,j,i.NEAREST),l===!0&&(tt.length=0,ke.length=0,tt.push(i.COLOR_ATTACHMENT0+Re),S.depthBuffer&&S.resolveDepthBuffer===!1&&(tt.push(W),ke.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Re=0;Re<g.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,be.__webglColorRenderbuffer[Re]);const ee=n.get(g[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function C(S){return Math.min(s.maxSamples,S.samples)}function pt(S){const g=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Xe(S){const g=a.render.frame;d.get(S)!==g&&(d.set(S,g),S.update())}function it(S,g){const L=S.colorSpace,X=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Ji&&L!==Kn&&(Ge.getTransfer(L)===je?(X!==cn||j!==Kt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",L)),g}function ye(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=I,this.setTextureCube=q,this.rebindTextures=xt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Q_(i,e){function t(n,s=Kn){let r;const a=Ge.getTransfer(s);if(n===Kt)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return i.BYTE;if(n===wc)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===_o)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===Rc)return i.ALPHA;if(n===Cc)return i.RGB;if(n===cn)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Pc)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===So)return i.RGBA_INTEGER;if(n===or||n===lr||n===cr||n===dr)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ta||n===Aa||n===Ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Pa||n===Da||n===La||n===Ia||n===Na||n===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Pa)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===La)return r.COMPRESSED_R11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Na)return r.COMPRESSED_RG11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ka||n===Fa||n===Oa||n===Ba||n===Ha||n===za||n===Wa||n===Ga||n===Va||n===qa||n===Xa||n===$a||n===Ka||n===Ya)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===Za||n===Ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===eo||n===to||n===no)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const e0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t0=`
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

}`;class n0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:e0,fragmentShader:t0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i0 extends xi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,m=null,_=null;const v=typeof XRWebGLBinding<"u",p=new n0,f={},E=t.getContextAttributes();let A=null,M=null;const w=[],T=[],R=new we;let U=null;const y=new rn;y.viewport=new ut;const b=new rn;b.viewport=new ut;const P=[y,b],z=new df;let O=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=w[$];return Z===void 0&&(Z=new jr,w[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=w[$];return Z===void 0&&(Z=new jr,w[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=w[$];return Z===void 0&&(Z=new jr,w[$]=Z),Z.getHandSpace()};function V($){const Z=T.indexOf($.inputSource);if(Z===-1)return;const pe=w[Z];pe!==void 0&&(pe.update($.inputSource,$.frame,c||a),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",I);for(let $=0;$<w.length;$++){const Z=T[$];Z!==null&&(T[$]=null,w[$].disconnect(Z))}O=null,K=null,p.reset();for(const $ in f)delete f[$];e.setRenderTarget(A),m=null,h=null,u=null,s=null,M=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",I),E.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,_e=null;E.depth&&(_e=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=E.stencil?hi:On,Ie=E.stencil?xs:Sn);const Ve={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Ve),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new bn(h.textureWidth,h.textureHeight,{format:cn,type:Kt,depthTexture:new Ss(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new bn(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function I($){for(let Z=0;Z<$.removed.length;Z++){const pe=$.removed[Z],Ie=T.indexOf(pe);Ie>=0&&(T[Ie]=null,w[Ie].disconnect(pe))}for(let Z=0;Z<$.added.length;Z++){const pe=$.added[Z];let Ie=T.indexOf(pe);if(Ie===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=T.length){T.push(pe),Ie=Ve;break}else if(T[Ve]===null){T[Ve]=pe,Ie=Ve;break}if(Ie===-1)break}const _e=w[Ie];_e&&_e.connect(pe)}}const q=new k,Q=new k;function ne($,Z,pe){q.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const Ie=q.distanceTo(Q),_e=Z.projectionMatrix.elements,Ve=pe.projectionMatrix.elements,xt=_e[14]/(_e[10]-1),We=_e[14]/(_e[10]+1),$e=(_e[9]+1)/_e[5],tt=(_e[9]-1)/_e[5],ke=(_e[8]-1)/_e[0],ft=(Ve[8]+1)/Ve[0],C=xt*ke,pt=xt*ft,Xe=Ie/(-ke+ft),it=Xe*-ke;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ(Xe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_e[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ye=xt+Xe,S=We+Xe,g=C-it,L=pt+(Ie-it),X=$e*We/S*ye,j=tt*We/S*ye;$.projectionMatrix.makePerspective(g,L,X,j,ye,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Z=$.near,pe=$.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),z.near=b.near=y.near=Z,z.far=b.far=y.far=pe,(O!==z.near||K!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),O=z.near,K=z.far),z.layers.mask=$.layers.mask|6,y.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;const Ie=$.parent,_e=z.cameras;ce(z,Ie);for(let Ve=0;Ve<_e.length;Ve++)ce(_e[Ve],Ie);_e.length===2?ne(z,y,b):z.projectionMatrix.copy(y.projectionMatrix),Te($,z,Ie)};function Te($,Z,pe){pe===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=so*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function($){return f[$]};let Le=null;function at($,Z){if(d=Z.getViewerPose(c||a),_=Z,d!==null){const pe=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ie=!1;pe.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let We=0;We<pe.length;We++){const $e=pe[We];let tt=null;if(m!==null)tt=m.getViewport($e);else{const ft=u.getViewSubImage(h,$e);tt=ft.viewport,We===0&&(e.setRenderTargetTextures(M,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(M))}let ke=P[We];ke===void 0&&(ke=new rn,ke.layers.enable(We),ke.viewport=new ut,P[We]=ke),ke.matrix.fromArray($e.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray($e.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(tt.x,tt.y,tt.width,tt.height),We===0&&(z.matrix.copy(ke.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(ke)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const We=u.getDepthInformation(pe[0]);We&&We.isValid&&We.texture&&p.init(We,s.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let We=0;We<pe.length;We++){const $e=pe[We].camera;if($e){let tt=f[$e];tt||(tt=new qc,f[$e]=tt);const ke=u.getCameraImage($e);tt.sourceTexture=ke}}}}for(let pe=0;pe<w.length;pe++){const Ie=T[pe],_e=w[pe];Ie!==null&&_e!==void 0&&_e.update(Ie,Z,c||a)}Le&&Le($,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const et=new $c;et.setAnimationLoop(at),this.setAnimationLoop=function($){Le=$},this.dispose=function(){}}}const li=new Mn,s0=new ot;function r0(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Fc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,A,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),d(p,f)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,A):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ht&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ht&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),A=E.envMap,M=E.envMapRotation;A&&(p.envMap.value=A,li.copy(M),li.x*=-1,li.y*=-1,li.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),p.envMapRotation.value.setFromMatrix4(s0.makeRotationFromEuler(li)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,A){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=A*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function a0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){const M=A.program;n.uniformBlockBinding(E,M)}function c(E,A){let M=s[E.id];M===void 0&&(_(E),M=d(E),s[E.id]=M,E.addEventListener("dispose",p));const w=A.program;n.updateUBOMapping(E,w);const T=e.render.frame;r[E.id]!==T&&(h(E),r[E.id]=T)}function d(E){const A=u();E.__bindingPointIndex=A;const M=i.createBuffer(),w=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,M),M}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const A=s[E.id],M=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,R=M.length;T<R;T++){const U=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,b=U.length;y<b;y++){const P=U[y];if(m(P,T,y,w)===!0){const z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let V=0;V<O.length;V++){const G=O[V],I=v(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,z+K,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,K),K+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,A,M,w){const T=E.value,R=A+"_"+M;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:w[R]=T.clone(),!0;{const U=w[R];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return w[R]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function _(E){const A=E.uniforms;let M=0;const w=16;for(let R=0,U=A.length;R<U;R++){const y=Array.isArray(A[R])?A[R]:[A[R]];for(let b=0,P=y.length;b<P;b++){const z=y[b],O=Array.isArray(z.value)?z.value:[z.value];for(let K=0,V=O.length;K<V;K++){const G=O[K],I=v(G),q=M%w,Q=q%I.boundary,ne=q+Q;M+=Q,ne!==0&&w-ne<I.storage&&(M+=w-ne),z.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=I.storage}}}const T=M%w;return T>0&&(M+=w-T),E.__size=M,E.__cache={},this}function v(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ce("WebGLRenderer: Unsupported uniform value type.",E),A}function p(E){const A=E.target;A.removeEventListener("dispose",p);const M=a.indexOf(A.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}const o0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pn=null;function l0(){return pn===null&&(pn=new jh(o0,16,16,Zi,Fn),pn.name="DFG_LUT",pn.minFilter=Pt,pn.magFilter=Pt,pn.wrapS=In,pn.wrapT=In,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class Jc{constructor(e={}){const{canvas:t=bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Kt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const v=m,p=new Set([So,bo,xo]),f=new Set([Kt,Sn,ys,xs,vo,yo]),E=new Uint32Array(4),A=new Int32Array(4);let M=null,w=null;const T=[],R=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=Xt;let P=0,z=0,O=null,K=-1,V=null;const G=new ut,I=new ut;let q=null;const Q=new ze(0);let ne=0,ce=t.width,Te=t.height,Le=1,at=null,et=null;const $=new ut(0,0,ce,Te),Z=new ut(0,0,ce,Te);let pe=!1;const Ie=new Co;let _e=!1,Ve=!1;const xt=new ot,We=new k,$e=new ut,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ft(){return O===null?Le:1}let C=n;function pt(x,N){return t.getContext(x,N)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),C===null){const N="webgl2";if(C=pt(N,x),C===null)throw pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw He("WebGLRenderer: "+x.message),x}let Xe,it,ye,S,g,L,X,j,W,be,se,ve,Re,ee,ae,ge,xe,re,Fe,D,ue,te,he,J;function Y(){Xe=new lg(C),Xe.init(),te=new Q_(C,Xe),it=new Qm(C,Xe,e,te),ye=new Z_(C,Xe),it.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),S=new ug(C),g=new k_,L=new J_(C,Xe,ye,g,it,te,S),X=new tg(y),j=new og(y),W=new mf(C),he=new Zm(C,W),be=new cg(C,W,S,he),se=new fg(C,be,W,S),Fe=new hg(C,it,L),ge=new eg(g),ve=new U_(y,X,j,Xe,it,he,ge),Re=new r0(y,g),ee=new O_,ae=new V_(Xe),re=new jm(y,X,j,ye,se,_,l),xe=new Y_(y,se,it),J=new a0(C,S,it,ye),D=new Jm(C,Xe,S),ue=new dg(C,Xe,S),S.programs=ve.programs,y.capabilities=it,y.extensions=Xe,y.properties=g,y.renderLists=ee,y.shadowMap=xe,y.state=ye,y.info=S}Y(),v!==Kt&&(U=new mg(v,t.width,t.height,s,r));const ie=new i0(y,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=Xe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Xe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(x){x!==void 0&&(Le=x,this.setSize(ce,Te,!1))},this.getSize=function(x){return x.set(ce,Te)},this.setSize=function(x,N,H=!0){if(ie.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=x,Te=N,t.width=Math.floor(x*Le),t.height=Math.floor(N*Le),H===!0&&(t.style.width=x+"px",t.style.height=N+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(ce*Le,Te*Le).floor()},this.setDrawingBufferSize=function(x,N,H){ce=x,Te=N,Le=H,t.width=Math.floor(x*H),t.height=Math.floor(N*H),this.setViewport(0,0,x,N)},this.setEffects=function(x){if(v===Kt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let N=0;N<x.length;N++)if(x[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(G)},this.getViewport=function(x){return x.copy($)},this.setViewport=function(x,N,H,B){x.isVector4?$.set(x.x,x.y,x.z,x.w):$.set(x,N,H,B),ye.viewport(G.copy($).multiplyScalar(Le).round())},this.getScissor=function(x){return x.copy(Z)},this.setScissor=function(x,N,H,B){x.isVector4?Z.set(x.x,x.y,x.z,x.w):Z.set(x,N,H,B),ye.scissor(I.copy(Z).multiplyScalar(Le).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(x){ye.setScissorTest(pe=x)},this.setOpaqueSort=function(x){at=x},this.setTransparentSort=function(x){et=x},this.getClearColor=function(x){return x.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,H=!0){let B=0;if(x){let F=!1;if(O!==null){const oe=O.texture.format;F=p.has(oe)}if(F){const oe=O.texture.type,fe=f.has(oe),de=re.getClearColor(),me=re.getClearAlpha(),Se=de.r,Ae=de.g,Me=de.b;fe?(E[0]=Se,E[1]=Ae,E[2]=Me,E[3]=me,C.clearBufferuiv(C.COLOR,0,E)):(A[0]=Se,A[1]=Ae,A[2]=Me,A[3]=me,C.clearBufferiv(C.COLOR,0,A))}else B|=C.COLOR_BUFFER_BIT}N&&(B|=C.DEPTH_BUFFER_BIT),H&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),re.dispose(),ee.dispose(),ae.dispose(),g.dispose(),X.dispose(),j.dispose(),se.dispose(),he.dispose(),J.dispose(),ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",zo),ie.removeEventListener("sessionend",Wo),ti.stop()};function Pe(x){x.preventDefault(),gr("WebGLRenderer: Context Lost."),b=!0}function st(){gr("WebGLRenderer: Context Restored."),b=!1;const x=S.autoReset,N=xe.enabled,H=xe.autoUpdate,B=xe.needsUpdate,F=xe.type;Y(),S.autoReset=x,xe.enabled=N,xe.autoUpdate=H,xe.needsUpdate=B,xe.type=F}function Ke(x){He("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function fn(x){const N=x.target;N.removeEventListener("dispose",fn),Tn(N)}function Tn(x){Uu(x),g.remove(x)}function Uu(x){const N=g.get(x).programs;N!==void 0&&(N.forEach(function(H){ve.releaseProgram(H)}),x.isShaderMaterial&&ve.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,H,B,F,oe){N===null&&(N=tt);const fe=F.isMesh&&F.matrixWorld.determinant()<0,de=Fu(x,N,H,B,F);ye.setMaterial(B,fe);let me=H.index,Se=1;if(B.wireframe===!0){if(me=be.getWireframeAttribute(H),me===void 0)return;Se=2}const Ae=H.drawRange,Me=H.attributes.position;let Oe=Ae.start*Se,Ze=(Ae.start+Ae.count)*Se;oe!==null&&(Oe=Math.max(Oe,oe.start*Se),Ze=Math.min(Ze,(oe.start+oe.count)*Se)),me!==null?(Oe=Math.max(Oe,0),Ze=Math.min(Ze,me.count)):Me!=null&&(Oe=Math.max(Oe,0),Ze=Math.min(Ze,Me.count));const ct=Ze-Oe;if(ct<0||ct===1/0)return;he.setup(F,B,de,H,me);let dt,nt=D;if(me!==null&&(dt=W.get(me),nt=ue,nt.setIndex(dt)),F.isMesh)B.wireframe===!0?(ye.setLineWidth(B.wireframeLinewidth*ft()),nt.setMode(C.LINES)):nt.setMode(C.TRIANGLES);else if(F.isLine){let Ee=B.linewidth;Ee===void 0&&(Ee=1),ye.setLineWidth(Ee*ft()),F.isLineSegments?nt.setMode(C.LINES):F.isLineLoop?nt.setMode(C.LINE_LOOP):nt.setMode(C.LINE_STRIP)}else F.isPoints?nt.setMode(C.POINTS):F.isSprite&&nt.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)bs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ee=F._multiDrawStarts,Ye=F._multiDrawCounts,qe=F._multiDrawCount,zt=me?W.get(me).bytesPerElement:1,Si=g.get(B).currentProgram.getUniforms();for(let Wt=0;Wt<qe;Wt++)Si.setValue(C,"_gl_DrawID",Wt),nt.render(Ee[Wt]/zt,Ye[Wt])}else if(F.isInstancedMesh)nt.renderInstances(Oe,ct,F.count);else if(H.isInstancedBufferGeometry){const Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ye=Math.min(H.instanceCount,Ee);nt.renderInstances(Oe,ct,Ye)}else nt.render(Oe,ct)};function Ho(x,N,H){x.transparent===!0&&x.side===an&&x.forceSinglePass===!1?(x.side=Ht,x.needsUpdate=!0,Ns(x,N,H),x.side=Jn,x.needsUpdate=!0,Ns(x,N,H),x.side=an):Ns(x,N,H)}this.compile=function(x,N,H=null){H===null&&(H=x),w=ae.get(H),w.init(N),R.push(w),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),x!==H&&x.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights();const B=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const oe=F.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const de=oe[fe];Ho(de,H,F),B.add(de)}else Ho(oe,H,F),B.add(oe)}),w=R.pop(),B},this.compileAsync=function(x,N,H=null){const B=this.compile(x,N,H);return new Promise(F=>{function oe(){if(B.forEach(function(fe){g.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){F(x);return}setTimeout(oe,10)}Xe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let wr=null;function ku(x){wr&&wr(x)}function zo(){ti.stop()}function Wo(){ti.start()}const ti=new $c;ti.setAnimationLoop(ku),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(x){wr=x,ie.setAnimationLoop(x),x===null?ti.stop():ti.start()},ie.addEventListener("sessionstart",zo),ie.addEventListener("sessionend",Wo),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const H=ie.enabled===!0&&ie.isPresenting===!0,B=U!==null&&(O===null||H)&&U.begin(y,O);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,N,O),w=ae.get(x,R.length),w.init(N),R.push(w),xt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ie.setFromProjectionMatrix(xt,yn,N.reversedDepth),Ve=this.localClippingEnabled,_e=ge.init(this.clippingPlanes,Ve),M=ee.get(x,T.length),M.init(),T.push(M),ie.enabled===!0&&ie.isPresenting===!0){const fe=y.xr.getDepthSensingMesh();fe!==null&&Tr(fe,N,-1/0,y.sortObjects)}Tr(x,N,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(at,et),ke=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ke&&re.addToRenderList(M,x),this.info.render.frame++,_e===!0&&ge.beginShadows();const F=w.state.shadowsArray;if(xe.render(F,x,N),_e===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&U.hasRenderPass())===!1){const fe=M.opaque,de=M.transmissive;if(w.setupLights(),N.isArrayCamera){const me=N.cameras;if(de.length>0)for(let Se=0,Ae=me.length;Se<Ae;Se++){const Me=me[Se];Vo(fe,de,x,Me)}ke&&re.render(x);for(let Se=0,Ae=me.length;Se<Ae;Se++){const Me=me[Se];Go(M,x,Me,Me.viewport)}}else de.length>0&&Vo(fe,de,x,N),ke&&re.render(x),Go(M,x,N)}O!==null&&z===0&&(L.updateMultisampleRenderTarget(O),L.updateRenderTargetMipmap(O)),B&&U.end(y),x.isScene===!0&&x.onAfterRender(y,x,N),he.resetDefaultState(),K=-1,V=null,R.pop(),R.length>0?(w=R[R.length-1],_e===!0&&ge.setGlobalState(y.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function Tr(x,N,H,B){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)w.pushLight(x),x.castShadow&&w.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ie.intersectsSprite(x)){B&&$e.setFromMatrixPosition(x.matrixWorld).applyMatrix4(xt);const fe=se.update(x),de=x.material;de.visible&&M.push(x,fe,de,H,$e.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ie.intersectsObject(x))){const fe=se.update(x),de=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),$e.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),$e.copy(fe.boundingSphere.center)),$e.applyMatrix4(x.matrixWorld).applyMatrix4(xt)),Array.isArray(de)){const me=fe.groups;for(let Se=0,Ae=me.length;Se<Ae;Se++){const Me=me[Se],Oe=de[Me.materialIndex];Oe&&Oe.visible&&M.push(x,fe,Oe,H,$e.z,Me)}}else de.visible&&M.push(x,fe,de,H,$e.z,null)}}const oe=x.children;for(let fe=0,de=oe.length;fe<de;fe++)Tr(oe[fe],N,H,B)}function Go(x,N,H,B){const{opaque:F,transmissive:oe,transparent:fe}=x;w.setupLightsView(H),_e===!0&&ge.setGlobalState(y.clippingPlanes,H),B&&ye.viewport(G.copy(B)),F.length>0&&Is(F,N,H),oe.length>0&&Is(oe,N,H),fe.length>0&&Is(fe,N,H),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Vo(x,N,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const Oe=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new bn(1,1,{generateMipmaps:!0,type:Oe?Fn:Kt,minFilter:ui,samples:it.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const oe=w.state.transmissionRenderTarget[B.id],fe=B.viewport||G;oe.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);const de=y.getRenderTarget(),me=y.getActiveCubeFace(),Se=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor(Q),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),ke&&re.render(H);const Ae=y.toneMapping;y.toneMapping=xn;const Me=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),_e===!0&&ge.setGlobalState(y.clippingPlanes,B),Is(x,H,B),L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ze=0,ct=N.length;Ze<ct;Ze++){const dt=N[Ze],{object:nt,geometry:Ee,material:Ye,group:qe}=dt;if(Ye.side===an&&nt.layers.test(B.layers)){const zt=Ye.side;Ye.side=Ht,Ye.needsUpdate=!0,qo(nt,H,B,Ee,Ye,qe),Ye.side=zt,Ye.needsUpdate=!0,Oe=!0}}Oe===!0&&(L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe))}y.setRenderTarget(de,me,Se),y.setClearColor(Q,ne),Me!==void 0&&(B.viewport=Me),y.toneMapping=Ae}function Is(x,N,H){const B=N.isScene===!0?N.overrideMaterial:null;for(let F=0,oe=x.length;F<oe;F++){const fe=x[F],{object:de,geometry:me,group:Se}=fe;let Ae=fe.material;Ae.allowOverride===!0&&B!==null&&(Ae=B),de.layers.test(H.layers)&&qo(de,N,H,me,Ae,Se)}}function qo(x,N,H,B,F,oe){x.onBeforeRender(y,N,H,B,F,oe),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(y,N,H,B,x,oe),F.transparent===!0&&F.side===an&&F.forceSinglePass===!1?(F.side=Ht,F.needsUpdate=!0,y.renderBufferDirect(H,N,B,F,x,oe),F.side=Jn,F.needsUpdate=!0,y.renderBufferDirect(H,N,B,F,x,oe),F.side=an):y.renderBufferDirect(H,N,B,F,x,oe),x.onAfterRender(y,N,H,B,F,oe)}function Ns(x,N,H){N.isScene!==!0&&(N=tt);const B=g.get(x),F=w.state.lights,oe=w.state.shadowsArray,fe=F.state.version,de=ve.getParameters(x,F.state,oe,N,H),me=ve.getProgramCacheKey(de);let Se=B.programs;B.environment=x.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(x.isMeshStandardMaterial?j:X).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Se===void 0&&(x.addEventListener("dispose",fn),Se=new Map,B.programs=Se);let Ae=Se.get(me);if(Ae!==void 0){if(B.currentProgram===Ae&&B.lightsStateVersion===fe)return $o(x,de),Ae}else de.uniforms=ve.getUniforms(x),x.onBeforeCompile(de,y),Ae=ve.acquireProgram(de,me),Se.set(me,Ae),B.uniforms=de.uniforms;const Me=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Me.clippingPlanes=ge.uniform),$o(x,de),B.needsLights=Bu(x),B.lightsStateVersion=fe,B.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Ae,B.uniformsList=null,Ae}function Xo(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=hr.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function $o(x,N){const H=g.get(x);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Fu(x,N,H,B,F){N.isScene!==!0&&(N=tt),L.resetTextureUnits();const oe=N.fog,fe=B.isMeshStandardMaterial?N.environment:null,de=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ji,me=(B.isMeshStandardMaterial?j:X).get(B.envMap||fe),Se=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ae=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!H.morphAttributes.position,Oe=!!H.morphAttributes.normal,Ze=!!H.morphAttributes.color;let ct=xn;B.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ct=y.toneMapping);const dt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nt=dt!==void 0?dt.length:0,Ee=g.get(B),Ye=w.state.lights;if(_e===!0&&(Ve===!0||x!==V)){const Lt=x===V&&B.id===K;ge.setState(B,x,Lt)}let qe=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ye.state.version||Ee.outputColorSpace!==de||F.isBatchedMesh&&Ee.batching===!1||!F.isBatchedMesh&&Ee.batching===!0||F.isBatchedMesh&&Ee.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ee.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ee.instancing===!1||!F.isInstancedMesh&&Ee.instancing===!0||F.isSkinnedMesh&&Ee.skinning===!1||!F.isSkinnedMesh&&Ee.skinning===!0||F.isInstancedMesh&&Ee.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ee.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ee.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ee.instancingMorph===!1&&F.morphTexture!==null||Ee.envMap!==me||B.fog===!0&&Ee.fog!==oe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ge.numPlanes||Ee.numIntersection!==ge.numIntersection)||Ee.vertexAlphas!==Se||Ee.vertexTangents!==Ae||Ee.morphTargets!==Me||Ee.morphNormals!==Oe||Ee.morphColors!==Ze||Ee.toneMapping!==ct||Ee.morphTargetsCount!==nt)&&(qe=!0):(qe=!0,Ee.__version=B.version);let zt=Ee.currentProgram;qe===!0&&(zt=Ns(B,N,F));let Si=!1,Wt=!1,ss=!1;const rt=zt.getUniforms(),kt=Ee.uniforms;if(ye.useProgram(zt.program)&&(Si=!0,Wt=!0,ss=!0),B.id!==K&&(K=B.id,Wt=!0),Si||V!==x){ye.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),rt.setValue(C,"projectionMatrix",x.projectionMatrix),rt.setValue(C,"viewMatrix",x.matrixWorldInverse);const Ft=rt.map.cameraPosition;Ft!==void 0&&Ft.setValue(C,We.setFromMatrixPosition(x.matrixWorld)),it.logarithmicDepthBuffer&&rt.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&rt.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),V!==x&&(V=x,Wt=!0,ss=!0)}if(Ee.needsLights&&(Ye.state.directionalShadowMap.length>0&&rt.setValue(C,"directionalShadowMap",Ye.state.directionalShadowMap,L),Ye.state.spotShadowMap.length>0&&rt.setValue(C,"spotShadowMap",Ye.state.spotShadowMap,L),Ye.state.pointShadowMap.length>0&&rt.setValue(C,"pointShadowMap",Ye.state.pointShadowMap,L)),F.isSkinnedMesh){rt.setOptional(C,F,"bindMatrix"),rt.setOptional(C,F,"bindMatrixInverse");const Lt=F.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),rt.setValue(C,"boneTexture",Lt.boneTexture,L))}F.isBatchedMesh&&(rt.setOptional(C,F,"batchingTexture"),rt.setValue(C,"batchingTexture",F._matricesTexture,L),rt.setOptional(C,F,"batchingIdTexture"),rt.setValue(C,"batchingIdTexture",F._indirectTexture,L),rt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&rt.setValue(C,"batchingColorTexture",F._colorsTexture,L));const Yt=H.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&Fe.update(F,H,zt),(Wt||Ee.receiveShadow!==F.receiveShadow)&&(Ee.receiveShadow=F.receiveShadow,rt.setValue(C,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(kt.envMap.value=me,kt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(kt.envMapIntensity.value=N.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=l0()),Wt&&(rt.setValue(C,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Ou(kt,ss),oe&&B.fog===!0&&Re.refreshFogUniforms(kt,oe),Re.refreshMaterialUniforms(kt,B,Le,Te,w.state.transmissionRenderTarget[x.id]),hr.upload(C,Xo(Ee),kt,L)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(hr.upload(C,Xo(Ee),kt,L),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&rt.setValue(C,"center",F.center),rt.setValue(C,"modelViewMatrix",F.modelViewMatrix),rt.setValue(C,"normalMatrix",F.normalMatrix),rt.setValue(C,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Lt=B.uniformsGroups;for(let Ft=0,Ar=Lt.length;Ft<Ar;Ft++){const ni=Lt[Ft];J.update(ni,zt),J.bind(ni,zt)}}return zt}function Ou(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Bu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(x,N,H){const B=g.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),g.get(x.texture).__webglTexture=N,g.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){const H=g.get(x);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Hu=C.createFramebuffer();this.setRenderTarget=function(x,N=0,H=0){O=x,P=N,z=H;let B=null,F=!1,oe=!1;if(x){const de=g.get(x);if(de.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(C.FRAMEBUFFER,de.__webglFramebuffer),G.copy(x.viewport),I.copy(x.scissor),q=x.scissorTest,ye.viewport(G),ye.scissor(I),ye.setScissorTest(q),K=-1;return}else if(de.__webglFramebuffer===void 0)L.setupRenderTarget(x);else if(de.__hasExternalTextures)L.rebindTextures(x,g.get(x.texture).__webglTexture,g.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ae=x.depthTexture;if(de.__boundDepthTexture!==Ae){if(Ae!==null&&g.has(Ae)&&(x.width!==Ae.image.width||x.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(x)}}const me=x.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(oe=!0);const Se=g.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Se[N])?B=Se[N][H]:B=Se[N],F=!0):x.samples>0&&L.useMultisampledRTT(x)===!1?B=g.get(x).__webglMultisampledFramebuffer:Array.isArray(Se)?B=Se[H]:B=Se,G.copy(x.viewport),I.copy(x.scissor),q=x.scissorTest}else G.copy($).multiplyScalar(Le).floor(),I.copy(Z).multiplyScalar(Le).floor(),q=pe;if(H!==0&&(B=Hu),ye.bindFramebuffer(C.FRAMEBUFFER,B)&&ye.drawBuffers(x,B),ye.viewport(G),ye.scissor(I),ye.setScissorTest(q),F){const de=g.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,H)}else if(oe){const de=N;for(let me=0;me<x.textures.length;me++){const Se=g.get(x.textures[me]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+me,Se.__webglTexture,H,de)}}else if(x!==null&&H!==0){const de=g.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,de.__webglTexture,H)}K=-1},this.readRenderTargetPixels=function(x,N,H,B,F,oe,fe,de=0){if(!(x&&x.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ye.bindFramebuffer(C.FRAMEBUFFER,me);try{const Se=x.textures[de],Ae=Se.format,Me=Se.type;if(!it.textureFormatReadable(Ae)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Me)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-B&&H>=0&&H<=x.height-F&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),C.readPixels(N,H,B,F,te.convert(Ae),te.convert(Me),oe))}finally{const Se=O!==null?g.get(O).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(x,N,H,B,F,oe,fe,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(N>=0&&N<=x.width-B&&H>=0&&H<=x.height-F){ye.bindFramebuffer(C.FRAMEBUFFER,me);const Se=x.textures[de],Ae=Se.format,Me=Se.type;if(!it.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Oe),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+de),C.readPixels(N,H,B,F,te.convert(Ae),te.convert(Me),0);const Ze=O!==null?g.get(O).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,Ze);const ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Sh(C,ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Oe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(Oe),C.deleteSync(ct),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,H=0){const B=Math.pow(2,-H),F=Math.floor(x.image.width*B),oe=Math.floor(x.image.height*B),fe=N!==null?N.x:0,de=N!==null?N.y:0;L.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,fe,de,F,oe),ye.unbindTexture()};const zu=C.createFramebuffer(),Wu=C.createFramebuffer();this.copyTextureToTexture=function(x,N,H=null,B=null,F=0,oe=null){oe===null&&(F!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=F,F=0):oe=0);let fe,de,me,Se,Ae,Me,Oe,Ze,ct;const dt=x.isCompressedTexture?x.mipmaps[oe]:x.image;if(H!==null)fe=H.max.x-H.min.x,de=H.max.y-H.min.y,me=H.isBox3?H.max.z-H.min.z:1,Se=H.min.x,Ae=H.min.y,Me=H.isBox3?H.min.z:0;else{const Yt=Math.pow(2,-F);fe=Math.floor(dt.width*Yt),de=Math.floor(dt.height*Yt),x.isDataArrayTexture?me=dt.depth:x.isData3DTexture?me=Math.floor(dt.depth*Yt):me=1,Se=0,Ae=0,Me=0}B!==null?(Oe=B.x,Ze=B.y,ct=B.z):(Oe=0,Ze=0,ct=0);const nt=te.convert(N.format),Ee=te.convert(N.type);let Ye;N.isData3DTexture?(L.setTexture3D(N,0),Ye=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(L.setTexture2DArray(N,0),Ye=C.TEXTURE_2D_ARRAY):(L.setTexture2D(N,0),Ye=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const qe=C.getParameter(C.UNPACK_ROW_LENGTH),zt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Si=C.getParameter(C.UNPACK_SKIP_PIXELS),Wt=C.getParameter(C.UNPACK_SKIP_ROWS),ss=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,dt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Se),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ae),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Me);const rt=x.isDataArrayTexture||x.isData3DTexture,kt=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const Yt=g.get(x),Lt=g.get(N),Ft=g.get(Yt.__renderTarget),Ar=g.get(Lt.__renderTarget);ye.bindFramebuffer(C.READ_FRAMEBUFFER,Ft.__webglFramebuffer),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let ni=0;ni<me;ni++)rt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(x).__webglTexture,F,Me+ni),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(N).__webglTexture,oe,ct+ni)),C.blitFramebuffer(Se,Ae,fe,de,Oe,Ze,fe,de,C.DEPTH_BUFFER_BIT,C.NEAREST);ye.bindFramebuffer(C.READ_FRAMEBUFFER,null),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||g.has(x)){const Yt=g.get(x),Lt=g.get(N);ye.bindFramebuffer(C.READ_FRAMEBUFFER,zu),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wu);for(let Ft=0;Ft<me;Ft++)rt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Yt.__webglTexture,F,Me+Ft):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Yt.__webglTexture,F),kt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Lt.__webglTexture,oe,ct+Ft):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Lt.__webglTexture,oe),F!==0?C.blitFramebuffer(Se,Ae,fe,de,Oe,Ze,fe,de,C.COLOR_BUFFER_BIT,C.NEAREST):kt?C.copyTexSubImage3D(Ye,oe,Oe,Ze,ct+Ft,Se,Ae,fe,de):C.copyTexSubImage2D(Ye,oe,Oe,Ze,Se,Ae,fe,de);ye.bindFramebuffer(C.READ_FRAMEBUFFER,null),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else kt?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(Ye,oe,Oe,Ze,ct,fe,de,me,nt,Ee,dt.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Ye,oe,Oe,Ze,ct,fe,de,me,nt,dt.data):C.texSubImage3D(Ye,oe,Oe,Ze,ct,fe,de,me,nt,Ee,dt):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,oe,Oe,Ze,fe,de,nt,Ee,dt.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,oe,Oe,Ze,dt.width,dt.height,nt,dt.data):C.texSubImage2D(C.TEXTURE_2D,oe,Oe,Ze,fe,de,nt,Ee,dt);C.pixelStorei(C.UNPACK_ROW_LENGTH,qe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,zt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Si),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ss),oe===0&&N.generateMipmaps&&C.generateMipmap(Ye),ye.unbindTexture()},this.initRenderTarget=function(x){g.get(x).__webglFramebuffer===void 0&&L.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?L.setTextureCube(x,0):x.isData3DTexture?L.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?L.setTexture2DArray(x,0):L.setTexture2D(x,0),ye.unbindTexture()},this.resetState=function(){P=0,z=0,O=null,ye.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const Kl={type:"change"},Do={type:"start"},Qc={type:"end"},sr=new Ao,Yl=new Xn,c0=Math.cos(70*Eh.DEG2RAD),gt=new k,Ot=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},aa=1e-6;class d0 extends ff{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new yi,this._lastTargetPosition=new k,this._quat=new yi().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ml,this._sphericalDelta=new Ml,this._scale=1,this._panOffset=new k,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new k,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=h0.bind(this),this._onPointerDown=u0.bind(this),this._onPointerUp=f0.bind(this),this._onContextMenu=x0.bind(this),this._onMouseWheel=g0.bind(this),this._onKeyDown=_0.bind(this),this._onTouchStart=v0.bind(this),this._onTouchMove=y0.bind(this),this._onMouseDown=p0.bind(this),this._onMouseMove=m0.bind(this),this._interceptControlDown=b0.bind(this),this._interceptControlUp=S0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kl),this.update(),this.state=Qe.NONE}update(e=null){const t=this.object.position;gt.copy(t).sub(this.target),gt.applyQuaternion(this._quat),this._spherical.setFromVector3(gt),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ot:n>Math.PI&&(n-=Ot),s<-Math.PI?s+=Ot:s>Math.PI&&(s-=Ot),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(gt.setFromSpherical(this._spherical),gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=gt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(sr.origin.copy(this.object.position),sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sr.direction))<c0?this.object.lookAt(this.target):(Yl.setFromNormalAndCoplanarPoint(this.object.up,this.target),sr.intersectPlane(Yl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>aa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>aa||this._lastTargetPosition.distanceToSquared(this.target)>aa?(this.dispatchEvent(Kl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ot/60*this.autoRotateSpeed*e:Ot/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gt.setFromMatrixColumn(t,0),gt.multiplyScalar(-e),this._panOffset.add(gt)}_panUp(e,t){this.screenSpacePanning===!0?gt.setFromMatrixColumn(t,1):(gt.setFromMatrixColumn(t,0),gt.crossVectors(this.object.up,gt)),gt.multiplyScalar(e),this._panOffset.add(gt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;gt.copy(s).sub(this.target);let r=gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ot*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ot*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ot*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function u0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function h0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function f0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qc),this.state=Qe.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function p0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qe.DOLLY;break;case Gi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}break;case Gi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Do)}function m0(i){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function g0(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(i.preventDefault(),this.dispatchEvent(Do),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Qc))}function _0(i){this.enabled!==!1&&this._handleKeyDown(i)}function v0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qe.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qe.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Do)}function y0(i){switch(this._trackPointer(i),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qe.NONE}}function x0(i){this.enabled!==!1&&i.preventDefault()}function b0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function S0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var _s=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),n(++i%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function n(d){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===d?"block":"none";i=d}var s=(performance||Date).now(),r=s,a=0,o=t(new _s.Panel("FPS","#0ff","#002")),l=t(new _s.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new _s.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){a++;var d=(performance||Date).now();if(l.update(d-s,200),d>=r+1e3&&(o.update(a*1e3/(d-r),100),r=d,a=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return d},update:function(){s=this.end()},domElement:e,setMode:n}};_s.Panel=function(i,e,t){var n=1/0,s=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,d=2*a,u=3*a,h=15*a,m=74*a,_=30*a,v=document.createElement("canvas");v.width=o,v.height=l,v.style.cssText="width:80px;height:48px";var p=v.getContext("2d");return p.font="bold "+9*a+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,o,l),p.fillStyle=e,p.fillText(i,c,d),p.fillRect(u,h,m,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(u,h,m,_),{dom:v,update:function(f,E){n=Math.min(n,f),s=Math.max(s,f),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,o,h),p.fillStyle=e,p.fillText(r(f)+" "+i+" ("+r(n)+"-"+r(s)+")",c,d),p.drawImage(v,u+a,h,m-a,_,u,h,m-a,_),p.fillRect(u+m-a,h,a,_),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(u+m-a,h,a,r((1-f/E)*_))}}};const M0=10,E0=[{name:"mcrdsd",width:60,height:50,objects:[{name:"Family Day",type:"activity",spriteId:"activity/training",x:5,y:0,z:5},{name:"Church Auditorium",type:"building",spriteId:"building/chapel",size:{x:4,y:3,z:4},x:15,y:1.5,z:5},{name:"Parade Deck",type:"activity",spriteId:"activity/training",x:25,y:0,z:5},{name:"Receiving Barracks",type:"building",spriteId:"building/barracks",size:{x:4,y:3,z:4},x:35,y:1.5,z:5},{name:"Lecture Hall",type:"building",spriteId:"building/office",size:{x:4,y:3,z:4},x:45,y:1.5,z:5},{name:"Dental",type:"building",spriteId:"building/office",size:{x:4,y:3,z:4},x:55,y:1.5,z:5},{name:"Rifle Range",type:"activity",spriteId:"activity/training",x:45,y:0,z:5},{name:"Road",type:"road",spriteId:"ground/road",x:5,y:0,z:15},{name:"Road",type:"road",spriteId:"ground/road",x:15,y:0,z:15},{name:"Road",type:"road",spriteId:"ground/road",x:25,y:0,z:15},{name:"Road",type:"road",spriteId:"ground/road",x:35,y:0,z:15},{name:"Road",type:"road",spriteId:"ground/road",x:45,y:0,z:15},{name:"Road",type:"road",spriteId:"ground/road",x:55,y:0,z:15},{name:"Company Office",type:"building",spriteId:"building/office",size:{x:4,y:3,z:4},x:5,y:1.5,z:25},{name:"Barracks",type:"building",spriteId:"building/barracks",size:{x:4,y:3,z:4},x:15,y:1.5,z:25},{name:"Barracks",type:"building",spriteId:"building/barracks",size:{x:4,y:3,z:4},x:25,y:1.5,z:25},{name:"Chow Hall",type:"building",spriteId:"building/chow",size:{x:4,y:3,z:4},x:35,y:1.5,z:25},{name:"MCX",type:"building",spriteId:"building/chow",size:{x:4,y:3,z:4},x:45,y:1.5,z:25},{name:"Armoury",type:"building",spriteId:"building/office",size:{x:4,y:3,z:4},x:55,y:1.5,z:25},{name:"Medical",type:"building",spriteId:"building/office",size:{x:4,y:3,z:4},x:5,y:1.5,z:35},{name:"Supply",type:"building",spriteId:"building/office",size:{x:4,y:3,z:4},x:15,y:1.5,z:35},{name:"Drill Practice",type:"activity",spriteId:"activity/training",x:25,y:0,z:35},{name:"Obstacle Course",type:"activity",spriteId:"activity/training",x:35,y:0,z:35},{name:"Rappell Course",type:"activity",spriteId:"activity/training",x:45,y:0,z:35},{name:"Pool",type:"activity",spriteId:"activity/pool",x:55,y:0,z:35},{name:"The trail loop",type:"activity",spriteId:"activity/track",x:5,y:0,z:45},{name:"Pull-up Bars",type:"activity",spriteId:"activity/training",x:15,y:0,z:45},{name:"400m track",type:"activity",spriteId:"activity/track",x:25,y:0,z:45},{name:"MCMAP Pit",type:"activity",spriteId:"activity/training",x:35,y:0,z:45},{name:"Logs",type:"activity",spriteId:"activity/training",x:45,y:0,z:45},{name:"Thunderdown",type:"activity",spriteId:"activity/training",x:55,y:0,z:45},{name:"Crucible Trail",type:"activity",spriteId:"activity/track",x:55,y:0,z:40},{name:"Gas Chamber",type:"activity",spriteId:"activity/training",x:5,y:0,z:40}]}],jl={tileSize:M0,maps:E0};function w0(i){const e=i.tileSize??10,t=new Map;for(const n of i.maps??[]){if(!n?.name)continue;const{width:s=20,height:r=20}=n,a=Math.ceil(s/e),o=Math.ceil(r/e),l={};for(const c of n.objects??[]){const d=Math.floor(c.x/e),u=Math.floor(c.z/e),h=`${d},${u}`;l[h]||(l[h]=[]),l[h].push(c)}t.set(n.name,{name:n.name,width:s,height:r,tileSize:e,tilesX:a,tilesZ:o,tiles:l})}return{tileSize:e,maps:t}}function ed(i,e,t){const{tileSize:n}=i;return{minX:e*n,maxX:(e+1)*n,minZ:t*n,maxZ:(t+1)*n}}function T0(i,e,t){const n=Math.floor(e/i.tileSize),s=Math.floor(t/i.tileSize);return`${n},${s}`}const td="activity/pool",nd="activity",id=16,sd=16,rd=["pppppppppppppppp","ppPPppppppPPpppp","pppppppppppppppp","pppppwppppppppPP","pPPpppppppPPpppp","pppppppppppppppp","ppppppPPpppppppp","pPPpppppppppwppp","ppppppppppPPpppp","pppppppppppppppp","PPppppPPpppppppp","ppppppppppppPPpp","ppwppppppppppppp","ppppPPpppppppppp","pppppppppPPppppp","pPPppppppppppppp"],A0={id:td,category:nd,width:id,height:sd,pixels:rd},R0=Object.freeze(Object.defineProperty({__proto__:null,category:nd,default:A0,height:sd,id:td,pixels:rd,width:id},Symbol.toStringTag,{value:"Module"})),ad="activity/track",od="activity",ld=16,cd=16,dd=["kkkkKkkkkkkkkkkk","kkkkkkkkkKkkkkkk","kKkkkkkkkkkkkkKk","kkkkkkKkkkkkkkkk","wkkwkkwkkwkkwkkw","kkKkkkkkkkkkkkkk","kkkkkkkkkKkkkkkk","kkkkKkkkkkkkkkkk","kKkkkkkkkkkkKkkk","kkkkkkkKkkkkkkkk","kkkkkkkkkkkkkkKk","wkkwkkwkkwkkwkkw","kkKkkkkkkkKkkkkk","kkkkkkkkkkkkkkkk","kkkKkkkkkkkkkKkk","kkkkkkkkkKkkkkkk"],C0={id:ad,category:od,width:ld,height:cd,pixels:dd},P0=Object.freeze(Object.defineProperty({__proto__:null,category:od,default:C0,height:cd,id:ad,pixels:dd,width:ld},Symbol.toStringTag,{value:"Module"})),ud="activity/training",hd="activity",fd=16,pd=16,md=["ddddtddddDdddddd","dDddddddtddddtdd","ddddDddddddDdddd","dtdddddDddddddtd","dddddtddddtddddd","dDdddddDdddddDdd","ddddtddddddgtddd","ddDdddddtDdddddd","dtddddDddddddotd","ddddddddtdddDddd","dDddtddddddtdddd","ddddddDddddddDdd","ddtdddddgtdddddd","dddDdddDddddtddd","dtddddtddddDdddd","ddddDdddtddddddd"],D0={id:ud,category:hd,width:fd,height:pd,pixels:md},L0=Object.freeze(Object.defineProperty({__proto__:null,category:hd,default:D0,height:pd,id:ud,pixels:md,width:fd},Symbol.toStringTag,{value:"Module"})),gd="building/barracks",_d="building",vd=24,yd=24,xd=["........bbbbbbbb........",".......bbbbbbbbbb.......","......bbbbbbbbbbbb......",".....bbbbbbbbbbbbbb.....","....bbbbbbbbbbbbbbbb....","...bbbbbbbbbbbbbbbbbb...","..bbbbbbbbbbbbbbbbbbbb..",".bbbbbbbbbbbbbbbbbbbbbb.","BBBBBBBBBBBBBBBBBBBBBBBB",".tttttttttttttttttttttt.",".tttttttttttttttttttttt.",".tttfffttttttttttfffttt.",".tttfffttttttttttfffttt.",".tttfffttttttttttfffttt.",".tttfffttttttttttfffttt.",".tttttttttttttttttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".ttttttttttTTTTtttttttt.",".oooooooooooooooooooooo."],I0={id:gd,category:_d,width:vd,height:yd,pixels:xd},N0=Object.freeze(Object.defineProperty({__proto__:null,category:_d,default:I0,height:yd,id:gd,pixels:xd,width:vd},Symbol.toStringTag,{value:"Module"})),bd="building/chapel",Sd="building",Md=24,Ed=24,wd=["...........oo...........","...........oo...........",".........wwwwww.........",".........wwwwww.........",".........BBBBBB.........","........wwwwwwww........","........wwwwwwww........",".bbbbbbbbbbbbbbbbbbbbbb.","bbbbbbbbbbbbbbbbbbbbbbbb","BBBBBBBBBBBBBBBBBBBBBBBB",".wwwwwwwwwwwwwwwwwwwwww.",".wwwwwwwwwwwwwwwwwwwwww.",".wwwwfffwwwwwwwwfffwwww.",".wwwwfffwwwwwwwwfffwwww.",".wwwwfffwwwwwwwwfffwwww.",".wwwwfffwwwwwwwwfffwwww.",".wwwwwwwwwwwwwwwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".wwwwwwwwwoooowwwwwwwww.",".oooooooooooooooooooooo."],U0={id:bd,category:Sd,width:Md,height:Ed,pixels:wd},k0=Object.freeze(Object.defineProperty({__proto__:null,category:Sd,default:U0,height:Ed,id:bd,pixels:wd,width:Md},Symbol.toStringTag,{value:"Module"})),Td="building/chow",Ad="building",Rd=24,Cd=24,Pd=["........................","........................","..BBBBBBBBBBBBBBBBBBBB..",".bbbbbbbbbbbbbbbbbbbbbb.","bbbbbbbbbbbbbbbbbbbbbbbb","BBBBBBBBBBBBBBBBBBBBBBBB",".tttttttttttttttttttttt.",".tttttttttttttttttttttt.",".ttffffffttttfffffftttt.",".ttffffffttttfffffftttt.",".ttffffffttttfffffftttt.",".tttttttttttttttttttttt.",".tttttttttttttttttttttt.",".tttttttttttttttttttttt.",".tttttttttttttttttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".tttttttTTTTTTTTttttttt.",".oooooooooooooooooooooo."],F0={id:Td,category:Ad,width:Rd,height:Cd,pixels:Pd},O0=Object.freeze(Object.defineProperty({__proto__:null,category:Ad,default:F0,height:Cd,id:Td,pixels:Pd,width:Rd},Symbol.toStringTag,{value:"Module"})),Dd="building/office",Ld="building",Id=24,Nd=24,Ud=["........................","........................","........................","........................","RRRRRRRRRRRRRRRRRRRRRRRR",".WWWWWWWWWWWWWWWWWWWWWW.",".WWWWWWWWWWWWWWWWWWWWWW.",".WWfffWWWWffffWWWWfffWW.",".WWfffWWWWffffWWWWfffWW.",".WWfffWWWWffffWWWWfffWW.",".WWWWWWWWWWWWWWWWWWWWWW.",".WWWWWWWWWWWWWWWWWWWWWW.",".WWWWWWWWWWWWWWWWWWWWWW.",".WWfffWWWWffffWWWWfffWW.",".WWfffWWWWffffWWWWfffWW.",".WWfffWWWWffffWWWWfffWW.",".WWWWWWWWWWWWWWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".WWWWWWWWWRRRRWWWWWWWWW.",".oooooooooooooooooooooo."],B0={id:Dd,category:Ld,width:Id,height:Nd,pixels:Ud},H0=Object.freeze(Object.defineProperty({__proto__:null,category:Ld,default:B0,height:Nd,id:Dd,pixels:Ud,width:Id},Symbol.toStringTag,{value:"Module"})),kd="ground/grass",Fd="ground",Od=16,Bd=16,Hd=["gggglggggGgggggg","gGgggggglgggglgg","ggggGggggggGgggg","glgggggGgggggglg","ggggglgggglggggg","gGgggggGgggggGgg","gggglggggggglggg","ggGggggglGgggggg","glggggGggggggglg","gggggggglgggGggg","gGgglgggggglgggg","ggggggGggggggGgg","gglgggggglgggggg","gggGgggGgggglggg","glgggglggggGgggg","ggggGgggglgggggg"],z0={id:kd,category:Fd,width:Od,height:Bd,pixels:Hd},W0=Object.freeze(Object.defineProperty({__proto__:null,category:Fd,default:z0,height:Bd,id:kd,pixels:Hd,width:Od},Symbol.toStringTag,{value:"Module"})),zd="ground/road",Wd="ground",Gd=16,Vd=16,qd=["rrrrRrrrrrrrrrrr","rrrrrrrrrRrrrrrr","rRrrrrrrrrrrrrRr","rrrrrrRrrrrrrrrr","rrrrrrrrrrrRrrrr","rrRrrrrrrrrrrrrr","rrrrrrrrrRrrrrrr","yyyyrrrryyyyrrrr","rryyyyrrrryyyyrr","rrrrrRrrrrrrrrrr","rrrrrrrrrrrrRrrr","rRrrrrrrrrrrrrrr","rrrrrrrRrrrrrrrr","rrrrrrrrrrrrrrRr","rrrRrrrrrrrrrrrr","rrrrrrrrrRrrrrrr"],G0={id:zd,category:Wd,width:Gd,height:Vd,pixels:qd},V0=Object.freeze(Object.defineProperty({__proto__:null,category:Wd,default:G0,height:Vd,id:zd,pixels:qd,width:Gd},Symbol.toStringTag,{value:"Module"})),Xd="npc/nco",$d="npc",Kd=32,Yd=48,jd=["................................","................................","............hhhhhhhh............","..........hhhhhhhhhhhh..........","........hhhhsssssssshhhh........","........hhsssssssssssshh........","........oosssssssssssso.........","........ossossossosso...........","........ossossossosso...........",".......oossssssssssso...........","..........oosso.................",".......oNNnnqqqqqqnnNNo.........","......oNNnnqqqqqqqqnnNNo........","..sqyooNNnnnnqqyynnnnnNNoosqy...","..soNNnnnnqqyyqqnnnnNNoos.......","..soNNnnnnqqyyqqnnnnNNoos.......","..soNNnnnnqqyyqqnnnnNNoos.......","..soNNnnnnnnnnnnnnnnNNoos.......","..soNNnnnnnnnnnnnnnnNNoos.......","..soNNnnnnnnnnnnnnnnNNoos.......","..soNNnnnnnnnnnnnnnnNNoos.......","..soNNnnnnnnnnnnnnnnNNoos.......","..soNNnnnnnnnnnnnnnnNNoos.......","..soNNnnnnnnnnnnnnnnNNoos.......","........owwwwwwwwww.............",".........owyyyyywo..............","...qqmmmmmm..mmmmmmqq...........","...qqmmmmmm..mmmmmmqq...........","...qqmmmmmm..mmmmmmqq...........","...qqmmmmmm..mmmmmmqq...........","...qqmmmmmm..mmmmmmqq...........","...qqmmmmmm..mmmmmmqq...........","...qqmmmmmm..mmmmmmqq...........","...qqmmmmmm..mmmmmmqq...........","...qqmmmmmm..mmmmmmqq...........","....qqmmmm....mmmmqq............","....qqmmmm....mmmmqq............","......oooooooo..oooooooo........","......oooooooo..oooooooo........","................................","................................","................................","................................","................................","................................","................................","................................","................................"],q0={id:Xd,category:$d,width:Kd,height:Yd,pixels:jd},X0=Object.freeze(Object.defineProperty({__proto__:null,category:$d,default:q0,height:Yd,id:Xd,pixels:jd,width:Kd},Symbol.toStringTag,{value:"Module"})),Zd="recruit/civilian",Jd="recruit",Qd=24,eu=36,tu=["s","h","c","j"],nu=["......hhhhhhhhhhhh......","......hhhhhhhhhhhh......","....hhhhhhhhhhhhhhhh....","....hhhhhhhhhhhhhhhh....","....hhsssssssssssshh....","....hhsssssssssssshh....","....ssssssssssssssss....","....ssssssssssssssss....","....ssssoossssoossss....","....ssssoossssoossss....","....ssssssssssssssss....","....ssssssssssssssss....","......ssssssssssss......","......ssssssssssss......","....cccccccccccccccc....","....cccccccccccccccc....","..cccccccccccccccccccc..","..cccccccccccccccccccc..","..ssccccccccccccccccss..","..ssccccccccccccccccss..","..ssccccccccccccccccss..","..ssccccccccccccccccss..","..ssccccccccccccccccss..","..ssccccccccccccccccss..","....cccccccccccccccc....","....cccccccccccccccc....","....jjjjjjjjjjjjjjjj....","....jjjjjjjjjjjjjjjj....","....jjjjjj....jjjjjj....","....jjjjjj....jjjjjj....","....jjjjjj....jjjjjj....","....jjjjjj....jjjjjj....","....jjjjjj....jjjjjj....","....jjjjjj....jjjjjj....","....oooooo....oooooo....","....oooooo....oooooo...."],$0={id:Zd,category:Jd,width:Qd,height:eu,swapKeys:tu,pixels:nu},K0=Object.freeze(Object.defineProperty({__proto__:null,category:Jd,default:$0,height:eu,id:Zd,pixels:nu,swapKeys:tu,width:Qd},Symbol.toStringTag,{value:"Module"})),Y0={".":{name:"transparent",color:null},o:{name:"outline",color:"#26261e"},g:{name:"grass",color:"#7a8f4a"},G:{name:"grass-dark",color:"#5f7539"},l:{name:"grass-light",color:"#93a95d"},r:{name:"asphalt",color:"#6f6f6f"},R:{name:"asphalt-dark",color:"#585858"},y:{name:"paint-yellow",color:"#d9c86a"},t:{name:"tan-wall",color:"#cfa96b"},T:{name:"tan-dark",color:"#a8874f"},b:{name:"brick-red",color:"#a5442a"},B:{name:"brick-dark",color:"#7c331f"},w:{name:"white",color:"#e9e5d9"},W:{name:"gray-wall",color:"#9c9c94"},f:{name:"window",color:"#7ab8d8"},d:{name:"dirt",color:"#8a6f47"},D:{name:"dirt-dark",color:"#6d5637"},k:{name:"track-clay",color:"#b06a4a"},K:{name:"track-dark",color:"#8f5138"},p:{name:"pool",color:"#4a90c2"},P:{name:"pool-dark",color:"#366d9b"},s:{name:"skin-swap",color:"#d8a878"},h:{name:"hair-swap",color:"#5c4632"},c:{name:"top-swap",color:"#8a8f5a"},j:{name:"bottom-swap",color:"#4a5a78"},n:{name:"navy",color:"#1c2540"},N:{name:"navy-dark",color:"#10162a"},m:{name:"dress-trousers",color:"#3b5a8c"},q:{name:"scarlet",color:"#b3202e"}},j0={palette:Y0},Z0={ground:"ground/grass",road:"ground/road",building:"building/office",activity:"activity/training",recruit:"recruit/civilian",npc:"npc/nco"},Lo={defaults:Z0},iu=Math.PI/4,J0=Math.atan(.5),Q0=Object.assign({"../../assets/art/spriteDefinitions/activity_pool.json":R0,"../../assets/art/spriteDefinitions/activity_track.json":P0,"../../assets/art/spriteDefinitions/activity_training.json":L0,"../../assets/art/spriteDefinitions/building_barracks.json":N0,"../../assets/art/spriteDefinitions/building_chapel.json":k0,"../../assets/art/spriteDefinitions/building_chow.json":O0,"../../assets/art/spriteDefinitions/building_office.json":H0,"../../assets/art/spriteDefinitions/ground_grass.json":W0,"../../assets/art/spriteDefinitions/ground_road.json":V0,"../../assets/art/spriteDefinitions/npc_nco.json":X0,"../../assets/art/spriteDefinitions/recruit_civilian.json":K0}),su={};for(const i of Object.values(Q0)){const e=i.default??i;su[e.id]=e}function rr(i){return Lo.defaults[i]}function ev(i){return typeof i=="number"?`#${i.toString(16).padStart(6,"0")}`:i}function tv(i){return[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)]}function Ps(i,e={}){const t=su[i];if(!t)throw new Error(`Unknown sprite: ${i}`);const n=document.createElement("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d"),r=s.createImageData(t.width,t.height);for(let a=0;a<t.height;a++){const o=t.pixels[a]??"";for(let l=0;l<t.width;l++){const c=o[l]??".",d=e[c],u=j0.palette[c]?.color,h=d!==void 0?ev(d):u;if(h==null)continue;const[m,_,v]=tv(h),p=(a*t.width+l)*4;r.data[p]=m,r.data[p+1]=_,r.data[p+2]=v,r.data[p+3]=255}}return s.putImageData(r,0,0),n}function Mr(i){const e=new Vc(i);return e.magFilter=ht,e.minFilter=ht,e.colorSpace=Xt,e}const Xi=new Map;function oa(i,e){const t=`${i}|tile|${e}`;if(Xi.has(t))return Xi.get(t);const n=Mr(Ps(i));n.wrapS=vs,n.wrapT=vs,n.repeat.set(e,e);const s=new As({map:n});return s.userData.shared=!0,Xi.set(t,s),s}function nv(i){const e=`${i}|billboard`;if(Xi.has(e))return Xi.get(e);const t=new As({map:Mr(Ps(i)),alphaTest:.5,side:an});return t.userData.shared=!0,Xi.set(e,t),t}function iv(i){return new As({map:Mr(Ps(Lo.defaults.recruit,i)),alphaTest:.5,side:an})}function sv(i,e){i.map?.dispose(),i.map=Mr(Ps(Lo.defaults.recruit,e)),i.needsUpdate=!0}const la=2,ca=6,Zl=4;class rv extends fi{constructor(e,t,n,s){super(),this.parsedMap=e,this.tileX=t,this.tileZ=n,this.tileSize=e.tileSize;const r=ed(e,t,n);this.position.set(r.minX+this.tileSize/2,0,r.minZ+this.tileSize/2),this.userData.key=`${t},${n}`;const a=new Ut(new Nn(this.tileSize,this.tileSize),oa(rr("ground"),this.tileSize/la));a.rotation.x=-Math.PI/2,a.position.y=0,this.add(a);for(const o of s){const l=this.createObjectMesh(o);l&&this.add(l)}}createObjectMesh(e){const{type:t,x:n,z:s}=e,r=n-this.position.x,a=s-this.position.z;switch(t){case"building":{const o=e.size??{x:Zl,y:Zl},l=Math.max(o.x,o.y),c=new Ut(new Nn(o.x,l),nv(e.spriteId??rr("building")));return c.rotation.y=iu,c.position.set(r,l/2,a),c.userData.object=e,c}case"npc":{const o=new Ut(new Po(.2,.5),new nf({color:16776960}));return o.userData.ownMaterial=!0,o.position.set(r,.35,a),o.userData.object=e,o}case"activity":{const o=new Ut(new Nn(ca,ca),oa(e.spriteId??rr("activity"),ca/la));return o.rotation.x=-Math.PI/2,o.position.set(r,.02,a),o.userData.object=e,o}case"road":{const o=new Ut(new Nn(this.tileSize,this.tileSize),oa(e.spriteId??rr("road"),this.tileSize/la));return o.rotation.x=-Math.PI/2,o.position.set(r,.01,a),o.userData.object=e,o}default:return null}}dispose(){this.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.userData.ownMaterial&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())})}}const av=.2;class ov{constructor(e,t,n={}){this.parent=t,this.positionGetter=n.positionGetter??(()=>({x:0,z:0})),this.unloadDistance=n.unloadDistance??3;const s=e.maps?w0(e):null;this.parsedMaps=s?.maps??e.parsedMaps??new Map,this.tileSize=s?.tileSize??e.tileSize??10,this.loadedTiles=new Map,this.currentMapName=null}setMap(e){this.currentMapName=e,this.update()}getParsedMap(e=this.currentMapName){return this.parsedMaps.get(e)??null}getTilesToLoad(e,t,n){const{tileSize:s}=n,r=Math.floor(e/s),a=Math.floor(t/s),o=s*av,l=new Set;l.add(`${r},${a}`);const c=ed(n,r,a);return e>=c.maxX-o&&l.add(`${r+1},${a}`),e<=c.minX+o&&l.add(`${r-1},${a}`),t>=c.maxZ-o&&l.add(`${r},${a+1}`),t<=c.minZ+o&&l.add(`${r},${a-1}`),e>=c.maxX-o&&t>=c.maxZ-o&&l.add(`${r+1},${a+1}`),e<=c.minX+o&&t>=c.maxZ-o&&l.add(`${r-1},${a+1}`),e>=c.maxX-o&&t<=c.minZ+o&&l.add(`${r+1},${a-1}`),e<=c.minX+o&&t<=c.minZ+o&&l.add(`${r-1},${a-1}`),Array.from(l).map(d=>{const[u,h]=d.split(",").map(Number);return{tileX:u,tileZ:h}}).filter(({tileX:d,tileZ:u})=>d>=0&&d<n.tilesX&&u>=0&&u<n.tilesZ)}loadTile(e,t,n){if(e<0||e>=n.tilesX||t<0||t>=n.tilesZ)return;const s=`${e},${t}`;if(this.loadedTiles.has(s))return;const r=n.tiles[s]??[],a=new rv(n,e,t,r);this.loadedTiles.set(s,a),this.parent.add(a)}unloadDistantTiles(e,t){const n=Math.floor(e/this.tileSize),s=Math.floor(t/this.tileSize);for(const[r,a]of this.loadedTiles.entries()){const[o,l]=r.split(",").map(Number),c=Math.abs(o-n),d=Math.abs(l-s);(c>this.unloadDistance||d>this.unloadDistance)&&(this.parent.remove(a),a.dispose(),this.loadedTiles.delete(r))}}update(){const e=this.getParsedMap();if(!e)return;const{x:t,z:n}=this.positionGetter(),s=this.getTilesToLoad(t,n,e);for(const{tileX:r,tileZ:a}of s)this.loadTile(r,a,e);this.unloadDistantTiles(t,n)}}const Ct=["strength","dexterity","intelligence","endurance","leadership"],on=10,St=6,Qt=16,ru={strength:"Pull-ups, log carries, pugel sticks",dexterity:"Obstacle course, MCMAP, rappelling, movement speed",intelligence:"Lecture hall, tactics, written tests",endurance:"Trail run, track, swim",leadership:"Drill, parade deck, leading peers"};function au(){return{strength:on,dexterity:on,intelligence:on,endurance:on,leadership:on}}function ei(i){return Math.max(St,Math.min(Qt,i))}function lv(i){const e={};for(const t of Ct)e[t]=ei(i[t]??on);return e}function ou(i,e={}){const t={...i};for(const n of Ct)t[n]=ei((t[n]??on)+(e[n]??0));return t}function $t(i){return{strength:"STR",dexterity:"DEX",intelligence:"INT",endurance:"END",leadership:"LDR"}[i]??i.toUpperCase()}const Jl=.85,cv=1.15;function dv(i){const e=(i-St)/(Qt-St);return Jl+e*(cv-Jl)}const Ql=45,uv=55;function hv(i){return Ct.reduce((e,t)=>e+(i[t]??on),0)}function fv(){const i=Ql+Math.floor(Math.random()*(uv-Ql+1)),e={};for(const r of Ct)e[r]=St;let t=i-Ct.length*St;const n=Ct.length*(Qt-St);t=Math.max(0,Math.min(t,n));let s=n*4;for(;t>0&&s-- >0;){const r=Ct[Math.floor(Math.random()*Ct.length)];e[r]<Qt&&(e[r]++,t--)}return lv(e)}function lo(i,e={}){return ou(i,e)}function ec(i,e){return(i[e]??on)>St}function tc(i,e,t){return t>0&&(i[e]??on)<Qt}function Bn(i){return(Math.max(St,Math.min(Qt,i))-St)/(Qt-St)}function pv(i,e){const t=(Bn(i)+Bn(e))/2;return Math.round(180+t*170)}function mv(i){return Math.round(900-Bn(i)*350)}function gv(i,e){const t=(Bn(i)+Bn(e))/2;return Math.round(700-t*250)}function _v(i,e){const t=(Bn(i)+Bn(e))/2;return Math.round(70+t*40)}function vv(i,e,t){const s=14-(Bn(i)+Bn(e))/2*4;return t?s*.6:s}const co=[{id:"tshirt_jeans",name:"T-shirt & Jeans",topColor:8886705,bottomColor:2829615},{id:"hoodie_joggers",name:"Hoodie & Joggers",topColor:3355443,bottomColor:5592405},{id:"polo_khakis",name:"Polo & Khakis",topColor:9127187,bottomColor:12045528},{id:"flannel_workboots",name:"Flannel & Work Pants",topColor:9127187,bottomColor:2829615}],uo=[{id:"fair",name:"Fair",color:16764080},{id:"light",name:"Light",color:15587128},{id:"medium",name:"Medium",color:12095058},{id:"olive",name:"Olive",color:9132587},{id:"tan",name:"Tan",color:10254648},{id:"brown",name:"Brown",color:6700590},{id:"dark",name:"Dark",color:4637373},{id:"deep",name:"Deep",color:2894892}],ho=[{id:"black",name:"Black",color:1710618},{id:"dark_brown",name:"Dark Brown",color:2894892},{id:"brown",name:"Brown",color:6040119},{id:"auburn",name:"Auburn",color:9127187},{id:"red",name:"Red",color:9109504},{id:"blonde",name:"Blonde",color:13808703},{id:"gray",name:"Gray",color:8421504},{id:"white",name:"White",color:14079702}],mi=3,nc=.85,yv=1.15,ic=.85,xv=1.15,lu=50,cu="tshirt_jeans",du="medium",uu="brown",hu="male";function bv(i){const e=Math.max(0,Math.min(100,i))/100;return nc+e*(yv-nc)}function Sv(i){const e=(i-St)/(Qt-St);return ic+e*(xv-ic)}function Mv(i){return i==="female"?.98:1.02}function Ev(i){return co.find(e=>e.id===i)??co[0]}function wv(i){return uo.find(e=>e.id===i)??uo[2]}function Tv(i){return ho.find(e=>e.id===i)??ho[2]}function Av(){return co}function Rv(){return uo}function Cv(){return ho}function fu(){return{height:lu,skinToneId:du,hairColorId:uu,gender:hu,civilianOutfitId:cu}}const Pv=.9,pu=1.35;function mu(i){const e=i?.appearance??{},t=Ev(e.civilianOutfitId??cu),n=wv(e.skinToneId??du),s=Tv(e.hairColorId??uu);return{s:n.color,h:s.color,c:t.topColor,j:t.bottomColor}}function gu(i){const e=new Ut(new Nn(Pv,pu),iv(mu(i)));return e.name="recruitSprite",Io(e,i),e}function Io(i,e){if(!i||!e)return;const t=e.appearance??{},n=bv(t.height??lu),s=Mv(t.gender??hu),r=Sv(e.stats?.strength??10),a=n*s;i.scale.set(r,a,1),i.position.y=pu*a/2,sv(i.material,mu(e))}const Dv=14,Lv=.05;class Iv extends fi{raycaster=new hf;constructor(e,t,n,s={width:50,height:40}){super(),this.character=n,this.sprite=gu(n),this.sprite.rotation.y=iu,this.add(this.sprite),this.position.set(5,0,5),this.camera=e,this.map=t,this.bounds=s,this.target=null,this.inputEnabled=!0,this._onMouseDown=this.onMouseDown.bind(this),window.addEventListener("mousedown",this._onMouseDown)}updateAppearance(){Io(this.sprite,this.character)}getWalkSpeed(){const e=this.character?.stats?.dexterity??on;return Dv*dv(e)}update(e){if(!this.inputEnabled||!this.target)return;const t=this.target.x-this.position.x,n=this.target.z-this.position.z,s=Math.hypot(t,n);if(s<=Lv){this.position.set(this.target.x,0,this.target.z),this.target=null;return}const r=this.getWalkSpeed()*e,a=Math.min(1,r/s);this.position.x+=t*a,this.position.z+=n*a}onMouseDown(e){if(!this.inputEnabled||e.button!==0)return;const t=new we(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1);this.raycaster.setFromCamera(t,this.camera);const n=this.raycaster.intersectObjects([this.map],!0);if(n.length>0){const{x:s,z:r}=n[0].point,a=Math.max(0,Math.min(this.bounds.width,s)),o=Math.max(0,Math.min(this.bounds.height,r));this.target=new k(a,0,o)}}dispose(){window.removeEventListener("mousedown",this._onMouseDown)}}const Nv={honor:8,passing:4,unsat:1},Uv=1;function Ms(i={}){return{week:1,dayInWeek:1,completed:{},readiness:0,weekStatGains:{},sideQuests:{},phase:"training",difficulty:"story",hydration:100,recycleTokens:0,itUsed:{},...i}}function _t(i){if(!i)return i;const e=i.campaign??Ms();return{...i,schemaVersion:mi,mode:i.mode??"campaign",campaign:{...Ms(),...e,completed:{...e.completed},weekStatGains:{...e.weekStatGains},sideQuests:{...e.sideQuests},itUsed:{...e.itUsed}}}}function _u(i){return i?.campaign?.difficulty==="ironman"}function Er(i){return i?.mode==="sandbox"}function No(i,e){const t=_t(i);return{...t,campaign:{...t.campaign,hydration:Math.max(0,Math.min(100,e))}}}function kv(i){const e=_t(i),t=e.campaign.recycleTokens??0;return t<=0?e:{...e,campaign:{...e.campaign,recycleTokens:t-1}}}function Fv(i){const e=_t(i),t={...e.campaign};return t.readiness=Math.max(0,t.readiness-5),t.hydration=50,{...e,campaign:t}}function Ov(i,e){return!i?.campaign?.itUsed?.[e]}function Bv(i,e){const t=_t(i);return{...t,campaign:{...t.campaign,itUsed:{...t.campaign.itUsed,[e]:!0}}}}function Hv(i){return i>=.85?"honor":i>=.5?"passing":"unsat"}function zv(i){return Nv[i]??0}function vu(i,e){return`w${i}_${e}`}function Wv(i,e,t){const n=vu(e,t);return(i.weekStatGains[n]??0)<Uv}function Gv(i,e,t){const n=_t(i),s={...n.campaign},r={...n.stats},a=s.week,o=zv(t.grade);s.readiness=Math.min(100,s.readiness+o),s.completed={...s.completed,[e]:{grade:t.grade,score:t.score}};const l={};if(t.grade==="honor"&&t.stats?.length){for(const d of t.stats)if(Wv(s,a,d)){const u=vu(a,d);s.weekStatGains={...s.weekStatGains,[u]:(s.weekStatGains[u]??0)+1},r[d]=ei((r[d]??10)+1),l[d]=1}}const c=(n.bootDay??0)+1;return{...n,stats:r,bootDay:c,campaign:s,_lastResult:{dayId:e,...t,readinessDelta:o,statDeltas:l}}}function Vv(i,e){const t=_t(i),n={...t.campaign};let s=!1;return n.dayInWeek>=e?(s=!0,n.week+=1,n.dayInWeek=1,n.weekStatGains={}):n.dayInWeek+=1,{character:{...t,campaign:n},weekComplete:s}}function qv(i,e,t={}){const n=_t(i),s={...n.campaign};s.sideQuests={...s.sideQuests,[e]:"done"};let r=s.readiness;t.readiness&&(r=Math.min(100,r+t.readiness));const a={...n.stats};return t.stat&&t.statKey&&(a[t.statKey]=ei((a[t.statKey]??10)+t.stat)),{...n,stats:a,campaign:{...s,readiness:r}}}function Xv(i,e){return i?.campaign?.sideQuests?.[e]==="done"}function $v(i){return i>=80?"Honor Graduate":i>=50?"Company Honors":"United States Marine"}function Kv(i){const e=_t(i),t=$v(e.campaign.readiness);return{...e,honorsTitle:t,campaign:{...e.campaign,phase:"graduated"}}}function sc(i){return i?.campaign?.phase==="graduated"}const Ds=3,Yv="bootcamp-save-";function Uo(i){return`${Yv}${i}`}function jv(){return Ds}function Zv(i){return!i||typeof i!="object"||!i.name||!i.stats||!i.appearance?null:i.schemaVersion===1?_t({...i,schemaVersion:mi,mode:"campaign",campaign:Ms({difficulty:"story"})}):i.schemaVersion===2?_t({...i,schemaVersion:mi,mode:i.mode??"campaign",campaign:{...Ms({difficulty:"story"}),...i.campaign,difficulty:i.campaign?.difficulty??"story",hydration:i.campaign?.hydration??100,recycleTokens:i.campaign?.recycleTokens??0,itUsed:i.campaign?.itUsed??{}}}):i.schemaVersion===mi?_t(i):null}function Jv(i){return Zv(i)}function Qv(i){if(i<0||i>=Ds)return null;try{const e=localStorage.getItem(Uo(i));return e?Jv(JSON.parse(e)):null}catch{return null}}function ko(i,e){if(i<0||i>=Ds)return!1;try{const t=_t({...e,schemaVersion:mi,slotIndex:i});return localStorage.setItem(Uo(i),JSON.stringify(t)),!0}catch{return!1}}function yu(i){i<0||i>=Ds||localStorage.removeItem(Uo(i))}function da(){return Array.from({length:Ds},(i,e)=>Qv(e))}const fo=[{id:"high_school_athlete",name:"High School Athlete",description:"Varsity sports. Strong and durable, but bookwork was never your priority.",modifiers:{strength:2,dexterity:1,intelligence:-2,endurance:2,leadership:-1},defaultOutfitId:"tshirt_jeans"},{id:"team_captain",name:"Team Captain",description:"Led a team or club. Natural leader with quick feet, but the long haul wears on you.",modifiers:{strength:0,dexterity:2,intelligence:0,endurance:-2,leadership:2},defaultOutfitId:"polo_khakis"},{id:"honor_student",name:"Honor Student",description:"Strong academics. Sharp mind, but you skipped gym more than you'd admit.",modifiers:{strength:-2,dexterity:0,intelligence:3,endurance:-1,leadership:0},defaultOutfitId:"polo_khakis"},{id:"jrotc",name:"JROTC",description:"Prior drill exposure. Disciplined and coordinated, light on classroom edge.",modifiers:{strength:0,dexterity:2,intelligence:-1,endurance:0,leadership:2},defaultOutfitId:"polo_khakis"},{id:"manual_labor",name:"Manual Labor",description:"Physical job background. Built tough from work, not from giving orders.",modifiers:{strength:2,dexterity:0,intelligence:-1,endurance:2,leadership:-2},defaultOutfitId:"flannel_workboots"},{id:"student_council",name:"Student Council",description:"Organized peers and ran meetings. Smart and persuasive, not the most athletic.",modifiers:{strength:-1,dexterity:-1,intelligence:2,endurance:0,leadership:2},defaultOutfitId:"polo_khakis"}],xu="bootcamp-meta",bu={pooleePrep:{id:"pooleePrep",name:"Poolee Prep",cost:15,description:"+1 to one starting stat of your choice"},secondCanteen:{id:"secondCanteen",name:"Second Canteen",cost:20,description:"Hydration drains 30% slower on patrol"},recyclePaperwork:{id:"recyclePaperwork",name:"Recycle Paperwork",cost:30,description:"Start each campaign run with 1 recycle token"},motivated:{id:"motivated",name:"Motivated",cost:25,description:"Start each campaign run at +5 readiness"}};function ua(){return{grit:0,perks:{},runsCompleted:0,bestReadiness:0}}function ns(){try{const i=localStorage.getItem(xu);if(!i)return ua();const e=JSON.parse(i);return{...ua(),...e,perks:{...e.perks}}}catch{return ua()}}function Su(i){try{return localStorage.setItem(xu,JSON.stringify(i)),!0}catch{return!1}}function Mu(i){return!!ns().perks[i]}function ey(i){const e=bu[i];if(!e)return{ok:!1,reason:"Unknown perk"};const t=ns();return t.perks[i]?{ok:!1,reason:"Already owned"}:t.grit<e.cost?{ok:!1,reason:"Not enough grit"}:(t.grit-=e.cost,t.perks[i]=!0,Su(t),{ok:!0,meta:t})}function ty(i,{graduated:e=!1}={}){const t=i?.campaign??{},n=Object.values(t.completed??{}),s=n.length,r=n.filter(o=>o.grade==="honor").length;let a=s+r*2;return e&&(a+=25),t.difficulty==="ironman"&&(a*=2),a}function rc(i,{graduated:e=!1}={}){const t=ty(i,{graduated:e}),n=ns();n.grit+=t,n.runsCompleted+=1;const s=i?.campaign?.readiness??0;return n.bestReadiness=Math.max(n.bestReadiness,s),Su(n),t}function ny(i,{perkStat:e=null}={}){if(i.mode==="sandbox")return i;const t=ns();let n={...i.stats},s={...i.campaign};return t.perks.pooleePrep&&e&&Ct.includes(e)&&(n[e]=ei((n[e]??10)+1)),t.perks.recyclePaperwork&&(s.recycleTokens=(s.recycleTokens??0)+1),t.perks.motivated&&(s.readiness=Math.min(100,(s.readiness??0)+5)),{...i,stats:n,campaign:s}}function iy(){return Mu("secondCanteen")?.7:1}function gi(i){return fo.find(e=>e.id===i)??fo[0]}function sy(){return fo}function ry(i,e,t,n=0,s=null,r={}){const{mode:a="campaign",difficulty:o="story",perkStat:l=null}=r,c=gi(e),d=ou(s??au(),c.modifiers),u=fu(),h=a==="sandbox"?{}:{difficulty:o};let m={schemaVersion:mi,name:i.trim(),mode:a,backgroundId:c.id,stats:d,appearance:{height:t?.height??u.height,skinToneId:t?.skinToneId??u.skinToneId,hairColorId:t?.hairColorId??u.hairColorId,gender:t?.gender??u.gender,civilianOutfitId:t?.civilianOutfitId??c.defaultOutfitId??u.civilianOutfitId},bootDay:0,campaign:Ms(h),createdAt:new Date().toISOString(),slotIndex:n};return a!=="sandbox"&&(m=ny(m,{perkStat:l})),m}function ay(i,e={},t=null){const n=gi(i),s=fu(),r=t??au();return{schemaVersion:mi,name:"",backgroundId:n.id,coreStats:{...r},stats:lo(r,n.modifiers),appearance:{...s,civilianOutfitId:n.defaultOutfitId??s.civilianOutfitId,...e},bootDay:0,createdAt:null,slotIndex:null}}function oy(i){const e=i.trim();return e.length<2?"Name must be at least 2 characters":e.length>24?"Name must be 24 characters or less":null}function ly(){return new Promise(i=>{const e=document.createElement("div");e.className="menu-overlay";function t(){const n=ns(),s=Object.values(bu).map(r=>{const a=!!n.perks[r.id],o=!a&&n.grit>=r.cost;return`
          <div class="locker-perk${a?" locker-perk--owned":""}">
            <div class="locker-perk-info">
              <span class="locker-perk-name">${r.name}</span>
              <span class="locker-perk-desc">${r.description}</span>
            </div>
            ${a?'<span class="locker-owned-badge">Owned</span>':`<button type="button" class="btn btn-secondary locker-buy-btn" data-perk="${r.id}" ${o?"":"disabled"}>${r.cost} Grit</button>`}
          </div>`}).join("");e.innerHTML=`
        <div class="menu-panel locker-panel">
          <h2 class="menu-title">The Locker</h2>
          <p class="menu-subtitle">Permanent perks for future recruits</p>
          <p class="locker-grit-balance">Grit: <strong>${n.grit}</strong></p>
          <div class="locker-perk-list">${s}</div>
          <div class="schedule-actions">
            <button type="button" class="btn btn-primary" id="locker-close">Close</button>
          </div>
        </div>
      `,e.querySelector("#locker-close")?.addEventListener("click",()=>{e.remove(),i()},{once:!0}),e.querySelectorAll(".locker-buy-btn").forEach(r=>{r.addEventListener("click",()=>{ey(r.dataset.perk).ok&&t()})})}t(),document.body.appendChild(e)})}function cy(i,{confirmLabel:e="Confirm",cancelLabel:t="Cancel"}={}){return new Promise(n=>{const s=document.createElement("div");s.className="menu-overlay confirm-overlay",s.innerHTML=`
      <div class="confirm-box">
        <p>${i}</p>
        <div class="confirm-actions">
          <button type="button" class="btn btn-danger" data-action="yes">${e}</button>
          <button type="button" class="btn btn-secondary" data-action="no">${t}</button>
        </div>
      </div>
    `;const r=o=>{if(o.key==="Escape"&&a(!1),o.key==="Enter"){const l=document.activeElement?.dataset?.action;l==="yes"&&a(!0),l==="no"&&a(!1)}},a=o=>{document.removeEventListener("keydown",r),s.remove(),n(o)};s.addEventListener("click",o=>{const l=o.target.closest("[data-action]")?.dataset.action;l==="yes"&&a(!0),l==="no"&&a(!1)}),document.addEventListener("keydown",r),document.body.appendChild(s),s.querySelector("[data-action=no]").focus()})}function dy(i){return i.mode==="sandbox"?'<span class="slot-badge slot-badge--sandbox">SANDBOX</span>':i.campaign?.difficulty==="ironman"?'<span class="slot-badge slot-badge--ironman">IRONMAN</span>':""}function uy(){return new Promise(i=>{let e=0;const t=document.createElement("div");t.className="menu-overlay",t.innerHTML=`
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
    `;const n=t.querySelector(".slot-list"),s=t.querySelector("#slot-grit");function r(){const u=ns();s.innerHTML=`Grit: <strong>${u.grit}</strong> · Runs: ${u.runsCompleted} · Best readiness: ${u.bestReadiness}%`;const h=da();n.innerHTML=h.map((m,_)=>{const v=_===e?" slot-row--focused":"";if(!m)return`
            <div class="slot-row${v}">
              <button type="button" class="slot-card slot-card--empty" data-slot="${_}" role="option">
                <span class="slot-label">Slot ${_+1}</span>
                <span class="slot-name">New Recruit</span>
              </button>
            </div>`;const p=gi(m.backgroundId),f=m.campaign,E=m.mode==="sandbox"?"Sandbox · free play":f?.phase==="graduated"?`Graduated · ${m.honorsTitle??"Marine"}`:f?`Week ${f.week} · Day ${f.dayInWeek} · ${f.readiness}% ready`:`Day ${m.bootDay??0}`;return`
          <div class="slot-row${v}">
            <button type="button" class="slot-card slot-card--filled" data-slot="${_}" role="option">
              <span class="slot-label">Slot ${_+1} ${dy(m)}</span>
              <span class="slot-name">${m.name}</span>
              <span class="slot-meta">${E} · ${p.name}</span>
            </button>
            <button type="button" class="btn btn-danger slot-reset-btn" data-slot="${_}" aria-label="Reset save slot ${_+1}">Reset</button>
          </div>`}).join("")}function a(u){e=Math.max(0,Math.min(jv()-1,u)),r(),n.querySelector(`.slot-card[data-slot="${e}"]`)?.focus()}function o(u){const h=da()[u];c(),i(h?{type:"continue",character:h,slotIndex:u}:{type:"create",slotIndex:u})}async function l(u){const h=da()[u];if(!h)return;await cy(`Reset slot ${u+1} and delete ${h.name}? This cannot be undone.`,{confirmLabel:"Reset Save"})&&(yu(u),e=u,r(),n.querySelector(`.slot-card[data-slot="${u}"]`)?.focus())}function c(){document.removeEventListener("keydown",d),t.remove()}function d(u){u.key==="1"&&a(0),u.key==="2"&&a(1),u.key==="3"&&a(2),u.key==="ArrowUp"&&a(e-1),u.key==="ArrowDown"&&a(e+1),u.key==="Enter"&&o(e),u.key==="Delete"&&l(e)}n.addEventListener("click",u=>{const h=u.target.closest(".slot-reset-btn");if(h){u.stopPropagation(),l(Number(h.dataset.slot));return}const m=u.target.closest(".slot-card");if(!m)return;const _=Number(m.dataset.slot);a(_),o(_)}),n.addEventListener("focusin",u=>{const h=u.target.closest(".slot-card");h&&(e=Number(h.dataset.slot))}),t.querySelector("#btn-locker").addEventListener("click",async()=>{await ly(),r()}),document.addEventListener("keydown",d),document.body.appendChild(t),r(),n.querySelector(`.slot-card[data-slot="${e}"]`)?.focus()})}const hy=.9;class Fo{constructor(e,t={}){this.container=e,this.width=t.width??220,this.height=t.height??320;const n=t.pixelScale??4;this.renderer=new Jc({alpha:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(this.width/n,this.height/n,!1),this.renderer.domElement.style.width=`${this.width}px`,this.renderer.domElement.style.height=`${this.height}px`,this.renderer.domElement.style.imageRendering="pixelated",e.appendChild(this.renderer.domElement),this.scene=new zc,t.background===null?this.scene.background=null:this.scene.background=new ze(t.background??1710638);const s=this.width/this.height,r=2;this.camera=new Cs(-r*s/2,r*s/2,r/2,-r/2,.1,10),this.camera.position.set(0,.85,3),this.camera.lookAt(0,.85,0),this.mesh=gu({stats:{},appearance:{}}),this.scene.add(this.mesh),this._baseY=this.mesh.position.y,this._pullT=0,this._boundAnimate=this._animate.bind(this),this._animating=!0,requestAnimationFrame(this._boundAnimate)}update(e){Io(this.mesh,e),this._baseY=this.mesh.position.y,this._applyPull()}setPullHeight(e){this._pullT=Math.max(0,Math.min(1,e)),this._applyPull()}_applyPull(){this.mesh.position.y=this._baseY+this._pullT*hy}_animate(){this._animating&&(this.renderer.render(this.scene,this.camera),requestAnimationFrame(this._boundAnimate))}dispose(){this._animating=!1,this.renderer.dispose(),this.renderer.domElement.remove()}}const fy=["James Martinez","Michael Chen","David Thompson","Robert Garcia","William Johnson","Christopher Lee","Daniel Wilson","Matthew Brown","Anthony Davis","Joshua Miller","Andrew Taylor","Ryan Anderson"],py=["Sarah Martinez","Emily Chen","Jessica Thompson","Ashley Garcia","Amanda Johnson","Jennifer Lee","Nicole Wilson","Michelle Brown","Stephanie Davis","Elizabeth Miller","Rebecca Taylor","Lauren Anderson"];function my(i="male"){const e=i==="female"?py:fy;return e[Math.floor(Math.random()*e.length)]}function gy(){return new Promise(i=>{let e={mode:"campaign",difficulty:"story",perkStat:null};const t=Mu("pooleePrep"),n=document.createElement("div");n.className="menu-overlay";function s(){const r=t&&e.mode!=="sandbox"?`<fieldset class="field perk-stat-field">
            <legend>Poolee Prep — +1 stat</legend>
            <div class="perk-stat-row">${Ct.map(a=>`<button type="button" class="btn btn-secondary perk-stat-btn${e.perkStat===a?" perk-stat-btn--selected":""}" data-stat="${a}">${$t(a)}</button>`).join("")}</div>
          </fieldset>`:"";n.innerHTML=`
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
      `,n.querySelector("#mode-back").addEventListener("click",()=>{n.remove(),i(null)},{once:!0}),n.querySelector("#mode-continue").addEventListener("click",()=>{t&&e.mode!=="sandbox"&&!e.perkStat&&(e.perkStat="leadership"),n.remove(),i({...e})},{once:!0}),n.querySelectorAll(".mode-card").forEach(a=>{a.addEventListener("click",()=>{e.mode=a.dataset.mode,e.difficulty=a.dataset.difficulty,s()})}),n.querySelectorAll(".perk-stat-btn").forEach(a=>{a.addEventListener("click",()=>{e.perkStat=a.dataset.stat,s()})})}s(),document.body.appendChild(n)})}async function _y(i){const e=await gy();return e?new Promise(t=>{const n=sy(),s=Av(),r=Rv(),a=Cv();let o=ay(n[0].id),l=0,c=null;const d=document.createElement("div");d.className="menu-overlay",d.innerHTML=`
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
    `,document.body.appendChild(d);const u=d.querySelector("#builder-preview");c=new Fo(u);const h=d.querySelector("#char-name"),m=d.querySelector("#name-error"),_=d.querySelector("#btn-enter"),v=d.querySelector("#char-height"),p=d.querySelector("#skin-swatches"),f=d.querySelector("#hair-swatches"),E=d.querySelector("#background-list"),A=d.querySelector("#stats-grid"),M=d.querySelector("#stat-total"),w=d.querySelector("#stat-points"),T=d.querySelector("#outfit-row");function R(I,q,Q,ne,ce="color"){I.innerHTML=q.map(Te=>`
        <button type="button"
          class="swatch${Te.id===Q?" swatch--selected":""}"
          data-${ne}="${Te.id}"
          title="${Te.name}"
          style="background:#${Te[ce].toString(16).padStart(6,"0")}"
          aria-label="${Te.name}"
          aria-pressed="${Te.id===Q}"
        ></button>
      `).join("")}function U(){E.innerHTML=n.map(I=>`
        <label class="background-option${o.backgroundId===I.id?" background-option--selected":""}">
          <input type="radio" name="background" value="${I.id}" ${o.backgroundId===I.id?"checked":""} />
          <span class="background-name">${I.name}</span>
          <span class="background-desc">${I.description}</span>
        </label>
      `).join("")}function y(){const I=gi(o.backgroundId);o.stats=lo(o.coreStats,I.modifiers)}function b(){const I=gi(o.backgroundId),q=lo(o.coreStats,I.modifiers);A.innerHTML=Ct.map(Q=>{const ne=o.coreStats[Q],ce=q[Q],Te=ce-ne,Le=Te!==0?`<span class="stat-bg-mod">${Te>0?"+":""}${Te}</span>`:"",at=Q==="strength"?" stat--str":"",et=ec(o.coreStats,Q),$=tc(o.coreStats,Q,l);return`
          <div class="stat-row${at}" title="${ru[Q]}">
            <span class="stat-label">${$t(Q)}</span>
            <div class="stat-controls">
              <button type="button" class="stat-btn" data-stat="${Q}" data-delta="-1" ${et?"":"disabled"} aria-label="Decrease ${$t(Q)}">−</button>
              <span class="stat-value">${ce}</span>
              <button type="button" class="stat-btn" data-stat="${Q}" data-delta="1" ${$?"":"disabled"} aria-label="Increase ${$t(Q)}">+</button>
            </div>
            ${Le}
          </div>`}).join(""),M.textContent=`Total: ${hv(o.coreStats)}`,w.textContent=`Points: ${l}`}function P(){T.innerHTML=s.map(I=>`
        <button type="button"
          class="outfit-btn${o.appearance.civilianOutfitId===I.id?" outfit-btn--selected":""}"
          data-outfit="${I.id}"
          aria-pressed="${o.appearance.civilianOutfitId===I.id}"
        >${I.name}</button>
      `).join("")}function z(){o.name=h.value,o.appearance.gender=d.querySelector('input[name="gender"]:checked')?.value??"male",o.appearance.height=Number(v.value)}function O(){z(),y(),R(p,r,o.appearance.skinToneId,"skin"),R(f,a,o.appearance.hairColorId,"hair"),U(),b(),P(),c.update(o),K()}function K(){const I=oy(h.value);return m.textContent=I??"",_.disabled=!!I||!o.backgroundId,!I}function V(I){c?.dispose(),document.removeEventListener("keydown",G),d.remove(),t(I)}function G(I){I.key==="Escape"&&V(null)}h.addEventListener("input",O),d.querySelector("#btn-random-name").addEventListener("click",()=>{h.value=my(o.appearance.gender),O()}),d.querySelectorAll('input[name="gender"]').forEach(I=>{I.addEventListener("change",O)}),v.addEventListener("input",O),p.addEventListener("click",I=>{const q=I.target.closest("[data-skin]");q&&(o.appearance.skinToneId=q.dataset.skin,O())}),f.addEventListener("click",I=>{const q=I.target.closest("[data-hair]");q&&(o.appearance.hairColorId=q.dataset.hair,O())}),E.addEventListener("change",I=>{if(I.target.name!=="background")return;o.backgroundId=I.target.value;const q=gi(o.backgroundId);o.appearance.civilianOutfitId=q.defaultOutfitId,O()}),d.querySelector("#btn-roll-stats").addEventListener("click",()=>{o.coreStats=fv(),l=0,O()}),A.addEventListener("click",I=>{const q=I.target.closest(".stat-btn");if(!q||q.disabled)return;const Q=q.dataset.stat,ne=Number(q.dataset.delta);if(ne<0&&ec(o.coreStats,Q)){o.coreStats={...o.coreStats,[Q]:o.coreStats[Q]-1},l++,O();return}ne>0&&tc(o.coreStats,Q,l)&&(o.coreStats={...o.coreStats,[Q]:o.coreStats[Q]+1},l--,O())}),T.addEventListener("click",I=>{const q=I.target.closest("[data-outfit]");q&&(o.appearance.civilianOutfitId=q.dataset.outfit,O())}),d.querySelector("#btn-back").addEventListener("click",()=>V(null)),d.querySelector("#btn-enter").addEventListener("click",()=>{if(!K())return;z();const I=ry(h.value,o.backgroundId,o.appearance,i,o.coreStats,{mode:e.mode,difficulty:e.difficulty,perkStat:e.perkStat});V(I)}),document.addEventListener("keydown",G),O(),h.focus()}):null}const vy=[{id:"easy_1",prompt:"How many push-ups are in a single push-up?",choices:["1","10","50","100"],answer:0},{id:"easy_2",prompt:"Boot camp training happens on land, not in the ___. ",choices:["ocean","sky","desert","forest"],answer:0},{id:"easy_3",prompt:"What does “left face” tell a formation to do?",choices:["Turn left","Turn right","About face","Fall out"],answer:0},{id:"easy_4",prompt:"2 + 3 = ?",choices:["4","5","6","7"],answer:1},{id:"easy_5",prompt:"Which meal is served in the chow hall?",choices:["Breakfast","Only snacks","Only dessert","None"],answer:0},{id:"easy_6",prompt:"A week has how many days?",choices:["5","6","7","8"],answer:2}],yy=[{id:"med_1",prompt:"A squad has 13 recruits. Two fall out. How many remain?",choices:["10","11","12","15"],answer:1},{id:"med_2",prompt:"Military time 1400 is the same as:",choices:["2:00 PM","4:00 PM","2:00 AM","12:00 PM"],answer:0},{id:"med_3",prompt:"If you run 2 laps on a 400 m track, how far did you run?",choices:["400 m","600 m","800 m","1600 m"],answer:2},{id:"med_4",prompt:"Which order is correct for a typical training day?",choices:["Wake → PT → Chow","Chow → Sleep → PT","Liberty → Wake → PT","PT → Sleep → Wake"],answer:0},{id:"med_5",prompt:"A gear locker holds 6 canteens per recruit. For 5 recruits, how many canteens?",choices:["11","25","30","36"],answer:2},{id:"med_6",prompt:"Which word is closest in meaning to “discipline”?",choices:["Chaos","Self-control","Laziness","Confusion"],answer:1}],xy=[{id:"hard_1",prompt:"A ruck march covers 12 km in 3 hours. What is the average speed in km/h?",choices:["3","4","5","6"],answer:1},{id:"hard_2",prompt:"If 3 squads of 13 link up, how many recruits total?",choices:["26","36","39","42"],answer:2},{id:"hard_3",prompt:"A right triangle has legs 3 and 4. How long is the hypotenuse?",choices:["5","6","7","8"],answer:0},{id:"hard_4",prompt:"Convert 2500 meters to kilometers.",choices:["0.25 km","2.5 km","25 km","250 km"],answer:1},{id:"hard_5",prompt:"A platoon loses 15% of 40 recruits to medical. How many remain (whole recruits)?",choices:["32","34","35","36"],answer:1},{id:"hard_6",prompt:"Which sequence shows proper escalation of command?",choices:["Fire team → Squad → Platoon","Platoon → Fire team → Squad","Squad → Fire team → Platoon","Fire team → Platoon → Squad"],answer:0}],ac={easy:vy,medium:yy,hard:xy},by=6;function Sy(i){return i<=8?["easy","easy","easy","easy","easy","medium"]:i<=11?["easy","easy","medium","medium","medium","hard"]:i<=13?["easy","medium","medium","medium","hard","hard"]:["medium","medium","hard","hard","hard","hard"]}function Eu(i){const e=[...i];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function My(i,e){const t=Eu(ac[i]??ac.easy);return t.find(n=>!e.has(n.id))??t[0]}function Ey(i){const e=Eu(Sy(i)),t=new Set,n=[];for(const s of e.slice(0,by)){const r=My(s,t);t.add(r.id),n.push({...r,difficulty:s})}return n}function wy(i,e){let t=0;for(let a=0;a<e.length;a++)i[a]===e[a].answer&&t++;const n=e.length,s=n>0?t/n:0;let r=0;return s>=1?r=1:s<.15&&(r=-1),{correct:t,total:n,percent:s,intDelta:r}}function Ty(i,e){if(!e)return i;const t={...i.stats};return t.intelligence=ei(t.intelligence+e),{...i,stats:t}}const po=45,$i={pull:"KeyF",top:"KeyJ",bottom:"KeyK"},Ay=[$i.pull,$i.top,$i.bottom];function Ry(i){let e=0;return i>=10?e=1:i<3&&(e=-1),{reps:i,strDelta:e}}function Cy(i,e){if(!e)return i;const t={...i.stats};return t.strength=ei(t.strength+e),{...i,stats:t}}const oc="Press <b>F</b> to pull up",Py="Rise! Press <b>J</b> at the top",Dy="Lower down. Press <b>K</b> at full hang";function wu(i,e){return new Promise(t=>{const n=e.stats.strength,s=e.stats.endurance,r=pv(n,s),a=mv(n),o=gv(n,s),l=_v(n,s);let c="hang",d=0,u=0,h=l,m=0,_=0,v=!0,p=performance.now(),f=0;const E=po*1e3;i.setReps(0),i.setEnergy(1),i.setTimer(po),i.setPullHeight(0),i.setPhaseHint(oc);function A(){v&&(v=!1,window.removeEventListener("keydown",w),t({reps:d,perfectReps:u,energyLeft:h,...Ry(d)}))}function M(R){if(h=Math.max(0,h-vv(n,s,R)),i.setEnergy(h/l),c="hang",i.setPullHeight(0),h<=0){A();return}i.setPhaseHint(oc)}function w(R){if(!(!v||R.repeat||!Ay.includes(R.code)))switch(R.preventDefault(),c){case"hang":R.code===$i.pull&&(c="rising",m=performance.now(),i.setPhaseHint(Py));break;case"top":R.code===$i.top?(d++,i.setReps(d),i.flash("perfect"),c="falling",m=performance.now(),i.setPhaseHint(Dy)):(i.flash("miss"),M(!1));break;case"bottom":R.code===$i.bottom?(u++,i.flash("perfect"),M(!0)):(i.flash("miss"),M(!1));break;default:i.flash("miss"),M(!1)}}function T(R){if(v){if(f+=R-p,p=R,i.setTimer((E-f)/1e3),f>=E){A();return}if(c==="rising"){const U=Math.min(1,(R-m)/a);i.setPullHeight(U),U>=1&&(c="top",_=R)}else if(c==="top")i.setPullHeight(1),R-_>r&&(i.flash("miss"),M(!1));else if(c==="falling"){const U=Math.min(1,(R-m)/o);i.setPullHeight(1-U),U>=1&&(c="bottom",_=R)}else c==="bottom"&&(i.setPullHeight(0),R-_>r&&(i.flash("miss"),M(!1)));requestAnimationFrame(T)}}window.addEventListener("keydown",w),requestAnimationFrame(T)})}class Ly{constructor(e,t){this.container=e,this.character=t,this.preview=null,this._choiceHandler=null,e.innerHTML=`
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
    `;const n=e.querySelector("#asvab-recruit-slot");this.preview=new Fo(n,{width:120,height:160,background:null,pixelScale:3}),this.preview.update(t)}showQuestion(e,t,n){return new Promise(s=>{const r=this.container.querySelector("#asvab-paper-meta"),a=this.container.querySelector("#asvab-paper-body");r.textContent=`Q ${t}/${n} · ${e.difficulty}`,a.innerHTML=`
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
      `;const o=a.querySelector("#asvab-bubbles");this._choiceHandler&&o.removeEventListener("click",this._choiceHandler),this._choiceHandler=l=>{const c=l.target.closest("[data-choice]");c&&(o.removeEventListener("click",this._choiceHandler),this._choiceHandler=null,c.classList.add("asvab-bubble--filled"),s(Number(c.dataset.choice)))},o.addEventListener("click",this._choiceHandler)})}dispose(){this._choiceHandler&&this.container.querySelector("#asvab-bubbles")?.removeEventListener("click",this._choiceHandler),this.preview?.dispose(),this.container.innerHTML=""}}class Tu{constructor(e,t){this.container=e,this.character=t,this.preview=null,this._flashTimer=null,e.innerHTML=`
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
    `;const n=e.querySelector("#pullup-recruit-slot");this.preview=new Fo(n,{width:110,height:150,background:null,pixelScale:3}),this.preview.update(t),this.repsEl=e.querySelector("#pullup-reps"),this.timerEl=e.querySelector("#pullup-timer"),this.energyBarEl=e.querySelector("#pullup-energy-bar"),this.phaseHintEl=e.querySelector("#pullup-phase-hint"),this.flashEl=e.querySelector("#pullup-flash")}setPullHeight(e){this.preview?.setPullHeight(e)}setReps(e){this.repsEl.textContent=String(e)}setTimer(e){this.timerEl.textContent=`${Math.max(0,e).toFixed(1)}s`}setEnergy(e){this.energyBarEl.style.width=`${Math.max(0,Math.min(1,e))*100}%`}setPhaseHint(e){this.phaseHintEl.innerHTML=e}flash(e){this.flashEl&&(clearTimeout(this._flashTimer),this.flashEl.textContent=e==="perfect"?"PERFECT":"MISS",this.flashEl.className=`pullup-timing-flash pullup-timing-flash--${e} pullup-timing-flash--show`,this._flashTimer=setTimeout(()=>{this.flashEl.className="pullup-timing-flash"},500))}dispose(){clearTimeout(this._flashTimer),this.preview?.dispose(),this.container.innerHTML=""}}const Iy="Sgt. Vasquez";class Au{constructor(e){this.container=e,this._keyHandler=null,this._resolveContinue=null,e.innerHTML=`
      <div class="station-scene">
        <div class="station-room">
          <div class="station-flag" aria-hidden="true"></div>
          <div class="station-desk" aria-hidden="true"></div>
          <div class="station-nco" id="station-nco"></div>
        </div>
        <div class="nco-dialogue">
          <div class="nco-nameplate">${Iy}</div>
          <p class="nco-text" id="nco-text"></p>
          <div class="nco-choices" id="nco-choices"></div>
          <div class="nco-actions" id="nco-actions"></div>
        </div>
      </div>
    `;const t=e.querySelector("#station-nco"),n=Ps("npc/nco");n.className="station-nco-sprite";const s=4;n.style.width=`${n.width*s}px`,n.style.height=`${n.height*s}px`,t.appendChild(n),this.textEl=e.querySelector("#nco-text"),this.choicesEl=e.querySelector("#nco-choices"),this.actionsEl=e.querySelector("#nco-actions")}say(e){return new Promise(t=>{this.choicesEl.innerHTML="",this.textEl.textContent=e,this.actionsEl.innerHTML='<button type="button" class="btn btn-primary nco-continue" id="nco-continue">Continue</button>';const n=this.actionsEl.querySelector("#nco-continue"),s=()=>{r(),t()},r=()=>{n.removeEventListener("click",s),this._keyHandler&&(window.removeEventListener("keydown",this._keyHandler),this._keyHandler=null)};this._keyHandler=a=>{a.key==="Enter"&&s()},window.addEventListener("keydown",this._keyHandler),n.addEventListener("click",s,{once:!0}),n.focus()})}ask(e){return new Promise(t=>{this.actionsEl.innerHTML="",this.textEl.textContent=e.prompt,this.choicesEl.innerHTML=e.choices.map((n,s)=>`
        <button type="button" class="btn btn-secondary nco-choice" data-choice="${s}">${n.text}</button>
      `).join(""),this.choicesEl.addEventListener("click",n=>{const s=n.target.closest("[data-choice]");s&&t(Number(s.dataset.choice))},{once:!0})})}dispose(){this._keyHandler&&window.removeEventListener("keydown",this._keyHandler),this.container.innerHTML=""}}const Ru=[{id:"why_join",prompt:"Why do you want to join the Marines?",weight:2,choices:[{text:"To lead Marines and earn respect.",stat:"leadership"},{text:"To prove I can handle anything.",stat:"endurance"},{text:"To get stronger and push my limits.",stat:"strength"},{text:"For education benefits and a fresh start.",stat:"intelligence"},{text:"To serve my country with honor.",stat:"leadership"}]},{id:"what_bring",prompt:"What do you bring to the table?",weight:1,choices:[{text:"I can take charge when things get rough.",stat:"leadership"},{text:"Quick feet and coordination.",stat:"dexterity"},{text:"I never quit on a long haul.",stat:"endurance"},{text:"I study hard and learn fast.",stat:"intelligence"},{text:"Raw physical strength.",stat:"strength"}]}];function Ny(i){const e=Object.fromEntries(Ct.map(s=>[s,0]));for(const s of i){const r=Ru.find(o=>o.id===s.questionId);if(!r)continue;const a=r.choices[s.choiceIndex];a&&(e[a.stat]=(e[a.stat]??0)+r.weight)}let t=Ct[0],n=-1;for(const s of Ct)e[s]>n&&(n=e[s],t=s);return t}function Uy(i,e){if(!Ct.includes(e))return i;const t={...i.stats};return t[e]=ei(t[e]+1),{...i,stats:t}}function ky(i){return new Promise(e=>{const t=document.createElement("div");t.className="menu-overlay",t.innerHTML=`
      <div class="menu-panel recruiter-panel">
        <h2 class="menu-title" id="recruiter-title">Recruiting Office</h2>
        <p class="menu-subtitle" id="recruiter-subtitle"></p>
        <div class="recruiter-body" id="recruiter-body"></div>
        <div class="recruiter-actions" id="recruiter-actions"></div>
      </div>
    `,document.body.appendChild(t);const n=t.querySelector("#recruiter-title"),s=t.querySelector("#recruiter-subtitle"),r=t.querySelector("#recruiter-body"),a=t.querySelector("#recruiter-actions");let o={...i,stats:{...i.stats}},l=null,c=null,d=null,u=null;const h=t.querySelector(".recruiter-panel");function m(T){t.remove(),e(T)}function _(T){a.innerHTML=T}async function v(){h.classList.add("recruiter-panel--station"),n.textContent="Recruiting Station",s.textContent="MEPS — Processing",_(""),r.innerHTML="";const T=new Au(r),R=[];await T.say(`At ease, ${o.name}. I'm your processing NCO.`),await T.say("Before you ship to MCRD, I need to know what kind of recruit I'm signing for."),await T.say("Answer straight — your motivation goes in your file.");for(const U of Ru){const y=await T.ask(U);R.push({questionId:U.id,choiceIndex:y})}d=Ny(R),o=Uy(o,d),await T.say(`Good answer. That'll serve you well. ${$t(d)} +1.`),await T.say(`Next up: the ASVAB at the folding table, then pull-ups on the bar. You've got ${po} seconds — don't gas out early.`),T.dispose(),h.classList.remove("recruiter-panel--station"),await f(),A()}function p(T,R,U){return u?u.showQuestion(T,R,U):Promise.resolve(0)}async function f(){h.classList.add("recruiter-panel--asvab"),n.textContent="ASVAB",s.textContent="Six-foot folding table · paper · issue crayon",r.innerHTML="",u=new Ly(r,o);const T=Ey(o.stats.intelligence),R=[];for(let U=0;U<T.length;U++)R.push(await p(T[U],U+1,T.length));u.dispose(),u=null,h.classList.remove("recruiter-panel--asvab"),l=wy(R,T),o=Ty(o,l.intDelta)}function E(T){return T>0?`<span class="stat-delta stat-delta--up">+${T}</span>`:T<0?`<span class="stat-delta stat-delta--down">${T}</span>`:'<span class="stat-delta">No change</span>'}function A(){n.textContent="ASVAB Results",s.textContent='Sgt. Vasquez — "Score recorded."',r.innerHTML=`
        <p class="recruiter-copy">${l.correct} / ${l.total} correct (${Math.round(l.percent*100)}%). ${$t("intelligence")}: ${o.stats.intelligence} ${E(l.intDelta)}</p>
      `,_('<button type="button" class="btn btn-primary" id="btn-start-pullups">Pull-Up Test</button>'),t.querySelector("#btn-start-pullups").addEventListener("click",()=>{M()},{once:!0})}function M(){n.textContent="Pull-Up Test",s.textContent=`Sgt. Vasquez — "Show me what you've got on the bar."`,r.innerHTML=`
        <p class="recruiter-copy">Step up to the bar. Press <strong>F</strong> to pull, <strong>J</strong> as your chin clears the bar, and <strong>K</strong> at full hang.</p>
        <p class="recruiter-copy recruiter-copy--small">Strength and endurance widen your timing windows and set your energy. Perfect reps cost less energy. The test ends at the buzzer or when you gas out.</p>
      `,_('<button type="button" class="btn btn-primary" id="btn-begin-pullups">Approach the Bar</button>'),t.querySelector("#btn-begin-pullups").addEventListener("click",async()=>{h.classList.add("recruiter-panel--pullup"),n.textContent="Pull-Up Test",s.textContent="F: pull · J: chin over bar · K: full hang",_(""),r.innerHTML="";const T=new Tu(r,o),R=await wu(T,o);T.dispose(),h.classList.remove("recruiter-panel--pullup"),c=R,o=Cy(o,c.strDelta),w()},{once:!0})}function w(){n.textContent="Cleared for Boot Camp",s.textContent=`Sgt. Vasquez — "You're cleared to ship."`,r.innerHTML=`
        <div class="recruiter-results">
          ${d?`
          <div class="recruiter-result-row">
            <span>Interview</span>
            <span>${$t(d)} ${E(1)}</span>
          </div>`:""}
          <div class="recruiter-result-row">
            <span>ASVAB</span>
            <span>${l.correct}/${l.total} · ${$t("intelligence")} ${E(l.intDelta)}</span>
          </div>
          <div class="recruiter-result-row">
            <span>Pull-ups</span>
            <span>${c.reps} reps (${c.perfectReps} perfect) · ${$t("strength")} ${E(c.strDelta)}</span>
          </div>
          <div class="recruiter-final-stats">
            ${$t("intelligence")} ${o.stats.intelligence} ·
            ${$t("strength")} ${o.stats.strength}
          </div>
        </div>
      `,_('<button type="button" class="btn btn-primary" id="btn-ship-out">Ship to MCRD</button>'),t.querySelector("#btn-ship-out").addEventListener("click",()=>{m({...o,recruiterCompleted:!0})},{once:!0})}v()})}function Fy(i){const e=document.createElement("div");e.className="recruit-hud",e.id="recruit-hud";function t(){if(!i){e.innerHTML="";return}const n=gi(i.backgroundId),s=Ct.map(_=>`
      <div class="recruit-stat" title="${ru[_]}">
        <span class="recruit-stat-label">${$t(_)}</span>
        <span class="recruit-stat-value">${i.stats[_]}</span>
      </div>
    `).join(""),r=i.campaign,a=Er(i),o=r?.difficulty==="ironman",l=r?.phase==="graduated"?`Graduated · ${i.honorsTitle??"Marine"}`:a?"Sandbox · Free Play":r?`Week ${r.week} · Day ${r.dayInWeek} · Ready ${r.readiness}%`:`Day ${i.bootDay??0}`,c=r?.hydration??100,d=r?.recycleTokens??0,u=!a&&r?.phase!=="graduated"?`<div class="recruit-hydration">
          <span class="recruit-hydration-label">Water</span>
          <div class="recruit-hydration-track"><div class="recruit-hydration-fill" style="width:${c}%"></div></div>
          <span class="recruit-hydration-value">${Math.round(c)}%</span>
        </div>`:"",h=o&&d>0?`<span class="recruit-token-badge" title="Recycle tokens">${d} recycle</span>`:"",m=a?'<span class="recruit-mode-badge recruit-mode-badge--sandbox">SANDBOX</span>':o?'<span class="recruit-mode-badge recruit-mode-badge--ironman">IRONMAN</span>':"";e.innerHTML=`
      <div class="recruit-hud-name">${i.name} ${m}</div>
      <div class="recruit-hud-meta">${l} · ${n.name} ${h}</div>
      ${u}
      <div class="recruit-hud-stats">${s}</div>
    `}return t(),{element:e,update(n){i=n,t()}}}const Oo=[{id:1,name:"Receiving",theme:"Phase 1 — Receiving, processing, pick-up",days:[{id:"w1d1",title:"Yellow Footprints",briefing:"Report to the Receiving Barracks. Step off the bus onto the yellow footprints and stand at attention until every command is executed.",locationName:"Receiving Barracks",activityId:"yellowFootprints",stats:["leadership","dexterity"]},{id:"w1d2",title:"Haircuts & Medical",briefing:"Report to Medical. Run the receiving pipeline — haircut, hygiene issue, medical screening, dental, and initial gear issue.",locationName:"Medical",activityId:"processing",stats:["endurance","intelligence"]},{id:"w1d3",title:"Black Friday",briefing:"Report to the Barracks. Today you are assigned to a company and platoon. Your Senior Drill Instructor takes charge.",locationName:"Barracks",activityId:"blackFriday",stats:["leadership"]}],sideQuests:[{id:"w1_straggler",title:"The Straggler",availableAfterDay:1,locationName:"Barracks",questId:"theStraggler"},{id:"w1_chow",title:"Chow Hall Protocol",availableAfterDay:1,locationName:"Chow Hall",questId:"chowProtocol"}]},{id:2,name:"Drill & PT",theme:"Phase 1 — Dressing drill, close order, baseline fitness",days:[{id:"w2d1",title:"Dressing Drill",briefing:"Report to the Barracks. The D.I. calls an article of clothing — don it before the countdown expires.",locationName:"Barracks",activityId:"dressDrill",stats:["dexterity"]},{id:"w2d2",title:"Close Order Drill",briefing:"Report to the Parade Deck for close-order drill. Learn the cadence and execute every command on the beat.",locationName:"Parade Deck",activityId:"drillCadence",stats:["leadership","dexterity"]},{id:"w2d3",title:"PFT Baseline",briefing:"Report to the 400m track. Alternate stride keys and keep your pace in the green band.",locationName:"400m track",activityId:"paceRunner",stats:["endurance"]},{id:"w2d4",title:"Letter Home",briefing:"Report to the Barracks. Write your first letter home — your family is waiting to hear from you.",locationName:"Barracks",activityId:"writeLetter",stats:["intelligence"]}],sideQuests:[{id:"w2_church",title:"Sunday Service",availableAfterDay:1,locationName:"Church Auditorium",questId:"sundayService"},{id:"w2_remedial_drill",title:"Remedial Drill",availableAfterDay:2,locationName:"Parade Deck",questId:"remedialDrill",maxStats:{dexterity:9}},{id:"w2_body_comp",title:"Body Composition Program",availableAfterDay:3,locationName:"400m track",questId:"bodyCompProgram",maxStats:{endurance:9}}]},{id:3,name:"Fundamentals",theme:"Phase 1 — Core values, MCMAP, firewatch discipline",days:[{id:"w3d1",title:"Core Values Class",briefing:"Report to the Lecture Hall for Core Values instruction. Know the traits — lives depend on Marines who live the code.",locationName:"Lecture Hall",activityId:"coreValues",stats:["intelligence","leadership"]},{id:"w3d2",title:"MCMAP Intro",briefing:"Report to the MCMAP Pit. Execute strike and block combos on command.",locationName:"MCMAP Pit",activityId:"mcmapSpar",stats:["strength","dexterity"]},{id:"w3d3",title:"Night Cleanup",briefing:"Report to the Barracks. Firewatch quarterdeck scrub — clean quietly without waking the platoon.",locationName:"Barracks",activityId:"nightCleanup",stats:["dexterity"]}],sideQuests:[{id:"w3_housemouse",title:"House Mouse",availableAfterDay:1,locationName:"Barracks",questId:"houseMouse",maxHeight:35},{id:"w3_remedial_knowledge",title:"Remedial Knowledge",availableAfterDay:1,locationName:"Lecture Hall",questId:"remedialKnowledge",maxStats:{intelligence:9}},{id:"w3_remedial_strength",title:"Remedial Strength",availableAfterDay:2,locationName:"Pull-up Bars",questId:"remedialStrength",maxStats:{strength:9}}]},{id:4,name:"Swim Week",theme:"Phase 2 — Water survival, gear shed, inspections",days:[{id:"w4d1",title:"Swim Qualification",briefing:"Report to the Pool. Match stroke rhythm and surface to breathe on cue.",locationName:"Pool",activityId:"swimStrokes",stats:["endurance"]},{id:"w4d2",title:"Gear Shed",briefing:"Report to the Pool. Shed gear in the correct order before your air runs out.",locationName:"Pool",activityId:"gearShed",stats:["dexterity","endurance"]},{id:"w4d3",title:"Footlocker Inspection",briefing:"Report to the Barracks. Spot every discrepancy in your footlocker before the D.I. finishes his walk.",locationName:"Barracks",activityId:"footlockerInspection",stats:["leadership","intelligence"]}],sideQuests:[{id:"w4_scared",title:"Scared of the Water",availableAfterDay:1,locationName:"Pool",questId:"scaredOfWater"}]},{id:5,name:"Team Week / Interior Guard",theme:"Phase 2 — Log drills, obstacle courses, squad leadership",days:[{id:"w5d1",title:"Log Drills",briefing:"Report to the Logs. Sync your lift when all four teammates align in the zone.",locationName:"Logs",activityId:"logTeamLift",stats:["strength","leadership"]},{id:"w5d2",title:"Fire Team Course",briefing:"Report to the Obstacle Course. Hit each obstacle key before the window closes.",locationName:"Obstacle Course",activityId:"obstacleRun",stats:["dexterity"]},{id:"w5d3",title:"High Obstacle Course",briefing:"Report to the Obstacle Course. Climb the high course — missed grips cost you height.",locationName:"Obstacle Course",activityId:"highObstacle",stats:["strength","dexterity"]},{id:"w5d4",title:"Reaction Course",briefing:"Report to the Obstacle Course. Sequence planks and ropes to cross the gap.",locationName:"Obstacle Course",activityId:"reactionCourse",stats:["intelligence","leadership"]}],sideQuests:[{id:"w5_blister",title:"Blister Check",availableAfterDay:1,locationName:"Barracks",questId:"blisterCheck"},{id:"w5_squadleader",title:"Squad Leader",availableAfterDay:1,locationName:"Barracks",questId:"squadLeader",minStats:{leadership:13}}]},{id:6,name:"Combat Week",theme:"Phase 2 — Pugil sticks, bayonet, rappelling",days:[{id:"w6d1",title:"Pugil Sticks",briefing:"Report to Thunderdown. Read your opponent and counter before impact.",locationName:"Thunderdown",activityId:"pugilDuel",stats:["strength","dexterity"]},{id:"w6d2",title:"Bayonet Course",briefing:"Report to Drill Practice. Thrust and slash in rhythm down the lane.",locationName:"Drill Practice",activityId:"bayonetCourse",stats:["strength"]},{id:"w6d3",title:"Rappelling",briefing:"Report to the Rappell Course. Control your brake hand on the descent — bounce cadence matters.",locationName:"Rappell Course",activityId:"rappelTower",stats:["dexterity"]}]},{id:7,name:"Grass Week",theme:"Phase 3 — Snapping in, weapons maintenance, knowledge",days:[{id:"w7d1",title:"Snapping In",briefing:"Report to the Rifle Range. Steady your aim, control your breath, and place shots inside the ring.",locationName:"Rifle Range",activityId:"steadyAim",stats:["dexterity","intelligence"]},{id:"w7d2",title:"Weapons Maintenance",briefing:"Report to the Armoury. Field-strip the rifle in the correct order before time runs out.",locationName:"Armoury",activityId:"fieldStrip",stats:["intelligence","dexterity"]},{id:"w7d3",title:"Knowledge Exam",briefing:"Report to the Lecture Hall. Complete the General Orders — every word matters.",locationName:"Lecture Hall",activityId:"knowledgeExam",stats:["intelligence"]}],sideQuests:[{id:"w7_carepkg",title:"Care Package",availableAfterDay:1,locationName:"MCX",questId:"carePackage"}]},{id:8,name:"Table 1",theme:"Phase 3 — Live-fire qualification, inspections, buddy aid",days:[{id:"w8d1",title:"Table 1 Qualification",briefing:"Report to the Rifle Range. Adjust for wind and qualify across three positions.",locationName:"Rifle Range",activityId:"rifleQual",stats:["dexterity","intelligence"]},{id:"w8d2",title:"Uniform Inspection",briefing:"Report to the Barracks. Spot every discrepancy before the D.I. finishes his walk.",locationName:"Barracks",activityId:"inspection",stats:["leadership","intelligence"]},{id:"w8d3",title:"Buddy Aid",briefing:"Report to Medical. Triage casualties and execute first aid in the correct order.",locationName:"Medical",activityId:"buddyAid",stats:["intelligence"]}],sideQuests:[{id:"w8_companymouse",title:"Company House Mouse",availableAfterDay:1,locationName:"Company Office",questId:"companyHouseMouse",maxHeight:35,requiresQuest:"w3_housemouse"}]},{id:9,name:"Table 2 / BWT",theme:"Phase 3 — Land nav, gas chamber, night ops, field hike",days:[{id:"w9d1",title:"Land Navigation",briefing:"Report to the trail loop. Follow bearings and paces to each checkpoint.",locationName:"The trail loop",activityId:"landNav",stats:["intelligence"]},{id:"w9d2",title:"Gas Chamber",briefing:"Report to the Gas Chamber. Don and clear your mask on command — controlled breathing under CS gas.",locationName:"Gas Chamber",activityId:"gasChamber",stats:["endurance"]},{id:"w9d3",title:"Night Infiltration",briefing:"Report to Drill Practice. Move quietly — freeze when the flare pops.",locationName:"Drill Practice",activityId:"nightMove",stats:["dexterity"]},{id:"w9d4",title:"Full Gear Hike",briefing:"Report to the trail loop. Manage pace and help struggling teammates.",locationName:"The trail loop",activityId:"humpPrep",stats:["endurance","leadership"]}],sideQuests:[{id:"w9_doubter",title:"The Doubter",availableAfterDay:1,locationName:"Barracks",questId:"theDoubter"}]},{id:10,name:"The Crucible",theme:"Phase 3 — 54-hour culminating event",days:[{id:"w10d1",title:"Crucible: Day Events",briefing:"Report to the Crucible Trail. Complete the day gauntlet on shared fatigue.",locationName:"Crucible Trail",activityId:"crucibleDay",stats:["endurance","strength"]},{id:"w10d2",title:"Crucible: Night Events",briefing:"Return to the Crucible Trail. Night movement and navigation under fatigue.",locationName:"Crucible Trail",activityId:"crucibleNight",stats:["endurance","intelligence"]},{id:"w10d3",title:"The Reaper",briefing:"Final hike on the Crucible Trail. Finish strong — the title is earned here.",locationName:"Crucible Trail",activityId:"reaperHike",stats:["endurance","leadership"]}]},{id:11,name:"Warrior Week",theme:"Phase 4 — Recovery, mail call, gear turn-in",days:[{id:"w11d1",title:"Warrior Breakfast",briefing:"Report to the Chow Hall. Grab what the line calls for — you earned this meal.",locationName:"Chow Hall",activityId:"warriorBreakfast",stats:["endurance"]},{id:"w11d2",title:"Mail Call",briefing:"Report to the Barracks. Packages and letters from home — after the Crucible, they hit different.",locationName:"Barracks",activityId:"mailCall",stats:["leadership"]},{id:"w11d3",title:"Gear Turn-In",briefing:"Report to Supply. Match issued gear counts and find every shortage.",locationName:"Supply",activityId:"gearTurnIn",stats:["intelligence"]}]},{id:12,name:"Final Drill",theme:"Phase 4 — Field day, parade prep, command inspection",days:[{id:"w12d1",title:"Field Day",briefing:"Report to the Barracks. Clean every station in order before the D.I. white-glove pass.",locationName:"Barracks",activityId:"fieldDay",stats:["endurance","leadership"]},{id:"w12d2",title:"Final Drill Eval",briefing:"Report to the Parade Deck. Execute the full command sequence from memory.",locationName:"Parade Deck",activityId:"finalDrill",stats:["leadership"]},{id:"w12d3",title:"Battalion Commander's Inspection",briefing:"Report to the Company Office. Answer rapid-fire questions with composure.",locationName:"Company Office",activityId:"billetBoard",stats:["leadership","intelligence"]}],sideQuests:[{id:"w12_squared",title:"Squared Away",availableAfterDay:1,locationName:"Barracks",questId:"squaredAway"},{id:"w12_guide",title:"The Guide",availableAfterDay:1,locationName:"Parade Deck",questId:"guide",minStats:{leadership:14},requiresQuest:"w5_squadleader"}]},{id:13,name:"Graduation",theme:"Phase 4 — Family Day, ceremony, MOS school orders",days:[{id:"w13d1",title:"Family Day",briefing:"Report to Family Day. Walk your family through the depot — show them who you became.",locationName:"Family Day",activityId:"familyDay",stats:["leadership"]},{id:"w13d2",title:"Graduation Parade",briefing:"Report to the Parade Deck. Final drill performance and the Eagle, Globe, and Anchor.",locationName:"Parade Deck",activityId:"graduationParade",stats:["leadership"]}]}];function Bo(i){return Oo.find(e=>e.id===i)??null}function Oy(i,e){const t=Bo(i);return t?t.days[e-1]??null:null}function Cu(i,e){if(!i?.tiles)return null;for(const t of Object.values(i.tiles)){const n=t.find(s=>s.name===e);if(n)return n}return null}function By(i,e,t){const n=t?.campaign??t,s=Bo(i);return s?.sideQuests?s.sideQuests.filter(r=>{if(n.sideQuests?.[r.id]==="done"||e<r.availableAfterDay||r.maxHeight!=null&&(t?.appearance?.height??50)>r.maxHeight)return!1;if(r.minStats){const a=t?.stats??{};for(const[o,l]of Object.entries(r.minStats))if((a[o]??10)<l)return!1}if(r.maxStats){const a=t?.stats??{};for(const[o,l]of Object.entries(r.maxStats))if((a[o]??10)>l)return!1}return!(r.requiresQuest&&n.sideQuests?.[r.requiresQuest]!=="done")}):[]}function lc(i){return i>Oo.length}function Hy(i,e,t){return new Promise(n=>{const s=document.createElement("div");s.className="menu-overlay",s.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Week ${t.id}: ${t.name}</h2>
        <p class="menu-subtitle">Training Day ${i.campaign.dayInWeek}</p>
        <div class="schedule-body">
          <p class="schedule-assignment">${e.title}</p>
          <p class="recruiter-copy">${e.briefing}</p>
          <div class="schedule-location">
            <span class="schedule-label">Report to</span>
            <span class="schedule-value">${e.locationName}</span>
          </div>
          <p class="recruiter-copy recruiter-copy--small">Walk to the location on the MCRD map. A prompt will appear when you arrive.</p>
        </div>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="schedule-begin">Begin Patrol</button>
        </div>
      </div>
    `,s.querySelector("#schedule-begin").addEventListener("click",()=>{s.remove(),n()},{once:!0}),document.body.appendChild(s),s.querySelector("#schedule-begin").focus()})}function zy(i){return new Promise(e=>{const t=document.createElement("div");t.className="menu-overlay",t.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Week ${i.id} Complete</h2>
        <p class="menu-subtitle">${i.name}</p>
        <p class="recruiter-copy">${i.theme}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="week-continue">Continue</button>
        </div>
      </div>
    `,t.querySelector("#week-continue").addEventListener("click",()=>{t.remove(),e()},{once:!0}),document.body.appendChild(t)})}function Wy(i){return new Promise(e=>{const t=document.createElement("div");t.className="menu-overlay",t.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Week ${i.id}: ${i.name}</h2>
        <p class="menu-subtitle">Coming in a future update</p>
        <p class="recruiter-copy">${i.theme}</p>
        <p class="recruiter-copy recruiter-copy--small">Week 1 vertical slice is complete. More training weeks are on the way. Free roam the depot until then.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="coming-soon-ok">Roger</button>
        </div>
      </div>
    `,t.querySelector("#coming-soon-ok").addEventListener("click",()=>{t.remove(),e()},{once:!0}),document.body.appendChild(t)})}function Gy(i){return new Promise(e=>{const t=i.honorsTitle??"United States Marine",n=i.campaign?.readiness??0,s=Object.keys(i.campaign?.completed??{}).length,r=document.createElement("div");r.className="menu-overlay",r.innerHTML=`
      <div class="menu-panel schedule-panel graduation-panel">
        <h2 class="menu-title">Graduation</h2>
        <p class="menu-subtitle">MCRD San Diego</p>
        <p class="schedule-assignment">${i.name}</p>
        <p class="recruiter-copy">After 13 weeks of training, you have earned the title <strong>${t}</strong>.</p>
        <div class="graduation-stats">
          <div class="recruiter-result-row"><span>Readiness</span><span>${n}%</span></div>
          <div class="recruiter-result-row"><span>Training days</span><span>${s}</span></div>
          <div class="recruiter-result-row"><span>Status</span><span>Graduated</span></div>
        </div>
        <p class="recruiter-copy recruiter-copy--small">Semper Fidelis. Free roam the depot or start a new recruit.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="grad-ok">Dismiss</button>
        </div>
      </div>
    `,r.querySelector("#grad-ok").addEventListener("click",()=>{r.remove(),e()},{once:!0}),document.body.appendChild(r)})}function Vy(){return new Promise(i=>{const e=document.createElement("div");e.className="menu-overlay",e.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Heat Exhaustion</h2>
        <p class="menu-subtitle">Story mode</p>
        <p class="recruiter-copy">You collapsed from dehydration. Corpsman revived you — readiness -5, hydration refilled to 50%.</p>
        <p class="recruiter-copy recruiter-copy--small">Find canteens on the map before your next patrol.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="heat-ok">Roger</button>
        </div>
      </div>
    `,e.querySelector("#heat-ok").addEventListener("click",()=>{e.remove(),i()},{once:!0}),document.body.appendChild(e)})}function qy(i){const e={performance:"Performance Drop",heat:"Heat Casualty"};return new Promise(t=>{const n=document.createElement("div");n.className="menu-overlay",n.innerHTML=`
      <div class="menu-panel schedule-panel runend-panel">
        <h2 class="menu-title">Recycled</h2>
        <p class="menu-subtitle">${e[i]??"Failure"} — last chance</p>
        <p class="recruiter-copy">Your recycle paperwork was approved. One token consumed. Do not fail again.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="recycled-ok">Continue Training</button>
        </div>
      </div>
    `,n.querySelector("#recycled-ok").addEventListener("click",()=>{n.remove(),t()},{once:!0}),document.body.appendChild(n)})}function Xy(i,e,t){const n={performance:"Performance Drop",heat:"Heat Casualty"},s=i.campaign?.week??1,r=i.campaign?.readiness??0,a=Object.keys(i.campaign?.completed??{}).length;return new Promise(o=>{const l=document.createElement("div");l.className="menu-overlay",l.innerHTML=`
      <div class="menu-panel schedule-panel runend-panel">
        <h2 class="menu-title">Run Ended</h2>
        <p class="menu-subtitle">${n[e]??"Dropped"}</p>
        <p class="schedule-assignment">${i.name}</p>
        <p class="recruiter-copy">Ironman run over. Grit earned carries to The Locker for your next recruit.</p>
        <div class="graduation-stats">
          <div class="recruiter-result-row"><span>Weeks reached</span><span>${s}</span></div>
          <div class="recruiter-result-row"><span>Days completed</span><span>${a}</span></div>
          <div class="recruiter-result-row"><span>Readiness</span><span>${r}%</span></div>
          <div class="recruiter-result-row"><span>Grit earned</span><span class="stat-delta stat-delta--up">+${t}</span></div>
        </div>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="runend-ok">Return to Slots</button>
        </div>
      </div>
    `,l.querySelector("#runend-ok").addEventListener("click",()=>{l.remove(),o()},{once:!0}),document.body.appendChild(l)})}class $y{constructor(e){this.container=e,e.innerHTML=`
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
    `,this.commandEl=e.querySelector("#drill-command"),this.beatEl=e.querySelector("#drill-beat"),this.hitsEl=e.querySelector("#drill-hits"),this.totalEl=e.querySelector("#drill-total"),this.flashEl=e.querySelector("#drill-flash")}setCommand(e){this.commandEl.textContent=e}setHits(e,t){this.hitsEl.textContent=String(e),this.totalEl.textContent=String(t)}pulseBeat(){this.beatEl.classList.add("drill-beat--pulse"),setTimeout(()=>this.beatEl.classList.remove("drill-beat--pulse"),120)}flash(e){this.flashEl.textContent=e==="hit"?"HIT":"MISS",this.flashEl.className=`drill-flash drill-flash--${e} drill-flash--show`,setTimeout(()=>{this.flashEl.className="drill-flash"},400)}dispose(){this.container.innerHTML=""}}const mn=[{label:"LEFT FACE",key:"KeyL"},{label:"RIGHT FACE",key:"KeyR"},{label:"FORWARD MARCH",key:"KeyM"},{label:"HALT",key:"KeyH"},{label:"LEFT FACE",key:"KeyL"},{label:"HALT",key:"KeyH"},{label:"RIGHT FACE",key:"KeyR"},{label:"FORWARD MARCH",key:"KeyM"},{label:"HALT",key:"KeyH"},{label:"LEFT FACE",key:"KeyL"},{label:"RIGHT FACE",key:"KeyR"},{label:"HALT",key:"KeyH"}];function vr(i){return(Math.max(St,Math.min(Qt,i))-St)/(Qt-St)}function Ky(i,e){const t=(vr(i)+vr(e))/2;return Math.round(1400-t*400)}function Yy(i,e){const t=(vr(i)+vr(e))/2;return Math.round(500+t*350)}function jy(i,e){return new Promise(t=>{const n=new $y(i),s=e.stats.dexterity,r=e.stats.leadership,a=Ky(s,r),o=Yy(s,r);let l=0,c=0,d=!1,u=!0,h=null;n.setHits(0,mn.length),n.setCommand("READY...");function m(){if(!u)return;u=!1,clearTimeout(h),window.removeEventListener("keydown",v),n.dispose();const p=mn.length>0?c/mn.length:0;t(De(p,["leadership","dexterity"],{hits:c,total:mn.length}))}function _(){if(l>=mn.length){m();return}const p=mn[l];n.pulseBeat(),n.setCommand(p.label),d=!0,performance.now(),h=setTimeout(()=>{d&&(n.flash("miss"),l++,n.setHits(c,mn.length),d=!1,setTimeout(_,a*.4))},o)}function v(p){if(!u||!d)return;["KeyL","KeyR","KeyM","KeyH"].includes(p.code)&&p.preventDefault();const f=mn[l];p.code===f.key?(clearTimeout(h),c++,n.flash("hit"),l++,n.setHits(c,mn.length),d=!1,setTimeout(_,a*.35)):["KeyL","KeyR","KeyM","KeyH"].includes(p.code)&&(clearTimeout(h),n.flash("miss"),l++,n.setHits(c,mn.length),d=!1,setTimeout(_,a*.35))}window.addEventListener("keydown",v),setTimeout(_,a)})}class Zy{constructor(e){this.container=e,e.innerHTML=`
      <div class="corevalues-scene">
        <div class="corevalues-trait" id="cv-trait"></div>
        <div class="corevalues-choices" id="cv-choices"></div>
        <div class="corevalues-progress" id="cv-progress"></div>
      </div>
    `,this.traitEl=e.querySelector("#cv-trait"),this.choicesEl=e.querySelector("#cv-choices"),this.progressEl=e.querySelector("#cv-progress")}showRound(e,t,n,s){this.traitEl.textContent=e,this.progressEl.textContent=`${n} / ${s}`,this.choicesEl.innerHTML=t.map((r,a)=>`
      <button type="button" class="btn btn-secondary cv-choice" data-choice="${a}">${r}</button>
    `).join("")}dispose(){this.container.innerHTML=""}}const ps=[{trait:"Justice",definition:"Giving reward and punishment according to the merits of the case in question.",distractors:["Following orders without question.","Winning at all costs in every situation.","Keeping your uniform squared away at all times."]},{trait:"Judgment",definition:"The ability to weigh facts and possible solutions on which to base sound decisions.",distractors:["Never admitting when you are wrong.","Making the fastest decision every time.","Deferring every decision to a senior Marine."]},{trait:"Dependability",definition:"The willing and voluntary support of the policies and orders of the chain of command.",distractors:["Doing only what is explicitly ordered.","Never volunteering for extra duty.","Keeping personal plans above unit commitments."]},{trait:"Integrity",definition:"Uprightness of character and soundness of moral principles; truthfulness and honesty.",distractors:["Telling people what they want to hear.","Protecting your friends even when they are wrong.","Avoiding paperwork whenever possible."]},{trait:"Decisiveness",definition:"Ability to make decisions promptly and to announce them in a clear, forceful manner.",distractors:["Waiting until every detail is perfect.","Letting the squad vote on tactical calls.","Changing your mind after every new report."]},{trait:"Tact",definition:"The ability to deal with others without creating offense.",distractors:["Saying exactly what you think at all times.","Avoiding difficult conversations entirely.","Using sarcasm to keep junior Marines in line."]}];function Jy(i){const e=[...i];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Qy(i,e){return new Promise(t=>{const n=new Zy(i);let s=0,r=0;function a(){if(s>=ps.length){n.dispose();const d=r/ps.length;t(De(d,["intelligence","leadership"],{correct:r,total:ps.length}));return}const o=ps[s],l=Jy([o.definition,...o.distractors]),c=l.indexOf(o.definition);n.showRound(o.trait,l,s+1,ps.length),n.choicesEl.addEventListener("click",function d(u){const h=u.target.closest("[data-choice]");h&&(n.choicesEl.removeEventListener("click",d),Number(h.dataset.choice)===c&&r++,s++,a())},{once:!1})}a()})}function ex(i){return i>=10?1:i>=8?.9:i>=6?.75:i>=4?.6:i>=2?.4:i>0?.25:0}function tx(i,e){const t=new Tu(i,e);return wu(t,e).then(n=>{t.dispose();const s=ex(n.reps);return De(s,["strength","endurance"],{reps:n.reps,perfectReps:n.perfectReps,energyLeft:n.energyLeft})})}function nx(i){return(Math.max(St,Math.min(Qt,i))-St)/(Qt-St)}function Pu(i,e){const t=i?.stats??{},n=e.map(s=>nx(t[s]??10));return n.reduce((s,r)=>s+r,0)/n.length}function is(i,e,t=500,n=900){const s=Pu(i,e);return Math.round(t+s*(n-t))}function wn({onTick:i,durationMs:e,onFinish:t}){let n=!0,s=0,r=0;const a=()=>{n&&(n=!1,t?.())},o=l=>{if(!n)return;s||(s=l,r=l);const c=l-s,d=l-r;if(r=l,e!=null&&c>=e){a();return}i(l,c,d),n&&requestAnimationFrame(o)};return requestAnimationFrame(o),{stop:a,isRunning:()=>n}}function hn(i,e){const t=n=>{i.includes(n.code)&&(n.preventDefault(),e(n.code,n))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)}function wt(i,{title:e="",hint:t=""}={}){return i.innerHTML=`
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
  `,{main:i.querySelector("#mg-main"),progress:i.querySelector("#mg-progress"),flash:i.querySelector("#mg-flash"),meter:i.querySelector("#mg-meter"),hint:i.querySelector("#mg-hint"),title:i.querySelector("#mg-title"),dispose:()=>{i.innerHTML=""}}}function Mt(i,e,t){i.progress&&(i.progress.textContent=`${e} / ${t}`)}function Qn(i,e){i.meter&&(i.meter.style.width=`${Math.max(0,Math.min(1,e))*100}%`)}function lt(i,e){i.flash&&(i.flash.textContent=e==="hit"?"HIT":"MISS",i.flash.className=`mg-flash mg-flash--${e} mg-flash--show`,setTimeout(()=>{i.flash.className="mg-flash"},400))}function en(i,e,{prompts:t,statKeys:n,title:s,hint:r}){return new Promise(a=>{const o=wt(i,{title:s,hint:r});let l=0,c=0;const d=is(e,n),u=()=>{if(o._unbindOne?.(),l>=t.length){h(),o.dispose(),a({hits:c,total:t.length,score:c/t.length});return}const m=t[l];o.main.innerHTML=`<div class="mg-prompt">${m.label}</div><div class="mg-key-hint">Press <kbd>${m.keyLabel}</kbd></div>`,Mt(o,l,t.length);let _=!1;const v=setTimeout(()=>{_||(lt(o,"miss"),l++,setTimeout(u,300))},d),p=E=>{_||(E===m.code?(_=!0,clearTimeout(v),c++,lt(o,"hit"),l++,setTimeout(u,250)):t.some(A=>A.code===E)&&(_=!0,clearTimeout(v),lt(o,"miss"),l++,setTimeout(u,250)))},f=hn(t.map(E=>E.code),p);o._unbindOne=f};let h=()=>{};u(),h=()=>o._unbindOne?.()})}function Ls(i,{items:e,correctOrder:t,timeMs:n,title:s,hint:r}){return new Promise(a=>{const o=wt(i,{title:s,hint:r});let l=[],c=n;const d=[...e].sort(()=>Math.random()-.5),u=()=>{o.main.innerHTML=d.map((v,p)=>`<button type="button" class="btn btn-secondary mg-seq-btn" data-i="${p}">${v}</button>`).join(""),o.hint.textContent=`Select in order (${l.length}/${t.length}) · ${Math.ceil(c/1e3)}s`},h=wn({durationMs:n,onTick:(v,p)=>{c=n-p,o.hint.textContent=`Select in order (${l.length}/${t.length}) · ${Math.ceil(c/1e3)}s`},onFinish:m});function m(){h.stop(),o.main.removeEventListener("click",_);const v=l.filter((p,f)=>p===t[f]).length;o.dispose(),a({score:v/t.length,correct:v,total:t.length})}function _(v){const p=v.target.closest("[data-i]");if(!p)return;const f=d[Number(p.dataset.i)];l.push(f),p.disabled=!0,Mt(o,l.length,t.length),l.length>=t.length&&m()}u(),o.main.addEventListener("click",_),Mt(o,0,t.length)})}function bi(i,{rounds:e,title:t,hint:n}){return new Promise(s=>{const r=wt(i,{title:t,hint:n});let a=0,o=0;function l(){if(a>=e.length){r.dispose(),s({score:o/e.length,correct:o,total:e.length});return}const c=e[a],d=[...c.choices].sort(()=>Math.random()-.5);r.main.innerHTML=`
        <div class="mg-prompt">${c.prompt}</div>
        <div class="mg-choices">${d.map((u,h)=>`<button type="button" class="btn btn-secondary mg-choice" data-i="${d.indexOf(u)}">${u}</button>`).join("")}</div>`,Mt(r,a+1,e.length),r.main.onclick=u=>{const h=u.target.closest(".mg-choice");h&&(r.main.onclick=null,Number(h.dataset.i)===c.answer&&o++,a++,l())}}l()})}async function Du(i,e){return new Promise(t=>{const n=wt(i,{title:"Steady Aim",hint:"Hold <kbd>Space</kbd> to steady · <kbd>F</kbd> to fire when aligned"});let s=0,r=0;const a=6;let o=50,l=1.5,c=1,d=!1;n.main.innerHTML='<div class="mg-aim-ring"><div class="mg-reticle" id="mg-reticle"></div></div>';const u=n.main.querySelector("#mg-reticle"),h=wn({durationMs:3e4,onTick:(v,p,f)=>{d?(c-=.003*(f/16),c<=0&&(d=!1,c=0)):(o+=l*(f/16),(o>85||o<15)&&(l*=-1)),u.style.left=`${o}%`,Qn(n,c)},onFinish:_}),m=hn(["Space","KeyF"],v=>{v==="Space"&&c>.1&&(d=!0),v==="KeyF"&&s<a&&(s++,Math.abs(o-50)<12?(r++,lt(n,"hit")):lt(n,"miss"),Mt(n,s,a),d=!1,s>=a&&_())});function _(){h.stop(),m(),n.dispose(),t(De(r/a,["dexterity","intelligence"],{hits:r,total:a}))}Mt(n,0,a)})}async function ix(i,e){const t=Array.from({length:14},(s,r)=>({label:r%2===0?"LEFT STRIDE":"RIGHT STRIDE",code:r%2===0?"KeyJ":"KeyK",keyLabel:r%2===0?"J":"K"})),n=await en(i,e,{prompts:t,statKeys:["endurance"],title:"PFT Pace Run",hint:"Alternate J and K to stay in stride"});return De(n.score,["endurance"],n)}const cc=["Clear rifle","Remove bolt","Remove charging handle","Remove buffer","Separate upper/lower","Remove trigger group"];async function sx(i,e){const t=await Ls(i,{items:cc,correctOrder:cc,timeMs:2e4+is(e,["intelligence","dexterity"],0,8e3),title:"Field Strip",hint:"Click parts in correct disassembly order"});return De(t.score,["intelligence","dexterity"],t)}async function rx(i,e){const n=await en(i,e,{prompts:[{label:"FREESTYLE",code:"KeyF",keyLabel:"F"},{label:"BREATHE",code:"Space",keyLabel:"Space"},{label:"FREESTYLE",code:"KeyF",keyLabel:"F"},{label:"BREATHE",code:"Space",keyLabel:"Space"},{label:"FREESTYLE",code:"KeyF",keyLabel:"F"},{label:"BREATHE",code:"Space",keyLabel:"Space"},{label:"FREESTYLE",code:"KeyF",keyLabel:"F"},{label:"TURN",code:"KeyT",keyLabel:"T"}],statKeys:["endurance"],title:"Swim Qual",hint:"F to stroke · Space to breathe at the wall"});return De(n.score,["endurance"],n)}async function ax(i,e){const n=await en(i,e,{prompts:[{label:"DROP HELMET",code:"KeyH",keyLabel:"H"},{label:"DROP FLAK",code:"KeyF",keyLabel:"F"},{label:"DROP BELT",code:"KeyB",keyLabel:"B"},{label:"DROP BOOTS",code:"KeyN",keyLabel:"N"},{label:"DROP TROUSERS",code:"KeyT",keyLabel:"T"},{label:"SURFACE",code:"Space",keyLabel:"Space"}],statKeys:["dexterity","endurance"],title:"Gear Shed",hint:"Shed gear in order before air runs out"});return De(n.score,["dexterity","endurance"],n)}async function ox(i,e){return new Promise(t=>{const n=wt(i,{title:"Log Team Lift",hint:"Press <kbd>Space</kbd> when all markers align in the green zone"});let s=0,r=0;const a=8,o=[0,0,0,0],l=15+Pu(e,["leadership"])*10;n.main.innerHTML=`<div class="mg-log-lane">${o.map((u,h)=>`<div class="mg-log-marker" id="m${h}"></div>`).join("")}</div><div class="mg-log-zone"></div>`;const c=wn({onTick:()=>{o.forEach((u,h)=>{o[h]=(o[h]+2+h*.3)%100;const m=n.main.querySelector(`#m${h}`);m&&(m.style.left=`${o[h]}%`)})}}),d=hn(["Space"],()=>{const u=o.every(h=>h>40&&h<40+l);s++,u?(r++,lt(n,"hit")):lt(n,"miss"),Mt(n,s,a),s>=a&&(c.stop(),d(),n.dispose(),t(De(r/a,["strength","leadership"],{hits:r,total:a})))});Mt(n,0,a)})}async function lx(i,e){const n=await en(i,e,{prompts:[{label:"VAULT",code:"KeyV",keyLabel:"V"},{label:"CRAWL",code:"KeyC",keyLabel:"C"},{label:"CLIMB",code:"KeyL",keyLabel:"L"},{label:"SWING",code:"KeyS",keyLabel:"S"},{label:"VAULT",code:"KeyV",keyLabel:"V"},{label:"CRAWL",code:"KeyC",keyLabel:"C"},{label:"CLIMB",code:"KeyL",keyLabel:"L"},{label:"FINISH",code:"Enter",keyLabel:"Enter"}],statKeys:["dexterity"],title:"Fire Team Course",hint:"V vault · C crawl · L climb · S swing"});return De(n.score,["dexterity"],n)}const cx=[{bearing:"045°",paces:200,answer:0,choices:["NE ridge","SW draw","East trail","North creek"]},{bearing:"270°",paces:150,answer:2,choices:["West fence","South road","West boulder","East hill"]},{bearing:"180°",paces:100,answer:1,choices:["North CP","South ravine","East pond","West tower"]},{bearing:"315°",paces:250,answer:3,choices:["SE field","NW path","East bridge","NW checkpoint"]},{bearing:"090°",paces:175,answer:0,choices:["East trail marker","West bunker","South pit","North gate"]}];async function dx(i,e){const t=cx.map(s=>({prompt:`Bearing ${s.bearing} · ${s.paces} paces — which checkpoint?`,choices:s.choices,answer:s.answer})),n=await bi(i,{rounds:t,title:"Land Navigation",hint:"Pick the correct checkpoint for each leg"});return De(n.score,["intelligence"],n)}const dc=["Assess scene","Check breathing","Stop bleeding","Treat shock","Evacuate"];async function ux(i,e){let t=0;for(let n=0;n<3;n++){const s=await Ls(i,{items:dc,correctOrder:dc,timeMs:15e3,title:`Casualty ${n+1}`,hint:"ABC sequence — assess, breathing, bleeding, shock, evac"});t+=s.score}return De(t/3,["intelligence"],{casualties:3})}async function hx(i,e){const n=await en(i,e,{prompts:[{label:"JAB",code:"KeyJ",keyLabel:"J"},{label:"BLOCK",code:"KeyB",keyLabel:"B"},{label:"CROSS",code:"KeyC",keyLabel:"C"},{label:"BLOCK",code:"KeyB",keyLabel:"B"},{label:"HOOK",code:"KeyH",keyLabel:"H"},{label:"BLOCK",code:"KeyB",keyLabel:"B"},{label:"UPPERCUT",code:"KeyU",keyLabel:"U"},{label:"BLOCK",code:"KeyB",keyLabel:"B"}],statKeys:["strength","dexterity"],title:"MCMAP Sparring",hint:"Execute strikes and blocks on command"});return De(n.score,["strength","dexterity"],n)}async function fx(i,e){return new Promise(t=>{const n=wt(i,{title:"Pugil Duel",hint:"H high block · L low block · D dodge feint"}),s=[{tell:"HIGH STRIKE",counter:"KeyH",label:"H"},{tell:"LOW STRIKE",counter:"KeyL",label:"L"},{tell:"FEINT",counter:"KeyD",label:"D"},{tell:"HIGH STRIKE",counter:"KeyH",label:"H"},{tell:"LOW STRIKE",counter:"KeyL",label:"L"}];let r=0,a=0;const o=is(e,["strength","dexterity"]);function l(){if(r>=s.length){c(),n.dispose(),t(De(a/s.length,["strength","dexterity"],{wins:a,total:s.length}));return}const d=s[r];n.main.innerHTML=`<div class="mg-prompt">Opponent: ${d.tell}</div><div class="mg-key-hint">Counter: <kbd>${d.label}</kbd></div>`,Mt(n,r+1,s.length);let u=!1;const h=setTimeout(()=>{u||(lt(n,"miss"),r++,setTimeout(l,300))},o),m=_=>{u||(u=!0,clearTimeout(h),_===d.counter?(a++,lt(n,"hit")):lt(n,"miss"),r++,setTimeout(l,300))};n._handler=m}const c=hn(["KeyH","KeyL","KeyD"],d=>n._handler?.(d));l()})}async function px(i,e){const n=await en(i,e,{prompts:[{label:"THRUST",code:"KeyT",keyLabel:"T"},{label:"SLASH",code:"KeyS",keyLabel:"S"},{label:"THRUST",code:"KeyT",keyLabel:"T"},{label:"SLASH",code:"KeyS",keyLabel:"S"},{label:"THRUST",code:"KeyT",keyLabel:"T"},{label:"SLASH",code:"KeyS",keyLabel:"S"},{label:"THRUST",code:"KeyT",keyLabel:"T"},{label:"FINISH",code:"Enter",keyLabel:"Enter"}],statKeys:["strength"],title:"Bayonet Course",hint:"T thrust · S slash — keep the rhythm"});return De(n.score,["strength"],n)}const mx=[{prompt:'General Order 1: "To take charge of this post..." — finish:',choices:["...and all government property in view.","...and guard the chow hall.","...and report to the D.I. only.","...and sleep when able."],answer:0},{prompt:'General Order 2: "To walk my post in a military manner..." — finish:',choices:["...keeping always on the alert.","...only when the D.I. is watching.","...at a relaxed pace.","...with headphones permitted."],answer:0},{prompt:'General Order 3: "To report all violations..." — finish:',choices:["...of orders I am instructed to enforce.","...to my roommate only.","...at the end of the week.","...if I feel like it."],answer:0},{prompt:'General Order 4: "To repeat all calls..." — finish:',choices:["...from posts more distant from the guardhouse than my own.","...only during daylight.","...when I have spare time.","...to the recruit on my left."],answer:0},{prompt:'General Order 5: "To quit my post only when properly..." — finish:',choices:["...relieved.","...tired.","...the D.I. says so.","...chow is served."],answer:0}];async function gx(i,e){const t=await bi(i,{rounds:mx,title:"General Orders Exam",hint:"Complete each order with the correct phrase"});return De(t.score,["intelligence"],t)}async function _x(i,e){return new Promise(t=>{const n=wt(i,{title:"Uniform Inspection",hint:"Click every discrepancy before time runs out"}),s=[{id:"gig",label:"Gig line off",x:45,y:55},{id:"boots",label:"Boots unbloused",x:30,y:80},{id:"cover",label:"Cover tilted",x:50,y:15},{id:"ribbon",label:"Ribbon out of order",x:60,y:45}],r=new Set;n.main.innerHTML=`<div class="mg-inspect-board">${s.map(l=>`<button type="button" class="mg-inspect-spot" data-id="${l.id}" style="left:${l.x}%;top:${l.y}%"></button>`).join("")}</div>`;const a=wn({durationMs:12e3,onFinish:()=>{n.main.removeEventListener("click",o),n.dispose(),t(De(r.size/s.length,["leadership","intelligence"],{found:r.size,total:s.length}))}});function o(l){const c=l.target.closest("[data-id]");c&&(r.add(c.dataset.id),c.classList.add("mg-inspect-found"),Mt(n,r.size,s.length),r.size>=s.length&&a.stop())}n.main.addEventListener("click",o),Mt(n,0,s.length)})}async function vx(i,e){return new Promise(t=>{const n=wt(i,{title:"Table 1 Qualification",hint:"Arrow keys adjust wind · F to fire at each position"}),s=["STANDING","KNEELING","PRONE"];let r=0,a=0,o=0;function l(){n.main.innerHTML=`
        <div class="mg-prompt">${s[r]}</div>
        <div class="mg-wind">Wind: ${o>0?"+":""}${o} · ← → adjust · F fire</div>
        <div class="mg-aim-ring"><div class="mg-reticle" style="left:${50+o*5}%"></div></div>`,Mt(n,r+1,s.length)}const c=hn(["ArrowLeft","ArrowRight","KeyF"],d=>{if(d==="ArrowLeft"&&(o=Math.max(-3,o-1)),d==="ArrowRight"&&(o=Math.min(3,o+1)),d==="KeyF"){const u=[1,-1,0][r],h=Math.abs(o-u);h===0?(a+=3,lt(n,"hit")):h===1?(a+=2,lt(n,"hit")):lt(n,"miss"),r++,o=0,r>=s.length?(c(),n.dispose(),t(De(a/9,["dexterity","intelligence"],{points:a,max:9}))):l()}else l()});l()})}async function yx(i,e){return new Promise(t=>{const n=wt(i,{title:"Night Infiltration",hint:"W to advance quietly · freeze when flare pops (do nothing)"});let s=0,r=!1,a=!1;n.main.innerHTML='<div class="mg-night-bar"><div class="mg-night-fill" id="mg-night-fill"></div></div><div class="mg-flare" id="mg-flare"></div>';const o=n.main.querySelector("#mg-night-fill"),l=n.main.querySelector("#mg-flare"),c=wn({onTick:()=>{a&&!r&&(s+=.3,o.style.width=`${Math.min(100,s)}%`),s>=100&&m()}});let d=setInterval(()=>{r=!0,l.classList.add("mg-flare--on"),setTimeout(()=>{a&&(s=Math.max(0,s-15),lt(n,"miss")),r=!1,l.classList.remove("mg-flare--on")},1500)},4e3);const u=hn(["KeyW"],()=>{r||(a=!0)}),h=_=>{_.code==="KeyW"&&(a=!1)};window.addEventListener("keyup",h);function m(){clearInterval(d),c.stop(),u(),window.removeEventListener("keyup",h),n.dispose(),t(De(s/100,["dexterity"],{progress:s}))}})}async function xx(i,e){return new Promise(t=>{const n=wt(i,{title:"Full Gear Hike",hint:"W to march · Space to help a falling teammate (costs stamina)"});let s=0,r=1,a=!1,o=0;n.main.innerHTML='<div class="mg-hike-bar"><div class="mg-hike-fill" id="mg-hike-fill"></div></div>';const l=n.main.querySelector("#mg-hike-fill"),c=wn({onTick:(m,_,v)=>{a&&(s+=.15*(v/16),r-=.001*(v/16),l.style.width=`${Math.min(100,s)}%`,Qn(n,r)),r<=0&&(r=0,a=!1),s>=100&&h(.85)}});let d=setInterval(()=>{o<3&&Math.random()>.5&&(o++,n.hint.textContent="Buddy falling back! Press Space to help (+LDR, -stamina)",n._helpNeeded=!0)},5e3);const u=hn(["KeyW","Space"],m=>{m==="KeyW"&&r>0&&(a=!0),m==="Space"&&n._helpNeeded&&(n._helpNeeded=!1,r-=.15,n.hint.textContent="Good leadership. Keep marching.",n._ldrBonus=(n._ldrBonus??0)+1)});window.addEventListener("keyup",m=>{m.code==="KeyW"&&(a=!1)});function h(m){clearInterval(d),c.stop(),u();const _=(n._ldrBonus??0)*.05;n.dispose(),t(De(Math.min(1,m+_),["endurance","leadership"],{progress:s,ldrHelps:n._ldrBonus??0}))}Qn(n,1)})}async function bx(i,e){const t=["Plank A","Rope swing","Barrel roll","Plank B","Team pull"],n=await Ls(i,{items:t,correctOrder:t,timeMs:18e3,title:"Reaction Course",hint:"Sequence the crossing in the fewest correct moves"});return De(n.score,["intelligence","leadership"],n)}async function Sx(i,e){const t=await Du(i);return De(t.score*.9,["endurance","strength"],{station:"day",...t.details})}async function Mx(i,e){const n=await en(i,e,{prompts:[{label:"FREEZE",code:"Space",keyLabel:"Space"},{label:"MOVE",code:"KeyW",keyLabel:"W"},{label:"NAV LEFT",code:"KeyA",keyLabel:"A"},{label:"NAV RIGHT",code:"KeyD",keyLabel:"D"},{label:"FREEZE",code:"Space",keyLabel:"Space"},{label:"MOVE",code:"KeyW",keyLabel:"W"}],statKeys:["endurance","intelligence"],title:"Crucible Night",hint:"Night movement — freeze on command"});return De(n.score,["endurance","intelligence"],n)}async function Ex(i,e){return new Promise(t=>{const n=wt(i,{title:"The Reaper",hint:"W to hike — stamina barely recovers. Finish to pass."});let s=0,r=.6,a=!1;n.main.innerHTML='<div class="mg-hike-bar"><div class="mg-hike-fill" id="mg-reaper-fill"></div></div>';const o=n.main.querySelector("#mg-reaper-fill"),l=wn({onTick:(u,h,m)=>{if(a&&r>0?(s+=.12*(m/16),r-=.002*(m/16)):r=Math.min(.6,r+3e-4*(m/16)),o.style.width=`${Math.min(100,s)}%`,Qn(n,r),s>=100){const _=r>.2?.95:.65;d(_)}}}),c=hn(["KeyW"],()=>{r>.05&&(a=!0)});window.addEventListener("keyup",u=>{u.code==="KeyW"&&(a=!1)});function d(u){l.stop(),c(),n.dispose(),t(De(u,["endurance","leadership"],{progress:s}))}Qn(n,r)})}async function wx(i,e){const n=["Eggs","Bacon","Pancakes","Sausage","Toast","Fruit","Juice","Coffee","Eggs","Bacon"].map(r=>({label:`Grab ${r}`,code:"Space",keyLabel:"Space"})),s=await en(i,e,{prompts:n,statKeys:["endurance"],title:"Warrior Breakfast",hint:"Press Space when the called item appears — generous windows"});return De(Math.max(.7,s.score),["endurance"],s)}async function Tx(i,e){const n=await bi(i,{rounds:[{prompt:"Issued: 2 canteens. Shelf shows:",choices:["2 canteens","1 canteen","3 canteens","0 canteens"],answer:0},{prompt:"Issued: 1 flak jacket. Shelf shows:",choices:["2 jackets","1 jacket","0 jackets","1 jacket + cover"],answer:1},{prompt:"Issued: 3 magazines. Shelf shows:",choices:["3 magazines","2 magazines","4 magazines","1 magazine"],answer:0},{prompt:"Issued: 1 E-tool. Shelf shows:",choices:["1 E-tool","2 E-tools","0 E-tools","1 shovel"],answer:0},{prompt:"Issued: 2 pairs socks. Shelf shows:",choices:["1 pair","2 pairs","3 pairs","0 pairs"],answer:1}],title:"Gear Turn-In",hint:"Match issued quantities to shelf counts"});return De(n.score,["intelligence"],n)}async function Ax(i,e){const n=await en(i,e,{prompts:[{label:"LEFT FACE",code:"KeyL",keyLabel:"L"},{label:"RIGHT FACE",code:"KeyR",keyLabel:"R"},{label:"ABOUT FACE",code:"KeyA",keyLabel:"A"},{label:"FORWARD MARCH",code:"KeyM",keyLabel:"M"},{label:"HALT",code:"KeyH",keyLabel:"H"},{label:"LEFT FACE",code:"KeyL",keyLabel:"L"},{label:"RIGHT FACE",code:"KeyR",keyLabel:"R"},{label:"HALT",code:"KeyH",keyLabel:"H"},{label:"ABOUT FACE",code:"KeyA",keyLabel:"A"},{label:"HALT",code:"KeyH",keyLabel:"H"}],statKeys:["leadership","dexterity"],title:"Final Drill Eval",hint:"Execute from memory — no second chances on timing"});return De(n.score,["leadership"],n)}async function Rx(i,e){const n=await bi(i,{rounds:[{prompt:"What are the three core values?",choices:["Honor, Courage, Commitment","Duty, Honor, Country","Semper Fi","Adapt, Overcome"],answer:0},{prompt:"What does JJDIDTIEBUCKLE represent?",choices:["Leadership traits","Rifle parts","Chain of command","Uniform regs"],answer:0},{prompt:"Who is your Battalion Commander?",choices:["The senior officer present","My D.I.","The Sergeant Major","The President"],answer:0},{prompt:"What is your weapon condition?",choices:["Condition 4 until ordered","Always loaded","Condition 1 at all times","Unloaded in garrison"],answer:0},{prompt:"Purpose of the Crucible?",choices:["Test core values under stress","Extra PT","Punishment week","Family visit prep"],answer:0}],title:"Billet Board",hint:"Answer with composure — hesitation costs points"});return De(n.score,["leadership","intelligence"],n)}async function Cx(i,e){return new Promise(t=>{const n=document.createElement("div");n.className="menu-overlay";const s=e.campaign?.readiness??0;n.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Family Day</h2>
        <p class="menu-subtitle">${e.name} — show them the depot</p>
        <p class="recruiter-copy">Your family sees a different person than the one who left home. Readiness: ${s}%.</p>
        <p class="recruiter-copy">You walk them past the Parade Deck, the Chow Hall, the barracks. They don't fully understand what you went through — but they see the pride.</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="family-ok">Continue</button>
        </div>
      </div>`,document.body.appendChild(n),n.querySelector("#family-ok").addEventListener("click",()=>{n.remove(),t(De(.9,["leadership"],{narrative:!0}))},{once:!0})})}async function Px(i,e){const n=await en(i,e,{prompts:[{label:"PRESENT ARMS",code:"KeyP",keyLabel:"P"},{label:"ORDER ARMS",code:"KeyO",keyLabel:"O"},{label:"EYES RIGHT",code:"KeyE",keyLabel:"E"},{label:"FORWARD MARCH",code:"KeyM",keyLabel:"M"},{label:"HALT",code:"KeyH",keyLabel:"H"},{label:"EGA CEREMONY",code:"Enter",keyLabel:"Enter"}],statKeys:["leadership"],title:"Graduation Parade",hint:"Final drill — then receive the Eagle, Globe, and Anchor"});return De(Math.max(.85,n.score),["leadership"],n)}const Dx=[{label:"GET ON THE FOOTPRINTS!",code:"Space",keyLabel:"Space"},{label:"EYES FRONT!",code:"KeyF",keyLabel:"F"},{label:"STAND AT ATTENTION!",code:"KeyA",keyLabel:"A"},{label:"HANDS AT YOUR SIDES!",code:"KeyH",keyLabel:"H"},{label:"CHIN UP!",code:"KeyC",keyLabel:"C"},{label:"DO NOT MOVE!",code:"KeyD",keyLabel:"D"}];async function Lx(i,e){Math.round(is(e,["leadership","dexterity"],700,1100));const t=await en(i,e,{prompts:Dx,statKeys:["leadership","dexterity"],title:"Yellow Footprints",hint:"Execute every command on the yellow footprints"});return De(t.score,["leadership","dexterity"],t)}const uc=["Haircut","Hygiene issue","Medical screening","Dental","Initial gear issue"];async function Ix(i,e){const t=await Ls(i,{items:uc,correctOrder:uc,timeMs:2e4,title:"Receiving Pipeline",hint:"Complete each station in the correct order"});return De(t.score,["endurance","intelligence"],t)}const Nx=[{prompt:`The Senior Drill Instructor barks: "WHAT'S YOUR NAME, RECRUIT?"`,choices:["Sir, this recruit's name is [name], sir!","Uh... my name is...","Sir, recruit [name] reporting as ordered, sir!"],answer:0},{prompt:'"WHERE ARE YOU FROM?"',choices:["Sir, this recruit is from [hometown], sir!","Sir, the United States of America, sir!","Sir, MCRD San Diego, sir!"],answer:1},{prompt:'"WHY ARE YOU HERE?"',choices:["Sir, to become a United States Marine, sir!","Sir, because my recruiter said so, sir!","Sir, to get in shape, sir!"],answer:0},{prompt:'"DO YOU UNDERSTAND?"',choices:["Sir, yes sir!","Sir, no sir!","Sir, aye aye sir!"],answer:0}];async function Ux(i,e){const t=await bi(i,{rounds:Nx,title:"Black Friday",hint:"Respond with proper bearing to your Senior Drill Instructor"}),n=Math.max(.5,t.score);return De(n,["leadership"],t)}const ha=[{call:"BLOUSE!",label:"Blouse",id:"blouse"},{call:"TROUSERS!",label:"Trousers",id:"trousers"},{call:"BOOTS!",label:"Boots",id:"boots"},{call:"COVER!",label:"Cover",id:"cover"},{call:"BELT!",label:"Belt",id:"belt"},{call:"SOCKS!",label:"Socks",id:"socks"}];async function kx(i,e){return new Promise(t=>{const n=wt(i,{title:"Dressing Drill",hint:"Click the correct gear when the D.I. calls it"});let s=0,r=0;const a=8;let o=0,l=null,c=null;function d(h){const m=[...ha].sort(()=>Math.random()-.5);n.main.innerHTML=`
        <div class="mg-prompt">${l.call}</div>
        <div class="mg-countdown" id="mg-countdown">${Math.ceil(o/1e3)}</div>
        <div class="mg-choices">${m.map(_=>`<button type="button" class="btn btn-secondary mg-choice" data-id="${_.id}">${_.label}</button>`).join("")}</div>`,n.main.onclick=_=>{const v=_.target.closest("[data-id]");!v||!l||(n.main.onclick=null,clearInterval(c),v.dataset.id===h?(r++,lt(n,"hit")):lt(n,"miss"),s++,setTimeout(u,400))}}function u(){if(s>=a){n.dispose(),t(De(r/a,["dexterity"],{hits:r,total:a}));return}l=ha[s%ha.length];const h=is(e,["dexterity"],1200,2e3);o=Math.max(600,h-s*80),Mt(n,s+1,a),d(l.id);const m=Date.now()+o;c=setInterval(()=>{o=m-Date.now();const _=n.main.querySelector("#mg-countdown");_&&(_.textContent=Math.max(0,Math.ceil(o/1e3))),o<=0&&(clearInterval(c),n.main.onclick=null,lt(n,"miss"),s++,setTimeout(u,400))},100)}u()})}async function Fx(i,e){const n=await en(i,e,{prompts:[{label:"GRIP LEFT",code:"KeyJ",keyLabel:"J"},{label:"GRIP RIGHT",code:"KeyK",keyLabel:"K"},{label:"GRIP LEFT",code:"KeyJ",keyLabel:"J"},{label:"GRIP RIGHT",code:"KeyK",keyLabel:"K"},{label:"PULL UP",code:"Space",keyLabel:"Space"},{label:"GRIP LEFT",code:"KeyJ",keyLabel:"J"},{label:"GRIP RIGHT",code:"KeyK",keyLabel:"K"},{label:"MOUNT TOP",code:"Enter",keyLabel:"Enter"}],statKeys:["strength","dexterity"],title:"High Obstacle Course",hint:"J/K alternate grips · Space pull · Enter mount"});return De(n.score,["strength","dexterity"],n)}async function Ox(i,e){return new Promise(t=>{const n=wt(i,{title:"Rappel Tower",hint:"Press B in the green band each bounce"});let s=0,r=0;const a=10;let o=50,l=1;const c=wn({onTick:(u,h,m)=>{o+=l*m*40,(o>=85||o<=15)&&(l*=-1),n.main.innerHTML=`
          <div class="mg-prompt">Bounce ${s+1} / ${a}</div>
          <div class="mg-meter-track"><div class="mg-meter-bar" style="width:${o}%;background:#6dff8a"></div></div>
          <div class="mg-key-hint">Press <kbd>B</kbd> in the green zone (40–70%)</div>`}}),d=hn(["KeyB"],()=>{s>=a||(o>=40&&o<=70?(r++,lt(n,"hit")):lt(n,"miss"),s++,Mt(n,s,a),s>=a&&(c.stop(),d(),n.dispose(),t(De(r/a,["dexterity"],{hits:r,total:a}))))})})}async function Bx(i,e){return new Promise(t=>{const n=wt(i,{title:"Gas Chamber",hint:"Hold breath on GAS · Clear mask on CLEAR · Exhale on BREATHE"}),s=[{label:"GAS — HOLD BREATH",code:"Space",hold:!0},{label:"CLEAR — MASK OFF",code:"KeyC"},{label:"BREATHE — CONTROLLED EXHALE",code:"KeyB"},{label:"GAS — HOLD BREATH",code:"Space",hold:!0},{label:"CLEAR — MASK OFF",code:"KeyC"},{label:"BREATHE — CONTROLLED EXHALE",code:"KeyB"}];let r=0,a=0,o=100;function l(){if(r>=s.length){c(),n.dispose(),t(De(a/s.length,["endurance"],{hits:a,total:s.length}));return}const d=s[r];n.main.innerHTML=`<div class="mg-prompt">${d.label}</div><div class="mg-key-hint">Press <kbd>${d.code==="Space"?"Space":d.code.replace("Key","")}</kbd></div>`,Mt(n,r+1,s.length),Qn(n,o/100);let u=!1;const h=setTimeout(()=>{u||(o=Math.max(0,o-20),lt(n,"miss"),r++,setTimeout(l,300))},is(e,["endurance"],800,1400));n._onPhase=m=>{u||m===d.code&&(u=!0,clearTimeout(h),a++,lt(n,"hit"),r++,setTimeout(l,250))}}const c=hn(["Space","KeyC","KeyB"],d=>n._onPhase?.(d));l()})}async function Hx(i,e){return new Promise(t=>{const n=wt(i,{title:"Night Cleanup",hint:"Hold S to scrub · release on creaks"});let s=0,r=20,a=!1,o=!1;n.main.innerHTML=`<div class="mg-night-bar"><div class="mg-night-fill" id="nc-fill"></div></div><div class="mg-prompt">Noise: <span id="nc-noise">${r}</span>%</div>`;const l=n.main.querySelector("#nc-fill"),c=n.main.querySelector("#nc-noise"),d=wn({onTick:()=>{a&&!o&&(s+=.4,r=Math.min(100,r+.15),l.style.width=`${Math.min(100,s)}%`,c.textContent=Math.round(r),r>=100&&_(!1),s>=100&&_(!0))}}),u=setInterval(()=>{o=!0,n.hint.textContent="CREAK — freeze!",setTimeout(()=>{o=!1,n.hint.textContent="Hold S to scrub · release on creaks"},1200)},3500),h=v=>{v.code==="KeyS"&&!o&&(a=!0)},m=v=>{v.code==="KeyS"&&(a=!1)};window.addEventListener("keydown",h),window.addEventListener("keyup",m);function _(v){clearInterval(u),d.stop(),window.removeEventListener("keydown",h),window.removeEventListener("keyup",m),n.dispose(),t(De(v?.85:s/100,["dexterity"],{progress:s,noise:r}))}})}const zx=[{prompt:"How do you open the letter?",choices:["Tell them you're doing fine and training hard.","Admit it's harder than you expected but you're not quitting.","Brag about how easy boot camp is."],answer:1},{prompt:"What do you tell them about the D.I.?",choices:["He's tough but fair — you're learning.","You hate him and want to come home.","You don't mention the D.I. at all."],answer:0},{prompt:"How do you close?",choices:["Love you. I'll make you proud.","See you whenever.","Don't write back, too busy."],answer:0}];async function Wx(i,e){const t=await bi(i,{rounds:zx,title:"Letter Home",hint:"Compose your first letter — tone matters"});return De(Math.max(.6,t.score),["intelligence"],t)}const Gx=[{prompt:"A care package arrives for your rack-mate. He offers to share.",choices:["Politely decline — contraband isn't worth it.","Take one piece and enjoy it quietly.","Report it to the D.I. immediately."],answer:0},{prompt:"Your mom sent cookies. The whole platoon smells them.",choices:["Share with your fire team after chow.","Hide them under your rack.","Eat them all yourself tonight."],answer:0},{prompt:"A letter says your girlfriend is moving on.",choices:["Read it alone, square yourself away, press on.","Throw a fit in the squad bay.","Ignore it and pretend it never came."],answer:0}];async function Vx(i,e){const t=await bi(i,{rounds:Gx,title:"Mail Call",hint:"Packages and letters after the Crucible"});return De(Math.max(.65,t.score),["leadership"],t)}const hc=["Quarterdeck","Head","Racks","Windows","Gear locker"];async function qx(i,e){const t=await Ls(i,{items:hc,correctOrder:hc,timeMs:18e3,title:"Field Day",hint:"Clean stations in order before the white-glove pass"});return De(t.score,["endurance","leadership"],t)}async function Xx(i,e){return new Promise(t=>{const n=wt(i,{title:"Footlocker Inspection",hint:"Click every discrepancy before time runs out"}),s=[{id:"socks",x:25,y:70},{id:"boots",x:40,y:75},{id:"gig",x:55,y:40},{id:"locker",x:70,y:55},{id:"photos",x:35,y:25}],r=new Set;n.main.innerHTML=`<div class="mg-inspect-board">${s.map(c=>`<button type="button" class="mg-inspect-spot" data-id="${c.id}" style="left:${c.x}%;top:${c.y}%"></button>`).join("")}</div>`;const a=wn({durationMs:14e3,onFinish:o});function o(){n.main.removeEventListener("click",l),n.dispose(),t(De(r.size/s.length,["leadership","intelligence"],{found:r.size,total:s.length}))}function l(c){const d=c.target.closest("[data-id]");d&&(r.add(d.dataset.id),d.classList.add("mg-inspect-found"),Mt(n,r.size,s.length),r.size>=s.length&&a.stop())}n.main.addEventListener("click",l),Mt(n,0,s.length)})}const fc=[{label:"PUSH-UPS",keys:["KeyJ","KeyK"],alternates:!0},{label:"MOUNTAIN CLIMBERS",keys:["KeyJ","KeyK"],alternates:!0},{label:"SIDE STRADDLE HOPS",keys:["Space"],alternates:!1},{label:"PUSH-UPS",keys:["KeyJ","KeyK"],alternates:!0},{label:"MOUNTAIN CLIMBERS",keys:["KeyJ","KeyK"],alternates:!0}];async function $x(i,e){return new Promise(t=>{const n=wt(i,{title:"Incentive Training",hint:"Quarterdeck — keep pace in the red zone"});let s=0,r=50,a=0;const o=fc.length;let l=null;function c(){if(s>=o){d(),n.dispose(),t(De(a/o,["endurance","strength"],{hits:a,total:o}));return}const u=fc[s];n.main.innerHTML=`<div class="mg-prompt">${u.label}</div><div class="mg-key-hint">${u.alternates?"Alternate J / K rapidly":"Mash Space"}</div>`,Mt(n,s+1,o),r=40;let h=0;const m=12,_=setInterval(()=>{r=Math.max(0,r-2),Qn(n,r/100),r<=0&&(clearInterval(_),lt(n,"miss"),s++,setTimeout(c,300))},200);n._onKey=v=>{if(u.alternates){if(v!=="KeyJ"&&v!=="KeyK"||l===v)return;l=v}else if(v!=="Space")return;h++,r=Math.min(100,r+8),Qn(n,r/100),h>=m&&(clearInterval(_),a++,lt(n,"hit"),s++,l=null,setTimeout(c,300))}}const d=hn(["KeyJ","KeyK","Space"],u=>n._onKey?.(u));c()})}const Kx={drillCadence:{title:"Close Order Drill",subtitle:"Parade Deck — on the cadence",intro:"Press the matching key when the command flashes. <strong>L</strong> Left Face · <strong>R</strong> Right Face · <strong>M</strong> March · <strong>H</strong> Halt",run:jy},coreValues:{title:"Core Values Class",subtitle:"Lecture Hall — know the code",intro:"Match each leadership trait to its definition.",run:Qy},ist:{title:"Initial Strength Test",subtitle:"Pull-up Bars — counted reps",intro:"Press <strong>F</strong> to pull, <strong>J</strong> at chin-over-bar, <strong>K</strong> at full hang.",run:tx},steadyAim:{title:"Snapping In",subtitle:"Rifle Range — steady aim",intro:"Hold <strong>Space</strong> to steady your breath. Press <strong>F</strong> to fire when the reticle aligns with the ring.",run:Du},paceRunner:{title:"PFT Baseline",subtitle:"400m track — pace run",intro:"Alternate <strong>J</strong> and <strong>K</strong> to maintain stride in the green band.",run:ix},fieldStrip:{title:"Weapons Maintenance",subtitle:"Armoury — field strip",intro:"Click rifle parts in the correct disassembly order before time runs out.",run:sx},swimStrokes:{title:"Swim Qualification",subtitle:"Pool — stroke rhythm",intro:"<strong>F</strong> to stroke · <strong>Space</strong> to breathe at the wall · <strong>T</strong> to turn.",run:rx},gearShed:{title:"Gear Shed",subtitle:"Pool — underwater shed",intro:"Shed gear in the prompted order: H helmet · F flak · B belt · N boots · T trousers · Space surface.",run:ax},logTeamLift:{title:"Log Drills",subtitle:"Logs — team sync lift",intro:"Press <strong>Space</strong> when all four teammate markers align in the green zone.",run:ox},obstacleRun:{title:"Fire Team Course",subtitle:"Obstacle Course — QTE run",intro:"<strong>V</strong> vault · <strong>C</strong> crawl · <strong>L</strong> climb · <strong>S</strong> swing · <strong>Enter</strong> finish.",run:lx},landNav:{title:"Land Navigation",subtitle:"Trail loop — map reading",intro:"Given a bearing and pace count, choose the correct checkpoint for each leg.",run:dx},buddyAid:{title:"Buddy Aid",subtitle:"Medical — triage",intro:"Order first-aid steps correctly for each casualty: assess, breathing, bleeding, shock, evac.",run:ux},mcmapSpar:{title:"MCMAP Intro",subtitle:"MCMAP Pit — combos",intro:"Execute strike and block combos on command.",run:hx},pugilDuel:{title:"Pugil Sticks",subtitle:"Thunderdown — duel",intro:"Read the opponent's tell. <strong>H</strong> high block · <strong>L</strong> low block · <strong>D</strong> dodge feint.",run:fx},bayonetCourse:{title:"Bayonet Course",subtitle:"Drill Practice — thrust and slash",intro:"<strong>T</strong> thrust · <strong>S</strong> slash — keep the rhythm down the lane.",run:px},knowledgeExam:{title:"Knowledge Exam",subtitle:"Lecture Hall — General Orders",intro:"Complete each General Order with the correct missing phrase.",run:gx},inspection:{title:"Uniform Inspection",subtitle:"Barracks — spot discrepancies",intro:"Click every uniform error on the board before the D.I. finishes his walk.",run:_x},rifleQual:{title:"Table 1 Qualification",subtitle:"Rifle Range — wind and positions",intro:"Arrow keys adjust wind. <strong>F</strong> to fire at standing, kneeling, and prone.",run:vx},nightMove:{title:"Night Infiltration",subtitle:"Drill Practice — quiet movement",intro:"Hold <strong>W</strong> to advance. Freeze when the flare pops — do not move.",run:yx},humpPrep:{title:"Full Gear Hike",subtitle:"Trail loop — pace and leadership",intro:"<strong>W</strong> to march. <strong>Space</strong> to help a falling teammate (costs stamina).",run:xx},reactionCourse:{title:"Reaction Course",subtitle:"Obstacle Course — team crossing",intro:"Sequence planks, ropes, and barrels to cross the gap in the correct order.",run:bx},crucibleDay:{title:"Crucible: Day Events",subtitle:"Crucible Trail — day gauntlet",intro:"Marksmanship station under fatigue. Steady aim and execute.",run:Sx},crucibleNight:{title:"Crucible: Night Events",subtitle:"Crucible Trail — night movement",intro:"Freeze and move on command through the night course.",run:Mx},reaperHike:{title:"The Reaper",subtitle:"Crucible Trail — final hike",intro:"<strong>W</strong> to hike. Stamina barely recovers. Finish to earn the title.",run:Ex},warriorBreakfast:{title:"Warrior Breakfast",subtitle:"Chow Hall — earned meal",intro:"Press <strong>Space</strong> when the called item appears on the serving line.",run:wx},gearTurnIn:{title:"Gear Turn-In",subtitle:"Supply — inventory check",intro:"Match issued gear quantities against what is on the shelf.",run:Tx},finalDrill:{title:"Final Drill Eval",subtitle:"Parade Deck — from memory",intro:"Execute the full command sequence from memory. L · R · A · M · H.",run:Ax},billetBoard:{title:"Battalion Commander's Inspection",subtitle:"Company Office — billet board",intro:"Answer rapid-fire knowledge questions with composure.",run:Rx},familyDay:{title:"Family Day",subtitle:"Family Day — epilogue",intro:"Walk your family through the depot. Show them who you became.",run:Cx},graduationParade:{title:"Graduation Parade",subtitle:"Parade Deck — EGA ceremony",intro:"Final drill performance. P · O · E · M · H · Enter for the Eagle, Globe, and Anchor.",run:Px},yellowFootprints:{title:"Yellow Footprints",subtitle:"Receiving Barracks — first formation",intro:"Step off the bus onto the yellow footprints. Execute every barked command on time.",run:Lx},processing:{title:"Haircuts & Medical",subtitle:"Medical — receiving pipeline",intro:"Complete each receiving station in order: haircut, hygiene, medical, dental, gear issue.",run:Ix},blackFriday:{title:"Black Friday",subtitle:"Barracks — D.I. pick-up",intro:"Your Senior Drill Instructor takes charge. Respond with proper bearing.",run:Ux},dressDrill:{title:"Dressing Drill",subtitle:"Barracks — blouses ready, MOVE",intro:"The D.I. calls an article of clothing — click the correct gear before the countdown expires.",run:kx},writeLetter:{title:"Letter Home",subtitle:"Barracks — first letter",intro:"Compose your first letter home. Your tone and honesty matter.",run:Wx},nightCleanup:{title:"Night Cleanup",subtitle:"Barracks — firewatch scrub",intro:"Hold <strong>S</strong> to scrub the quarterdeck. Release when you hear a creak.",run:Hx},footlockerInspection:{title:"Footlocker Inspection",subtitle:"Barracks — spot discrepancies",intro:"Click every footlocker error before the D.I. finishes his walk.",run:Xx},highObstacle:{title:"High Obstacle Course",subtitle:"Obstacle Course — climb",intro:"<strong>J</strong>/<strong>K</strong> alternate grips · <strong>Space</strong> pull · <strong>Enter</strong> mount.",run:Fx},rappelTower:{title:"Rappelling",subtitle:"Rappell Course — controlled descent",intro:"Press <strong>B</strong> in the green band on each bounce down the tower.",run:Ox},gasChamber:{title:"Gas Chamber",subtitle:"Gas Chamber — mask discipline",intro:"<strong>Space</strong> hold breath · <strong>C</strong> clear mask · <strong>B</strong> controlled exhale.",run:Bx},mailCall:{title:"Mail Call",subtitle:"Barracks — letters and packages",intro:"Packages and letters from home. Choose how you handle what arrives.",run:Vx},fieldDay:{title:"Field Day",subtitle:"Barracks — white-glove clean",intro:"Click cleaning stations in the correct order before the D.I. inspects.",run:qx}};function Lu(i){return Kx[i]??null}function De(i,e,t={}){return{score:i,grade:Hv(i),stats:e,details:t}}const Yx=20,jx=.6;function Iu(i,e,t={}){const n=Lu(e);return n?new Promise(s=>{const r=document.createElement("div");r.className="menu-overlay",r.innerHTML=`
      <div class="menu-panel recruiter-panel campaign-panel">
        <h2 class="menu-title" id="activity-title"></h2>
        <p class="menu-subtitle" id="activity-subtitle"></p>
        <div class="recruiter-body" id="activity-body"></div>
        <div class="recruiter-actions" id="activity-actions"></div>
      </div>
    `,document.body.appendChild(r);const a=r.querySelector("#activity-title"),o=r.querySelector("#activity-subtitle"),l=r.querySelector("#activity-body"),c=r.querySelector("#activity-actions"),d=r.querySelector(".campaign-panel");let u=i;const h=t.stats??[];function m(M){r.remove(),s(M)}function _(M){return M==="honor"?'<span class="grade-badge grade-badge--honor">HONOR</span>':M==="passing"?'<span class="grade-badge grade-badge--passing">PASSING</span>':'<span class="grade-badge grade-badge--unsat">UNSAT</span>'}function v(M,w){a.textContent="Activity Complete",o.textContent=`${Math.round(M.score*100)}% performance`;const T=w._lastResult?.statDeltas??{},R=Object.entries(T).map(([U,y])=>`<div class="recruiter-result-row"><span>${$t(U)}</span><span class="stat-delta stat-delta--up">+${y}</span></div>`).join("");l.innerHTML=`
        <div class="recruiter-results">
          <div class="recruiter-result-row">
            <span>Grade</span>
            <span>${_(M.grade)}</span>
          </div>
          <div class="recruiter-result-row">
            <span>Readiness</span>
            <span class="stat-delta stat-delta--up">+${w._lastResult?.readinessDelta??0}</span>
          </div>
          ${R}
          <div class="recruiter-final-stats">Readiness: ${w.campaign.readiness} / 100</div>
        </div>
      `,c.innerHTML='<button type="button" class="btn btn-primary" id="activity-continue">Continue</button>',r.querySelector("#activity-continue").addEventListener("click",()=>{m(w)},{once:!0})}async function p(M){const w=Gv(u,t.dayId,M);u=w,v(M,w)}async function f(M){a.textContent="Performance Drop",o.textContent=`${Math.round(M.score*100)}% — UNSAT`,l.innerHTML=`
        <p class="recruiter-copy">The D.I. is not impressed. Get on the quarterdeck for Incentive Training, or accept your grade.</p>
        <p class="recruiter-copy recruiter-copy--small">IT costs <strong>20% hydration</strong>. One attempt per activity. Pass IT to retry the event.</p>
      `,c.innerHTML=`
        <button type="button" class="btn btn-danger" id="accept-grade">Accept Grade</button>
        <button type="button" class="btn btn-primary" id="incentive-training">Incentive Training</button>
      `,r.querySelector("#accept-grade").addEventListener("click",()=>{p(M)},{once:!0}),r.querySelector("#incentive-training").addEventListener("click",async()=>{u=Bv(u,t.dayId);const w=(u.campaign.hydration??100)-Yx;u=No(u,w),d.classList.add("recruiter-panel--pullup"),a.textContent="Incentive Training",o.textContent="Quarterdeck",c.innerHTML="",l.innerHTML="";const T=await $x(l);if(d.classList.remove("recruiter-panel--pullup"),T.score>=jx){a.textContent=t.title??n.title,o.textContent="Retry — no second IT",l.innerHTML="";const R=await n.run(l,u),U={...R,stats:R.stats??h};await p(U)}else l.innerHTML='<p class="recruiter-copy">You failed Incentive Training. The unsat stands.</p>',c.innerHTML='<button type="button" class="btn btn-primary" id="it-fail-ok">Continue</button>',r.querySelector("#it-fail-ok").addEventListener("click",()=>{p(M)},{once:!0})},{once:!0})}async function E(M){if(!Er(u)&&M.grade==="unsat"&&t.dayId&&Ov(u,t.dayId)){await f(M);return}await p(M)}function A(){a.textContent=t.title??n.title,o.textContent=n.subtitle,l.innerHTML=`<p class="recruiter-copy">${n.intro}</p>`,c.innerHTML='<button type="button" class="btn btn-primary" id="activity-begin">Begin</button>',r.querySelector("#activity-begin").addEventListener("click",async()=>{d.classList.add("recruiter-panel--pullup"),a.textContent=t.title??n.title,o.textContent="In progress",c.innerHTML="",l.innerHTML="";const M=await n.run(l,u),w={...M,stats:M.stats??h};d.classList.remove("recruiter-panel--pullup"),await E(w)},{once:!0})}A()}):Promise.resolve(i)}const Zx={theStraggler:{id:"theStraggler",title:"The Straggler",run:i=>Rt(i,"w1_straggler","The Straggler",[{say:"Recruit, a boot in your platoon is falling behind on gear prep."},{ask:{prompt:"How do you handle it?",choices:[{text:"Help them square away their gear before lights out.",reward:{readiness:5,stat:1,statKey:"leadership"}},{text:"Tell them to figure it out — not your problem.",reward:{readiness:1},say:"Every recruit for themselves doesn't cut it here."},{text:"Report them to the firewatch.",reward:{readiness:3},say:"Sometimes the book answer is right — but they won't trust you after that."}],bestSay:"Good. We leave no Marine behind. That's leadership."}}])},scaredOfWater:{id:"scaredOfWater",title:"Scared of the Water",run:i=>Rt(i,"w4_scared","Scared of the Water",[{say:"Your fire team buddy is frozen at the pool edge. Swim qual is in an hour."},{ask:{prompt:"What do you do?",choices:[{text:"Walk him through breathing drills at the shallow end.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"You got him in the water. That's what teammates do."},{text:"Tell the D.I. he can't hack it.",reward:{readiness:1},say:"He'll remember that when you need help someday."},{text:"Ignore it — not your problem.",reward:{readiness:0},say:"Leadership is choosing to act when nobody makes you."}]}}])},blisterCheck:{id:"blisterCheck",title:"Blister Check",run:i=>Rt(i,"w5_blister","Blister Check",[{say:"A recruit is limping on the quarterdeck with blood soaking through his sock."},{ask:{prompt:"Your call?",choices:[{text:"Help him moleskin it and tell him to report to Medical.",reward:{readiness:4,stat:1,statKey:"leadership"},say:"Good initiative. He'll make the hike tomorrow."},{text:"March him straight to Medical without stopping.",reward:{readiness:3},say:"By the book. Safe choice."},{text:"Tell him to suck it up.",reward:{readiness:0},say:"That blister becomes an infection by field week."}]}}])},carePackage:{id:"carePackage",title:"Care Package",run:i=>Rt(i,"w7_carepkg","Care Package",[{say:"Your rack-mate got a care package. Candy, cookies, contraband."},{ask:{prompt:"The D.I. doesn't know yet.",choices:[{text:"Convince him to turn it in to the duty NCO.",reward:{readiness:5,stat:1,statKey:"intelligence"},say:"Integrity matters. He learned something."},{text:"Share one piece and say nothing.",reward:{readiness:1},say:"You both ate Article 15 for breakfast."},{text:"Report him immediately.",reward:{readiness:2},say:"Right by the book — but your platoon won't forget."}]}}])},theDoubter:{id:"theDoubter",title:"The Doubter",run:i=>Rt(i,"w9_doubter","The Doubter",[{say:"A recruit in your squad says he's done. The Crucible starts tomorrow."},{ask:{prompt:"He's sitting on his rack staring at the wall.",choices:[{text:"Sit with him and remind him why he came.",reward:{readiness:6,stat:1,statKey:"leadership"},say:"He stood up. That's the whole point of the Crucible."},{text:"Tell the D.I. he's quitting.",reward:{readiness:2},say:"Process is process. He's on the bus home."},{text:"Leave him alone — he'll figure it out.",reward:{readiness:1},say:"He didn't figure it out. He's gone."}]}}])},squaredAway:{id:"squaredAway",title:"Squared Away",run:i=>Rt(i,"w12_squared","Squared Away",[{say:"Final inspection is tomorrow. Your rack-mate's uniform is a disaster."},{ask:{prompt:"Lights out in ten minutes.",choices:[{text:"Help him press, align, and square away his rack.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"Both racks passed inspection. That's a team."},{text:"Focus on your own gear only.",reward:{readiness:2},say:"You passed. He didn't."},{text:"Let him fail — he had thirteen weeks.",reward:{readiness:0},say:"He's on extra duty during Warrior Week."}]}}])},chowProtocol:{id:"chowProtocol",title:"Chow Hall Protocol",run:i=>Rt(i,"w1_chow","Chow Hall Protocol",[{say:"First chow hall visit. The D.I. barks: eyes forward, no talking in line."},{ask:{prompt:"Your buddy whispers a joke in the chow line.",choices:[{text:"Stay silent and keep your eyes forward.",reward:{readiness:4,stat:1,statKey:"leadership"},say:"Good discipline. The D.I. noticed."},{text:"Laugh quietly — it's harmless.",reward:{readiness:1},say:"The whole squad got IT because of you."},{text:"Tell him to shut up.",reward:{readiness:2},say:"Better than laughing — but the D.I. heard you anyway."}]}}])},sundayService:{id:"sundayService",title:"Sunday Service",run:i=>Rt(i,"w2_church","Sunday Service",[{say:"Sunday morning. Church is optional — extra rack time if you skip."},{ask:{prompt:"What do you do?",choices:[{text:"Attend church service.",reward:{readiness:4},say:"A quiet hour. Your head is clearer."},{text:"Skip church and square away your gear instead.",reward:{readiness:3,stat:1,statKey:"intelligence"},say:"Your footlocker has never looked better."},{text:"Sleep in and hope nobody notices.",reward:{readiness:0},say:"The D.I. noticed. Extra duty."}]}}])},houseMouse:{id:"houseMouse",title:"House Mouse",run:i=>Rt(i,"w3_housemouse","House Mouse",[{say:`The D.I. points at you. "You're the shortest. You're cleaning my duty hut tonight."`},{ask:{prompt:"The duty hut is off-limits to recruits.",choices:[{text:"Clean it squared-away and say nothing.",reward:{readiness:5,stat:1,statKey:"leadership"},say:"The D.I. found it spotless. He remembers."},{text:"Snoop through his desk while you clean.",reward:{readiness:1},say:"He knew. You paid for that curiosity."},{text:"Rush it and get back before lights out.",reward:{readiness:2},say:"It passed — barely."}]}}])},companyHouseMouse:{id:"companyHouseMouse",title:"Company House Mouse",run:i=>Rt(i,"w8_companymouse","Company House Mouse",[{say:"Promotion: the First Sergeant wants you cleaning the Company Office tonight."},{ask:{prompt:"The First Sergeant is still in the building.",choices:[{text:"Work quietly and leave it inspection-ready.",reward:{readiness:6,stat:1,statKey:"intelligence"},say:"The First Sergeant shook your hand. That never happens."},{text:"Do the minimum and get out.",reward:{readiness:2},say:"It was acceptable. Nothing more."},{text:"Try to chat him up while you work.",reward:{readiness:0},say:"He told the D.I. you have too much mouth."}]}}])},squadLeader:{id:"squadLeader",title:"Squad Leader",run:i=>Rt(i,"w5_squadleader","Squad Leader",[{say:'The D.I. appoints you squad leader. "Your squad. Your problem."'},{ask:{prompt:"A squadmate fails inspection because of a gig line.",choices:[{text:"Own it with the D.I. and fix it as a squad.",reward:{readiness:6,stat:1,statKey:"leadership"},say:"That's leadership. The D.I. saw it."},{text:"Cover for him quietly.",reward:{readiness:2},say:"He owes you — but the D.I. isn't stupid."},{text:"Throw him under the bus.",reward:{readiness:1},say:"The D.I. kept you as squad leader. Nobody trusts you."}]}}])},guide:{id:"guide",title:"The Guide",run:i=>Rt(i,"w12_guide","The Guide",[{say:"You're handed the guidon for final drill and graduation parade."},{ask:{prompt:"A recruit in your platoon is shaking before the parade.",choices:[{text:"Talk him through it — steady voice, steady guidon.",reward:{readiness:8,stat:1,statKey:"leadership"},say:"He marched. You carried the guidon like you were born to it."},{text:"Tell him to suck it up.",reward:{readiness:3},say:"He made it. Barely."},{text:"Focus only on your own performance.",reward:{readiness:4},say:"The guidon was steady. The platoon was not."}]}}])},remedialDrill:{id:"remedialDrill",title:"Remedial Drill",run:i=>Rt(i,"w2_remedial_drill","Remedial Drill",[{say:'The D.I. pulls you aside after drill. "You move like a recruit in a body bag. Extra drill for you."'},{ask:{prompt:"Two hours of close-order drill on the quarterdeck. How do you handle it?",choices:[{text:"Execute every command sharp — treat it as a chance to improve.",reward:{readiness:4,stat:1,statKey:"dexterity"},say:"Your facing movements actually looked crisp by the end."},{text:"Go through the motions and count the minutes.",reward:{readiness:1},say:"You survived. The D.I. wasn't impressed."},{text:"Complain that it's unfair.",reward:{readiness:0},say:"The whole platoon got IT because of your mouth."}]}}])},bodyCompProgram:{id:"bodyCompProgram",title:"Body Composition Program",run:i=>Rt(i,"w2_body_comp","Body Composition Program",[{say:`After the PFT baseline, the D.I. reads your name. "Body composition program. You're on the quarterdeck after chow."`},{ask:{prompt:"Extra incentive training — push-ups, mountain climbers, side straddle hops until the D.I. is tired.",choices:[{text:"Attack the IT session — outwork the program.",reward:{readiness:4,stat:1,statKey:"endurance"},say:"You were still standing when it ended. He noticed."},{text:"Do the minimum reps and conserve energy.",reward:{readiness:2},say:"You passed the program. Barely."},{text:"Skip reps when the D.I. turns his back.",reward:{readiness:0},say:"He turned back. You're on the program another week."}]}}])},remedialKnowledge:{id:"remedialKnowledge",title:"Remedial Knowledge",run:i=>Rt(i,"w3_remedial_knowledge","Remedial Knowledge",[{say:`The knowledge instructor flags you after class. "You don't know the General Orders. Remedial tutoring."`},{ask:{prompt:"Extra study session in the Lecture Hall. The instructor drills the orders until you recite them.",choices:[{text:"Study hard and recite from memory without prompts.",reward:{readiness:4,stat:1,statKey:"intelligence"},say:"You nailed every order. The instructor signed you off."},{text:"Mumble through and hope he moves on.",reward:{readiness:1},say:"He moved on. You'll need it again at mid-cycle."},{text:"Ask a smart recruit to whisper answers.",reward:{readiness:0},say:"The instructor caught you. Extra duty."}]}}])},remedialStrength:{id:"remedialStrength",title:"Remedial Strength",run:i=>Rt(i,"w3_remedial_strength","Remedial Strength",[{say:`The D.I. marches you to the pull-up bars. "You've got noodle arms. Remedial strength training."`},{ask:{prompt:"Max set pull-ups, flexed-arm hang, and negative reps until failure.",choices:[{text:"Give maximum effort on every rep — no half pulls.",reward:{readiness:4,stat:1,statKey:"strength"},say:"You got one more rep than last time. Progress."},{text:"Kip and cheat the reps to finish faster.",reward:{readiness:0},say:"The D.I. counted zero. Start over."},{text:"Quit when it burns and ask to be excused.",reward:{readiness:1},say:"You're back tomorrow. Same bars."}]}}])}};function Jx(i){return Zx[i]??null}function Rt(i,e,t,n){return new Promise(s=>{const r=document.createElement("div");r.className="menu-overlay",r.innerHTML=`
      <div class="menu-panel recruiter-panel recruiter-panel--station">
        <h2 class="menu-title">Side Quest</h2>
        <p class="menu-subtitle">${t}</p>
        <div class="recruiter-body" id="sq-body"></div>
        <div class="recruiter-actions" id="sq-actions"></div>
      </div>
    `,document.body.appendChild(r);const a=r.querySelector("#sq-body"),o=new Au(a);(async()=>{let l={readiness:2};for(const c of n)if(c.say&&await o.say(c.say),c.ask){const d=await o.ask(c.ask),u=c.ask.choices[d];l=u.reward??{readiness:2},u.say?await o.say(u.say):c.ask.bestSay&&d===0&&await o.say(c.ask.bestSay)}o.dispose(),r.remove(),s(qv(i,e,l))})()})}function Qx(i,e){const t=Jx(e.questId);return t?new Promise(n=>{const s=document.createElement("div");s.className="menu-overlay",s.innerHTML=`
      <div class="menu-panel schedule-panel">
        <h2 class="menu-title">Side Quest Available</h2>
        <p class="menu-subtitle">${e.title}</p>
        <p class="recruiter-copy">Near ${e.locationName}. Optional — small readiness reward.${e.maxStats?" <em>Remedial — offered based on your stats.</em>":""}</p>
        <div class="schedule-actions">
          <button type="button" class="btn btn-primary" id="sq-accept">Investigate</button>
          <button type="button" class="btn btn-secondary" id="sq-skip">Skip</button>
        </div>
      </div>
    `,s.querySelector("#sq-accept").addEventListener("click",async()=>{s.remove();const r=await t.run(i);n(r)},{once:!0}),s.querySelector("#sq-skip").addEventListener("click",()=>{s.remove(),n(i)},{once:!0}),document.body.appendChild(s)}):Promise.resolve(i)}const eb=8;class tb{constructor({character:e,slotIndex:t,player:n,parsedMap:s,recruitHUD:r,hydrationSystem:a,onRunEnd:o}){this.character=_t(e),this.slotIndex=t??e.slotIndex??0,this.player=n,this.parsedMap=s,this.recruitHUD=r,this.hydrationSystem=a??null,this.onRunEnd=o??null,this.busy=!1,this.runEnded=!1,this.awaitingProximity=!1,this.currentDayDef=null,this._activityResolve=null,this.promptEl=document.createElement("div"),this.promptEl.className="activity-prompt",this.promptEl.innerHTML=`
      <span class="activity-prompt-text" id="activity-prompt-text"></span>
      <button type="button" class="btn btn-primary activity-prompt-btn" id="activity-prompt-btn">Begin</button>
    `,this.promptEl.style.display="none",document.body.appendChild(this.promptEl),this.promptTextEl=this.promptEl.querySelector("#activity-prompt-text"),this.promptBtn=this.promptEl.querySelector("#activity-prompt-btn"),this.promptBtn.addEventListener("click",()=>this.triggerActivity()),this._onPromptKey=l=>{l.key==="Enter"&&this.promptEl.style.display!=="none"&&!this.busy&&this.triggerActivity()},window.addEventListener("keydown",this._onPromptKey)}updateCharacter(e){this.character=_t(e),this.player.character=this.character,this.player.updateAppearance(),this.recruitHUD.update(this.character),this.hydrationSystem?.updateCharacter(this.character),ko(this.slotIndex,this.character)}async start(){sc(this.character)||(await this.dayLoop(),!this.runEnded&&lc(this.character.campaign.week)&&!sc(this.character)&&await this.handleGraduation())}async handleGraduation(){const e=Kv(this.character);rc(e,{graduated:!0}),await Gy(e),this.updateCharacter(e)}async handleRunFailure(e){if(this.runEnded)return!0;if((this.character.campaign.recycleTokens??0)>0){let s=kv(this.character);return e==="heat"&&(s=No(s,50)),this.updateCharacter(s),await qy(e),this.awaitingProximity||(this.player.inputEnabled=!0),!1}this.runEnded=!0,this.busy=!0,this.player.inputEnabled=!1,this.hidePrompt();const n=rc(this.character,{graduated:!1});return await Xy(this.character,e,n),yu(this.slotIndex),this.onRunEnd?.(),!0}async dayLoop(){for(;!lc(this.character.campaign.week)&&!this.runEnded;){const e=Bo(this.character.campaign.week);if(!e)break;if(!e.days?.length){await Wy(e);return}const t=Oy(this.character.campaign.week,this.character.campaign.dayInWeek);if(!t)break;if(this.character.campaign.completed[t.id]){this.advanceDay(e);continue}if(await this.runSingleDay(t,e),this.runEnded)return}}async runSingleDay(e,t){if(this.busy=!0,this.player.inputEnabled=!1,await Hy(this.character,e,t),this.hydrationSystem?.onNewDay(),this.currentDayDef=e,this.awaitingProximity=!0,this.busy=!1,this.player.inputEnabled=!0,await new Promise(r=>{this._activityResolve=r}),this.runEnded)return;const n=By(this.character.campaign.week,this.character.campaign.dayInWeek,this.character);for(const r of n)if(!Xv(this.character,r.id)){const a=await Qx(this.character,r);this.updateCharacter(a)}this.advanceDay(t)&&await zy(t)}advanceDay(e){const{character:t,weekComplete:n}=Vv(this.character,e.days.length);return this.updateCharacter(t),n}updateProximity(){if(!this.awaitingProximity||this.busy||!this.currentDayDef||this.runEnded){this.hidePrompt();return}const e=Cu(this.parsedMap,this.currentDayDef.locationName);if(!e){this.hidePrompt();return}Math.hypot(this.player.position.x-e.x,this.player.position.z-e.z)<=eb?this.showPrompt(this.currentDayDef):this.hidePrompt()}showPrompt(e){this.promptTextEl.textContent=`${e.title} — ${e.locationName}`,this.promptEl.style.display="flex"}hidePrompt(){this.promptEl.style.display="none"}async triggerActivity(){if(!this.awaitingProximity||this.busy||!this.currentDayDef||this.runEnded)return;this.busy=!0,this.awaitingProximity=!1,this.player.inputEnabled=!1,this.hidePrompt();const e=this.currentDayDef,t=await Iu(this.character,e.activityId,{dayId:e.id,title:e.title,stats:e.stats});this.updateCharacter(t),this.hydrationSystem?.postActivityDrain(e.stats??[]),!(_u(this.character)&&t._lastResult?.grade==="unsat"&&await this.handleRunFailure("performance"))&&(this.currentDayDef=null,this.busy=!1,this._activityResolve&&(this._activityResolve(),this._activityResolve=null))}dispose(){window.removeEventListener("keydown",this._onPromptKey),this.promptEl.remove()}}const nb=8,ib=[{locationName:"Pull-up Bars",activityId:"ist",title:"Initial Strength Test"}];function sb(){const i=new Map;for(const e of Oo)for(const t of e.days??[]){const n=t.locationName;i.has(n)||i.set(n,[]);const s=i.get(n);s.some(r=>r.activityId===t.activityId)||s.push({activityId:t.activityId,title:t.title})}for(const e of ib){i.has(e.locationName)||i.set(e.locationName,[]);const t=i.get(e.locationName);t.some(n=>n.activityId===e.activityId)||t.push({activityId:e.activityId,title:e.title})}return i}class rb{constructor({character:e,slotIndex:t,player:n,parsedMap:s,recruitHUD:r}){this.character=_t(e),this.slotIndex=t??e.slotIndex??0,this.player=n,this.parsedMap=s,this.recruitHUD=r,this.locationMap=sb(),this.busy=!1,this.nearbyLocation=null,this.nearbyActivities=[],this.promptEl=document.createElement("div"),this.promptEl.className="activity-prompt sandbox-prompt",this.promptEl.innerHTML=`
      <span class="activity-prompt-text" id="sandbox-prompt-text"></span>
      <div class="sandbox-activity-btns" id="sandbox-activity-btns"></div>
    `,this.promptEl.style.display="none",document.body.appendChild(this.promptEl),this.promptTextEl=this.promptEl.querySelector("#sandbox-prompt-text"),this.activityBtnsEl=this.promptEl.querySelector("#sandbox-activity-btns"),this.activityBtnsEl.addEventListener("click",a=>{const o=a.target.closest("[data-activity]");!o||this.busy||this.triggerActivity(o.dataset.activity,o.dataset.title)})}updateCharacter(e){this.character=_t(e),this.player.character=this.character,this.player.updateAppearance(),this.recruitHUD.update(this.character),ko(this.slotIndex,this.character)}async start(){}updateProximity(){if(this.busy){this.hidePrompt();return}let e=null,t=1/0,n=[];for(const[s,r]of this.locationMap){const a=Cu(this.parsedMap,s);if(!a)continue;const o=Math.hypot(this.player.position.x-a.x,this.player.position.z-a.z);o<=nb&&o<t&&(t=o,e=s,n=r)}e?(this.nearbyLocation=e,this.nearbyActivities=n,this.showPrompt(e,n)):(this.nearbyLocation=null,this.nearbyActivities=[],this.hidePrompt())}showPrompt(e,t){this.promptTextEl.textContent=e,this.activityBtnsEl.innerHTML=t.map(n=>{const r=Lu(n.activityId)?.title??n.title;return`<button type="button" class="btn btn-primary activity-prompt-btn" data-activity="${n.activityId}" data-title="${n.title}">${r}</button>`}).join(""),this.promptEl.style.display="flex"}hidePrompt(){this.promptEl.style.display="none"}async triggerActivity(e,t){if(this.busy)return;this.busy=!0,this.player.inputEnabled=!1,this.hidePrompt();const n=await Iu(this.character,e,{dayId:`sandbox_${e}`,title:t,stats:[]});this.updateCharacter(n),this.busy=!1,this.player.inputEnabled=!0}dispose(){this.promptEl.remove()}}const ab=240,ob=3,lb=3,cb=40,db=15;function ub(){const i=document.createElement("canvas");i.width=16,i.height=16;const e=i.getContext("2d");e.fillStyle="#3d6b8a",e.fillRect(4,2,8,12),e.fillStyle="#6db8e8",e.fillRect(5,4,6,8),e.fillStyle="#8b6914",e.fillRect(6,0,4,3);const t=new Vc(i);return t.magFilter=ht,t.minFilter=ht,t}class hb{constructor({character:e,player:t,mapContainer:n,bounds:s,onCharacterUpdate:r,onRunFailure:a}){this.character=_t(e),this.player=t,this.mapContainer=n,this.bounds=s,this.onCharacterUpdate=r,this.onRunFailure=a,this.canteens=[],this.canteenMeshes=[],this.heatExhaustionBusy=!1,this.runFailureBusy=!1,this._canteenTexture=ub(),this.spawnCanteens()}updateCharacter(e){this.character=_t(e)}get isActive(){return!Er(this.character)&&this.character.campaign?.phase!=="graduated"}spawnCanteens(){this.clearCanteens();const e=lb;for(let t=0;t<e;t++){const n=8+Math.random()*(this.bounds.width-16),s=8+Math.random()*(this.bounds.height-16);this.canteens.push({x:n,z:s,id:`canteen-${Date.now()}-${t}`});const r=new Wc({map:this._canteenTexture,transparent:!0}),a=new Yh(r);a.scale.set(2,2,1),a.position.set(n,1.5,s),this.mapContainer.add(a),this.canteenMeshes.push(a)}}clearCanteens(){for(const e of this.canteenMeshes)this.mapContainer.remove(e),e.material?.dispose();this.canteenMeshes=[],this.canteens=[]}onNewDay(){this.isActive&&this.spawnCanteens()}postActivityDrain(e=[]){if(!this.isActive||!e.includes("endurance"))return;const t=(this.character.campaign.hydration??100)-db;this.applyHydration(t)}applyHydration(e){const t=this.character.campaign.hydration??100,n=Math.max(0,e),s=No(this.character,n);this.character=s,this.onCharacterUpdate(s),n<=0&&t>0&&this.handleDehydration()}async handleDehydration(){if(this.heatExhaustionBusy||this.runFailureBusy)return;if(_u(this.character)){this.runFailureBusy=!0,this.player.inputEnabled=!1,await this.onRunFailure("heat"),this.runFailureBusy=!1;return}this.heatExhaustionBusy=!0,this.player.inputEnabled=!1;const e=Fv(this.character);this.character=e,this.onCharacterUpdate(e),await Vy(),this.player.inputEnabled=!0,this.heatExhaustionBusy=!1}checkCanteenPickup(){const e=this.player.position.x,t=this.player.position.z;for(let n=this.canteens.length-1;n>=0;n--){const s=this.canteens[n];if(Math.hypot(e-s.x,t-s.z)<=ob){const a=Math.min(100,(this.character.campaign.hydration??0)+cb);this.applyHydration(a),this.canteens.splice(n,1);const o=this.canteenMeshes.splice(n,1)[0];o&&(this.mapContainer.remove(o),o.material?.dispose())}}}update(e){if(!this.isActive||!this.player.inputEnabled||this.heatExhaustionBusy||this.runFailureBusy)return;const t=100/ab,n=iy(),s=(this.character.campaign.hydration??100)-t*e*n;this.applyHydration(s),this.checkCanteenPickup()}dispose(){this.clearCanteens(),this._canteenTexture?.dispose()}}const yr=3,jn=24;let Bt,$n,ln,pi,qt,Ki,Wi,_i,Es,Ln,ws;const fb=new uf;let mo=null;async function pb(){for(;;){const i=await uy();if(i.type==="continue"){await pc(i.character);continue}if(i.type==="create"){const e=await _y(i.slotIndex);if(!e)continue;const t=await ky(e);if(!t)continue;if(!ko(i.slotIndex,t)){alert("Could not save character. Check browser storage settings.");continue}await pc(t)}}}function pc(i){return new Promise(e=>{mo=e,gb(i)})}function mb(){Bt?.setAnimationLoop(null),Ln?.dispose(),Ln=null,ws?.dispose(),ws=null,qt?.dispose(),qt=null,Ki=null,pi?.dispose(),pi=null,Wi?.element?.remove(),Wi=null,_i?.remove(),_i=null,Es?.dom?.remove(),Es=null,Bt&&(Bt.domElement.remove(),Bt.dispose(),Bt=null),$n=null,ln=null,window.removeEventListener("resize",Nu);const i=mo;mo=null,i?.()}function gb(i){i=_t(i),Es=new _s,document.body.appendChild(Es.dom),_i=document.createElement("div"),_i.className="location-hud",document.body.appendChild(_i),Wi=Fy(i),document.body.appendChild(Wi.element),Bt=new Jc,Bt.setPixelRatio(1),Bt.setSize(window.innerWidth/yr,window.innerHeight/yr,!1),Bt.domElement.classList.add("game-canvas"),document.body.appendChild(Bt.domElement),$n=new zc,$n.background=new ze(3029800);const e=window.innerWidth/window.innerHeight;ln=new Cs(-jn*e/2,jn*e/2,jn/2,-jn/2,.1,200),pi=new d0(ln,Bt.domElement),pi.enableRotate=!1;const t=new lf;t.intensity=3,t.position.set(1,2,3),$n.add(t);const n=new cf;n.intensity=.5,$n.add(n);const s=new fi;$n.add(s);const r=jl.maps?.find(m=>m.name==="mcrdsd"),a={width:r?.width??60,height:r?.height??50};qt=new Iv(ln,s,i,a),$n.add(qt);const o=a.width/2,l=a.height/2;qt.position.set(o,0,l),Ki=new ov(jl,s,{positionGetter:()=>({x:qt.position.x,z:qt.position.z}),unloadDistance:3}),Ki.setMap("mcrdsd");const c=Ki.getParsedMap(),d=i.slotIndex??0;Er(i)?Ln=new rb({character:i,slotIndex:d,player:qt,parsedMap:c,recruitHUD:Wi}):(Ln=new tb({character:i,slotIndex:d,player:qt,parsedMap:c,recruitHUD:Wi,onRunEnd:()=>mb()}),ws=new hb({character:i,player:qt,mapContainer:s,bounds:a,onCharacterUpdate:m=>Ln.updateCharacter(m),onRunFailure:m=>Ln.handleRunFailure(m)}),Ln.hydrationSystem=ws),Ln.start();const u=40,h=u*Math.SQRT1_2;pi.target.set(o,0,l),ln.position.set(o+h,u*Math.tan(J0),l+h),pi.update(),Bt.setAnimationLoop(_b),window.addEventListener("resize",Nu)}function _b(){const i=fb.getDelta();qt.update(i),ws?.update(i),Ln?.updateProximity(),Ki.update(),pi.update(),Es.update();const e=Ki.getParsedMap();if(e){const t=T0(e,qt.position.x,qt.position.z),s=(e.tiles[t]??[]).map(r=>r.name).filter(Boolean);_i.textContent=s.length>0?s.join(" · "):`Tile ${t}`}else _i.textContent="--";Bt.render($n,ln)}function Nu(){const i=window.innerWidth/window.innerHeight;ln.left=-jn*i/2,ln.right=jn*i/2,ln.top=jn/2,ln.bottom=-jn/2,ln.updateProjectionMatrix(),Bt.setSize(window.innerWidth/yr,window.innerHeight/yr,!1)}pb();
