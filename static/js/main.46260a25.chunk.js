(this["webpackJsonpgame-app"]=this["webpackJsonpgame-app"]||[]).push([[0],{28:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(0),n=(a(28),a(1)),s=a(16),r=a.n(s),i=a(5),l=(a(36),a(11)),o=a(4),d=a(3),u=(a(37),"https://virtserver.swaggerhub.com/selfdecode.com/game-challenge/1.0.0/"),m="".concat(u,"user/"),j="".concat(u,"game/"),b="".concat(u,"score/"),h=a(15),v=a.n(h),O=a(21);function x(e){return f.apply(this,arguments)}function f(){return(f=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log(e),e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(O.a)(v.a.mark((function e(t,a){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new FormData).append("user_id",a.user_id),c.append("score",a.score),c.append("game_it",a.game_id),e.abrupt("return",fetch(t,{method:"PUT",body:c}).then((function(e){return e.json()})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N="SET_USER",g="SET_All_GAMES",G="SET_CURRENT_GAME",y="TOGGLE_VOLUME",w="SET_SCORE",_="START_GAME",S="STOP_GAME",E="FINISH_GAME",A=(a(39),Object(i.b)((function(e){return{launchedGame:e.launchedGame}}),{})((function(e){return Object(c.jsx)("div",{className:"score-control",children:Object(c.jsxs)("div",{className:"score-control-content",children:[Object(c.jsx)("div",{className:"score-text",children:"score"}),Object(c.jsx)("div",{className:"score-display",children:e.launchedGame.score})]})})}))),T=(a(40),Object(i.b)((function(e){return{launchedGame:e.launchedGame}}),{toggleSound:function(){return{type:y}}})((function(e){return Object(n.useEffect)((function(){}),[e.launchedGame.volume]),Object(c.jsx)("div",{className:"sound-control",children:Object(c.jsx)("div",{onClick:e.toggleSound,className:"sound-control-button".concat(e.launchedGame.volume?" sound-control-button-active":""),children:e.launchedGame.volume?Object(c.jsx)("i",{className:"fas fa-volume-up"}):Object(c.jsx)("i",{className:"fas fa-volume-mute"})})})}))),k=a(10),F=(a(41),Object(i.b)((function(e){return{currentGame:e.currentGame}}),{})((function(e){var t=Object(n.useState)(0),a=Object(k.a)(t,2),s=a[0],r=a[1],i=e.currentGame.time-s;Object(n.useEffect)((function(){if(e.active){var t=setInterval((function(){r((function(e){return e+1}))}),1e3);return function(){i=e.currentGame.time,r(0),clearTimeout(t)}}}),[e.active]);return Object(c.jsxs)("div",{className:"time-control",children:[Object(c.jsx)("div",{className:"time-control-top",children:Object(c.jsx)("div",{className:e.active?"time-control-slider time-control-slider-hidden":"time-control-slider",children:Object(c.jsx)("div",{style:e.active?{transition:"all ".concat(e.currentGame.time.toString(),"s linear")}:{transition:"0s"},className:"slider-bar"})})}),Object(c.jsx)("div",{className:"time-control-bottom",children:Object(c.jsxs)("div",{className:"time-control-bottom-content",children:[Object(c.jsx)("div",{className:"time-control-text",children:"time"}),Object(c.jsx)("div",{className:"time-control-number",children:i})]})})]})}))),C=(a(42),a.p+"static/media/X.63627aa8.svg"),I=Object(i.b)((function(e){return{launchedGame:e.launchedGame}}),{changeScore:function(e){return{type:w,payload:e}}})((function(e){var t=Object(n.useState)({color:"",text:""}),a=Object(k.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)({color:"",text:""}),l=Object(k.a)(i,2),o=l[0],u=l[1],m=Object(n.useState)({color:"",text:""}),j=Object(k.a)(m,2),b=j[0],h=j[1],v=document.getElementById("header"),O=function(){return Math.random()>=.5?"blue":"red"},x=function(){return Math.random()>=.5?"#0081FF":"#FF0000"};Object(n.useEffect)((function(){f()}),[]);var f=function(){var e=O(),t="blue"===e?"red":"blue",a=x(),c="#FF0000"===a?"#0081FF":"#FF0000";r({text:O(),color:x()}),u({text:e,color:a}),h({text:t,color:c})},p=function(t){if(!function(e){var t,a,c;return(null===(t=e.target.parentElement)||void 0===t||null===(a=t.querySelector(".active-game-button-text"))||void 0===a||null===(c=a.textContent)||void 0===c?void 0:c.toLowerCase())===("rgb(0, 129, 255)"===(null===v||void 0===v?void 0:v.style.color)?"blue":"red")}(t)){var a,c,n=null===(a=t.target.parentElement)||void 0===a?void 0:a.querySelector(".overlay");return null===n||void 0===n||n.classList.remove("hidden"),null===n||void 0===n||null===(c=n.querySelector("img"))||void 0===c||c.classList.remove("not-displayed"),void setTimeout((function(){var t;null===n||void 0===n||n.classList.add("hidden"),null===n||void 0===n||null===(t=n.querySelector("img"))||void 0===t||t.classList.add("not-displayed"),f(),e.launchedGame.score>0&&e.changeScore(Object(d.a)(Object(d.a)({},e.launchedGame),{},{score:e.launchedGame.score-1}))}),500)}f(),e.changeScore(Object(d.a)(Object(d.a)({},e.launchedGame),{},{score:e.launchedGame.score+1}))};return Object(c.jsxs)("div",{className:"active-game",children:[Object(c.jsx)("div",{id:"header",style:{color:s.color},className:"active-game-header",children:s.text.toUpperCase()}),Object(c.jsxs)("div",{className:"active-game-buttons",children:[Object(c.jsxs)("button",{id:"btn1",onClick:p,style:{color:o.color},className:" active-game-button",children:[Object(c.jsx)("p",{className:"absolute active-game-header active-game-button-text",children:o.text.toUpperCase()}),Object(c.jsx)("div",{className:"absolute overlay hidden",children:Object(c.jsx)("img",{className:"absolute not-displayed",src:C,alt:""})})]}),Object(c.jsxs)("button",{id:"btn2",onClick:p,style:{color:b.color},className:"active-game-button",children:[Object(c.jsx)("p",{className:"absolute active-game-header active-game-button-text",children:b.text.toUpperCase()}),Object(c.jsx)("div",{className:"absolute overlay hidden",children:Object(c.jsx)("img",{className:"absolute not-displayed",src:C,alt:""})})]})]})]})})),L=(a(43),Object(i.b)((function(e){var t=e.currentGame,a=e.launchedGame.score;return{farewell_text:t.farewell_text,score:a}}),{})((function(e){return Object(c.jsxs)("div",{className:"game-double-trouble-end",children:[Object(c.jsx)("div",{className:"game-end-header",children:"Thank you!"}),Object(c.jsxs)("div",{className:"score-box",children:["Your score is ",e.score]}),Object(c.jsx)("div",{className:"farewell-text",children:e.farewell_text})]})}))),U=a.p+"static/media/greenLines.1e58080d.svg",M=a.p+"static/media/redLines.93fb6cf3.svg",R=function(e){var t=Object(n.useState)(8),a=Object(k.a)(t,2),s=a[0],r=a[1];switch(Object(n.useEffect)((function(){var t=setInterval((function(){s>0&&r(s-1)}),e.duration/8);return function(){clearInterval(t)}}),[s]),s){case 8:return Object(c.jsxs)("div",{className:"animation",children:[Object(c.jsx)("img",{src:M,alt:"",className:"lines hidden"}),Object(c.jsx)("div",{className:"lines-cover"}),Object(c.jsxs)("div",{className:"play-button-started",children:[Object(c.jsx)("div",{className:"time-count-down",children:"3"}),Object(c.jsx)("div",{className:"time-count-down hidden",children:"2"})]})]});case 7:return Object(c.jsxs)("div",{className:"animation",children:[Object(c.jsx)("img",{src:M,alt:"",className:"lines"}),Object(c.jsx)("div",{className:"lines-cover"}),Object(c.jsxs)("div",{className:"play-button-started",children:[Object(c.jsx)("div",{className:"time-count-down",children:"3"}),Object(c.jsx)("div",{className:"time-count-down hidden",children:"2"})]})]});case 6:return Object(c.jsxs)("div",{className:"animation",children:[Object(c.jsx)("img",{src:M,alt:"",className:"lines hidden"}),Object(c.jsx)("div",{className:"lines-cover"}),Object(c.jsxs)("div",{className:"play-button-started",children:[Object(c.jsx)("div",{className:"time-count-down hidden",children:"3"}),Object(c.jsx)("div",{className:"time-count-down",children:"2"})]})]});case 5:return Object(c.jsxs)("div",{className:"animation",children:[Object(c.jsx)("img",{src:M,alt:"",className:"lines"}),Object(c.jsx)("div",{className:"lines-cover"}),Object(c.jsxs)("div",{className:"play-button-started",children:[Object(c.jsx)("div",{className:"time-count-down hidden",children:"1"}),Object(c.jsx)("div",{className:"time-count-down",children:"2"})]})]});case 4:return Object(c.jsxs)("div",{className:"animation",children:[Object(c.jsx)("img",{src:M,alt:"",className:"lines hidden"}),Object(c.jsx)("div",{className:"lines-cover"}),Object(c.jsxs)("div",{className:"play-button-started",children:[Object(c.jsx)("div",{className:"time-count-down",children:"1"}),Object(c.jsx)("div",{className:"time-count-down hidden",children:"2"})]})]});case 3:return Object(c.jsxs)("div",{className:"animation",children:[Object(c.jsx)("img",{src:M,alt:"",className:"lines"}),Object(c.jsx)("div",{className:"lines-cover"}),Object(c.jsxs)("div",{className:"play-button-started",children:[Object(c.jsx)("div",{className:"time-count-down",children:"1"}),Object(c.jsx)("div",{className:"time-count-down hidden",children:"0"})]})]});case 2:return Object(c.jsxs)("div",{className:"animation-end",children:[Object(c.jsx)("img",{src:U,alt:"",className:"lines-end hidden no-transition"}),Object(c.jsx)("div",{className:"lines-cover-end"}),Object(c.jsx)("div",{className:"play-button-started-end",children:Object(c.jsx)("div",{className:"time-count-down-end",children:"Go!"})})]});case 1:return Object(c.jsxs)("div",{className:"animation-end",children:[Object(c.jsx)("img",{src:U,alt:"",className:"lines-end"}),Object(c.jsx)("div",{className:"lines-cover-end"}),Object(c.jsx)("div",{className:"play-button-started-end",children:Object(c.jsx)("div",{className:"time-count-down-end",children:"Go!"})})]});default:return Object(c.jsx)("div",{className:"animation-end"})}},q=function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),s=a[0],r=a[1];Object(n.useEffect)((function(){if(s){var t=setTimeout((function(){e.startGame()}),6e3);return function(){clearTimeout(t)}}}),[s]);return e.active?Object(c.jsx)("div",{className:"prepare-for-game",children:Object(c.jsx)("div",{className:"play-wrapper",children:Object(c.jsx)("div",{className:"play-button"})})}):s?Object(c.jsx)("div",{className:"prepare-for-game",children:Object(c.jsx)(R,{duration:6e3})}):Object(c.jsxs)("div",{className:"prepare-for-game",children:[Object(c.jsx)("div",{className:"play-wrapper",children:Object(c.jsx)("div",{onClick:function(){r(!0)},className:"play-button",children:Object(c.jsx)("i",{className:"fas fa-play"})})}),Object(c.jsx)("div",{className:"start-text",children:"Start the game"}),Object(c.jsx)(l.b,{className:"back-to-desc",to:"/".concat(e.name),children:"Instructions"})]})},D=Object(i.b)((function(e){return{user:e.user,currentGame:e.currentGame,launchedGame:e.launchedGame}}),{startGame:function(){return{type:_}},stopGame:function(){return{type:S}},setFinishedTrue:function(){return{type:E}}})((function(e){return Object(n.useEffect)((function(){if(e.launchedGame.gameActive){var t=setTimeout((function(){e.stopGame(),e.setFinishedTrue()}),1e3*e.currentGame.time);return function(){return clearTimeout(t)}}}),[e.launchedGame.gameActive]),Object(n.useEffect)((function(){e.launchedGame.finished&&function(e,t){p.apply(this,arguments)}(b,{user_id:e.user.id,score:e.launchedGame.score.toString(),game_id:e.currentGame.id})}),[e.launchedGame.finished]),e.launchedGame.finished?Object(c.jsx)(L,{}):Object(c.jsxs)("div",{className:"game-double-trouble",children:[Object(c.jsx)("div",{className:"game-double-trouble-body",children:e.launchedGame.gameActive?Object(c.jsx)(I,{}):Object(c.jsx)(q,{active:e.launchedGame.gameActive,startGame:e.startGame,name:e.currentGame.name})}),Object(c.jsxs)("div",{className:"game-double-trouble-aside",children:[Object(c.jsx)("div",{className:"aside-timer dark-gradient",children:Object(c.jsx)(F,{active:e.launchedGame.gameActive})}),Object(c.jsx)("div",{className:"aside-score dark-gradient",children:Object(c.jsx)(A,{})}),Object(c.jsx)("div",{className:"aside-sound dark-gradient",children:Object(c.jsx)(T,{})})]})]})})),B=Object(i.b)((function(e){return{currentGame:e.currentGame}}),{})((function(e){return Object(c.jsx)("div",{className:"game",children:"Double Trouble"===e.currentGame.name?Object(c.jsx)(D,Object(d.a)({},e)):null})})),H=(a(45),a.p+"static/media/double-trouble-desc.4b5a7933.png"),J=Object(i.b)((function(e){return{user:e.user,allGames:e.allGames,currentGame:e.currentGame}}),{setCurrentGame:function(e){return{type:G,payload:{id:e.id,name:e.name,intro_text:e.intro_text,farewell_text:e.farewell_text,time:e.time}}}})((function(e){return Object(n.useEffect)((function(){var t,a=e.allGames.gamesArray.filter((function(t){return t.name===e.match.params.name}));x(j+(null===(t=a[0])||void 0===t?void 0:t.id)).then((function(t){e.setCurrentGame(t)}))}),[]),Object(c.jsxs)("div",{className:"game-page",children:[Object(c.jsx)("p",{className:"game-page-header",children:"Instructions"}),Object(c.jsx)("p",{className:"intro-text",children:e.currentGame.intro_text}),"Double Trouble"===e.currentGame.name?Object(c.jsx)("img",{className:"desc-img",src:H,alt:"game-description"}):null,Object(c.jsx)(l.b,{className:"btn-confirm",to:"/".concat(e.currentGame.name,"/play"),children:"I understand"})]})})),P=(a(46),a(47),function(e){return Object(c.jsx)("ul",{className:"game-list",children:e.allGames.gamesArray.map((function(e,t){var a=e.name;return Object(c.jsx)("li",{className:"game-list-item",children:Object(c.jsx)(l.b,{className:"game-list-item-link",to:"/".concat(a),children:a})},t)}))})}),V=Object(i.b)((function(e){return{user:e.user,allGames:e.allGames}}),{setUser:function(e){return{type:N,payload:{id:e.id,name:e.name,email:e.email}}},setAllGames:function(e){return{type:g,payload:e}}})((function(e){var t;return Object(n.useEffect)((function(){x(m).then((function(t){e.setUser(t)})),x(j).then((function(t){e.setAllGames(t)}))}),[]),(null===(t=e.allGames.gamesArray[0])||void 0===t?void 0:t.id.length)>0&&e.user.id.length>0?Object(c.jsxs)("div",{className:"landing-page",children:[Object(c.jsxs)("h1",{children:["Hello ",e.user.name]}),Object(c.jsx)("div",{children:"What would you like to play today?"}),Object(c.jsx)(P,{allGames:e.allGames})]}):Object(c.jsx)("div",{className:"landing-page"})})),W=function(){return Object(c.jsx)("div",{className:"game-app",children:Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.a,{from:"/GameAppDeploy",exact:!0,to:"/"}),Object(c.jsx)(o.b,{exact:!0,path:"/",component:V}),Object(c.jsx)(o.b,{exact:!0,path:"/:name",component:J}),Object(c.jsx)(o.b,{path:"/:name/play",component:B})]})})})})},X=a(13),Y={gamesArray:[{id:"",name:"",intro_text:"",farewell_text:"",time:0}]},z={id:"",name:"",intro_text:"",farewell_text:"",time:0},K={volume:!0,score:0,gameActive:!1,finished:!1},Q={id:"",name:"",email:""},Z=Object(X.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(d.a)(Object(d.a)({},e),{},{id:t.payload.id,name:t.payload.name,email:t.payload.email});default:return e}},currentGame:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return{id:t.payload.id,name:t.payload.name,intro_text:t.payload.intro_text,farewell_text:t.payload.farewell_text,time:t.payload.time};default:return e}},allGames:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{gamesArray:t.payload});default:return e}},launchedGame:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(d.a)(Object(d.a)({},e),{},{volume:!e.volume});case w:return Object(d.a)(Object(d.a)({},e),{},{score:t.payload.score});case _:return Object(d.a)(Object(d.a)({},e),{},{gameActive:!0});case S:return Object(d.a)(Object(d.a)({},e),{},{gameActive:!1});case E:return Object(d.a)(Object(d.a)({},e),{},{finished:!0});default:return e}}}),$=Object(X.c)(Z),ee=document.getElementById("root");r.a.render(Object(c.jsx)(i.a,{store:$,children:Object(c.jsx)(W,{})}),ee)}},[[48,1,2]]]);
//# sourceMappingURL=main.46260a25.chunk.js.map