import{x as T}from"./lit-element-c5a2b594.js";import{l as s}from"./if-defined-c29cffe1.js";import{o as h}from"./unsafe-html-0ddd83da.js";import{T as b}from"./ToastPlacement-9320f5e7.js";import{D as y}from"./docs-e6d25d3b.js";import"./jsx-runtime-670e1be8.js";import"./index-4e9ba9b8.js";import"./_commonjsHelpers-725317a4.js";import"./Footer-f1e87d75.js";import"./index-132ff83d.js";import"./iframe-657c8299.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-d38538b0.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-2e471bae.js";import"./client-fb0f3103.js";const E={default:{control:{type:"text"},table:{type:{}}},show:{description:"Shows the component.",table:{category:"methods"},UI5CustomData:{returnValue:{type:{text:"void"}}}}},w={package:"@ui5/webcomponents"};var i=Object.freeze,B=Object.defineProperty,D=(e,v)=>i(B(e,"raw",{value:i(v||e.slice())})),d;const O="ui5-toast",J={title:"Main/Toast",component:"Toast",parameters:{docs:{page:y({...w,component:O})}},argTypes:E};let t=0;const r=e=>T(d||(d=D([`
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
<\/script>`])),++t,t,s(e.duration),s(e.placement),h(e.default),t,t,t,t,t,t),n=r.bind({});n.args={placement:b.BottomCenter,default:"Basic Toast"};const a=r.bind({});a.args={duration:4500,default:"Long Toast"};const o=r.bind({});o.args={placement:b.MiddleCenter,default:"Middle Center Toast"};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,l,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(f=(l=a.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var $,g,x;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
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
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const K=["Basic","Duration","Placement"];export{n as Basic,a as Duration,o as Placement,K as __namedExportsOrder,J as default};
