/* eslint no-unused-vars: 0 */
import { html, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="${ifDefined(this.icon)}" end-icon="${ifDefined(this.endIcon)}" accessible-name="${ifDefined(this.accessibleName)}" accessible-name-ref="${ifDefined(this.accessibleNameRef)}" .accessibilityAttributes="${ifDefined(this.accessibilityAttributes)}" tooltip="${ifDefined(this.tooltip)}" design="${ifDefined(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" class="ui5-tb-popover-button ui5-tb-popover-item" data-ui5-external-action-item-id="${ifDefined(this._id)}" data-ui5-stable="${ifDefined(this.stableDomRef)}">${ifDefined(this.text)}</${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="${ifDefined(this.icon)}" end-icon="${ifDefined(this.endIcon)}" accessible-name="${ifDefined(this.accessibleName)}" accessible-name-ref="${ifDefined(this.accessibleNameRef)}" .accessibilityAttributes="${ifDefined(this.accessibilityAttributes)}" tooltip="${ifDefined(this.tooltip)}" design="${ifDefined(this.design)}" ?disabled="${this.disabled}" ?hidden="${this.hidden}" class="ui5-tb-popover-button ui5-tb-popover-item" data-ui5-external-action-item-id="${ifDefined(this._id)}" data-ui5-stable="${ifDefined(this.stableDomRef)}">${ifDefined(this.text)}</ui5-button>`; }
export default block0;
//# sourceMappingURL=ToolbarPopoverButtonTemplate.lit.js.map