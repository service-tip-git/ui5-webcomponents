import{x as M}from"./lit-element.3a4d34a1.js";import{l as C}from"./if-defined.d89d00ab.js";import{o as $}from"./unsafe-html.3b27b0e6.js";import{T as W}from"./ToolbarAlign.68ebd9dc.js";import{D}from"./docs.ebc382b6.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.908412ed.js";import"./iframe.a9aaf75f.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.07c56737.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const A={alignContent:{control:"select",options:["End","Start"]},default:{control:{type:"text"}}},B={package:"@ui5/webcomponents",since:"1.17.0"},R="ui5-toolbar",V={title:"Main/Toolbar",component:"Toolbar",subcomponents:{ToolbarButton:"ToolbarButton",ToolbarSelect:"ToolbarSelect",ToolbarSelectOption:"ToolbarSelectOption",ToolbarSeparator:"ToolbarSeparator",ToolbarSpacer:"ToolbarSpacer"},argTypes:A,parameters:{docs:{page:D({...B,component:R})}}},a=n=>M`<ui5-toolbar
        align-content="${C(n.alignContent)}"
    >
        ${$(n.default)}
</ui5-toolbar>`,t=a.bind({});t.storyName="Basic";t.args={default:`
    <ui5-toolbar-button 
    icon="decline"
    text="Mid 2">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        icon="add"
        text="Right 1">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        icon="employee"
        text="Right 4">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        id="myOverflowBtn"
        icon="employee"
        text="Call me later">
    </ui5-toolbar-button>`};const i=a.bind({});i.args={default:`
    <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
    <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
    <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
    <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
    <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
    <ui5-toolbar-spacer></ui5-toolbar-spacer>
    <ui5-toolbar-button icon="decline" text="Mid 2"></ui5-toolbar-button>
    <ui5-toolbar-button icon="add" text="Right 1"></ui5-toolbar-button>
    <ui5-toolbar-button icon="employee" text="Right 4"></ui5-toolbar-button>
    <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later"></ui5-toolbar-button>`};const l=a.bind({});l.args={default:`
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-separator></ui5-toolbar-separator>
        <ui5-toolbar-button icon="decline" text="Mid 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later"></ui5-toolbar-button>`};const o=a.bind({});o.storyName="With 'AlwaysOverflow' items";o.args={default:`
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Mid 2" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>`};const e=a.bind({});e.storyName="With 'NeverOverflow' items";e.args={default:`
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2" ></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Mid 2" ></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1" overflow-priority="NeverOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4" ></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later" overflow-priority="NeverOverflow"></ui5-toolbar-button>`};const r=a.bind({});r.storyName="With 'Start' aligned items";r.args={alignContent:W.Start,default:t.args.default};var u,b,s;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(s=(b=t.parameters)==null?void 0:b.docs)==null?void 0:s.source}}};var c,p,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,f,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,y,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var h,v,S;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(S=(v=e.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var T,O,L;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(L=(O=r.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const X=["Basic","WithSpacer","WithSeparator","WithAlwaysOverflowItems","WithNeverOverflowItems","WithStartAlignedItems"];export{t as Basic,o as WithAlwaysOverflowItems,e as WithNeverOverflowItems,l as WithSeparator,i as WithSpacer,r as WithStartAlignedItems,X as __namedExportsOrder,V as default};
//# sourceMappingURL=Toolbar.stories.11a16a6b.js.map
