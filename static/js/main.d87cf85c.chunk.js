(this["webpackJsonpfuture-group"]=this["webpackJsonpfuture-group"]||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c,a,i=n(1),r=n.n(i),o=n(16),s=n.n(o),j=(n(24),n(2)),l=n(19),b=n(4),d=n(3),u=n(18),O=n.n(u),x=n(5),h=n.p+"static/media/sort.071e059f.png",p=n(0);var g,f,m=function(e){var t=e.onClick,n=e.value,c=e.setToggleSort,a=e.toggleSort;return Object(p.jsx)(v,{onClick:function(){t(n),c(!a)},children:Object(p.jsx)(k,{src:h,toggleSort:a})})},v=d.a.button(c||(c=Object(j.a)(["\n\n  background-color: transparent;\n  border: none;\n  outline: none;\n  :hover{\n    cursor: pointer;\n  }\n"]))),k=d.a.img(a||(a=Object(j.a)(["\n  width:40px;\n  height:40px;\n  object-fit: contain;\n  transform: ",";\n"])),(function(e){return e.toggleSort?"scaleY(-1)":"none"}));var S,C,y,P,w,N=function(e){var t=e.id,n=e.firstName,c=e.lastName,a=e.email,i=e.phone,r=e.address,o=e.description,s=e.openRow;return Object(p.jsxs)(T,{onClick:function(){s({id:t,firstName:n,lastName:c,email:a,phone:i,address:r,description:o})},children:[Object(p.jsx)(L,{children:t}),Object(p.jsx)(L,{children:n}),Object(p.jsx)(L,{children:c}),Object(p.jsx)(L,{children:a}),Object(p.jsx)(L,{children:i}),Object(p.jsx)(L,{children:"".concat(r.streetAddress,", ").concat(r.city,", ").concat(r.state,", ").concat(r.zip)}),Object(p.jsx)(L,{children:o})]})},T=d.a.tr(g||(g=Object(j.a)([""]))),L=d.a.th(f||(f=Object(j.a)(["\n  min-height:50px;\n  background-color:lightblue;\n"])));var R,z,F=function(e){var t=e.data,n=e.active,c=e.currentPage,a=e.openRow,r=Object(i.useState)(""),o=Object(b.a)(r,2),s=o[0],j=o[1],l=Object(i.useState)(!0),d=Object(b.a)(l,2),u=d[0],O=d[1],h=t.slice(50*(c-1),50*c);h.sort(function(e){return u?function(t,n){return t[e]>n[e]?1:-1}:function(t,n){return t[e]>n[e]?-1:1}}(s));var g=h.reverse();return Object(p.jsxs)(A,{active:n,children:[Object(p.jsx)(E,{children:Object(p.jsxs)(D,{children:[Object(p.jsxs)(I,{children:["ID ",Object(p.jsx)(m,{value:"id",onClick:j,setToggleSort:O,toggleSort:u})," "]}),Object(p.jsxs)(I,{children:["First Name ",Object(p.jsx)(m,{value:"firstName",onClick:j,setToggleSort:O,toggleSort:u})," "]}),Object(p.jsxs)(I,{children:["Last Name ",Object(p.jsx)(m,{value:"lastName",onClick:j,setToggleSort:O,toggleSort:u})," "]}),Object(p.jsxs)(I,{children:["Email ",Object(p.jsx)(m,{value:"email",onClick:j,setToggleSort:O,toggleSort:u})," "]}),Object(p.jsxs)(I,{children:["Phone ",Object(p.jsx)(m,{value:"phone",onClick:j,setToggleSort:O,toggleSort:u})," "]}),Object(p.jsxs)(I,{children:["Address ",Object(p.jsx)(m,{value:"address",onClick:j,setToggleSort:O,toggleSort:u})," "]}),Object(p.jsxs)(I,{children:["Description ",Object(p.jsx)(m,{value:"description",onClick:j,setToggleSort:O,toggleSort:u})," "]})]})}),Object(p.jsx)(q,{children:g.map((function(e){return Object(p.jsx)(N,Object(x.a)(Object(x.a)({},e),{},{openRow:a}),"".concat(e.id,"-").concat(e.firstName,"-").concat(e.lastName))}))})]})},A=d.a.table(S||(S=Object(j.a)(["\n  display: ",";\n"])),(function(e){return e.active?"table-cell":"none"})),E=d.a.thead(C||(C=Object(j.a)([""]))),q=d.a.tbody(y||(y=Object(j.a)([""]))),D=d.a.tr(P||(P=Object(j.a)(["\n\n"]))),I=d.a.th(w||(w=Object(j.a)(["\n  width:150px;\n  height:50px;\n  background-color:lightblue;\n"])));var B,M,G,J,V=function(e){var t=e.openTable,n=e.isOpenTable,c=e.isLoading;return Object(p.jsxs)(Y,{isOpenTable:n,isLoading:c,children:[Object(p.jsx)(H,{onClick:function(){t("small")},children:"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430"}),Object(p.jsx)(H,{onClick:function(){t("big")},children:"\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430"})]})},Y=d.a.div(R||(R=Object(j.a)(["\n  height: 100vh;\n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items:center;\n"])),(function(e){var t=e.isOpenTable;return e.isLoading||t?"none":"flex"})),H=d.a.button(z||(z=Object(j.a)(["\n  min-height: 100px;\n  width:480px;\n  font-size: 50px;\n  border: none;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 30px;\n  :hover{\n    cursor: pointer;\n  }\n"])));var K,Q,U,W=function(e){var t=e.numberOfPages,n=e.active,c=e.currentPage,a=e.nextPage,i=e.previousPage,r=e.lastPage,o=e.firstPage;return 1===c?Object(p.jsxs)(X,{active:n,numberOfPages:t,children:[Object(p.jsx)(_,{children:c}),Object(p.jsx)($,{onClick:a,children:c+1}),Object(p.jsx)($,{onClick:r,children:t})]}):c===t?Object(p.jsxs)(X,{active:n,numberOfPages:t,children:[Object(p.jsx)($,{onClick:i,children:c-1}),Object(p.jsx)(_,{children:t})]}):c===t-1?Object(p.jsxs)(X,{active:n,numberOfPages:t,children:[Object(p.jsx)($,{onClick:i,children:c-1}),Object(p.jsx)(_,{children:c}),Object(p.jsx)($,{onClick:a,children:c+1})]}):c>3?Object(p.jsxs)(X,{active:n,numberOfPages:t,children:[Object(p.jsx)($,{onClick:o,children:1}),Object(p.jsx)($,{onClick:i,children:c-1}),Object(p.jsx)(_,{children:c}),Object(p.jsx)($,{onClick:a,children:c+1}),Object(p.jsx)($,{onClick:r,children:t})]}):Object(p.jsxs)(X,{active:n,numberOfPages:t,children:[Object(p.jsx)($,{onClick:i,children:c-1}),Object(p.jsx)(_,{children:c}),Object(p.jsx)($,{onClick:a,children:c+1}),Object(p.jsx)($,{onClick:r,children:t})]})},X=d.a.div(B||(B=Object(j.a)(["\n  justify-content: center;\n  margin: 10px 0; \n  display: ",";\n"])),(function(e){var t=e.active,n=e.numberOfPages;return t&&n>1?"flex":"none"})),Z=Object(d.b)(M||(M=Object(j.a)(["\nto{\n  transform: scale(1.5);\n}\n"]))),$=d.a.button(G||(G=Object(j.a)(["\n  margin-right: 5px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  :hover{\n    cursor: pointer;\n    animation: "," forwards 0.5s linear;\n  }\n"])),Z),_=d.a.button(J||(J=Object(j.a)(["\n  margin-right: 5px;\n  font-size: 30px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  :hover{\n    cursor: pointer;\n  }\n"])));var ee,te,ne,ce,ae=function(e){var t=e.findInfo,n=e.active,c=Object(i.useState)(""),a=Object(b.a)(c,2),r=a[0],o=a[1];return Object(p.jsxs)(ie,{onSubmit:function(e){e.preventDefault(),t(r)},active:n,children:[Object(p.jsx)(re,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",onChange:function(e){o(e.target.value)}}),Object(p.jsx)(oe,{children:"\u041d\u0430\u0439\u0442\u0438"})]})},ie=d.a.form(K||(K=Object(j.a)(["\n  display: ",";\n  margin: 30px 0;\n"])),(function(e){return e.active?"flex":"none"})),re=d.a.input(Q||(Q=Object(j.a)(["\nmargin-right: 20px;\n"]))),oe=d.a.button(U||(U=Object(j.a)(["\n  border: none;\n  outline: none;\n  border-radius: 10px;\n  :hover{\n    cursor: pointer;\n  }\n"])));var se,je,le,be,de,ue,Oe,xe=function(e){var t=e.selectRow,n=e.active,c=t.firstName,a=t.lastName,i=t.address,r=t.description;return Object(p.jsxs)(he,{active:n,children:[Object(p.jsxs)(pe,{children:["\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",Object(p.jsx)(ge,{children:"".concat(c," ").concat(a)})]}),Object(p.jsx)(pe,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"}),Object(p.jsx)(fe,{defaultValue:r}),Object(p.jsxs)(pe,{children:["\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",Object(p.jsx)(ge,{children:i.streetAddress})," "]}),Object(p.jsxs)(pe,{children:["\u0413\u043e\u0440\u043e\u0434: ",Object(p.jsx)(ge,{children:i.city})]}),Object(p.jsxs)(pe,{children:["\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",Object(p.jsx)(ge,{children:i.state})]}),Object(p.jsxs)(pe,{children:["\u0418\u043d\u0434\u0435\u043a\u0441: ",Object(p.jsx)(ge,{children:i.zip})]})]})},he=d.a.div(ee||(ee=Object(j.a)(["\n  display: ",";\n  flex-direction: column;\n  margin: 30px 0;\n"])),(function(e){return e.active?"flex":"none"})),pe=d.a.p(te||(te=Object(j.a)([""]))),ge=d.a.span(ne||(ne=Object(j.a)(["\n  font-weight: bold;\n"]))),fe=d.a.textarea(ce||(ce=Object(j.a)([""]))),me=n(7);var ve,ke,Se=function(e){var t=e.active,n=e.addRow,c=Object(i.useState)({id:"",firstName:"",lastName:"",email:"",phone:"",address:{streetAddress:"",city:"",state:"",zip:""},description:""}),a=Object(b.a)(c,2),r=a[0],o=a[1],s=Object(i.useState)(!1),j=Object(b.a)(s,2),l=j[0],d=j[1],u=Object(i.useState)(""),O=Object(b.a)(u,2),h=O[0],g=O[1],f=Object(i.useState)(!1),m=Object(b.a)(f,2),v=m[0],k=m[1],S=function(e){var t=e.target,n=t.name,c=t.value;return o(Object(x.a)(Object(x.a)({},r),{},Object(me.a)({},n,c))),g(Object(x.a)(Object(x.a)({},h),{},Object(me.a)({},n,e.target.validationMessage))),d(e.target.closest("form").checkValidity()),d};return Object(p.jsxs)(Ce,{active:t,onSubmit:function(e){e.preventDefault(),n(r)},children:[Object(p.jsx)(ye,{activeField:v,onClick:function(){k(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443"}),Object(p.jsxs)(Pe,{activeField:v,children:[Object(p.jsxs)(Le,{children:[Object(p.jsx)(we,{type:"number",name:"id",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ID",required:!0,onChange:S}),Object(p.jsx)(Ne,{children:h.id})]}),Object(p.jsxs)(Le,{children:[Object(p.jsx)(we,{type:"text",name:"firstName",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f",required:!0,minLength:"2",onChange:S}),Object(p.jsx)(Ne,{children:h.firstName})]}),Object(p.jsxs)(Le,{children:[Object(p.jsx)(we,{type:"text",name:"lastName",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0430\u043c\u0438\u043b\u0438\u044e",required:!0,minLength:"2",onChange:S}),Object(p.jsx)(Ne,{children:h.lastName})]}),Object(p.jsxs)(Le,{children:[Object(p.jsx)(we,{type:"email",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",required:!0,onChange:S}),Object(p.jsx)(Ne,{children:h.email})]}),Object(p.jsxs)(Le,{children:[Object(p.jsx)(we,{type:"text",name:"phone",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",required:!0,onChange:S}),Object(p.jsx)(Ne,{children:h.phone})]}),Object(p.jsx)(Te,{activeButton:l,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},Ce=d.a.div(se||(se=Object(j.a)(["\n  display: ",";\n  margin: 30px 0;\n  flex-wrap: wrap;\n"])),(function(e){return e.active?"flex":"none"})),ye=d.a.button(je||(je=Object(j.a)(["\n  display: ",";\n"])),(function(e){return e.activeField?"none":"block"})),Pe=d.a.form(le||(le=Object(j.a)(["\n  display: ",";\n"])),(function(e){return e.activeField?"block":"none"})),we=d.a.input(be||(be=Object(j.a)(["\n  margin-right: 5px;\n  min-height: 20px;\n  width: 300px;\n"]))),Ne=d.a.span(de||(de=Object(j.a)(["\n  margin-right: 5px;\n  height: 20px;\n  overflow: hidden;\n  max-width: 300px;\n  color: #FF0000;\n  font-size: 12px;\n"]))),Te=d.a.button(ue||(ue=Object(j.a)(["\n  border: none;\n  outline: none;\n  border-radius: 10px;\n  ",";\n  background-color: lightcoral;\n  opacity: ",";\n  :hover{\n    cursor: pointer;\n  }\n"])),(function(e){return e.activeButton?"none":"disabled"}),(function(e){return e.activeButton?"1":"0.5"})),Le=d.a.div(Oe||(Oe=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n"])));var Re=function(){var e=Object(i.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),r=Object(b.a)(a,2),o=r[0],s=r[1],j=Object(i.useState)(!1),d=Object(b.a)(j,2),u=d[0],x=d[1],h=Object(i.useState)([]),g=Object(b.a)(h,2),f=g[0],m=g[1],v=Object(i.useState)(!0),k=Object(b.a)(v,2),S=k[0],C=k[1],y=Object(i.useState)(1),P=Object(b.a)(y,2),w=P[0],N=P[1],T=Object(i.useState)(1),L=Object(b.a)(T,2),R=L[0],z=L[1],A=Object(i.useState)({firstName:"",lastName:"",address:"",description:""}),E=Object(b.a)(A,2),q=E[0],D=E[1],I=function(e){e.length<50||N(Math.ceil(e.length/50))};Object(i.useEffect)((function(){Promise.all([fetch("".concat("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject({status:e.status})})),fetch("".concat("http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject({status:e.status})}))]).then((function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];e&&(c(n),s(a))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e)})).finally((function(){C(!1)}))}),[]);var B=function(){z(R+1)},M=function(){z(R-1)},G=function(){z(w)},J=function(){z(1)};return Object(p.jsxs)(ze,{children:[Object(p.jsx)(Fe,{isLoading:S,children:Object(p.jsx)(O.a,{loading:S,size:150})}),Object(p.jsx)(Se,{active:u,addRow:function(e){m([e].concat(Object(l.a)(f)))}}),Object(p.jsx)(ae,{findInfo:function(e){var t=[];f.forEach((function(n){Object.values(n).includes(e)&&t.push(n)})),m(t)},active:u}),Object(p.jsx)(V,{openTable:function(e){x(!0),"small"===e?(m(n),I(n)):(m(o),I(o))},isOpenTable:u,isLoading:S}),Object(p.jsx)(W,{numberOfPages:w,active:u,currentPage:R,nextPage:B,previousPage:M,lastPage:G,firstPage:J}),Object(p.jsx)(F,{data:f,active:u,currentPage:R,openRow:function(e){D(e)}}),Object(p.jsx)(W,{numberOfPages:w,active:u,currentPage:R,nextPage:B,previousPage:M,lastPage:G,firstPage:J}),Object(p.jsx)(xe,{selectRow:q,active:u})]})},ze=d.a.div(ve||(ve=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Fe=d.a.div(ke||(ke=Object(j.a)(["\n  display: ",";\n  justify-content: center;\n  align-items:center;\n  height: 100vh;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n"])),(function(e){return e.isLoading?"flex":"none"}));s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(Re,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d87cf85c.chunk.js.map