webpackJsonp([3],{"+ptz":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-header"},[e("section",{staticClass:"container-fluid bg-ac-lineup border-bottom-yellow"},[e("div",{staticClass:"row bg-color-yellow"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.didSubmitInterest?e("div",{key:"didSubmitInterest",staticClass:"col-12 col-md-10 offset-md-1 px-4 py-4"},[e("strong",[t._v("Thank you for sharing.")]),t._v(" We look forward to seeing you at AgileCamp 2018!\n          ")]):e("div",{staticClass:"col-12 col-md-10 offset-md-1 px-4 py-4"},[e("div",{staticClass:"form-group row",class:t.interestEmailError?"has-danger":""},[e("div",{staticClass:"col-12"},[e("label",{staticClass:"h4",attrs:{for:"interestEmail"}},[t._v("Tell me about AgileCamp 2018!")])]),e("div",{staticClass:"col-12 col-md-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.interestEmail,expression:"interestEmail"}],staticClass:"form-control form-control-danger",attrs:{type:"email",id:"interestEmail",placeholder:"Email address"},domProps:{value:t.interestEmail},on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key))return null;t.submitInterest(s)},input:function(s){s.target.composing||(t.interestEmail=s.target.value)}}})]),e("div",{staticClass:"col-12 col-md-6"},[t.interestEmailError?e("div",{staticClass:"form-control-feedback"},[t._v(t._s(t.interestEmailError))]):e("div",{staticClass:"form-text text-muted"},[t._v("It’s okay, we’ll never share this.")])])]),e("fieldset",{staticClass:"form-group row"},[e("div",{staticClass:"form-check col-sm-12"},[e("label",{staticClass:"form-check-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.interestOpts.dates,expression:"interestOpts.dates"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"yes","false-value":"no"},domProps:{checked:Array.isArray(t.interestOpts.dates)?t._i(t.interestOpts.dates,null)>-1:t._q(t.interestOpts.dates,"yes")},on:{change:function(s){var e=t.interestOpts.dates,a=s.target,i=a.checked?"yes":"no";if(Array.isArray(e)){var o=t._i(e,null);a.checked?o<0&&(t.interestOpts.dates=e.concat([null])):o>-1&&(t.interestOpts.dates=e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.interestOpts,"dates",i)}}}),t._v("\n                  Notify me of the dates\n                ")])]),e("div",{staticClass:"form-check col-sm-12"},[e("label",{staticClass:"form-check-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.interestOpts.speaker,expression:"interestOpts.speaker"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"yes","false-value":"no"},domProps:{checked:Array.isArray(t.interestOpts.speaker)?t._i(t.interestOpts.speaker,null)>-1:t._q(t.interestOpts.speaker,"yes")},on:{change:function(s){var e=t.interestOpts.speaker,a=s.target,i=a.checked?"yes":"no";if(Array.isArray(e)){var o=t._i(e,null);a.checked?o<0&&(t.interestOpts.speaker=e.concat([null])):o>-1&&(t.interestOpts.speaker=e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.interestOpts,"speaker",i)}}}),t._v("\n                  I’m interested in speaker registration\n                ")])]),e("div",{staticClass:"form-check col-sm-12"},[e("label",{staticClass:"form-check-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.interestOpts.opportunities,expression:"interestOpts.opportunities"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"yes","false-value":"no"},domProps:{checked:Array.isArray(t.interestOpts.opportunities)?t._i(t.interestOpts.opportunities,null)>-1:t._q(t.interestOpts.opportunities,"yes")},on:{change:function(s){var e=t.interestOpts.opportunities,a=s.target,i=a.checked?"yes":"no";if(Array.isArray(e)){var o=t._i(e,null);a.checked?o<0&&(t.interestOpts.opportunities=e.concat([null])):o>-1&&(t.interestOpts.opportunities=e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.interestOpts,"opportunities",i)}}}),t._v("\n                  I’m interested in sponsorship/partnership opportunities\n                ")])]),e("div",{staticClass:"form-check col-sm-12"},[e("label",{staticClass:"form-check-label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.interestOpts.city,expression:"interestOpts.city"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":"yes","false-value":"no"},domProps:{checked:Array.isArray(t.interestOpts.city)?t._i(t.interestOpts.city,null)>-1:t._q(t.interestOpts.city,"yes")},on:{change:function(s){var e=t.interestOpts.city,a=s.target,i=a.checked?"yes":"no";if(Array.isArray(e)){var o=t._i(e,null);a.checked?o<0&&(t.interestOpts.city=e.concat([null])):o>-1&&(t.interestOpts.city=e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.interestOpts,"city",i)}}}),t._v("\n                  I want AgileCamp in my city\n                ")])])]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.submitInterest}},[t._v("Submit")])])])],1),t._m(0),e("div",{staticClass:"row px-2 py-2"},[e("div",{staticClass:"col-12 py-2"},[e("router-link",{staticClass:"color-green",attrs:{to:"northwest"}},[e("h1",{staticClass:"display-2 text-uppercase font-family-oswald-400"},[e("span",{staticClass:"bg-inverse text-white small rotate-ccw-10 p-2",staticStyle:{opacity:".9",position:"absolute",left:"2em","font-size":"30%"}},[t._v("SOLD OUT")]),t._v(" Northwest")]),e("h2",{staticClass:"font-weight-bold ml-1"},[t._v("September 6th, 2017")])])],1),e("div",{staticClass:"col-12 py-2"},[e("router-link",{staticClass:"color-teal",attrs:{to:"new-york-metro"}},[e("h1",{staticClass:"display-2 text-uppercase font-family-oswald-400"},[e("span",{staticClass:"bg-inverse text-white small rotate-ccw-10 p-2",staticStyle:{opacity:".9",position:"absolute",left:"2em","font-size":"30%"}},[t._v("SOLD OUT")]),t._v(" New York Metro")]),e("h2",{staticClass:"font-weight-bold ml-1"},[t._v("September 25th, 2017")])])],1),e("div",{staticClass:"col-12 py-2"},[e("router-link",{staticClass:"color-orange",attrs:{to:"silicon-valley"}},[e("h1",{staticClass:"display-2 text-uppercase font-family-oswald-400"},[t._v("Silicon Valley")]),e("h2",{staticClass:"font-weight-bold ml-1"},[t._v("November 6th, 2017")])])],1),e("div",{staticClass:"col-12 py-2"},[e("router-link",{staticClass:"color-blue",attrs:{to:"dallas"}},[e("h1",{staticClass:"display-2 text-uppercase font-family-oswald-400"},[t._v("Dallas")]),e("h2",{staticClass:"font-weight-bold ml-1"},[t._v("December 1st, 2017")])])],1)])]),e("div",{staticClass:"bg-color-gray"},[e("section",{staticClass:"container py-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"text-center"},[t._v("Discover AgileCamp")]),t._m(1),e("p",{staticClass:"lead text-center"},[t._v("\n              Agile and Lean practitioners of all levels have something to learn at AgileCamp\n            ")]),t._m(2),e("p",{staticClass:"lead text-center"},[t._v("\n              Attend an upcoming AgileCamp now to take your Agile and Lean practices to the next level.\n              Learn about the tools and techniques from experienced Agile coaches and watch your team succeed.\n              You can also contribute to the Agile community by signing up to be a "),e("a",{attrs:{href:""},on:{click:function(s){s.preventDefault(),t.scrollToId("speakerSection")}}},[t._v("Speaker")]),t._v(" or "),e("a",{attrs:{href:""},on:{click:function(s){s.preventDefault(),t.scrollToId("sponsorSection")}}},[t._v("Sponsor")]),t._v(" at AgileCamp.\n            ")])])])])]),e("div",{staticClass:"bg-color-gray-lt-2"},[e("section",{staticClass:"container py-4",attrs:{id:"speakerSection"}},[t._m(3),e("div",{staticClass:"row text-white"},[e("div",{staticClass:"col-12 col-md-6 py-2"},[e("p",{staticClass:"body-copy"},[t._v("\n              Speaking at AgileCamp is a great way to contribute and make an impact on the Agile and Lean community!\n              Let us know how you’re shaping the future of Agile tools and methodologies and share your message.\n              Talks range on a variety of topics, and for a better idea, check out examples of past keynotes below.\n            ")]),e("p",[e("a",{staticClass:"text-info",attrs:{target:"_blank",href:t.speakerResLink}},[t._v("Submit your application")]),t._v(" to become a speaker at AgileCamp 2017 now!\n            ")])]),e("div",{staticClass:"col-12 col-md-4 offset-md-1 py-2 text-center"},[e("h3",{staticClass:"text-uppercase"},[t._v("Resources")]),e("ul",{staticClass:"nav flex-column align-items-stretch"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link bg-info text-white",attrs:{target:"_blank",href:t.speakerResLink}},[t._v("Fill out the 2017 speaker application")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link bg-inverse text-white",attrs:{href:t.emailLink},on:{click:function(s){t.trackContact(t.emailLink,"speakerResources")}}},[t._v("Contact us with any questions")])])])])])])]),e("div",{staticClass:"bg-color-white"},[e("section",{staticClass:"container py-4"},[t._m(4),e("div",{staticClass:"row py-2"},t._l(t.shownKeynotes,function(s){return e("div",{staticClass:"col-12 col-sm-4 py-sm-2"},[s.videoId?e("you-tube-card",{key:s.videoId,attrs:{"video-id":s.videoId,title:s.title}}):e("div",{staticClass:"card card-inverse"},[e("div",{staticClass:"embed-responsive embed-responsive-16by9 bg-color-black text-center"},[e("div",{staticClass:"card-block embed-responsive-item d-flex flex-column justify-content-center align-items-center text-center"},[e("p",{staticClass:"card-text small"},[t._v(t._s(s.title))])])])])],1)})),t.hasMoreKeynotes?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 py-2 text-center"},[e("button",{staticClass:"btn btn-lg btn-info",attrs:{type:"button"},on:{click:t.showAllKeynotes}},[t._v("Show All")])])]):t._e()])]),e("div",{staticClass:"bg-color-gray-lt-1"},[e("section",{staticClass:"container py-4",attrs:{id:"sponsorSection"}},[t._m(5),e("div",{staticClass:"row text-white"},[e("div",{staticClass:"col-12 col-md-6 py-2"},[e("p",{staticClass:"body-copy"},[t._v("\n              AgileCamp can’t happen without our sponsors.\n              To find out more about current sponsorship opportunities like exhibition booths, branded communications and custom engagements, please download our "),e("a",{staticClass:"text-success",attrs:{target:"_blank",href:t.sponsorResLink}},[t._v("Sponsorship Program")]),t._v(" guide.\n            ")]),e("p",{staticClass:"body-copy"},[t._v("\n              AgileCamp attracts industry leading professionals and the next generation of leaders, making it the perfect place to promote your company or product!\n            ")])]),e("div",{staticClass:"col-12 col-md-4 offset-md-1 py-2 text-center"},[e("h3",{staticClass:"text-uppercase"},[t._v("Resources")]),e("ul",{staticClass:"nav flex-column align-items-stretch"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link bg-success text-white",attrs:{target:"_blank",href:t.sponsorResLink}},[t._v("Download the 2017 sponsor guide")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link bg-inverse text-white",attrs:{href:t.emailLink},on:{click:function(s){t.trackContact(t.emailLink,"sponsorResources")}}},[t._v("Contact us with any questions")])])])])]),t._m(6)])]),e("div",{staticClass:"bg-color-white"},[e("section",{staticClass:"container py-4"},[e("div",{staticClass:"row"},[t._m(7),t._m(8),e("div",{staticClass:"col-12 col-md-10 offset-md-1 py-2"},[e("div",{staticClass:"card-group my-4"},[e("you-tube-card",{attrs:{"video-id":"zmxeoq5kOMw"}}),e("you-tube-card",{attrs:{"video-id":"v72vqLSDF6s"}})],1)])])])]),e("contact-section",{attrs:{"class-left":"bg-color-green-dk-2","class-right":"bg-color-green-dk-1"}})],1)},i=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row bg-color-gray-lt-2 text-white"},[s("div",{staticClass:"col-12 font-weight-bold text-center text-uppercase px-2 py-2"},[this._v("\n          Last Year’s Lineup\n        ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card my-4 card-inverse card-primary"},[s("div",{staticClass:"card-block"},[s("p",{staticClass:"card-title lead"},[this._v("\n                  AgileCamp is the industry’s leading Agile and Lean Practices conference!\n                ")]),s("p",{staticClass:"card-text body-copy"},[this._v("\n                  AgileCamps take place across the country, bringing together professionals from the Agile community for a day of exciting education, activities and networking.\n                  Presentations are led by Agile experts and touch on the newest tools and Agile methodologies.\n                  Activities are exciting workshops that put techniques to the test and advance professional skills.\n                  While receptions and breaks bring the Agile community together for a valuable opportunity to network with industry leading professionals.\n                ")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-group bg-ac-levels my-4"},[e("div",{staticClass:"card bg-none"},[e("div",{staticClass:"card-block"},[e("p",{staticClass:"card-title"},[t._v("Novices")]),e("p",{staticClass:"card-text small"},[t._v("Learn the basics of Agile and Lean")])])]),e("div",{staticClass:"card bg-none"},[e("div",{staticClass:"card-block"},[e("p",{staticClass:"card-title"},[t._v("Practitioners")]),e("p",{staticClass:"card-text small"},[t._v("Learn new Agile skills, tools and techniques")])])]),e("div",{staticClass:"card bg-none"},[e("div",{staticClass:"card-block"},[e("p",{staticClass:"card-title"},[t._v("Experts")]),e("p",{staticClass:"card-text small"},[t._v("Become a better leader and Agile coach")])])]),e("div",{staticClass:"card bg-none"},[e("div",{staticClass:"card-block"},[e("p",{staticClass:"card-title"},[t._v("Executives")]),e("p",{staticClass:"card-text small"},[t._v("Develop an Agile company strategy and culture")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"display-3 text-white"},[this._v("Become a Speaker")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 py-2 text-center"},[s("h1",[this._v("Past Keynotes")]),s("p",{staticClass:"body-copy"},[this._v("\n              To give you an idea about our conferences, in years past, our world-class speakers have included:\n            ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"display-3 text-white"},[this._v("Become a Sponsor")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 py-2 d-flex flex-row flex-nowrap align-items-center"},[s("a",{staticClass:"mx-2",attrs:{href:"http://nike.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("kw2w")}})]),s("a",{staticClass:"mx-1",attrs:{href:"https://www.prudential.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("yzia")}})]),s("a",{staticClass:"mx-2",attrs:{href:"http://hyperdriveagile.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("HIx7")}})]),s("a",{staticClass:"mx-4",attrs:{href:"http://www.brattoninc.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("kw7K")}})])]),s("div",{staticClass:"col-sm-12 py-2 d-flex flex-row flex-nowrap align-items-center"},[s("a",{staticClass:"mx-2",attrs:{href:"https://www.intuit.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("1/AF")}})]),s("a",{staticClass:"mx-2",attrs:{href:"https://www.axelos.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("xC6F")}})]),s("a",{staticClass:"mx-2",attrs:{href:"http://www.casthighlight.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("Tm8P")}})]),s("a",{staticClass:"mx-3",attrs:{href:"https://www.digite.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("bBcB")}})])]),s("div",{staticClass:"col-sm-12 py-2 d-flex flex-row flex-nowrap align-items-center"},[s("a",{attrs:{href:"http://improving.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("EZjY")}})]),s("a",{attrs:{href:"https://agilecraft.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("X+jA")}})]),s("a",{staticClass:"mx-2",attrs:{href:"https://agilityhealthradar.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("uPsf")}})]),s("a",{staticClass:"mx-2",attrs:{href:"https://www.northeastern.edu/graduate/",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("/oZ5")}})])]),s("div",{staticClass:"col-sm-12 py-2 d-flex flex-row flex-nowrap align-items-center"},[s("a",{staticClass:"mx-2",attrs:{href:"https://propellerconsulting.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("bY1Z")}})]),s("a",{attrs:{href:"https://www.versionone.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("kvyS")}})]),s("a",{staticClass:"mx-2",attrs:{href:"https://disciplinedagileconsortium.org",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("cw6G")}})]),s("a",{staticClass:"mx-4",attrs:{href:"https://www.daugherty.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("6xx1")}})]),s("a",{attrs:{href:"https://monarchagile.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("mfHs")}})])]),s("div",{staticClass:"col-sm-12 py-2 d-flex flex-row flex-nowrap align-items-center"},[s("a",{staticClass:"mx-2",attrs:{href:"http://www.thei4group.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("NQKx")}})]),s("a",{staticClass:"mx-3",attrs:{href:"http://scottambler.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("xMNv")}})]),s("a",{staticClass:"mx-3",attrs:{href:"https://icagile.com",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("4iF0")}})]),s("a",{staticClass:"mx-2",attrs:{href:"http://www.eliassen.com/agile/",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("K1b3")}})]),s("a",{staticClass:"mx-1",attrs:{href:"https://www.scrumalliance.org",target:"_blank"}},[s("img",{staticClass:"img-fluid",attrs:{src:e("kmT0")}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 py-2 text-center"},[s("h1",[this._v("AgileCamp 2016")]),s("p",{staticClass:"body-copy"},[this._v("\n              Want to learn more about the types of talks and activities that take place at AgileCamp?\n              Check out the 2016 schedules and speaker lineups.\n            ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 py-2"},[s("h1",{staticClass:"display-4 text-center text-uppercase font-family-oswald-400"},[s("a",{staticClass:"text-gray-dark",attrs:{href:"https://agilecampnewyorkmetro2016.sched.com",target:"_blank"}},[this._v("New York Metro")]),this._v(" /\n              "),s("a",{staticClass:"text-gray-dark",attrs:{href:"https://agilecampsiliconvalley2016.sched.com",target:"_blank"}},[this._v("Silicon Valley")]),this._v(" /\n              "),s("a",{staticClass:"text-gray-dark",attrs:{href:"https://agilecampdallas2016.sched.com",target:"_blank"}},[this._v("Dallas")])])])}];a._withStripped=!0;var o={render:a,staticRenderFns:i};s.a=o},"/TYz":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("MX9G"),i=e("+ptz"),o=e("VU/8")(a.a,i.a,!1,null,null,null);o.options.__file="pages/index.vue",s.default=o.exports},"/oZ5":function(t,s,e){t.exports=e.p+"img/sponsor-nupjm-white.883094b.png"},"1/AF":function(t,s,e){t.exports=e.p+"img/sponsor-intuit-white.dc8e995.png"},"4iF0":function(t,s,e){t.exports=e.p+"img/sponsor-ica-white.cd85a0a.png"},"6xx1":function(t,s,e){t.exports=e.p+"img/sponsor-teamdaugherty-white.c58130e.png"},"9QIT":function(t,s,e){"use strict";s.a={props:{title:String,videoId:String},data:function(){return{isLoaded:!1}},computed:{hasTitle:function(){return this.title&&this.title.length>0},imgSrc:function(){return"https://img.youtube.com/vi/"+this.videoId+"/maxresdefault.jpg"},linkSrc:function(){return"https://www.youtube.com/watch?v="+this.videoId},videoSrc:function(){return"https://www.youtube.com/embed/"+this.videoId+"?autoplay=1"}},methods:{load:function(){this.isLoaded=!0,this.$root.$options.$tracker.trackAction("load_video",{title:this.title||"Untitled",video_id:this.videoId})}}}},ESYR:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6 py-4 text-white",class:t.classLeft},[e("h1",{staticClass:"display-3"},[t._v("Contact")]),e("p",{staticClass:"body-copy"},[t._v("\n        Please feel free to contact us with any questions at "),e("a",{staticClass:"text-white",attrs:{href:t.emailLink},on:{click:function(s){t.trackContact(t.emailLink,"contactSection")}}},[t._v("info@agilecamp.org")])])]),e("div",{staticClass:"col-12 col-md-6 py-4 text-white d-flex flex-column justify-content-center align-items-center",class:t.classRight},[e("div",{staticClass:"btn-group"},[e("a",{staticClass:"btn btn-lg btn-outline-secondary text-white",attrs:{target:"_blank",href:t.facebookLink,role:"button"}},[e("i",{staticClass:"fa fa-3x fa-fw fa-facebook-f",attrs:{"aria-hidden":"true"}})]),e("a",{staticClass:"btn btn-lg btn-outline-secondary text-white",attrs:{target:"_blank",href:t.twitterLink,role:"button"}},[e("i",{staticClass:"fa fa-3x fa-fw fa-twitter",attrs:{"aria-hidden":"true"}})]),e("a",{staticClass:"btn btn-lg btn-outline-secondary text-white",attrs:{target:"_blank",href:t.googlePlusLink,role:"button"}},[e("i",{staticClass:"fa fa-3x fa-fw fa-google-plus",attrs:{"aria-hidden":"true"}})])])])])])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};s.a=i},EZjY:function(t,s,e){t.exports=e.p+"img/sponsor-improving-white.b8d443a.png"},HIx7:function(t,s,e){t.exports=e.p+"img/sponsor-hyperdrive-white.8e920a3.png"},K1b3:function(t,s,e){t.exports=e.p+"img/sponsor-eliassengroup-white.dcca2b2.png"},MX9G:function(t,s,e){"use strict";var a=e("oSdE"),i=e("yJXG");s.a={components:{ContactSection:a.a,YouTubeCard:i.a},data:function(){return{didSubmitInterest:!1,interestEmail:"",interestEmailError:null,interestOpts:{city:"no",dates:"yes",opportunities:"no",speaker:"no"},emailLink:"mailto:info@agilecamp.org",facebookLink:"https://www.facebook.com/agilecamp",googlePlusLink:"https://plus.google.com/114873923413909280996/about",twitterLink:"https://twitter.com/goagilecamp",speakerResLink:"https://goo.gl/forms/9EObArOLmQTC1UTV2",sponsorResLink:"https://drive.google.com/file/d/0B5TIEzT0DaqFYlhaSWs2QzhaclE/view",keynotesToShow:3,keynotes:[{videoId:"4dUbvQ3Dl1E",title:"David Marquet, bestselling author of Turn the Ship Around, Captain (ret) of the USS Sante Fe"},{videoId:"o9lpvMU-e38",title:"Mamie Jones, SVP at Intuit"},{videoId:"gDwAbMo5wpI",title:"Mark Randall, VP of Creativity at Adobe"},{videoId:"",title:"Ken Rubin, author of Essential Scrum"},{videoId:"wjU94YKKu1k",title:"Rich Sheridan, author of Joy, Inc. and founder of Menlo Innovations"},{videoId:"",title:"James Baresse, CTO at PayPal"},{videoId:"",title:"Mark Cauwels, CTO at Capital One"},{videoId:"4aWcchmMCE0",title:"Luke Hohmann, author of Innovation Games"},{videoId:"W0BDr1jHZ18",title:"David Anderson, author of Kanban"},{videoId:"v2ODRdh43sQ",title:"Jeff Sutherland, Co-creator of Scrum"},{videoId:"6nmvB8khVyo",title:"Jeff Gothelf, author of Sense & Respond and Lean UX"},{videoId:"8lDisTuLYMo",title:"Jurgen Appelo, author of Management 3.0"}]}},computed:{hasMoreKeynotes:function(){return this.keynotes.length>this.keynotesToShow},shownKeynotes:function(){return this.keynotes.slice(0,this.keynotesToShow)}},methods:{showAllKeynotes:function(){this.keynotesToShow=this.keynotes.length,this.$root.$options.$tracker.trackAction("show_all_keynotes")},submitInterest:function(){var t=this.interestEmail;/\S+@\S+\.\S+/.test(t)?(this.$root.$options.$tracker.identify({email:t}),this.$root.$options.$tracker.trackAction("interest",this.interestOpts),this.didSubmitInterest=!0):this.interestEmailError="Sorry, that doesn’t look like a valid email address."}},watch:{interestEmail:function(){this.interestEmailError=null}}}},NQKx:function(t,s,e){t.exports=e.p+"img/sponsor-i4group-white.3fee993.png"},PxrU:function(t,s,e){"use strict";s.a={props:{classLeft:String,classRight:String},data:function(){return{emailLink:"mailto:info@agilecamp.org",facebookLink:"https://www.facebook.com/agilecamp",googlePlusLink:"https://plus.google.com/114873923413909280996/about",twitterLink:"https://twitter.com/goagilecamp"}}}},Tm8P:function(t,s,e){t.exports=e.p+"img/sponsor-casthighlight-white.6f4defe.png"},"X+jA":function(t,s,e){t.exports=e.p+"img/sponsor-agilecraft-white.8361c64.png"},bBcB:function(t,s,e){t.exports=e.p+"img/sponsor-digite-white.3749f6c.png"},bY1Z:function(t,s,e){t.exports=e.p+"img/sponsor-propeller-white.d679a77.png"},cw6G:function(t,s,e){t.exports=e.p+"img/sponsor-dac-white.a0181c7.png"},kmT0:function(t,s,e){t.exports=e.p+"img/sponsor-scrumalliance-white.785b86c.png"},kvyS:function(t,s,e){t.exports=e.p+"img/sponsor-versionone-white.d9c6966.png"},kw2w:function(t,s,e){t.exports=e.p+"img/sponsor-nike-white.0c84e53.png"},kw7K:function(t,s,e){t.exports=e.p+"img/sponsor-bratton-white.1d95c70.png"},mfHs:function(t,s,e){t.exports=e.p+"img/sponsor-monarch-white.431d234.png"},oErh:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card card-inverse"},[e("div",{staticClass:"card-img embed-responsive embed-responsive-16by9"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLoaded?e("iframe",{key:"isLoaded",staticClass:"embed-responsive-item",attrs:{src:t.videoSrc,allowfullscreen:""}}):e("img",{key:"isNotLoaded",staticClass:"embed-responsive-item",attrs:{src:t.imgSrc}})])],1),t.isLoaded?t._e():e("div",{staticClass:"card-img-overlay bg-color-black-alpha-60 text-center d-flex flex-column justify-content-center align-items-center"},[t.hasTitle?e("a",{staticClass:"card-link small",attrs:{href:t.linkSrc},on:{click:function(s){s.preventDefault(),t.load(s)}}},[t._v(t._s(t.title))]):e("button",{staticClass:"btn btn-lg btn-info",on:{click:t.load}},[e("i",{staticClass:"fa fa-2x fa-fw fa-play-circle-o",attrs:{"aria-hidden":"true"}})])])])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};s.a=i},oSdE:function(t,s,e){"use strict";var a=e("PxrU"),i=e("ESYR"),o=e("VU/8")(a.a,i.a,!1,null,null,null);o.options.__file="components/ContactSection.vue",s.a=o.exports},uPsf:function(t,s,e){t.exports=e.p+"img/sponsor-agilityhealth-white.126a605.png"},xC6F:function(t,s,e){t.exports=e.p+"img/sponsor-axelos-white.f523693.png"},xMNv:function(t,s,e){t.exports=e.p+"img/sponsor-scottambler-white.36c6df0.png"},yJXG:function(t,s,e){"use strict";var a=e("9QIT"),i=e("oErh"),o=e("VU/8")(a.a,i.a,!1,null,null,null);o.options.__file="components/YouTubeCard.vue",s.a=o.exports},yzia:function(t,s,e){t.exports=e.p+"img/sponsor-prudential-white.9798332.png"}});