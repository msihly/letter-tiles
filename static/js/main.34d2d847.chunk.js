(this["webpackJsonpletter-tiles"]=this["webpackJsonpletter-tiles"]||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/eraser.e304b5fc.svg"},27:function(e,t,n){e.exports=n.p+"static/media/grid.1415287f.svg"},28:function(e,t,n){e.exports=n.p+"static/media/paint-palette.12c7392d.svg"},29:function(e,t,n){e.exports=n.p+"static/media/trashcan.663bf4b6.svg"},32:function(e,t,n){e.exports=n(43)},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),c=n.n(l),o=n(2),i=n(6),s=n(7);var u=n(4);var d=Object(i.b)({modals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MODAL_CLOSED":var n=t.payload.id;return e.filter((function(e){return e.id!==n}));case"MODAL_OPENED":var a=t.payload.id;return[].concat(Object(s.a)(e),[{id:a,isOpen:!0}]);default:return e}},inputs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INPUT_CREATED":var n=t.payload,a=n.id,r=n.value;return[].concat(Object(s.a)(e),[{id:a,value:r}]);case"INPUT_UPDATED":var l=t.payload,c=l.id,o=l.value;return e.map((function(e){return e.id===c?Object(u.a)(Object(u.a)({},e),{},{value:o}):e}));case"INPUT_DELETED":return e.filter((function(e){return e.id!==t.payload.id}));default:return e}},observers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OBSERVER_CREATED":var n=t.payload.id;return[].concat(Object(s.a)(e),[{id:n,isInView:!1}]);case"OBSERVER_UPDATED":var a=t.payload,r=a.id,l=a.viewState;return e.map((function(e){return e.id===r?Object(u.a)(Object(u.a)({},e),{},{isInView:l}):e}));case"OBSERVER_DELETED":var c=t.payload.id;return e.filter((function(e){return e.id!==c}));default:return e}},tiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TILE_CREATED":var n=t.payload,a=n.id,r=n.content,l=n.classes,c=n.left,o=n.top,i=n.backgroundColor,d=n.textColor;return[].concat(Object(s.a)(e),[{id:a,content:r,classes:l,left:c,top:o,backgroundColor:i,textColor:d}]);case"TILE_DELETED":return e.filter((function(e){return e.id!==t.payload.id}));case"TILES_DELETED":return[];case"TILE_UPDATED":var h=t.payload,f=h.id,g=h.content,m=h.classes,v=h.left,p=h.top;return e.map((function(e){return e.id===f?Object(u.a)(Object(u.a)({},e),{},{content:g,classes:m,left:v,top:p}):e}));default:return e}}}),h=Object(i.c)(d),f=n(3),g=function(e){return{type:"MODAL_CLOSED",payload:{id:e}}},m=function(e){return{type:"MODAL_OPENED",payload:{id:e}}},v=function(e){return{type:"TILE_UPDATED",payload:{id:e.id,content:e.content,classes:e.classes,left:e.left,top:e.top}}},p=n(46),b=n(31),E=function(e){var t=e.children,n=Object(a.useRef)(null),l=Object(a.useState)(null),c=Object(f.a)(l,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){return i(n.current)}),[]),r.a.createElement("div",{ref:n,className:"bounding-rect"},t&&a.Children.map(t,(function(e,t){return Object(a.isValidElement)(e)?Object(a.cloneElement)(e,{key:t,boundingNode:o}):e})))},O=n(45),y=new Map([["alphabet",{label:"Alphabet",left:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]}],["diagraphs",{label:"Diagraphs",left:["ch","ck","ph","sh","th","wh","tch","dge"]}],["advancedVowels",{label:"Advanced Vowels",left:["ai","au","aw","ay","ea","ee","eigh","ew","ue","ey","ie","igh","oa","oi","oo","ou","ow","oy"],right:["or","ar","er","ur","ir","ear","oar","ore","our","oor"]}],["consonants",{label:"Consonants",left:["ff","ll","ss","zz","ge","ce","gh","gn","gu","kn","mb","mn","que","se","wr"]}],["affixes",{label:"Affixes",left:["de","dis","en","in","mis","pre","re","sub","un"],right:["al","cial","cian","cious","ed","er","es","s","est","ful","ing","less","ness","ly","ment","sion","tial","tian","tion","ture"]}],["chunks",{label:"Chunks",left:["all","am","an","ang","ing","ong","ung","ank","ink","onk","unk"],right:["ble","cle","dle","fle","gle","kle","ple","stl","tle","zle"]}]]),j=n(47),k=function(e){var t=e.classes,n=e.boundingNode,a=e.hasSnapToGrid,l=e.isEraseMode,c=Object(o.c)(),i=Object(o.d)((function(e){return e.tiles}),o.b),s=Object(j.a)({accept:T.TILE,drop:function(e,t){var r=i.find((function(t){return t.id===e.id})),l=t.getDifferenceFromInitialOffset(),o=t.getSourceClientOffset(),s=n.getBoundingClientRect(),d=r?r.left+l.x:o.x-s.left,h=r?r.top+l.y:o.y-s.top;if(a){var g=I(d,h),m=Object(f.a)(g,2);d=m[0],h=m[1]}return c(v(Object(u.a)(Object(u.a)({},e),{},{left:d,top:h}))),{left:d,top:h}}}),d=Object(f.a)(s,2)[1];return r.a.createElement("div",{ref:d,className:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.canDrop,a=e.isOver,r=e.isEraseMode,l="container";return t&&(l+=" ".concat(t)),a&&(l+=" ".concat(n?"is-over":"no-drop")),r&&(l+=" erase-mode"),l}({isEraseMode:l})},i&&i.map((function(e){return r.a.createElement(x,Object.assign({},e,{key:e.id,handleClick:function(){return l&&c({type:"TILE_DELETED",payload:{id:e.id}})}}))})))},C=n(48),x=function(e){var t=e.id,n=e.content,l=e.classes,c=e.isSource,i=e.hasSnapToGrid,s=e.handleClick,d=Object(o.c)(),h=Object(o.d)((function(e){return Object(e.tiles.find((function(e){return e.id===t})))})),g=h.left,m=h.top,p=h.backgroundColor,b=h.textColor,E=Object(C.a)({item:{type:T.TILE,id:t,content:n,classes:l,isSource:c},end:function(e,t){var n=t.getDropResult();if(e&&n){var a,r=[n.left,n.top],l=r[0],o=r[1];if(i){var s=I(l,o),h=Object(f.a)(s,2);l=h[0],o=h[1]}var g={id:c?"".concat(e.id,"-").concat(Math.trunc(1e6*Math.random())):e.id,content:e.content,classes:null!==(a=e.classes)&&void 0!==a?a:null,left:l,top:o};d(c?function(e){return{type:"TILE_CREATED",payload:{id:e.id,content:e.content,classes:e.classes,left:e.left,top:e.top,backgroundColor:e.backgroundColor,textColor:e.textColor}}}(Object(u.a)(Object(u.a)({},g),{},{backgroundColor:JSON.parse(localStorage.getItem("--tile-background-color")),textColor:JSON.parse(localStorage.getItem("--tile-text-color"))})):v(g))}},collect:function(e){return{isDragging:e.isDragging()}}}),O=Object(f.a)(E,3),y=O[0].isDragging,j=O[1],k=O[2];return Object(a.useEffect)((function(){k(r.a.createElement("img",{src:"",alt:""}),{captureDraggingState:!0})})),r.a.createElement("div",{ref:j,onClick:null!==s&&void 0!==s?s:null,className:function(){var e="tile";return l&&(e+=" ".concat(l)),c||(e+=" draggable"),y&&(e+=" dragging"),c&&(e+=" source"),e}(),style:{backgroundColor:c?null:"hsl(".concat(p.hue,"deg, ").concat(p.saturation,"%, ").concat(p.lightness,"%)"),color:c?null:"hsl(".concat(b.hue,"deg, ").concat(b.saturation,"%, ").concat(b.lightness,"%)"),transform:"translate(".concat(g,"px, ").concat(m,"px)")}},n)},D=function(e){var t=e.index,n=e.isActive,a=e.label,l=e.switchTab;return r.a.createElement("div",{onClick:function(){return l(t)},className:"tab-button".concat(n?" active":"")},a)},w=function(e){var t=e.children,n=e.containerClasses,l=e.isColumnar,c=e.tabClasses,o=Object(a.useState)(0),i=Object(f.a)(o,2),s=i[0],u=i[1],d=t?t[s].props:null;return r.a.createElement("div",{className:"".concat(null!==n&&void 0!==n?n:"").concat(l?" row":" column")},r.a.createElement("div",{className:"tab-buttons".concat(l?" column":" row")},t&&a.Children.map(t,(function(e,t){return Object(a.cloneElement)(e,{key:t,index:t,isActive:s===t,label:e.props.label,switchTab:u})}))),r.a.createElement("div",{className:function(){var e="tab-content";return d.className&&(e+=" ".concat(d.className)),c&&(e+=" ".concat(c)),e}()},d.children))},S=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"left",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lower",a=e[t];return"upper"===n&&(a=a.map((function(e){return e.toUpperCase()}))),a.map((function(e){return r.a.createElement(x,{key:e,id:e,content:e,isSource:!0})}))};return r.a.createElement(w,{containerClasses:"tilebar"},Array.from(y.values(),(function(t,n){return r.a.createElement(D,{key:n,index:n,label:t.label,className:"tile-container"},t.left&&r.a.createElement("div",{className:"tiles"},e(t,"left")),t.right&&r.a.createElement("div",{className:"tiles"},e(t,"right")))})))},N=function(e){var t=e.hasSnapToGrid,n=e.boundingNode,a=Object(O.a)((function(e){return{item:e.getItem(),itemType:e.getItemType(),itemOffset:e.getSourceClientOffset(),initItemOffset:e.getInitialSourceClientOffset(),deltaOffset:e.getDifferenceFromInitialOffset(),isDragging:e.isDragging()}})),l=a.item,c=a.itemType,o=a.itemOffset,i=a.initItemOffset,s=a.deltaOffset;return a.isDragging?r.a.createElement("div",{className:"drag-layer"},r.a.createElement("div",{style:function(){if(!i||!o)return{display:"none"};var e=n.getBoundingClientRect(),a=l.isSource?o.x:e.left+s.x,r=l.isSource?o.y:e.top+s.y;if(t){var c=I(a,r),u=Object(f.a)(c,2);a=u[0],r=u[1]}return{transform:"translate(".concat(a,"px, ").concat(r,"px)")}}()},c===T.TILE&&r.a.createElement(x,l))):null},T={TILE:"TILE"},I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:36;return[{x:e},{y:t}].map((function(e){return Math.round((Object.values(e)[0]-n)/n)*n+n}))},V=function(e){var t=e.children,n=e.id,l=e.modalClasses,c=e.iconClasses,i=e.icon,s=e.heading,u=e.subheading,d=Object(o.c)(),h=function(){return d(g(n))};return r.a.createElement(L,{id:n,classes:null!==l&&void 0!==l?l:null},r.a.createElement("div",{className:"alert"},i&&"string"===typeof i?r.a.createElement("img",{src:i,className:"alert-icon ".concat(null!==c&&void 0!==c?c:""),alt:""}):Object(a.cloneElement)(i,{className:"alert-icon ".concat(null!==c&&void 0!==c?c:"")}),r.a.createElement("div",{className:"alert-heading"},s),u&&r.a.createElement("div",{className:"alert-subheading"},u),r.a.createElement("div",{className:"row j-center"},r.a.createElement(R,{text:"Cancel",classes:"grey",handleClose:h}),t&&a.Children.map(t,(function(e){return Object(a.cloneElement)(e,{handleClose:h})})))))},R=function(e){var t=e.text,n=e.classes,a=e.onClick,l=e.handleClose;return r.a.createElement("div",{className:"alert-button ".concat(null!==n&&void 0!==n?n:""),onClick:function(){a&&a(),l()}},t)},P=function(e){var t=e.children,n=e.classes,a=e.isActive,l=e.onClick,c=e.title;return r.a.createElement("div",{title:c,className:function(){var e="circle-button";return!1===a&&(e+=" inactive"),n&&(e+=" "+n),e}(),onClick:l},t)},A=function(e){var t=e.children;return r.a.createElement("div",{className:"floating-menu"},t&&a.Children.map(t,(function(e,t){return Object(a.cloneElement)(e,{key:t})})))},L=function(e){var t=e.children,n=e.classes,a=e.hasHeader,l=e.hasBackdrop,c=e.id,i=Object(o.c)(),s=function(e){e.stopPropagation(),i(g(c))},u=function(e){return e.stopPropagation()};return r.a.createElement(M,null,r.a.createElement("div",{onMouseDown:s,onMouseUp:u,onClick:u,className:"modal-container".concat(l?" dark":"")},r.a.createElement("div",{onMouseDown:u,onMouseUp:u,onClick:u,className:"modal-content ".concat(null!==n&&void 0!==n?n:"")},a&&r.a.createElement("div",{className:"modal-header"},r.a.createElement("span",{onClick:s,className:"close"},"\xd7")),t)))},z=document.getElementById("portal-root"),M=function(e){var t=e.children;return c.a.createPortal(t,z)},_=function(e){var t,n,l,c=e.cssVar,i=e.handleChange,s=e.hasSaturation,u=e.hasLightness,d=e.initHsl,h=e.isAdvanced;d&&(d=JSON.parse(d));var f=Object(o.d)((function(e){return Object(e.inputs.find((function(e){return e.id==="".concat(c,"-hue")}))).value})),g=Object(o.d)((function(e){return Object(e.inputs.find((function(e){return e.id==="".concat(c,"-saturation")}))).value})),m=Object(o.d)((function(e){return Object(e.inputs.find((function(e){return e.id==="".concat(c,"-lightness")}))).value}));return Object(a.useEffect)((function(){i(c,{hue:f,saturation:g,lightness:m})}),[c,i,f,g,m]),r.a.createElement("div",{className:"color-picker"},r.a.createElement(U,{type:"hue",cssVar:c,initValue:null===(t=d)||void 0===t?void 0:t.hue}),h&&s&&r.a.createElement(U,{type:"saturation",cssVar:c,initValue:null===(n=d)||void 0===n?void 0:n.saturation,style:{background:"linear-gradient(to right, hsl(".concat(f,", 0%, 50%), hsl(").concat(f,", 100%, 50%))")}}),h&&u&&r.a.createElement(U,{type:"lightness",cssVar:c,initValue:null===(l=d)||void 0===l?void 0:l.lightness,style:{background:"linear-gradient(to right, black 0%, hsl(".concat(f,", ").concat(g,"%, 50%) 50%, white 100%)")}}))},B=function(e){var t=e.handleChange;return e.settings.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.cssVar},r.a.createElement("h2",null,e.title),r.a.createElement(_,{cssVar:e.cssVar,initHsl:localStorage.getItem(e.cssVar),handleChange:t,isAdvanced:!0,hasSaturation:!0,hasLightness:!0}))}))},U=function(e){var t,n=e.cssVar,l=e.initValue,c=e.style,i=e.type,s="".concat(n,"-").concat(i),u=Object(o.c)();void 0===l&&(l="hue"===i?1:50);var d=null!==(t=Object(o.d)((function(e){return Object(e.inputs.find((function(e){return e.id===s}))).value})))&&void 0!==t?t:l;return Object(a.useEffect)((function(){return u(function(e,t){return{type:"INPUT_CREATED",payload:{id:e,value:t}}}(s,l)),function(){return u(function(e){return{type:"INPUT_DELETED",payload:{id:e}}}(s))}}),[s,l,u]),r.a.createElement("input",{type:"range",className:"slider ".concat(i),style:null!==c&&void 0!==c?c:null,min:"1",max:"hue"===i?"360":"100",step:"1",value:d,onChange:function(e){return u(function(e,t){return{type:"INPUT_UPDATED",payload:{id:e,value:t}}}(s,+e.target.value))}})},H=function(e){var t=e.cssVars,n=e.handleClick,a=e.isActive,l=e.name;return r.a.createElement("div",{onClick:n,className:"theme-tile".concat(a?" active":"")},r.a.createElement("div",{className:"theme-icon",style:G(t),title:l},r.a.createElement("div",{className:"letter-tile"},"a")),r.a.createElement("p",null,l))},J=function(e){var t,n=e.handleChange,l=Object(a.useState)(null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:null),c=Object(f.a)(l,2),o=c[0],i=c[1];return r.a.createElement("div",{className:"color-themes"},Array.from(q.entries(),(function(e,t){var a=Object(f.a)(e,2),l=a[0],c=a[1];return r.a.createElement(H,{key:l,name:l,cssVars:c,isActive:o===l,handleClick:function(){return function(e,t){for(var a in t)n(a,t[a]);localStorage.setItem("theme",e),i(e)}(l,c)}})})))},F=new Map([["Dark",{"--accent-color":{hue:212,saturation:79,lightness:37},"--accent-fill-color":{hue:0,saturation:0,lightness:90},"--background-color":{hue:0,saturation:0,lightness:12},"--foreground-color":{hue:0,saturation:0,lightness:6},"--text-color":{hue:0,saturation:0,lightness:90},"--tile-background-color":{hue:0,saturation:0,lightness:85},"--tile-text-color":{hue:0,saturation:0,lightness:12}}],["Light",{"--accent-color":{hue:212,saturation:79,lightness:37},"--accent-fill-color":{hue:0,saturation:0,lightness:90},"--background-color":{hue:0,saturation:0,lightness:85},"--foreground-color":{hue:0,saturation:0,lightness:70},"--text-color":{hue:0,saturation:0,lightness:6},"--tile-background-color":{hue:212,saturation:79,lightness:37},"--tile-text-color":{hue:0,saturation:0,lightness:84}}],["Red",{"--accent-color":{hue:1,saturation:95,lightness:25},"--accent-fill-color":{hue:0,saturation:0,lightness:90},"--background-color":{hue:1,saturation:50,lightness:65},"--foreground-color":{hue:1,saturation:95,lightness:25},"--text-color":{hue:0,saturation:0,lightness:90},"--tile-background-color":{hue:0,saturation:90,lightness:35},"--tile-text-color":{hue:0,saturation:0,lightness:90}}],["Orange",{"--accent-color":{hue:25,saturation:100,lightness:35},"--accent-fill-color":{hue:0,saturation:0,lightness:90},"--background-color":{hue:25,saturation:85,lightness:65},"--foreground-color":{hue:25,saturation:100,lightness:35},"--text-color":{hue:0,saturation:0,lightness:90},"--tile-background-color":{hue:30,saturation:90,lightness:45},"--tile-text-color":{hue:0,saturation:0,lightness:90}}],["Yellow",{"--accent-color":{hue:50,saturation:85,lightness:50},"--accent-fill-color":{hue:0,saturation:0,lightness:6},"--background-color":{hue:50,saturation:85,lightness:75},"--foreground-color":{hue:50,saturation:85,lightness:50},"--text-color":{hue:0,saturation:0,lightness:10},"--tile-background-color":{hue:55,saturation:85,lightness:55},"--tile-text-color":{hue:0,saturation:0,lightness:6}}],["Green",{"--accent-color":{hue:115,saturation:95,lightness:25},"--accent-fill-color":{hue:0,saturation:0,lightness:90},"--background-color":{hue:115,saturation:50,lightness:65},"--foreground-color":{hue:115,saturation:95,lightness:25},"--text-color":{hue:0,saturation:0,lightness:90},"--tile-background-color":{hue:120,saturation:90,lightness:40},"--tile-text-color":{hue:0,saturation:0,lightness:90}}],["Blue",{"--accent-color":{hue:210,saturation:95,lightness:25},"--accent-fill-color":{hue:0,saturation:0,lightness:90},"--background-color":{hue:210,saturation:50,lightness:65},"--foreground-color":{hue:210,saturation:95,lightness:25},"--text-color":{hue:0,saturation:0,lightness:90},"--tile-background-color":{hue:235,saturation:90,lightness:60},"--tile-text-color":{hue:0,saturation:0,lightness:90}}],["Purple",{"--accent-color":{hue:300,saturation:95,lightness:25},"--accent-fill-color":{hue:0,saturation:0,lightness:90},"--background-color":{hue:300,saturation:50,lightness:65},"--foreground-color":{hue:300,saturation:95,lightness:25},"--text-color":{hue:0,saturation:0,lightness:90},"--tile-background-color":{hue:300,saturation:75,lightness:55},"--tile-text-color":{hue:0,saturation:0,lightness:90}}]]),G=function(e){for(var t={},n=0,a=Object.entries(e);n<a.length;n++){var r=Object(f.a)(a[n],2),l=r[0],c=r[1];t[l]="hsl(".concat(c.hue,", ").concat(c.saturation,"%, ").concat(c.lightness,"%)")}return t},q=F;n(26),n(27),n(28),n(29);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Q=r.a.createElement("path",{d:"M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm.456-11.429l-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z"}),W=function(e){var t=e.svgRef,n=e.title,a=K(e,["svgRef","title"]);return r.a.createElement("svg",Y({width:24,height:24,fillRule:"evenodd",clipRule:"evenodd",ref:t},a),n?r.a.createElement("title",null,n):null,Q)},X=r.a.forwardRef((function(e,t){return r.a.createElement(W,Y({svgRef:t},e))}));n.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ee=r.a.createElement("path",{d:"M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"}),te=function(e){var t=e.svgRef,n=e.title,a=$(e,["svgRef","title"]);return r.a.createElement("svg",Z({width:24,height:24,viewBox:"0 0 24 24",ref:t},a),n?r.a.createElement("title",null,n):null,ee)},ne=r.a.forwardRef((function(e,t){return r.a.createElement(te,Z({svgRef:t},e))}));n.p;function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var le=r.a.createElement("path",{d:"M4 21.832c4.587.38 2.944-4.493 7.188-4.538l1.838 1.534c.458 5.538-6.315 6.773-9.026 3.004zm14.065-7.115c1.427-2.239 5.847-9.749 5.847-9.749.352-.623-.43-1.273-.976-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.039 3.995-2.81zm-11.999 3.876c.666-1.134 1.748-2.977 4.447-3.262.434-2.087.607-3.3 2.547-5.112 1.373-1.282 4.938-4.409 7.021-6.229-1-2.208-4.141-4.023-8.178-3.99-6.624.055-11.956 5.465-11.903 12.092.023 2.911 1.081 5.571 2.82 7.635 1.618.429 2.376.348 3.246-1.134zm6.952-15.835c1.102-.006 2.005.881 2.016 1.983.004 1.103-.882 2.009-1.986 2.016-1.105.009-2.008-.88-2.014-1.984-.013-1.106.876-2.006 1.984-2.015zm-5.997 2.001c1.102-.01 2.008.877 2.012 1.983.012 1.106-.88 2.005-1.98 2.016-1.106.007-2.009-.881-2.016-1.988-.009-1.103.877-2.004 1.984-2.011zm-2.003 5.998c1.106-.007 2.01.882 2.016 1.985.01 1.104-.88 2.008-1.986 2.015-1.105.008-2.005-.88-2.011-1.985-.011-1.105.879-2.004 1.981-2.015zm10.031 8.532c.021 2.239-.882 3.718-1.682 4.587l-.046.044c5.255-.591 9.062-4.304 6.266-7.889-1.373 2.047-2.534 2.442-4.538 3.258z"}),ce=function(e){var t=e.svgRef,n=e.title,a=re(e,["svgRef","title"]);return r.a.createElement("svg",ae({width:24,height:24,viewBox:"0 0 24 24",ref:t},a),n?r.a.createElement("title",null,n):null,le)},oe=r.a.forwardRef((function(e,t){return r.a.createElement(ce,ae({svgRef:t},e))}));n.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ue=r.a.createElement("path",{d:"M6.1,24C4.4,24,3,22.6,3,20.9V6h18v14.9c0,1.7-1.4,3.1-3.1,3.1H6.1z M21.3,5H2.7C2.3,5,2,4.7,2,4.3V3.7         C2,3.3,2.3,3,2.7,3H8V1.5C8,0.7,8.7,0,9.5,0h5C15.3,0,16,0.7,16,1.5V3h5.3C21.7,3,22,3.3,22,3.7v0.5C22,4.7,21.7,5,21.3,5z M10,3h4         V2h-4V3z M10,9.9c0-0.6-0.6-1-1.3-1c-0.7,0-1.3,0.4-1.3,1v9c0,0.6,0.6,1,1.3,1c0.7,0,1.3-0.4,1.3-1V9.9z M16.6,9.9         c0-0.6-0.6-1-1.3-1c-0.7,0-1.3,0.4-1.3,1v9c0,0.6,0.6,1,1.3,1c0.7,0,1.3-0.4,1.3-1V9.9z"}),de=function(e){var t=e.svgRef,n=e.title,a=se(e,["svgRef","title"]);return r.a.createElement("svg",ie({width:24,height:24,viewBox:"0 0 24 24",ref:t},a),n?r.a.createElement("title",null,n):null,ue)},he=r.a.forwardRef((function(e,t){return r.a.createElement(de,ie({svgRef:t},e))})),fe=(n.p,n(42),document.querySelector(":root")),ge=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];me(e,t,n),localStorage.setItem(e,JSON.stringify(t))},me=function(e,t){var n=t.hue,a=t.saturation,r=t.lightness,l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];fe.style.setProperty(e,"hsl(".concat(n,", ").concat(a,"%, ").concat(r,"%)")),l&&fe.style.setProperty("".concat(e,"-highlight"),"hsl(".concat(n,", ").concat(a,"%, ").concat(r+10,"%)"))},ve=function(){var e=Object(o.c)(),t=Object(o.d)((function(e){return Object(e.modals.find((function(e){return"confirm-delete"===e.id}))).isOpen})),n=Object(o.d)((function(e){return Object(e.modals.find((function(e){return"color-settings"===e.id}))).isOpen})),l=Object(a.useState)(!1),c=Object(f.a)(l,2),i=c[0],s=c[1],u=Object(a.useState)(!1),d=Object(f.a)(u,2),h=d[0],g=d[1];return Object(a.useEffect)((function(){Object.keys(q.get("Dark")).forEach((function(e){var t=localStorage.getItem(e);t?me(e,JSON.parse(t)):ge(e,q.get("Dark")[e])}))}),[]),r.a.createElement(p.a,{backend:b.a,options:{enableMouseEvents:!0}},r.a.createElement("div",{className:"common"},r.a.createElement(S,null),r.a.createElement(E,null,r.a.createElement(k,{hasSnapToGrid:h,isEraseMode:i}),r.a.createElement(N,null),r.a.createElement(A,null,r.a.createElement(P,{title:"Delete all tiles",onClick:function(){return e(m("confirm-delete"))}},r.a.createElement(he,null),t?r.a.createElement(V,{id:"confirm-delete",heading:"Delete all tiles?",icon:r.a.createElement(he,null),modalClasses:"pad-ctn-2 border-foreground-highlight",iconClasses:"background-highlight"},r.a.createElement(R,{text:"Delete",classes:"red",onClick:function(){return e({type:"TILES_DELETED",payload:{}})}})):null),r.a.createElement(P,{title:"".concat(i?"Disable":"Enable"," erase mode"),onClick:function(){return s(!i)},isActive:i},r.a.createElement(X,null)),r.a.createElement(P,{title:"Change colors",onClick:function(){return e(m("color-settings"))}},r.a.createElement(oe,null),n?r.a.createElement(L,{id:"color-settings",classes:"color-settings",hasHeader:!0},r.a.createElement(w,{containerClasses:"full-width",tabClasses:"pad-ctn-1 a-center"},r.a.createElement(D,{label:"Themes"},r.a.createElement(J,{handleChange:ge})),r.a.createElement(D,{label:"Page"},r.a.createElement(B,{handleChange:ge,settings:[{title:"Background",cssVar:"--background-color"},{title:"Foreground",cssVar:"--foreground-color"},{title:"Text",cssVar:"--text-color"},{title:"Accent",cssVar:"--accent-color"},{title:"Accent Fill",cssVar:"--accent-fill-color"}]})),r.a.createElement(D,{label:"Tiles"},r.a.createElement(B,{handleChange:ge,settings:[{title:"Background",cssVar:"--tile-background-color"},{title:"Text",cssVar:"--tile-text-color"}]})))):null),r.a.createElement(P,{title:"Snap to grid",onClick:function(){return g(!h)},isActive:h},r.a.createElement(ne,null))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:h},r.a.createElement(ve,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.34d2d847.chunk.js.map