import{_ as m}from"./iframe.178bc323.js";import{R as o,a}from"./index.bdfa8201.js";import{a as p}from"./client.69b06123.js";import{C as l,c as d,H as h,d as E}from"./index.10ad1b29.js";var n=new Map,x=({callback:e,children:t})=>{let r=a.exports.useRef();return a.exports.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},R=async(e,t)=>{let r=await _(t);return new Promise(s=>{r.render(o.createElement(x,{callback:()=>s(null)},e))})},f=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},_=async e=>{let t=n.get(e);return t||(t=p.createRoot(e),n.set(e,t)),t},w={code:l,a:d,...h},y=class extends a.exports.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:t}},M=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components};return new Promise((u,c)=>{m(()=>import("./index.f3d20384.js"),["./index.f3d20384.js","./index.3107f185.js","./index.bdfa8201.js","./_commonjsHelpers.b8add541.js"],import.meta.url).then(({MDXProvider:i})=>R(o.createElement(y,{showException:c,key:Math.random()},o.createElement(i,{components:s},o.createElement(E,{context:e,docsParameter:t}))),r)).then(u)})},this.unmount=e=>{f(e)}}};export{M as D,w as d};
//# sourceMappingURL=chunk-PCJTTTQV.3bbd96d1.js.map
