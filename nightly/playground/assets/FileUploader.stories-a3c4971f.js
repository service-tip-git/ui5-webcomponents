import{x as l}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as s}from"./unsafe-html-0ddd83da.js";import{D}from"./docs-65dff3ee.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-2f7d4940.js";import"./iframe-2b4ed1eb.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-00036f9f.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const S={files:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},change:{description:"Event is fired when the value of the file path has been changed. <b>Note:</b> Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"files",type:"FileList",description:"The current files."}]}}},y={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var o=Object.freeze,U=Object.defineProperty,L=(e,b)=>o(U(e,"raw",{value:o(b||e.slice())})),d;const M="ui5-file-uploader",A={title:"Main/FileUploader",component:"FileUploader",parameters:{docs:{page:D({...y,component:M})}},argTypes:S},r=e=>l`<ui5-file-uploader
    accept="${a(e.accept)}"
    ?hide-input="${a(e.hideInput)}"
    ?disabled="${a(e.disabled)}"
    ?multiple="${a(e.multiple)}"
    name="${a(e.name)}"
    placeholder="${a(e.placeholder)}"
    value="${a(e.value)}"
    valueState="${a(e.valueState)}"
    id="${a(e.id)}"
>
    ${s(e.default)}
    ${s(e.valueStateMessage)}
</ui5-file-uploader>`,t=r.bind({});t.args={default:'<ui5-button icon="upload" accessible-name-ref="upload-single-file-label">Upload Single File</ui5-button>'};t.decorators=[e=>l`<ui5-label id="upload-single-file-label" style="display: none">File Uploader, which accepts only one file.</ui5-label>
    ${e()}`];const n=r.bind({});n.storyName="With Custom Design ";n.args={hideInput:!0,default:"<ui5-badge>Upload File</ui5-badge>"};const i=r.bind({});i.storyName="Image Uploader";i.args={id:"fileuploader",accept:"image/*",default:'<ui5-button icon="upload" accessible-name-ref="upload-img-label">Upload Images</ui5-button>',multiple:!0};i.decorators=[e=>l(d||(d=L([`<ui5-label id="upload-img-label" style="display: none">File Uploader, which accepts only images.</ui5-label>
    `,`
    <div id="result"></div>
    <script>
        var fileUploader = document.querySelector("#fileuploader"),
            resultDiv = document.querySelector("#result");
        fileUploader.addEventListener("change", function(event) {
            var files = event.target.files;
            if (!files.length) {
                resultDiv.innerHTML = "<ui5-label>No Files Selected</ui5-label>";
            } else {
                resultDiv.innerHTML = "";
                resultDiv.style.marginTop = "1rem";
                for (var i = 0; i < files.length; i++) {
                    var img = document.createElement("img");
                    img.src = URL.createObjectURL(files[i]);
                    img.width = 100;
                    img.height = 100;
                    img.onload = function() {
                        URL.revokeObjectURL(img.src);
                    }
                    resultDiv.appendChild(img);
                }
            }
        })
    <\/script>`])),e())];i.parameters={docs:{story:{inline:!1}}};var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,h,$;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...($=(h=i.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};const B=["Basic","Custom","Advanced"];export{i as Advanced,t as Basic,n as Custom,B as __namedExportsOrder,A as default};
//# sourceMappingURL=FileUploader.stories-a3c4971f.js.map
