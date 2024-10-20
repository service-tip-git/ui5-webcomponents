/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `${this.interactive ? block1.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)} `; }
function block1(context, tags, suffix) { return html `<button class="ui5-tag-root" title="${ifDefined(this._title)}" aria-roledescription="${ifDefined(this._roleDescription)}" aria-description="${ifDefined(this._valueState)}" @onclick=${this._onclick}><slot name="icon"></slot>${this._semanticIconName ? block2.call(this, context, tags, suffix) : undefined}<span class="ui5-hidden-text">${ifDefined(this.tagDescription)}</span>${this.hasText ? block3.call(this, context, tags, suffix) : undefined}</button>`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-tag-semantic-icon" name="${ifDefined(this._semanticIconName)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-tag-semantic-icon" name="${ifDefined(this._semanticIconName)}"></ui5-icon>`; }
function block3(context, tags, suffix) { return html `<span class="ui5-tag-text"><slot></slot></span>`; }
function block4(context, tags, suffix) { return html `<div class="ui5-tag-root" title="${ifDefined(this._title)}"><slot name="icon"></slot>${this._semanticIconName ? block5.call(this, context, tags, suffix) : undefined}<span class="ui5-hidden-text">${ifDefined(this.tagDescription)}</span>${this.hasText ? block6.call(this, context, tags, suffix) : undefined}</div>`; }
function block5(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-tag-semantic-icon" name="${ifDefined(this._semanticIconName)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-tag-semantic-icon" name="${ifDefined(this._semanticIconName)}"></ui5-icon>`; }
function block6(context, tags, suffix) { return html `<span class="ui5-tag-text"><slot></slot></span>`; }
export default block0;
//# sourceMappingURL=TagTemplate.lit.js.map