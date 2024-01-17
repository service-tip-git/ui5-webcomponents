import{x as i}from"./lit-element-c5a2b594.js";import{l as p}from"./if-defined-c29cffe1.js";import{o as d}from"./unsafe-html-0ddd83da.js";import{D as g}from"./docs-7cc24d98.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-ac52f94c.js";import"./index-c5b45678.js";import"./iframe-ac31e5f8.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-bb8a36b5.js";import"./client-fb0f3103.js";const f={alignContent:{control:"select",options:["Start","End"]},default:{control:{type:"text"},table:{type:{summary:"Array<ToolbarItem>"}}},isOverflowOpen:{description:"Returns if the overflow popup is open.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"Promise<boolean>"}}}}},x={package:"@ui5/webcomponents",since:"1.17.0"},v=()=>i`
<div> Toolbar with spacer:
    <ui5-toolbar>
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
                <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
                <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
            </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-spacer></ui5-toolbar-spacer>
        <ui5-toolbar-button icon="decline" text="Mid 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later"></ui5-toolbar-button>
    </ui5-toolbar>
</div>

</br>

<div> Toolbar with separator:
    <ui5-toolbar>
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-separator></ui5-toolbar-separator>
        <ui5-toolbar-button icon="decline" text="Mid 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later"></ui5-toolbar-button>
    </ui5-toolbar>
</div>

</br>

<div> Toolbar with 'AlwaysOverflow' items:
    <ui5-toolbar>
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Mid 2" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later" overflow-priority="AlwaysOverflow"></ui5-toolbar-button>
    </ui5-toolbar>
</div>

</br>

<div> Toolbar with 'NeverOverflow' items:
    <ui5-toolbar>
        <ui5-toolbar-button icon="add" text="Left 1 (long)" width="150px" design="Default"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Left 2" ></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Left 3"></ui5-toolbar-button>
        <ui5-toolbar-select>
            <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
            <ui5-toolbar-select-option selected>2</ui5-toolbar-select-option>
            <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
        </ui5-toolbar-select>
        <ui5-toolbar-button icon="add" text="Mid 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="decline" text="Mid 2" ></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1" overflow-priority="NeverOverflow"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4" ></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later" overflow-priority="NeverOverflow"></ui5-toolbar-button>
    </ui5-toolbar>
</div>

</br>

<div> Toolbar with 'Start' aligned items:
    <ui5-toolbar align-content="Start">
        <ui5-toolbar-button icon="decline" text="Mid 2"></ui5-toolbar-button>
        <ui5-toolbar-button icon="add" text="Right 1"></ui5-toolbar-button>
        <ui5-toolbar-button icon="employee" text="Right 4"></ui5-toolbar-button>
        <ui5-toolbar-button id="myOverflowBtn" icon="employee" text="Call me later"></ui5-toolbar-button>
    </ui5-toolbar>
</div>

`;var a=Object.freeze,y=Object.defineProperty,h=(t,m)=>a(y(t,"raw",{value:a(m||t.slice())})),l;const w="ui5-toolbar",U={title:"Main/Toolbar",component:"Toolbar",argTypes:f,parameters:{docs:{page:g({...x,component:w})}}},T=t=>i`<ui5-toolbar
        align-content="${p(t.alignContent)}"
    >
        ${d(t.default)}
</ui5-toolbar>`,o=T.bind({});o.storyName="Basic";o.args={default:`
    <ui5-toolbar-button
    icon="decline"
    text="Mid 2">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        icon="add"
        text="Right 1">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        icon="employee"
        text="Right 4">
    </ui5-toolbar-button>
    <ui5-toolbar-button
        id="myOverflowBtn"
        icon="employee"
        text="Call me later">
    </ui5-toolbar-button>`};const j=v.bind({}),e=t=>i(l||(l=h([`<ui5-toolbar
		align-content="`,`"
	>
		`,`
</ui5-toolbar>
<ui5-textarea disabled id="ToolbarStoryTextarea" placeholder="Change selection of the first Select Box"></ui5-textarea>
<script>
	ToolbarStorySelect.addEventListener("ui5-change", e => {
		ToolbarStoryTextarea.setAttribute("value", "Selected option is: " + e.detail.selectedOption.textContent);
	});
<\/script>
`])),p(t.alignContent),d(t.default));e.storyName="Multiple Toolbar Select components";e.args={default:`<ui5-toolbar-select id="ToolbarStorySelect">
                <ui5-toolbar-select-option>Apple</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Orange</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Pear</ui5-toolbar-select-option>
            </ui5-toolbar-select>
            <ui5-toolbar-select>
                <ui5-toolbar-select-option>1</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>2</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>3</ui5-toolbar-select-option>
            </ui5-toolbar-select>
            <ui5-toolbar-select>
                <ui5-toolbar-select-option>Bulgaria</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Bolivia</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Brunei</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Bangladesh</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Belarus</ui5-toolbar-select-option>
                <ui5-toolbar-select-option>Belgium</ui5-toolbar-select-option>
            </ui5-toolbar-select>
            <ui5-toolbar-select value-state="Success" width="auto">
                <ui5-toolbar-select-option icon="meal" selected="">Apple</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal">Avocado</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal">Mango</ui5-toolbar-select-option>
            </ui5-toolbar-select>
            <ui5-toolbar-select value-state="Warning" width="auto">
                <ui5-toolbar-select-option icon="meal">Orange</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal" selected="">Pumpkin</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal">Carrot</ui5-toolbar-select-option>
                <div slot="valueStateMessage">
                    Information message. This is a <a href="#">Link</a>. Extra long text
                    used as an information message. Extra long text used as an information
                    message - 2. Extra long text used as an information message - 3.
                </div>
                <div slot="valueStateMessage">
                    Information message 2. This is a <a href="#">Link</a>. Extra long text
                    used as an information message. Extra long text used as an information
                    message - 2. Extra long text used as an information message - 3.
                </div>
            </ui5-toolbar-select>
            <ui5-toolbar-select value-state="Error">
                <ui5-toolbar-select-option icon="meal">Strawberry</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal">Tomato</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal" selected="">Red Chili Pepper</ui5-toolbar-select-option>
                <div slot="valueStateMessage">
                    Information message. This is a <a href="#">Link</a>. Extra long text
                    used as an information message. Extra long text used as an information
                    message - 2. Extra long text used as an information message - 3.
                </div>
                <div slot="valueStateMessage">
                    Information message 2. This is a <a href="#">Link</a>. Extra long text
                    used as an information message. Extra long text used as an information
                    message - 2. Extra long text used as an information message - 3.
                </div>
            </ui5-toolbar-select>
            <ui5-toolbar-select value-state="Information">
                <ui5-toolbar-select-option icon="meal">Blueberry</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal">Grape</ui5-toolbar-select-option>
                <ui5-toolbar-select-option icon="meal" selected="">Plum</ui5-toolbar-select-option>
                <div slot="valueStateMessage">
                    Information message. This is a <a href="#">Link</a>. Extra long text
                    used as an information message. Extra long text used as an information
                    message - 2. Extra long text used as an information message - 3.
                </div>
                <div slot="valueStateMessage">
                    Information message 2. This is a <a href="#">Link</a>. Extra long text
                    used as an information message. Extra long text used as an information
                    message - 2. Extra long text used as an information message - 3.
                </div>
            </ui5-toolbar-select>
            `};var n,r,u;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>\`;
}`,...(u=(r=o.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var s,b,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\`<ui5-toolbar
        align-content="\${ifDefined(args.alignContent)}"
    >
        \${unsafeHTML(args.default)}
</ui5-toolbar>
<ui5-textarea disabled id="ToolbarStoryTextarea" placeholder="Change selection of the first Select Box"></ui5-textarea>
<script>
    ToolbarStorySelect.addEventListener("ui5-change", e => {
        ToolbarStoryTextarea.setAttribute("value", "Selected option is: " + e.detail.selectedOption.textContent);
    });
<\/script>
\`;
}`,...(c=(b=e.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const z=["Basic","Types","MultipleUI5SelectComponents"];export{o as Basic,e as MultipleUI5SelectComponents,j as Types,z as __namedExportsOrder,U as default};
