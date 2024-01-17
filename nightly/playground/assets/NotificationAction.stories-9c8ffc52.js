import{x as r}from"./lit-element-c5a2b594.js";import{l as o}from"./if-defined-c29cffe1.js";import{D as s}from"./docs-7cc24d98.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ac52f94c.js";import"./index-c5b45678.js";import"./iframe-ac31e5f8.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-bb8a36b5.js";import"./client-fb0f3103.js";const c={design:{control:"select",options:["Default","Positive","Negative","Transparent","Emphasized","Attention"]}},p={package:"@ui5/webcomponents-fiori"},m="ui5-notification-action",S={title:"Fiori/Notification List Group Item/Notification Action",component:"NotificationAction",parameters:{docs:{page:s({...p,component:m,showDefaultStoryOnly:!0}),story:{iframeHeight:"470px",inline:!1}}},argTypes:c},u=t=>r`<ui5-list header-text="Notifications">
    <ui5-li-notification-group title-text="Orders (2)" priority="High" show-close>
        <ui5-li-notification
            title-text="New order (#2525)"
            priority="High">
            <ui5-avatar size="XS" slot="avatar">
                <img src="../assets/images/avatars/woman_avatar_1.png">
            </ui5-avatar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ui5-li-notification>
        <ui5-notification-action
            icon="${o(t.icon)}"
            text="${o(t.text)}"
            slot="actions">
        </ui5-notification-action>
    </ui5-li-notification-group>
</ui5-list>
`,i=u.bind({});i.tags=["_hidden_"];i.args={text:"Accept",icon:"accept"};var n,a,e;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return html\`<ui5-list header-text="Notifications">
    <ui5-li-notification-group title-text="Orders (2)" priority="High" show-close>
        <ui5-li-notification
            title-text="New order (#2525)"
            priority="High">
            <ui5-avatar size="XS" slot="avatar">
                <img src="../assets/images/avatars/woman_avatar_1.png">
            </ui5-avatar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ui5-li-notification>
        <ui5-notification-action
            icon="\${ifDefined(args.icon)}"
            text="\${ifDefined(args.text)}"
            slot="actions">
        </ui5-notification-action>
    </ui5-li-notification-group>
</ui5-list>
\`;
}`,...(e=(a=i.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};const $=["Basic"];export{i as Basic,$ as __namedExportsOrder,S as default};
