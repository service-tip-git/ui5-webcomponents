import{x}from"./lit-element-c5a2b594.js";import{o}from"./unsafe-html-0ddd83da.js";import{D as T}from"./docs-e6d25d3b.js";import{l as t}from"./if-defined-c29cffe1.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f1e87d75.js";import"./index-132ff83d.js";import"./iframe-657c8299.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-2e471bae.js";import"./client-fb0f3103.js";const v={default:{control:{type:"text"},table:{type:{}}},header:{control:{type:"text"},table:{type:{}}},walk:{description:"Perform Depth-First-Search walk on the tree and run a callback on each node",table:{category:"methods"},UI5CustomData:{parameters:[{name:"callback",type:{text:"WalkCallback",references:[{name:"WalkCallback",package:"@ui5/webcomponents",module:"dist/Tree.js"}]},description:"function to execute on each node of the tree with 3 arguments: the node, the level and the index"}],returnValue:{type:{text:"void"}}}}},w={package:"@ui5/webcomponents"};var a=Object.freeze,D=Object.defineProperty,$=(e,g)=>a(D(e,"raw",{value:a(g||e.slice())})),m;const I="ui5-tree",R={title:"Main/Tree",component:"Tree",parameters:{docs:{page:T({...w,component:I})}},argTypes:v},b=e=>x`<ui5-tree
    mode="${t(e.mode)}"
    no-data-text="${t(e.noDataText)}"
    header-text="${t(e.headerText)}"
    footer-text="${t(e.footerText)}"
    accessible-name="${t(e.accessibleName)}"
    accessible-name-ref="${t(e.accessibleNameRef)}"
>
    ${o(e.header)} ${o(e.default)}
</ui5-tree>`,i=b.bind({});i.args={default:`
    <ui5-tree-item expanded="" text="Tree 1" icon="paste" selected="">
        <ui5-tree-item expanded="" text="Tree 1.1" selected="">
            <ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>
            <ui5-tree-item text="Tree 1.1.2"></ui5-tree-item>
        </ui5-tree-item>
    </ui5-tree-item>
    <ui5-tree-item text="Tree 2" icon="copy">
        <ui5-tree-item text="Tree 2.1">
            <ui5-tree-item text="Tree 2.1.1"></ui5-tree-item>
            <ui5-tree-item text="Tree 2.1.2">
                <ui5-tree-item text="Tree 2.1.2.1"></ui5-tree-item>
                <ui5-tree-item text="Tree 2.1.2.2"></ui5-tree-item>
                <ui5-tree-item text="Tree 2.1.2.3"></ui5-tree-item>
                <ui5-tree-item text="Tree 2.1.2.5"></ui5-tree-item>
            </ui5-tree-item>
        </ui5-tree-item>
        <ui5-tree-item text="Tree 2.2"></ui5-tree-item>
    </ui5-tree-item>
    <ui5-tree-item expanded="" text="Tree 3 (no icon)"> </ui5-tree-item>`};const r=()=>x(m||(m=$([`
    <ui5-busy-indicator id="busy" class="full-width">
        <ui5-tree id="treeDynamic" mode="None" class="full-width">
            <ui5-tree-item text="Has pre-loaded children">
                <ui5-tree-item text="Child 1"></ui5-tree-item>
                <ui5-tree-item text="Child 2"></ui5-tree-item>
            </ui5-tree-item>
            <ui5-tree-item text="Has no children at all"></ui5-tree-item>
            <ui5-tree-item
                id="dynamicNode"
                text="Has children, but not yet loaded"
                has-children=""
            ></ui5-tree-item>
        </ui5-tree>
    </ui5-busy-indicator>
    <script>
        const busyIndicator = document.getElementById("busy");
        const dynamicTree = document.getElementById("treeDynamic");
        dynamicTree.addEventListener("item-toggle", function (event) {
            const item = event.detail.item; // get the node that is toggled
            // Only for the dynamic node, and only when it's empty
            if (item.id === "dynamicNode" && item.children.length === 0) {
                busyIndicator.active = true; // block the tree from the user
                event.preventDefault(); // do not let the toggle button switch yet
                setTimeout(function () {
                    const newItem = document.createElement("ui5-tree-item"); // Fetching from db....
                    newItem.text = "Node fetched from DB after 2 sec";
                    item.appendChild(newItem); // add the newly fetched node to the tree
                    item.toggle(); // now manually switch the toggle button
                    busyIndicator.active = false; // unblock the tree
                }, 2000);
            }
        });
    <\/script>
`]))),n=b.bind({});n.args={header:`
    <div slot="header">
        <ui5-title>Tree with custom items</ui5-title>
    </div>`,default:`
    <ui5-tree-item-custom
        expanded="true"
        show-toggle-button=""
        hide-selection-element=""
        type="Active"
        level="1"
    >
        <ui5-button slot="content">Level 1</ui5-button>
        <ui5-tree-item-custom
            type="Active"
            show-toggle-button=""
            level="2"
            expanded="true"
        >
            <ui5-select slot="content">
                <ui5-option>Level 2</ui5-option>
                <ui5-option>Option 2.1</ui5-option>
                <ui5-option>Option 2.3</ui5-option>
            </ui5-select>
            <ui5-tree-item-custom
                hide-selection-element=""
                type="Active"
                level="3"
            >
                <ui5-button slot="content">Level 3</ui5-button>
            </ui5-tree-item-custom>
        </ui5-tree-item-custom>
    </ui5-tree-item-custom>`};var c,d,s;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-tree\n    mode="${ifDefined(args.mode)}"\n    no-data-text="${ifDefined(args.noDataText)}"\n    header-text="${ifDefined(args.headerText)}"\n    footer-text="${ifDefined(args.footerText)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n    ${unsafeHTML(args.header)} ${unsafeHTML(args.default)}\n</ui5-tree>`',...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,l,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => html\`
    <ui5-busy-indicator id="busy" class="full-width">
        <ui5-tree id="treeDynamic" mode="None" class="full-width">
            <ui5-tree-item text="Has pre-loaded children">
                <ui5-tree-item text="Child 1"></ui5-tree-item>
                <ui5-tree-item text="Child 2"></ui5-tree-item>
            </ui5-tree-item>
            <ui5-tree-item text="Has no children at all"></ui5-tree-item>
            <ui5-tree-item
                id="dynamicNode"
                text="Has children, but not yet loaded"
                has-children=""
            ></ui5-tree-item>
        </ui5-tree>
    </ui5-busy-indicator>
    <script>
        const busyIndicator = document.getElementById("busy");
        const dynamicTree = document.getElementById("treeDynamic");
        dynamicTree.addEventListener("item-toggle", function (event) {
            const item = event.detail.item; // get the node that is toggled
            // Only for the dynamic node, and only when it's empty
            if (item.id === "dynamicNode" && item.children.length === 0) {
                busyIndicator.active = true; // block the tree from the user
                event.preventDefault(); // do not let the toggle button switch yet
                setTimeout(function () {
                    const newItem = document.createElement("ui5-tree-item"); // Fetching from db....
                    newItem.text = "Node fetched from DB after 2 sec";
                    item.appendChild(newItem); // add the newly fetched node to the tree
                    item.toggle(); // now manually switch the toggle button
                    busyIndicator.active = false; // unblock the tree
                }, 2000);
            }
        });
    <\/script>
\``,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var f,p,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-tree\n    mode="${ifDefined(args.mode)}"\n    no-data-text="${ifDefined(args.noDataText)}"\n    header-text="${ifDefined(args.headerText)}"\n    footer-text="${ifDefined(args.footerText)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n    ${unsafeHTML(args.header)} ${unsafeHTML(args.default)}\n</ui5-tree>`',...(y=(p=n.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const z=["Basic","DynamicContent","TreeWithCustomItems"];export{i as Basic,r as DynamicContent,n as TreeWithCustomItems,z as __namedExportsOrder,R as default};
