import{x as D}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as g}from"./unsafe-html-0ddd83da.js";import{D as $}from"./docs-05f8b442.js";import{C as i}from"./CalendarType-4d682252.js";import"./jsx-runtime-5fc188ad.js";import"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-cd67e49e.js";import"./index-6193d387.js";import"./iframe-5255f4a2.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-PCJTTTQV-8f167ff6.js";import"./client-295e1f1c.js";const h={selectionMode:{control:"select",options:["Multiple","Range","Single"]},default:{control:{type:"text"}},"selected-dates-change":{description:"Fired when the selected dates change. <b>Note:</b> If you call <code>preventDefault()</code> for this event, the component will not create instances of <code>ui5-date</code> for the newly selected dates. In that case you should do this manually.",table:{category:"events"},UI5CustomData:{parameters:[{name:"values",type:"Array",description:"The selected dates"},{name:"dates",type:"Array",description:"The selected dates as UTC timestamps"}]}},primaryCalendarType:{control:"select",options:["Buddhist","Gregorian","Islamic","Japanese","Persian"]},secondaryCalendarType:{control:"select",options:["Buddhist","Gregorian","Islamic","Japanese","Persian"]}},C={package:"@ui5/webcomponents",since:"1.0.0-rc.11"},T="ui5-calendar",G={title:"Main/Calendar",component:"Calendar",subcomponents:{CalendarDate:"CalendarDate"},parameters:{docs:{page:$({...C,component:T})}},argTypes:h},s=e=>D`<ui5-calendar
    selection-mode="${a(e.selectionMode)}"
    ?hide-week-numbers="${a(e.hideWeekNumbers)}"
    primary-calendar-type="${a(e.primaryCalendarType)}"
    secondary-calendar-type="${a(e.secondaryCalendarType)}"
    format-pattern="${a(e.formatPattern)}"
    min-date="${a(e.minDate)}"
    max-date="${a(e.maxDate)}"
>
    ${g(e.default)}
</ui5-calendar>`,t=s.bind({}),r=s.bind({});r.storyName="Formatted Date Range";r.args={minDate:"7/10/2020",maxDate:"20/10/2020",formatPattern:"dd/MM/yyyy"};const n=s.bind({});n.storyName="Primary and Secondary Calendar Types";n.args={primaryCalendarType:i.Japanese,secondaryCalendarType:i.Islamic};var o,d,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`<ui5-calendar\n    selection-mode="${ifDefined(args.selectionMode)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-calendar>`',...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-calendar\n    selection-mode="${ifDefined(args.selectionMode)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-calendar>`',...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var f,y,u;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-calendar\n    selection-mode="${ifDefined(args.selectionMode)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-calendar>`',...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const R=["Basic","Bounds","CalendarTypes"];export{t as Basic,r as Bounds,n as CalendarTypes,R as __namedExportsOrder,G as default};
//# sourceMappingURL=Calendar.stories-ad9a4c2b.js.map
