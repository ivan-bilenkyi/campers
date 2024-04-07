import{s,u as j,a as w,j as e,b as S,r as h,g as $}from"./index-834baf28.js";import{F as y,a as H,b as V,s as A,B as I,L as E,c as M,C as T,d as W}from"./CamperItem-68c69b17.js";import{S as z,C as B}from"./Container.styled-e5e350ea.js";const G=s.aside`
    max-width: 365px;
    width: 100%;
`,q=s.div`
    position: relative;
    margin-bottom: 32px;
`,D=s(y)`
    border-radius: 10px;
    border: none;
    padding: 18px 18px 18px 44px;
    width: 100%;
    background: var(--inputs);
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    margin-bottom: 32px;
`,J=s.svg`
    position: absolute;
    top: 18px;
    left: 18px;
`,v=s.p`
    font-weight: 500;
    margin-bottom: 14px;
`,b=s.p`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: var(--main);

    &:after {
        content: "";
        width: 100%;
        border-bottom: 1px solid rgba(16, 24, 40, 0.2);
        margin: 24px 0;
    }
`,k=s.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 32px;
`,n=s.label`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: 95px;
    width: 115px;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
    padding: 17px 18px;
`,c=s(y)`
    display: none;
`,r=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`,l=s.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
`,o="/campers/assets/filter-icons-82e3bf4d.svg",K=i=>i.campers.items,N=i=>i.campers.isLoading,F=i=>i.campers.filter,O=()=>{const i=j(F),t=w(),g=a=>{const u=a.target.value;t(S(u))};return e.jsx(G,{children:e.jsx(H,{initialValues:{checked:[]},onSubmit:a=>{alert(JSON.stringify(a,null,2))},children:e.jsxs(V,{children:[e.jsx(v,{children:"Location"}),e.jsxs(q,{children:[e.jsx(D,{name:"location",placeholder:"City",value:i,onChange:g}),e.jsx(J,{width:"18",height:"20",children:e.jsx("use",{xlinkHref:`${A}#location`})})]}),e.jsx(v,{children:"Filters"}),e.jsxs("div",{children:[e.jsx(b,{id:"checkbox-group",children:"Vehicle equipment"}),e.jsxs(k,{role:"group","aria-labelledby":"checkbox-group",children:[e.jsxs(n,{children:[e.jsx(c,{type:"checkbox",name:"checked",value:"ac"}),e.jsxs(r,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${o}#ac`})}),e.jsx(l,{children:"AC"})]})]}),e.jsxs(n,{children:[e.jsx(c,{type:"checkbox",name:"checked",value:"automatic"}),e.jsxs(r,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${o}#automatic`})}),e.jsx(l,{children:"Automatic"})]})]}),e.jsxs(n,{children:[e.jsx(c,{type:"checkbox",name:"checked",value:"kitchen"}),e.jsxs(r,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${o}#kitchen`})}),e.jsx(l,{children:"Kitchen"})]})]}),e.jsxs(n,{children:[e.jsx(c,{type:"checkbox",name:"checked",value:"tv"}),e.jsxs(r,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${o}#tv`})}),e.jsx(l,{children:"TV"})]})]}),e.jsxs(n,{children:[e.jsx(c,{type:"checkbox",name:"checked",value:"shower"}),e.jsxs(r,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${o}#shower`})}),e.jsx(l,{children:"Shower"})]})]})]})]}),e.jsxs("div",{children:[e.jsx(b,{id:"checkbox-group",children:"Vehicle type"}),e.jsxs(k,{role:"group","aria-labelledby":"checkbox-group",children:[e.jsxs(n,{children:[e.jsx(c,{type:"checkbox",name:"checked",value:"van"}),e.jsxs(r,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${o}#van`})}),e.jsx(l,{children:"Van"})]})]}),e.jsxs(n,{children:[e.jsx(c,{type:"checkbox",name:"checked",value:"fully-integrated"}),e.jsxs(r,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${o}#fully-integrated`})}),e.jsx(l,{children:"Fully Integrated"})]})]}),e.jsxs(n,{children:[e.jsx(c,{type:"checkbox",name:"checked",value:"alcove"}),e.jsxs(r,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${o}#alcove`})}),e.jsx(l,{children:"Alcove"})]})]})]})]}),e.jsx(I,{type:"submit",children:"Submit"})]})})})},P=()=>{const i=w(),t=j(K),g=j(N),[a,u]=h.useState(!1),[m,C]=h.useState(1),x=4,d=j(F),f=h.useMemo(()=>({page:m,limit:x,valueFilter:d}),[m,x,d]);h.useEffect(()=>{console.log(d),i($(f))},[i,f,m,d]),h.useEffect(()=>{u(t.length%x===0)},[t,x]);const L=()=>{C(p=>p+=1)};return console.log(t),e.jsxs(E,{children:[e.jsx(M,{children:t&&t.length>0&&t.map(p=>e.jsx(T,{camper:p},p._id))}),!g&&a&&e.jsx(W,{onClick:L,children:"Load more"})]})};function U(){return e.jsx(z,{children:e.jsxs(B,{children:[e.jsx(O,{}),e.jsx(P,{})]})})}export{U as default};
