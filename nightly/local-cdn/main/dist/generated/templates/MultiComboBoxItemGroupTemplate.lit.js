/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<ul class="ui5-group-li-root" role="group" @dragenter="${this._ondragenter}" @dragover="${this._ondragover}" @drop="${this._ondrop}" @dragleave="${this._ondragleave}">${this.hasHeader ? block1.call(this, context, tags, suffix) : undefined}${repeat(this.items, (item, index) => item._id || index, (item, index) => block4.call(this, context, tags, suffix, item, index))}<${scopeTag("ui5-drop-indicator", tags, suffix)} orientation="Horizontal" .ownerReference="${ifDefined(this)}"></${scopeTag("ui5-drop-indicator", tags, suffix)}></ul>` : html `<ul class="ui5-group-li-root" role="group" @dragenter="${this._ondragenter}" @dragover="${this._ondragover}" @drop="${this._ondrop}" @dragleave="${this._ondragleave}">${this.hasHeader ? block1.call(this, context, tags, suffix) : undefined}${repeat(this.items, (item, index) => item._id || index, (item, index) => block4.call(this, context, tags, suffix, item, index))}<ui5-drop-indicator orientation="Horizontal" .ownerReference="${ifDefined(this)}"></ui5-drop-indicator></ul>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-li-group-header", tags, suffix)} ?focused="${this.focused}" part="header">${this.hasFormattedHeader ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</${scopeTag("ui5-li-group-header", tags, suffix)}>` : html `<ui5-li-group-header ?focused="${this.focused}" part="header">${this.hasFormattedHeader ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</ui5-li-group-header>`; }
function block2(context, tags, suffix) { return html `<slot name="header"></slot>`; }
function block3(context, tags, suffix) { return html `${ifDefined(this.headerText)}`; }
function block4(context, tags, suffix, item, index) { return html `${item._isVisible ? block5.call(this, context, tags, suffix, item, index) : undefined}`; }
function block5(context, tags, suffix, item, index) { return html `<slot name="${ifDefined(item._individualSlot)}"></slot>`; }
export default block0;
//# sourceMappingURL=MultiComboBoxItemGroupTemplate.lit.js.map