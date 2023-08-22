import{x as D}from"./lit-element.3a4d34a1.js";import{l as d}from"./if-defined.d89d00ab.js";import{o as c}from"./unsafe-html.3b27b0e6.js";import{D as B}from"./docs.ebd7b073.js";import{M as o}from"./MessageStripDesign.440deab2.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.791eafa6.js";import"./iframe.be013af7.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.030f599f.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const L={design:{control:"select",options:["Information","Negative","Positive","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}}},N={package:"@ui5/webcomponents",since:"0.9.0"};var p=Object.freeze,W=Object.defineProperty,T=(e,q)=>p(W(e,"raw",{value:p(q||e.slice())})),g;const _="ui5-message-strip",X={title:"Main/MessageStrip",component:"MessageStrip",parameters:{docs:{page:B({...N,component:_})}},argTypes:L},a=e=>D`<ui5-message-strip 
    design="${d(e.design)}"
    ?hide-icon="${d(e.hideIcon)}"
    ?hide-close-button="${d(e.hideCloseButton)}"
>
    ${c(e.icon)}
    ${c(e.default)}
</ui5-message-strip>
`,t=a.bind({});t.args={design:o.Information,default:"Information MessageStrip"};const n=a.bind({});n.args={design:o.Positive,hideCloseButton:!0,default:"Positive MessageStrip With No Close Button"};const i=a.bind({});i.args={design:o.Warning,hideIcon:!0,default:"Warning MessageStrip With No Icon"};const r=()=>D(g||(g=T([`
<div class="wrapper">
    <ui5-button id="button1">Generate MessageStrip</ui5-button>
</div>
<script>
    const container = document.querySelector(".wrapper");
    const button =  document.querySelector("#button1");
    button.addEventListener("click", function(event) {
        let invisibleMessage =  window["sap-ui-webcomponents-bundle"].invisibleMessage;
        const messageStrip = document.querySelector("#msgStrip");
        const types = ["Information", "Warning", "Negative", "Positive"];
        const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.";
        let type = types[Math.round(Math.random() * 3)];
        if (messageStrip) {
            container.removeChild(messageStrip);
        }
        let generatedMsgStrip = document.createElement("ui5-message-strip");
        generatedMsgStrip.id = "msgStrip";
        generatedMsgStrip.design = type;
        generatedMsgStrip.textContent = text;
        invisibleMessage.announce(\`New Information Bar of type \${type} \${text}\`, "Assertive");
        container.appendChild(generatedMsgStrip);
    });
<\/script>
`],[`
<div class="wrapper">
    <ui5-button id="button1">Generate MessageStrip</ui5-button>
</div>
<script>
    const container = document.querySelector(".wrapper");
    const button =  document.querySelector("#button1");
    button.addEventListener("click", function(event) {
        let invisibleMessage =  window["sap-ui-webcomponents-bundle"].invisibleMessage;
        const messageStrip = document.querySelector("#msgStrip");
        const types = ["Information", "Warning", "Negative", "Positive"];
        const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.";
        let type = types[Math.round(Math.random() * 3)];
        if (messageStrip) {
            container.removeChild(messageStrip);
        }
        let generatedMsgStrip = document.createElement("ui5-message-strip");
        generatedMsgStrip.id = "msgStrip";
        generatedMsgStrip.design = type;
        generatedMsgStrip.textContent = text;
        invisibleMessage.announce(\\\`New Information Bar of type \\\${type} \\\${text}\\\`, "Assertive");
        container.appendChild(generatedMsgStrip);
    });
<\/script>
`]))),s=a.bind({});s.args={design:o.Negative,icon:'<img src="../assets/images/loading.gif" width="16" height="16" slot="icon">',default:"Custom MessageStrip with animated gif"};var u,m,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var f,S,M;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(M=(S=n.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var h,b,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,$,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => html\`
<div class="wrapper">
    <ui5-button id="button1">Generate MessageStrip</ui5-button>
</div>
<script>
    const container = document.querySelector(".wrapper");
    const button =  document.querySelector("#button1");
    button.addEventListener("click", function(event) {
        let invisibleMessage =  window["sap-ui-webcomponents-bundle"].invisibleMessage;
        const messageStrip = document.querySelector("#msgStrip");
        const types = ["Information", "Warning", "Negative", "Positive"];
        const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.";
        let type = types[Math.round(Math.random() * 3)];
        if (messageStrip) {
            container.removeChild(messageStrip);
        }
        let generatedMsgStrip = document.createElement("ui5-message-strip");
        generatedMsgStrip.id = "msgStrip";
        generatedMsgStrip.design = type;
        generatedMsgStrip.textContent = text;
        invisibleMessage.announce(\\\`New Information Bar of type \\\${type} \\\${text}\\\`, "Assertive");
        container.appendChild(generatedMsgStrip);
    });
<\/script>
\``,...(w=($=r.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var C,x,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};const Y=["Basic","MessageStripWithNoCloseButton","MessageStripWithNoIcon","DynamicMessageStrip","CustomMessageStrip"];export{t as Basic,s as CustomMessageStrip,r as DynamicMessageStrip,n as MessageStripWithNoCloseButton,i as MessageStripWithNoIcon,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=MessageStrip.stories.b87ae284.js.map
