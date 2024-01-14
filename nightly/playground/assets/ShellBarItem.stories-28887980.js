import{x as a}from"./lit-element-c5a2b594.js";import{l as e}from"./if-defined-c29cffe1.js";import{D as l}from"./docs-84040a3f.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-4f103317.js";import"./index-1ddc0cbe.js";import"./iframe-b6eaac03.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-40facfd7.js";import"./client-fb0f3103.js";const n={},m={package:"@ui5/webcomponents-fiori"},p="ui5-shellbar-item",P={title:"Fiori/ShellBar/ShellBarItem",component:"ShellBarItem",parameters:{docs:{page:l({...m,component:p,showDefaultStoryOnly:!0})}},argTypes:n},c=o=>a`<ui5-shellbar
    primary-title="Corporate Portal"
>
    <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
    <ui5-shellbar-item
        icon="${e(o.icon)}"
        text="${e(o.text)}"
        count="${e(o.count)}"
    ></ui5-shellbar-item>

</ui5-shellbar>`,t=c.bind({});t.tags=["_hidden_"];t.args={text:"2 notifications",icon:"bell",count:"2"};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => html\`<ui5-shellbar
    primary-title="Corporate Portal"
>
    <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
    <ui5-shellbar-item
        icon="\${ifDefined(args.icon)}"
        text="\${ifDefined(args.text)}"
        count="\${ifDefined(args.count)}"
    ></ui5-shellbar-item>

</ui5-shellbar>\``,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const w=["Basic"];export{t as Basic,w as __namedExportsOrder,P as default};
