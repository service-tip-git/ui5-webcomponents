import{x as s}from"./lit-element-c5a2b594.js";import{o as a}from"./unsafe-html-0ddd83da.js";import{D as d}from"./docs-d97efe99.js";import{l as t}from"./if-defined-c29cffe1.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-a7ea689a.js";import"./index-53d09975.js";import"./iframe-35a4826c.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d1983070.js";import"./client-fb0f3103.js";const c={additionalTextState:{control:"select",options:["None","Success","Warning","Error","Information"]},type:{control:"select",options:["Inactive","Active","Detail","Navigation"]},default:{control:{type:"text"},table:{type:{summary:"Array<TreeItemBase>"}}},deleteButton:{control:{type:"text"},table:{type:{summary:"Array<IButton>"}}},toggle:{description:"Call this method to manually switch the <code>expanded</code> state of a tree item.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}}},m={package:"@ui5/webcomponents",since:"1.0.0-rc.8"},l="ui5-tree-item",C={title:"Main/Tree/Tree Item",component:"TreeItem",parameters:{docs:{page:d({...m,component:l,showDefaultStoryOnly:!0})}},argTypes:c},p=e=>s`<ui5-tree>
    <ui5-tree-item
        additional-text="${t(e.additionalText)}"
        additional-text-state="${t(e.additionalTextState)}"
        text="${t(e.text)}"
        accessible-name="${t(e.accessibleName)}"
        expanded="${t(e.expanded)}"
        has-children="${t(e.hasChildren)}"
        icon="${t(e.icon)}"
        indeterminate="${t(e.indeterminate)}"
        accessibility-attributes="${t(e.accessibilityAttributes)}"
        navigated="${t(e.navigated)}"
        type="${t(e.type)}"
        selected="${t(e.selected)}"
    >
        ${a(e.default)}
        ${a(e.deleteButton)}
    </ui5-tree-item>
</ui5-tree>`,i=p.bind({});i.tags=["_hidden_"];i.args={text:"Tree 1",expanded:!0,icon:"paste",default:`<ui5-tree-item text="Tree 1.1">
    <ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>
</ui5-tree-item>`};var n,r,o;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`<ui5-tree>
    <ui5-tree-item
        additional-text="\${ifDefined(args.additionalText)}"
        additional-text-state="\${ifDefined(args.additionalTextState)}"
        text="\${ifDefined(args.text)}"
        accessible-name="\${ifDefined(args.accessibleName)}"
        expanded="\${ifDefined(args.expanded)}"
        has-children="\${ifDefined(args.hasChildren)}"
        icon="\${ifDefined(args.icon)}"
        indeterminate="\${ifDefined(args.indeterminate)}"
        accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
        navigated="\${ifDefined(args.navigated)}"
        type="\${ifDefined(args.type)}"
        selected="\${ifDefined(args.selected)}"
    >
        \${unsafeHTML(args.default)}
        \${unsafeHTML(args.deleteButton)}
    </ui5-tree-item>
</ui5-tree>\``,...(o=(r=i.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const N=["Basic"];export{i as Basic,N as __namedExportsOrder,C as default};
