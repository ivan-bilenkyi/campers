import{s,j as e,u as F,a as j,r as a,g as L}from"./index-855ea992.js";import{F as f,a as S,b as $,s as C,B as H,L as A,c as V,C as E,d as I}from"./CamperItem-94badafc.js";import{S as M,C as T}from"./Container.styled-943e81c2.js";const W=s.aside`
    max-width: 365px;
    width: 100%;
`,z=s.div`
    position: relative;
    margin-bottom: 32px;
`,B=s(f)`
    border-radius: 10px;
    border: none;
    padding: 18px 18px 18px 44px;
    width: 100%;
    background: var(--inputs);
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    margin-bottom: 32px;
`,G=s.svg`
    position: absolute;
    top: 18px;
    left: 18px;
`,g=s.p`
    font-weight: 500;
    margin-bottom: 14px;
`,u=s.p`
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
`,m=s.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 32px;
`,t=s.label`
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
`,n=s(f)`
    display: none;
`,c=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`,r=s.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
`,l="/campers/assets/filter-icons-82e3bf4d.svg",q=()=>e.jsx(W,{children:e.jsx(S,{initialValues:{checked:[]},onSubmit:i=>{alert(JSON.stringify(i,null,2))},children:e.jsxs($,{children:[e.jsx(g,{children:"Location"}),e.jsxs(z,{children:[e.jsx(B,{name:"location",placeholder:"City"}),e.jsx(G,{width:"18",height:"20",children:e.jsx("use",{xlinkHref:`${C}#location`})})]}),e.jsx(g,{children:"Filters"}),e.jsxs("div",{children:[e.jsx(u,{id:"checkbox-group",children:"Vehicle equipment"}),e.jsxs(m,{role:"group","aria-labelledby":"checkbox-group",children:[e.jsxs(t,{children:[e.jsx(n,{type:"checkbox",name:"checked",value:"ac"}),e.jsxs(c,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${l}#ac`})}),e.jsx(r,{children:"AC"})]})]}),e.jsxs(t,{children:[e.jsx(n,{type:"checkbox",name:"checked",value:"automatic"}),e.jsxs(c,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${l}#automatic`})}),e.jsx(r,{children:"Automatic"})]})]}),e.jsxs(t,{children:[e.jsx(n,{type:"checkbox",name:"checked",value:"kitchen"}),e.jsxs(c,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${l}#kitchen`})}),e.jsx(r,{children:"Kitchen"})]})]}),e.jsxs(t,{children:[e.jsx(n,{type:"checkbox",name:"checked",value:"tv"}),e.jsxs(c,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${l}#tv`})}),e.jsx(r,{children:"TV"})]})]}),e.jsxs(t,{children:[e.jsx(n,{type:"checkbox",name:"checked",value:"shower"}),e.jsxs(c,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${l}#shower`})}),e.jsx(r,{children:"Shower"})]})]})]})]}),e.jsxs("div",{children:[e.jsx(u,{id:"checkbox-group",children:"Vehicle type"}),e.jsxs(m,{role:"group","aria-labelledby":"checkbox-group",children:[e.jsxs(t,{children:[e.jsx(n,{type:"checkbox",name:"checked",value:"van"}),e.jsxs(c,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${l}#van`})}),e.jsx(r,{children:"Van"})]})]}),e.jsxs(t,{children:[e.jsx(n,{type:"checkbox",name:"checked",value:"fully-integrated"}),e.jsxs(c,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${l}#fully-integrated`})}),e.jsx(r,{children:"Fully Integrated"})]})]}),e.jsxs(t,{children:[e.jsx(n,{type:"checkbox",name:"checked",value:"alcove"}),e.jsxs(c,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${l}#alcove`})}),e.jsx(r,{children:"Alcove"})]})]})]})]}),e.jsx(H,{type:"submit",children:"Submit"})]})})}),D=i=>i.campers.items,J=i=>i.campers.isLoading,K=()=>{const i=F(),o=j(D),b=j(J),[k,v]=a.useState(!1),[d,w]=a.useState(1),x=4,p=a.useMemo(()=>({page:d,limit:x}),[d,x]);a.useEffect(()=>{i(L(p))},[i,p,d]),a.useEffect(()=>{v(o.length%x===0)},[o,x]);const y=()=>{w(h=>h+=1)};return e.jsxs(A,{children:[e.jsx(V,{children:o&&o.length>0&&o.map(h=>e.jsx(E,{camper:h},h._id))}),!b&&k&&e.jsx(I,{onClick:y,children:"Load more"})]})};function R(){return e.jsx(M,{children:e.jsxs(T,{children:[e.jsx(q,{}),e.jsx(K,{})]})})}export{R as default};
