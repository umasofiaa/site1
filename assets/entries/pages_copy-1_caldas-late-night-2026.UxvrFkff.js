import{r as o,R as N,j as e,y as d,a as h,i as g,P as A,b as E,c as S}from"../chunks/chunk-CdtlnWYI.js";/* empty css                      */function k(...s){return s.length===1&&s[0]?s[0]:n=>{for(let t of s)typeof t=="function"?t(n):t!=null&&(t.current=n)}}const L=()=>document.readyState==="complete"||document.readyState==="interactive",f=[];let b=!1;const C=()=>{if(L()===!1){console.error("DOMContentLoaded event has not been fired yet");return}if(b)return;b=!0;const s=document.addEventListener,n=window.addEventListener,t=new Event("DOMContentLoaded"),a=new Event("load");window.addEventListener=(c,i,l)=>{c==="DOMContentLoaded"?f.push(()=>i.call(window,t)):(c==="load"&&f.push(()=>i.call(window,a)),n.call(window,c,i,l))},document.addEventListener=(c,i,l)=>{c==="DOMContentLoaded"?f.push(()=>i.call(document,t)):s.call(document,c,i,l)}},T=()=>{for(const s of f)s();f.length=0},I={scriptTestIdPrefix:"client-"},M=s=>new Promise((n,t)=>{const a=document.createElement("script"),c=s.hasAttribute("src"),i=s.type==="module";for(const{name:l,value:r}of s.attributes)a.setAttribute(l,r);if(a.dataset.testid!==void 0&&(a.dataset.testid=`${I.scriptTestIdPrefix}${a.dataset.testid}`),c)a.addEventListener("load",()=>{n()}),a.addEventListener("error",t);else{if(i){const l=new Blob([s.innerText],{type:"text/javascript"}),r=URL.createObjectURL(l);import(r).then(n).catch(t).finally(()=>{URL.revokeObjectURL(r)});return}a.textContent=s.innerText}s.replaceWith(a),c===!1&&n()}),p=[];let x=!1;const P=async s=>{if(p.push(...s),await Promise.resolve(),!x){for(C(),x=!0;p.length>0;)await p.shift()();T(),x=!1}},z=s=>{const n=s.querySelectorAll("script"),t=[],a=[];n.forEach(c=>{(c.hasAttribute("async")?a:t).push(()=>M(c))});for(const c of a)c();P(t)},D=s=>{const{code:n,innerRef:t,...a}=s;return e.jsx("div",{ref:t,...a,style:{display:"block",padding:20},children:'Open the "Settings" panel to insert HTML code.'})},j=()=>o.useSyncExternalStore(()=>()=>{},()=>!1,()=>!0),w=s=>{if(!j())return s.children},u=s=>{const{code:n,innerRef:t,...a}=s,c=o.useRef(null),i=o.useRef(!0),l=o.useMemo(()=>({__html:n??""}),[n]);return o.useEffect(()=>{const r=c.current;r&&i.current&&(i.current=!1,z(r))},[]),e.jsx("div",{...a,ref:k(t,c),dangerouslySetInnerHTML:l})},y=s=>{const{code:n,innerRef:t,...a}=s;return e.jsx("div",{...a,ref:t,dangerouslySetInnerHTML:{__html:n??""}})},O=y,m=o.forwardRef((s,n)=>{const{code:t,executeScriptOnCanvas:a,clientOnly:c,children:i,...l}=s,{renderer:r}=o.useContext(N),$=j(),[_]=o.useState($);return t===void 0||String(t).trim().length===0?e.jsx(D,{innerRef:n,...l}):_?c!==!0?e.jsx(y,{innerRef:n,code:t,...l}):e.jsx(w,{children:e.jsx(u,{innerRef:n,code:t,...l})}):r==="canvas"&&a!==!0?e.jsx(w,{children:e.jsx(O,{innerRef:n,code:t,...l})}):e.jsx(w,{children:e.jsx(u,{innerRef:n,code:t,...l},t)})});m.displayName="HtmlEmbed";const v=void 0,B=[{id:"ExCbWribcXYJdfJKIgEOF"},{id:"vCrJnhp2CEAR7MPf_OSkk",maxWidth:1100},{id:"PoJFr776r3srFab_c5-2g",maxWidth:991},{id:"sgfYkoDleP5OB8oRl3RfQ",maxWidth:850},{id:"8ZYcmXcFEEN8qyHJwLhzd",maxWidth:479}],R=void 0,H=["InstrumentSans-VariableFont_wdth_wght_bjkMSSnl1UaMa3tkniNEz.ttf"],F=[],W=s=>e.jsxs("body",{className:"w-element w-element-14",children:[e.jsx("div",{className:"w-element w-home-10",children:e.jsxs("div",{className:"w-element w-nav-mobile-3",children:[e.jsx("a",{href:"/",className:"w-element w-nav-img-3",children:e.jsx(d,{className:"w-image w-image-20"})}),e.jsxs("ul",{className:"w-element w-nav-list-3",children:[e.jsx("li",{className:"w-element w-home-11",children:e.jsx("a",{href:"/",className:"w-element w-home-12",children:"Home"})}),e.jsx("li",{className:"w-element w-experiments-7",children:e.jsx("a",{className:"w-element w-experiments-8",children:"Experiments"})}),e.jsx("li",{className:"w-element w-about-8",children:e.jsx("a",{className:"w-element w-about-9",children:"About"})})]})]})}),e.jsx("div",{className:"w-element w-footer-mobile-3",children:e.jsx(d,{className:"w-image w-image-19"})}),e.jsx(m,{code:`<style type="text/css">
/*! 
 * Base CSS for pdf2htmlEX
 * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> 
 * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE
 */#sidebar{position:absolute;top:0;left:0;bottom:0;width:250px;padding:0;margin:0;overflow:auto}#page-container{position:absolute;top:0;left:0;margin:0;padding:0;border:0}@media screen{#sidebar.opened+#page-container{left:250px}#page-container{bottom:0;right:0;overflow:auto}.loading-indicator{display:none}.loading-indicator.active{display:block;position:absolute;width:64px;height:64px;top:50%;left:50%;margin-top:-32px;margin-left:-32px}.loading-indicator img{position:absolute;top:0;left:0;bottom:0;right:0}}@media print{@page{margin:0}html{margin:0}body{margin:0;-webkit-print-color-adjust:exact}#sidebar{display:none}#page-container{width:auto;height:auto;overflow:visible;background-color:transparent}.d{display:none}}.pf{position:relative;background-color:white;overflow:hidden;margin:0;border:0}.pc{position:absolute;border:0;padding:0;margin:0;top:0;left:0;width:100%;height:100%;overflow:hidden;display:block;transform-origin:0 0;-ms-transform-origin:0 0;-webkit-transform-origin:0 0}.pc.opened{display:block}.bf{position:absolute;border:0;margin:0;top:0;bottom:0;width:100%;height:100%;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}.bi{position:absolute;border:0;margin:0;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}@media print{.pf{margin:0;box-shadow:none;page-break-after:always;page-break-inside:avoid}@-moz-document url-prefix(){.pf{overflow:visible;border:1px solid #fff}.pc{overflow:visible}}}.c{position:absolute;border:0;padding:0;margin:0;overflow:hidden;display:block}.t{position:absolute;white-space:pre;font-size:1px;transform-origin:0 100%;-ms-transform-origin:0 100%;-webkit-transform-origin:0 100%;unicode-bidi:bidi-override;-moz-font-feature-settings:"liga" 0}.t:after{content:''}.t:before{content:'';display:inline-block}.t span{position:relative;unicode-bidi:bidi-override}._{display:inline-block;color:transparent;z-index:-1}::selection{background:rgba(127,255,255,0.4)}::-moz-selection{background:rgba(127,255,255,0.4)}.pi{display:none}.d{position:absolute;transform-origin:0 100%;-ms-transform-origin:0 100%;-webkit-transform-origin:0 100%}.it{border:0;background-color:rgba(255,255,255,0.0)}.ir:hover{cursor:pointer}</style>`,className:"w-html-embed"}),e.jsx(m,{code:`<style type="text/css">
/*! 
 * Fancy styles for pdf2htmlEX
 * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> 
 * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE
 */@keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes swing{0{transform:rotate(0)}10%{transform:rotate(0)}90%{transform:rotate(720deg)}100%{transform:rotate(720deg)}}@-webkit-keyframes swing{0{-webkit-transform:rotate(0)}10%{-webkit-transform:rotate(0)}90%{-webkit-transform:rotate(720deg)}100%{-webkit-transform:rotate(720deg)}}@media screen{#sidebar{background-color:#2f3236;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+")}#outline{font-family:Georgia,Times,"Times New Roman",serif;font-size:13px;margin:2em 1em}#outline ul{padding:0}#outline li{list-style-type:none;margin:1em 0}#outline li>ul{margin-left:1em}#outline a,#outline a:visited,#outline a:hover,#outline a:active{line-height:1.2;color:#e8e8e8;text-overflow:ellipsis;white-space:nowrap;text-decoration:none;display:block;overflow:hidden;outline:0}#outline a:hover{color:#0cf}#page-container{background-color:#9e9e9e;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");-webkit-transition:left 500ms;transition:left 500ms}.pf{margin:13px auto;box-shadow:1px 1px 3px 1px #333;border-collapse:separate}.pc.opened{-webkit-animation:fadein 100ms;animation:fadein 100ms}.loading-indicator.active{-webkit-animation:swing 1.5s ease-in-out .01s infinite alternate none;animation:swing 1.5s ease-in-out .01s infinite alternate none}.checked{background:no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goQDSYgDiGofgAAAslJREFUOMvtlM9LFGEYx7/vvOPM6ywuuyPFihWFBUsdNnA6KLIh+QPx4KWExULdHQ/9A9EfUodYmATDYg/iRewQzklFWxcEBcGgEplDkDtI6sw4PzrIbrOuedBb9MALD7zv+3m+z4/3Bf7bZS2bzQIAcrmcMDExcTeXy10DAFVVAQDksgFUVZ1ljD3yfd+0LOuFpmnvVVW9GHhkZAQcxwkNDQ2FSCQyRMgJxnVdy7KstKZpn7nwha6urqqfTqfPBAJAuVymlNLXoigOhfd5nmeiKL5TVTV+lmIKwAOA7u5u6Lped2BsbOwjY6yf4zgQQkAIAcedaPR9H67r3uYBQFEUFItFtLe332lpaVkUBOHK3t5eRtf1DwAwODiIubk5DA8PM8bYW1EU+wEgCIJqsCAIQAiB7/u253k2BQDDMJBKpa4mEon5eDx+UxAESJL0uK2t7XosFlvSdf0QAEmlUnlRFJ9Waho2Qghc1/U9z3uWz+eX+Wr+lL6SZfleEAQIggA8z6OpqSknimIvYyybSCReMsZ6TislhCAIAti2Dc/zejVNWwCAavN8339j27YbTg0AGGM3WltbP4WhlRWq6Q/btrs1TVsYHx+vNgqKoqBUKn2NRqPFxsbGJzzP05puUlpt0ukyOI6z7zjOwNTU1OLo6CgmJyf/gA3DgKIoWF1d/cIY24/FYgOU0pp0z/Ityzo8Pj5OTk9PbwHA+vp6zWghDC+VSiuRSOQgGo32UErJ38CO42wdHR09LBQK3zKZDDY2NupmFmF4R0cHVlZWlmRZ/iVJUn9FeWWcCCE4ODjYtG27Z2Zm5juAOmgdGAB2d3cBADs7O8uSJN2SZfl+WKlpmpumaT6Yn58vn/fs6XmbhmHMNjc3tzDGFI7jYJrm5vb29sDa2trPC/9aiqJUy5pOp4f6+vqeJ5PJBAB0dnZe/t8NBajx/z37Df5OGX8d13xzAAAAAElFTkSuQmCC)}}</style>`,className:"w-html-embed"}),e.jsx(m,{code:`<style type="text/css">
.ff0{font-family:sans-serif;visibility:hidden;}
.ff1{font-family:sans-serif;visibility:hidden;}
.ff2{font-family:sans-serif;visibility:hidden;}
.m0{transform:matrix(0.250000,0.000000,0.000000,0.250000,0,0);-ms-transform:matrix(0.250000,0.000000,0.000000,0.250000,0,0);-webkit-transform:matrix(0.250000,0.000000,0.000000,0.250000,0,0);}
.m1{transform:none;-ms-transform:none;-webkit-transform:none;}
.v0{vertical-align:0.000000px;}
.ls0{letter-spacing:0.000000px;}
.sc_{text-shadow:none;}
.sc0{text-shadow:-0.015em 0 transparent,0 0.015em transparent,0.015em 0 transparent,0 -0.015em  transparent;}
@media screen and (-webkit-min-device-pixel-ratio:0){
.sc_{-webkit-text-stroke:0px transparent;}
.sc0{-webkit-text-stroke:0.015em transparent;text-shadow:none;}
}
.ws0{word-spacing:0.000000px;}
._0{margin-left:-15.991560px;}
._1{margin-left:-4.791560px;}
.fc1{color:transparent;}
.fc0{color:rgb(0,0,0);}
.fs4{font-size:40.000000px;}
.fs3{font-size:44.000000px;}
.fs2{font-size:48.000000px;}
.fs1{font-size:56.000000px;}
.fs0{font-size:64.000000px;}
.fs5{font-size:104.000000px;}
.y0{bottom:0.000000px;}
.y1c{bottom:40.000000px;}
.y2a{bottom:43.000000px;}
.y1b{bottom:54.000000px;}
.y29{bottom:58.000000px;}
.y1a{bottom:68.000000px;}
.y19{bottom:82.000000px;}
.y18{bottom:96.000000px;}
.y27{bottom:98.000000px;}
.y1e{bottom:115.000000px;}
.y28{bottom:122.000000px;}
.y17{bottom:149.000000px;}
.y26{bottom:154.000000px;}
.y16{bottom:162.000000px;}
.y15{bottom:175.000000px;}
.y1d{bottom:193.000000px;}
.y7{bottom:225.000000px;}
.ya{bottom:256.000000px;}
.y8{bottom:290.000000px;}
.y11{bottom:297.000000px;}
.y9{bottom:311.000000px;}
.y13{bottom:316.000000px;}
.y10{bottom:346.000000px;}
.yb{bottom:354.000000px;}
.y12{bottom:364.000000px;}
.y14{bottom:396.000000px;}
.y25{bottom:425.000000px;}
.y24{bottom:440.000000px;}
.yf{bottom:468.000000px;}
.y23{bottom:471.000000px;}
.ye{bottom:482.000000px;}
.y22{bottom:489.000000px;}
.y21{bottom:532.000000px;}
.yc{bottom:548.000000px;}
.yd{bottom:565.000000px;}
.y20{bottom:593.000000px;}
.y6{bottom:603.000000px;}
.y1f{bottom:623.000000px;}
.y4{bottom:634.000000px;}
.y5{bottom:675.000000px;}
.y3{bottom:705.000000px;}
.y2{bottom:723.000000px;}
.y1{bottom:766.000000px;}
.h5{height:38.000000px;}
.h4{height:41.800000px;}
.h3{height:45.600000px;}
.h2{height:53.200000px;}
.h1{height:60.800000px;}
.h6{height:98.800000px;}
.h0{height:826.000000px;}
.w0{width:595.000000px;}
.x0{left:0.000000px;}
.x2{left:25.000000px;}
.x4{left:31.778520px;}
.xf{left:39.789100px;}
.x3{left:45.335200px;}
.xd{left:47.183600px;}
.xe{left:54.578130px;}
.x12{left:57.043000px;}
.xa{left:65.669920px;}
.x10{left:69.367300px;}
.x5{left:72.448420px;}
.x11{left:76.761830px;}
.x6{left:79.226550px;}
.x13{left:89.086000px;}
.xc{left:92.783230px;}
.x7{left:106.339850px;}
.x8{left:113.118370px;}
.x9{left:119.896500px;}
.xb{left:133.453140px;}
.x1{left:240.000000px;}
.x16{left:247.394530px;}
.x1d{left:262.183620px;}
.x1e{left:269.578150px;}
.x20{left:276.972630px;}
.x21{left:284.367160px;}
.x14{left:289.296900px;}
.x25{left:291.761750px;}
.x22{left:299.156260px;}
.x23{left:306.550790px;}
.x15{left:309.015700px;}
.x1f{left:334.896500px;}
.x17{left:336.128930px;}
.x18{left:343.523460px;}
.x24{left:350.918020px;}
.x19{left:432.257860px;}
.x1a{left:439.652390px;}
.x1b{left:454.441490px;}
.x1c{left:461.836020px;}
@media print{
.v0{vertical-align:0.000000pt;}
.ls0{letter-spacing:0.000000pt;}
.ws0{word-spacing:0.000000pt;}
._0{margin-left:-21.322080pt;}
._1{margin-left:-6.388747pt;}
.fs4{font-size:53.333333pt;}
.fs3{font-size:58.666667pt;}
.fs2{font-size:64.000000pt;}
.fs1{font-size:74.666667pt;}
.fs0{font-size:85.333333pt;}
.fs5{font-size:138.666667pt;}
.y0{bottom:0.000000pt;}
.y1c{bottom:53.333333pt;}
.y2a{bottom:57.333333pt;}
.y1b{bottom:72.000000pt;}
.y29{bottom:77.333333pt;}
.y1a{bottom:90.666667pt;}
.y19{bottom:109.333333pt;}
.y18{bottom:128.000000pt;}
.y27{bottom:130.666667pt;}
.y1e{bottom:153.333333pt;}
.y28{bottom:162.666667pt;}
.y17{bottom:198.666667pt;}
.y26{bottom:205.333333pt;}
.y16{bottom:216.000000pt;}
.y15{bottom:233.333333pt;}
.y1d{bottom:257.333333pt;}
.y7{bottom:300.000000pt;}
.ya{bottom:341.333333pt;}
.y8{bottom:386.666667pt;}
.y11{bottom:396.000000pt;}
.y9{bottom:414.666667pt;}
.y13{bottom:421.333333pt;}
.y10{bottom:461.333333pt;}
.yb{bottom:472.000000pt;}
.y12{bottom:485.333333pt;}
.y14{bottom:528.000000pt;}
.y25{bottom:566.666667pt;}
.y24{bottom:586.666667pt;}
.yf{bottom:624.000000pt;}
.y23{bottom:628.000000pt;}
.ye{bottom:642.666667pt;}
.y22{bottom:652.000000pt;}
.y21{bottom:709.333333pt;}
.yc{bottom:730.666667pt;}
.yd{bottom:753.333333pt;}
.y20{bottom:790.666667pt;}
.y6{bottom:804.000000pt;}
.y1f{bottom:830.666667pt;}
.y4{bottom:845.333333pt;}
.y5{bottom:900.000000pt;}
.y3{bottom:940.000000pt;}
.y2{bottom:964.000000pt;}
.y1{bottom:1021.333333pt;}
.h5{height:50.666667pt;}
.h4{height:55.733333pt;}
.h3{height:60.800000pt;}
.h2{height:70.933333pt;}
.h1{height:81.066667pt;}
.h6{height:131.733333pt;}
.h0{height:1101.333333pt;}
.w0{width:793.333333pt;}
.x0{left:0.000000pt;}
.x2{left:33.333333pt;}
.x4{left:42.371360pt;}
.xf{left:53.052133pt;}
.x3{left:60.446933pt;}
.xd{left:62.911467pt;}
.xe{left:72.770840pt;}
.x12{left:76.057333pt;}
.xa{left:87.559893pt;}
.x10{left:92.489733pt;}
.x5{left:96.597893pt;}
.x11{left:102.349107pt;}
.x6{left:105.635400pt;}
.x13{left:118.781333pt;}
.xc{left:123.710973pt;}
.x7{left:141.786467pt;}
.x8{left:150.824493pt;}
.x9{left:159.862000pt;}
.xb{left:177.937520pt;}
.x1{left:320.000000pt;}
.x16{left:329.859373pt;}
.x1d{left:349.578160pt;}
.x1e{left:359.437533pt;}
.x20{left:369.296840pt;}
.x21{left:379.156213pt;}
.x14{left:385.729200pt;}
.x25{left:389.015667pt;}
.x22{left:398.875013pt;}
.x23{left:408.734387pt;}
.x15{left:412.020933pt;}
.x1f{left:446.528667pt;}
.x17{left:448.171907pt;}
.x18{left:458.031280pt;}
.x24{left:467.890693pt;}
.x19{left:576.343813pt;}
.x1a{left:586.203187pt;}
.x1b{left:605.921987pt;}
.x1c{left:615.781360pt;}
}
</style>`,className:"w-html-embed"}),e.jsx(m,{clientOnly:!0,code:`<script>
/*
 Copyright 2012 Mozilla Foundation 
 Copyright 2013 Lu Wang <coolwanglu@gmail.com>
 Apachine License Version 2.0 
*/
(function(){function b(a,b,e,f){var c=(a.className||"").split(/\\s+/g);""===c[0]&&c.shift();var d=c.indexOf(b);0>d&&e&&c.push(b);0<=d&&f&&c.splice(d,1);a.className=c.join(" ");return 0<=d}if(!("classList"in document.createElement("div"))){var e={add:function(a){b(this.element,a,!0,!1)},contains:function(a){return b(this.element,a,!1,!1)},remove:function(a){b(this.element,a,!1,!0)},toggle:function(a){b(this.element,a,!0,!0)}};Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){if(this._classList)return this._classList;
var a=Object.create(e,{element:{value:this,writable:!1,enumerable:!0}});Object.defineProperty(this,"_classList",{value:a,writable:!1,enumerable:!1});return a},enumerable:!0})}})();
<\/script>`,className:"w-html-embed"}),e.jsx(m,{clientOnly:!0,code:`<script>
(function(){/*
 pdf2htmlEX.js: Core UI functions for pdf2htmlEX 
 Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> and other contributors 
 https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE 
*/
var pdf2htmlEX=window.pdf2htmlEX=window.pdf2htmlEX||{},CSS_CLASS_NAMES={page_frame:"pf",page_content_box:"pc",page_data:"pi",background_image:"bi",link:"l",input_radio:"ir",__dummy__:"no comma"},DEFAULT_CONFIG={container_id:"page-container",sidebar_id:"sidebar",outline_id:"outline",loading_indicator_cls:"loading-indicator",preload_pages:3,render_timeout:100,scale_step:0.9,key_handler:!0,hashchange_handler:!0,view_history_handler:!0,__dummy__:"no comma"},EPS=1E-6;
function invert(a){var b=a[0]*a[3]-a[1]*a[2];return[a[3]/b,-a[1]/b,-a[2]/b,a[0]/b,(a[2]*a[5]-a[3]*a[4])/b,(a[1]*a[4]-a[0]*a[5])/b]}function transform(a,b){return[a[0]*b[0]+a[2]*b[1]+a[4],a[1]*b[0]+a[3]*b[1]+a[5]]}function get_page_number(a){return parseInt(a.getAttribute("data-page-no"),16)}function disable_dragstart(a){for(var b=0,c=a.length;b<c;++b)a[b].addEventListener("dragstart",function(){return!1},!1)}
function clone_and_extend_objs(a){for(var b={},c=0,e=arguments.length;c<e;++c){var h=arguments[c],d;for(d in h)h.hasOwnProperty(d)&&(b[d]=h[d])}return b}
function Page(a){if(a){this.shown=this.loaded=!1;this.page=a;this.num=get_page_number(a);this.original_height=a.clientHeight;this.original_width=a.clientWidth;var b=a.getElementsByClassName(CSS_CLASS_NAMES.page_content_box)[0];b&&(this.content_box=b,this.original_scale=this.cur_scale=this.original_height/b.clientHeight,this.page_data=JSON.parse(a.getElementsByClassName(CSS_CLASS_NAMES.page_data)[0].getAttribute("data-data")),this.ctm=this.page_data.ctm,this.ictm=invert(this.ctm),this.loaded=!0)}}
Page.prototype={hide:function(){this.loaded&&this.shown&&(this.content_box.classList.remove("opened"),this.shown=!1)},show:function(){this.loaded&&!this.shown&&(this.content_box.classList.add("opened"),this.shown=!0)},rescale:function(a){this.cur_scale=0===a?this.original_scale:a;this.loaded&&(a=this.content_box.style,a.msTransform=a.webkitTransform=a.transform="scale("+this.cur_scale.toFixed(3)+")");a=this.page.style;a.height=this.original_height*this.cur_scale+"px";a.width=this.original_width*this.cur_scale+
"px"},view_position:function(){var a=this.page,b=a.parentNode;return[b.scrollLeft-a.offsetLeft-a.clientLeft,b.scrollTop-a.offsetTop-a.clientTop]},height:function(){return this.page.clientHeight},width:function(){return this.page.clientWidth}};function Viewer(a){this.config=clone_and_extend_objs(DEFAULT_CONFIG,0<arguments.length?a:{});this.pages_loading=[];this.init_before_loading_content();var b=this;document.addEventListener("DOMContentLoaded",function(){b.init_after_loading_content()},!1)}
Viewer.prototype={scale:1,cur_page_idx:0,first_page_idx:0,init_before_loading_content:function(){this.pre_hide_pages()},initialize_radio_button:function(){for(var a=document.getElementsByClassName(CSS_CLASS_NAMES.input_radio),b=0;b<a.length;b++)a[b].addEventListener("click",function(){this.classList.toggle("checked")})},init_after_loading_content:function(){this.sidebar=document.getElementById(this.config.sidebar_id);this.outline=document.getElementById(this.config.outline_id);this.container=document.getElementById(this.config.container_id);
this.loading_indicator=document.getElementsByClassName(this.config.loading_indicator_cls)[0];for(var a=!0,b=this.outline.childNodes,c=0,e=b.length;c<e;++c)if("ul"===b[c].nodeName.toLowerCase()){a=!1;break}a||this.sidebar.classList.add("opened");this.find_pages();if(0!=this.pages.length){disable_dragstart(document.getElementsByClassName(CSS_CLASS_NAMES.background_image));this.config.key_handler&&this.register_key_handler();var h=this;this.config.hashchange_handler&&window.addEventListener("hashchange",
function(a){h.navigate_to_dest(document.location.hash.substring(1))},!1);this.config.view_history_handler&&window.addEventListener("popstate",function(a){a.state&&h.navigate_to_dest(a.state)},!1);this.container.addEventListener("scroll",function(){h.update_page_idx();h.schedule_render(!0)},!1);[this.outline].concat(Array.from(this.container.querySelectorAll("a.l"))).forEach(function(a){a.addEventListener("click",h.link_handler.bind(h),!1)});this.initialize_radio_button();this.render()}},find_pages:function(){for(var a=
[],b={},c=this.container.childNodes,e=0,h=c.length;e<h;++e){var d=c[e];d.nodeType===Node.ELEMENT_NODE&&d.classList.contains(CSS_CLASS_NAMES.page_frame)&&(d=new Page(d),a.push(d),b[d.num]=a.length-1)}this.pages=a;this.page_map=b},load_page:function(a,b,c){var e=this.pages;if(!(a>=e.length||(e=e[a],e.loaded||this.pages_loading[a]))){var e=e.page,h=e.getAttribute("data-page-url");if(h){this.pages_loading[a]=!0;var d=e.getElementsByClassName(this.config.loading_indicator_cls)[0];"undefined"===typeof d&&
(d=this.loading_indicator.cloneNode(!0),d.classList.add("active"),e.appendChild(d));var f=this,g=new XMLHttpRequest;g.open("GET",h,!0);g.onload=function(){if(200===g.status||0===g.status){var b=document.createElement("div");b.innerHTML=g.responseText;for(var d=null,b=b.childNodes,e=0,h=b.length;e<h;++e){var p=b[e];if(p.nodeType===Node.ELEMENT_NODE&&p.classList.contains(CSS_CLASS_NAMES.page_frame)){d=p;break}}b=f.pages[a];f.container.replaceChild(d,b.page);b=new Page(d);f.pages[a]=b;b.hide();b.rescale(f.scale);
disable_dragstart(d.getElementsByClassName(CSS_CLASS_NAMES.background_image));f.schedule_render(!1);c&&c(b)}delete f.pages_loading[a]};g.send(null)}void 0===b&&(b=this.config.preload_pages);0<--b&&(f=this,setTimeout(function(){f.load_page(a+1,b)},0))}},pre_hide_pages:function(){var a="@media screen{."+CSS_CLASS_NAMES.page_content_box+"{display:none;}}",b=document.createElement("style");b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a));document.head.appendChild(b)},render:function(){for(var a=
this.container,b=a.scrollTop,c=a.clientHeight,a=b-c,b=b+c+c,c=this.pages,e=0,h=c.length;e<h;++e){var d=c[e],f=d.page,g=f.offsetTop+f.clientTop,f=g+f.clientHeight;g<=b&&f>=a?d.loaded?d.show():this.load_page(e):d.hide()}},update_page_idx:function(){var a=this.pages,b=a.length;if(!(2>b)){for(var c=this.container,e=c.scrollTop,c=e+c.clientHeight,h=-1,d=b,f=d-h;1<f;){var g=h+Math.floor(f/2),f=a[g].page;f.offsetTop+f.clientTop+f.clientHeight>=e?d=g:h=g;f=d-h}this.first_page_idx=d;for(var g=h=this.cur_page_idx,
k=0;d<b;++d){var f=a[d].page,l=f.offsetTop+f.clientTop,f=f.clientHeight;if(l>c)break;f=(Math.min(c,l+f)-Math.max(e,l))/f;if(d===h&&Math.abs(f-1)<=EPS){g=h;break}f>k&&(k=f,g=d)}this.cur_page_idx=g}},schedule_render:function(a){if(void 0!==this.render_timer){if(!a)return;clearTimeout(this.render_timer)}var b=this;this.render_timer=setTimeout(function(){delete b.render_timer;b.render()},this.config.render_timeout)},register_key_handler:function(){var a=this;window.addEventListener("DOMMouseScroll",function(b){if(b.ctrlKey){b.preventDefault();
var c=a.container,e=c.getBoundingClientRect(),c=[b.clientX-e.left-c.clientLeft,b.clientY-e.top-c.clientTop];a.rescale(Math.pow(a.config.scale_step,b.detail),!0,c)}},!1);window.addEventListener("keydown",function(b){var c=!1,e=b.ctrlKey||b.metaKey,h=b.altKey;switch(b.keyCode){case 61:case 107:case 187:e&&(a.rescale(1/a.config.scale_step,!0),c=!0);break;case 173:case 109:case 189:e&&(a.rescale(a.config.scale_step,!0),c=!0);break;case 48:e&&(a.rescale(0,!1),c=!0);break;case 33:h?a.scroll_to(a.cur_page_idx-
1):a.container.scrollTop-=a.container.clientHeight;c=!0;break;case 34:h?a.scroll_to(a.cur_page_idx+1):a.container.scrollTop+=a.container.clientHeight;c=!0;break;case 35:a.container.scrollTop=a.container.scrollHeight;c=!0;break;case 36:a.container.scrollTop=0,c=!0}c&&b.preventDefault()},!1)},rescale:function(a,b,c){var e=this.scale;this.scale=a=0===a?1:b?e*a:a;c||(c=[0,0]);b=this.container;c[0]+=b.scrollLeft;c[1]+=b.scrollTop;for(var h=this.pages,d=h.length,f=this.first_page_idx;f<d;++f){var g=h[f].page;
if(g.offsetTop+g.clientTop>=c[1])break}g=f-1;0>g&&(g=0);var g=h[g].page,k=g.clientWidth,f=g.clientHeight,l=g.offsetLeft+g.clientLeft,m=c[0]-l;0>m?m=0:m>k&&(m=k);k=g.offsetTop+g.clientTop;c=c[1]-k;0>c?c=0:c>f&&(c=f);for(f=0;f<d;++f)h[f].rescale(a);b.scrollLeft+=m/e*a+g.offsetLeft+g.clientLeft-m-l;b.scrollTop+=c/e*a+g.offsetTop+g.clientTop-c-k;this.schedule_render(!0)},fit_width:function(){var a=this.cur_page_idx;this.rescale(this.container.clientWidth/this.pages[a].width(),!0);this.scroll_to(a)},fit_height:function(){var a=
this.cur_page_idx;this.rescale(this.container.clientHeight/this.pages[a].height(),!0);this.scroll_to(a)},get_containing_page:function(a){for(;a;){if(a.nodeType===Node.ELEMENT_NODE&&a.classList.contains(CSS_CLASS_NAMES.page_frame)){a=get_page_number(a);var b=this.page_map;return a in b?this.pages[b[a]]:null}a=a.parentNode}return null},link_handler:function(a){var b=a.target,c=b.getAttribute("data-dest-detail");c||(b=a.currentTarget,c=b.getAttribute("data-dest-detail"));if(c){if(this.config.view_history_handler)try{var e=
this.get_current_view_hash();window.history.replaceState(e,"","#"+e);window.history.pushState(c,"","#"+c)}catch(h){}this.navigate_to_dest(c,this.get_containing_page(b));a.preventDefault()}},navigate_to_dest:function(a,b){try{var c=JSON.parse(a)}catch(e){return}if(c instanceof Array){var h=c[0],d=this.page_map;if(h in d){for(var f=d[h],h=this.pages[f],d=2,g=c.length;d<g;++d){var k=c[d];if(null!==k&&"number"!==typeof k)return}for(;6>c.length;)c.push(null);var g=b||this.pages[this.cur_page_idx],d=g.view_position(),
d=transform(g.ictm,[d[0],g.height()-d[1]]),g=this.scale,l=[0,0],m=!0,k=!1,n=this.scale;switch(c[1]){case "XYZ":l=[null===c[2]?d[0]:c[2]*n,null===c[3]?d[1]:c[3]*n];g=c[4];if(null===g||0===g)g=this.scale;k=!0;break;case "Fit":case "FitB":l=[0,0];k=!0;break;case "FitH":case "FitBH":l=[0,null===c[2]?d[1]:c[2]*n];k=!0;break;case "FitV":case "FitBV":l=[null===c[2]?d[0]:c[2]*n,0];k=!0;break;case "FitR":l=[c[2]*n,c[5]*n],m=!1,k=!0}if(k){this.rescale(g,!1);var p=this,c=function(a){l=transform(a.ctm,l);m&&
(l[1]=a.height()-l[1]);p.scroll_to(f,l)};h.loaded?c(h):(this.load_page(f,void 0,c),this.scroll_to(f))}}}},scroll_to:function(a,b){var c=this.pages;if(!(0>a||a>=c.length)){c=c[a].view_position();void 0===b&&(b=[0,0]);var e=this.container;e.scrollLeft+=b[0]-c[0];e.scrollTop+=b[1]-c[1]}},get_current_view_hash:function(){var a=[],b=this.pages[this.cur_page_idx];a.push(b.num);a.push("XYZ");var c=b.view_position(),c=transform(b.ictm,[c[0],b.height()-c[1]]);a.push(c[0]/this.scale);a.push(c[1]/this.scale);
a.push(this.scale);return JSON.stringify(a)}};pdf2htmlEX.Viewer=Viewer;})();
<\/script>`,className:"w-html-embed"}),e.jsx(m,{clientOnly:!0,code:`<script>
try{
pdf2htmlEX.defaultViewer = new pdf2htmlEX.Viewer({});
}catch(e){}
<\/script>`,className:"w-html-embed"}),e.jsx("div",{id:"sidebar",className:"w-element",children:e.jsx("div",{id:"outline",className:"w-element"})}),e.jsx("div",{id:"page-container",className:"w-element w-element-16",children:e.jsxs("div",{id:"pf1","data-page-no":"1",className:"w-element pf w0 h0",children:[e.jsxs("div",{className:"w-element pc pc1 w0 h0",children:[e.jsx(d,{alt:"",src:"/assets/lnBxv3zqT6hiZq-y9EI8i_jQ_sKUj6SgI4aAhb3D6nK.png",width:1190,height:1652,className:"w-image bi x0 y0 w0 h0"}),e.jsx("div",{className:"w-element t m0 x1 h1 y1 ff1 fs0 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"eXPERIÊNCIA"})}),e.jsxs("div",{className:"w-element t m0 x1 h2 y2 ff1 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Professora"}),e.jsx("span",{className:"w-element fc1 sc0"}),e.jsx("span",{className:"w-element fc1 sc0",children:"de"}),e.jsx("span",{className:"w-element fc1 sc0",children:"a"}),e.jsx("span",{className:"w-element fc1 sc0",children:"rtes"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Visua"}),e.jsx("span",{className:"w-element fc1 sc0",children:"i"})]}),e.jsxs("div",{className:"w-element t m0 x1 h2 y3 ff1 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"(09/2024"}),e.jsx("span",{className:"w-element fc1 sc0",children:"-"}),e.jsx("span",{className:"w-element fc1 sc0",children:"12/2024)"})]}),e.jsxs("div",{className:"w-element t m0 x1 h2 y4 ff1 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Ba"}),e.jsx("span",{className:"w-element fc1 sc0",children:"bysitter"}),e.jsx("span",{className:"w-element fc1 sc0",children:"(2018"}),e.jsx("span",{className:"w-element fc1 sc0",children:"-"}),e.jsx("span",{className:"w-element fc1 sc0",children:"2021)"})]}),e.jsxs("div",{className:"w-element t m0 x1 h3 y5 ff1 fs2 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"EB"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Dr."}),e.jsx("span",{className:"w-element fc1 sc0",children:"Nuno"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Cordeiro"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Ferreira,"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Lisboa"})]}),e.jsx("div",{className:"w-element t m0 x1 h3 y6 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"Beja"})}),e.jsxs("div",{className:"w-element t m0 x1 h3 y7 ff1 fs2 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Escoteiros"}),e.jsx("span",{className:"w-element fc1 sc0",children:"de"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Portugal"}),e.jsx("span",{className:"w-element fc1 sc0",children:"-"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Grupo"}),e.jsx("span",{className:"w-element fc1 sc0",children:"234"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Beja"})]}),e.jsxs("div",{className:"w-element t m0 x1 h2 y8 ff1 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Banco"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Alimentar"}),e.jsx("span",{className:"w-element fc1 sc0",children:"-"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Beja"}),e.jsx("span",{className:"w-element fc1 sc0",children:"(2016"}),e.jsx("span",{className:"w-element fc1 sc0",children:"-"}),e.jsx("span",{className:"w-element fc1 sc0",children:"2019)"})]}),e.jsxs("div",{className:"w-element t m0 x1 h2 y9 ff1 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Banco"}),e.jsx("span",{className:"w-element fc1 sc0",children:"ALimentar"}),e.jsx("span",{className:"w-element fc1 sc0",children:"-"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Lisboa"}),e.jsx("span",{className:"w-element fc1 sc0",children:"(11/2024)"})]}),e.jsxs("div",{className:"w-element t m0 x1 h2 ya ff1 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Escoteira"}),e.jsx("span",{className:"w-element fc1 sc0",children:"(2013"}),e.jsx("span",{className:"w-element fc1 sc0",children:"-"}),e.jsx("span",{className:"w-element fc1 sc0",children:"2016)"})]}),e.jsx("div",{className:"w-element t m0 x1 h1 yb ff1 fs0 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"Voluntariado"})}),e.jsxs("div",{className:"w-element t m0 x2 h3 yc ff1 fs2 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Lisboa,"}),e.jsx("span",{className:"w-element fc1 sc0",children:"PT"})]}),e.jsxs("div",{className:"w-element t m0 x2 h3 yd ff1 fs2 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Designer"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Gráfica"})]}),e.jsxs("div",{className:"w-element t m0 x2 h4 ye ff1 fs3 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Data"}),e.jsx("span",{className:"w-element fc1 sc0",children:"de"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Nasciment"})]}),e.jsx("div",{className:"w-element t m0 x2 h4 yf ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"02/01/2003"})}),e.jsx("div",{className:"w-element t m0 x2 h5 y10 ff1 fs4 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"sduarterosario@gmail.com"})}),e.jsx("div",{className:"w-element t m0 x2 h4 y11 ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"968948335"})}),e.jsx("div",{className:"w-element t m0 x2 h3 y12 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"EMAIL"})}),e.jsx("div",{className:"w-element t m0 x2 h3 y13 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"tELEMÓVEL"})}),e.jsx("div",{className:"w-element t m0 x2 h3 y14 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"cONTACTOS"})}),e.jsxs("div",{className:"w-element t m0 x2 h5 y15 ff2 fs4 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Português"}),e.jsx("span",{className:"w-element _ _0"}),e.jsx("span",{className:"w-element fc1 sc0",children:"(lígua"}),e.jsx("span",{className:"w-element _ _1"}),e.jsx("span",{className:"w-element fc1 sc0",children:"materna"})]}),e.jsxs("div",{className:"w-element t m0 x2 h5 y16 ff2 fs4 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Inglês"}),e.jsx("span",{className:"w-element _ _0"}),e.jsx("span",{className:"w-element fc1 sc0",children:"(uente"})]}),e.jsxs("div",{className:"w-element t m0 x2 h5 y17 ff2 fs4 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Espanhol"}),e.jsx("span",{className:"w-element _ _0"}),e.jsx("span",{className:"w-element fc1 sc0",children:"(conversacional)"})]}),e.jsx("div",{className:"w-element t m0 x2 h4 y18 ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"Fig"})}),e.jsx("div",{className:"w-element t m0 x3 h4 y18 ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"m"})}),e.jsx("div",{className:"w-element t m0 x2 h4 y19 ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"A"})}),e.jsxs("div",{className:"w-element t m0 x4 h4 y19 ff1 fs3 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"dobe"}),e.jsx("span",{className:"w-element fc1 sc0",children:"P"})]}),e.jsx("div",{className:"w-element t m0 x5 h4 y19 ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"h"})}),e.jsx("div",{className:"w-element t m0 x6 h4 y19 ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"otos"})}),e.jsx("div",{className:"w-element t m0 x7 h4 y19 ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"h"})}),e.jsx("div",{className:"w-element t m0 x8 h4 y19 ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"o"})}),e.jsx("div",{className:"w-element t m0 x9 h4 y19 ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:""})}),e.jsx("div",{className:"w-element t m0 x2 h4 y1a ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"A"})}),e.jsx("div",{className:"w-element t m0 x4 h4 y1a ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"dobe"})}),e.jsx("div",{className:"w-element t m0 xa h4 y1a ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"I"})}),e.jsx("div",{className:"w-element t m0 x5 h4 y1a ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"llustrato"})}),e.jsx("div",{className:"w-element t m0 xb h4 y1a ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:""})}),e.jsx("div",{className:"w-element t m0 x2 h4 y1b ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"A"})}),e.jsx("div",{className:"w-element t m0 x4 h4 y1b ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"dobe"})}),e.jsx("div",{className:"w-element t m0 xa h4 y1b ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"I"})}),e.jsx("div",{className:"w-element t m0 x5 h4 y1b ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"ndesig"})}),e.jsx("div",{className:"w-element t m0 x8 h4 y1b ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:""})}),e.jsx("div",{className:"w-element t m0 x2 h4 y1c ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"M"})}),e.jsx("div",{className:"w-element t m0 x4 h4 y1c ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"icroso"})}),e.jsx("div",{className:"w-element t m0 x5 h4 y1c ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"f"})}),e.jsx("div",{className:"w-element t m0 x6 h4 y1c ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"t"})}),e.jsx("div",{className:"w-element t m0 xc h4 y1c ff2 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"O"})}),e.jsx("div",{className:"w-element t m0 x7 h4 y1c ff1 fs3 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"ce"})}),e.jsx("div",{className:"w-element t m0 x2 h3 y1d ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"L"})}),e.jsx("div",{className:"w-element t m0 x4 h3 y1d ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"ínguas"})}),e.jsx("div",{className:"w-element t m0 x2 h3 y1e ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"Sof"})}),e.jsx("div",{className:"w-element t m0 xd h3 y1e ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"t"})}),e.jsx("div",{className:"w-element t m0 xe h3 y1e ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"wear"})}),e.jsx("div",{className:"w-element t m0 x2 h3 y7 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"co"})}),e.jsx("div",{className:"w-element t m0 xf h3 y7 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"mp"})}),e.jsx("div",{className:"w-element t m0 xe h3 y7 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"et"})}),e.jsx("div",{className:"w-element t m0 x10 h3 y7 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"ê"})}),e.jsx("div",{className:"w-element t m0 x11 h3 y7 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"ncia"})}),e.jsx("div",{className:"w-element t m0 x7 h3 y7 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"s"})}),e.jsx("div",{className:"w-element t m0 x2 h6 y1f ff1 fs5 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"So"})}),e.jsx("div",{className:"w-element t m0 x12 h6 y1f ff2 fs5 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"f"})}),e.jsxs("div",{className:"w-element t m0 x5 h6 y1f ff1 fs5 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"ia"}),e.jsx("span",{className:"w-element fc1 sc0"})]}),e.jsx("div",{className:"w-element t m0 x2 h6 y20 ff1 fs5 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"Ro"})}),e.jsx("div",{className:"w-element t m0 x12 h6 y20 ff2 fs5 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"sá"})}),e.jsx("div",{className:"w-element t m0 x13 h6 y20 ff1 fs5 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"rio"})}),e.jsx("div",{className:"w-element t m0 x1 h1 y21 ff1 fs0 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"Educa"})}),e.jsx("div",{className:"w-element t m0 x14 h1 y21 ff2 fs0 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"çã"})}),e.jsx("div",{className:"w-element t m0 x15 h1 y21 ff1 fs0 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"o"})}),e.jsxs("div",{className:"w-element t m0 x1 h2 y22 ff2 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Licenciatura:"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Design"}),e.jsx("span",{className:"w-element fc1 sc0",children:"de"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Comunicação"})]}),e.jsxs("div",{className:"w-element t m0 x1 h2 y23 ff2 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"C/Minor"}),e.jsx("span",{className:"w-element fc1 sc0",children:"de"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Ilustração"}),e.jsx("span",{className:"w-element fc1 sc0",children:"(2022"}),e.jsx("span",{className:"w-element fc1 sc0",children:"-"}),e.jsx("span",{className:"w-element fc1 sc0",children:"2025)"})]}),e.jsx("div",{className:"w-element t m0 x1 h3 y24 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"f"})}),e.jsxs("div",{className:"w-element t m0 x16 h3 y24 ff1 fs2 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"aculdade"}),e.jsx("span",{className:"w-element fc1 sc0",children:"de"})]}),e.jsx("div",{className:"w-element t m0 x17 h3 y24 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"b"})}),e.jsx("div",{className:"w-element t m0 x18 h3 y24 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"elas-artes,"})}),e.jsx("div",{className:"w-element t m0 x19 h3 y24 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"U"})}),e.jsx("div",{className:"w-element t m0 x1a h3 y24 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"ni"})}),e.jsx("div",{className:"w-element t m0 x1b h3 y24 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"v"})}),e.jsx("div",{className:"w-element t m0 x1c h3 y24 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"ersidade"})}),e.jsx("div",{className:"w-element t m0 x1 h3 y25 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"de"})}),e.jsx("div",{className:"w-element t m0 x1d h3 y25 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"l"})}),e.jsx("div",{className:"w-element t m0 x1e h3 y25 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"isboa"})}),e.jsx("div",{className:"w-element t m0 x1 h1 y26 ff1 fs0 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"Outro"})}),e.jsx("div",{className:"w-element t m0 x14 h1 y26 ff2 fs0 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"s"})}),e.jsxs("div",{className:"w-element t m0 x1 h2 y27 ff1 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Tesoureira"}),e.jsx("span",{className:"w-element fc1 sc0"})]}),e.jsxs("div",{className:"w-element t m0 x1f h2 y27 ff2 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"(2024"}),e.jsx("span",{className:"w-element fc1 sc0",children:"-"}),e.jsx("span",{className:"w-element fc1 sc0",children:"2025)"})]}),e.jsxs("div",{className:"w-element t m0 x1 h2 y28 ff1 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"Pa"}),e.jsx("span",{className:"w-element fc1 sc0",children:"ndeireta"}),e.jsx("span",{className:"w-element fc1 sc0",children:"s"})]}),e.jsxs("div",{className:"w-element t m0 x18 h2 y28 ff2 fs1 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"(2023"}),e.jsx("span",{className:"w-element fc1 sc0",children:"-"}),e.jsx("span",{className:"w-element fc1 sc0",children:"atual)"})]}),e.jsx("div",{className:"w-element t m0 x1 h3 y29 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"T"})}),e.jsx("div",{className:"w-element t m0 x16 h3 y29 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"una"})}),e.jsx("div",{className:"w-element t m0 x20 h3 y29 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"U"})}),e.jsx("div",{className:"w-element t m0 x21 h3 y29 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"ni"})}),e.jsx("div",{className:"w-element t m0 x22 h3 y29 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"v"})}),e.jsx("div",{className:"w-element t m0 x23 h3 y29 ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"ersit"})}),e.jsx("div",{className:"w-element t m0 x18 h3 y29 ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"á"})}),e.jsxs("div",{className:"w-element t m0 x24 h3 y29 ff1 fs2 fc0 sc0 ls0 ws0",children:[e.jsx("span",{className:"w-element fc1 sc0",children:"ria"}),e.jsx("span",{className:"w-element fc1 sc0",children:"da"}),e.jsx("span",{className:"w-element fc1 sc0",children:"Faculdade"}),e.jsx("span",{className:"w-element fc1 sc0",children:"de"})]}),e.jsx("div",{className:"w-element t m0 x1 h3 y2a ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"Belas-"})}),e.jsx("div",{className:"w-element t m0 x21 h3 y2a ff2 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"A"})}),e.jsx("div",{className:"w-element t m0 x25 h3 y2a ff1 fs2 fc0 sc0 ls0 ws0",children:e.jsx("span",{className:"w-element fc1 sc0",children:"rtes"})}),e.jsx("a",{href:"mailto:sduarterosario@gmail.com",className:"w-element l",children:e.jsx("div",{className:"w-element w-element-15 d m1"})})]}),e.jsx("div",{"data-data":'{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}',className:"w-element pi"})]})}),e.jsx("div",{className:"w-element loading-indicator",children:e.jsx(d,{alt:"",src:"/assets/cTtsOSQmSnDn78xv3QkbT_L4pNgyh5cCxj5H8oIwIGn.png",width:64,height:64,className:"w-image"})})]}),U=({data:s})=>{const{system:n,resources:t,url:a,pageMeta:c}=s;return e.jsxs(N.Provider,{value:{imageLoader:g,assetBaseUrl:h,resources:t,breakpoints:B,onError:console.error},children:[e.jsx(W,{system:n},a),e.jsx(A,{url:a,pageMeta:c,siteName:v,imageLoader:g,assetBaseUrl:h}),e.jsx(E,{children:c.title})]})},V=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),X=({})=>e.jsxs(e.Fragment,{children:[v,R,H.map(s=>e.jsx("link",{rel:"preload",href:`${h}${s}`,as:"font",crossOrigin:"anonymous"},s)),F.map(s=>e.jsx("link",{rel:"preload",href:`${h}${s}`,as:"image"},s))]}),Q=Object.freeze(Object.defineProperty({__proto__:null,Head:X},Symbol.toStringTag,{value:"Module"})),Z={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/caldas-late-night-2026/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:V}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-1/caldas-late-night-2026/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:Q}}};export{Z as configValuesSerialized};
