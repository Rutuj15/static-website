!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d7c07fa6-d683-435a-b707-09255f024502",e._sentryDebugIdIdentifier="sentry-dbid-d7c07fa6-d683-435a-b707-09255f024502")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9407],{54423:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/case-studies",function(){return s(87568)}])},87568:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return D},default:function(){return G}});var i=s(85893),a=s(67294),n=s(9008),o=s.n(n),r=s(2962),l=s(41664),c=s.n(l),d=s(25675),_=s.n(d),u=s(83966),m=s.n(u),h=s(11163),g=s(85318),p=e=>{let t="".concat((0,h.useRouter)().asPath);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:m().container,children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("center",{children:[(0,i.jsx)("p",{className:m().label,children:"CASE STUDIES"}),(0,i.jsxs)("div",{className:m().textContent,children:[(0,i.jsx)("h1",{className:m().title,children:"Email success stories to inspire your next campaign"}),(0,i.jsx)("p",{className:m().description,children:"Dive deep into real life email marketing case studies from Mailmodo’s customers and discover new engagement & growth ideas."})]}),(0,i.jsxs)("div",{className:m().heroButtons,children:[(0,i.jsx)(c(),{href:(0,g.XE)("https://manage.mailmodo.com/auth/signup","hero-section",t),children:(0,i.jsx)("button",{children:"Signup for free"})}),(0,i.jsx)("a",{href:(0,g.XE)("https://www.mailmodo.com/demo/","hero-section",t),children:(0,i.jsxs)("button",{className:m().secondaryButton,"data-is-demo":!1,children:[(0,i.jsx)("p",{children:"Book a demo"}),(0,i.jsx)("div",{className:m().avatar_container,children:(0,i.jsx)(_(),{src:"https://res.cloudinary.com/mailmodo/image/upload/v1669275422/strapi/avatar_GIF_64bf052077.gif",width:60,height:33,alt:"avatar_GIF"})})]})})]})]})})})})},v=s(51577),f=s.n(v),x=s(89755),y=s.n(x),b=s(42708),w=s(25709),j=e=>{let{allCardsData:t,totalNewsletters:s,initialPage:n,pageSize:o}=e,{ref:r,inView:l}=(0,b.YD)({rootMargin:"1000px"}),[d,_]=(0,a.useState)(t),[u,m]=(0,a.useState)(n);return(0,a.useEffect)(()=>{l&&d.length<s&&m(u+1)},[l]),(0,a.useEffect)(()=>{let e=async()=>{try{let e=await (0,w.sD)("/customer-stories/","&sort=orderWeight&populate=seo.shareImage.image,GenericContentBlock,testimonial.picture,image,TLDRBox,internalLinkingContent&pagination[page]=".concat(u,"&pagination[pageSize]=").concat(o));e=e.map(e=>{var t,s,i,a;let n={...e};return(null===(t=e.image)||void 0===t?void 0:null===(s=t.data)||void 0===s?void 0:s.length)&&(n.image={...e.image.data[0].attributes}),delete n.internalLinkingContent,n.industry=null!==(a=null==e?void 0:null===(i=e.internalLinkingContent)||void 0===i?void 0:i.industry)&&void 0!==a?a:null,n}),_([...d,...e])}catch(e){console.log(e)}};u>1&&e()},[u]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{style:{backgroundColor:"#ffffff"},className:f().Cards+" ",id:"case-studies-card-container",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:f().cardContainer,children:d.map((e,t)=>{var s,a,n,o,r,l,d,_,u,m,h,p,v,x,b,w,j;return(0,i.jsx)("div",{className:f().card_item,children:(0,i.jsx)(c(),{legacyBehavior:!0,passHref:!0,href:"/case-studies/".concat(null!==(x=e.slug)&&void 0!==x?x:" "),children:(0,i.jsx)("a",{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:f().card_img,children:(0,i.jsx)(y(),{src:null!==(b=null===(s=e.seo)||void 0===s?void 0:null===(a=s.shareImage)||void 0===a?void 0:null===(n=a.image)||void 0===n?void 0:null===(o=n.data)||void 0===o?void 0:null===(r=o.attributes)||void 0===r?void 0:r.url)&&void 0!==b?b:"https://www.mailmodo.com/static/images/og-image.png",width:"304",height:"176",layout:"responsive",alt:(0,g.Gj)(null!==(w=null===(l=e.seo)||void 0===l?void 0:null===(d=l.shareImage)||void 0===d?void 0:null===(_=d.image)||void 0===_?void 0:null===(u=_.data)||void 0===u?void 0:null===(m=u.attributes)||void 0===m?void 0:m.url)&&void 0!==w?w:"https://www.mailmodo.com/static/images/og-image.png")})}),(0,i.jsxs)("div",{className:f().card_matter,children:[(0,i.jsx)("div",{className:f().card_title,children:null!==(j=null===(h=e.seo)||void 0===h?void 0:h.title)&&void 0!==j?j:" "}),(0,i.jsxs)("div",{className:f().card_desc,children:[(0,i.jsxs)("div",{className:f().desc,children:[(0,i.jsx)("p",{className:f().challenge_title,children:"Challenge"}),(0,i.jsx)("p",{className:f().challenge_desc,children:null==e?void 0:null===(p=e.TLDRBox)||void 0===p?void 0:p.challenge})]}),(0,i.jsxs)("div",{className:f().desc,children:[(0,i.jsx)("p",{className:f().solution_title,children:"Solution"}),(0,i.jsx)("p",{className:f().solution_desc,children:null==e?void 0:null===(v=e.TLDRBox)||void 0===v?void 0:v.solution})]})]})]})]})})})},t)})})}),(0,i.jsx)("div",{ref:r,className:"layout-padding"})]})})},k=s(24041),N=s(74996),I=s.n(N),E=()=>{var e,t,s;let a=[{img:"https://res.cloudinary.com/mailmodo/image/upload/v1721020576/strapi/3_1_3e1f82b05a.png",text:"Consult an email expert",sub_text:"30-min free email consultation with an expert to revamp your email marketing.",linkText:"Book a time",url:"https://www.mailmodo.com/demo/"},{img:"https://res.cloudinary.com/mailmodo/image/upload/v1721020435/strapi/1_2_69505430ad.png",text:"Explore interactive email marketing with Mailmodo",sub_text:"Send forms, carts, calendars, games, and more within your emails to boost ROI.",linkText:"Try Mailmodo for free",url:"https://manage.mailmodo.com/auth/signup"},{img:"https://res.cloudinary.com/mailmodo/image/upload/v1721020576/strapi/2_1_27027d2b7d.png",text:"Get smarter with email resources",sub_text:"Free guides, ebooks, and other resources to master email marketing.",linkText:"Explore more resources",url:"/resources/"}],n="".concat((0,h.useRouter)().asPath);return(0,i.jsxs)("div",{className:I().highlight,children:[(0,i.jsx)("h4",{className:I().title,children:"What should you do next?"}),(0,i.jsx)("p",{className:I().sub_title,children:"You made it till the end! Here's what you can do next to grow your business:"}),null==a?void 0:a.map((a,o)=>(0,i.jsxs)("div",{className:I().maindiv,children:[(0,i.jsx)("div",{className:I().leftdiv,children:(0,i.jsx)(_(),{src:(0,w.Jn)(a.img),width:60,height:60,alt:(0,g.Gj)(null==a?void 0:a.img)})}),(0,i.jsxs)("div",{className:I().rightdiv,children:[(0,i.jsx)("h6",{className:I().h6,children:null!==(e=null==a?void 0:a.text)&&void 0!==e?e:""}),(0,i.jsx)("p",{className:I().desc,children:null!==(t=null==a?void 0:a.sub_text)&&void 0!==t?t:""}),(0,i.jsx)("div",{className:I().link,children:(0,i.jsx)("a",{prefetch:!1,href:"".concat((0,g.XE)(null!==(s=null==a?void 0:a.url)&&void 0!==s?s:"/","growth-cta",n)),children:(0,i.jsxs)("p",{className:I().body_3,children:[null==a?void 0:a.linkText," →"]})})})]})]},"GrowthCard_".concat(o)))]})},C=s(47084),S=s.n(C),B=s(77627),T=s.n(B),F=s(85518),L=()=>{let[e,t]=(0,a.useState)(null),s=()=>{let e=document.getElementById("case-studies-card-container");if(e){var s;let i=null===(s=e.getBoundingClientRect())||void 0===s?void 0:s.top;i>0&&i<150&&t(0)}};return(0,a.useEffect)(()=>{document.addEventListener("scroll",s)},[]),(0,i.jsxs)("div",{className:T().container,children:[(0,i.jsx)("div",{className:T().content,dangerouslySetInnerHTML:{__html:S()("## How to use these email marketing case studies to improve your email game\nA case study is no longer about how amazing a tool is but how others in a similar situation can solve a problem by following its example. Each email marketing case study on this page has been created keeping this philosophy in mind.\n\nThese clients trusted us with their email marketing challenges and triumphed with their unique success stories. We’ve documented their journey so that it becomes a playbook for others looking to transform their email marketing results.\n\n### Here’s what you’ll find in our case studies\n\n✅ Email marketing examples for every industry: Be it fintech, Saas, Edtech, or eCommerce, our clients belong to various industries, and their stories set email marketing standards amongst their contemporaries. So, dive in, find your peers, and learn how they solved their email marketing challenges.\xa0\n\n✅ Solutions for every possible email marketing problem: From boosting email deliverbaility, and increasing open rate to improving email engagement, each of our case studies address all common email marketing problems for marketers to get inspired and experiment with.\xa0\n\n✅ Complex processes simplified into actionable tasks: All our case studies summarize long-term email marketing strategies and processes suggested by our team that drove impactful results. We converted them into a step-by-step, playbook-like format so email marketers can easily find solutions.\xa0\n\nSo, if you’re tired of reading blogs that claim to solve email marketing problems but do nothing except share theories and concepts, we suggest going through our success stories and finding practical solutions to your challenges.\xa0\n\nThe best part? You can download the PDF or email it to your managers with a click.\n")}}),(0,i.jsx)("p",{className:T().gotoTop,onClick:()=>{let e=document.getElementById("case-studies-card-container");if(e){let t=F.nI?100:0,s=e.getBoundingClientRect().top,i=s+window.pageYOffset-t;window.scrollTo({top:i,behavior:"smooth"})}},children:"Ready? Start exploring the stories now ↑"})]})},R=e=>{let{allCardsData:t,totalNewsletters:s,initialPage:a,pageSize:n}=e,l="Email Marketing Case Studies and Playbooks to Mimic for High Impact",c="Learn case studies on how global brands use Mailmodo’s interactive email marketing to drive high conversions and impact";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o(),{children:(0,i.jsx)("style",{children:"body{font-family: Inter !important;}"})}),(0,i.jsx)(r.PB,{robotsProps:{maxImagePreview:"large"},title:l,description:c,canonical:"https://www.mailmodo.com/case-studies/",keywords:" ",openGraph:{url:"https://www.mailmodo.com/case-studies/",title:l,description:c,locale:"en_US",images:[{url:"https://www.mailmodo.com/static/images/og-image.png"}]},twitter:{handle:"@mailmodo",site:"twitter.com/mailmodo",cardType:"summary_large_image"}}),(0,i.jsx)(p,{}),(0,i.jsx)(j,{allCardsData:t,totalNewsletters:s,initialPage:a,pageSize:n}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(E,{}),(0,i.jsx)(L,{})]}),(0,i.jsx)(k.Z,{})]})},D=!0,G=e=>{let{allCardsData:t,totalNewsletters:s,initialPage:a,pageSize:n}=e;return(0,i.jsx)(R,{allCardsData:t,totalNewsletters:s,initialPage:a,pageSize:n})}},74996:function(e){e.exports={highlight:"styles_highlight__X_F6y",title:"styles_title__gAPF0",sub_title:"styles_sub_title__WodUW",maindiv:"styles_maindiv__KW_cJ",leftdiv:"styles_leftdiv__IN9Ty",rightdiv:"styles_rightdiv__edFpp",link:"styles_link__Q4Yf5",h6:"styles_h6__SS3iY",desc:"styles_desc__MrSBa",body_3:"styles_body_3__IwN_2",link_text:"styles_link_text__X9EsP"}},83966:function(e){e.exports={container:"styles_container__62_4_",label:"styles_label__QL9k4",textContent:"styles_textContent__pA0BM",title:"styles_title__hUuhu",description:"styles_description__Ny7cR",heroButtons:"styles_heroButtons__Jzn2p",secondaryButton:"styles_secondaryButton__8jt_j",avatar_container:"styles_avatar_container__moxIa",hrLine:"styles_hrLine__8vKaN"}},77627:function(e){e.exports={container:"styles_container__z65FI",gotoTop:"styles_gotoTop__1Irzh",content:"styles_content__kim_X","table-wrapper":"styles_table-wrapper__ToeeJ","table-of-content":"styles_table-of-content__s5WQn",quotes:"styles_quotes__KSzLJ"}},51577:function(e){e.exports={ant_custom_message:"case-studies_ant_custom_message__n9348",hero:"case-studies_hero__gpr4K",background_color_header:"case-studies_background_color_header__TNQge",hero_label:"case-studies_hero_label__Ly87T",hero_container_right:"case-studies_hero_container_right__JQ2Gx",gradient_img:"case-studies_gradient_img__iEvLl",hero_img:"case-studies_hero_img__cuU0I",heading:"case-studies_heading__jr8Nn",message:"case-studies_message__xTFUB",cta_btn:"case-studies_cta_btn__HotoN",cta_input:"case-studies_cta_input__LtxKU",honeypot:"case-studies_honeypot___1W31",cta:"case-studies_cta__hnION",features_container:"case-studies_features_container__VxG5r",demo_cta:"case-studies_demo_cta__3xrUT",cta_content_wrapper:"case-studies_cta_content_wrapper__G6K22",cta_button:"case-studies_cta_button___W7pu",cta_text:"case-studies_cta_text__K59mr",Cards:"case-studies_Cards__O2_f_",date_container:"case-studies_date_container__OXILf",cardContainer:"case-studies_cardContainer__93Qh8",card_item:"case-studies_card_item__WpGmq",card_matter:"case-studies_card_matter__vTNNJ",card_img:"case-studies_card_img__v5f_L",card_tag:"case-studies_card_tag__H93fb",card_title:"case-studies_card_title__Vu07l",card_desc:"case-studies_card_desc__t6nck",desc:"case-studies_desc__YozIu",challenge_title:"case-studies_challenge_title__GzveB",challenge_desc:"case-studies_challenge_desc__n5Xp3",solution_title:"case-studies_solution_title__m_iRI",solution_desc:"case-studies_solution_desc__yyfzd",features:"case-studies_features__Woo_9",card_h2:"case-studies_card_h2__s4oeA",card_p:"case-studies_card_p__cKZr5",section:"case-studies_section__YZFrc",desc_title:"case-studies_desc_title__UZE91",custom_li:"case-studies_custom_li__EWBcG",marker_img:"case-studies_marker_img___iyqT",image:"case-studies_image__kMCnF",Faq:"case-studies_Faq__x1wsD",accord_btn:"case-studies_accord_btn__psKDB",accord_card:"case-studies_accord_card__Ximim",EndBlock:"case-studies_EndBlock__ndFe8",hero_container:"case-studies_hero_container__yY_ai",hero_container_left:"case-studies_hero_container_left__OxIXq",button:"case-studies_button__A1ymt"}},42708:function(e,t,s){"use strict";s.d(t,{YD:function(){return c}});var i=s(67294),a=Object.defineProperty,n=new Map,o=new WeakMap,r=0,l=void 0;function c({threshold:e,delay:t,trackVisibility:s,rootMargin:a,root:c,triggerOnce:d,skip:_,initialInView:u,fallbackInView:m,onChange:h}={}){var g;let[p,v]=i.useState(null),f=i.useRef(),[x,y]=i.useState({inView:!!u,entry:void 0});f.current=h,i.useEffect(()=>{let i;if(!_&&p)return i=function(e,t,s={},i=l){if(void 0===window.IntersectionObserver&&void 0!==i){let a=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof s.threshold?s.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}let{id:a,observer:c,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var s;return`${t}_${"root"===t?(s=e.root)?(o.has(s)||(r+=1,o.set(s,r.toString())),o.get(s)):"0":e[t]}`}).toString(),s=n.get(t);if(!s){let i;let a=new Map,o=new IntersectionObserver(t=>{t.forEach(t=>{var s;let n=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=n),null==(s=a.get(t.target))||s.forEach(e=>{e(n,t)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),s={id:t,observer:o,elements:a},n.set(t,s)}return s}(s),_=d.get(e)||[];return d.has(e)||d.set(e,_),_.push(t),c.observe(e),function(){_.splice(_.indexOf(t),1),0===_.length&&(d.delete(e),c.unobserve(e)),0===d.size&&(c.disconnect(),n.delete(a))}}(p,(e,t)=>{y({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&d&&i&&(i(),i=void 0)},{root:c,rootMargin:a,threshold:e,trackVisibility:s,delay:t},m),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,p,c,a,d,_,s,m,t]);let b=null==(g=x.entry)?void 0:g.target,w=i.useRef();p||!b||d||_||w.current===b||(w.current=b,y({inView:!!u,entry:void 0}));let j=[v,x.inView,x.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}i.Component}},function(e){e.O(0,[7084,4041,9774,2888,179],function(){return e(e.s=54423)}),_N_E=e.O()}]);