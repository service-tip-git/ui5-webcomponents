"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[7834],{23419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>j,default:()=>v,frontMatter:()=>g,metadata:()=>T,toc:()=>b});var d=t(31085),i=t(71184);const a='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-calendar>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-special-date slot="specialDates"></ui5-special-date>\n        <ui5-calendar-legend slot="calendarLegend">\n            <ui5-calendar-legend-item type="Type05" text="Holiday"></ui5-calendar-legend-item>\n            <ui5-calendar-legend-item type="Type07" text="School Vacation"></ui5-calendar-legend-item>\n            <ui5-calendar-legend-item type="Type13" text="Wedding"></ui5-calendar-legend-item>\n        </ui5-calendar-legend>\n    </ui5-calendar>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',l='import "@ui5/webcomponents/dist/Calendar.js";\nimport "@ui5/webcomponents/dist/CalendarLegend.js";\nimport "@ui5/webcomponents/dist/CalendarLegendItem.js";\nimport "@ui5/webcomponents/dist/SpecialCalendarDate.js";\n\n// Function that maps special dates to the current month\nfunction updateSpecialDates() {\n    const currentDate = new Date();\n    const year = currentDate.getFullYear();\n    const formattedMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");\n    const specialDates = document.querySelectorAll("ui5-special-date");\n    const types = ["Type05", "Type07", "Type13", "NonWorking"];\n    const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();\n    let assignedDays = new Set();\n\n    function generateUniqueRandomDay() {\n        let randomDay;\n        do {\n            randomDay = Math.floor(Math.random() * daysInMonth) + 1;\n        } while (assignedDays.has(randomDay));\n        assignedDays.add(randomDay);\n        return randomDay.toString().padStart(2, "0");\n    }\n\n    specialDates.forEach((specDate, index) => {\n        specDate.setAttribute("value", year + "-" + formattedMonth + "-" + generateUniqueRandomDay());\n        specDate.setAttribute("type", types[index % types.length]);\n    });\n}\n\nupdateSpecialDates();';function r(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,d.jsx)(n,{html:a,js:l})}function s(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-calendar-legend>\n        <ui5-calendar-legend-item type="Type01" text="Type01"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type02" text="Type02"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type03" text="Type03"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type04" text="Type04"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type05" text="Type05"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type06" text="Type06"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type07" text="Type07"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type08" text="Type08"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type09" text="Type09"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type10" text="Type10"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type11" text="Type11"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type12" text="Type12"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type13" text="Type13"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type14" text="Type14"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type15" text="Type15"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type16" text="Type16"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type17" text="Type17"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type18" text="Type18"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type19" text="Type19"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type20" text="Type20"></ui5-calendar-legend-item>\n    </ui5-calendar-legend>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',o='import "@ui5/webcomponents/dist/CalendarLegend.js";\nimport "@ui5/webcomponents/dist/CalendarLegendItem.js";';function p(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,d.jsx)(n,{html:c,js:o})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}const h='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-calendar-legend hide-today hide-working-day hide-non-working-day hide-selected-day>\n        <ui5-calendar-legend-item type="Type01" text="Type01"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type02" text="Type02"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type03" text="Type03"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type04" text="Type04"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type05" text="Type05"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type06" text="Type06"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type07" text="Type07"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type08" text="Type08"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type09" text="Type09"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type10" text="Type10"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type11" text="Type11"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type12" text="Type12"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type13" text="Type13"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type14" text="Type14"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type15" text="Type15"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type16" text="Type16"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type17" text="Type17"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type18" text="Type18"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type19" text="Type19"></ui5-calendar-legend-item>\n        <ui5-calendar-legend-item type="Type20" text="Type20"></ui5-calendar-legend-item>\n    </ui5-calendar-legend>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',m='import "@ui5/webcomponents/dist/CalendarLegend.js";\nimport "@ui5/webcomponents/dist/CalendarLegendItem.js";';function y(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,d.jsx)(n,{html:h,js:m})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(y,{...e})}):y(e)}const g={slug:"../../CalendarLegend",ui5_tag_name:"ui5-calendar-legend",ui5_since:"1.23.0"},j=void 0,T={id:"components/main/CalendarLegend/CalendarLegend",title:"CalendarLegend",description:"The ui5-calendar-legend component is designed for use within the ui5-calendar to display a legend.",source:"@site/docs/components/main/CalendarLegend/CalendarLegend.mdx",sourceDirName:"components/main/CalendarLegend",slug:"/components/CalendarLegend",permalink:"/ui5-webcomponents/nightly/components/CalendarLegend",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../CalendarLegend",ui5_tag_name:"ui5-calendar-legend",ui5_since:"1.23.0"},sidebar:"componentsSidebar",previous:{title:"SpecialCalendarDate",permalink:"/ui5-webcomponents/nightly/components/SpecialCalendarDate"},next:{title:"CalendarLegendItem",permalink:"/ui5-webcomponents/nightly/components/CalendarLegendItem"}},f={},b=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"hideToday",id:"hidetoday",level:3},{value:"hideSelectedDay",id:"hideselectedday",level:3},{value:"hideNonWorkingDay",id:"hidenonworkingday",level:3},{value:"hideWorkingDay",id:"hideworkingday",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"CalendarLegendItem Types",id:"calendarlegenditem-types",level:3},{value:"Hide CalendarLegendItems",id:"hide-calendarlegenditems",level:3}];function D(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"ui5-calendar-legend"})," component is designed for use within the ",(0,d.jsx)(n.code,{children:"ui5-calendar"})," to display a legend.\nEach ",(0,d.jsx)(n.code,{children:"ui5-calendar-legend-item"})," represents a unique date type, specifying its visual style\nand a corresponding textual label."]}),"\n",(0,d.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/CalendarLegend.js";'})}),"\n",(0,d.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,d.jsx)(s,{}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,d.jsx)(n.h3,{id:"hidetoday",children:"hideToday"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Description"}),(0,d.jsx)(n.td,{children:"Hides the Today item in the legend."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Type"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Default"}),(0,d.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"hideselectedday",children:"hideSelectedDay"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Description"}),(0,d.jsx)(n.td,{children:"Hides the Selected day item in the legend."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Type"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Default"}),(0,d.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"hidenonworkingday",children:"hideNonWorkingDay"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Description"}),(0,d.jsx)(n.td,{children:"Hides the Non-Working day item in the legend."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Type"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Default"}),(0,d.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"hideworkingday",children:"hideWorkingDay"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Description"}),(0,d.jsx)(n.td,{children:"Hides the Working day item in the legend."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Type"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Default"}),(0,d.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,d.jsx)(n.h3,{id:"default",children:"default"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Description"}),(0,d.jsx)(n.td,{children:"Defines the items of the component."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Type"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Array<CalendarLegendItem>"})})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,d.jsx)(n.p,{children:"No events available for this component."}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.p,{children:"No methods available for this component."}),"\n",(0,d.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,d.jsx)(n.p,{children:"No CSS parts available for this component."}),"\n",(0,d.jsx)(n.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,d.jsx)(n.h3,{id:"calendarlegenditem-types",children:"CalendarLegendItem Types"}),"\n",(0,d.jsx)(u,{}),"\n",(0,d.jsx)(n.h3,{id:"hide-calendarlegenditems",children:"Hide CalendarLegendItems"}),"\n",(0,d.jsxs)(n.p,{children:["By default, the CalendarLegend shows ",(0,d.jsx)("b",{children:"Today"}),", ",(0,d.jsx)("b",{children:"SelectedDay"}),", ",(0,d.jsx)("b",{children:"WorkingDay"})," and ",(0,d.jsx)("b",{children:"NonWorkingDay"})," items.\nHowever, you can hide them as shown in the sample."]}),"\n",(0,d.jsx)(x,{})]})}function v(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(D,{...e})}):D(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var d=t(14041);const i={},a=d.createContext(i);function l(e){const n=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);