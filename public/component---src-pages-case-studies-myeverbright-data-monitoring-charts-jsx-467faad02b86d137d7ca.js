"use strict";(self.webpackChunkfenenc_creative=self.webpackChunkfenenc_creative||[]).push([[337],{711:function(e,t,a){var s=a(7294);t.Z=()=>s.createElement("footer",{className:"serv-block fc-lbg-dark-gray"},s.createElement("div",{className:"container"},s.createElement("div",{classname:"row justify-content-center"},s.createElement("div",{classname:"col-lg-8 col-md-10"},s.createElement("h5",{className:"text-center mb-40"},"Thanks for scrolling!"),s.createElement("div",{className:"social-container"},s.createElement("span",{className:"social linkdark"},s.createElement("a",{href:"https://www.linkedin.com/in/fenneccreative/",target:"_blank"},s.createElement("i",{class:"fab fa-linkedin-in"}))),s.createElement("span",{className:"social linkdark"},s.createElement("a",{href:"mailto:cwilliamsdigital@gmail.com"},s.createElement("i",{className:"fa fa-envelope"}))))))))},8007:function(e,t,a){a.d(t,{Z:function(){return c}});var s=a(7294);var n=()=>{Pace.on("start",(function(){document.querySelector("#preloader").classList.remove("isdone"),document.querySelector(".loading").classList.remove("isdone")})),Pace.on("done",(function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")})),document.querySelector("body").classList.contains("pace-done")&&(document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")),window.addEventListener("load",(()=>{document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone"),document.querySelector(".pace-running.pace-running")&&document.querySelector(".pace-running.pace-running").classList.remove("pace-running")}))},l=!0;var c=()=>(s.useEffect((()=>{let e=document.querySelector("body");l?(n(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")}),[]),s.createElement(s.Fragment,null,s.createElement("div",{className:!0===l?"showX":"hideX"},s.createElement("div",{className:"loading"},s.createElement("span",null,"L"),s.createElement("span",null,"o"),s.createElement("span",null,"a"),s.createElement("span",null,"d"),s.createElement("span",null,"i"),s.createElement("span",null,"n"),s.createElement("span",null,"g")),s.createElement("div",{id:"preloader"}))))},2382:function(e,t,a){a.d(t,{Z:function(){return r}});var s=a(7294);var n=e=>{let t=[];if(!e.parentNode)return t;let a=e.parentNode.firstChild;for(;a;)1===a.nodeType&&a!==e&&t.push(a),a=a.nextSibling;return t};const l=e=>{n(e.target.parentElement).filter((e=>e.classList.contains("show"))).forEach((e=>{e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},c=e=>{document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")};var r=e=>{let{navbarRef:t,theme:a}=e;return s.createElement("nav",{className:"navbar navbar-expand-lg",ref:t},s.createElement("div",{className:"container"},s.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:c,"data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.createElement("span",{className:"icon-bar"},s.createElement("i",{className:"fas fa-bars"}))),s.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.createElement("ul",{className:"navbar-nav m-auto"},s.createElement("li",{className:"nav-item"},s.createElement("a",{className:"nav-link",href:"/"},"Home")),s.createElement("li",{className:"nav-item dropdown",onClick:l},s.createElement("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown","data-scroll-nav":"0"},"Case Studies"),s.createElement("div",{className:"dropdown-menu"},s.createElement("a",{className:"dropdown-item",href:"/case-studies/myeverbright"},"MyEverBright"),s.createElement("a",{className:"dropdown-item",href:"/case-studies/axil-design-system"},"Axil Design System"),s.createElement("a",{className:"dropdown-item",href:"/case-studies/search-feature"},"A Better Search"),s.createElement("a",{className:"dropdown-item",href:"/case-studies/quest-for-a-clean-house"},"Cleaning Quest"))),s.createElement("li",{className:"nav-item"},s.createElement("a",{className:"nav-link",href:"/about"},"About"))))))}},5354:function(e,t,a){a.d(t,{Z:function(){return l}});var s=a(7294);var n=()=>{let e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";const a=function(){let a=window.pageYOffset,s=document.documentElement.scrollHeight-window.innerHeight,n=t-a*t/s;e.style.strokeDashoffset=n};a(),window.addEventListener("scroll",a);let s=document.querySelector(".progress-wrap");window.addEventListener("scroll",(function(){window.pageYOffset>150?s.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),s.addEventListener("click",(function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))};var l=()=>(s.useEffect((()=>{n()}),[]),s.createElement("div",{className:"progress-wrap cursor-pointer"},s.createElement("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102"},s.createElement("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"}))))},9295:function(e,t,a){var s=a(7294),n=a(1082),l=a(5354),c=a(8007);t.Z=e=>{let{children:t,mobileappstyle:a,useSkin:r,customstyle:i}=e;return s.useEffect((()=>{window.theme="light";let e=document.querySelector('link[href="/css/dark.css"]'),t=document.querySelector('link[href="/css/light.css"]');if(e){if(!t){let e=document.createElement("link");e.rel="stylesheet",e.href="/css/light.css",document.head.appendChild(e)}e.remove()}if(a){let e=document.createElement("link");e.rel="stylesheet",e.href="/css/mobile-app-light.css",document.head.appendChild(e)}if(r){let e=document.createElement("link");e.rel="stylesheet",e.href="/css/arch-skin-light.css",document.head.appendChild(e)}if(i){let e=document.createElement("link");e.rel="stylesheet",e.href="/css/fc-custom.css",document.head.appendChild(e)}}),[a,r,i]),s.createElement(s.Fragment,null,s.createElement(c.Z,null),t,s.createElement(l.Z,null),s.createElement(n.Xf,{src:"/js/wowInit.js"}))}},3326:function(e,t,a){a.r(t),a.d(t,{Head:function(){return N},default:function(){return b}});var s=a(7294),n=a(2382),l=a(9295);var c=()=>s.createElement("header",{className:"pb-0 section-padding position-relative elevation-high fc-lbg-gradient-grey"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col-lg-9 col-md-10"},s.createElement("div",{className:"sec-head text-center mb-70"},s.createElement("h6",{className:"mb-20"},"Case Study - 2024"),s.createElement("h1",null,"Data Monitoring Charts")))),s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"fc-image-container"},s.createElement("img",{src:"/img/case-studies/subpage-phone-graphic.png",alt:" ",className:"main-head"}),s.createElement("img",{src:"/img/case-studies/subpage-header-overlay.png",alt:" ",className:"main-para"})))));var r=()=>s.createElement("section",{className:"serv-block section-padding"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-lg-5 offset-lg-2"},s.createElement("div",null,s.createElement("p",{className:"mb-20"},"EverBright needed a seamless data monitoring experience that empowered users to monitor their systems and optimize their solar energy use."),s.createElement("p",null,"To achieve this I built a user-centered solution focused on ease of understanding with multiple pathways to success."))),s.createElement("div",{className:"margin-more-t col-lg-3 offset-lg-1 offset-rg-2"},s.createElement("h6",{className:"mb-10"},"My Role"),s.createElement("p",{className:"mb-30"},"Lead Product Designer"),s.createElement("h6",{className:"mb-10"},"Company"),s.createElement("p",null,"EverBright")))));var i=()=>s.createElement("section",{className:"serv-block section-padding fc-lbg-dark-gray min-area"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-lg-6"},s.createElement("div",{className:"mb-20"},s.createElement("h2",{className:"mb-30 text-center"},"The Problem"),s.createElement("p",{className:"mb-20"},"EverBright previosly had a data monitoring chart system for solar energy only. The feature was not optimized for mobile applications, and struggled to draw user engagement."),s.createElement("p",{className:"mb-20"},"We sought to improve engagement and trust, while also empowering users to optimize their energy systems and reduce carbon emissions."))),s.createElement("div",{className:"col-lg-6 valign text-center"},s.createElement("img",{src:"/img/case-studies/power-problem.png",alt:"chart showing user engagement dropping quickly within first two weeks",className:"img-width-large"})))));var m=()=>s.createElement("section",{className:"serv-block section-padding"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col-lg-7 col-md-10 mb-30"},s.createElement("h2",{className:"s-head text-center mb-30"},"My Role"),s.createElement("p",{className:"mb-20"},"I had the pleasure of taking this project from start to finish. I was responsible for all planning, strategy, design, testing, documentation, and handoff."))),s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col-lg-10 col-md-10 mt-30"},s.createElement("img",{src:"/img/case-studies/data-my-role.png",alt:"Planning, UX strategy, design, testing, documentation, and handoff"})))));var o=()=>s.createElement("section",{className:"app-services section-padding fc-lbg-dark-gray min-area"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col-lg-7 col-md-10"},s.createElement("div",{className:"s-head mb-80"},s.createElement("h2",{className:"mb-30 text-center"},"Related Research"),s.createElement("p",null,"To kickoff this project, I leveraged research that had been completed as part of the redesign as a whole.")))),s.createElement("div",{className:"row"},s.createElement("div",{className:"col-lg-4 col-md-6"},s.createElement("div",{className:"item mb-30"},s.createElement("div",{className:"mb-10"},s.createElement("div",{className:"fc-icon"},s.createElement("img",{src:"/img/case-studies/research-competitive-analysis.svg",alt:" "})),s.createElement("div",{className:"text-tit"},s.createElement("h5",null,"Competitive Analysis"))),s.createElement("p",null,"In-depth analysis of 9 competitors & 47 features"))),s.createElement("div",{className:"col-lg-4 col-md-6"},s.createElement("div",{className:"item mb-30"},s.createElement("div",{className:"mb-10"},s.createElement("div",{className:"fc-icon"},s.createElement("img",{src:"/img/case-studies/research-heuristics-evaluation.svg",alt:" "})),s.createElement("div",{className:"text-tit"},s.createElement("h5",null,"Heatmap Analysis"))),s.createElement("p",null,"Analysis of in-app user behavior & key interaction points"))),s.createElement("div",{className:"col-lg-4 col-md-6"},s.createElement("div",{className:"item mb-30"},s.createElement("div",{className:"mb-10"},s.createElement("div",{className:"fc-icon"},s.createElement("img",{src:"/img/case-studies/research-contextual-inquires.svg",alt:" "})),s.createElement("div",{className:"text-tit"},s.createElement("h5",null,"Contextual Inquires"))),s.createElement("p",null,"Series of 6 interviews & analysis of themes")))),s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col-lg-7 col-md-10"},s.createElement("div",{className:"caption text-center mt-20"},s.createElement("a",{href:"#0",className:"butn-bord-dark rounded buton mt-30"},s.createElement("span",null,"View All Research")))))));var d=()=>s.createElement("section",{className:"serv-block section-padding"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col-lg-7 col-md-10 mb-30"},s.createElement("h2",{className:"s-head text-center mb-30"},"Initial Sketches & Wireframes"),s.createElement("p",{className:"mb-20"},"I went through several iterations of initial concept drawings to visualize multiple solutions to the problem."),s.createElement("p",{className:"mb-20"},"I then translated three options to wireframes. These were reviewed by leadership to confirm direction, then I met with our engineers to identify technical constraints."))),s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col-lg-10 col-md-10 text-center"},s.createElement("img",{src:"/img/case-studies/data-initial-sketches.png",alt:"simplistic pencil sketches of features and layouts"})))));var u=()=>s.createElement("section",{className:"serv-block section-padding fc-lbg-dark-gray min-area"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-lg-6"},s.createElement("div",{className:"mb-20"},s.createElement("h2",{className:"mb-30 text-center"},"Initial Iterations"),s.createElement("p",{className:"mb-20"},"I started with lofi concepts. These were done in tandem with the ",s.createElement("a",{href:""},"visual language")," stage of the MyEverBright redesign."),s.createElement("p",{className:"mb-20"},"This allowed me to get a head start on visualizing this feature while gaining valuable stakeholder feedback.                 "))),s.createElement("div",{className:"col-lg-6 valign text-center"},s.createElement("img",{src:"/img/case-studies/data-initial-iterations.png",alt:"three snapshots of early design concepts"})))));var g=()=>s.createElement("section",{className:"serv-block section-padding"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col-lg-7 col-md-10 mb-30"},s.createElement("h2",{className:"s-head text-center mb-30"},"Usability & AB Testing"),s.createElement("p",{className:"mb-20"},"With my direction defined, I created 3 unique iterations of the feature, each solving the same problem in a different way."),s.createElement("p",{className:"mb-20"},"Useberry was used to test these 3 iterations against each-other. Each test consisted of measurable actions to complete (quantitative), and a survey to gauge how users perceived the tasks (qualitative)."))),s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col-lg-12 col-md-10"},s.createElement("img",{src:"/img/case-studies/data-usability-testing.png",alt:"snapshots of three iterations, each showing a different way to explore the same dataset"})))));var h=()=>s.createElement("section",{className:"serv-block section-padding fc-lbg-dark-gray min-area"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-lg-6"},s.createElement("div",{className:"mb-20"},s.createElement("h2",{className:"mb-30 center-small "},"Final  Iteration"),s.createElement("p",{className:"mb-20"},"Using the data from our test, I created a final iteration of the data monitoring feature."),s.createElement("p",{className:"mb-20"},"Next, I met with our stakeholders and engineers to confirm scope and build out the timeline for development and launch."))),s.createElement("div",{className:"col-lg-6 valign text-center"},s.createElement("img",{src:"/img/case-studies/data-final-iteration.png",alt:"four snapshots of system data feature, each snapshot showcasing a different set of data",className:"img-width-large"})))));var E=()=>s.createElement("section",{className:"serv-block section-padding min-area"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row justify-content-center"},s.createElement("div",{className:"col-lg-10 col-md-10 mb-30"},s.createElement("h2",{className:"s-head mb-60 center-small"},"Key Features"))),s.createElement("div",{className:"row mb-100"},s.createElement("div",{className:"col-lg-5 offset-lg-1"},s.createElement("h4",{className:"mb-20 center-small"},"Clear and Approachable Data"),s.createElement("p",{className:"mb-20"},"To minimize cognitive load, the 4 data sets were broken into separate sections with color coordination to help ease cognitive load."),s.createElement("p",{className:"mb-20"},"To help users see the relationship between data, a subtle animation was added to transitions between datasets.")),s.createElement("div",{className:"col-lg-5 offset-rg-1 center-small"},s.createElement("img",{src:"/img/case-studies/data-clear-easy.png",alt:"two snapshots showcasing clean user interface with simplified data charts that are easy to understand",className:"img-width-medium"}))),s.createElement("div",{className:"row mb-100"},s.createElement("div",{className:"col-lg-5 offset-lg-1"},s.createElement("h4",{className:"mb-20 center-small"},"Multiple Routes to Success "),s.createElement("p",{className:"mb-20"},"My goal with this feature was to give users maximal control with minimal UI complexity."),s.createElement("p",{className:"mb-20"},"To achieve this, I gave high visibility to the easiest interactions, while allowing more robust tools to be discovered via interaction.")),s.createElement("div",{className:"col-lg-5 offset-rg-1 center-small"},s.createElement("img",{src:"/img/case-studies/data-multiple-routes.png",alt:"A user can choose custom dates and tap on graph to get exact data points",className:"img-width-medium"}))),s.createElement("div",{className:"row mb-100"},s.createElement("div",{className:"col-lg-5 offset-lg-1"},s.createElement("h4",{className:"mb-20 center-small"},"Native Mobile Optimization "),s.createElement("p",{className:"mb-20"},"I wanted this feature to feel natural on both Android and iOS devices, so I worked with our engineers to modify native modules."),s.createElement("p",{className:"mb-20"},"This also cut down on the total custom components needed, which saved our engineers a lot of time.")),s.createElement("div",{className:"col-lg-5 offset-rg-1 center-small"},s.createElement("img",{src:"/img/case-studies/data-native-optimization.png",alt:"two snapshots of the same design. One uses a native ios date selector and the other android\r ",className:"img-width-medium"}))),s.createElement("div",{className:"row"},s.createElement("div",{className:"col-lg-5 offset-lg-1"},s.createElement("h4",{className:"mb-20 center-small"},"Coloration & Continuity "),s.createElement("p",{className:"mb-20"},"To help with ease of comprehension, I used coloration to differentiate data sets and connect them to their counter-parts on the ",s.createElement("a",{href:""},"Real-Time Power Flow")," chart."),s.createElement("p",{className:"mb-20"},"I also ensured a pause button was included on launch so that users had control over the live animations.")),s.createElement("div",{className:"col-lg-5 offset-rg-1 center-small"},s.createElement("img",{src:"/img/case-studies/data-coloration-continuity.png",alt:"snapshots of how datasets appear with various color deficiencies",className:"img-width-large"})))));var p=()=>s.createElement("section",{className:"serv-block section-padding fc-lbg-dark-gray min-area"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-lg-6"},s.createElement("div",{className:"mb-20"},s.createElement("h2",{className:"mb-30 center-small"},"Documentation & Handoff"),s.createElement("p",{className:"mb-20"},"To help set our engineers up for success, I made our documentation as thorough as time allowed."),s.createElement("p",{className:"mb-20"},"I included overviews, formula breakdowns, and annotated mockups for each element of the design."),s.createElement("p",{className:"mb-20"},"Afterwards I met with the dev team at regular intervals to answer questions and give design feedback."))),s.createElement("div",{className:"col-lg-6 valign text-center"},s.createElement("img",{src:"/img/case-studies/data-documentation-handoff.png",alt:"detailed hand-off showing exact specifications for touch behaviors and chart specifications"})))));var v=()=>s.createElement("section",{className:"serv-block section-padding min-area"},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-lg-6"},s.createElement("div",{className:"mb-20"},s.createElement("h2",{className:"mb-30 center-small"},"Application"),s.createElement("p",{className:"mb-20"},"This was the final key feature in our complete redesign of the MyEverBright application."),s.createElement("p",{className:"mb-20"},"Next we set up analytics and created a plan for future data-centric iterations"),s.createElement("div",{className:"center-small"},s.createElement("a",{href:"#0",className:"butn-bord-dark rounded buton mt-30"},s.createElement("span",null,"Back to Main Case Study"))))),s.createElement("div",{className:"col-lg-6 valign"},s.createElement("img",{src:"/img/case-studies/research-next-steps.png",alt:" "}))))),f=a(711);const N=()=>s.createElement(s.Fragment,null,s.createElement("title",null,"Vie - Contact Dark"));var b=()=>{const e=s.useRef(null);return s.useEffect((()=>{document.querySelector("body").classList.add("contact-page");var t=e.current;return window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(()=>{window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")})),()=>{document.querySelector("body").classList.remove("contact-page")}}),[e]),s.createElement(l.Z,{mobileappstyle:!0,customstyle:!0},s.createElement(n.Z,{navbarRef:e}),s.createElement(c,null),s.createElement(r,null),s.createElement(i,null),s.createElement(m,null),s.createElement(o,{style:"4item"}),s.createElement(d,null),s.createElement(u,null),s.createElement(g,null),s.createElement(h,null),s.createElement(E,null),s.createElement(p,null),s.createElement(v,null),s.createElement(f.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-case-studies-myeverbright-data-monitoring-charts-jsx-467faad02b86d137d7ca.js.map