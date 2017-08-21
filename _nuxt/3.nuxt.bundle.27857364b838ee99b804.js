webpackJsonp([3],{145:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(179),i=a(180),o=a(17),n=o(e.a,i.a,null,null,null);s.default=n.exports},150:function(t,s,a){"use strict";var e=a(151),i=a(152),o=a(17),n=o(e.a,i.a,null,null,null);s.a=n.exports},151:function(t,s,a){"use strict";s.a={props:{classLeft:String,classRight:String},data:function(){return{emailLink:"mailto:info@agilecamp.org",facebookLink:"https://www.facebook.com/agilecamp",googlePlusLink:"https://plus.google.com/114873923413909280996/about",twitterLink:"https://twitter.com/goagilecamp"}}}},152:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 py-4 text-white",class:t.classLeft},[a("h1",{staticClass:"display-3"},[t._v("Contact")]),a("p",{staticClass:"body-copy"},[t._v("\n        Please feel free to contact us with any questions at "),a("a",{staticClass:"text-white",attrs:{href:t.emailLink}},[t._v("info@agilecamp.org")])])]),a("div",{staticClass:"col-12 col-md-6 py-4 text-white d-flex flex-column justify-content-center align-items-center",class:t.classRight},[a("div",{staticClass:"btn-group"},[a("a",{staticClass:"btn btn-lg btn-outline-secondary text-white",attrs:{target:"_blank",href:t.facebookLink,role:"button"}},[a("i",{staticClass:"fa fa-3x fa-fw fa-facebook-f",attrs:{"aria-hidden":"true"}})]),a("a",{staticClass:"btn btn-lg btn-outline-secondary text-white",attrs:{target:"_blank",href:t.twitterLink,role:"button"}},[a("i",{staticClass:"fa fa-3x fa-fw fa-twitter",attrs:{"aria-hidden":"true"}})]),a("a",{staticClass:"btn btn-lg btn-outline-secondary text-white",attrs:{target:"_blank",href:t.googlePlusLink,role:"button"}},[a("i",{staticClass:"fa fa-3x fa-fw fa-google-plus",attrs:{"aria-hidden":"true"}})])])])])])},i=[],o={render:e,staticRenderFns:i};s.a=o},153:function(t,s,a){"use strict";var e=a(154),i=a(155),o=a(17),n=o(e.a,i.a,null,null,null);s.a=n.exports},154:function(t,s,a){"use strict";s.a={props:{title:String,videoId:String},data:function(){return{isLoaded:!1}},computed:{hasTitle:function(){return this.title&&this.title.length>0},imgSrc:function(){return"https://img.youtube.com/vi/"+this.videoId+"/maxresdefault.jpg"},linkSrc:function(){return"https://www.youtube.com/watch?v="+this.videoId},videoSrc:function(){return"https://www.youtube.com/embed/"+this.videoId+"?autoplay=1"}},methods:{load:function(){this.isLoaded=!0}}}},155:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card card-inverse"},[a("div",{staticClass:"card-img embed-responsive embed-responsive-16by9"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLoaded?a("iframe",{key:"isLoaded",staticClass:"embed-responsive-item",attrs:{src:t.videoSrc,allowfullscreen:""}}):a("img",{key:"isNotLoaded",staticClass:"embed-responsive-item",attrs:{src:t.imgSrc}})])],1),t.isLoaded?t._e():a("div",{staticClass:"card-img-overlay bg-color-black-alpha-60 text-center d-flex flex-column justify-content-center align-items-center"},[t.hasTitle?a("a",{staticClass:"card-link small",attrs:{href:t.linkSrc},on:{click:function(s){s.preventDefault(),t.load(s)}}},[t._v(t._s(t.title))]):a("button",{staticClass:"btn btn-lg btn-info",on:{click:t.load}},[a("i",{staticClass:"fa fa-2x fa-fw fa-play-circle-o",attrs:{"aria-hidden":"true"}})])])])},i=[],o={render:e,staticRenderFns:i};s.a=o},179:function(t,s,a){"use strict";(function(t){var e=a(150),i=a(153),o=t.$;s.a={components:{ContactSection:e.a,YouTubeCard:i.a},data:function(){return{emailLink:"mailto:info@agilecamp.org",facebookLink:"https://www.facebook.com/agilecamp",googlePlusLink:"https://plus.google.com/114873923413909280996/about",twitterLink:"https://twitter.com/goagilecamp",speakerResLink:"https://goo.gl/forms/9EObArOLmQTC1UTV2",sponsorResLink:"https://drive.google.com/file/d/0B5TIEzT0DaqFYlhaSWs2QzhaclE/view",keynotesToShow:3,keynotes:[{videoId:"4dUbvQ3Dl1E",title:"David Marquet, bestselling author of Turn the Ship Around, Captain (ret) of the USS Sante Fe"},{videoId:"o9lpvMU-e38",title:"Mamie Jones, SVP at Intuit"},{videoId:"gDwAbMo5wpI",title:"Mark Randall, VP of Creativity at Adobe"},{videoId:"",title:"Ken Rubin, author of Essential Scrum"},{videoId:"wjU94YKKu1k",title:"Rich Sheridan, author of Joy, Inc. and founder of Menlo Innovations"},{videoId:"",title:"James Baresse, CTO at PayPal"},{videoId:"",title:"Mark Cauwels, CTO at Capital One"},{videoId:"4aWcchmMCE0",title:"Luke Hohmann, author of Innovation Games"},{videoId:"W0BDr1jHZ18",title:"David Anderson, author of Kanban"},{videoId:"v2ODRdh43sQ",title:"Jeff Sutherland, Co-creator of Scrum"},{videoId:"6nmvB8khVyo",title:"Jeff Gothelf, author of Sense & Respond and Lean UX"},{videoId:"8lDisTuLYMo",title:"Jurgen Appelo, author of Management 3.0"}]}},computed:{hasMoreKeynotes:function(){return this.keynotes.length>this.keynotesToShow},shownKeynotes:function(){return this.keynotes.slice(0,this.keynotesToShow)}},methods:{scrollToId:function(t){o("#"+t).velocity("scroll",{duration:500,easing:"swing",offset:-o("header").height()})},showAllKeynotes:function(){this.keynotesToShow=this.keynotes.length}}}}).call(s,a(18))},180:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pt-header"},[a("section",{staticClass:"container-fluid bg-ac-lineup border-bottom-yellow"},[t._m(0),a("div",{staticClass:"row px-2 py-2"},[a("div",{staticClass:"col-12 py-2"},[a("router-link",{staticClass:"color-green",attrs:{to:"northwest"}},[a("h1",{staticClass:"display-2 text-uppercase font-family-oswald-400"},[t._v("Northwest")]),a("h2",{staticClass:"font-weight-bold ml-1"},[t._v("September 6th, 2017")])])],1),a("div",{staticClass:"col-12 py-2"},[a("router-link",{staticClass:"color-teal",attrs:{to:"new-york-metro"}},[a("h1",{staticClass:"display-2 text-uppercase font-family-oswald-400"},[t._v("New York Metro")]),a("h2",{staticClass:"font-weight-bold ml-1"},[t._v("September 25th, 2017")])])],1),a("div",{staticClass:"col-12 py-2"},[a("router-link",{staticClass:"color-orange",attrs:{to:"silicon-valley"}},[a("h1",{staticClass:"display-2 text-uppercase font-family-oswald-400"},[t._v("Silicon Valley")]),a("h2",{staticClass:"font-weight-bold ml-1"},[t._v("November 6th, 2017")])])],1),t._m(1)])]),a("div",{staticClass:"bg-color-gray"},[a("section",{staticClass:"container py-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"text-center"},[t._v("Discover AgileCamp")]),t._m(2),a("p",{staticClass:"lead text-center"},[t._v("\n              Agile and Lean practitioners of all levels have something to learn at AgileCamp\n            ")]),t._m(3),a("p",{staticClass:"lead text-center"},[t._v("\n              Attend an upcoming AgileCamp now to take your Agile and Lean practices to the next level.\n              Learn about the tools and techniques from experienced Agile coaches and watch your team succeed.\n              You can also contribute to the Agile community by signing up to be a "),a("a",{attrs:{href:""},on:{click:function(s){s.preventDefault(),t.scrollToId("speakerSection")}}},[t._v("Speaker")]),t._v(" or "),a("a",{attrs:{href:""},on:{click:function(s){s.preventDefault(),t.scrollToId("sponsorSection")}}},[t._v("Sponsor")]),t._v(" at AgileCamp.\n            ")])])])])]),a("div",{staticClass:"bg-color-gray-lt-2"},[a("section",{staticClass:"container py-4",attrs:{id:"speakerSection"}},[t._m(4),a("div",{staticClass:"row text-white"},[a("div",{staticClass:"col-12 col-md-6 py-2"},[a("p",{staticClass:"body-copy"},[t._v("\n              Speaking at AgileCamp is a great way to contribute and make an impact on the Agile and Lean community!\n              Let us know how you’re shaping the future of Agile tools and methodologies and share your message.\n              Talks range on a variety of topics, and for a better idea, check out examples of past keynotes below.\n            ")]),a("p",[a("a",{staticClass:"text-info",attrs:{target:"_blank",href:t.speakerResLink}},[t._v("Submit your application")]),t._v(" to become a speaker at AgileCamp 2017 now!\n            ")])]),a("div",{staticClass:"col-12 col-md-4 offset-md-1 py-2 text-center"},[a("h3",{staticClass:"text-uppercase"},[t._v("Resources")]),a("ul",{staticClass:"nav flex-column align-items-stretch"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link bg-info text-white",attrs:{target:"_blank",href:t.speakerResLink}},[t._v("Fill out the 2017 speaker application")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link bg-inverse text-white",attrs:{href:t.emailLink}},[t._v("Contact us with any questions")])])])])])])]),a("div",{staticClass:"bg-color-white"},[a("section",{staticClass:"container py-4"},[t._m(5),a("div",{staticClass:"row py-2"},t._l(t.shownKeynotes,function(s){return a("div",{staticClass:"col-12 col-sm-4 py-sm-2"},[s.videoId?a("you-tube-card",{key:s.videoId,attrs:{"video-id":s.videoId,title:s.title}}):a("div",{staticClass:"card card-inverse"},[a("div",{staticClass:"embed-responsive embed-responsive-16by9 bg-color-black text-center"},[a("div",{staticClass:"card-block embed-responsive-item d-flex flex-column justify-content-center align-items-center text-center"},[a("p",{staticClass:"card-text small"},[t._v(t._s(s.title))])])])])],1)})),t.hasMoreKeynotes?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 py-2 text-center"},[a("button",{staticClass:"btn btn-lg btn-info",attrs:{type:"button"},on:{click:t.showAllKeynotes}},[t._v("Show All")])])]):t._e()])]),a("div",{staticClass:"bg-color-gray-lt-1"},[a("section",{staticClass:"container py-4",attrs:{id:"sponsorSection"}},[t._m(6),a("div",{staticClass:"row text-white"},[a("div",{staticClass:"col-12 col-md-6 py-2"},[a("p",{staticClass:"body-copy"},[t._v("\n              AgileCamp can’t happen without our sponsors.\n              To find out more about current sponsorship opportunities like exhibition booths, branded communications and custom engagements, please download our "),a("a",{staticClass:"text-success",attrs:{target:"_blank",href:t.sponsorResLink}},[t._v("Sponsorship Program")]),t._v(" guide.\n            ")]),a("p",{staticClass:"body-copy"},[t._v("\n              AgileCamp attracts industry leading professionals and the next generation of leaders, making it the perfect place to promote your company or product!\n            ")])]),a("div",{staticClass:"col-12 col-md-4 offset-md-1 py-2 text-center"},[a("h3",{staticClass:"text-uppercase"},[t._v("Resources")]),a("ul",{staticClass:"nav flex-column align-items-stretch"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link bg-success text-white",attrs:{target:"_blank",href:t.sponsorResLink}},[t._v("Download the 2017 sponsor guide")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link bg-inverse text-white",attrs:{href:t.emailLink}},[t._v("Contact us with any questions")])])])])]),t._m(7)])]),a("div",{staticClass:"bg-color-white"},[a("section",{staticClass:"container py-4"},[a("div",{staticClass:"row"},[t._m(8),t._m(9),a("div",{staticClass:"col-12 col-md-10 offset-md-1 c py-2"},[a("div",{staticClass:"card-group my-4"},[a("you-tube-card",{attrs:{"video-id":"zmxeoq5kOMw"}}),a("you-tube-card",{attrs:{"video-id":"v72vqLSDF6s"}})],1)])])])]),a("contact-section",{attrs:{"class-left":"bg-color-green-dk-2","class-right":"bg-color-green-dk-1"}})],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row bg-color-yellow"},[a("div",{staticClass:"col-12 font-weight-bold text-center text-uppercase px-2 py-2"},[t._v("\n          The 2017 Lineup\n        ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12 py-2"},[a("a",{staticClass:"color-blue",attrs:{href:"https://www.eventbrite.com/e/agilecamp-dallas-2017-registration-34757472536",target:"_blank"}},[a("h1",{staticClass:"display-2 text-uppercase font-family-oswald-400"},[t._v("Dallas")]),a("h2",{staticClass:"font-weight-bold ml-1"},[t._v("December 1st, 2017"),a("i",{staticClass:"fa fa-fw fa-ticket ml-2",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card my-4 card-inverse card-primary"},[a("div",{staticClass:"card-block"},[a("p",{staticClass:"card-title lead"},[t._v("\n                  AgileCamp is the industry’s leading Agile and Lean Practices conference!\n                ")]),a("p",{staticClass:"card-text body-copy"},[t._v("\n                  AgileCamps take place across the country, bringing together professionals from the Agile community for a day of exciting education, activities and networking.\n                  Presentations are led by Agile experts and touch on the newest tools and Agile methodologies.\n                  Activities are exciting workshops that put techniques to the test and advance professional skills.\n                  While receptions and breaks bring the Agile community together for a valuable opportunity to network with industry leading professionals.\n                ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-group bg-ac-levels my-4"},[a("div",{staticClass:"card bg-none"},[a("div",{staticClass:"card-block"},[a("p",{staticClass:"card-title"},[t._v("Novices")]),a("p",{staticClass:"card-text small"},[t._v("Learn the basics of Agile and Lean")])])]),a("div",{staticClass:"card bg-none"},[a("div",{staticClass:"card-block"},[a("p",{staticClass:"card-title"},[t._v("Practitioners")]),a("p",{staticClass:"card-text small"},[t._v("Learn new Agile skills, tools and techniques")])])]),a("div",{staticClass:"card bg-none"},[a("div",{staticClass:"card-block"},[a("p",{staticClass:"card-title"},[t._v("Experts")]),a("p",{staticClass:"card-text small"},[t._v("Become a better leader and Agile coach")])])]),a("div",{staticClass:"card bg-none"},[a("div",{staticClass:"card-block"},[a("p",{staticClass:"card-title"},[t._v("Executives")]),a("p",{staticClass:"card-text small"},[t._v("Develop an Agile company strategy and culture")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"display-3 text-white"},[t._v("Become a Speaker")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 py-2 text-center"},[a("h1",[t._v("Past Keynotes")]),a("p",{staticClass:"body-copy"},[t._v("\n              To give you an idea about our conferences, in years past, our world-class speakers have included:\n            ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"display-3 text-white"},[t._v("Become a Sponsor")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 py-2 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-2",attrs:{href:"https://www.prudential.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(181)}})]),e("a",{staticClass:"mx-2",attrs:{href:"http://nike.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(182)}})]),e("a",{staticClass:"mx-2",attrs:{href:"http://hyperdriveagile.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(183)}})]),e("a",{staticClass:"mx-2",attrs:{href:"http://www.casthighlight.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(184)}})]),e("a",{staticClass:"mx-2",attrs:{href:"http://www.brattoninc.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(185)}})]),e("a",{staticClass:"mx-2",attrs:{href:"http://improving.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(186)}})]),e("a",{staticClass:"mx-2",attrs:{href:"http://www.thei4group.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(187)}})])]),e("div",{staticClass:"col-sm-12 py-2 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-2",attrs:{href:"https://icagile.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(188)}})]),e("a",{staticClass:"mx-2",attrs:{href:"https://agilecraft.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(189)}})]),e("a",{staticClass:"mx-2",attrs:{href:"https://www.digite.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(190)}})]),e("a",{staticClass:"mx-2",attrs:{href:"https://disciplinedagileconsortium.org",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(191)}})]),e("a",{staticClass:"mx-2",attrs:{href:"https://www.northeastern.edu/graduate/",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(192)}})]),e("a",{staticClass:"mx-2",attrs:{href:"https://propellerconsulting.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(193)}})]),e("a",{staticClass:"mx-2",attrs:{href:"https://www.versionone.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a(194)}})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12 py-2 text-center"},[a("h1",[t._v("AgileCamp 2016")]),a("p",{staticClass:"body-copy"},[t._v("\n              Want to learn more about the types of talks and activities that take place at AgileCamp?\n              Check out the 2016 schedules and speaker lineups.\n            ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-12 py-2"},[a("h1",{staticClass:"display-4 text-center text-uppercase font-family-oswald-400"},[a("a",{staticClass:"text-gray-dark",attrs:{href:"https://agilecampnewyorkmetro2016.sched.com",target:"_blank"}},[t._v("New York Metro")]),t._v(" /\n              "),a("a",{staticClass:"text-gray-dark",attrs:{href:"https://agilecampsiliconvalley2016.sched.com",target:"_blank"}},[t._v("Silicon Valley")]),t._v(" /\n              "),a("a",{staticClass:"text-gray-dark",attrs:{href:"https://agilecampdallas2016.sched.com",target:"_blank"}},[t._v("Dallas")])])])}],o={render:e,staticRenderFns:i};s.a=o},181:function(t,s,a){t.exports=a.p+"img/sponsor-prudential-white.9798332.png"},182:function(t,s,a){t.exports=a.p+"img/sponsor-nike-white.0c84e53.png"},183:function(t,s,a){t.exports=a.p+"img/sponsor-hyperdrive-white.8e920a3.png"},184:function(t,s,a){t.exports=a.p+"img/sponsor-casthighlight-white.6f4defe.png"},185:function(t,s,a){t.exports=a.p+"img/sponsor-bratton-white.1d95c70.png"},186:function(t,s,a){t.exports=a.p+"img/sponsor-improving-white.b8d443a.png"},187:function(t,s,a){t.exports=a.p+"img/sponsor-i4group-white.3fee993.png"},188:function(t,s,a){t.exports=a.p+"img/sponsor-ica-white.cd85a0a.png"},189:function(t,s,a){t.exports=a.p+"img/sponsor-agilecraft-white.8361c64.png"},190:function(t,s,a){t.exports=a.p+"img/sponsor-digite-white.3749f6c.png"},191:function(t,s,a){t.exports=a.p+"img/sponsor-dac-white.a0181c7.png"},192:function(t,s,a){t.exports=a.p+"img/sponsor-nupjm-white.883094b.png"},193:function(t,s,a){t.exports=a.p+"img/sponsor-propeller-white.d679a77.png"},194:function(t,s,a){t.exports=a.p+"img/sponsor-versionone-white.d9c6966.png"}});
//# sourceMappingURL=3.nuxt.bundle.27857364b838ee99b804.js.map