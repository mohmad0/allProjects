(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),u=n.n(s),c=n(7),o=n.n(c),i=(n(13),n(2)),a=n(3),d=n(5),l=n(4),p=function(e){return Object(r.jsxs)("form",{onSubmit:e.addCourse,children:[Object(r.jsx)("input",{type:"text",value:e.current,required:!0,onChange:e.updateCourse}),Object(r.jsx)("button",{type:"submit",children:"Add"})]})},j=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return(e=t.call.apply(t,[this].concat(u))).state={isEdit:!1},e.renderCourse=function(){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:e.props.deteils.name}),Object(r.jsx)("button",{onClick:function(){e.toggelCourse()},children:"Edit"}),Object(r.jsx)("button",{onClick:function(){e.props.deleteCourse(e.props.index)},children:"Delete"})]})},e.toggelCourse=function(){var t=e.state.isEdit;e.setState({isEdit:!t})},e.updateCourseItem=function(t){if(t.preventDefault(),!e.input.value)return!1;e.props.editCourse(e.props.index,e.input.value),e.toggelCourse()},e.updateCourse=function(){return Object(r.jsxs)("form",{onSubmit:e.updateCourseItem,children:[Object(r.jsx)("input",{type:"text",ref:function(t){e.input=t},defaultValue:e.props.deteils.name}),Object(r.jsx)("button",{children:"Update"})]})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.isEdit;return Object(r.jsx)(r.Fragment,{children:e?this.updateCourse():this.renderCourse()})}}]),n}(s.Component),h=(n(14),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];return(e=t.call.apply(t,[this].concat(s))).state={courses:[],current:""},e.updateCourse=function(t){e.setState({current:t.target.value})},e.addCourse=function(t){t.preventDefault();var n=e.state.current,r=e.state.courses;if(!n.length)return!1;r.push({name:n}),e.setState({courses:r,current:""})},e.deleteCourse=function(t){var n=e.state.courses;n.splice(t,1),e.setState({courses:n})},e.editCourse=function(t,n){var r=e.state.courses;r[t].name=n,e.setState({courses:r})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.courses,n=t.map((function(t,n){return Object(r.jsx)(j,{deteils:t,index:n,editCourse:e.editCourse,deleteCourse:e.deleteCourse},n)}));return Object(r.jsxs)("section",{className:"App",children:[Object(r.jsx)("h2",{children:"Add New Item"}),Object(r.jsx)(p,{current:this.state.current,updateCourse:this.updateCourse,addCourse:this.addCourse}),Object(r.jsxs)("ul",{children:[" ",t.length?n:Object(r.jsx)("p",{children:" There Is No Item "})," "]})]})}}]),n}(s.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,u=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),u(e),c(e)}))};o.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.c6cc5437.chunk.js.map