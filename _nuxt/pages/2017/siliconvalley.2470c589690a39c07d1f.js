webpackJsonp([3],{"+XnF":function(t,e,i){"use strict";var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"z-index":"100"}})};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},"+h9W":function(t,e,i){"use strict";e.a={data:function(){return{emailLink:"mailto:info@agilecamp.org"}}}},"3E2H":function(t,e,i){var a=i("uM3Q");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("395722d4",a,!1,{sourceMap:!1})},"3P9/":function(t,e,i){t.exports=i.p+"img/speaker-jen-bennett-port.4deb455.jpg"},"49pt":function(t,e,i){t.exports=i.p+"img/speaker-barry-o-reilly-port.d0ab574.jpg"},"4Ffj":function(t,e,i){"use strict";e.a={data:function(){return{isMoreShown:!1}}}},A489:function(t,e,i){"use strict";var a=i("Jmdp"),s=i("GJ3E"),n=i("VU/8")(a.a,s.a,!1,null,null,null);n.options.__file="src/components/SchedEmbed.vue",e.a=n.exports},AWUq:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("voCk"),s=i("cWwY"),n=i("VU/8")(a.a,s.a,!1,null,null,null);n.options.__file="src/pages/2017/siliconvalley.vue",e.default=n.exports},CISp:function(t,e,i){t.exports=i.p+"img/sponsor-ica.00ac43e.png"},GJ3E:function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],staticClass:"text-center"},[e("i",{staticClass:"fa fa-spinner fa-spin fa-3x fa-fw"})]),this.isTimeout?this._e():e("div",{ref:"iframe"})])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},GTaI:function(t,e,i){t.exports=i.p+"img/sponsor-hyperdrive.2ecc6ae.png"},GYY1:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition-group",{attrs:{name:"fade"}},[t.isMoreShown?t._t("default"):t._e()],2),t.isMoreShown?t._e():i("p",{staticClass:"body-copy"},[i("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button"},on:{click:function(e){t.isMoreShown=!0}}},[t._v("Read More")])])],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},Jmdp:function(t,e,i){"use strict";(function(t){var i=t.easyXDM;e.a={props:{page:String,schedId:String},data:function(){return{isLoading:!0,isTimeout:!1}},mounted:function(){var t=this;if(i){this.timeoutId=setTimeout(function(){t.isLoading=!1,t.isTimeout=!0,delete t.timeoutId},1e4);var e=this.schedId,a=this.page||"/",s="100%",n=encodeURIComponent(["https","://",e,a,"?iframe=yes&w=",s,"&sidebar=","yes","&bg=",!1,"&mobileoff=Y","&ssl=yes","",""].join("")),r=this;this.fullh=200,this.maxh=2500,this.socket=new i.Socket({remote:"https://"+e+"/iframed.html?url="+n,props:{style:{width:s,height:this.max+"px"},scrolling:"no"},container:this.$refs.iframe,onMessage:function(t,e){if("string"==typeof t&&-1!==t.indexOf("tip-")){var i=parseInt(t.substr(4));this.container.getElementsByTagName("iframe")[0].style.height=this.fullh+i+"px"}else if("hidetip"===t)this.container.getElementsByTagName("iframe")[0].style.height=this.fullh+"px";else if("scrolltop"===t)r.scrollToElement(r.$el);else{var a=parseInt(t);a>0&&(r.isLoading=!1,r.timeoutId&&(clearTimeout(r.timeoutId),delete this.timeoutId),this.fullh=a,this.container.getElementsByTagName("iframe")[0].style.height=this.fullh+"px")}}})}},beforeDestroy:function(){this.timeoutId&&(clearTimeout(this.timeoutId),delete this.timeoutId),this.socket&&(this.socket.destroy(),delete this.socket)}}}).call(e,i("DuR2"))},L5vj:function(t,e,i){"use strict";var a=i("obVx"),s=i("+XnF"),n=i("VU/8")(a.a,s.a,!1,null,null,null);n.options.__file="src/components/GoogleMap.vue",e.a=n.exports},Mfn5:function(t,e,i){t.exports=i.p+"img/sponsor-bratton.f336b19.png"},MrEN:function(t,e,i){"use strict";e.a={props:{title:String,videoId:String},data:function(){return{isLoaded:!1}},computed:{hasTitle:function(){return this.title&&this.title.length>0},imgSrc:function(){return"https://img.youtube.com/vi/"+this.videoId+"/maxresdefault.jpg"},linkSrc:function(){return"https://www.youtube.com/watch?v="+this.videoId},videoSrc:function(){return"https://www.youtube.com/embed/"+this.videoId+"?autoplay=1"}},methods:{load:function(){this.isLoaded=!0,this.$root.$options.$tracker.trackAction("load_video",{title:this.title||"Untitled",video_id:this.videoId})}}}},PyEZ:function(t,e,i){"use strict";var a,s,n,r,o,c,l=void 0;l=window.twttr=(a=document,s="script",n="twitter-wjs",r=void 0,o=a.getElementsByTagName(s)[0],c=window.twttr||{},a.getElementById(n)?c:((r=a.createElement(s)).id=n,r.src="https://platform.twitter.com/widgets.js",o.parentNode.insertBefore(r,o),c._e=[],c.ready=function(t){c._e.push(t)},c)),e.a={props:{dataSource:Object,options:Object},mounted:function(){var t=this;l&&l.ready(function(){l.widgets.createTimeline(t.dataSource,t.$el,t.options)})}}},SzVJ:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-color-blue"},[i("section",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-6 py-4 text-white"},[i("h1",{staticClass:"display-4"},[t._v("Contact Us")]),i("p",{staticClass:"body-copy"},[t._v("\n          Please feel free to contact us with any questions at "),i("a",{staticClass:"text-white",attrs:{href:t.emailLink},on:{click:function(e){t.trackContact(t.emailLink,"contactSection")}}},[t._v("info@agilecamp.org")])])]),t._m(0)])])])};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-6 py-4 text-white d-flex flex-column justify-content-end align-items-end"},[e("p",{staticClass:"body-copy"},[this._v("\n          Copyright © 2013-2018 AgileCamp™\n        ")])])}]};e.a=s},UwVF:function(t,e,i){t.exports=i.p+"img/speaker-doug-kirkpatrick-port.9bb2d95.jpg"},VZo4:function(t,e,i){"use strict";var a=i("MrEN"),s=i("kSpu"),n=i("VU/8")(a.a,s.a,!1,null,null,null);n.options.__file="src/components/YouTubeCard.vue",e.a=n.exports},XQnD:function(t,e){var i="__googleMapsApiOnLoadCallback",a=["channel","client","key","language","region","v"],s=null;t.exports=function(t){return t=t||{},s||(s=new Promise(function(e,s){var n=setTimeout(function(){window[i]=function(){},s(new Error("Could not load the Google Maps API"))},t.timeout||1e4);window[i]=function(){null!==n&&clearTimeout(n),e(window.google.maps),delete window[i]};var r=document.createElement("script"),o=["callback="+i];a.forEach(function(e){t[e]&&o.push(e+"="+t[e])}),t.libraries&&t.libraries.length&&o.push("libraries="+t.libraries.join(",")),r.src="https://maps.googleapis.com/maps/api/js?"+o.join("&"),document.body.appendChild(r)})),s}},Y4YR:function(t,e,i){"use strict";var a=function(){var t=this.$createElement;return(this._self._c||t)("div")};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},acUx:function(t,e,i){"use strict";var a=i("+h9W"),s=i("SzVJ"),n=i("VU/8")(a.a,s.a,!1,null,null,null);n.options.__file="src/components/ContactSection.vue",e.a=n.exports},cWwY:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pt-header"},[t._m(0),i("div",{staticClass:"bg-color-orange-dk-2 border-bottom-black"},[i("section",{staticClass:"container"},[i("div",{staticClass:"row px-2 py-2"},[t._m(1),i("div",{staticClass:"col-12 py-4 text-center"},[i("p",{staticClass:"body-copy color-white"},[t._v("\n            Join us on November 6th, 2017 for AgileCamp Silicon Valley in the heart of technology innovation!\n            Agilists from across the West Coast will converge for a career changing day.\n            Join hundreds of professionals in igniting a path of an Agile enterprise.\n            This year we are excited for keynote presentations from "),i("a",{staticClass:"link-underline",attrs:{href:"/"},on:{click:function(e){e.preventDefault(),t.scrollToId("speakerBarryOReilly")}}},[t._v("Barry O’Reilly")]),t._v(", best-selling author of Lean Enterprise, and "),i("a",{staticClass:"link-underline",attrs:{href:"/"},on:{click:function(e){e.preventDefault(),t.scrollToId("speakerDougKirkpatrick")}}},[t._v("Doug Kirkpatrick")]),t._v(", TEDx speaker and author of Beyond Empowerment: The Age of the Self-Managed Organization.\n            You’ll also choose from 20 of workshops on Leadership, Product, Leadership, Innovation, Agility and much more.\n            See below for "),i("a",{staticClass:"link-underline",attrs:{href:"/"},on:{click:function(e){e.preventDefault(),t.scrollToId("programSection")}}},[t._v("program")]),t._v(" details and to "),i("a",{staticClass:"link-underline",attrs:{href:t.registerLink,target:"_blank"}},[t._v("register")]),t._v(" for AgileCamp.\n          ")])]),i("div",{staticClass:"col-12 py-4 text-center"},[i("a",{staticClass:"btn btn-lg btn-secondary",attrs:{role:"button",href:t.registerLink,target:"_blank"}},[t._v("Event Info")])])])])]),i("div",{staticClass:"bg-color-gray-lt-2"},[i("section",{staticClass:"container py-4"},[t._m(2),i("div",{staticClass:"row text-white py-2",attrs:{id:"speakerBarryOReilly"}},[t._m(3),i("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[i("h4",{staticClass:"mt-2 mt-md-0"},[t._v("Barry O’Reilly")]),i("p",{staticClass:"body-copy"},[t._v("\n            Barry O’Reilly is a business advisor, entrepreneur, and author who has pioneered the intersection of business model innovation, product development, organizational design, and culture transformation.\n            Barry works with business leaders and teams from global organizations that seek to invent the future, not fear it.\n          ")]),i("read-more",[i("p",{key:"p1",staticClass:"body-copy"},[t._v("\n              Every day, Barry works with many of the world’s leading companies to break the vicious cycles that spiral businesses toward death by enabling experimentation and learning to unlock the insights required for better decision making and higher performance and results.\n            ")]),i("p",{key:"p2",staticClass:"body-copy"},[t._v("\n              Barry is co-author of the international bestseller "),i("em",[t._v("Lean Enterprise: How High Performance Organizations Innovate at Scale")]),t._v(" — included in the Eric Ries Lean series, and a Harvard Business Review must read for CEOs and business leaders.\n              He is an internationally sought-after speaker, frequent writer and contributor to The Economist, Strategy+Business, and MIT Sloan Management Review.\n            ")]),i("p",{key:"p3",staticClass:"body-copy"},[t._v("\n              Barry is Faculty at Singularity University, advising and coaching on Singularity’s executive and accelerator programs based in San Francisco, and throughout the globe.\n            ")]),i("p",{key:"p4",staticClass:"body-copy"},[t._v("\n              Barry is also founder and CEO of ExecCamp, the entrepreneurial experience for executives, and management consultancy Antennae.\n            ")])])],1)]),i("div",{staticClass:"row text-white py-2",attrs:{id:"speakerDougKirkpatrick"}},[t._m(4),i("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[i("h4",{staticClass:"mt-2 mt-md-0"},[t._v("Doug Kirkpatrick")]),i("p",{staticClass:"body-copy"},[t._v("\n            Doug Kirkpatrick is an organizational change consultant, TEDx and keynote speaker, executive coach, author, and educator.\n            He is a regular contributor to the Huffington Post Blog on Great Work Cultures, and a partner in NuFocus Strategic Group, an international consulting firm where he leads organizational change and education initiatives.\n          ")]),i("read-more",[i("p",{key:"p1",staticClass:"body-copy"},[t._v("\n              Kirkpatrick began his career in the manufacturing sector, principally with The Morning Star Company, a world leader in the food industry, as a financial controller.\n              He now engages with Leadwise Community, People-Centric Organizations, Great Work Cultures, Work Revolution and other vibrant organizations and leaders to co-create the future of management.\n            ")])])],1)]),i("div",{staticClass:"row text-white py-2",attrs:{id:"speakerJenBennett"}},[t._m(5),i("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[i("h4",{staticClass:"mt-2 mt-md-0"},[t._v("Jen Bennett")]),i("p",{staticClass:"body-copy"},[t._v("\n            Jen, a Technical Director in the Office of the CTO at Google Cloud, brings a passion to inspire customers to transform their business through data, analytics and machine learning.\n          ")]),i("read-more",[i("p",{key:"p1",staticClass:"body-copy"},[t._v("\n              Prior to Google, Jen was the GM and VP Product Management of Manufacturing Software at GE Digital focusing on digital transformation leveraging data, analytics and intelligence to optimize people, process and machines.\n              Prior to GE, Jen spent 6 years at Cisco Systems in Emerging Technology and Cloud Collaboration Technology Group and 9 years at Avid Technology/Pinnacle Systems.\n            ")]),i("p",{key:"p2",staticClass:"body-copy"},[t._v("\n              Jen holds a Bachelor’s of Science in Electrical Engineering from Cornell University and a Master’s of Science in BioEngineering from the University of Pittsburgh where her thesis focused on functional MRI.\n              Jen is an Agile evangelist, Co-Active coach and InnovationGames facilitator.\n            ")])])],1)])])]),t._m(6),i("div",{staticClass:"bg-color-white"},[i("section",{staticClass:"container py-4"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12",attrs:{id:"programSection"}},[i("sched-embed",{staticClass:"py-2",attrs:{page:"/directory/speakers","sched-id":t.schedId}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 py-4 text-center"},[i("a",{staticClass:"btn btn-secondary",attrs:{href:t.schedLink,target:"_blank"}},[t._v("View the Schedule and Directory")])])])])]),i("div",{staticClass:"bg-color-gray",attrs:{id:"travelSection"}},[i("section",{staticClass:"container py-4"},[t._m(7),i("div",{staticClass:"row my-4"},[i("div",{staticClass:"col-12 col-md-6 py-2"},[i("h3",{staticClass:"text-uppercase"},[t._v("Event Location")]),i("p",[i("a",{attrs:{href:t.directionsLink,target:"_blank"}},[t._v(t._s(t.placeName))]),i("br"),t._v("\n            5001 Great America Parkway, Santa Clara, California 95054"),i("br"),t._v("\n            Venue phone: "),i("a",{attrs:{href:"tel:1-408-748-7000"}},[t._v("(408) 748-7000")])])]),i("div",{staticClass:"col-12 col-md-6 py-2"},[i("google-map",{staticStyle:{height:"460px"},attrs:{icon:"/AgileCamp_map_marker.png","directions-link":t.directionsLink,"lat-lng-literal":t.latLngLiteral,"place-id":t.placeId,title:t.placeName}})],1)])])]),i("div",{staticClass:"bg-color-gray-lt-2"},[i("section",{staticClass:"container py-4"},[i("div",{staticClass:"row text-white"},[i("twitter-timeline",{staticClass:"col-12 col-md-10 offset-md-1 py-2",attrs:{"data-source":t.twitterDataSource,options:t.twitterOptions}})],1)])]),i("div",{staticClass:"bg-color-white"},[i("section",{staticClass:"container py-4"},[t._m(8),t._m(9),t._m(10),t._m(11),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 py-4 text-center"},[i("button",{staticClass:"btn btn-lg btn-secondary",attrs:{type:"button"},on:{click:function(e){t.navTo("index","sponsorSection")}}},[t._v("Sponsor AgileCamp!")])])])])])])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-color-black"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 font-weight-bold text-center text-uppercase text-white px-2 py-2"},[this._v("\n          Past Year’s Lineup\n        ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 py-2 text-center"},[e("h1",{staticClass:"color-white-alpha-50 display-vw-10 text-uppercase font-family-oswald-400"},[this._v("Silicon Valley")]),e("h2",{staticClass:"color-white display-vw-3 font-weight-bold ml-1"},[this._v("November 6th, 2017")]),e("h2",{staticClass:"color-white-alpha-50 display-vw-4 font-weight-bold ml-1"},[this._v("\n            Santa Clara Convention Center"),e("br"),this._v("\n            Santa Clara, California\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"display-4 text-center text-white"},[this._v("Featured Speakers")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-3"},[e("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[e("img",{staticClass:"img-fluid img-brighten-110",attrs:{src:i("49pt"),alt:"Barry O'Reilly"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-3"},[e("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[e("img",{staticClass:"img-fluid img-brighten-110",attrs:{src:i("UwVF"),alt:"Doug Kirkpatrick"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-3"},[e("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[e("img",{staticClass:"img-fluid img-brighten-110",attrs:{src:i("3P9/"),alt:"Jen Bennett"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-color-orange-dk-2"},[e("section",{staticClass:"container py-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"display-3 text-center text-white"},[this._v("Program")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"text-center"},[this._v("Getting to AgileCamp")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 py-2"},[e("h1",{staticClass:"text-center"},[this._v("2017 Silicon Valley Sponsors")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mb-4 border-bottom-black-1"},[e("div",{staticClass:"col-12 col-sm-2"},[e("h3",[e("span",{staticClass:"badge badge-default"},[this._v("Title")])])]),e("div",{staticClass:"col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"http://hyperdriveagile.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:i("GTaI")}})])]),e("div",{staticClass:"col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"http://www.brattoninc.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:i("Mfn5")}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mb-4 border-bottom-black-1"},[e("div",{staticClass:"col-12 col-sm-2"},[e("h3",[e("span",{staticClass:"badge badge-default"},[this._v("Gold")])])]),e("div",{staticClass:"col-12 col-sm-4 offset-sm-2 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"https://www.digite.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:i("vHfq")}})])]),e("div",{staticClass:"col-12 col-sm-8 offset-sm-2 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"https://www.northeastern.edu/graduate/",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:i("dLzd")}})])]),e("div",{staticClass:"col-12 col-sm-6 offset-sm-3 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-4 my-4",attrs:{href:"https://agilityhealthradar.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:i("vUZh")}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-2"},[e("h3",[e("span",{staticClass:"badge badge-default"},[this._v("Bronze")])])]),e("div",{staticClass:"col-12 col-sm-4 offset-sm-2 d-flex flex-row flex-nowrap align-items-center"},[e("a",{staticClass:"mx-2 my-4",attrs:{href:"https://icagile.com",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:i("CISp")}})])])])}];a._withStripped=!0;var n={render:a,staticRenderFns:s};e.a=n},dLzd:function(t,e,i){t.exports=i.p+"img/sponsor-nupjm.2abc785.png"},kSpu:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card text-white",staticStyle:{overflow:"hidden"}},[i("div",{staticClass:"card-img embed-responsive embed-responsive-16by9"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isLoaded?i("iframe",{key:"isLoaded",staticClass:"embed-responsive-item",attrs:{src:t.videoSrc,allowfullscreen:""}}):i("img",{key:"isNotLoaded",staticClass:"embed-responsive-item",attrs:{src:t.imgSrc}})])],1),t.isLoaded?t._e():i("div",{staticClass:"card-img-overlay bg-color-black-alpha-60 text-center d-flex flex-column justify-content-center align-items-center"},[t.hasTitle?i("a",{staticClass:"card-link small",attrs:{href:t.linkSrc},on:{click:function(e){return e.preventDefault(),t.load(e)}}},[t._v(t._s(t.title))]):i("button",{staticClass:"btn btn-lg btn-info",on:{click:t.load}},[i("i",{staticClass:"fa fa-2x fa-fw fa-play-circle-o",attrs:{"aria-hidden":"true"}})])])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},obVx:function(t,e,i){"use strict";var a=i("woOf"),s=i.n(a),n=i("//Fk"),r=i.n(n),o=i("y1vT"),c=i.n(o),l=i("XQnD"),d=i.n(l);e.a={props:{directionsLink:String,draggable:Boolean,icon:String,latLngLiteral:Object,placeId:String,title:String,zoom:Number},data:function(){return{defaultZoom:15,googleMapsAPIKey:"AIzaSyApfHZKwYHZTcBtbXf-DHB5nVUBrC5H59I"}},mounted:function(){var t=this;r.a.resolve(window.google).then(function(e){return e?e.maps:d()({libraries:["places"],key:t.googleMapsAPIKey})}).then(function(e){t.maps=e;var i={draggable:!0===t.draggable,scrollwheel:!1,zoom:t.zoom||t.defaultZoom};if(t.latLngLiteral&&(t.latLng=new e.LatLng(t.latLngLiteral),s()(i,{center:t.latLng})),t.map=new e.Map(t.$el,i),t.infoWindow=new e.InfoWindow,t.placesService=new e.places.PlacesService(t.map),t.placeId)return new r.a(function(i,a){t.placesService.getDetails({placeId:t.placeId},function(t,s){s!==e.places.PlacesServiceStatus.OK?a(new Error("Places service failed with status "+s)):i(t)})})}).then(function(e){t.place=e;var i={map:t.map};t.icon&&(i.icon=t.icon),t.title&&(i.title=t.title),e?i.position=e.geometry.location:t.latLng&&(i.position=t.latLng),i.position&&(t.marker=new t.maps.Marker(i),t.panToMarker(),t.centerChangedListener=c()(t.panToMarker,2e3),t.map.addListener("center_changed",t.centerChangedListener),t.marker.addListener("click",t.selectMarker))}).catch(function(t){console.error(t)})},beforeDestroy:function(){this.centerChangedListener.cancel(),this.maps&&this.maps.event.clearInstanceListeners(window),this.maps&&this.maps.event.clearInstanceListeners(this.maps),this.maps&&this.map&&this.maps.event.clearInstanceListeners(this.map),this.maps&&this.marker&&this.maps.event.clearInstanceListeners(this.marker),this.infoWindow=this.latLng=this.maps=this.map=this.marker=this.place=this.placesService=null},methods:{panToMarker:function(){this.map&&this.marker&&this.map.panTo(this.marker.getPosition())},selectMarker:function(){if(this.marker){var t=[];this.title&&t.push("<h6>"+this.title+"</h6>"),this.directionsLink&&t.push('<a href="'+this.directionsLink+'" target="_blank">Directions</a>'),t.length>0&&(this.infoWindow.setContent(t.join("")),this.infoWindow.open(this.map,this.marker))}}}}},pSjd:function(t,e,i){"use strict";var a=i("PyEZ"),s=i("Y4YR"),n=i("VU/8")(a.a,s.a,!1,null,null,null);n.options.__file="src/components/TwitterTimeline.vue",e.a=n.exports},qeuW:function(t,e,i){"use strict";var a=i("4Ffj"),s=i("GYY1"),n=!1;var r=function(t){n||i("3E2H")},o=i("VU/8")(a.a,s.a,!1,r,"data-v-76f91e8a",null);o.options.__file="src/components/ReadMore.vue",e.a=o.exports},uM3Q:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".fade-enter-active[data-v-76f91e8a],.fade-leave-active[data-v-76f91e8a]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-76f91e8a],.fade-leave-to[data-v-76f91e8a]{opacity:0}",""])},vHfq:function(t,e,i){t.exports=i.p+"img/sponsor-digite.4fe51fd.png"},vUZh:function(t,e,i){t.exports=i.p+"img/sponsor-agilityhealth.f093ada.png"},voCk:function(t,e,i){"use strict";var a=i("acUx"),s=i("L5vj"),n=i("qeuW"),r=i("A489"),o=i("pSjd"),c=i("VZo4");e.a={components:{ContactSection:a.a,GoogleMap:s.a,ReadMore:n.a,SchedEmbed:r.a,TwitterTimeline:o.a,YouTubeCard:c.a},data:function(){return{emailLink:"mailto:info@agilecamp.org",facebookLink:"https://www.facebook.com/agilecamp",googlePlusLink:"https://plus.google.com/114873923413909280996/about",twitterLink:"https://twitter.com/goagilecamp",twitterDataSource:{sourceType:"profile",screenName:"GoAgileCamp"},twitterOptions:{tweetLimit:3},registerLink:"https://www.eventbrite.com/e/agilecamp-silicon-valley-2017-registration-34720139873",schedId:"agilecampsiliconvalley2017.sched.com",directionsLink:"https://www.google.com/maps/place/Santa+Clara+Convention+Center/@37.4046706,-121.9774356,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xc1ebf7e60770d2e4!8m2!3d37.4046706!4d-121.9752469",latLngLiteral:{lat:37.4046706,lng:-121.9774356},placeId:"ChIJuVD6TcnJj4AR5NJwB-b368E",placeName:"Santa Clara Convention Center",shownTravelIndex:-1}},computed:{schedLink:function(){return"https://"+this.schedId}},methods:{toggleTravel:function(t){this.shownTravelIndex=this.shownTravelIndex===t?-1:t,this.$root.$options.$tracker.trackAction("toggle_travel",{shown_travel_index:this.shownTravelIndex})}}}},y1vT:function(t,e,i){(function(e){var i="Expected a function",a=NaN,s="[object Symbol]",n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,p=d||u||Function("return this")(),f=Object.prototype.toString,m=Math.max,h=Math.min,g=function(){return p.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&f.call(t)==s}(t))return a;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var i=o.test(t);return i||c.test(t)?l(t.slice(2),i?2:8):r.test(t)?a:+t}t.exports=function(t,e,a){var s,n,r,o,c,l,d=0,u=!1,p=!1,f=!0;if("function"!=typeof t)throw new TypeError(i);function w(e){var i=s,a=n;return s=n=void 0,d=e,o=t.apply(a,i)}function C(t){var i=t-l;return void 0===l||i>=e||i<0||p&&t-d>=r}function b(){var t=g();if(C(t))return _(t);c=setTimeout(b,function(t){var i=e-(t-l);return p?h(i,r-(t-d)):i}(t))}function _(t){return c=void 0,f&&s?w(t):(s=n=void 0,o)}function k(){var t=g(),i=C(t);if(s=arguments,n=this,l=t,i){if(void 0===c)return function(t){return d=t,c=setTimeout(b,e),u?w(t):o}(l);if(p)return c=setTimeout(b,e),w(l)}return void 0===c&&(c=setTimeout(b,e)),o}return e=y(e)||0,v(a)&&(u=!!a.leading,r=(p="maxWait"in a)?m(y(a.maxWait)||0,e):r,f="trailing"in a?!!a.trailing:f),k.cancel=function(){void 0!==c&&clearTimeout(c),d=0,s=l=n=c=void 0},k.flush=function(){return void 0===c?o:_(g())},k}}).call(e,i("DuR2"))}});