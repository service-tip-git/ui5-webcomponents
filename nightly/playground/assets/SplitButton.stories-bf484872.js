import{x as a}from"./lit-element-c5a2b594.js";import{l as i}from"./if-defined-c29cffe1.js";import{o as $}from"./unsafe-html-0ddd83da.js";import{D as A}from"./docs-e23e4e8f.js";import{B as n}from"./ButtonDesign-57d82709.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-524bafb2.js";import"./index-a68b1905.js";import"./iframe-a4e8f984.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-470159da.js";import"./client-fb0f3103.js";const h={design:{control:"select",options:["Default","Positive","Negative","Transparent","Emphasized","Attention"]},default:{control:{type:"text"},table:{type:{summary:"Array<Node>"}}}},S={package:"@ui5/webcomponents",since:"1.1.0"};var r=Object.freeze,E=Object.defineProperty,N=(t,D)=>r(E(t,"raw",{value:r(D||t.slice())})),u;const _="ui5-split-button",J={title:"Main/SplitButton",component:"SplitButton",parameters:{docs:{page:A({...S,component:_})}},argTypes:h},B=t=>a`<ui5-split-button
    ?disabled="${i(t.disabled)}"
    design="${i(t.design)}"
    icon="${i(t.icon)}"
    active-icon="${i(t.activeIcon)}"
    accessible-name="${i(t.accessibleName)}"
>
    ${$(t.default)}
</ui5-split-button>`,s=B.bind({});s.args={default:"Default",accessibleName:"Split Button with Accessible Name"};const e=B.bind(void 0);e.args={default:"Open Menu"};e.decorators=[t=>a(u||(u=N([`
		<ui5-menu id="menuInSplitBtnDefaultAction">
			<ui5-menu-item text="Edit" icon="add"></ui5-menu-item>
			<ui5-menu-item text="Save" icon="save"></ui5-menu-item>
			<ui5-menu-item text="Delete" icon="delete"></ui5-menu-item>
		</ui5-menu>
	`,`
	<script>
	var splitBtn = document.querySelector("ui5-split-button");
	var menu = document.getElementById("menuInSplitBtnDefaultAction");
	
	splitBtn.addEventListener("ui5-arrow-click", function() {
		if (menu.open) {
			menu.close();
			splitBtn.activeArrowButton = false;
		} else {
			menu.showAt(splitBtn);
			splitBtn.activeArrowButton = true;
		}
	});
	
	menu.addEventListener("after-close", function() {
		splitBtn.activeArrowButton = false;
	});
	<\/script>`])),t())];e.parameters={docs:{story:{inline:!1,iframeHeight:"150px"}}};const o=()=>a`
    <ui5-split-button design="${n.Emphasized}"> Emphasized </ui5-split-button>
    <ui5-split-button design="${n.Attention}"> Attention </ui5-split-button>
    <ui5-split-button design="${n.Positive}"> Positive </ui5-split-button>
    <ui5-split-button design="${n.Negative}"> Negative </ui5-split-button>
    <ui5-split-button design="${n.Transparent}"> Transparent </ui5-split-button>
`;var p,c,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:'args => html`<ui5-split-button\n    ?disabled="${ifDefined(args.disabled)}"\n    design="${ifDefined(args.design)}"\n    icon="${ifDefined(args.icon)}"\n    active-icon="${ifDefined(args.activeIcon)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-split-button>`',...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,b;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"Template.bind(this)",...(b=(d=e.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var f,g,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:'() => html`\n    <ui5-split-button design="${ButtonDesign.Emphasized}"> Emphasized </ui5-split-button>\n    <ui5-split-button design="${ButtonDesign.Attention}"> Attention </ui5-split-button>\n    <ui5-split-button design="${ButtonDesign.Positive}"> Positive </ui5-split-button>\n    <ui5-split-button design="${ButtonDesign.Negative}"> Negative </ui5-split-button>\n    <ui5-split-button design="${ButtonDesign.Transparent}"> Transparent </ui5-split-button>\n`',...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const K=["Basic","OpeningMenu","DifferentDesigns"];export{s as Basic,o as DifferentDesigns,e as OpeningMenu,K as __namedExportsOrder,J as default};
