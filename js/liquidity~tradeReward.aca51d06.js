(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["liquidity~tradeReward"],{"0adc":function(i,e,s){},"1d12":function(i,e,s){"use strict";var n=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("span",{staticClass:"sort",on:{click:function(e){return i.sort(i.num)}}},[i._v(" "+i._s(i.name)+" "),n("img",{directives:[{name:"show",rawName:"v-show",value:i.sortType===i.num&&"0"===i.sortSide,expression:"sortType === num && sortSide === '0'"}],attrs:{src:s("8219"),alt:""}}),n("img",{directives:[{name:"show",rawName:"v-show",value:i.sortType===i.num&&"1"===i.sortSide,expression:"sortType === num && sortSide === '1'"}],attrs:{src:s("4ee8"),alt:""}}),n("img",{directives:[{name:"show",rawName:"v-show",value:i.sortType!==i.num,expression:"sortType !== num"}],attrs:{src:s("0edc"),alt:""}})])},t=[],o={name:"h5sort",data:function(){return{sortNum:1}},props:{name:{type:String,default:""},sortType:{type:String,default:""},sortSide:{type:String,default:"1"},num:{type:String,default:""}},beforeMount:function(){},computed:{},methods:{sort:function(i){this.sortNum=1==this.sortNum?2:1,this.$emit("sort",this.num,this.sortSide,this.sortNum)}}},r=o,a=(s("f04b"),s("2877")),l=Object(a["a"])(r,n,t,!1,null,"beb63ce6",null);e["a"]=l.exports},"6ca2":function(i,e,s){"use strict";s("d7a6")},9029:function(i,e){i.exports=function(i){var e={};function s(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return i[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}return s.m=i,s.c=e,s.d=function(i,e,n){s.o(i,e)||Object.defineProperty(i,e,{configurable:!1,enumerable:!0,get:n})},s.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return s.d(e,"a",e),e},s.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},s.p="",s(s.s=1)}([function(i,e,s){"use strict";var n={MOBILE:"mobile",TABLET:"tablet",SMART_TV:"smarttv",CONSOLE:"console",WEARABLE:"wearable",BROWSER:void 0},t={CHROME:"Chrome",FIREFOX:"Firefox",OPERA:"Opera",YANDEX:"Yandex",SAFARI:"Safari",INTERNET_EXPLORER:"Internet Explorer",EDGE:"Edge",CHROMIUM:"Chromium",IE:"IE",MOBILE_SAFARI:"Mobile Safari",EDGE_CHROMIUM:"Edge Chromium"},o={IOS:"iOS",ANDROID:"Android",WINDOWS_PHONE:"Windows Phone",WINDOWS:"Windows",MAC_OS:"Mac OS"},r={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1};i.exports={BROWSER_TYPES:t,DEVICE_TYPES:n,OS_TYPES:o,defaultData:r}},function(i,e,s){"use strict";var n=s(2),t=s(0),o=t.BROWSER_TYPES,r=t.OS_TYPES,a=t.DEVICE_TYPES,l=s(4),c=l.checkType,u=l.broPayload,d=l.mobilePayload,m=l.wearPayload,w=l.consolePayload,h=l.stvPayload,p=l.getNavigatorInstance,f=l.isIOS13Check,b=new n,v=b.getBrowser(),g=b.getDevice(),E=b.getEngine(),x=b.getOS(),y=b.getUA(),S=o.CHROME,T=o.CHROMIUM,O=o.IE,k=o.INTERNET_EXPLORER,C=o.OPERA,N=o.FIREFOX,A=o.SAFARI,I=o.EDGE,_=o.YANDEX,M=o.MOBILE_SAFARI,R=a.MOBILE,P=a.TABLET,V=a.SMART_TV,B=a.BROWSER,D=a.WEARABLE,L=a.CONSOLE,W=r.ANDROID,z=r.WINDOWS_PHONE,j=r.IOS,$=r.WINDOWS,F=r.MAC_OS,U=function(){return g.type===R},H=function(){return g.type===P},G=function(){switch(g.type){case R:case P:return!0;default:return!1}},Y=function(){return x.name===r.WINDOWS&&"10"===x.version&&("string"===typeof y&&-1!==y.indexOf("Edg/"))},X=function(){return g.type===V},q=function(){return g.type===B},J=function(){return g.type===D},Q=function(){return g.type===L},Z=function(){return x.name===W},K=function(){return x.name===$},ii=function(){return x.name===F},ei=function(){return x.name===z},si=function(){return x.name===j},ni=function(){return v.name===S},ti=function(){return v.name===N},oi=function(){return v.name===T},ri=function(){return v.name===I},ai=function(){return v.name===_},li=function(){return v.name===A||v.name===M},ci=function(){return v.name===M},ui=function(){return v.name===C},di=function(){return v.name===k||v.name===O},mi=function(){var i=p(),e=i&&i.userAgent.toLowerCase();return"string"===typeof e&&/electron/.test(e)},wi=function(){var i=p();return i&&(/iPad|iPhone|iPod/.test(i.platform)||"MacIntel"===i.platform&&i.maxTouchPoints>1)&&!window.MSStream},hi=function(){return f("iPad")},pi=function(){return f("iPhone")},fi=function(){return f("iPod")},bi=function(){return v.major},vi=function(){return v.version},gi=function(){return x.version?x.version:"none"},Ei=function(){return x.name?x.name:"none"},xi=function(){return v.name},yi=function(){return g.vendor?g.vendor:"none"},Si=function(){return g.model?g.model:"none"},Ti=function(){return E.name},Oi=function(){return E.version},ki=function(){return y},Ci=function(){return g.type},Ni=X(),Ai=Q(),Ii=J(),_i=ci()||hi(),Mi=oi(),Ri=G()||hi(),Pi=U(),Vi=H()||hi(),Bi=q(),Di=Z(),Li=ei(),Wi=si()||hi(),zi=ni(),ji=ti(),$i=li(),Fi=ui(),Ui=di(),Hi=gi(),Gi=Ei(),Yi=bi(),Xi=vi(),qi=xi(),Ji=yi(),Qi=Si(),Zi=Ti(),Ki=Oi(),ie=ki(),ee=ri()||Y(),se=ai(),ne=Ci(),te=wi(),oe=hi(),re=pi(),ae=fi(),le=mi(),ce=Y(),ue=ri(),de=K(),me=ii(),we=c(g.type);function he(){var i=we.isBrowser,e=we.isMobile,s=we.isTablet,n=we.isSmartTV,t=we.isConsole,o=we.isWearable;return i?u(i,v,E,x,y):n?h(n,E,x,y):t?w(t,E,x,y):e||s?d(we,g,x,y):o?m(o,E,x,y):void 0}i.exports={deviceDetect:he,isSmartTV:Ni,isConsole:Ai,isWearable:Ii,isMobileSafari:_i,isChromium:Mi,isMobile:Ri,isMobileOnly:Pi,isTablet:Vi,isBrowser:Bi,isAndroid:Di,isWinPhone:Li,isIOS:Wi,isChrome:zi,isFirefox:ji,isSafari:$i,isOpera:Fi,isIE:Ui,osVersion:Hi,osName:Gi,fullBrowserVersion:Yi,browserVersion:Xi,browserName:qi,mobileVendor:Ji,mobileModel:Qi,engineName:Zi,engineVersion:Ki,getUA:ie,isEdge:ee,isYandex:se,deviceType:ne,isIOS13:te,isIPad13:oe,isIPhone13:re,isIPod13:ae,isElectron:le,isEdgeChromium:ce,isLegacyEdge:ue,isWindows:de,isMacOs:me}},function(i,e,s){var n;
/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */(function(t,o){"use strict";var r="0.7.18",a="",l="?",c="function",u="undefined",d="object",m="string",w="major",h="model",p="name",f="type",b="vendor",v="version",g="architecture",E="console",x="mobile",y="tablet",S="smarttv",T="wearable",O="embedded",k={extend:function(i,e){var s={};for(var n in i)e[n]&&e[n].length%2===0?s[n]=e[n].concat(i[n]):s[n]=i[n];return s},has:function(i,e){return"string"===typeof i&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i===m?i.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},C={rgx:function(i,e){var s,n,t,r,a,l,u=0;while(u<e.length&&!a){var m=e[u],w=e[u+1];s=n=0;while(s<m.length&&!a)if(a=m[s++].exec(i),a)for(t=0;t<w.length;t++)l=a[++n],r=w[t],typeof r===d&&r.length>0?2==r.length?typeof r[1]==c?this[r[0]]=r[1].call(this,l):this[r[0]]=r[1]:3==r.length?typeof r[1]!==c||r[1].exec&&r[1].test?this[r[0]]=l?l.replace(r[1],r[2]):o:this[r[0]]=l?r[1].call(this,l,r[2]):o:4==r.length&&(this[r[0]]=l?r[3].call(this,l.replace(r[1],r[2])):o):this[r]=l||o;u+=2}},str:function(i,e){for(var s in e)if(typeof e[s]===d&&e[s].length>0){for(var n=0;n<e[s].length;n++)if(k.has(e[s][n],i))return s===l?o:s}else if(k.has(e[s],i))return s===l?o:s;return i}},N={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},A={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[p,v],[/(opios)[\/\s]+([\w\.]+)/i],[[p,"Opera Mini"],v],[/\s(opr)\/([\w\.]+)/i],[[p,"Opera"],v],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[p,v],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[p,"IE"],v],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[p,"Edge"],v],[/(yabrowser)\/([\w\.]+)/i],[[p,"Yandex"],v],[/(puffin)\/([\w\.]+)/i],[[p,"Puffin"],v],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[p,"UCBrowser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[p,/_/g," "],v],[/(micromessenger)\/([\w\.]+)/i],[[p,"WeChat"],v],[/(qqbrowserlite)\/([\w\.]+)/i],[p,v],[/(QQ)\/([\d\.]+)/i],[p,v],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[p,v],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[p,v],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[p,v],[/(MetaSr)[\/\s]?([\w\.]+)/i],[p],[/(LBBROWSER)/i],[p],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[v,[p,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[v,[p,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[v,[p,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[p,/(.+)/,"$1 WebView"],v],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[p,/(.+(?:g|us))(.+)/,"$1 $2"],v],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[v,[p,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[p,v],[/(dolfin)\/([\w\.]+)/i],[[p,"Dolphin"],v],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[p,"Chrome"],v],[/(coast)\/([\w\.]+)/i],[[p,"Opera Coast"],v],[/fxios\/([\w\.-]+)/i],[v,[p,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[v,[p,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[v,p],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[p,"GSA"],v],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[p,[v,C.str,N.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[p,v],[/(navigator|netscape)\/([\w\.-]+)/i],[[p,"Netscape"],v],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[p,v]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[g,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[g,k.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[h,b,[f,y]],[/applecoremedia\/[\w\.]+ \((ipad)/],[h,[b,"Apple"],[f,y]],[/(apple\s{0,1}tv)/i],[[h,"Apple TV"],[b,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[b,h,[f,y]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[h,[b,"Amazon"],[f,y]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[h,C.str,N.device.amazon.model],[b,"Amazon"],[f,x]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[h,b,[f,x]],[/\((ip[honed|\s\w*]+);/i],[h,[b,"Apple"],[f,x]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[b,h,[f,x]],[/\(bb10;\s(\w+)/i],[h,[b,"BlackBerry"],[f,x]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[h,[b,"Asus"],[f,y]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[b,"Sony"],[h,"Xperia Tablet"],[f,y]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[h,[b,"Sony"],[f,x]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[b,h,[f,E]],[/android.+;\s(shield)\sbuild/i],[h,[b,"Nvidia"],[f,E]],[/(playstation\s[34portablevi]+)/i],[h,[b,"Sony"],[f,E]],[/(sprint\s(\w+))/i],[[b,C.str,N.device.sprint.vendor],[h,C.str,N.device.sprint.model],[f,x]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[b,h,[f,y]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[b,[h,/_/g," "],[f,x]],[/(nexus\s9)/i],[h,[b,"HTC"],[f,y]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[h,[b,"Huawei"],[f,x]],[/(microsoft);\s(lumia[\s\w]+)/i],[b,h,[f,x]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[h,[b,"Microsoft"],[f,E]],[/(kin\.[onetw]{3})/i],[[h,/\./g," "],[b,"Microsoft"],[f,x]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[h,[b,"Motorola"],[f,x]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[h,[b,"Motorola"],[f,y]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[b,k.trim],[h,k.trim],[f,S]],[/hbbtv.+maple;(\d+)/i],[[h,/^/,"SmartTV"],[b,"Samsung"],[f,S]],[/\(dtv[\);].+(aquos)/i],[h,[b,"Sharp"],[f,S]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[b,"Samsung"],h,[f,y]],[/smart-tv.+(samsung)/i],[b,[f,S],h],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[b,"Samsung"],h,[f,x]],[/sie-(\w*)/i],[h,[b,"Siemens"],[f,x]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[b,"Nokia"],h,[f,x]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[h,[b,"Acer"],[f,y]],[/android.+([vl]k\-?\d{3})\s+build/i],[h,[b,"LG"],[f,y]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[b,"LG"],h,[f,y]],[/(lg) netcast\.tv/i],[b,h,[f,S]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[h,[b,"LG"],[f,x]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[h,[b,"Lenovo"],[f,y]],[/linux;.+((jolla));/i],[b,h,[f,x]],[/((pebble))app\/[\d\.]+\s/i],[b,h,[f,T]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[b,h,[f,x]],[/crkey/i],[[h,"Chromecast"],[b,"Google"]],[/android.+;\s(glass)\s\d/i],[h,[b,"Google"],[f,T]],[/android.+;\s(pixel c)\s/i],[h,[b,"Google"],[f,y]],[/android.+;\s(pixel xl|pixel)\s/i],[h,[b,"Google"],[f,x]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[h,/_/g," "],[b,"Xiaomi"],[f,x]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[h,/_/g," "],[b,"Xiaomi"],[f,y]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[h,[b,"Meizu"],[f,y]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[h,[b,"OnePlus"],[f,x]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[h,[b,"RCA"],[f,y]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[h,[b,"Dell"],[f,y]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[h,[b,"Verizon"],[f,y]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[b,"Barnes & Noble"],h,[f,y]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[h,[b,"NuVision"],[f,y]],[/android.+;\s(k88)\sbuild/i],[h,[b,"ZTE"],[f,y]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[h,[b,"Swiss"],[f,x]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[h,[b,"Swiss"],[f,y]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[h,[b,"Zeki"],[f,y]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[b,"Dragon Touch"],h,[f,y]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[h,[b,"Insignia"],[f,y]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[h,[b,"NextBook"],[f,y]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[b,"Voice"],h,[f,x]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[b,"LvTel"],h,[f,x]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[h,[b,"Envizen"],[f,y]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[b,h,[f,y]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[h,[b,"MachSpeed"],[f,y]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[b,h,[f,y]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[h,[b,"Rotor"],[f,y]],[/android.+(KS(.+))\s+build/i],[h,[b,"Amazon"],[f,y]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[b,h,[f,y]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[f,k.lowerize],b,h],[/(android[\w\.\s\-]{0,9});.+build/i],[h,[b,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[v,[p,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[p,v],[/rv\:([\w\.]{1,9}).+(gecko)/i],[v,p]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[p,v],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[p,[v,C.str,N.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[p,"Windows"],[v,C.str,N.os.windows.version]],[/\((bb)(10);/i],[[p,"BlackBerry"],v],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[p,v],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[p,"Symbian"],v],[/\((series40);/i],[p],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[p,"Firefox OS"],v],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[p,v],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[p,"Chromium OS"],v],[/(sunos)\s?([\w\.\d]*)/i],[[p,"Solaris"],v],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[p,v],[/(haiku)\s(\w+)/i],[p,v],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[p,"Mac OS"],[v,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[p,v]]},I=function(i,e){if("object"===typeof i&&(e=i,i=o),!(this instanceof I))return new I(i,e).getResult();var s=i||(t&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:a),n=e?k.extend(A,e):A;return this.getBrowser=function(){var i={name:o,version:o};return C.rgx.call(i,s,n.browser),i.major=k.major(i.version),i},this.getCPU=function(){var i={architecture:o};return C.rgx.call(i,s,n.cpu),i},this.getDevice=function(){var i={vendor:o,model:o,type:o};return C.rgx.call(i,s,n.device),i},this.getEngine=function(){var i={name:o,version:o};return C.rgx.call(i,s,n.engine),i},this.getOS=function(){var i={name:o,version:o};return C.rgx.call(i,s,n.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=i,this},this};I.VERSION=r,I.BROWSER={NAME:p,MAJOR:w,VERSION:v},I.CPU={ARCHITECTURE:g},I.DEVICE={MODEL:h,VENDOR:b,TYPE:f,CONSOLE:E,MOBILE:x,SMARTTV:S,TABLET:y,WEARABLE:T,EMBEDDED:O},I.ENGINE={NAME:p,VERSION:v},I.OS={NAME:p,VERSION:v},typeof e!==u?(typeof i!==u&&i.exports&&(e=i.exports=I),e.UAParser=I):"function"===c&&s(3)?(n=function(){return I}.call(e,s,e,i),n===o||(i.exports=n)):t&&(t.UAParser=I);var _=t&&(t.jQuery||t.Zepto);if(typeof _!==u){var M=new I;_.ua=M.getResult(),_.ua.get=function(){return M.getUA()},_.ua.set=function(i){M.setUA(i);var e=M.getResult();for(var s in e)_.ua[s]=e[s]}}})("object"===typeof window?window:this)},function(i,e){(function(e){i.exports=e}).call(e,{})},function(i,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(i[n]=s[n])}return i},t=s(0),o=t.DEVICE_TYPES,r=t.defaultData,a=function(i){switch(i){case o.MOBILE:return{isMobile:!0};case o.TABLET:return{isTablet:!0};case o.SMART_TV:return{isSmartTV:!0};case o.CONSOLE:return{isConsole:!0};case o.WEARABLE:return{isWearable:!0};case o.BROWSER:return{isBrowser:!0};default:return r}},l=function(i,e,s,n,t){return{isBrowser:i,browserMajorVersion:e.major,browserFullVersion:e.version,browserName:e.name,engineName:s.name||!1,engineVersion:s.version,osName:n.name,osVersion:n.version,userAgent:t}},c=function(i,e,s,t){return n({},i,{vendor:e.vendor,model:e.model,os:s.name,osVersion:s.version,ua:t})},u=function(i,e,s,n){return{isSmartTV:i,engineName:e.name,engineVersion:e.version,osName:s.name,osVersion:s.version,userAgent:n}},d=function(i,e,s,n){return{isConsole:i,engineName:e.name,engineVersion:e.version,osName:s.name,osVersion:s.version,userAgent:n}},m=function(i,e,s,n){return{isWearable:i,engineName:e.name,engineVersion:e.version,osName:s.name,osVersion:s.version,userAgent:n}},w=e.getNavigatorInstance=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},h=e.isIOS13Check=function(i){var e=w();return e&&e.platform&&(-1!==e.platform.indexOf(i)||"MacIntel"===e.platform&&e.maxTouchPoints>1&&!window.MSStream)};i.exports={checkType:a,broPayload:l,mobilePayload:c,stvPayload:u,consolePayload:d,wearPayload:m,getNavigatorInstance:w,isIOS13Check:h}}])},caa1:function(i,e,s){},d7a6:function(i,e,s){},d816:function(i,e,s){"use strict";var n=function(){var i=this,e=i.$createElement,s=i._self._c||e;return s("section",{class:i.chainName},[s("div",{staticClass:"tip-msg-h5"},[s("div",{staticClass:"text-msg-h5"},[s("p",{staticClass:"text-info text-info1"},[i._v(i._s(i.$t("JoinTheDecentralized")))]),s("p",{staticClass:"p-text",on:{click:function(e){return i.$router.push("/introduce")}}},[s("button",[i._v(i._s(i.$t("ApplyNow")))])])])]),s("div",{staticClass:"tip-msg-pc"},[s("div",{staticClass:"div-text"},[s("p",{staticClass:"text-info"},[i._v(i._s(i.$t("JoinTheDecentralized")))])]),s("p",{staticClass:"p-text",on:{click:function(e){return i.$router.push("/introduce")}}},[s("button",[i._v(i._s(i.$t("ApplyToJoin")))])])])])},t=[],o={name:"apply-tip",components:{},data:function(){return{}},methods:{}},r=o,a=(s("f2db"),s("2877")),l=Object(a["a"])(r,n,t,!1,null,"4334412c",null);e["a"]=l.exports},e150:function(i,e,s){"use strict";var n=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("section",{staticClass:"selete",class:i.chainName},[n("div",{staticClass:"sele-head"},[n("ul",{staticClass:"sele-wenzi"},[i._l(i.list,(function(e,s){return n("li",{key:s,staticClass:"sele-span item-span",class:e.show?"sele-act-btn":"",on:{click:function(n){return i.onlist(e,s)}}},[n("span",[i._v(" "+i._s(e.name))])])})),n("li",{staticClass:"li-hide"}),n("li",{staticClass:"li-hide"})],2),n("div",{staticClass:"se-input"},[i.showCheck?n("div",{staticClass:"action",on:{click:i.chenck}},[n("img",{directives:[{name:"show",rawName:"v-show",value:"Heco"==i.chainName&&i.actionChenck,expression:"chainName=='Heco'&&actionChenck"}],attrs:{src:s("69fa"),alt:""}}),n("img",{directives:[{name:"show",rawName:"v-show",value:"Bsc"==i.chainName&&i.actionChenck,expression:"chainName=='Bsc'&&actionChenck"}],attrs:{src:s("e1a0"),alt:""}}),n("img",{directives:[{name:"show",rawName:"v-show",value:!i.actionChenck,expression:"!actionChenck"}],attrs:{src:s("5a5d"),alt:""}}),n("span",[i._v(i._s(i.$t("Pledged")))])]):i._e(),n("div",{staticClass:"sele-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:i.searchValue,expression:"searchValue"}],attrs:{type:"text",placeholder:i.inputText},domProps:{value:i.searchValue},on:{input:function(e){e.target.composing||(i.searchValue=e.target.value)}}}),n("img",{attrs:{src:s("1c4e"),alt:""}})])])]),i.listItem.length>0?n("div",{staticClass:"item-ul"},[n("ul",{staticClass:"sele-item"},i._l(i.listItem,(function(e,s){return n("li",{key:s,staticClass:"se-item-name child-item",class:e.show?"se-li-item-act":"",on:{click:function(n){return i.onlistItem(e,s)}}},[n("span",[i._v(" "+i._s(e.name)+" ")])])})),0)]):i._e()])},t=[],o=s("b85c"),r=(s("159b"),{name:"selete-table",data:function(){return{listAct:0,listItemAct:0,searchValue:"",listItem:[],actionChenck:!1,autoTapIndex:0,autoTapChild:[]}},watch:{searchValue:function(i){this.$emit("change-input",i)},list:function(i){this.listItem=i[0].child||[]},chainName:function(){var i,e=Object(o["a"])(this.list);try{for(e.s();!(i=e.n()).done;){var s=i.value;if(s.show=!1,s.child){var n,t=Object(o["a"])(s.child);try{for(t.s();!(n=t.n()).done;){var r=n.value;r.show=!1}}catch(a){t.e(a)}finally{t.f()}}s.child&&s.child.length>0&&(s.child[0].show=!0)}}catch(a){e.e(a)}finally{e.f()}this.list[0].show=!0,this.listItem=this.list[0].child||[]}},props:{list:{type:Array,default:function(){return[]}},inputText:{type:String,default:""},showCheck:{type:Boolean,default:!0},autoTap:{type:Boolean,default:!1}},beforeMount:function(){this.listItem=this.list[0].child||[]},computed:{chainName:function(){return this.changeList(),this.$store.state.chainName},isPC:function(){return this.$store.getters.isPC}},methods:{changeList:function(){},chenck:function(){if(this.actionChenck=!this.actionChenck,this.$emit("onchenck",this.actionChenck),this.autoTap){for(var i in this.list)this.list[i].show=!1;this.actionChenck?(this.list[0].show=!0,this.$emit("change-list",{item:this.list[0],index:0}),this.listItem=[]):(this.list[this.autoTapIndex].show=!0,this.$emit("change-list",{item:this.list[this.autoTapIndex],index:this.autoTapIndex}),this.listItem=this.autoTapChild)}},setAct:function(i,e,s,n,t){for(var o in this[i][this[e]].show=!1,this[i])this[i][o].show=!1;this[i][s].show=!0,this[e]=s,null!=n&&this.$emit(t,{item:n,index:s})},onlist:function(i,e){for(var s in this.isPC||this.hiddenHandle(),this.list)this.list[s].show=!1;this.list[e].show=!0,this.$emit("change-list",{item:i,index:e}),this.listItem=i.child||[],this.autoTapChild=this.listItem,this.autoTapIndex=e},onlistItem:function(i,e){this.setAct("listItem","listItemAct",e,i,"change-list-item"),this.isPC||this.hiddenHandle()},hiddenHandle:function(){this.$el.offsetParent.querySelectorAll(".topic_content").forEach((function(i){""==i.style.display&&(i.style.display="none")}))}}}),a=r,l=(s("6ca2"),s("2877")),c=Object(l["a"])(a,n,t,!1,null,"3edc4097",null);e["a"]=c.exports},f04b:function(i,e,s){"use strict";s("caa1")},f2db:function(i,e,s){"use strict";s("0adc")}}]);