import{x as a}from"./lit-element-c5a2b594.js";import{D as r}from"./docs-e6d25d3b.js";import{l as i}from"./if-defined-c29cffe1.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f1e87d75.js";import"./index-132ff83d.js";import"./iframe-657c8299.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-2e471bae.js";import"./client-fb0f3103.js";const d={additionalTextState:{control:"select",options:["None","Success","Warning","Error","Information"]}},m={package:"@ui5/webcomponents"},p="ui5-suggestion-item",b={title:"Main/Input/Suggestion Item",component:"SuggestionItem",parameters:{docs:{page:r({...m,component:p,showDefaultStoryOnly:!0})}},argTypes:d},c=t=>a`
<ui5-input show-suggestions>
    <ui5-suggestion-item
    additional-text="${i(t.additionalText)}"
    additional-text-state="${i(t.additionalTextState)}"
    description="${i(t.description)}"
    icon="${i(t.icon)}"
    ?icon-end="${i(t.iconEnd)}"
    image="${i(t.image)}"
    text="${i(t.text)}"
    type="${i(t.type)}"
    ></ui5-suggestion-item>
</ui5-input>`,e=c.bind({});e.tags=["_hidden_"];e.args={text:"Germany"};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => html\`
<ui5-input show-suggestions>
    <ui5-suggestion-item
    additional-text="\${ifDefined(args.additionalText)}"
    additional-text-state="\${ifDefined(args.additionalTextState)}"
    description="\${ifDefined(args.description)}"
    icon="\${ifDefined(args.icon)}"
    ?icon-end="\${ifDefined(args.iconEnd)}"
    image="\${ifDefined(args.image)}"
    text="\${ifDefined(args.text)}"
    type="\${ifDefined(args.type)}"
    ></ui5-suggestion-item>
</ui5-input>\``,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const B=["Basic"];export{e as Basic,B as __namedExportsOrder,b as default};
