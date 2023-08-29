import{x as o}from"./lit-element.3a4d34a1.js";import{o as E}from"./unsafe-html.3b27b0e6.js";import{l}from"./if-defined.d89d00ab.js";import{D as O}from"./docs.740d47c3.js";import{M as C,a as P}from"./MediaGalleryMenuHorizontalAlign.a8540e0f.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.61a9c3c8.js";import"./iframe.c80d6626.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.7e9f88f8.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const U={layout:{control:"select",options:["Auto","Horizontal","Vertical"]},menuHorizontalAlign:{control:"select",options:["Left","Right"]},menuVerticalAlign:{control:"select",options:["Bottom","Top"]},default:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the selected item."}]}}},k={package:"@ui5/webcomponents-fiori",since:"1.1.0"};var d=Object.freeze,R=Object.defineProperty,F=(e,_)=>d(R(e,"raw",{value:d(_||e.slice())})),c;const N="ui5-media-gallery",Q=e=>o`
    <style>
        ui5-media-gallery-item:not(:defined) {
            visibility: hidden;
        }

        @media (min-width: 600px) {
            ui5-media-gallery {
                height: 50rem;
            }
        }
    </style>
    ${e()}
`,de={title:"Fiori/MediaGallery",component:"MediaGallery",subcomponents:{MediaGalleryItem:"MediaGalleryItem"},parameters:{docs:{page:O({...k,component:N})}},decorators:[Q],argTypes:U};let Y=0;const i=e=>o` <ui5-media-gallery
        id="media-gallery-${Y++}"
        ?show-all-thumbnails="${l(e.showAllThumbnails)}"
        ?interactive-display-area="${l(e.interactiveDisplayArea)}"
        layout="${l(e.layout)}"
        menu-horizontal-align="${l(e.menuHorizontalAlign)}"
        menu-vertical-align="${l(e.menuVerticalAlign)}"
    >
        ${E(e.default)}
    </ui5-media-gallery>`,t=i.bind({});t.args={showAllThumbnails:!0,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};const s=i.bind({});s.args={showAllThumbnails:!0,layout:C.Vertical,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};const r=i.bind({});r.args={showAllThumbnails:!0,layout:C.Horizontal,menuHorizontalAlign:P.Right,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};const n=i.bind({});n.args={default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
        <img
            src="../assets/images/HT-1000-small.jpg"
            slot="thumbnail"
        />
    </ui5-media-gallery-item>`};const m=i.bind({});m.args={default:`
    <ui5-media-gallery-item layout="Wide">
        <iframe
            src="https://www.youtube.com/embed/GxGZG2fv6Aw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
        ></iframe>
        <img
            src="../assets/images/sap-logo-square.svg"
            slot="thumbnail"
            alt="SAP Video"
        />
    </ui5-media-gallery-item>`};const g=i.bind({});g.args={default:`
    <ui5-media-gallery-item disabled="">
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>`};const u=i.bind({});u.args={default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item selected="">
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>`};const a=i.bind({});a.decorators=[e=>o(c||(c=F([`
<style>
    @media (min-width: 612px) {
        .container {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr 1fr;
        }
    }

    .details {
        background: var(--sapBaseColor);
        padding: 1rem;
    }

    .dialog-footer {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 0px 0.5rem 0px 0px;
    }
</style>
<div class="container">
    `,`
    <div class="details">
            <ui5-title level="H1">Item Details</ui5-title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            quam lectus, tristique semper mi et, faucibus viverra metus.
            Quisque nec venenatis massa. Ut eu dolor a justo ornare feugiat.
            Morbi congue diam id enim porttitor, sit amet placerat nunc
            pulvinar. Vivamus eu feugiat justo. Ut eu lectus mauris. Aliquam
            erat volutpat. Vestibulum et enim sit amet ipsum tincidunt
            aliquet nec in dui. Sed dui est, hendrerit non sollicitudin
            quis, venenatis vel libero. Suspendisse sit amet lorem posuere,
            egestas neque eget, sodales ipsum. Donec sollicitudin leo ut
            risus tincidunt tincidunt. Ut vel nisl nisl. Cras leo odio,
            viverra a ante nec, cursus volutpat lectus. Cras ac metus nisi.
            Aliquam fermentum nec felis sit amet tristique. Nunc luctus a
            lacus non semper. Curabitur euismod tellus id massa mattis, in
            consectetur mi luctus. Mauris dignissim efficitur lobortis.
            Etiam sit amet nunc commodo, lacinia nisi sagittis, finibus
            nulla. Proin quis elementum eros. Ut facilisis lacinia viverra.
        </div>
    </div>
</div>

<ui5-dialog id="mediaGalleryDialog" header-text="Item" stretch="">
    <ui5-bar design="Header" slot="header">
        <ui5-label>Item</ui5-label>
    </ui5-bar>
    <ui5-media-gallery show-all-thumbnails="">
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1000.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1010.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1022.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1030.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-2002.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-2026.jpg" />
        </ui5-media-gallery-item>
    </ui5-media-gallery>
    <div slot="footer" class="dialog-footer">
        <div style="flex: 1;"></div>
        <ui5-button id="closeDialogButton">Close</ui5-button>
    </div>
</ui5-dialog>
<script>
    const mediaGalleryDialog = document.getElementById("mediaGalleryDialog");
    const mediaGallery = document.querySelector(".container > ui5-media-gallery");
    const closeDialogButton = document.getElementById("closeDialogButton");
    
    closeDialogButton.addEventListener("click", () => {
        mediaGalleryDialog.close();
    });
    mediaGallery.addEventListener("overflow-click", (event) => {
        mediaGalleryDialog.show();
    });
    mediaGallery.addEventListener(
        "display-area-click",
        (event) => {
            mediaGalleryDialog.show();
        }
    );
<\/script>`])),e())];a.args={interactiveDisplayArea:!0,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};a.parameters={docs:{story:{inline:!1,iframeHeight:"800px"}}};var y,p,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,v,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var T,b,$;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...($=(b=r.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var H,A,j;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(j=(A=n.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var w,z,x;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(x=(z=m.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var M,G,V;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(V=(G=g.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var L,S,W;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(W=(S=u.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var I,q,B;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(B=(q=a.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const ce=["Basic","WithVerticalLayout","WithThumbnailsOnTheRight","WithSeparateImageThumbnail","WithVideoContent","WithDisabledContent","WithInitiallySelected","WithThumbnailOverflow"];export{t as Basic,g as WithDisabledContent,u as WithInitiallySelected,n as WithSeparateImageThumbnail,a as WithThumbnailOverflow,r as WithThumbnailsOnTheRight,s as WithVerticalLayout,m as WithVideoContent,ce as __namedExportsOrder,de as default};
//# sourceMappingURL=MediaGallery.stories.8da03615.js.map
