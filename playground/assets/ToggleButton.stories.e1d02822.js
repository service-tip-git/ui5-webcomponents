import{x as y}from"./lit-element.3a4d34a1.js";import{o as I}from"./unsafe-html.3b27b0e6.js";import{l as a}from"./if-defined.d89d00ab.js";import{D as M}from"./docs.ebc382b6.js";import{B as S}from"./ButtonDesign.9fd17152.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.908412ed.js";import"./iframe.a9aaf75f.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.07c56737.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const A={design:{control:"select",options:["Attention","Default","Emphasized","Negative","Positive","Transparent"]},type:{control:"select",options:["Button","Reset","Submit"]},default:{control:{type:"text"}}},H={package:"@ui5/webcomponents"},L="ui5-toggle-button",J={title:"Main/ToggleButton",component:"ToggleButton",parameters:{docs:{page:M({...H,component:L})}},argTypes:A},i=s=>y`<ui5-toggle-button
    ?pressed="${a(s.pressed)}"
    ?disabled="${a(s.disabled)}"
    design="${a(s.design)}"
    icon="${a(s.icon)}"
>
    ${I(s.default)}
</ui5-toggle-button>`,n=i.bind({});n.args={default:"Default"};const t=i.bind({});t.args={default:"Pressed",pressed:!0};const o=i.bind({});o.args={default:"ToggleButton",pressed:!0,disabled:!0};const e=i.bind({});e.storyName="Icon-Only ToggleButton";e.args={icon:"add"};const r=i.bind({});r.args={default:"ToggleButton",design:S.Positive,pressed:!1,icon:"add"};var d,g,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`<ui5-toggle-button\n    ?pressed="${ifDefined(args.pressed)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    design="${ifDefined(args.design)}"\n    icon="${ifDefined(args.icon)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-toggle-button>`',...(c=(g=n.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-toggle-button\n    ?pressed="${ifDefined(args.pressed)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    design="${ifDefined(args.design)}"\n    icon="${ifDefined(args.icon)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-toggle-button>`',...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var f,m,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-toggle-button\n    ?pressed="${ifDefined(args.pressed)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    design="${ifDefined(args.design)}"\n    icon="${ifDefined(args.icon)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-toggle-button>`',...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var $,D,T;e.parameters={...e.parameters,docs:{...($=e.parameters)==null?void 0:$.docs,source:{originalSource:'args => html`<ui5-toggle-button\n    ?pressed="${ifDefined(args.pressed)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    design="${ifDefined(args.design)}"\n    icon="${ifDefined(args.icon)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-toggle-button>`',...(T=(D=e.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var B,h,P;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:'args => html`<ui5-toggle-button\n    ?pressed="${ifDefined(args.pressed)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    design="${ifDefined(args.design)}"\n    icon="${ifDefined(args.icon)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-toggle-button>`',...(P=(h=r.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};const K=["Basic","Pressed","DisabledAndPressed","IconOnly","WithIconAndDesign"];export{n as Basic,o as DisabledAndPressed,e as IconOnly,t as Pressed,r as WithIconAndDesign,K as __namedExportsOrder,J as default};
//# sourceMappingURL=ToggleButton.stories.e1d02822.js.map
