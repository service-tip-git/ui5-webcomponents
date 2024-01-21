import{x as r}from"./lit-element-c5a2b594.js";import{l as t}from"./if-defined-c29cffe1.js";import{o}from"./unsafe-html-0ddd83da.js";import{D as d}from"./docs-d97efe99.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-a7ea689a.js";import"./index-53d09975.js";import"./iframe-35a4826c.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d1983070.js";import"./client-fb0f3103.js";const s={uploadState:{control:"select",options:["Complete","Error","Ready","Uploading"]},type:{control:"select",options:["Inactive","Active","Detail","Navigation"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}},thumbnail:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},deleteButton:{control:{type:"text"},table:{type:{summary:"Array<IButton>"}}}},c={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.7"},p="ui5-upload-collection-item",k={title:"Fiori/Upload Collection/Upload Collection Item",component:"UploadCollectionItem",parameters:{docs:{page:d({...c,component:p,showDefaultStoryOnly:!0})}},argTypes:s},u=e=>r`
<ui5-upload-collection>
    <ui5-upload-collection-item
        file-name="${t(e.fileName)}"
        accessibility-attributes="${t(e.accessibilityAttributes)}"
        ?navigated="${t(e.navigated)}"
        ?selected="${t(e.selected)}"
        upload-state="${t(e.uploadState)}"
        type="${t(e.type)}"
        progress="${t(e.progress)}"
        ?file-name-clickable="${t(e.fileNameClickable)}"
        ?disable-delete-button="${t(e.disableDeleteButton)}"
        ?hide-delete-button="${t(e.hideDeleteButton)}"
        ?hide-retry-button="${t(e.hideRetryButton)}"
        ?hide-terminate-button="${t(e.hideTerminateButton)}"
    >
        ${o(e.default)}
        ${o(e.thumbnail)}
    </ui5-upload-collection-item>
</ui5-upload-collection>`,i=u.bind({});i.tags=["_hidden_"];i.args={fileName:"latest-reports.pdf",fileNameClickable:!1,uploadState:"Error",default:'uploadState="Error"',thumbnail:'<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>',type:"Active",progress:59};var n,a,l;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection>
    <ui5-upload-collection-item
        file-name="\${ifDefined(args.fileName)}"
        accessibility-attributes="\${ifDefined(args.accessibilityAttributes)}"
        ?navigated="\${ifDefined(args.navigated)}"
        ?selected="\${ifDefined(args.selected)}"
        upload-state="\${ifDefined(args.uploadState)}"
        type="\${ifDefined(args.type)}"
        progress="\${ifDefined(args.progress)}"
        ?file-name-clickable="\${ifDefined(args.fileNameClickable)}"
        ?disable-delete-button="\${ifDefined(args.disableDeleteButton)}"
        ?hide-delete-button="\${ifDefined(args.hideDeleteButton)}"
        ?hide-retry-button="\${ifDefined(args.hideRetryButton)}"
        ?hide-terminate-button="\${ifDefined(args.hideTerminateButton)}"
    >
        \${unsafeHTML(args.default)}
        \${unsafeHTML(args.thumbnail)}
    </ui5-upload-collection-item>
</ui5-upload-collection>\`;
}`,...(l=(a=i.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const I=["Basic"];export{i as Basic,I as __namedExportsOrder,k as default};
