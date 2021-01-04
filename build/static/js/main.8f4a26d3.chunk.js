(this.webpackJsonpsailormoon=this.webpackJsonpsailormoon||[]).push([[0],{31:function(e,t,s){"use strict";s.r(t);var n=s(8),r=s.n(n),a=s(0),c=s(11),o=s(7),i=s(1),l=s(18),j=s.n(l),d=s(9),u=s(2),b=function(){return Object(a.jsx)("div",{style:{border:"1px solid white",margin:"1em"},children:Object(a.jsxs)("p",{style:{color:"white",padding:"1em",display:"flex",justifyContent:"space-around"},children:[Object(a.jsx)("a",{href:"https://github.com/tillyninjaspace",target:"_blank",children:"Developer Details: Tilly Wright"}),Object(a.jsx)("span",{style:{marginLeft:"10px"},children:"Utilized Jikan API, Node, Express, Cors, Nodemailer, dotenv and React libraries"})]})})},h=function(e){var t=e.sailorMoonList;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{style:{backgroundColor:"black",marginBottom:"10px"},children:"Sailor Moon Shows, Films & Review Scores"}),Object(a.jsx)("div",{className:"starList",children:t.map((function(e){return Object(a.jsxs)("div",{className:"starCard",children:[Object(a.jsx)("div",{style:{textAlign:"center"},children:Object(a.jsxs)(d.b,{to:"/sailor-moon-reviews/"+e.mal_id,style:{textDecoration:"none"},children:[e.title,Object(a.jsx)("img",{src:e.image_url})]})}),Object(a.jsxs)("p",{className:"starInfo",children:[Object(a.jsxs)("span",{children:["Type: ",e.type]}),Object(a.jsxs)("span",{className:"score",children:["Score: ",e.score]})]}),1!=e.episodes?Object(a.jsxs)("p",{children:["Number of Episodes: ",e.episodes]}):"",Object(a.jsxs)("p",{children:["Rated: ",e.rated]}),Object(a.jsx)(d.b,{to:"/sailor-moon-reviews/"+e.mal_id,className:"nav",style:{textAlign:"center"},children:"See Star Card"})]},e.mal_id)}))})]})},p=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),s=t[0],n=t[1],l=Object(i.useState)(""),j=Object(o.a)(l,2),d=j[0],u=j[1],b=Object(i.useState)(""),h=Object(o.a)(b,2),p=h[0],x=h[1],m=Object(i.useState)("Send"),O=Object(o.a)(m,2),f=O[0],g=O[1],v=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("submit",s,d,p),g("Sending..."),e.next=5,fetch("/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:d,message:p})});case 5:return a=e.sent,console.log("response of message".response),e.next=9,a.json();case 9:"Message Sent."===(c=e.sent).status?(n(""),u(""),x(""),g(c.status)):g(c.status),console.log("result",c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{style:{margin:"1em"},onSubmit:v,children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{required:!0,placeholder:"Your Name",value:s,onChange:function(e){return n(e.target.value)}}),Object(a.jsx)("label",{children:"Email Address"}),Object(a.jsx)("input",{type:"email",required:!0,placeholder:"Your Email",value:d,onChange:function(e){return u(e.target.value)}}),Object(a.jsx)("label",{children:"Message"}),Object(a.jsx)("input",{required:!0,placeholder:"Type Message Here",value:p,onChange:function(e){return x(e.target.value)}}),Object(a.jsx)("button",{children:f})]})})},x=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Contact Us"}),Object(a.jsx)(p,{})]})},m=function(){return Object(a.jsx)("div",{className:"loading",children:Object(a.jsx)("h2",{children:"Looking for Star Card..."})})},O=function(e){e.sailorMoonList;var t=Object(i.useState)(""),s=Object(o.a)(t,2),n=s[0],l=s[1],j=Object(i.useState)(!1),d=Object(o.a)(j,2),b=d[0],h=d[1],p="https://api.jikan.moe/v3/anime/",x=Object(u.e)().starId;function O(){return(O=Object(c.a)(r.a.mark((function e(){var t,s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p+x,console.log("What is star URL",t),e.prev=2,h(!0),e.next=6,fetch(t);case 6:return s=e.sent,console.log("What's response",s),e.next=10,s.json();case 10:return n=e.sent,console.log("What's result",n),e.abrupt("return",n);case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0);case 18:return e.prev=18,h(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){(function(){return O.apply(this,arguments)})().then((function(e){console.log("card",e),l(e)})).catch((function(e){console.error(e)}))}),[]),Object(a.jsxs)("div",{className:"singleCard",children:[n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Star Card"}),Object(a.jsx)("h3",{style:{paddingBottom:"10px"},children:n.title}),Object(a.jsx)("img",{src:n.image_url}),1!=n.episodes?Object(a.jsxs)("p",{children:["Number of Episodes: ",n.episodes]}):"",Object(a.jsxs)("p",{children:["Rating: ",n.rating]}),Object(a.jsxs)("p",{className:"score",style:{paddingLeft:"3px",paddingRight:"3px"},children:[" Review Score: ",n.score]}),Object(a.jsxs)("p",{children:["Synopsis: ",n.synopsis]}),Object(a.jsxs)("p",{children:["Type: ",n.type]}),Object(a.jsxs)("p",{children:["Air Date: ",n.aired.string," "]}),Object(a.jsx)("p",{style:{textAlign:"center"},className:"nav",children:Object(a.jsx)("a",{style:{textDecoration:"none"},href:n.url,target:"_blank",children:"See Full Synopsis"})}),Object(a.jsx)("p",{style:{textAlign:"center"},className:"nav",children:Object(a.jsxs)("a",{style:{textDecoration:"none"},href:"https://www.amazon.com/s?k=sailor+moon+movie+and+shows&ref=nb_sb_noss&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=4032d4e98546b34ef7ff608b3f8e8405&camp=1789&creative=9325",target:"_blank",children:["Compare Sailor Moon DVDs and Blu-rays like ",n.title," on Amazon"]})})]}),b?Object(a.jsx)(m,{}):""]})},f=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),s=t[0],n=t[1];function l(){return(l=Object(c.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.jikan.moe/v3/search/anime?q=sailormoon&limit=17",e.prev=1,e.next=4,fetch("https://api.jikan.moe/v3/search/anime?q=sailormoon&limit=17");case 4:return t=e.sent,console.log("Sailor Moon results",t),e.next=8,t.json();case 8:return s=e.sent,console.log("What is Sailor Moon json",s),console.log("What are the list of INSIDE STARS results",s.results),e.abrupt("return",s.results);case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){(function(){return l.apply(this,arguments)})().then((function(e){n(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)("div",{className:"headerDiv",children:[Object(a.jsx)("p",{style:{textAlign:"center",maxHeight:"200px"},children:Object(a.jsx)("img",{src:"/sailormoonfanslogo.png"})}),Object(a.jsx)("h1",{children:"Pretty Sailor Scouts"}),Object(a.jsxs)("div",{className:"navWrapper",children:[Object(a.jsx)(d.b,{to:"/sailor-moon-reviews",className:"nav",children:"Sailor Moon TV and Movie Scores"}),Object(a.jsx)("a",{className:"nav",href:"https://www.amazon.com/s?k=sailor+moon+merchandise&ref=nb_sb_noss_2&_encoding=UTF8&tag=sailormoon00e-20&linkCode=ur2&linkId=d645d325aab67aeb13bceff654c6dc40&camp=1789&creative=9325",target:"_blank",children:"Sailor Moon Merchandise"}),Object(a.jsx)(d.b,{to:"/contact",className:"nav",children:"Contact"})]}),Object(a.jsx)(u.a,{exact:!0,path:"/sailor-moon-reviews",children:Object(a.jsx)(h,{sailorMoonList:s})}),Object(a.jsx)(u.a,{path:"/contact",children:Object(a.jsx)(x,{})}),Object(a.jsx)(u.a,{path:"/sailor-moon-reviews/:starId",children:Object(a.jsx)(O,{sailorMoonList:s})}),Object(a.jsx)(b,{})]})};j.a.render(Object(a.jsx)(d.a,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.8f4a26d3.chunk.js.map