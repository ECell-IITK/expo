import{r as a,j as e}from"./index-LMTOa6IY.js";import{g as l}from"./index-C8pce-KX.js";const d="/expo/assets/g-DvTZvxs-.jpeg",p="/expo/assets/g%20(1)-bdyeTj7U.jpeg",x="/expo/assets/g%20(2)-CzMdR6ct.jpeg",m="/expo/assets/g%20(3)-DIWbF3SQ.jpeg",u="/expo/assets/g%20(4)-CiV4AXeH.jpeg",f="/expo/assets/g%20(5)-DPWSFoLB.jpeg",h=[d,p,x,m,u,f];function b(){const n=a.useRef(null),[c,i]=a.useState(h),g=t=>{const r=[...t];for(let s=r.length-1;s>0;s--){const o=Math.floor(Math.random()*(s+1));[r[s],r[o]]=[r[o],r[s]]}return r};return a.useEffect(()=>{const t=setInterval(()=>{l.to(n.current.children,{opacity:0,scale:.96,duration:.4,stagger:.03,onComplete:()=>{i(r=>g(r)),l.to(n.current.children,{opacity:1,scale:1,duration:.5,stagger:.04,ease:"power2.out"})}})},3500);return()=>clearInterval(t)},[]),e.jsx("section",{className:"relative py-20 px-4 backdrop-blur-md",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2dd4bf] via-[#5eead4] to-[#99f6e4] bg-clip-text text-transparent",children:"PAST YEAR HIGHLIGHTS"}),e.jsx("div",{className:"w-24 h-1 bg-[#46f9e4] mx-auto mt-4"})]}),e.jsx("div",{ref:n,className:`\r
            grid\r
            grid-cols-2\r
            sm:grid-cols-3\r
            gap-4\r
            md:gap-4\r
          `,children:c.map((t,r)=>e.jsxs("div",{className:`\r
                group\r
                relative\r
                overflow-hidden\r
                rounded-xl\r
                border border-white/10\r
                bg-black/30\r
                shadow-[0_0_50px_rgba(36,190,176,0.25)]\r
              `,children:[e.jsx("img",{src:t,alt:`Gallery ${r+1}`,loading:"lazy",decoding:"async",className:`\r
                  w-full\r
                  h-full\r
                  object-cover\r
                  aspect-square\r
                  transition-all\r
                  duration-500\r
                  ease-out\r
                  group-hover:scale-110\r
                `}),e.jsx("div",{className:`\r
                  absolute inset-0\r
                  opacity-0\r
                  group-hover:opacity-100\r
                  transition-opacity\r
                  duration-500\r
                  bg-gradient-to-tr\r
                  from-[#46f9e4]/20\r
                  via-transparent\r
                  to-transparent\r
                `})]},r))})]})})}export{b as default};
