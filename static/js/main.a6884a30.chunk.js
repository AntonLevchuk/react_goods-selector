(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var o=s(3),c=s.n(o),n=s(6),a=s(4),i=s(5),l=s(8),r=s(7),d=s(1),u=s.n(d),j=(s(13),s(14),s(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(l.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(a.a)(this,s);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={selectedGoods:["Jam"]},e.switchGood=function(t){e.setState((function(e){var s=e.selectedGoods;return{selectedGoods:s.includes(t)?s.filter((function(e){return e!==t})):[].concat(Object(n.a)(s),[t])}}))},e.clearGoods=function(){e.setState({selectedGoods:[]})},e.getGoods=function(){var t=e.state.selectedGoods;return t.length>2?[t.slice(0,-1).join(", "),t.slice(-1)].join(" and "):t.join(" and ")},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("h1",{className:"app__title",children:[0===t.length?"No goods":this.getGoods(),t.length>0&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:"app__button",type:"button",onClick:function(){e.clearGoods()},children:"Clear"})})]}),Object(j.jsx)("ul",{className:"goodsList",children:h.map((function(s){return Object(j.jsxs)("li",{className:"goodsList__item ".concat(t.includes(s)?"goodsList__selected":""),children:[Object(j.jsx)("span",{className:"goodsList__goods",children:s}),Object(j.jsx)("button",{type:"button",className:"goodsList__button ".concat(t.includes(s)?"goodsList__selectedButton":""),onClick:function(){e.switchGood(s)},children:t.includes(s)?"Remove":"Select"})]},s)}))})]})}}]),s}(u.a.Component),g=b;c.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a6884a30.chunk.js.map