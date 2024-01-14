import{x as o}from"./lit-element-c5a2b594.js";import{o as a}from"./unsafe-html-0ddd83da.js";import{l as t}from"./if-defined-c29cffe1.js";import{D as s}from"./docs-84040a3f.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-4f103317.js";import"./index-1ddc0cbe.js";import"./iframe-b6eaac03.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-40facfd7.js";import"./client-fb0f3103.js";const d={default:{control:{type:"text"},table:{type:{}}},thumbnail:{control:{type:"text"},table:{type:{}}}},n={package:"@ui5/webcomponents-fiori"},p="ui5-media-gallery-item",u=e=>o`
    <style>
        ui5-media-gallery-item:not(:defined) {
            visibility: hidden;
        }

        @media (min-width: 600px) {
            ui5-media-gallery {
                height: 50rem;
            }
        }
    </style>
    ${e()}
`,B={title:"Fiori/Media Gallery/Media Gallery Item",component:"MediaGalleryItem",parameters:{docs:{page:s({...n,component:p,showDefaultStoryOnly:!0})}},decorators:[u],argTypes:d},c=e=>o` <ui5-media-gallery>
        <ui5-media-gallery-item
            ?selected="${t(e.selected)}"
            ?disabled="${t(e.disabled)}"
            layout="${t(e.layout)}"
        >
            ${a(e.default)}
            ${a(e.thumbnail)}
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1010.jpg" />
        </ui5-media-gallery-item>
    </ui5-media-gallery>`,i=c.bind({});i.tags=["_hidden_"];i.args={default:'<img src="../assets/images/HT-1000.jpg" />',selected:!0};var r,l,m;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery>
        <ui5-media-gallery-item
            ?selected="\${ifDefined(args.selected)}"
            ?disabled="\${ifDefined(args.disabled)}"
            layout="\${ifDefined(args.layout)}"
        >
            \${unsafeHTML(args.default)}
            \${unsafeHTML(args.thumbnail)}
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1010.jpg" />
        </ui5-media-gallery-item>
    </ui5-media-gallery>\`;
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const L=["Basic"];export{i as Basic,L as __namedExportsOrder,B as default};
