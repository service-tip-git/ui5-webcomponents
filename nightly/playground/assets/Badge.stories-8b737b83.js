import{x as s}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as m}from"./unsafe-html-0ddd83da.js";import{D as k}from"./docs-5224ca3a.js";import{B as n}from"./BadgeDesign-c6b901ab.js";import{W as u}from"./WrappingType-b81e595a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ce2fae80.js";import"./index-1161d1b7.js";import"./iframe-c1be8f8a.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-c470b0da.js";import"./client-fb0f3103.js";const E={design:{control:"select",options:["Set1","Set2","Set3","Neutral","Information","Positive","Negative","Critical"]},wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}},icon:{control:{type:"text"},table:{type:{summary:"Array<IIcon>"}}}},O={package:"@ui5/webcomponents",since:"0.12.0"},j="ui5-badge",te={title:"Main/Badge",component:"Badge",parameters:{docs:{page:k({...O,component:j})}},argTypes:E},a=r=>s`
<ui5-badge
    design="${t(r.design)}"
    color-scheme="${t(r.colorScheme)}"
    ?interactive="${t(r.interactive)}"
    ?hide-state-icon="${t(r.hideStateIcon)}"
    wrapping-type="${t(r.wrappingType)}"
    style="${t(r.style)}"
>
    ${m(r.icon)}
    ${m(r.default)}
</ui5-badge>`,o=a.bind({});o.args={colorScheme:"6",default:"Badge Text"};const d=a.bind({});d.args={design:n.Positive,interactive:!0,default:"Success"};const c=a.bind({});c.decorators=[(r,{args:e})=>s`
<div style="display: flex; flex-direction: column; align-items: start; gap: 1rem">
    ${r({args:{...e,default:e.default||"This would truncate as it is too long",wrappingType:e.wrappingType||u.None,style:"width: 200px"}})}
    ${r({args:{...e,default:e.default||"This would wrap as it is too long",wrappingType:e.wrappingType||u.Normal,style:"width: 200px"}})}
</div>`];const g=a.bind({});g.decorators=[(r,e)=>s`
<div style="display: flex; flex-direction: column; align-items: start; gap: 1rem">
        ${[n.Neutral,n.Information,n.Positive,n.Negative,n.Critical,n.Set1,n.Set2,n.Set3].map(i=>r({args:{design:e.args.design||i,default:e.args.default||i}}))}
</div>`];const p=a.bind({});p.decorators=[(r,e)=>s`
<div style="display: flex; flex-direction: column; align-items: start; gap: 1rem">
        ${[1,2,3,4,5,6,7,8,9,10].map(i=>r({args:{design:e.args.design||n.Set1,colorScheme:e.args.colorScheme||i.toString(),default:e.args.default||"Color Scheme "+i}}))}
</div>`];const f=a.bind({});f.decorators=[(r,e)=>s`
<div style="display: flex; flex-direction: column; align-items: start; gap: 1rem">
        ${[1,2,3,4,5,6,7,8,9,10].map(i=>r({args:{design:e.args.design||n.Set2,colorScheme:e.args.colorScheme||i.toString(),default:e.args.default||"Color Scheme "+i}}))}
</div>`];const l=a.bind({});l.decorators=[(r,e)=>s`
<div style="display: flex; flex-direction: column; align-items: start; gap: 1rem">
        ${[1,2,3,4,5,6,7,8,9,10].map(i=>r({args:{design:e.args.design||n.Set3,colorScheme:e.args.colorScheme||i.toString(),default:e.args.default||"Color Scheme "+i}}))}
</div>`];var $,y,h;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    design="\${ifDefined(args.design)}"
    color-scheme="\${ifDefined(args.colorScheme)}"
    ?interactive="\${ifDefined(args.interactive)}"
    ?hide-state-icon="\${ifDefined(args.hideStateIcon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,D,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    design="\${ifDefined(args.design)}"
    color-scheme="\${ifDefined(args.colorScheme)}"
    ?interactive="\${ifDefined(args.interactive)}"
    ?hide-state-icon="\${ifDefined(args.hideStateIcon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var v,b,w;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    design="\${ifDefined(args.design)}"
    color-scheme="\${ifDefined(args.colorScheme)}"
    ?interactive="\${ifDefined(args.interactive)}"
    ?hide-state-icon="\${ifDefined(args.hideStateIcon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var I,M,H;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    design="\${ifDefined(args.design)}"
    color-scheme="\${ifDefined(args.colorScheme)}"
    ?interactive="\${ifDefined(args.interactive)}"
    ?hide-state-icon="\${ifDefined(args.hideStateIcon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(H=(M=g.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var L,x,N;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    design="\${ifDefined(args.design)}"
    color-scheme="\${ifDefined(args.colorScheme)}"
    ?interactive="\${ifDefined(args.interactive)}"
    ?hide-state-icon="\${ifDefined(args.hideStateIcon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(N=(x=p.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var B,C,P;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    design="\${ifDefined(args.design)}"
    color-scheme="\${ifDefined(args.colorScheme)}"
    ?interactive="\${ifDefined(args.interactive)}"
    ?hide-state-icon="\${ifDefined(args.hideStateIcon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(P=(C=f.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var W,_,A;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    design="\${ifDefined(args.design)}"
    color-scheme="\${ifDefined(args.colorScheme)}"
    ?interactive="\${ifDefined(args.interactive)}"
    ?hide-state-icon="\${ifDefined(args.hideStateIcon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const se=["Basic","Interactive","WrappingTypes","Designs","Set1","Set2","Set3"];export{o as Basic,g as Designs,d as Interactive,p as Set1,f as Set2,l as Set3,c as WrappingTypes,se as __namedExportsOrder,te as default};
