(this["webpackJsonpcover-creator"]=this["webpackJsonpcover-creator"]||[]).push([[0],{17:function(e,t,a){var n;e.exports=(n=a(42),function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){e.exports=a(8)},function(e,t,a){e.exports=a(6)()},function(e,t){e.exports=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=n(a(2)),l=n(a(1)),u=n(a(5)),d=n(a(3)),p=function(e){function t(){var e,a,n;o(this,t);for(var c=arguments.length,i=Array(c),l=0;l<c;l++)i[l]=arguments[l];return a=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={isSdkLoaded:!1,isProcessing:!1},n.responseApi=function(e){window.FB.api("/me",{locale:n.props.language,fields:n.props.fields},(function(t){s(t,e),n.props.callback(t)}))},n.checkLoginState=function(e){n.setStateIfMounted({isProcessing:!1}),e.authResponse?n.responseApi(e.authResponse):n.props.onFailure?n.props.onFailure({status:e.status}):n.props.callback({status:e.status})},n.checkLoginAfterRefresh=function(e){"connected"===e.status?n.checkLoginState(e):window.FB.login((function(e){return n.checkLoginState(e)}),!0)},n.click=function(e){if(n.state.isSdkLoaded&&!n.state.isProcessing&&!n.props.isDisabled){n.setState({isProcessing:!0});var t=n.props,a=t.scope,o=t.appId,r=t.onClick,s=t.returnScopes,c=t.responseType,i=t.redirectUri,l=t.disableMobileRedirect,d=t.authType,p=t.state;if("function"!=typeof r||(r(e),!e.defaultPrevented)){var f={client_id:o,redirect_uri:i,state:p,return_scopes:s,scope:a,response_type:c,auth_type:d};if(n.props.isMobile&&!l)window.location.href="https://www.facebook.com/dialog/oauth"+(0,u.default)(f);else{if(!window.FB)return void(n.props.onFailure&&n.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(n.checkLoginState,{scope:a,return_scopes:s,auth_type:f.auth_type})}}}},r(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))this.sdkLoaded();else{this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||((e=document.createElement("div")).id="fb-root",document.body.appendChild(e))}}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,a=t.appId,n=t.xfbml,o=t.cookie,r=t.version,s=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+r,appId:a,xfbml:n,cookie:o}),e.setStateIfMounted({isSdkLoaded:!0}),(s||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,d.default)(e,"code")||(0,d.default)(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,a,n){var o=t.getElementsByTagName(a)[0],r=o,s=o;t.getElementById(n)||((s=t.createElement(a)).id=n,s.src="https://connect.facebook.net/"+e+"/sdk.js",r.parentNode.insertBefore(s,r))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props.render;if(!e)throw new Error("ReactFacebookLogin requires a render prop to render");var t={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(t)}}]),t}(i.default.Component);p.propTypes={isDisabled:l.default.bool,callback:l.default.func.isRequired,appId:l.default.string.isRequired,xfbml:l.default.bool,cookie:l.default.bool,authType:l.default.string,scope:l.default.string,state:l.default.string,responseType:l.default.string,returnScopes:l.default.bool,redirectUri:l.default.string,autoLoad:l.default.bool,disableMobileRedirect:l.default.bool,isMobile:l.default.bool,fields:l.default.string,version:l.default.string,language:l.default.string,onClick:l.default.func,onFailure:l.default.func,render:l.default.func.isRequired},p.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e}(),onFailure:null,state:"facebookdirect",responseType:"code"},t.default=p},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"?"+Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}},function(e,t,a){"use strict";function n(){}var o=a(7);e.exports=function(){function e(e,t,a,n,r,s){if(s!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return a.checkPropTypes=n,a.PropTypes=a,a}},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=n(a(2)),l=n(a(1)),u=n(a(9)),d=n(a(4)),p=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"style",value:function(){var e=this.constructor.defaultProps.cssClass;return this.props.cssClass===e&&i.default.createElement("style",{dangerouslySetInnerHTML:{__html:u.default}})}},{key:"containerStyle",value:function(e){var t=e.isProcessing,a=e.isSdkLoaded,n=e.isDisabled,o={transition:"opacity 0.5s"};return(t||!a||n)&&(o.opacity=.6),s(o,this.props.containerStyle)}},{key:"renderOwnButton",value:function(e){var t=this.props,a=t.cssClass,n=t.size,o=t.icon,r=t.textButton,c=t.typeButton,l=t.buttonStyle,u=e.onClick,d="string"==typeof o,p={};return e.isDisabled&&function(e){return["button","input","select","textarea","optgroup","option","fieldset"].indexOf((e+"").toLowerCase())>=0}(this.props.tag)&&(p.disabled=!0),i.default.createElement("span",{style:this.containerStyle(e)},d&&i.default.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),i.default.createElement(this.props.tag,s({type:c,className:a+" "+n,style:l,onClick:u},p),o&&d&&i.default.createElement("i",{className:"fa "+o}),o&&!d&&o,r),this.style())}},{key:"render",value:function(){var e=this;return i.default.createElement(d.default,s({},this.props,{render:function(t){return e.renderOwnButton(t)}}))}}]),t}(i.default.Component);p.propTypes={textButton:l.default.string,typeButton:l.default.string,size:l.default.string,cssClass:l.default.string,icon:l.default.any,containerStyle:l.default.object,buttonStyle:l.default.object,tag:l.default.oneOfType([l.default.node,l.default.func])},p.defaultProps={textButton:"Login with Facebook",typeButton:"button",size:"metro",fields:"name",cssClass:"kep-login-facebook",tag:"button"},t.default=p},function(e,t,a){(t=e.exports=a(10)()).push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),e.push(s))}},e}}]))},18:function(e,t,a){e.exports=a(46)},23:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),s=a.n(r),c=(a(23),a(4)),i=a.n(c),l=a(16),u=a(3),d=a(2),p=a.n(d),f=a(17),m=a.n(f),v=a(5),b=a.n(v),h=(a(45),function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){var t=document.location.href.split("#access_token=");if(t.length>1){s(!0);var a=t[1].split("&")[0];p.a.get("https://graph.facebook.com/oauth/access_token?client_id=664136191119867&client_secret=4d68291edb2d58ca22c139c273718fdc&grant_type=client_credentials").then((function(t){var n=t.data.access_token;p.a.get("https://graph.facebook.com/v8.0/debug_token?input_token=".concat(a,"&access_token=").concat(n)).then((function(t){var a=t.data.data.user_id,o="",r="";p.a.get("https://graph.facebook.com/v8.0/".concat(a,"/picture?redirect=0&access_token=").concat(n)).then((function(t){r=t.data.data.url,p.a.get("https://graph.facebook.com/v8.0/".concat(a,"?access_token=").concat(n)).then((function(t){o=t.data.name,e.set_user(a,o,r)}))}))}))}))}}),[]),o.a.createElement("div",{className:"auth-cont"},r?o.a.createElement("div",{className:"loading"},o.a.createElement("label",null,"Logging in..."),o.a.createElement("div",{className:"anim"},o.a.createElement("span",{className:"item first"}),o.a.createElement("span",{className:"item middle"}),o.a.createElement("span",{className:"item middle"}),o.a.createElement("span",{className:"item middle"}),o.a.createElement("span",{className:"item last"}))):o.a.createElement("div",{className:"auth-wrapper"},o.a.createElement("div",{className:"button-wrapper"},o.a.createElement("span",{className:"before"}),o.a.createElement(m.a,{appId:"664136191119867",autoLoad:!1,fields:"name,picture",version:"8.0",cssClass:"auth-button",redirectUri:"https://sdidsa.github.io/cover-collab",responseType:"token",onClick:function(e){console.log("clicked")},callback:function(t){t.userID?(console.log("success"),e.set_user(t.userID,t.name,t.picture.data.url)):console.log("fail")}})),o.a.createElement("div",{className:"logo-wrapper"},o.a.createElement("img",{className:"logo",alt:"logo",src:b.a}))))});var y=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],s=a[1];Object(n.useEffect)((function(){s(function(){for(var t=0;t<e.positions.length;t++){var a=e.positions[t];if(a.x===e.x&&a.y===e.y)return a}return null}())}),[]);var c=function(){return!(!e.selectedPos||e.selectedPos.x!==e.x||e.selectedPos.y!==e.y)};return o.a.createElement("div",{className:"block".concat(r?"":" empty").concat(c()?" selected":""),style:{width:e.blockSize,height:e.blockSize},onClick:function(t){c()?e.setSelectedPos(null):e.setSelectedPos({x:e.x,y:e.y})}},r?o.a.createElement("img",{alt:"cover member",src:r.image}):"")},g=function(e){return o.a.createElement("div",{className:"row"},Array.apply(null,Array(e.cover.width)).map((function(t,a){return o.a.createElement(y,{key:a,setSelectedPos:e.setSelectedPos,selectedPos:e.selectedPos,positions:e.positions,cover:e.cover,blockSize:e.blockSize,x:a,y:e.y})})))},k=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){function t(){var t=(function(){var e=window.innerWidth;return{width:e>800?800:e}}().width-10*(e.cover.width-1))/e.cover.width;s(t)}t(),window.addEventListener("resize",t)}),[]),o.a.createElement("div",{className:"grid"},Array.apply(null,Array(e.cover.height)).map((function(t,a){return o.a.createElement(g,{key:a,setSelectedPos:e.setSelectedPos,selectedPos:e.selectedPos,positions:e.positions,cover:e.cover,blockSize:r,y:a})})))},E=function(e){var t=function(){return e.details.user_id===e.user.id};return o.a.createElement("div",{className:"pos-details"},"empty"===e.details.status?o.a.createElement("div",{className:"empty"},o.a.createElement("span",{className:"actual-image"}),o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"top"},o.a.createElement("label",null,"Empty Position")),o.a.createElement("div",{className:"buttons"},function(){for(var t=0;t<e.positions.length;t++){if(e.positions[t].user_id===e.user.id)return!1}return!0}()?o.a.createElement("span",{className:"details-button neutral",onClick:function(e){try{e.target.childNodes[1].childNodes[0].click()}catch(t){}}},"Upload",o.a.createElement("form",{style:{display:"none"},action:e.api+"upload",method:"post",encType:"multipart/form-data"},o.a.createElement("input",{name:"file",type:"file",onChange:function(e){e.target.parentNode.submit()}}),o.a.createElement("input",{name:"uid",defaultValue:e.user.id}),o.a.createElement("input",{name:"cid",defaultValue:e.coverid}),o.a.createElement("input",{name:"x",defaultValue:e.details.x}),o.a.createElement("input",{name:"y",defaultValue:e.details.y}))):"you already added an image to the cover (you can delete it)"))):o.a.createElement("div",{className:"taken"},o.a.createElement("img",{className:"actual-image",alt:"content",src:e.details.image}),o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"top"},o.a.createElement("img",{className:"profile-pic",alt:"uploader profile",src:e.details.image_URL}),o.a.createElement("div",{className:"name"},o.a.createElement("label",null,"uploaded by ",t()?"(you)":""),o.a.createElement("label",{className:"username"},e.details.name))),t()?o.a.createElement("div",{className:"buttons"},o.a.createElement("span",{style:{opacity:0,pointerEvenets:"none"},className:"details-button neutral"},"Change Picture"),o.a.createElement("span",{className:"details-button bad",onClick:e.remove},"Delete")):"")))},w=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)([]),i=Object(u.a)(c,2),l=i[0],d=i[1],f=Object(n.useState)(null),m=Object(u.a)(f,2),v=m[0],b=m[1];Object(n.useEffect)((function(){h(),setInterval((function(){p.a.post(e.api+"getCover?id="+e.cover.id).then((function(e){d(e.data)}))}),2e3)}),[]);var h=function(){s(!0),p.a.post(e.api+"getCover?id="+e.cover.id).then((function(e){d(e.data),s(!1)}))};return o.a.createElement("div",{className:"cover-disp".concat(r?" loading":"")},r?o.a.createElement("span",{className:"loadanim"},"loading"):o.a.createElement("div",{className:"disp-root"},o.a.createElement(k,{cover:e.cover,setSelectedPos:b,selectedPos:v,positions:l}),v?o.a.createElement(E,{coverid:e.cover.id,api:e.api,remove:function(){p.a.post(e.api+"delete?user_id="+e.user.id+"&cover_id="+e.cover.id).then((function(e){h()}))},user:e.user,positions:l,details:function(){for(var e=0;e<l.length;e++){var t=l[e];if(t.x===v.x&&t.y===v.y)return t}return{status:"empty",x:v.x,y:v.y}}()}):""))},_=function(e){return o.a.createElement("div",{className:"cover-item ".concat(e.cover.status),onClick:function(){e.setSelectedCover(e.cover)}},o.a.createElement("div",{className:"left"},o.a.createElement("label",{className:"name"},"Cover ",e.cover.id.substring(0,2),"-",e.cover.id.substring(2,4)),o.a.createElement("div",{className:"info"},o.a.createElement("label",null,"size ",e.cover.width," x ",e.cover.height," (",e.cover.height*e.cover.width," position)"))),o.a.createElement("label",{className:"status"},e.cover.status))},O=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(null),i=Object(u.a)(c,2),l=i[0],d=i[1];return Object(n.useEffect)((function(){p.a.post(e.api+"listCovers").then((function(e){s(e.data)}))}),[]),o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"all"},o.a.createElement("div",{className:"bar"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"left"},o.a.createElement("img",{className:"pp",alt:"facebook profile",src:e.user.image}),o.a.createElement("label",{className:"name"},e.user.name)),o.a.createElement("img",{alt:"main logo",className:"logo",src:b.a}))),o.a.createElement("div",{className:"content"},l?o.a.createElement(w,{api:e.api,user:e.user,cover:l}):o.a.createElement("div",{className:"list"},r.map((function(e,t){return o.a.createElement(_,{key:t,cover:e,setSelectedCover:d})}))))))},S=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],s=a[1],c=function(){var t=Object(l.a)(i.a.mark((function t(a,n,o){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post(e.api+"auth",{id:a,name:n,image:o});case 2:s({id:a,name:n,image:o});case 3:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}();return r?o.a.createElement(O,{api:e.api,user:r}):o.a.createElement(h,{set_user:c})};s.a.render(o.a.createElement(S,{api:"https://cover-collab-server.herokuapp.com/"}),document.getElementById("root"))},5:function(e,t,a){e.exports=a.p+"static/media/logo.ca7a2f09.svg"}},[[18,1,2]]]);
//# sourceMappingURL=main.4c63da2e.chunk.js.map