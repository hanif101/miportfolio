(this["webpackJsonphanif-portfolio"]=this["webpackJsonphanif-portfolio"]||[]).push([[0],{48:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},52:function(e,t,i){},61:function(e,t,i){},62:function(e,t,i){},74:function(e,t,i){},75:function(e,t,i){},76:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){},79:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),s=i(28),c=i.n(s),o=(i(48),i(10)),r=i(9),l=(i(49),i(42)),d=i(32),h=(i(50),i(2)),j=["height"],b=function(e){var t=e.open,i=e.children,a=n.a.Children.toArray(i),s=Object(d.useTrail)(a.length,{config:{mass:5,tension:2e3,friction:200},opacity:t?1:0,x:t?0:20,height:t?110:0,from:{opacity:0,x:20,height:0}});return Object(h.jsxs)("div",{children:[console.log(s),s.map((function(e,t){var i=e.height,n=Object(l.a)(e,j);return Object(h.jsx)(d.a.div,{className:"trailsText",style:n,children:Object(h.jsx)(d.a.div,{style:{height:i},children:a[t]})},t)}))]})},m=i(16);i(52);function p(e){var t=e.home,i=e.about,a=e.projects,n=e.skills;return Object(h.jsx)("div",{className:"container-fluid nav_primary",children:Object(h.jsxs)("div",{className:"container-fluid nav_secondary",children:[t&&Object(h.jsx)(m.b,{to:"/",className:"nav_link home",children:"home"}),i&&Object(h.jsx)(m.b,{to:"/about",className:"nav_link about",children:"about"}),a&&Object(h.jsx)(m.b,{to:"/projects",className:"nav_link projects",children:"projects"}),n&&Object(h.jsx)(m.b,{to:"/skills",className:"nav_link skills",children:"skills"})]})})}var u=i(12),f=(i(61),[Object(h.jsx)("a",{href:"https://github.com/hanif101",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"https://icongr.am/material/github.svg?size=50&color=ffffff",alt:"github",className:"github"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/hanifa-ahmadov/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"https://icongr.am/material/linkedin.svg?size=50s&color=ffffff",alt:"linkedin",className:"linkedin"})}),Object(h.jsx)("a",{href:"https://drive.google.com/file/d/11Q7AOCBNRTH_ogf8AwjOU8Rz5b-P8Ccr/view?usp=sharing",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:"https://icongr.am/material/file-pdf-box.svg?size=50&color=ffffff",alt:"resume",className:"resume"})})]),g=i(33),x=(i(62),function(e){var t=e.children,i=Object(a.useState)(!1),n=Object(o.a)(i,2),s=n[0],c=n[1],r=Object(g.c)({from:{x:s?0:1,y:s?0:1},to:{x:1,y:1},config:{mass:.5,tension:120,friction:2,precision:.001},reset:s,onStart:function(e){return c(!1)}}),l=r.x,d=r.y;return Object(h.jsx)(g.a.div,{className:"squeeze",onMouseEnter:function(){return c(!0)},style:{transform:Object(g.b)([l.interpolate({range:[0,.3,1],output:[1,1.1,1]}),d.interpolate({range:[0,.3,1],output:[1,.9,1]})],(function(e,t){return"scale(".concat(e,",").concat(t,")")}))},children:t})}),v=function(e){var t=e.icons;return Object(h.jsx)("div",{className:"bounce",children:t.map((function(e,t){return Object(h.jsx)("span",{children:Object(h.jsxs)(x,{children:[" ",e," "]},t)},t)}))})};function O(){return Object(h.jsx)(u.motion.div,{className:"container animated_icons",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.5,duration:1}}},initial:"hidden",animate:"visible",children:Object(h.jsx)(v,{icons:f})})}i(74);function y(e){var t=e.open;return Object(h.jsx)("div",{className:"home_primary",children:Object(h.jsxs)("div",{className:"container home_secondary",children:[Object(h.jsx)(u.motion.div,{className:"home_navbar_wrapper",variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:2}}},initial:"initial",animate:"animate",children:Object(h.jsx)(p,{home:!1,about:!0,projects:!0,skills:!0})}),Object(h.jsxs)(b,{open:t,children:[Object(h.jsx)("div",{children:"Hanifa"}),Object(h.jsx)("div",{children:"Ahmadov"}),Object(h.jsx)("div",{children:"Full"}),Object(h.jsx)("div",{children:"Stack"}),Object(h.jsx)("div",{children:"Developer"})]}),Object(h.jsx)("div",{className:"home_animated_icons_wrapper",children:Object(h.jsx)(O,{})})]})})}i(75);var k=i.p+"static/media/party.95a57ab9.ico";function N(){return Object(h.jsxs)(u.motion.div,{className:"container about_primary",variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:1}},exit:{opacity:0,transition:{duration:5}}},initial:"initial",animate:"animate",exit:"exit",children:[Object(h.jsx)("div",{className:"about_navbar",children:Object(h.jsx)(p,{home:!0,projects:!0,skills:!0})}),Object(h.jsx)("div",{className:"about_header",children:"About Me"}),Object(h.jsxs)("div",{className:"about_text",children:[Object(h.jsxs)("p",{children:["Welcome to my engineering and development portfolio !",Object(h.jsx)("span",{children:Object(h.jsx)("img",{src:k,alt:"ura"})})]}),Object(h.jsx)("p",{children:"I graduated from Azerbaijan Technological University in back home country with a degree in Safety Engineering. Spending several years in education-related jobs I had a chance to come to USA. After acommodating in the USA and working at self-emploment jobs, I decided to change my career. I was in search my passion and I remembered I always had an interesting good at solving logical problems at university. One day I have met one of my friend in San Jose in 2020 who is in software developer field and he gave me general idea of how code works, algoritms run. I got so excited and I felt this is my passion and have to follow it."}),Object(h.jsx)("p",{children:"So, I enrolled General Assembly school in Boston and graduated from as a Software Developer in Feb 2022. During 12 weeks, 500 hours commitment in GA full-stack software immersive class, I have built 3 projects by getting proficiency in the most popular technologies. After graduation, I am focusing on new technologies and working on new projects for improvement. I do also have hobbies like walkig and reading books, watching movies in my spare time. Now I am happy that I have found my passion and open to any chance to dive in and get experience."})]})]})}i(76);var _=i.p+"static/media/openstore.884fe703.png",w=i.p+"static/media/ouichat.343905e3.png",I=i.p+"static/media/ttt.e5e36c4e.png";i(77);function A(e){var t=e.image,i=e.title;return Object(h.jsxs)("div",{className:"kard",children:[Object(h.jsx)("img",{src:t,className:"kard-img",alt:"aa"}),Object(h.jsx)("div",{className:"kard-body",children:Object(h.jsx)("h5",{className:"kard-title",children:i})})]})}i(78);function S(e){var t=e.demo_link,i=e.github_link;return Object(h.jsxs)("div",{className:"buttons_primary",children:[Object(h.jsx)("div",{className:"demo",children:Object(h.jsx)(u.motion.a,{whileHover:{scale:1.03,backgroundColor:"rgb(67, 16, 179)",color:"white",transition:{ease:"easeInOut"}},href:t,target:"_blank",className:"btn p-1 px-3",type:"button",children:"Demo"})}),Object(h.jsx)("div",{className:"github",children:Object(h.jsx)(u.motion.a,{whileHover:{backgroundColor:"rgb(67, 16, 179)",color:"white",scale:1.03,transition:{ease:"easeInOut"}},href:i,target:"_blank",className:"btn p-1 px-3 mx-3",type:"button",children:"Github"})})]})}function T(){return Object(h.jsx)(u.AnimatePresence,{children:Object(h.jsxs)(u.motion.div,{className:"container pro_primary",variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:1}},exit:{opacity:0,transition:{duration:1}}},initial:"initial",animate:"animate",exit:"exit",children:[Object(h.jsx)("div",{className:"pro_navbar",children:Object(h.jsx)(p,{home:!0,about:!0,projects:!1,skills:!0})}),Object(h.jsx)("div",{className:"pro_header",children:"Projects"}),Object(h.jsxs)("div",{className:"container pro_content",children:[Object(h.jsx)("p",{className:"intro",children:"During education in General Assemble bootcamp, I have build two projects and participated in one group project. Applied technologies that I have learned in school and in self-edcauted online training lessons."}),Object(h.jsxs)("div",{className:"container pro_content",children:[Object(h.jsxs)("div",{className:"container-fluid op",children:[Object(h.jsxs)("div",{children:["Application offers users to list their product for sale. Users are able to do CRUD apis to the server and see realtime updates. App has been inspired by offer apps and built using React and React Routing, Rest APIs, and Framer-Motion library for smooth dropdowns in the client-side. ExpressJS, Node JS and MongoDB ATLASS +Mongoose have been used on the server side. Planning to use Socket.IO to have activation of relationship between seller and buyers.",Object(h.jsx)("div",{className:"op_buttons_div",children:Object(h.jsx)(S,{demo_link:"https://hanif101.github.io/open-store/",github_link:"https://github.com/hanif101/open-store"})})]}),Object(h.jsx)("div",{className:"container card_wrapper",children:Object(h.jsx)(A,{image:_,title:"Open Store"})})]}),Object(h.jsxs)("div",{className:"och",children:[Object(h.jsxs)("div",{children:["This project was a team project that I have worked on with my 4 other classmates. Application allows users to process simple user functionality like a signup or create an account. Project inspired by Slack application. Users are able to join rooms and share ideas. Users are also able to create rooms and send invitations to others. I had done user functionalities in the backend Express js and front end design routes React library.",Object(h.jsx)("div",{className:"och_buttons_div",children:Object(h.jsx)(S,{demo_link:"https://ga-git-good.github.io/chat-app/",github_link:"https://github.com/ga-git-good/chat-app"})})]}),Object(h.jsx)("div",{className:"card_wrapper",children:Object(h.jsx)(A,{image:w,title:"Oui Chat"})})]}),Object(h.jsxs)("div",{className:"ttt",children:[Object(h.jsxs)("div",{children:["The first project I completed at GA was a tic-tac-toe game. The goal for this project was to create a functional tic-tac-toe game from scratch using new tools we learned before hand. Players are able to start a fresh game, keep track of games, change their password, and sign out of the application. Sematic HTML5, CSS3 & Bootstrap and JQuery technologoes used.",Object(h.jsx)("div",{className:"ttt_buttons_div",children:Object(h.jsx)(S,{demo_link:"https://hanif101.github.io/tic-tac-toe/",github_link:"https://github.com/hanif101/tic-tac-toe"})})]}),Object(h.jsx)("div",{className:"card_wrapper",children:Object(h.jsx)(A,{image:I,title:"Tic Tac Toe"})})]})]})]})]})})}var C=function(){var e=Object(r.e)(),t=Object(r.f)(),i=Object(a.useState)(!0),n=Object(o.a)(i,2),s=n[0];n[1];return Object(h.jsx)(u.AnimatePresence,{children:Object(h.jsx)("div",{className:"app_primary",children:Object(h.jsxs)(r.b,{history:e,location:t,children:[Object(h.jsx)(r.a,{exact:!0,path:"/",component:function(){return Object(h.jsx)(y,{open:s})}}),Object(h.jsx)(r.a,{exact:!0,path:"/about",component:function(){return Object(h.jsx)(N,{})}}),Object(h.jsx)(r.a,{exact:!0,path:"/projects",children:Object(h.jsx)(T,{})})]},t.pathname)})})};c.a.render(Object(h.jsx)(m.a,{basename:"/miportfolio",children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.710d2311.chunk.js.map