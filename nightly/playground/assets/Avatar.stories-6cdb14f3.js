import{x as p}from"./lit-element-c5a2b594.js";import{l as e}from"./if-defined-c29cffe1.js";import{o as d}from"./unsafe-html-0ddd83da.js";import{A as f,a as u}from"./AvatarShape-e8dfc172.js";import{D as v}from"./docs-e6d25d3b.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f1e87d75.js";import"./index-132ff83d.js";import"./iframe-657c8299.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-2e471bae.js";import"./client-fb0f3103.js";const b={default:{control:{type:"text"},table:{type:{}}},badge:{control:{type:"text"},table:{type:{}}}},$={package:"@ui5/webcomponents"},g=()=>p`
<ui5-avatar fallback-icon="employee" size="S" disabled="true">
  <img alt="Woman 1" src="../assets/images/avatars/man_avatar_1.png" />
</ui5-avatar>
(ui5-avatar size="S" disabled="true")

</br>

<ui5-avatar fallback-icon="employee" size="M">
  <img alt="Woman 1" src="../assets/images/avatars/man_avatar_1.png" />
</ui5-avatar> (ui5-avatar size="M")

</br>

<ui5-avatar size="L" disabled="true" initials="AB" color-scheme="Accent1"> </ui5-avatar> (ui5-avatar size="L" disabled="true" color-scheme="Accent1")

</br>

<ui5-avatar size="XL" initials="CD" color-scheme="Accent2"></ui5-avatar> (ui5-avatar size="XL" color-scheme="Accent2")
`,h="ui5-avatar",j={title:"Main/Avatar",component:"Avatar",argTypes:b,parameters:{docs:{page:v({...$,component:h})}}},m=a=>p`<ui5-avatar
    icon="${e(a.icon)}"
    size="${e(a.size)}"
    shape="${e(a.shape)}"
    style="${e(a.style)}"
    initials="${e(a.initials)}"
    color-scheme="${e(a.colorScheme)}"
    ?interactive="${e(a.interactive)}"
    ?disabled="${e(a.disabled)}"
    aria-haspopup="${e(a.ariaHaspopup)}"
    accessible-name="${e(a.accessibleName)}"
    fallback-icon="${e(a.fallbackIcon)}"
  >
    ${d(a.default)}
  </ui5-avatar>`,i=m.bind({});i.args={initials:"FJ",interactive:!0,accessibleName:"Avatar with accessible name"};const C=g.bind({}),s=m.bind({});s.args={size:f.XL,shape:u.Square,style:"width: 250px; height:250px; border: 1px solid var(--sapField_BorderColor)",default:`<img
    src="../assets/images/avatars/Lamp_avatar_01.jpg"
    alt="Lamp"
    style="object-fit: contain"
/>`};var t,r,n;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:'args => html`<ui5-avatar\n    icon="${ifDefined(args.icon)}"\n    size="${ifDefined(args.size)}"\n    shape="${ifDefined(args.shape)}"\n    style="${ifDefined(args.style)}"\n    initials="${ifDefined(args.initials)}"\n    color-scheme="${ifDefined(args.colorScheme)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    fallback-icon="${ifDefined(args.fallbackIcon)}"\n  >\n    ${unsafeHTML(args.default)}\n  </ui5-avatar>`',...(n=(r=i.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var o,c,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-avatar\n    icon="${ifDefined(args.icon)}"\n    size="${ifDefined(args.size)}"\n    shape="${ifDefined(args.shape)}"\n    style="${ifDefined(args.style)}"\n    initials="${ifDefined(args.initials)}"\n    color-scheme="${ifDefined(args.colorScheme)}"\n    ?interactive="${ifDefined(args.interactive)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    aria-haspopup="${ifDefined(args.ariaHaspopup)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    fallback-icon="${ifDefined(args.fallbackIcon)}"\n  >\n    ${unsafeHTML(args.default)}\n  </ui5-avatar>`',...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const F=["Basic","TypesAndSizes","Styles"];export{i as Basic,s as Styles,C as TypesAndSizes,F as __namedExportsOrder,j as default};
