(this.webpackJsonpnaumen=this.webpackJsonpnaumen||[]).push([[0],{16:function(e,t,a){e.exports={pagination:"Pagination_pagination__3MwjH",pagination__item:"Pagination_pagination__item__tOWop"}},20:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},26:function(e,t,a){},3:function(e,t,a){e.exports={phonebook:"phonebook_phonebook__1Vsm9",phonebook__actions:"phonebook_phonebook__actions__l0YAR",phonebook__list:"phonebook_phonebook__list__3lMgC",phonebook__header:"phonebook_phonebook__header__33YRT"}},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),l=(a(25),a(26),a(5)),s=a(6),i=a(7),u=a(8),m=a(3),h=a.n(m),p=a(1),d=a(12),_=a(11),f=a(4),E=a.n(f);function b(){return function(e){e({type:"LOCALSTORAGE_GET"})}}function v(e,t){return function(a){a(function(e){return{type:"ADD_CONTACT",contact:e}}({name:e,phone:t})),a(O())}}function g(e){return function(t){t(function(e){return{type:"REMOVE_CONTACT",contact:e}}(e)),t(O())}}function O(){return{type:"LOCALSTORAGE_SET"}}var k=function(e){var t=e.formErrors;return o.a.createElement("div",{className:E.a.modal__error},Object.keys(t).map((function(e,a){return t[e].length>0?o.a.createElement("p",{key:a},t[e]):""})))},C=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleUserInput=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(d.a)({},t,a),(function(){n.validateField(t,a)}))},n.onClose=function(e){n.props.onClose&&n.props.onClose(e)},n.dublicate=function(){return o.a.createElement("h1",null,"\u041a\u041e\u041d\u0422\u0410\u041a\u0422 \u0423\u0416\u0415 \u0415\u0421\u0422\u042c")},n.save=function(){n.props.contacts.filter((function(e){return e.name.toLowerCase()===n.state.name.toLowerCase()||e.phone.toLowerCase()===n.state.phone.toLowerCase()})).length>0?n.setState({dublicate:!0}):(n.onClose(),n.props.addContactHandler(n.state.name,n.state.phone),n.setState({name:"",phone:"",dublicate:!1,formValid:!1}))},n.state={name:"",phone:"",dublicate:!1,formErrors:{name:"",phone:""},nameValid:!1,phoneValid:!1,formValid:!1},n.handleUserInput=n.handleUserInput.bind(Object(_.a)(n)),n}return Object(s.a)(a,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.nameValid,o=this.state.phoneValid;switch(e){case"name":n=t.match(/[a-zA-Z\u0430-\u044f\u0451\u0410-\u042f\u04010-9]/g),a.name=n?"":" \u041d\u0435 \u043a\u043e\u0440\u0440\u0435\u0442\u043d\u043e\u0435 \u0438\u043c\u044f (\u0412\u0432\u043e\u0434\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0443 \u0438 \u043b\u0430\u0442\u0438\u043d\u043d\u0438\u0446\u0443 )";break;case"phone":o=t.match(/^[+|0-9]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g),a.phone=o?"":" \u041d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440"}this.setState({formErrors:a,nameValid:n,phoneValid:o},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.nameValid&&this.state.phoneValid}),console.log(this.state.formValid)}},{key:"render",value:function(){return this.props.show?o.a.createElement("div",{className:E.a.modal},o.a.createElement("h2",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438 \u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"),o.a.createElement("div",null,this.state.dublicate?o.a.createElement("h2",{className:E.a.modal__dublicate},"\u042d\u0422\u041e \u041a\u041e\u041d\u0422\u0410\u041a\u0422 \u0423\u0416\u0415 \u0415\u0421\u0422\u042c"):null),o.a.createElement("div",{className:E.a.modal__input},o.a.createElement("label",{htmlFor:"name"},"\u0418\u043c\u044f"),o.a.createElement("input",{type:"text",id:"name",name:"name",value:this.state.name,onChange:this.handleUserInput,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),o.a.createElement("label",{htmlFor:"phone"},"\u041d\u043e\u043c\u0435\u0440"),o.a.createElement("input",{type:"text",id:"phone",name:"phone",value:this.state.phone,onChange:this.handleUserInput,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440"})),o.a.createElement("div",null,o.a.createElement(k,{formErrors:this.state.formErrors})),o.a.createElement("div",{className:E.a.modal__actions},o.a.createElement("button",{disabled:!this.state.formValid,onClick:this.save},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),o.a.createElement("button",{onClick:this.onClose},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))):null}}]),a}(o.a.Component);var w=Object(p.b)((function(e){return{contacts:e.phonebook.contacts}}),(function(e){return{addContactHandler:function(t,a){return e(v(t,a))}}}))(C),S=a(16),j=a.n(S),N=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,r=[],c=1;c<=Math.ceil(a/t);c++)r.push(c);return o.a.createElement("nav",null,o.a.createElement("ul",{className:j.a.pagination},r.map((function(e){return o.a.createElement("li",{onClick:function(){return n(e)},key:e,className:j.a.pagination__item},o.a.createElement("a",{className:"page-link"},e))}))))},y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={postsPerPage:10,currentPage:1},n}return Object(s.a)(a,[{key:"removeContactHandler",value:function(e){this.props.removeContactLocal(e)}},{key:"currentPosts",value:function(){return this.props.contacts.map((function(e){return o.a.createElement("li",null,"con")}))}},{key:"render",value:function(){var e=this,t=this.state.currentPage*this.state.postsPerPage,a=t-this.state.postsPerPage,n=this.props.contacts.filter((function(t){return t.name.toLowerCase().startsWith(e.props.search.toLowerCase())})).slice(a,t);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:h.a.phonebook},o.a.createElement("div",{className:h.a.phonebook__header},o.a.createElement("div",null,"\u0418\u043c\u044f"),o.a.createElement("div",null,"\u041d\u043e\u043c\u0435\u0440"),o.a.createElement("div",null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435")),o.a.createElement("ul",{className:h.a.phonebook__list},n.map((function(t){return o.a.createElement("li",{key:t.id,className:h.a.phonebook__header},o.a.createElement("div",null,t.name),o.a.createElement("div",null,t.phone),o.a.createElement("div",null,o.a.createElement("button",{onClick:e.removeContactHandler.bind(e,t)},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))})))),o.a.createElement(N,{postsPerPage:this.state.postsPerPage,totalPosts:this.props.contacts.length,paginate:function(t){e.setState({currentPage:t})}}))}}]),a}(o.a.Component);var P=Object(p.b)((function(e){return{contacts:e.phonebook.contacts,search:e.phonebook.search}}),(function(e){return{removeContactLocal:function(t){return e(g(t))}}}))(y),T=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={show:!1},e.showModal=function(t){e.setState({show:!e.state.show})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchContactsStorage()}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Phonebook"),o.a.createElement("div",{className:h.a.phonebook__actions},o.a.createElement("label",null,"\u041f\u043e\u0438\u0441\u043a:"),o.a.createElement("input",{value:this.props.search,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:function(t){var a=t.target.value;e.props.searchHandler(a)}}),o.a.createElement("button",{onClick:function(t){e.showModal(t)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442")),o.a.createElement(P,null),o.a.createElement(w,{onClose:this.showModal,show:this.state.show}))}}]),a}(o.a.Component);var A=Object(p.b)((function(e){return{contacts:e.phonebook.contacts,search:e.phonebook.search}}),(function(e){return{fetchContactsStorage:function(){return e(b())},searchHandler:function(t){return e(function(e){return{type:"SEARCH_INPUT",search:e}}(t))}}}))(T);var L=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Naumen test task"),o.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V,I=a(2),R=a(19),M=a(9);V=null!==window.localStorage.getItem("contactsStorage")?Array.from(JSON.parse(window.localStorage.getItem("contactsStorage"))):[];var D={contacts:[],search:""};var H=Object(I.c)({phonebook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTACT":return t.contact.id=e.contacts.length,Object(M.a)({},e,{contacts:e.contacts.concat(t.contact)});case"REMOVE_CONTACT":return Object(M.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.contact.id}))});case"LOCALSTORAGE_GET":return Object(M.a)({},e,{contacts:V});case"LOCALSTORAGE_SET":return window.localStorage.setItem("contactsStorage",JSON.stringify(e.contacts)),Object(M.a)({},e);case"SEARCH_INPUT":return Object(M.a)({},e,{search:t.search});default:return e}}}),U="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):I.d,F=Object(I.e)(H,U(Object(I.a)(R.a))),x=o.a.createElement(p.a,{store:F},o.a.createElement(L,null));c.a.render(x,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports={modal:"modal_modal__3j2Z5",modal__dublicate:"modal_modal__dublicate__3NfD4",modal__actions:"modal_modal__actions__3SWHU",modal__input:"modal_modal__input__rg5_N",modal__error:"modal_modal__error__283JZ"}}},[[20,1,2]]]);
//# sourceMappingURL=main.af9e1c4d.chunk.js.map