import{s,j as e,u as w,a as y,r as x,g as F}from"./index-f34a596c.js";import{F as m,a as $,b as S,s as C,B as L,L as H,c as A,C as V,d as E}from"./CamperItem-9f037b3d.js";const M=s.aside`
    max-width: 365px;
    width: 100%;
`,T=s.div`
    position: relative;
    margin-bottom: 32px;
`,W=s(m)`
    border-radius: 10px;
    border: none;
    padding: 18px 18px 18px 44px;
    width: 100%;
    background: var(--inputs);
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    margin-bottom: 32px;
`,z=s.svg`
    position: absolute;
    top: 18px;
    left: 18px;
`,j=s.p`
    font-weight: 500;
    margin-bottom: 14px;
`,g=s.p`
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
`,u=s.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 32px;
`,i=s.label`
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
`,t=s(m)`
    display: none;
`,n=s.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`,c=s.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
`,r="/campers/assets/filter-icons-82e3bf4d.svg",B=()=>e.jsx(M,{children:e.jsx($,{initialValues:{checked:[]},onSubmit:l=>{alert(JSON.stringify(l,null,2))},children:e.jsxs(S,{children:[e.jsx(j,{children:"Location"}),e.jsxs(T,{children:[e.jsx(W,{name:"location",placeholder:"City"}),e.jsx(z,{width:"18",height:"20",children:e.jsx("use",{xlinkHref:`${C}#location`})})]}),e.jsx(j,{children:"Filters"}),e.jsxs("div",{children:[e.jsx(g,{id:"checkbox-group",children:"Vehicle equipment"}),e.jsxs(u,{role:"group","aria-labelledby":"checkbox-group",children:[e.jsxs(i,{children:[e.jsx(t,{type:"checkbox",name:"checked",value:"ac"}),e.jsxs(n,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${r}#ac`})}),e.jsx(c,{children:"AC"})]})]}),e.jsxs(i,{children:[e.jsx(t,{type:"checkbox",name:"checked",value:"automatic"}),e.jsxs(n,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${r}#automatic`})}),e.jsx(c,{children:"Automatic"})]})]}),e.jsxs(i,{children:[e.jsx(t,{type:"checkbox",name:"checked",value:"kitchen"}),e.jsxs(n,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${r}#kitchen`})}),e.jsx(c,{children:"Kitchen"})]})]}),e.jsxs(i,{children:[e.jsx(t,{type:"checkbox",name:"checked",value:"tv"}),e.jsxs(n,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${r}#tv`})}),e.jsx(c,{children:"TV"})]})]}),e.jsxs(i,{children:[e.jsx(t,{type:"checkbox",name:"checked",value:"shower"}),e.jsxs(n,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${r}#shower`})}),e.jsx(c,{children:"Shower"})]})]})]})]}),e.jsxs("div",{children:[e.jsx(g,{id:"checkbox-group",children:"Vehicle type"}),e.jsxs(u,{role:"group","aria-labelledby":"checkbox-group",children:[e.jsxs(i,{children:[e.jsx(t,{type:"checkbox",name:"checked",value:"van"}),e.jsxs(n,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${r}#van`})}),e.jsx(c,{children:"Van"})]})]}),e.jsxs(i,{children:[e.jsx(t,{type:"checkbox",name:"checked",value:"fully-integrated"}),e.jsxs(n,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${r}#fully-integrated`})}),e.jsx(c,{children:"Fully Integrated"})]})]}),e.jsxs(i,{children:[e.jsx(t,{type:"checkbox",name:"checked",value:"alcove"}),e.jsxs(n,{children:[e.jsx("svg",{width:"32",height:"32",children:e.jsx("use",{xlinkHref:`${r}#alcove`})}),e.jsx(c,{children:"Alcove"})]})]})]})]}),e.jsx(L,{type:"submit",children:"Submit"})]})})}),I=l=>l.campers.items,G=()=>{const l=w(),o=y(I),[f,b]=x.useState(!1),[d,k]=x.useState(1),a=4,p=x.useMemo(()=>({page:d,limit:a}),[d,a]);x.useEffect(()=>{l(F(p))},[l,p,d]),x.useEffect(()=>{b(o.length%a===0)},[o,a]);const v=()=>{k(h=>h+=1)};return e.jsxs(H,{children:[e.jsx(A,{children:o&&o.length>0&&o.map(h=>e.jsx(V,{camper:h},h._id))}),f&&e.jsx(E,{onClick:v,children:"Load more"})]})},q=s.div`
    display: flex;
    gap: 59px;
`;function K(){return e.jsx("section",{children:e.jsxs(q,{children:[e.jsx(B,{}),e.jsx(G,{})]})})}export{K as default};
