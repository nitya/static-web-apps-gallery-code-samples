(self.webpackChunkwww=self.webpackChunkwww||[]).push([[874],{5962:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/user.071d4b1.512.png 512w",images:[{path:a.p+"assets/ideal-img/user.071d4b1.512.png",width:512,height:512}],src:a.p+"assets/ideal-img/user.071d4b1.512.png",toString:function(){return a.p+"assets/ideal-img/user.071d4b1.512.png"},placeholder:void 0,width:512,height:512},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVQYlX2Q2QqEMAxF/f//E/taxaUuFVrbB8XcIZHMPhMILdzTk5KCiBwA0FV4ay6Oj0Ih/C7iuFBo2zZa1xXc8zxjmia+a0x3sK5rWGvRNA2MMSjLElVV4TxP0epoOOeQUkLOWaz7vmMYBjlfwHEcJViWRUbzw77vP8Gu6xBjFDCEIOa2bR+g/tF7T2xkM9u0dSEMivTPegTm0cfzcr81G29g7IUKpGnh5QAAAABJRU5ErkJggg=="}},8509:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return re},prepareUserState:function(){return X}});var r=a(7294),n=a(357),s=a(6010),o=a(7462),c=a(3366),l={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"},i=["svgClass","colorAttr","children","color","size","viewBox"];function u(e){var t=e.svgClass,a=e.colorAttr,n=e.children,u=e.color,m=void 0===u?"inherit":u,d=e.size,h=void 0===d?"medium":d,g=e.viewBox,p=void 0===g?"0 0 24 24":g,f=(0,c.Z)(e,i);return r.createElement("svg",(0,o.Z)({viewBox:p,color:a,"aria-hidden":!0,className:(0,s.Z)(l.svgIcon,l[m],l[h],t)},f),n)}function m(e){return r.createElement(u,e,r.createElement("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}))}var d=a(6775);function h(e,t){var a=[].concat(e);return a.sort((function(e,a){return t(e)>t(a)?1:t(a)>t(e)?-1:0})),a}var g="checkboxLabel_vxMa",p=["id","icon","label","tag"],f="tags";function v(e){return new URLSearchParams(e).getAll(f)}function b(e,t){var a=e.id,n=e.icon,s=e.label,l=e.tag,i=(0,c.Z)(e,p),u=(0,d.TH)(),m=(0,d.k6)(),h=(0,r.useState)(!1),b=h[0],E=h[1];(0,r.useEffect)((function(){var e=v(u.search);E(e.includes(l))}),[l,u]);var w=(0,r.useCallback)((function(){var e=function(e,t){var a=e.indexOf(t);if(-1===a)return e.concat(t);var r=[].concat(e);return r.splice(a,1),r}(v(u.search),l),t=function(e,t){var a=new URLSearchParams(e);return a.delete(f),t.forEach((function(e){return a.append(f,e)})),a.toString()}(u.search,e);m.push(Object.assign({},u,{search:t,state:X()}))}),[l,u,m]);return r.createElement(r.Fragment,null,r.createElement("input",(0,o.Z)({type:"checkbox",id:a,className:"screen-reader-only",onKeyDown:function(e){"Enter"===e.key&&w()},onFocus:function(e){var t;e.relatedTarget&&(null==(t=e.target.nextElementSibling)||t.dispatchEvent(new KeyboardEvent("focus")))},onBlur:function(e){var t;null==(t=e.target.nextElementSibling)||t.dispatchEvent(new KeyboardEvent("blur"))},onChange:w,checked:b},i)),r.createElement("label",{ref:t,htmlFor:a,className:g},s,n))}var E=r.forwardRef(b),w={checkboxLabel:"checkboxLabel_WGTY"},y="operator";function C(e){var t;return null!=(t=new URLSearchParams(e).get(y))?t:"OR"}function _(){var e="showcase_filter_toggle",t=(0,d.TH)(),a=(0,d.k6)(),n=(0,r.useState)(!1),o=n[0],c=n[1];(0,r.useEffect)((function(){c("AND"===C(t.search))}),[t]);var l=(0,r.useCallback)((function(){c((function(e){return!e}));var e=new URLSearchParams(t.search);e.delete(y),o||e.append(y,o?"OR":"AND"),a.push(Object.assign({},t,{search:e.toString(),state:X()}))}),[o,t,a]);return r.createElement("div",null,r.createElement("input",{type:"checkbox",id:e,className:"screen-reader-only","aria-label":"Toggle between or and and for the tags you selected",onChange:l,onKeyDown:function(e){"Enter"===e.key&&l()},checked:o}),r.createElement("label",{htmlFor:e,className:(0,s.Z)(w.checkboxLabel,"shadow--md")},r.createElement("span",{className:w.checkboxLabelOr},"OR"),r.createElement("span",{className:w.checkboxLabelAnd},"AND")))}var k=a(5944),A=a(3699),L=a(7325),x={showcaseCardImage:"showcaseCardImage_wjKy",showcaseCardHeader:"showcaseCardHeader_H8b9",showcaseCardTitle:"showcaseCardTitle_ZxTI",svgIconFavorite:"svgIconFavorite_XQCb",showcaseCardSrcBtn:"showcaseCardSrcBtn_F6t0",showcaseCardBody:"showcaseCardBody_bvOP",cardFooter:"cardFooter_Xq1d",tag:"tag_jo6t",textLabel:"textLabel_lQex",colorLabel:"colorLabel_D_Fl"},N=a(3935),S=a(6441),I="tooltip_j_Qe",F="tooltipArrow_NLUH";function T(e){var t=e.children,a=e.id,n=e.anchorEl,s=e.text,c=e.delay,l=(0,r.useState)(!1),i=l[0],u=l[1],m=(0,r.useState)(null),d=m[0],h=m[1],g=(0,r.useState)(null),p=g[0],f=g[1],v=(0,r.useState)(null),b=v[0],E=v[1],w=(0,r.useState)(null),y=w[0],C=w[1],_=(0,S.D)(d,p,{modifiers:[{name:"arrow",options:{element:b}},{name:"offset",options:{offset:[0,8]}}]}),k=_.styles,A=_.attributes,L=(0,r.useRef)(null),x=a+"_tooltip";return(0,r.useEffect)((function(){C(n?"string"==typeof n?document.querySelector(n):n:document.body)}),[y,n]),(0,r.useEffect)((function(){var e=["mouseenter","focus"],t=["mouseleave","blur"],a=function(){""!==s&&(null==d||d.removeAttribute("title"),L.current=window.setTimeout((function(){u(!0)}),c||400))},r=function(){clearInterval(L.current),u(!1)};return d&&(e.forEach((function(e){d.addEventListener(e,a)})),t.forEach((function(e){d.addEventListener(e,r)}))),function(){d&&(e.forEach((function(e){d.removeEventListener(e,a)})),t.forEach((function(e){d.removeEventListener(e,r)})))}}),[d,s,c]),r.createElement(r.Fragment,null,r.cloneElement(t,{ref:h,"aria-describedby":i?x:void 0}),y?N.createPortal(i&&r.createElement("div",(0,o.Z)({id:x,role:"tooltip",ref:f,className:I,style:k.popper},A.popper),s,r.createElement("span",{ref:E,className:F,style:k.arrow})),y):y)}var Z={favorite:{label:"Favorite",description:"Our favorite Docusaurus sites that you must absolutely check-out!",color:"#e9669e"},opensource:{label:"Open-Source",description:"Open-Source Docusaurus sites can be useful for inspiration!",color:"#39ca30"},product:{label:"Product",description:"Docusaurus sites associated to a commercial product!",color:"#dfd545"},design:{label:"Design",description:"Beautiful Docusaurus sites, polished and standing out from the initial template!",color:"#a44fb7"},i18n:{label:"I18n",description:"Translated Docusaurus sites using the internationalization support with more than 1 locale.",color:"#127f82"},versioning:{label:"Versioning",description:"Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.",color:"#fe6829"},large:{label:"Large",description:"Very large Docusaurus sites, including many more pages than the average!",color:"#8c2f00"},meta:{label:"Meta",description:"Docusaurus sites of Meta (formerly Facebook) projects",color:"#4267b2"},personal:{label:"Personal",description:"Personal websites, blogs and digital gardens built with Docusaurus",color:"#14cfc3"},rtl:{label:"RTL Direction",description:"Docusaurus sites using the right-to-left reading direction support.",color:"#ffcfc3"}},D=[{title:"Aide Jeune",description:"French Discord server that helps young people who have been bullied or feel bad about themselves",preview:a(5962),website:"https://aidejeune.fr",source:null,tags:[]},{title:"pdfme",description:"Free and Open source PDF generator library fully written in TypeScript coming with a React based UI template editor",preview:a(5962),website:"https://pdfme.com/",source:"https://github.com/pdfme/pdfme/tree/main/website",tags:["opensource","design","product"]},{title:"Pearl UI",description:"A design-system-driven UI framework that helps developer build beautiful and accessible mobile apps right out of the box",preview:a(5962),website:"https://docs.pearl-ui.dev/",source:"https://github.com/agrawal-rohit/pearl-ui/tree/main/documentationwebsite",tags:["opensource","design","product"]},{title:"Dime.Scheduler",description:"The resource and project planning solution for the Microsoft Dynamics product suite. Stop puzzling and start planning.",preview:a(5962),website:"https://sdk.dimescheduler.com",source:"https://github.com/dime-scheduler/sdk-dotnet/tree/master/docs",tags:["product","opensource"]},{title:"404Lab.Wiki",description:"Docs and blogs about development and study",preview:a(5962),website:"https://wiki.404lab.top",source:"https://github.com/HiChen404/MyWikiSite",tags:["opensource","personal"]}],O=Object.keys(Z);var U,R=(U=h(U=D,(function(e){return e.title.toLowerCase()})),U=h(U,(function(e){return!e.tags.includes("favorite")}))),B=r.forwardRef((function(e,t){var a=e.label,n=e.color,s=e.description;return r.createElement("li",{ref:t,className:x.tag,title:s},r.createElement("span",{className:x.textLabel},a.toLowerCase()),r.createElement("span",{className:x.colorLabel,style:{backgroundColor:n}}))}));function P(e){var t=h(e.tags.map((function(e){return Object.assign({tag:e},Z[e])})),(function(e){return O.indexOf(e.tag)}));return r.createElement(r.Fragment,null,t.map((function(e,t){var a="showcase_card_tag_"+e.tag;return r.createElement(T,{key:t,text:e.description,anchorEl:"#__docusaurus",id:a},r.createElement(B,(0,o.Z)({key:t},e)))})))}function M(e){var t=e.user;return r.createElement("li",{key:t.title,className:"card shadow--md"},r.createElement("div",{className:(0,s.Z)("card__image",x.showcaseCardImage)},r.createElement(k.Z,{img:t.preview,alt:t.title})),r.createElement("div",{className:"card__body"},r.createElement("div",{className:(0,s.Z)(x.showcaseCardHeader)},r.createElement("h4",{className:x.showcaseCardTitle},r.createElement(A.Z,{href:t.website,className:x.showcaseCardLink},t.title)),t.tags.includes("favorite")&&r.createElement(m,{svgClass:x.svgIconFavorite,size:"small"}),t.source&&r.createElement(A.Z,{href:t.source,className:(0,s.Z)("button button--secondary button--sm",x.showcaseCardSrcBtn)},r.createElement(L.Z,{id:"showcase.card.sourceLink"},"source"))),r.createElement("p",{className:x.showcaseCardBody},t.description)),r.createElement("ul",{className:(0,s.Z)("card__footer",x.cardFooter)},r.createElement(P,{tags:t.tags})))}var j=r.memo(M),H=a(6136),z=a(9846),V={filterCheckbox:"filterCheckbox_IByC",checkboxList:"checkboxList_TMoE",showcaseList:"showcaseList_IWjR",checkboxListItem:"checkboxListItem_bvhq",searchContainer:"searchContainer_AU74",showcaseFavorite:"showcaseFavorite_dfS5",showcaseFavoriteHeader:"showcaseFavoriteHeader_INmp",svgIconFavoriteXs:"svgIconFavoriteXs_REdU",svgIconFavorite:"svgIconFavorite_glga"},K="Projects Showcase",W="Examples of Static Web Apps in Action";function X(){var e;if(H.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:null==(e=document.activeElement)?void 0:e.id}}var Q="name";function G(e){return new URLSearchParams(e).get(Q)}function Y(){var e=(0,d.TH)(),t=(0,r.useState)("OR"),a=t[0],n=t[1],s=(0,r.useState)([]),o=s[0],c=s[1],l=(0,r.useState)(null),i=l[0],u=l[1];return(0,r.useEffect)((function(){var t,a,r,s,o;c(v(e.search)),n(C(e.search)),u(G(e.search)),t=e.state,s=(r=null!=t?t:{scrollTopPosition:0,focusedElementId:void 0}).scrollTopPosition,o=r.focusedElementId,null==(a=document.getElementById(o))||a.focus(),window.scrollTo({top:s})}),[e]),(0,r.useMemo)((function(){return function(e,t,a,r){return r&&(e=e.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}))),0===t.length?e:e.filter((function(e){return 0!==e.tags.length&&("AND"===a?t.every((function(t){return e.tags.includes(t)})):t.some((function(t){return e.tags.includes(t)})))}))}(R,o,a,i)}),[o,a,i])}function q(){return r.createElement("section",{className:"margin-top--lg margin-bottom--lg text--center"},r.createElement("h1",null,K),r.createElement("p",null,W),r.createElement("a",{className:"button button--primary",href:"https://github.com/nitya/static-web-apps-gallery-code-samples/edit/main/docs/www/src/data/users.tsx",target:"_blank",rel:"noreferrer"},r.createElement(L.Z,{id:"showcase.header.button"},"\ud83d\ude4f Please add your site")))}function J(){var e,t=Y(),a=(e=(0,z.c2)().selectMessage,function(t){return e(t,(0,L.I)({id:"showcase.filters.resultCount",description:'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 site|{sitesCount} sites"},{sitesCount:t}))});return r.createElement("section",{className:"container margin-top--l margin-bottom--lg"},r.createElement("div",{className:(0,s.Z)("margin-bottom--sm",V.filterCheckbox)},r.createElement("div",null,r.createElement("h2",null,r.createElement(L.Z,{id:"showcase.filters.title"},"Filters")),r.createElement("span",null,a(t.length))),r.createElement(_,null)),r.createElement("ul",{className:V.checkboxList},O.map((function(e,t){var a=Z[e],n=a.label,s=a.description,o=a.color,c="showcase_checkbox_id_"+e;return r.createElement("li",{key:t,className:V.checkboxListItem},r.createElement(T,{id:c,text:s,anchorEl:"#__docusaurus"},r.createElement(E,{tag:e,id:c,label:n,icon:"favorite"===e?r.createElement(m,{svgClass:V.svgIconFavoriteXs}):r.createElement("span",{style:{backgroundColor:o,width:10,height:10,borderRadius:"50%",marginLeft:8}})})))}))))}var $=R.filter((function(e){return e.tags.includes("favorite")})),ee=R.filter((function(e){return!e.tags.includes("favorite")}));function te(){var e=(0,d.k6)(),t=(0,d.TH)(),a=(0,r.useState)(null),n=a[0],s=a[1];return(0,r.useEffect)((function(){s(G(t.search))}),[t]),r.createElement("div",{className:V.searchContainer},r.createElement("input",{id:"searchbar",placeholder:(0,L.I)({message:"Search for site name...",id:"showcase.searchBar.placeholder"}),value:null!=n?n:void 0,onInput:function(a){s(a.currentTarget.value);var r=new URLSearchParams(t.search);r.delete(Q),a.currentTarget.value&&r.set(Q,a.currentTarget.value),e.push(Object.assign({},t,{search:r.toString(),state:X()})),setTimeout((function(){var e;null==(e=document.getElementById("searchbar"))||e.focus()}),0)}}))}function ae(){var e=Y();return 0===e.length?r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},r.createElement("div",{className:"container padding-vert--md text--center"},r.createElement("h2",null,r.createElement(L.Z,{id:"showcase.usersList.noResult"},"No result")),r.createElement(te,null))):r.createElement("section",{className:"margin-top--lg margin-bottom--xl"},e.length===R.length?r.createElement(r.Fragment,null,r.createElement("div",{className:V.showcaseFavorite},r.createElement("div",{className:"container"},r.createElement("div",{className:(0,s.Z)("margin-bottom--md",V.showcaseFavoriteHeader)},r.createElement("h2",null,r.createElement(L.Z,{id:"showcase.favoritesList.title"},"Our favorites")),r.createElement(m,{svgClass:V.svgIconFavorite}),r.createElement(te,null)),r.createElement("ul",{className:(0,s.Z)("container",V.showcaseList)},$.map((function(e){return r.createElement(j,{key:e.title,user:e})}))))),r.createElement("div",{className:"container margin-top--lg"},r.createElement("h2",{className:V.showcaseHeader},r.createElement(L.Z,{id:"showcase.usersList.allUsers"},"All sites")),r.createElement("ul",{className:V.showcaseList},ee.map((function(e){return r.createElement(j,{key:e.title,user:e})}))))):r.createElement("div",{className:"container"},r.createElement("div",{className:(0,s.Z)("margin-bottom--md",V.showcaseFavoriteHeader)},r.createElement(te,null)),r.createElement("ul",{className:V.showcaseList},e.map((function(e){return r.createElement(j,{key:e.title,user:e})})))))}function re(){return r.createElement(n.Z,{title:K,description:W},r.createElement("main",{className:"margin-vert--lg"},r.createElement(q,null),r.createElement(J,null),r.createElement(ae,null)))}}}]);