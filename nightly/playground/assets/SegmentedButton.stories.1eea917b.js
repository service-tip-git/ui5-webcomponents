import{x as b}from"./lit-element.3a4d34a1.js";import{o as f}from"./unsafe-html.3b27b0e6.js";import{l as o}from"./if-defined.d89d00ab.js";import{D as I}from"./docs.6634923b.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.d754db6a.js";import"./iframe.19833d0a.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.cac10534.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const h={mode:{control:"select",options:["MultiSelect","SingleSelect"]},selectedItem:{control:{type:!1}},selectedItems:{control:{type:!1}},default:{control:{type:"text"}},"selection-change":{description:"Fired when the selected item changes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedItem",type:"HTMLElement",description:"the pressed item. Note: deprecated since 1.14.0 and will be removed in the next major release, use the <code>selectedItems</code> parameter instead."},{name:"selectedItems",type:"HTMLElement[]",description:"an array of selected items. Note: available since 1.14.0."}]}}},S={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},$="ui5-segmented-button",j={title:"Main/SegmentedButton",component:"SegmentedButton",subcomponents:{SegmentedButtonItem:"SegmentedButtonItem"},parameters:{docs:{page:I({...S,component:$})}},argTypes:h},m=s=>b`<ui5-segmented-button
    accessible-name="${o(s.accessibleName)}"
    mode="${o(s.mode)}"
>
    ${f(s.default)}
</ui5-segmented-button>`,t=m.bind({});t.args={default:`<ui5-segmented-button-item>Map</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Satellite</ui5-segmented-button-item>
<ui5-segmented-button-item>Terrain</ui5-segmented-button-item>`,accessibleName:"Geographic location"};const n=m.bind({});n.args={default:`<ui5-segmented-button-item icon="employee" pressed=""></ui5-segmented-button-item>
<ui5-segmented-button-item icon="menu"></ui5-segmented-button-item>
<ui5-segmented-button-item icon="factory"></ui5-segmented-button-item>`};const e=m.bind({});e.storyName="More Segmented Button Items";e.args={default:`<ui5-segmented-button-item>Item</ui5-segmented-button-item>
<ui5-segmented-button-item pressed="">Pressed SegmentedButtonItem With Bigger Text</ui5-segmented-button-item>
<ui5-segmented-button-item>Item</ui5-segmented-button-item>
<ui5-segmented-button-item>SegmentedButtonItem</ui5-segmented-button-item>
<ui5-segmented-button-item>Press me</ui5-segmented-button-item>`};var i,a,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n    mode="${ifDefined(args.mode)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var d,u,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n    mode="${ifDefined(args.mode)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,l,p;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-segmented-button\n    accessible-name="${ifDefined(args.accessibleName)}"\n    mode="${ifDefined(args.mode)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-segmented-button>`',...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const k=["Basic","WithIcons","WithMoreItems"];export{t as Basic,n as WithIcons,e as WithMoreItems,k as __namedExportsOrder,j as default};
//# sourceMappingURL=SegmentedButton.stories.1eea917b.js.map
