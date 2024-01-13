import{x as r}from"./lit-element-c5a2b594.js";import{o as s}from"./unsafe-html-0ddd83da.js";import{l as t}from"./if-defined-c29cffe1.js";import{D as d}from"./docs-e6d25d3b.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f1e87d75.js";import"./index-132ff83d.js";import"./iframe-657c8299.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-2e471bae.js";import"./client-fb0f3103.js";const m={default:{control:{type:"text"},table:{type:{}}}},p={package:"@ui5/webcomponents-fiori"},g="ui5-side-navigation-item",B={title:"Fiori/Side Navigation/Side Navigation Item",component:"SideNavigationItem",parameters:{docs:{page:d({...p,component:g,showDefaultStoryOnly:!0})}},argTypes:m},c=e=>r`
<ui5-side-navigation>
    <ui5-side-navigation-item
        text="${t(e.text)}"
        icon="${t(e.icon)}"
        ?expanded="${t(e.expanded)}"
        ?whole-item-toggleable="${t(e.wholeItemToggleable)}"
        href="${t(e.href)}"
        ?selected="${t(e.selected)}"
        target="${t(e.target)}"
    >
        ${s(e.default)}
    </ui5-side-navigation-item>
</ui5-side-navigation>`,i=c.bind({});i.tags=["_hidden_"];i.args={text:"Events",icon:"calendar",expanded:!0,default:'<ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>',selected:!0};var n,o,a;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return html\`
<ui5-side-navigation>
    <ui5-side-navigation-item
        text="\${ifDefined(args.text)}"
        icon="\${ifDefined(args.icon)}"
        ?expanded="\${ifDefined(args.expanded)}"
        ?whole-item-toggleable="\${ifDefined(args.wholeItemToggleable)}"
        href="\${ifDefined(args.href)}"
        ?selected="\${ifDefined(args.selected)}"
        target="\${ifDefined(args.target)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-side-navigation-item>
</ui5-side-navigation>\`;
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const E=["Basic"];export{i as Basic,E as __namedExportsOrder,B as default};
