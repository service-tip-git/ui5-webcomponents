import{x as s}from"./lit-element.3a4d34a1.js";import{l as t}from"./if-defined.d89d00ab.js";import{o as E}from"./unsafe-html.3b27b0e6.js";import{D as y}from"./docs.ebc382b6.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.908412ed.js";import"./iframe.a9aaf75f.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.07c56737.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const S={selectedOption:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},label:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},change:{description:"Fired when the selected option changes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedOption",type:"HTMLElement",description:"the selected option."}]}},"live-change":{description:"Fired when the user navigates through the options, but the selection is not finalized, or when pressing the ESC key to revert the current selection.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedOption",type:"HTMLElement",description:"the selected option."}]}}},M={package:"@ui5/webcomponents",since:"0.8.0"},b="ui5-select",q={title:"Main/Select",component:"Select",subcomponents:{Option:"Option",SelectMenu:"SelectMenu",SelectMenuOption:"SelectMenuOption"},argTypes:S,parameters:{docs:{page:y({...M,component:b})}}},B=e=>s`<ui5-select
    name="${t(e.name)}"
    ?disabled="${t(e.disabled)}"
    ?required="${t(e.required)}"
    value-state="${t(e.valueState)}"
    value-state-message="${t(e.valueStateMessage)}"
    selected-option="${t(e.selectedOption)}"
    accessible-name="${t(e.accessibleName)}"
    accessible-name-ref="${t(e.accessibleNameRef)}"
  >
    ${E(e.default)}
  </ui5-select> `,n=B.bind({});n.storyName="Basic";n.args={default:`<ui5-option icon="iphone">Phone</ui5-option>
    <ui5-option icon="ipad">Tablet</ui5-option>
    <ui5-option icon="laptop" selected="">Desktop</ui5-option>`};const i=()=>s`<ui5-select value-state="Success" class="select">
      <ui5-option icon="meal" selected="">Apple</ui5-option>
      <ui5-option icon="meal">Avocado</ui5-option>
      <ui5-option icon="meal">Mango</ui5-option>
    </ui5-select>
    <ui5-select value-state="Warning" class="select">
      <ui5-option icon="meal">Orange</ui5-option>
      <ui5-option icon="meal" selected="">Pumpkin</ui5-option>
      <ui5-option icon="meal">Carrot</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>
    <ui5-select value-state="Error" class="select">
      <ui5-option icon="meal">Strawberry</ui5-option>
      <ui5-option icon="meal">Tomato</ui5-option>
      <ui5-option icon="meal" selected="">Red Chili Pepper</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>
    <ui5-select value-state="Information" class="select">
      <ui5-option icon="meal">Blueberry</ui5-option>
      <ui5-option icon="meal">Grape</ui5-option>
      <ui5-option icon="meal" selected="">Plum</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>`;i.storyName="Value State";const o=()=>s` <ui5-select class="select">
    <ui5-option additional-text="AT">Austria</ui5-option>
    <ui5-option additional-text="BE">Belgium</ui5-option>
    <ui5-option additional-text="BR">Brazil</ui5-option>
    <ui5-option additional-text="BG">Bulgaria</ui5-option>
    <ui5-option additional-text="CA">Canada</ui5-option>
  </ui5-select>`;o.storyName="Two-column layout";const a=()=>s`<ui5-select menu="selectMenu"></ui5-select>


<ui5-select-menu id="selectMenu">
    <ui5-select-menu-option display-text="AR">
        <div class="optionContent">
            <ui5-icon name="soccer"></ui5-icon>
            Argentina
            <ui5-icon name="employee"></ui5-icon>
        </div>
    </ui5-select-menu-option>

    <ui5-select-menu-option display-text="BE">
        <div class="optionContent">
            <ui5-icon name="soccer"></ui5-icon>
            Belgium
            <ui5-icon name="employee"></ui5-icon>
        </div>
    </ui5-select-menu-option>

    <ui5-select-menu-option display-text="BR">
        <div class="optionContent">
            <ui5-icon name="soccer"></ui5-icon>
            Brazil
            <ui5-icon name="employee"></ui5-icon>
        </div>
    </ui5-select-menu-option>
