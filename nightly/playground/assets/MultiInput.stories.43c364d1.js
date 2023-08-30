import{x as $}from"./lit-element.3a4d34a1.js";import{D as y}from"./docs.f6e43541.js";import{l as r}from"./if-defined.d89d00ab.js";import{o}from"./unsafe-html.3b27b0e6.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.96e70929.js";import"./iframe.2118ff3c.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.018f68a6.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const D={tokens:{control:{type:"text"}},"token-delete":{description:"Fired when a token is about to be deleted.",table:{category:"events"},UI5CustomData:{parameters:[{name:"token",type:"HTMLElement",description:"deleted token."}]}},previewItem:{control:{type:!1}},type:{control:"select",options:["Email","Number","Password","Tel","Text","URL"]},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},openPicker:{description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.",table:{category:"methods"}},"suggestion-item-preview":{description:"Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The previewed suggestion item."},{name:"targetRef",type:"HTMLElement",description:"The DOM ref of the suggestion item."}]}},"suggestion-item-select":{description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The selected item."}]}}},H={package:"@ui5/webcomponents",since:"1.0.0-rc.9"};var l=Object.freeze,b=Object.defineProperty,L=(e,I)=>l(b(e,"raw",{value:l(I||e.slice())})),g;const S="ui5-multi-input",W={title:"Main/MultiInput",component:"MultiInput",subcomponents:{Token:"Token"},parameters:{docs:{page:y({...H,component:S})}},argTypes:D};let a=0;const u=e=>$`
<ui5-multi-input
    id="multi-input-${++a}"
    value="${r(e.value)}"
    ?show-value-help-icon="${r(e.showValueHelpIcon)}"
    ?show-suggestions="${r(e.showSuggestions)}"
>
    ${o(e.default)}
    ${o(e.valueStateMessage)}
    ${o(e.icon)}
    ${o(e.tokens)}
</ui5-multi-input>`,s=u.bind({});s.args={value:"basic input"};const n=u.bind({});n.args={value:"value help icon",showValueHelpIcon:!0};n.storyName="Basic Multi Input with Value Help Dialog icon";const i=u.bind({});i.args={tokens:`
    <ui5-token slot="tokens" text="Argentina"></ui5-token>
    <ui5-token slot="tokens" text="Bulgaria"></ui5-token>
    <ui5-token slot="tokens" text="England"></ui5-token>
    <ui5-token slot="tokens" text="Finland"></ui5-token>
    <ui5-token slot="tokens" text="Germany"></ui5-token>
    <ui5-token slot="tokens" text="Hungary"></ui5-token>
    <ui5-token slot="tokens" text="Italy"></ui5-token>
    <ui5-token slot="tokens" text="Luxembourg"></ui5-token>
    <ui5-token slot="tokens" text="Mexico"></ui5-token>
    <ui5-token slot="tokens" text="Philippines"></ui5-token>
    <ui5-token slot="tokens" text="Sweden"></ui5-token>
    <ui5-token slot="tokens" text="USA"></ui5-token>`};i.storyName="Multi Input with tokens";const t=u.bind({});t.args={default:`
    <ui5-suggestion-item text="Argentina"></ui5-suggestion-item>
    <ui5-suggestion-item text="Bulgaria"></ui5-suggestion-item>
    <ui5-suggestion-item text="England"></ui5-suggestion-item>
    <ui5-suggestion-item text="Finland"></ui5-suggestion-item>
    <ui5-suggestion-item text="Germany"></ui5-suggestion-item>
    <ui5-suggestion-item text="Hungary"></ui5-suggestion-item>
    <ui5-suggestion-item text="Italy"></ui5-suggestion-item>
    <ui5-suggestion-item text="Luxembourg"></ui5-suggestion-item>
    <ui5-suggestion-item text="Mexico"></ui5-suggestion-item>
    <ui5-suggestion-item text="Philippines"></ui5-suggestion-item>
    <ui5-suggestion-item text="Sweden"></ui5-suggestion-item>
    <ui5-suggestion-item text="USA"></ui5-suggestion-item>`,valueStateMessage:'<div slot="valueStateMessage">Token is already in the list</div>',showSuggestions:!0};t.decorators=[e=>$(g||(g=L([`
    `,`
<script>
    var createTokenFromText = function (text) {
        let token = document.createElement("ui5-token");
        token.setAttribute("text", text);
        token.setAttribute("slot", "tokens");
        return token;
    };
    document.getElementById("multi-input-`,`").addEventListener("token-delete", function (event) {
        const token = event.detail?.token;
        token && token.remove();
    });
    document.getElementById("multi-input-`,`").addEventListener("paste", function (event) {
        event.preventDefault();

        let pastedText = (event.clipboardData || window.clipboardData).getData('text/plain');;

        if (!pastedText) {
            return;
        }

        let separatedTexts = pastedText.split(/\\r\\n|\\r|\\n|\\t/g).filter(t => !!t);

        if (separatedTexts.length === 1) {

            event.target.value += separatedTexts[0];
            return;
        }

        separatedTexts.forEach((tokenText) => {
            if (tokenText) {
                event.target.appendChild(createTokenFromText(tokenText));
            }
        })
    });
    document.getElementById("multi-input-`,`").addEventListener("change", function (event) {
        if (!event.target.value) {
            return;
        }
        let isDuplicate = event.target.tokens.some(function(token) {
            return token.text === event.target.value
        });
        if (isDuplicate) {
            event.target.valueState = "Error";
            setTimeout(function () {
                event.target.valueState = "Normal";
            }, 2000);
            return;
        }
        event.target.appendChild(createTokenFromText(event.target.value));
        event.target.value = "";
    });
<\/script>`],[`
    `,`
<script>
    var createTokenFromText = function (text) {
        let token = document.createElement("ui5-token");
        token.setAttribute("text", text);
        token.setAttribute("slot", "tokens");
        return token;
    };
    document.getElementById("multi-input-`,`").addEventListener("token-delete", function (event) {
        const token = event.detail?.token;
        token && token.remove();
    });
    document.getElementById("multi-input-`,`").addEventListener("paste", function (event) {
        event.preventDefault();

        let pastedText = (event.clipboardData || window.clipboardData).getData('text/plain');;

        if (!pastedText) {
            return;
        }

        let separatedTexts = pastedText.split(\\/\\\\r\\\\n\\|\\\\r\\|\\\\n\\|\\\\t\\/g).filter(t => !!t);

        if (separatedTexts.length === 1) {

            event.target.value += separatedTexts[0];
            return;
        }

        separatedTexts.forEach((tokenText) => {
            if (tokenText) {
                event.target.appendChild(createTokenFromText(tokenText));
            }
        })
    });
    document.getElementById("multi-input-`,`").addEventListener("change", function (event) {
        if (!event.target.value) {
            return;
        }
        let isDuplicate = event.target.tokens.some(function(token) {
            return token.text === event.target.value
        });
        if (isDuplicate) {
            event.target.valueState = "Error";
            setTimeout(function () {
                event.target.valueState = "Normal";
            }, 2000);
            return;
        }
        event.target.appendChild(createTokenFromText(event.target.value));
        event.target.value = "";
    });
<\/script>`])),e(),a,a,a)];t.storyName="Multi Input and token creation onChange and onPaste";var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    value="\${ifDefined(args.value)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,v,k;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    value="\${ifDefined(args.value)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var f,x,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    value="\${ifDefined(args.value)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var h,M,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    value="\${ifDefined(args.value)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(w=(M=t.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};const q=["BasicMultiInput","BasicMultiInputVHDIcon","MultiInputTokens","MultiInputTokenCreation"];export{s as BasicMultiInput,n as BasicMultiInputVHDIcon,t as MultiInputTokenCreation,i as MultiInputTokens,q as __namedExportsOrder,W as default};
//# sourceMappingURL=MultiInput.stories.43c364d1.js.map
