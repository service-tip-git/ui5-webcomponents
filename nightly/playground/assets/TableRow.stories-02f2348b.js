import{x as n}from"./lit-element-c5a2b594.js";import{D as l}from"./docs-5224ca3a.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as s}from"./unsafe-html-0ddd83da.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ce2fae80.js";import"./index-1161d1b7.js";import"./iframe-c1be8f8a.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-c470b0da.js";import"./client-fb0f3103.js";const p={type:{control:"select",options:["Inactive","Active"]},default:{control:{type:"text"},table:{type:{summary:"Array<TableCell>"}}}},c={package:"@ui5/webcomponents"},m="ui5-table-row",k={title:"Main/Table/Table Row",component:"TableRow",parameters:{docs:{page:l({...c,component:m,showDefaultStoryOnly:!0})}},argTypes:p},u=t=>n`
<ui5-table>
    <ui5-table-column slot="columns">
        <span>Product</span>
    </ui5-table-column>
    <ui5-table-row
        ?navigated=${o(t.navigated)}
        ?selected=${o(t.selected)}
        type=${o(t.type)}
    >${s(t.default)}</ui5-table-row>
</ui5-table>
`,e=u.bind({});e.tags=["_hidden_"];e.args={default:`<ui5-table-cell>
    Notebook Basic 15
</ui5-table-cell>`};var a,r,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => html\`
<ui5-table>
    <ui5-table-column slot="columns">
        <span>Product</span>
    </ui5-table-column>
    <ui5-table-row
        ?navigated=\${ifDefined(args.navigated)}
        ?selected=\${ifDefined(args.selected)}
        type=\${ifDefined(args.type)}
    >\${unsafeHTML(args.default)}</ui5-table-row>
</ui5-table>
\``,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const A=["Basic"];export{e as Basic,A as __namedExportsOrder,k as default};
