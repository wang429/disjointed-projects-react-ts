(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(9),s=n.n(c),i=(n(14),n.p+"static/media/logo.6ce24c58.svg"),j=(n(15),n(2)),l=n(3),o=n(5),u=n(4),d=n(6),b=n(0),h=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this,e)).interval=void 0,r.state={time:new Date},r.interval=setInterval((function(){return r.setState({time:new Date})}),1e3),r}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.time.getHours(),t=this.state.time.getMinutes(),n=this.state.time.getSeconds();return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"now"}),Object(b.jsx)(d.a,{now:e/24*100,label:e}),Object(b.jsx)(d.a,{now:t/60*100,label:t}),Object(b.jsx)(d.a,{now:n/60*100,label:n})]})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),n}(a.a.Component),O=(n(17),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("button",{className:"square",children:this.props.value})}}]),n}(a.a.Component)),p=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"renderSquare",value:function(e){return Object(b.jsx)(O,{value:e})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"status",children:"Next player: X"}),Object(b.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(b.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(b.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),n}(a.a.Component),v=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"game",children:[Object(b.jsx)("div",{className:"game-board",children:Object(b.jsx)(p,{})}),Object(b.jsxs)("div",{className:"game-info",children:[Object(b.jsx)("div",{}),Object(b.jsx)("ol",{})]})]})}}]),n}(a.a.Component);var m=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"TicTacToe",children:Object(b.jsx)(v,{})}),Object(b.jsx)("div",{className:"Clock",children:Object(b.jsx)(h,{})}),Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(b.jsxs)("p",{children:["Edit ",Object(b.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(b.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.b267e65b.chunk.js.map