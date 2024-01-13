import{x as l}from"./lit-element-c5a2b594.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as n}from"./unsafe-html-0ddd83da.js";import{D as d}from"./docs-e6d25d3b.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f1e87d75.js";import"./index-132ff83d.js";import"./iframe-657c8299.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-2e471bae.js";import"./client-fb0f3103.js";const m={header:{control:{type:"text"},table:{type:{}}},footer:{control:{type:"text"},table:{type:{}}},default:{control:{type:"text"},table:{type:{}}},showAt:{description:"Shows the popover.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:{text:"HTMLElement"},description:"the element that the popover is shown at"},{name:"preventInitialFocus",default:"false",description:"prevents applying the focus inside the popover",optional:!0,type:{text:"boolean"}}],returnValue:{type:{text:"Promise<void>"},description:"Resolved when the popover is open"}}},applyFocus:{description:`Focuses the element denoted by <code>initialFocus</code>, if provided,
or the first focusable element otherwise.`,table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"Promise<void>"},description:"Promise that resolves when the focus is applied"}}},isOpen:{description:"Tells if the component is opened",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"boolean"}}}},close:{description:"Closes the popup.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}}},u={package:"@ui5/webcomponents"};var r=Object.freeze,f=Object.defineProperty,v=(e,c)=>r(f(e,"raw",{value:r(c||e.slice())})),i;const h="ui5-popover",C={title:"Main/Popover",component:"Popover",parameters:{docs:{page:d({...u,component:h}),story:{inline:!1,iframeHeight:"700px"}}},argTypes:m},b=e=>l`<ui5-popover
    initial-focus="${o(e.initialFocus)}"
    ?prevent-focus-restore="${o(e.preventFocusRestore)}"
    ?open="${o(e.open)}"
    accessible-name="${o(e.accessibleName)}"
    accessible-name-ref="${o(e.accessibleNameRef)}"
    accessible-role="${o(e.accessibleRole)}"
    header-text="${o(e.headerText)}"
    placement-type="${o(e.placementType)}"
    horizontal-align="${o(e.horizontalAlign)}"
    vertical-align="${o(e.verticalAlign)}"
    ?modal="${o(e.modal)}"
    ?hide-backdrop="${o(e.hideBackdrop)}"
    ?hire-arrow="${o(e.hideArrow)}"
    ?allow-target-overlap="${o(e.allowTargetOverlap)}"
    opener="${o(e.opener)}"
    >
    ${n(e.header)}
    ${n(e.default)}
    ${n(e.footer)}
</ui5-popover>`,t=b.bind({});t.args={headerText:"Newsletter subscription",default:`<div class="popover-content">
    <div class="flex-column">
        <ui5-label for="emailInput" required show-colon>Email</ui5-label>
        <ui5-input id="emailInput" style="min-width: 150px; margin-top: 1rem;" placeholder="Enter Email"></ui5-input>
    </div>
</div>`,footer:`<div slot="footer" class="popover-footer">
    <div style="flex: 1;"></div>
    <ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
</div>`};t.decorators=[e=>l(i||(i=v([`<style>
	.popover-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
	}

	.popover-footer {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		align-items: center;
		padding: 0.5rem 0;
	}
</style>

<ui5-button id="openPopoverButton" design="Emphasized">Open Popover</ui5-button>
`,`

<script>
	var popoverOpener = document.getElementById("openPopoverButton");
	var popover = document.querySelector("ui5-popover");
	var popoverCloser = document.getElementById("closePopoverButton");
	popoverOpener.addEventListener("click", () => {
		popover.showAt(popoverOpener);
	});
	popoverCloser.addEventListener("click", () => {
		popover.close();
	});
<\/script>`])),e())];var a,p,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return html\`<ui5-popover
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    placement-type="\${ifDefined(args.placementType)}"
    horizontal-align="\${ifDefined(args.horizontalAlign)}"
    vertical-align="\${ifDefined(args.verticalAlign)}"
    ?modal="\${ifDefined(args.modal)}"
    ?hide-backdrop="\${ifDefined(args.hideBackdrop)}"
    ?hire-arrow="\${ifDefined(args.hideArrow)}"
    ?allow-target-overlap="\${ifDefined(args.allowTargetOverlap)}"
    opener="\${ifDefined(args.opener)}"
    >
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-popover>\`;
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const R=["Basic"];export{t as Basic,R as __namedExportsOrder,C as default};
