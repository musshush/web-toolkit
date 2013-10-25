"undefined"==typeof toolkit&&(toolkit={}),toolkit.skycons=function(){function t(){var t,e=document,n=(e.documentElement,e.body),i=!1,o=e.createElement("p"),s=e.createElement("style"),a='#testbefore:before { content: "before"; }';return s.type="text/css",o.id="testbefore",s.styleSheet?s.styleSheet.cssText=a:s.appendChild(e.createTextNode(a)),n.appendChild(s),n.appendChild(o),t=e.getElementById("testbefore").offsetHeight,t>=1&&(i=!0),n.removeChild(s),n.removeChild(o),i}function e(t,e){var n=t.innerHTML,o=i[e];t.innerHTML='<span style="font-family: \'skycons\'" class="ie7-skycon">'+o+"</span>"+n}function n(){if(!t()){var n,i,o,s=document.getElementsByTagName("*");for(n=0;o=s[n],o;n+=1)i=o.className,i=i.match(/skycon-[^\s'"]+/),i&&e(o,i[0])}}var i={"skycon-sky":"&#xf100;","skycon-twitter-reply":"&#xf101;","skycon-chevron":"&#xf102;","skycon-facebook":"&#xf103;","skycon-remote-record":"&#xf104;","skycon-warning":"&#xf105;","skycon-carousel-play":"&#xf106;","skycon-user-profile":"&#xf107;","skycon-search":"&#xf108;","skycon-twitter-retweet":"&#xf109;","skycon-volume":"&#xf10a;","skycon-twitter-favourite":"&#xf10b;","skycon-expand":"&#xf10c;","skycon-carousel-pause":"&#xf10d;","skycon-share":"&#xf10e;","skycon-never-miss":"&#xf10f;","skycon-mail":"&#xf110;","skycon-sky-go":"&#xf111;","skycon-twitter-follow":"&#xf112;","skycon-minify":"&#xf113;","skycon-twitter":"&#xf114;","skycon-close":"&#xf115;","skycon-menu":"&#xf116;","skycon-google-plus":"&#xf117;"};return{add:e,init:n}}(),"function"==typeof window.define&&window.define.amd&&define("utils/skycons",[],function(){return toolkit.skycons}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashmanager=function(){function t(){$(window).on("hashchange",e);var t=document.documentMode,n="onhashchange"in window&&(void 0===t||t>7);n||(a.hash=document.location.hash,setInterval(function(){document.location.hash!==a.hash&&$(window).trigger("hashchange")},200)),a.windowLoaded=!0}function e(t){var e,n;t=s("string"==typeof t?t:location.hash),t?(e=a.globalHashList[t],n="callback",a.lastExecutor=t):a.lastExecutor&&(e=a.globalHashList[a.lastExecutor],n="undo"),e&&"function"==typeof e[n]&&e[n](t)}function n(){var t=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,t.pathname+t.search)):location.hash="!"}function i(t){location.hash="!"+t}function o(t,n,i){var o=a.globalHashList;$(t).each(function(t,r){if(r=s(r),o[r]){var c="hashManager: hash ("+r+") already exists";throw new Error(c)}o[r]={callback:n,undo:i},a.windowLoaded&&r===s(location.hash)&&e(r)})}function s(t){return t.replace(/[#!]/g,"")}var a={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null};return t(),{register:o,change:i,remove:n,onHashChange:e,cleanHash:s}}(),"function"==typeof window.define&&window.define.amd&&define("utils/hashmanager",[],function(){return toolkit.hashmanager}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.popup=function(){function t(t){var e=t.url,n=t.width||400,i=t.height||n,o=t.top||screen.height/2-i/2,s=t.left||screen.width/2-n/2,a=t.title||"Sky";return window.open(e,a,"top="+o+",left="+s+",width="+n+",height="+i)}function e(){$("body").on("click","[data-popup]",function(e){e.preventDefault();var n=$.extend($(this).data("popup"),{url:$(this).attr("href")});t(n)})}return{init:e,open:t}}(),"function"==typeof window.define&&window.define.amd&&define("utils/popup",[],function(){return toolkit.popup}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.tabs=function(t){function e(){s.rememberState?t.register(n(),i):o.tabs.on("click",function(t){t.preventDefault(),i($(this).find("a").attr("href"))})}function n(){var t=[];return o.tabs.each(function(){t.push($(this).attr("aria-controls"))}),t}function i(t){o.tabTargets.add(o.tabs).removeClass("selected"),$("#"+t+"-tab").add($("#"+t)).addClass("selected")}var o={tabContainer:$("section[data-function=tabs]"),tabs:$("section[data-function=tabs] li[role=tab]"),tabTargets:$("section[data-function=tabs] div[role=tabpanel]")},s={rememberState:"true"===o.tabContainer.attr("data-remember-state")};return e(),{getHashList:n,changeTab:i}}(toolkit.hashmanager),"function"==typeof window.define&&window.define.amd&&define("modules/tabs",["utils/hashmanager"],function(){return toolkit.tabs}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.share=function(){function t(){i.shareCount.on("click keypress",e)}function e(t){t.preventDefault();var e=$(this).parent(),n="keypress "+("ontouchend"in document.documentElement?"touchend":"click");("click"===t.type||"touchend"===t.type||"keypress"===t.type&&13===t.which)&&(e.toggleClass("active"),i.document.on(n,function o(t){$.contains(e[0],t.target)||(e.removeClass("active"),i.document.off(n,o))}))}function n(){t()}var i={document:$(document),shareCount:$(".share-popup .summary")};return{init:n,toggleSharePopover:e}}(),"function"==typeof window.define&&window.define.amd&&define("modules/share",[],function(){return toolkit.share}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.video=function(t,e){function n(t,e){this.container=t,this.wrapper=t.find(".video-wrapper"),this.wrapper.attr("id","video-"+e.videoId),this.videocontrolcontainer=t.find(".videocontrolcontainer"),this.player=t.find("video"),this.videocontrolcontainer.find("img").on("error",function(){this.src=e.placeHolderImage}),this.options=e,this.bindEvents()}return n.prototype={bindEvents:function(){var t=this,e=function(t){t.preventDefault()},n=function(){return t.stop(),i.off("click",e),!1},i=this.wrapper;i.on("click",e).find(".close").one("click touchstart",n),this.player.on("ended webkitendfullscreen",n)},play:function(){var t=this;this.showCanvas(function(){t.player.sky_html5player(t.options),setTimeout(function(){sky.html5player.play()},1333)})},stop:function(){var n=this;e(t).off("skycom.resizeend",n.resizeContainer),sky.html5player.close(this.wrapper),n.videocontrolcontainer.html(n.originalHtml),this.hideCanvas()},showCanvas:function(n){var i,o=this.container,s=o.find(".video-overlay"),a=o.find(".video-wrapper"),r=o.find(".play-video"),c=o.find(".video-wrapper .close"),d=500,l=this;this.originalHeight=o.height(),a.addClass("playing-video"),s.fadeIn(function(){r.fadeOut(),i=l.calculateHeightForVideo(),o.animate({height:i},d,function(){e(t).on("skycom.resizeend",e.proxy(l.resizeContainer,l)),a.show(),s.fadeOut(d,function(){c.addClass("active")}),n()})})},calculateHeightForVideo:function(){return Math.round(9*(this.container.width()/16))},resizeContainer:function(){this.container.animate({height:this.calculateHeightForVideo()},250)},hideCanvas:function(){var t=this.container,e=t.find(".video-overlay"),n=t.find(".video-wrapper"),i=t.find(".play-video"),o=t.find(".video-wrapper .close"),s=500,a=this,r=this.originalHeight;e.fadeIn(s,function(){o.removeClass("active"),t.animate({height:r},s,function(){t.css({height:"auto"}),a.options.closeCallback&&a.options.closeCallback(),i.fadeIn(),e.hide(),n.fadeOut(),n.removeClass("playing-video")})})}},n}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/video",[],function(){return toolkit.video}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.carousel=function(t,e){function n(t,e){this.options=e,this.$viewport=t,this.$slideContainer=t.find(".skycom-carousel-container"),this.$slides=this.$slideContainer.find(">"),this.currentIndex=0,this.slideCount=this.$slides.length,this.timerId=!1,this.touchReset(),this.bindEvents()}var i=function(){return"WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix}(),o=function(){var t=document.body.style;return void 0!==t.transform||void 0!==t.WebkitTransform||void 0!==t.MozTransform||void 0!==t.OTransform}();n.prototype={unbindTouchEvents:function(){this.$slideContainer.off("touchstart touchmove touchend touchcancel")},bindTouchEvents:function(){this.$slideContainer.on("touchstart",this.touchstart.bind(this)).on("touchmove",this.touchmove.bind(this)).on("touchend",this.touchend.bind(this)).on("touchcancel",this.touchReset.bind(this))},bindEvents:function(){this.bindTouchEvents(),this.$slideContainer.find("a").on("click",this.pause.bind(this))},unbindEvents:function(){this.unbindTouchEvents(),this.$slideContainer.find("a").off("click")},setOffset:function(t,e){var n=this.$slideContainer.removeClass("animate");return e&&n.addClass("animate"),i?n.css("transform","translate3d("+t+"%,0,0) scale3d(1,1,1)"):o?n.css("transform","translate("+t+"%,0)"):e?n.animate({left:2*t+"%"},600):n.css({left:2*t+"%"}),this},moveSlide:function(t){var e,n,i=this,o=this.$slides;return n=t.index>=this.slideCount?0:t.index<0?this.slideCount-1:t.index,e=t.index>this.currentIndex&&!t.reverse?"left":"right",o.filter(":not(:eq("+this.currentIndex+"))").hide(),o.eq(this.currentIndex).css("float",e),o.eq(n).show().css("float","left"==e?"right":"left"),this.setOffset(t.start,!1),"undefined"!=typeof t.end&&(setTimeout(function(){i.setOffset(t.end,!0),i.$viewport.trigger("change",n)},20),this.currentIndex=n,"function"==typeof t.callback&&t.callback(n)),n},"goto":function(t,e,n){return e!==!1&&this.pause(),t!==this.currentIndex?(t>this.currentIndex?this.moveSlide({index:t,start:0,end:-50,callback:n}):this.moveSlide({index:t,start:-50,end:0,callback:n}),this):void 0},next:function(t,e){return this.goto(this.currentIndex+1,t,e),this.$viewport.find(".indicators, .actions").css("display","block"),this},previous:function(){return this.goto(this.currentIndex-1),this.$viewport.find(".indicators, .actions").css("display","block"),this},play:function(t,e){var n=this,i=this.options.interval;return n.timerId=setTimeout(function(){n.next(!1),n.timerId=setTimeout(function t(){n.next(!1,function(){n.timerId=setTimeout(t,i)})},i)},e||this.options.onPlayDelay),this.$viewport.trigger("playing"),"function"==typeof t&&t(),this},pause:function(t){return clearTimeout(this.timerId),this.$viewport.trigger("paused"),"function"==typeof t&&t(),this},touchstart:function(t){var e=t.originalEvent.touches[0];this.pause(),this.swipe.start={x:e.pageX,y:e.pageY}},touchmove:function(t){var e,n=this.swipe,i=t.originalEvent.touches[0],o=i.pageX-n.start.x,s=i.pageY-n.start.y,a=Math.abs(o)>Math.abs(s),r=0>o?this.currentIndex+1:this.currentIndex-1;n.start&&a!==!1&&(t.preventDefault(),e=100*(o/this.$slideContainer.outerWidth(!0)),o>0&&(e-=50),this.swipe.positionAsPercentage=e,this.moveSlide({index:r,start:e}))},touchend:function(t){if(this.swipe.start){var e=this.swipe,n=e.positionAsPercentage,i=t.originalEvent.changedTouches[0],o=i.pageX-e.start.x,s=null,a=75;if(Math.abs(o)>a&&(s=0>o?"left":"right"),"left"===s)this.moveSlide({index:this.currentIndex+1,start:n,end:-50}),this.$viewport.find(".next").trigger("toolkit.track");else if("right"===s)this.moveSlide({index:this.currentIndex-1,start:n,end:0}),this.$viewport.find(".previous").trigger("toolkit.track");else if(0!==n){var r,c=o>0?n+50:n,d=this.currentIndex,l=0;0>c?this.currentIndex=d+1>=this.slideCount?0:d+1:(this.currentIndex-=1,l=-50,c-=50),r=0===this.currentIndex&&d===this.slideCount-1,this.moveSlide({index:d,start:c,end:l,reverse:r})}this.touchReset()}},touchReset:function(){this.swipe={start:!1,positionAsPercentage:0}}},e.fn.skycom_carousel=function(t){var i=e.extend(!0,{carousel:{actions:[{id:"play",label:"Play Carousel"},{id:"pause",label:"Pause Carousel"},{id:"previous",label:"Previous"},{id:"next",label:"Next"}],autoplay:!0,startSlideIndex:0,onPlayDelay:500,interval:6e3},video:{token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",autoplay:!1,videoId:null,freewheel:!1,placeHolderImage:"//static.video.sky.com/posterframes/skychasky.jpg"}},t),o={actions:function(t,n){var i,o,s,a,r="",c=n.actions,d=n.onclick;if(n.count<=1)return this;for(s in c)a="",i=c[s].id,o=c[s].label,("next"==i||"previous"==i)&&(a=" hidden-touch "),r+='<a href="#" class="skycom-internal '+a+i+'" >',r+='<span class="icon-carousel-'+i+'"></span>'+o,("next"==i||"previous"==i)&&(r+='<span class="icon-carousel-'+i+'-over over"></span>'),r+="</a>";return t.find(".skycom-carousel-container").before('<div class="actions">'+r+"</div>"),t.find("> .actions > *").each(function(t){e(this).attr("data-action",c[t].id).on("click",function(e){d(c[t].id),e.preventDefault()})}),this},indicators:function(t,n){var i,o,s=n.count,a=n.onclick,r='<div class="indicators"><div class="container">',c=' class="active"';if(1>=s)return this;for(o=s;o--;)r+="<span"+c+' data-tracking data-tracking-label="indicator"></span>',c="";return i=e(r+"</div></div>").on("click","span",function(t){a(e(t.currentTarget).index())}),t.append(i),this},video:function(t){return t.append('<div class="video-overlay"></div>'),this}};return this.each(function(){var t=e(this),s=new n(t,i.carousel),a=function(e){o.indicators(t,{count:e.slideCount,onclick:function(t){e.goto(t)}}).actions(t,{count:e.slideCount,actions:i.carousel.actions,onclick:function(t){e[t]()}}).video(t)};a(s),t.on("click",".play-video",function(n){n.preventDefault(),i.video.videoId=e(this).attr("data-video-id"),i.carousel.videoAds&&(i.video.freewheel=!0),i.video.closeCallback=function(){t.find(".actions, .indicators").show()};var o=new toolkit.video(s.$viewport,i.video);s.pause(),t.find(".actions, .indicators").hide(),o.play()}).on("change",function(e,n){n=n||0,t.find(".indicators .container > *").removeClass("active").eq(n).addClass("active"),s.$slides.removeClass("active").find("a").attr("tabindex",-1),s.$slides.eq(n).addClass("active").find("a").removeAttr("tabindex")}).on("playing",function(){t.removeClass("paused").addClass("playing")}).on("paused",function(){t.removeClass("playing").addClass("paused")}).on("pause",function(){s.pause()}).on("play",function(){s.play()}).on("refresh",function(e,n){s.$slides=s.$slideContainer.find(">"),s.slideCount=s.$slides.length,t.find(".indicators").remove(),t.find(".actions").remove(),t.find(".video-overlay").remove(),a(s),n=parseInt(n,10),isNaN(n)||0>n?n=0:n>s.slideCount-1&&(n=s.slideCount-1),n>s.currentIndex?s.moveSlide({index:n,start:0,end:-50}):s.moveSlide({index:n,start:-50,end:0})}).on("keyup",function(t){switch(t.keyCode){case 9:s.pause();break;case 37:s.previous();break;case 39:s.next()}}).find(".toggle-terms").on("click",function(){s.$viewport.toggleClass("showing-tandcs")}),s.slideCount>1?(s[i.carousel.autoplay===!0?"play":"pause"](!1,i.carousel.interval),s.goto(i.carousel.startSlideIndex,!1),t.trigger("change")):s.unbindTouchEvents()})}}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/carousel",[],function(){return toolkit.carousel}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.main=function(){function t(){var t=function(){$(document.body).addClass("window-loaded")},e=setTimeout(t,5e3);$(window).load(function(){clearTimeout(e),t()})}t()}(),toolkit.modules=function(){var t=function(t){var e,n=$.extend({skycons:!1,share:!1,popup:!1},t);for(e in n)(n[e]||!t)&&toolkit[e]&&toolkit[e].init&&toolkit[e].init()};return{init:t}}(),"function"==typeof window.define&&window.define.amd&&define("modules",[],function(){return toolkit.modules}),"function"==typeof window.define&&window.define.amd&&define("toolkit",["utils/skycons","utils/hashmanager","utils/popup","modules","modules/tabs","modules/share","modules/video","modules/carousel"],function(t,e,n,i,o,s,a,r){return{modules:i,skycons:t,hashmanager:e,popup:n,tabs:o,share:s,video:a,carousel:r}});
//# sourceMappingURL=toolkit.js.map