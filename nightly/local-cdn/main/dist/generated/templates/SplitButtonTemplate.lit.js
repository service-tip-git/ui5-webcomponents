/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="ui5-split-button-root" role="group" tabindex=${ifDefined(this._tabIndex)} aria-labelledby="${ifDefined(this._id)}-invisibleTextDefault ${ifDefined(this._id)}-invisibleText" @focusout=${this._onFocusOut} @focusin=${this._onFocusIn} @keydown=${this._onKeyDown} @keyup=${this._onKeyUp}><${scopeTag("ui5-button", tags, suffix)} class="ui5-split-text-button" design="${ifDefined(this.design)}" icon="${ifDefined(this.icon)}" tabindex="-1" ?disabled="${this.disabled}" ?active="${this._textButtonActive}" @click="${this._handleMouseClick}" @touchstart=${this._textButtonPress} @mousedown=${this._textButtonPress} @mouseup=${this._textButtonRelease} @focusin=${this._onInnerButtonFocusIn} @focusout=${this._onFocusOut}>${this.isTextButton ? block1.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-button", tags, suffix)}><${scopeTag("ui5-button", tags, suffix)} class="ui5-split-arrow-button" design="${ifDefined(this.design)}" icon="slim-arrow-down" tabindex="-1" tooltip="${ifDefined(this.accInfo.arrowButton.title)}" .accessibilityAttributes=${ifDefined(this.accInfo.arrowButton.accessibilityAttributes)} ?disabled="${this.disabled}" ?active="${this.effectiveActiveArrowButton}" @click="${this._handleArrowButtonAction}" @mousedown=${this._arrowButtonPress} @mouseup=${this._arrowButtonRelease} @focusin=${this._onInnerButtonFocusIn} @ui5-_active-state-change=${ifDefined(this._onArrowButtonActiveStateChange)}></${scopeTag("ui5-button", tags, suffix)}><span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this.accInfo.root.description)}${ifDefined(this.accInfo.root.keyboardHint)}${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-invisibleTextDefault" class="ui5-hidden-text">${ifDefined(this.textButtonAccText)}</span></div>` : html `<div class="ui5-split-button-root" role="group" tabindex=${ifDefined(this._tabIndex)} aria-labelledby="${ifDefined(this._id)}-invisibleTextDefault ${ifDefined(this._id)}-invisibleText" @focusout=${this._onFocusOut} @focusin=${this._onFocusIn} @keydown=${this._onKeyDown} @keyup=${this._onKeyUp}><ui5-button class="ui5-split-text-button" design="${ifDefined(this.design)}" icon="${ifDefined(this.icon)}" tabindex="-1" ?disabled="${this.disabled}" ?active="${this._textButtonActive}" @click="${this._handleMouseClick}" @touchstart=${this._textButtonPress} @mousedown=${this._textButtonPress} @mouseup=${this._textButtonRelease} @focusin=${this._onInnerButtonFocusIn} @focusout=${this._onFocusOut}>${this.isTextButton ? block1.call(this, context, tags, suffix) : undefined}</ui5-button><ui5-button class="ui5-split-arrow-button" design="${ifDefined(this.design)}" icon="slim-arrow-down" tabindex="-1" tooltip="${ifDefined(this.accInfo.arrowButton.title)}" .accessibilityAttributes=${ifDefined(this.accInfo.arrowButton.accessibilityAttributes)} ?disabled="${this.disabled}" ?active="${this.effectiveActiveArrowButton}" @click="${this._handleArrowButtonAction}" @mousedown=${this._arrowButtonPress} @mouseup=${this._arrowButtonRelease} @focusin=${this._onInnerButtonFocusIn} @ui5-_active-state-change=${ifDefined(this._onArrowButtonActiveStateChange)}></ui5-button><span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this.accInfo.root.description)}${ifDefined(this.accInfo.root.keyboardHint)}${ifDefined(this.accessibleName)}</span><span id="${ifDefined(this._id)}-invisibleTextDefault" class="ui5-hidden-text">${ifDefined(this.textButtonAccText)}</span></div>`; }
function block1(context, tags, suffix) { return html `<slot></slot>`; }
export default block0;
//# sourceMappingURL=SplitButtonTemplate.lit.js.map