import{x as s}from"./lit-element-c5a2b594.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as l}from"./unsafe-html-0ddd83da.js";import{D as n}from"./docs-5224ca3a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ce2fae80.js";import"./index-1161d1b7.js";import"./iframe-c1be8f8a.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-c470b0da.js";import"./client-fb0f3103.js";const c={valueState:{control:"select",options:["None","Success","Warning","Error","Information"]},overflowPriority:{control:"select",options:["Default","NeverOverflow","AlwaysOverflow"]},default:{control:{type:"text"},table:{type:{summary:"Array<ToolbarSelectOption>"}}},change:{description:"Fired when the selected option changes.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"HTMLElement"},name:"selectedOption",_ui5privacy:"public",description:"the selected option."}]}}},p={package:"@ui5/webcomponents",since:"1.17.0"},m="ui5-toolbar-select",E={title:"Main/Toolbar/Toolbar Select",component:"ToolbarSelect",argTypes:c,parameters:{docs:{page:n({...p,component:m,showDefaultStoryOnly:!0})}}},u=e=>s`
<ui5-toolbar align-content="Start">
    <ui5-toolbar-select
        accessible-name="${o(e.accessibleName)}"
        accessible-name-ref="${o(e.accessibleNameRef)}"
        ?disabled="${o(e.disabled)}"
        value-state="${o(e.valueState)}"
        width="${o(e.width)}"
    >
        ${l(e.default)}
    </ui5-toolbar-select>
</ui5-toolbar>`,t=u.bind({});t.tags=["_hidden_"];t.args={default:`<ui5-toolbar-select-option>Toolbar select option 1</ui5-toolbar-select-option>
<ui5-toolbar-select-option>Toolbar select option 2</ui5-toolbar-select-option>`};var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return html\`
<ui5-toolbar align-content="Start">
    <ui5-toolbar-select
        accessible-name="\${ifDefined(args.accessibleName)}"
        accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
        ?disabled="\${ifDefined(args.disabled)}"
        value-state="\${ifDefined(args.valueState)}"
        width="\${ifDefined(args.width)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-toolbar-select>
</ui5-toolbar>\`;
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const I=["Basic"];export{t as Basic,I as __namedExportsOrder,E as default};
