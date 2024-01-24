import{x as g}from"./lit-element-c5a2b594.js";import{l as a}from"./if-defined-c29cffe1.js";import{o as y}from"./unsafe-html-0ddd83da.js";import{D}from"./docs-e23e4e8f.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-524bafb2.js";import"./index-a68b1905.js";import"./iframe-a4e8f984.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-470159da.js";import"./client-fb0f3103.js";const b={dateValue:{control:{type:!1}},dateValueUTC:{control:{type:!1}},startDateValue:{control:{type:!1}},endDateValue:{control:{type:!1}},valueState:{control:"select",options:["None","Success","Warning","Error","Information"]},primaryCalendarType:{control:"select",options:["Gregorian","Islamic","Japanese","Buddhist","Persian"]},secondaryCalendarType:{control:"select",options:["Gregorian","Islamic","Japanese","Buddhist","Persian"]},valueStateMessage:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},isValid:{description:"Checks if a value is valid against the current date format of the DatePicker.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"value",type:{text:"string"},description:"A value to be tested against the current date format",_ui5privacy:"public"}],returnValue:{type:{text:"boolean"}}}},isInValidRange:{description:"Checks if a date is between the minimum and maximum date.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"value",type:{text:"string"},description:"A value to be checked",_ui5privacy:"public"}],returnValue:{type:{text:"boolean"}}}},formatValue:{description:`Formats a Java Script date object into a string representing a locale date
according to the <code>formatPattern</code> property of the DatePicker instance`,table:{category:"methods"},UI5CustomData:{parameters:[{name:"date",type:{text:"Date"},description:"A Java Script date object to be formatted as string",_ui5privacy:"public"}],returnValue:{type:{text:"string"},description:"The date as string"}}},closePicker:{description:"Closes the picker.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}},openPicker:{description:"Opens the picker.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"Promise<void>"},description:"Resolves when the picker is open"}}},isOpen:{description:"Checks if the picker is open.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"boolean"},description:"true if the picker is open, false otherwise"}}},change:{description:"Fired when the input operation has finished by pressing Enter or on focusout.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]}},input:{description:"Fired when the value of the component is changed at each key stroke.",control:{type:!1},table:{category:"events"},UI5CustomData:{parameters:[{type:{text:"string"},name:"value",_ui5privacy:"public",description:"The submitted value."},{type:{text:"boolean"},name:"valid",_ui5privacy:"public",description:"Indicator if the value is in correct format pattern and in valid range."}]}}},h={package:"@ui5/webcomponents",since:"1.0.0-rc.8"},$="ui5-daterange-picker",L={title:"Main/DateRangePicker",component:"DateRangePicker",parameters:{docs:{page:D({...h,component:$})}},argTypes:b},n=e=>g`<ui5-daterange-picker
    value="${a(e.value)}"
    value-state="${a(e.valueState)}"
    ?disabled="${a(e.disabled)}"
    ?readonly="${a(e.readonly)}"
    delimiter="${a(e.delimiter)}"
    placeholder="${a(e.placeholder)}"
    ?hide-week-numbers="${a(e.hideWeekNumbers)}"
    primary-calendar-type="${a(e.primaryCalendarType)}"
    secondary-calendar-type="${a(e.secondaryCalendarType)}"
    format-pattern="${a(e.formatPattern)}"
    min-date="${a(e.minDate)}"
    max-date="${a(e.maxDate)}"
    accessible-name="${a(e.accessibleName)}"
    accessible-name-ref="${a(e.accessibleNameRef)}"
>
    ${y(e.valueStateMessage)}
</ui5-daterange-picker>`,i=n.bind({}),t=n.bind({});t.storyName="Formatted Date Range";t.args={minDate:"1/1/2020",maxDate:"4/5/2020",formatPattern:"dd/MM/yyyy"};const r=n.bind({});r.storyName="Formatted Value and Delimiter";r.args={value:"March 31, 2023 ~ April 9, 2023",delimiter:"~",formatPattern:"long"};var s,o,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-daterange-picker\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    delimiter="${ifDefined(args.delimiter)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-daterange-picker>`',...(d=(o=i.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,l,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-daterange-picker\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    delimiter="${ifDefined(args.delimiter)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-daterange-picker>`',...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,f,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-daterange-picker\n    value="${ifDefined(args.value)}"\n    value-state="${ifDefined(args.valueState)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?readonly="${ifDefined(args.readonly)}"\n    delimiter="${ifDefined(args.delimiter)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    ?hide-week-numbers="${ifDefined(args.hideWeekNumbers)}"\n    primary-calendar-type="${ifDefined(args.primaryCalendarType)}"\n    secondary-calendar-type="${ifDefined(args.secondaryCalendarType)}"\n    format-pattern="${ifDefined(args.formatPattern)}"\n    min-date="${ifDefined(args.minDate)}"\n    max-date="${ifDefined(args.maxDate)}"\n    accessible-name="${ifDefined(args.accessibleName)}"\n    accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-daterange-picker>`',...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const A=["Basic","MinMax","LongFormat"];export{i as Basic,r as LongFormat,t as MinMax,A as __namedExportsOrder,L as default};
