import{x as r}from"./lit-element-c5a2b594.js";import{o as s}from"./unsafe-html-0ddd83da.js";import{l as i}from"./if-defined-c29cffe1.js";import{D as d}from"./docs-5224ca3a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ce2fae80.js";import"./index-1161d1b7.js";import"./iframe-c1be8f8a.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-c470b0da.js";import"./client-fb0f3103.js";const m={default:{control:{type:"text"},table:{type:{summary:"Array<SideNavigationSubItem>"}}}},p={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"},c="ui5-side-navigation-item",B={title:"Fiori/Side Navigation/Side Navigation Item",component:"SideNavigationItem",parameters:{docs:{page:d({...p,component:c,showDefaultStoryOnly:!0})}},argTypes:m},g=e=>r`
<ui5-side-navigation>
    <ui5-side-navigation-item
        text="${i(e.text)}"
        icon="${i(e.icon)}"
        ?expanded="${i(e.expanded)}"
        ?whole-item-toggleable="${i(e.wholeItemToggleable)}"
        href="${i(e.href)}"
        ?selected="${i(e.selected)}"
        target="${i(e.target)}"
    >
        ${s(e.default)}
    </ui5-side-navigation-item>
</ui5-side-navigation>`,t=g.bind({});t.tags=["_hidden_"];t.args={text:"Events",icon:"calendar",expanded:!0,default:'<ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>',selected:!0};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const E=["Basic"];export{t as Basic,E as __namedExportsOrder,B as default};
