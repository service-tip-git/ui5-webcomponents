import{x as r}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as s}from"./unsafe-html-0ddd83da.js";import{D as u}from"./docs-84040a3f.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-4f103317.js";import"./index-1ddc0cbe.js";import"./iframe-b6eaac03.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-40facfd7.js";import"./client-fb0f3103.js";const c={default:{control:{type:"text"},table:{type:{}}},deleteButton:{control:{type:"text"},table:{type:{}}}},l={package:"@ui5/webcomponents"},m="ui5-li-custom",v={title:"Main/List/Custom List Item",component:"CustomListItem",parameters:{docs:{page:u({...l,component:m,showDefaultStoryOnly:!0})}},argTypes:c},p=t=>r` <ui5-list>
    <ui5-li-custom
      accessible-name="${i(t.accessibleName)}"
      accessibility-attributes="${i(t.accessibilityAttributes)}"
      ?navigated="${i(t.navigated)}"
      type="${i(t.type)}"
      ?selected="${i(t.selected)}"
    >
      ${s(t.default)}
      ${s(t.deleteButton)}
    </ui5-li-custom>
  </ui5-list>`,e=p.bind({});e.tags=["_hidden_"];e.args={default:`<ui5-button>Click me</ui5-button>
  <ui5-link href="https://www.google.bg" target="_blank">UI5 link</ui5-link>
  <ui5-radio-button text="Option B" disabled="disabled"></ui5-radio-button>
  <ui5-button>Click me</ui5-button>`};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return html\` <ui5-list>
    <ui5-li-custom
      accessible-name="\${ifDefined(args.accessibleName)}"
      accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
      ?navigated="\${ifDefined(args.navigated)}"
      type="\${ifDefined(args.type)}"
      ?selected="\${ifDefined(args.selected)}"
    >
      \${unsafeHTML(args.default)}
      \${unsafeHTML(args.deleteButton)}
    </ui5-li-custom>
  </ui5-list>\`;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const T=["Basic"];export{e as Basic,T as __namedExportsOrder,v as default};
