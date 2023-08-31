import{x as a}from"./lit-element.3a4d34a1.js";import{l as t}from"./if-defined.d89d00ab.js";import{o as l}from"./unsafe-html.3b27b0e6.js";import{D as r}from"./docs.a942071b.js";import{T as s}from"./TimelineLayout.b3ae2f4e.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.15bee852.js";import"./iframe.bd4c65dd.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.50a0f25a.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const c={layout:{control:"select",options:["Horizontal","Vertical"]},default:{control:{type:"text"}}},p={package:"@ui5/webcomponents-fiori",since:"0.8.0"},u="ui5-timeline",O={title:"Fiori/Timeline",component:"Timeline",subcomponents:{TimelineItem:"TimelineItem"},parameters:{docs:{page:r({...p,component:u})}},argTypes:c},d=i=>a`<ui5-timeline
    layout="${t(i.layout)}"
    accessible-name="${t(i.accessibleName)}"
>
    ${l(i.default)}
</ui5-timeline>`,e=d.bind({});e.storyName="With Items and Layout";e.args={layout:s.Vertical,default:`<ui5-timeline-item id="test-item" title-text="called" subtitle-text="20.02.2017 11:30" icon="phone" name="John Smith" name-clickable=""></ui5-timeline-item>
<ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)" icon="calendar">
    <div>MR SOF02 2.43</div>
</ui5-timeline-item>
<ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="calendar">
    <div>Online meeting</div>
</ui5-timeline-item>`};var o,m,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-timeline\n    layout="${ifDefined(args.layout)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-timeline>`',...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const V=["Basic"];export{e as Basic,V as __namedExportsOrder,O as default};
//# sourceMappingURL=Timeline.stories.5cafc0e2.js.map
