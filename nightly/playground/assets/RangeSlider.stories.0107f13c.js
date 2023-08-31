import{x as t}from"./lit-element.3a4d34a1.js";import{D as $}from"./docs.44313b33.js";import{l as a}from"./if-defined.d89d00ab.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.3a521846.js";import"./iframe.fee97a54.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.ba40ce30.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const h={},k={package:"@ui5/webcomponents",since:"1.0.0-rc.11"},D="ui5-range-slider",E={title:"Main/Range Slider",component:"RangeSlider",parameters:{docs:{page:$({...k,component:D})}},argTypes:h},n=e=>t`
<ui5-range-slider
    start-value="${a(e.startValue)}"
    end-value="${a(e.endValue)}"
    min="${a(e.min)}"
    max="${a(e.max)}"
    step="${a(e.step)}"
    ?show-tickmarks="${a(e.showTickmarks)}"
    label-interval="${a(e.labelInterval)}"
    ?show-tooltip="${a(e.showTooltip)}"
></ui5-range-slider>`,i=n.bind({});i.decorators=[e=>t`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];i.args={min:0,max:100,step:5,disabled:!1,showTooltip:!1,showTickmarks:!1,labelInterval:0,startValue:0,endValue:20};const s=n.bind({});s.decorators=[e=>t`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];s.args={startValue:3,endValue:13,showTooltip:!0};const r=n.bind({});r.decorators=[e=>t`
            <div class="wrapper" style="margin-top:1rem;">
                ${e()}
            </div>
        `];r.args={min:0,max:112,step:2,startValue:4,endValue:12,labelInterval:2,showTickmarks:!0,showTooltip:!0};r.storyName="With Tooltips, Tickmarks and Labels";var o,l,m;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`\n<ui5-range-slider\n    start-value="${ifDefined(args.startValue)}"\n    end-value="${ifDefined(args.endValue)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n></ui5-range-slider>`',...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`\n<ui5-range-slider\n    start-value="${ifDefined(args.startValue)}"\n    end-value="${ifDefined(args.endValue)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n></ui5-range-slider>`',...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var f,u,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`\n<ui5-range-slider\n    start-value="${ifDefined(args.startValue)}"\n    end-value="${ifDefined(args.endValue)}"\n    min="${ifDefined(args.min)}"\n    max="${ifDefined(args.max)}"\n    step="${ifDefined(args.step)}"\n    ?show-tickmarks="${ifDefined(args.showTickmarks)}"\n    label-interval="${ifDefined(args.labelInterval)}"\n    ?show-tooltip="${ifDefined(args.showTooltip)}"\n></ui5-range-slider>`',...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const M=["Basic","WithTooltips","RangeSliderTickmarksTooltipLabel"];export{i as Basic,r as RangeSliderTickmarksTooltipLabel,s as WithTooltips,M as __namedExportsOrder,E as default};
//# sourceMappingURL=RangeSlider.stories.0107f13c.js.map
