import{x as n}from"./lit-element-c5a2b594.js";import{o as w}from"./unsafe-html-0ddd83da.js";import{l as i}from"./if-defined-c29cffe1.js";import{D as b}from"./docs-5224ca3a.js";import{W as D}from"./WrappingType-b81e595a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ce2fae80.js";import"./index-1161d1b7.js";import"./iframe-c1be8f8a.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-c470b0da.js";import"./client-fb0f3103.js";const x={wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}}},T={package:"@ui5/webcomponents"},q="ui5-label",O={title:"Main/Label",component:"Label",parameters:{docs:{page:b({...T,component:q})}},argTypes:x},s=e=>n`
<ui5-label
    for="${i(e.for)}"
    ?required="${i(e.required)}"
    ?show-colon="${i(e.showColon)}"
    wrapping-type="${i(e.wrappingType)}"
    class="${i(e.className)}"
>${w(e.default)}</ui5-label>`,h=e=>(r,{args:$})=>n`
${r({args:{...$,for:e}})}
<ui5-input id="${e}"></ui5-input>`,a=s.bind({});a.args={showColon:!0,default:"Simple Label"};a.decorators=[h("myInputSimple")];const N=(e,{args:r})=>n`
<style>
    .w200 {
        width: 200px;
    }
</style>
${e({args:{...r,className:"w200"}})}`,o=s.bind({});o.args={wrappingType:D.Normal,showColon:!0,default:`Label that demonstrates how, if set to wrapping-type="Normal", the long labels could be wrapped. To test the truncation, use 'wrapping-type="None"`};o.decorators=[N,h("myInputWrapping")];const t=s.bind({});t.args={required:!0,showColon:!0};t.decorators=[(e,{args:r})=>n`
    ${e({args:{...r,for:"myInput",default:"First name"}})}
    <ui5-input id="myInput" required placeholder="Enter your name"></ui5-input>

    ${e({args:{...r,for:"myDatePicker",default:"Date of birth"}})}
    <ui5-date-picker id="myDatePicker" required></ui5-date-picker>

    ${e({args:{...r,for:"mySelect",default:"Job"}})}
    <ui5-select id="mySelect" required>
        <ui5-option>Manager</ui5-option>
        <ui5-option>Sales</ui5-option>
        <ui5-option selected>Developer</ui5-option>
    </ui5-select>

    ${e({args:{...r,for:"myTextArea",default:"Description"}})}
    <ui5-textarea id="myTextArea" required placeholder="Type as much text as you wish"></ui5-textarea>

    <div style="display: flex; align-items: center;">
        ${e({args:{...r,for:"myCheckBox",default:"Accept terms of use"}})}
        <ui5-checkbox id="myCheckBox" required></ui5-checkbox>
    </div>
`,e=>n`
<style>
    .f {
        display: flex;
        flex-direction: column;
    }
    .f > :nth-child(2n) {
        margin-bottom: 1.5rem;
    }
</style>

<div class="f">
    ${e()}
</div>`];var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var f,g,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const j=["Basic","WrappingText","UsageWithInputs"];export{a as Basic,t as UsageWithInputs,o as WrappingText,j as __namedExportsOrder,O as default};
