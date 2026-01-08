import{r,j as e}from"./index-mgKCi6OX.js";import{g as t}from"./index-C8pce-KX.js";import{S as d}from"./ScrollTrigger-D1XJUMov.js";const m="/expo/assets/expoStall-BWlN-kW3.svg";t.registerPlugin(d);const f=()=>{const c=["3 X 3 M SIZE STALLS","1 LED DISPLAY","1 TABLE","2 CHAIR","LIGHT","ELECTRICITY SOCKET","DUSTBIN","1 PEOPLE STAY (3 DAYS, 2 NIGHTS)","FASCIA (WITH NAME OF STARTUP)","MEDIA COVERAGE","NETWORKING DINNER","PRODUCT LAUNCH / STAGE SHOWCASE","EXCLUSIVE ENTRY TO UPSTART CONFERENCE","BREAKFAST, LUNCH AND DINNER (2 DAYS)","ONE-ON-ONE MENTORING AND FUNDRAISING OPPORTUNITIES"],o=r.useRef(null),s=r.useRef(null),a=r.useRef(null),n=r.useRef(null),l=r.useRef(null);return r.useEffect(()=>{const i=t.context(()=>{t.from(s.current,{y:40,opacity:0,duration:.8,scrollTrigger:{trigger:s.current,start:"top 80%"}}),t.from(a.current,{x:-50,opacity:0,duration:.9,scrollTrigger:{trigger:a.current,start:"top 75%"}}),t.from(n.current,{x:50,opacity:0,duration:.9,scrollTrigger:{trigger:n.current,start:"top 75%"}}),t.from(l.current.children,{x:-25,opacity:0,duration:.4,stagger:.05,ease:"power2.out",scrollTrigger:{trigger:l.current,start:"top 75%"}})},o);return()=>i.revert()},[]),e.jsx("section",{ref:o,id:"stall-slabs",className:"relative py-20 px-4 backdrop-blur-md",children:e.jsxs("div",{className:"max-w-7xl mx-auto relative",children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none overlay-stall"}),e.jsxs("div",{ref:s,className:"text-center mb-16",children:[e.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2dd4bf] via-[#5eead4] to-[#99f6e4] bg-clip-text text-transparent",children:"STALL SLABS"}),e.jsx("div",{className:"w-24 h-1 bg-[#46f9e4] mx-auto mt-4"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",children:[e.jsx("div",{ref:a,className:`\r
              order-3 lg:order-1\r
              lg:ml-24 xl:ml-32 2xl:ml-40\r
            `,children:e.jsxs("div",{className:`\r
                relative\r
                rounded-2xl\r
                p-8 sm:p-10\r
                bg-gradient-to-b\r
                from-[#27c6ae]\r
                via-[#0f7f73]\r
                to-[#052b26]\r
                shadow-[0_25px_80px_rgba(31,224,195,0.35)]\r
              `,children:[e.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-white mb-6 text-center",children:"PLATINUM STALL"}),e.jsx("div",{className:"w-full h-px bg-white/25 mb-6"}),e.jsx("ul",{ref:l,className:"space-y-4",children:c.map((i,x)=>e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("svg",{className:"w-5 h-5 text-[#b8fff5] mt-1 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),e.jsx("span",{className:"text-sm sm:text-base text-white/90 leading-relaxed",children:i})]},x))})]})}),e.jsxs("div",{ref:n,className:`\r
              order-1 lg:order-2\r
              flex flex-col\r
              items-center lg:items-end\r
              gap-10\r
              lg:pr-10 xl:pr-20\r
            `,children:[e.jsx("img",{src:m,alt:"Startup Expo Stall",loading:"lazy",decoding:"async",className:`\r
                w-[260px]\r
                sm:w-[300px]\r
                md:w-[340px]\r
                lg:w-[380px]\r
                xl:w-[600px]\r
                2xl:w-[650px]\r
                drop-shadow-[0_0_80px_rgba(70,249,228,0.4)]\r
              `}),e.jsx("p",{className:`\r
                max-w-xl\r
                text-sm sm:text-base md:text-lg\r
                text-teal-50/90\r
                leading-relaxed\r
                text-justify\r
              `,children:"Platinum Stall is designed for startups seeking maximum visibility and high-impact engagement at the Startup Expo. Positioned at prime locations, these stalls offer a comprehensive setup with premium amenities, brand fascia, and exclusive access to networking, media coverage, and mentoring opportunities. Ideal for product showcases and launches, the Platinum Stall ensures a strong presence among investors, industry leaders, and a diverse audience throughout the event."})]})]})]})})};export{f as default};
