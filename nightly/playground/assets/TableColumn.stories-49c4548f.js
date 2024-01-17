import{x as p}from"./lit-element-c5a2b594.js";import{D as l}from"./docs-7cc24d98.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as r}from"./unsafe-html-0ddd83da.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ac52f94c.js";import"./index-c5b45678.js";import"./iframe-ac31e5f8.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-bb8a36b5.js";import"./client-fb0f3103.js";const s={popinDisplay:{control:"select",options:["Block","Inline"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}}},m={package:"@ui5/webcomponents"},u="ui5-table-column",N={title:"Main/Table/Table Column",component:"TableColumn",parameters:{docs:{page:l({...m,component:u,showDefaultStoryOnly:!0})}},argTypes:s},c=e=>p`
<ui5-table>
    <ui5-table-column
        slot="columns"
        ?demand-popin="${t(e.demandPopin)}"
        min-width="${t(e.minWidth)}"
        popin-display="${t(e.popinDisplay)}"
        popin-text="${t(e.popinText)}"
    >
        ${r(e.default)}
    </ui5-table-column>
    <ui5-table-row>
        <ui5-table-cell>
            <span>Notebook Basic 15</span>
        </ui5-table-cell>
    </ui5-table-row>
</ui5-table>
`,o=c.bind({});o.tags=["_hidden_"];o.args={default:"<span>Product</span>"};var n,i,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
<ui5-table>
    <ui5-table-column
        slot="columns"
        ?demand-popin="\${ifDefined(args.demandPopin)}"
        min-width="\${ifDefined(args.minWidth)}"
        popin-display="\${ifDefined(args.popinDisplay)}"
        popin-text="\${ifDefined(args.popinText)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-table-column>
    <ui5-table-row>
        <ui5-table-cell>
            <span>Notebook Basic 15</span>
        </ui5-table-cell>
    </ui5-table-row>
</ui5-table>
\``,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const I=["Basic"];export{o as Basic,I as __namedExportsOrder,N as default};
