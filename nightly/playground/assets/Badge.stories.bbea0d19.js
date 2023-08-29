import{x as S}from"./lit-element.3a4d34a1.js";import{l as i}from"./if-defined.d89d00ab.js";import{o as l}from"./unsafe-html.3b27b0e6.js";import{D as T}from"./docs.ece01ac0.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.5a005b0e.js";import"./iframe.63eb5b9a.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.c32f000a.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const D={default:{control:{type:"text"}},icon:{control:{type:"text"}}},L={package:"@ui5/webcomponents",since:"0.12.0"},M="ui5-badge",z={title:"Main/Badge",component:"Badge",parameters:{docs:{page:T({...L,component:M})}},argTypes:D},s=e=>S`
<ui5-badge
    color-scheme="${i(e.colorScheme)}"
    style="${i(e.style)}"
>
    ${l(e.icon)}
    ${l(e.default)}
</ui5-badge>`,n=s.bind({});n.args={colorScheme:"6",icon:'<ui5-icon name="pending" slot="icon"></ui5-icon>',default:"Pending"};const r=s.bind({});r.args={default:"This would truncate as it is too long",style:"width: 200px"};const o=e=>`<ui5-icon name="${e}" slot="icon"></ui5-icon>`,H=[{icon:o("accept"),default:""},{icon:o("sap-ui5"),default:""},{icon:o("add-equipment"),default:"In progress"},{icon:o("lab"),default:""},{icon:o("email-read"),default:""},{icon:"",default:"Pending"},{icon:o("lightbulb"),default:"New idea"},{icon:o("locked"),default:"Locked"},{icon:o("flight"),default:"En route"},{icon:"",default:"Archived"}],a=s.bind({});a.decorators=[(e,t)=>S`
            ${H.map((c,y)=>e({args:{colorScheme:t.args.colorScheme||(y+1).toString(),icon:t.args.icon||c.icon,default:t.args.default||c.default}}))}`];var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,p,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,$,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(b=($=a.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const F=["Basic","Truncating","AllColorSchemes"];export{a as AllColorSchemes,n as Basic,r as Truncating,F as __namedExportsOrder,z as default};
//# sourceMappingURL=Badge.stories.bbea0d19.js.map
