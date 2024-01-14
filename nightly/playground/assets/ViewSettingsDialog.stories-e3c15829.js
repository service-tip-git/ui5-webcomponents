import{x as a}from"./lit-element-c5a2b594.js";import{o as i}from"./unsafe-html-0ddd83da.js";import{l as o}from"./if-defined-c29cffe1.js";import{D as u}from"./docs-84040a3f.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-4f103317.js";import"./index-1ddc0cbe.js";import"./iframe-b6eaac03.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-40facfd7.js";import"./client-fb0f3103.js";const d={sortItems:{control:{type:"text"},table:{type:{}}},filterItems:{control:{type:"text"},table:{type:{}}},show:{description:"Shows the dialog.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}},setConfirmedSettings:{description:`Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>.
This method can be used after the dialog is initially open, as the dialog needs
to set its initial settings.<br>
The <code>ui5-view-settings-dialog</code> throws an event called "before-open",
which can be used as a trigger point.<br>
The object should have the following format:<br>
<pre>
{
sortOrder: "Ascending",
sortBy: "Name",
filters: [
	{"Filter 1": ["Some filter 1", "Some filter 2"]},
	{"Filter 2": ["Some filter 4"]},
]
}
</pre>`,table:{category:"methods"},UI5CustomData:{parameters:[{name:"settings",type:{text:"VSDSettings",references:[{name:"VSDSettings",package:"@ui5/webcomponents-fiori",module:"dist/ViewSettingsDialog.js"}]},description:"predefined settings."}],returnValue:{type:{text:"void"}}}}},f={package:"@ui5/webcomponents-fiori"};var s=Object.freeze,c=Object.defineProperty,g=(t,p)=>s(c(t,"raw",{value:s(p||t.slice())})),r;const v="ui5-view-settings-dialog",R={title:"Fiori/View Settings Dialog",component:"ViewSettingsDialog",subcomponents:{SortItem:"SortItem",FilterItem:"FilterItem",FilterItemOption:"FilterItemOption"},parameters:{docs:{page:u({...f,component:v})}},argTypes:d},x=t=>a`<ui5-view-settings-dialog
    id="${o(t.id)}"
    sort-descending="${o(t.sortDescending)}"
>
    ${i(t.sortItems)}
    ${i(t.filterItems)}
</ui5-view-settings-dialog>`,e=x.bind({});e.storyName="Example Usage";e.args={id:"vsd1",sortDescending:!0,sortItems:`<ui5-sort-item slot="sortItems" text="Name" selected=""></ui5-sort-item>
<ui5-sort-item slot="sortItems" text="Position"></ui5-sort-item>
<ui5-sort-item slot="sortItems" text="Company"></ui5-sort-item>
<ui5-sort-item slot="sortItems" text="Department"></ui5-sort-item>`,filterItems:`<ui5-filter-item slot="filterItems" text="Position">
    <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
</ui5-filter-item>
<ui5-filter-item slot="filterItems" text="Department">
    <ui5-filter-item-option slot="values" text="Sales"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="Management"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="PR"></ui5-filter-item-option>
</ui5-filter-item>
<ui5-filter-item slot="filterItems" text="Location">
    <ui5-filter-item-option slot="values" text="Walldorf"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="New York"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="London"></ui5-filter-item-option>
</ui5-filter-item>
<ui5-filter-item slot="filterItems" text="Reports to">
    <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
</ui5-filter-item>`};e.decorators=[t=>a(r||(r=g([`<ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>
	`,`
	<br/>
	<br/>
	<div id="vsdResults"></div>
	<script>
		var vsdResults = document.getElementById("vsdResults");
		btnOpenDialog1.addEventListener("click", function () {
			vsdResults.innerHTML = "";
			vsd1.show();
		});
		vsd1.addEventListener("confirm", function(evt) {
			vsdResults.innerHTML = JSON.stringify(evt.detail);
		});
	<\/script>
	`])),t())];e.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var n,l,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:'args => html`<ui5-view-settings-dialog\n    id="${ifDefined(args.id)}"\n    sort-descending="${ifDefined(args.sortDescending)}"\n>\n    ${unsafeHTML(args.sortItems)}\n    ${unsafeHTML(args.filterItems)}\n</ui5-view-settings-dialog>`',...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const j=["Basic"];export{e as Basic,j as __namedExportsOrder,R as default};
