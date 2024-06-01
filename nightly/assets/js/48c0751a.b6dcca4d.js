"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[7452],{1617:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>x});var t=n(1085),o=n(1184);const r='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="height: 700px; background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-dynamic-page id="page" show-footer>\n\n        <ui5-dynamic-page-title slot="titleArea">\n            <ui5-breadcrumbs slot="breadcrumbs">\n                <ui5-breadcrumbs-item href="#">Man</ui5-breadcrumbs-item>\n                <ui5-breadcrumbs-item href="#">Shoes</ui5-breadcrumbs-item>\n                <ui5-breadcrumbs-item href="#">Running Shoes</ui5-breadcrumbs-item>\n            </ui5-breadcrumbs>\n\n            <ui5-title slot="heading">Special Running Shoe</ui5-title>\n            \n            <div slot="snappedHeading" class="snapped-title-heading">\n                <ui5-avatar shape="square" icon="laptop" color-scheme="Accent5" size="S"></ui5-avatar>\n                <ui5-title wrapping-type="None">Special Running Shoe</ui5-title>\n            </div>\n\n            <p slot="content" class="text">PO-48865</p>\n            <p slot="snappedContent" class="text">PO-48865</p>\n\n            <ui5-tag color-scheme="7">Special 157.4M EUR</ui5-tag>\n\n            <ui5-toolbar id="actionsToolbar" slot="actionsBar">\n                <ui5-toolbar-button text="Create"></ui5-toolbar-button>\n                <ui5-toolbar-button id="edit-button" design="Transparent" text="Edit"></ui5-toolbar-button>\n                <ui5-toolbar-button design="Transparent" text="Paste"></ui5-toolbar-button>\n            </ui5-toolbar>\n\n            <ui5-toolbar slot="navigationBar">\n                <ui5-toolbar-button design="Transparent" icon="share"></ui5-toolbar-button>\n                <ui5-toolbar-button design="Transparent" icon="action-settings"></ui5-toolbar-button>\n            </ui5-toolbar>\n        </ui5-dynamic-page-title>\n\n        <ui5-dynamic-page-header slot="headerArea">\n            <div class="product-info">\n                <ui5-avatar id="avatar" shape="square" icon="laptop" color-scheme="Accent5" size="L"></ui5-avatar>\n                <div class="product-info-cell">\n                    <ui5-label>Availability</ui5-label>\n                    <p class="text availability">In Stock</p>\n                </div>\n                <div class="product-info-cell">\n                    <ui5-label>Price</ui5-label>\n                    <p class="text price">379.99 USD</p>\n                </div>\n                <div class="product-info-cell">\n                    <ui5-label>Product Description</ui5-label>\n                    <p class="text product-description">Super-lightweight cushioning propels you forward from landing to toe-off and has a fast, snappy feel.</p>\n                </div>\n            </div>\n        </ui5-dynamic-page-header>\n\n        <ui5-list header-text="Products (13)" mode="SingleSelect">\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>\n            <ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>\n            <ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>\n            <ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>\n            <ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>\n            <ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>\n            <ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>\n            <ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>\n            <ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>\n            <ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>\n            <ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>\n            <ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>\n            <ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>\n            <ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>\n            <ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>\n            <ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>\n            <ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>\n            <ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>\n            <ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>\n            <ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>\n            <ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>\n            <ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>\n            <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>\n            <ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>\n            <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>\n            <ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>\n            <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>\n            <ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>\n            <ui5-li description="HT-1001" icon="slim-arrow-right" icon-end additional-text="87.90 EUR">Gladiator MX</ui5-li>\n        </ui5-list>\n\n        <ui5-bar slot="footerArea" design="FloatingFooter">\n            <ui5-button id="save-edit" slot="endContent">Save</ui5-button>\n            <ui5-button id="cancel-edit" slot="endContent">Close</ui5-button>\n        </ui5-bar>\n    </ui5-dynamic-page>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e',a='import "@ui5/webcomponents-fiori/dist/DynamicPage.js";\nimport "@ui5/webcomponents-fiori/dist/DynamicPageTitle.js";\nimport "@ui5/webcomponents-fiori/dist/DynamicPageHeader.js";\n\nimport "@ui5/webcomponents/dist/Bar.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Tag.js";\nimport "@ui5/webcomponents/dist/Breadcrumbs.js";\nimport "@ui5/webcomponents/dist/BreadcrumbsItem.js";\nimport "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/Toolbar.js";\nimport "@ui5/webcomponents/dist/ToolbarButton.js";\nimport "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/StandardListItem.js";\n\nimport "@ui5/webcomponents-icons/dist/action-settings.js";\nimport "@ui5/webcomponents-icons/dist/share.js";\nimport "@ui5/webcomponents-icons/dist/laptop.js";\n\n\nconst dynamicPage = document.querySelector("ui5-dynamic-page");\nconst editButton = document.querySelector("#edit-button");\n\nconst cancelEdit = document.querySelector("#cancel-edit");\nconst saveEdit = document.querySelector("#save-edit");\n\neditButton.addEventListener("click", () => {\n    dynamicPage.setAttribute("show-footer", true);\n});\n\n[saveEdit, cancelEdit].forEach(button => {\n    button.addEventListener("click", () => {\n        dynamicPage.removeAttribute("show-footer");\n    });\n});',d=".text {\n    display: inline-block;\n    font-size: var(--sapFontSize);\n    font-family: var(--sapFontFamily);\n    color: var(--sapTextColor);\n    line-height: normal;\n    white-space: pre-line;\n    word-wrap: break-word;\n    cursor: text;\n    margin: 0;\n}\n\n.product-info {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.product-info [ui5-avatar],\n.product-info .product-info-cell {\n    margin-right: 2rem;\n    margin-bottom: 1rem; \n}\n\n.product-info-cell {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n}\n\n.product-description {\n    display: inline;\n    max-width: 300px;\n}\n\n.availability {\n   font-size: 1.2rem;\n   color: var(--sapPositiveTextColor);\n}\n\n.price {\n    font-size: 1.2rem;\n    color: var(--sapTextColor);\n}\n\n.snapped-title-heading {\n    display: flex;\n    align-items: center;\n}\n.snapped-title-heading [ui5-avatar] {\n    margin-right: 1rem;\n}\n.snapped-title-heading [ui5-title] {\n    font-family: var(--sapObjectHeader_Title_FontFamily);\n    color: var(--sapObjectHeader_Title_TextColor);\n    padding: 0.3125rem 0 0 0;\n    font-size: var(--sapObjectHeader_Title_SnappedFontSize);\n    text-overflow: ellipsis;\n    min-width: 0;\n}";function l(i){const{Editor:e}={...(0,o.R)(),...i.components};return e||function(i,e){throw new Error("Expected "+(e?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(e,{html:r,js:a,css:d})}function s(i={}){const{wrapper:e}={...(0,o.R)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(l,{...i})}):l(i)}const c={slug:"../DynamicPage",sidebar_class_name:"newComponentBadge"},h=void 0,u={id:"components/fiori/DynamicPage/DynamicPage",title:"DynamicPage",description:"A layout component, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.",source:"@site/docs/components/fiori/DynamicPage/DynamicPage.mdx",sourceDirName:"components/fiori/DynamicPage",slug:"/components/fiori/DynamicPage",permalink:"/ui5-webcomponents/nightly/components/fiori/DynamicPage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../DynamicPage",sidebar_class_name:"newComponentBadge"},sidebar:"componentsSidebar",previous:{title:"BarcodeScannerDialog",permalink:"/ui5-webcomponents/nightly/components/fiori/BarcodeScannerDialog"},next:{title:"DynamicPageHeader",permalink:"/ui5-webcomponents/nightly/components/fiori/DynamicPageHeader"}},p={},x=[{value:"Usage",id:"usage",level:3},{value:"Notes:",id:"notes",level:2},{value:"Responsive Behavior",id:"responsive-behavior",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Basic Navigation",id:"basic-navigation",level:3},{value:"Fast Navigation",id:"fast-navigation",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"hidePinButton",id:"hidepinbutton",level:3},{value:"headerPinned",id:"headerpinned",level:3},{value:"showFooter",id:"showfooter",level:3},{value:"headerSnapped",id:"headersnapped",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"titleArea",id:"titlearea",level:3},{value:"headerArea",id:"headerarea",level:3},{value:"footerArea",id:"footerarea",level:3},{value:"Events",id:"events",level:2},{value:"pin-button-toggle",id:"pin-button-toggle",level:3},{value:"title-toggle",id:"title-toggle",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function m(i){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"A layout component, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer."}),"\n",(0,t.jsx)(e.p,{children:"The component consist of several components:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"DynamicPageTitle"})," - a component, holding the title of the page, the navigation actions and the content. The displayed content changes based on the current mode of the ",(0,t.jsx)(e.code,{children:"DynamicPageHeader"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"DynamicPageHeader"})," - a generic container, which can contain a single layout component and any other HTML elements. The header works in two modes - expanded and snapped and its behavior can be adjusted with the help of different properties."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Content area"})," - a generic container, which can have a single UI5 layout."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Footer"})," - positioned at the bottom with a small offset and used for additional actions, the footer floats above the content."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:["Use the ",(0,t.jsx)(e.code,{children:"DynamicPage"})," if you need to have a title, that is always visible\nand a header, that has configurable Expanding/Snapping functionality.\nIf you don't need the Expanding/Snapping functionality it is better to use the\n",(0,t.jsx)(e.code,{children:"ui5-page"})," as a lighter component."]}),"\n",(0,t.jsxs)(e.p,{children:["The app can add to the ",(0,t.jsx)(e.code,{children:"default"})," slot of the ui5-dynamic-page either content that is designed to fit its container (e.g. has 100% height),\nor content with own height that may overflow its container. In the second case the ",(0,t.jsx)(e.code,{children:"DynamicPage"})," will show a scrollbar that allows the user\nscroll through the content."]}),"\n",(0,t.jsx)(e.h2,{id:"notes",children:"Notes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Snapping of the ",(0,t.jsx)(e.code,{children:"DynamicPageTitle"})," is not supported in the following case:"]}),"\n",(0,t.jsxs)(e.li,{children:["When the ",(0,t.jsx)(e.code,{children:"DynamicPage"})," has a scroll bar, the component usually scrolls to the snapping point - the point, where the ",(0,t.jsx)(e.code,{children:"DynamicPageHeader"})," is scrolled out completely. However, when there is a scroll bar, but not enough content to reach the snapping point, the snapping is not possible using scrolling."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,t.jsx)(e.p,{children:"Dynamic page web component implements the responsive paddings design."}),"\n",(0,t.jsx)(e.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,t.jsx)(e.h3,{id:"basic-navigation",children:"Basic Navigation"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"[SPACE, ENTER, RETURN] - If focus is on a button inside DynamicPageTitle its action is being triggered, once activated.\nIf focus is on the snap header button (arrow button), or on the header itself, once activated, it triggers the associated action (such as snap/expand the header).\nIf focus is on pin button (the button with pin icon on the bottom of the header), once activated, it triggers the associated action (pinning of the header)."}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"fast-navigation",children:"Fast Navigation"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["This component provides a build in fast navigation group which can be used via ",(0,t.jsx)(e.code,{children:"F6 / Shift + F6"})," or ",(0,t.jsx)(e.code,{children:" Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up"}),".\nIn order to use this functionality, you need to import the following module:"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:'import "@ui5/webcomponents-base/dist/features/F6Navigation.js"'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:'import "@ui5/webcomponents-fiori/dist/DynamicPage.js";'})}),"\n",(0,t.jsx)(e.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(e.h3,{id:"hidepinbutton",children:"hidePinButton"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Description"}),(0,t.jsx)(e.td,{children:"Defines if the pin button is hidden."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Type"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"boolean"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Default"}),(0,t.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"headerpinned",children:"headerPinned"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Description"}),(0,t.jsx)(e.td,{children:"Defines if the header is pinned."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Type"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"boolean"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Default"}),(0,t.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"showfooter",children:"showFooter"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Description"}),(0,t.jsx)(e.td,{children:"Defines if the footer is shown."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Type"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"boolean"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Default"}),(0,t.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"headersnapped",children:"headerSnapped"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Description"}),(0,t.jsx)(e.td,{children:"Defines if the header is snapped."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Type"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"boolean"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Default"}),(0,t.jsx)(e.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsx)(e.h3,{id:"default",children:"default"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Description"}),(0,t.jsx)(e.td,{children:"Defines the content of the Dynamic Page."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Type"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"titlearea",children:"titleArea"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Description"}),(0,t.jsx)(e.td,{children:"Defines the title HTML Element."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Type"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"Array<DynamicPageTitle>"})})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"headerarea",children:"headerArea"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Description"}),(0,t.jsx)(e.td,{children:"Defines the header HTML Element."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Type"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"Array<DynamicPageHeader>"})})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"footerarea",children:"footerArea"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Description"}),(0,t.jsx)(e.td,{children:"Defines the footer HTML Element."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Type"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(e.h3,{id:"pin-button-toggle",children:"pin-button-toggle"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Description"}),(0,t.jsx)(e.td,{children:"Fired when the pin header button is toggled."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Type"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"title-toggle",children:"title-toggle"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Description"}),(0,t.jsx)(e.td,{children:"Fired when the expand/collapse area of the title is toggled."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Type"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(e.p,{children:"No methods available for this component."}),"\n",(0,t.jsx)(e.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Name"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"content"}),(0,t.jsx)(e.td,{children:"Used to style the content of the component"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"fit-content"}),(0,t.jsx)(e.td,{children:"Used to style the fit content container of the component."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"footer"}),(0,t.jsx)(e.td,{children:"Used to style the footer of the component"})]})]})]})]})}function g(i={}){const{wrapper:e}={...(0,o.R)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(m,{...i})}):m(i)}},1184:(i,e,n)=>{n.d(e,{R:()=>a,x:()=>d});var t=n(4041);const o={},r=t.createContext(o);function a(i){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function d(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:a(i.components),t.createElement(r.Provider,{value:e},i.children)}}}]);