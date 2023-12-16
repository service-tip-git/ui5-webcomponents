import{x as S}from"./lit-element-c5a2b594.js";import{l as c}from"./if-defined-c29cffe1.js";import{o as l}from"./unsafe-html-0ddd83da.js";import{D as T}from"./docs-b2812542.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-dcd144d6.js";import"./index-4c998f51.js";import"./iframe-3aaab046.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-PCJTTTQV-00187641.js";import"./client-295e1f1c.js";const D={default:{control:{type:"text"}},icon:{control:{type:"text"}}},L={package:"@ui5/webcomponents",since:"0.12.0"},M="ui5-badge",G={title:"Main/Badge",component:"Badge",parameters:{docs:{page:T({...L,component:M})}},argTypes:D},s=e=>S`
<ui5-badge
    color-scheme="${c(e.colorScheme)}"
    style="${c(e.style)}"
>
    ${l(e.icon)}
    ${l(e.default)}
</ui5-badge>`,r=s.bind({});r.args={colorScheme:"6",icon:'<ui5-icon name="pending" slot="icon"></ui5-icon>',default:"Pending"};const n=s.bind({});n.args={default:"This would truncate as it is too long",style:"width: 200px"};const o=e=>`<ui5-icon name="${e}" slot="icon"></ui5-icon>`,H=[{icon:o("accept"),default:""},{icon:o("sap-ui5"),default:""},{icon:o("add-equipment"),default:"In progress"},{icon:o("lab"),default:""},{icon:o("email-read"),default:""},{icon:"",default:"Pending"},{icon:o("lightbulb"),default:"New idea"},{icon:o("locked"),default:"Locked"},{icon:o("flight"),default:"En route"},{icon:"",default:"Archived"}],t=s.bind({});t.decorators=[(e,a)=>S`
            ${H.map((i,y)=>e({args:{colorScheme:a.args.colorScheme||(y+1).toString(),icon:a.args.icon||i.icon,default:a.args.default||i.default}}))}`];var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,$,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(b=($=t.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const J=["Basic","Truncating","AllColorSchemes"];export{t as AllColorSchemes,r as Basic,n as Truncating,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Badge.stories-23bb7397.js.map
