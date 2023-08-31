import{x as v}from"./lit-element.3a4d34a1.js";import{l as s}from"./if-defined.d89d00ab.js";import{o as E}from"./unsafe-html.3b27b0e6.js";import{T as b}from"./ToastPlacement.9918037e.js";import{D as h}from"./docs.6634923b.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.d754db6a.js";import"./iframe.19833d0a.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.cac10534.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const B={placement:{control:"select",options:["BottomCenter","BottomEnd","BottomStart","MiddleCenter","MiddleEnd","MiddleStart","TopCenter","TopEnd","TopStart"]},default:{control:{type:"text"}},show:{description:"Shows the component.",table:{category:"methods"}}},w={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var i=Object.freeze,y=Object.defineProperty,O=(e,T)=>i(y(e,"raw",{value:i(T||e.slice())})),d;const S="ui5-toast",K={title:"Main/Toast",component:"Toast",parameters:{docs:{page:h({...w,component:S})}},argTypes:B};let t=0;const r=e=>v(d||(d=O([`
<ui5-button id="btn-`,`">Show Toast</ui5-button>
<ui5-toast
    id="toast-`,`"
    duration="`,`"
    placement="`,`"
    >`,`</ui5-toast>
<script>
    var toastOpener`,' = document.getElementById("btn-',`");
    var toast`,' = document.getElementById("toast-',`"); 

    toastOpener`,`.addEventListener("click", () => {
        toast`,`.show();
    });
<\/script>`])),++t,t,s(e.duration),s(e.placement),E(e.default),t,t,t,t,t,t),n=r.bind({});n.args={placement:b.BottomCenter,default:"Basic Toast"};const o=r.bind({});o.args={duration:4500,default:"Long Toast"};const a=r.bind({});a.args={placement:b.MiddleCenter,default:"Middle Center Toast"};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="btn-\${++index}">Show Toast</ui5-button>
<ui5-toast
    id="toast-\${index}"
    duration="\${ifDefined(args.duration)}"
    placement="\${ifDefined(args.placement)}"
    >\${unsafeHTML(args.default)}</ui5-toast>
<script>
    var toastOpener\${index} = document.getElementById("btn-\${index}");
    var toast\${index} = document.getElementById("toast-\${index}"); 

    toastOpener\${index}.addEventListener("click", () => {
        toast\${index}.show();
    });
<\/script>\`;
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,l,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="btn-\${++index}">Show Toast</ui5-button>
<ui5-toast
    id="toast-\${index}"
    duration="\${ifDefined(args.duration)}"
    placement="\${ifDefined(args.placement)}"
    >\${unsafeHTML(args.default)}</ui5-toast>
<script>
    var toastOpener\${index} = document.getElementById("btn-\${index}");
    var toast\${index} = document.getElementById("toast-\${index}"); 

    toastOpener\${index}.addEventListener("click", () => {
        toast\${index}.show();
    });
<\/script>\`;
}`,...(f=(l=o.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var $,g,x;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="btn-\${++index}">Show Toast</ui5-button>
<ui5-toast
    id="toast-\${index}"
    duration="\${ifDefined(args.duration)}"
    placement="\${ifDefined(args.placement)}"
    >\${unsafeHTML(args.default)}</ui5-toast>
<script>
    var toastOpener\${index} = document.getElementById("btn-\${index}");
    var toast\${index} = document.getElementById("toast-\${index}"); 

    toastOpener\${index}.addEventListener("click", () => {
        toast\${index}.show();
    });
<\/script>\`;
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const N=["Basic","Duration","Placement"];export{n as Basic,o as Duration,a as Placement,N as __namedExportsOrder,K as default};
//# sourceMappingURL=Toast.stories.3431bb96.js.map