</ui5-select-menu>

<style>
  .optionContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
  }
</style>`;a.storyName="Custom Options";var l,u,r;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return html\`<ui5-select
    name="\${ifDefined(args.name)}"
    ?disabled="\${ifDefined(args.disabled)}"
    ?required="\${ifDefined(args.required)}"
    value-state="\${ifDefined(args.valueState)}"
    value-state-message="\${ifDefined(args.valueStateMessage)}"
    selected-option="\${ifDefined(args.selectedOption)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
  >
    \${unsafeHTML(args.default)}
  </ui5-select> \`;
}`,...(r=(u=n.parameters)==null?void 0:u.docs)==null?void 0:r.source}}};var c,m,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => html\`<ui5-select value-state="Success" class="select">
      <ui5-option icon="meal" selected="">Apple</ui5-option>
      <ui5-option icon="meal">Avocado</ui5-option>
      <ui5-option icon="meal">Mango</ui5-option>
    </ui5-select>
    <ui5-select value-state="Warning" class="select">
      <ui5-option icon="meal">Orange</ui5-option>
      <ui5-option icon="meal" selected="">Pumpkin</ui5-option>
      <ui5-option icon="meal">Carrot</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>
    <ui5-select value-state="Error" class="select">
      <ui5-option icon="meal">Strawberry</ui5-option>
      <ui5-option icon="meal">Tomato</ui5-option>
      <ui5-option icon="meal" selected="">Red Chili Pepper</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>
    <ui5-select value-state="Information" class="select">
      <ui5-option icon="meal">Blueberry</ui5-option>
      <ui5-option icon="meal">Grape</ui5-option>
      <ui5-option icon="meal" selected="">Plum</ui5-option>
      <div slot="valueStateMessage">
        Information message. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
      <div slot="valueStateMessage">
        Information message 2. This is a <a href="#">Link</a>. Extra long text
        used as an information message. Extra long text used as an information
        message - 2. Extra long text used as an information message - 3.
      </div>
    </ui5-select>\``,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => html\` <ui5-select class="select">
    <ui5-option additional-text="AT">Austria</ui5-option>
    <ui5-option additional-text="BE">Belgium</ui5-option>
    <ui5-option additional-text="BR">Brazil</ui5-option>
    <ui5-option additional-text="BG">Bulgaria</ui5-option>
    <ui5-option additional-text="CA">Canada</ui5-option>
  </ui5-select>\``,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,v,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => html\`<ui5-select menu="selectMenu"></ui5-select>


<ui5-select-menu id="selectMenu">
    <ui5-select-menu-option display-text="AR">
        <div class="optionContent">
            <ui5-icon name="soccer"></ui5-icon>
            Argentina
            <ui5-icon name="employee"></ui5-icon>
        </div>
    </ui5-select-menu-option>

    <ui5-select-menu-option display-text="BE">
        <div class="optionContent">
            <ui5-icon name="soccer"></ui5-icon>
            Belgium
            <ui5-icon name="employee"></ui5-icon>
        </div>
    </ui5-select-menu-option>

    <ui5-select-menu-option display-text="BR">
        <div class="optionContent">
            <ui5-icon name="soccer"></ui5-icon>
            Brazil
            <ui5-icon name="employee"></ui5-icon>
        </div>
    </ui5-select-menu-option>
</ui5-select-menu>

<style>
  .optionContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
  }
</style>\``,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const G=["Basic","ValueStateAndValueStateMessage","TwoColumnLayout","CustomOptions"];export{n as Basic,a as CustomOptions,o as TwoColumnLayout,i as ValueStateAndValueStateMessage,G as __namedExportsOrder,q as default};
//# sourceMappingURL=Select.stories.727e37d1.js.map
