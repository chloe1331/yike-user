(window.webpackJsonp=window.webpackJsonp||[]).push([["4f30"],{HfND:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return N});n("lSEL");var a=n("UIqZ"),r=n.n(a),c=(n("MaXC"),n("4IMT")),o=n.n(c),l=(n("fwXI"),n("CC+v")),i=n.n(l),s=(n("FGdI"),n("Pbn2")),u=n.n(s),d=(n("tL+A"),n("QpBz")),f=n.n(d),p=n("doui"),m=n("q1tI"),y=n.n(m),h=n("wd/R"),v=n.n(h),b=n("YFqc"),E=n.n(b),O=n("HgRd"),w=n("mVpe"),_=n.n(w),g=n("374s"),j=n("OLV9"),x=n("s/Gc"),k=n.n(x),I=_.a.production.url;function N(){var e=Object(m.useRef)(),t=Object(m.useState)(!1),n=Object(p.default)(t,2),a=n[0],c=n[1],l=Object(m.useState)(!1),s=Object(p.default)(l,2),d=s[0],h=s[1];return y.a.createElement("div",{className:"page-layout-center"},y.a.createElement(i.a,{visible:a,onCancel:function(){c(!1)},okText:"知道了",width:360,footer:!!d&&void 0,closable:!1,maskClosable:!1},d?y.a.createElement("div",{className:k.a.success},y.a.createElement("div",null,y.a.createElement(j.c,{type:"icon-success",style:{fontSize:42}})),y.a.createElement("p",null,"同步成功")):y.a.createElement("div",null,y.a.createElement(u.a,{type:"loading"})," 同步中，请耐心等待...")),y.a.createElement("div",{className:"form-condition"},y.a.createElement(o.a,{type:"primary",href:"".concat(I.api,"/shop/auth?type=pdd&state=auth")},"添加拼多多店铺")),y.a.createElement(j.n,{action:"/shop/list",ref:e,columns:[{key:"name",dataIndex:"name",title:"店铺",render:function(e,t){return y.a.createElement(j.a,{src:t.logo,title:e})}},{key:"type",dataIndex:"type",title:"类型",render:function(e){return g.b[e].name}},{key:"status",dataIndex:"refresh_token_expires_at",title:"店铺状态",width:220,render:function(e){return 1e3*Number(e)<v()().valueOf()?y.a.createElement("span",{className:"text-error"},"授权到期"):y.a.createElement("span",{className:"text-success"},"已授权")}},{key:"createdAt",dataIndex:"createdAt",title:"接入时间",width:220},{key:"refresh_token_expires_at",dataIndex:"refresh_token_expires_at",title:"授权到期时间",width:220,render:function(e){return v()(1e3*Number(e)).format("YYYY-MM-DD HH:mm:ss")}},{key:"setting",dataIndex:"id",title:"操作",render:function(e,t){return y.a.createElement(m.Fragment,null,y.a.createElement("a",{onClick:function(){return function(e){c(!0),O.a.get("/shop/order/sync",{shop_id:e}).then(function(e){0==e.errcode?(h(!0),f.a.success("同步成功")):c(!1)})}(e)}},"同步订单"),y.a.createElement(r.a,{type:"vertical"}),y.a.createElement("a",{href:"".concat(I.api,"/shop/auth?type=pdd&state=reload")},"重新授权"),y.a.createElement(r.a,{type:"vertical"}),y.a.createElement(E.a,{href:"/?shop_id=".concat(e)},y.a.createElement("a",null,"去下单")))}}]}))}},Qj2m:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){var e=n("HfND");return{page:e.default||e}}])},UIqZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t=l();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(n,r,c):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(a=n("TSYQ"))&&a.__esModule?a:{default:a},o=n("vgIT");function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},d=function(e){return r.createElement(o.ConfigConsumer,null,function(t){var n,a=t.getPrefixCls,o=e.prefixCls,l=e.type,d=void 0===l?"horizontal":l,f=e.orientation,p=void 0===f?"center":f,m=e.className,y=e.children,h=e.dashed,v=u(e,["prefixCls","type","orientation","className","children","dashed"]),b=a("divider",o),E=p.length>0?"-".concat(p):p,O=(0,c.default)(m,b,"".concat(b,"-").concat(d),(s(n={},"".concat(b,"-with-text").concat(E),y),s(n,"".concat(b,"-dashed"),!!h),n));return r.createElement("div",i({className:O},v,{role:"separator"}),y&&r.createElement("span",{className:"".concat(b,"-inner-text")},y))})};t.default=d},lSEL:function(e,t,n){"use strict";n("VEUW"),n("M9t7")}},[["Qj2m","5d41","9da1","ad9d"]]]);