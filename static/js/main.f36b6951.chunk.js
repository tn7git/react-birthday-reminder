(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),i=(t(14),t(8)),o=t(2),m=[{id:1,name:"Bertie Yates",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"},{id:2,name:"Hester Hogan",age:32,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"},{id:3,name:"Larry Little",age:36,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"},{id:4,name:"Sean Walsh",age:34,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"},{id:5,name:"Lola Gardner",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"}],u=function(e){var a=e.people,t=e.removePeople;return r.a.createElement(r.a.Fragment,null,a.map((function(e){var a=e.id,n=e.name,l=e.age,c=e.image;return r.a.createElement("article",{key:a,className:"person"},r.a.createElement("img",{src:c,alt:n}),r.a.createElement("div",null,r.a.createElement("h4",null,n),r.a.createElement("p",null,l," years")),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return t(a)}},"Delete")))})))},p=t(4),s=t(5);var d=function(e){var a=e.people,t=e.addPeople,l=Object(n.useState)({}),c=Object(o.a)(l,2),i=c[0],m=c[1],u=Object(n.useState)("name1"),d=Object(o.a)(u,2),g=d[0],E=d[1],f=function(e){var a=e.target.name,t=e.target.value;m((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(p.a)({},a,t))}))},v=a.map((function(e){return r.a.createElement("option",{value:e.age,key:e.id},e.name)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"name",name:"name",value:i.value,onChange:f,placeholder:"Name"}),r.a.createElement("input",{id:"year",type:"number",name:"year",onChange:f,min:1800,max:2023,placeholder:"Born year"}),r.a.createElement("button",{onClick:function(){t(i)}},"Add"),r.a.createElement("div",{style:{padding:50}}),r.a.createElement("select",{onChange:function(e){E(e.target.value)}},v),r.a.createElement("p",{className:"born-year"}," Born year:  ",2023-g))};var g=function(){var e=Object(n.useState)(m),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("main",null,r.a.createElement("section",{className:"container"},r.a.createElement("h3",null,t.length," birthdays today"),r.a.createElement(u,{people:t,removePeople:function(e){var a=t.filter((function(a){return a.id!==e}));l(a)}}),r.a.createElement("button",{onClick:function(){return l([])}},"clear all")),r.a.createElement("section",{className:"container",style:{marginLeft:50}},r.a.createElement("h3",null," New birthday"),r.a.createElement(d,{people:t,addPeople:function(e){l((function(a){return[].concat(Object(i.a)(a),[{id:t.length+1,name:e.name,age:2023-e.year,image:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"}])})),console.log(t,e)}})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f36b6951.chunk.js.map