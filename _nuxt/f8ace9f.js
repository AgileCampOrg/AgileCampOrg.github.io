(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{172:function(e,t,n){"use strict";(function(e){n(64),n(65);var r=e.easyXDM;t.a={props:{page:{type:String,required:!0},schedId:{type:String,required:!0}},data:function(){return{isLoading:!0,isTimeout:!1}},mounted:function(){var e=this;if(r){this.timeoutId=setTimeout((function(){e.isLoading=!1,e.isTimeout=!0,delete e.timeoutId}),1e4);var t=this.schedId,n=this.page||"/",o="100%",c=encodeURIComponent(["https","://",t,n,"?iframe=yes&w=",o,"&sidebar=","no","&bg=",!1,"&mobileoff=Y","&ssl=yes","",""].join("")),l=this;this.fullh=200,this.maxh=2500,this.socket=new r.Socket({remote:"https://"+t+"/iframed.html?url="+c,props:{style:{width:o,height:"".concat(this.max,"px")},scrolling:"no"},container:this.$refs.iframe,onMessage:function(e,t){if("string"==typeof e&&e.includes("tip-")){var n=parseInt(e.substr(4));this.container.getElementsByTagName("iframe")[0].style.height="".concat(this.fullh+n,"px")}else if("hidetip"===e)this.container.getElementsByTagName("iframe")[0].style.height="".concat(this.fullh,"px");else if("scrolltop"===e)l.scrollToElement(l.$el);else{var r=parseInt(e);r>0&&(l.isLoading=!1,l.timeoutId&&(clearTimeout(l.timeoutId),delete this.timeoutId),this.fullh=r,this.container.getElementsByTagName("iframe")[0].style.height="".concat(this.fullh,"px"))}}})}},beforeDestroy:function(){this.timeoutId&&(clearTimeout(this.timeoutId),delete this.timeoutId),this.socket&&(this.socket.destroy(),delete this.socket)}}}).call(this,n(23))},173:function(e,t,n){var content=n(176);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("1c692a30",content,!0,{sourceMap:!1})},174:function(e,t,n){"use strict";var r={props:{buttonClass:{default:"btn-secondary",type:String}},data:function(){return{isMoreShown:!1}}},o=(n(175),n(31)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition-group",{attrs:{name:"fade"}},[e.isMoreShown?e._t("default"):e._e()],2),e._v(" "),e.isMoreShown?e._e():n("p",{staticClass:"body-copy"},[n("button",{staticClass:"btn btn-sm px-3",class:e.buttonClass,attrs:{type:"button"},on:{click:function(t){e.isMoreShown=!0}}},[e._v("\n      Read More\n    ")])])],1)}),[],!1,null,"5ca8cb1d",null);t.a=component.exports},175:function(e,t,n){"use strict";n(173)},176:function(e,t,n){var r=n(62)(!1);r.push([e.i,".fade-enter-active[data-v-5ca8cb1d],.fade-leave-active[data-v-5ca8cb1d]{transition:opacity .5s}.fade-enter[data-v-5ca8cb1d],.fade-leave-to[data-v-5ca8cb1d]{opacity:0}",""]),e.exports=r},177:function(e,t,n){"use strict";var r=n(172).a,o=n(31),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"text-center"},[n("i",{staticClass:"fa fa-spinner fa-spin fa-3x fa-fw"})]),e._v(" "),e.isTimeout?e._e():n("div",{ref:"iframe"})])}),[],!1,null,null,null);t.a=component.exports},178:function(e,t,n){"use strict";var r=n(31),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-color-black"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 font-weight-bold text-center text-uppercase text-white px-2 py-2"},[e._v("\n        Past Year’s Lineup\n      ")])])])])}],!1,null,null,null);t.a=component.exports},179:function(e,t,n){e.exports=n.p+"img/speaker-david-marquet-port.52ce8dc.jpg"},182:function(e,t,n){"use strict";var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-12 col-md-3"},[t("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[t("img",{staticClass:"img-fluid",attrs:{src:n(179),alt:"David Marquet"}})])])}],o={components:{ReadMore:n(174).a},props:{textClass:{default:"",type:String}},computed:{bodyClass:function(){return this.textClass||"text-muted"}}},c=n(31),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-2",class:e.textClass,attrs:{id:"speakerDavidMarquet"}},[e._m(0),e._v(" "),n("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[n("h4",{staticClass:"mt-2 mt-md-0"},[e._v("David Marquet")]),e._v(" "),n("p",{staticClass:"body-copy",class:e.bodyClass},[e._v("\n      David Marquet is an expert on leadership and organizational design,\n      former submarine commander, and author of Amazon #1 Best Seller:\n      "),n("em",[e._v("Turn the Ship Around!")]),e._v(" and "),n("em",[e._v("Turn Your Ship Around!")])]),e._v(" "),n("read-more",{class:e.bodyClass},[n("p",{key:"p1",staticClass:"body-copy"},[e._v("\n        David Marquet imagines a work place where everyone engages and\n        contributes their full intellectual capacity, a place where people are\n        healthier and happier because they have more control over their work\n        — a place where everyone is a leader.\n      ")]),e._v(" "),n("p",{key:"p2",staticClass:"body-copy"},[e._v("\n        A 1981 U.S. Naval Academy graduate, Captain Marquet served in the U.S.\n        submarine force for 28 years. After being assigned to command the\n        nuclear powered submarine USS Santa Fe — then ranked last in\n        retention and operational standing — he realized the traditional\n        leadership approach of “take control, give orders,”\n        wouldn’t work. He “turned the ship around” by treating the\n        crew as leaders, not followers, and giving control, not taking\n        control. This approach took the Santa Fe from “worst to\n        first,” achieving the highest retention and operational\n        standings in the navy.\n      ")]),e._v(" "),n("p",{key:"p3",staticClass:"body-copy"},[e._v("\n        After Captain Marquet’s departure, the Santa Fe continued to win\n        awards and promoted a disproportionate number of officers and enlisted\n        men to leadership positions, including ten subsequent submarine\n        captains. Stephen R. Covey said it was the most empowering\n        organization he’d ever seen and wrote about Captain Marquet’s\n        leadership practices in his book, "),n("em",[e._v("The 8th Habit")]),e._v(".\n      ")]),e._v(" "),n("p",{key:"p4",staticClass:"body-copy"},[e._v("\n        Captain Marquet is the author of\n        "),n("em",[e._v("Turn the Ship Around! A True Story of Turning Followers Into\n          Leaders.")]),e._v("\n        Fortune magazine named it the #1 must-read business book of the year,\n        and USA Today listed it as one of the top 12 business books of all\n        time. He is also the author of\n        "),n("em",[e._v("Turn Your Ship Around! A workbook for implementing Intent-Based\n          Leadership.")])]),e._v(" "),n("p",{key:"p5",staticClass:"body-copy"},[e._v("\n        Captain Marquet retired from the Navy in 2009, and now speaks to\n        audiences around the globe who want to create empowering work\n        environments that release the passion, initiative, and intellect of\n        each person. This bold and highly effective framework is summarized as\n        “give control, create leaders.” He is a life member of the\n        Council on Foreign Relations, and in 2015 was named to the American\n        Management Association’s “Leaders to Watch” list.\n      ")])])],1)])}),r,!1,null,null,null);t.a=component.exports},206:function(e,t,n){e.exports=n.p+"img/speaker-jurgen-appello-port.5ed0af7.jpg"},208:function(e,t,n){"use strict";var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-12 col-md-3"},[t("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[t("img",{staticClass:"img-fluid",attrs:{src:n(206),alt:"Jurgen Appello"}})])])}],o={components:{ReadMore:n(174).a},props:{textClass:{default:"",type:String}},computed:{bodyClass:function(){return this.textClass||"text-muted"}}},c=n(31),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-2",class:e.textClass,attrs:{id:"speakerJurgenAppello"}},[e._m(0),e._v(" "),n("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[n("h4",{staticClass:"mt-2 mt-md-0"},[e._v("Jurgen Appelo")]),e._v(" "),n("p",{staticClass:"body-copy",class:e.bodyClass},[e._v("\n      As a serial founder, successful entrepreneur, author and speaker, Jurgen\n      is pioneering management to help creative organizations survive and\n      thrive in the 21st century. He offers concrete games, tools, and\n      practices so you can introduce better management with fewer managers.\n    ")]),e._v(" "),n("read-more",{class:e.bodyClass},[n("p",{key:"p1",staticClass:"body-copy"},[e._v("\n        Inc.com has called him a Top 50 Leadership Expert and a Top 100\n        Leadership Speaker. Since 2008, Jurgen writes a popular blog at\n        NOOP.NL, offering ideas on the creative economy, agile management,\n        organizational change, and personal development.\n      ")]),e._v(" "),n("p",{key:"p2",staticClass:"body-copy"},[e._v("\n        He is the author of the book "),n("em",[e._v("Management 3.0")]),e._v(", which describes\n        the role of the manager in agile organizations. Jurgen has a new book,\n        "),n("em",[e._v("Start-up, Scale-up and Screw-up")]),e._v(" soon to be released in April\n        2019.\n      ")])])],1)])}),r,!1,null,null,null);t.a=component.exports},252:function(e,t,n){e.exports=n.p+"img/header-map-2019-chicago.06e425a.jpg"},253:function(e,t,n){e.exports=n.p+"img/header-2019-chicago.63336a8.jpg"},342:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("span",{staticClass:"text-uppercase mr-2"},[e._v("Chicago")]),e._v(" May 6\n                ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("img",{staticClass:"img-fluid",attrs:{src:n(253)}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row pb-2"},[n("div",{staticClass:"col-12"},[n("h2",{staticClass:"text-uppercase"},[e._v("Featured Speakers")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row pb-2"},[n("div",{staticClass:"col-12"},[n("h2",{staticClass:"text-uppercase"},[e._v("Program")])])])}],o=n(178),c=n(177),l=n(182),d=n(208),h={components:{PastYearLineup:o.a,SchedEmbed:c.a,DavidMarquet:l.a,JurgenAppello:d.a},data:function(){return{event:{address:"Chase Tower, 10 South Dearborn Street, Chicago, Illinois",directionsLink:"https://www.google.com/maps/place/Chase+Tower,+Chicago,+IL+60603/@41.881599,-87.6324337",latLngLiteral:{lat:41.881599,lng:-87.6324337},placeId:"ChIJIYnIarssDogRA43YB818mYU",placeName:"Chase Tower",registerLink:"https://www.eventbrite.com/e/agile-agilecamp-chicago-2019-tickets-55053693078",schedId:"agilecampchicago2019.sched.com",travelDocLink:"https://drive.google.com/file/d/1LSGV2b-k4iwQRz3hgaAkhw2A3B0YV-nc/view"}}},computed:{schedLink:function(){return"https://".concat(this.event.schedId)}}},v=n(31),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"bg-header pt-header pb-4"},[r("div",{staticClass:"bg-header-shape bg-header-shape-red-black"},[r("section",{staticClass:"container pt-header-shape"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-xl-10 offset-xl-1"},[r("div",{staticClass:"row align-items-end"},[r("div",{staticClass:"col-12 col-lg-auto mr-auto pb-2 text-white"},[e._m(0),e._v(" "),r("h5",{staticClass:"font-weight-light font-italic"},[e._v("\n                  "+e._s(e.event.address)+"\n                ")])]),e._v(" "),r("div",{staticClass:"col-auto pb-3"},[r("a",{staticClass:"btn btn-secondary px-4",attrs:{role:"button",href:e.event.registerLink,target:"_blank"}},[e._v("Event Ended")])])])])])]),e._v(" "),r("section",{staticClass:"container-fluid container-auto px-0 pt-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-12 pb-4 d-flex flex-row justify-content-center align-items-center"},[e._m(1),e._v(" "),r("div",{staticClass:"col-5 px-0",staticStyle:{height:"100%"}},[r("a",{attrs:{target:"_blank",href:e.event.directionsLink}},[r("img",{staticClass:"img-fluid",attrs:{src:n(252)}})])])])])]),e._v(" "),r("section",{staticClass:"container pt-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-xl-10 offset-xl-1 pb-4 text-white"},[r("p",{staticClass:"lead font-weight-bold mb-1"},[e._v("\n              Our newest AgileCamp location is in the most vibrant city in the\n              Midwest!\n            ")]),e._v(" "),r("p",{staticClass:"lead"},[e._v("\n              Chicago is a city with a rich history, vibrant food scene,\n              beloved museums, and world-class architecture. The city is\n              buzzing with enriching experiences, which is why we’re thrilled\n              to bring AgileCamp to this magnificent location inside Chase\n              Tower downtown Chicago.\n            ")]),e._v(" "),r("p",{staticClass:"lead"},[e._v("\n              With our\n              "),r("a",{attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.scrollToId("featuredSpeakerSection")}}},[e._v("Keynote Speakers")]),e._v("\n              announced, we are curating an awesome program for you. Our full\n              program will be announced March 1. Meanwhile,\n              "),r("a",{attrs:{href:e.event.registerLink,target:"_blank"}},[e._v("register")]),e._v(" by\n              April 6 to take advantage of early-bird discounts for both\n              individuals and groups!\n            ")])])])])])]),e._v(" "),r("past-year-lineup"),e._v(" "),r("div",{staticClass:"bg-gradient-gray",attrs:{id:"featuredSpeakerSection"}},[r("section",{staticClass:"container py-4"},[e._m(2),e._v(" "),r("david-marquet"),e._v(" "),r("jurgen-appello")],1)]),e._v(" "),r("div",{staticClass:"bg-color-white",attrs:{id:"programSection"}},[r("section",{staticClass:"container py-4"},[e._m(3),e._v(" "),e.event.schedId?r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("sched-embed",{staticClass:"py-2",attrs:{page:"/directory/speakers","sched-id":e.event.schedId}})],1)]):r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 py-2"},[r("p",{staticClass:"lead"},[e._v("2019 is shaping up to be the best AgileCamp yet!")]),e._v(" "),r("p",{staticClass:"lead"},[r("a",{staticClass:"link-underline",attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.navTo("index","pastYearsSection")}}},[e._v("Check out prior")]),e._v("\n            AgileCamps for a sample of all the great speakers and topics\n            discussed.\n          ")])])]),e._v(" "),e.event.schedId?r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 py-4 text-center"},[r("a",{staticClass:"btn btn-secondary px-3",attrs:{href:e.schedLink,target:"_blank"}},[e._v("View the Schedule and Directory")])])]):e._e()])]),e._v(" "),r("div",{attrs:{id:"travelSection"}},[r("section",{staticClass:"container py-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-6 pb-3"},[r("h2",{staticClass:"text-uppercase mb-2"},[e._v("Event Location")]),e._v(" "),r("p",[r("a",{attrs:{href:e.event.directionsLink,target:"_blank"}},[e._v(e._s(e.event.placeName))]),r("br"),e._v("\n            "+e._s(e.event.address)),r("br")]),e._v(" "),r("a",{staticClass:"btn btn-secondary px-3 mx-2 my-2",attrs:{target:"_blank",href:e.event.directionsLink}},[e._v("Map & Directions")]),e._v(" "),r("a",{staticClass:"btn btn-secondary px-3 mx-2 my-2",attrs:{target:"_blank",href:e.event.travelDocLink}},[e._v("Getting Around Guide")])])])])])],1)}),r,!1,null,null,null);t.default=component.exports}}]);