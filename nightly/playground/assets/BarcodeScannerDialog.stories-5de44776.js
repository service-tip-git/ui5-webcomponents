import{x as s}from"./lit-element-c5a2b594.js";import{D as d}from"./docs-e6d25d3b.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f1e87d75.js";import"./index-132ff83d.js";import"./iframe-657c8299.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-2e471bae.js";import"./client-fb0f3103.js";const l={show:{description:"Shows a dialog with the camera videostream. Starts a scan session.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}},close:{description:"Closes the dialog and the scan session.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}}},m={package:"@ui5/webcomponents-fiori"};var t=Object.freeze,p=Object.defineProperty,u=(e,i)=>t(p(e,"raw",{value:t(i||e.slice())})),a;const g="ui5-barcode-scanner-dialog",R={title:"Fiori/Barcode Scanner Dialog",component:"BarcodeScannerDialog",parameters:{docs:{page:d({...m,component:g})}},argTypes:l},b=e=>s`
    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>
`,n=b.bind({});n.decorators=[e=>s(a||(a=u([" ",`
        <ui5-button id="btnScan" icon="camera" tooltip="Start Camera"
            >Scan</ui5-button
        >
        <div>
            <ui5-label id="scanResult"></ui5-label>
            <ui5-label id="scanError"></ui5-label>
        </div>
        <script>
            const btnScan = document.getElementById("btnScan");
            const dlgScan = document.getElementById("dlgScan");
            const scanResult = document.getElementById("scanResult");
            const scanError = document.getElementById("scanError");

            btnScan.addEventListener("click", (event) => {
                dlgScan.show();
            });

            dlgScan.addEventListener("scan-success", (event) => {
                scanResult.innerHTML = event.detail.text;
                dlgScan.close();
            });

            dlgScan.addEventListener("scan-error", (event) => {
                scanError.innerHTML = event.detail.message;
                dlgScan.close();
            });
        <\/script>`])),e())];var o,r,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`\n    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>\n`',...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const T=["Basic"];export{n as Basic,T as __namedExportsOrder,R as default};
