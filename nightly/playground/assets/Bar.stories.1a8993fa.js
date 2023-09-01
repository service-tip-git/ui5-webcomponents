import{x as a}from"./lit-element.3a4d34a1.js";import{l as s}from"./if-defined.d89d00ab.js";import{o as e}from"./unsafe-html.3b27b0e6.js";import{D as p}from"./docs.5b0d9211.js";import{B as m}from"./BarDesign.a5102321.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.2923eae9.js";import"./iframe.5c11fbe4.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.b97dbf58.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const c={design:{control:"select",options:["FloatingFooter","Footer","Header","Subheader"]},default:{control:{type:"text"}},endContent:{control:{type:"text"}},startContent:{control:{type:"text"}}},d={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.11"},u="ui5-bar",G={title:"Fiori/Bar",component:"Bar",parameters:{docs:{page:p({...d,component:u})}},argTypes:c},l=o=>a`<ui5-bar
    design="${s(o.design)}"
>
    ${e(o.default)}
    ${e(o.startContent)}
    ${e(o.endContent)}
</ui5-bar>`,t=l.bind({});t.storyName="With Content and Design";t.args={design:m.Header,startContent:'<ui5-button icon="home" tooltip="Go home" design="Transparent" slot="startContent"></ui5-button>',default:'<ui5-label id="basic-label">Content</ui5-label>',endContent:'<ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>'};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:'args => html`<ui5-bar\n    design="${ifDefined(args.design)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.startContent)}\n    ${unsafeHTML(args.endContent)}\n</ui5-bar>`',...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const S=["Basic"];export{t as Basic,S as __namedExportsOrder,G as default};
//# sourceMappingURL=Bar.stories.1a8993fa.js.map
