"use strict";exports.id=953,exports.ids=[953],exports.modules={1337:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(997);r(6689);var i=r(7518),n=r.n(i);let o=n().div`
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
`,s=({children:e})=>a.jsx(o,{children:e})},7563:(e,t,r)=>{r.d(t,{Z:()=>j});var a=r(997),i=r(6689),n=r(7518),o=r.n(n),s=r(6820),l=r(1163),d=r(5675),c=r.n(d);let m=({src:e,alt:t,className:r})=>a.jsx(c(),{src:e,alt:t||"",id:"cardHover",className:r,width:500,height:500});m.defaultProps={alt:"codewonders",className:""};var p=r(7180);let x=({show:e,closeShow:t,size:r,overlayColor:n,data:o})=>{let s=(0,i.useCallback)(e=>{"Escape"===e.key&&t()},[t]);return(0,i.useEffect)(()=>(window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}),[s]),a.jsx(a.Fragment,{children:e&&o&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(f,{}),(0,a.jsxs)(g,{size:r,"data-testid":"sidebarmodal",children:[a.jsx(b,{overlayColor:n,className:"overlay",onClick:()=>t()}),a.jsx("aside",{className:"fadeInLeft",children:(0,a.jsxs)("div",{className:"pos__relative",children:[(0,a.jsxs)("div",{className:"d-flex justify-content-between header",children:[a.jsx("button",{onClick:()=>t(),className:"none-button",type:"button",children:a.jsx(p.x8,{})}),a.jsx("a",{href:"#",onClick:e=>{e.preventDefault(),t()},target:"_blank",rel:"noopener noreferrer",children:"Back To Projects."})]}),(0,a.jsxs)("div",{className:"main__post",children:[a.jsx("h3",{className:"mt-4",children:o.title}),a.jsx("p",{className:"te mb-4",children:o.description}),a.jsx("img",{src:o.imageUrl,alt:o.title}),a.jsx("h4",{children:"About"}),a.jsx("p",{children:o.about}),a.jsx("h4",{children:"Technologies"}),o.technologies&&a.jsx("p",{className:"d-flex flex-wrap",children:o.technologies.map((e,t)=>a.jsx("span",{className:"d-block mb-1",children:e},t))}),(0,a.jsxs)("h4",{children:[a.jsx(p.xs,{})," Website"]}),a.jsx("p",{children:a.jsx("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",children:o.link})}),o.github&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h4",{children:[a.jsx(p.Ey,{})," Github"]}),a.jsx("p",{children:a.jsx("a",{href:o.github,target:"_blank",rel:"noopener noreferrer",children:o.github})})]})]}),(0,a.jsxs)("a",{href:o.link,className:"open__project",target:"_blank",id:"cardHover",rel:"noopener noreferrer",children:["Open Project"," ",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})]})]})})]})]})})},h=e=>"sm"===e?(0,n.css)`
      width: 21.8em;
      padding: 1.5rem;
    `:"lg"===e?(0,n.css)`
      width: 34em;
    `:"md"===e?(0,n.css)`
      width: 29em;
      padding: 2rem;
    `:(0,n.css)``,f=(0,n.createGlobalStyle)`
  body{
    overflow: hidden;
  }
`,g=o().div`
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
    ${e=>h(e.size)}
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
`,b=o().div`
  z-index: 99999;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background: ${e=>e.overlayColor||"rgba(0, 0, 0, 0.8)"};
`;x.defaultProps={show:!1,closeShow:()=>{},size:"md",overlayColor:"rgba(0, 0, 0, 0.8)"};let v=o().div`
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
`,j=({item:e})=>{let{pathname:t}=(0,l.useRouter)(),[r,n]=(0,i.useState)(!1),[o]=(0,i.useState)((0,s.t)(["400px","454px","310px"]));return a.jsx(a.Fragment,{children:t.includes("/projects")?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(v,{item:e,style:{height:o},role:"gridcell",id:"cardHover","aria-label":`${e.title} ${e.description}`,onClick:()=>n(!0),onKeyPress:e=>{if("Enter"===e.key)return n(!0)},tabIndex:0,children:[a.jsx(m,{src:e.imageUrl,alt:e.imageUrl}),(0,a.jsxs)("div",{className:"content__slate",children:[a.jsx("h3",{children:e.title}),a.jsx("p",{children:e.description}),e.technologies&&a.jsx("p",{className:"d-flex flex-wrap",children:e.technologies.map((e,t)=>a.jsx("span",{className:"d-block mb-1",children:e},t))})]})]}),a.jsx(x,{show:r,closeShow:()=>n(!1),size:"lg",data:e})]}):a.jsx("a",{href:e.link,target:"_blank",style:{color:"inherit",textDecoration:"none",display:"block"},rel:"noopener noreferrer",title:e.title,id:"cardHover","aria-label":`${e.title} ${e.description}`,children:(0,a.jsxs)(v,{item:e,style:{height:o},role:"gridcell",children:[a.jsx(m,{src:e.imageUrl,alt:e.imageUrl}),(0,a.jsxs)("div",{className:"content__slate",children:[a.jsx("h3",{children:e.title}),a.jsx("p",{children:e.description})]})]})})})}},2015:(e,t,r)=>{r.d(t,{l:()=>c,Z:()=>m});var a=r(997),i=r(6689),n=r.n(i),o=r(7518),s=r.n(o);let l=({activeTab:e,label:t,onClick:r,href:i,...n})=>i?a.jsx("a",{className:`tab-list-item ${e===t?"tab-list-active":""}`,href:i,id:"cardHover",target:"_blank",rel:"noopener noreferrer","aria-label":`Open ${t}`,...n,children:t}):a.jsx(a.Fragment,{children:a.jsx("button",{className:`tab-list-item ${e===t?"tab-list-active":""}`,type:"button",id:"cardHover",onClick:()=>r(t),"aria-label":`Open ${t}`,...n,children:t})}),d=s().nav`
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
`,c=s().div`
  display: block;
`,m=({children:e})=>{let t=n().Children.toArray(e)[0],[r,o]=(0,i.useState)(t.props.label),s=e=>{o(e)};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(d,{className:"d-md-flex d-block tabs",role:"tablist",children:e&&n().Children.map(e,e=>{let{label:t,href:i}=e.props;return a.jsx(l,{activeTab:r,label:t,href:i,"aria-current":r,onClick:s},t)})}),a.jsx("div",{className:"tab-content",children:n().Children.map(e,e=>e.props.label===r&&e.props.children)})]})}},6820:(e,t,r)=>{r.d(t,{t:()=>a});function a(e){return e[Math.floor(Math.random()*e.length)]}},6953:(e,t,r)=>{r.r(t),r.d(t,{PageSection:()=>x,default:()=>h});var a=r(997),i=r(6689),n=r(7518),o=r.n(n),s=r(1952),l=r(2118),d=r(2015),c=r(1337),m=r(7563),p=r(4263);let x=o().div`
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
`,h=()=>{let e=(0,i.useContext)(p.v5);return(0,a.jsxs)(s.Z,{title:"Project",children:[a.jsx(x,{children:(0,a.jsxs)(s.F,{children:[a.jsx("h1",{className:"intro__text",children:"Projects."})," ",a.jsx("br",{}),(0,a.jsxs)(d.Z,{children:[a.jsx(d.l,{label:"All",children:a.jsx(c.Z,{children:e.map((e,t)=>a.jsx(m.Z,{item:e},t))})}),a.jsx(d.l,{label:"Projects",children:a.jsx(c.Z,{children:e.map((e,t)=>e.type.includes("project")&&a.jsx(m.Z,{item:e},t))})}),a.jsx(d.l,{label:"Dev Tools",children:a.jsx(c.Z,{children:e.map((e,t)=>e.type.includes("tools")&&a.jsx(m.Z,{item:e},t))})}),a.jsx(d.l,{label:"Open Source",children:a.jsx(c.Z,{children:e.map((e,t)=>e.type.includes("open-source")&&a.jsx(m.Z,{item:e},t))})}),a.jsx(d.l,{label:"Designs",href:"https://dribbble.com/codewonders"})]})]})}),(0,a.jsxs)(s.F,{children:[a.jsx(l.Z,{goto:"/resume",className:"mt-3 mb-5",children:"Lets Go To My Resume."}),a.jsx("br",{})]})]})}}};