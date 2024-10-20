"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1545],{22635:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var i=s(31085),d=s(71184);const n={slug:"../UploadCollectionItem",ui5_tag_name:"ui5-upload-collection-item",ui5_since:"1.0.0-rc.7"},l=void 0,r={id:"components/fiori/UploadCollection/UploadCollectionItem",title:"UploadCollectionItem",description:"A component to be used within the ui5-upload-collection.",source:"@site/docs/components/fiori/UploadCollection/UploadCollectionItem.mdx",sourceDirName:"components/fiori/UploadCollection",slug:"/components/fiori/UploadCollectionItem",permalink:"/ui5-webcomponents/nightly/components/fiori/UploadCollectionItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../UploadCollectionItem",ui5_tag_name:"ui5-upload-collection-item",ui5_since:"1.0.0-rc.7"},sidebar:"componentsSidebar",previous:{title:"UploadCollection",permalink:"/ui5-webcomponents/nightly/components/fiori/UploadCollection/"},next:{title:"FilterItem",permalink:"/ui5-webcomponents/nightly/components/fiori/FilterItem"}},c={},h=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"file",id:"file",level:3},{value:"fileName",id:"filename",level:3},{value:"fileNameClickable",id:"filenameclickable",level:3},{value:"disableDeleteButton",id:"disabledeletebutton",level:3},{value:"hideDeleteButton",id:"hidedeletebutton",level:3},{value:"hideRetryButton",id:"hideretrybutton",level:3},{value:"hideTerminateButton",id:"hideterminatebutton",level:3},{value:"progress",id:"progress",level:3},{value:"uploadState",id:"uploadstate",level:3},{value:"type",id:"type",level:3},{value:"accessibilityAttributes",id:"accessibilityattributes",level:3},{value:"navigated",id:"navigated",level:3},{value:"tooltip",id:"tooltip",level:3},{value:"highlight",id:"highlight",level:3},{value:"selected",id:"selected",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"thumbnail",id:"thumbnail",level:3},{value:"deleteButton",id:"deletebutton",level:3},{value:"Events",id:"events",level:2},{value:"file-name-click",id:"file-name-click",level:3},{value:"rename",id:"rename",level:3},{value:"terminate",id:"terminate",level:3},{value:"retry",id:"retry",level:3},{value:"detail-click",id:"detail-click",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function o(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["A component to be used within the ",(0,i.jsx)(t.code,{children:"ui5-upload-collection"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js";'})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"file",children:"file"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Holds an instance of ",(0,i.jsx)(t.code,{children:"File"})," associated with this item."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"File | null"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"null"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"filename",children:"fileName"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"The name of the file."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"filenameclickable",children:"fileNameClickable"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["If set to ",(0,i.jsx)(t.code,{children:"true"})," the file name will be clickable and it will fire ",(0,i.jsx)(t.code,{children:"file-name-click"})," event upon click."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"disabledeletebutton",children:"disableDeleteButton"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Disables the delete button."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"hidedeletebutton",children:"hideDeleteButton"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Hides the delete button."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"hideretrybutton",children:"hideRetryButton"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Hides the retry button when ",(0,i.jsx)(t.code,{children:"uploadState"})," property is ",(0,i.jsx)(t.code,{children:"Error"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"hideterminatebutton",children:"hideTerminateButton"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Hides the terminate button when ",(0,i.jsx)(t.code,{children:"uploadState"})," property is ",(0,i.jsx)(t.code,{children:"Uploading"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"progress",children:"progress"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["The upload progress in percentage.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," Expected values are in the interval [0, 100]."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"number"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"uploadstate",children:"uploadState"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Upload state.",(0,i.jsx)("br",{}),"Depending on this property, the item displays the following:",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"Ready"})," - progress indicator is displayed.",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"Uploading"})," - progress indicator and terminate button are displayed. When the terminate button is pressed, ",(0,i.jsx)(t.code,{children:"terminate"})," event is fired.",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"Error"})," - progress indicator and retry button are displayed. When the retry button is pressed, ",(0,i.jsx)(t.code,{children:"retry"})," event is fired.",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.code,{children:"Complete"})," - progress indicator is not displayed."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"Complete" | "Error" | "Ready" | "Uploading"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"Ready"'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"type",children:"type"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the visual indication and behavior of the list items. Available options are ",(0,i.jsx)(t.code,{children:"Active"})," (by default), ",(0,i.jsx)(t.code,{children:"Inactive"}),", ",(0,i.jsx)(t.code,{children:"Detail"})," and ",(0,i.jsx)(t.code,{children:"Navigation"}),".",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," When set to ",(0,i.jsx)(t.code,{children:"Active"})," or ",(0,i.jsx)(t.code,{children:"Navigation"}),", the item will provide visual response upon press and hover, while with type ",(0,i.jsx)(t.code,{children:"Inactive"})," and ",(0,i.jsx)(t.code,{children:"Detail"})," - will not."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"Inactive" | "Active" | "Detail" | "Navigation"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"Active"'})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"accessibilityattributes",children:"accessibilityAttributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the additional accessibility attributes that will be applied to the component. The following fields are supported:",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.strong,{children:"ariaSetsize"}),": Defines the number of items in the current set  when not all items in the set are present in the DOM. ",(0,i.jsx)(t.strong,{children:"Note:"})," The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set ",(0,i.jsx)(t.code,{children:"-1"}),".",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(t.strong,{children:"ariaPosinset"}),": Defines an element's number or position in the current set when not all items are present in the DOM. \t",(0,i.jsx)(t.strong,{children:"Note:"})," The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ListItemAccessibilityAttributes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.15.0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"navigated",children:"navigated"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["The navigated state of the list item. If set to ",(0,i.jsx)(t.code,{children:"true"}),", a navigation indicator is displayed at the end of the list item."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.10.0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"tooltip",children:"tooltip"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the text of the tooltip that would be displayed for the list item."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string | undefined"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"undefined"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.23.0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"highlight",children:"highlight"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the highlight state of the list items. Available options are: ",(0,i.jsx)(t.code,{children:'"None"'})," (by default), ",(0,i.jsx)(t.code,{children:'"Positive"'}),", ",(0,i.jsx)(t.code,{children:'"Critical"'}),", ",(0,i.jsx)(t.code,{children:'"Information"'})," and ",(0,i.jsx)(t.code,{children:'"Negative"'}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"None" | "Positive" | "Critical" | "Negative" | "Information"'})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:'"None"'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.24"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"selected",children:"selected"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the selected state of the component."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Hold the description of the ",(0,i.jsx)(t.code,{children:"ui5-upload-collection-item"}),". Will be shown below the file name."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Array<Node>"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"thumbnail",children:"thumbnail"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["A thumbnail, which will be shown in the beginning of the ",(0,i.jsx)(t.code,{children:"ui5-upload-collection-item"}),".",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," Use ",(0,i.jsx)(t.code,{children:"ui5-icon"})," or ",(0,i.jsx)(t.code,{children:"img"})," for the intended design."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"deletebutton",children:"deleteButton"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:['Defines the delete button, displayed in "Delete" mode. ',(0,i.jsx)(t.strong,{children:"Note:"})," While the slot allows custom buttons, to match design guidelines, please use the ",(0,i.jsx)(t.code,{children:"ui5-button"})," component. ",(0,i.jsx)(t.strong,{children:"Note:"})," When the slot is not present, a built-in delete button will be displayed."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Array<IButton>"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Since"}),(0,i.jsx)(t.td,{children:"1.9.0"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.h3,{id:"file-name-click",children:"file-name-click"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Fired when the file name is clicked.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," This event is only available when ",(0,i.jsx)(t.code,{children:"fileNameClickable"})," property is ",(0,i.jsx)(t.code,{children:"true"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bubbles"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cancelable"}),(0,i.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"rename",children:"rename"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Fired when the ",(0,i.jsx)(t.code,{children:"fileName"})," property gets changed.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," An edit button is displayed on each item, when the ",(0,i.jsx)(t.code,{children:"ui5-upload-collection-item"})," ",(0,i.jsx)(t.code,{children:"type"})," property is set to ",(0,i.jsx)(t.code,{children:"Detail"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bubbles"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cancelable"}),(0,i.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"terminate",children:"terminate"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Fired when the terminate button is pressed.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," Terminate button is displayed when ",(0,i.jsx)(t.code,{children:"uploadState"})," property is set to ",(0,i.jsx)(t.code,{children:"Uploading"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bubbles"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cancelable"}),(0,i.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"retry",children:"retry"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Fired when the retry button is pressed.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," Retry button is displayed when ",(0,i.jsx)(t.code,{children:"uploadState"})," property is set to ",(0,i.jsx)(t.code,{children:"Error"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bubbles"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cancelable"}),(0,i.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"detail-click",children:"detail-click"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Fired when the user clicks on the detail button when type is ",(0,i.jsx)(t.code,{children:"Detail"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bubbles"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cancelable"}),(0,i.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsx)(t.p,{children:"No CSS parts available for this component."})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},71184:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var i=s(14041);const d={},n=i.createContext(d);function l(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);