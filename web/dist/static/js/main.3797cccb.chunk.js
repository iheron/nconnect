(this["webpackJsonpnconnect-web"]=this["webpackJsonpnconnect-web"]||[]).push([[0],{103:function(e,t,n){},147:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),o=(n(102),n(103),n(55)),i=n(19),d=n(72),l={en:{translation:n(73)},"zh-CN":{translation:n(74)}};o.a.use(d.a).use(i.e).init({resources:l,fallbackLng:"en",interpolation:{escapeValue:!1}});var u=o.a,p=n(10),h=n.n(p),m=n(14),v=n(77),g=n(78),k=n(20),f=n(86),b=n(87),A=n(79),w=n.n(A),y=n(199),L=n(208),C=n(193),E=n(204),S=n(207),P=n(200),O=n(203),j=n(205),x=n(201),M=n(202),N=n(80),I=n.n(N);var T="/rpc/admin",D={getAdminToken:{method:"getAdminToken"},getAddrs:{method:"getAddrs"},setAddrs:{method:"setAddrs"},addAddrs:{method:"addAddrs"},removeAddrs:{method:"removeAddrs"},getLocalIP:{method:"getLocalIP"},getInfo:{method:"getInfo"}},R={},Q=function(e){D.hasOwnProperty(e)&&(R[e]=function(t,n){return n=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];for(var r=0,s=n;r<s.length;r++){var c=s[r];if(c)for(var o=0,i=Object.keys(c);o<i.length;o++){var d=i[o];void 0!==c[d]&&(e[d]=c[d])}}return e}({},D[e].defaultParams,n),function(e,t){return K.apply(this,arguments)}(t,D[e].method,n)})};for(var _ in D)Q(_);function K(){return(K=Object(m.a)(h.a.mark((function e(t,n){var a,r,s,c=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:{},e.next=3,I()({url:t,method:"POST",timeout:1e4,data:{id:"nConnect-web",jsonrpc:"2.0",method:n,params:a}});case 3:if(r=e.sent,!(s=r.data).error){e.next=7;break}throw s.error;case 7:if(void 0===s.result){e.next=9;break}return e.abrupt("return",s.result);case 9:throw new Error("rpc response contains no result or error field");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return q.apply(this,arguments)}function q(){return(q=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.getAdminToken(T));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.getAddrs(T));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t){return F.apply(this,arguments)}function F(){return(F=Object(m.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},t&&(a.acceptAddrs=t),n&&(a.adminAddrs=n),e.abrupt("return",R.setAddrs(T,a));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.getInfo(T));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(147);var U=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var a;Object(v.a)(this,n),(a=t.call(this,e)).state={adminTokenStr:"",adminTokenQRCode:"",acceptAddrs:"",adminAddrs:"",addr:"",localIP:[],language:"",showAdvanced:!1};for(var r=0;r<u.languages.length;r++)if(l[u.languages[r]]){a.state.language=u.languages[r];break}return a.handleAcceptAddrsChange=a.handleAcceptAddrsChange.bind(Object(k.a)(a)),a.handleAdminAddrsChange=a.handleAdminAddrsChange.bind(Object(k.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(a)),a.updateAdminToken=a.updateAdminToken.bind(Object(k.a)(a)),a.handleAdvancedChange=a.handleAdvancedChange.bind(Object(k.a)(a)),a.handleLanguageChange=a.handleLanguageChange.bind(Object(k.a)(a)),a}return Object(g.a)(n,[{key:"handleAcceptAddrsChange",value:function(e){this.setState({acceptAddrs:e.target.value})}},{key:"handleAdminAddrsChange",value:function(e){this.setState({adminAddrs:e.target.value})}},{key:"handleAdvancedChange",value:function(e){this.setState({showAdvanced:!this.state.showAdvanced})}},{key:"handleLanguageChange",value:function(e){this.setState({language:e.target.value}),u.changeLanguage(e.target.value)}},{key:"handleSubmit",value:function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,B(G(this.state.acceptAddrs),G(this.state.adminAddrs));case 4:n=e.sent,this.setState({acceptAddrs:V(n.acceptAddrs),adminAddrs:V(n.adminAddrs)}),alert("Save success!"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),alert(e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"updateAdminToken",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J();case 3:if(!(t=e.sent)){e.next=10;break}return n=JSON.stringify(t),e.next=8,w.a.toDataURL(n);case 8:a=e.sent,this.setState({adminTokenStr:n,adminTokenQRCode:a});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.updateAdminToken(),setInterval(this.updateAdminToken,3e5),function(){return z.apply(this,arguments)}().then((function(t){e.setState({acceptAddrs:V(t.acceptAddrs),adminAddrs:V(t.adminAddrs)})})).catch((function(e){console.error(e),alert(e)})),function(){return H.apply(this,arguments)}().then((function(t){e.setState({addr:t.addr,localIP:t.localIP.ipv4})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C.a,null,r.a.createElement("div",{className:"language-switcher"},r.a.createElement(E.a,{value:this.state.language,onChange:this.handleLanguageChange},Object.keys(l).map((function(e){return r.a.createElement(S.a,{key:e,value:e},u.getFixedT(e)("language"))})))),r.a.createElement("div",{className:"row"},r.a.createElement("img",{src:"/static/media/nkn_logo.png",alt:"NKN logo"})),r.a.createElement("div",{className:"row"},r.a.createElement("img",{src:this.state.adminTokenQRCode,alt:"QR Code"})),r.a.createElement("div",{className:"row"},r.a.createElement(y.a,{i18nKey:"get started",components:{getStartedLink:r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.t("getStartedLink")})}})),r.a.createElement("div",{className:"row"},r.a.createElement(y.a,{i18nKey:"QR code description",components:{nMobileProLink:r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.t("nMobileProLink")})}})),r.a.createElement("div",{className:"row"},r.a.createElement(y.a,{i18nKey:"desktop client description",components:{nConnectClientDesktopLink:r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.t("nConnectClientDesktopLink")})}})),r.a.createElement("div",{className:"row"},r.a.createElement(y.a,{i18nKey:"purchase description",components:{nMobileProLink:r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.t("nMobileProLink")}),paymentLink:r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.t("paymentLink",{addr:W(this.state.addr),lng:this.state.language})})}})),r.a.createElement("div",{className:"row"},r.a.createElement(y.a,{i18nKey:"custom service description",components:{customServiceLink:r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.t("customServiceLink")})}})),r.a.createElement("div",{className:"row"},r.a.createElement(P.a,{variant:"outlined",color:"primary",onClick:this.handleAdvancedChange,style:{width:"100%"}},this.state.showAdvanced?r.a.createElement(x.a,null):r.a.createElement(M.a,null),this.state.showAdvanced?this.props.t("hide advanced"):this.props.t("show advanced"))),r.a.createElement(O.a,{in:this.state.showAdvanced},r.a.createElement("div",{className:"advanced-row"},r.a.createElement(j.a,{disabled:!0,multiline:!0,label:this.props.t("local IP address"),value:this.state.localIP.join("\n"),style:{width:"100%"}})),r.a.createElement("div",{className:"advanced-row"},r.a.createElement(j.a,{disabled:!0,multiline:!0,label:this.props.t("access key"),value:this.state.adminTokenStr,style:{width:"100%"}})),r.a.createElement("div",{className:"advanced-row"},r.a.createElement(j.a,{multiline:!0,variant:"filled",label:this.props.t("accept addresses"),value:this.state.acceptAddrs,onChange:this.handleAcceptAddrsChange,style:{width:"100%"}}),r.a.createElement(j.a,{multiline:!0,variant:"filled",label:this.props.t("admins"),value:this.state.adminAddrs,onChange:this.handleAdminAddrsChange,style:{width:"100%"}})),r.a.createElement("div",{className:"advanced-row"},r.a.createElement(P.a,{variant:"contained",color:"primary",onClick:this.handleSubmit,style:{width:"100%"}},this.props.t("save"))))))}}]),n}(r.a.Component);function V(e){return e?e.join("\n"):""}function G(e){return e?e.split("\n").filter((function(e){return e.length>0})):[]}function W(e){var t=e.split(".");return t[t.length-1]}var X=Object(L.a)()(U);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root"))},73:function(e){e.exports=JSON.parse('{"language":"English","get started":"Read <getStartedLink>this guide</getStartedLink> to get started.","QR code description":"Scan the QR code on <nMobileProLink>nMobile Pro</nMobileProLink> to manage and connect to this device.","desktop client description":"Download <nConnectClientDesktopLink>nConnect client for desktop</nConnectClientDesktopLink> to connect to this device from desktop.","purchase description":"Purchase data plan on <nMobileProLink>nMobile Pro</nMobileProLink> or <paymentLink>web payment portal</paymentLink>.","custom service description":"If you have any questions, check out our <customServiceLink>custom service information</customServiceLink>.","show advanced":"Show Advanced Settings","hide advanced":"Hide Advanced Settings","local IP address":"Local IP address","access key":"Access key (valid for 5 minutes)","accept addresses":"Accept addresses","admins":"Admins","save":"Save","getStartedLink":"https://forum.nkn.org/t/nconnect-user-manual-video-nconnect/2457","nMobileProLink":"https://www.nkn.org/nMobile-pro/","nConnectClientDesktopLink":"https://forum.nkn.org/t/nconnect-pc-download-nconnectpc/2456","paymentLink":"https://nconnect-payment.nkncdn.com/payment/?addr={{addr}}&lng={{lng}}","customServiceLink":"https://forum.nkn.org/t/nconnect-customer-service-nconnect/2461"}')},74:function(e){e.exports=JSON.parse('{"language":"\u7b80\u4f53\u4e2d\u6587","get started":"\u9605\u8bfb<getStartedLink>\u65b0\u624b\u6559\u7a0b</getStartedLink>\u4ee5\u4e86\u89e3\u4f7f\u7528\u65b9\u5f0f\u3002","QR code description":"\u5728 <nMobileProLink>nMobile Pro</nMobileProLink> \u4e2d\u626b\u63cf\u4e8c\u7ef4\u7801\u6765\u7ba1\u7406\u548c\u8fde\u63a5\u672c\u8bbe\u5907\u3002","desktop client description":"\u4e0b\u8f7d <nConnectClientDesktopLink>nConnect \u684c\u9762\u7248\u5ba2\u6237\u7aef</nConnectClientDesktopLink>\u53ef\u4ee5\u4ece\u7535\u8111\u8fde\u63a5\u5230\u672c\u8bbe\u5907\u3002","purchase description":"\u5728 <nMobileProLink>nMobile Pro</nMobileProLink> \u5185\u6216<paymentLink>\u5728\u7ebf\u652f\u4ed8\u9875\u9762</paymentLink>\u8d2d\u4e70\u6d41\u91cf\u3002","custom service description":"\u5982\u679c\u60a8\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u8bbf\u95ee\u6211\u4eec\u7684<customServiceLink>\u5ba2\u670d\u4fe1\u606f\u9875\u9762</customServiceLink>\u3002","show advanced":"\u663e\u793a\u9ad8\u7ea7\u8bbe\u7f6e","hide advanced":"\u9690\u85cf\u9ad8\u7ea7\u8bbe\u7f6e","local IP address":"\u672c\u5730 IP \u5730\u5740","access key":"\u8bbf\u95ee\u5bc6\u94a5\uff085 \u5206\u949f\u5185\u6709\u6548\uff09","accept addresses":"\u767d\u540d\u5355\u5730\u5740","admins":"\u7ba1\u7406\u5458\u5730\u5740","save":"\u4fdd\u5b58"}')},97:function(e,t,n){e.exports=n(161)}},[[97,1,2]]]);
//# sourceMappingURL=main.3797cccb.chunk.js.map