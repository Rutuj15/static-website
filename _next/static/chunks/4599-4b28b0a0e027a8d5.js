!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0b2bb389-0982-4aaa-b1e8-b0638df863a0",e._sentryDebugIdIdentifier="sentry-dbid-0b2bb389-0982-4aaa-b1e8-b0638df863a0")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4599],{70221:function(e,t,i){"use strict";var s=i(85893);i(67294);var a=i(9008),l=i.n(a),n=i(85318);t.Z=e=>{let{title:t,description:i,ogImageURL:a,datePublished:o,dateModified:r,authorURL:d,authorName:c,authorDescription:_,canonicalURL:u}=e,m={"@context":"https://schema.org","@type":"Article",headline:null!=t?t:" ",description:null!=i?i:" ",image:null!=a?a:"https://www.mailmodo.com/static/images/og-image.png",datePublished:(null==o?void 0:o.trim())?(0,n.Uk)(o.trim()):" ",dateModified:(null==r?void 0:r.trim())?(0,n.Uk)(null==r?void 0:r.trim()):" ",mainEntityOfPage:{"@type":"WebPage","@id":u?"https://www.mailmodo.com/".concat(u):" "},author:{"@type":c&&"mailmodo"!==c.toLowerCase()?"Person":"Organization",name:null!=c?c:"Mailmodo",url:null!=d?d:"https://www.mailmodo.com/",description:null!=_?_:"Use Mailmodo to create and send interactive emails your customers love. Drive conversions and get better email ROI. Sign up for a free trial now."},publisher:{"@type":"Organization",name:"Mailmodo",url:"https://www.mailmodo.com/",sameAs:["https://www.linkedin.com/company/mailmodo/","https://www.facebook.com/mailmodo/","https://www.instagram.com/mailmodohq/","https://www.youtube.com/@mailmodo"],logo:{"@type":"ImageObject",url:"https://www.mailmodo.com/static/images/logo/logo-full.svg",width:"211",height:"39"}}};return(0,s.jsx)(l(),{children:(0,s.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(m)}})})}},42550:function(e,t,i){"use strict";i(85893),i(67294),i(9008)},15705:function(e,t,i){"use strict";var s=i(85893);i(67294);var a=i(25709),l=i(93140),n=i.n(l),o=i(46066);i(99249),i(27101);var r=i(25675),d=i.n(r),c=i(41664),_=i.n(c),u=i(11163),m=i(85318);let h=e=>{let{onClick:t,arrowImg:i}=e;return(0,s.jsx)("button",{onClick:t,className:n().pev_button,children:(0,s.jsx)("img",{src:(0,a.Jn)(i||"https://res.cloudinary.com/mailmodo/image/upload/v1684503692/strapi/Vector_1288_829db46d97.png"),height:6,width:12,alt:"chevron-left",objectFit:"contian"})})},v=e=>{let{onClick:t,arrowImg:i}=e;return(0,s.jsx)("button",{onClick:t,className:n().next_button,children:(0,s.jsx)("img",{src:(0,a.Jn)(i||"https://res.cloudinary.com/mailmodo/image/upload/v1684503692/strapi/Vector_1288_829db46d97.png"),height:6,width:12,alt:"chevron-right",objectFit:"contian"})})};t.Z=e=>{var t,i,l,r,c,p;let{label:g,blogs:b,blogStylingUpdate:w,title:x,arrowImg:y}=e,j={dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:3,arrow:!0,prevArrow:(0,s.jsx)(h,{arrowImg:y}),nextArrow:(0,s.jsx)(v,{arrowImg:y}),centerMode:!1,responsive:[{breakpoint:1025,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:1}},{breakpoint:510,settings:{centerPadding:"50",slidesToShow:1,centerMode:!0}},{breakpoint:460,settings:{centerPadding:"25",slidesToShow:1,centerMode:!0}},{breakpoint:430,settings:{centerPadding:"15",slidesToShow:1,centerMode:!0}},{breakpoint:400,settings:{centerPadding:"0",slidesToShow:1,centerMode:!0}}]},f="".concat((0,u.useRouter)().asPath);return(0,s.jsx)("div",{className:n().blogs,"data-blogs-styling":w,children:(null==b?void 0:null===(t=b.data)||void 0===t?void 0:t.length)>0&&(0,s.jsxs)("div",{className:"container",children:[x?(0,s.jsx)("h2",{className:n().heading,children:x}):(0,s.jsxs)("h2",{className:n().heading,children:[g?"".concat(g," email"):"Email"," marketing guides to read"]}),(0,s.jsx)("div",{className:n().slider_container,children:(0,s.jsx)(o.Z,{...j,children:(null!==(i=null==b?void 0:b.data)&&void 0!==i?i:b).map((e,t)=>{var i,o,u,m,h,v,g,b,w,x,y,j,f,N,k;return(0,s.jsx)(_(),{passHref:!0,prefetch:!1,href:"/guides/".concat(null==e?void 0:null===(i=e.attributes)||void 0===i?void 0:i.slug),children:(0,s.jsxs)("div",{className:n().card_item,children:[(null!==(l=null==e?void 0:null===(o=e.attributes)||void 0===o?void 0:null===(u=o.featuredImage)||void 0===u?void 0:null===(m=u.data)||void 0===m?void 0:null===(h=m.attributes)||void 0===h?void 0:h.url)&&void 0!==l?l:null==e?void 0:null===(v=e.attributes)||void 0===v?void 0:null===(g=v.featuredImage)||void 0===g?void 0:g.url)&&(0,s.jsx)("div",{className:n().img_contain,children:(0,s.jsx)(d(),{src:(0,a.Jn)(null!==(r=null==e?void 0:null===(b=e.attributes)||void 0===b?void 0:null===(w=b.featuredImage)||void 0===w?void 0:null===(x=w.data)||void 0===x?void 0:null===(y=x.attributes)||void 0===y?void 0:y.url)&&void 0!==r?r:null==e?void 0:null===(j=e.attributes)||void 0===j?void 0:null===(f=j.featuredImage)||void 0===f?void 0:f.url),height:192,width:366})}),(0,s.jsxs)("div",{className:n().card_content,children:[(0,s.jsx)("h4",{className:n().card_title,children:null!==(c=null==e?void 0:null===(N=e.attributes)||void 0===N?void 0:N.title)&&void 0!==c?c:""}),(0,s.jsx)("p",{className:n().card_desc,children:null!==(p=null==e?void 0:null===(k=e.attributes)||void 0===k?void 0:k.seoDescription)&&void 0!==p?p:""})]})]},"blog_".concat(t))})})})}),(0,s.jsx)("div",{className:n().btn_container,style:{display:w?"none":""},children:(0,s.jsx)("a",{href:"".concat((0,m.XE)("https://manage.mailmodo.com/auth/signup","blog-section",f)),children:(0,s.jsxs)("button",{children:["Try Mailmodo for ",g," Email Marketing"]})})})]})})}},31597:function(e,t,i){"use strict";i.d(t,{Z:function(){return v}});var s=i(85893),a=i(67294),l=i(36964),n=i.n(l),o=i(25675),r=i.n(o),d=i(20725),c=i.n(d),_=e=>{let{slug:t,thumbnail:i}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:c().template_card,children:(0,s.jsx)("div",{children:(0,s.jsx)("a",{className:c().related_img,href:"/email-templates/".concat(t,"/"),children:(0,s.jsx)("div",{style:{cursor:"pointer",width:"100%"},className:"".concat(c().related_img," ").concat(c().card," ").concat(c().min_card_height),children:(0,s.jsx)("div",{className:c().card_body,children:i.url&&(0,s.jsx)("div",{className:c().image,children:(0,s.jsx)(r(),{src:i.url,alt:"title",width:343,height:622})})})})})},"related_")})})},u=i(41664),m=i.n(u),h=i(85518),v=e=>{var t,i,l,o,r,d,c,u,v,p,g,b,w,x,y,j,f,N;let{label:k,popularTemplates:C,ctaBgUpdate:I,title:S}=e,[T,F]=(0,a.useState)(!1),[U,M]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{F(h.tq),M(h.nI)},[h.tq,h.nI]),(0,s.jsx)(s.Fragment,{children:C&&(0,s.jsxs)("div",{className:"container ".concat(n().templates),"data-styling-update":I,children:[S?(0,s.jsx)("h2",{className:n().heading,children:S}):(0,s.jsxs)("h2",{className:n().heading,children:["Most popular email templates",(0,s.jsx)("br",{})," for ",k," marketing"]}),(null==C?void 0:C.data)&&(0,s.jsxs)(s.Fragment,{children:[U&&(0,s.jsx)("div",{className:"".concat(n().card_container),children:(null==C?void 0:null===(t=C.data)||void 0===t?void 0:t.length)>=8?null===(i=null==C?void 0:null===(l=C.data)||void 0===l?void 0:l.slice(0,8))||void 0===i?void 0:i.map((e,t)=>{var i,a,l,n,o,r,d;return(0,s.jsx)(_,{title:null!==(c=null==e?void 0:null===(i=e.attributes)||void 0===i?void 0:i.title)&&void 0!==c?c:"",description:null!==(u=null==e?void 0:null===(a=e.attributes)||void 0===a?void 0:a.description)&&void 0!==u?u:"",renderUrl:null!==(v=null==e?void 0:null===(l=e.attributes)||void 0===l?void 0:l.renderUrl)&&void 0!==v?v:"",slug:null!==(p=null==e?void 0:null===(n=e.attributes)||void 0===n?void 0:n.slug)&&void 0!==p?p:"",thumbnail:null==e?void 0:null===(o=e.attributes)||void 0===o?void 0:null===(r=o.thumbnail)||void 0===r?void 0:null===(d=r.data)||void 0===d?void 0:d.attributes},"template_".concat(t))}):null==C?void 0:null===(o=C.data)||void 0===o?void 0:o.map((e,t)=>{var i,a,l,n,o,r,d;return(0,s.jsx)(_,{title:null!==(g=null==e?void 0:null===(i=e.attributes)||void 0===i?void 0:i.title)&&void 0!==g?g:"",description:null!==(b=null==e?void 0:null===(a=e.attributes)||void 0===a?void 0:a.description)&&void 0!==b?b:"",renderUrl:null!==(w=null==e?void 0:null===(l=e.attributes)||void 0===l?void 0:l.renderUrl)&&void 0!==w?w:"",slug:null!==(x=null==e?void 0:null===(n=e.attributes)||void 0===n?void 0:n.slug)&&void 0!==x?x:"",thumbnail:null==e?void 0:null===(o=e.attributes)||void 0===o?void 0:null===(r=o.thumbnail)||void 0===r?void 0:null===(d=r.data)||void 0===d?void 0:d.attributes},"template_".concat(t))})}),T&&(0,s.jsx)("div",{className:"".concat(n().card_container),children:null===(r=null==C?void 0:null===(d=C.data)||void 0===d?void 0:d.slice(0,3))||void 0===r?void 0:r.map((e,t)=>{var i,a,l,n,o,r,d;return(0,s.jsx)(_,{title:null!==(y=null==e?void 0:null===(i=e.attributes)||void 0===i?void 0:i.title)&&void 0!==y?y:"",description:null!==(j=null==e?void 0:null===(a=e.attributes)||void 0===a?void 0:a.description)&&void 0!==j?j:"",renderUrl:null!==(f=null==e?void 0:null===(l=e.attributes)||void 0===l?void 0:l.renderUrl)&&void 0!==f?f:"",slug:null!==(N=null==e?void 0:null===(n=e.attributes)||void 0===n?void 0:n.slug)&&void 0!==N?N:"",thumbnail:null==e?void 0:null===(o=e.attributes)||void 0===o?void 0:null===(r=o.thumbnail)||void 0===r?void 0:null===(d=r.data)||void 0===d?void 0:d.attributes},"template_".concat(t))})}),(0,s.jsxs)("div",{className:n().cta,"data-bg-update":I,children:[(0,s.jsx)("p",{children:"Looking for more templates that you can use?"}),(0,s.jsx)(m(),{passHref:!0,href:"https://www.mailmodo.com/email-templates/",prefetch:!1,children:(0,s.jsx)("button",{"data-button-type":"primary",children:"Explore more"})})]})]})]})})}},12661:function(e,t,i){"use strict";i.d(t,{Z:function(){return y}});var s=i(85893),a=i(67294),l=i(56637),n=i.n(l),o=i(25709),r=i(25675),d=i.n(r),c=i(41664),_=i.n(c),u=i(46066);i(99249),i(27101);var m=i(89755),h=i.n(m),v=i(19821),p=i.n(v),g=e=>{let{item:t}=e,[i,l]=(0,a.useState)(!1),n=e=>{e.currentTarget.contains(e.relatedTarget)||l(!1)};return(0,s.jsx)("a",{href:t.link,children:(0,s.jsxs)("div",{className:p().cardItem,children:[(0,s.jsx)("div",{className:p().cardItemContain,children:(0,s.jsxs)("div",{className:p().cardItemContain2,children:[(0,s.jsx)("div",{className:p().icon,children:(0,s.jsx)("div",{style:{height:"100%",width:"100%",position:"relative"},children:(0,s.jsx)(h(),{src:t.widget_icon,layout:"fill"})})}),(0,s.jsxs)("div",{className:p().cardContent,children:[(0,s.jsx)("h4",{className:p().header,children:t.title}),(0,s.jsx)("p",{className:p().description,children:t.description}),(0,s.jsxs)("div",{className:p().category_chips,children:[(0,s.jsx)("span",{className:p().usecase+" "+p().categoryCardChip,children:t.use_case}),(0,s.jsx)("span",{className:p().funnel+" "+p().categoryCardChip,children:t.funnel})]})]})]})}),(0,s.jsxs)("div",{className:p().cta_section,children:[(0,s.jsx)("div",{className:p().cta,children:(0,s.jsxs)("a",{children:[(0,s.jsx)("span",{children:"CHECK THIS"}),(0,s.jsx)(h(),{alt:"capterra",layout:"fixed",height:"10",width:"14.5",src:(0,o.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1675807757/strapi/link_arrow_95aeb77bc8.png")})]})}),(0,s.jsx)("div",{className:p().share_btn,onClick:e=>(function(e){e.preventDefault()})(e),onBlur:e=>n(e),children:(0,s.jsx)("div",{className:p().share_container,tabIndex:"0",children:(0,s.jsx)("div",{className:p().share_icons_container,children:(0,s.jsxs)("div",{className:p().more_items,children:[(0,s.jsx)("button",{onClick:()=>l(e=>!e),children:(0,s.jsx)(h(),{alt:"capterra",layout:"fixed",height:"14",width:"13",src:"https://res.cloudinary.com/mailmodo/image/upload/v1675974331/strapi/Group_1110165324_119c4b9626.svg"})}),(0,s.jsxs)("div",{className:"".concat(p().more_items_content,"  ").concat(i&&p().active),children:[(0,s.jsx)("div",{className:p().share_img_wrapper,onClick:()=>{window.open("https://www.facebook.com/sharer/sharer.php?u=https://www.mailmodo.com/use-cas/e","_blank")},children:(0,s.jsx)(h(),{title:"Facebook",alt:"Facebook logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1655820693/strapi/facebook_387512e258.svg",height:"30",width:"30",layout:"responsive"})}),(0,s.jsx)("div",{className:p().share_img_wrapper,onClick:()=>{window.open("https://www.linkedin.com/shareArticle?mini=true&url=https://www.mailmodo.com/use-case/","_blank")},children:(0,s.jsx)(h(),{title:"Linkedin",alt:"Linkedin logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1655820693/strapi/linkedin_a0d0166391.svg",height:"30",width:"30"})}),(0,s.jsx)("div",{className:p().share_img_wrapper,onClick:()=>{window.open("https://twitter.com/intent/tweet?url=https://www.mailmodo.com/use-case","_blank")},children:(0,s.jsx)(h(),{title:"Twitter",alt:"Twitter logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1694682042/strapi/Frame_1110165975_2_4ca4bf600e.svg",height:"30",width:"30"})}),(0,s.jsx)("div",{className:p().share_img_wrapper,onClick:()=>{window.open("https://api.whatsapp.com/send/?text=Check this out https://www.mailmodo.com/use-case","_blank")},children:(0,s.jsx)(h(),{title:"Whatsapp",alt:"Whatsapp logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1658920427/strapi/Whats_app_icon_111016432_0de5b942f7.svg",height:"30",width:"30"})}),(0,s.jsx)("div",{className:p().share_img_wrapper,style:{marginRight:"8px",marginBottom:"0px"},onClick:()=>{window.open("mailto:?&subject=&body=Check this out  https://www.mailmodo.com/use-case/","_blank")},children:(0,s.jsx)(h(),{title:"Mail",alt:"mail logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1655820693/strapi/mail_3595fadfe6.svg",height:"30",width:"30"})})]})]})})})})]})]})})};let b=e=>{let{onClick:t,arrowImg:i}=e;return(0,s.jsx)("button",{onClick:t,className:n().pev_button,children:(0,s.jsx)("img",{src:(0,o.Jn)(i||"https://res.cloudinary.com/mailmodo/image/upload/v1684503692/strapi/Vector_1288_829db46d97.png"),height:6,width:12,alt:"chevron-left",objectFit:"contian"})})},w=e=>{let{onClick:t,arrowImg:i}=e;return(0,s.jsx)("button",{onClick:t,className:n().next_button,children:(0,s.jsx)("img",{src:(0,o.Jn)(i||"https://res.cloudinary.com/mailmodo/image/upload/v1684503692/strapi/Vector_1288_829db46d97.png"),height:6,width:12,alt:"chevron-right",objectFit:"contian"})})};var x=e=>{let{cardsData:t,arrowImg:i}=e,a={dots:!1,autoplay:!0,autoplaySpeed:3e3,slidesToShow:4,arrow:!0,prevArrow:(0,s.jsx)(b,{arrowImg:i}),nextArrow:(0,s.jsx)(w,{arrowImg:i}),infinite:t.length>4,responsive:[{breakpoint:1025,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:1,arrow:!1}},{breakpoint:700,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1,arrow:!1}}]};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:n().slider_container,children:(0,s.jsx)(u.Z,{...a,children:t.map((e,t)=>(0,s.jsx)(g,{item:e},"use-case-card_".concat(t)))})})})},y=e=>{let{cardsData:t,useCaseIndustry:i,title:a,dataStylingUpdate:l,arrowImg1:r,arrowImg:c}=e;return(0,s.jsx)(s.Fragment,{children:i&&(0,s.jsx)("div",{className:n().use_case,"data-update-styling":l,children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h2",{className:n().heading,children:a||"".concat(i," email marketing use-cases")}),(0,s.jsx)(x,{cardsData:t,arrowImg:c}),(0,s.jsxs)("div",{className:n().link,children:[(0,s.jsx)(d(),{alt:"capterra",height:"10",width:"12",src:(0,o.Jn)(r||"https://res.cloudinary.com/mailmodo/image/upload/v1675807757/strapi/link_arrow_95aeb77bc8.png")}),(0,s.jsx)(_(),{passHref:!0,prefetch:!1,href:"/use-case/",children:"View All Use-Cases"})]})]})})})}},93140:function(e){e.exports={blogs:"blogs_blogs__mCz9k",heading:"blogs_heading__0W9nY",pev_button:"blogs_pev_button__0Q__W",next_button:"blogs_next_button__JElXU",slider_container:"blogs_slider_container__RfmD0",card_item:"blogs_card_item__Feo56",img_contain:"blogs_img_contain__sThiC",card_content:"blogs_card_content__Piqhb",card_title:"blogs_card_title__O_X8j",card_desc:"blogs_card_desc__QGs8V",btn_container:"blogs_btn_container__8zBAa"}},20725:function(e){e.exports={template_card:"styles_template_card__l2qmF",heading:"styles_heading__tbDFH",related_img:"styles_related_img__eZHv6",card:"styles_card__NeruL",min_card_height:"styles_min_card_height__d09RD",card_body:"styles_card_body__yNx6m",overlay:"styles_overlay__ikzTQ",title:"styles_title__LxpL2",description:"styles_description__Q04z5",btn_group:"styles_btn_group__hwjyu",button_preview:"styles_button_preview__QFaUq",button_use:"styles_button_use__gVb_C",image:"styles_image__jYGZn","inner-wrapper":"styles_inner-wrapper__Y9jL7","custom-card":"styles_custom-card__PDI4Q","template-description":"styles_template-description__rLUlC"}},36964:function(e){e.exports={templates:"style_templates__XRzst",heading:"style_heading__43JfM",card_container:"style_card_container__yrYgz",cta:"style_cta__G6PzX"}},19821:function(e){e.exports={cardItem:"styles_cardItem__BTARa",cardItemContain:"styles_cardItemContain__KFdKf",cardItemContain2:"styles_cardItemContain2__7they",icon:"styles_icon__mnkid",cardContent:"styles_cardContent__5M2nU",header:"styles_header__UQ1aD",description:"styles_description__Z4oJb",category_chips:"styles_category_chips___CYlB",widgets:"styles_widgets__Jfq3z",categoryCardChip:"styles_categoryCardChip__V6iAI",funnel:"styles_funnel__bST0e",usecase:"styles_usecase__FIpta",cta_section:"styles_cta_section__gqWVL",cta:"styles_cta__bo7kv",share_container:"styles_share_container__IjNUj",share_img_wrapper:"styles_share_img_wrapper__4s4rc",more_items:"styles_more_items__5VdjY",more_items_content:"styles_more_items_content__Ih_pv",active:"styles_active__SIb_B",share_icons_container:"styles_share_icons_container__HDIpw",mobile_only_button:"styles_mobile_only_button__iPDWV"}},56637:function(e){e.exports={use_case:"styles_use_case__9qAeA",heading:"styles_heading__bvzKH",pev_button:"styles_pev_button__57sQZ",next_button:"styles_next_button__JuOoZ",link:"styles_link__GhU7q"}}}]);