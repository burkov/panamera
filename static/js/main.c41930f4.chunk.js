(this.webpackJsonppanamera=this.webpackJsonppanamera||[]).push([[0],{162:function(e,t){},18:function(e,t,a){e.exports={allTheSameRow:"params-table_allTheSameRow__2SPTF",paramsTable:"params-table_paramsTable__sEcuf",missingValueCell:"params-table_missingValueCell__3FAgM",nameTh:"params-table_nameTh__2elJw",envTh:"params-table_envTh__20z_z",valueCell:"params-table_valueCell__3uKF-",consistent0:"params-table_consistent0__nk44Y",consistent1:"params-table_consistent1__3Z1kP",consistent2:"params-table_consistent2__3wpqd",consistent3:"params-table_consistent3__2BjrA",consistent4:"params-table_consistent4__3gna6",consistent5:"params-table_consistent5__qe5XP",consistent6:"params-table_consistent6__1dqVQ",consistent7:"params-table_consistent7__nSmXD",consistent8:"params-table_consistent8__3hWSc",copyValueMenuIcon:"params-table_copyValueMenuIcon__1PEoo"}},260:function(e,t,a){e.exports={verticalLine:"creds-prompt_verticalLine__Tx2pu"}},261:function(e,t,a){e.exports={linkButton:"link-button_linkButton__2xyCc"}},262:function(e,t,a){e.exports={errorDiv:"error-div_errorDiv__1C-Yp"}},281:function(e,t,a){},83:function(e,t,a){e.exports={wideDiv:"page_wideDiv__2inSG",pageContainer:"page_pageContainer__sagIe",contentWrapper:"page_contentWrapper__3aSSW",footer:"page_footer__3hx7W",branch:"page_branch__1t1gv"}},914:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),s=a.n(r),c=a(252),i=a.n(c),l=a(61),o=a.n(l),u=a(253),p=a.n(u),j=(a(280),a(281),a(282),a(915),a(30)),d=a(260),b=a.n(d),m=a(17),f=a.n(m),h=a(20),v=a(35),x=a(27),O=a(118),_=a(5),g=a.n(_),w=a(261),y=a.n(w),N=function(e){var t=e.children,a=Object(O.a)(e,["children"]);return Object(n.jsx)("button",Object(x.a)(Object(x.a)({},a),{},{className:g()("wt-link",y.a.linkButton),children:t}))},C=a(262),S=a.n(C),k=function(e){var t=e.className,a=e.error;return a?Object(n.jsxs)("div",{className:g()(S.a.errorDiv,"wt-text-2",t),children:["Error: ",a.message]}):null},V=a(263),M=a.n(V),P=a(120),F=a(169),T=function(e){return e.split("").map((function(t,a){return a<6||a>e.length-4?t:"*"})).join("")},I=function(e,t){try{var a=e();a instanceof Promise&&a.catch(t)}catch(n){t(n)}},K=function(){var e=Object(v.a)(f.a.mark((function e(){var t,a,n,r,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.showOpenFilePicker({multiple:!1});case 2:return t=e.sent,a=Object(h.a)(t,1),n=a[0],e.next=7,n.getFile();case 7:if("credentials"===(r=e.sent).name){e.next=10;break}throw new Error("File should be named 'credentials'");case 10:return e.t0=M.a,e.next=13,r.text();case 13:return e.t1=e.sent,s=e.t0.parse.call(e.t0,e.t1),c=P.a().shape({aws_access_key_id:P.b().required(),aws_secret_access_key:P.b().required()}),e.abrupt("return",Object.entries(s).filter((function(e){var t=Object(h.a)(e,2)[1];return c.isValidSync(t)})).map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];return[a,{accessKey:n.aws_access_key_id,secretKey:n.aws_secret_access_key}]})));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(e){var t=e.onCredentialsSelected,a=Object(r.useState)(),s=Object(h.a)(a,2),c=s[0],i=s[1],l=Object(r.useState)(),o=Object(h.a)(l,2),u=o[0],p=o[1];Object(r.useEffect)((function(){u&&1===u.length&&t(u[0][1])}),[u,t]);var j=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(void 0),I(Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,K();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)}))),i);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{className:"wt-h4",children:"Select profile to use:"}),Object(n.jsx)("div",{className:"wt-offset-top-12"}),Object(n.jsx)(F.a,{size:"xs",children:u.map((function(e){var a=Object(h.a)(e,2),r=a[0],s=a[1];return Object(n.jsxs)(F.b,{onClick:function(){return t(s)},children:[r," (",T(s.accessKey),")"]},r)}))})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"wt-text-2",children:[Object(n.jsx)(N,{onClick:j,children:"Import"})," credentials from ",Object(n.jsx)("strong",{children:"~/.aws/credentials"}),Object(n.jsx)(k,{className:"wt-offset-top-12",error:c})]})})},D=a(273),E=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(a){return console.error("Failed to read value from local storage",a),void localStorage.removeItem(e)}},W=function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){var t=Object(D.a)(e,W,{initialData:E(e)}),a=t.data,n=t.mutate;return{value:a,setValue:function(t){localStorage.setItem(e,JSON.stringify(t)),n(t).catch(console.error)},removeValue:function(){localStorage.removeItem(e),n(void 0).catch(console.error)}}},B=function(){var e=A("aws-credentials");return{credentials:e.value,setCredentials:e.setValue,removeCredentials:e.removeValue}},q=a(16),J=function(){var e,t,a=B(),s=a.credentials,c=a.setCredentials,i=Object(q.g)(),l=Object(q.h)(),o=null!==(e=null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return Object(r.useEffect)((function(){void 0!==s&&i.push(o)}),[s,i,o]),Object(n.jsxs)(j.f,{children:[Object(n.jsx)(j.a,{span:4,children:Object(n.jsx)(z,{onCredentialsSelected:function(e){c(e),i.push(o)}})}),Object(n.jsx)(j.a,{span:"inline",children:Object(n.jsx)("div",{className:b.a.verticalLine})}),Object(n.jsx)(j.a,{span:"inline",children:Object(n.jsxs)("ul",{className:"wt-ul",children:[Object(n.jsx)("li",{children:"Keys will be used for read-only operations"}),Object(n.jsx)("li",{children:"Keys will be stored in browser local storage"}),Object(n.jsx)("li",{children:"Keys will be used only from this webapp, they are not transferred anywhere"}),Object(n.jsx)("li",{children:"You can remove them anytime you want later by clicking 'Sign out' link"})]})})]})},L=function(e){var t=e.children,a=Object(O.a)(e,["children"]),r=B().credentials;return Object(n.jsx)(q.b,Object(x.a)(Object(x.a)({},a),{},{children:function(e){var a=e.location;return void 0===r?Object(n.jsx)(q.a,{to:{pathname:"/credentials",state:{from:a}}}):t}}))},R=a(83),Y=a.n(R),H=function(e){var t=e.children,a={branch:"main",tags:[],commit:{shortHash:"a42e3e3",hash:"a42e3e300435a24426dcecb3ec9b14481479136f",date:"2021-01-11T23:18:18+03:00",message:"Copy to clipboard feature"}},r=a.branch,s=a.commit,c=s.date,i=s.shortHash,l=s.message;return Object(n.jsxs)("div",{className:Y.a.pageContainer,children:[Object(n.jsxs)("div",{className:Y.a.contentWrapper,children:[Object(n.jsx)(j.e,{children:Object(n.jsx)("h1",{className:"wt-h1",children:"Panamera: parameter naming errors resolution assistant"})}),Object(n.jsx)(j.c,{className:"wt-offset-top-24",children:t})]}),Object(n.jsxs)(j.d,{className:Y.a.footer,children:[Object(n.jsx)(j.b,{}),Object(n.jsxs)("p",{className:"wt-text-3",children:[i," | ",Object(n.jsx)("span",{className:Y.a.branch,children:r})," | built ",o()(c).fromNow()," | ",l]})]})]})},G=a(10),X=a(168),Q=a.n(X),U=a(170),Z=a(18),$=a.n(Z),ee=a(269),te=a.n(ee),ae=a(274),ne=a(270),re=a(271),se=a.n(re),ce=function(){return Object(n.jsx)("td",{className:$.a.missingValueCell,children:"<Value is missing>"})},ie=a(121),le=a(917),oe=a(272),ue="SingleValueCell",pe=function(e){var t=e.parameter.Value,a=e.colorClassMap,r=Object(ie.c)({id:ue}).show;return Object(n.jsx)("td",{onContextMenu:function(e){e.preventDefault(),r(e,{props:{value:t}})},className:g()($.a.valueCell,a.get(t)),children:me(24,t)})},je=function(){return Object(n.jsx)(ie.b,{id:ue,animation:!1,children:Object(n.jsxs)(ie.a,{onClick:function(e){var t=e.props.value;return oe.a(t)},className:"wt-text-3",children:[Object(n.jsx)(le.a,{size:"xs",className:$.a.copyValueMenuIcon})," Copy value"]})})},de=function(e){var t=e.parameters,a=e.colorClassMap;return 1===new Set(t.map((function(e){return e.Value}))).size?Object(n.jsx)(pe,{parameter:t[0],colorClassMap:a}):Object(n.jsx)("td",{className:g()($.a.valueCell,a.get(t[0].Value)),children:t.map((function(e){var t=e.Value,a=e.Prefix,r=a.slice(a.lastIndexOf("/")+1).replace("lservice","ls").replace("allapps","all");return Object(n.jsxs)("p",{children:[r,": ",me(12,null!==t&&void 0!==t?t:"")]},t)}))})},be=(a(913),["dev1","dev2","dev3","dev4","dev5","audt","stgn/blue","stgn/green"]),me=function(e,t){return t.length>e?t.slice(0,e)+"...":t},fe=[$.a.consistent0,$.a.consistent1,$.a.consistent2,$.a.consistent3,$.a.consistent4,$.a.consistent5,$.a.consistent6,$.a.consistent7,$.a.consistent8],he=function(e){var t=e.paramsForName,a=new Map(Object.entries(te.a.countBy(t,"Value")).map((function(e,t){return[Object(h.a)(e,1)[0],fe[t]]})));return Object(n.jsx)(n.Fragment,{children:be.map((function(e){var r=t.filter((function(t){return t.Name.includes(e)})),s="".concat(e,"-value"),c=r.length<=0,i=1===r.length;return c?Object(n.jsx)(ce,{},s):i?Object(n.jsx)(pe,{parameter:r[0],colorClassMap:a},s):Object(n.jsx)(de,{parameters:r,colorClassMap:a},s)}))})},ve=function(e){var t=e.params,a=Object(r.useState)(""),s=Object(h.a)(a,2),c=s[0],i=s[1],l=Object(r.useMemo)((function(){var e=new Map;return t.forEach((function(t){var a,n=t.Name.slice(t.Prefix.length),r=null!==(a=e.get(n))&&void 0!==a?a:[];e.set(n,[].concat(Object(G.a)(r),[t]))})),Array.from(e.entries()).sort().map((function(e){var t=Object(h.a)(e,2);return{name:t[0],paramsForName:t[1]}}))}),[t]),o=Object(r.useMemo)((function(){return 0===c.trim().length?l.map((function(e){return{item:e,matches:[],refIndex:-1}})):new ne.a(l,{keys:["name"],includeMatches:!0,minMatchCharLength:2,includeScore:!0}).search(c).filter((function(e){var t=e.score;return(null!==t&&void 0!==t?t:0)<.5}))}),[l,c]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j.f,{size:"0",children:Object(n.jsx)(j.a,{span:4,children:Object(n.jsx)(ae.a,{size:"xs",placeholder:"Search by param name",onChange:function(e){return i(e.target.value)}})})}),Object(n.jsxs)("table",{className:g()("wt-table wt-table_wide wt-table_size_xs wt-offset-top-12",$.a.paramsTable),children:[Object(n.jsx)("thead",{className:"wt-text-3",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:$.a.nameTh,children:"Name"}),be.map((function(e){return Object(n.jsx)("th",{className:$.a.envTh,children:e},e)}))]})}),Object(n.jsx)("tbody",{className:"wt-text-3",children:o.map((function(e){var t,a=e.item,r=a.name,s=a.paramsForName,c=e.matches,i=null!==(t=null===c||void 0===c?void 0:c.flatMap((function(e){return e.indices.map((function(e){return r.slice(e[0],e[1]+1)}))})))&&void 0!==t?t:[];return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:400,children:Object(n.jsx)(se.a,{searchWords:i,textToHighlight:r})}),Object(n.jsx)(he,{paramsForName:s})]},"".concat(r,"-row"))}))})]}),Object(n.jsx)(je,{})]})},xe=[{tomcat:"/jetprofile-dev1/",lservice:"/jetprofile/dev1/lservice",allapps:"/jetprofile/dev1/allapps"},{tomcat:"/jetprofile-dev2/",lservice:"/jetprofile/dev2/lservice",allapps:"/jetprofile/dev2/allapps"},{tomcat:"/jetprofile-dev3/",lservice:"/jetprofile/dev3/lservice",allapps:"/jetprofile/dev3/allapps"},{tomcat:"/jetprofile-dev4/",lservice:"/jetprofile/dev4/lservice",allapps:"/jetprofile/dev4/allapps"},{tomcat:"/jetprofile-dev5/",lservice:"/jetprofile/dev5/lservice",allapps:"/jetprofile/dev5/allapps"},{tomcat:"/jetprofile-audt/",lservice:"/jetprofile/audt/lservice",allapps:"/jetprofile/audt/allapps"},{tomcat:"/jetprofile-stgn/",lservice:"/jetprofile/stgn/blue/lservice",allapps:"/jetprofile/stgn/blue/allapps"},{tomcat:"/jetprofile-stgn/",lservice:"/jetprofile/stgn/green/lservice",allapps:"/jetprofile/stgn/green/allapps"}],Oe=function(){var e=B(),t=e.credentials,a=e.removeCredentials,s=null!==t&&void 0!==t?t:{accessKey:"",secretKey:""},c=s.accessKey,i=s.secretKey,l=Object(r.useState)(),u=Object(h.a)(l,2),p=u[0],j=u[1],d=Object(r.useState)([]),b=Object(h.a)(d,2),m=b[0],x=b[1],O=new Q.a.SSM({region:"eu-west-1",credentials:new X.Credentials(c,i)}),_=A("aws-params"),g=_.value,w=_.setValue,y=_.removeValue,N=null!==g&&void 0!==g?g:{fetchedAt:void 0,parameters:[]},C=N.fetchedAt,S=N.parameters,V=function(){var e=Object(v.a)(f.a.mark((function e(){var t,a,n,r,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=xe.flatMap((function(e){var t=e.tomcat,a=e.allapps;return[t,e.lservice,a]})),n=new Set(a),x([]),r=f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c[s],e.next=3,new Promise((function(e){var n=1;O.getParametersByPath({Path:a,Recursive:!0,WithDecryption:!0}).eachPage((function(r,s,c){return j("prefix '".concat(a,"' page ").concat(n," (total: ").concat(t.length,")")),r&&x((function(e){return[].concat(Object(G.a)(e),[r])})),(null===c||void 0===c?void 0:c())||((null===s||void 0===s?void 0:s.Parameters)&&t.push.apply(t,Object(G.a)(null===s||void 0===s?void 0:s.Parameters.map((function(e){return e.Prefix=a,e})))),n++),null==s&&e(void 0),!0}))}));case 3:case"end":return e.stop()}}),e)})),s=0,c=Array.from(n);case 6:if(!(s<c.length)){e.next=11;break}return e.delegateYield(r(),"t0",8);case 8:s++,e.next=6;break;case 11:w({fetchedAt:new Date,parameters:t}),j(void 0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"wt-text-2",children:["Using key: ",Object(n.jsx)("strong",{children:T(c)})," | Fetched ",Object(n.jsx)("strong",{children:null===S||void 0===S?void 0:S.length})," parameters ",Object(n.jsx)("strong",{children:C?o()(C).fromNow():""})," |"," ",Object(n.jsx)(U.a,{size:"xs",mode:"nude",onClick:V,children:"Refresh"})," ","|"," ",Object(n.jsx)(U.a,{size:"xs",mode:"nude",onClick:function(){a(),y()},children:"Sign out"})]}),Object(n.jsx)("div",{className:"wt-offset-top-12"}),m.length>0&&Object(n.jsx)(k,{error:new Error("Got ".concat(m.length," unexpected error while refreshing params"))}),void 0===p&&0===(null===S||void 0===S?void 0:S.length)&&Object(n.jsxs)("p",{className:"wt-text-2",children:["Parameters table is empty, press ",Object(n.jsx)("strong",{children:"Refresh"})," above to fill it"]}),p&&Object(n.jsxs)("p",{className:"wt-text-2",children:["Loading ",p,"..."]}),!p&&S.length>0&&Object(n.jsx)(ve,{params:S})]})},_e=function(){return Object(n.jsx)(H,{children:Object(n.jsxs)(q.d,{children:[Object(n.jsx)(q.b,{path:"/credentials",children:Object(n.jsx)(J,{})}),Object(n.jsx)(L,{path:"/",exact:!0,children:Object(n.jsx)(Oe,{})})]})})},ge=a(78);o.a.extend(p.a),i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(ge.a,{children:Object(n.jsx)(_e,{})})}),document.getElementById("root"))}},[[914,1,2]]]);
//# sourceMappingURL=main.c41930f4.chunk.js.map