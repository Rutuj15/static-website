!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bbb74691-e02b-4e39-962e-afdc64c30840",e._sentryDebugIdIdentifier="sentry-dbid-bbb74691-e02b-4e39-962e-afdc64c30840")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7732],{78140:function(e,t,l){"use strict";l(85893),l(67294),l(9008)},83494:function(e,t,l){"use strict";var a=l(85893);l(67294);var i=l(9008),s=l.n(i),o=l(85318);t.Z=e=>{var t,l;let{title:i,description:n,ogImg:r,datePublished:c,dateModified:d}=e,m=(null!==(t=null==i?void 0:i.length)&&void 0!==t?t:1)%30,_=(null!==(l=null==n?void 0:n.length)&&void 0!==l?l:1)%30;_<m&&(_=m);let u=_?"".concat(_,"-03-2023"):"16-03-2023",p={"@context":"https://schema.org","@type":"WebPage",headline:null!=i?i:"",description:null!=n?n:"",image:null!=r?r:"https://www.mailmodo.com/static/images/og-image.png",datePublished:(0,o.Uk)(null!=c?c:m?"".concat(m,"-03-2023"):"08-09-2022"),dateModified:(0,o.Uk)(null!=d?d:u),publisher:{"@type":"Organization",name:"Mailmodo",url:"https://www.mailmodo.com/",sameAs:["https://www.linkedin.com/company/mailmodo/","https://www.facebook.com/mailmodo/","https://www.instagram.com/mailmodohq/","https://www.youtube.com/@mailmodo"],logo:"https://www.mailmodo.com/static/images/logo/logo-full.svg",description:"Mailmodo is a complete email marketing platform that helps email marketers to create and send interactive emails to drive growth and engagement.",address:{"@type":"PostalAddress",addressLocality:"Lewes",addressRegion:"DE",postalCode:"19958",streetAddress:"Mailmodo Technologies Inc. 16192, Coastal Highway",addressCountry:{"@type":"Country",name:"US"}},contactPoint:{"@type":"ContactPoint",email:"enquiries@mailmodo.com",contactType:"customer service"}}};return(0,a.jsx)(s(),{children:(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(p)}})})}},33763:function(e,t,l){"use strict";var a=l(85893);l(67294);var i=l(38020),s=l.n(i),o=l(18316);t.Z=e=>{let{input:t,onChange:l,placeholder:i,textDecoration:n,stylingUpdate:r,isDarkBg:c=!1,videoPageStyling:d=!1,searchIconUrl:m=null,boxShadow:_=!0,currentText:u,isFlex1:p=!0}=e;return console.log(t),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:s().wrap,"data-is-dark-bg":c,"data-video-page-styling-fixes":d,"data-is-flex1":p,children:(0,a.jsxs)("div",{className:s().search,"data-is-styling-fixes":r,style:{boxShadow:_?"0px 2px 5px -1px rgba(130, 130, 130, 0.25)":"none"},children:[(0,a.jsx)("div",{className:s().search_button,style:{opacity:n||c?"1":"0.5"},children:(0,a.jsx)("img",{title:"search icon",alt:"loupe.svg",src:null!=m?m:"/static/images/icon/loupe_gray.svg",height:d?21:24,width:d?21:24})}),(0,a.jsx)("input",{className:"".concat(s().search_term),value:t,placeholder:i||"Search",onChange:e=>l(e.target.value),"data-is-text-decoration":n},"random1"),u&&!t&&(0,a.jsx)(o.E.span,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.8},className:s().placeholder_text,children:u},u)]})})})}},15995:function(e,t,l){"use strict";l.d(t,{Z:function(){return et}});var a=l(85893),i=l(2962),s=l(25675),o=l.n(s),n=l(42708),r=l(11163),c=l(67294),d=l(47084),m=l.n(d),_=l(9008),u=l.n(_),p=l(25709),h=l(86757),g=l.n(h),v=l(74048);l(93284),l(14952);var y=l(68469),x=l(16165);let{Panel:b}=y.default,f=()=>(0,a.jsx)("svg",{width:"15",height:"9",viewBox:"0 0 15 9",fill:"none",children:(0,a.jsx)("path",{d:"M1 1.41602L7.5 7.60649L14 1.41602",stroke:"#929292",strokeWidth:"2"})}),j=e=>(0,a.jsx)(x.Z,{component:f,...e});var w=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:g().faq_fold,children:[(0,a.jsx)("h2",{className:g().heading,children:"Frequently Asked Questions"}),(0,a.jsx)("div",{className:g().faq_container+" faq-fold-override",children:(0,a.jsx)(v.default,{style:{width:"100%",gap:"11px"},direction:"vertical",children:e.content.faqs.map((e,t)=>{var l;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(y.default,{ghost:!0,className:g().tab_body,bordered:!1,expandIconPosition:"right",children:(0,a.jsx)(b,{extra:j(),showArrow:!1,header:(0,a.jsx)("h3",{style:{display:"inline"},className:g().tab_title+" mm-subtitle-1 ",children:e.question}),children:(0,a.jsx)("div",{className:g().tab_answer,dangerouslySetInnerHTML:{__html:m()(null!==(l=e.answer)&&void 0!==l?l:" ")}})},t)})})})})})]})}),N=l(82958),S=l.n(N),k=l(85318),C=l(34845),I=l.n(C),F=l(41664),M=l.n(F),P=e=>{let{template:t,userId:l,campaignId:i,thumbnail:s,thumbnailHeight:n,latestDate:d,index:m}=e,_=(0,r.useRouter)();return(0,c.useEffect)(()=>{let e=sessionStorage.getItem("scrollPosition");e&&(window.scrollTo(0,parseInt(e)),sessionStorage.removeItem("scrollPosition"))},[]),(0,a.jsx)(M(),{passHref:!0,prefetch:!1,href:"/email-templates/".concat(t.slug),title:t.title,className:I().card,onClick:()=>{sessionStorage.setItem("scrollPosition",window.scrollY)},children:(0,a.jsxs)("div",{className:I().card_body,children:[s&&(0,a.jsx)(o(),{src:(0,p.Jn)(s,"webp",d?20:10),className:"".concat(I().thumnailImg),alt:t.title,layout:"responsive",width:300,height:d?.5*n:n,priority:0===m}),(0,a.jsx)("div",{className:I().overlay,children:(0,a.jsxs)("div",{className:I().overlay_card,children:[(0,a.jsx)("p",{className:I().title,children:t.title}),(0,a.jsxs)("div",{className:I().btn_group,children:[(0,a.jsx)("button",{className:I().button_preview,onClick:e=>{e.preventDefault(),window.location.href="/email-templates/".concat(t.slug)},children:"Preview"}),(0,a.jsx)("button",{className:I().button_use,onClick:e=>{e.preventDefault(),window.location.href="https://manage.mailmodo.com/app/open-template/".concat(l,"/").concat(i,"?utm_content=use-template&utm_term=").concat(null==_?void 0:_.asPath)},children:"Use this template"})]})]})})]})})},E=l(69386),A=l(6528),q=l.n(A),L=l(33763),O=l(53457),T=l(50480),U=l(69368),D=l(79701),Z=l.n(D),W=()=>{let[e,t]=(0,c.useState)(!1),l=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let a=e=>{l.current&&!l.current.contains(e.target)&&t(!1)},i="ontouchstart"in window?"touchstart":"click";return e&&window.addEventListener(i,a),()=>{window.removeEventListener(i,a)}},[e]),{openDropdown:e,toggleDropdown:()=>{t(!e)},dropdownRef:l}},B=e=>{let{options:t,selectedFilter:l,setSelectedFilter:i,title:s,colorFilter:n=!1}=e,{openDropdown:r,toggleDropdown:c,dropdownRef:d}=W(),m=e=>{l.includes(e)?i(l.filter(t=>t!==e)):i([...l,e])},_=e=>{i(t=>t===e?[]:e)},u=e=>l.includes(e),p=l.length>=1?"".concat(l.length>1?"".concat(l[0]," +").concat(l.length-1):l[0]):s,h=l.length?l:s,g=!n&&l.map((e,t)=>t===l.length-1?e:e+", ").join("");return(0,a.jsxs)("div",{className:Z().styleSelectBtn,ref:d,children:[(0,a.jsxs)("div",{className:Z().dropdown,children:[(0,a.jsxs)("button",{type:"button",className:Z().dropdownButton,onClick:c,"data-highlight-btn":l.length>0,children:[(0,a.jsxs)("div",{className:Z().color_wrapper,children:[n&&l.length>0&&(0,a.jsx)("span",{className:Z().color_title,style:{backgroundColor:l}}),(0,a.jsx)("span",{children:n?h:p})]}),(0,a.jsx)("div",{className:Z().arrow_icon,children:r?(0,a.jsx)(o(),{alt:"chevron-up",src:"https://res.cloudinary.com/mailmodo/image/upload/v1705656355/strapi/Vector_1485_1_2f14997b75.svg",height:"5",width:"11"}):(0,a.jsx)(o(),{alt:"chevron-down",src:"https://res.cloudinary.com/mailmodo/image/upload/v1705656355/strapi/Vector_1485_eb7576ce02.svg",height:"5",width:"11"})})]}),!n&&l.length>1&&(0,a.jsx)("div",{className:Z().tooltip,style:{width:l.length>2?"200px":""},children:g})]}),r&&(n?(0,a.jsx)("div",{className:Z().color_palette,children:t.map((e,t)=>(0,a.jsx)("div",{className:Z().color_box,style:{backgroundColor:e},onClick:()=>_(e),"data-active":l.includes(e)},"Color_".concat(t)))}):(0,a.jsxs)("div",{className:Z().dropdownMenu,children:[(0,a.jsx)(O.Z,{className:Z().form_group,children:t.map((e,t)=>(0,a.jsx)(T.Z,{control:(0,a.jsx)(U.Z,{checked:u(e),onChange:()=>m(e),inputProps:{"aria-label":e},sx:{"& .MuiSvgIcon-root":{fontSize:18},"&.Mui-checked":{color:"#4C3BEA"}},className:Z().checkbox}),label:e,className:u(e)?Z().active:Z().label,sx:{"& .MuiTypography-root":{color:"#000",fontSize:"14px",lineHeight:"1.3"}}},t))}),(0,a.jsx)("div",{className:Z().clear_filter,onClick:()=>i([]),children:"Clear all"})]}))]})};let R=[{title:"Welcome",slug:"welcome-email-template"},{title:"Engagement",slug:"engagement"},{title:"Onboarding",slug:"onboarding-email-template"},{title:"Feedback",slug:"feedback-email-template"},{title:"Abandoned cart",slug:"abandoned-cart-email-template"},{title:"Promotional",slug:"promotional"},{title:"Lead nurture",slug:"lead-nurturing-email-templates"},{title:"Survey",slug:"survey-email-template"},{title:"Holiday",slug:"holiday-email-template"},{title:"Ecommerce",slug:"ecommerce"},{title:"SaaS",slug:"saas"}];var H=l(37906),Q=l(16628);l(99249),l(27101);var z=l(18556),G=l.n(z);function J(e){let{style_options:t,color_options:l,usecase_options:i,industry_options:s,interactivity_options:o,isFiltersOpen:n,setIsFiltersOpen:r,selectedColor:d,selectedIndustry:m,selectedInteractivity:_,selectedStyles:u,selectedUsecase:p,setSelectedColor:h,setSelectedIndustry:g,setSelectedInteractivity:v,setSelectedStyles:y,setSelectedUsecase:x,handleClearFilters:b}=e,f=["Style","Color","Interactivity","Industry","Use case"],[j,w]=(0,c.useState)(0),N=(e,t)=>{let l=(e,l)=>{l(e.includes(t)?e.filter(e=>e!==t):[...e,t])};switch(e){case"Industry":l(m,g);break;case"Interactivity":l(_,v);break;case"Use case":l(p,x);break;case"Color":h(e=>e===t?[]:t);break;case"Style":l(u,y)}},S=(e,t,l)=>(0,a.jsx)(O.Z,{className:G().form_group,children:e.map((e,i)=>(0,a.jsx)(T.Z,{control:(0,a.jsx)(U.Z,{checked:t.includes(e),onChange:()=>N(f[l],e),inputProps:{"aria-label":e},sx:{"& .MuiSvgIcon-root":{fontSize:18},"&.Mui-checked":{color:"#4C3BEA"}},className:G().checkbox}),label:e,className:t.includes(e)?G().active:G().label,sx:{"& .MuiTypography-root":{color:"#000",fontSize:"14px",lineHeight:"1.3"}}},i))});return(0,a.jsx)("div",{children:(0,a.jsx)(H.Z,{open:n,onClose:()=>{r(!1)},closeAfterTransition:!0,children:(0,a.jsx)(Q.Z,{in:n,style:{width:"100%",background:"#fff",position:"absolute",bottom:"0"},children:(0,a.jsxs)("div",{className:G().container,children:[(0,a.jsx)("div",{className:G().tabs,children:f.map((e,t)=>(0,a.jsx)("div",{className:G().tab,"data-is-active":j===t,onClick:()=>w(t),children:e},"tab_mobile_".concat(t)))}),(0,a.jsxs)("div",{className:G().tab_container,style:{overflow:"auto",height:"250px"},children:[0===j&&S(t,u,0),1===j&&(0,a.jsx)("div",{className:G().color_palette,children:l.map((e,t)=>(0,a.jsx)("div",{style:{backgroundColor:e},className:G().color_box,"data-is-selected":d.includes(e),onClick:()=>N(f[1],e)},"category_mobile_".concat(t)))}),2===j&&S(o,_,2),3===j&&S(s,m,3),4===j&&S(i,p,4)]}),(0,a.jsxs)("div",{className:G().control_btn_container,children:[(0,a.jsx)("button",{className:G().btn,onClick:b,children:"Clear all"}),(0,a.jsx)("button",{className:G().btn+" "+G().btn_primary,onClick:()=>{r(!1)},children:"Apply"})]})]})})})})}var V=e=>{var t;let{input:l,updateInput:i,handleTemplateSearch:s,lookUpData:n,selectedColor:d,selectedIndustry:m,selectedInteractivity:_,selectedStyles:u,selectedUsecase:h,setSelectedColor:g,setSelectedIndustry:v,setSelectedInteractivity:y,setSelectedStyles:x,setSelectedUsecase:b,results:f,showClearFilters:j,handleClearFilters:w,filtersSelected:N}=e,S=null===(t=(0,r.useRouter)())||void 0===t?void 0:t.asPath,[k,C]=(0,c.useState)("Templates"),[I,F]=(0,c.useState)(!1),P=e=>n.map(t=>{var l;return null==t?void 0:null===(l=t.filters)||void 0===l?void 0:l[e]}).filter(e=>e),E=e=>[...new Set(P(e).flatMap(e=>e))].sort((e,t)=>e.localeCompare(t)),A=E("style"),O=E("industry"),T=E("color"),U=E("interactivity"),D=E("usecase"),Z=["Templates","Welcome email","Ecommerce email","Interactive email","Dark mode email"],W=(0,c.useRef)(0);return(0,c.useEffect)(()=>{let e=setInterval(()=>{C(Z[W.current]),W.current=(W.current+1)%Z.length},2e3);return()=>clearInterval(e)},[Z]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:q().sticky_container,children:[(0,a.jsxs)("div",{className:q().categories,children:[(0,a.jsx)(M(),{href:"/email-templates/",children:(0,a.jsx)("div",{className:q().chip,"data-active":"/email-templates/"===S,children:"All"})}),R.map((e,t)=>(0,a.jsx)(M(),{href:"/email-templates/categories/".concat(e.slug,"/"),children:(0,a.jsx)("div",{className:q().chip,"data-active":S.includes(e.slug),children:e.title.split("-").join(" ")})},"Category_".concat(t))),(0,a.jsx)("div",{className:q().more_categories,children:(0,a.jsx)(M(),{href:"/email-templates/categories/",children:(0,a.jsxs)("div",{className:q().chip,children:[(0,a.jsx)("span",{children:"More categories"}),(0,a.jsx)(o(),{src:(0,p.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1726576603/strapi/arrow_right_1_f472b4aa67.svg"),alt:"arrow",width:12,height:12})]})})})]}),(0,a.jsxs)("div",{className:q().filters_section,children:[(0,a.jsx)("form",{onSubmit:s,children:(0,a.jsx)(L.Z,{input:l,onChange:i,placeholder:"Search for",boxShadow:!1,textDecoration:!0,currentText:k})}),(0,a.jsxs)("div",{className:q().container,children:[(0,a.jsxs)("div",{className:q().inputContainer,children:[A.length>0&&(0,a.jsx)(B,{options:A,selectedFilter:u,setSelectedFilter:x,title:"Style"}),T.length>0&&(0,a.jsx)(B,{options:T,selectedFilter:d,setSelectedFilter:g,title:"Color",colorFilter:!0}),U.length>0&&(0,a.jsx)(B,{options:U,selectedFilter:_,setSelectedFilter:y,title:"Interactivity"}),O.length>0&&(0,a.jsx)(B,{options:O,selectedFilter:m,setSelectedFilter:v,title:"Industry"}),D.length>0&&(0,a.jsx)(B,{options:D,selectedFilter:h,setSelectedFilter:b,title:"Use case"})]}),(0,a.jsx)("div",{className:q().mobile_filters,onClick:e=>{F(e=>!e)},"data-filters-selected":N,children:(0,a.jsx)(o(),{src:"https://res.cloudinary.com/mailmodo/image/upload/v1728367869/strapi/Filter24_Regular_1_004a7b4714.png",width:24,height:24,alt:"filters"})}),I&&(0,a.jsx)("div",{className:q().mobileFiltersContainer,children:(0,a.jsx)(J,{isFiltersOpen:I,setIsFiltersOpen:F,style_options:A,color_options:T,usecase_options:D,industry_options:O,interactivity_options:U,selectedColor:d,selectedIndustry:m,selectedInteractivity:_,selectedStyles:u,selectedUsecase:h,setSelectedColor:g,setSelectedIndustry:v,setSelectedInteractivity:y,setSelectedStyles:x,setSelectedUsecase:b,handleClearFilters:w})})]})]}),j&&(0,a.jsxs)("div",{className:q().results_box,children:[(0,a.jsx)("p",{className:q().results,children:0===f?"No result found":"".concat(f," Results:")}),(0,a.jsxs)("button",{type:"button",className:q().clear_filters,onClick:w,children:[(0,a.jsx)("p",{children:"Clear filters"}),(0,a.jsx)(o(),{src:(0,p.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1726635684/strapi/Group_1110165532_a6eb86f7ca.svg"),alt:"clear filters",width:18,height:18})]})]})]})})},K=l(83494),Y=l(44363),X=l.n(Y),$=()=>(0,a.jsx)("div",{className:X().container,children:(0,a.jsxs)("div",{className:X().empty_result,children:[(0,a.jsx)(o(),{src:(0,p.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1728033778/strapi/No_result_found_3174859e86.png"),width:148,height:148,alt:"empty results"}),(0,a.jsx)("p",{className:X().title,children:"No result found. Try with other keywords"})]})});let ee=e=>{var t,l;let a=null==e?void 0:e.map(e=>({"@type":"Question",name:null!==(t=e.question)&&void 0!==t?t:" ",acceptedAnswer:{"@type":"Answer",text:null!==(l=m()(e.answer))&&void 0!==l?l:" "}}));return{"@context":"https://schema.org","@type":"FAQPage",mainEntity:a}};var et=e=>{var t,l,s,d,_,h,g,v,y,x,b,f,j,N,C,I,F,M,A,q,L,O,T,U,D,Z;let{filteredData:W,allCategories:B,currentCategory:R,pageSize:H,initialPage:Q,totalTemplateDataLength:z,isCategorySlugPage:G,lookUpData:J,mainPage:Y}=e;(0,r.useRouter)();let{ref:X,inView:et}=(0,n.YD)({rootMargin:"1000px"}),[el,ea]=(0,c.useState)(!1),[ei,es]=(0,c.useState)(""),[eo,en]=(0,c.useState)(W),[er,ec]=(0,c.useState)(W),[ed,em]=(0,c.useState)(Q),[e_,eu]=(0,c.useState)(""),[ep,eh]=(0,c.useState)([]),[eg,ev]=(0,c.useState)([]),[ey,ex]=(0,c.useState)([]),[eb,ef]=(0,c.useState)([]),[ej,ew]=(0,c.useState)([]),[eN,eS]=(0,c.useState)(!1),[ek,eC]=(0,c.useState)(!1),[eI,eF]=(0,c.useState)(!1),eM=new E.Z(J,{keys:[{name:"title",weight:3},{name:"template_category",weight:2},"description"],includeScore:!0,shouldSort:!0,threshold:.3,location:0,distance:1e3,minMatchCharLength:3});(0,c.useEffect)(()=>{et&&!e_&&0===ep.length&&0===ey.length&&0===eg.length&&0===ej.length&&0===eb.length&&er.length<z&&em(ed+1)},[et]),(0,c.useEffect)(()=>{let e=async()=>{try{let e=await (0,p.sD)("/templates","&sort[0]=OrderWeight:asc&fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=OrderWeight&fields[4]=renderUrl&populate[template_category][fields][0]=slug&populate[thumbnail]=*&[populate][filters]=*&[populate][internalLinkingContent][fields][0]=industry&pagination[page]=".concat(ed,"&pagination[pageSize]=").concat(H));e=e.map(e=>{var t,l,a,i;let s={...e};return(null===(t=e.thumbnail)||void 0===t?void 0:null===(l=t.data)||void 0===l?void 0:l.attributes)&&(s.thumbnail=e.thumbnail.data.attributes),(null==e?void 0:e.OrderWeight)||(s.OrderWeight=z),(null==e?void 0:e.filters)&&(null==e?void 0:e.internalLinkingContent)&&(s.filters.industry=null!==(i=null==e?void 0:null===(a=e.internalLinkingContent)||void 0===a?void 0:a.industry)&&void 0!==i?i:""),null==s||delete s.internalLinkingContent,s}),ec([...er,...e]),en([...eo,...e])}catch(e){console.log(e)}};ed>1&&e()},[ed]),(0,c.useEffect)(()=>{let e=async()=>{try{let e=eM.search(e_).map(e=>e.item),t="";if(e.forEach((e,l)=>t+="&filters[slug][$in][".concat(l,"]=").concat(null==e?void 0:e.slug)),!t){ec([]);return}let l=await (0,p.sD)("/templates","&sort[0]=OrderWeight:asc&fields[0]=title&fields[1]=slug&fields[2]=description&fields[3]=OrderWeight&fields[4]=renderUrl&populate[template_category][fields][0]=slug&populate[thumbnail]=*&[populate][filters]=*&[populate][internalLinkingContent][fields][0]=industry".concat(t));l=l.map(e=>{var t,l,a,i;let s={...e};return(null===(t=e.thumbnail)||void 0===t?void 0:null===(l=t.data)||void 0===l?void 0:l.attributes)&&(s.thumbnail=e.thumbnail.data.attributes),(null==e?void 0:e.OrderWeight)||(s.OrderWeight=z),(null==e?void 0:e.filters)&&(null==e?void 0:e.internalLinkingContent)&&(s.filters.industry=null!==(i=null==e?void 0:null===(a=e.internalLinkingContent)||void 0===a?void 0:a.industry)&&void 0!==i?i:""),null==s||delete s.internalLinkingContent,s}),ec(l)}catch(e){console.log(e)}};if(e_){if(G){let e=eM.search(e_).map(e=>e.item);ec(e)}else e()}else ec(eo)},[e_]),(0,c.useEffect)(()=>{let e=async()=>{try{let e=J.filter(e=>{var t,l,a,i,s,o,n,r,c,d,m;return(!ep.length||(null===(t=e.filters)||void 0===t?void 0:null===(l=t.style)||void 0===l?void 0:l.some(e=>ep.includes(e))))&&(!eg.length||eg.includes("All")?(null===(a=e.filters)||void 0===a?void 0:a.industry.length)>0:null===(i=e.filters)||void 0===i?void 0:null===(s=i.industry)||void 0===s?void 0:s.some(e=>"All"===e||eg.includes(e)))&&(!ey.length||(null===(o=e.filters)||void 0===o?void 0:null===(n=o.color)||void 0===n?void 0:n.some(e=>ey.includes(e))))&&(!eb.length||(null===(r=e.filters)||void 0===r?void 0:null===(c=r.usecase)||void 0===c?void 0:c.some(e=>eb.includes(e))))&&(!ej.length||(null===(d=e.filters)||void 0===d?void 0:null===(m=d.interactivity)||void 0===m?void 0:m.some(e=>ej.includes(e))))}),t=e.map(e=>"".concat(null==e?void 0:e.slug));if(!t){ec([]);return}ec(e),eS(!0),eF(!0)}catch(e){console.log(e)}},t=ep.length||eg.length||ey.length||eb.length||ej.length;t?e():(ec(eo),eS(!1),eF(!1))},[ep,eg,ey,eb,ej]),(0,c.useEffect)(()=>{(W||ek)&&(ec(W),en(W),ex([]),ev([]),ew([]),eh([]),ef([]),eC(!1))},[W,ek]);let eP="Free Responsive Email Templates Library",eE="Create interactive emails using our ready-to-use, customizable email templates and wow your customers with a unique & interactive email experience",eA=(null==R?void 0:R.slug)==="all"?"https://www.mailmodo.com/email-templates/":"https://www.mailmodo.com/email-templates/categories/".concat((null==R?void 0:R.slug)||"","/"),eq=async e=>{es(e)},eL=async e=>{e.preventDefault(),eu(ei)};m().use({renderer:{image:(e,t,l)=>"<img loading='lazy' decoding='async'  src=\"".concat(0===e.indexOf("/uploads/")?"https://mm-cms.mailmodo.com"+e:e,'" title="').concat(null!=t?t:e,'" alt="').concat(null!=l?l:e,'" >')}});let eO="".concat((0,r.useRouter)().asPath),eT=null==er?void 0:er.map((e,t)=>{var l,i,s,o,n,r,c,d,m;let _=e.renderUrl.split("/")[4],u=e.renderUrl.split("/")[5],p=(null===(l=e.thumbnail)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:null===(s=i.attributes)||void 0===s?void 0:s.url)||(null===(o=e.thumbnail)||void 0===o?void 0:o.url),h=(null===(n=e.thumbnail)||void 0===n?void 0:null===(r=n.data)||void 0===r?void 0:null===(c=r.attributes)||void 0===c?void 0:c.height)||(null===(d=e.thumbnail)||void 0===d?void 0:d.height),g=new Date(null===(m=e.thumbnail)||void 0===m?void 0:m.createdAt)>=new Date("2023-7-26");return(0,a.jsx)(P,{userId:_,campaignId:u,thumbnail:p,thumbnailHeight:h,latestDate:g,template:e,index:t},t)});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u(),{children:(null==R?void 0:R.FAQs)&&(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(ee(null==R?void 0:null===(t=R.FAQs)||void 0===t?void 0:t.faqs))}})}),(0,a.jsx)(i.dX,{url:eA,title:void 0==R?eP:null!==(I=null==R?void 0:null===(l=R.seo)||void 0===l?void 0:l.title)&&void 0!==I?I:" ",description:void 0==R?eE:null!==(F=null==R?void 0:null===(s=R.seo)||void 0===s?void 0:s.description)&&void 0!==F?F:" ",images:["https://res.cloudinary.com/mailmodo/image/upload/v1726815706/strapi/template_OG_image_dce420efb2.png"],publisherName:"Mailmodo",authorName:"Mailmodo",datePublished:null==R?void 0:R.createdAt,dateModified:null==R?void 0:R.updatedAt,publisherLogo:"https://www.mailmodo.com/static/images/logo/logo-full.svg"}),(0,a.jsx)(i.PB,{robotsProps:{maxImagePreview:"large"},title:void 0==R?eP:null!==(M=null==R?void 0:null===(d=R.seo)||void 0===d?void 0:d.title)&&void 0!==M?M:" ",description:void 0==R?eE:null!==(A=null==R?void 0:null===(_=R.seo)||void 0===_?void 0:_.description)&&void 0!==A?A:" ",canonical:eA,openGraph:{url:eA,title:void 0==R?eP:null!==(q=null==R?void 0:null===(h=R.seo)||void 0===h?void 0:h.title)&&void 0!==q?q:" ",description:void 0==R?eE:null!==(L=null==R?void 0:null===(g=R.seo)||void 0===g?void 0:g.description)&&void 0!==L?L:" ",locale:"en_US",type:"Article",article:{authors:["Mailmodo"]},images:[{url:void 0==R?"https://res.cloudinary.com/mailmodo/image/upload/v1726815706/strapi/template_OG_image_dce420efb2.png":null!==(O=null==R?void 0:null===(v=R.seo)||void 0===v?void 0:null===(y=v.shareImage)||void 0===y?void 0:null===(x=y.image)||void 0===x?void 0:x.url)&&void 0!==O?O:"https://res.cloudinary.com/mailmodo/image/upload/v1726815706/strapi/template_OG_image_dce420efb2.png"}]},twitter:{handle:"@mailmodo",site:"twitter.com/mailmodo",cardType:"summary_large_image"}}),(0,a.jsx)(K.Z,{title:void 0==R?eP:null!==(T=null==R?void 0:null===(b=R.seo)||void 0===b?void 0:b.title)&&void 0!==T?T:" ",description:void 0==R?eE:null!==(U=null==R?void 0:null===(f=R.seo)||void 0===f?void 0:f.description)&&void 0!==U?U:" ",ogImg:void 0==R?"https://res.cloudinary.com/mailmodo/image/upload/v1726815706/strapi/template_OG_image_dce420efb2.png":null!==(D=null==R?void 0:null===(j=R.seo)||void 0===j?void 0:null===(N=j.shareImage)||void 0===N?void 0:null===(C=N.image)||void 0===C?void 0:C.url)&&void 0!==D?D:"https://res.cloudinary.com/mailmodo/image/upload/v1726815706/strapi/template_OG_image_dce420efb2.png",datePublished:null==R?void 0:R.createdAt,dateModified:null==R?void 0:R.updatedAt}),(0,a.jsx)("div",{className:"template ".concat(S().hero),children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h1",{className:S().heading,"data-is-mainPage":Y,children:void 0==R?"Email templates for higher conversions":R.title}),(null==R?void 0:R.description)&&(0,a.jsx)("p",{className:S().description,"data-is-mainPage":Y,children:R.description}),(0,a.jsx)(V,{input:ei,updateInput:eq,handleTemplateSearch:eL,lookUpData:J,selectedColor:ey,selectedIndustry:eg,selectedInteractivity:ej,selectedStyles:ep,selectedUsecase:eb,setSelectedColor:ex,setSelectedIndustry:ev,setSelectedInteractivity:ew,setSelectedStyles:eh,setSelectedUsecase:ef,results:null==er?void 0:er.length,showClearFilters:eN,handleClearFilters:()=>{eC(!0)},filtersSelected:eI}),er.length>0?(0,a.jsx)("div",{className:S().template_card,"data-is-empty":0===eT.length,children:eT}):(0,a.jsx)($,{})]})}),(null==R?void 0:R.bottom_details)&&(0,a.jsx)("div",{ref:X,className:"".concat(S().template_detail),children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{className:S().inner_wrapper,children:(0,a.jsxs)("div",{className:"row",style:{borderTop:"1px solid #E5E5E5",paddingTop:"32px"},children:[(0,a.jsx)("div",{className:"col-md-8",children:(0,a.jsx)("div",{className:S().template_content,children:(0,a.jsx)("div",{className:S().template_md,dangerouslySetInnerHTML:{__html:m()(null!==(Z=null==R?void 0:R.bottom_details)&&void 0!==Z?Z:" ")}})})}),(0,a.jsx)("div",{className:"col-md-4 px-0",children:(0,a.jsx)("div",{className:S().sticky_container,children:(0,a.jsx)("div",{className:S().cta_signup,children:(0,a.jsxs)("div",{className:S().ad,children:[(0,a.jsx)("div",{className:S().image,children:(0,a.jsx)(o(),{alt:"animation",width:"301",height:"215",src:(0,p.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1652251695/strapi/new_home_animation_22f4623599.gif")})}),(0,a.jsxs)("div",{className:S().flexbox,children:[(0,a.jsxs)("center",{children:[(0,a.jsx)("div",{className:S().subdiv,children:(0,a.jsxs)("p",{className:S().heading,children:["Do you want better",(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"email ROI?"})]})})," "]}),(0,a.jsx)("div",{className:S().subdiv,children:(0,a.jsxs)("p",{className:S().subheading,children:["Drive conversions with higher",(0,a.jsx)("br",{})," opens and smart suggestions"]})}),(0,a.jsx)("div",{children:(0,a.jsx)("center",{children:(0,a.jsx)("a",{href:"".concat((0,k.XE)("https://manage.mailmodo.com/auth/signup","category-page",eO)),children:(0,a.jsx)("button",{className:S().demo_btm,children:"Try Mailmodo for free"})})})})]})]})})})})]})})})}),(null==R?void 0:R.FAQs)&&(0,a.jsx)(w,{content:R.FAQs})]})}},82958:function(e){e.exports={hero:"email-template-category_hero__UQ3rl",heading:"email-template-category_heading__c3din",description:"email-template-category_description__v7Rtv",tags:"email-template-category_tags__yNf8P",template_filter:"email-template-category_template_filter__4tb9K",template_card:"email-template-category_template_card__RNIbn",template_detail:"email-template-category_template_detail__WUsFF",inner_wrapper:"email-template-category_inner_wrapper__4ApJm",template_content:"email-template-category_template_content__t5Vme","template-tags":"email-template-category_template-tags__RTGd9",title:"email-template-category_title__FI3hO",template_md:"email-template-category_template_md__bX2_2",copyButton:"email-template-category_copyButton__CPNBl",copyIcon:"email-template-category_copyIcon__DQvCf",checkIcon:"email-template-category_checkIcon__oo8My",custom_blockquote:"email-template-category_custom_blockquote__nIl1U",featured_image:"email-template-category_featured_image__4XjJm","table-wrapper":"email-template-category_table-wrapper__pEffJ","table-of-content":"email-template-category_table-of-content__5ujPZ",quotes:"email-template-category_quotes__yzJI_",share_container:"email-template-category_share_container__IcE6r",sticky_container:"email-template-category_sticky_container__ti1mu",cta_signup:"email-template-category_cta_signup__EasIo",ad:"email-template-category_ad__c3lyX",flexbox:"email-template-category_flexbox__Z8v_h",subheading:"email-template-category_subheading__bdTU_",sign_up_btn:"email-template-category_sign_up_btn__eu3py",demo_btm:"email-template-category_demo_btm__l8FZH",image:"email-template-category_image__1VowK"}},38020:function(e){e.exports={wrap:"search_wrap__uemZM",search_button:"search_search_button__FuS8v",search:"search_search__34uSp",search_term:"search_search_term__awinp",placeholder_text:"search_placeholder_text__RAy0u"}},86757:function(e){e.exports={faq_fold:"faqs_faq_fold__71I_K",heading:"faqs_heading__FOr_R",tab_head:"faqs_tab_head__cnzbm",tab_title:"faqs_tab_title__5YXKv",tab_answer:"faqs_tab_answer__CyZzd",tab_p:"faqs_tab_p__G2M88",faq_container:"faqs_faq_container__gwt7x"}},44363:function(e){e.exports={container:"styles_container__Npcux",empty_result:"styles_empty_result___K25P",title:"styles_title__PNrdY"}},34845:function(e){e.exports={card:"styles_card__AdCyo",overlay:"styles_overlay__HjscL",overlay_card:"styles_overlay_card__CPgTm",card_body:"styles_card_body__6pbkh","scroll-animation":"styles_scroll-animation__b9i8z",title:"styles_title__aFAyP",button_preview:"styles_button_preview__lntNk",button_use:"styles_button_use__Pf7GV",description:"styles_description__upM_G",btn_group:"styles_btn_group__irY4p",button_share:"styles_button_share__7DeUS",thumnailImg:"styles_thumnailImg__ByMPZ"}},79701:function(e){e.exports={styleSelectBtn:"styles_styleSelectBtn___AZLb",dropdownButton:"styles_dropdownButton__jnfAg",color_wrapper:"styles_color_wrapper__QxLWy",color_title:"styles_color_title__ZiwhI",dropdownMenu:"styles_dropdownMenu__rayFb",form_group:"styles_form_group__Pkgr6",checkbox:"styles_checkbox__iUzWH",label:"styles_label__BVydM",active:"styles_active__BhmCr",clear_filter:"styles_clear_filter__Ve5uM",color_palette:"styles_color_palette__rOVEa",color_box:"styles_color_box__NWoqs",tooltip:"styles_tooltip__IxYC0",dropdown:"styles_dropdown__sPCKm"}},18556:function(e){e.exports={container:"styles_container__3l3_W",tabs:"styles_tabs__umW7c",tab:"styles_tab__QlRLH",filterTitle:"styles_filterTitle__0Fb1w",tab_container:"styles_tab_container___QwBG",color_palette:"styles_color_palette__tzeQ7",color_box:"styles_color_box__j7GyT",form_group:"styles_form_group__cQfPn",checkbox:"styles_checkbox___Itxa",label:"styles_label__18Onl",active:"styles_active__pryUq",control_btn_container:"styles_control_btn_container__SPaMS",btn:"styles_btn__x0MUM",btn_primary:"styles_btn_primary__vuwjY"}},6528:function(e){e.exports={sticky_container:"style_sticky_container__oFsib",filters_section:"style_filters_section__5actS",inputContainer:"style_inputContainer__KeFu1",mobile_filters:"style_mobile_filters__D9Vw2",results_box:"style_results_box__dHG7m",results:"style_results__l6Owe",clear_filters:"style_clear_filters__NkNKY",categories:"style_categories__5Nilr",chip:"style_chip__E1Syn",more_categories:"style_more_categories__xQF59",search_term:"style_search_term__k70xn"}}}]);