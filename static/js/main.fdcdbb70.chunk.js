(this["webpackJsonpmy-test"]=this["webpackJsonpmy-test"]||[]).push([[0],{104:function(e,t,n){},165:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(43),i=n.n(a),o=n(40),r=n(33),j=(n(69),n(18)),l=n(17),d="SET_POKE",u="SET_CURRENT_PAGE",b="SET_TOTAL_POKEMONS_COUNT",h="IS_FETCHING",p={pokemons:[],pageSize:250,totalCount:0,currentPage:1,isFetching:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{pokemons:t.pokemons});case u:return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case b:return Object(l.a)(Object(l.a)({},e),{},{totalCount:t.count});case h:return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});default:return e}},m=n(3),x=n(119),f=n(233),k=n(250),g=(n(104),n(261)),v=n(252),P=n(254),y=n(255),A=n(256),C="SET_TYPE_POKE",N="SET_SUBTYPE_POKE",S={typepoke:[],subtypepoke:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(l.a)(Object(l.a)({},e),{},{typepoke:t.typepoke});case N:return Object(l.a)(Object(l.a)({},e),{},{subtypepoke:t.subtypepoke});default:return e}},T=n(12),F=n(246),E=n(243),w=n(245),B=n(239),_=n(52),z=(n(165),n(1)),G=function(e){var t=c.useState(""),n=Object(T.a)(t,2),s=(n[0],n[1]),a=function(e){s(e.target.value)};return 0===e.typepoke.length&&_.get("https://api.pokemontcg.io/v2/types").then((function(t){e.setTypePoke(t.data.data)})),0===e.subtypepoke.length&&_.get("https://api.pokemontcg.io/v2/subtypes").then((function(t){e.setSubtype(t.data.data)})),Object(z.jsx)("div",{children:Object(z.jsxs)("div",{className:"comboFilter",children:[Object(z.jsx)("div",{className:"type-Block",sx:{minWidth:120},children:Object(z.jsxs)(w.a,{fullWidth:!0,children:[Object(z.jsx)(F.a,{children:"Type"}),Object(z.jsx)(B.a,{label:"Type",onChange:a,children:e.typepoke.map((function(e){return Object(z.jsx)(E.a,{value:e,children:e})}))})]})}),Object(z.jsx)("div",{className:"subtype-Block",sx:{minWidth:120},children:Object(z.jsxs)(w.a,{fullWidth:!0,children:[Object(z.jsx)(F.a,{children:"Subtype"}),Object(z.jsx)(B.a,{label:"subType",onChange:a,children:e.subtypepoke.map((function(e){return Object(z.jsx)(E.a,{value:e,children:e})}))})]})}),Object(z.jsx)("div",{className:"button-Block",children:Object(z.jsx)(k.a,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"})}),Object(z.jsx)("div",{})]})})},K=Object(r.b)((function(e){return{typepoke:e.navbarPage.typepoke,subtypepoke:e.navbarPage.subtypepoke}}),(function(e){return{setTypePoke:function(t){e(function(e){return{type:C,typepoke:e}}(t))},setSubtype:function(t){e(function(e){return{type:N,subtypepoke:e}}(t))}}}))(G),L=n(257),M=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),n=[],c=1;c<=t;c++)n.push(c);var s=Object(f.a)({count:t}).items;return e.totalCount,Object(z.jsxs)("div",{children:[Object(z.jsx)("div",{className:"App-navBar",children:Object(z.jsx)(K,{})}),Object(z.jsx)("div",{className:"pagination-Block",children:s.map((function(t,n){var c=t.page,s=t.type,a=t.selected,i=Object(x.a)(t,["page","type","selected"]),o=null;return o="start-ellipsis"===s||"end-ellipsis"===s?"\u2026":"page"===s?Object(z.jsx)("div",Object(l.a)(Object(l.a)({type:"button",style:{fontWeight:a?"bold":void 0}},i),{},{children:c})):Object(z.jsx)("div",Object(l.a)(Object(l.a)({type:"button"},i),{},{children:s})),Object(z.jsx)(k.a,{variant:"contained",onClick:function(t){e.onPageChanged(c)},children:o},n)}))}),Object(z.jsx)(g.a,{className:"containerGrid",maxWidth:"md",children:Object(z.jsx)(v.a,{container:!0,spacing:4,children:e.pokemons.map((function(e){var t;return Object(z.jsx)(v.a,{className:"cardGrid",xs:12,sm:6,md:4,children:Object(z.jsx)(P.a,{children:Object(z.jsxs)(y.a,(t={className:"cardMediaGrid",xs:4},Object(m.a)(t,"xs",8),Object(m.a)(t,"children",[Object(z.jsxs)(o.b,{to:"/cards/"+e.id,children:["  ",Object(z.jsx)("img",{src:e.images.small,className:"pokeCard"})," "]}),Object(z.jsx)(A.a,{className:"cardContent",children:Object(z.jsxs)(L.a,{gutterBottom:!0,variant:"h7",component:"div",children:[Object(z.jsxs)("div",{children:["\u0418\u043c\u044f:",e.name]}),Object(z.jsxs)("div",{children:["\u0422\u0438\u043f:",e.types]}),Object(z.jsxs)("div",{children:["\u0425\u043e\u0437\u044f\u0438\u043d:",e.artist]})]})})]),t))})},e.id)}))})})]})},W=n(253),U=Object(r.b)((function(e){return{pokemons:e.pokemonCardPage.pokemons,pageSize:e.pokemonCardPage.pageSize,totalCount:e.pokemonCardPage.totalCount,currentPage:e.pokemonCardPage.currentPage,isFetching:e.pokemonCardPage.isFetching}}),(function(e){return{setPokemons:function(t){e(function(e){return{type:d,pokemons:e}}(t))},setCurrentPage:function(t){e({type:u,currentPage:t})},setPokemonsTotalCount:function(t){e(function(e){return{type:b,count:e}}(t))},setIsFetching:function(t){e(function(e){return{type:h,isFetching:e}}(t))}}}))((function(e){0===e.pokemons.length&&(e.setIsFetching(!0),_.get("https://api.pokemontcg.io/v2/cards?page=".concat(e.currentPage,"&count=").concat(e.pageSize)).then((function(t){e.setIsFetching(!1),e.setPokemons(t.data.data),e.setPokemonsTotalCount(t.data.totalCount)})));return Object(z.jsxs)(z.Fragment,{children:[e.isFetching?Object(z.jsx)(W.a,{}):null,Object(z.jsx)(M,{totalCount:e.totalCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:function(t){e.setCurrentPage(t),e.setIsFetching(!0),_.get("https://api.pokemontcg.io/v2/cards?page=".concat(t,"&count=").concat(e.pageSize)).then((function(t){e.setIsFetching(!1),e.setPokemons(t.data.data)}))},pokemons:e.pokemons,setPokemons:e.setPokemons,setPokemonsTotalCount:e.setPokemonsTotalCount,setCurrentPage:e.setCurrentPage,isFetching:e.isFetching})]})})),D=n(56),H=n(57),R=n(80),Z=n(78),J=(n(172),n(234)),V=n(262),Y=function(e){return e.pokemonsProfile?Object(z.jsx)("div",{className:"pokeCard-Block",children:Object(z.jsxs)(P.a,{sx:{display:"flex"},children:[Object(z.jsx)("div",{className:"buttonBack",children:Object(z.jsx)(k.a,{variant:"text",onClick:function(){return e.history.goBack()},children:"Back"})}),Object(z.jsx)(J.a,{sx:{display:"flex",flexDirection:"column"},children:Object(z.jsx)(A.a,{sx:{flex:""},children:Object(z.jsxs)("div",{className:"infoBlock",children:[Object(z.jsx)("div",{children:Object(z.jsx)("h2",{children:e.pokemonsProfile.data.name})}),Object(z.jsxs)("div",{className:"general",children:[Object(z.jsx)("h4",{children:"General informations"}),Object(z.jsx)(V.a,{}),Object(z.jsxs)("div",{children:["Set identifier  ",e.pokemonsProfile.data.number]}),Object(z.jsxs)("div",{children:[e.pokemonsProfile.data.rarity,"  ",e.pokemonsProfile.data.supertype]}),Object(z.jsxs)("div",{children:["Illustrated by  ",e.pokemonsProfile.data.artist]})]}),Object(z.jsxs)("div",{className:"informations",children:[Object(z.jsx)("h4",{children:"Vullaby's informations"}),Object(z.jsx)(V.a,{}),Object(z.jsxs)("div",{children:["National Pok\xe9dex No  ",e.pokemonsProfile.data.nationalPokedexNumbers]}),Object(z.jsxs)("div",{children:[e.pokemonsProfile.data.hp,"  HP"]}),Object(z.jsxs)("div",{children:[e.pokemonsProfile.data.types,"  type Card"]}),Object(z.jsxs)("div",{children:[e.pokemonsProfile.data.subtypes,"  ",e.pokemonsProfile.data.supertype]})]}),Object(z.jsxs)("div",{className:"attacks",children:[Object(z.jsx)("h4",{children:"Vullaby's Attacks"}),Object(z.jsx)(V.a,{}),Object(z.jsx)("div",{children:e.pokemonsProfile.data.attacks[0].name}),Object(z.jsx)("div",{children:e.pokemonsProfile.data.attacks[0].text}),Object(z.jsxs)("div",{children:[e.pokemonsProfile.data.attacks.name,e.pokemonsProfile.data.attacks.damage]})]}),Object(z.jsxs)("div",{className:"foot",children:[Object(z.jsx)("h4",{children:"Other Informations"}),Object(z.jsx)(V.a,{}),e.pokemonsProfile.data.weaknesses[0].type,e.pokemonsProfile.data.weaknesses[0].value," ",Object(z.jsx)("br",{}),e.pokemonsProfile.data.retreatCost]})]})})}),Object(z.jsx)(y.a,{component:"img",sx:{width:500,height:700},image:e.pokemonsProfile.data.images.large,alt:"Live from space album cover"})]})}):Object(z.jsx)(W.a,{})},$="SET_POKEMONS_PROFILE",q={pokemonsProfile:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(l.a)(Object(l.a)({},e),{},{pokemonsProfile:t.pokemonsProfile});default:return e}},X=function(e){Object(R.a)(n,e);var t=Object(Z.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.pokeId;_.get("https://api.pokemontcg.io/v2/cards/"+t).then((function(t){e.props.setPokemonsProfile(t.data)}))}},{key:"render",value:function(){return Object(z.jsx)(Y,Object(l.a)(Object(l.a)({},this.props),{},{pokemonsProfile:this.props.pokemonsProfile}))}}]),n}(s.a.Component),ee=Object(j.f)(X),te=Object(r.b)((function(e){return{pokemonsProfile:e.pokemonsProfilePage.pokemonsProfile}}),{setPokemonsProfile:function(e){return{type:$,pokemonsProfile:e}}})(ee),ne="IS_AUTH",ce={isAuth:!0},se=function(e){return{type:ne,isAuth:e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(l.a)(Object(l.a)({},e),{},{isAuth:t.isAuth});default:return e}},ie=n(242),oe=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e"},re=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?e?void 0:"\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e":"\u041d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d email"},je=function(e){return e.isAuth?Object(z.jsx)(j.a,{to:"/"}):Object(z.jsxs)("div",{className:"login-Block",children:[Object(z.jsx)("div",{className:"email",children:Object(z.jsx)(ie.a,{placeholder:"Email",name:"email",label:"Email",validate:[re]})}),Object(z.jsx)("br",{}),Object(z.jsx)("div",{children:Object(z.jsx)(ie.a,{placeholder:"Password",name:"password",label:"Password",validate:[oe],type:"password"})}),Object(z.jsx)("br",{}),Object(z.jsx)("div",{children:Object(z.jsx)(k.a,{variant:"contained",onClick:function(){return e.setIsAuth(!0)},children:"LogIn"})})]})},le=Object(r.b)((function(e){return{isAuth:e.isAuth.isAuth}}),(function(e){return{setIsAuth:function(t){e(se(t))}}}))((function(e){return Object(z.jsx)("div",{children:Object(z.jsx)("div",{children:Object(z.jsx)(je,{isAuth:e.isAuth,setIsAuth:e.setIsAuth})})})})),de=n.p+"static/media/pokelogo.08b3d8ee.png",ue=(n(173),n(244)),be=n(240),he=n(238),pe=function(e){var t=c.useState(!0),n=Object(T.a)(t,2),s=(n[0],n[1]);return Object(z.jsxs)("div",{children:[Object(z.jsxs)(he.a,{children:[e.isAuth?Object(z.jsx)(he.a,{}):Object(z.jsx)(he.a,{children:e.isAuth})," "]}),e.isAuth?Object(z.jsx)(ue.a,{control:Object(z.jsx)(be.a,{checked:e.isAuth,onChange:function(t){e.setIsAuth(!1),s(t.target.checked)},"aria-label":"login switch"}),label:"\u0412\u044b\u0439\u0442\u0438"}):Object(z.jsx)(ue.a,{disabled:!0,control:Object(z.jsx)(be.a,{}),label:Object(z.jsx)(o.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})})]})},Oe=Object(r.b)((function(e){return{isAuth:e.isAuth.isAuth}}),(function(e){return{setIsAuth:function(t){e(se(t))}}}))((function(e){var t=c.useState(!0),n=Object(T.a)(t,2);n[0],n[1];return Object(z.jsx)("div",{children:Object(z.jsxs)("div",{className:"back",children:[Object(z.jsx)("div",{className:"logo",children:Object(z.jsx)(o.b,{to:"/",children:Object(z.jsx)("img",{src:de})})}),Object(z.jsx)("div",{className:"header-text",children:Object(z.jsx)(o.b,{to:"/",children:Object(z.jsx)("h1",{children:"Ultra Super Pokemon 5G Pro"})})}),Object(z.jsx)("div",{className:"login-block",children:Object(z.jsx)(pe,{isAuth:e.isAuth,setIsAuth:e.setIsAuth})})]})})})),me=function(e){Object(R.a)(n,e);var t=Object(Z.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return Object(z.jsx)(Oe,Object(l.a)({},this.props))}}]),n}(c.Component),xe=Object(r.b)((function(e){return{isAuth:e.isAuth.isAuth}}),(function(e){return{setIsAuth:function(t){e(se(t))}}}))(me);var fe=function(){return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)("header",{className:"App-header",children:Object(z.jsx)(xe,{})}),Object(z.jsx)("div",{className:"App-navBar"}),Object(z.jsx)("div",{className:"App-content",children:Object(z.jsxs)("div",{children:[Object(z.jsx)(j.a,{from:"/KODE_test/",to:"/"}),Object(z.jsx)(j.b,{exact:!0,path:"/",component:U}),Object(z.jsx)(j.b,{path:"/login",component:le}),Object(z.jsx)(j.b,{path:"/cards/:pokeId?",render:function(){return Object(z.jsx)(te,{})}})]})})]})},ke=(n(174),n(98)),ge=Object(ke.a)({pokemonCardPage:O,navbarPage:I,pokemonsProfilePage:Q,isAuth:ae}),ve=Object(ke.b)(ge);window.store=ve;var Pe=ve,ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,263)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};n(175);i.a.render(Object(z.jsx)(s.a.StrictMode,{children:Object(z.jsx)(o.a,{children:Object(z.jsx)(r.a,{store:Pe,children:Object(z.jsx)(fe,{})})})}),document.getElementById("root")),ye()},69:function(e,t,n){}},[[176,1,2]]]);
//# sourceMappingURL=main.fdcdbb70.chunk.js.map