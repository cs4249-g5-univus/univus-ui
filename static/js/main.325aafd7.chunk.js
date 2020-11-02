(this["webpackJsonpunivus-ui"]=this["webpackJsonpunivus-ui"]||[]).push([[0],{87:function(e,t,a){},88:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var c=a(2),i=a(0),n=a.n(i),s=a(12),r=a.n(s),l=(a(87),a(88),a(148)),o=a(10),j=a(130),b=a(96),d=a(151),x=a(154),h=a(133),u=a(127),m=a(69),f=Object(u.a)({root:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",margin:"1rem 1rem"},label:{color:"#ffffff",margin:"0.5rem 0",maxWidth:"64px",lineHeight:"1",fontSize:"12px",fontWeight:"700"},image:{objectFit:"contain",width:"56px",height:"56px"}}),O=function(e){var t=e.label,a=e.imgSrc,i=e.onClick,n=f();return Object(c.jsxs)("div",{className:n.root,children:[Object(c.jsx)(m.a,{onClick:function(){return i()},children:Object(c.jsx)(d.a,{borderRadius:12,bgcolor:"#ffffff",width:64,height:64,p:.5,children:Object(c.jsx)("img",{className:n.image,src:"/univus-ui"+a,alt:t})})}),Object(c.jsx)(b.a,{className:n.label,children:t})]})},g=Object(u.a)({root:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",margin:"1rem 0.5rem"},label:{color:"#ffffff",margin:"0.5rem 0",maxWidth:"64px",lineHeight:"1",fontSize:"12px",fontWeight:"700"},image:{objectFit:"contain",width:"56px",height:"56px"}}),p=function(e){var t=e.label,a=e.imgSrc,i=g();return Object(c.jsxs)("div",{className:i.root,children:[Object(c.jsx)(d.a,{borderRadius:12,bgcolor:"#ffffff",width:64,height:64,p:.5,children:Object(c.jsx)("img",{className:i.image,src:"/univus-ui"+a,alt:t})}),Object(c.jsx)("p",{className:i.label,children:t})]})},v=a(13),y=Object(u.a)({root:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"},label:{color:"#fffff"}}),N=function(){var e=y(),t=Object(v.e)();return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(p,{label:"Exam Results",imgSrc:"/images/baseButton-results.jpg"}),Object(c.jsx)(O,{label:"Health Declaration",imgSrc:"/images/baseButton-declare.jpg",onClick:function(){t.push("/declaration-a")}}),Object(c.jsx)(p,{label:"NUSafe",imgSrc:"/images/baseButton-nusafe.jpg"})]})},C=Object(i.createContext)(""),w=Object(i.createContext)((function(){return null})),S=function(e){var t=e.children,a=Object(i.useState)(""),n=Object(o.a)(a,2),s=n[0],r=n[1];return Object(c.jsx)(w.Provider,{value:r,children:Object(c.jsx)(C.Provider,{value:s,children:t})})},k=function(){return Object(i.useContext)(C)},D=Object(u.a)({root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#ffffff",height:"680px",overflowY:"auto",padding:"2rem"},submit:{backgroundColor:"#002984",color:"#ffffff"}}),I=function(){var e=D(),t=Object(i.useContext)(w),a=Object(i.useState)(""),s=Object(o.a)(a,2),r=s[0],l=s[1],u=Object(v.e)();return Object(c.jsx)(n.a.Fragment,{children:Object(c.jsxs)(j.a,{maxWidth:"xs",className:e.root,disableGutters:!0,component:"div",children:[Object(c.jsx)(b.a,{children:"Welcome! Enter your assigned participant ID to begin the UI testing."}),Object(c.jsx)(d.a,{height:32}),Object(c.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(c.jsx)(x.a,{required:!0,id:"participant-id",label:"Enter your ID",variant:"outlined",value:r,onChange:function(e){return l(e.target.value)}})}),Object(c.jsx)(d.a,{height:32}),Object(c.jsx)(h.a,{variant:"contained",disableElevation:!0,className:e.submit,onClick:function(){t(r),u.push("/default-home-a")},children:"Submit"})]})})},W=a(134),E=a(135),F=a(136),H=a(137),z=a(138),M=function(){var e=k();return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsxs)(j.a,{maxWidth:"xs",style:{backgroundColor:"#ffffff",height:"600px",overflowY:"auto"},disableGutters:!0,component:"div",children:[Object(c.jsx)(j.a,{style:{backgroundColor:"#ffffff",height:"80px",padding:"40px 24px 0"},children:Object(c.jsxs)(b.a,{align:"left",children:["Hi Participant ",e,","]})}),Object(c.jsx)(j.a,{style:{backgroundColor:"#002984",height:"132px",borderRadius:"48px 0 0 0"},children:Object(c.jsx)(N,{})}),Object(c.jsx)(j.a,{style:{backgroundColor:"#002984"},disableGutters:!0,children:Object(c.jsxs)(j.a,{style:{backgroundColor:"#ffffff",minHeight:"120px",borderRadius:"48px 0 0 0"},children:[Object(c.jsx)(b.a,{align:"left",style:{color:"#002984",fontWeight:"900",fontSize:"22px",padding:"1rem"},children:"NEWS"}),Object(c.jsx)(j.a,{style:{height:"300px",width:"80%",backgroundColor:"#bdbdbd",display:"flex",alignItems:"center"},children:Object(c.jsx)(b.a,{align:"center",style:{color:"#ffffff",fontSize:"22px",padding:"1rem"},children:"This section is irrevelant to the UI testing."})})]})})]}),Object(c.jsx)(j.a,{maxWidth:"xs",disableGutters:!0,component:"div",children:Object(c.jsxs)(W.a,{style:{bottom:"0",backgroundColor:"#fafafa"},value:0,showLabels:!0,children:[Object(c.jsx)(E.a,{label:"Home",icon:Object(c.jsx)(F.a,{})}),Object(c.jsx)(E.a,{label:"Discover",icon:Object(c.jsx)(H.a,{})}),Object(c.jsx)(E.a,{label:"Settings",icon:Object(c.jsx)(z.a,{})})]})})]})},G=Object(u.a)({root:{width:"45%",margin:"2.5%",height:"120px",position:"relative"},box:{width:"100%",height:"100%",padding:"1rem"},label:{lineHeight:"1",fontWeight:"700",position:"absolute",bottom:16}}),P=function(e){var t=e.color,a=e.label,i=e.onClick,n=G();return Object(c.jsx)(m.a,{onClick:function(){return i()},className:n.root,children:Object(c.jsx)(d.a,{borderRadius:8,bgcolor:t,p:2,className:n.box,children:Object(c.jsx)(b.a,{align:"left",className:n.label,children:a})})})},R=Object(u.a)({root:{width:"45%",margin:"2.5%",height:"120px",position:"relative"},label:{lineHeight:"1",fontWeight:"700",position:"absolute",bottom:16}}),q=function(e){var t=e.color,a=e.label,i=(e.imgSrc,R());return Object(c.jsx)(d.a,{borderRadius:8,bgcolor:t,p:2,className:i.root,children:Object(c.jsx)(b.a,{align:"left",className:i.label,children:a})})},A=Object(u.a)({root:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",flexWrap:"wrap"},label:{color:"#fffff"}}),Y=function(){var e=A(),t=Object(v.e)();return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(q,{label:"Exam Results",color:"#e65100"}),Object(c.jsx)(P,{label:"Health Declaration",color:"#ffc107",onClick:function(){return t.push("/declaration-b")}}),Object(c.jsx)(q,{label:"NUSafe",color:"#00bcd4"})]})},L=function(){var e=k;return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsxs)(j.a,{maxWidth:"xs",style:{backgroundColor:"#ffffff",height:"600px",overflowY:"auto"},disableGutters:!0,component:"div",children:[Object(c.jsx)(j.a,{style:{backgroundColor:"#ffffff",height:"80px",padding:"40px 24px 0"},children:Object(c.jsxs)(b.a,{align:"left",children:["Hi Participant ",e,","]})}),Object(c.jsx)(j.a,{style:{backgroundColor:"#002984",minHeight:"132px",borderRadius:"48px 0 0 0",padding:"1rem 1rem"},children:Object(c.jsx)(Y,{})}),Object(c.jsx)(j.a,{style:{backgroundColor:"#002984"},disableGutters:!0,children:Object(c.jsxs)(j.a,{style:{backgroundColor:"#ffffff",minHeight:"120px",borderRadius:"48px 0 0 0"},children:[Object(c.jsx)(b.a,{align:"left",style:{color:"#002984",fontWeight:"900",fontSize:"22px",padding:"1rem"},children:"NEWS"}),Object(c.jsx)(j.a,{style:{height:"300px",width:"80%",backgroundColor:"#bdbdbd",display:"flex",alignItems:"center"},children:Object(c.jsx)(b.a,{align:"center",style:{color:"#ffffff",fontSize:"22px",padding:"1rem"},children:"This section is irrevelant to the UI testing."})})]})})]}),Object(c.jsx)(j.a,{maxWidth:"xs",disableGutters:!0,component:"div",children:Object(c.jsxs)(W.a,{style:{bottom:"0",backgroundColor:"#fafafa"},value:0,showLabels:!0,children:[Object(c.jsx)(E.a,{label:"Home",icon:Object(c.jsx)(F.a,{})}),Object(c.jsx)(E.a,{label:"Discover",icon:Object(c.jsx)(H.a,{})}),Object(c.jsx)(E.a,{label:"Settings",icon:Object(c.jsx)(z.a,{})})]})})]})},B=a(46),T=a(143),U=a(144),V=a(145),J=a(146),Q=a(147),K=a(139),X=a(132),Z=a(150),$=a(157),_=a(153),ee=a(141),te=a(152),ae=a(97),ce=a(158),ie=a(149),ne=a(140),se=a(142),re=Object(u.a)({root:{padding:"1rem 0"},icon:{width:"100%",height:"auto",objectFit:"contain"},padded:{padding:"0 1.5rem"},row:{display:"flex",flexDirection:"row",alignItems:"center"},question:{flex:5},disclaimer:{flex:1},tempValue:{flex:1,margin:"0 2rem 0 3rem"},mic:{flex:1,margin:"0 2rem"},margins:{margin:"1rem 0"},swipe:{width:"48px",height:"auto"},button:{backgroundColor:"#002984",color:"#ffffff"},centered:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}),le=function(){var e=re(),t=Object(ie.a)(new Date,"dd/MM/yyyy, EEEE"),a=Object(i.useState)(""),s=Object(o.a)(a,2),r=s[0],l=s[1],j=Object(i.useState)(""),x=Object(o.a)(j,2),u=x[0],m=x[1],f=Object(i.useState)(""),O=Object(o.a)(f,2),g=O[0],p=O[1],v=Object(i.useState)(""),y=Object(o.a)(v,2),N=y[0],C=y[1];return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)(b.a,{align:"left",children:"I declare that the following information is correct and accurate."}),Object(c.jsxs)(K.a,{container:!0,className:e.root,children:[Object(c.jsxs)(K.a,{item:!0,xs:3,children:[Object(c.jsx)("img",{className:e.icon,alt:"calendar",src:"/univus-ui/images/icon-calendar.svg"}),Object(c.jsx)(d.a,{height:100}),Object(c.jsx)("img",{className:e.icon,alt:"calendar",src:"/univus-ui/images/icon-person.svg"}),Object(c.jsx)(d.a,{height:160}),Object(c.jsx)("img",{className:e.icon,alt:"calendar",src:"/univus-ui/images/icon-thermometer.svg"})]}),Object(c.jsxs)(K.a,{item:!0,xs:9,className:e.padded,children:[Object(c.jsx)(b.a,{variant:"body2",children:"Date:"}),Object(c.jsx)(b.a,{variant:"body2",children:t}),Object(c.jsx)(X.a,{children:Object(c.jsxs)(Z.a,{value:r,onChange:function(e){return l(e.target.value)},children:[Object(c.jsx)($.a,{value:"AM",children:"AM"}),Object(c.jsx)($.a,{value:"PM",children:"PM"})]})}),Object(c.jsx)(d.a,{height:32}),Object(c.jsxs)("div",{className:e.row,children:[Object(c.jsx)(b.a,{variant:"body2",align:"left",className:e.question,children:"Do you have any COVID-19 symptoms that you recently acquired?"}),Object(c.jsx)(ne.a,{className:e.disclaimer})]}),Object(c.jsx)(d.a,{height:16}),Object(c.jsx)(X.a,{component:"fieldset",children:Object(c.jsxs)(_.a,{name:"symptoms",className:e.row,value:u,onChange:function(e){return m(e.target.value)},children:[Object(c.jsx)(ee.a,{value:"no",control:Object(c.jsx)(te.a,{size:"small",color:"primary"}),label:"No"}),Object(c.jsx)(ee.a,{value:"yes",control:Object(c.jsx)(te.a,{size:"small",color:"primary"}),label:"Yes"})]})}),Object(c.jsx)(d.a,{height:32}),Object(c.jsx)("div",{className:e.row,children:Object(c.jsx)(b.a,{variant:"body2",align:"left",className:e.question,children:"Do you have anyone in the same household having fever, and/or showing the above stated symptoms?"})}),Object(c.jsx)(d.a,{height:16}),Object(c.jsx)(X.a,{component:"fieldset",children:Object(c.jsxs)(_.a,{name:"symptoms",className:e.row,value:g,onChange:function(e){return p(e.target.value)},children:[Object(c.jsx)(ee.a,{value:"no",control:Object(c.jsx)(te.a,{size:"small",color:"primary"}),label:"No"}),Object(c.jsx)(ee.a,{value:"yes",control:Object(c.jsx)(te.a,{size:"small",color:"primary"}),label:"Yes"})]})}),Object(c.jsx)(d.a,{height:32}),Object(c.jsx)(b.a,{variant:"body2",children:"My temperature reading is"}),Object(c.jsxs)("div",{className:e.row+" "+e.margins,children:[Object(c.jsx)(ae.a,{className:e.tempValue,value:"number"===typeof N?Number(N).toFixed(1):""}),Object(c.jsx)(se.a,{className:e.mic})]}),Object(c.jsx)(ce.a,{value:"number"===typeof N?Number(N).toFixed(1):36.5,onChange:function(e,t){return C(t)},min:35,max:40,step:.1,color:"number"===typeof N&&N>37.5?"secondary":"primary"}),Object(c.jsx)(d.a,{height:8}),Object(c.jsx)("img",{className:e.swipe,alt:"slider",src:"/univus-ui/images/icon-swipe.svg"}),Object(c.jsx)(d.a,{height:16})]}),Object(c.jsx)("div",{className:e.centered,children:Object(c.jsx)(h.a,{variant:"contained",disableElevation:!0,className:e.button,children:"Submit"})})]})]})},oe=Object(u.a)({header:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",height:"48px"},welcome:{color:"#002984",fontWeight:"900",fontSize:"22px",padding:"1rem"},card:{margin:"0 1rem 1rem",minHeight:"400px"}}),je=function(){var e=oe(),t=k();return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsxs)(j.a,{maxWidth:"xs",style:{backgroundColor:"#fdfdfd",height:"600px",overflowY:"auto"},disableGutters:!0,component:"div",children:[Object(c.jsxs)(j.a,{maxWidth:"xs",className:e.header,disableGutters:!0,children:[Object(c.jsx)(d.a,{flex:1,bgcolor:"#e65100",height:1}),Object(c.jsx)(d.a,{flex:3,bgcolor:"#ffc107",height:1}),Object(c.jsx)(d.a,{flex:1,bgcolor:"#00bcd4",height:1})]}),Object(c.jsxs)(j.a,{disableGutters:!0,children:[Object(c.jsxs)(b.a,{align:"left",className:e.welcome,children:["Hi Participant ",t]}),Object(c.jsx)(T.a,{className:e.card,children:Object(c.jsx)(U.a,{children:Object(c.jsx)(le,{})})})]})]}),Object(c.jsx)(j.a,{maxWidth:"xs",disableGutters:!0,component:"div",children:Object(c.jsxs)(W.a,{style:{bottom:"0",backgroundColor:"#fafafa"},value:0,showLabels:!0,children:[Object(c.jsx)(E.a,{label:"Declare",icon:Object(c.jsx)(V.a,{})}),Object(c.jsx)(E.a,{label:"History",icon:Object(c.jsx)(J.a,{})}),Object(c.jsx)(E.a,{label:"FAQ",icon:Object(c.jsx)(Q.a,{})}),Object(c.jsx)(E.a,{label:"Settings",icon:Object(c.jsx)(z.a,{})})]})})]})},be=a(20),de=a(156),xe=a(67),he=Object(u.a)({root:{padding:"1rem 0"},icon:{width:"100%",height:"auto",objectFit:"contain"},padded:{padding:"0 1.5rem"},row:{display:"flex",flexDirection:"row",alignItems:"center"},question:{flex:5},disclaimer:{flex:1},margins:{margin:"1rem 0"},submit:{backgroundColor:"#002984",color:"#ffffff"},centered:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},button:{margin:"1rem 0.25rem 0"},tempInput:{width:"120px"}}),ue=[].concat(Object(be.a)(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Array(Math.ceil((t-e)/a)).fill(e).map((function(e,t){return e+t*a}))}(35,40,.1)),[40]).map((function(e){return Object(c.jsx)("option",{value:e,children:Number(e).toFixed(1)},e)})),me=function(){var e=he(),t=Object(ie.a)(new Date,"dd/MM/yyyy, EEEE"),a=Object(i.useState)(""),s=Object(o.a)(a,2),r=s[0],l=s[1],j=Object(i.useState)(""),x=Object(o.a)(j,2),u=x[0],m=x[1],f=Object(i.useState)(""),O=Object(o.a)(f,2),g=O[0],p=O[1],v=Object(i.useState)(""),y=Object(o.a)(v,2),N=y[0],C=y[1];return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)(b.a,{align:"left",children:"I declare that the following information is correct and accurate."}),Object(c.jsxs)(K.a,{container:!0,className:e.root,children:[Object(c.jsxs)(K.a,{item:!0,xs:3,children:[Object(c.jsx)("img",{className:e.icon,alt:"calendar",src:"/univus-ui/images/icon-calendar.svg"}),Object(c.jsx)(d.a,{height:100}),Object(c.jsx)("img",{className:e.icon,alt:"calendar",src:"/univus-ui/images/icon-person.svg"}),Object(c.jsx)(d.a,{height:160}),Object(c.jsx)("img",{className:e.icon,alt:"calendar",src:"/univus-ui/images/icon-thermometer.svg"})]}),Object(c.jsxs)(K.a,{item:!0,xs:9,className:e.padded,children:[Object(c.jsx)(b.a,{variant:"body2",children:"Date:"}),Object(c.jsx)(b.a,{variant:"body2",children:t}),Object(c.jsx)(h.a,{variant:"AM"===r?"contained":"outlined",onClick:function(){return l("AM")},color:"primary",disableElevation:!0,className:e.button,size:"large",children:"AM"}),Object(c.jsx)(h.a,{variant:"PM"===r?"contained":"outlined",onClick:function(){return l("PM")},color:"primary",disableElevation:!0,className:e.button,size:"large",children:"PM"}),Object(c.jsx)(d.a,{height:32}),Object(c.jsxs)("div",{className:e.row,children:[Object(c.jsx)(b.a,{variant:"body2",align:"left",className:e.question,children:"Do you have any COVID-19 symptoms that you recently acquired?"}),Object(c.jsx)(ne.a,{className:e.disclaimer})]}),Object(c.jsx)(h.a,{variant:"no"===u?"contained":"outlined",onClick:function(){return m("no")},color:"primary",disableElevation:!0,className:e.button,size:"large",children:"No"}),Object(c.jsx)(h.a,{variant:"yes"===u?"contained":"outlined",onClick:function(){return m("yes")},color:"primary",disableElevation:!0,className:e.button,size:"large",children:"Yes"}),Object(c.jsx)(d.a,{height:32}),Object(c.jsx)("div",{className:e.row,children:Object(c.jsx)(b.a,{variant:"body2",align:"left",className:e.question,children:"Do you have anyone in the same household having fever, and/or showing the above stated symptoms?"})}),Object(c.jsx)(h.a,{variant:"no"===g?"contained":"outlined",onClick:function(){return p("no")},color:"primary",disableElevation:!0,className:e.button,size:"large",children:"No"}),Object(c.jsx)(h.a,{variant:"yes"===g?"contained":"outlined",onClick:function(){return p("yes")},color:"primary",disableElevation:!0,className:e.button,size:"large",children:"Yes"}),Object(c.jsx)(d.a,{height:32}),Object(c.jsx)(b.a,{variant:"body2",children:"My temperature reading is"}),Object(c.jsx)(d.a,{height:16}),Object(c.jsxs)(X.a,{children:[Object(c.jsx)(de.a,{htmlFor:"select-temperature",children:"Set Temperature"}),Object(c.jsx)(xe.a,{className:e.tempInput,value:"number"===typeof N?Number(N).toFixed(1):"",onChange:function(e){C(e.target.value)},children:ue})]}),Object(c.jsx)(d.a,{height:32})]}),Object(c.jsx)("div",{className:e.centered,children:Object(c.jsx)(h.a,{variant:"contained",disableElevation:!0,className:e.submit,children:"Submit"})})]})]})},fe=Object(u.a)({header:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",height:"48px"},welcome:{color:"#002984",fontWeight:"900",fontSize:"22px",padding:"1rem"},card:{margin:"0 1rem 1rem",minHeight:"400px"}}),Oe=function(){var e=fe(),t=k();return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsxs)(j.a,{maxWidth:"xs",style:{backgroundColor:"#fdfdfd",height:"600px",overflowY:"auto"},disableGutters:!0,component:"div",children:[Object(c.jsxs)(j.a,{maxWidth:"xs",className:e.header,disableGutters:!0,children:[Object(c.jsx)(d.a,{flex:1,bgcolor:"#e65100",height:1}),Object(c.jsx)(d.a,{flex:3,bgcolor:"#ffc107",height:1}),Object(c.jsx)(d.a,{flex:1,bgcolor:"#00bcd4",height:1})]}),Object(c.jsxs)(j.a,{disableGutters:!0,children:[Object(c.jsxs)(b.a,{align:"left",className:e.welcome,children:["Hi Participant ",t]}),Object(c.jsx)(T.a,{className:e.card,children:Object(c.jsx)(U.a,{children:Object(c.jsx)(me,{})})})]})]}),Object(c.jsx)(j.a,{maxWidth:"xs",disableGutters:!0,component:"div",children:Object(c.jsxs)(W.a,{style:{bottom:"0",backgroundColor:"#fafafa"},value:0,showLabels:!0,children:[Object(c.jsx)(E.a,{label:"Declare",icon:Object(c.jsx)(V.a,{})}),Object(c.jsx)(E.a,{label:"History",icon:Object(c.jsx)(J.a,{})}),Object(c.jsx)(E.a,{label:"FAQ",icon:Object(c.jsx)(Q.a,{})}),Object(c.jsx)(E.a,{label:"Settings",icon:Object(c.jsx)(z.a,{})})]})})]})};var ge=function(){return Object(c.jsx)(S,{children:Object(c.jsx)(B.a,{basename:"/",children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l.a,{}),Object(c.jsx)(v.a,{exact:!0,path:"/",component:I}),Object(c.jsx)(v.a,{path:"/default-home-a",component:M}),Object(c.jsx)(v.a,{path:"/default-home-b",component:L}),Object(c.jsx)(v.a,{path:"/declaration-a",component:je}),Object(c.jsx)(v.a,{path:"/declaration-b",component:Oe})]})})})},pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,160)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),i(e),n(e),s(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(ge,{})}),document.getElementById("root")),pe()}},[[94,1,2]]]);
//# sourceMappingURL=main.325aafd7.chunk.js.map