/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<a part="root" class="ui5-link-root" role="${ifDefined(this.effectiveAccRole)}" href="${ifDefined(this.parsedRef)}" target="${ifDefined(this.target)}" rel="${ifDefined(this._rel)}" tabindex="${ifDefined(this.effectiveTabIndex)}" title="${ifDefined(this.tooltip)}" ?disabled="${this.disabled}" aria-label="${ifDefined(this.ariaLabelText)}" aria-haspopup="${ifDefined(this._hasPopup)}" aria-expanded="${ifDefined(this.accessibilityAttributes.expanded)}" aria-current="${ifDefined(this.accessibilityAttributes.current)}" @click=${this._onclick} @keydown=${this._onkeydown} @keyup=${this._onkeyup}>${this.icon ? block1.call(this, context, tags, suffix) : undefined}<span class="ui5-link-text"><slot></slot></span>${this.hasLinkType ? block2.call(this, context, tags, suffix) : undefined}${this.endIcon ? block3.call(this, context, tags, suffix) : undefined}</a>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-link-icon" name="${ifDefined(this.icon)}" mode="Decorative" part="icon"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-link-icon" name="${ifDefined(this.icon)}" mode="Decorative" part="icon"></ui5-icon>`; }
function block2(context, tags, suffix) { return html `<span class="ui5-hidden-text">${ifDefined(this.linkTypeText)}</span>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-link-end-icon" name="${ifDefined(this.endIcon)}" mode="Decorative" part="endIcon"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-link-end-icon" name="${ifDefined(this.endIcon)}" mode="Decorative" part="endIcon"></ui5-icon>`; }
export default block0;
//# sourceMappingURL=LinkTemplate.lit.js.map