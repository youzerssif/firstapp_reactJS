(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),o=(n(14),n(9)),s=n(2),h=n(3),j=n(5),u=n(4),l=(n(15),n(0)),b=function(){return Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Job"})]})})},d=function(t){var e=t.characterData.map((function(e,n){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.job}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){return t.removeCharacter(n)},children:"Delete"})})]},n)}));return Object(l.jsx)("tbody",{children:e})},O=function(t){var e=t.characterData,n=t.removeCharacter;return Object(l.jsxs)("table",{children:[Object(l.jsx)(b,{}),Object(l.jsx)(d,{characterData:e,removeCharacter:n})]})},m=n(8),f=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).initialState={name:"",job:""},t.state=t.initialState,t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.submitForm=function(){t.props.handleSubmit(t.state),t.setState(t.initialState)},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.job;return Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(l.jsx)("label",{htmlFor:"job",children:"Job"}),Object(l.jsx)("input",{type:"text",name:"job",id:"job",value:n,onChange:this.handleChange}),Object(l.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),n}(a.Component),v=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={data:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then((function(t){return t.json()})).then((function(e){t.setState({data:e})}))}},{key:"render",value:function(){var t=this.state.data.map((function(t,e){return Object(l.jsx)("li",{children:t},e)}));return Object(l.jsx)("ul",{children:t})}}]),n}(a.Component),p=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={characters:[]},t.removeCharacter=function(e){var n=t.state.characters;t.setState({characters:n.filter((function(t,n){return n!==e}))})},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(o.a)(t.state.characters),[e])})},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.state.characters;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Hello, React!"}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(O,{characterData:t,removeCharacter:this.removeCharacter}),Object(l.jsx)(f,{handleSubmit:this.handleSubmit}),Object(l.jsx)(v,{})]})]})}}]),n}(a.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.832f3f34.chunk.js.map