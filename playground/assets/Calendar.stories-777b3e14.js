import{x as D}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as g}from"./unsafe-html-0ddd83da.js";import{D as $}from"./docs-a58dd199.js";import{C as d}from"./CalendarType-4d682252.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-PCJTTTQV-d23eae87.js";import"./iframe-17871902.js";import"../sb-preview/runtime.js";import"./client-295e1f1c.js";import"./index-9c2f7062.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const h={selectionMode:{control:"select",options:["Multiple","Range","Single"]},default:{control:{type:"text"}},"selected-dates-change":{description:"Fired when the selected dates change. <b>Note:</b> If you call <code>preventDefault()</code> for this event, the component will not create instances of <code>ui5-date</code> for the newly selected dates. In that case you should do this manually.",table:{category:"events"},UI5CustomData:{parameters:[{name:"values",type:"Array",description:"The selected dates"},{name:"dates",type:"Array",description:"The selected dates as UTC timestamps"}]}},primaryCalendarType:{control:"select",options:["Buddhist","Gregorian","Islamic","Japanese","Persian"]},secondaryCalendarType:{control:"select",options:["Buddhist","Gregorian","Islamic","Japanese","Persian"]}},C={package:"@ui5/webcomponents",since:"1.0.0-rc.11"},T="ui5-calendar",F={title:"Main/Calendar",component:"Calendar",subcomponents:{CalendarDate:"CalendarDate"},parameters:{docs:{page:$({...C,component:T})}},argTypes:h},s=e=>D`<ui5-calendar
    selection-mode="${a(e.selectionMode)}"
    ?hide-week-numbers="${a(e.hideWeekNumbers)}"
    primary-calendar-type="${a(e.primaryCalendarType)}"
    secondary-calendar-type="${a(e.secondaryCalendarType)}"
    format-pattern="${a(e.formatPattern)}"
    min-date="${a(e.minDate)}"
    max-date="${a(e.maxDate)}"
>
    ${g(e.default)}
</ui5-calendar>`,t=s.bind({}),r=s.bind({});r.storyName="Formatted Date Range";r.args={minDate:"7/10/2020",maxDate:"20/10/2020",formatPattern:"dd/MM/yyyy"};const n=s.bind({});n.storyName="Primary and Secondary Calendar Types";n.args={primaryCalendarType:d.Japanese,secondaryCalendarType:d.Islamic};var i,o,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:'args => html`<ui5-calendar\n    selection-mode="${ifDefined(args.selectionMode)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-calendar>`',...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-calendar\n    selection-mode="${ifDefined(args.selectionMode)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-calendar>`',...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var f,y,u;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-calendar\n    selection-mode="${ifDefined(args.selectionMode)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-calendar>`',...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const G=["Basic","Bounds","CalendarTypes"];export{t as Basic,r as Bounds,n as CalendarTypes,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Calendar.stories-777b3e14.js.map
