!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("d3-dispatch")):"function"==typeof define&&define.amd?define(["exports","d3-dispatch"],n):n(t.d3=t.d3||{},t.d3)}(this,function(t,n){"use strict";function e(){function t(t){t.width=t.height=1;var n=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=(M<<5)/n,t.height=m/n;var e=t.getContext("2d");return e.fillStyle=e.strokeStyle="red",e.textAlign="center",{context:e,ratio:n}}function e(t,n,e){for(var r,a,i,o=n.x,u=n.y,f=Math.sqrt(x[0]*x[0]+x[1]*x[1]),l=D(x),h=W()<.5?1:-1,y=-h;(r=l(y+=h))&&(a=~~r[0],i=~~r[1],!(Math.min(Math.abs(a),Math.abs(i))>=f));)if(n.x=o+a,n.y=u+i,!(n.x+n.x0<0||n.y+n.y0<0||n.x+n.x1>x[0]||n.y+n.y1>x[1])&&(!e||!c(n,t,x[0]))&&(!e||s(n,e))){for(var d,v=n.sprite,g=n.width>>5,p=x[0]>>5,M=n.x-(g<<4),m=127&M,w=32-m,b=n.y1-n.y0,z=(n.y+n.y0)*p+(M>>5),I=0;I<b;I++){d=0;for(var k=0;k<=g;k++)t[z+k]|=d<<w|(k<g?(d=v[I*g+k])>>>m:0);z+=p}return delete n.sprite,!0}return!1}var x=[256,256],p=r,b=a,z=o,I=i,k=i,T=u,q=f,D=y,S=[],j=1/0,C=n.dispatch("word","end"),P=null,W=Math.random,_={},A=v;return _.canvas=function(t){return arguments.length?(A=g(t),_):A},_.start=function(){function n(){for(var t=Date.now();Date.now()-t<j&&++u<o&&P;){var n=c[u];n.x=x[0]*(W()+.5)>>1,n.y=x[1]*(W()+.5)>>1,l(r,n,c,u),n.hasText&&e(a,n,i)&&(f.push(n),C.call("word",null,n),i?h(i,n):i=[{x:n.x+n.x0,y:n.y+n.y0},{x:n.x+n.x1,y:n.y+n.y1}],n.x-=x[0]>>1,n.y-=x[1]>>1)}u>=o&&(_.stop(),C.call("end",null,f,i))}var r=t(A()),a=d((x[0]>>5)*x[1]),i=null,o=S.length,u=-1,f=[],c=S.map(function(t,n){return t.text=p.call(this,t,n),t.font=b.call(this,t,n),t.style=I.call(this,t,n),t.weight=k.call(this,t,n),t.rotate=T.call(this,t,n),t.size=~~z.call(this,t,n),t.padding=q.call(this,t,n),t}).sort(function(t,n){return n.size-t.size});return P&&clearInterval(P),P=setInterval(n,0),n(),_},_.stop=function(){return P&&(clearInterval(P),P=null),_},_.timeInterval=function(t){return arguments.length?(j=null==t?1/0:t,_):j},_.words=function(t){return arguments.length?(S=t,_):S},_.size=function(t){return arguments.length?(x=[+t[0],+t[1]],_):x},_.font=function(t){return arguments.length?(b=g(t),_):b},_.fontStyle=function(t){return arguments.length?(I=g(t),_):I},_.fontWeight=function(t){return arguments.length?(k=g(t),_):k},_.rotate=function(t){return arguments.length?(T=g(t),_):T},_.text=function(t){return arguments.length?(p=g(t),_):p},_.spiral=function(t){return arguments.length?(D=w[t]||t,_):D},_.fontSize=function(t){return arguments.length?(z=g(t),_):z},_.padding=function(t){return arguments.length?(q=g(t),_):q},_.random=function(t){return arguments.length?(W=t,_):W},_.on=function(){var t=C.on.apply(C,arguments);return t===C?_:t},_}function r(t){return t.text}function a(){return"serif"}function i(){return"normal"}function o(t){return Math.sqrt(t.value)}function u(){return 30*(~~(6*Math.random())-3)}function f(){return 1}function l(t,n,e,r){if(!n.sprite){var a=t.context,i=t.ratio;a.clearRect(0,0,(M<<5)/i,m/i);var o=0,u=0,f=0,l=e.length;for(--r;++r<l;){n=e[r],a.save(),a.font=n.style+" "+n.weight+" "+~~((n.size+1)/i)+"px "+n.font;var c=a.measureText(n.text+"m").width*i,h=n.size<<1;if(n.rotate){var s=Math.sin(n.rotate*p),y=Math.cos(n.rotate*p),x=c*y,d=c*s,v=h*y,g=h*s;c=Math.max(Math.abs(x+g),Math.abs(x-g))+31>>5<<5,h=~~Math.max(Math.abs(d+v),Math.abs(d-v))}else c=c+31>>5<<5;if(h>f&&(f=h),o+c>=M<<5&&(o=0,u+=f,f=0),u+h>=m)break;a.translate((o+(c>>1))/i,(u+(h>>1))/i),n.rotate&&a.rotate(n.rotate*p),a.fillText(n.text,0,0),n.padding&&(a.lineWidth=2*n.padding,a.strokeText(n.text,0,0)),a.restore(),n.width=c,n.height=h,n.xoff=o,n.yoff=u,n.x1=c>>1,n.y1=h>>1,n.x0=-n.x1,n.y0=-n.y1,n.hasText=!0,o+=c}for(var w=a.getImageData(0,0,(M<<5)/i,m/i).data,b=[];--r>=0;)if(n=e[r],n.hasText){for(var c=n.width,z=c>>5,h=n.y1-n.y0,I=0;I<h*z;I++)b[I]=0;if(o=n.xoff,null==o)return;u=n.yoff;for(var k=0,T=-1,q=0;q<h;q++){for(var I=0;I<c;I++){var D=z*q+(I>>5),S=w[(u+q)*(M<<5)+(o+I)<<2]?1<<31-I%32:0;b[D]|=S,k|=S}k?T=q:(n.y0++,h--,q--,u++)}n.y1=n.y0+T,n.sprite=b.slice(0,(n.y1-n.y0)*z)}}}function c(t,n,e){e>>=5;for(var r,a=t.sprite,i=t.width>>5,o=t.x-(i<<4),u=127&o,f=32-u,l=t.y1-t.y0,c=(t.y+t.y0)*e+(o>>5),h=0;h<l;h++){r=0;for(var s=0;s<=i;s++)if((r<<f|(s<i?(r=a[h*i+s])>>>u:0))&n[c+s])return!0;c+=e}return!1}function h(t,n){var e=t[0],r=t[1];n.x+n.x0<e.x&&(e.x=n.x+n.x0),n.y+n.y0<e.y&&(e.y=n.y+n.y0),n.x+n.x1>r.x&&(r.x=n.x+n.x1),n.y+n.y1>r.y&&(r.y=n.y+n.y1)}function s(t,n){return t.x+t.x1>n[0].x&&t.x+t.x0<n[1].x&&t.y+t.y1>n[0].y&&t.y+t.y0<n[1].y}function y(t){var n=t[0]/t[1];return function(t){return[n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function x(t){var n=4,e=n*t[0]/t[1],r=0,a=0;return function(t){var i=t<0?-1:1;switch(Math.sqrt(1+4*i*t)-i&3){case 0:r+=e;break;case 1:a+=n;break;case 2:r-=e;break;default:a-=n}return[r,a]}}function d(t){for(var n=[],e=-1;++e<t;)n[e]=0;return n}function v(){return document.createElement("canvas")}function g(t){return"function"==typeof t?t:function(){return t}}n="default"in n?n.default:n;var p=Math.PI/180,M=64,m=2048,w={archimedean:y,rectangular:x};t.cloud=e,Object.defineProperty(t,"__esModule",{value:!0})});
