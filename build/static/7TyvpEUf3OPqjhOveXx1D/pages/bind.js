(window.webpackJsonp=window.webpackJsonp||[]).push([["3a1d"],{IIxA:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bind",function(){var e=t("WKVl");return{page:e.default||e}}])},WKVl:function(e,a,t){"use strict";t.r(a);t("MaXC");var r=t("4IMT"),n=t.n(r),l=(t("nTym"),t("qu0K")),o=t.n(l),c=(t("cUip"),t("iJl9")),s=t.n(c),i=(t("FGdI"),t("Pbn2")),p=t.n(i),u=t("zrwo"),d=t("q1tI"),m=t.n(d),f=t("YFqc"),w=t.n(f),g=t("Xg/G"),E=t("HgRd"),b=t("rqbr"),h=t.n(b);a.default=Object(g.connect)()(o.a.create()(function(e){var a=e.form,t=e.router,r=e.onLogin,l=e.dispatch,c=a.getFieldDecorator,i=a.getFieldValue,d=a.setFields,f=a.validateFields,g=t.query.shop_id;return m.a.createElement("div",{className:h.a.page},m.a.createElement(o.a,{className:h.a.form,onSubmit:function(e){e.preventDefault(),e.stopPropagation(),f(function(e,a){e||E.a.post("/user/bind",Object(u.a)({},a,{shop_id:g})).then(function(e){0==e.errcode&&(t.push("/"),l({type:"user/get"}).then(function(){r&&r()}))})})}},m.a.createElement(o.a.Item,null,c("username",{rules:[{required:!0,message:"请输入用户名"}]})(m.a.createElement(s.a,{prefix:m.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"用户名",size:"large"}))),m.a.createElement(o.a.Item,null,c("password",{rules:[{required:!0,validator:function(e,a,t){var r=i("confirm_password");a?r&&r!=a?t("两次密码输入不一致"):(t(),d({confirm_password:{value:r}})):t("请输入确认密码")}}]})(m.a.createElement(s.a,{prefix:m.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"设置至少6位的密码",size:"large"}))),m.a.createElement(o.a.Item,null,c("confirm_password",{rules:[{validator:function(e,a,t){var r=i("password");a?r&&r!=a?t("两次密码输入不一致"):(t(),d({password:{value:r}})):t("请输入密码")}}]})(m.a.createElement(s.a,{prefix:m.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"再次输入以确认密码",size:"large"}))),m.a.createElement(o.a.Item,null,m.a.createElement(n.a,{type:"primary",htmlType:"submit",block:!0,size:"large"},"绑定账号"),m.a.createElement("p",null,"我已有账号,",m.a.createElement(w.a,{href:"/login?shop_id=".concat(g||"")},m.a.createElement("a",null,"立即登录"))))))}))}},[["IIxA","5d41","9da1","ad9d"]]]);