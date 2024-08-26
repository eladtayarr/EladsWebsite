"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{1337:function(e,t,r){var i=r(5893);r(7294);var a=r(1686);let n=a.ZP.div`
  margin: 1.5em 0;
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
  -webkit-animation-fill-mode: both;
  max-width: auto;
  column-gap: 1.5em;
  @media only screen and (min-width: 1024px) {
    column-count: 2;
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    column-count: 1;
  }

  @media only screen and (max-width: 767px) and (min-width: 540px) {
    column-count: 1;
  }
  @keyframes fadeInUp {
    from {
      margin-top: 4rem;
      opacity: 0;
    }

    to {
      margin-top: 1.5em;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInUp {
    from {
      margin-top: 4rem;
      opacity: 0;
    }

    to {
      margin-top: 1.5em;
      opacity: 1;
    }
  }
  @media (max-width: 585px) {
    opacity: 1 !important;
  }
  @media (max-width: 989px) {
    opacity: 1 !important;
  }
  @media (max-width: 220px) {
    opacity: 1 !important;
  }
`;t.Z=e=>{let{children:t}=e;return(0,i.jsx)(n,{children:t})}},7563:function(e,t,r){r.d(t,{Z:function(){return u}});var i=r(5893),a=r(7294),n=r(1686),o=r(6820),l=r(1163),s=r(5675),d=r.n(s);let c=e=>{let{src:t,alt:r,className:a}=e;return(0,i.jsx)(d(),{src:t,alt:r||"",id:"cardHover",className:a,width:500,height:500})};c.defaultProps={alt:"codewonders",className:""};var m=r(7180);let p=e=>{let{show:t,closeShow:r,size:n,overlayColor:o,data:l}=e,s=(0,a.useCallback)(e=>{"Escape"===e.key&&r()},[r]);return(0,a.useEffect)(()=>(window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}),[s]),(0,i.jsx)(i.Fragment,{children:t&&l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{}),(0,i.jsxs)(f,{size:n,"data-testid":"sidebarmodal",children:[(0,i.jsx)(g,{overlayColor:o,className:"overlay",onClick:()=>r()}),(0,i.jsx)("aside",{className:"fadeInLeft",children:(0,i.jsxs)("div",{className:"pos__relative",children:[(0,i.jsxs)("div",{className:"d-flex justify-content-between header",children:[(0,i.jsx)("button",{onClick:()=>r(),className:"none-button",type:"button",children:(0,i.jsx)(m.x8,{})}),(0,i.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),r()},target:"_blank",rel:"noopener noreferrer",children:"Back To Projects."})]}),(0,i.jsxs)("div",{className:"main__post",children:[(0,i.jsx)("h3",{className:"mt-4",children:l.title}),(0,i.jsx)("p",{className:"te mb-4",children:l.description}),(0,i.jsx)("img",{src:l.imageUrl,alt:l.title}),(0,i.jsx)("h4",{children:"About"}),(0,i.jsx)("p",{children:l.about}),(0,i.jsx)("h4",{children:"Technologies"}),l.technologies&&(0,i.jsx)("p",{className:"d-flex flex-wrap",children:l.technologies.map((e,t)=>(0,i.jsx)("span",{className:"d-block mb-1",children:e},t))}),(0,i.jsxs)("h4",{children:[(0,i.jsx)(m.xs,{})," Website"]}),(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:l.link,target:"_blank",rel:"noopener noreferrer",children:l.link})}),l.github&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)(m.Ey,{})," Github"]}),(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:l.github,target:"_blank",rel:"noopener noreferrer",children:l.github})})]})]}),(0,i.jsxs)("a",{href:l.link,className:"open__project",target:"_blank",id:"cardHover",rel:"noopener noreferrer",children:["Open Project"," ",(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})]})]})})]})]})})},x=e=>"sm"===e?(0,n.iv)`
      width: 21.8em;
      padding: 1.5rem;
    `:"lg"===e?(0,n.iv)`
      width: 34em;
    `:"md"===e?(0,n.iv)`
      width: 29em;
      padding: 2rem;
    `:(0,n.iv)``,h=(0,n.vJ)`
  body{
    overflow: hidden;
  }
`,f=n.ZP.div`
  .none-button {
    border: none;
    background: transparent;
    padding-left: 0;
    svg {
      fill: none !important;
    }
  }

  @keyframes fadeLeft {
    from {
      opacity: 0.8;
      transform: translateX(80%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  aside {
    background: var(--bg);
    ${e=>x(e.size)}
    @media (max-width: 768px) {
      width: 100% !important;
    }
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999999;
    transition: all 0.3s linear;
    will-change: opacity, transform;
    &.fadeInLeft {
      animation-name: fadeLeft;
      animation-duration: 0.5s;
      animation-fill-mode: both;
    }
    .header {
      margin-bottom: 2rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid var(--border-color);
      svg {
        /* path {
          stroke: var(--article-color);
          &:last-child {
            fill: var(--article-color);
          }
        } */
      }
      a {
        font-size: var(--font-sm);
        font-weight: 900;
        color: var(--sidebar-cta);
      }
    }
    .pos__relative {
      position: relative;
      padding: 2rem 2rem 4rem;
      overflow-x: overlay;
      max-height: 100%;
    }
    .open__project {
      background: var(--sidebar-cta);
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 17px;
      color: #ffffff;
      font-weight: 600;
      text-align: center;
      font-size: var(--font-sm);
      svg {
        width: 16px;
        vertical-align: bottom;
        margin-left: 6px;
        fill: #fff;
      }
    }
  }
  .main__post {
    h3 {
      font-size: calc(var(--font-x-md) - 6px);
      /* margin-bottom: 1.3rem; */
      color: var(--cw);
      font-weight: 800;
    }
    h4 {
      font-size: var(--font-md);
      color: var(--cw);
      margin-top: 2rem;
      margin-bottom: 0.8rem;
      svg {
        vertical-align: bottom;
        width: 15px;
        margin-right: 3px;
      }
    }
    p {
      color: var(--article-color);
      font-size: var(--font-sm);
      span {
        background: var(--sidebar-tag);
        padding: 6px 13px;
        border-radius: 4px;
        text-transform: capitalize;
        font-size: 11px;
        margin-right: 6px;
        color: var(--cw);
        font-weight: 700;
      }
      a {
        font-weight: 600;
        color: var(--sidebar-cta);
        svg {
          fill: var(--cw);
        }
      }
    }
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 11px;
    }
  }
`,g=n.ZP.div`
  z-index: 99999;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background: ${e=>e.overlayColor||"rgba(0, 0, 0, 0.8)"};
`;p.defaultProps={show:!1,closeShow:()=>{},size:"md",overlayColor:"rgba(0, 0, 0, 0.8)"};let b=n.ZP.div`
  margin: 0 0 1.5em;
  position: relative;

  cursor: pointer;
  border-radius: 9px;
  object-fit: cover;
  background-color: var(--button-index);
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 1.4rem 2rem;
  display: flex;
  align-items: flex-end;
  border-radius: 9px;
  break-inside: avoid;

  @media (max-width: 758px) {
    padding: 1.4rem 1rem;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    left: 0 !important;
    top: 0 !important;
    object-fit: cover;
  }

  &:before {
    content: '';
    pointer-events: none;
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    background: radial-gradient(
      circle at center center,
      white 10%,
      whitesmoke 11%,
      whitesmoke 100%
    );
  }

  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
    /* background: linear-gradient(
      191deg,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.76) 100%
    ); */
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 10%,
      rgb(0 0 0 / 78%) 80%
    );
  }

  &:hover,
  &:focus {
    cursor: none;
    &:after {
      opacity: 1;
    }
    div.content__slate {
      z-index: 999;
      transform: none;
      opacity: 1;
    }
  }

  h3 {
    color: #fff;
    font-size: var(--font-x-md);
    font-weight: 800;
  }

  p {
    color: #d5d5d5 !important;
    font-size: calc(var(--font-sm) + 0.9px);
    span {
      background: #696869;
      padding: 4px 10px;
      border-radius: 50px;
      text-transform: capitalize;
      font-size: 11px;
      margin-right: 6px;
      color: #fff;
      font-weight: 500;
    }
  }

  div.content__slate {
    opacity: 0;
    transform: translateY(10%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;
  }

  @media (max-width: 585px) {
    &:after {
      opacity: 1 !important;
    }
    div.content__slate {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }

  @media (max-width: 989px) {
    &:after {
      opacity: 1 !important;
    }
    div.content__slate {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }

  @media (max-width: 220px) {
    &:after {
      opacity: 1 !important;
    }
    div.content__slate {
      z-index: 999 !important;
      transform: none !important;
      opacity: 1 !important;
    }
  }
`;var u=e=>{let{item:t}=e,{pathname:r}=(0,l.useRouter)(),[n,s]=(0,a.useState)(!1),[d]=(0,a.useState)((0,o.t)(["400px","454px","310px"]));return(0,i.jsx)(i.Fragment,{children:r.includes("/projects")?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(b,{item:t,style:{height:d},role:"gridcell",id:"cardHover","aria-label":`${t.title} ${t.description}`,onClick:()=>s(!0),onKeyPress:e=>{if("Enter"===e.key)return s(!0)},tabIndex:0,children:[(0,i.jsx)(c,{src:t.imageUrl,alt:t.imageUrl}),(0,i.jsxs)("div",{className:"content__slate",children:[(0,i.jsx)("h3",{children:t.title}),(0,i.jsx)("p",{children:t.description}),t.technologies&&(0,i.jsx)("p",{className:"d-flex flex-wrap",children:t.technologies.map((e,t)=>(0,i.jsx)("span",{className:"d-block mb-1",children:e},t))})]})]}),(0,i.jsx)(p,{show:n,closeShow:()=>s(!1),size:"lg",data:t})]}):(0,i.jsx)("a",{href:t.link,target:"_blank",style:{color:"inherit",textDecoration:"none",display:"block"},rel:"noopener noreferrer",title:t.title,id:"cardHover","aria-label":`${t.title} ${t.description}`,children:(0,i.jsxs)(b,{item:t,style:{height:d},role:"gridcell",children:[(0,i.jsx)(c,{src:t.imageUrl,alt:t.imageUrl}),(0,i.jsxs)("div",{className:"content__slate",children:[(0,i.jsx)("h3",{children:t.title}),(0,i.jsx)("p",{children:t.description})]})]})})})}},2015:function(e,t,r){r.d(t,{l:function(){return s},Z:function(){return d}});var i=r(5893),a=r(7294),n=r(1686),o=e=>{let{activeTab:t,label:r,onClick:a,href:n,...o}=e;return n?(0,i.jsx)("a",{className:`tab-list-item ${t===r?"tab-list-active":""}`,href:n,id:"cardHover",target:"_blank",rel:"noopener noreferrer","aria-label":`Open ${r}`,...o,children:r}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("button",{className:`tab-list-item ${t===r?"tab-list-active":""}`,type:"button",id:"cardHover",onClick:()=>a(r),"aria-label":`Open ${r}`,...o,children:r})})};let l=n.ZP.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 43px;

  @media (max-width: 585px) {
    white-space: nowrap;
    overflow-x: auto;
    margin: 0px auto;
  }
  @media (max-width: 989px) {
    white-space: nowrap;
    overflow-x: auto;
    margin: 0px auto;
  }
  @media (max-width: 220px) {
    white-space: nowrap;
    overflow-x: auto;
    margin: 0px auto;
  }
  .tab-list-item {
    margin: 0 1rem 0 0;
    font-size: calc(var(--font-sm) + 0.9px);
    transition: all 0.3s ease;
    background: transparent;
    color: var(--article-color);
    &.tab-list-active {
      font-weight: 900 !important;
      color: #e8e8e8;
      background: var(--gray-dark);
      padding: 5px 22px;
    }
  }
`,s=n.ZP.div`
  display: block;
`;var d=e=>{let{children:t}=e,r=a.Children.toArray(t)[0],[n,s]=(0,a.useState)(r.props.label),d=e=>{s(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{className:"d-md-flex d-block tabs",role:"tablist",children:t&&a.Children.map(t,e=>{let{label:t,href:r}=e.props;return(0,i.jsx)(o,{activeTab:n,label:t,href:r,"aria-current":n,onClick:d},t)})}),(0,i.jsx)("div",{className:"tab-content",children:a.Children.map(t,e=>e.props.label===n&&e.props.children)})]})}},6820:function(e,t,r){r.d(t,{t:function(){return i}});function i(e){return e[Math.floor(Math.random()*e.length)]}},6953:function(e,t,r){r.r(t),r.d(t,{PageSection:function(){return p}});var i=r(5893),a=r(7294),n=r(1686),o=r(1952),l=r(2118),s=r(2015),d=r(1337),c=r(7563),m=r(4263);let p=n.ZP.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  button {
    font-size: calc(var(--font-sm) + 1.5px);
    background: var(--mark);
    border: none;
    border-radius: 5px;
    padding: 0px 9px;
  }
`;t.default=()=>{let e=(0,a.useContext)(m.v5);return(0,i.jsxs)(o.Z,{title:"Project",children:[(0,i.jsx)(p,{children:(0,i.jsxs)(o.F,{children:[(0,i.jsx)("h1",{className:"intro__text",children:"Projects."})," ",(0,i.jsx)("br",{}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(s.l,{label:"All",children:(0,i.jsx)(d.Z,{children:e.map((e,t)=>(0,i.jsx)(c.Z,{item:e},t))})}),(0,i.jsx)(s.l,{label:"Projects",children:(0,i.jsx)(d.Z,{children:e.map((e,t)=>e.type.includes("project")&&(0,i.jsx)(c.Z,{item:e},t))})}),(0,i.jsx)(s.l,{label:"Dev Tools",children:(0,i.jsx)(d.Z,{children:e.map((e,t)=>e.type.includes("tools")&&(0,i.jsx)(c.Z,{item:e},t))})}),(0,i.jsx)(s.l,{label:"Open Source",children:(0,i.jsx)(d.Z,{children:e.map((e,t)=>e.type.includes("open-source")&&(0,i.jsx)(c.Z,{item:e},t))})}),(0,i.jsx)(s.l,{label:"Designs",href:"https://dribbble.com/codewonders"})]})]})}),(0,i.jsxs)(o.F,{children:[(0,i.jsx)(l.Z,{goto:"/resume",className:"mt-3 mb-5",children:"Lets Go To My Resume."}),(0,i.jsx)("br",{})]})]})}}}]);