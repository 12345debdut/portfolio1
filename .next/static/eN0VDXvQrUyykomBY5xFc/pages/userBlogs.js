(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{833:function(e,t,n){__NEXT_REGISTER_PAGE("/userBlogs",function(){return e.exports=n(839),{page:e.exports.default}})},839:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),a=n(1),u=n.n(a),l=n(14),c=n(15),i=n(5),s=n(21),f=n(18),p=n(16);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=y(t).call(this,e))||"object"!==h(o)&&"function"!=typeof o?g(r):o).toggle=n.toggle.bind(g(g(n))),n.state={dropdownOpen:!1},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,u.a.Component),n=t,(r=[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"renderMenu",value:function(e){return u.a.createElement(i.m,null,e.map(function(e,t){return u.a.createElement(i.l,m({key:t},e.handlers),e.text)}))}},{key:"render",value:function(){var e=this.props.items;return u.a.createElement(i.b,{className:"port-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggle},u.a.createElement(i.n,{caret:!0,size:"sm"}),this.renderMenu(e))}}])&&b(n.prototype,r),o&&b(n,o),t}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n,r,o,a,u){try{var l=e[a](u),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var S=function(e){function t(){var e,n,r,o,a,u,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return r=this,o=(e=j(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==w(o)&&"function"!=typeof o?P(r):o,a=P(P(n)),l=function(e){var t=n.createStatus(e.status);return[{text:t.view,handlers:{onClick:function(){return n.changeBlogStatus(e._id,t.value)}}},{text:"Delete",handlers:{onClick:function(){return n.deleteBlogWarning(e._id)}}}]},(u="dropdownOptions")in a?Object.defineProperty(a,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[u]=l,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,u.a.Component),n=t,r=[{key:"changeBlogStatus",value:function(e,t){Object(f.l)({status:t},e).then(function(){alert("You have published your blog"),p.Router.pushRoute("/userBlogs")}).catch(function(e){console.error(e)})}},{key:"deleteBlog",value:function(e){Object(f.c)(e).then(function(e){p.Router.pushRoute("/userBlogs")}).catch(function(e){console.error(e.message)})}},{key:"separateBlogs",value:function(e){var t=[],n=[];return e.forEach(function(e){"draft"===e.status?n.push(e):t.push(e)}),{published:t,drafts:n}}},{key:"deleteBlogWarning",value:function(e){confirm("Are you sure you want to delete blog post?")&&this.deleteBlog(e)}},{key:"createStatus",value:function(e){return"draft"===e?{view:"publish story",value:"published"}:{view:"Make a draft",value:"draft"}}},{key:"renderBlogs",value:function(e){var t=this;return u.a.createElement("ul",{className:"user-blogs-list"},e.map(function(e,n){return u.a.createElement("li",{key:n},u.a.createElement(p.Link,{route:"/blogs/".concat(e._id,"/edit")},u.a.createElement("a",{className:"html-content"},e.title)),u.a.createElement(v,{items:t.dropdownOptions(e)}))}))}},{key:"render",value:function(){var e=this.props.blogs,t=this.separateBlogs(e),n=t.drafts,r=t.published;return u.a.createElement(l.a,E({},this.props.auth,{headerType:"landing",className:"blog-listing-page"}),u.a.createElement("div",{className:"masthead",style:{backgroundImage:"url('/static/images/home-bg.jpg')"}},u.a.createElement("div",{className:"overlay"}),u.a.createElement(i.j,null,u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-8 col-md-10 mx-auto"},u.a.createElement("div",{className:"site-heading"},u.a.createElement("h1",null,"DashBoard"),u.a.createElement("span",{className:"subheading"},"Ohh!! Yes there are all blogs please checkit out ",u.a.createElement(p.Link,{route:"/blogs/new"},u.a.createElement(i.a,{color:"primary",style:{marginTop:10}},"Create New blog"))," ")))))),u.a.createElement(c.a,{className:"blog-user-page"},u.a.createElement(i.A,null,u.a.createElement(i.h,{md:"6",className:"mx-auto text-center"},u.a.createElement("h2",{className:"blog-status-title"},"Published Blogs"),this.renderBlogs(r)),u.a.createElement(i.h,{md:"6",className:"mx-auto text-center"},u.a.createElement("h2",{className:"blog-status-title"},"Drafted Blogs"),this.renderBlogs(n)))))}}],a=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,r=[],e.prev=2,e.next=5,Object(f.k)(n);case 5:r=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:return e.abrupt("return",{blogs:r});case 12:case"end":return e.stop()}},e,this,[[2,8]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){O(a,r,o,u,l,"next",e)}function l(e){O(a,r,o,u,l,"throw",e)}u(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&k(n.prototype,r),a&&k(n,a),t}();t.default=Object(s.a)("admin")(S)}},[[833,1,0]]]);