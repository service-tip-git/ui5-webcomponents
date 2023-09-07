import{x as l}from"./lit-element-c5a2b594.js";import{D as B}from"./docs-3e4094d2.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as u}from"./unsafe-html-0ddd83da.js";import{V as M}from"./ValueState-2c5e5904.js";import{I as q}from"./InputType-e6e10a5f.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-dd282d22.js";import"./iframe-40ee6175.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-2ea5afff.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const k={previewItem:{control:{type:!1}},type:{control:"select",options:["Email","Number","Password","Tel","Text","URL"]},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},openPicker:{description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.",table:{category:"methods"}},"suggestion-item-preview":{description:"Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The previewed suggestion item."},{name:"targetRef",type:"HTMLElement",description:"The DOM ref of the suggestion item."}]}},"suggestion-item-select":{description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The selected item."}]}}},N={package:"@ui5/webcomponents"};var c=Object.freeze,A=Object.defineProperty,C=(n,T)=>c(A(n,"raw",{value:c(T||n.slice())})),p,g;const P="ui5-input";let e=0;const te={title:"Main/Input",component:"Input",subcomponents:{SuggestionItem:"SuggestionsItem",SuggestionGroupItem:"SuggestionsGroupItem"},parameters:{docs:{page:B({...N,component:P})}},argTypes:k},d=n=>l`
<ui5-input
    id="input-${++e}"
    ?disabled="${t(n.disabled)}"
    placeholder="${t(n.placeholder)}"
    ?readonly="${t(n.readonly)}"
    ?required="${t(n.required)}"
    ?no-typeahead="${t(n.noTypeahead)}"
    type="${t(n.type)}"
    value="${t(n.value)}"
    value-state="${t(n.valueState)}"
    name="${t(n.name)}"
    ?show-suggestions="${t(n.showSuggestions)}"
    maxlength="${t(n.maxlength)}"
    accessible-name="${t(n.accessibleName)}"
    accessible-name-ref="${t(n.accessibleNameRef)}"
    ?show-clear-icon="${t(n.showClearIcon)}"
>
    ${u(n.valueStateMessage)}
    ${u(n.default)}
    ${u(n.icon)}
</ui5-input>`,s=d.bind({});s.args={value:"Input"};const i=d.bind({});i.decorators=[n=>l(p||(p=C([`
        `,`
<script>
    const input`,' = document.getElementById("input-',`");
    input`,`.addEventListener("input", () => {
        const value = input`,`.value;
        let suggestionItems = [];
        const ui5_database_entries = ["Argentina", "Albania", "Algeria", "Angola",
        "Austria",  "Australia", "Bulgaria", "Canada", "Columbia", "Croatia", "Denmark",
        "England", "Finland", "France", "Germany", "Hungary", "Ireland", "Italy", "Kuwait",
        "Luxembourg", "Mexico", "Morocco", "Norway", "Paraguay", "Philippines", "Portugal",
        "Spain", "Sweden", "Sri Lanka", "Senegal", "Thailand", "The United Kingdom of Great Britain and Northern Ireland", "USA" ];

        if (value) {
            suggestionItems = ui5_database_entries.filter((item) => {
                return item.toUpperCase().indexOf(value.toUpperCase()) === 0;
            });
        }
        Array.from(input`,`.children).forEach((child) => {
            input`,`.removeChild(child);
        });
        suggestionItems.forEach((item) => {
            const li = document.createElement("ui5-suggestion-item");
            li.text = item;
            input`,`.appendChild(li);
        });
    });
<\/script>`])),n(),e,e,e,e,e,e,e)];i.args={placeholder:"Start typing country name",showSuggestions:!0,showClearIcon:!0};const o=d.bind({});o.args={default:`
    <ui5-li>Cozy</ui5-li>
    <ui5-li>Compact</ui5-li>
    <ui5-li>Condensed</ui5-li>`,placeholder:"Choose content density",showSuggestions:!0,valueState:M.Error,valueStateMessage:'<div slot="valueStateMessage">This is an error message. Extra long text used as an error message.</div>'};const a=d.bind({});a.decorators=[n=>l`
            <ui5-label class="samples-big-margin-right" for="input-${e+1}" required="" show-colon="">Secret Code</ui5-label>
            ${n()}
        `];a.args={type:q.Password,placeholder:"Enter your Secret Code",required:!0};const r=()=>l(g||(g=C([`
<ui5-input id="valueHelpInput" placeholder="Enter product" show-suggestions="">
    <ui5-icon id="valueHelpIcon" slot="icon" name="value-help"></ui5-icon>
</ui5-input>
<ui5-dialog id="dialog" accessible-name="Products Value Help">
    <div slot="header" id="dialogHeader" style="width: 100%; padding: 0 1rem 0.5rem 1rem;">
        <div id="titleBar" style="display: flex; justify-content: space-between; align-items: center;">
            <h2 id="headerTitle" style="
                margin-top: 1em !important; font-size: 1rem; font-weight: 500;">
                Products
            </h2>
            <ui5-button design="Transparent" id="clearButton">Clear</ui5-button>
        </div>
        <ui5-input id="dialogSearchInput" placeholder="Search">
            <ui5-icon id="dialogSearchIcon" slot="icon" name="search"></ui5-icon>
        </ui5-input>
    </div>
    <ui5-list id="itemsList" no-data-text="No data"></ui5-list>
    <div slot="footer" id="footer">
        <ui5-button design="Transparent" id="cancelButton">Cancel</ui5-button>
    </div>
</ui5-dialog>
<script>
    const valueHelpInput`,` = document.getElementById("valueHelpInput");
    const valueHelpIcon`,` = document.getElementById("valueHelpIcon");
    const dialog`,` = document.getElementById("dialog");
    const dialogSearchInput`,` = document.getElementById("dialogSearchInput");
    const dialogSearchIcon`,` = document.getElementById("dialogSearchIcon");
    const clearButton`,` = document.getElementById("clearButton");
    const cancelButton`,` = document.getElementById("cancelButton");
    const itemsList`,` = document.getElementById("itemsList");

    const loadSuggestions = async () => {
        const response = await fetch("../assets/data/products.json");
        const products = await response.json();
        const query = valueHelpInput`,`.value.toLowerCase();

        if (query) {
            suggestionItems = products
                .filter((product) => {
                    return product.name.toLowerCase().indexOf(query) === 0;
                })
                .map((product) => {
                    return product.name;
                })
                .sort((a, b) => {
                    return a.localeCompare(b);
                })
                .slice(0, 10);
        }
        [].slice.call(valueHelpInput`,`.children, 1).forEach((item) => {
            valueHelpInput`,`.removeChild(item);
        });
        suggestionItems.forEach((item) => {
            const li = document.createElement("ui5-suggestion-item");
            li.text = item;
            valueHelpInput`,`.appendChild(li);
        });
    }
    const showDialog = () => {
        dialogSearchInput`,".value = valueHelpInput",`.value;
        loadList();
        if (screen.width <= 768) {
            dialog`,`.setAttribute("stretch", "");
        }
        dialog`,`.show();
        // Required by UX as the VH dialog's popup content has no padding in UI5.
        dialog`,`.shadowRoot.querySelector(".ui5-popup-content").style.padding = 0;
        dialog`,`.shadowRoot.querySelector(".ui5-popup-content").style.height = "100vw";
    }
    const closeDialog = () => {
        dialog`,`.close();
    }
    const loadList = async () => {
        const response = await fetch("../assets/data/products.json");
        const products = await response.json();
        const query = dialogSearchInput`,`.value.toLowerCase();

        itemsList`,`.innerHTML = "";
        products
            .filter((product) => {
                return product.name.toLowerCase().indexOf(query) === 0;
            })
            .sort((a, b) => {
                return a.name.localeCompare(b.name);
            })
            .forEach((item) => {
                const li = document.createElement("ui5-li");
                li.innerHTML = item.name;
                li.image = item.productPicUrl;
                li.description = item.productId;
                itemsList`,`.appendChild(li);
            });
    }
    const handleItemClick = event => {
        const item = event.detail.item;
        valueHelpInput`,`.setAttribute("value", item.innerHTML);
        dialog`,`.close();
    }
    const clearQuery = () => {
        dialogSearchInput`,`.setAttribute("value", "");
        loadList();
    }

    valueHelpInput`,`.addEventListener("input", loadSuggestions);
    valueHelpIcon`,`.addEventListener("click", showDialog);
    dialogSearchInput`,`.addEventListener("change", loadList);
    dialogSearchIcon`,`.addEventListener("click", loadList);
    clearButton`,`.addEventListener("click", clearQuery);
    cancelButton`,`.addEventListener("click", closeDialog);
    itemsList`,`.addEventListener("item-click", handleItemClick);
<\/script>
`])),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e);r.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var m,f,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => html\`
<ui5-input
    id="input-\${++index}"
    ?disabled="\${ifDefined(args.disabled)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    type="\${ifDefined(args.type)}"
    value="\${ifDefined(args.value)}"
    value-state="\${ifDefined(args.valueState)}"
    name="\${ifDefined(args.name)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
    maxlength="\${ifDefined(args.maxlength)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    ?show-clear-icon="\${ifDefined(args.showClearIcon)}"
>
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
</ui5-input>\``,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,$,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => html\`
<ui5-input
    id="input-\${++index}"
    ?disabled="\${ifDefined(args.disabled)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    type="\${ifDefined(args.type)}"
    value="\${ifDefined(args.value)}"
    value-state="\${ifDefined(args.valueState)}"
    name="\${ifDefined(args.name)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
    maxlength="\${ifDefined(args.maxlength)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    ?show-clear-icon="\${ifDefined(args.showClearIcon)}"
>
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
</ui5-input>\``,...(y=($=i.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var I,b,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => html\`
<ui5-input
    id="input-\${++index}"
    ?disabled="\${ifDefined(args.disabled)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    type="\${ifDefined(args.type)}"
    value="\${ifDefined(args.value)}"
    value-state="\${ifDefined(args.valueState)}"
    name="\${ifDefined(args.name)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
    maxlength="\${ifDefined(args.maxlength)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    ?show-clear-icon="\${ifDefined(args.showClearIcon)}"
>
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
</ui5-input>\``,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var w,D,x;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`args => html\`
<ui5-input
    id="input-\${++index}"
    ?disabled="\${ifDefined(args.disabled)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    type="\${ifDefined(args.type)}"
    value="\${ifDefined(args.value)}"
    value-state="\${ifDefined(args.valueState)}"
    name="\${ifDefined(args.name)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
    maxlength="\${ifDefined(args.maxlength)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    ?show-clear-icon="\${ifDefined(args.showClearIcon)}"
>
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
</ui5-input>\``,...(x=(D=a.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var L,H,E;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`() => html\`
<ui5-input id="valueHelpInput" placeholder="Enter product" show-suggestions="">
    <ui5-icon id="valueHelpIcon" slot="icon" name="value-help"></ui5-icon>
</ui5-input>
<ui5-dialog id="dialog" accessible-name="Products Value Help">
    <div slot="header" id="dialogHeader" style="width: 100%; padding: 0 1rem 0.5rem 1rem;">
        <div id="titleBar" style="display: flex; justify-content: space-between; align-items: center;">
            <h2 id="headerTitle" style="
                margin-top: 1em !important; font-size: 1rem; font-weight: 500;">
                Products
            </h2>
            <ui5-button design="Transparent" id="clearButton">Clear</ui5-button>
        </div>
        <ui5-input id="dialogSearchInput" placeholder="Search">
            <ui5-icon id="dialogSearchIcon" slot="icon" name="search"></ui5-icon>
        </ui5-input>
    </div>
    <ui5-list id="itemsList" no-data-text="No data"></ui5-list>
    <div slot="footer" id="footer">
        <ui5-button design="Transparent" id="cancelButton">Cancel</ui5-button>
    </div>
</ui5-dialog>
<script>
    const valueHelpInput\${index} = document.getElementById("valueHelpInput");
    const valueHelpIcon\${index} = document.getElementById("valueHelpIcon");
    const dialog\${index} = document.getElementById("dialog");
    const dialogSearchInput\${index} = document.getElementById("dialogSearchInput");
    const dialogSearchIcon\${index} = document.getElementById("dialogSearchIcon");
    const clearButton\${index} = document.getElementById("clearButton");
    const cancelButton\${index} = document.getElementById("cancelButton");
    const itemsList\${index} = document.getElementById("itemsList");

    const loadSuggestions = async () => {
        const response = await fetch("../assets/data/products.json");
        const products = await response.json();
        const query = valueHelpInput\${index}.value.toLowerCase();

        if (query) {
            suggestionItems = products
                .filter((product) => {
                    return product.name.toLowerCase().indexOf(query) === 0;
                })
                .map((product) => {
                    return product.name;
                })
                .sort((a, b) => {
                    return a.localeCompare(b);
                })
                .slice(0, 10);
        }
        [].slice.call(valueHelpInput\${index}.children, 1).forEach((item) => {
            valueHelpInput\${index}.removeChild(item);
        });
        suggestionItems.forEach((item) => {
            const li = document.createElement("ui5-suggestion-item");
            li.text = item;
            valueHelpInput\${index}.appendChild(li);
        });
    }
    const showDialog = () => {
        dialogSearchInput\${index}.value = valueHelpInput\${index}.value;
        loadList();
        if (screen.width <= 768) {
            dialog\${index}.setAttribute("stretch", "");
        }
        dialog\${index}.show();
        // Required by UX as the VH dialog's popup content has no padding in UI5.
        dialog\${index}.shadowRoot.querySelector(".ui5-popup-content").style.padding = 0;
        dialog\${index}.shadowRoot.querySelector(".ui5-popup-content").style.height = "100vw";
    }
    const closeDialog = () => {
        dialog\${index}.close();
    }
    const loadList = async () => {
        const response = await fetch("../assets/data/products.json");
        const products = await response.json();
        const query = dialogSearchInput\${index}.value.toLowerCase();

        itemsList\${index}.innerHTML = "";
        products
            .filter((product) => {
                return product.name.toLowerCase().indexOf(query) === 0;
            })
            .sort((a, b) => {
                return a.name.localeCompare(b.name);
            })
            .forEach((item) => {
                const li = document.createElement("ui5-li");
                li.innerHTML = item.name;
                li.image = item.productPicUrl;
                li.description = item.productId;
                itemsList\${index}.appendChild(li);
            });
    }
    const handleItemClick = event => {
        const item = event.detail.item;
        valueHelpInput\${index}.setAttribute("value", item.innerHTML);
        dialog\${index}.close();
    }
    const clearQuery = () => {
        dialogSearchInput\${index}.setAttribute("value", "");
        loadList();
    }

    valueHelpInput\${index}.addEventListener("input", loadSuggestions);
    valueHelpIcon\${index}.addEventListener("click", showDialog);
    dialogSearchInput\${index}.addEventListener("change", loadList);
    dialogSearchIcon\${index}.addEventListener("click", loadList);
    clearButton\${index}.addEventListener("click", clearQuery);
    cancelButton\${index}.addEventListener("click", closeDialog);
    itemsList\${index}.addEventListener("item-click", handleItemClick);
<\/script>
\``,...(E=(H=r.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};const ie=["Basic","WithSuggestions","WithValueStateMessage","WithLabel","WithValueHelpDialog"];export{s as Basic,a as WithLabel,i as WithSuggestions,r as WithValueHelpDialog,o as WithValueStateMessage,ie as __namedExportsOrder,te as default};
//# sourceMappingURL=Input.stories-ebe5a2f7.js.map
