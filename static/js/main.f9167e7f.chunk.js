(this.webpackJsonppanamera=this.webpackJsonppanamera||[]).push([[0],{134:function(e,t){},236:function(e,t,r){e.exports={verticalLine:"creds-prompt_verticalLine__Tx2pu"}},237:function(e,t,r){e.exports={linkButton:"link-button_linkButton__2xyCc"}},238:function(e,t,r){e.exports={errorDiv:"error-div_errorDiv__1C-Yp"}},244:function(e,t,r){e.exports={allTheSameRow:"params-table_allTheSameRow__1KWMe"}},252:function(e,t,r){},26:function(e,t,r){e.exports={wideDiv:"page_wideDiv__2inSG",pageContainer:"page_pageContainer__sagIe",contentWrapper:"page_contentWrapper__3aSSW",footer:"page_footer__3hx7W",branch:"page_branch__1t1gv"}},880:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(4),c=r.n(n),s=r(226),i=r.n(s),l=r(39),o=r.n(l),j=r(227),d=r.n(j),u=(r(251),r(252),r(253),r(8)),p=r(228),b=(r(881),r(883)),f=r(14),h=r(26),m=r.n(h),v=function(e){var t=e.children,r=e.wide,n={branch:"main",tags:[],commit:{shortHash:"de6b357",hash:"de6b357a6839b88a68af1aa971c8a207a85a1603",date:"2020-12-28T03:17:07+03:00",message:"Fix table header"}},c=n.branch,s=n.commit,i=s.date,l=s.shortHash,j=s.message;return r?Object(a.jsxs)("div",{className:m.a.pageContainer+" "+m.a.wideDiv,children:[Object(a.jsxs)("div",{className:m.a.contentWrapper,children:[Object(a.jsx)(f.f,{children:Object(a.jsx)("h1",{className:"wt-h1",children:"Panamera: parameter naming errors resolution assistant"})}),Object(a.jsx)(f.d,{className:"wt-offset-top-24",children:t})]}),Object(a.jsxs)(f.e,{className:m.a.footer,children:[Object(a.jsx)(f.c,{}),Object(a.jsxs)("p",{className:"wt-text-3",children:[l," | ",Object(a.jsx)("span",{className:m.a.branch,children:c})," | built ",o()(i).fromNow()," | ",j]})]})]}):Object(a.jsxs)(f.b,{className:m.a.pageContainer,children:[Object(a.jsxs)("div",{className:m.a.contentWrapper,children:[Object(a.jsx)(f.f,{children:Object(a.jsx)("h1",{className:"wt-h1",children:"Panamera: parameter naming errors resolution assistant"})}),Object(a.jsx)(f.d,{className:"wt-offset-top-24",children:t})]}),Object(a.jsxs)(f.e,{className:m.a.footer,children:[Object(a.jsx)(f.c,{}),Object(a.jsxs)("p",{className:"wt-text-3",children:[l," | ",Object(a.jsx)("span",{className:m.a.branch,children:c})," | built ",o()(i).fromNow()," | ",j]})]})]})},x=r(236),O=r.n(x),w=r(19),g=r.n(w),_=r(49),N=r(143),y=r(245),k=r(5),S=r.n(k),C=r(237),P=r.n(C),F=function(e){var t=e.children,r=Object(y.a)(e,["children"]);return Object(a.jsx)("button",Object(N.a)(Object(N.a)({},r),{},{className:S()("wt-link",P.a.linkButton),children:t}))},K=r(238),D=r.n(K),W=function(e){var t=e.className,r=e.error;return r?Object(a.jsxs)("div",{className:S()(D.a.errorDiv,"wt-text-2",t),children:["Error: ",r.message]}):null},B=r(239),M=r.n(B),E=r(96),R=r(141),V=function(e){return e.split("").map((function(t,r){return r<6||r>e.length-4?t:"*"})).join("")},z=function(e,t){try{var r=e();r instanceof Promise&&r.catch(t)}catch(a){t(a)}},A=function(){var e=Object(_.a)(g.a.mark((function e(){var t,r,a,n,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.showOpenFilePicker({multiple:!1});case 2:return t=e.sent,r=Object(u.a)(t,1),a=r[0],e.next=7,a.getFile();case 7:if("credentials"===(n=e.sent).name){e.next=10;break}throw new Error("File should be named 'credentials'");case 10:return e.t0=M.a,e.next=13,n.text();case 13:return e.t1=e.sent,c=e.t0.parse.call(e.t0,e.t1),s=E.a().shape({aws_access_key_id:E.b().required(),aws_secret_access_key:E.b().required()}),e.abrupt("return",Object.entries(c).filter((function(e){var t=Object(u.a)(e,2)[1];return s.isValidSync(t)})).map((function(e){var t=Object(u.a)(e,2),r=t[0],a=t[1];return[r,{accessKey:a.aws_access_key_id,secretKey:a.aws_secret_access_key}]})));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t=e.onCredentialsSelected,r=Object(n.useState)(),c=Object(u.a)(r,2),s=c[0],i=c[1],l=Object(n.useState)(),o=Object(u.a)(l,2),j=o[0],d=o[1];Object(n.useEffect)((function(){j&&1===j.length&&t(j[0][1])}),[j,t]);var p=function(){var e=Object(_.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(void 0),z(Object(_.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,A();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)}))),i);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return j?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{className:"wt-h4",children:"Select profile to use:"}),Object(a.jsx)("div",{className:"wt-offset-top-12"}),Object(a.jsx)(R.a,{size:"xs",children:j.map((function(e){var r=Object(u.a)(e,2),n=r[0],c=r[1];return Object(a.jsxs)(R.b,{onClick:function(){return t(c)},children:[n," (",V(c.accessKey),")"]},n)}))})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"wt-text-2",children:[Object(a.jsx)(F,{onClick:p,children:"Import"})," credentials from ",Object(a.jsx)("strong",{children:"~/.aws/credentials"}),Object(a.jsx)(W,{className:"wt-offset-top-12",error:s})]})})},I=function(e){var t=e.onCredentialsSelected;return Object(a.jsx)(v,{wide:!1,children:Object(a.jsxs)(f.g,{children:[Object(a.jsx)(f.a,{span:4,children:Object(a.jsx)(T,{onCredentialsSelected:t})}),Object(a.jsx)(f.a,{span:"inline",children:Object(a.jsx)("div",{className:O.a.verticalLine})}),Object(a.jsx)(f.a,{span:"inline",children:Object(a.jsxs)("ul",{className:"wt-ul",children:[Object(a.jsx)("li",{children:"Keys will be used for read-only operations"}),Object(a.jsx)("li",{children:"Keys will be stored in browser local storage"}),Object(a.jsx)("li",{children:"Keys will be used only from this webapp, they are not transferred anywhere"}),Object(a.jsx)("li",{children:"You can remove them anytime you want later by clicking 'Sign out' link"})]})})]})})},L=r(13),Y=r(139),q=r.n(Y),G=r(882),H=r(142),J=r(244),U=r.n(J),Q=r(95),X=r.n(Q),Z=r(140),$=["dev1","dev2","dev3","dev4","dev5","audt","stgn/blue","stgn/green"],ee=function(e,t){return t.length>e?t.slice(0,e)+"...":t},te=[Z.a,"#9cf55e","#adee98","#f5db8d","#f3c05b",Z.b,"#d3a301"],re=function(e){var t=e.paramsForName;if(1===new Set(t.map((function(e){return e.Value}))).size)return Object(a.jsx)("td",{colSpan:$.length,className:U.a.allTheSameRow,children:ee(64,t[0].Value)});var r=new Map(X.a.reverse(X.a.sortBy(Object.entries(X.a.countBy(t,"Value")),[function(e){return e[1]}])).map((function(e,t){return[Object(u.a)(e,1)[0],te[t]]})));return console.log(r),Object(a.jsx)(a.Fragment,{children:$.map((function(e){var n,c,s=t.filter((function(t){return t.Name.includes(e)}));return Object(a.jsx)("td",{width:100,style:{backgroundColor:0===s.length?"#ea6060":r.get(null!==(n=null===(c=s[0])||void 0===c?void 0:c.Value)&&void 0!==n?n:"fixme")},children:Object(a.jsx)("pre",{children:s.length>0?s.map((function(e,t,r){var a=e.Value,n=e.prefix;return r.length>1?"".concat(n.slice(n.lastIndexOf("/")+1).replace("lservice","ls").replace("allapps","all"),": ").concat(ee(32,a)):ee(32,a)})).join("\n"):"<missing>"})},"".concat(e,"-value"))}))})},ae=function(e){var t=e.params,r=Object(n.useMemo)((function(){var e=new Set,r=new Map;return t.forEach((function(t){var a;e.add(t.prefix);var n=t.Name.slice(t.prefix.length),c=null!==(a=r.get(n))&&void 0!==a?a:[];r.set(n,[].concat(Object(L.a)(c),[t]))})),Array.from(r.entries()).sort()}),[t]);return Object(a.jsxs)("table",{className:"wt-table wt-table_wide wt-table_size_xs",children:[Object(a.jsx)("thead",{className:"wt-text-3",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),$.map((function(e){return Object(a.jsx)("th",{children:e},e)}))]})}),Object(a.jsx)("tbody",{className:"wt-text-3",children:r.map((function(e){var t=Object(u.a)(e,2),r=t[0],n=t[1];return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{width:400,children:r}),Object(a.jsx)(re,{paramsForName:n})]})}))})]})},ne=[{tomcat:"/jetprofile-dev1/",lservice:"/jetprofile/dev1/lservice",allapps:"/jetprofile/dev1/allapps"},{tomcat:"/jetprofile-dev2/",lservice:"/jetprofile/dev2/lservice",allapps:"/jetprofile/dev2/allapps"},{tomcat:"/jetprofile-dev3/",lservice:"/jetprofile/dev3/lservice",allapps:"/jetprofile/dev3/allapps"},{tomcat:"/jetprofile-dev4/",lservice:"/jetprofile/dev4/lservice",allapps:"/jetprofile/dev4/allapps"},{tomcat:"/jetprofile-dev5/",lservice:"/jetprofile/dev5/lservice",allapps:"/jetprofile/dev5/allapps"},{tomcat:"/jetprofile-audt/",lservice:"/jetprofile/audt/lservice",allapps:"/jetprofile/audt/allapps"},{tomcat:"/jetprofile-stgn/",lservice:"/jetprofile/stgn/blue/lservice",allapps:"/jetprofile/stgn/blue/allapps"},{tomcat:"/jetprofile-stgn/",lservice:"/jetprofile/stgn/green/lservice",allapps:"/jetprofile/stgn/green/allapps"}],ce=function(e){var t=e.credentials,r=e.removeCredentials,c=t.accessKey,s=t.secretKey,i=Object(n.useState)(),l=Object(u.a)(i,2),j=l[0],d=l[1],p=Object(n.useState)([]),f=Object(u.a)(p,2),h=f[0],m=f[1],x=new q.a.SSM({region:"eu-west-1",credentials:new Y.Credentials(c,s)}),O=function(){var e=Object(b.a)("aws-params",{parameters:[],fetchedAt:void 0}),t=Object(u.a)(e,3),r=t[0],a=t[1];return[r,function(e){a({fetchedAt:new Date,parameters:e})},t[2]]}(),w=Object(u.a)(O,3),N=w[0],y=N.fetchedAt,k=N.parameters,S=w[1],C=w[2];Object(G.a)((function(){}));var P=function(){var e=Object(_.a)(g.a.mark((function e(){var t,r,a,n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],r=new Set(ne.flatMap((function(e){var t=e.tomcat,r=e.allapps;return[t,e.lservice,r]}))),m([]),a=g.a.mark((function e(){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c[n],console.log(r),e.next=4,new Promise((function(e){var a=1;x.getParametersByPath({Path:r,Recursive:!0,WithDecryption:!0}).eachPage((function(n,c,s){return d("prefix '".concat(r,"' page ").concat(a," (total: ").concat(t.length,")")),n&&m((function(e){return[].concat(Object(L.a)(e),[n])})),(null===s||void 0===s?void 0:s())||((null===c||void 0===c?void 0:c.Parameters)&&t.push.apply(t,Object(L.a)(null===c||void 0===c?void 0:c.Parameters.map((function(e){return e.prefix=r,e})))),a++),null==c&&e(void 0),!0}))}));case 4:case"end":return e.stop()}}),e)})),n=0,c=Array.from(r);case 5:if(!(n<c.length)){e.next=10;break}return e.delegateYield(a(),"t0",7);case 7:n++,e.next=5;break;case 10:S(t),d(void 0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(v,{wide:k.length>0,children:[Object(a.jsxs)("div",{className:"wt-text-2",children:["Using key: ",Object(a.jsx)("strong",{children:V(c)})," | Fetched ",Object(a.jsx)("strong",{children:null===k||void 0===k?void 0:k.length})," parameters ",Object(a.jsx)("strong",{children:y?o()(y).fromNow():""})," |"," ",Object(a.jsx)(H.a,{size:"xs",mode:"nude",onClick:P,children:"Refresh"})," ","|"," ",Object(a.jsx)(H.a,{size:"xs",mode:"nude",onClick:function(){r(),C()},children:"Sign out"})]}),Object(a.jsx)("div",{className:"wt-offset-top-12"}),h.length>0&&Object(a.jsx)(W,{error:new Error("Got ".concat(h.length," unexpected error while refreshing params"))}),void 0===j&&0===(null===k||void 0===k?void 0:k.length)&&Object(a.jsxs)("p",{className:"wt-text-2",children:["Parameters table is empty, press ",Object(a.jsx)("strong",{children:"Refresh"})," above to fill it"]}),j&&Object(a.jsxs)("p",{className:"wt-text-2",children:["Loading ",j,"..."]}),!j&&k.length>0&&Object(a.jsx)(ae,{params:k})]})},se=function(e){Object(p.a)(e);var t=Object(b.a)("aws-credentials"),r=Object(u.a)(t,3),n=r[0],c=r[1],s=r[2];return void 0===n?Object(a.jsx)(I,{onCredentialsSelected:c}):Object(a.jsx)(ce,{credentials:n,removeCredentials:s})};o.a.extend(d.a),i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(se,{})}),document.getElementById("root"))}},[[880,1,2]]]);
//# sourceMappingURL=main.f9167e7f.chunk.js.map