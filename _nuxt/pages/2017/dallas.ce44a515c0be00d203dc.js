webpackJsonp([8],{"+L/C":function(t,e,a){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-color-black"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 font-weight-bold text-center text-uppercase text-white px-2 py-2"},[this._v("\n        Past Year’s Lineup\n      ")])])])])}]};e.a=s},"+XnF":function(t,e,a){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"z-index":"100"}})};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},"5zde":function(t,e,a){a("zQR9"),a("qyJz"),t.exports=a("FeBl").Array.from},A489:function(t,e,a){"use strict";var i=a("WjlZ"),s=a("GJ3E"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/components/SchedEmbed.vue",e.a=n.exports},C6vu:function(t,e,a){"use strict";var i=a("qeuW");e.a={props:{textClass:String},components:{ReadMore:i.a},computed:{bodyClass:function(){return this.textClass||"text-muted"}}}},FFJO:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".fade-enter-active[data-v-76f91e8a],.fade-leave-active[data-v-76f91e8a]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-76f91e8a],.fade-leave-to[data-v-76f91e8a]{opacity:0}",""])},GJ3E:function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],staticClass:"text-center"},[e("i",{staticClass:"fa fa-spinner fa-spin fa-3x fa-fw"})]),this.isTimeout?this._e():e("div",{ref:"iframe"})])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},GYY1:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition-group",{attrs:{name:"fade"}},[t.isMoreShown?t._t("default"):t._e()],2),t.isMoreShown?t._e():a("p",{staticClass:"body-copy"},[a("button",{staticClass:"btn btn-sm px-3",class:t.buttonClass||"btn-secondary",attrs:{type:"button"},on:{click:function(e){t.isMoreShown=!0}}},[t._v("Read More")])])],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},Gu7T:function(t,e,a){"use strict";e.__esModule=!0;var i=function(t){return t&&t.__esModule?t:{default:t}}(a("c/Tr"));e.default=function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return(0,i.default)(t)}},L5vj:function(t,e,a){"use strict";var i=a("mTuP"),s=a("+XnF"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/components/GoogleMap.vue",e.a=n.exports},Li5j:function(t,e,a){"use strict";var i=a("qeuW");e.a={props:{textClass:String},components:{ReadMore:i.a},computed:{bodyClass:function(){return this.textClass||"text-muted"}}}},WjlZ:function(t,e,a){"use strict";(function(t){var a=t.easyXDM;e.a={props:{page:String,schedId:String},data:function(){return{isLoading:!0,isTimeout:!1}},mounted:function(){var t=this;if(a){this.timeoutId=setTimeout(function(){t.isLoading=!1,t.isTimeout=!0,delete t.timeoutId},1e4);var e=this.schedId,i=this.page||"/",s="100%",n=encodeURIComponent(["https","://",e,i,"?iframe=yes&w=",s,"&sidebar=","no","&bg=",!1,"&mobileoff=Y","&ssl=yes","",""].join("")),r=this;this.fullh=200,this.maxh=2500,this.socket=new a.Socket({remote:"https://"+e+"/iframed.html?url="+n,props:{style:{width:s,height:this.max+"px"},scrolling:"no"},container:this.$refs.iframe,onMessage:function(t,e){if("string"==typeof t&&-1!==t.indexOf("tip-")){var a=parseInt(t.substr(4));this.container.getElementsByTagName("iframe")[0].style.height=this.fullh+a+"px"}else if("hidetip"===t)this.container.getElementsByTagName("iframe")[0].style.height=this.fullh+"px";else if("scrolltop"===t)r.scrollToElement(r.$el);else{var i=parseInt(t);i>0&&(r.isLoading=!1,r.timeoutId&&(clearTimeout(r.timeoutId),delete this.timeoutId),this.fullh=i,this.container.getElementsByTagName("iframe")[0].style.height=this.fullh+"px")}}})}},beforeDestroy:function(){this.timeoutId&&(clearTimeout(this.timeoutId),delete this.timeoutId),this.socket&&(this.socket.destroy(),delete this.socket)}}}).call(e,a("DuR2"))},X8tG:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row py-2",class:t.textClass,attrs:{id:"speakerAhmedSidky"}},[t._m(0),a("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[a("h4",{staticClass:"mt-2 mt-md-0"},[t._v("Ahmed Sidky")]),a("p",{staticClass:"body-copy",class:t.bodyClass},[t._v("\n      Ahmed Sidky, Ph.D., is a global thought-leader in Business Agility.\n      He has been at Riot Games for about 5 years where is was the Head of Development Management and is now the the Head of Business Agility.\n    ")]),a("read-more",{class:t.bodyClass},[a("p",{key:"p1",staticClass:"body-copy"},[t._v("\n        Before Riot, Ahmed was a enterprise agile consultant for a number of Fortune 100 companies, guiding enterprise Agile transformations, educated leaders on the Agile mindset, and creating customer-centric cultures of learning.\n      ")]),a("p",{key:"p2",staticClass:"body-copy"},[t._v("\n        He is the President of the International Consortium for Agile (ICAgile) and the co-founder of the Business Agility Institute; co-author of "),a("em",[t._v("Becoming Agile in an Imperfect World")]),t._v("; and a seasoned international keynote speaker.\n      ")])])],1)])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-3"},[e("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[e("img",{staticClass:"img-fluid",attrs:{src:a("y/G3"),alt:"Ahmed Sidky"}})])])}];i._withStripped=!0;var n={render:i,staticRenderFns:s};e.a=n},XQnD:function(t,e){var a="__googleMapsApiOnLoadCallback",i=["channel","client","key","language","region","v"],s=null;t.exports=function(t){return t=t||{},s||(s=new Promise(function(e,s){var n=setTimeout(function(){window[a]=function(){},s(new Error("Could not load the Google Maps API"))},t.timeout||1e4);window[a]=function(){null!==n&&clearTimeout(n),e(window.google.maps),delete window[a]};var r=document.createElement("script"),o=["callback="+a];i.forEach(function(e){t[e]&&o.push(e+"="+t[e])}),t.libraries&&t.libraries.length&&o.push("libraries="+t.libraries.join(",")),r.src="https://maps.googleapis.com/maps/api/js?"+o.join("&"),document.body.appendChild(r)})),s}},Y4YR:function(t,e,a){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("div")};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},"c/Tr":function(t,e,a){t.exports={default:a("5zde"),__esModule:!0}},dpEr:function(t,e,a){var i=a("FFJO");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("26a0b948",i,!1,{sourceMap:!1})},etRx:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-header"},[a("div",{staticClass:"bg-color-blue-dk-2 border-bottom border-dark"},[a("section",{staticClass:"container"},[a("div",{staticClass:"row px-2 py-2"},[t._m(0),a("div",{staticClass:"col-12 py-4 text-center"},[a("p",{staticClass:"body-copy color-white"},[t._v("\n            Join us on December 1st, 2017 for AgileCamp Dallas!\n            See below for "),a("a",{staticClass:"link-underline",attrs:{href:"/"},on:{click:function(e){e.preventDefault(),t.scrollToId("programSection")}}},[t._v("program")]),t._v(" details and to "),a("a",{staticClass:"link-underline",attrs:{href:t.registerLink,target:"_blank"}},[t._v("register")]),t._v(" for AgileCamp.\n          ")])]),a("div",{staticClass:"col-12 py-4 text-center"},[a("a",{staticClass:"btn btn-lg btn-secondary",attrs:{role:"button",href:t.registerLink,target:"_blank"}},[t._v("Event Ended")])])])])]),a("past-year-lineup"),a("div",{staticClass:"bg-color-gray-lt-2"},[a("section",{staticClass:"container py-4"},[t._m(1),a("ahmed-sidky",{attrs:{"text-class":"text-white"}}),a("div",{staticClass:"row text-white py-2",attrs:{id:"speakerEmCampbellPretty"}},[t._m(2),a("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[a("h4",{staticClass:"mt-2 mt-md-0"},[t._v("Em Campbell-Pretty")]),t._m(3),a("read-more",[a("p",{key:"p1",staticClass:"body-copy"},[t._v("\n              At the heart of Em’s success is her passion for creating cultures of transparency, lean leadership, learning, innovation and fun.\n            ")]),a("p",{key:"p2",staticClass:"body-copy"},[t._v("\n              Em is a SAFe® Fellow and an active member of the global Agile community.\n              She is a thought leader on scaling culture and creating agile tribes.\n              Her commitment to building great leaders and transforming culture has made her a sort after speaker at conferences around the globe.\n            ")])])],1)]),a("david-marquet",{attrs:{"text-class":"text-white"}})],1)]),t._m(4),a("div",{staticClass:"bg-color-white"},[a("section",{staticClass:"container py-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12",attrs:{id:"programSection"}},[a("sched-embed",{staticClass:"py-2",attrs:{page:"/directory/speakers","sched-id":t.schedId}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 py-4 text-center"},[a("a",{staticClass:"btn btn-secondary",attrs:{href:t.schedLink,target:"_blank"}},[t._v("View the Schedule and Directory")])])])])]),a("div",{staticClass:"bg-color-gray",attrs:{id:"travelSection"}},[a("section",{staticClass:"container py-4"},[t._m(5),a("div",{staticClass:"row my-4"},[a("div",{staticClass:"col-12 col-md-6 py-2"},[a("h3",{staticClass:"text-uppercase"},[t._v("Event Location")]),a("p",[a("a",{attrs:{href:t.directionsLink,target:"_blank"}},[t._v(t._s(t.placeName))]),a("br"),t._v("\n            500 West Las Colinas Boulevard, Irving, Texas 75039"),a("br"),t._v("\n            Venue phone: "),a("a",{attrs:{href:"tel:1-972-252-7476"}},[t._v("(972) 252-7476")])])]),a("div",{staticClass:"col-12 col-md-6 py-2"},[a("google-map",{staticStyle:{height:"460px"},attrs:{icon:"/AgileCamp_map_marker_icon.png","directions-link":t.directionsLink,"lat-lng-literal":t.latLngLiteral,"place-id":t.placeId,title:t.placeName}})],1)])])]),a("div",{staticClass:"bg-color-gray-lt-2"},[a("section",{staticClass:"container py-4"},[a("div",{staticClass:"row text-white"},[a("twitter-timeline",{staticClass:"col-12 col-md-10 offset-md-1 py-2",attrs:{"data-source":t.twitterDataSource,options:t.twitterOptions}})],1)])])],1)},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 py-2 text-center"},[e("h1",{staticClass:"color-white-alpha-50 display-vw-10 text-uppercase font-family-oswald-400"},[this._v("Dallas")]),e("h2",{staticClass:"color-white display-vw-3 font-weight-bold ml-1"},[this._v("December 1st, 2017")]),e("h2",{staticClass:"color-white-alpha-50 display-vw-4 font-weight-bold ml-1"},[this._v("\n            Irving Convention Center"),e("br"),this._v("\n            Irving, Texas\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"display-4 text-center text-white"},[this._v("Featured Speakers")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-3"},[e("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[e("img",{staticClass:"img-fluid img-brighten-110",attrs:{src:a("prqd"),alt:"Em Campbell-Pretty"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"body-copy"},[this._v("\n            Em Campbell-Pretty is the author of the Amazon Number #1 Best Seller: "),e("em",[this._v("Tribal Unity.")]),this._v("\n            She is an internationally acclaimed business strategist, speaker and one of Australia’s leading Enterprise Agile consultants.\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-color-blue-dk-2"},[e("section",{staticClass:"container py-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"display-3 text-center text-white"},[this._v("Program")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"text-center"},[this._v("Getting to AgileCamp")])])])}];i._withStripped=!0;var n={render:i,staticRenderFns:s};e.a=n},fBQ2:function(t,e,a){"use strict";var i=a("evD5"),s=a("X8DO");t.exports=function(t,e,a){e in t?i.f(t,e,s(0,a)):t[e]=a}},iPdh:function(t,e,a){"use strict";var i=a("+L/C"),s=a("VU/8")(null,i.a,!1,null,null,null);s.options.__file="src/components/PastYearLineup.vue",e.a=s.exports},kAqK:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row py-2",class:t.textClass,attrs:{id:"speakerDavidMarquet"}},[t._m(0),a("div",{staticClass:"col-12 col-md-9 mt-2 text-center text-md-left"},[a("h4",{staticClass:"mt-2 mt-md-0"},[t._v("David Marquet")]),a("p",{staticClass:"body-copy",class:t.bodyClass},[t._v("\n      David Marquet is an expert on leadership and organizational design, former submarine commander, and author of Amazon #1 Best Seller: "),a("em",[t._v("Turn the Ship Around!")]),t._v(" and "),a("em",[t._v("Turn Your Ship Around!")])]),a("read-more",{class:t.bodyClass},[a("p",{key:"p1",staticClass:"body-copy"},[t._v("\n        David Marquet imagines a work place where everyone engages and contributes their full intellectual capacity, a place where people are healthier and happier because they have more control over their work — a place where everyone is a leader.\n      ")]),a("p",{key:"p2",staticClass:"body-copy"},[t._v("\n        A 1981 U.S. Naval Academy graduate, Captain Marquet served in the U.S. submarine force for 28 years.\n        After being assigned to command the nuclear powered submarine USS Santa Fe — then ranked last in retention and operational standing — he realized the traditional leadership approach of “take control, give orders,” wouldn’t work.\n        He “turned the ship around” by treating the crew as leaders, not followers, and giving control, not taking control.\n        This approach took the Santa Fe from “worst to first,” achieving the highest retention and operational standings in the navy.\n      ")]),a("p",{key:"p3",staticClass:"body-copy"},[t._v("\n        After Captain Marquet’s departure, the Santa Fe continued to win awards and promoted a disproportionate number of officers and enlisted men to leadership positions, including ten subsequent submarine captains.\n        Stephen R. Covey said it was the most empowering organization he’d ever seen and wrote about Captain Marquet’s leadership practices in his book, "),a("em",[t._v("The 8th Habit")]),t._v(".\n      ")]),a("p",{key:"p4",staticClass:"body-copy"},[t._v("\n        Captain Marquet is the author of "),a("em",[t._v("Turn the Ship Around! A True Story of Turning Followers Into Leaders.")]),t._v(" Fortune magazine named it the #1 must-read business book of the year, and USA Today listed it as one of the top 12 business books of all time.\n        He is also the author of "),a("em",[t._v("Turn Your Ship Around! A workbook for implementing Intent-Based Leadership.")])]),a("p",{key:"p5",staticClass:"body-copy"},[t._v("\n        Captain Marquet retired from the Navy in 2009, and now speaks to audiences around the globe who want to create empowering work environments that release the passion, initiative, and intellect of each person.\n        This bold and highly effective framework is summarized as “give control, create leaders.”\n        He is a life member of the Council on Foreign Relations, and in 2015 was named to the American Management Association’s “Leaders to Watch” list.\n      ")])])],1)])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-3"},[e("div",{staticClass:"img-wrap-ac-speaker-port m-auto"},[e("img",{staticClass:"img-fluid",attrs:{src:a("mmuO"),alt:"David Marquet"}})])])}];i._withStripped=!0;var n={render:i,staticRenderFns:s};e.a=n},kcfS:function(t,e,a){"use strict";var i=a("Li5j"),s=a("X8tG"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/components/speakers/AhmedSidky.vue",e.a=n.exports},mTuP:function(t,e,a){"use strict";var i=a("Gu7T"),s=a.n(i),n=a("woOf"),r=a.n(n),o=a("//Fk"),l=a.n(o),c=a("y1vT"),d=a.n(c),u=a("XQnD"),p=a.n(u);e.a={props:{directionsLink:String,disableDefaultUi:Boolean,draggable:Boolean,icon:String,iconSize:Array,latLngLiteral:Object,placeId:String,title:String,zoom:Number},data:function(){return{defaultZoom:15,googleMapsAPIKey:"AIzaSyApfHZKwYHZTcBtbXf-DHB5nVUBrC5H59I"}},mounted:function(){var t=this;l.a.resolve(window.google).then(function(e){return e?e.maps:p()({libraries:["places"],key:t.googleMapsAPIKey})}).then(function(e){t.maps=e;var a={disableDefaultUI:!0===t.disableDefaultUi,draggable:!0===t.draggable,scrollwheel:!1,zoom:t.zoom||t.defaultZoom};if(t.latLngLiteral&&(t.latLng=new e.LatLng(t.latLngLiteral),r()(a,{center:t.latLng})),t.map=new e.Map(t.$el,a),t.infoWindow=new e.InfoWindow,t.placesService=new e.places.PlacesService(t.map),t.placeId)return new l.a(function(a,i){t.placesService.getDetails({placeId:t.placeId},function(t,s){s!==e.places.PlacesServiceStatus.OK?i(new Error("Places service failed with status "+s)):a(t)})})}).then(function(e){t.place=e;var a={map:t.map};t.icon>""&&(a.icon={url:t.icon},Array.isArray(t.iconSize)&&(a.icon.scaledSize=new(Function.prototype.bind.apply(t.maps.Size,[null].concat(s()(t.iconSize)))))),t.title>""&&(a.title=t.title),e?a.position=e.geometry.location:t.latLng&&(a.position=t.latLng),a.position&&(t.marker=new t.maps.Marker(a),t.panToMarker(),t.centerChangedListener=d()(t.panToMarker,2e3),t.map.addListener("center_changed",t.centerChangedListener),t.marker.addListener("click",t.selectMarker))}).catch(function(t){console.error(t)})},beforeDestroy:function(){this.centerChangedListener&&this.centerChangedListener.cancel(),this.maps&&this.maps.event.clearInstanceListeners(window),this.maps&&this.maps.event.clearInstanceListeners(this.maps),this.maps&&this.map&&this.maps.event.clearInstanceListeners(this.map),this.maps&&this.marker&&this.maps.event.clearInstanceListeners(this.marker),this.infoWindow=this.latLng=this.maps=this.map=this.marker=this.place=this.placesService=this.centerChangedListener=null},methods:{panToMarker:function(){this.map&&this.marker&&this.map.panTo(this.marker.getPosition())},selectMarker:function(){if(this.marker){var t=[];this.title&&t.push("<h6>"+this.title+"</h6>"),this.directionsLink&&t.push('<a href="'+this.directionsLink+'" target="_blank">Directions</a>'),t.length>0&&(this.infoWindow.setContent(t.join("")),this.infoWindow.open(this.map,this.marker))}}}}},mmuO:function(t,e,a){t.exports=a.p+"img/speaker-david-marquet-port.f5119af.jpg"},pSjd:function(t,e,a){"use strict";var i=a("qWfd"),s=a("Y4YR"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/components/TwitterTimeline.vue",e.a=n.exports},prqd:function(t,e,a){t.exports=a.p+"img/speaker-em-campbell-pretty-port.7fb1171.jpg"},qTr3:function(t,e,a){"use strict";var i=a("L5vj"),s=a("iPdh"),n=a("qeuW"),r=a("A489"),o=a("pSjd"),l=a("kcfS"),c=a("qag7");e.a={components:{GoogleMap:i.a,PastYearLineup:s.a,ReadMore:n.a,SchedEmbed:r.a,TwitterTimeline:o.a,AhmedSidky:l.a,DavidMarquet:c.a},data:function(){return{emailLink:"mailto:info@agilecamp.org",facebookLink:"https://www.facebook.com/agilecamp",twitterLink:"https://twitter.com/goagilecamp",twitterDataSource:{sourceType:"profile",screenName:"GoAgileCamp"},twitterOptions:{tweetLimit:3},registerLink:"https://www.eventbrite.com/e/agilecamp-dallas-2017-registration-34757472536",schedId:"agilecampdallas2017.sched.com",directionsLink:"https://www.google.com/maps/place/Irving+Convention+Center+at+Las+Colinas/@32.878001,-96.9452897,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xaae568269589f1f6!8m2!3d32.878001!4d-96.943101",latLngLiteral:{lat:32.878001,lng:-96.9452897},placeId:"ChIJt0VtiJiCToYR9vGJlSZo5ao",placeName:"Irving Convention Center",shownTravelIndex:-1}},computed:{schedLink:function(){return"https://"+this.schedId}},methods:{toggleTravel:function(t){this.shownTravelIndex=this.shownTravelIndex===t?-1:t,this.$root.$options.$tracker.trackAction("toggle_travel",{shown_travel_index:this.shownTravelIndex})}}}},qWfd:function(t,e,a){"use strict";var i=void 0;i=window.twttr=function(t,e,a){var i=void 0,s=t.getElementsByTagName(e)[0],n=window.twttr||{};return t.getElementById(a)?n:((i=t.createElement(e)).id=a,i.src="https://platform.twitter.com/widgets.js",s.parentNode.insertBefore(i,s),n._e=[],n.ready=function(t){n._e.push(t)},n)}(document,"script","twitter-wjs"),e.a={props:{dataSource:Object,options:Object},mounted:function(){var t=this;i&&i.ready(function(){i.widgets.createTimeline(t.dataSource,t.$el,t.options)})}}},qag7:function(t,e,a){"use strict";var i=a("C6vu"),s=a("kAqK"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/components/speakers/DavidMarquet.vue",e.a=n.exports},qeuW:function(t,e,a){"use strict";var i=a("tqqm"),s=a("GYY1"),n=!1;var r=function(t){n||a("dpEr")},o=a("VU/8")(i.a,s.a,!1,r,"data-v-76f91e8a",null);o.options.__file="src/components/ReadMore.vue",e.a=o.exports},qyJz:function(t,e,a){"use strict";var i=a("+ZMJ"),s=a("kM2E"),n=a("sB3e"),r=a("msXi"),o=a("Mhyx"),l=a("QRG4"),c=a("fBQ2"),d=a("3fs2");s(s.S+s.F*!a("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,a,s,u,p=n(t),h="function"==typeof this?this:Array,m=arguments.length,f=m>1?arguments[1]:void 0,v=void 0!==f,g=0,y=d(p);if(v&&(f=i(f,m>2?arguments[2]:void 0,2)),void 0==y||h==Array&&o(y))for(a=new h(e=l(p.length));e>g;g++)c(a,g,v?f(p[g],g):p[g]);else for(u=y.call(p),a=new h;!(s=u.next()).done;g++)c(a,g,v?r(u,f,[s.value,g],!0):s.value);return a.length=g,a}})},tqqm:function(t,e,a){"use strict";e.a={props:{buttonClass:String},data:function(){return{isMoreShown:!1}}}},"y/G3":function(t,e,a){t.exports=a.p+"img/speaker-ahmed-sidky-port.3e997de.jpg"},y1vT:function(t,e,a){(function(e){var a="Expected a function",i=NaN,s="[object Symbol]",n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,p=d||u||Function("return this")(),h=Object.prototype.toString,m=Math.max,f=Math.min,v=function(){return p.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&h.call(t)==s}(t))return i;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a=o.test(t);return a||l.test(t)?c(t.slice(2),a?2:8):r.test(t)?i:+t}t.exports=function(t,e,i){var s,n,r,o,l,c,d=0,u=!1,p=!1,h=!0;if("function"!=typeof t)throw new TypeError(a);function w(e){var a=s,i=n;return s=n=void 0,d=e,o=t.apply(i,a)}function b(t){var a=t-c;return void 0===c||a>=e||a<0||p&&t-d>=r}function _(){var t=v();if(b(t))return C(t);l=setTimeout(_,function(t){var a=e-(t-c);return p?f(a,r-(t-d)):a}(t))}function C(t){return l=void 0,h&&s?w(t):(s=n=void 0,o)}function k(){var t=v(),a=b(t);if(s=arguments,n=this,c=t,a){if(void 0===l)return function(t){return d=t,l=setTimeout(_,e),u?w(t):o}(c);if(p)return l=setTimeout(_,e),w(c)}return void 0===l&&(l=setTimeout(_,e)),o}return e=y(e)||0,g(i)&&(u=!!i.leading,r=(p="maxWait"in i)?m(y(i.maxWait)||0,e):r,h="trailing"in i?!!i.trailing:h),k.cancel=function(){void 0!==l&&clearTimeout(l),d=0,s=c=n=l=void 0},k.flush=function(){return void 0===l?o:C(v())},k}}).call(e,a("DuR2"))},yzO1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("qTr3"),s=a("etRx"),n=a("VU/8")(i.a,s.a,!1,null,null,null);n.options.__file="src/pages/2017/dallas.vue",e.default=n.exports}});