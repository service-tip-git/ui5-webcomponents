import{x as s}from"./lit-element-c5a2b594.js";import{D as a}from"./docs-e23e4e8f.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as m}from"./unsafe-html-0ddd83da.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-524bafb2.js";import"./index-a68b1905.js";import"./iframe-a4e8f984.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-470159da.js";import"./client-fb0f3103.js";const p={closeIcon:{control:{type:"text"},table:{type:{summary:"Array<IIcon>"}}}},c={package:"@ui5/webcomponents",since:"1.0.0-rc.9"},l="ui5-token",B={title:"Main/Multi Input/Token",component:"Token",parameters:{docs:{page:a({...c,component:l,showDefaultStoryOnly:!0})}},argTypes:p},u=e=>s`
<ui5-multi-input>
    <ui5-token
        slot="tokens"
        text="${o(e.text)}"
        ?selected="${o(e.selected)}"
        ?readonly="${o(e.readonly)}"
    >
    ${m(e.closeIcon)}
    </ui5-token>
</ui5-multi-input>`,t=u.bind({});t.tags=["_hidden_"];t.args={text:"Argentina"};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
<ui5-multi-input>
    <ui5-token
        slot="tokens"
        text="\${ifDefined(args.text)}"
        ?selected="\${ifDefined(args.selected)}"
        ?readonly="\${ifDefined(args.readonly)}"
    >
    \${unsafeHTML(args.closeIcon)}
    </ui5-token>
</ui5-multi-input>\``,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const O=["Basic"];export{t as Basic,O as __namedExportsOrder,B as default};
