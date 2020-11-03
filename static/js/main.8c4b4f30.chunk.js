(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{20:function(t,n,e){t.exports={appear:"FormTitleAnimation_appear__cbFo0",appearActive:"FormTitleAnimation_appearActive__1ZqgD"}},24:function(t,n,e){t.exports={enter:"ListItemAnimation_enter__1Eu4x",enterActive:"ListItemAnimation_enterActive__2Ruvy",exit:"ListItemAnimation_exit__1g_ak",exitActive:"ListItemAnimation_exitActive__yXF-7"}},25:function(t,n,e){t.exports={enter:"AlertAnimation_enter__lJnwH",enterActive:"AlertAnimation_enterActive__3Hf6J",exit:"AlertAnimation_exit__1rN6U",exitActive:"AlertAnimation_exitActive__dvr8e"}},38:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e(0),o=e(6),c=e.n(o),i=e(26),s=e(8),u=e(9),l=e(14),b=e(13),f=e(2),p=e(40),d=e(3),h=e(39),x=e(20),m=e.n(x);function j(){var t=Object(f.a)(["\n  display: block;\n  padding-right: 10px;\n"]);return j=function(){return t},t}function v(){var t=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n  display: flex;\n"]);return v=function(){return t},t}function g(){var t=Object(f.a)(["\n  width: 150px;\n  border: 1px solid #4a86e0;\n  border-radius: 4px;\n  background-color: transparent;\n  cursor: pointer;\n  &:hover {\n    background-color: #4a86e0;\n    color: #fff;\n  }\n"]);return g=function(){return t},t}function O(){var t=Object(f.a)(["\n  width: 400px;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  box-shadow: 3px 3px 5px -1px rgba(134, 133, 245, 0.77);\n  margin-bottom: 10px;\n  font-size: 18px;\n"]);return O=function(){return t},t}function A(){var t=Object(f.a)(["\n  font-size: 24px;\n  font-weight: 600;\n  color: blue;\n  font-family: sans-serif;\n"]);return A=function(){return t},t}var _=d.a.h2(A()),y=d.a.form(O()),C=d.a.button(g()),w=d.a.label(v()),S=d.a.span(j()),k=function(t){Object(l.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).state={name:"",number:""},t.onChangeName=function(n){t.setState({name:n.target.value})},t.onChangeNumber=function(n){t.setState({number:n.target.value})},t.handleSubmit=function(n){n.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this.state,n=t.name,e=t.number;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h.a,{in:!0,appear:!0,timeout:500,classNames:m.a,children:Object(r.jsx)(_,{children:"Phonebook"})}),Object(r.jsxs)(y,{onSubmit:this.handleSubmit,children:[Object(r.jsxs)(w,{children:[Object(r.jsx)(S,{children:"Name"}),Object(r.jsx)("input",{type:"text",placeholder:"Enter your name",value:n,onChange:this.onChangeName})]}),Object(r.jsxs)(w,{children:[Object(r.jsx)(S,{children:"Number"}),Object(r.jsx)("input",{type:"tel",placeholder:"XXX-XX-XX",value:e,onChange:this.onChangeNumber})]}),Object(r.jsx)(C,{type:"submit",children:"Add contact"})]})]})}}]),e}(a.Component),N=e(41),F=e(24),I=e.n(F);function L(){var t=Object(f.a)(["\n  border: 1px solid #4a86e0;\n  border-radius: 4px;\n  background-color: transparent;\n  cursor: pointer;\n  height: 30px;\n  &:hover {\n    border: 1px solid #f3491b;\n    background-color: #f3491b;\n    color: #fff;\n  }\n"]);return L=function(){return t},t}function X(){var t=Object(f.a)(["\n  box-shadow: 3px 3px 5px -1px rgba(134, 133, 245, 0.77);\n  padding: 40px;\n  width: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  box-sizing: border-box;\n"]);return X=function(){return t},t}Object(p.a)();var D=d.a.li(X()),E=d.a.button(L()),J=function(t){var n=t.contacts,e=t.onDeleteContact;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(N.a,{children:n.map((function(t){var n=t.id,a=t.name,o=t.number;return Object(r.jsx)(h.a,{timeout:250,classNames:I.a,children:Object(r.jsxs)(D,{children:[a," : ",o,Object(r.jsx)(E,{onClick:function(){return e(n)},children:"delete"})]})},n)}))})})};J.defaultProps={name:"Name Surname",number:"000-00-00"};var z=J;function H(){var t=Object(f.a)(["\n  width: 395px;\n  border: 2px solid paleviolet;\n  margin-bottom: 20px;\n  height: 30px;\n"]);return H=function(){return t},t}var P=d.a.input(H());function T(t){var n=t.value,e=t.onChangeSearchInput;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Find contact by name:"}),Object(r.jsx)(P,{type:"text",value:n,onChange:e,placeholder:"Enter name to search"})]})}function U(){var t=Object(f.a)(["\n  background-color: #f3491b;\n  color: #fff;\n  height: 30px;\n  width: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return U=function(){return t},t}var q=d.a.div(U());function B(){return Object(r.jsx)(q,{children:Object(r.jsx)("p",{children:"Contact already exist!"})})}var M=e(25),R=e.n(M);function Z(){var t=Object(f.a)(["\n  font-family: sans-serif;\n  font-size: 16px;\n"]);return Z=function(){return t},t}Object(p.a)();var G=d.a.div(Z()),K=function(t){Object(l.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=n.call.apply(n,[this].concat(a))).state={contacts:[],filter:"",showAlert:!1},t.addContact=function(n){var e=n.name,r=n.number,a={id:Object(p.a)(),name:e,number:r};t.state.contacts.some((function(t){return t.name.toLowerCase()===a.name.toLowerCase()}))?t.setState((function(t){return{showAlert:!t.showAlert}})):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[a])}}))},t.filterContacts=function(n){t.setState({filter:n.target.value})},t.getFilteredContacts=function(){var n=t.state,e=n.contacts,r=n.filter;return e.filter((function(t){return t.name.toLowerCase().includes(r.toLowerCase())}))},t.deleteContact=function(n){var e=t.state.contacts.filter((function(t){return t.id!==n}));t.setState({contacts:e}),localStorage.removeItem(n)},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this,n=this.state,e=n.filter,a=n.contacts,o=n.showAlert,c=this.getFilteredContacts();return Object(r.jsxs)(G,{children:[Object(r.jsx)(h.a,{in:o,onEntered:function(){return t.setState({showAlert:!1})},timeout:500,classNames:R.a,unmountOnExit:!0,children:Object(r.jsx)(B,{})}),Object(r.jsx)(k,{onSubmit:this.addContact}),a.length>1&&Object(r.jsx)(T,{value:e,onChangeSearchInput:this.filterContacts}),Object(r.jsx)(z,{contacts:c,onDeleteContact:this.deleteContact})]})}},{key:"componentDidMount",value:function(){if(0!==localStorage.length){var t=localStorage.getItem("contacts");this.setState({contacts:JSON.parse(t)})}}},{key:"componentDidUpdate",value:function(t){t!==this.state&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}}]),e}(a.Component);c.a.render(Object(r.jsx)(K,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.8c4b4f30.chunk.js.map