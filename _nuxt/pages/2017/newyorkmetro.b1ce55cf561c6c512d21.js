webpackJsonp([3],{"+XnF":function(t,e,a){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"z-index":"100"}})};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},"+h9W":function(t,e,a){"use strict";e.a={data:function(){return{emailLink:"mailto:info@agilecamp.org"}}}},"3E2H":function(t,e,a){var i=a("uM3Q");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("395722d4",i,!1,{sourceMap:!1})},"4Ffj":function(t,e,a){"use strict";e.a={props:{buttonClass:String},data:function(){return{isMoreShown:!1}}}},A489:function(t,e,a){"use strict";var i=a("Jmdp"),s=a("GJ3E"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/components/SchedEmbed.vue",e.a=n.exports},GJ3E:function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],staticClass:"text-center"},[e("i",{staticClass:"fa fa-spinner fa-spin fa-3x fa-fw"})]),this.isTimeout?this._e():e("div",{ref:"iframe"})])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},GTaI:function(t,e,a){t.exports=a.p+"img/sponsor-hyperdrive.2ecc6ae.png"},GYY1:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition-group",{attrs:{name:"fade"}},[t.isMoreShown?t._t("default"):t._e()],2),t.isMoreShown?t._e():a("p",{staticClass:"body-copy"},[a("button",{staticClass:"btn btn-sm btn-secondary",class:t.buttonClass,attrs:{type:"button"},on:{click:function(e){t.isMoreShown=!0}}},[t._v("Read More")])])],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},I8Xs:function(t,e,a){t.exports=a.p+"img/sponsor-agilecraft.ecae96a.png"},Jmdp:function(t,e,a){"use strict";(function(t){var a=t.easyXDM;e.a={props:{page:String,schedId:String},data:function(){return{isLoading:!0,isTimeout:!1}},mounted:function(){var t=this;if(a){this.timeoutId=setTimeout(function(){t.isLoading=!1,t.isTimeout=!0,delete t.timeoutId},1e4);var e=this.schedId,i=this.page||"/",s="100%",n=encodeURIComponent(["https","://",e,i,"?iframe=yes&w=",s,"&sidebar=","yes","&bg=",!1,"&mobileoff=Y","&ssl=yes","",""].join("")),r=this;this.fullh=200,this.maxh=2500,this.socket=new a.Socket({remote:"https://"+e+"/iframed.html?url="+n,props:{style:{width:s,height:this.max+"px"},scrolling:"no"},container:this.$refs.iframe,onMessage:function(t,e){if("string"==typeof t&&-1!==t.indexOf("tip-")){var a=parseInt(t.substr(4));this.container.getElementsByTagName("iframe")[0].style.height=this.fullh+a+"px"}else if("hidetip"===t)this.container.getElementsByTagName("iframe")[0].style.height=this.fullh+"px";else if("scrolltop"===t)r.scrollToElement(r.$el);else{var i=parseInt(t);i>0&&(r.isLoading=!1,r.timeoutId&&(clearTimeout(r.timeoutId),delete this.timeoutId),this.fullh=i,this.container.getElementsByTagName("iframe")[0].style.height=this.fullh+"px")}}})}},beforeDestroy:function(){this.timeoutId&&(clearTimeout(this.timeoutId),delete this.timeoutId),this.socket&&(this.socket.destroy(),delete this.socket)}}}).call(e,a("DuR2"))},L5vj:function(t,e,a){"use strict";var i=a("obVx"),s=a("+XnF"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/components/GoogleMap.vue",e.a=n.exports},Mfn5:function(t,e,a){t.exports=a.p+"img/sponsor-bratton.f336b19.png"},MjYr:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-header"},[t._m(0),a("div",{staticClass:"bg-color-teal-dk-2 border-bottom-black"},[a("section",{staticClass:"container"},[a("div",{staticClass:"row px-2 py-2"},[t._m(1),a("div",{staticClass:"col-12 py-4 text-center"},[a("p",{staticClass:"body-copy color-white"},[t._v("\n            Join us on September 25th, 2017 for AgileCamp New York Metro!\n            Agilists from across the globe will converge at the "),a("a",{staticClass:"link-underline",attrs:{href:"/"},on:{click:function(e){e.preventDefault(),t.scrollToId("travelSection")}}},[t._v("Prudential Financial Tower")]),t._v(" for a day of learning and networking.\n            Prudential Financial is a proud sponsor of AgileCamp.\n            This year we are excited for keynote presentations from "),a("a",{staticClass:"link-underline",attrs:{href:"/"},on:{click:function(e){e.preventDefault(),t.scrollToId("speakerGeetaWilson")}}},[t._v("Geeta Wilson")]),t._v(", VP, Consumer Experience — Enterprise Transformation at Humana Inc., "),a("a",{staticClass:"link-underline",attrs:{href:"/"},on:{click:function(e){e.preventDefault(),t.scrollToId("speakerDavidMarquet")}}},[t._v("David Marquet")]),t._v(", author and US Navy Captain (Retired), and "),a("a",{staticClass:"link-underline",attrs:{href:"/"},on:{click:function(e){e.preventDefault(),t.scrollToId("speakerRichSheridan")}}},[t._v("Richard Sheridan")]),t._v(", best-selling author of Joy Inc.\n            You’ll also choose from 20 of workshops on Leadership, Product, Leadership, Innovation, Agility and much more.\n            ")])]),a("div",{staticClass:"col-12 py-4 text-center"},[a("a",{staticClass:"btn btn-lg btn-secondary",attrs:{role:"button",href:t.registerLink,target:"_blank"}},[t._v("Sold Out!")])])])])]),a("div",{staticClass:"bg-color-gray-lt-2"},[a("section",{staticClass:"container py-4"},[t._m(2),a("div",{staticClass:"row text-white py-2",attrs:{id:"speakerGeetaWilson"}},[t._m(3),a("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[a("h4",{staticClass:"mt-2 mt-md-0"},[t._v("Geeta Wilson")]),a("p",{staticClass:"body-copy"},[t._v("\n            Geeta Wilson is a highly innovative and transformational Customer Experience and Operational Excellence leader with extensive domestic and international experience in start-ups, Fortune 500 companies such as NCR Corporation, and Humana, a Fortune 100 company.\n          ")]),a("read-more",[a("p",{key:"p1",staticClass:"body-copy"},[t._v("\n              Geeta is the founder of Humana’s FastStart Consumer Experience lab, an enterprise customer-centric movement that challenges convention and corporate routines.\n              Using methods from Lean Start-up, Agile/Scrum, Design Thinking, and Lean Six Sigma to accelerate speed-to-market across all lines of business, the FastStart team has brought its disruptive CX approach to thousands of Humana associates and leaders.\n            ")]),a("p",{key:"p2",staticClass:"body-copy"},[t._v("\n              Geeta has been featured in Forbes, The Wall Street Journal’s CIO Journal, and 1:1 Media.\n              She was recognized by American City Business Journals (Louisville Business First) among its 2017 “People to Know” and by MM&M as one of its 2017 Top 40 Healthcare Transformers.\n            ")]),a("p",{key:"p3",staticClass:"body-copy"},[t._v("\n              The FastStart lab was honored with a 2016 Customer Experience Professionals Association (CXPA) Innovation Award.\n              Geeta’s recent speaking engagements focusing on the consumer experience include Forrester CXNYC 2016 and 2017 conferences, 2016 CXPA Insight Exchange, 2016 Lean Startup conference, and Dreamforce 2016, the largest tech conference in the world.\n            ")])])],1)]),a("div",{staticClass:"row text-white py-2",attrs:{id:"speakerDavidMarquet"}},[t._m(4),a("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[a("h4",{staticClass:"mt-2 mt-md-0"},[t._v("David Marquet")]),t._m(5),a("read-more",[a("p",{key:"p1",staticClass:"body-copy"},[t._v("\n              David Marquet imagines a work place where everyone engages and contributes their full intellectual capacity, a place where people are healthier and happier because they have more control over their work — a place where everyone is a leader.\n            ")]),a("p",{key:"p2",staticClass:"body-copy"},[t._v("\n              A 1981 U.S. Naval Academy graduate, Captain Marquet served in the U.S. submarine force for 28 years.\n              After being assigned to command the nuclear powered submarine USS Santa Fe — then ranked last in retention and operational standing — he realized the traditional leadership approach of “take control, give orders,” wouldn’t work.\n              He “turned the ship around” by treating the crew as leaders, not followers, and giving control, not taking control.\n              This approach took the Santa Fe from “worst to first,” achieving the highest retention and operational standings in the navy.\n            ")]),a("p",{key:"p3",staticClass:"body-copy"},[t._v("\n              After Captain Marquet’s departure, the Santa Fe continued to win awards and promoted a disproportionate number of officers and enlisted men to leadership positions, including ten subsequent submarine captains.\n              Stephen R. Covey said it was the most empowering organization he’d ever seen and wrote about Captain Marquet’s leadership practices in his book, "),a("em",[t._v("The 8th Habit")]),t._v(".\n            ")]),a("p",{key:"p4",staticClass:"body-copy"},[t._v("\n              Captain Marquet is the author of "),a("em",[t._v("Turn the Ship Around! A True Story of Turning Followers Into Leaders.")]),t._v(" Fortune magazine named it the #1 must-read business book of the year, and USA Today listed it as one of the top 12 business books of all time.\n              He is also the author of "),a("em",[t._v("Turn Your Ship Around! A workbook for implementing Intent-Based Leadership.")])]),a("p",{key:"p5",staticClass:"body-copy"},[t._v("\n              Captain Marquet retired from the Navy in 2009, and now speaks to audiences around the globe who want to create empowering work environments that release the passion, initiative, and intellect of each person.\n              This bold and highly effective framework is summarized as “give control, create leaders.”\n              He is a life member of the Council on Foreign Relations, and in 2015 was named to the American Management Association’s “Leaders to Watch” list.\n            ")])])],1)]),a("div",{staticClass:"row text-white py-2",attrs:{id:"speakerRichSheridan"}},[t._m(6),a("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[a("h4",{staticClass:"mt-2 mt-md-0"},[t._v("Rich Sheridan")]),a("p",{staticClass:"body-copy"},[t._v("\n            Menlo Innovations CEO Rich Sheridan had an all consuming thought during a difficult mid-career in the chaotic technology industry... things can be better.\n            Much better.\n            He had to find a way.\n            His search led him to books, authors and history, including recalling childhood visits to Greenfield Village every summer.\n          ")]),a("read-more",[a("p",{key:"p1",staticClass:"body-copy"},[t._v("\n              The excitement of the Edison Menlo Park New Jersey Lab served as his siren call to create a workplace filled with camaraderie, human energy, creativity and productivity.\n              Ultimately, Rich and his co-founder James Goebel invented their own company in 2001 to “end human suffering in the world as it relates to technology” by returning joy to one of the most unique endeavors mankind has ever undertaken: the invention of software.\n              Their unique approach to custom software design, they named it High-tech Anthropology® has produced custom software that delights users rather than frustrating them.\n              The programming team creates the software that works every day without the emergencies that are all too common in the tech industry.\n              The process itself is so interesting that almost 4,000 people a year travel from around the world just to see how they do it.\n              Many spend a week or more studying “The Menlo Way” being taught by the Menlonians who love to share their experience and knowledge.\n            ")]),a("p",{key:"p2",staticClass:"body-copy"},[t._v("\n              In 2013, Rich and his publisher Penguin Random House took a chance that a business book with the words joy and love on the cover might have impact.\n              They had no idea how the world yearned for such a message.\n              His best selling book, "),a("em",[t._v("Joy, Inc. — How We Built a Workplace People Love")]),t._v(" now has Rich traveling the world speaking about joy, creativity, and human energy in the workplace.\n            ")])])],1)])])]),t._m(7),a("div",{staticClass:"bg-color-white"},[a("section",{staticClass:"container py-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12",attrs:{id:"programSection"}},[a("sched-embed",{staticClass:"py-2",attrs:{page:"/directory/speakers","sched-id":t.schedId}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 py-4 text-center"},[a("a",{staticClass:"btn btn-secondary",attrs:{href:t.schedLink,target:"_blank"}},[t._v("View the Schedule and Directory")])])])])]),a("div",{staticClass:"bg-color-gray",attrs:{id:"travelSection"}},[a("section",{staticClass:"container py-4"},[t._m(8),a("div",{staticClass:"row my-4"},[a("div",{staticClass:"col-12 col-md-6 py-2"},[a("h3",{staticClass:"text-uppercase"},[t._v("Event Location")]),a("p",[a("a",{attrs:{href:t.directionsLink,target:"_blank"}},[t._v(t._s(t.placeName))]),a("br"),t._v("\n            655 Broad Street, Newark, New Jersey 07102"),a("br"),t._v("\n            Venue phone: "),a("a",{attrs:{href:"tel:1-973-802-6000"}},[t._v("(973) 802-6000")])]),a("h3",{staticClass:"text-uppercase"},[t._v("Travel")]),a("div",{staticClass:"list-group"},[a("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[t._v("\n              Parking\n              "),0===t.shownTravelIndex?a("div",{staticClass:"small mt-2"},[a("p",[t._v("\n                  For event parking, we recommend utilizing the Newark NJ Parking Military Park Garage at 42-50 Park Place.\n                ")]),t._m(9)]):t._e()])])]),a("div",{staticClass:"col-12 col-md-6 py-2"},[a("google-map",{staticStyle:{height:"460px"},attrs:{icon:"/AgileCamp_map_marker.png","directions-link":t.directionsLink,"lat-lng-literal":t.latLngLiteral,"place-id":t.placeId,title:t.placeName}})],1)])])]),a("div",{staticClass:"bg-color-gray-lt-2"},[a("section",{staticClass:"container py-4"},[a("div",{staticClass:"row text-white"},[a("twitter-timeline",{staticClass:"col-12 col-md-10 offset-md-1 py-2",attrs:{"data-source":t.twitterDataSource,options:t.twitterOptions}})],1)])]),a("div",{staticClass:"bg-color-white"},[a("section",{staticClass:"container py-4"},[t._m(10),t._m(11),t._m(12),t._m(13),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 py-4 text-center"},[a("button",{staticClass:"btn btn-lg btn-secondary",attrs:{type:"button"},on:{click:function(e){t.navTo("index","sponsorSection")}}},[t._v("Sponsor AgileCamp!")])])])])])])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-color-black"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 font-weight-bold text-center text-uppercase text-white px-2 py-2"},[this._v("\n          Past Year’s Lineup\n        ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 py-2 text-center"},[e("h1",{staticClass:"color-white-alpha-50 display-vw-10 text-uppercase font-family-oswald-400"},[this._v("New York Metro")]),e("h2",{staticClass:"color-white display-vw-3 font-weight-bold ml-1"},[this._v("September 25th, 2017")]),e("h2",{staticClass:"color-white-alpha-50 display-vw-4 font-weight-bold ml-1"},[this._v("\n            Prudential Tower Conference Center"),e("br"),this._v("\n            Newark, New Jersey\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"display-4 text-center text-white"},[this._v("Featured Speakers")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-3"},[e("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[e("img",{staticClass:"img-fluid",attrs:{src:a("tEZz"),alt:"Geeta Wilson"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-3"},[e("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[e("img",{staticClass:"img-fluid",attrs:{src:a("mmuO"),alt:"David Marquet"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"body-copy"},[this._v("\n            David Marquet is an expert on leadership and organizational design, former submarine commander, and author of Amazon #1 Best Seller: "),e("em",[this._v("Turn the Ship Around!")]),this._v(" and "),e("em",[this._v("Turn Your Ship Around!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-3"},[e("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[e("img",{staticClass:"img-fluid",attrs:{src:a("OZ+U"),alt:"Rich Sheridan"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-color-teal-dk-2"},[e("section",{staticClass:"container py-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"display-3 text-center text-white"},[this._v("Program")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"text-center"},[this._v("Getting to AgileCamp")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://nycparking.spplus.com/NJ-Newark-Military-Park-42-50-Park-Place.html",target:"_blank"}},[this._v("View Parking Info and Rates")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 py-2"},[e("h1",{staticClass:"text-center"},[this._v("2017 New York Metro Sponsors")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mb-4 border-bottom-black-1"},[e("div",{staticClass:"col-12 col-sm-2"},[e("h3",[e("span",{staticClass:"badge badge-default"},[this._v("Title")])])]),e("div",{staticClass:"col-12 col-sm-6 offset-sm-1 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"https://www.prudential.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a("gB2R")}})])]),e("div",{staticClass:"col-12 col-sm-4 offset-sm-2 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"http://hyperdriveagile.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a("GTaI")}})])]),e("div",{staticClass:"col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"http://www.brattoninc.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a("Mfn5")}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mb-4 border-bottom-black-1"},[e("div",{staticClass:"col-12 col-sm-2"},[e("h3",[e("span",{staticClass:"badge badge-default"},[this._v("Platinum")])])]),e("div",{staticClass:"col-12 col-sm-8 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"http://www.casthighlight.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a("hiia")}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-2"},[e("h3",[e("span",{staticClass:"badge badge-default"},[this._v("Gold")])])]),e("div",{staticClass:"col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"https://agilecraft.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a("I8Xs")}})])]),e("div",{staticClass:"col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"https://www.digite.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a("vHfq")}})])]),e("div",{staticClass:"col-12 col-sm-7 offset-sm-1 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"https://disciplinedagileconsortium.org",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a("aREA")}})])]),e("div",{staticClass:"col-12 col-sm-3 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"https://www.daugherty.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:a("g7o6")}})])])])}];i._withStripped=!0;var n={render:i,staticRenderFns:s};e.a=n},MrEN:function(t,e,a){"use strict";e.a={props:{title:String,videoId:String},data:function(){return{isLoaded:!1}},computed:{hasTitle:function(){return this.title&&this.title.length>0},imgSrc:function(){return"https://img.youtube.com/vi/"+this.videoId+"/maxresdefault.jpg"},linkSrc:function(){return"https://www.youtube.com/watch?v="+this.videoId},videoSrc:function(){return"https://www.youtube.com/embed/"+this.videoId+"?autoplay=1"}},methods:{load:function(){this.isLoaded=!0,this.$root.$options.$tracker.trackAction("load_video",{title:this.title||"Untitled",video_id:this.videoId})}}}},"OZ+U":function(t,e,a){t.exports=a.p+"img/speaker-rich-sheridan-port.e99bdb4.jpg"},PyEZ:function(t,e,a){"use strict";var i,s,n,r,o,c,l=void 0;l=window.twttr=(i=document,s="script",n="twitter-wjs",r=void 0,o=i.getElementsByTagName(s)[0],c=window.twttr||{},i.getElementById(n)?c:((r=i.createElement(s)).id=n,r.src="https://platform.twitter.com/widgets.js",o.parentNode.insertBefore(r,o),c._e=[],c.ready=function(t){c._e.push(t)},c)),e.a={props:{dataSource:Object,options:Object},mounted:function(){var t=this;l&&l.ready(function(){l.widgets.createTimeline(t.dataSource,t.$el,t.options)})}}},S3c5:function(t,e,a){"use strict";var i=a("acUx"),s=a("L5vj"),n=a("qeuW"),r=a("A489"),o=a("pSjd"),c=a("VZo4");e.a={components:{ContactSection:i.a,GoogleMap:s.a,ReadMore:n.a,SchedEmbed:r.a,TwitterTimeline:o.a,YouTubeCard:c.a},data:function(){return{emailLink:"mailto:info@agilecamp.org",facebookLink:"https://www.facebook.com/agilecamp",googlePlusLink:"https://plus.google.com/114873923413909280996/about",twitterLink:"https://twitter.com/goagilecamp",twitterDataSource:{sourceType:"profile",screenName:"GoAgileCamp"},twitterOptions:{tweetLimit:3},registerLink:"https://www.eventbrite.com/e/agilecamp-new-york-metro-2017-registration-34378215167",schedId:"agilecampnewyorkmetro2017.sched.com",directionsLink:"https://www.google.com/maps/place/Prudential+Tower/@40.7390714,-74.1727621,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xa03018e2b38e8f3c!8m2!3d40.7390714!4d-74.1705734",latLngLiteral:{lat:40.7390714,lng:-74.1727621},placeId:"ChIJE-StzYFTwokRPI-Os-IYMKA",placeName:"Prudential Tower - Conference Center",shownTravelIndex:0}},computed:{schedLink:function(){return"https://"+this.schedId}},methods:{toggleTravel:function(t){this.shownTravelIndex=this.shownTravelIndex===t?-1:t,this.$root.$options.$tracker.trackAction("toggle_travel",{shown_travel_index:this.shownTravelIndex})}}}},SzVJ:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-color-blue"},[a("section",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 py-4 text-white"},[a("h1",{staticClass:"display-4"},[t._v("Contact Us")]),a("p",{staticClass:"body-copy"},[t._v("\n          Please feel free to contact us with any questions at "),a("a",{staticClass:"text-white",attrs:{href:t.emailLink},on:{click:function(e){t.trackContact(t.emailLink,"contactSection")}}},[t._v("info@agilecamp.org")])])]),t._m(0)])])])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-6 py-4 text-white d-flex flex-column justify-content-end align-items-end"},[e("p",{staticClass:"body-copy"},[this._v("\n          Copyright © 2013-2018 AgileCamp™\n        ")])])}]};e.a=s},VZo4:function(t,e,a){"use strict";var i=a("MrEN"),s=a("kSpu"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/components/YouTubeCard.vue",e.a=n.exports},XQnD:function(t,e){var a="__googleMapsApiOnLoadCallback",i=["channel","client","key","language","region","v"],s=null;t.exports=function(t){return t=t||{},s||(s=new Promise(function(e,s){var n=setTimeout(function(){window[a]=function(){},s(new Error("Could not load the Google Maps API"))},t.timeout||1e4);window[a]=function(){null!==n&&clearTimeout(n),e(window.google.maps),delete window[a]};var r=document.createElement("script"),o=["callback="+a];i.forEach(function(e){t[e]&&o.push(e+"="+t[e])}),t.libraries&&t.libraries.length&&o.push("libraries="+t.libraries.join(",")),r.src="https://maps.googleapis.com/maps/api/js?"+o.join("&"),document.body.appendChild(r)})),s}},Y4YR:function(t,e,a){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("div")};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},aREA:function(t,e,a){t.exports=a.p+"img/sponsor-dac.8a2ca2f.png"},acUx:function(t,e,a){"use strict";var i=a("+h9W"),s=a("SzVJ"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/components/ContactSection.vue",e.a=n.exports},b81v:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("S3c5"),s=a("MjYr"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/pages/2017/newyorkmetro.vue",e.default=n.exports},g7o6:function(t,e,a){t.exports=a.p+"img/sponsor-teamdaugherty.bb8ecd3.png"},gB2R:function(t,e,a){t.exports=a.p+"img/sponsor-prudential.2116a7c.png"},hiia:function(t,e,a){t.exports=a.p+"img/sponsor-casthighlight.bca0e6d.png"},kSpu:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-white",staticStyle:{overflow:"hidden"}},[a("div",{staticClass:"card-img embed-responsive embed-responsive-16by9"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLoaded?a("iframe",{key:"isLoaded",staticClass:"embed-responsive-item",attrs:{src:t.videoSrc,allowfullscreen:""}}):a("img",{key:"isNotLoaded",staticClass:"embed-responsive-item",attrs:{src:t.imgSrc}})])],1),t.isLoaded?t._e():a("div",{staticClass:"card-img-overlay bg-color-black-alpha-60 text-center d-flex flex-column justify-content-center align-items-center"},[t.hasTitle?a("a",{staticClass:"card-link small",attrs:{href:t.linkSrc},on:{click:function(e){return e.preventDefault(),t.load(e)}}},[t._v(t._s(t.title))]):a("button",{staticClass:"btn btn-lg btn-info",on:{click:t.load}},[a("i",{staticClass:"fa fa-2x fa-fw fa-play-circle-o",attrs:{"aria-hidden":"true"}})])])])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},mmuO:function(t,e,a){t.exports=a.p+"img/speaker-david-marquet-port.f5119af.jpg"},obVx:function(t,e,a){"use strict";var i=a("woOf"),s=a.n(i),n=a("//Fk"),r=a.n(n),o=a("y1vT"),c=a.n(o),l=a("XQnD"),d=a.n(l);e.a={props:{directionsLink:String,draggable:Boolean,icon:String,latLngLiteral:Object,placeId:String,title:String,zoom:Number},data:function(){return{defaultZoom:15,googleMapsAPIKey:"AIzaSyApfHZKwYHZTcBtbXf-DHB5nVUBrC5H59I"}},mounted:function(){var t=this;r.a.resolve(window.google).then(function(e){return e?e.maps:d()({libraries:["places"],key:t.googleMapsAPIKey})}).then(function(e){t.maps=e;var a={draggable:!0===t.draggable,scrollwheel:!1,zoom:t.zoom||t.defaultZoom};if(t.latLngLiteral&&(t.latLng=new e.LatLng(t.latLngLiteral),s()(a,{center:t.latLng})),t.map=new e.Map(t.$el,a),t.infoWindow=new e.InfoWindow,t.placesService=new e.places.PlacesService(t.map),t.placeId)return new r.a(function(a,i){t.placesService.getDetails({placeId:t.placeId},function(t,s){s!==e.places.PlacesServiceStatus.OK?i(new Error("Places service failed with status "+s)):a(t)})})}).then(function(e){t.place=e;var a={map:t.map};t.icon>""&&(a.icon=t.icon),t.title>""&&(a.title=t.title),e?a.position=e.geometry.location:t.latLng&&(a.position=t.latLng),a.position&&(t.marker=new t.maps.Marker(a),t.panToMarker(),t.centerChangedListener=c()(t.panToMarker,2e3),t.map.addListener("center_changed",t.centerChangedListener),t.marker.addListener("click",t.selectMarker))}).catch(function(t){console.error(t)})},beforeDestroy:function(){this.centerChangedListener&&this.centerChangedListener.cancel(),this.maps&&this.maps.event.clearInstanceListeners(window),this.maps&&this.maps.event.clearInstanceListeners(this.maps),this.maps&&this.map&&this.maps.event.clearInstanceListeners(this.map),this.maps&&this.marker&&this.maps.event.clearInstanceListeners(this.marker),this.infoWindow=this.latLng=this.maps=this.map=this.marker=this.place=this.placesService=this.centerChangedListener=null},methods:{panToMarker:function(){this.map&&this.marker&&this.map.panTo(this.marker.getPosition())},selectMarker:function(){if(this.marker){var t=[];this.title&&t.push("<h6>"+this.title+"</h6>"),this.directionsLink&&t.push('<a href="'+this.directionsLink+'" target="_blank">Directions</a>'),t.length>0&&(this.infoWindow.setContent(t.join("")),this.infoWindow.open(this.map,this.marker))}}}}},pSjd:function(t,e,a){"use strict";var i=a("PyEZ"),s=a("Y4YR"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/components/TwitterTimeline.vue",e.a=n.exports},qeuW:function(t,e,a){"use strict";var i=a("4Ffj"),s=a("GYY1"),n=!1;var r=function(t){n||a("3E2H")},o=a("VU/8")(i.a,s.a,!1,r,"data-v-76f91e8a",null);o.options.__file="src/components/ReadMore.vue",e.a=o.exports},tEZz:function(t,e,a){t.exports=a.p+"img/speaker-geeta-wilson-port.a745516.jpg"},uM3Q:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".fade-enter-active[data-v-76f91e8a],.fade-leave-active[data-v-76f91e8a]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-76f91e8a],.fade-leave-to[data-v-76f91e8a]{opacity:0}",""])},vHfq:function(t,e,a){t.exports=a.p+"img/sponsor-digite.4fe51fd.png"},y1vT:function(t,e,a){(function(e){var a="Expected a function",i=NaN,s="[object Symbol]",n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,u=d||h||Function("return this")(),p=Object.prototype.toString,m=Math.max,f=Math.min,v=function(){return u.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==s}(t))return i;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a=o.test(t);return a||c.test(t)?l(t.slice(2),a?2:8):r.test(t)?i:+t}t.exports=function(t,e,i){var s,n,r,o,c,l,d=0,h=!1,u=!1,p=!0;if("function"!=typeof t)throw new TypeError(a);function y(e){var a=s,i=n;return s=n=void 0,d=e,o=t.apply(i,a)}function b(t){var a=t-l;return void 0===l||a>=e||a<0||u&&t-d>=r}function C(){var t=v();if(b(t))return _(t);c=setTimeout(C,function(t){var a=e-(t-l);return u?f(a,r-(t-d)):a}(t))}function _(t){return c=void 0,p&&s?y(t):(s=n=void 0,o)}function k(){var t=v(),a=b(t);if(s=arguments,n=this,l=t,a){if(void 0===c)return function(t){return d=t,c=setTimeout(C,e),h?y(t):o}(l);if(u)return c=setTimeout(C,e),y(l)}return void 0===c&&(c=setTimeout(C,e)),o}return e=w(e)||0,g(i)&&(h=!!i.leading,r=(u="maxWait"in i)?m(w(i.maxWait)||0,e):r,p="trailing"in i?!!i.trailing:p),k.cancel=function(){void 0!==c&&clearTimeout(c),d=0,s=l=n=c=void 0},k.flush=function(){return void 0===c?o:_(v())},k}}).call(e,a("DuR2"))}});