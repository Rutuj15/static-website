!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=(new e.Error).stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="551f74b1-97c2-43e4-8176-c7c5e2a0e760",e._sentryDebugIdIdentifier="sentry-dbid-551f74b1-97c2-43e4-8176-c7c5e2a0e760")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7312],{70454:function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses/email-marketing-certification",function(){return i(33835)}])},64253:function(e,a,i){"use strict";var s=i(85893);i(67294);var t=i(9008),o=i.n(t);a.Z=e=>{let{FAQ_Content:a}=e,i={"@context":"https://schema.org","@type":"FAQPage",mainEntity:a.map((e,a)=>null!==e.question?{"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}}:"")};return(0,s.jsx)(o(),{children:(0,s.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(i)}})})}},42550:function(e,a,i){"use strict";i(85893),i(67294),i(9008)},4855:function(e,a,i){"use strict";var s=i(85893);i(67294);var t=i(9008),o=i.n(t),r=i(85318);a.Z=e=>{let{name:a,description:i,thumbnailUrl:t,uploadDate:n,duration:l,contentUrl:c,embedUrl:d,publisher:m=!0}=e,_={"@context":"https://schema.org","@type":"VideoObject",name:null!=a?a:" ",description:null!=i?i:" ",thumbnailUrl:null!=t?t:" ",uploadDate:(null==n?void 0:n.trim())?(0,r.Uk)(n.trim()):" ",duration:null!=l?l:" ",contentUrl:null!=c?c:" ",embedUrl:null!=d?d:""};return m&&(_.publisher={"@type":"Organization",name:"Mailmodo",url:"https://www.mailmodo.com/",logo:"https://www.mailmodo.com/static/images/logo/logo-full.svg",description:"Mailmodo is a complete email marketing platform that helps email marketers to create and send interactive emails to drive growth and engagement.",address:{"@type":"PostalAddress",addressLocality:"Lewes",addressRegion:"DE",postalCode:"19958",streetAddress:"Mailmodo Technologies Inc. 16192, Coastal Highway",addressCountry:{"@type":"Country",name:"US"}},contactPoint:{"@type":"ContactPoint",email:"enquiries@mailmodo.com",contactType:"customer service"}}),(0,s.jsx)(o(),{children:(0,s.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(_)}})})}},83494:function(e,a,i){"use strict";var s=i(85893);i(67294);var t=i(9008),o=i.n(t),r=i(85318);a.Z=e=>{var a,i;let{title:t,description:n,ogImg:l,datePublished:c,dateModified:d}=e,m=(null!==(a=null==t?void 0:t.length)&&void 0!==a?a:1)%30,_=(null!==(i=null==n?void 0:n.length)&&void 0!==i?i:1)%30;_<m&&(_=m);let h=_?"".concat(_,"-03-2023"):"16-03-2023",u={"@context":"https://schema.org","@type":"WebPage",headline:null!=t?t:"",description:null!=n?n:"",image:null!=l?l:"https://www.mailmodo.com/static/images/og-image.png",datePublished:(0,r.Uk)(null!=c?c:m?"".concat(m,"-03-2023"):"08-09-2022"),dateModified:(0,r.Uk)(null!=d?d:h),publisher:{"@type":"Organization",name:"Mailmodo",url:"https://www.mailmodo.com/",sameAs:["https://www.linkedin.com/company/mailmodo/","https://www.facebook.com/mailmodo/","https://www.instagram.com/mailmodohq/","https://www.youtube.com/@mailmodo"],logo:"https://www.mailmodo.com/static/images/logo/logo-full.svg",description:"Mailmodo is a complete email marketing platform that helps email marketers to create and send interactive emails to drive growth and engagement.",address:{"@type":"PostalAddress",addressLocality:"Lewes",addressRegion:"DE",postalCode:"19958",streetAddress:"Mailmodo Technologies Inc. 16192, Coastal Highway",addressCountry:{"@type":"Country",name:"US"}},contactPoint:{"@type":"ContactPoint",email:"enquiries@mailmodo.com",contactType:"customer service"}}};return(0,s.jsx)(o(),{children:(0,s.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(u)}})})}},97967:function(e,a,i){"use strict";i.d(a,{Z:function(){return h}});var s=i(85893),t=i(67294),o=i(17170),r=i.n(o),n=i(25675),l=i.n(n),c=i(97975),d=i(20627),m=i(56941),_=e=>{let{question:a,answer:i,index:t,openedCardIndex:o,setOpenedCardIndex:n}=e,_=o===t;return(0,s.jsxs)("div",{className:r().accord_item,"data-is-first":0===t,children:[(0,s.jsxs)(c.Z,{color:"link",className:r().accord_btn,style:{marginBottom:"0rem"},onClick:()=>{o===t?n(null):n(t)},children:[(0,s.jsx)("h3",{className:r().btn_text,children:a}),(0,s.jsx)("div",{className:r().btn_icon,"data-active":_,children:_?(0,s.jsx)(l(),{alt:"chevron-down",src:"https://res.cloudinary.com/mailmodo/image/upload/v1669291744/strapi/minus_32ea956535.png",height:"24",width:"24"}):(0,s.jsx)(l(),{alt:"chevron-down",src:"https://res.cloudinary.com/mailmodo/image/upload/v1669291744/strapi/plus_28ef13bee0.png",height:"24",width:"24"})})]}),(0,s.jsx)(d.Z,{isOpen:_,children:(0,s.jsx)(m.Z,{className:r().accord_card,children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:i},className:r().answer})})})]})},h=e=>{let{FAQs_DATA:a,leftLayout:i=!1,zeroMarginBottom:o=!1}=e,[n,l]=(0,t.useState)(null);return(0,s.jsx)("div",{className:"".concat(i?"":"container"," ").concat(r().FAQ_container),"data-zero-margin-bottom":o,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:r().heading,"data-is-left-layout":i,children:"Frequently asked questions"}),(0,s.jsx)("div",{className:r().accordion,"data-is-left-layout":i,children:a.map((e,a)=>(0,s.jsx)(_,{question:e.question,answer:e.answer,index:a,openedCardIndex:n,setOpenedCardIndex:l},a))})]})})}},33835:function(e,a,i){"use strict";i.r(a),i.d(a,{__N_SSG:function(){return B},default:function(){return X}});var s=i(85893);i(67294);var t=i(9008),o=i.n(t),r=i(2962),n=i(25675),l=i.n(n),c=i(25709),d=i(9976),m=i.n(d),_=i(41664),h=i.n(_),u=i(11163),g=i(85318),p=()=>{let e="".concat((0,u.useRouter)().asPath);return(0,s.jsx)("div",{style:{backgroundColor:"#f1fafc"},children:(0,s.jsx)("div",{className:"container ".concat(m().awards_fold),children:(0,s.jsxs)("div",{className:"row ".concat(m().ad_cta),children:[(0,s.jsxs)("div",{className:"col-md-6 ".concat(m().col_left),children:[(0,s.jsx)("h2",{className:m().heading,children:"This course is brought to you by Mailmodo⚡️"}),(0,s.jsx)("div",{className:m().gif_mobile,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1652251695/strapi/new_home_animation_22f4623599.gif"),alt:"email marketing course video",width:511,height:367})}),(0,s.jsx)("p",{className:m().description,children:"Mailmodo is an email marketing tool, powered by AMP Emails, enabling users to create & send app-like interactive emails to improve conversions."}),(0,s.jsx)("p",{className:m().description,children:"This allows your users to book meetings, submit quizzes, take polls, share reviews, take NPS & CAST surveys and much more - all inside the email itself."}),(0,s.jsxs)("div",{className:m().button_section,children:[(0,s.jsx)(h(),{href:"".concat((0,g.XE)("https://manage.mailmodo.com/auth/signup","awards-section",e)),passHref:!0,prefetch:!1,children:(0,s.jsx)("button",{className:m().button_signup,children:"Try out Mailmodo"})}),(0,s.jsx)("a",{href:"".concat((0,g.XE)("https://www.mailmodo.com/demo/","awards-section",e)),children:(0,s.jsx)("button",{className:m().button_demo,children:"Request live demo"})})]})]}),(0,s.jsx)("div",{className:"col-md-6 ".concat(m().col_right),children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1652251695/strapi/new_home_animation_22f4623599.gif"),alt:"email marketing course video",width:511,height:367})})]})})})},f=i(26930),w=i.n(f),v=i(49577),y=i.n(v),x=()=>(0,s.jsxs)("div",{className:y().first_section,children:[(0,s.jsx)("h2",{className:y().heading,children:"4 reasons why this Email Masterclass is one-of-a-kind"}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-md-6 ".concat(y().col_left),children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1660198281/strapi/email_marketing_certification_hero_image_47d5f3a214.svg","svg"),alt:"email marketing course",width:297,height:275,priority:!0})}),(0,s.jsx)("div",{className:"col-md-6 ".concat(y().col_right),children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"/static/images/icon/check-gray-border.svg",width:20,height:20,alt:"check-mark"}),"Deep dive into email marketing concepts in the shortest time possible."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"/static/images/icon/check-gray-border.svg",width:20,height:20,alt:"check-mark"}),"A dedicated lesson about AMP emails and how you can use them"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"/static/images/icon/check-gray-border.svg",width:20,height:20,alt:"check-mark"}),"Your free pass to an exclusive email marketing community"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"/static/images/icon/check-gray-border.svg",width:20,height:20,alt:"check-mark"}),"Complementary live sessions by experts"]})]})})]})]}),j=i(74931),b=i.n(j),N=()=>(0,s.jsxs)("div",{className:b().associations,children:[(0,s.jsx)("h2",{className:b().heading,children:"Our Partners"}),(0,s.jsxs)("div",{className:b().partners_container,children:[(0,s.jsx)("p",{className:b().label,children:"Assignment Partners"}),(0,s.jsxs)("div",{className:b().logos,children:[(0,s.jsx)("div",{className:b().image_wrapper,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662548794/strapi/Unlayer_logo_a5a8cc1e35.png"),width:"85",height:"32",alt:"Unlayer Logo"})}),(0,s.jsx)("div",{className:b().image_wrapper,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662357763/strapi/Outplay_logo_e4cfa092c3.png"),width:"106",height:"32",alt:"Outplay Logo"})}),(0,s.jsx)("div",{className:b().image_wrapper,children:(0,s.jsx)(l(),{src:"https://res.cloudinary.com/mailmodo/image/upload/v1664367573/strapi/Moengage_38fb1d445f.png",width:"117",height:"32",alt:"Moengage Logo"})}),(0,s.jsx)("div",{className:b().image_wrapper,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1663001327/strapi/coschedule_logo_2_0a48ec0885.png"),width:"117",height:"32",alt:"Coschedule Logo"})})]})]}),(0,s.jsxs)("div",{className:b().partners_container,children:[(0,s.jsx)("p",{className:b().label,children:"Distribution Partners"}),(0,s.jsxs)("div",{className:b().logos,children:[(0,s.jsx)("div",{className:b().image_wrapper,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662442661/strapi/emeritus_logo_80904d4af5.svg","webp","80"),width:"102",height:"32",alt:"emeritus Logo"})}),(0,s.jsx)("div",{className:b().image_wrapper,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662442661/strapi/contact_out_logo_cad0d75376.svg","svg"),width:"129",height:"32",alt:"contact out Logo"})}),(0,s.jsx)("div",{className:b().image_wrapper,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662973972/strapi/unstop_logo_2dbe76feac.png"),width:"66",height:"32",alt:"unstop Logo"})})," ",(0,s.jsx)("div",{className:b().image_wrapper,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662973972/strapi/leadzin_logo_96481d53cb.png"),width:"29",height:"32",alt:"leadzin Logo"})})," ",(0,s.jsx)("div",{className:b().image_wrapper,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662973972/strapi/hellomeets_logo_a924c52012.png"),width:"79",height:"32",alt:"hellomeets Logo"})})," ",(0,s.jsx)("div",{className:b().image_wrapper,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662973971/strapi/wisepops_logo_602d8b9638.png"),width:"111",height:"32",alt:"Wisepops Logo"})})]})]})]}),k=i(82143),C=i.n(k),M=i(23795),q=()=>(0,s.jsxs)("div",{className:C().light_banner,children:[(0,s.jsx)("div",{className:C().col_left,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662438902/strapi/course_page_community_image_5838b8b080.svg","webp","100"),alt:"email marketing course",width:348,height:389})}),(0,s.jsxs)("div",{className:C().col_right,children:[(0,s.jsx)("h2",{className:C().heading,children:"Be a part of our community"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"/static/images/icon/check-gray-border.svg",width:20,height:20,alt:"check-mark"}),"Get your queries resolved by our in-house email experts"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"/static/images/icon/check-gray-border.svg",width:20,height:20,alt:"check-mark"}),"Connect with fellow learners and exchange insights."]})]})]}),(0,s.jsxs)("div",{className:C().cta,children:[(0,s.jsx)("div",{className:C().image_wrapper,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662439907/strapi/waiting_list_course_dcc33e22d8.png","webp","100"),alt:"Joined marketers",width:168,height:57})}),(0,s.jsxs)("p",{className:C().description,children:[(0,s.jsx)("b",{children:"350+"})," marketers have already enrolled"]}),(0,s.jsx)("div",{className:C().button_section,children:(0,s.jsx)(M.Z,{href:"https://courses.mailmodo.com/checkout/Course/22243",prefetch:!1,passHref:!0,className:C().enroll_link,children:(0,s.jsx)("button",{className:C().btn,children:"Enroll Now"})})})]})]}),E=i(97967);let A=[{question:"How do I start learning email marketing?",answer:"If you're looking for a comprehensive email marketing course, there are many options available online. A great place to start is with courses offered by industry leaders like Mailmodo. This course covers everything from email design and list building to automation and analytics. You can also find free resources and webinars on email marketing best practices. With a little dedication and practice, you can become an email marketing expert in no time!"},{question:"How do I become an email marketer?",answer:"Start by taking a course, reading articles, attending live webinars, and practicing over time. With dedication and consistent effort, you can become an email marketing expert as your expertise grows!"},{question:"What qualifications do you need for email marketing?",answer:"To become a successful email marketer, you need to have a creative mindset, strong communication skills, and an understanding of your target audience. Additionally, knowledge of email marketing software and analytics can help optimize your campaigns."},{question:"How fast can I learn email marketing?",answer:"This course is a no-fluff and straightforward introduction to email marketing concepts. You will not need more than 1.5 hours to take the lessons and complete the assignments."},{question:"What makes it different from other free tutorials if it's so compact?",answer:"Developed and designed by Mailmodo, this course brings you the expertise and experience of 4 email experts who’ve been in the industry for more than 5 years. On top of that, our quizzes and assignments help you apply the learning right away."},{question:"What topics will this email marketing certification cover?",answer:"You will learn the basics of email deliverability, authentication, design, and measurement. Besides this, you will also learn about new trends like interactive emails."},{question:"How will I attend the live sessions?",answer:"We will send you an invite for the live sessions after you sign up."},{question:"What are the benefits of being a part of the email marketing community?",answer:"You will get to interact with people who share the same interest in email marketing as you, and you’ll have access to our in-house advice about email marketing."},{question:"Does the email marketing certificate have an expiration date?",answer:"This certificate is valid for 24 months."}],T=["Introduction to Email Marketing","Understanding Email Analytics & Metrics","Getting Email Deliverability Right","How to Segment Your Email List","The Art of Writing a Good Email Copy","Fundamentals of Email Design","Using AMP emails to boost conversion","Final Assignment"],I=[{imgUrl:"https://res.cloudinary.com/mailmodo/image/upload/v1702965846/strapi/Tag_1_997c927992.svg",title:"Free"},{imgUrl:"https://res.cloudinary.com/mailmodo/image/upload/v1702965174/strapi/Pencil_Simple_7b6d715969.svg",title:"7 Modules"},{imgUrl:"https://res.cloudinary.com/mailmodo/image/upload/v1702965174/strapi/Microphone_0d5b1df002.svg",title:"3 Live Sessions"},{imgUrl:"https://res.cloudinary.com/mailmodo/image/upload/v1702965174/strapi/Chat_Circle_Dots_89f07c5316.svg",title:"Forum for Q&A"}];var P=i(29556),S=i.n(P),D=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:S().community,children:[(0,s.jsx)("div",{className:S().leftdiv,children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1660198281/strapi/email_marketing_certification_hero_image_47d5f3a214.svg","svg"),alt:"email marketing course",width:475,height:445,priority:!0})}),(0,s.jsxs)("div",{className:S().rightdiv,children:[(0,s.jsx)("h2",{className:S().heading,children:"Get your questions answered in our email community"}),(0,s.jsx)("p",{className:S().sub_heading,children:"Along with this course, get inducted into our exclusive community of email marketers, growth enthusiasts, and startup leaders and learn the tricks of the trade."})]})]}),(0,s.jsxs)("div",{className:"container ".concat(S().certification),children:[(0,s.jsxs)("div",{className:S().leftdiv,children:[(0,s.jsx)("h2",{className:S().heading,children:"Flaunt your certification in your network"}),(0,s.jsx)("p",{className:S().sub_heading,children:"Get a Mailmodo-approved certification to add to your resume or profile"})]}),(0,s.jsx)("div",{className:S().rightdiv,children:(0,s.jsx)(l(),{src:"https://res.cloudinary.com/mailmodo/image/upload/v1702881883/strapi/668624_custom_site_themes_id_vt1_Ro_PY_9_QZ_2b0_Ez_BLS_6n_certificate_768536d558.png",width:572,height:417,alt:"certificate"})})]})]}),O=i(43968),L=i.n(O),J=()=>(0,s.jsxs)("div",{className:"container ".concat(L().main_section),children:[(0,s.jsx)("h2",{className:L().heading,children:"Course Curriculum"}),(0,s.jsxs)("div",{className:L().main,children:[(0,s.jsx)("div",{className:L().leftdiv,children:T.map((e,a)=>(0,s.jsx)("div",{className:L().card_box,children:(0,s.jsx)("p",{children:a!==T.length-1?"Chapter ".concat(a+1,": ").concat(e):e})},"Chapter_".concat(a+1)))}),(0,s.jsxs)("div",{className:L().rightdiv,children:[(0,s.jsx)(l(),{src:"https://res.cloudinary.com/mailmodo/image/upload/v1702885314/strapi/T7_YOS_Yxt_R8_KVWIFH_6_X4_X_image_4_b4d5f35c17.png",width:418,height:235,alt:"image_4_b4d5f35c17",className:L().card_img}),(0,s.jsxs)("div",{className:L().card_body,children:[(0,s.jsx)("p",{className:L().desc,children:"About this course"}),(0,s.jsx)("hr",{className:L().line}),(0,s.jsx)("ul",{children:I.map((e,a)=>(0,s.jsxs)("li",{children:[(0,s.jsx)(l(),{src:e.imgUrl,width:25,height:25,alt:(0,g.Gj)(e.imgUrl),className:L().icons}),(0,s.jsx)("span",{children:e.title})]},"Course_".concat(a)))})]})]})]})]}),U=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:w().feature_fold,children:[(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(x,{}),(0,s.jsxs)("div",{className:w().second_section,children:[(0,s.jsx)("h2",{className:w().heading,children:"After the completion of the course, you will get"}),(0,s.jsxs)("div",{className:w().card_wrapper_one,children:[(0,s.jsxs)("div",{className:w().card,children:[(0,s.jsx)("div",{className:w().image_wrapper,style:{backgroundColor:"#f2185d1a"},children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1657090982/strapi/certified_logo_0ed97fe68e.svg"),width:32,height:45,alt:"certificate icon"})}),(0,s.jsx)("p",{className:w().label,children:"An industry-recognized certificate"})]}),(0,s.jsxs)("div",{className:w().card,children:[(0,s.jsx)("div",{className:w().image_wrapper,style:{backgroundColor:"#7a6bff1a"},children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1657091629/strapi/email_campaigns_logo_cf2176c795.svg"),width:42,height:45,alt:"email campaigns icon"})}),(0,s.jsx)("p",{className:w().label,children:"Unlimited access to content"})]})]}),(0,s.jsxs)("div",{className:w().card_wrapper_two,children:[(0,s.jsxs)("div",{className:w().card,children:[(0,s.jsx)("div",{className:w().image_wrapper,style:{backgroundColor:"#2dc8921a"},children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1657091629/strapi/trending_card_logo_560189f3d7.svg"),width:42,height:35,alt:"trending card icon"})}),(0,s.jsx)("p",{className:w().label,children:"5+ on-demand lessons"})]}),(0,s.jsxs)("div",{className:w().card,children:[(0,s.jsx)("div",{className:w().image_wrapper,style:{backgroundColor:"#00a1c21a"},children:(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1657091631/strapi/trending_mails_e6a190b4b7.svg"),width:36,height:43,alt:"trending mails icon"})}),(0,s.jsx)("p",{className:w().label,children:"6+ hands-on projects"})]})]})]})]}),(0,s.jsx)(J,{}),(0,s.jsx)(D,{}),(0,s.jsx)(q,{}),(0,s.jsx)(E.Z,{FAQs_DATA:A}),(0,s.jsx)(N,{})]})}),F=i(67321),H=i.n(F),z=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:H().hero,children:[(0,s.jsx)("div",{className:H().background_color_header}),(0,s.jsx)("div",{className:H().container,children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-md-6 ".concat(H().col_left),children:[(0,s.jsx)("h1",{className:H().heading,children:"Email marketing course to become an expert in 90 minutes"}),(0,s.jsxs)("div",{className:H().list_container,children:[(0,s.jsx)("p",{className:H().list,children:"\uD83D\uDE80 Boost email ROI"}),(0,s.jsx)("p",{className:H().list,children:"\uD83C\uDFAF Learn from the best in industry"}),(0,s.jsx)("p",{className:H().list,children:"⚡ Exclusive chapter on interactive email"})]}),(0,s.jsxs)("div",{className:H().wait_list,children:[(0,s.jsx)(l(),{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1662439907/strapi/waiting_list_course_dcc33e22d8.png"),width:102,height:34,alt:"wait list"}),(0,s.jsxs)("p",{className:H().text,children:[(0,s.jsx)("b",{children:"1550+ marketers"})," have already enrolled"]})]}),(0,s.jsx)("div",{className:H().form_section,children:(0,s.jsx)(h(),{href:"https://courses.mailmodo.com/checkout/Course/22243",prefetch:!1,passHref:!0,children:(0,s.jsx)("button",{className:"".concat(H().btn),children:"Enroll now"})})}),(0,s.jsxs)("div",{className:H().enroll,children:["Already enrolled?",(0,s.jsxs)(h(),{href:"https://courses.mailmodo.com/member/#/",prefetch:!1,passHref:!0,className:H().enroll_link,children:[" ","Login here"]})]})]}),(0,s.jsx)("div",{className:"col-md-6 ".concat(H().col_right),children:(0,s.jsx)("div",{className:H().video_wrapper,children:(0,s.jsx)("video",{className:"w-100",controls:!0,poster:"https://res.cloudinary.com/mailmodo/image/upload/v1660055063/strapi/Email_marketing_course_poster_1_fae9536658.png",children:(0,s.jsx)("source",{src:(0,c.Jn)("https://res.cloudinary.com/mailmodo/video/upload/v1659534543/strapi/course_page_trailer_Veed_5a5d4bbb3e.mp4"),type:"video/mp4",preload:"metadata"})})})})]})})})]})});let W=[{question:"How much time do I have to spend completing this email marketing course?\xa0",answer:"This course is a no-fluff and straightforward introduction to email marketing concepts. You will not need more than 7 hours to take the lessons and complete the assignments."},{question:"What makes it different from other free tutorials if it's so compact?",answer:"Developed and designed by Mailmodo, this course brings you the expertise and experience of 4 email experts who’ve been in the industry for more than 5 years. On top of that, our quizzes and assignments help you apply the learning right away. "},{question:"What topics will this email marketing certification cover?",answer:"You will learn the basics of email deliverability, authentication, design, and measurement. Besides this, you will also learn about new trends like AMP emails"},{question:"How will I attend the live sessions?",answer:"We will send you an invite for the live sessions after you sign-up."},{question:"What are the benefits of being a part of your community?",answer:"You will get to interact with people who share the same interest in email marketing as you, and you’ll have access to our in-house advice about email marketing."},{question:"  Does the email marketing certificate have an expiration date?",answer:"This certificate is valid for 24 months."}];var Q=i(64253),G=e=>{let{slug:a}=e;return(0,s.jsx)(o(),{children:(0,s.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"https://schema.org","@type":"Course",name:"Email Masterclass - Become an Expert | Mailmodo Academy",description:"The ultimate email marketing course covering fundamentals such as email deliverability, segmentation, design, and copy. Explore AMP emails and their use cases.",timeRequired:"PT1H30M",inLanguage:"en",educationalCredentialAwarded:"Email Masterclass by Mailmodo Certificate",offers:{"@type":"Offer",price:"0",priceCurrency:"USD",category:"Free"},hasCourseInstance:[{"@type":"CourseInstance",courseMode:"Online",courseWorkload:"PT1H30M"}],creator:{"@type":"Organization",name:"Mailmodo"},about:{"@type":"Thing",name:"Email Marketing"},provider:{"@type":"Organization",name:"Mailmodo Academy",sameAs:"https://courses.mailmodo.com/courses/email-marketing",logo:"https://www.mailmodo.com/static/images/logo/logo-full.svg"}})}})})};i(42550);var Z=i(83494),Y=i(4855),B=!0,X=e=>{let{ratingSchema:a}=e,i="Email Marketing Certification Course | Mailmodo Academy",t="Enroll in an email marketing certification course to learn email marketing with actionable insights from the experts, gain knowledge, and get certified.",o="https://res.cloudinary.com/mailmodo/image/upload/v1685702774/strapi/Email_marketing_course_OG_05_09_efd8fab75f.png";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.dX,{title:i,description:t,url:"https://www.mailmodo.com/courses/email-marketing-certification/",publisherName:"Mailmodo",authorName:"Mailmodo",publisherLogo:"https://www.mailmodo.com/static/images/logo/logo-full.svg"}),(0,s.jsx)(r.PB,{robotsProps:{maxImagePreview:"large"},title:i,description:t,canonical:"https://www.mailmodo.com/courses/email-marketing-certification/",openGraph:{title:i,description:t,url:"https://www.mailmodo.com/courses/email-marketing-certification/",locale:"en_US",type:"Article",article:{authors:["Mailmodo"]},images:[{url:o}]},twitter:{handle:"@mailmodo",site:"twitter.com/mailmodo",cardType:"summary_large_image"}}),(0,s.jsx)(Y.Z,{name:"Master Email Marketing with Our Comprehensive Course - Become an Expert Today!",description:"Learn how to master the art of email marketing with our comprehensive course. From creating effective email campaigns to analyzing results, our course covers everything you need to become an email marketing expert. Enroll now and take your marketing skills to the next level!",thumbnailUrl:"https://res.cloudinary.com/mailmodo/image/upload/v1660055063/strapi/Email_marketing_course_poster_1_fae9536658.png",uploadDate:new Date("2022-06-23").toISOString(),contentUrl:"https://res.cloudinary.com/mailmodo/video/upload/f_webm,q_50/v1659534543/strapi/course_page_trailer_Veed_5a5d4bbb3e.mp4",duration:"PT44S"}),(0,s.jsx)(Z.Z,{title:i,description:t,ogImg:o}),(0,s.jsx)(G,{Course_Content:{slug:"email-marketing-certification"}}),(0,s.jsx)(Q.Z,{FAQ_Content:W}),(0,s.jsx)(z,{}),(0,s.jsx)(U,{}),(0,s.jsx)(p,{})]})}},17170:function(e){e.exports={FAQ_container:"faqs_FAQ_container__5CCJ9",heading:"faqs_heading__Tv43P",sub_heading:"faqs_sub_heading__5HhCo",accordion:"faqs_accordion__2Orlf",accord_item:"faqs_accord_item__Cpn_W",accord_btn:"faqs_accord_btn__3hHqL",btn_text:"faqs_btn_text__2CClN",btn_icon:"faqs_btn_icon__12cJw",accord_card:"faqs_accord_card__IF1DS",answer:"faqs_answer__R1PrQ"}},9976:function(e){e.exports={awards_fold:"awards_awards_fold___N41J",ad_cta:"awards_ad_cta__QQ8G5",col_left:"awards_col_left__qwsmB",gif_mobile:"awards_gif_mobile__X77Of",heading:"awards_heading__Y8CxZ",description:"awards_description__IufEw",button_section:"awards_button_section__hvlCM",button_signup:"awards_button_signup__GoCdl",button_demo:"awards_button_demo__FNC7w",col_right:"awards_col_right__Iryp_"}},74931:function(e){e.exports={associations:"styles_associations___jn_u",heading:"styles_heading__EWUjo",partners_container:"styles_partners_container__ZWcfm",label:"styles_label__ayR3q",logos:"styles_logos__A7xKr",image_wrapper:"styles_image_wrapper__SkTnM"}},29556:function(e){e.exports={heading:"styles_heading__vytD_",sub_heading:"styles_sub_heading__uegQM",certification:"styles_certification__65wQ3",leftdiv:"styles_leftdiv__i6rgb",rightdiv:"styles_rightdiv__9mOXU",community:"styles_community__jvefa"}},82143:function(e){e.exports={light_banner:"styles_light_banner__1DZ4T",col_right:"styles_col_right__63yF4",heading:"styles_heading__v4_BS",cta:"styles_cta__O1Ill",description:"styles_description__7xgLq",button_section:"styles_button_section__VIUpT",enroll_link:"styles_enroll_link__XdnrN",btn:"styles_btn__L7Gsl",col_left:"styles_col_left__Sh9wS",image_wrapper:"styles_image_wrapper__GEafY"}},43968:function(e){e.exports={main_section:"styles_main_section___hP1c",heading:"styles_heading__bXNGm",main:"styles_main__EjbtA",leftdiv:"styles_leftdiv___eKyE",card_box:"styles_card_box__0Gvad",rightdiv:"styles_rightdiv___NTXz",card_body:"styles_card_body__hwOO6",desc:"styles_desc__rYjJI",line:"styles_line__DzCCw",card_img:"styles_card_img__iOxbD"}},49577:function(e){e.exports={first_section:"styles_first_section__TXmL7",heading:"styles_heading__hoxpg",col_left:"styles_col_left__om7MG",video_wrapper:"styles_video_wrapper__upMPb",image:"styles_image__1mhQU",col_right:"styles_col_right__dNkMH"}},26930:function(e){e.exports={feature_fold:"features_feature_fold__YsRT7",second_section:"features_second_section__jwFAR",heading:"features_heading__wpeee",sub_heading:"features_sub_heading__FdlBw",card_wrapper_one:"features_card_wrapper_one__sJWha",card:"features_card__feK0p",image_wrapper:"features_image_wrapper__fX6zC",label:"features_label__bDCbB",card_wrapper_two:"features_card_wrapper_two__qR1c1",fourth_section:"features_fourth_section__kNEzZ",faq_fold:"features_faq_fold____Ds2",tab_head:"features_tab_head__aXgOo",tab_title:"features_tab_title__yEmdS",tab_p:"features_tab_p__GbS3n",faq_container:"features_faq_container__1aHQP",tab_answer:"features_tab_answer__I5uWH"}},67321:function(e){e.exports={hero:"hero_hero__dm507",background_color_header:"hero_background_color_header___LK1a",container:"hero_container__ShzGs",col_left:"hero_col_left__uPMA_",heading:"hero_heading__y2j9e",description:"hero_description__QPDuL",list_container:"hero_list_container__FfJ7O",list:"hero_list__LbQvr",wait_list:"hero_wait_list__BKTot",text:"hero_text__zddK7",form_section:"hero_form_section__YD62D",input:"hero_input__qUlE0",btn:"hero_btn__VnGNC",enroll:"hero_enroll__b1QbM",col_right:"hero_col_right__ZQCOy",video_wrapper:"hero_video_wrapper___MxeS",err_message:"hero_err_message__bBrIq"}}},function(e){e.O(0,[3126,7501,9774,2888,179],function(){return e(e.s=70454)}),_N_E=e.O()}]);