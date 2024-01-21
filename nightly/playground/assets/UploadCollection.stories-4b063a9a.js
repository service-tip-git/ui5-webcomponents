import{x as l}from"./lit-element-c5a2b594.js";import{l as r}from"./if-defined-c29cffe1.js";import{o as v}from"./unsafe-html-0ddd83da.js";import{D as P}from"./docs-d97efe99.js";import{U as t,L as c}from"./ListItemType-d2f39c64.js";import{L as k}from"./ListMode-b6a2b1ad.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-a7ea689a.js";import"./index-53d09975.js";import"./iframe-35a4826c.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-d1983070.js";import"./client-fb0f3103.js";const J={mode:{control:"select",options:["None","SingleSelect","SingleSelectBegin","SingleSelectEnd","SingleSelectAuto","MultiSelect","Delete"]},default:{control:{type:"text"},table:{type:{summary:"Array<IUploadCollectionItem>"}}},header:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},"item-delete":{description:"Fired when the delete button of any item is pressed.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"HTMLElement"},name:"item",_ui5privacy:"public",description:"The <code>ui5-upload-collection-item</code> which was deleted."}]}},"selection-change":{description:`Fired when selection is changed by user interaction
in <code>SingleSelect</code> and <code>MultiSelect</code> modes.`,control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"Array"},name:"selectedItems",_ui5privacy:"public",description:"An array of the selected items."}]}}},V={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.7"};var D=Object.freeze,G=Object.defineProperty,s=(e,m)=>D(G(e,"raw",{value:D(m||e.slice())})),$,b,y,S,C;const Q="ui5-upload-collection",ve={title:"Fiori/Upload Collection",component:"UploadCollection",parameters:{docs:{page:P({...V,component:Q})}},argTypes:J},i=(e,m,F,j,f,g,h,z,R,K,q)=>`<ui5-upload-collection-item file-name="${e}" upload-state="${F}" ${g?`type="${g}"`:""} ${h?`progress="${h}"`:""} ${m?"file-name-clickable":""} ${z?"disable-delete-button=":""} ${R?"hide-delete-button":""} ${K?"hide-retry-button":""} ${q?"hide-terminate-button":""}>
    ${j}
    ${f||""}
</ui5-upload-collection-item>`,u=e=>l`
<ui5-upload-collection
    id="${r(e.id)}"
    mode="${r(e.mode)}"
    no-data-description="${r(e.noDataDescription)}"
    no-data-text="${r(e.noDataText)}"
    ?hide-drag-overlay="${r(e.hideDragOverlay)}"
    accessible-name="${r(e.accessibleName)}"
>
    ${v(e.header)}
    ${v(e.default)}
</ui5-upload-collection>`,p=e=>l($||($=s(["",`

<script>
	var uploadCollection = document.querySelector("ui5-upload-collection");
	uploadCollection.addEventListener("ui5-item-delete", e => {
		uploadCollection.removeChild(e.detail.item);
	});
<\/script>`])),e()),A=e=>l`<style>
    .header {
        display: flex;
        align-items: center;
        overflow: hidden;
        flex-wrap: wrap;
    }

    .spacer {
        flex: 1 1 auto;
    }

    .header > * {
        margin: 0.25rem;
    }
</style>

${e()}`,B=e=>l(b||(b=s(["",`

<script>
	var uploadCollection = document.querySelector("ui5-upload-collection");
	var fileUploader = document.getElementById("fileUploader");
	var startUploading = document.getElementById("startUploading");

	fileUploader.addEventListener("change", e => {
		var files = e.detail.files;
		for (var i = 0; i < files.length; i++) {
			uploadCollection.appendChild(createUCI(files[i]));
		}
	});

	function createUCI(file) {
		var uci = document.createElement("ui5-upload-collection-item");
		var description = document.createTextNode("Last modified: " + file.lastModifiedDate + ", size: " + file.size);

		uci.appendChild(createThumbnail(file.name));
		uci.appendChild(description);
		uci.file = file;
		uci.fileName = file.name;
		return uci;
	}

	function createThumbnail(fileName) {
		var icon = document.createElement("ui5-icon");
		icon.name = "document";
		icon.slot = "thumbnail";
		return icon;
	}

	startUploading.addEventListener("click", e => {
		uploadCollection.items
			.filter(item => item.uploadState === "Ready" && item.file)
			.forEach(item => {
				item.uploadState = "Uploading";

				fetch("/upload", {
					method: "POST",
					body: item.file
				}).then(res => {
					item.uploadState = res.status === 200 ? "Complete" : "Error";
				});
			});
	});
<\/script>`])),e()),a=u.bind({});a.args={mode:k.Delete,id:"uploadCollection",accessibleName:"Uploaded (2)",header:`<div slot="header" class="header">
    <ui5-title>Uploaded (2)</ui5-title>
    <ui5-label show-colon>Add new files and press to start uploading pending files</ui5-label>
    <ui5-button id="startUploading">Start</ui5-button>
    <div class="spacer"></div>
    <ui5-file-uploader id="fileUploader" hide-input multiple>
        <ui5-button icon="add" design="Transparent"></ui5-button>
    </ui5-file-uploader>
</div>`,default:`${i("LaptopHT-1000.jpg",!0,t.Complete,"Uploaded By: David Keane · Uploaded On: 2014-07-26 · File Size: 35 KB",'<img src="../assets/images/HT-1000.jpg" slot="thumbnail">')}
${i("Notes.txt",!1,t.Complete,"Uploaded By: John Smith · Uploaded On: 2014-09-02 · File Size: 226.6 KB",'<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>')}`};a.parameters={docs:{story:{iframeHeight:"500px"}}};a.decorators=[A,B,p];const W=e=>l(y||(y=s(["",`

<script>
	var uploadCollection = document.querySelector("ui5-upload-collection");
	uploadCollection.addEventListener("rename", e => {
		alert("Rename event: " + e.target.fileName);
	});
<\/script>`])),e()),d=u.bind({});d.args={header:`<div slot="header" class="header">
    <ui5-title>Attachments (2)</ui5-title>
</div>`,default:`${i("LaptopHT-1000.jpg",!0,t.Complete,"Uploaded By: David Keane · Uploaded On: 2014-07-26 · File Size: 35 KB",'<img src="../assets/images/HT-1000.jpg" slot="thumbnail">',c.Detail)}
${i("Notes.txt",!1,t.Complete,"Uploaded By: John Smith · Uploaded On: 2014-09-02 · File Size: 226.6 KB",'<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>',c.Detail)}`};d.decorators=[W,p];const X=e=>l(S||(S=s(["",`

<script>
	var uploadCollection = document.querySelector("ui5-upload-collection");
	uploadCollection.addEventListener("retry", e => {
		alert("Retry uploading: " + e.target.fileName);
	});
	uploadCollection.addEventListener("terminate", e => {
		alert("Terminate uploading of: " + e.target.fileName);
	});
<\/script>`])),e()),n=u.bind({});n.args={header:`<div class="header" slot="header">
    <ui5-title>Upload States</ui5-title>
</div>`,default:`
${i("LaptopHT-1000.jpg",!1,t.Complete,'uploadState="Complete"','<img src="../assets/images/HT-1000.jpg" slot="thumbnail">')}
${i("Laptop.jpg",!1,t.Uploading,'uploadState="Uploading"','<img src="../assets/images/HT-1000.jpg" slot="thumbnail">',c.Active,"37")}
${i("latest-reports.pdf",!1,t.Error,'uploadState="Error"','<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>',c.Active,"59")}
${i("Notes.txt",!1,t.Ready,'uploadState="Ready" (default)','<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>')}`};n.parameters={docs:{story:{iframeHeight:"400px"}}};n.decorators=[X,p];const Y=e=>l(C||(C=s(["",`

<script>
	var uploadCollection = document.querySelector("ui5-upload-collection");
	uploadCollection.addEventListener("drop", e => {
		e.preventDefault();

		var files = e.dataTransfer.files;
		// Take the files from the drop event and create <ui5-upload-collection-item> from them
		for (var i = 0; i < files.length; i++) {
			uploadCollection.appendChild(createUCI(files[i]));
		}
	});

	function createUCI(file) {
		var uci = document.createElement("ui5-upload-collection-item");
		var description = document.createTextNode("Last modified: " + file.lastModifiedDate + ", size: " + file.size);

		uci.appendChild(createThumbnail(file.name));
		uci.appendChild(description);
		uci.file = file;
		uci.fileName = file.name;
		return uci;
	}

	function createThumbnail(fileName) {
		var icon = document.createElement("ui5-icon");
		icon.name = "document";
		icon.slot = "thumbnail";
		return icon;
	}
<\/script>`])),e()),o=u.bind({});o.args={header:`<div slot="header" class="header">
    <ui5-title>Attachments</ui5-title>
    <ui5-label show-colon>Add new files and press to start uploading pending files</ui5-label>
    <ui5-button id="startUploading">Start</ui5-button>
    <div class="spacer"></div>
    <ui5-file-uploader id="fileUploader" hide-input multiple>
        <ui5-button icon="add" design="Transparent"></ui5-button>
    </ui5-file-uploader>
</div>`};o.parameters={docs:{story:{iframeHeight:"500px"}}};o.decorators=[A,B,Y,p];var T,U,x;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    mode="\${ifDefined(args.mode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(x=(U=a.parameters)==null?void 0:U.docs)==null?void 0:x.source}}};var L,E,H;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    mode="\${ifDefined(args.mode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(H=(E=d.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var N,_,I;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    mode="\${ifDefined(args.mode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(I=(_=n.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var M,O,w;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return html\`
<ui5-upload-collection
    id="\${ifDefined(args.id)}"
    mode="\${ifDefined(args.mode)}"
    no-data-description="\${ifDefined(args.noDataDescription)}"
    no-data-text="\${ifDefined(args.noDataText)}"
    ?hide-drag-overlay="\${ifDefined(args.hideDragOverlay)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-upload-collection>\`;
}`,...(w=(O=o.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const De=["Basic","RenamingFiles","VariousUploadStates","DragAndDrop"];export{a as Basic,o as DragAndDrop,d as RenamingFiles,n as VariousUploadStates,De as __namedExportsOrder,ve as default};
