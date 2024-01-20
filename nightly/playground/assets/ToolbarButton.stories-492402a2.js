import{x as r}from"./lit-element-c5a2b594.js";import{l as e}from"./if-defined-c29cffe1.js";import{D as s}from"./docs-5224ca3a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ce2fae80.js";import"./index-1161d1b7.js";import"./iframe-c1be8f8a.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-c470b0da.js";import"./client-fb0f3103.js";const c={design:{control:"select",options:["Default","Positive","Negative","Transparent","Emphasized","Attention"]},overflowPriority:{control:"select",options:["Default","NeverOverflow","AlwaysOverflow"]}},l={package:"@ui5/webcomponents",since:"1.17.0"},b="ui5-toolbar-button",S={title:"Main/Toolbar/Toolbar Button",component:"ToolbarButton",argTypes:c,parameters:{docs:{page:s({...l,component:b,showDefaultStoryOnly:!0})}}},d=t=>r`
<ui5-toolbar align-content="Start">
    <ui5-toolbar-button
        text="${e(t.text)}"
        accessibility-attributes="${e(t.accessibilityAttributes)}"
        accessible-name="${e(t.accessibleName)}"
        accessible-name-ref="${e(t.accessibleNameRef)}"
        design="${e(t.design)}"
        ?disabled="${e(t.disabled)}"
        icon="${e(t.icon)}"
        ?icon-end="${e(t.iconEnd)}"
        tooltip="${e(t.tooltip)}"
        width="${e(t.width)}"
    ></ui5-toolbar-button>
</ui5-toolbar>`,o=d.bind({});o.tags=["_hidden_"];o.args={text:"Simple toolbar button"};var i,n,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return html\`
<ui5-toolbar align-content="Start">
    <ui5-toolbar-button
        text="\${ifDefined(args.text)}"
        accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        design="\${ifDefined(args.design)}"
        ?disabled="\${ifDefined(args.disabled)}"
        icon="\${ifDefined(args.icon)}"
        ?icon-end="\${ifDefined(args.iconEnd)}"
        tooltip="\${ifDefined(args.tooltip)}"
        width="\${ifDefined(args.width)}"
    ></ui5-toolbar-button>
</ui5-toolbar>\`;
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const _=["Basic"];export{o as Basic,_ as __namedExportsOrder,S as default};
