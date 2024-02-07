import{j as e}from"./jsx-runtime-670e1be8.js";import{M as r}from"./index-47586c18.js";import{F as o}from"./Footer-ec0e4284.js";import{u as i}from"./index-bd2d4f36.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-1f1b9650.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function n(s){const t=Object.assign({h1:"h1",p:"p",em:"em",strong:"strong",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",a:"a"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Getting started/Using features"}),`
`,e.jsx(t.h1,{id:"using-additional-features",children:"Using Additional Features"}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["Several UI5 Web Components packages offer ",e.jsx(t.strong,{children:"additional features"}),". This section explains what these are and how to use them."]})}),`
`,e.jsx(t.h2,{id:"what-are-additional-features",children:"What Are Additional Features"}),`
`,e.jsxs(t.p,{children:["These are features that ",e.jsx(t.strong,{children:"logically belong"})," to a component, but are not needed for the component's most common use cases, thus not part of the component's code by default."]}),`
`,e.jsx(t.p,{children:"The goal of features is to keep the components' code base minimal and allow users greater flexibility over what code to bundle."}),`
`,e.jsx(t.p,{children:"If you intend to use a component's additional feature, your app must import it explicitly."}),`
`,e.jsx(t.h2,{id:"importing-additional-features",children:"Importing Additional Features"}),`
`,e.jsx(t.p,{children:"Import the feature file from the respective NPM package:"}),`
`,e.jsx(t.p,{children:e.jsx(t.code,{children:'import "@ui5/<PACKAGE-NAME>/dist/features/<FEATURE-NAME>.js'})}),`
`,e.jsx(t.h2,{id:"component-features",children:"Component features"}),`
`,e.jsx(t.p,{children:"Currently, only a few components offer additional features:"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Package"}),e.jsx(t.th,{children:"Affects"}),e.jsx(t.th,{children:"Feature Import"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"main"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ui5-color-palette"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js"})}),e.jsx(t.td,{children:'Support for "more colors dialog" for the color palette component'})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"main"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ui5-input"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents/dist/features/InputSuggestions.js"})}),e.jsx(t.td,{children:"Support for input suggestions while typing"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"main"})}),e.jsxs(t.td,{children:["Multiple (",e.jsx(t.code,{children:"ui5-input"}),", ",e.jsx(t.code,{children:"ui5-date-picker"}),", etc...)"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents/dist/features/InputElementsFormSupport.js"})}),e.jsx(t.td,{children:"Support for using input components in forms"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"fiori"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ui5-shellbar"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"})}),e.jsx(t.td,{children:'Support for a better (but bigger in size) animation for the "co-pilot" button in the shellbar component'})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"localization"})}),e.jsxs(t.td,{children:["Multiple (",e.jsx(t.code,{children:"ui5-date-picker"}),", etc...)"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js"})}),e.jsx(t.td,{children:"Buddhist calendar support"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"localization"})}),e.jsxs(t.td,{children:["Multiple (",e.jsx(t.code,{children:"ui5-date-picker"}),", etc...)"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents-localization/dist/features/calendar/Islamic.js"})}),e.jsx(t.td,{children:"Islamic calendar support"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"localization"})}),e.jsxs(t.td,{children:["Multiple (",e.jsx(t.code,{children:"ui5-date-picker"}),", etc...)"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents-localization/dist/features/calendar/Japanese.js"})}),e.jsx(t.td,{children:"Japanese calendar support"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"localization"})}),e.jsxs(t.td,{children:["Multiple (",e.jsx(t.code,{children:"ui5-date-picker"}),", etc...)"]}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents-localization/dist/features/calendar/Persian.js"})}),e.jsx(t.td,{children:"Persian calendar support"})]})]})]}),`
`,e.jsxs(t.p,{children:[e.jsx("b",{children:"Note:"}),` Features must be imported before all components modules,
so that the feature is enabled before the components' definition.`]}),`
`,e.jsx(t.p,{children:"For example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import "@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js;";

import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Link.js";
import "@ui5/webcomponents/dist/Input.js";
`})}),`
`,e.jsx(t.h2,{id:"framework-features",children:"Framework features"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Package"}),e.jsx(t.th,{children:"Affects"}),e.jsx(t.th,{children:"Feature Import"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"base"})}),e.jsx(t.td,{children:"Framework"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents-base/dist/features/OpenUI5Support.js"})}),e.jsx(t.td,{children:"Integration with the OpenUI5 framework, allowing synchronization and resources re-use"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"base"})}),e.jsx(t.td,{children:"Multiple components within all libraries"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents-base/dist/features/F6Navigation.js"})}),e.jsx(t.td,{children:"Support for F6 fast groups navigation"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"base"})}),e.jsx(t.td,{children:"Date related components"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"@ui5/webcomponents-base/dist/features/LegacyDateFormats.js"})}),e.jsx(t.td,{children:"Support for legacy date formats"})]})]})]}),`
`,e.jsxs(t.p,{children:[e.jsx("b",{children:"Note:"}),` Framework-level features must be imported before all components modules,
so that the feature is enabled upon framework boot, before the components' definition.`]}),`
`,e.jsx(t.p,{children:"For example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import "@ui5/webcomponents-base/dist/features/OpenUI5Support.js";
import "@ui5/webcomponents-base/dist/features/F6Navigation.js";

import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Link.js";
import "@ui5/webcomponents/dist/Input.js";
`})}),`
`,e.jsxs(t.p,{children:["Next: ",e.jsx(t.a,{href:"./?path=/docs/docs-getting-started-typescript-support--docs",children:"Typescript Support"})]}),`
`,e.jsx(o,{})]})}function b(s={}){const{wrapper:t}=Object.assign({},i(),s.components);return t?e.jsx(t,Object.assign({},s,{children:e.jsx(n,s)})):n(s)}export{b as default};
