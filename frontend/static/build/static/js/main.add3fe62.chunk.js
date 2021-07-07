(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{29:function(e,t,n){},40:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(19),i=n.n(r),c=(n(39),n(40),n(13)),o=n(20),l=n(15),u=n.n(l),d=n(24),h=n(4),b=n(5),j=n(10),p=n(8),m=n(7),f=n(6),O=(n(29),n(17)),g=n.n(O),v=n(45),x=n(1),y=["isAuthenticated"];var N=function(e){var t=e.isAuthenticated,n=Object(v.a)(e,y);return t?Object(x.jsx)(f.b,Object(o.a)({},n)):Object(x.jsx)(f.a,{to:"/login"})},k=n(26),w=n(31),S=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)(k.a,{bg:"light",expand:"lg",className:"navbar",children:[Object(x.jsx)(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(k.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(w.a,{className:"mr-auto align-items-baseline",children:[Object(x.jsx)(c.b,{to:"/",className:"mr-2",children:"Home"}),Object(x.jsx)(c.b,{to:"/profile",className:"mr-2",children:"Profile"}),Object(x.jsx)(c.b,{to:"/records",className:"mr-2",children:"Records"}),Object(x.jsx)(c.b,{to:"/login",className:"mr-2",children:"Login"}),Object(x.jsx)(c.b,{to:"/registration",className:"mr-2",children:"Register"}),Object(x.jsx)("button",{className:"btn",onClick:function(){return e.props.handleLogout()},children:"Logout"})]})})]})}}]),n}(a.Component),C=n(22),I=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleInput=a.handleInput.bind(Object(j.a)(a)),a}return Object(b.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"login-form-div",children:Object(x.jsxs)("form",{className:"form-login p-4 mb-3 login-form-container",onSubmit:this.handleSubmit,children:[Object(x.jsx)("h2",{children:"Login"}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"InputUsername",className:"form-label",children:"Username"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",placeholder:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleInput})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"InputUsername",className:"form-label",children:"Email"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"InputUsername",className:"form-label",children:"Password"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleInput})]}),Object(x.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"}),Object(x.jsx)("div",{className:"divider",children:"New here? Register!"}),Object(x.jsx)("button",{className:"btn btn-primary toggle-register",children:"Create New Account"})]})})}}]),n}(a.Component),A=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleInput=a.handleInput.bind(Object(j.a)(a)),a}return Object(b.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"login-form-div",children:Object(x.jsxs)("form",{className:"form-login p-4 mb-3 login-form-container",onSubmit:this.handleSubmit,children:[Object(x.jsxs)("h2",{children:["New User? ",Object(x.jsx)("br",{})," Register!"]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"InputUsername",className:"form-label",children:"Username"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",placeholder:"username",name:"username",type:"text",value:this.state.username,onChange:this.handleInput})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"InputUsername",className:"form-label",children:"Email"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"InputUsername",className:"form-label",children:"Password"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",type:"password",placeholder:"password",name:"password1",value:this.state.password,onChange:this.handleInput})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"InputUsername",className:"form-label",children:"Password"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",type:"password",placeholder:"Re-enter Password",name:"password2",value:this.state.password,onChange:this.handleInput})]}),Object(x.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"}),Object(x.jsx)("div",{className:"divider",children:"New here? Register!"}),Object(x.jsx)("button",{className:"btn btn-primary toggle-register",children:"Create New Account"})]})})}}]),n}(a.Component),_=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Welcome to the Homepage!"})})}}]),n}(a.Component),P=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={display_name:"",dob:"",toothbrush_replaced:"",ins_card:null,preview:"",isEditing:!1,id:null},a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.handleImage=a.handleImage.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.editProfile=a.editProfile.bind(Object(j.a)(a)),a.addProfile=a.addProfile.bind(Object(j.a)(a)),a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/users/profiles/user/").then((function(t){return t.ok||e.setState({isEditing:!0}),t.json()})).then((function(t){return e.setState(Object(o.a)({},t))})).catch((function(e){console.error("There has been a problem with your fetch operation: ",e)}))}},{key:"handleInput",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({ins_card:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),this.state.id?this.editProfile():this.addProfile();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addProfile",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state.ins_card instanceof File),(n=new FormData).append("display_name",this.state.display_name),n.append("dob",this.state.dob),n.append("toothbrush_replaced",this.state.toothbrush_replaced),this.state.ins_card instanceof File&&n.append("ins_card",this.state.ins_card),a={method:"POST",headers:{"X-CSRFToken":g.a.get("csrftoken")},body:n},e.next=9,fetch("/api/v1/users/profiles/",a);case 9:s=e.sent,this.setState({response:s});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"editProfile",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FormData,this.state.ins_card instanceof File&&n.append("ins_card",this.state.ins_card),a={method:"PATCH",headers:{"X-CSRFToken":g.a.get("csrftoken")},body:n},e.next=5,fetch("/api/v1/users/profiles/user/",a);case 5:e.sent.ok,this.setState({isEditing:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,n,a,s=this;return Object(x.jsx)("div",{className:"profile-form-div",children:Object(x.jsxs)("form",{className:"form-login p-4 mb-3 login-form-container profile-form-container",children:[Object(x.jsx)("h2",{children:"Profile"}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"display_name",className:"form-label",children:"Full Name:"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",placeholder:"FIRST MIDDLE LAST",name:"display_name",type:"text",value:this.state.display_name,onChange:this.handleInput,disabled:!(null===(e=this.state)||void 0===e?void 0:e.isEditing)})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"dob",className:"form-label",children:"Date of Birth:"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",type:"text",placeholder:"MM/DD/YYYY",name:"dob",value:this.state.dob,onChange:this.handleInput,disabled:!(null===(t=this.state)||void 0===t?void 0:t.isEditing)})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"toothbrush_replaced",className:"form-label",children:"Toothbrush Replaced On:"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{className:"login-input",type:"text",placeholder:"MM/DD/YYYY",name:"toothbrush_replaced",value:this.state.toothbrush_replaced,onChange:this.handleInput,disabled:!(null===(n=this.state)||void 0===n?void 0:n.isEditing)})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{for:"ins_card",className:"form-label",children:"Dental Insurance Card:"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{style:{width:"220px"},type:"file",name:"ins_card",onChange:this.handleImage,disabled:!(null===(a=this.state)||void 0===a?void 0:a.isEditing)}),this.state.ins_card?Object(x.jsx)("img",{className:"ins-card",src:this.state.preview||this.state.ins_card,alt:""}):null]}),this.state.isEditing?Object(x.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.handleSubmit,children:"Save"}):Object(x.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return s.setState({isEditing:!0})},children:"Edit"})]})})}}]),n}(a.Component),R=(a.Component,function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={records:[]},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("recordsNavBar",{}),Object(x.jsx)("div",{children:"Record List"})]})}}]),n}(a.Component)),L=n(28),T=(n(43),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"map-container",children:[Object(x.jsx)("h2",{children:"Find Care:"}),Object(x.jsxs)(L.Map,{className:"map",google:this.props.google,zoom:14,children:[Object(x.jsx)(L.Marker,{onClick:this.onMarkerClick,name:"Current location"}),Object(x.jsx)(L.InfoWindow,{onClose:this.onInfoWindowClose})]})]})}}]),n}(a.Component)),E=(Object(L.GoogleApiWrapper)({apiKey:"AIzaSyAo_ERV2DzyXcIZnNstLUq4ABrHHR62E5A"})(T),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=".concat("AIzaSyAo_ERV2DzyXcIZnNstLUq4ABrHHR62E5A")).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){return console.log("API test: ",{data:e})})).catch((function(e){console.error("Problem with fetch request: ",e)}))}},{key:"render",value:function(){return Object(x.jsx)("div",{children:"Map"})}}]),n}(a.Component)),D=(Object(L.GoogleApiWrapper)({apiKey:"AIzaSyBG242E6D2eH_Ai2RYwAiTMg2Y83P3iyXU"})(E),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isAuthenticated:!!g.a.get("Authorization")},a.handleLogin=a.handleLogin.bind(Object(j.a)(a)),a.handleLogout=a.handleLogout.bind(Object(j.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(j.a)(a)),a}return Object(b.a)(n,[{key:"handleLogin",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=13;break}return e.next=8,s.json().catch(a);case 8:r=e.sent,g.a.set("Authorization","Token ".concat(r.key)),this.setState({isAuthenticated:!0}),e.next=14;break;case 13:alert("Incorrect Username of Password, Please Try Again!");case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleRegistration",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,s,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=13;break}return e.next=8,s.json().catch(a);case 8:r=e.sent,g.a.set("Authorization","Token ".concat(r.key)),this.setState({isAuthenticated:!0}),e.next=14;break;case 13:throw new Error("Network response was not ok");case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(g.a.remove("Authorization"),this.setState({isAuthenticated:!1}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{handleLogout:this.handleLogout}),Object(x.jsxs)(f.d,{children:[Object(x.jsx)(f.b,{path:"/login",render:function(t){return Object(x.jsx)(I,Object(o.a)(Object(o.a)({},t),{},{handleLogin:e.handleLogin,isAuthed:!0}))}}),Object(x.jsx)(f.b,{path:"/registration",render:function(t){return Object(x.jsx)(A,Object(o.a)(Object(o.a)({},t),{},{handleRegistration:e.handleRegistration}))}}),Object(x.jsx)(N,{isAuthenticated:this.state.isAuthenticated,exact:!0,path:"/",children:Object(x.jsx)(_,{})}),Object(x.jsx)(N,{isAuthenticated:this.state.isAuthenticated,path:"/profile",children:Object(x.jsx)(P,{})}),Object(x.jsx)(N,{isAuthenticated:this.state.isAuthenticated,handleLogout:this.handleLogout,path:"/records",children:Object(x.jsx)(R,{})})]})]})}}]),n}(a.Component)),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(c.a,{children:Object(x.jsx)(D,{})})}),document.getElementById("root")),F()}},[[74,1,2]]]);
//# sourceMappingURL=main.add3fe62.chunk.js.map