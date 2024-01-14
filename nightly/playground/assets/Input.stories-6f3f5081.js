import{x as u}from"./lit-element-c5a2b594.js";import{D as k}from"./docs-84040a3f.js";import{l as t}from"./if-defined-c29cffe1.js";import{o as c}from"./unsafe-html-0ddd83da.js";import{V as N}from"./ValueState-2c5e5904.js";import{I as A}from"./InputType-e6e10a5f.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-4f103317.js";import"./index-1ddc0cbe.js";import"./iframe-b6eaac03.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-40facfd7.js";import"./client-fb0f3103.js";const _={valueState:{control:"select",options:["None","Success","Warning","Error","Information"]},previewItem:{control:{type:!1}},default:{control:{type:"text"},table:{type:{}}},icon:{control:{type:"text"},table:{type:{}}},valueStateMessage:{control:{type:"text"},table:{type:{}}},openPicker:{description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}}},j={package:"@ui5/webcomponents"};var p=Object.freeze,R=Object.defineProperty,q=(n,P)=>p(R(n,"raw",{value:p(P||n.slice())})),g,m;const V="ui5-input";let e=0;const oe={title:"Main/Input",component:"Input",parameters:{docs:{page:k({...j,component:V})}},argTypes:_},d=n=>u`
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
    ${c(n.valueStateMessage)}
    ${c(n.default)}
    ${c(n.icon)}
</ui5-input>`,s=d.bind({});s.args={value:"Input"};const a=d.bind({});a.decorators=[n=>u(g||(g=q([`
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
<\/script>`])),n(),e,e,e,e,e,e,e)];a.args={placeholder:"Start typing country name",showSuggestions:!0,showClearIcon:!0};const o=d.bind({});o.args={default:`<ui5-suggestion-item text="Wireless DSL/ Repeater and Print Server Lorem ipsum dolar st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor incidunt ut labore et dolore magna aliquyam erat, diam nonumy eirmod tempor individunt ut labore et dolore magna aliquyam erat, sed justo et ea rebum."></ui5-suggestion-item>
    <ui5-suggestion-item text="Widescreen Portable DVD Player w MP3, consetetur sadipscing, sed diam nonumy eirmod tempor invidunt ut labore et dolore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergen, no sea takimata. Tortor pretium viverra suspendisse potenti nullam. Congue quisque egestas diam in arcu cursus.Rutrum tellus pellentesque eu tincidunt tortor. Nec tincidunt praesent semper feugiat nibh sed"></ui5-suggestion-item>
    <ui5-suggestion-item text="Portable DVD Player with 9 inches LCD Monitor"></ui5-suggestion-item>`,placeholder:"Enter product",showSuggestions:!0};const r=d.bind({});r.args={default:`
    <ui5-li>Cozy</ui5-li>
    <ui5-li>Compact</ui5-li>
    <ui5-li>Condensed</ui5-li>`,placeholder:"Choose content density",showSuggestions:!0,valueState:N.Error,valueStateMessage:'<div slot="valueStateMessage">This is an error message. Extra long text used as an error message.</div>'};const i=d.bind({});i.decorators=[n=>u`
            <ui5-label class="samples-big-margin-right" for="input-${e+1}" required="" show-colon="">Secret Code</ui5-label>
            ${n()}
        `];i.args={type:A.Password,placeholder:"Enter your Secret Code",required:!0};const l=()=>u(m||(m=q([`
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
`])),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e);l.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var f,h,$;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => html\`
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
</ui5-input>\``,...($=(h=s.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var v,y,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => html\`
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
</ui5-input>\``,...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var b,D,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => html\`
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
</ui5-input>\``,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var x,w,L;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
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
</ui5-input>\``,...(L=(w=r.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var H,E,C;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`args => html\`
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
</ui5-input>\``,...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var T,B,M;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => html\`
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
\``,...(M=(B=l.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const re=["Basic","Suggestions","SuggestionsWrapping","ValueStateMessage","Label","ValueHelpDialog"];export{s as Basic,i as Label,a as Suggestions,o as SuggestionsWrapping,l as ValueHelpDialog,r as ValueStateMessage,re as __namedExportsOrder,oe as default};
