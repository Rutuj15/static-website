!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},i=(new e.Error).stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="98d29698-3e2a-4fb0-af36-d88690a95840",e._sentryDebugIdIdentifier="sentry-dbid-98d29698-3e2a-4fb0-af36-d88690a95840")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1916],{74537:function(e,i,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/humans-of-email/[slug]",function(){return l(97654)}])},70221:function(e,i,l){"use strict";var t=l(85893);l(67294);var o=l(9008),s=l.n(o),a=l(85318);i.Z=e=>{let{title:i,description:l,ogImageURL:o,datePublished:d,dateModified:n,authorURL:r,authorName:c,authorDescription:m,canonicalURL:u}=e,h={"@context":"https://schema.org","@type":"Article",headline:null!=i?i:" ",description:null!=l?l:" ",image:null!=o?o:"https://www.mailmodo.com/static/images/og-image.png",datePublished:(null==d?void 0:d.trim())?(0,a.Uk)(d.trim()):" ",dateModified:(null==n?void 0:n.trim())?(0,a.Uk)(null==n?void 0:n.trim()):" ",mainEntityOfPage:{"@type":"WebPage","@id":u?"https://www.mailmodo.com/".concat(u):" "},author:{"@type":c&&"mailmodo"!==c.toLowerCase()?"Person":"Organization",name:null!=c?c:"Mailmodo",url:null!=r?r:"https://www.mailmodo.com/",description:null!=m?m:"Use Mailmodo to create and send interactive emails your customers love. Drive conversions and get better email ROI. Sign up for a free trial now."},publisher:{"@type":"Organization",name:"Mailmodo",url:"https://www.mailmodo.com/",sameAs:["https://www.linkedin.com/company/mailmodo/","https://www.facebook.com/mailmodo/","https://www.instagram.com/mailmodohq/","https://www.youtube.com/@mailmodo"],logo:{"@type":"ImageObject",url:"https://www.mailmodo.com/static/images/logo/logo-full.svg",width:"211",height:"39"}}};return(0,t.jsx)(s(),{children:(0,t.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(h)}})})}},83494:function(e,i,l){"use strict";var t=l(85893);l(67294);var o=l(9008),s=l.n(o),a=l(85318);i.Z=e=>{var i,l;let{title:o,description:d,ogImg:n,datePublished:r,dateModified:c}=e,m=(null!==(i=null==o?void 0:o.length)&&void 0!==i?i:1)%30,u=(null!==(l=null==d?void 0:d.length)&&void 0!==l?l:1)%30;u<m&&(u=m);let h=u?"".concat(u,"-03-2023"):"16-03-2023",v={"@context":"https://schema.org","@type":"WebPage",headline:null!=o?o:"",description:null!=d?d:"",image:null!=n?n:"https://www.mailmodo.com/static/images/og-image.png",datePublished:(0,a.Uk)(null!=r?r:m?"".concat(m,"-03-2023"):"08-09-2022"),dateModified:(0,a.Uk)(null!=c?c:h),publisher:{"@type":"Organization",name:"Mailmodo",url:"https://www.mailmodo.com/",sameAs:["https://www.linkedin.com/company/mailmodo/","https://www.facebook.com/mailmodo/","https://www.instagram.com/mailmodohq/","https://www.youtube.com/@mailmodo"],logo:"https://www.mailmodo.com/static/images/logo/logo-full.svg",description:"Mailmodo is a complete email marketing platform that helps email marketers to create and send interactive emails to drive growth and engagement.",address:{"@type":"PostalAddress",addressLocality:"Lewes",addressRegion:"DE",postalCode:"19958",streetAddress:"Mailmodo Technologies Inc. 16192, Coastal Highway",addressCountry:{"@type":"Country",name:"US"}},contactPoint:{"@type":"ContactPoint",email:"enquiries@mailmodo.com",contactType:"customer service"}}};return(0,t.jsx)(s(),{children:(0,t.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}})})}},97654:function(e,i,l){"use strict";l.r(i),l.d(i,{__N_SSG:function(){return I},default:function(){return C}});var t=l(85893),o=l(2962),s=l(9008),a=l.n(s),d=l(67294),n=l(11163),r=l.n(n),c=l(41664),m=l.n(c),u=l(4716),h=l.n(u);class v extends d.Component{componentDidMount(){this.routeChangeHandler(r().asPath),r().events.on("routeChangeStart",e=>{this.routeChangeHandler(e)}),r().events.on("routeChangeComplete",()=>{}),r().events.on("routeChangeError",()=>{}),r().asPath.includes("/template/")&&this.setState({darkClass:"dark-breadcrumb"})}routeChangeHandler(e){"/"!==e[e.length-1]&&(e+="/");let i=e.split("/").slice(1),l=[{text:"Home",link:"/",active:!0}];if(i&&i.length&&i[0]){l[0].active=!1;for(let e=0;e<i.length-1;e++){let t=i[e],o=t.charAt(0).toUpperCase()+t.slice(1),s="/"+i.slice(0,e+1).join("/");e===i.length-1?l.push({text:o,link:s,active:!0}):l.push({text:o,link:s,active:!1})}}this.setState({breadcrumbs:l.slice(0,this.state.breadcrumbDepth)})}render(){var e;let{breadcrumbs:i}=this.state;return(0,t.jsx)("nav",{className:h().breadcrumb_wrapper+"  ".concat(null!==(e=this.state.darkClass)&&void 0!==e?e:""),"aria-label":"breadcrumb",children:(0,t.jsx)("ol",{className:h().breadcrumb,children:i.map((e,l)=>(0,t.jsxs)("li",{className:h().breadcrumb_item,children:[(0,t.jsx)(m(),{legacyBehavior:!0,href:e.link,children:l==i.length-1?(0,t.jsx)("a",{disabled:!0,children:e.text}):(0,t.jsx)("a",{disabled:!!e.active,children:e.text})}),(0,t.jsx)("img",{hidden:l==i.length-1,alt:"breadcrumb arrow",title:"breadcrumb arrow icon",src:"/static/images/icon/breadcrumb-arrow.svg"})]},l))})})}constructor(e){var i;super(e),this.state={breadcrumbs:[],breadcrumbDepth:null!==(i=this.props.breadcrumbDepth)&&void 0!==i?i:3}}}var _=l(7293),g=l.n(_),p=l(47084),x=l.n(p),w=l(89755),y=l.n(w),b=l(15054),j=e=>{var i;let{totalPages:l,allPages:o}=e,[s,a]=(0,d.useState)({}),[n,r]=(0,d.useState)(0);return(0,d.useEffect)(()=>{a({data:o,sortedData:o,totalPage:o.length/3,minIndex:0,maxIndex:3})},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{style:{backgroundColor:"#ffffff"},className:g().Cards+" ",children:[(0,t.jsx)("div",{className:"container px-0",children:(0,t.jsx)("div",{className:"row mx-0",children:(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsx)("span",{className:g().heading,children:"More email stories for you"})})})}),(0,t.jsx)("div",{className:" "}),(0,t.jsx)("div",{className:"container pt-5 px-0",children:(0,t.jsx)("div",{className:"row mx-0",children:null==s?void 0:null===(i=s.sortedData)||void 0===i?void 0:i.map((e,i)=>{var l,o,a,d,n,r,c,u,h,v,_,p,x,w;return i>=s.minIndex&&i<s.maxIndex&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)(m(),{legacyBehavior:!0,passHref:!0,href:"/humans-of-email/".concat(null!==(_=e.slug)&&void 0!==_?_:" "),children:(0,t.jsx)("a",{children:(0,t.jsxs)("div",{className:g().card_item,children:[(0,t.jsx)("div",{className:g().card_img,children:(null===(l=e.Person)||void 0===l?void 0:null===(o=l.image)||void 0===o?void 0:null===(a=o.data)||void 0===a?void 0:null===(d=a.attributes)||void 0===d?void 0:d.url)&&(0,t.jsx)("div",{style:{position:"relative",width:"326px",height:"200px"},children:(0,t.jsx)(y(),{src:null!==(p=null===(n=e.Person)||void 0===n?void 0:null===(r=n.image)||void 0===r?void 0:null===(c=r.data)||void 0===c?void 0:null===(u=c.attributes)||void 0===u?void 0:u.url)&&void 0!==p?p:"https://res.cloudinary.com/mailmodo/image/upload/v1632463966/strapi/traffic_signs_361514_1920_fd83e3b51d.png",height:"200px",width:"360px",layout:"fixed",objectFit:"none"})})}),(0,t.jsxs)("div",{className:g().card_matter,children:[(0,t.jsx)("div",{className:g().card_title,children:null!==(x=null===(h=e.Person)||void 0===h?void 0:h.Name)&&void 0!==x?x:" "}),(0,t.jsx)("div",{className:g().card_tag,children:null!==(w=null===(v=e.seo)||void 0===v?void 0:v.description)&&void 0!==w?w:" "}),(0,t.jsx)("div",{className:g().card_readmore,children:"Read Story →"})]})]})})})},i)})})})}),(0,t.jsx)("div",{className:"layout-padding"}),(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,t.jsx)(b.Z,{count:Math.ceil(l/3),variant:"outlined",shape:"rounded",page:n,onChange:(e,i)=>{r(i),a({data:s.data,sortedData:s.sortedData,current:i,current:i,minIndex:(i-1)*3,maxIndex:3*i,yo:"ef"})},color:"primary"})}),(0,t.jsx)("div",{className:"layout-gap"})]})})};l(3457);var f=l(25709),N=l(70221),P=l(83494),k=l(24041),I=!0,C=e=>{var i,l,s,d,n,r,c,u,h,_,p,w,b,I,C,M,S,E,D,O,A,T,H,U,L,B,F,R,J,X,Z,q,z,K,G,Q,V,W,Y,$,ee,ei,el,et,eo,es,ea,ed,en,er,ec,em,eu,eh,ev,e_,eg,ep,ex,ew,ey,eb,ej,ef,eN,eP,ek,eI;let{PageData:eC,totalCards:eM,totalPages:eS,allPages:eE,slug:eD}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.PB,{robotsProps:{maxImagePreview:"large"},title:null!==(ec=null===(i=eC.seo)||void 0===i?void 0:i.title)&&void 0!==ec?ec:" ",description:null!==(em=null===(l=eC.seo)||void 0===l?void 0:l.description)&&void 0!==em?em:" ",canonical:"https://www.mailmodo.com/humans-of-email/".concat(eC.slug,"/"),keywords:null!==(eu=null===(s=eC.seo)||void 0===s?void 0:s.keywords)&&void 0!==eu?eu:" ",openGraph:{url:"https://www.mailmodo.com/humans-of-email/".concat(eC.slug,"/"),title:null!==(eh=null===(d=eC.seo)||void 0===d?void 0:d.title)&&void 0!==eh?eh:" ",description:null!==(ev=null===(n=eC.seo)||void 0===n?void 0:n.description)&&void 0!==ev?ev:" ",type:"Article",locale:"en_US",article:{authors:["Mailmodo"],publishedTime:null!==(e_=eC.createdAt)&&void 0!==e_?e_:" ",modifiedTime:null!==(eg=eC.updatedAt)&&void 0!==eg?eg:" "},images:[{url:(null===(r=eC.seo)||void 0===r?void 0:null===(c=r.shareImage)||void 0===c?void 0:null===(u=c.image)||void 0===u?void 0:u.url)?(0,f.Jn)(null===(h=eC.seo)||void 0===h?void 0:null===(_=h.shareImage)||void 0===_?void 0:null===(p=_.image)||void 0===p?void 0:p.url):"https://www.mailmodo.com/static/images/og-image.png"}]},twitter:{handle:"@mailmodo",site:"twitter.com/mailmodo",cardType:"summary_large_image"}}),(0,t.jsx)(P.Z,{title:null!==(ep=null===(w=eC.seo)||void 0===w?void 0:w.title)&&void 0!==ep?ep:" ",description:null!==(ex=null===(b=eC.seo)||void 0===b?void 0:b.description)&&void 0!==ex?ex:" ",ogImg:null===(I=eC.seo)||void 0===I?void 0:null===(C=I.shareImage)||void 0===C?void 0:null===(M=C.image)||void 0===M?void 0:M.url,datePublished:eC.createdAt,dateModified:eC.updatedAt}),(0,t.jsx)(a(),{children:(0,t.jsx)("style",{children:"body{font-family: Inter !important;}"})}),(0,t.jsx)(N.Z,{title:null!==(ew=null===(S=eC.seo)||void 0===S?void 0:S.title)&&void 0!==ew?ew:" ",description:null!==(ey=null===(E=eC.seo)||void 0===E?void 0:E.description)&&void 0!==ey?ey:" ",ogImageURL:(null===(D=eC.seo)||void 0===D?void 0:null===(O=D.shareImage)||void 0===O?void 0:null===(A=O.image)||void 0===A?void 0:A.url)?null===(T=eC.seo)||void 0===T?void 0:null===(H=T.shareImage)||void 0===H?void 0:null===(U=H.image)||void 0===U?void 0:U.url:"https://www.mailmodo.com/static/images/og-image.png",datePublished:null!==(eb=eC.createdAt)&&void 0!==eb?eb:" ",dateModified:null!==(ej=eC.updatedAt)&&void 0!==ej?ej:" ",canonicalURL:"humans-of-email/"+eD}),(0,t.jsx)("div",{className:g().hero_fold,children:(0,t.jsxs)("div",{className:"container px-0",children:[(0,t.jsxs)("div",{className:g().hero_content_container,children:[(0,t.jsx)(v,{}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:g().matter_block,children:[(null===(L=eC.Person)||void 0===L?void 0:L.Name)&&(0,t.jsxs)("h1",{children:[" ",eC.Person.Name," "]}),(null===(B=eC.Person)||void 0===B?void 0:B.title)&&(0,t.jsxs)("h2",{children:[" ",(0,t.jsx)("del",{children:"\xa0\xa0\xa0"})," ",eC.Person.title," "]}),(null===(F=eC.Person)||void 0===F?void 0:F.about)&&(0,t.jsxs)("p",{children:[" ",eC.Person.about," "]}),(0,t.jsxs)("ul",{className:g().desktop_only,children:[(0,t.jsx)("li",{children:"CONNECT "}),(null===(R=eC.Person)||void 0===R?void 0:R.instagram)&&(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:null===(J=eC.Person)||void 0===J?void 0:J.instagram,children:(0,t.jsx)("img",{style:{height:"20px",width:"20px"},src:"https://res.cloudinary.com/mailmodo/image/upload/v1636553329/strapi/001_instagram_1_cea4c729c5.png"})})}),(null===(X=eC.Person)||void 0===X?void 0:X.facebook)&&(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:null===(Z=eC.Person)||void 0===Z?void 0:Z.facebook,children:(0,t.jsx)("img",{style:{height:"20px",width:"20px"},src:"https://res.cloudinary.com/mailmodo/image/upload/v1636700096/strapi/003_facebook_efbe948b9c.png"})})}),(null===(q=eC.Person)||void 0===q?void 0:q.twitter)&&(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:null===(z=eC.Person)||void 0===z?void 0:z.twitter,children:(0,t.jsx)("img",{style:{height:"20px",width:"20px"},src:"https://res.cloudinary.com/mailmodo/image/upload/v1636700110/strapi/002_twitter_2_4308593262.png"})})}),(null===(K=eC.Person)||void 0===K?void 0:K.website)&&(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:null===(G=eC.Person)||void 0===G?void 0:G.website,children:(0,t.jsx)("img",{style:{height:"20px",width:"20px"},src:"https://res.cloudinary.com/mailmodo/image/upload/v1636813180/strapi/world_wide_web_c354309655.png"})})}),(null===(Q=eC.Person)||void 0===Q?void 0:Q.linkedIn)&&(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:null===(V=eC.Person)||void 0===V?void 0:V.linkedIn,children:(0,t.jsx)("img",{style:{height:"20px",width:"20px"},src:"                                        https://res.cloudinary.com/mailmodo/image/upload/v1636813483/strapi/linkedin_logo_a90de56bd9.png"})})})]})]})}),(0,t.jsxs)("div",{className:"col-md-6",children:[(0,t.jsx)(y(),{height:"407px",width:"498px",src:null!==(ef=null===(W=eC.Person)||void 0===W?void 0:null===(Y=W.image)||void 0===Y?void 0:null===($=Y.data)||void 0===$?void 0:null===(ee=$.attributes)||void 0===ee?void 0:ee.url)&&void 0!==ef?ef:" https://www.google.com"}),(0,t.jsx)("div",{className:g().mobile_only_social,style:{display:"none",textAlign:"left"},children:(0,t.jsxs)("ul",{style:{paddingTop:"35px"},children:[(0,t.jsx)("li",{children:"CONNECT "}),(null===(ei=eC.Person)||void 0===ei?void 0:ei.instagram)&&(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:null===(el=eC.Person)||void 0===el?void 0:el.instagram,children:(0,t.jsx)("img",{style:{height:"20px",width:"20px"},src:"https://res.cloudinary.com/mailmodo/image/upload/v1636553329/strapi/001_instagram_1_cea4c729c5.png"})})}),(null===(et=eC.Person)||void 0===et?void 0:et.facebook)&&(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:null===(eo=eC.Person)||void 0===eo?void 0:eo.facebook,children:(0,t.jsx)("img",{style:{height:"20px",width:"20px"},src:"https://res.cloudinary.com/mailmodo/image/upload/v1636700096/strapi/003_facebook_efbe948b9c.png"})})}),(null===(es=eC.Person)||void 0===es?void 0:es.twitter)&&(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:null===(ea=eC.Person)||void 0===ea?void 0:ea.twitter,children:(0,t.jsx)("img",{style:{height:"20px",width:"20px"},src:"https://res.cloudinary.com/mailmodo/image/upload/v1636700110/strapi/002_twitter_2_4308593262.png"})})})]})})]})]})]}),(0,t.jsx)("hr",{className:g().hr_class})]})}),(0,t.jsxs)("div",{className:g().content_fold,children:[(0,t.jsx)("div",{className:"row mx-0",children:(0,t.jsx)("div",{className:"col-md-12 justify-content-center ",children:(0,t.jsx)("div",{className:g().matter_block,children:(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:x()(null!==(eN=eC.content)&&void 0!==eN?eN:" ")},className:g().content})})})}),(null===(ed=eC.button)||void 0===ed?void 0:ed.description)&&(0,t.jsx)("div",{className:g().cta,children:(0,t.jsxs)("div",{className:g().flex_container,children:[(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:x()(null!==(eP=eC.button.description)&&void 0!==eP?eP:" ")},className:g().flex_item_left}),(0,t.jsx)("div",{className:g().flex_item_right+" ",children:(0,t.jsx)(m(),{legacyBehavior:!0,href:null!==(ek=null===(en=eC.button)||void 0===en?void 0:en.link)&&void 0!==ek?ek:"/",children:(0,t.jsx)("button",{className:g().cta_btn,children:null!==(eI=null===(er=eC.button)||void 0===er?void 0:er.text)&&void 0!==eI?eI:" "})})})]})})]}),(0,t.jsx)("div",{className:"container px-0",children:(0,t.jsx)("hr",{className:g().hr_class})}),eM>=3&&(0,t.jsx)(j,{totalPages:eS,allPages:eE}),(0,t.jsx)(k.Z,{})]})}},7293:function(e){e.exports={hr_class:"styles-slug_hr_class__cBxQR",hero_fold:"styles-slug_hero_fold__UIh8u",matter_block:"styles-slug_matter_block__uMM0J",hero_content_container:"styles-slug_hero_content_container__RvG3h",content_fold:"styles-slug_content_fold__I3uhg",content:"styles-slug_content__1OwE7",author_block:"styles-slug_author_block__6_FE3",author_content:"styles-slug_author_content__0Fkut",cta:"styles-slug_cta__I1w3E",flex_container:"styles-slug_flex_container__SfLVw",flex_item_left:"styles-slug_flex_item_left__ipiDt",flex_item_right:"styles-slug_flex_item_right__14XNj",desc:"styles-slug_desc__Mqeg5",cta_btn:"styles-slug_cta_btn__FOn_d",Cards:"styles-slug_Cards__XjeJK",date_container:"styles-slug_date_container__Vs_6b",heading:"styles-slug_heading__yD_PX",card_item:"styles-slug_card_item__gqo4y",card_matter:"styles-slug_card_matter__fF7ks",card_img:"styles-slug_card_img__KN_le",card_tag:"styles-slug_card_tag__HSO7j",card_readmore:"styles-slug_card_readmore__MKEn0",card_title:"styles-slug_card_title__Q0o3P",mobile_only_social:"styles-slug_mobile_only_social__K8Rg6",desktop_only:"styles-slug_desktop_only__ENnn3"}},4716:function(e){e.exports={breadcrumb_wrapper:"Breadcrumb_breadcrumb_wrapper__pJXYo",breadcrumb:"Breadcrumb_breadcrumb__e86N0",breadcrumb_item:"Breadcrumb_breadcrumb_item__pjE6z"}}},function(e){e.O(0,[7901,7084,2607,5064,4041,9774,2888,179],function(){return e(e.s=74537)}),_N_E=e.O()}]);