import{x as C}from"./lit-element.3a4d34a1.js";import{D as S}from"./docs.f9c5443e.js";import{o as r}from"./unsafe-html.3b27b0e6.js";import{l as i}from"./if-defined.d89d00ab.js";import{V as T}from"./ValueState.7d8e1d89.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.6ccbd5f5.js";import"./iframe.4f75b135.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.c1ffe071.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const B={filter:{control:"select",options:["Contains","None","StartsWith","StartsWithPerTerm"]},open:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"items",type:"Array",description:"an array of the selected items."}]}}},w={package:"@ui5/webcomponents",since:"0.11.0"},N="ui5-multi-combobox",j={title:"Main/MultiComboBox",component:"MultiComboBox",subcomponents:{MultiComboBoxItem:"MultiComboBoxItem",MultiComboBoxGroupItem:"MultiComboBoxGroupItem"},parameters:{docs:{page:S({...w,component:N})}},argTypes:B},m=e=>C`
<ui5-multi-combobox
    value="${i(e.value)}"
    ?no-typeahead="${i(e.noTypeahead)}"
    placeholder="${i(e.placeholder)}"
    ?allow-custom-values="${i(e.allowCustomValues)}"
    ?disabled="${i(e.disabled)}"
    value-state="${i(e.valueState)}"
    ?readonly="${i(e.readonly)}"
    ?required="${i(e.required)}"
    filter="${i(e.filter)}"
    ?open="${i(e.open)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
>
    ${r(e.default)}
    ${r(e.icon)}
    ${r(e.valueStateMessage)}
</ui5-multi-combobox>`,s=m.bind({});s.args={placeholder:"Type your value",default:'<ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>'};const t=m.bind({});t.args={placeholder:"Choose your countries",default:`
    <ui5-mcb-item selected="" text="Argentina"></ui5-mcb-item>
    <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
    <ui5-mcb-item text="Denmark"></ui5-mcb-item>
    <ui5-mcb-item text="England"></ui5-mcb-item>
    <ui5-mcb-item text="Albania"></ui5-mcb-item>
    <ui5-mcb-item text="Morocco"></ui5-mcb-item>
    <ui5-mcb-item text="Portugal"></ui5-mcb-item>
    <ui5-mcb-item text="Germany"></ui5-mcb-item>
    <ui5-mcb-item text="Philippines"></ui5-mcb-item>
    <ui5-mcb-item text="Paraguay"></ui5-mcb-item>`};t.storyName="Multi Combo Box with items";const a=m.bind({});a.args={placeholder:"Choose your state",valueState:T.Success,allowCustomValues:!0,default:`
    <ui5-mcb-item text="Fortune"></ui5-mcb-item>
    <ui5-mcb-item text="Luck"></ui5-mcb-item>
    <ui5-mcb-item selected="" text="Success"></ui5-mcb-item>
    <ui5-mcb-item text="Attention"></ui5-mcb-item>
    <ui5-mcb-item text="Caution"></ui5-mcb-item>
    <ui5-mcb-item text="Warning"></ui5-mcb-item>
    <ui5-mcb-item text="Fault"></ui5-mcb-item>
    <ui5-mcb-item text="Error"></ui5-mcb-item>
    <ui5-mcb-item text="Mistake"></ui5-mcb-item>`};a.storyName="Multi Combo Box with free text input";const o=m.bind({});o.args={placeholder:"Select a country",default:`
    <ui5-mcb-group-item text="Asia"></ui5-mcb-group-item>
    <ui5-mcb-item text="Afghanistan"></ui5-mcb-item>
    <ui5-mcb-item text="China"></ui5-mcb-item>
    <ui5-mcb-item text="India"></ui5-mcb-item>
    <ui5-mcb-item text="Indonesia"></ui5-mcb-item>
    <ui5-mcb-group-item text="Europe"></ui5-mcb-group-item>
    <ui5-mcb-item text="Austria"></ui5-mcb-item>
    <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
    <ui5-mcb-item text="Germany"></ui5-mcb-item>
    <ui5-mcb-item text="Italy"></ui5-mcb-item>
    <ui5-mcb-group-item text="North America"></ui5-mcb-group-item>
    <ui5-mcb-item text="Canada"></ui5-mcb-item>
    <ui5-mcb-item text="Granada"></ui5-mcb-item>
    <ui5-mcb-item text="Haiti"></ui5-mcb-item>
    <ui5-mcb-item text="United States"></ui5-mcb-item>`};o.storyName="Multi Combo Box with Grouping of Items";const n=m.bind({});n.args={placeholder:"MultiComboBox with single long token",default:'<ui5-mcb-item selected="" text="Very long long long long long long long text"></ui5-mcb-item>'};n.storyName="Multi Combo Box with single long token";var u,l,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,f,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,p,$;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...($=(p=a.parameters)==null?void 0:p.docs)==null?void 0:$.source}}};var x,D,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(h=(D=o.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var y,M,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(v=(M=n.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};const z=["BasicMultiComboBox","MultiComboBoxItems","MultiComboBoxFreeTextInput","MultiComboBoxGroupingItems","MultiComboBoxLongText"];export{s as BasicMultiComboBox,a as MultiComboBoxFreeTextInput,o as MultiComboBoxGroupingItems,t as MultiComboBoxItems,n as MultiComboBoxLongText,z as __namedExportsOrder,j as default};
//# sourceMappingURL=MultiComboBox.stories.73458b43.js.map
