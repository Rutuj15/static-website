!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3f29973e-8870-47b2-b9ac-4c538befee6d",e._sentryDebugIdIdentifier="sentry-dbid-3f29973e-8870-47b2-b9ac-4c538befee6d")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5199],{43893:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/email-flow/[category]/[categoryItem]",function(){return i(22736)}])},22736:function(e,t,i){"use strict";let n;i.r(t),i.d(t,{__N_SSG:function(){return ed},default:function(){return e_}});var a=i(85893),o=i(67294),r=i(77979),s=i(11562),l=i(11252),c=i(89755),d=i.n(c),_=i(16198),u=i(69740),m=i.n(u),h=i(3961),p=i.n(h),v=i(47084),g=i.n(v),y=i(25709),b=i(97975),f=i(20627),x=i(56941),j=i(41664),w=i.n(j),N=i(2962),I=i(11163),k=i(70221);i(78140);var E=i(83494),O=i(71572),T=i.n(O),P=i(95172),C=i.n(P),Z=e=>{let{thumbnail:t,label:i,link:n}=e;return(0,a.jsx)("div",{className:C().cardItem,children:(0,a.jsx)(w(),{legacyBehavior:!0,passHref:!0,href:null!=n?n:"/",prefetch:!1,children:(0,a.jsxs)("a",{children:[(0,a.jsx)("div",{className:C().thumbnail,children:(0,a.jsx)(d(),{src:null!=t?t:"https://res.cloudinary.com/mailmodo/image/upload/v1640434039/strapi/card1_f386991b06.png",alt:"Picture",objectFit:"fill",width:345,height:198})}),(0,a.jsx)("div",{className:C().contents,children:(0,a.jsx)("h4",{className:C().h4,children:i})})]})})})},R=e=>{let{relatedEmailFlow:t,midSlug:i}=e;return(0,a.jsxs)("div",{className:"container ".concat(T().container),children:[(0,a.jsx)("h2",{className:T().heading,children:"Related email flows"}),(0,a.jsx)("div",{className:T().card_container,children:t.map((e,t)=>{var n,o,r,s,l,c;return(0,a.jsx)(Z,{thumbnail:null===(n=e.attributes)||void 0===n?void 0:null===(o=n.image)||void 0===o?void 0:null===(r=o.data)||void 0===r?void 0:null===(s=r.attributes)||void 0===s?void 0:s.url,label:null===(l=e.attributes)||void 0===l?void 0:l.title,link:"/email-flow/".concat(i,"/").concat(null===(c=e.attributes)||void 0===c?void 0:c.slug)},"email_flow_".concat(t))})})]})},S=i(67933),D=i.n(S),U=e=>{let{popularIndustries:t}=e;return(0,a.jsxs)("div",{className:"container ".concat(D().container),children:[(0,a.jsx)("h2",{className:D().heading,children:"Other popular email flows"}),(0,a.jsx)("div",{className:D().card_container,children:t.map((e,t)=>{var i;return(0,a.jsx)(Z,{thumbnail:null===(i=e.icon)||void 0===i?void 0:i.url,label:e.title,link:"/email-flow/".concat(e.slug,"/")},"industry_".concat(t))})})]})},M=i(96109),H=i.n(M),q=i(72023),L=i.n(q),G=e=>{var t;let{title:i,description:n,renderUrl:o,slug:r,thumbnail:s}=e,l=o.split("/")[4],c=o.split("/")[5],_=null===(t=(0,I.useRouter)())||void 0===t?void 0:t.asPath;return(0,a.jsx)("div",{className:L().template_card,children:(0,a.jsx)("div",{children:(0,a.jsx)("a",{className:L().related_img,href:"/email-templates/".concat(r,"/"),children:(0,a.jsx)("div",{style:{cursor:"pointer",width:"100%"},className:"".concat(L().related_img," ").concat(L().card," ").concat(L().min_card_height),children:(0,a.jsxs)("div",{className:L().card_body,children:[s.url&&(0,a.jsx)("div",{className:L().image,children:(0,a.jsx)(d(),{src:s.url,alt:"title",width:343,height:622,objectFit:"cover",objectPosition:"top"})}),(0,a.jsxs)("div",{className:L().overlay,children:[(0,a.jsx)("a",{href:"/email-templates/",children:(0,a.jsx)("h5",{className:L().title,children:i})}),(0,a.jsx)("div",{className:L().description,children:(0,a.jsx)("p",{children:n})}),(0,a.jsxs)("div",{className:L().btn_group,children:[(0,a.jsx)("button",{className:L().button_preview,onClick:e=>{e.preventDefault(),window.location.href="/email-templates/".concat(r,"/")},children:"Preview"}),(0,a.jsx)("button",{className:L().button_use,onClick:e=>{e.preventDefault(),window.location.href="https://manage.mailmodo.com/app/open-template/".concat(l,"/").concat(c,"?utm_content=use-template&utm_term=").concat(_)},children:"+ Use this Template"})]})]})]})})})},"related_")})},V=e=>{let{topThreeTemplates:t}=e;return(0,a.jsxs)("div",{className:"container ".concat(H().container),children:[(0,a.jsx)("h2",{className:H().heading,children:"Related email templates you like"}),(0,a.jsx)("div",{className:"".concat(H().card_container),children:t.map((e,t)=>{var i,n;return(0,a.jsx)(G,{title:e.title,description:e.description,renderUrl:e.renderUrl,slug:e.slug,thumbnail:null===(i=e.thumbnail)||void 0===i?void 0:null===(n=i.data)||void 0===n?void 0:n.attributes},"template_".concat(t))})})]})},X=i(47773),Y=i.n(X),A=i(25675),F=i.n(A),B=e=>{let{partnersCTA:t,tryUrl:i}=e;return(0,a.jsxs)("div",{className:"container ".concat(Y().container),children:[(0,a.jsx)("h2",{className:Y().heading,children:"How to use this template in your email marketing stack?"}),(null==t?void 0:t.length)>0&&(0,a.jsx)("p",{className:Y().description,children:"This template is available on the following partner platforms to collaborate with your team"}),t.map((e,t)=>{var i,n,o,r,s,l,c,d,_,u,m,h,p,v,g,y,b,f,x,j,N;return(0,a.jsx)("div",{className:Y().chips,children:e.link?(0,a.jsx)(w(),{href:e.link,passHref:!0,prefetch:!1,children:(0,a.jsxs)("div",{className:Y().chip,children:[(0,a.jsx)("p",{className:Y().label,children:"Create this in "}),(null===(i=e.image)||void 0===i?void 0:null===(n=i.data)||void 0===n?void 0:null===(o=n.attributes)||void 0===o?void 0:o.url)&&(0,a.jsx)("div",{className:Y().image,children:(0,a.jsx)(F(),{src:null===(r=e.image)||void 0===r?void 0:null===(s=r.data)||void 0===s?void 0:null===(l=s.attributes)||void 0===l?void 0:l.url,alt:(null===(c=e.image)||void 0===c?void 0:null===(d=c.data)||void 0===d?void 0:null===(_=d.attributes)||void 0===_?void 0:_.alternativeText)||"partner logo",width:"75",height:"26",objectFit:"contain"})})]},"partner_".concat(t))}):(0,a.jsxs)("div",{className:Y().chip,children:[(0,a.jsx)("p",{className:Y().label,children:"Create this in "}),(null===(u=e.image)||void 0===u?void 0:null===(m=u.data)||void 0===m?void 0:null===(h=m.attributes)||void 0===h?void 0:h.url)&&(0,a.jsx)("div",{className:Y().image,children:(0,a.jsx)(F(),{src:null===(p=e.image)||void 0===p?void 0:null===(v=p.data)||void 0===v?void 0:null===(g=v.attributes)||void 0===g?void 0:g.url,alt:(null===(y=e.image)||void 0===y?void 0:null===(b=y.data)||void 0===b?void 0:null===(f=b.attributes)||void 0===f?void 0:f.alternativeText)||"partner logo",width:null===(x=e.image)||void 0===x?void 0:null===(j=x.data)||void 0===j?void 0:null===(N=j.attributes)||void 0===N?void 0:N.width,height:"26"})})]},"partner_".concat(t))})}),(0,a.jsx)("p",{className:Y().description,children:"Use the information in this flow to create one on Mailmodo and start sending the campaigns today."}),(0,a.jsx)("div",{className:Y().btn_container,children:(0,a.jsx)(w(),{prefetch:!1,href:i,target:"_blank",children:(0,a.jsx)("button",{className:Y().btn,children:"Use this in Mailmodo"})})})]})},J=i(59205),W=i.n(J),K=i(85318),z=()=>{let e="".concat((0,I.useRouter)().asPath);return(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:W().dark_cta_wrapper,children:[(0,a.jsxs)("div",{className:W().matter_block,children:[(0,a.jsx)("h4",{className:W().title,children:"Need help to set up your lifecycle email flows?"}),(0,a.jsx)("p",{className:W().description,children:"Book a consultation call with us"})]}),(0,a.jsx)("div",{className:W().img_container,children:(0,a.jsx)(d(),{alt:"mailmodo bulletin",height:"166",width:"269",src:"https://res.cloudinary.com/mailmodo/image/upload/v1682061638/strapi/email_flow_cta_avatar_59b73a16bc.svg",objectFit:"contain",objectPosition:"bottom"})}),(0,a.jsx)("div",{className:W().cta,children:(0,a.jsx)("a",{href:"".concat((0,K.XE)("https://www.mailmodo.com/demo/","cta-light",e)),children:(0,a.jsx)("button",{children:"Speak to us"})})})]})})};let Q="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var $={randomUUID:Q};let ee=new Uint8Array(16);function et(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(ee)}let ei=[];for(let e=0;e<256;++e)ei.push((e+256).toString(16).slice(1));var en=function(e,t,i){if($.randomUUID&&!t&&!e)return $.randomUUID();e=e||{};let n=e.random||(e.rng||et)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){i=i||0;for(let e=0;e<16;++e)t[i+e]=n[e];return t}return function(e,t=0){return(ei[e[t+0]]+ei[e[t+1]]+ei[e[t+2]]+ei[e[t+3]]+"-"+ei[e[t+4]]+ei[e[t+5]]+"-"+ei[e[t+6]]+ei[e[t+7]]+"-"+ei[e[t+8]]+ei[e[t+9]]+"-"+ei[e[t+10]]+ei[e[t+11]]+ei[e[t+12]]+ei[e[t+13]]+ei[e[t+14]]+ei[e[t+15]]).toLowerCase()}(n)},ea=i(20870),eo=i.n(ea);function er(){(0,I.useRouter)().asPath;let e="".concat((0,I.useRouter)().asPath);return(0,a.jsxs)("div",{className:eo().container,children:[(0,a.jsxs)("div",{className:eo().cta,children:[(0,a.jsxs)("center",{children:[(0,a.jsxs)("p",{className:eo().heading,children:["Automate emails",(0,a.jsx)("br",{}),"without the chaos"]}),(0,a.jsx)("p",{className:eo().description,children:"Create automation in minutes with Mailmodo's prebuilt journey"})]}),(0,a.jsx)("div",{children:(0,a.jsx)("center",{children:(0,a.jsx)("a",{href:"".concat((0,K.XE)("https://manage.mailmodo.com/auth/signup","engagement",e)),children:(0,a.jsx)("button",{className:eo().demo_btm,children:"Try Mailmodo for free"})})})}),(0,a.jsxs)("div",{className:eo().testimonial,children:[(0,a.jsx)("div",{className:eo().quotation_mark,children:(0,a.jsx)(F(),{src:"https://res.cloudinary.com/mailmodo/image/upload/v1698210545/strapi/_4b57051d47.svg",height:"27",width:"23"})}),"Targeted automated email sequences have helped increase feature adoption"]}),(0,a.jsxs)("div",{className:eo().author,children:[(0,a.jsx)("div",{className:eo().img,children:(0,a.jsx)(F(),{src:"https://res.cloudinary.com/mailmodo/image/upload/v1698214614/strapi/Ellipse_2014_c9c498966b.svg",height:45,width:45})}),(0,a.jsxs)("div",{className:eo().content,children:[(0,a.jsx)("div",{className:eo().title,children:"Ike Baldwin"}),(0,a.jsx)("div",{className:eo().designation,children:"Account Manager at Whop"})]})]}),(0,a.jsx)("div",{className:eo().banner,children:(0,a.jsx)(F(),{src:"https://res.cloudinary.com/mailmodo/image/upload/v1698214471/strapi/Component_1_138882dcb7.svg",height:"200",width:"281"})})]}),(0,a.jsx)("div",{className:eo().footer,children:(0,a.jsxs)(w(),{href:"".concat((0,K.XE)("/","engagement",e)),children:[(0,a.jsx)(F(),{src:"https://res.cloudinary.com/mailmodo/image/upload/v1698214803/strapi/Arrow_Square_Out_1_e6693e1354.png",height:"18",width:"18"}),"Learn more about Mailmodo"]})})]})}var es=i(4298),el=i.n(es),ec=i(24041),ed=!0,e_=e=>{var t,i,n,c,u,h,v,j,O,T,P,C,Z,S,D,M,H,q,L,G,X,Y,A,F,J,W,K,Q,$,ee;let{navBarProps:et,markdown:ei,subNavBarProps:ea,categoryName:eo,title:es,next:ed,previous:e_,industryName:eu,seo:em,categoryItemName:eh,categorySeo:ep,ratingCount:ev,ratingValue:eg,updatedAt:ey,createdAt:eb,Heading:ef,partnersCTA:ex,relatedEmailFlow:ej,popularIndustries:ew,topThreeTemplates:eN,slug:eI,category:ek,preBuiltJourneyId:eE}=e,[eO,eT]=(0,o.useState)(en()),eP="https://manage.mailmodo.com/app/journey/";function eC(e){eT(en()),insertEventToDataLayer({preBuiltJourneyURL:eP})}eE&&(eP="https://manage.mailmodo.com/app/journey-new/create/setup?".concat(eE)),(0,o.useEffect)(()=>(window.handleJourneyClick=eC,()=>{delete window.handleJourneyClick}),[]);let eZ='<a target="_blank" href=\''.concat(encodeURI(eP),"' onclick='handleJourneyClick(event)'><button data-button-type=\"primary\">Create this in Mailmodo");ei=ei.replace("<a href='https://manage.mailmodo.com/app/journey/'><button data-button-type=\"primary\">Create this in Mailmodo",eZ);let[eR,eS]=(0,o.useState)(!0),[eD,eU]=(0,o.useState)(!1),[eM,eH]=(0,o.useState)(!1);g().use({rendererForResources:{link:(e,t,i)=>'<a rel="nofollow" href="'.concat(e,'">\n          ').concat(i,"\n        </a>")}});let eq=(0,I.useRouter)().asPath;eq.includes("/saas-email-flow/");let eL=e=>{let{src:t,width:i,quality:n}=e;return"".concat(t,"?w=").concat(i,"&q=").concat(n||75)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(el(),{dangerouslySetInnerHTML:{__html:"function insertEventToDataLayer(data){dataLayer.push({'event': 'create_this_flow', 'data': data});console.log(dataLayer)}"}}),(0,a.jsx)(N.PB,{robotsProps:{maxImagePreview:"large"},title:null!==(G=null!==(L=null==em?void 0:em.title)&&void 0!==L?L:es)&&void 0!==G?G:" ",description:null!==(X=null==em?void 0:em.description)&&void 0!==X?X:"",canonical:"https://www.mailmodo.com/email-flow/".concat(eo,"/").concat(eh,"/"),openGraph:{url:"https://www.mailmodo.com/email-flow/".concat(eo,"/").concat(eh,"/"),title:null!==(A=null!==(Y=null==em?void 0:em.title)&&void 0!==Y?Y:es)&&void 0!==A?A:" ",description:null!==(F=null==em?void 0:em.description)&&void 0!==F?F:"",locale:"en_US",type:"Article",article:{authors:["Mailmodo"],publishedTime:null!=eb?eb:" ",modifiedTime:null!=ey?ey:" "},images:[{url:(null==em?void 0:null===(t=em.shareImage)||void 0===t?void 0:null===(i=t.image)||void 0===i?void 0:null===(n=i.data)||void 0===n?void 0:null===(c=n.attributes)||void 0===c?void 0:c.url)||(null==ep?void 0:null===(u=ep.shareImage)||void 0===u?void 0:null===(h=u.image)||void 0===h?void 0:h.url)||"https://www.mailmodo.com/static/images/og-image.png"}]},twitter:{handle:"@mailmodo",site:"twitter.com/mailmodo",cardType:"summary_large_image"}}),(0,a.jsx)(E.Z,{title:null!==(W=null!==(J=null==em?void 0:em.title)&&void 0!==J?J:es)&&void 0!==W?W:" ",description:null!==(K=null==em?void 0:em.description)&&void 0!==K?K:"",ogImg:(null==em?void 0:null===(v=em.shareImage)||void 0===v?void 0:null===(j=v.image)||void 0===j?void 0:null===(O=j.data)||void 0===O?void 0:null===(T=O.attributes)||void 0===T?void 0:T.url)||(null==ep?void 0:null===(P=ep.shareImage)||void 0===P?void 0:null===(C=P.image)||void 0===C?void 0:C.url)||"https://www.mailmodo.com/static/images/og-image.png",datePublished:eb,dateModified:ey}),(0,a.jsx)(k.Z,{title:null!==($=null!==(Q=null==em?void 0:em.title)&&void 0!==Q?Q:es)&&void 0!==$?$:" ",description:null!==(ee=null==em?void 0:em.description)&&void 0!==ee?ee:"",ogImageURL:(null==em?void 0:null===(Z=em.shareImage)||void 0===Z?void 0:null===(S=Z.image)||void 0===S?void 0:null===(D=S.data)||void 0===D?void 0:null===(M=D.attributes)||void 0===M?void 0:M.url)||(null==ep?void 0:null===(H=ep.shareImage)||void 0===H?void 0:null===(q=H.image)||void 0===q?void 0:q.url)||"https://www.mailmodo.com/static/images/og-image.png",datePublished:null!=eb?eb:"",dateModified:null!=ey?ey:"",canonicalURL:ek+"/"+eI}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:m().breadcrumb_container,children:(0,a.jsx)(_.Z,{})}),(0,a.jsxs)("div",{className:m().component,children:[(0,a.jsxs)("div",{className:m().side_navbar_wrapper,children:[(0,a.jsx)("div",{className:m().accordion+" ",children:(0,a.jsx)("div",{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(b.Z,{color:"link",className:m().accord_btn,id:"toggle1",onClick:()=>{eS(e=>!e)},children:[(0,a.jsx)("span",{children:eu}),(0,a.jsx)("div",{style:{transform:eR?"scaleY(-1)":"scaleY(1)",transition:"0.2s"},children:(0,a.jsx)(d(),{loader:eL,alt:"chevron-down",src:"/static/images/icon/chevron-down.svg",height:"16",width:"16"})})]}),(0,a.jsx)(f.Z,{isOpen:eR,children:(0,a.jsx)(x.Z,{className:m().accord_card,children:(0,a.jsx)(l.Z,{category:eo,categoryItem:ea})})})]})})}),(0,a.jsx)("hr",{className:m().accordion_divider}),(0,a.jsx)("div",{className:m().accordion+" ",children:(0,a.jsx)("div",{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(b.Z,{color:"link",className:m().accord_btn,id:"toggle1",onClick:()=>{eU(e=>!e)},children:[(0,a.jsx)("span",{children:"Other Industries"}),(0,a.jsx)("div",{style:{transform:eD?"scaleY(-1)":"scaleY(1)",transition:"0.2s"},children:(0,a.jsx)(d(),{loader:eL,alt:"chevron-down",src:"/static/images/icon/chevron-down.svg",height:"16",width:"16"})})]}),(0,a.jsx)(f.Z,{isOpen:eD,children:(0,a.jsx)(x.Z,{className:m().accord_card,children:(0,a.jsx)(r.Z,{categories:et,currentRoute:""})})})]})})})]}),(0,a.jsxs)("div",{className:m().boxprops,style:{flexGrow:"2"},children:[(0,a.jsxs)("div",{className:m().maindiv,style:{flexGrow:"2"},children:[(0,a.jsx)(s.Z,{categories:et}),(0,a.jsxs)("div",{className:p().markdown_content,children:[!!ef&&(0,a.jsxs)("div",{className:p().heading_with_button,children:[(0,a.jsx)("h1",{children:ef}),(0,a.jsx)("a",{href:encodeURI(eP),onClick:e=>eC(e),target:"_blank",children:(0,a.jsx)("button",{children:"Create this flow"})})]}),(0,a.jsx)("article",{className:p().content,dangerouslySetInnerHTML:{__html:g()(ei)}})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:m().sticky_container,children:(0,a.jsx)(er,{})})})]})]}),(0,a.jsxs)("div",{className:m().navigation_container,children:[(0,a.jsx)("div",{className:m().previous,style:{visibility:(null==e_?void 0:e_.slug)?"visible":"hidden"},children:(0,a.jsx)(w(),{legacyBehavior:!0,href:"/email-flow/".concat(eo,"/").concat(null==e_?void 0:e_.slug),passHref:!0,prefetch:!1,children:(0,a.jsxs)("a",{className:"d-flex",children:[(0,a.jsx)("div",{className:m().image,children:(0,a.jsx)(d(),{src:(0,y.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1655026154/strapi/previous_caret_930e20ce82.svg","svg",100),width:11,height:22})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:m().heading,children:"Previous"}),(0,a.jsx)("p",{className:m().subheading,children:null==e_?void 0:e_.title})]})]})})}),(0,a.jsx)("div",{className:m().next,style:{visibility:(null==ed?void 0:ed.slug)?"visible":"hidden"},children:(0,a.jsx)(w(),{legacyBehavior:!0,href:"/email-flow/".concat(eo,"/").concat(null==ed?void 0:ed.slug),passHref:!0,prefetch:!1,children:(0,a.jsxs)("a",{className:"d-flex",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:m().heading,children:"Next"}),(0,a.jsx)("p",{className:m().subheading,children:null==ed?void 0:ed.title})]}),(0,a.jsx)("div",{className:m().image,children:(0,a.jsx)(d(),{src:(0,y.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1655026154/strapi/next_caret_eb0d8d5a81.svg","svg",100),width:11,height:22})})]})})})]})]}),(0,a.jsx)(B,{tryUrl:eP,partnersCTA:ex}),!!(null==ej?void 0:ej.length)&&(0,a.jsx)(R,{relatedEmailFlow:ej,midSlug:eo}),!!ew.length&&(0,a.jsx)(U,{popularIndustries:ew}),!!eN.length&&(0,a.jsx)(V,{topThreeTemplates:eN}),(0,a.jsx)(z,{}),(0,a.jsx)(ec.Z,{})]})}},95172:function(e){e.exports={cardItem:"styles_cardItem__s5YLd",thumbnail:"styles_thumbnail__ukIYB",contents:"styles_contents__fGhtX",h4:"styles_h4__NdpQv"}},59205:function(e){e.exports={dark_cta_wrapper:"styles_dark_cta_wrapper__KWaby",img_container:"styles_img_container__x24d_",title:"styles_title__fjyxa",description:"styles_description__ahRuI",matter_block:"styles_matter_block__qHDEY",button_container:"styles_button_container__3CyvL",cta:"styles_cta__RcBcH"}},47773:function(e){e.exports={container:"styles_container__n7Oih",heading:"styles_heading__N9Dm3",description:"styles_description__OYN7C",chips:"styles_chips__2MUP_",chip:"styles_chip__vLz7H",label:"styles_label__1pnN6",image:"styles_image__Z9ymr",btn_container:"styles_btn_container__dPW0k",btn:"styles_btn__ztVzG"}},67933:function(e){e.exports={container:"styles_container__vkVqq",heading:"styles_heading__feTw2",card_container:"styles_card_container__hELo4"}},71572:function(e){e.exports={container:"styles_container__Mxxmf",heading:"styles_heading__WtBrx",card_container:"styles_card_container__MjrQk"}},72023:function(e){e.exports={template_card:"styles_template_card__ZdjDd",heading:"styles_heading__lIli6",related_img:"styles_related_img__Vpxc5",card:"styles_card__2l1PF",min_card_height:"styles_min_card_height__NW2Y9",card_body:"styles_card_body__CGh1J",overlay:"styles_overlay__XQ12x",title:"styles_title__7kgR6",description:"styles_description__7b1sV",btn_group:"styles_btn_group__aXYUl",button_preview:"styles_button_preview__cN5lu",button_use:"styles_button_use__SHagy",image:"styles_image__eiow6","inner-wrapper":"styles_inner-wrapper__YVItC","custom-card":"styles_custom-card__HWdOI","template-description":"styles_template-description__GyN5K"}},96109:function(e){e.exports={container:"styles_container__X5_et",heading:"styles_heading__Fxp7I",card_container:"styles_card_container__UdnOJ"}},20870:function(e){e.exports={container:"side_sticky_container__usZIy",cta:"side_sticky_cta__tPsjp",heading:"side_sticky_heading__l7ilh",description:"side_sticky_description__kNuhI",demo_btm:"side_sticky_demo_btm__dypeJ",testimonial:"side_sticky_testimonial__XgyVy",quotation_mark:"side_sticky_quotation_mark__ym87k",author:"side_sticky_author__8B79r",img:"side_sticky_img__KmPQ5",content:"side_sticky_content__w22pg",title:"side_sticky_title__ovbyD",designation:"side_sticky_designation__QHKP6",banner:"side_sticky_banner__iAHCR",footer:"side_sticky_footer__7DeZz"}},69740:function(e){e.exports={breadcrumb_container:"categoryItem_breadcrumb_container__PYooo",component:"categoryItem_component__kJryw",side_navbar_wrapper:"categoryItem_side_navbar_wrapper__lGHUl",sidebar:"categoryItem_sidebar__G0E7H",active:"categoryItem_active__2YWVe",cta_img:"categoryItem_cta_img__yoth7",back:"categoryItem_back__Bb5Y_",accordion:"categoryItem_accordion__62nR1",accord_btn:"categoryItem_accord_btn__d_9Z6",accord_card:"categoryItem_accord_card__TmEur",faq_md:"categoryItem_faq_md__AFVrx",accordion_divider:"categoryItem_accordion_divider__3A1JO",boxprops:"categoryItem_boxprops__N57GV",hero:"categoryItem_hero__LxR80",innerdiv:"categoryItem_innerdiv__KVJWK",innerdiv1:"categoryItem_innerdiv1__ZH3U_",maindiv:"categoryItem_maindiv__8wf5q",subdiv:"categoryItem_subdiv__hJXaa",submaindiv:"categoryItem_submaindiv__TEjT8",inneritems1:"categoryItem_inneritems1__Zdeq9",flextext:"categoryItem_flextext__AwZbu",items1:"categoryItem_items1__E457w",para:"categoryItem_para__400W9",button:"categoryItem_button__943ja",items:"categoryItem_items__f0mom",link:"categoryItem_link__3pRsj",maintext:"categoryItem_maintext__a0BAb",sticky_container:"categoryItem_sticky_container__Zq6Zv",cta_signup:"categoryItem_cta_signup__O_tOW",ad:"categoryItem_ad__a2rvp",flexbox:"categoryItem_flexbox__C0Kxq",heading:"categoryItem_heading__9Ma3O",demo_btm:"categoryItem_demo_btm__gl2Wy",image:"categoryItem_image__7gtiN",share_container:"categoryItem_share_container__sCc14",share_img_wrapper:"categoryItem_share_img_wrapper__8ViXD",more_items:"categoryItem_more_items__3xKK3",more_items_content:"categoryItem_more_items_content__pf2H9",arrow:"categoryItem_arrow__iX_31",share_icons_container:"categoryItem_share_icons_container__KQ5Yf",navigation_container:"categoryItem_navigation_container__5ymyV",previous:"categoryItem_previous__fwhGA",subheading:"categoryItem_subheading__BsLqT",next:"categoryItem_next__egEJG",awards_fold:"categoryItem_awards_fold__kJAE7",share_container_mobile:"categoryItem_share_container_mobile__hAGGj",share_content_mobile:"categoryItem_share_content_mobile__P8_wX",share_icons_wrapper:"categoryItem_share_icons_wrapper__qpK7S",sidebar1:"categoryItem_sidebar1__ShHF_",associations_mobile:"categoryItem_associations_mobile__nybOr"}},92703:function(e,t,i){"use strict";var n=i(50414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,i,a,o,r){if(r!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return i.PropTypes=i,i}},45697:function(e,t,i){e.exports=i(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},97975:function(e,t,i){"use strict";var n=i(87462),a=i(63366),o=i(97326),r=i(94578),s=i(67294),l=i(45697),c=i.n(l),d=i(94184),_=i.n(d),u=i(23663),m=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:c().bool,"aria-label":c().string,block:c().bool,color:c().string,disabled:c().bool,outline:c().bool,tag:u.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),onClick:c().func,size:c().string,children:c().node,className:c().string,cssModule:c().object,close:c().bool},p=function(e){function t(t){var i;return(i=e.call(this,t)||this).onClick=i.onClick.bind((0,o.Z)(i)),i}(0,r.Z)(t,e);var i=t.prototype;return i.onClick=function(e){if(this.props.disabled){e.preventDefault();return}if(this.props.onClick)return this.props.onClick(e)},i.render=function(){var e=this.props,t=e.active,i=e["aria-label"],o=e.block,r=e.className,l=e.close,c=e.cssModule,d=e.color,h=e.outline,p=e.size,v=e.tag,g=e.innerRef,y=(0,a.Z)(e,m);l&&void 0===y.children&&(y.children=s.createElement("span",{"aria-hidden":!0},"\xd7"));var b=(0,u.mx)(_()(r,{close:l},l||"btn",l||"btn"+(h?"-outline":"")+"-"+d,!!p&&"btn-"+p,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),c);y.href&&"button"===v&&(v="a");var f=l?"Close":null;return s.createElement(v,(0,n.Z)({type:"button"===v&&y.onClick?"button":void 0},y,{className:b,ref:g,onClick:this.onClick,"aria-label":i||f}))},t}(s.Component);p.propTypes=h,p.defaultProps={color:"secondary",tag:"button"},t.Z=p},56941:function(e,t,i){"use strict";var n=i(87462),a=i(63366),o=i(67294),r=i(45697),s=i.n(r),l=i(94184),c=i.n(l),d=i(23663),_=["className","cssModule","color","body","inverse","outline","tag","innerRef"],u={tag:d.iC,inverse:s().bool,color:s().string,body:s().bool,outline:s().bool,className:s().string,cssModule:s().object,innerRef:s().oneOfType([s().object,s().string,s().func])},m=function(e){var t=e.className,i=e.cssModule,r=e.color,s=e.body,l=e.inverse,u=e.outline,m=e.tag,h=e.innerRef,p=(0,a.Z)(e,_),v=(0,d.mx)(c()(t,"card",!!l&&"text-white",!!s&&"card-body",!!r&&(u?"border":"bg")+"-"+r),i);return o.createElement(m,(0,n.Z)({},p,{className:v,ref:h}))};m.propTypes=u,m.defaultProps={tag:"div"},t.Z=m},20627:function(e,t,i){"use strict";var n,a=i(87462),o=i(63366),r=i(97326),s=i(94578),l=i(4942),c=i(67294),d=i(45697),_=i.n(d),u=i(94184),m=i.n(u),h=i(793),p=i(23663),v=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach(function(t){(0,l.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var b=y(y({},h.Transition.propTypes),{},{isOpen:_().bool,children:_().oneOfType([_().arrayOf(_().node),_().node]),tag:p.iC,className:_().node,navbar:_().bool,cssModule:_().object,innerRef:_().oneOfType([_().func,_().string,_().object])}),f=y(y({},h.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:p.wF.Collapse}),x=((n={})[p.E5.ENTERING]="collapsing",n[p.E5.ENTERED]="collapse show",n[p.E5.EXITING]="collapsing",n[p.E5.EXITED]="collapse",n);function j(e){return e.scrollHeight}var w=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach(function(e){i[e]=i[e].bind((0,r.Z)(i))}),i}(0,s.Z)(t,e);var i=t.prototype;return i.onEntering=function(e,t){this.setState({height:j(e)}),this.props.onEntering(e,t)},i.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},i.onExit=function(e){this.setState({height:j(e)}),this.props.onExit(e)},i.onExiting=function(e){e.offsetHeight,this.setState({height:0}),this.props.onExiting(e)},i.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},i.render=function(){var e=this,t=this.props,i=t.tag,n=t.isOpen,r=t.className,s=t.navbar,l=t.cssModule,d=t.children,_=(t.innerRef,(0,o.Z)(t,v)),u=this.state.height,g=(0,p.ei)(_,p.rb),b=(0,p.CE)(_,p.rb);return c.createElement(h.Transition,(0,a.Z)({},g,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),function(t){var n=x[t]||"collapse",o=(0,p.mx)(m()(r,n,s&&"navbar-collapse"),l),_=null===u?null:{height:u};return c.createElement(i,(0,a.Z)({},b,{style:y(y({},b.style),_),className:o,ref:e.props.innerRef}),d)})},t}(c.Component);w.propTypes=b,w.defaultProps=f,t.Z=w},97326:function(e,t,i){"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.d(t,{Z:function(){return n}})},4942:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(83997);function a(e,t,i){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},89611:function(e,t,i){"use strict";function n(e,t){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}i.d(t,{Z:function(){return n}})},83997:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(71002);function a(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!==(0,n.Z)(a))return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}},71002:function(e,t,i){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.d(t,{Z:function(){return n}})}},function(e){e.O(0,[7084,3126,4041,3563,9774,2888,179],function(){return e(e.s=43893)}),_N_E=e.O()}]);