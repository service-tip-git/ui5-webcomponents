/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.root)}">${this.tabsAtTheBottom ? block1.call(this, context, tags, suffix) : undefined}<div class="${classMap(this.classes.header)}" id="${ifDefined(this._id)}-header" @focusin="${this._onHeaderFocusin}" @dragstart="${this._onDragStart}" @dragenter="${this._onHeaderDragEnter}" @dragover="${this._onHeaderDragOver}" @drop="${this._onHeaderDrop}" @dragleave="${this._onHeaderDragLeave}" part="tabstrip"><div class="ui5-tc__overflow ui5-tc__overflow--start" @click="${this._onOverflowClick}" @keydown="${this._onOverflowKeyDown}" hidden>${this.startOverflowButton.length ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}</div><div id="${ifDefined(this._id)}-tabStrip" class="${classMap(this.classes.tabStrip)}" role="tablist" aria-describedby="${ifDefined(this.tablistAriaDescribedById)}" @click="${this._onTabStripClick}" @keydown="${this._onTabStripKeyDown}" @keyup="${this._onTabStripKeyUp}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}</div><div class="ui5-tc__overflow ui5-tc__overflow--end" @click="${this._onOverflowClick}" @keydown="${this._onOverflowKeyDown}" hidden>${this.overflowButton.length ? block6.call(this, context, tags, suffix) : block7.call(this, context, tags, suffix)}</div><${scopeTag("ui5-drop-indicator", tags, suffix)} orientation="Vertical" .ownerReference="${ifDefined(this)}"></${scopeTag("ui5-drop-indicator", tags, suffix)}></div>${!this.tabsAtTheBottom ? block8.call(this, context, tags, suffix) : undefined}${this.hasItems ? block10.call(this, context, tags, suffix) : undefined}</div><${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-overflowMenu" horizontal-align="End" placement="Bottom" content-only-on-desktop hide-arrow _hide-header class="ui5-tab-container-responsive-popover" @dragstart="${this._onDragStart}"><${scopeTag("ui5-list", tags, suffix)} selection-mode="Single" separators="None" @ui5-item-click="${ifDefined(this._onOverflowListItemClick)}" @ui5-move-over="${ifDefined(this._onPopoverListMoveOver)}" @ui5-move="${ifDefined(this._onPopoverListMove)}" @keydown="${this._onPopoverListKeyDown}">${repeat(this._popoverItemsFlat, (item, index) => item._id || index, (item, index) => block11.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}><div slot="footer" class="ui5-responsive-popover-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${this._closePopover}">${ifDefined(this.popoverCancelButtonText)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<div class="${classMap(this.classes.root)}">${this.tabsAtTheBottom ? block1.call(this, context, tags, suffix) : undefined}<div class="${classMap(this.classes.header)}" id="${ifDefined(this._id)}-header" @focusin="${this._onHeaderFocusin}" @dragstart="${this._onDragStart}" @dragenter="${this._onHeaderDragEnter}" @dragover="${this._onHeaderDragOver}" @drop="${this._onHeaderDrop}" @dragleave="${this._onHeaderDragLeave}" part="tabstrip"><div class="ui5-tc__overflow ui5-tc__overflow--start" @click="${this._onOverflowClick}" @keydown="${this._onOverflowKeyDown}" hidden>${this.startOverflowButton.length ? block3.call(this, context, tags, suffix) : block4.call(this, context, tags, suffix)}</div><div id="${ifDefined(this._id)}-tabStrip" class="${classMap(this.classes.tabStrip)}" role="tablist" aria-describedby="${ifDefined(this.tablistAriaDescribedById)}" @click="${this._onTabStripClick}" @keydown="${this._onTabStripKeyDown}" @keyup="${this._onTabStripKeyUp}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block5.call(this, context, tags, suffix, item, index))}</div><div class="ui5-tc__overflow ui5-tc__overflow--end" @click="${this._onOverflowClick}" @keydown="${this._onOverflowKeyDown}" hidden>${this.overflowButton.length ? block6.call(this, context, tags, suffix) : block7.call(this, context, tags, suffix)}</div><ui5-drop-indicator orientation="Vertical" .ownerReference="${ifDefined(this)}"></ui5-drop-indicator></div>${!this.tabsAtTheBottom ? block8.call(this, context, tags, suffix) : undefined}${this.hasItems ? block10.call(this, context, tags, suffix) : undefined}</div><ui5-responsive-popover id="${ifDefined(this._id)}-overflowMenu" horizontal-align="End" placement="Bottom" content-only-on-desktop hide-arrow _hide-header class="ui5-tab-container-responsive-popover" @dragstart="${this._onDragStart}"><ui5-list selection-mode="Single" separators="None" @ui5-item-click="${ifDefined(this._onOverflowListItemClick)}" @ui5-move-over="${ifDefined(this._onPopoverListMoveOver)}" @ui5-move="${ifDefined(this._onPopoverListMove)}" @keydown="${this._onPopoverListKeyDown}">${repeat(this._popoverItemsFlat, (item, index) => item._id || index, (item, index) => block11.call(this, context, tags, suffix, item, index))}</ui5-list><div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closePopover}">${ifDefined(this.popoverCancelButtonText)}</ui5-button></div></ui5-responsive-popover>`; }
function block1(context, tags, suffix) { return html `<div class="${classMap(this.classes.content)}" part="content"><div class="ui5-tc__contentItem" id="ui5-tc-content" ?hidden="${this._selectedTab?.effectiveHidden}" role="tabpanel" aria-labelledby="${ifDefined(this._selectedTab?._id)}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</div></div>`; }
function block2(context, tags, suffix, item, index) { return html `<slot name="${ifDefined(item._effectiveSlotName)}"></slot>`; }
function block3(context, tags, suffix) { return html `<slot name="startOverflowButton"></slot>`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} end-icon="${ifDefined(this.overflowMenuIcon)}" data-ui5-stable="overflow-start" tabindex="-1" tooltip="${ifDefined(this.overflowMenuTitle)}" .accessibilityAttributes="${ifDefined(this.overflowBtnAccessibilityAttributes)}">${ifDefined(this._startOverflowText)}</${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button end-icon="${ifDefined(this.overflowMenuIcon)}" data-ui5-stable="overflow-start" tabindex="-1" tooltip="${ifDefined(this.overflowMenuTitle)}" .accessibilityAttributes="${ifDefined(this.overflowBtnAccessibilityAttributes)}">${ifDefined(this._startOverflowText)}</ui5-button>`; }
function block5(context, tags, suffix, item, index) { return html `${ifDefined(item.stripPresentation)}`; }
function block6(context, tags, suffix) { return html `<slot name="overflowButton"></slot>`; }
function block7(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} end-icon="${ifDefined(this.overflowMenuIcon)}" data-ui5-stable="overflow-end" tabindex="-1" tooltip="${ifDefined(this.overflowMenuTitle)}" .accessibilityAttributes="${ifDefined(this.overflowBtnAccessibilityAttributes)}">${ifDefined(this._endOverflowText)}</${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button end-icon="${ifDefined(this.overflowMenuIcon)}" data-ui5-stable="overflow-end" tabindex="-1" tooltip="${ifDefined(this.overflowMenuTitle)}" .accessibilityAttributes="${ifDefined(this.overflowBtnAccessibilityAttributes)}">${ifDefined(this._endOverflowText)}</ui5-button>`; }
function block8(context, tags, suffix) { return html `<div class="${classMap(this.classes.content)}" part="content"><div class="ui5-tc__contentItem" id="ui5-tc-content" ?hidden="${this._selectedTab?.effectiveHidden}" role="tabpanel" aria-labelledby="${ifDefined(this._selectedTab?._id)}">${repeat(this.items, (item, index) => item._id || index, (item, index) => block9.call(this, context, tags, suffix, item, index))}</div></div>`; }
function block9(context, tags, suffix, item, index) { return html `<slot name="${ifDefined(item._effectiveSlotName)}"></slot>`; }
function block10(context, tags, suffix) { return html `<span id="${ifDefined(this._id)}-invisibleText" class="ui5-hidden-text">${ifDefined(this.accInvisibleText)}</span>`; }
function block11(context, tags, suffix, item, index) { return html `${ifDefined(item.overflowPresentation)}`; }
export default block0;
//# sourceMappingURL=TabContainerTemplate.lit.js.map