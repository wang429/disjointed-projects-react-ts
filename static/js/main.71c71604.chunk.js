(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(24),s=n.n(a),i=(n(32),n(41)),j=n(25),l=n(2),o=n(12),d=n(13),b=n(14),u=n(15),h=n(18),O=n(1),x=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).interval=void 0,r.state={time:new Date},r.interval=setInterval((function(){return r.setState({time:new Date})}),1e3),r}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.time.getHours(),t=this.state.time.getMinutes(),n=this.state.time.getSeconds();return Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"now"}),Object(O.jsx)(h.a,{now:e/24*100,label:e}),Object(O.jsx)(h.a,{now:t/60*100,label:t}),Object(O.jsx)(h.a,{now:n/60*100,label:n})]})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),n}(c.a.Component),m=n.p+"static/media/logo.6ce24c58.svg";n(34);function v(){return Object(O.jsx)("div",{className:"Home",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("img",{src:m,className:"App-logo",alt:"logo"}),Object(O.jsxs)("p",{children:["Edit ",Object(O.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(O.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})}n(35);var p=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsx)("button",{className:"square",children:this.props.value})}}]),n}(c.a.Component),f=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"renderSquare",value:function(e){return Object(O.jsx)(p,{value:e})}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"status",children:"Next player: X"}),Object(O.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(O.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(O.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),n}(c.a.Component),g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"game",children:[Object(O.jsx)("div",{className:"game-board",children:Object(O.jsx)(f,{})}),Object(O.jsxs)("div",{className:"game-info",children:[Object(O.jsx)("div",{}),Object(O.jsx)("ol",{})]})]})}}]),n}(c.a.Component),k=g;var y=function(){return Object(O.jsxs)(j.a,{children:[Object(O.jsx)("div",{children:Object(O.jsxs)(i.a,{activeKey:"/",children:[Object(O.jsx)(i.a.Item,{children:Object(O.jsx)(i.a.Link,{href:"/",children:"Active"})}),Object(O.jsx)(i.a.Item,{children:Object(O.jsx)(i.a.Link,{href:"/clocks",children:"Clocks"})}),Object(O.jsx)(i.a.Item,{children:Object(O.jsx)(i.a.Link,{href:"/Game",children:"Game"})})]})}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",element:Object(O.jsx)(v,{})}),Object(O.jsx)(l.a,{path:"/clocks",element:Object(O.jsx)(x,{})}),Object(O.jsx)(l.a,{path:"/games",element:Object(O.jsx)(k,{})})]})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.71c71604.chunk.js.map