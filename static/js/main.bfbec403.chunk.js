(this["webpackJsonpreact-countdown-timer"]=this["webpackJsonpreact-countdown-timer"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),i=n.n(r),s=(n(20),n(4)),o=n(5),u=n(7),l=n(6),m=(n(21),n(9)),d=n(8),b=n(1),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).renderTime=function(e){if(0===e.remainingTime)return Object(b.jsx)("div",{className:"timer",children:"Too lale..."})},a.handleTimeInput=function(e){var t=e.target,n=t.value,c=t.className;a.setState((function(e){var t=parseInt(n,10)<0?0:parseInt(n,10);return"second"===c&&t>59&&(t=59),"minute"===c&&t>999&&(t=999),{time:Object(d.a)(Object(d.a)({},e.time),Object(m.a)({},c,t))}}))},a.totalTime=function(e){var t=e.time;return 60*t.minute+t.second},a.setTime=function(e){var t=e.time,n=t.minute,c=t.second;return!c&&n&&(n-=1,c=60),n||c?{time:{minute:n,second:c-1}}:a.onClear()},a.onStart=function(e){e.preventDefault();var t=a.props,n=t.handleMode;1!==t.ligado&&(n(1),a.myInterval=setInterval((function(){a.setState((function(e){return Object(d.a)(Object(d.a)({},e),a.setTime(e))}))}),1e3))},a.onPause=function(e){e.preventDefault(),(0,a.props.handleMode)(2),clearInterval(a.myInterval)},a.onClear=function(){(0,a.props.handleMode)(3),clearInterval(a.myInterval),a.setState({time:{minute:0,second:0}})},a.timeOver=function(){return Object(b.jsx)("label",{className:"acabou",children:"ACABOU O TEMPO !!!"})},a.formatValue=function(e){var t=e<10?"0".concat(e):e;return console.log(e),t},a.state={time:{minute:0,second:0}},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.time,t=e.minute,n=e.second,a=this.props.ligado;return Object(b.jsxs)("form",{className:"clock",children:[Object(b.jsxs)("div",{className:"clockInput",children:[Object(b.jsx)("input",{className:"minute",maxlength:"4",placeholder:this.formatValue(t),type:"number",value:this.formatValue(t),min:"0",max:"9999",onChange:this.handleTimeInput}),Object(b.jsx)("input",{className:"second",maxlength:"2",placeholder:this.formatValue(n),type:"number",value:this.formatValue(n),min:"0",max:"59",step:10,onChange:this.handleTimeInput})]}),Object(b.jsxs)("div",{className:"clockButtons",children:[Object(b.jsx)("button",{className:"startBtn",type:"reset",onClick:this.onStart}),Object(b.jsx)("button",{className:"stopBtn",type:"reset",onClick:this.onPause}),Object(b.jsx)("button",{className:"clearBtn",type:"reset",onClick:this.onClear})]}),!t&&!n&&3===a&&this.timeOver()]})}}]),n}(c.a.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.embedId;return Object(b.jsx)("div",{className:"video-responsive",children:Object(b.jsx)("iframe",{width:"1000",height:"480",src:"https://www.youtube.com/embed/".concat(e),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})}}]),n}(c.a.Component),p=n.p+"static/media/acabou.93314e4b.mp4",O=n.p+"static/media/surpresa.a6ca06e9.png",f=n(15),v=n.n(f),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleMode=function(e){return a.setState({ligado:e})},a.acabou=function(){return Object(b.jsxs)("div",{className:"acabou",children:[Object(b.jsx)(v.a,{playing:!0,url:p,height:"300px",width:"500px",controls:"true"}),Object(b.jsx)("img",{src:O,className:"acabouImg",alt:"acabou"})]})},a.state={ligado:0},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.ligado;return Object(b.jsxs)("body",{className:"main",children:[Object(b.jsx)(h,{handleMode:this.handleMode,ligado:e}),1===e&&Object(b.jsx)(j,{embedId:"rNLHC406Y6s?autoplay=1"}),3===e&&this.acabou()]})}}]),n}(a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.bfbec403.chunk.js.map