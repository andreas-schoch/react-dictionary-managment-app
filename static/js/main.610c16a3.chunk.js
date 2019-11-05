(this["webpackJsonpdictionary-management-app"]=this["webpackJsonpdictionary-management-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={flexWrap:"EntryCard_flexWrap__1OWc_",entryInput:"EntryCard_entryInput__1r3IS",btnDelete:"EntryCard_btnDelete__GSQLY",flags:"EntryCard_flags__EzYly",warning:"EntryCard_warning__1NSMv",error:"EntryCard_error__10mDl",severeError:"EntryCard_severeError__3U50y",hidden:"EntryCard_hidden__2cFME"}},,,,,,function(e,t,a){e.exports={name:"DictionaryCard_name__3MHt3",meta:"DictionaryCard_meta__1L3VC",mdot:"DictionaryCard_mdot__2tYfu",flexWrap:"DictionaryCard_flexWrap__22Nsu",btn:"DictionaryCard_btn__3n0dX",btnDelete:"DictionaryCard_btnDelete__25J0G",btnValidate:"DictionaryCard_btnValidate__CClU0"}},,,,,function(e,t,a){e.exports={base:"ValidityTag_base__kNfMh",valid:"ValidityTag_valid__2Chfx",error:"ValidityTag_error__uwrT1"}},function(e,t,a){e.exports={header:"DetailViewHeader_header__3sLDz",btnReturn:"DetailViewHeader_btnReturn__36lUY",btnValidate:"DetailViewHeader_btnValidate__SxmGX",valid:"DetailViewHeader_valid__3kB_j",dictName:"DetailViewHeader_dictName__tnNvN"}},,function(e,t,a){e.exports={form:"NewEntryForm_form__2YDzS",inputContainer:"NewEntryForm_inputContainer__1QeOp",input:"NewEntryForm_input__2Aa2q"}},,,,,function(e,t,a){e.exports={contentWrapper:"App_contentWrapper__ukNqe"}},function(e,t,a){e.exports={card:"GenericCard_card__3pykX",content:"GenericCard_content__BOdCL"}},,,function(e,t,a){e.exports={form:"DictionaryForm_form__hWCNE",nameInput:"DictionaryForm_nameInput__1_otS"}},function(e,t,a){e.exports={header:"ListViewHeader_header__3Lsp5",btnReturn:"ListViewHeader_btnReturn__2fEMa",heading:"ListViewHeader_heading__1Y4r9"}},function(e,t,a){e.exports={container:"ResponsiveContainer_container__POb4b",center:"ResponsiveContainer_center__2gkar"}},,,,,,,function(e,t,a){e.exports={mainFooter:"Footer_mainFooter__3n9E-"}},function(e,t,a){e.exports={container:"DictionaryListView_container__YZCXG"}},,,function(e,t,a){e.exports={container:"DictionaryDetailView_container__2lHL2"}},function(e,t,a){},,function(e,t,a){e.exports=a(59)},,,,,function(e,t,a){},,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c);a(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(3),l=a(10),d=a(15),u=a(16),s=a(2);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y,f=localStorage.getItem("dictApp")?JSON.parse(localStorage.getItem("dictApp")).entries:{},E=a(44),b=a(14),_=a.n(b);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=Date.now(),D=_()(),g=_()(),j=_()(),N=(y={},Object(s.a)(y,D,{name:"My Dictionary 1",id:D,created:h-3,edited:h-3,numErrors:0,validated:!1,entryIds:[]}),Object(s.a)(y,g,{name:"My Dictionary 2",id:g,created:h-2,edited:h-2,numErrors:0,validated:!1,entryIds:[]}),Object(s.a)(y,j,{name:"My Dictionary 3",id:j,created:h-1,edited:h-1,numErrors:0,validated:!1,entryIds:[]}),y),w=localStorage.getItem("dictApp")?JSON.parse(localStorage.getItem("dictApp")).dictionaries:N,I=Object(u.combineReducers)({entries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ENTRY":var a=t.payload.newEntry;return p({},e,Object(s.a)({},a.id,a));case"UPDATE_ENTRY":var n=t.payload.updatedEntry;return p({},e,Object(s.a)({},n.id,n));case"REMOVE_ENTRY":var r=Object.assign({},p({},e));return delete r[t.payload.removedEntry.id],r;case"SET_ENTRY_ERROR_FLAGS":var c=t.payload,i=c.entryId,o=c.flags,l=p({},e[i],{},o);return p({},e,Object(s.a)({},l.id,l));case"CLEAR_ENTRY_ERROR_FLAGS":var d=t.payload.entryIds,u={};return d.forEach((function(t){u[t]=p({},e[t],{duplicate:!1,fork:!1,cycle:!1,chain:!1})})),p({},e,{},u);default:return e}},dictionaries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DICTIONARY":var a=t.payload.newDictionary;return v({},e,{},Object(s.a)({},a.id,a));case"RENAME_DICTIONARY":var n=t.payload.updatedDictionary;return v({},e,Object(s.a)({},n.id,n));case"REMOVE_DICTIONARY":var r=Object.assign({},v({},e));return delete r[t.payload.removedDictionary.id],r;case"ADD_ENTRY_ID_TO_DICTIONARY":var c=t.payload,i=c.entryId,o=c.dictId,l=Date.now(),d=e[o].entryIds.concat(i);return v({},e,Object(s.a)({},o,v({},e[o],{edited:l,entryIds:d,validated:!1,numErrors:0})));case"REMOVE_ENTRY_ID_FROM_DICTIONARY":var u=t.payload,m=u.entryId,p=u.dictId,y=Date.now(),f=Object(E.a)(e[p].entryIds),b=f.indexOf(m);return f.splice(b,1),v({},e,Object(s.a)({},p,v({},e[p],{edited:y,entryIds:f})));default:return e}}}),C=a(37),R=Object(u.createStore)(I,Object(C.composeWithDevTools)());R.subscribe((function(){return localStorage.setItem("dictApp",JSON.stringify(R.getState()))}));var P=a(25),S=a.n(P),T=a(38),A=a.n(T),x=function(){return r.a.createElement("footer",{className:A.a.mainFooter},r.a.createElement("a",{href:"https://github.com/andreas-schoch/react-dictionary-managment-app",target:"_blank",rel:"noopener noreferrer",title:"Source Code"},r.a.createElement("i",{className:"fab fa-github"}," "),r.a.createElement("span",null," Source Code")))},V=function(e){return r.a.createElement("div",{className:S.a.contentWrapper},r.a.createElement("span",{className:S.a.mainContent},e.children),r.a.createElement(x,null))},Y=a(39),k=a.n(Y),F=a(5),L=function(e,t){for(var a=t.length,n=[],r=0;r<a;r++){var c=e[t[r]];c&&n.push(c)}return n},M=function(e,t){return[e.trim().toLowerCase(),t.trim().toLowerCase()]},W=a(12),G=a.n(W),H=a(40),B=a.n(H),J=a(17),U=a.n(J),X=function(e){var t=e.dict,a=t.validated,n=t.numErrors;return r.a.createElement(r.a.Fragment,null,function(e){if(a)return r.a.createElement("span",{className:"".concat(U.a.valid," ").concat(U.a.base)},"validated");if(a||0!==n){var t=1===n;return r.a.createElement("span",{className:"".concat(U.a.error," ").concat(U.a.base)},r.a.createElement("span",null,n),r.a.createElement("span",null," ",t?"Error":"Errors"))}return r.a.createElement("span",{className:"".concat(U.a.unchecked," ").concat(U.a.base)},"not validated yet")}())},z=a(26),q=a.n(z),K=function(e){var t=e.children;return r.a.createElement("div",{className:q.a.card},t)};K.Content=function(e){var t=e.children;return r.a.createElement("div",{className:q.a.content},t)};var Q=K,Z=function(e){return{type:"RENAME_DICTIONARY",payload:{updatedDictionary:e}}},$=Object(o.b)(null,{removeDictionary:function(e){return{type:"REMOVE_DICTIONARY",payload:{removedDictionary:e}}}})((function(e){var t=e.dict,a=e.removeDictionary,n=t.name,c=t.id,i=t.entryIds,o=t.edited,d=B()(o).fromNow();return r.a.createElement(Q,null,r.a.createElement(l.b,{to:"dict/".concat(c)},r.a.createElement(Q.Content,null,r.a.createElement("div",{className:G.a.flexWrap},r.a.createElement("div",null,r.a.createElement("div",{className:G.a.name},n),r.a.createElement("div",{className:G.a.meta},r.a.createElement("span",{className:G.a.mdot},"".concat(i.length," entries")),r.a.createElement("span",{className:G.a.mdot},"edited ".concat(d)),r.a.createElement(X,{dict:t}))),r.a.createElement("button",{className:"".concat(G.a.btn," ").concat(G.a.btnValidate),title:"validate Dictionary"},r.a.createElement("i",{className:"fas fa-check"}," ")),r.a.createElement("button",{className:"".concat(G.a.btn," ").concat(G.a.btnDelete),title:"delete Dictionary",onClick:function(e){e.preventDefault(),a(t)}},r.a.createElement("i",{className:"far fa-trash-alt"}," "))))))})),ee=a(29),te=a.n(ee),ae=Object(o.b)(null,{addDictionary:function(e){return{type:"ADD_DICTIONARY",payload:{newDictionary:e}}}})((function(e){e.dictionaries;var t=e.addDictionary,a=Object(n.useState)(""),c=Object(F.a)(a,2),i=c[0],o=c[1],l=function(){return 0!==i.length};return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),l()){var a=Date.now(),n={name:i,id:_()(),created:a,edited:a,validated:!1,numErrors:0,entryIds:[]};t(n),o("")}},className:te.a.form},r.a.createElement("input",{"aria-label":"new dictionary name",maxLength:20,type:"text",value:i,placeholder:"new Dictionary Name",onChange:function(e){return o(e.target.value)},name:"name",className:te.a.nameInput}),r.a.createElement("button",{type:"submit"},r.a.createElement("span",null," Add")))})),ne=a(30),re=a.n(ne),ce=function(e){e.currentDictionary;return r.a.createElement("header",{className:re.a.header},r.a.createElement("h1",{className:re.a.heading},"Dictionaries"))},ie=a(31),oe=a.n(ie),le=function(e){var t=e.children,a=e.center;return r.a.createElement("div",{className:"".concat(oe.a.container," ").concat(a?oe.a.center:"")},t)},de=Object(o.b)((function(e){var t;return{dictionaries:(t=e.dictionaries,Object.values(t).map((function(e){return e}))).sort((function(e,t){return t.edited-e.edited}))}}),{})((function(e){var t=e.dictionaries;return r.a.createElement("div",{className:k.a.container},r.a.createElement(ce,null),r.a.createElement(le,{center:!0},r.a.createElement(ae,null),t.map((function(e){return r.a.createElement($,{dict:e,key:e.id})}))))})),ue=a(42),se=a.n(ue),me=a(20),pe=a.n(me);function ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var fe=Object(d.f)(Object(o.b)((function(e,t){var a=t.match.params.id;return{currentDictionary:e.dictionaries[a]}}),{addEntry:function(e){return{type:"ADD_ENTRY",payload:{newEntry:e}}},addEntryIdToDictionary:function(e,t){return{type:"ADD_ENTRY_ID_TO_DICTIONARY",payload:{entryId:e,dictId:t}}}})((function(e){var t=e.currentDictionary,a=e.addEntry,c=e.addEntryIdToDictionary,i=Object(n.useState)({domain:"",range:"",error:""}),o=Object(F.a)(i,2),l=o[0],d=o[1],u=Object(n.useState)([]),m=Object(F.a)(u,2),p=(m[0],m[1],function(e){return d(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ye(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ye(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,Object(s.a)({},e.target.name,e.target.value)))}),y=function(e){var t=e.domain,a=e.range;return t&&a};return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),y(l)){var n=Date.now(),r={domain:l.domain,range:l.range,id:_()(),created:n,edited:n,duplicate:!1,fork:!1,chain:!1,cycle:!1};a(r),c(r.id,t.id),d({domain:"",range:""})}},className:pe.a.form},r.a.createElement("span",{className:pe.a.inputContainer},r.a.createElement("input",{type:"text",maxLength:20,value:l.domain,placeholder:"Domain",onChange:p,name:"domain",className:pe.a.input}),r.a.createElement("input",{type:"text",maxLength:20,value:l.range,placeholder:"Range",onChange:p,name:"range",className:pe.a.input})),r.a.createElement("button",{type:"submit"},r.a.createElement("span",null," Add")))}))),Ee=a(18),be=a.n(Ee);function _e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_e(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_e(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ve=Object(d.f)(Object(o.b)((function(e,t){var a=e.dictionaries[t.match.params.id];return{currentDictionary:a,entries:a?L(e.entries,a.entryIds):[]}}),{setEntryErrorFlags:function(e,t){return{type:"SET_ENTRY_ERROR_FLAGS",payload:{entryId:e,flags:t}}},updateDictionary:Z})((function(e){var t=e.currentDictionary,a=e.entries,n=e.setEntryErrorFlags,c=e.updateDictionary,i=function(e){var r={};(function(e){var t=new Set,a=[];return e.forEach((function(e,n){var r=M(e.domain,e.range),c=Object(F.a)(r,2),i=c[0],o=c[1];t.has(i+o)?a.push(e.id):t.add(i+o)})),a})(a).forEach((function(e){r[e]||(r[e]={}),r[e].duplicate=!0})),function(e){var t=new Set,a=[];return e.forEach((function(e){var n=M(e.domain,e.range),r=Object(F.a)(n,1)[0];t.has(r)?a.push(e.id):t.add(r)})),a}(a).forEach((function(e){r[e]||(r[e]={}),r[e].fork=!0})),function(e){var t=new Set,a=[];return e.forEach((function(e){var n=M(e.domain,e.range),r=Object(F.a)(n,2),c=r[0],i=r[1];t.has(c+i)?a.push(e.id):t.add(i+c)})),a}(a).forEach((function(e){r[e]||(r[e]={}),r[e].cycle=!0})),function(e){var t=new Set,a=[];return e.forEach((function(e){var n=M(e.domain,e.range),r=Object(F.a)(n,2),c=r[0],i=r[1];t.has(i)?a.push(e.id):t.add(c)})),a}(a).forEach((function(e){r[e]||(r[e]={}),r[e].chain=!0}));var i=Object.entries(r),o=Date.now();0===i.length&&r.constructor===Object?c(Oe({},t,{validated:!0,numErrors:0,edited:o})):(c(Oe({},t,{validated:!1,numErrors:i.length,edited:o})),i.forEach((function(e){var t=Object(F.a)(e,2),a=t[0],r=t[1];n(a,r)})))};return r.a.createElement("header",{className:be.a.header},r.a.createElement(l.b,{to:"/",className:be.a.btnReturn},r.a.createElement("i",{className:"fas fa-chevron-left"}," "),r.a.createElement("span",null," back")),r.a.createElement("h1",{className:be.a.dictName},t?t.name:""),t.validated?r.a.createElement("button",{className:"".concat(be.a.btnValidate," ").concat(be.a.valid)},"Validated"):r.a.createElement("button",{className:be.a.btnValidate,onClick:i},"Validate"))}))),he=a(43),De=a.n(he),ge=a(6),je=a.n(ge);function Ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function we(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ne(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ne(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ie=Object(d.f)(Object(o.b)((function(e,t){return{currentDictionary:e.dictionaries[t.match.params.id]}}),{updateEntry:function(e){return{type:"UPDATE_ENTRY",payload:{updatedEntry:e}}},updateDictionary:Z,removeEntryIdFromDictionary:function(e,t){return{type:"REMOVE_ENTRY_ID_FROM_DICTIONARY",payload:{entryId:e,dictId:t}}},removeEntry:function(e){return{type:"REMOVE_ENTRY",payload:{removedEntry:e}}},clearEntryErrorFlags:function(e){return{type:"CLEAR_ENTRY_ERROR_FLAGS",payload:{entryIds:e}}}})((function(e){var t=e.entry,a=e.updateEntry,c=e.currentDictionary,i=e.updateDictionary,o=e.removeEntryIdFromDictionary,l=e.removeEntry,d=e.clearEntryErrorFlags,u=Object(n.useState)(!1),m=Object(F.a)(u,2),p=m[0],y=m[1],f=t.domain,E=t.range,b=(t.entryId,t.duplicate),_=t.fork,O=t.chain,v=t.cycle,h="fas fa-exclamation-triangle",D=function(e){var t=e.target,a=t.name,n=t.value;(n!==f&&"domain"===a||n!==E&&"range"===a)&&y(!0)},g=function(e){if(p){var n=Date.now();a(we({},t,Object(s.a)({edited:n},e.target.name,e.target.value))),i(we({},c,{validated:!1,numErrors:0,edited:n})),d(c.entryIds)}},j=function(e){"Enter"===e.key&&e.target.blur()};return r.a.createElement(Q,null,r.a.createElement(Q.Content,null,r.a.createElement("div",{className:je.a.flexWrap},r.a.createElement("input",{type:"text",name:"domain",className:je.a.entryInput,defaultValue:t.domain,onKeyPress:j,onChange:D,onBlur:g}),r.a.createElement("input",{type:"text",name:"range",className:je.a.entryInput,defaultValue:t.range,onKeyPress:j,onChange:D,onBlur:g}),r.a.createElement("div",{className:je.a.flags},r.a.createElement("i",{className:"".concat(h," ").concat(je.a.warning," ").concat(b?"":je.a.hidden),title:"Duplicate: identical Domain/Range pair already exists"}),r.a.createElement("i",{className:"".concat(h," ").concat(je.a.error," ").concat(_?"":je.a.hidden),title:"Fork: The Domain is already in use"}),r.a.createElement("i",{className:"".concat(h," ").concat(je.a.error," ").concat(O?"":je.a.hidden),title:"Chain: the Range is already a Domain in another row"}),r.a.createElement("i",{className:"".concat(h," ").concat(je.a.severeError," ").concat(v?"":je.a.hidden),title:"Cycle: Infinite loop detected"})),r.a.createElement("button",{className:je.a.btnDelete,onClick:function(e){e.preventDefault(),o(t.id,c.id),l(t)}},r.a.createElement("i",{className:"far fa-trash-alt"}," ")))))}))),Ce=Object(d.f)(Object(o.b)((function(e,t){var a=e.dictionaries[t.match.params.id];return{entries:a?L(e.entries,a.entryIds):[]}}))((function(e){var t=e.entries;return r.a.createElement("div",{className:De.a.container},t.length?t.map((function(e){return r.a.createElement(Ie,{key:e.id,entry:e})})):r.a.createElement("span",null,"empty dictionary"))}))),Re=Object(d.f)(Object(o.b)((function(e,t){var a=t.match.params.id;return{currentDictionary:e.dictionaries[a]}}))((function(e){var t=e.currentDictionary,a=e.history;return Object(n.useEffect)((function(){t||a.push("/")}),[t]),r.a.createElement("div",{className:se.a.container},r.a.createElement(ve,null),r.a.createElement(le,{center:!0},r.a.createElement(fe,null),r.a.createElement(Ce,null)))})));i.a.render(r.a.createElement(o.a,{store:R},r.a.createElement(l.a,null,r.a.createElement(d.c,null,r.a.createElement(V,null,r.a.createElement(d.a,{path:"/",exact:!0,component:de}),r.a.createElement(d.a,{path:"/dict/:id",component:Re}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[45,1,2]]]);
//# sourceMappingURL=main.610c16a3.chunk.js.map