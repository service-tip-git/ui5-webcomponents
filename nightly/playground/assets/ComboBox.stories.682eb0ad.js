import{x as h}from"./lit-element.3a4d34a1.js";import{l as i}from"./if-defined.d89d00ab.js";import{o as s}from"./unsafe-html.3b27b0e6.js";import{D as v}from"./docs.cb44e419.js";import{C as B}from"./ComboBoxFilter.2b008b60.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.5175cfc5.js";import"./iframe.1d3ccefd.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.f2003a94.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const y={filter:{control:"select",options:["Contains","None","StartsWith","StartsWithPerTerm"]},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"sap.ui.webc.main.IComboBoxItem",description:"item to be selected."}]}}},C={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},T="ui5-combobox",W={title:"Main/Combo Box",component:"ComboBox",subcomponents:{ComboBoxItem:"ComboBoxItem",ComboBoxGroupItem:"ComboBoxGroupItem"},parameters:{docs:{page:v({...C,component:T})}},argTypes:y},o=e=>h`<ui5-combobox
        value="${i(e.value)}"
        placeholder="${i(e.placeholder)}"
        ?disabled="${i(e.disabled)}"
        ?readonly="${i(e.readonly)}"
        ?required="${i(e.required)}"
        ?loading="${i(e.loading)}"
        filter="${i(e.filter)}"
        value-state="${i(e.valueState)}"
        accessible-name="${i(e.accessibleName)}"
        accessible-name-ref="${i(e.accessibleNameRef)}"
>
        ${s(e.default)}
        ${s(e.valueStateMessage)}
        ${s(e.icon)}
</ui5-combobox>`,a=o.bind({});a.args={placeholder:"Enter value",default:`
    <ui5-cb-item text="Austria"></ui5-cb-item>
    <ui5-cb-item text="Bulgaria"></ui5-cb-item>
    <ui5-cb-item text="Germany"></ui5-cb-item>
    <ui5-cb-item text="Italy"></ui5-cb-item>
    <ui5-cb-item text="Spain"></ui5-cb-item>
    `};const t=o.bind({});t.args={placeholder:"Contains Filtering",filter:B.Contains,default:`
        <ui5-cb-item text="Austria"></ui5-cb-item>
        <ui5-cb-item text="Bulgaria"></ui5-cb-item>
        <ui5-cb-item text="Germany"></ui5-cb-item>
        <ui5-cb-item text="Kazakhstan"></ui5-cb-item>
        <ui5-cb-item text="The United Kingdom of Great Britain and Northern Ireland"></ui5-cb-item>
    `};const r=o.bind({});r.args={placeholder:"Two-column layout",default:`
        <ui5-cb-item text="Austria" additional-text="AT"></ui5-cb-item>
        <ui5-cb-item text="Belgium" additional-text="BE"></ui5-cb-item>
        <ui5-cb-item text="Brazil" additional-text="BR"></ui5-cb-item>
        <ui5-cb-item text="Bulgaria" additional-text="BG"></ui5-cb-item>
        <ui5-cb-item text="Canada" additional-text="CA"></ui5-cb-item>
        <ui5-cb-item text="The United Kingdom of Great Britain and Northern Ireland" additional-text="UK"></ui5-cb-item>
    `};const n=o.bind({});n.args={placeholder:"Grouping of items",default:`
        <ui5-cb-group-item text="A"></ui5-cb-group-item>
        <ui5-cb-item text="Argentina"></ui5-cb-item>
        <ui5-cb-item text="Australia"></ui5-cb-item>	
        <ui5-cb-item text="Austria"></ui5-cb-item>	
        <ui5-cb-group-item text="B"></ui5-cb-group-item>
        <ui5-cb-item text="Bahrain"></ui5-cb-item>
        <ui5-cb-item text="Belgium"></ui5-cb-item>
        <ui5-cb-item text="Brazil"></ui5-cb-item>
        <ui5-cb-group-item text="C"></ui5-cb-group-item>
        <ui5-cb-item text="Canada"></ui5-cb-item>
        <ui5-cb-item text="Chile"></ui5-cb-item>
    `};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(f=(d=t.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var b,g,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var $,x,D;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(D=(x=n.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const _=["Basic","Filters","TwoColumnsLayout","Grouping"];export{a as Basic,t as Filters,n as Grouping,r as TwoColumnsLayout,_ as __namedExportsOrder,W as default};
//# sourceMappingURL=ComboBox.stories.682eb0ad.js.map
