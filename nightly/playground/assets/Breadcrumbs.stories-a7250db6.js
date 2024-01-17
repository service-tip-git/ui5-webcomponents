import{x as n}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as d}from"./unsafe-html-0ddd83da.js";import{D as o}from"./docs-7cc24d98.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ac52f94c.js";import"./index-c5b45678.js";import"./iframe-ac31e5f8.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-bb8a36b5.js";import"./client-fb0f3103.js";const p={design:{control:"select",options:["Standard","NoCurrentPage"]},separatorStyle:{control:"select",options:["Slash","BackSlash","DoubleBackSlash","DoubleGreaterThan","DoubleSlash","GreaterThan"]},default:{control:{type:"text"},table:{type:{summary:"Array<BreadcrumbsItem>"}}},"item-click":{description:`Fires when a <code>BreadcrumbsItem</code> is clicked.
<b>Note:</b> You can prevent browser location change by calling <code>event.preventDefault()</code>.`,control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The clicked item."},{type:{text:"Boolean"},name:"altKey",_ui5privacy:"public",description:'Returns whether the "ALT" key was pressed when the event was triggered.'},{type:{text:"Boolean"},name:"ctrlKey",_ui5privacy:"public",description:'Returns whether the "CTRL" key was pressed when the event was triggered.'},{type:{text:"Boolean"},name:"metaKey",_ui5privacy:"public",description:'Returns whether the "META" key was pressed when the event was triggered.'},{type:{text:"Boolean"},name:"shiftKey",_ui5privacy:"public",description:'Returns whether the "SHIFT" key was pressed when the event was triggered.'}]}}},w={package:"@ui5/webcomponents",since:"1.0.0-rc.15"},h="ui5-breadcrumbs",$={title:"Main/Breadcrumbs",component:"Breadcrumbs",parameters:{docs:{page:o({...w,component:h})}},argTypes:p},l=t=>n`<ui5-breadcrumbs
        design="${a(t.design)}"
        separator-style="${a(t.separatorStyle)}"
    >
    ${d(t.default)}
</ui5-breadcrumbs>`,e=l.bind({});e.args={default:`<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>
    <ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
    <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
    `};const r=()=>n`
    <div>
        <ui5-breadcrumbs design ="NoCurrentPage" separator-style="Slash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page   (ui5-breadcrumbs desing="NoCurrentPage")</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="BackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleBackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleGreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="GreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
`;var s,i,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-breadcrumbs\n        design="${ifDefined(args.design)}"\n        separator-style="${ifDefined(args.separatorStyle)}"\n    >\n    ${unsafeHTML(args.default)}\n</ui5-breadcrumbs>`',...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,b,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => html\`
    <div>
        <ui5-breadcrumbs design ="NoCurrentPage" separator-style="Slash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page   (ui5-breadcrumbs desing="NoCurrentPage")</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="BackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleBackSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleGreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleSlash">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="GreaterThan">
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.sap.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
\``,...(c=(b=r.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const I=["Basic","SeparatorStyle"];export{e as Basic,r as SeparatorStyle,I as __namedExportsOrder,$ as default};
