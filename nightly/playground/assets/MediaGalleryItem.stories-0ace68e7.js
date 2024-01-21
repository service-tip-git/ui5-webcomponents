import{x as o}from"./lit-element-c5a2b594.js";import{o as a}from"./unsafe-html-0ddd83da.js";import{l as i}from"./if-defined-c29cffe1.js";import{D as s}from"./docs-d97efe99.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-a7ea689a.js";import"./index-53d09975.js";import"./iframe-35a4826c.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d1983070.js";import"./client-fb0f3103.js";const d={layout:{control:"select",options:["Square","Wide"]},default:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},thumbnail:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}}},n={package:"@ui5/webcomponents-fiori",since:"1.1.0"},u="ui5-media-gallery-item",p=e=>o`
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
`,w={title:"Fiori/Media Gallery/Media Gallery Item",component:"MediaGalleryItem",parameters:{docs:{page:s({...n,component:u,showDefaultStoryOnly:!0})}},decorators:[p],argTypes:d},y=e=>o` <ui5-media-gallery>
        <ui5-media-gallery-item
            ?selected="${i(e.selected)}"
            ?disabled="${i(e.disabled)}"
            layout="${i(e.layout)}"
        >
            ${a(e.default)}
            ${a(e.thumbnail)}
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1010.jpg" />
        </ui5-media-gallery-item>
    </ui5-media-gallery>`,t=y.bind({});t.tags=["_hidden_"];t.args={default:'<img src="../assets/images/HT-1000.jpg" />',selected:!0};var r,l,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const E=["Basic"];export{t as Basic,E as __namedExportsOrder,w as default};
