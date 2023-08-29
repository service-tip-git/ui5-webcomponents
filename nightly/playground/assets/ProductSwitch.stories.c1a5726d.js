import{x as l}from"./lit-element.3a4d34a1.js";import{o as h}from"./unsafe-html.3b27b0e6.js";import{D as w}from"./docs.740d47c3.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.61a9c3c8.js";import"./iframe.c80d6626.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.7e9f88f8.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const x={default:{control:{type:"text"}}},g={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.5"};var o=Object.freeze,b=Object.defineProperty,f=(t,d)=>o(b(t,"raw",{value:o(d||t.slice())})),c;const v="ui5-product-switch",D={title:"Fiori/ProductSwitch",component:"ProductSwitch",subcomponents:{ProductSwitchItem:"ProductSwitchItem"},parameters:{docs:{page:w({...g,component:v})}},argTypes:x},m=t=>l`
    <ui5-product-switch> ${h(t.default)} </ui5-product-switch>
`,i=m.bind({});i.args={default:`
    <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
`};const e=m.bind({});e.decorators=[t=>l(c||(c=f([`
        <ui5-shellbar
            id="shellbar"
            primary-title="Corporate Portal"
            secondary-title="home"
            logo="../assets/images/sap-logo-svg.svg"
            show-product-switch=""
            show-co-pilot=""
        >
        </ui5-shellbar>
        <ui5-popover id="productswitch-popover" placement-type="Bottom">
            `,`
        </ui5-popover>
        <script>
            var shellBar = document.getElementById("shellbar");
            var popover = document.getElementById("productswitch-popover");
            shellbar.addEventListener("product-switch-click", (event) => {
                if (popover.opened) {
                    popover.close();
                } else {
                    event.preventDefault();
                    popover.showAt(event.detail.targetRef);
                }
            });
        <\/script>
    `])),t())];e.args={default:`
    <ui5-product-switch-item
        title-text="Home"
        subtitle-text="Central Home"
        icon="home"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Analytics Cloud"
        subtitle-text="Analytics Cloud"
        icon="business-objects-experience"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Catalog"
        subtitle-text="Ariba"
        icon="contacts"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Guided Buying"
        icon="credit-card"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Strategic Procurement"
        icon="cart-3"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Travel &amp; Expense"
        subtitle-text="Concur"
        icon="flight"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Vendor Management"
        subtitle-text="Fieldglass"
        icon="shipping-status"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Human Capital Management"
        icon="customer"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Sales Cloud"
        subtitle-text="Sales Cloud"
        icon="sales-notification"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Commerce Cloud"
        subtitle-text="Commerce Cloud"
        icon="retail-store"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Marketing Cloud"
        subtitle-text="Marketing Cloud"
        icon="marketing-campaign"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Service Cloud"
        icon="family-care"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Customer Data Cloud"
        icon="customer-briefing"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="S/4HANA"
        icon="batch-payments"
    ></ui5-product-switch-item>
    </ui5-product-switch>`};var r,s,u;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:"args => html`\n    <ui5-product-switch> ${unsafeHTML(args.default)} </ui5-product-switch>\n`",...(u=(s=i.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var a,p,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"args => html`\n    <ui5-product-switch> ${unsafeHTML(args.default)} </ui5-product-switch>\n`",...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const L=["Basic","ProductSwitchWithShellBar"];export{i as Basic,e as ProductSwitchWithShellBar,L as __namedExportsOrder,D as default};
//# sourceMappingURL=ProductSwitch.stories.c1a5726d.js.map
