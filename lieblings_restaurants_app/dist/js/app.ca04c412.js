(function(e){function t(t){for(var n,a,r=t[0],c=t[1],l=t[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,a=1;a<s.length;a++){var r=s[a];0!==i[r]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},a={app:0},i={app:0},o=[];function r(e){return c.p+"js/"+({"about~items":"about~items",about:"about",items:"items",login:"login"}[e]||e)+"."+{"about~items":"10cd06cf",about:"f724a642",items:"8059db0a",login:"88cfd79f"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={"about~items":1,items:1,login:1};a[e]?t.push(a[e]):0!==a[e]&&s[e]&&t.push(a[e]=new Promise((function(t,s){for(var n="css/"+({"about~items":"about~items",about:"about",items:"items",login:"login"}[e]||e)+"."+{"about~items":"dd6c52f9",about:"31d6cfe0",items:"c8467209",login:"4044c755"}[e]+".css",i=c.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===n||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),s(o)},f.href=i;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,s){n=i[e]=[t,s]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var s=i[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,s[1](d)}i[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=i(e);return s(t)}function i(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("Navbar"),s("v-main",[s("router-view")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",[s("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[e.isLoggedIn?s("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.isNavShown=!e.isNavShown}}}):e._e(),s("v-toolbar-title",[s("span",{staticClass:"d-none d-sm-flex"},[e._v("Unsere Lieblings"),s("v-icon",{staticClass:"mx-3"},[e._v("fa-cutlery")]),e._v("Restaurants")],1),s("span",{staticClass:"d-flex d-sm-none"},[e._v("Unsere "),s("v-icon",{staticClass:"ml-3"},[e._v("fa-heart")]),s("v-icon",{staticClass:"ml-2"},[e._v("fa-cutlery")])],1)]),s("v-spacer"),"Restaurants"==this.$route.name?s("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.isFilterShown=!e.isFilterShown}}},[s("v-icon",[e._v("fa-search")])],1):e._e()],1),s("v-navigation-drawer",{attrs:{temporary:"",app:""},model:{value:e.isNavShown,callback:function(t){e.isNavShown=t},expression:"isNavShown"}},[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[e._v(" Was möchtest du tun? ")])],1)],1),s("v-divider"),s("v-list",[s("v-list-item-group",e._l(e.links,(function(t){return s("v-list-item",{key:t.id},[s("v-list-item-icon",[s("v-icon",{attrs:{color:"primary"}},[e._v(e._s(t.icon))])],1),s("v-list-item-content",[s("v-list-item-title",{on:{click:function(s){return s.stopPropagation(),e.routeTo(t.target)}}},[e._v(" "+e._s(t.text)+" ")])],1)],1)})),1)],1)],1),s("v-navigation-drawer",{attrs:{temporary:"",app:"",right:""},model:{value:e.isFilterShown,callback:function(t){e.isFilterShown=t},expression:"isFilterShown"}},[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[e._v(" Suchen nach ")])],1)],1),s("v-divider"),s("v-list-item",[s("v-list-item-content",[s("v-combobox",{attrs:{items:e.cuisines,label:"Cuisines",multiple:"",chips:""},on:{change:e.onCuisinesChange},model:{value:e.selectedCuisines,callback:function(t){e.selectedCuisines=t},expression:"selectedCuisines"}})],1)],1),s("v-list-item",[s("v-list-item-content",[s("v-combobox",{attrs:{items:e.cities,label:"Ort",multiple:"",chips:""},on:{change:e.onCitiesChange},model:{value:e.selectedCities,callback:function(t){e.selectedCities=t},expression:"selectedCities"}})],1)],1),s("v-list-item",[s("v-list-item-content",[s("v-switch",{attrs:{label:"Essen bestellen möglich"},on:{change:e.onFoodOrderableChange},model:{value:e.isFoodOrderable,callback:function(t){e.isFoodOrderable=t},expression:"isFoodOrderable"}})],1)],1),s("v-list-item",[s("v-list-item-content",[s("v-btn",{attrs:{color:"warning"},on:{click:e.clearSelection}},[e._v("Suche zurücksetzen")])],1)],1)],1)],1)},r=[],c=(s("4de4"),s("b0c0"),{data:function(){return{isNavShown:!1,isFilterShown:!1,linkList:[{id:1,text:"Restaurants ansehen",icon:"fa-cutlery",target:"Restaurants",offline:!0},{id:2,text:"Restaurant hinzufügen",icon:"fa-plus-circle",target:"RestaurantCreate",offline:!1}],selectedCuisines:[],selectedCities:[],isFoodOrderable:!1}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},cuisines:function(){return this.$store.getters.cuisines},cities:function(){return this.$store.getters.cities},links:function(){return this.isOnline?this.linkList:this.linkList.filter((function(e){return!0===e.offline}))}},methods:{onCuisinesChange:function(){this.$store.commit("selectCuisines",this.selectedCuisines)},onCitiesChange:function(){this.$store.commit("selectCities",this.selectedCities)},onFoodOrderableChange:function(){this.$store.commit("toogleIsFoodOrderable")},clearSelection:function(){this.selectedCuisines=[],this.selectedCities=[],this.$store.commit("selectCuisines",this.selectedCuisines),this.$store.commit("selectCities",this.selectedCities),this.isFoodOrderable=!1,this.$store.commit("toogleIsFoodOrderable")},routeTo:function(e){this.$router.currentRoute.name===e?this.$router.go():this.$router.push({name:"".concat(e)})}}}),l=c,u=s("2877"),d=s("6544"),f=s.n(d),b=s("40dc"),m=s("5bc1"),h=s("8336"),j=s("2b5d"),v=s("ce7e"),g=s("132d"),p=s("8860"),k=s("da13"),C=s("5d23"),y=s("1baa"),w=s("34c3"),S=s("f774"),_=s("2fa4"),O=s("b73d"),I=s("2a7f"),z=Object(u["a"])(l,o,r,!1,null,null,null),x=z.exports;f()(z,{VAppBar:b["a"],VAppBarNavIcon:m["a"],VBtn:h["a"],VCombobox:j["a"],VDivider:v["a"],VIcon:g["a"],VList:p["a"],VListItem:k["a"],VListItemContent:C["a"],VListItemGroup:y["a"],VListItemIcon:w["a"],VListItemTitle:C["c"],VNavigationDrawer:S["a"],VSpacer:_["a"],VSwitch:O["a"],VToolbarTitle:I["a"]});var F={name:"App",components:{Navbar:x},data:function(){return{}}},L=F,A=s("7496"),N=s("f6c4"),P=Object(u["a"])(L,a,i,!1,null,null,null),R=P.exports;f()(P,{VApp:A["a"],VMain:N["a"]});var V=s("9483");Object(V["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});s("45fc"),s("d3b7");var E=s("8c4f"),$=s("2f62"),T=s("bc3a"),q=s.n(T);n["a"].use($["a"]),q.a.defaults.baseURL="https://api-restaurantfinder.jenny-chris.de/";var B=localStorage.getItem("access_token");B&&(q.a.defaults.headers.common["Authorization"]="Bearer "+B);var D=new $["a"].Store({state:{access_token:localStorage.getItem("access_token")||"",user:localStorage.getItem("username"),cuisines:[],selectedCuisines:[],cities:[],selectedCities:[],selectedRestaurant:localStorage.getItem("selectedRestaurant"),showSnackbar:!1,snackbarInfo:"",snackbarColor:"",isFoodOrderable:!1},mutations:{auth_success:function(e,t){e.access_token=t,localStorage.setItem("access_token",t)},logout:function(e){e.access_token=""},username:function(e,t){e.user=t,localStorage.setItem("username",t)},setCuisines:function(e,t){e.cuisines=t},selectCuisines:function(e,t){e.selectedCuisines=t},setCities:function(e,t){e.cities=t},selectCities:function(e,t){e.selectedCities=t},setSelectedRestaurant:function(e,t){e.selectedRestaurant=t,localStorage.setItem("selectedRestaurant",JSON.stringify(t))},toggleSnackbar:function(e){e.showSnackbar=!e.showSnackbar},setSnackbarInfo:function(e,t){e.snackbarInfo=t},setsnackbarColor:function(e,t){e.snackbarColor=t},toogleIsFoodOrderable:function(e){e.isFoodOrderable=!e.isFoodOrderable}},actions:{login:function(e,t){var s=e.commit;return new Promise((function(e,n){q.a.post("/login",t).then((function(t){if(t.data.access_token){var n=t.data.access_token,a=t.data.user.name;q.a.defaults.headers.common["Authorization"]="Bearer "+n,s("auth_success",n),s("username",a)}e(t)})).catch((function(e){localStorage.removeItem("access_token"),localStorage.removeItem("username"),n(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e){t("logout"),localStorage.removeItem("access_token"),delete q.a.defaults.headers.common["Authorization"],e()}))}},getters:{isLoggedIn:function(e){return!!e.access_token},user:function(e){return e.user},cuisines:function(e){return e.cuisines.sort()},selectedCuisines:function(e){return e.selectedCuisines},cities:function(e){return e.cities.sort()},selectedCities:function(e){return e.selectedCities},selectedRestaurant:function(e){return e.selectedRestaurant},showSnackbar:function(e){return e.showSnackbar},snackbarInfo:function(e){return e.snackbarInfo},snackbarColor:function(e){return e.snackbarColor},isFoodOrderable:function(e){return e.isFoodOrderable}}});n["a"].use(E["a"]);var M=[{path:"/login",name:"Login",component:function(){return s.e("login").then(s.bind(null,"a55b"))}},{path:"/restaurants",alias:"/",name:"Restaurants",component:function(){return Promise.all([s.e("about~items"),s.e("about")]).then(s.bind(null,"89ad"))},meta:{requiresAuth:!0}},{path:"/restaurants/:id",name:"RestaurantDeatil",component:function(){return Promise.all([s.e("about~items"),s.e("items")]).then(s.bind(null,"527e"))},meta:{requiresAuth:!0}},{path:"/restaurantedit",name:"RestaurantEdit",component:function(){return Promise.all([s.e("about~items"),s.e("items")]).then(s.bind(null,"a5d6"))},meta:{requiresAuth:!0}},{path:"/create/restaurants",name:"RestaurantCreate",component:function(){return Promise.all([s.e("about~items"),s.e("items")]).then(s.bind(null,"2ef2"))},meta:{requiresAuth:!0}}],U=new E["a"]({base:"/",routes:M});U.beforeEach((function(e,t,s){if(e.matched.some((function(e){return e.meta.requiresAuth}))){if(D.getters.isLoggedIn)return void s();D.dispatch("logout").then((function(){return s("/login")}))}else s()}));var J=U,G=s("f309"),H=s("fcf4");s("1f54");n["a"].use(G["a"]);var K=new G["a"]({theme:{themes:{light:{primary:H["a"].red.darken1}}},icons:{iconfont:"fa4"}}),W=s("bf4e"),Q=s.n(W);n["a"].config.productionTip=!1;var X=s("c1df");s("b469"),n["a"].use(s("2ead"),{moment:X}),n["a"].use(Q.a),new n["a"]({router:J,store:D,vuetify:K,render:function(e){return e(R)}}).$mount("#app")}});
//# sourceMappingURL=app.ca04c412.js.map