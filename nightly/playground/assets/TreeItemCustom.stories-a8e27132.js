import{x as s}from"./lit-element-c5a2b594.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as c}from"./docs-7cc24d98.js";import{l as t}from"./if-defined-c29cffe1.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ac52f94c.js";import"./index-c5b45678.js";import"./iframe-ac31e5f8.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-bb8a36b5.js";import"./client-fb0f3103.js";const m={additionalTextState:{control:"select",options:["None","Success","Warning","Error","Information"]},type:{control:"select",options:["Inactive","Active","Detail","Navigation"]},content:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},default:{control:{type:"text"},table:{type:{summary:"Array<TreeItemBase>"}}},deleteButton:{control:{type:"text"},table:{type:{summary:"Array<IButton>"}}},toggle:{description:"Call this method to manually switch the <code>expanded</code> state of a tree item.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}}},d={package:"@ui5/webcomponents",since:"1.9.2"},l="ui5-tree-item-custom",A={title:"Main/Tree/Tree Item Custom",component:"TreeItemCustom",parameters:{docs:{page:c({...d,component:l,showDefaultStoryOnly:!0})}},argTypes:m},u=e=>s`<ui5-tree>
    <ui5-tree-item-custom
        hide-selection-element="${t(e.hideSelectionElement)}"
        accessible-name="${t(e.accessibleName)}"
        additional-text-state="${t(e.additionalTextState)}"
        expanded="${t(e.expanded)}"
        has-children="${t(e.hasChildren)}"
        icon="${t(e.icon)}"
        indeterminate="${t(e.indeterminate)}"
        accessibility-attributes="${t(e.accessibilityAttributes)}"
        navigated="${t(e.navigated)}"
        type="${t(e.type)}"
        selected="${t(e.selected)}"
    >
        ${n(e.content)}
        ${n(e.default)}
        ${n(e.deleteButton)}
    </ui5-tree-item-custom>
</ui5-tree>`,i=u.bind({});i.tags=["_hidden_"];i.args={expanded:!0,content:'<ui5-button slot="content">Level 1</ui5-button>',default:`<ui5-tree-item-custom>
    <ui5-button slot="content">Level 2</ui5-button>
    <ui5-tree-item-custom>
        <ui5-button slot="content">Level 3</ui5-button>
    </ui5-tree-item-custom>
</ui5-tree-item-custom>`};var o,a,r;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`args => html\`<ui5-tree>
    <ui5-tree-item-custom
        hide-selection-element="\${ifDefined(args.hideSelectionElement)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        additional-text-state="\${ifDefined(args.additionalTextState)}"
        expanded="\${ifDefined(args.expanded)}"
        has-children="\${ifDefined(args.hasChildren)}"
        icon="\${ifDefined(args.icon)}"
        indeterminate="\${ifDefined(args.indeterminate)}"
        accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
        navigated="\${ifDefined(args.navigated)}"
        type="\${ifDefined(args.type)}"
        selected="\${ifDefined(args.selected)}"
    >
        \${unsafeHTML(args.content)}
        \${unsafeHTML(args.default)}
        \${unsafeHTML(args.deleteButton)}
    </ui5-tree-item-custom>
</ui5-tree>\``,...(r=(a=i.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const E=["Basic"];export{i as Basic,E as __namedExportsOrder,A as default};
