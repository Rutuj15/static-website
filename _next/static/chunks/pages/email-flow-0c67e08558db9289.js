!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=(new e.Error).stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="3683934a-c002-4eff-899e-2186c312467e",e._sentryDebugIdIdentifier="sentry-dbid-3683934a-c002-4eff-899e-2186c312467e")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2768],{27270:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/email-flow",function(){return s(65681)}])},42550:function(e,a,s){"use strict";s(85893),s(67294),s(9008)},83494:function(e,a,s){"use strict";var t=s(85893);s(67294);var i=s(9008),l=s.n(i),r=s(85318);a.Z=e=>{var a,s;let{title:i,description:o,ogImg:n,datePublished:c,dateModified:d}=e,m=(null!==(a=null==i?void 0:i.length)&&void 0!==a?a:1)%30,h=(null!==(s=null==o?void 0:o.length)&&void 0!==s?s:1)%30;h<m&&(h=m);let _=h?"".concat(h,"-03-2023"):"16-03-2023",u={"@context":"https://schema.org","@type":"WebPage",headline:null!=i?i:"",description:null!=o?o:"",image:null!=n?n:"https://www.mailmodo.com/static/images/og-image.png",datePublished:(0,r.Uk)(null!=c?c:m?"".concat(m,"-03-2023"):"08-09-2022"),dateModified:(0,r.Uk)(null!=d?d:_),publisher:{"@type":"Organization",name:"Mailmodo",url:"https://www.mailmodo.com/",sameAs:["https://www.linkedin.com/company/mailmodo/","https://www.facebook.com/mailmodo/","https://www.instagram.com/mailmodohq/","https://www.youtube.com/@mailmodo"],logo:"https://www.mailmodo.com/static/images/logo/logo-full.svg",description:"Mailmodo is a complete email marketing platform that helps email marketers to create and send interactive emails to drive growth and engagement.",address:{"@type":"PostalAddress",addressLocality:"Lewes",addressRegion:"DE",postalCode:"19958",streetAddress:"Mailmodo Technologies Inc. 16192, Coastal Highway",addressCountry:{"@type":"Country",name:"US"}},contactPoint:{"@type":"ContactPoint",email:"enquiries@mailmodo.com",contactType:"customer service"}}};return(0,t.jsx)(l(),{children:(0,t.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(u)}})})}},3796:function(e,a,s){"use strict";var t=s(85893);s(67294);var i=s(61844),l=s.n(i),r=s(89755),o=s.n(r);a.Z=e=>{var a,s,i,r,n,c,d,m;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:l().labeltop,style:{cursor:"pointer"},children:(0,t.jsx)(o(),{loader:e=>{let{src:a}=e;return"".concat(a)},src:(null===(a=e.cardData)||void 0===a?void 0:null===(s=a.icon)||void 0===s?void 0:s.url)||(null===(i=e.cardData)||void 0===i?void 0:null===(r=i.attributes)||void 0===r?void 0:null===(n=r.image)||void 0===n?void 0:null===(c=n.data)||void 0===c?void 0:null===(d=c.attributes)||void 0===d?void 0:d.url)||"https://res.cloudinary.com/mailmodo/image/upload/v1640434039/strapi/card1_f386991b06.png",alt:"Picture",objectFit:"fill",unoptimized:!0,height:159,width:275,layout:"responsive"})}),(0,t.jsx)("div",{className:l().contents,children:(0,t.jsx)("h4",{className:l().h4,style:{color:"#101043"},children:e.cardData.title||(null===(m=e.cardData.attributes)||void 0===m?void 0:m.title)})})]})}},11562:function(e,a,s){"use strict";var t=s(85893);s(67294);var i=s(61844),l=s.n(i),r=s(11163);a.Z=e=>{let{isLandingPage:a}=e,s=(0,r.useRouter)();return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:l().sidebar1,children:(0,t.jsxs)("select",{onChange:e=>{"all"===e.target.value?s.push("/email-flow/"):s.push("/email-flow/".concat(e.target.value))},children:[(0,t.jsx)("option",{selected:a,value:"all",children:"All"}),e.categories.map((e,a)=>{var i,l,r,o;return(0,t.jsx)(t.Fragment,{children:e.ref?(0,t.jsx)("option",{selected:s.asPath.includes(null!==(i=e.Category)&&void 0!==i?i:" "),value:"".concat(e.Category,"/?ref=").concat(e.ref),children:null!==(l=e.label)&&void 0!==l?l:" "}):(0,t.jsx)("option",{selected:s.asPath.includes(null!==(r=e.Category)&&void 0!==r?r:" "),value:e.Category,children:null!==(o=e.label)&&void 0!==o?o:" "})})})]})})})}},77979:function(e,a,s){"use strict";var t=s(85893);s(67294);var i=s(61844),l=s.n(i),r=s(41664),o=s.n(r),n=s(11163);a.Z=e=>{let{categories:a,currentRoute:s,isLandingPage:i}=e;return(0,n.useRouter)().pathname,(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:l().sidebar,children:[(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("a",{href:"/email-flow/",children:(0,t.jsx)("div",{className:l().item,children:(0,t.jsx)("div",{style:{display:"flex"},className:i?l().active:l().back,children:(0,t.jsx)("span",{children:"All"})})})})}),a.map((e,a)=>(0,t.jsx)(t.Fragment,{children:e.ref?(0,t.jsx)(o(),{legacyBehavior:!0,passHref:!0,href:{pathname:"/email-flow/[category]",query:{category:e.Category,ref:e.ref}},children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:l().item,children:(0,t.jsx)("div",{className:s===e.Category?l().active:l().back,children:(0,t.jsx)("span",{children:e.label})})})})},a):(0,t.jsx)(o(),{legacyBehavior:!0,passHref:!0,href:{pathname:"/email-flow/[category]",query:{category:e.Category}},children:(0,t.jsx)("a",{children:(0,t.jsx)("div",{className:l().item,children:(0,t.jsx)("div",{className:s===e.Category?l().active:l().back,children:(0,t.jsx)("span",{children:e.label})})})})},a)}))]})})}},57080:function(e,a,s){"use strict";s.d(a,{Z:function(){return i}});var t=s(67294);function i(){function e(){let e=window.innerWidth,a=window.innerHeight;return{width:e,height:a}}let[a,s]=(0,t.useState)(e());return(0,t.useEffect)(()=>{function a(){s(e())}return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[!0]),a}},65681:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSG:function(){return Z},default:function(){return J}});var t=s(85893),i=s(89755),l=s.n(i),r=s(41664),o=s.n(r),n=s(67294),c=s(2962),d=s(78262),m=s(61844),h=s.n(m),_=s(3796),u=s(77979);s(75110);var p=s(11562),g=s(25709),x=s(12970),v=s.n(x),b=s(11163),f=s(85318),y=()=>{let e="".concat((0,b.useRouter)().asPath);return(0,t.jsx)("div",{className:v().email_card_fold,children:(0,t.jsx)("div",{className:"container ",children:(0,t.jsx)("div",{className:v().email_card_container,children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-5 px-0 ",children:(0,t.jsxs)("div",{className:v().matter_block,children:[(0,t.jsx)("p",{children:"Ready to Start?"}),(0,t.jsxs)("h2",{children:["Drive conversions with interactive",(0,t.jsx)("br",{})," emails"]}),(0,t.jsxs)("div",{className:v().btn_container,children:[(0,t.jsx)(o(),{legacyBehavior:!0,prefetch:!1,href:"".concat((0,f.XE)("https://manage.mailmodo.com/auth/signup","signup-cta",e)),children:(0,t.jsx)("button",{className:v().sign_up_btn,children:"Try for free"})}),(0,t.jsx)("a",{href:"".concat((0,f.XE)("https://www.mailmodo.com/demo/","signup-cta",e)),children:(0,t.jsx)("button",{className:v().book_demo_btn,children:"Book a demo"})})]})]})}),(0,t.jsx)("div",{className:"col-md-7 px-0",children:(0,t.jsx)("div",{className:v().img_container,children:(0,t.jsx)(l(),{alt:"email templates image",height:"300",width:"700",src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1658399939/strapi/cta_right_Side_image_4326145_92600070da.png")})})})]})})})})},j=s(57080),w=s(86608),N=s(87536),k=s(95649),C=s.n(k);let M=[{value:"Founder",label:"Founder"},{value:"CMO/Marketing Head/VP Marketing",label:"CMO/Marketing Head/VP Marketing"},{value:"Marketing Manager/Sr. Manager",label:"Marketing Manager/Sr. Manager"},{value:"Email/Campaign/CRM Manager",label:"Email/Campaign/CRM Manager"},{value:"Social Media Manager",label:"Social Media Manager"},{value:"Product Marketing Manager",label:"Product Marketing Manager"},{value:"Student",label:"Student"},{value:"Others",label:"Others"}],F=[{value:"Klaviyo",label:"Klaviyo"},{value:"Mailchimp",label:"Mailchimp"},{value:"Hubspot",label:"Hubspot"},{value:"Sender",label:"Sender"},{value:"Sendinblue",label:"Sendinblue"},{value:"Omnisend",label:"Omnisend"},{value:"Sendpulse",label:"Sendpulse"},{value:"Benchmark Email",label:"Benchmark Email"},{value:"Mailer Lite",label:"Mailer Lite"},{value:"Shopify",label:"Shopify"},{value:"Mailjet",label:"Mailjet"},{value:"Moosend",label:"Moosend"},{value:"EmailOctopus",label:"EmailOctopus"},{value:"AWS",label:"AWS"},{value:"Sendgrid",label:"Sendgrid"},{value:"Mandrill",label:"Mandrill"},{value:"Mailwizz",label:"Mailwizz"},{value:"Clevertap",label:"Clevertap"},{value:"Mailgun",label:"Mailgun"},{value:"Zoho",label:"Zoho"},{value:"Netcore",label:"Netcore"},{value:"MoEngage",label:"MoEngage"},{value:"Webengage",label:"Webengage"},{value:"Marketo",label:"Marketo"},{value:"Leadsquared",label:"Leadsquared"},{value:"Mixpanel",label:"Mixpanel"},{value:"Intercom",label:"Intercom"},{value:"Drip",label:"Drip"},{value:"Others",label:"Others"},{value:"Survicate",label:"Survicate"},{value:"None",label:"None"}],S=[{value:"upto 10K",label:"upto 10K"},{value:"10K-75K",label:"10K - 75K"},{value:"75K-250K",label:"75K - 250K"},{value:"250K-1M",label:"250K - 1M"},{value:"1M and above",label:"1M and above"}],P=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;var E=s(6154),D=s(98456),I=e=>{let{handleClose:a}=e,[s,i]=(0,n.useState)(!1),[r,o]=(0,n.useState)(!1),[c,d]=(0,n.useState)(""),{width:m}=(0,j.Z)(),h=(0,N.cI)(),{handleSubmit:_,register:u,formState:{errors:p}}=h,x={control:(e,a)=>({...e,border:a.selectProps.isError?"1px solid #eebfbf":a.isFocused?"1px solid #c4bfee":"1px solid #d9d9d9",padding:m<600?"0":"3.5px 0",paddingLeft:"8px",textAlign:"left",boxShadow:a.selectProps.isError?"0px 0px 0px 3px rgba(234, 119, 119, 0.17)":a.isFocused&&"0px 0px 0px 3px rgba(130, 119, 234, 0.17)","&:hover":{border:a.selectProps.isError?"1px solid #eebfbf":a.isFocused?"1px solid #c4bfee":"1px solid #d9d9d9"}}),input:e=>({...e,textAlign:"left"}),option:e=>({...e,textAlign:"left",paddingLeft:"18px"})};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:C().form,children:[(0,t.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,t.jsx)("h2",{className:C().heading,style:{visibility:s?"hidden":"visible"},children:"Speak to an expert"}),(0,t.jsx)("img",{src:"/static/images/close.svg",className:C().close,height:24,width:24,alt:"close",onClick:a})]}),s?(0,t.jsxs)("div",{className:C().success_container,children:[(0,t.jsx)("div",{children:(0,t.jsx)(l(),{width:80,height:80,src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1656601264/strapi/success_tick_8b3ebed709.svg","svg")})}),(0,t.jsx)("h3",{className:C().success_heading,children:"We got you"}),(0,t.jsx)("p",{className:C().success_message,children:"You're one step closer to cracking your email automation success."})]}):(0,t.jsxs)("div",{className:"row ".concat(C().input_wrapper),children:[(0,t.jsxs)("div",{className:"col-12 mb-3",children:[(0,t.jsx)("label",{className:C().label,htmlFor:"name",children:"Name"}),(0,t.jsx)("input",{className:"".concat(C().input," ").concat(p.name&&C().input_error),id:"name",...u("name",{required:!0})})]}),(0,t.jsxs)("div",{className:"col-12 mb-3",children:[(0,t.jsx)("label",{className:C().label,htmlFor:"name",children:"Email"}),(0,t.jsx)("input",{className:" ".concat(p.email?C().input_error:C().input),id:"email",...u("email",{required:!0,pattern:P})})]}),(0,t.jsxs)("div",{className:"col-12 mb-3",children:[(0,t.jsx)("label",{className:C().label,htmlFor:"designation",children:"Designation"}),(0,t.jsx)(N.Qr,{control:h.control,defaultValue:"",name:"designation",rules:{required:!0},render:e=>{let{field:a}=e;return(0,t.jsx)(w.ZP,{...a,isClearable:!0,options:M,styles:x,customState:!1,isError:p.designation})}})]}),(0,t.jsxs)("div",{className:"col-12 mb-3",children:[(0,t.jsx)("label",{className:C().label,htmlFor:"company",children:"Company"}),(0,t.jsx)("input",{className:"".concat(C().input," ").concat(p.company&&C().input_error),...u("company",{required:!0})})]}),(0,t.jsxs)("div",{className:"col-md-6 mb-3",children:[(0,t.jsx)("label",{className:C().label,children:"ESP/tool you use"}),(0,t.jsx)(N.Qr,{control:h.control,defaultValue:"",name:"tool",rules:{required:!0},render:e=>{let{field:a}=e;return(0,t.jsx)(w.ZP,{...a,id:"2",isClearable:!0,options:F,styles:x,menuPlacement:"top",isError:p.tool})}})]}),(0,t.jsxs)("div",{className:"col-md-6 mb-3",children:[(0,t.jsx)("label",{className:C().label,children:"How many emails you send/month?"}),(0,t.jsx)(N.Qr,{control:h.control,defaultValue:"",name:"no_of_mails",rules:{required:!0},render:e=>{let{field:a}=e;return(0,t.jsx)(w.ZP,{...a,id:"2",isClearable:!0,options:S,styles:x,isError:p.no_of_mails})}})]}),(0,t.jsxs)("div",{className:"col-12 mb-3",children:[(0,t.jsx)("label",{className:C().label,htmlFor:"question",children:"Your question"}),(0,t.jsx)("textarea",{rows:m<600?"1":"2",className:"".concat(C().input," ").concat(p.question&&C().input_error),...u("question",{required:!0})})]}),(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsx)("button",{className:C().submit_btn,onClick:_(function(e){o(!0);try{let a=e.email;delete e.email;let s={email:a,data:{...e,designation:e.designation.value,no_of_mails:e.no_of_mails.value,tool:e.tool.value}};E.Z.post("https://api.mailmodo.com/api/v1/at/c/meycsKz3c4/ab12a13d-5375-5ad9-8e95-9899cb29cb19",s).then(()=>{i(!0)}).catch(()=>{d("Uh-oh! Something went wrong."),o(!1)}).then(()=>{})}catch(e){d("Uh-oh! Something went wrong."),o(!1),console.log(e)}}),children:r?(0,t.jsx)(D.Z,{color:"inherit",style:{height:"22px",width:"22px"}}):"Submit"}),(p.email||c)&&(0,t.jsx)("p",{className:"text-center",children:c||"Please enter a valid email"})]})]})]})})},A=s(63724),q=s.n(A),L=()=>(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:q().associations,children:[(0,t.jsx)("h4",{className:q().heading,children:"In association with"}),(0,t.jsxs)("div",{className:q().logo,children:[(0,t.jsx)("div",{className:"".concat(q().image_wrapper," ").concat(q().clickable),children:(0,t.jsx)(o(),{legacyBehavior:!0,href:"https://productfruits.com?utm_medium=other&utm_source=mailmodo",prefetch:!1,passHref:!0,children:(0,t.jsx)("a",{target:"_blank",children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1656940300/strapi/Product_Fruits_74ad3b2dd8.png"),width:"177px",height:"62px",alt:"Product Fruits Logo"})})})}),(0,t.jsx)("div",{className:"".concat(q().image_wrapper," ").concat(q().clickable),children:(0,t.jsx)(o(),{legacyBehavior:!0,href:"https://go.fyndi.ng/t9CZpnDxMrb",prefetch:!1,passHref:!0,children:(0,t.jsx)("a",{target:"_blank",children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1658817867/strapi/FP_Logo_01_5456456464_9f1ddf7be6.png"),width:"177px",height:"67px",objectFit:"contain",alt:"Fynd Platform Logo"})})})}),(0,t.jsx)("div",{className:"".concat(q().image_wrapper," ").concat(q().clickable),children:(0,t.jsx)(o(),{legacyBehavior:!0,href:"https://prisync.com/",prefetch:!1,passHref:!0,children:(0,t.jsx)("a",{target:"_blank",children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1660725005/strapi/cropped_prisync_nav_logo_2020_1_69028b1a85.png"),width:"150px",height:"36px",objectFit:"contain",alt:"Prisync Logo"})})})})]})]})});s(42550);var H=s(83494),Z=!0,J=e=>{let{allIndustries:a,navBarProps:s,ratingCount:i,ratingValue:r}=e,[m,x]=(0,n.useState)(!1),{width:v}=(0,j.Z)(),b=()=>{x(!0)},f=()=>{x(!1)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.dX,{title:"Email Automation Flows For All Industries & Use Cases",description:"Not getting enough conversions? Use these top email flow ideas for every industry to attract, nurture, and convert leads into paying customers.",url:"https://www.mailmodo.com/email-flow/",publisherName:"Mailmodo",authorName:"Mailmodo",publisherLogo:"https://www.mailmodo.com/static/images/logo/logo-full.svg"}),(0,t.jsx)(c.PB,{robotsProps:{maxImagePreview:"large"},title:"Email Automation Flows For All Industries & Use Cases",description:"Not getting enough conversions? Use these top email flow ideas for every industry to attract, nurture, and convert leads into paying customers.",canonical:"https://www.mailmodo.com/email-flow/",openGraph:{url:"https://www.mailmodo.com/email-flow/",title:"Email Automation Flows For All Industries & Use Cases",description:"Not getting enough conversions? Use these top email flow ideas for every industry to attract, nurture, and convert leads into paying customers.",locale:"en_US",type:"Article",article:{authors:["Mailmodo"]},images:[{url:"https://res.cloudinary.com/mailmodo/image/upload/v1655475400/strapi/OG_Email_Sequences_6842eeba0f.png"}]},twitter:{handle:"@mailmodo",site:"twitter.com/mailmodo",cardType:"summary_large_image"}}),(0,t.jsx)(H.Z,{title:"Email Automation Flows For All Industries & Use Cases",description:"Not getting enough conversions? Use these top email flow ideas for every industry to attract, nurture, and convert leads into paying customers.",ogImg:"https://res.cloudinary.com/mailmodo/image/upload/v1655475400/strapi/OG_Email_Sequences_6842eeba0f.png",datePublished:"16-08-2022",dateModified:"12-03-2023"}),(0,t.jsx)("div",{className:h().top_background}),(0,t.jsxs)("div",{className:h().hero_fold,children:[(0,t.jsx)("div",{className:h().img_wrapper,children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1654700234/strapi/email_flow_top_fold_landing_page_054f59fa36.png","png",100),width:1055,height:634,alt:"email flow hero",priority:!0})}),(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-md-6",children:[(0,t.jsx)("h1",{className:h().heading,children:"Email flows for every industry"}),(0,t.jsxs)("div",{className:h().list_card,children:[(0,t.jsx)("div",{className:h().img_container,children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1654171766/strapi/pick_efec331a73.svg"),width:24,height:22,alt:"Pick Icon"})}),(0,t.jsx)("p",{className:h().description,children:"Ready-to-use email sequence template"})]}),(0,t.jsxs)("div",{className:h().list_card,children:[(0,t.jsx)("div",{className:h().img_container,children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1654171766/strapi/customize_24bef0c216.svg"),width:24,height:24,alt:"Pick Icon"})}),(0,t.jsx)("p",{className:h().description,children:"Insights and advice from 100+ experts"})]}),(0,t.jsxs)("div",{className:h().list_card,children:[(0,t.jsx)("div",{className:h().img_container,children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1654171766/strapi/execute_e9f6df7636.svg"),width:24,height:22,alt:"Pick Icon"})}),(0,t.jsx)("p",{className:h().description,children:"Best practices for every stage of the user journey"})]}),(0,t.jsx)("p",{className:h().small_heading,children:"Need help with email automation?"}),(0,t.jsx)("button",{className:h().button_demo,onClick:b,children:"Speak to an expert"}),(0,t.jsxs)("div",{className:h().share_container,children:[(0,t.jsx)("p",{children:"Share this"}),(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://www.mailmodo.com/email-flow/",target:"_blank",style:{marginLeft:"9px"},children:(0,t.jsx)("div",{className:h().share_img_wrapper,children:(0,t.jsx)(l(),{title:"Facebook",alt:"Facebook logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1655820693/strapi/facebook_387512e258.svg",height:"30",width:"30",layout:"responsive"})})}),(0,t.jsx)("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url=https://www.mailmodo.com/email-flow/",target:"_blank",style:{marginLeft:"9px"},children:(0,t.jsx)("div",{className:h().share_img_wrapper,children:(0,t.jsx)(l(),{title:"Linkedin",alt:"Linkedin logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1655820693/strapi/linkedin_a0d0166391.svg",height:"30",width:"30"})})}),(0,t.jsx)("a",{href:"https://api.whatsapp.com/send/?text=Check this out https://www.mailmodo.com/email-flow/",target:"_blank",style:{marginLeft:"9px"},children:(0,t.jsx)("div",{className:h().share_img_wrapper,children:(0,t.jsx)(l(),{title:"Whatsapp",alt:"Whatsapp logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1658920427/strapi/Whats_app_icon_111016432_0de5b942f7.svg",height:"30",width:"30"})})}),(0,t.jsx)("a",{href:"https://twitter.com/intent/tweet?url=https://www.mailmodo.com/email-flow/&text=Check this out",target:"_blank",style:{marginLeft:"9px"},children:(0,t.jsx)("div",{className:h().share_img_wrapper,children:(0,t.jsx)(l(),{title:"Twitter",alt:"Twitter logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1694682042/strapi/Frame_1110165975_2_4ca4bf600e.svg",height:"30",width:"30"})})}),(0,t.jsx)("a",{href:"https://pinterest.com/pin/create/button/?url=https://www.mailmodo.com/email-flow/&media=&description=Check this out",target:"_blank",style:{marginLeft:"9px"},children:(0,t.jsx)("div",{className:h().share_img_wrapper,children:(0,t.jsx)(l(),{title:"Pinterest",alt:"Pinterest logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1655820693/strapi/Pinterest_5a3d048fb4.svg",height:"30",width:"30"})})}),(0,t.jsx)("a",{href:"mailto:?&subject=Email Automation Flows For All Industries & Use Cases&body=Check this out https://www.mailmodo.com/email-flow/",style:{marginLeft:"9px"},children:(0,t.jsx)("div",{className:h().share_img_wrapper,children:(0,t.jsx)(l(),{title:"Mail",alt:"mail logo",src:"https://res.cloudinary.com/mailmodo/image/upload/v1655820693/strapi/mail_3595fadfe6.svg",height:"30",width:"30"})})}),(0,t.jsx)("div",{className:h().share_img_wrapper,children:(0,t.jsx)("span",{onClick:()=>{navigator.clipboard.writeText("https://www.mailmodo.com/email-flow/")},style:{marginLeft:"9px"},children:(0,t.jsx)(l(),{title:"Copy link",alt:"copy link",src:"https://res.cloudinary.com/mailmodo/image/upload/v1655881707/strapi/copy_link_3ccdfc9f2a.svg",height:"30",width:"30"})})})]})]}),(0,t.jsx)("div",{className:h().product_hut,children:(0,t.jsx)(o(),{href:"https://www.producthunt.com/posts/email-flows-2/?utm_source=badge-top-post-badge&utm_medium=badge",prefetch:!1,passHref:!0,target:"_blank",children:(0,t.jsx)(l(),{src:"https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=353974&theme=light&period=daily",width:"250",height:"54",alt:"Email Flows - 50+ readymade frameworks for automating email flows | Product Hunt",unoptimized:!0})})})]})})})]}),(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:h().component,children:[(0,t.jsxs)("div",{className:h().side_navbar_wrapper,children:[(0,t.jsx)("h4",{className:h().navbar_heading,children:"Industries"}),(0,t.jsx)(u.Z,{categories:s,isLandingPage:!0})]}),(0,t.jsxs)("div",{className:h().mainpage,children:[(0,t.jsx)("div",{className:h().sidebar1,children:(0,t.jsx)(p.Z,{categories:s,isLandingPage:!0})}),(0,t.jsx)("div",{className:h().cardContainer,children:null==a?void 0:a.map((e,a)=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:h().cardItem,children:(0,t.jsx)(o(),{passHref:!0,href:{pathname:"/email-flow/[category]/",query:{category:e.slug}},children:(0,t.jsx)(_.Z,{category:!1,cardData:e})})},a)}))}),(0,t.jsxs)("div",{className:h().feature_fold,children:[(0,t.jsx)("h3",{className:h().sub_heading,children:"Why we created Email Flow"}),(0,t.jsxs)("p",{className:h().description,children:["Email automation varies largely from business to business. There are no industry standards on what data to use, how to segment your users or journeys, types of triggers you can use or a collection of flow you can refer to. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Generic best practices about email automation are rarely helpful because the user journey and automation goals vary from industry to industry. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"This leaves marketers with no choice but to experiment repeatedly till they see optimum results. Only, with email automation, the journeys can span weeks, and results are not instant or easily deciphered.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," We’ve created Email Flow as a collated resource on what is working for your peers in similar industries and domains."]}),(0,t.jsx)("h3",{className:h().sub_heading,children:"How we created this resource"}),(0,t.jsx)("p",{className:h().description,children:"\uD83D\uDCCD Mapped user journeys by industry and business model"}),(0,t.jsx)("p",{className:h().description,children:"\uD83D\uDDC2 Collected first-hand insights from 100+ marketers and automation experts"}),(0,t.jsx)("p",{className:h().description,children:"\uD83D\uDDC4 Created ready-to-use email flow for every use case we identified"}),(0,t.jsx)("p",{className:h().description,children:"\uD83D\uDCA1 Shared the winning tips, tricks and best practices for every email sequence"}),(0,t.jsxs)("div",{className:h().highlight,children:[(0,t.jsx)("h4",{className:h().heading,children:"How to use Email Flow"}),(0,t.jsxs)("div",{className:h().list,children:[(0,t.jsx)("div",{className:h().img_container,children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1654673987/strapi/arrow_green_5a98120205.svg","svg"),width:15,height:15,alt:"arrow right"})}),(0,t.jsx)("div",{className:h().text,children:"Go to your industry page"})]}),(0,t.jsxs)("div",{className:h().list,children:[(0,t.jsx)("div",{className:h().img_container,children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1654673987/strapi/arrow_green_5a98120205.svg","svg"),width:15,height:15,alt:"arrow right"})}),(0,t.jsx)("div",{className:h().text,children:"Select appropriate email flows"})]}),(0,t.jsxs)("div",{className:h().list,children:[(0,t.jsx)("div",{className:h().img_container,children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1654673987/strapi/arrow_green_5a98120205.svg","svg"),width:15,height:15,alt:"arrow right"})}),(0,t.jsx)("div",{className:h().text,children:"Create them on your automation platform"})]}),(0,t.jsxs)("div",{className:h().list,children:[(0,t.jsx)("div",{className:h().img_container,children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1654673987/strapi/arrow_green_5a98120205.svg","svg"),width:15,height:15,alt:"arrow right"})}),(0,t.jsx)("div",{className:h().text,children:"Or use Mailmodo"})]}),(0,t.jsxs)("div",{className:h().list,children:[(0,t.jsx)("div",{className:h().img_container,children:(0,t.jsx)(l(),{src:(0,g.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1654673987/strapi/arrow_green_5a98120205.svg","svg"),width:15,height:15,alt:"arrow right"})}),(0,t.jsx)("div",{className:h().text,children:"Set up your automation triggers"})]}),(0,t.jsx)("p",{className:h().desc,children:"Have questions? Need help? Get an email consultation with experts."}),(0,t.jsx)("div",{className:h().button_section,children:(0,t.jsx)("button",{className:h().button_demo,onClick:b,children:"Get a free consultation"})})]}),(0,t.jsx)("h3",{className:"mt-5 ".concat(h().sub_heading),children:"New to email flow? Start here"}),(0,t.jsx)("p",{className:h().links,children:(0,t.jsx)(o(),{href:"/features/email-sequence-software/",passHref:!0,prefetch:!1,children:"Email sequence software"})}),(0,t.jsx)("p",{className:h().links,children:(0,t.jsx)(o(),{href:"/guides/email-automation/",passHref:!0,prefetch:!1,children:"Email automation 101"})}),(0,t.jsx)("p",{className:h().links,children:(0,t.jsx)(o(),{href:"/features/email-automation-platform/",passHref:!0,prefetch:!1,children:"Email automation software"})}),(0,t.jsx)("p",{className:h().links,children:(0,t.jsx)(o(),{href:"/guides/email-segmentation/",passHref:!0,prefetch:!1,children:"Segmenting your email contact list"})}),(0,t.jsx)("p",{className:h().links,children:(0,t.jsx)(o(),{href:"/guides/customer-journey-map/",passHref:!0,prefetch:!1,children:"Mapping customer journeys"})}),(0,t.jsx)("p",{className:h().links,children:(0,t.jsx)(o(),{href:"/guides/email-marketing-funnel/",passHref:!0,prefetch:!1,children:"Creating email funnels"})}),(0,t.jsx)("p",{className:h().links,children:(0,t.jsx)(o(),{href:"/guides/marketing-automation-strategy/",passHref:!0,prefetch:!1,children:"Creating your marketing automation strategy"})}),(0,t.jsx)("p",{className:h().links,children:(0,t.jsx)(o(),{href:"/guides/b2b-marketing-automation/",passHref:!0,prefetch:!1,children:"Automation for B2B"})}),(0,t.jsx)("p",{className:h().links,children:(0,t.jsx)(o(),{href:"/guides/ecommerce-marketing-automation/",passHref:!0,prefetch:!1,children:"Automation for e-commerce"})})]})]})]})}),(0,t.jsx)(L,{}),(0,t.jsx)("div",{className:h().award_fold,children:(0,t.jsx)(y,{demoButtonId:"email-flow-bottom-demo-cta"})}),(0,t.jsx)(d.Z,{open:m,onClose:f,sx:{maxWidth:"696px",margin:"auto"},fullWidth:!0,PaperProps:{sx:{margin:"18px",width:"100%",borderRadius:"12px"}},children:(0,t.jsx)("div",{style:{padding:v<600?"24px":"32px"},children:(0,t.jsx)(I,{handleClose:f})})})]})}},75110:function(){},63724:function(e){e.exports={associations:"awardFold_associations__qfisS",heading:"awardFold_heading__KepZT",logo:"awardFold_logo__gDaJW",image_wrapper:"awardFold_image_wrapper__iixDm",clickable:"awardFold_clickable__Jufht"}},12970:function(e){e.exports={email_card_fold:"SignupCTA_email_card_fold__9cy5W",email_card_container:"SignupCTA_email_card_container__WaNRX",img_container:"SignupCTA_img_container__LAQRu",btn_container:"SignupCTA_btn_container__5vNUL",sign_up_btn:"SignupCTA_sign_up_btn__cuuw7",book_demo_btn:"SignupCTA_book_demo_btn__7V_JB",matter_block:"SignupCTA_matter_block__OEBPP"}},95649:function(e){e.exports={form:"demoForm_form__SJlLR",heading:"demoForm_heading___GHuo",close:"demoForm_close__77osL",input_wrapper:"demoForm_input_wrapper__v2VDz",label:"demoForm_label__GyjOD",input:"demoForm_input__41GJ_",input_error:"demoForm_input_error__4W9jz",submit_btn:"demoForm_submit_btn__P4BUB",success_container:"demoForm_success_container__ZZDzu",success_heading:"demoForm_success_heading__YVquh",success_message:"demoForm_success_message__Tww6L"}},61844:function(e){e.exports={top_background:"styles_top_background__vPE6m",hero_fold:"styles_hero_fold__XoYbC",img_wrapper:"styles_img_wrapper__OSrik",heading:"styles_heading__3BaT7",small_heading:"styles_small_heading__a5cuX",list_card:"styles_list_card__szS4D",img_container:"styles_img_container__qaNUy",description:"styles_description__vjbat",button_demo:"styles_button_demo__vYRyC",share_container:"styles_share_container__mSMTC",share_img_wrapper:"styles_share_img_wrapper__i3An5",product_hut:"styles_product_hut__zb81l",feature_fold:"styles_feature_fold__Aq4vi",sub_heading:"styles_sub_heading__ZymcD",links:"styles_links__26fTX",highlight:"styles_highlight__ZwWG1",list:"styles_list__nZVG9",text:"styles_text__2U_q7",desc:"styles_desc__QqsQd",button_section:"styles_button_section__g6oxk",navbar_heading:"styles_navbar_heading__MOa5F",component1:"styles_component1__DDvfI",sidebar1:"styles_sidebar1__XUMwa",sidebar:"styles_sidebar__J7I_N",item:"styles_item___Q22T",active:"styles_active__W1Bve",back:"styles_back__e6lH1",cta_img:"styles_cta_img__kYu6q",email_card_fold:"styles_email_card_fold__Ijbgd",email_card_container:"styles_email_card_container__c8kE7",btn_container:"styles_btn_container__28mi1",sign_up_btn:"styles_sign_up_btn__EIB0G",book_demo_btn:"styles_book_demo_btn__QeZFh",component:"styles_component__lnGPI",mainpage:"styles_mainpage__ugIth",buttons:"styles_buttons__H_L7c",spans:"styles_spans__Rh6hX",spansdiv:"styles_spansdiv__5HuPy",searchbar:"styles_searchbar__mNYDZ",cardContainer:"styles_cardContainer__zXqaq",cardItem2:"styles_cardItem2__CaxnH",contents:"styles_contents__LK_c_",labeltop:"styles_labeltop__8xOz8",label:"styles_label__7zrvD",cardFooter:"styles_cardFooter__OhQOr",hrtag:"styles_hrtag__lEREN",Itemfooter:"styles_Itemfooter__ionPC",dot:"styles_dot__0Qaq6",label2:"styles_label2__WoJol",cta_image:"styles_cta_image__l9mLb",imgicon:"styles_imgicon__NRXJD",cardImage:"styles_cardImage__uXUQi",para:"styles_para__hlZXl",cardItem:"styles_cardItem__yKdPD",h4:"styles_h4__7QJJX",award_fold:"styles_award_fold__q3IH1",share_container_mobile:"styles_share_container_mobile__ZMrVE",share_content_mobile:"styles_share_content_mobile__rD8o5",share_icons_wrapper:"styles_share_icons_wrapper__IfNXF",hero:"styles_hero__G20si",cards_container:"styles_cards_container__MzQPg",hero_card:"styles_hero_card__Zsk2M",card:"styles_card__H_EM_",footerCard:"styles_footerCard__Kwryy",side_navbar_wrapper:"styles_side_navbar_wrapper__G0BL6",matter_block:"styles_matter_block__J_of9"}},94578:function(e,a,s){"use strict";s.d(a,{Z:function(){return i}});var t=s(89611);function i(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,(0,t.Z)(e,a)}}},function(e){e.O(0,[6016,8262,6608,9774,2888,179],function(){return e(e.s=27270)}),_N_E=e.O()}]);