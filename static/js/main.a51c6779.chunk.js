(this["webpackJsonpupnotes-website"]=this["webpackJsonpupnotes-website"]||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(8),s=(n(60),n(61),n(2)),o=function(){return Object(s.jsxs)("footer",{style:{background:"coral"},className:"w3-container w3-padding-64 w3-center w3-opacity",children:[Object(s.jsxs)("div",{className:"w3-xlarge w3-padding-32",children:[Object(s.jsx)("i",{className:"fa fa-facebook-official w3-hover-opacity"}),Object(s.jsx)("i",{className:"fa fa-instagram w3-hover-opacity"}),Object(s.jsx)("i",{className:"fa fa-snapchat w3-hover-opacity"}),Object(s.jsx)("i",{className:"fa fa-pinterest-p w3-hover-opacity"}),Object(s.jsx)("i",{className:"fa fa-twitter w3-hover-opacity"}),Object(s.jsx)("i",{className:"fa fa-linkedin w3-hover-opacity"})]}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{href:"https://upnotes.io",children:" upnotes.io "})})]})},r=n(12),l=n(24),d=n(100),j=n(102),b=n(108),u=n(107),h=n(105),p=n(106),x=n(50),w=n.n(x),O=n(104),f=n(15),g=[{label:"Join Chat",href:"https://discord.gg/ATZTMeyWsW",target:"_blank",eventLabel:"join_chat"},{label:"Report Issue",href:"https://github.com/upnotes-io/upnotes-website/issues/new",target:"_blank",eventLabel:"report_issue"},{label:"Download",href:"#download",target:"_blank",eventLabel:"download_header"}],m=Object(d.a)((function(){return{header:{background:"#f9b296",paddingRight:"79px",paddingLeft:"79px","@media (max-width: 900px)":{paddingLeft:0}},logo:{fontFamily:"Work Sans, sans-serif",fontWeight:600,color:"black",textAlign:"left"},menuButton:{fontFamily:"Open Sans, sans-serif",fontWeight:700,size:"18px",marginLeft:"38px",color:"black"},toolbar:{display:"flex",justifyContent:"space-between"},drawerContainer:{padding:"20px 30px"},imageIcon:{display:"flex",height:"inherit",width:"inherit",alignSelf:"center"},iconRoot:{textAlign:"center",height:"36px",width:"36px"},headerBrand:{display:"flex",flexDirection:"row",alignItems:"center"}}}));function v(){var e=m(),t=e.header,n=e.logo,i=e.menuButton,c=e.toolbar,o=e.drawerContainer,d=e.iconRoot,x=e.imageIcon,v=e.headerBrand,y=Object(a.useState)({mobileView:!1,drawerOpen:!1}),k=Object(l.a)(y,2),N=k[0],L=k[1],S=N.mobileView,C=N.drawerOpen;Object(a.useEffect)((function(){var e=function(){return window.innerWidth<900?L((function(e){return Object(r.a)(Object(r.a)({},e),{},{mobileView:!0})})):L((function(e){return Object(r.a)(Object(r.a)({},e),{},{mobileView:!1})}))};e(),window.addEventListener("resize",(function(){return e()}))}),[]);var W=function(){return g.map((function(e){var t=e.label,n=e.href,a=e.target;return Object(s.jsx)("a",{href:n,color:"inherit",style:{textDecoration:"none"},key:t,target:a,children:t})}))},F=Object(s.jsxs)("a",{href:"/",className:v,children:[Object(s.jsx)(O.a,{className:d,children:Object(s.jsx)("img",{className:x,src:"/assets/icon.svg",alt:"logo"})}),Object(s.jsx)(h.a,{variant:"h6",component:"h1",className:n,children:"Upnotes"})]}),A=function(){return g.map((function(e){var t=e.label,n=e.href,a=e.target,c=e.eventLabel;return Object(s.jsx)(f.a.OutboundLink,{key:t,color:"inherit",to:n,eventLabel:c,target:a,className:i,children:t})}))};return Object(s.jsx)("header",{children:Object(s.jsx)(p.a,{className:t,children:S?Object(s.jsxs)(j.a,{children:[Object(s.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(){return L((function(e){return Object(r.a)(Object(r.a)({},e),{},{drawerOpen:!0})}))},children:Object(s.jsx)(w.a,{})}),Object(s.jsx)(u.a,{anchor:"left",open:C,onClose:function(){return L((function(e){return Object(r.a)(Object(r.a)({},e),{},{drawerOpen:!1})}))},children:Object(s.jsx)("div",{className:o,children:W()})}),Object(s.jsx)("div",{children:F})]}):Object(s.jsxs)(j.a,{className:c,children:[F,Object(s.jsx)("div",{children:A()})]})})})}var y=n(43),k=n.n(y),N=n(51),L=n(28),S=n(20),C=n(52);n(75);function W(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)("#download"),o=Object(l.a)(c,2),d=o[0],j=o[1],b=Object(a.useState)("unknown"),u=Object(l.a)(b,2),h=u[0],p=u[1];function x(e){return"https://github.com/upnotes-io/upnotes-website/releases/download/v".concat(e,"/Upnotes-").concat(e,".exe")}function w(e){return"https://github.com/upnotes-io/upnotes-website/releases/download/v".concat(e,"/Upnotes-").concat(e,".AppImage")}function O(e){return"https://github.com/upnotes-io/upnotes-website/releases/download/v".concat(e,"/Upnotes-").concat(e,".dmg")}Object(a.useEffect)((function(){(function(){var e=Object(N.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/upnotes-io/upnotes-website/tags");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a[0].name.substr(1)),-1!==navigator.appVersion.indexOf("Win")&&(j(x(n)),p("windows")),-1!==navigator.appVersion.indexOf("Mac")&&(j(O(n)),p("mac")),-1!==navigator.appVersion.indexOf("X11")&&(j(w(n)),p("linux")),-1!==navigator.appVersion.indexOf("Linux")&&(j(w(n)),p("linux"));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var g=["/assets/onboarding.png","/assets/note-view.png"];return Object(s.jsxs)("div",{className:"content",children:[Object(s.jsxs)("div",{className:"w3-container w3-center",style:{padding:"48px 16px",background:"antiquewhite"},children:[Object(s.jsx)("div",{style:{height:"600px"},children:Object(s.jsx)(C.Slide,Object(r.a)(Object(r.a)({},{duration:5e3,autoplay:!0,transitionDuration:500,arrows:!0,infinite:!1,easing:"ease",indicators:!0}),{},{children:g.map((function(e,t){return Object(s.jsx)("div",{className:"each-slide",children:Object(s.jsx)("img",{style:{objectFit:"cover",height:"600px"},src:g[t],alt:"slide images"})})}))}))}),Object(s.jsx)("h2",{className:"w3-xlarge w3-padding-32",style:{color:"black"},children:"Automatically organize your software engineering notes."}),Object(s.jsxs)(f.a.OutboundLink,{style:{backgroundColor:"#f16f3d"},className:"w3-button w3-text-white w3-padding-large w3-large w3-margin-top",eventLabel:"download-1-".concat(h),to:d,children:[Object(s.jsx)(L.a,{icon:d.endsWith(".exe")?S.c:d.endsWith(".AppImage")?S.b:S.a}),Object(s.jsx)("span",{children:" Download "})]})]}),Object(s.jsx)("div",{className:"w3-row-padding w3-padding-64 w3-container",children:Object(s.jsxs)("div",{className:"w3-content",children:[Object(s.jsx)("h5",{children:"Features"}),Object(s.jsxs)("p",{className:"w3-text-black",children:[Object(s.jsx)("li",{children:" Automatically create notes based on your git branch"}),Object(s.jsx)("li",{children:" Simple and powerful markdown editor with markdown and wysiwyg and split mode support "}),Object(s.jsx)("li",{children:" Syntax highlight with support for most of the programming languages "}),Object(s.jsx)("li",{children:" Git managed notes with all the notes automatically organized and saved in github flavored markdown format. "}),Object(s.jsx)("li",{children:" Directories are organized based on day to day workflow for software engineer "})]})]})}),Object(s.jsx)("div",{id:"download",style:{"max-width":"1024px",margin:"auto"},className:"w3-row-padding w3-padding-64 w3-container",children:null==n?Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"Getting latest version..."})}):Object(s.jsx)("div",{children:Object(s.jsxs)("div",{style:{display:"flex","flex-direction":"row","justify-content":"space-between","max-width":"1024px",margin:"auto","font-size":"xx-large"},children:[Object(s.jsx)("div",{children:Object(s.jsxs)(f.a.OutboundLink,{eventLabel:"download-2-windows",to:x(n),children:[Object(s.jsx)(L.a,{icon:S.c})," ",Object(s.jsx)("span",{children:"Windows"})]})}),Object(s.jsx)("div",{children:Object(s.jsxs)(f.a.OutboundLink,{eventLabel:"download-2-linux",to:w(n),children:[Object(s.jsx)(L.a,{icon:S.b})," ",Object(s.jsx)("span",{children:"Linux"})]})}),Object(s.jsx)("div",{children:Object(s.jsxs)(f.a.OutboundLink,{eventLabel:"download-2-mac",to:O(n),children:[Object(s.jsx)(L.a,{icon:S.a})," ",Object(s.jsx)("span",{children:"Mac"})]})})]})})})]})}var F=function(){return i.a.useEffect((function(){console.log("env:production"),f.a.initialize("UA-196765342-1",{debug:!0}),f.a.pageview(window.location.pathname+window.location.search)})),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(v,{}),Object(s.jsx)(W,{}),Object(s.jsx)(o,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))},I=document.getElementById("root");I.hasChildNodes()?Object(c.hydrate)(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(F,{})}),I):Object(c.render)(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(F,{})}),I),A()}},[[77,1,2]]]);
//# sourceMappingURL=main.a51c6779.chunk.js.map