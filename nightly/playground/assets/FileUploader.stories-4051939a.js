import{x as l}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as v}from"./docs-5224ca3a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ce2fae80.js";import"./index-1161d1b7.js";import"./iframe-c1be8f8a.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-c470b0da.js";import"./client-fb0f3103.js";const h={valueState:{control:"select",options:["None","Success","Warning","Error","Information"]},files:{control:{type:!1}},default:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},valueStateMessage:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},change:{description:`Event is fired when the value of the file path has been changed.
<b>Note:</b> Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.`,control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"FileList | null"},name:"files",_ui5privacy:"public",description:"The current files."}]}}},b={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var r=Object.freeze,$=Object.defineProperty,y=(e,g)=>r($(e,"raw",{value:r(g||e.slice())})),o;const D="ui5-file-uploader",N={title:"Main/FileUploader",component:"FileUploader",parameters:{docs:{page:v({...b,component:D})}},argTypes:h},m=e=>l`<ui5-file-uploader
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
    ${n(e.default)}
    ${n(e.valueStateMessage)}
</ui5-file-uploader>`,t=m.bind({});t.args={default:'<ui5-button icon="upload" accessible-name-ref="upload-single-file-label">Upload Single File</ui5-button>'};t.decorators=[e=>l`<ui5-label id="upload-single-file-label" style="display: none">File Uploader, which accepts only one file.</ui5-label>
    ${e()}`];const i=m.bind({});i.storyName="Image Uploader";i.args={id:"fileuploader",accept:"image/*",default:'<ui5-button icon="upload" accessible-name-ref="upload-img-label">Upload Images</ui5-button>',multiple:!0};i.decorators=[e=>l(o||(o=y([`<ui5-label id="upload-img-label" style="display: none">File Uploader, which accepts only images.</ui5-label>
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
	<\/script>`])),e())];i.parameters={docs:{story:{inline:!1}}};var s,d,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,c,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(f=(c=i.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const R=["Basic","Advanced"];export{i as Advanced,t as Basic,R as __namedExportsOrder,N as default};
