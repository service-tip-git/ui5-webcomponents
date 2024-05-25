/* eslint no-unused-vars: 0 */
import { html, styleMap, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} class="ui5-tb-button ui5-tb-item" id="${ifDefined(this.id)}" style="${styleMap(this.styles)}" icon="${ifDefined(this.icon)}" end-icon="${ifDefined(this.endIcon)}" tooltip="${ifDefined(this.tooltip)}" accessible-name="${ifDefined(this.accessibleName)}" accessible-name-ref="${ifDefined(this.accessibleNameRef)}" .accessibilityAttributes="${ifDefined(this.accessibilityAttributes)}" design="${ifDefined(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" data-ui5-external-action-item-id="${ifDefined(this._id)}" data-ui5-stable="${ifDefined(this.stableDomRef)}" .refItemId="${ifDefined(this._id)}">${ifDefined(this.text)}</${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button class="ui5-tb-button ui5-tb-item" id="${ifDefined(this.id)}" style="${styleMap(this.styles)}" icon="${ifDefined(this.icon)}" end-icon="${ifDefined(this.endIcon)}" tooltip="${ifDefined(this.tooltip)}" accessible-name="${ifDefined(this.accessibleName)}" accessible-name-ref="${ifDefined(this.accessibleNameRef)}" .accessibilityAttributes="${ifDefined(this.accessibilityAttributes)}" design="${ifDefined(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" data-ui5-external-action-item-id="${ifDefined(this._id)}" data-ui5-stable="${ifDefined(this.stableDomRef)}" .refItemId="${ifDefined(this._id)}">${ifDefined(this.text)}</ui5-button>`; }
export default block0;
//# sourceMappingURL=ToolbarButtonTemplate.lit.js.map