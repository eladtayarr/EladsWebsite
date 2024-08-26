"use strict";(()=>{var e={};e.id=405,e.ids=[405],e.modules={2223:(e,t,i)=>{i.a(e,async(e,a)=>{try{i.r(t),i.d(t,{config:()=>x,default:()=>h,getServerSideProps:()=>u,getStaticPaths:()=>m,getStaticProps:()=>d,reportWebVitals:()=>f,routeModule:()=>P,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>g});var r=i(7093),n=i(5244),s=i(1323),o=i(5949),p=i(9143),l=i(6209),c=e([l]);l=(c.then?(await c)():c)[0];let h=(0,s.l)(l,"default"),d=(0,s.l)(l,"getStaticProps"),m=(0,s.l)(l,"getStaticPaths"),u=(0,s.l)(l,"getServerSideProps"),x=(0,s.l)(l,"config"),f=(0,s.l)(l,"reportWebVitals"),g=(0,s.l)(l,"unstable_getStaticProps"),b=(0,s.l)(l,"unstable_getStaticPaths"),y=(0,s.l)(l,"unstable_getStaticParams"),v=(0,s.l)(l,"unstable_getServerProps"),j=(0,s.l)(l,"unstable_getServerSideProps"),P=new r.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:p.default,Document:o.default},userland:l});a()}catch(e){a(e)}})},993:(e,t,i)=>{i.d(t,{m:()=>a});let a=e=>({transition:{duration:.5,delay:e},initial:{opacity:0,y:20,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.98}})},6820:(e,t,i)=>{i.d(t,{t:()=>a});function a(e){return e[Math.floor(Math.random()*e.length)]}},6209:(e,t,i)=>{i.a(e,async(e,a)=>{try{i.r(t),i.d(t,{default:()=>g});var r=i(997),n=i(6689),s=i(7518),o=i.n(s),p=i(1664),l=i.n(p),c=i(6820),h=i(6197),d=i(1952),m=i(2118),u=i(993),x=e([h]);h=(x.then?(await x)():x)[0];let f=o().div`
  min-height: calc(100vh - 39vh);
  display: flex;
  align-items: center;
  justify-content: center;
  .intro__text {
    font-size: 2.275em;
    font-weight: 500;
    margin: 2rem 0rem 1.5rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 9.9px;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 2px;
      text-shadow: -1px 0 #00ffff;
      animation: noise-anim-2 15s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: 3px 0 #ff69b4;
      animation: noise-anim 2s infinite linear alternate-reverse;
    }

    @keyframes noise-anim {
      0% {
        clip-path: inset(29% 0 25% 0);
      }
      5% {
        clip-path: inset(9% 0 38% 0);
      }
      10% {
        clip-path: inset(96% 0 1% 0);
      }
      15% {
        clip-path: inset(75% 0 23% 0);
      }
      20% {
        clip-path: inset(46% 0 50% 0);
      }
      25% {
        clip-path: inset(3% 0 46% 0);
      }
      30% {
        clip-path: inset(82% 0 2% 0);
      }
      35% {
        clip-path: inset(88% 0 1% 0);
      }
      40% {
        clip-path: inset(91% 0 8% 0);
      }
      45% {
        clip-path: inset(96% 0 2% 0);
      }
      50% {
        clip-path: inset(59% 0 38% 0);
      }
      55% {
        clip-path: inset(41% 0 53% 0);
      }
      60% {
        clip-path: inset(21% 0 47% 0);
      }
      65% {
        clip-path: inset(89% 0 4% 0);
      }
      70% {
        clip-path: inset(1% 0 95% 0);
      }
      75% {
        clip-path: inset(86% 0 4% 0);
      }
      80% {
        clip-path: inset(95% 0 5% 0);
      }
      85% {
        clip-path: inset(54% 0 36% 0);
      }
      90% {
        clip-path: inset(70% 0 27% 0);
      }
      95% {
        clip-path: inset(6% 0 16% 0);
      }
      100% {
        clip-path: inset(95% 0 2% 0);
      }
    }
    @keyframes noise-anim-2 {
      0% {
        clip-path: inset(76% 0 21% 0);
      }
      5% {
        clip-path: inset(54% 0 7% 0);
      }
      10% {
        clip-path: inset(55% 0 29% 0);
      }
      15% {
        clip-path: inset(89% 0 3% 0);
      }
      20% {
        clip-path: inset(33% 0 40% 0);
      }
      25% {
        clip-path: inset(17% 0 56% 0);
      }
      30% {
        clip-path: inset(37% 0 51% 0);
      }
      35% {
        clip-path: inset(38% 0 19% 0);
      }
      40% {
        clip-path: inset(93% 0 4% 0);
      }
      45% {
        clip-path: inset(44% 0 14% 0);
      }
      50% {
        clip-path: inset(53% 0 26% 0);
      }
      55% {
        clip-path: inset(67% 0 11% 0);
      }
      60% {
        clip-path: inset(85% 0 13% 0);
      }
      65% {
        clip-path: inset(27% 0 37% 0);
      }
      70% {
        clip-path: inset(87% 0 4% 0);
      }
      75% {
        clip-path: inset(10% 0 8% 0);
      }
      80% {
        clip-path: inset(51% 0 27% 0);
      }
      85% {
        clip-path: inset(10% 0 60% 0);
      }
      90% {
        clip-path: inset(83% 0 3% 0);
      }
      95% {
        clip-path: inset(23% 0 55% 0);
      }
      100% {
        clip-path: inset(1% 0 81% 0);
      }
    }
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2.3;
    font-weight: 400;
    color: var(--article-color) !important;

    a,button {
      font-size: calc(var(--font-sm) + 0.9px);
      line-height: 20px;
      position: relative;
      border: none;
      font-weight: 800;
      background: transparent;
      text-transform: uppercase;
    }
  }
  /* button {
    font-size: var(--font-sm);
    background: var(--button-index);
    border: none;
    border-radius: 5px;
    transition: all 0.4s ease;
    padding: 1px 12px;
    &:hover {
      background: ${e=>e.color};
      color: #fff;
    }
  } */
  @media (max-width: 585px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (max-width: 989px) {
    margin: 3rem 0;
    display: block;
  }
  @media (max-width: 220px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (prefers-reduced-motion: reduce) {
    /* Stop the animation */

    .intro__text {
      animation: none;

      &::before,
      &::after {
        content: none;
      }
    }
  }
`,g=()=>{let[e]=(0,n.useState)((0,c.t)(["#37609c","#34c759","#5856d6"]));return r.jsx(d.Z,{children:r.jsx(f,{color:e,children:(0,r.jsxs)(d.F,{children:[(0,r.jsxs)("article",{children:[r.jsx(h.motion.h1,{"data-text":"I'm Elad Tayar",className:"intro__text",...(0,u.m)(.1),children:r.jsx("mark",{className:"mark",children:"I'm Elad Tayar"})}),(0,r.jsxs)(h.motion.p,{...(0,u.m)(.3),children:[" ","If you are looking to learn more"," ",r.jsx(l(),{href:"/about","aria-label":"Go to About Page",children:"About"})," ","my professional background, I am currently a second-year student pursuing a Bachelor’s degree in Information Systems Management with a double major in Business Administration."," "]}),(0,r.jsxs)(h.motion.p,{...(0,u.m)(.5),children:["My"," ",r.jsx(l(),{href:"/resume","aria-label":"Check out my Resume",children:"Resume"})," ","highlights my technical skills in areas such as data analysis, databases, development, and system maintenance. I have actively contributed to various"," ",r.jsx(l(),{href:"/projects","aria-label":"Go to Projects Page And Check What I Read",children:"Projects"})," ","during my studies and work experience, including a significant research project as part of an Honors Program in collaboration with Bremen University. To discuss potential opportunities, please feel free to"," ",r.jsx(l(),{href:"/contact","aria-label":"Go to Contact Page",children:"Contact Me"})]})]}),r.jsx("br",{}),r.jsx(h.motion.div,{...(0,u.m)(.7),children:r.jsx(m.Z,{goto:"/about",children:"See More About Me"})}),r.jsx("br",{})]})})})};a()}catch(e){a(e)}})},205:e=>{e.exports=require("next-page-transitions")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},3082:e=>{e.exports=require("react-ga")},997:e=>{e.exports=require("react/jsx-runtime")},9854:e=>{e.exports=require("scoutbar")},7518:e=>{e.exports=require("styled-components")},6197:e=>{e.exports=import("framer-motion")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[859,97,143,749],()=>i(2223));module.exports=a})();