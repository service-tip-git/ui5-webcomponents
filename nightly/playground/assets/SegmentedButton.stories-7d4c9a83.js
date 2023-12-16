import{x as u}from"./lit-element-c5a2b594.js";import{o as l}from"./unsafe-html-0ddd83da.js";import{l as o}from"./if-defined-c29cffe1.js";import{D as p}from"./docs-b2812542.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-dcd144d6.js";import"./index-4c998f51.js";import"./iframe-3aaab046.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-PCJTTTQV-00187641.js";import"./client-295e1f1c.js";const g={mode:{control:"select",options:["MultiSelect","SingleSelect"]},selectedItem:{control:{type:!1}},selectedItems:{control:{type:!1}},default:{control:{type:"text"}},"selection-change":{description:"Fired when the selected item changes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedItem",type:"HTMLElement",description:"the pressed item. Note: deprecated since 1.14.0 and will be removed in the next major release, use the <code>selectedItems</code> parameter instead."},{name:"selectedItems",type:"HTMLElement[]",description:"an array of selected items. Note: available since 1.14.0."}]}}},b={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},f="ui5-segmented-button",W={title:"Main/SegmentedButton",component:"SegmentedButton",subcomponents:{SegmentedButtonItem:"SegmentedButtonItem"},parameters:{docs:{page:p({...b,component:f})}},argTypes:g},d=n=>u`<ui5-segmented-button
    accessible-name="${o(n.accessibleName)}"
    mode="${o(n.mode)}"
>
    ${l(n.default)}
</ui5-segmented-button>`,e=d.bind({});e.args={default:`<ui5-segmented-button-item>Map</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Satellite</ui5-segmented-button-item>
<ui5-segmented-button-item>Terrain</ui5-segmented-button-item>`,accessibleName:"Geographic location"};const t=d.bind({});t.args={default:`<ui5-segmented-button-item icon="bold-text" pressed=""></ui5-segmented-button-item>
<ui5-segmented-button-item icon="underline-text"></ui5-segmented-button-item>
<ui5-segmented-button-item icon="italic-text"></ui5-segmented-button-item>`};var s,i,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n    mode="${ifDefined(args.mode)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var a,r,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n    mode="${ifDefined(args.mode)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const j=["Basic","WithIcons"];export{e as Basic,t as WithIcons,j as __namedExportsOrder,W as default};
//# sourceMappingURL=SegmentedButton.stories-7d4c9a83.js.map
