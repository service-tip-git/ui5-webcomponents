import{x as y}from"./lit-element.3a4d34a1.js";import{l as a}from"./if-defined.d89d00ab.js";import{D as S}from"./docs.688e2e21.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.6e1123f5.js";import"./iframe.ed53cc8f.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.fb8725c7.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const h={valueState:{control:"select",options:["Error","Information","None","Success","Warning"]}},V={package:"@ui5/webcomponents",since:"1.0.0-rc.8"},b="ui5-progress-indicator",O={title:"Main/ProgressIndicator",component:"ProgressIndicator",parameters:{docs:{page:S({...V,component:b})}},argTypes:h},t=e=>y`<ui5-progress-indicator
        ?disabled="${a(e.disabled)}"
        ?hide-value="${a(e.hideValue)}"
        value="${a(e.value)}"
        display-value="${a(e.displayValue)}"
        value-state="${a(e.valueState)}"
        style="${a(e.style)}"
    ></ui5-progress-indicator>`,r=t.bind({});r.args={value:25};const s=t.bind({});s.args={value:25,displayValue:"Custom Display Value"};const i=t.bind({});i.args={value:25,style:"height: 50px; width: 200px;"};const o=()=>y`
<ui5-progress-indicator
    value-state="None"
    value="25"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Error"
    value="50"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Warning"
    value="75"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Success"
    value="90"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Information"
    value="100"
></ui5-progress-indicator>
`;var n,u,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:'args => html`<ui5-progress-indicator\n        ?disabled="${ifDefined(args.disabled)}"\n        ?hide-value="${ifDefined(args.hideValue)}"\n        value="${ifDefined(args.value)}"\n        display-value="${ifDefined(args.displayValue)}"\n        value-state="${ifDefined(args.valueState)}"\n        style="${ifDefined(args.style)}"\n    ></ui5-progress-indicator>`',...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var d,c,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`<ui5-progress-indicator\n        ?disabled="${ifDefined(args.disabled)}"\n        ?hide-value="${ifDefined(args.hideValue)}"\n        value="${ifDefined(args.value)}"\n        display-value="${ifDefined(args.displayValue)}"\n        value-state="${ifDefined(args.valueState)}"\n        style="${ifDefined(args.style)}"\n    ></ui5-progress-indicator>`',...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,m,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-progress-indicator\n        ?disabled="${ifDefined(args.disabled)}"\n        ?hide-value="${ifDefined(args.hideValue)}"\n        value="${ifDefined(args.value)}"\n        display-value="${ifDefined(args.displayValue)}"\n        value-state="${ifDefined(args.valueState)}"\n        style="${ifDefined(args.style)}"\n    ></ui5-progress-indicator>`',...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var f,$,D;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => html\`
<ui5-progress-indicator
    value-state="None"
    value="25"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Error"
    value="50"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Warning"
    value="75"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Success"
    value="90"
></ui5-progress-indicator>
<ui5-progress-indicator
    value-state="Information"
    value="100"
></ui5-progress-indicator>
\``,...(D=($=o.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const j=["Basic","DisplayValue","CustomSize","ValueStates"];export{r as Basic,i as CustomSize,s as DisplayValue,o as ValueStates,j as __namedExportsOrder,O as default};
//# sourceMappingURL=ProgressIndicator.stories.41b5d90d.js.map
