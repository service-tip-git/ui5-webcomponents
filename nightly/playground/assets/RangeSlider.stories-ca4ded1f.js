import{x as t}from"./lit-element-c5a2b594.js";import{D as $}from"./docs-84040a3f.js";import{l as a}from"./if-defined-c29cffe1.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-4f103317.js";import"./index-1ddc0cbe.js";import"./iframe-b6eaac03.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-40facfd7.js";import"./client-fb0f3103.js";const k={},D={package:"@ui5/webcomponents"},w="ui5-range-slider",N={title:"Main/Range Slider",component:"RangeSlider",parameters:{docs:{page:$({...D,component:w})}},argTypes:k},n=e=>t`
<ui5-range-slider
    start-value="${a(e.startValue)}"
    end-value="${a(e.endValue)}"
    min="${a(e.min)}"
    max="${a(e.max)}"
    step="${a(e.step)}"
    ?show-tickmarks="${a(e.showTickmarks)}"
    label-interval="${a(e.labelInterval)}"
    ?show-tooltip="${a(e.showTooltip)}"
></ui5-range-slider>`,s=n.bind({});s.decorators=[e=>t`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];s.args={min:0,max:100,step:5,disabled:!1,showTooltip:!1,showTickmarks:!1,labelInterval:0,startValue:0,endValue:20};const i=n.bind({});i.decorators=[e=>t`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];i.args={startValue:3,endValue:13,showTooltip:!0};const r=n.bind({});r.decorators=[e=>t`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];r.args={min:0,max:112,step:2,startValue:4,endValue:12,labelInterval:2,showTickmarks:!0,showTooltip:!0};r.storyName="Tooltips, Tickmarks and Labels";var o,l,m;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`\n<ui5-range-slider\n    start-value="${ifDefined(args.startValue)}"\n    end-value="${ifDefined(args.endValue)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n></ui5-range-slider>`',...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`\n<ui5-range-slider\n    start-value="${ifDefined(args.startValue)}"\n    end-value="${ifDefined(args.endValue)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n></ui5-range-slider>`',...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var c,u,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`\n<ui5-range-slider\n    start-value="${ifDefined(args.startValue)}"\n    end-value="${ifDefined(args.endValue)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n></ui5-range-slider>`',...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const O=["Basic","Tooltips","RangeSliderTickmarksTooltipLabel"];export{s as Basic,r as RangeSliderTickmarksTooltipLabel,i as Tooltips,O as __namedExportsOrder,N as default};
