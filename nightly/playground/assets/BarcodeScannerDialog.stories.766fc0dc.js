import{x as o}from"./lit-element.3a4d34a1.js";import{D as d}from"./docs.5b0d9211.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.2923eae9.js";import"./iframe.5c11fbe4.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.b97dbf58.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const l={close:{description:"Closes the dialog and the scan session.",table:{category:"methods"}},show:{description:"Shows a dialog with the camera videostream. Starts a scan session.",table:{category:"methods"}},"scan-error":{description:"Fires when the scan fails with error.",table:{category:"events"},UI5CustomData:{parameters:[{name:"message",type:"string",description:"the error message"}]}},"scan-success":{description:"Fires when the scan is completed successfuuly.",table:{category:"events"},UI5CustomData:{parameters:[{name:"text",type:"string",description:"the scan result as string"},{name:"rawBytes",type:"Object",description:"the scan result as a Uint8Array"}]}}},m={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.15"};var t=Object.freeze,p=Object.defineProperty,g=(e,i)=>t(p(e,"raw",{value:t(i||e.slice())})),a;const u="ui5-barcode-scanner-dialog",C={title:"Fiori/BarcodeScannerDialog",component:"BarcodeScannerDialog",parameters:{docs:{page:d({...m,component:u})}},argTypes:l},b=e=>o`
    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>
`,n=b.bind({});n.decorators=[e=>o(a||(a=g([" ",`
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
        <\/script>`])),e())];var r,s,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:'args => html`\n    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>\n`',...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const O=["Basic"];export{n as Basic,O as __namedExportsOrder,C as default};
//# sourceMappingURL=BarcodeScannerDialog.stories.766fc0dc.js.map
