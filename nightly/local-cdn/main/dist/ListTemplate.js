import { jsx as _jsx, jsxs as _jsxs } from "@ui5/webcomponents-base/jsx-runtime";
import BusyIndicator from "./BusyIndicator.js";
import DropIndicator from "./DropIndicator.js";
export default function ListTemplate() {
    return (_jsx("div", { class: "ui5-list-root", onFocusIn: this._onfocusin, onKeyDown: this._onkeydown, onDragEnter: this._ondragenter, onDragOver: this._ondragover, onDrop: this._ondrop, onDragLeave: this._ondragleave, "onui5-close": this.onItemClose, "onui5-toggle": this.onItemToggle, "onui5-request-tabindex-change": this.onItemTabIndexChange, "onui5-_focused": this.onItemFocused, "onui5-forward-after": this.onForwardAfter, "onui5-forward-before": this.onForwardBefore, "onui5-selection-requested": this.onSelectionRequested, "onui5-focus-requested": this.onFocusRequested, "onui5-_press": this.onItemPress, children: _jsxs(BusyIndicator, { id: `${this._id}-busyIndicator`, delay: this.loadingDelay, active: this.showBusyIndicatorOverlay, class: "ui5-list-busy-indicator", children: [_jsxs("div", { class: "ui5-list-scroll-container", children: [this.header.length > 0 && _jsx("slot", { name: "header" }), this.shouldRenderH1 &&
                            _jsx("header", { id: this.headerID, class: "ui5-list-header", children: this.headerText }), this.hasData &&
                            _jsx("div", { id: `${this._id}-before`, tabindex: 0, role: "none", class: "ui5-list-focusarea" }), _jsx("span", { id: `${this._id}-modeLabel`, class: "ui5-hidden-text", children: this.ariaLabelModeText }), _jsxs("ul", { id: `${this._id}-listUl`, class: "ui5-list-ul", role: this.listAccessibleRole, "aria-label": this.ariaLabelTxt, "aria-labelledby": this.ariaLabelledBy, "aria-description": this.ariaDescriptionText, children: [_jsx("slot", {}), this.showNoDataText &&
                                    _jsx("li", { tabindex: 0, id: `${this._id}-nodata`, class: "ui5-list-nodata", role: "listitem", children: _jsx("div", { id: `${this._id}-nodata-text`, class: "ui5-list-nodata-text", children: this.noDataText }) })] }), this.growsWithButton && moreRow.call(this), this.footerText &&
                            _jsx("footer", { id: `${this._id}-footer`, class: "ui5-list-footer", children: this.footerText }), this.hasData &&
                            _jsx("div", { id: `${this._id}-after`, tabindex: 0, role: "none", class: "ui5-list-focusarea" }), _jsx("span", { tabindex: -1, "aria-hidden": "true", class: "ui5-list-end-marker" })] }), _jsx(DropIndicator, { orientation: "Horizontal", ownerReference: this })] }) }));
}
function moreRow() {
    return (_jsx("div", { class: "ui5-growing-button", part: "growing-button", children: _jsxs("div", { id: `${this._id}-growing-btn`, role: "button", tabindex: 0, part: "growing-button-inner", class: {
                "ui5-growing-button-inner": true,
                "ui5-growing-button-inner-active": this._loadMoreActive,
            }, "aria-labelledby": `${this._id}-growingButton-text`, onClick: this._onLoadMoreClick, onKeyDown: this._onLoadMoreKeydown, onKeyUp: this._onLoadMoreKeyup, onMouseDown: this._onLoadMoreMousedown, onMouseUp: this._onLoadMoreMouseup, children: [this.loading &&
                    _jsx(BusyIndicator, { delay: this.loadingDelay, class: "ui5-list-growing-button-busy-indicator", active: true }), _jsx("span", { id: `${this._id}-growingButton-text`, class: "ui5-growing-button-text", "growing-button-text": true, children: this._growingButtonText })] }) }));
}
//# sourceMappingURL=ListTemplate.js.map