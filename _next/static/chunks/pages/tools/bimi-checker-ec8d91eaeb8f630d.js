!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5d98f568-1908-4120-8d0e-bf701b65925c",e._sentryDebugIdIdentifier="sentry-dbid-5d98f568-1908-4120-8d0e-bf701b65925c")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5481],{2734:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}}),i(67294);var n=i(96682),o=i(90247),a=i(10606);function r(){let e=(0,n.Z)(o.Z);return e[a.Z]||e}},51705:function(e,t,i){"use strict";var n=i(30067);t.Z=n.Z},7960:function(e,t,i){"use strict";function n(e,t){"function"==typeof e?e(t):e&&(e.current=t)}i.d(t,{Z:function(){return n}})},30067:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var n=i(67294),o=i(7960);function a(...e){return n.useMemo(()=>e.every(e=>null==e)?null:t=>{e.forEach(e=>{(0,o.Z)(e,t)})},e)}},57579:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var n,o=i(67294);let a=0,r=(n||(n=i.t(o,2)))["useId".toString()];function l(e){if(void 0!==r){let t=r();return null!=e?e:t}return function(e){let[t,i]=o.useState(e),n=e||t;return o.useEffect(()=>{null==t&&i(`mui-${a+=1}`)},[t]),n}(e)}},24103:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/bimi-checker",function(){return i(65008)}])},16499:function(e,t,i){"use strict";var n=i(85893),o=i(9008),a=i.n(o);t.Z=e=>{var t;let{title:i,description:o,subCategory:r,url:l,rating:s}=e,d=isNaN((null==s?void 0:s.totalSum)/(null==s?void 0:s.totalCount))?5:(null==s?void 0:s.totalSum)/(null==s?void 0:s.totalCount),c=null!==(t=null==s?void 0:s.totalCount)&&void 0!==t?t:1,u={"@context":"https://schema.org","@type":"SoftwareApplication",name:null!=i?i:"",description:null!=o?o:"",url:null!=l?l:"",applicationCategory:"Business, Productivity",applicationSubCategory:[null!=r?r:""],author:{"@type":"Organization",name:"Mailmodo",url:"https://www.mailmodo.com/",logo:"https://www.mailmodo.com/static/images/logo/logo-full.svg",description:"Mailmodo is a complete email marketing platform that helps email marketers create, automate, and send interactive emails to drive growth and engagement."},aggregateRating:{"@type":"AggregateRating",ratingValue:d.toFixed(2),reviewCount:c,bestRating:"5",worstRating:"1"},offers:{"@type":"Offer",price:"0",priceCurrency:"USD",category:"free"}};return(0,n.jsx)(a(),{children:(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(u)}})})}},83494:function(e,t,i){"use strict";var n=i(85893);i(67294);var o=i(9008),a=i.n(o),r=i(85318);t.Z=e=>{var t,i;let{title:o,description:l,ogImg:s,datePublished:d,dateModified:c}=e,u=(null!==(t=null==o?void 0:o.length)&&void 0!==t?t:1)%30,m=(null!==(i=null==l?void 0:l.length)&&void 0!==i?i:1)%30;m<u&&(m=u);let _=m?"".concat(m,"-03-2023"):"16-03-2023",h={"@context":"https://schema.org","@type":"WebPage",headline:null!=o?o:"",description:null!=l?l:"",image:null!=s?s:"https://www.mailmodo.com/static/images/og-image.png",datePublished:(0,r.Uk)(null!=d?d:u?"".concat(u,"-03-2023"):"08-09-2022"),dateModified:(0,r.Uk)(null!=c?c:_),publisher:{"@type":"Organization",name:"Mailmodo",url:"https://www.mailmodo.com/",sameAs:["https://www.linkedin.com/company/mailmodo/","https://www.facebook.com/mailmodo/","https://www.instagram.com/mailmodohq/","https://www.youtube.com/@mailmodo"],logo:"https://www.mailmodo.com/static/images/logo/logo-full.svg",description:"Mailmodo is a complete email marketing platform that helps email marketers to create and send interactive emails to drive growth and engagement.",address:{"@type":"PostalAddress",addressLocality:"Lewes",addressRegion:"DE",postalCode:"19958",streetAddress:"Mailmodo Technologies Inc. 16192, Coastal Highway",addressCountry:{"@type":"Country",name:"US"}},contactPoint:{"@type":"ContactPoint",email:"enquiries@mailmodo.com",contactType:"customer service"}}};return(0,n.jsx)(a(),{children:(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(h)}})})}},96734:function(e,t,i){"use strict";var n=i(85893),o=i(67294),a=i(11374),r=i.n(a),l=i(25675),s=i.n(l),d=i(47084),c=i.n(d),u=i(25709);t.Z=e=>{let{content:t,showReadMore:i=!1,showBorderTop:a=!0}=e,[l,d]=(0,o.useState)(i);return(0,n.jsxs)("div",{className:"".concat(r().main),children:[a&&(0,n.jsx)("div",{className:r().hrLine}),(0,n.jsx)("article",{className:r().content,"data-active":l,children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:c()(t)}})}),!l&&(0,n.jsxs)("div",{className:r().btn_container,children:[(0,n.jsx)("button",{className:r().btn,onClick:()=>d(!l),children:"Read More"}),(0,n.jsx)(s(),{src:(0,u.Jn)("https://res.cloudinary.com/mailmodo/image/upload/v1676881326/strapi/Caret_Down_0c29d24bf6.png"),width:24,height:24,alt:"arrowDown",onClick:()=>d(!l),className:r().arrow})]})]})}},44332:function(e,t,i){"use strict";var n=i(85893),o=i(6154),a=i(44612),r=i(67294),l=i(9246),s=i.n(l);t.Z=e=>{let{rating:t,productId:i,name:l,isCalculatorPage:d=!1}=e,[c,u]=(0,r.useState)(!1),[m,_]=(0,r.useState)((null==t?void 0:t.totalSum)?(null==t?void 0:t.totalSum)/(null==t?void 0:t.totalCount):5);return(0,r.useEffect)(()=>{localStorage.getItem(i)&&u(!0)},[]),(0,n.jsx)("div",{className:"".concat(s().container," ").concat(!d&&"container"),"data-is-calculator-page":d,children:(0,n.jsx)("div",{className:s().ratings_container,children:(0,n.jsxs)("div",{className:s().rating_stars,children:[(0,n.jsxs)("div",{className:s().rate_desc,children:["Rate ",d?"this calculator":l]}),(0,n.jsxs)("div",{className:s().rateStarsContaine,children:[(0,n.jsx)("div",{className:s().rate_stars,children:(0,n.jsx)(a.Z,{name:"half-rating",precision:.5,readOnly:c,onChange:e=>{let{target:n}=e,a=Number(n.value),r=(null==t?void 0:t.totalSum)?(Number(null==t?void 0:t.totalSum)+a)/(Number(null==t?void 0:t.totalCount)+1):a;_(r),localStorage.setItem(i,r),u(!0),o.Z.post("/api/tools/add-rating",{rating:a,productId:i}).then(()=>{}).catch(e=>{console.log("Something went wrong",e)})},value:m.toFixed(2),style:{fontSize:"22.4px",color:"#F1A246",marginBottom:"-15px",lineHeight:"0",height:"31.5px"}})}),(0,n.jsx)("div",{className:s().rate_value,children:m.toFixed(2)})]})]})})})}},65008:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return M},default:function(){return N}});var n=i(85893),o=i(6154),a=i(67294),r=i(57191),l=i.n(r),s=i(9873),d=i.n(s);function c(){return(0,n.jsxs)("div",{className:d().loader_container,children:[(0,n.jsxs)("div",{className:d().loader,children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]}),"Analyzing bimi record, please wait..."]})}function u(e){let{handleBimiCheck:t,loadingPrompts:i,title:o,description:r}=e,[s,d]=(0,a.useState)(""),[u,m]=(0,a.useState)(!1),[_,h]=(0,a.useState)("Minimum 3 characters"),g=e=>e.includes("@")?e.split("@")[1]:e,v=async e=>{if(e.preventDefault(),u||s.length<3||s.length>200){s.length<3?(m(!0),h("Minimum 3 characters")):s.length>200&&(m(!0),h("Characters should be less than 200"));return}await t(g(s))};return(0,n.jsxs)("div",{className:"container ".concat(l().hero),children:[(0,n.jsxs)("div",{className:l().content,children:[(0,n.jsx)("h1",{className:l().title,children:null!=o?o:"BIMI Record Checker and Lookup"}),r?(0,n.jsx)("p",{className:l().second_title,children:r}):(0,n.jsxs)("p",{className:l().second_title,children:["Add your ",(0,n.jsx)("span",{className:l().highlighted_text,children:"domain"})," to check BIMI Records and verify your",(0,n.jsx)("span",{className:l().highlighted_text,children:" logo displays "}),"correctly in the inboxes."]})]}),(0,n.jsx)("div",{className:l().user_form,children:(0,n.jsxs)("form",{onSubmit:v,children:[(0,n.jsxs)("div",{className:l().form_section_1,children:[(0,n.jsx)("label",{htmlFor:"domain",children:"Insert the domain you would like to analyze"}),(0,n.jsx)("div",{className:l().textarea_section,"data-error":u,"data-content":_,children:(0,n.jsx)("input",{maxLength:201,name:"domain",placeholder:"Enter Domain Here",value:s,onChange:e=>{let t=e.target.value;d(t),t.length<3?(m(!0),h("Minimum 3 characters")):t.length>200?(m(!0),h("Characters should be less than 200")):(m(!1),h(""))},className:u?l().textarea_error:l().textarea})})]}),(0,n.jsx)("button",{type:"submit",className:l().primary_btn,disabled:i,children:"Check BIMI"})]})}),i&&(0,n.jsx)(c,{})]})}var m=i(24041),_=i(96734);function h(e){var t,i,o;let{GenericMdBox:a,FAQs_DATA:r,footer:l}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.Z,{content:null!==(o=null==a?void 0:a.trim())&&void 0!==o?o:'## About BIMI:\n\nBrand Indicators for Message Identification (BIMI) is an email authentication standard that allows organizations to display their logo next to their emails in recipients\' inboxes. By implementing BIMI, organizations enhance brand visibility and trust, ensuring recipients can easily identify legitimate emails. To use BIMI, a domain must have proper email authentication (DMARC, DKIM, SPF) in place, and the logo must be hosted in a specific SVG format, often accompanied by a Verified Mark Certificate (VMC).\n\nYou can learn more about BIMI and about setting it up in this detailed guide-  [The BIMI Guide You Need as An Email Marketer](https://www.mailmodo.com/guides/bimi/)\n\n  \n\n## How to use a BIMI checker?\n\n-   **Enter Your Domain**: Go to Mailmodo’s BIMI checker and input the domain name you want to verify.\n    \n-   **Click on Check**: Start the verification by clicking the "Check" button.\n    \n-   **Review the Results**: The checker will show if your BIMI record is present, correctly configured, and whether your SVG logo meets BIMI standards.\n',showReadMore:!0}),(0,n.jsx)(m.Z,{title:null==l?void 0:null===(t=l.title)||void 0===t?void 0:t.trim(),subTitle:null==l?void 0:null===(i=l.subTitle)||void 0===i?void 0:i.trim()})]})}let g={v:"This is a required field and must be set to BIMI1. It specifies the version of the BIMI policy and should always be the first value in a BIMI record.",l:"This is the URL of the brand logo in SVG format. The logo must meet specific BIMI requirements.",a:"This is an optional field that specifies the URL of the authority that verifies the logo, such as a Verified Mark Certificate (VMC)."},v={v:"v (Version)",l:"l (Logo URL)",a:"a (Authority URL)"};var p=i(27005),f=i.n(p),y=e=>{let{bimiData:t}=e;if(!t)return null;let i=(null==t?void 0:t.errors)?null==t?void 0:t.errors:[];return(0,n.jsxs)("div",{className:f().container,children:[(0,n.jsx)("h2",{className:f().title,children:"BIMI Details"}),(null==t?void 0:t.bimiRecord)&&(0,n.jsx)("div",{className:f().record,children:t.bimiRecord}),(null==t?void 0:t.bimiParts)&&(0,n.jsx)("div",{className:f().tableContainer,children:(0,n.jsxs)("table",{className:f().table,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("th",{children:"Value"}),(0,n.jsx)("th",{children:"What this is?"})]})}),(0,n.jsx)("tbody",{children:Object.entries(t.bimiParts).map((e,t)=>{let[i,o]=e;return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:v[i]||i}),(0,n.jsx)("td",{"data-table-value":!0,children:o}),(0,n.jsx)("td",{children:g[i]||"No description available"})]},t)})})]})}),i&&i.length>0&&(0,n.jsx)("div",{className:f().failedChecks,children:(0,n.jsx)("ul",{children:i.map((e,t)=>(0,n.jsx)("li",{children:null==e?void 0:e.message},t))})})]})},x=i(4298),b=i.n(x),w=i(2962),j=i(85318);i(16499),i(44332);var I=i(83494),M=!0,N=e=>{var t,i,r,l,s,d,c,m,_,g,v,p,f,x,M,N;let{slug:C,PageData:k,interLinkingSubCategory:S}=e,[B,T]=(0,a.useState)(),[L,R]=(0,a.useState)(!1),Z=null!==(f=null==k?void 0:null===(t=k.seo)||void 0===t?void 0:t.title)&&void 0!==f?f:"BIMI Record Checker and Lookup Tool",A=null!==(x=null==k?void 0:null===(i=k.seo)||void 0===i?void 0:i.description)&&void 0!==x?x:"Use BIMI record checker and lookup tool that verifies BIMI setup, ensuring your brand's logo displays correctly in inboxes and improves brand recognition with emails.",D=null!==(M=null==k?void 0:null===(r=k.seo)||void 0===r?void 0:null===(l=r.shareImage)||void 0===l?void 0:null===(s=l.image)||void 0===s?void 0:null===(d=s.data)||void 0===d?void 0:null===(c=d.attributes)||void 0===c?void 0:c.url)&&void 0!==M?M:"https://www.mailmodo.com/api/og/?ogImg=".concat("https://res.cloudinary.com/mailmodo/image/upload/v1725873193/strapi/Tools_thumb_2_0e2d6da5ed.svg","&color=").concat(encodeURIComponent("#fff"),"&top=200px&width=650px&title=").concat(encodeURI(Z)),P="https://www.mailmodo.com/tools/".concat(C,"/");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w.PB,{robotsProps:{maxImagePreview:"large"},title:Z,description:A,canonical:P,keywords:"bimi, bimi checker, bimi record, bimi policy, bimi analyzer",openGraph:{url:P,title:Z,description:A,locale:"en_US",images:[{url:D}]},twitter:{handle:"@mailmodo",site:"twitter.com/mailmodo",cardType:"summary_large_image"}}),(0,n.jsx)(w.dX,{url:P,title:Z,images:["https://www.mailmodo.com/static/images/logo/logo-full.svg"],authorName:"Mailmodo",publisherName:"Mailmodo",publisherLogo:"https://www.mailmodo.com/static/images/logo/logo-full.svg",description:A}),(0,n.jsx)(I.Z,{title:Z,description:A,ogImg:D,datePublished:null==k?void 0:k.publishedAt,dateModified:null==k?void 0:k.updatedAt}),(0,n.jsx)(b(),{dangerouslySetInnerHTML:{__html:"function insertEventToDataLayer(data){dataLayer.push({'event': 'check_bimi', 'data': data});console.log(dataLayer)}"}}),(0,n.jsxs)("div",{children:[(0,n.jsx)(u,{handleBimiCheck:e=>{T(null),R(!0),insertEventToDataLayer({domain:e}),o.Z.post("https://eoomjz3cszg5453.m.pipedream.net",{domain:(0,j._Y)(e)},{headers:{"Content-Type":"application/json"}}).then(e=>{T(e.data)}).catch(e=>{console.error("Error analyzing bimi records:",e),T(e.response.data)}).finally(()=>{R(!1)})},loadingPrompts:L,description:null==k?void 0:null===(m=k.description)||void 0===m?void 0:m.trim(),title:null==k?void 0:null===(_=k.title)||void 0===_?void 0:_.trim()}),(0,n.jsx)(y,{bimiData:B}),(0,n.jsx)(h,{GenericMdBox:null==k?void 0:null===(g=k.GenericMdBox)||void 0===g?void 0:null===(v=g.content)||void 0===v?void 0:v.trim(),FAQs_DATA:null==k?void 0:null===(p=k.faqs)||void 0===p?void 0:p.faqs,footer:null!==(N=null==k?void 0:k.footer)&&void 0!==N?N:{}})]})]})}},11374:function(e){e.exports={main:"styles_main__Jn2Al",hrLine:"styles_hrLine__HzH5I",content:"styles_content__ojWKO",custom_blockquote:"styles_custom_blockquote__fU32x",featured_image:"styles_featured_image__ZYl9L","table-wrapper":"styles_table-wrapper__VaMLM","table-of-content":"styles_table-of-content__GFE60",quotes:"styles_quotes__kqX5H",btn_container:"styles_btn_container__q5N4G",btn:"styles_btn__iIzrH",arrow:"styles_arrow__oDB9p"}},9246:function(e){e.exports={container:"styles_container__1_nZG",ratings_container:"styles_ratings_container__BWLiF",rating_stars:"styles_rating_stars__vZ00I",rate_desc:"styles_rate_desc__SPa4j",rateStarsContaine:"styles_rateStarsContaine__epwIE",rate_value:"styles_rate_value__afL2J",rating_count:"styles_rating_count__GlvBd",rating_value:"styles_rating_value__IxnIh",unselected_stars:"styles_unselected_stars__JU1jR"}},9873:function(e){e.exports={loader_container:"style_loader_container__WkWzO",loader:"style_loader__HsPxA","bouncing-loader":"style_bouncing-loader__zBtMG"}},27005:function(e){e.exports={container:"features_container__5A915",title:"features_title__s9Sxb",record:"features_record__xB7sM",tableContainer:"features_tableContainer__u6vmm",table:"features_table__NzTiC",failedChecks:"features_failedChecks__8K4IS"}},57191:function(e){e.exports={hero:"hero_hero__TmWvn",content:"hero_content__COLAM",title:"hero_title__onXwz",second_title:"hero_second_title__qiiLY",highlighted_text:"hero_highlighted_text__VnTij",user_form:"hero_user_form__j_zuB",form_section_1:"hero_form_section_1__45B3c",textarea_section:"hero_textarea_section__aTXct",textarea_error:"hero_textarea_error__QujQX",form_section_2:"hero_form_section_2__KCMdt",flex:"hero_flex__M7_dg",form_field_section:"hero_form_field_section__c9c4Y",primary_btn:"hero_primary_btn__qBg_j",form_field:"hero_form_field__PwdXK",form_section_3:"hero_form_section_3__gpjDm",filters:"hero_filters__CSTsa",advanced_filters:"hero_advanced_filters__g_b2A",more_filter_title:"hero_more_filter_title__2PTva"}}},function(e){e.O(0,[7084,4612,4041,2838,9774,2888,179],function(){return e(e.s=24103)}),_N_E=e.O()}]);