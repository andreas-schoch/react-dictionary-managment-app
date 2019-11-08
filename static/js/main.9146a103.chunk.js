(this["webpackJsonpdictionary-management-app"]=this["webpackJsonpdictionary-management-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={flexWrap:"EntryCard_flexWrap__1OWc_",entryInput:"EntryCard_entryInput__1r3IS",btnDelete:"EntryCard_btnDelete__GSQLY",flags:"EntryCard_flags__EzYly",warning:"EntryCard_warning__1NSMv",error:"EntryCard_error__10mDl",severeError:"EntryCard_severeError__3U50y",hidden:"EntryCard_hidden__2cFME"}},,,,,,,function(e,t,n){e.exports={name:"DictionaryCard_name__3MHt3",meta:"DictionaryCard_meta__1L3VC",mdot:"DictionaryCard_mdot__2tYfu",flexWrap:"DictionaryCard_flexWrap__22Nsu",btn:"DictionaryCard_btn__3n0dX",btnDelete:"DictionaryCard_btnDelete__25J0G",btnValidate:"DictionaryCard_btnValidate__CClU0"}},,,,,function(e,t,n){e.exports={base:"ValidityTag_base__kNfMh",valid:"ValidityTag_valid__2Chfx",error:"ValidityTag_error__uwrT1"}},function(e,t,n){e.exports={header:"DetailViewHeader_header__3sLDz",btnReturn:"DetailViewHeader_btnReturn__36lUY",btnValidate:"DetailViewHeader_btnValidate__SxmGX",valid:"DetailViewHeader_valid__3kB_j",dictName:"DetailViewHeader_dictName__tnNvN"}},,function(e,t,n){e.exports={form:"NewEntryForm_form__2YDzS",inputContainer:"NewEntryForm_inputContainer__1QeOp",input:"NewEntryForm_input__2Aa2q"}},,,,,function(e,t,n){e.exports={contentWrapper:"App_contentWrapper__ukNqe"}},function(e,t,n){e.exports={card:"GenericCard_card__3pykX",content:"GenericCard_content__BOdCL"}},,,function(e,t,n){e.exports={form:"DictionaryForm_form__hWCNE",nameInput:"DictionaryForm_nameInput__1_otS"}},function(e,t,n){e.exports={header:"ListViewHeader_header__3Lsp5",btnReturn:"ListViewHeader_btnReturn__2fEMa",heading:"ListViewHeader_heading__1Y4r9"}},function(e,t,n){e.exports={container:"ResponsiveContainer_container__POb4b",center:"ResponsiveContainer_center__2gkar"}},,,,,,,function(e,t,n){e.exports={mainFooter:"Footer_mainFooter__3n9E-"}},function(e,t,n){e.exports={notification:"Notifications_notification__ZPRvE"}},function(e,t,n){e.exports={container:"DictionaryListView_container__YZCXG"}},,,function(e,t,n){e.exports={container:"DictionaryDetailView_container__2lHL2"}},function(e,t,n){},,function(e,t,n){e.exports=n(60)},,,,,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),i=n.n(c);n(51),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(3),l=n(10),u=n(15),s=n(16),d=n(2);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p,y=localStorage.getItem("dictApp")?JSON.parse(localStorage.getItem("dictApp")).entries:{},E=n(45),b=n(14),O=n.n(b);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=Date.now(),h=O()(),D=O()(),j=O()(),N=(p={},Object(d.a)(p,h,{name:"My Dictionary 1",id:h,created:g-3,edited:g-3,numErrors:0,validated:!1,entryIds:[]}),Object(d.a)(p,D,{name:"My Dictionary 2",id:D,created:g-2,edited:g-2,numErrors:0,validated:!1,entryIds:[]}),Object(d.a)(p,j,{name:"My Dictionary 3",id:j,created:g-1,edited:g-1,numErrors:0,validated:!1,entryIds:[]}),p),I=localStorage.getItem("dictApp")?JSON.parse(localStorage.getItem("dictApp")).dictionaries:N,w={visible:!1,message:"error"},R=Object(s.combineReducers)({entries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ENTRY":var n=t.payload.newEntry;return f({},e,Object(d.a)({},n.id,n));case"UPDATE_ENTRY":var r=t.payload.updatedEntry;return f({},e,Object(d.a)({},r.id,r));case"REMOVE_ENTRY":var a=Object.assign({},f({},e));return delete a[t.payload.removedEntry.id],a;case"SET_ENTRY_ERROR_FLAGS":var c=t.payload,i=c.entryId,o=c.flags,l=f({},e[i],{},o);return f({},e,Object(d.a)({},l.id,l));case"CLEAR_ENTRY_ERROR_FLAGS":var u=t.payload.entryIds,s={};return u.forEach((function(t){s[t]=f({},e[t],{duplicate:!1,fork:!1,cycle:!1,chain:!1})})),f({},e,{},s);default:return e}},dictionaries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DICTIONARY":var n=t.payload.newDictionary;return _({},e,{},Object(d.a)({},n.id,n));case"UPDATE_DICTIONARY":var r=t.payload.updatedDictionary;return _({},e,Object(d.a)({},r.id,r));case"REMOVE_DICTIONARY":var a=Object.assign({},_({},e));return delete a[t.payload.removedDictionary.id],a;case"ADD_ENTRY_ID_TO_DICTIONARY":var c=t.payload,i=c.entryId,o=c.dictId,l=Date.now(),u=e[o].entryIds.concat(i);return _({},e,Object(d.a)({},o,_({},e[o],{edited:l,entryIds:u,validated:!1,numErrors:0})));case"REMOVE_ENTRY_ID_FROM_DICTIONARY":var s=t.payload,m=s.entryId,f=s.dictId,p=Date.now(),y=Object(E.a)(e[f].entryIds),b=y.indexOf(m);return y.splice(b,1),_({},e,Object(d.a)({},f,_({},e[f],{edited:p,entryIds:y,validated:!1,numErrors:0})));default:return e}},notification:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_NOTIFICATION":return{visible:!0,message:t.payload.message};case"HIDE_NOTIFICATION":return{visible:!1,message:""};default:return e}}}),C=n(37),P=Object(s.createStore)(R,Object(C.composeWithDevTools)());P.subscribe((function(){return localStorage.setItem("dictApp",JSON.stringify(P.getState()))}));var T=n(25),S=n.n(T),A=n(38),x=n.n(A),F=function(){return a.a.createElement("footer",{className:x.a.mainFooter},a.a.createElement("a",{href:"https://github.com/andreas-schoch/react-dictionary-managment-app",target:"_blank",rel:"noopener noreferrer",title:"Source Code"},a.a.createElement("i",{className:"fab fa-github"}," "),a.a.createElement("span",null," Source Code")))},V=n(39),Y=n.n(V),k=function(e,t){return{type:"SET_ENTRY_ERROR_FLAGS",payload:{entryId:e,flags:t}}},L=function(e){return{type:"CLEAR_ENTRY_ERROR_FLAGS",payload:{entryIds:e}}},M=function(e){return{type:"UPDATE_DICTIONARY",payload:{updatedDictionary:e}}},W=Object(o.b)((function(e,t){return{notification:e.notification}}),{hideNotification:function(){return{type:"HIDE_NOTIFICATION"}}})((function(e){var t=e.hideNotification,n=e.notification,c=n.message,i=n.visible;return Object(r.useEffect)((function(){var e=null;e=setTimeout((function(){return n.visible&&t(),function(){clearTimeout(e)}}),3e3)}),[t,n]),a.a.createElement(a.a.Fragment,null,i&&a.a.createElement("div",{className:Y.a.notification},c))})),H=function(e){return a.a.createElement("div",{className:S.a.contentWrapper},a.a.createElement(W,null),a.a.createElement("span",{className:S.a.mainContent},e.children),a.a.createElement(F,null))},G=n(40),U=n.n(G),B=n(6);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var X=function(e,t){for(var n=t.length,r=[],a=0;a<n;a++){var c=e[t[a]];c&&r.push(c)}return r},z=function(e){return e.trim().toLowerCase()},q=function(e){var t=e.domain,n=e.range;return[z(t),z(n)]},K=function(e){var t=[],n=e.map((function(e){return e.id})),r=e.reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(d.a)({},t.id,t))}),{});return n.forEach((function(n){(function e(t,n,r,a,c){var i=r?t[r].range:null;if(i===t[n].domain)return!0;if(void 0===i||a>=c)return!1;var o=Object.keys(t).find((function(e){return r!==e&&t[e].domain===i}));return e(t,n,o,a+1,c)})(r,n,n,1,e.length)&&t.push(n)})),t},Q=function(e){var t={};return function(e){var t=[];return e.forEach((function(n){var r=q(n),a=Object(B.a)(r,2),c=a[0],i=a[1];e.some((function(e){var t=q(e),r=Object(B.a)(t,2),a=r[0],o=r[1];return n.id!==e.id&&c===a&&i===o}))&&t.push(n.id)})),t}(e).forEach((function(e){t[e]||(t[e]={}),t[e].duplicate=!0})),function(e){var t=[];return e.forEach((function(n){var r=q(n),a=Object(B.a)(r,2),c=a[0],i=a[1];e.some((function(e){var t=q(e),r=Object(B.a)(t,2),a=r[0],o=r[1];return n.id!==e.id&&c===a&&i!==o}))&&t.push(n.id)})),t}(e).forEach((function(e){t[e]||(t[e]={}),t[e].fork=!0})),K(e).forEach((function(e){t[e]||(t[e]={}),t[e].cycle=!0})),function(e){for(var t=[],n=0;n<e.length;n++)for(var r=q(e[n]),a=Object(B.a)(r,2),c=a[0],i=a[1],o=0;o<e.length;o++)if(n!==o){var l=q(e[o]),u=Object(B.a)(l,2),s=u[0],d=u[1];(c===d&&s!==i||i===s&&d!==c)&&t.push(e[n].id)}return t}(e).forEach((function(e){t[e]||(t[e]={}),t[e].chain=!0})),t},Z=n(12),$=n.n(Z),ee=n(41),te=n.n(ee),ne=n(17),re=n.n(ne),ae=function(e){var t=e.dict,n=t.validated,r=t.numErrors;return a.a.createElement(a.a.Fragment,null,function(e){if(n)return a.a.createElement("span",{className:"".concat(re.a.valid," ").concat(re.a.base)},"validated");if(n||0!==r){var t=1===r;return a.a.createElement("span",{className:"".concat(re.a.error," ").concat(re.a.base)},a.a.createElement("span",null,r),a.a.createElement("span",null," ",t?"Error":"Errors"))}return a.a.createElement("span",{className:"".concat(re.a.unchecked," ").concat(re.a.base)},"not validated yet")}())},ce=n(26),ie=n.n(ce),oe=function(e){var t=e.children;return a.a.createElement("div",{className:ie.a.card},t)};oe.Content=function(e){var t=e.children;return a.a.createElement("div",{className:ie.a.content},t)};var le=oe,ue=Object(u.f)(Object(o.b)((function(e,t){return{entries:t.dict?X(e.entries,t.dict.entryIds):[]}}),{removeDictionary:function(e){return{type:"REMOVE_DICTIONARY",payload:{removedDictionary:e}}},updateDictionary:M,setEntryErrorFlags:k})((function(e){var t=e.dict,n=e.removeDictionary,r=t.name,c=t.id,i=t.entryIds,o=t.edited,u=te()(o).fromNow();return a.a.createElement(le,{style:{position:"relative"}},a.a.createElement(le.Content,null,a.a.createElement(l.b,{to:"dict/".concat(c),style:{position:"absolute",left:0,right:0,top:0,bottom:0}}),a.a.createElement("div",{className:$.a.flexWrap},a.a.createElement("div",null,a.a.createElement("div",{className:$.a.name},r),a.a.createElement("div",{className:$.a.meta},a.a.createElement("span",{className:$.a.mdot},"".concat(i.length," entries")),a.a.createElement("span",{className:$.a.mdot},"edited ".concat(u)),a.a.createElement(ae,{dict:t}))),a.a.createElement("button",{className:"".concat($.a.btn," ").concat($.a.btnValidate),title:"validate Dictionary"},a.a.createElement("i",{className:"fas fa-arrow-down"}," ")),a.a.createElement("button",{className:"".concat($.a.btn," ").concat($.a.btnDelete),title:"delete Dictionary",onClick:function(e){e.preventDefault(),n(t)}},a.a.createElement("i",{className:"far fa-trash-alt"}," ")))))}))),se=n(29),de=n.n(se),me=Object(o.b)(null,{addDictionary:function(e){return{type:"ADD_DICTIONARY",payload:{newDictionary:e}}}})((function(e){e.dictionaries;var t=e.addDictionary,n=Object(r.useState)(""),c=Object(B.a)(n,2),i=c[0],o=c[1],l=function(){return 0!==i.length};return a.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),l()){var n=Date.now(),r={name:i,id:O()(),created:n,edited:n,validated:!1,numErrors:0,entryIds:[]};t(r),o("")}},className:de.a.form},a.a.createElement("input",{"aria-label":"new dictionary name",maxLength:20,type:"text",value:i,placeholder:"new Dictionary Name",onChange:function(e){return o(e.target.value)},name:"name",className:de.a.nameInput}),a.a.createElement("button",{type:"submit"},a.a.createElement("span",null," Add")))})),fe=n(30),pe=n.n(fe),ye=function(e){e.currentDictionary;return a.a.createElement("header",{className:pe.a.header},a.a.createElement("h1",{className:pe.a.heading},"Dictionaries"))},Ee=n(31),be=n.n(Ee),Oe=function(e){var t=e.children,n=e.center;return a.a.createElement("div",{className:"".concat(be.a.container," ").concat(n?be.a.center:"")},t)},ve=Object(o.b)((function(e){var t;return{dictionaries:(t=e.dictionaries,Object.values(t).map((function(e){return e}))).sort((function(e,t){return t.edited-e.edited}))}}),{})((function(e){var t=e.dictionaries;return a.a.createElement("div",{className:U.a.container},a.a.createElement(ye,null),a.a.createElement(Oe,{center:!0},a.a.createElement(me,null),t&&t.map((function(e){return a.a.createElement(ue,{dict:e,key:e.id})}))))})),_e=n(43),ge=n.n(_e),he=n(20),De=n.n(he);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Ne=Object(u.f)(Object(o.b)((function(e,t){var n=t.match.params.id;return{currentDictionary:e.dictionaries[n]}}),{addEntry:function(e){return{type:"ADD_ENTRY",payload:{newEntry:e}}},addEntryIdToDictionary:function(e,t){return{type:"ADD_ENTRY_ID_TO_DICTIONARY",payload:{entryId:e,dictId:t}}},clearEntryErrorFlags:L})((function(e){var t=e.currentDictionary,n=e.addEntry,c=e.addEntryIdToDictionary,i=e.clearEntryErrorFlags,o=Object(r.useState)({domain:"",range:"",error:""}),l=Object(B.a)(o,2),u=l[0],s=l[1],m=Object(r.useRef)(null),f=function(e){return s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u,Object(d.a)({},e.target.name,e.target.value)))},p=function(e){var t=e.domain,n=e.range;return t&&n};return a.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),p(u)){var r=Date.now(),a={domain:u.domain,range:u.range,id:O()(),created:r,edited:r,duplicate:!1,fork:!1,chain:!1,cycle:!1};n(a),c(a.id,t.id),i(t.entryIds),s({domain:"",range:""}),m.current.focus()}},className:De.a.form},a.a.createElement("span",{className:De.a.inputContainer},a.a.createElement("input",{type:"text",maxLength:20,value:u.domain,placeholder:"Domain",onChange:f,name:"domain",className:De.a.input,ref:m}),a.a.createElement("input",{type:"text",maxLength:20,value:u.range,placeholder:"Range",onChange:f,name:"range",className:De.a.input})),a.a.createElement("button",{type:"submit"},a.a.createElement("span",null," Add")))}))),Ie=n(18),we=n.n(Ie);function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Pe=Object(u.f)(Object(o.b)((function(e,t){var n=e.dictionaries[t.match.params.id];return{currentDictionary:n,entries:n?X(e.entries,n.entryIds):[]}}),{setEntryErrorFlags:k,updateDictionary:M,showNotification:function(e){return{type:"SHOW_NOTIFICATION",payload:{message:e}}}})((function(e){var t,n=e.currentDictionary,r=e.entries,c=e.setEntryErrorFlags,i=e.updateDictionary,o=e.showNotification,u=function(e){var t=Q(r),a=Object.entries(t),l=Date.now();0===a.length&&t.constructor===Object?i(Ce({},n,{validated:!0,numErrors:0,edited:l})):(o("errors found"),i(Ce({},n,{validated:!1,numErrors:a.length,edited:l})),a.forEach((function(e){var t=Object(B.a)(e,2),n=t[0],r=t[1];c(n,r)})))};return a.a.createElement("header",{className:we.a.header},a.a.createElement(l.b,{to:"/",className:we.a.btnReturn},a.a.createElement("i",{className:"fas fa-chevron-left"}," "),a.a.createElement("span",null," back")),a.a.createElement("h1",{className:we.a.dictName},n?n.name:""),(t=n)&&t.validated?a.a.createElement("button",{className:"".concat(we.a.btnValidate," ").concat(we.a.valid)},"Validated"):a.a.createElement("button",{className:we.a.btnValidate,onClick:u},"Validate"))}))),Te=n(44),Se=n.n(Te),Ae=n(5),xe=n.n(Ae);function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ye=Object(u.f)(Object(o.b)((function(e,t){return{currentDictionary:e.dictionaries[t.match.params.id]}}),{updateEntry:function(e){return{type:"UPDATE_ENTRY",payload:{updatedEntry:e}}},updateDictionary:M,removeEntryIdFromDictionary:function(e,t){return{type:"REMOVE_ENTRY_ID_FROM_DICTIONARY",payload:{entryId:e,dictId:t}}},removeEntry:function(e){return{type:"REMOVE_ENTRY",payload:{removedEntry:e}}},clearEntryErrorFlags:L})((function(e){var t=e.entry,n=e.updateEntry,c=e.currentDictionary,i=e.updateDictionary,o=e.removeEntryIdFromDictionary,l=e.removeEntry,u=e.clearEntryErrorFlags,s=t.domain,m=t.range,f=(t.entryId,t.duplicate),p=t.fork,y=t.chain,E=t.cycle,b="fas fa-exclamation-triangle",O=Object(r.useRef)(null),v=Object(r.useRef)(null),_=function(e){var r=e.target,a=r.name,o=r.value;if(o!==s&&"domain"===a||o!==m&&"range"===a)if(o){var l=Date.now();n(Ve({},t,Object(d.a)({edited:l},a,o))),i(Ve({},c,{validated:!1,numErrors:0,edited:l})),u(c.entryIds)}else!function(e){"domain"===e.target.name?O.current.value=s:v.current.value=m}(e)},g=function(e){"Enter"===e.key&&e.target.blur()};return a.a.createElement(le,null,a.a.createElement(le.Content,null,a.a.createElement("div",{className:xe.a.flexWrap},a.a.createElement("input",{type:"text",name:"domain",defaultValue:s,className:xe.a.entryInput,onKeyPress:g,onBlur:_,maxLength:20,ref:O}),a.a.createElement("input",{type:"text",name:"range",defaultValue:m,className:xe.a.entryInput,onKeyPress:g,onBlur:_,minLength:1,maxLength:20,ref:v}),a.a.createElement("div",{className:xe.a.flags},a.a.createElement("i",{className:"".concat(b," ").concat(xe.a.warning," ").concat(f?"":xe.a.hidden),title:"Duplicate: identical Domain/Range pair already exists"}),a.a.createElement("i",{className:"".concat(b," ").concat(xe.a.error," ").concat(p?"":xe.a.hidden),title:"Fork: The Domain is already in use"}),a.a.createElement("i",{className:"".concat(b," ").concat(xe.a.error," ").concat(y?"":xe.a.hidden),title:"Chain: the Range is already a Domain in another row"}),a.a.createElement("i",{className:"".concat(b," ").concat(xe.a.severeError," ").concat(E?"":xe.a.hidden),title:"Cycle: Infinite loop detected"})),a.a.createElement("button",{className:xe.a.btnDelete,onClick:function(e){e.preventDefault(),o(t.id,c.id),u(c.entryIds),l(t)}},a.a.createElement("i",{className:"far fa-trash-alt"}," ")))))}))),ke=Object(u.f)(Object(o.b)((function(e,t){var n=e.dictionaries[t.match.params.id];return{entries:n?X(e.entries,n.entryIds):[],currentDictionary:n}}))((function(e){var t=e.entries;return a.a.createElement("div",{className:Se.a.container},t.length?t.map((function(e){return a.a.createElement(Ye,{key:e.id,entry:e})})):a.a.createElement("span",null,"empty dictionary"))}))),Le=Object(u.f)(Object(o.b)((function(e,t){var n=t.match.params.id;return{currentDictionary:e.dictionaries[n]}}))((function(e){var t=e.currentDictionary,n=e.history;return Object(r.useEffect)((function(){t||n.push("/")}),[t]),a.a.createElement("div",{className:ge.a.container},a.a.createElement(Pe,null),a.a.createElement(Oe,{center:!0},a.a.createElement(Ne,null),a.a.createElement(ke,null)))})));i.a.render(a.a.createElement(o.a,{store:P},a.a.createElement(l.a,null,a.a.createElement(u.c,null,a.a.createElement(H,null,a.a.createElement(u.a,{path:"/",exact:!0,component:ve}),a.a.createElement(u.a,{path:"/dict/:id",component:Le}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[46,1,2]]]);
//# sourceMappingURL=main.9146a103.chunk.js.map