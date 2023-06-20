import{y}from"./lit-html.9e2e9691.js";import{l as a}from"./if-defined.fd0de8da.js";import{o as z}from"./unsafe-html.9d6beac9.js";import{a as S,A}from"./AvatarShape.7afac8de.js";import{D as L}from"./docs.10e93078.js";import"./index.631a3848.js";import"./iframe.f25d3d4a.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers.b8add541.js";import"./index.5ca63ce8.js";import"./_getTag.ec397a63.js";import"./index.bc622db0.js";import"./index.b38f6aa4.js";import"./chunk-MA2MUXQN.73a2661e.js";import"./chunk-R4NKYYJA.15989c7a.js";const H={colorScheme:{control:"select",options:["Accent1","Accent10","Accent2","Accent3","Accent4","Accent5","Accent6","Accent7","Accent8","Accent9","Placeholder"]},shape:{control:"select",options:["Circle","Square"]},size:{control:"select",options:["L","M","S","XL","XS"]},badge:{control:{type:"text"}},default:{control:{type:"text"}}},b={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},o="ui5-avatar",E={title:"Main/Avatar",component:o,argTypes:H,parameters:{docs:{page:L({...b,component:o})}}},n=e=>y`<ui5-avatar
    icon="${a(e.icon)}"
    size="${a(e.size)}"
    shape="${a(e.shape)}"
    style="${a(e.style)}"
    initials="${a(e.initials)}"
    color-scheme="${a(e.colorScheme)}"
    ?interactive="${a(e.interactive)}"
    aria-haspopup="${a(e.ariaHaspopup)}"
  >
    ${z(e.default)}
  </ui5-avatar>`,i=n.bind({});i.args={initials:"FJ",interactive:!0};const s=n.bind({});s.args={default:`<img
    alt="Woman 1"
    src="../assets/images/avatars/man_avatar_1.png"
/>`};const r=n.bind({});r.args={size:S.L,icon:"home"};const t=n.bind({});t.args={size:S.XL,shape:A.Square,style:"width: 250px; height:250px; border: 1px solid var(--sapField_BorderColor)",default:`<img
    src="../assets/images/avatars/Lamp_avatar_01.jpg"
    alt="Lamp"
    style="object-fit: contain"
/>`};var c,p,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-avatar\n    icon="${ifDefined(args.icon)}"\n    size="${ifDefined(args.size)}"\n    shape="${ifDefined(args.shape)}"\n    style="${ifDefined(args.style)}"\n    initials="${ifDefined(args.initials)}"\n    color-scheme="${ifDefined(args.colorScheme)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n  >\n    ${unsafeHTML(args.default)}\n  </ui5-avatar>`',...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:'args => html`<ui5-avatar\n    icon="${ifDefined(args.icon)}"\n    size="${ifDefined(args.size)}"\n    shape="${ifDefined(args.shape)}"\n    style="${ifDefined(args.style)}"\n    initials="${ifDefined(args.initials)}"\n    color-scheme="${ifDefined(args.colorScheme)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n  >\n    ${unsafeHTML(args.default)}\n  </ui5-avatar>`',...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,u,$;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-avatar\n    icon="${ifDefined(args.icon)}"\n    size="${ifDefined(args.size)}"\n    shape="${ifDefined(args.shape)}"\n    style="${ifDefined(args.style)}"\n    initials="${ifDefined(args.initials)}"\n    color-scheme="${ifDefined(args.colorScheme)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n  >\n    ${unsafeHTML(args.default)}\n  </ui5-avatar>`',...($=(u=r.parameters)==null?void 0:u.docs)==null?void 0:$.source}}};var h,D,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:'args => html`<ui5-avatar\n    icon="${ifDefined(args.icon)}"\n    size="${ifDefined(args.size)}"\n    shape="${ifDefined(args.shape)}"\n    style="${ifDefined(args.style)}"\n    initials="${ifDefined(args.initials)}"\n    color-scheme="${ifDefined(args.colorScheme)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n  >\n    ${unsafeHTML(args.default)}\n  </ui5-avatar>`',...(v=(D=t.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const J=["Basic","WithImage","Size","Styles"];export{i as Basic,r as Size,t as Styles,s as WithImage,J as __namedExportsOrder,E as default};
//# sourceMappingURL=Avatar.stories.b646566f.js.map
