import{x as n}from"./lit-element-c5a2b594.js";import{D as r}from"./docs-e23e4e8f.js";import{l as u}from"./if-defined-c29cffe1.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-524bafb2.js";import"./index-a68b1905.js";import"./iframe-a4e8f984.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-470159da.js";import"./client-fb0f3103.js";const g={},m={package:"@ui5/webcomponents",since:"1.0.0-rc.15"},p="ui5-suggestion-group-item",E={title:"Main/Input/Suggestion Group Item",component:"SuggestionGroupItem",parameters:{docs:{page:r({...m,component:p,showDefaultStoryOnly:!0})}},argTypes:g},a=s=>n`
<ui5-input
    show-suggestions
>
<ui5-suggestion-group-item text="${u(s.text)}"></ui5-suggestion-group-item>
<ui5-suggestion-item text="Germany"></ui5-suggestion-item>
<ui5-suggestion-item text="France"></ui5-suggestion-item>
</ui5-input>`,t=a.bind({});t.tags=["_hidden_"];t.args={text:"Europe"};var e,i,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => html\`
<ui5-input
    show-suggestions
>
<ui5-suggestion-group-item text="\${ifDefined(args.text)}"></ui5-suggestion-group-item>
<ui5-suggestion-item text="Germany"></ui5-suggestion-item>
<ui5-suggestion-item text="France"></ui5-suggestion-item>
</ui5-input>\``,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const F=["Basic"];export{t as Basic,F as __namedExportsOrder,E as default};
