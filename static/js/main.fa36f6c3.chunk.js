(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),m=(a(11),a(1)),o=a(3),i=a(2);var s=function(e){var t=Object(n.useState)({name:"",address:"",email:"",phone:""}),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!0),u=Object(m.a)(s,2),d=u[0],E=u[1],p=e.saveData,b=function(e){r(Object(i.a)(Object(i.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))};return d?l.a.createElement("div",{className:"section",id:"contact-info-container"},l.a.createElement("h2",null,"Contact Information"),l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",onChange:b,value:c.name}),l.a.createElement("label",{htmlFor:"address"},"Address"),l.a.createElement("input",{type:"text",name:"address",onChange:b,value:c.address}),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",name:"email",onChange:b,value:c.email}),l.a.createElement("label",{htmlFor:"phone"},"Phone"),l.a.createElement("input",{type:"text",name:"phone",onChange:b,value:c.phone}),l.a.createElement("div",{className:"btn-container"},l.a.createElement("button",{className:"save-btn",onClick:function(e){E(!1),p(c)}},"Save"),l.a.createElement("button",{className:"clear-btn",onClick:function(e){r({name:"",address:"",email:"",phone:""})}},"Clear"))):l.a.createElement("div",{className:"section",id:"contact-info-container"},l.a.createElement("h2",null,"Contact Information"),l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("p",{name:"name"},c.name),l.a.createElement("label",{htmlFor:"address"},"Address"),l.a.createElement("p",{name:"address"},c.address),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("p",{name:"email"},c.email),l.a.createElement("label",{htmlFor:"phone"},"Phone"),l.a.createElement("p",{name:"phone"},c.phone),l.a.createElement("button",{className:"edit-btn",onClick:function(e){E(!0)}},"Edit"))};var u=function(e){var t=Object(n.useState)({institution:"",degree:"",gradYear:""}),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!0),u=Object(m.a)(s,2),d=u[0],E=u[1],p=e.saveData,b=function(e){r(Object(i.a)(Object(i.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))};return d?l.a.createElement("div",{className:"section",id:"education-container"},l.a.createElement("h2",null,"Education"),l.a.createElement("label",{htmlFor:"institution"},"Institution Name"),l.a.createElement("input",{type:"text",name:"institution",onChange:b,value:c.institution}),l.a.createElement("label",{htmlFor:"degree"},"Degree Information"),l.a.createElement("input",{type:"text",name:"degree",onChange:b,value:c.degree}),l.a.createElement("label",{htmlFor:"gradYear"},"Year of Graduation"),l.a.createElement("input",{type:"text",name:"gradYear",onChange:b,value:c.gradYear}),l.a.createElement("div",{className:"btn-container"},l.a.createElement("button",{className:"save-btn",onClick:function(e){E(!1),p(c)}},"Save"),l.a.createElement("button",{className:"clear-btn",onClick:function(e){r({institution:"",degree:"",gradYear:""})}},"Clear"))):l.a.createElement("div",{className:"section",id:"education-container"},l.a.createElement("h2",null,"Education"),l.a.createElement("label",{htmlFor:"institution"},"Institution Name"),l.a.createElement("p",{name:"institution"},c.institution),l.a.createElement("label",{htmlFor:"degree"},"Degree Information"),l.a.createElement("p",{name:"degree"},c.degree),l.a.createElement("label",{htmlFor:"gradYear"},"Year of Graduation"),l.a.createElement("p",{name:"gradYear"},c.gradYear),l.a.createElement("button",{className:"edit-btn",onClick:function(e){E(!0)}},"Edit"))};var d=function(e){var t=Object(n.useState)({company:"",position:"",startDate:"",endDate:"",desc:""}),a=Object(m.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!0),u=Object(m.a)(s,2),d=u[0],E=u[1],p=e.saveData,b=function(e){r(Object(i.a)(Object(i.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))};return d?l.a.createElement("div",{className:"section",id:"work-container"},l.a.createElement("h2",null,"Work Experience"),l.a.createElement("label",{htmlFor:"company"},"Company Name"),l.a.createElement("input",{type:"text",name:"company",onChange:b,value:c.company}),l.a.createElement("label",{htmlFor:"position"},"Position Title"),l.a.createElement("input",{type:"text",name:"position",onChange:b,value:c.position}),l.a.createElement("label",{htmlFor:"startDate"},"Start Date"),l.a.createElement("input",{type:"text",name:"startDate",onChange:b,value:c.startDate}),l.a.createElement("label",{htmlFor:"endDate"},"End Date"),l.a.createElement("input",{type:"text",name:"endDate",onChange:b,value:c.endDate}),l.a.createElement("label",{htmlFor:"desc"},"Work Description"),l.a.createElement("input",{type:"text",name:"desc",onChange:b,value:c.desc}),l.a.createElement("div",{className:"btn-container"},l.a.createElement("button",{className:"save-btn",onClick:function(e){E(!1),p(c)}},"Save"),l.a.createElement("button",{className:"clear-btn",onClick:function(e){r({company:"",position:"",startDate:"",endDate:"",desc:""})}},"Clear"))):l.a.createElement("div",{className:"section",id:"work-container"},l.a.createElement("h2",null,"Work Experience"),l.a.createElement("label",{htmlFor:"company"},"Company Name"),l.a.createElement("p",{name:"company"},c.company),l.a.createElement("label",{htmlFor:"position"},"Position Title"),l.a.createElement("p",{name:"position"},c.position),l.a.createElement("label",{htmlFor:"startDate"},"Start Date"),l.a.createElement("p",{name:"startDate"},c.startDate),l.a.createElement("label",{htmlFor:"endDate"},"End Date"),l.a.createElement("p",{name:"endDate"},c.endDate),l.a.createElement("label",{htmlFor:"desc"},"Work Description"),l.a.createElement("p",{name:"desc"},c.desc),l.a.createElement("button",{className:"edit-btn",onClick:function(e){E(!0)}},"Edit"))};a(12);var E=function(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(null),i=Object(m.a)(o,2),E=i[0],p=i[1],b=Object(n.useState)(null),h=Object(m.a)(b,2),v=h[0],g=h[1],f=e.submitData,D=e.setFormCompleted;return l.a.createElement("div",{className:"main-container"},l.a.createElement("h1",null,"CV Generator"),l.a.createElement("div",{id:"form"},l.a.createElement(s,{saveData:r}),l.a.createElement(u,{saveData:p}),l.a.createElement(d,{saveData:g}),l.a.createElement("div",{id:"submit-btn-container"},l.a.createElement("button",{id:"submit-btn",onClick:function(){c&&E&&v&&(f([c,E,v]),D(!0))}},"Submit Application"))))};a(13);var p=function(e){var t=e.data;return l.a.createElement("div",{className:"main-container",id:"output-container"},l.a.createElement("div",{className:"section",id:"contact-output-container"},l.a.createElement("h1",null,t[0].name.length>0?t[0].name:"Placeholder McPlaceholderface"),l.a.createElement("p",null,t[0].address.length>0?t[0].address:"123 Placeholder Avenue"),l.a.createElement("p",null,t[0].phone.length>0?t[0].phone:"+1-123-4567"),l.a.createElement("p",null,t[0].email.length>0?t[0].email:"Placeholder@placeholder.com")),l.a.createElement("div",{className:"section",id:"work-output-container"},l.a.createElement("h3",null,"Experience"),l.a.createElement("h4",{className:"subheading"},t[2].company.length>0?t[2].company:"Placeholder Inc."),l.a.createElement("p",null,t[2].position.length>0?t[2].position:"Professional Placeholder"),l.a.createElement("p",null,t[2].startDate.length>0?t[2].startDate:"1999"," - ",t[2].endDate.length>0?t[2].startDate:"2020"),l.a.createElement("p",null,t[2].desc.length>0?t[2].desc:"Acted as a placeholder")),l.a.createElement("div",{className:"section",id:"education-output-container"},l.a.createElement("h3",null,"Education"),l.a.createElement("h4",{className:"subheading"},t[1].institution.length>0?t[1].institution:"University of Placeholder"),l.a.createElement("p",null,t[1].degree.length>0?t[1].degree:"BA in Placeholder Studies"),l.a.createElement("p",null,t[1].gradYear.length>0?t[1].gradYear:"2020")))};a(14);var b=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(m.a)(r,2),i=o[0],s=o[1];return l.a.createElement("div",{className:"App"},i?l.a.createElement(p,{data:a}):l.a.createElement(E,{submitData:c,setFormCompleted:s}))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.fa36f6c3.chunk.js.map