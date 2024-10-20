"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[335],{11606:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>o,default:()=>p,frontMatter:()=>h,metadata:()=>a,toc:()=>j});var i=s(31085),t=s(71184);const d='\x3c!-- playground-hide --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-hide-end --\x3e\n    <ui5-rating-indicator value="4" max="7"></ui5-rating-indicator></br>\n    <ui5-rating-indicator value="4" max="7" readonly></ui5-rating-indicator></br>\n    <ui5-rating-indicator value="4" max="7" disabled></ui5-rating-indicator>\n    \x3c!-- playground-hide --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-hide-end --\x3e',r='import "@ui5/webcomponents/dist/RatingIndicator.js";';function l(e){const{Editor:n}={...(0,t.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:d,js:r})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}const h={slug:"../RatingIndicator",ui5_tag_name:"ui5-rating-indicator",ui5_since:"1.0.0-rc.8"},o=void 0,a={id:"components/main/RatingIndicator",title:"RatingIndicator",description:"The Rating Indicator is used to display a specific number of icons that are used to rate an item.",source:"@site/docs/components/main/RatingIndicator.mdx",sourceDirName:"components/main",slug:"/components/RatingIndicator",permalink:"/ui5-webcomponents/nightly/components/RatingIndicator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../RatingIndicator",ui5_tag_name:"ui5-rating-indicator",ui5_since:"1.0.0-rc.8"},sidebar:"componentsSidebar",previous:{title:"RangeSlider",permalink:"/ui5-webcomponents/nightly/components/RangeSlider"},next:{title:"ResponsivePopover",permalink:"/ui5-webcomponents/nightly/components/ResponsivePopover"}},x={},j=[{value:"Usage",id:"usage",level:3},{value:"Responsive Behavior",id:"responsive-behavior",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"value",id:"value",level:3},{value:"max",id:"max",level:3},{value:"disabled",id:"disabled",level:3},{value:"readonly",id:"readonly",level:3},{value:"accessibleName",id:"accessiblename",level:3},{value:"accessibleNameRef",id:"accessiblenameref",level:3},{value:"required",id:"required",level:3},{value:"tooltip",id:"tooltip",level:3},{value:"Slots",id:"slots",level:2},{value:"Events",id:"events",level:2},{value:"change",id:"change",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Rating Indicator is used to display a specific number of icons that are used to rate an item.\nAdditionally, it is also used to display the average and overall ratings."}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"The recommended number of icons is between 5 and 7."}),"\n",(0,i.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["You can change the size of the Rating Indicator by changing its ",(0,i.jsx)(n.code,{children:"font-size"})," CSS property."]}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:'<ui5-rating-indicator style="font-size: 3rem;"></ui5-rating-indicator>'})]}),"\n",(0,i.jsx)(n.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"ui5-rating-indicator"})," is focused, the user can change the rating\nwith the following keyboard shortcuts:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[RIGHT/UP] - Increases the value of the rating by one step. If the highest value is reached, does nothing"}),"\n",(0,i.jsx)(n.li,{children:"[LEFT/DOWN] - Decreases the value of the rating by one step. If the lowest value is reached, does nothing."}),"\n",(0,i.jsx)(n.li,{children:"[Home] - Sets the lowest value."}),"\n",(0,i.jsx)(n.li,{children:"[End] - Sets the highest value."}),"\n",(0,i.jsx)(n.li,{children:"[SPACE/ENTER/RETURN] - Increases the value of the rating by one step. If the highest value is reached, sets the rating to the lowest value."}),"\n",(0,i.jsx)(n.li,{children:"Any number - Changes value to the corresponding number. If typed number is larger than the number of values, sets the highest value."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/RatingIndicator.js";'})}),"\n",(0,i.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"value",children:"value"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["The indicated value of the rating.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," If you set a number which is not round, it would be shown as follows:",(0,i.jsx)("br",{}),"- 1.0 - 1.2 -> 1",(0,i.jsx)("br",{}),"- 1.3 - 1.7 -> 1.5",(0,i.jsx)("br",{}),"- 1.8 - 1.9 -> 2"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"max",children:"max"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"The number of displayed rating symbols."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"disabled",children:"disabled"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines whether the component is disabled.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," A disabled component is completely noninteractive."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"readonly",children:"readonly"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines whether the component is read-only.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," A read-only component is not editable, but still provides visual feedback upon user interaction."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the accessible ARIA name of the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string | undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"undefined"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"accessiblenameref",children:"accessibleNameRef"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Receives id(or many ids) of the elements that label the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string | undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"undefined"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.15.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"required",children:"required"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines whether the component is required."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.15.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"tooltip",children:"tooltip"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the tooltip of the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string | undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"undefined"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.19.0"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(n.p,{children:"No slots available for this component."}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.h3,{id:"change",children:"change"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"The event is fired when the value changes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bubbles"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cancelable"}),(0,i.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.p,{children:"No methods available for this component."}),"\n",(0,i.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsx)(n.p,{children:"No CSS parts available for this component."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},71184:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(14041);const t={},d=i.createContext(t);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);