import{r as e,j as r}from"./index-mgKCi6OX.js";import{g as t}from"./index-C8pce-KX.js";import{S as c}from"./ScrollTrigger-D1XJUMov.js";t.registerPlugin(c);const f=()=>{const l=["IIT Kanpur diverse student community including UG, PG and PhD scholars","IIT Kanpur Board of Deans and Professors","Top bureaucrats from Central and State Government","Distinguished faculty members of IIT Kanpur","Director and members of SIIC, TechnoPark and C3i Hub (Incubators at IIT Kanpur)"],o=e.useRef(null),s=e.useRef(null),a=e.useRef(null);return e.useEffect(()=>{const n=t.context(()=>{t.from(s.current,{y:40,opacity:0,duration:.7,scrollTrigger:{trigger:s.current,start:"top 85%"}}),t.from(a.current.children,{x:-40,opacity:0,duration:.5,stagger:.08,ease:"power2.out",scrollTrigger:{trigger:a.current,start:"top 80%"}})},o);return()=>n.revert()},[]),r.jsx("section",{ref:o,id:"who-will-attend",className:"py-3 sm:py-1 backdrop-blur-md",children:r.jsxs("div",{className:"container-custom px-4",children:[r.jsxs("div",{ref:s,className:"text-center mb-6",children:[r.jsxs("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2dd4bf] via-[#5eead4] to-[#99f6e4] bg-clip-text text-transparent mb-3 sm:mb-4",children:[" ","WHO WILL ATTEND ?"," "]}),r.jsx("div",{className:"w-16 h-[3px] bg-gradient-to-r from-[#46f9e4] to-[#2dd4bf] mx-auto mt-3"})]}),r.jsx("div",{className:`\r
            max-w-4xl mx-auto\r
            rounded-2xl\r
            p-5 sm:p-6\r
            bg-gradient-to-br\r
            from-[#0b2f2b]\r
            via-[#0f3f39]\r
            to-[#06201d]\r
            border border-[#3fffe2]/30\r
            shadow-[0_0_40px_rgba(63,255,226,0.18)]\r
            transition-all duration-300\r
            hover:brightness-110\r
            hover:-translate-y-1\r
            hover:shadow-[0_0_65px_rgba(63,255,226,0.35)]\r
          `,children:r.jsx("ul",{ref:a,className:"space-y-3 sm:space-y-4",children:l.map((n,i)=>r.jsxs("li",{className:"flex items-start gap-3",children:[r.jsx("span",{className:"mt-[9px] h-2.5 w-2.5 rounded-full bg-[#46f9e4]  flex-shrink-0"}),r.jsx("p",{className:"text-sm sm:text-base text-teal-50 leading-relaxed",children:n})]},i))})})]})})};export{f as default};
