import{x as c}from"./lit-element-c5a2b594.js";import{D as d}from"./docs-5224ca3a.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ce2fae80.js";import"./index-1161d1b7.js";import"./iframe-c1be8f8a.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-c470b0da.js";import"./client-fb0f3103.js";const l={show:{description:"Shows a dialog with the camera videostream. Starts a scan session.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}},close:{description:"Closes the dialog and the scan session.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}},"scan-success":{description:"Fires when the scan is completed successfuuly.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"string"},name:"text",_ui5privacy:"public",description:"the scan result as string"},{type:{text:"Object"},name:"rawBytes",_ui5privacy:"public",description:"the scan result as a Uint8Array"}]}},"scan-error":{description:"Fires when the scan fails with error.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"string"},name:"message",_ui5privacy:"public",description:"the error message"}]}}},p={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.15"};var n=Object.freeze,m=Object.defineProperty,u=(e,i)=>n(m(e,"raw",{value:n(i||e.slice())})),a;const g="ui5-barcode-scanner-dialog",U={title:"Fiori/Barcode Scanner Dialog",component:"BarcodeScannerDialog",parameters:{docs:{page:d({...p,component:g})}},argTypes:l},b=e=>c`
    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>
`,t=b.bind({});t.decorators=[e=>c(a||(a=u([" ",`
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
        <\/script>`])),e())];var r,s,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:'args => html`\n    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>\n`',...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const O=["Basic"];export{t as Basic,O as __namedExportsOrder,U as default};
