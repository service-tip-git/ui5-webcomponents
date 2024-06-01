var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Input_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import { getScopedVarName } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";
import { isPhone, isAndroid, } from "@ui5/webcomponents-base/dist/Device.js";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import { getFeature } from "@ui5/webcomponents-base/dist/FeaturesRegistry.js";
import { isUp, isDown, isSpace, isEnter, isBackSpace, isDelete, isEscape, isTabNext, isPageUp, isPageDown, isHome, isEnd, } from "@ui5/webcomponents-base/dist/Keys.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { submitForm } from "@ui5/webcomponents-base/dist/features/InputElementsFormSupport.js";
import { getAssociatedLabelForTexts, getAllAccessibleNameRefTexts, registerUI5Element, deregisterUI5Element, } from "@ui5/webcomponents-base/dist/util/AriaLabelHelper.js";
import { getCaretPosition, setCaretPosition } from "@ui5/webcomponents-base/dist/util/Caret.js";
import getActiveElement from "@ui5/webcomponents-base/dist/util/getActiveElement.js";
import "@ui5/webcomponents-icons/dist/decline.js";
import "@ui5/webcomponents-icons/dist/not-editable.js";
import "@ui5/webcomponents-icons/dist/error.js";
import "@ui5/webcomponents-icons/dist/alert.js";
import "@ui5/webcomponents-icons/dist/sys-enter-2.js";
import "@ui5/webcomponents-icons/dist/information.js";
import InputType from "./types/InputType.js";
import Popover from "./Popover.js";
import Icon from "./Icon.js";
import "./types/PopoverHorizontalAlign.js";
// Templates
import InputTemplate from "./generated/templates/InputTemplate.lit.js";
import { StartsWith } from "./Filters.js";
import { VALUE_STATE_SUCCESS, VALUE_STATE_INFORMATION, VALUE_STATE_ERROR, VALUE_STATE_WARNING, VALUE_STATE_TYPE_SUCCESS, VALUE_STATE_TYPE_INFORMATION, VALUE_STATE_TYPE_ERROR, VALUE_STATE_TYPE_WARNING, INPUT_SUGGESTIONS, INPUT_SUGGESTIONS_TITLE, INPUT_SUGGESTIONS_ONE_HIT, INPUT_SUGGESTIONS_MORE_HITS, INPUT_SUGGESTIONS_NO_HIT, INPUT_CLEAR_ICON_ACC_NAME, FORM_TEXTFIELD_REQUIRED, } from "./generated/i18n/i18n-defaults.js";
// Styles
import inputStyles from "./generated/themes/Input.css.js";
import ResponsivePopoverCommonCss from "./generated/themes/ResponsivePopoverCommon.css.js";
import ValueStateMessageCss from "./generated/themes/ValueStateMessage.css.js";
import SuggestionsCss from "./generated/themes/Suggestions.css.js";
import ResponsivePopover from "./ResponsivePopover.js";
// all sementic events
var INPUT_EVENTS;
(function (INPUT_EVENTS) {
    INPUT_EVENTS["CHANGE"] = "change";
    INPUT_EVENTS["INPUT"] = "input";
    INPUT_EVENTS["SELECTION_CHANGE"] = "selection-change";
})(INPUT_EVENTS || (INPUT_EVENTS = {}));
// all user interactions
var INPUT_ACTIONS;
(function (INPUT_ACTIONS) {
    INPUT_ACTIONS["ACTION_ENTER"] = "enter";
    INPUT_ACTIONS["ACTION_USER_INPUT"] = "input";
})(INPUT_ACTIONS || (INPUT_ACTIONS = {}));
/**
 * @class
 * ### Overview
 *
 * The `ui5-input` component allows the user to enter and edit text or numeric values in one line.
 *
 * Additionally, you can provide `suggestionItems`,
 * that are displayed in a popover right under the input.
 *
 * The text field can be editable or read-only (`readonly` property),
 * and it can be enabled or disabled (`disabled` property).
 * To visualize semantic states, such as "error" or "warning", the `valueState` property is provided.
 * When the user makes changes to the text, the change event is fired,
 * which enables you to react on any text change.
 *
 * **Note:** If you are using the `ui5-input` as a single npm module,
 * don't forget to import the `InputSuggestions` module from
 * "@ui5/webcomponents/dist/features/InputSuggestions.js"
 * to enable the suggestions functionality.
 *
 * ### Keyboard Handling
 * The `ui5-input` provides the following keyboard shortcuts:
 *
 * - [Escape] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
 * - [Enter] or [Return] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
 * - [Down] - Focuses the next matching item in the suggestion list. Selection-change event is fired.
 * - [Up] - Focuses the previous matching item in the suggestion list. Selection-change event is fired.
 * - [Home] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
 * - [End] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
 * - [Page Up] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
 * - [Page Down] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/Input.js";`
 *
 * `import "@ui5/webcomponents/dist/features/InputSuggestions.js";` (optional - for input suggestions support)
 * @constructor
 * @extends UI5Element
 * @public
 */
let Input = Input_1 = class Input extends UI5Element {
    get formValidityMessage() {
        return Input_1.i18nBundle.getText(FORM_TEXTFIELD_REQUIRED);
    }
    get formValidity() {
        return { valueMissing: this.required && !this.value };
    }
    async formElementAnchor() {
        return this.getFocusDomRefAsync();
    }
    get formFormattedValue() {
        return this.value;
    }
    constructor() {
        super();
        // Indicates if there is selected suggestionItem.
        this.hasSuggestionItemSelected = false;
        // Represents the value before user moves selection from suggestion item to another
        // and its value is updated after each move.
        // Note: Used to register and fire "input" event upon [Space] or [Enter].
        // Note: The property "value" is updated upon selection move and can`t be used.
        this.valueBeforeItemSelection = "";
        // Represents the value before user moves selection between the suggestion items
        // and its value remains the same when the user navigates up or down the list.
        // Note: Used to cancel selection upon [Escape].
        this.valueBeforeSelectionStart = "";
        // tracks the value between focus in and focus out to detect that change event should be fired.
        this.previousValue = "";
        // Indicates, if the component is rendering for first time.
        this.firstRendering = true;
        // The typed in value.
        this.typedInValue = "";
        // The last value confirmed by the user with "ENTER"
        this.lastConfirmedValue = "";
        // Indicates, if the user is typing. Gets reset once popup is closed
        this.isTyping = false;
        // Suggestions array initialization
        this.suggestionObjects = [];
        // Indicates whether the value of the input is comming from a suggestion item
        this._isLatestValueFromSuggestions = false;
        this._handleResizeBound = this._handleResize.bind(this);
        this._keepInnerValue = false;
        this._focusedAfterClear = false;
    }
    onEnterDOM() {
        ResizeHandler.register(this, this._handleResizeBound);
        registerUI5Element(this, this._updateAssociatedLabelsTexts.bind(this));
    }
    onExitDOM() {
        ResizeHandler.deregister(this, this._handleResizeBound);
        deregisterUI5Element(this);
    }
    onBeforeRendering() {
        if (!this._keepInnerValue) {
            this._innerValue = this.value;
        }
        if (this.showSuggestions) {
            this.enableSuggestions();
            this.suggestionObjects = this.Suggestions.defaultSlotProperties(this.typedInValue);
        }
        this._effectiveShowClearIcon = (this.showClearIcon && !!this.value && !this.readonly && !this.disabled);
        this.style.setProperty(getScopedVarName("--_ui5-input-icons-count"), `${this.iconsCount}`);
        const hasItems = !!this.suggestionItems.length;
        const hasValue = !!this.value;
        const isFocused = this.shadowRoot.querySelector("input") === getActiveElement();
        if (this.shouldDisplayOnlyValueStateMessage) {
            this.openValueStatePopover();
        }
        else {
            this.closeValueStatePopover();
        }
        const preventOpenPicker = this.disabled || this.readonly;
        if (preventOpenPicker) {
            this.open = false;
        }
        else if (!this._isPhone) {
            this.open = hasItems && (this.open || (hasValue && isFocused && this.isTyping));
        }
        const value = this.value;
        const innerInput = this.getInputDOMRefSync();
        if (!innerInput || !value) {
            return;
        }
        const autoCompletedChars = innerInput.selectionEnd - innerInput.selectionStart;
        // Typehead causes issues on Android devices, so we disable it for now
        // If there is already a selection the autocomplete has already been performed
        if (this._shouldAutocomplete && !isAndroid() && !autoCompletedChars && !this._isKeyNavigation) {
            const item = this._getFirstMatchingItem(value);
            if (item) {
                this._handleTypeAhead(item);
            }
        }
    }
    onAfterRendering() {
        const innerInput = this.getInputDOMRefSync();
        if (this.Suggestions && this.showSuggestions && this.Suggestions._getPicker()) {
            this._listWidth = this.Suggestions._getListWidth();
        }
        if (this._performTextSelection) {
            // this is required to syncronize lit-html input's value and user's input
            // lit-html does not sync its stored value for the value property when the user is typing
            if (innerInput.value !== this._innerValue) {
                innerInput.value = this._innerValue;
            }
            if (this.typedInValue.length && this.value.length) {
                innerInput.setSelectionRange(this.typedInValue.length, this.value.length);
            }
        }
        this._performTextSelection = false;
    }
    _onkeydown(e) {
        this._isKeyNavigation = true;
        this._shouldAutocomplete = !this.noTypeahead && !(isBackSpace(e) || isDelete(e) || isEscape(e));
        if (isUp(e)) {
            return this._handleUp(e);
        }
        if (isDown(e)) {
            return this._handleDown(e);
        }
        if (isSpace(e)) {
            return this._handleSpace(e);
        }
        if (isTabNext(e)) {
            return this._handleTab();
        }
        if (isEnter(e)) {
            return this._handleEnter(e);
        }
        if (isPageUp(e)) {
            return this._handlePageUp(e);
        }
        if (isPageDown(e)) {
            return this._handlePageDown(e);
        }
        if (isHome(e)) {
            return this._handleHome(e);
        }
        if (isEnd(e)) {
            return this._handleEnd(e);
        }
        if (isEscape(e)) {
            return this._handleEscape();
        }
        if (this.showSuggestions) {
            this._clearPopoverFocusAndSelection();
        }
        this._keyDown = true;
        this._isKeyNavigation = false;
    }
    _onkeyup(e) {
        // The native Delete event does not update the value property "on time".
        // So, the (native) change event is always fired with the old value
        if (isDelete(e)) {
            this.value = e.target.value;
        }
        this._keyDown = false;
    }
    _handleUp(e) {
        if (this.Suggestions && this.Suggestions.isOpened()) {
            this.Suggestions.onUp(e);
        }
    }
    _handleDown(e) {
        if (this.Suggestions && this.Suggestions.isOpened()) {
            this.Suggestions.onDown(e);
        }
    }
    _handleSpace(e) {
        if (this.Suggestions) {
            this.Suggestions.onSpace(e);
        }
    }
    _handleTab() {
        if (this.Suggestions && (this.previousValue !== this.value)) {
            this.Suggestions.onTab();
        }
    }
    _handleEnter(e) {
        const suggestionItemPressed = !!(this.Suggestions && this.Suggestions.onEnter(e));
        const innerInput = this.getInputDOMRefSync();
        let matchingIndex = -1;
        // Check for autocompleted item
        const matchingItem = this.suggestionItems.find((item, index) => {
            matchingIndex = index;
            return (item.text && item.text === this.value) || (item.textContent === this.value);
        });
        if (matchingItem) {
            const itemText = matchingItem.text ? matchingItem.text : (matchingItem.textContent || "");
            const listItem = this.Suggestions._getItems()[matchingIndex];
            innerInput.setSelectionRange(itemText.length, itemText.length);
            if (!suggestionItemPressed) {
                this.fireSelectionChange(matchingItem, listItem, true);
                this.acceptSuggestion(matchingItem, true);
                this.open = false;
            }
        }
        if (this._isPhone && !this.suggestionItems.length && !this.isTypeNumber) {
            innerInput.setSelectionRange(this.value.length, this.value.length);
        }
        if (!suggestionItemPressed) {
            this.lastConfirmedValue = this.value;
            if (this._internals?.form) {
                submitForm(this);
            }
            return;
        }
        this.focused = true;
    }
    _handlePageUp(e) {
        if (this._isSuggestionsFocused) {
            this.Suggestions.onPageUp(e);
        }
        else {
            e.preventDefault();
        }
    }
    _handlePageDown(e) {
        if (this._isSuggestionsFocused) {
            this.Suggestions.onPageDown(e);
        }
        else {
            e.preventDefault();
        }
    }
    _handleHome(e) {
        if (this._isSuggestionsFocused) {
            this.Suggestions.onHome(e);
        }
    }
    _handleEnd(e) {
        if (this._isSuggestionsFocused) {
            this.Suggestions.onEnd(e);
        }
    }
    _handleEscape() {
        const hasSuggestions = this.showSuggestions && !!this.Suggestions;
        const isOpen = hasSuggestions && this.open;
        const innerInput = this.getInputDOMRefSync();
        const isAutoCompleted = innerInput.selectionEnd - innerInput.selectionStart > 0;
        this.isTyping = false;
        if (!isOpen) {
            this.value = this.lastConfirmedValue ? this.lastConfirmedValue : this.previousValue;
            return;
        }
        if (isOpen && this.Suggestions._isItemOnTarget()) {
            // Restore the value.
            this.value = this.typedInValue || this.valueBeforeSelectionStart;
            this.focused = true;
            return;
        }
        if (isAutoCompleted) {
            this.value = this.typedInValue;
        }
        if (this._isValueStateFocused) {
            this._isValueStateFocused = false;
            this.focused = true;
        }
    }
    _onfocusin(e) {
        this.focused = true; // invalidating property
        if (!this._focusedAfterClear) {
            this.previousValue = this.value;
        }
        this.valueBeforeSelectionStart = this.value;
        this._inputIconFocused = !!e.target && e.target === this.querySelector("[ui5-icon]");
        this._focusedAfterClear = false;
    }
    /**
     * Called on "focusin" of the native input HTML Element.
     * **Note:** implemented in MultiInput, but used in the Input template.
     */
    innerFocusIn() { }
    _onfocusout(e) {
        const toBeFocused = e.relatedTarget;
        if (this.Suggestions?._getPicker().contains(toBeFocused) || this.getSlottedNodes("valueStateMessage").some(el => el.contains(toBeFocused))) {
            return;
        }
        this._keepInnerValue = false;
        this.focused = false; // invalidating property
        if (this.showClearIcon && !this._effectiveShowClearIcon) {
            this._clearIconClicked = false;
            this._handleChange();
        }
        this.open = false;
        this._clearPopoverFocusAndSelection();
        if (!this._clearIconClicked) {
            this.previousValue = "";
        }
        this.lastConfirmedValue = "";
        this.isTyping = false;
    }
    _clearPopoverFocusAndSelection() {
        if (!this.showSuggestions || !this.Suggestions) {
            return;
        }
        this._isValueStateFocused = false;
        this.hasSuggestionItemSelected = false;
        this.Suggestions._deselectItems();
        this.Suggestions._clearItemFocus();
    }
    _click() {
        if (isPhone() && !this.readonly && this.Suggestions) {
            this.blur();
            this.open = true;
        }
    }
    _handleChange() {
        if (this._clearIconClicked) {
            this._clearIconClicked = false;
            return;
        }
        if (this.previousValue !== this.getInputDOMRefSync().value) {
            this.fireEvent(INPUT_EVENTS.CHANGE);
            this.previousValue = this.value;
            this.typedInValue = this.value;
        }
    }
    _clear() {
        this.value = "";
        this.fireEvent(INPUT_EVENTS.INPUT, { inputType: "" });
        if (!this._isPhone) {
            this.fireResetSelectionChange();
            this.focus();
            this._focusedAfterClear = true;
        }
    }
    _iconMouseDown() {
        this._clearIconClicked = true;
    }
    _scroll(e) {
        this.fireEvent("suggestion-scroll", {
            scrollTop: e.detail.scrollTop,
            scrollContainer: e.detail.targetRef,
        });
    }
    _handleInput(e) {
        const inputDomRef = this.getInputDOMRefSync();
        const emptyValueFiredOnNumberInput = this.value && this.isTypeNumber && !inputDomRef.value;
        const eventType = e.inputType
            || e.detail.inputType
            || "";
        this._keepInnerValue = false;
        const allowedEventTypes = [
            "deleteWordBackward",
            "deleteWordForward",
            "deleteSoftLineBackward",
            "deleteSoftLineForward",
            "deleteEntireSoftLine",
            "deleteHardLineBackward",
            "deleteHardLineForward",
            "deleteByDrag",
            "deleteByCut",
            "deleteContent",
            "deleteContentBackward",
            "deleteContentForward",
            "historyUndo",
        ];
        this._shouldAutocomplete = !allowedEventTypes.includes(eventType) && !this.noTypeahead;
        if (e instanceof InputEvent) {
            // ---- Special cases of numeric Input ----
            // ---------------- Start -----------------
            // When the last character after the delimiter is removed.
            // In such cases, we want to skip the re-rendering of the
            // component as this leads to cursor repositioning and causes user experience issues.
            // There are few scenarios:
            // Example: type "123.4" and press BACKSPACE - the native input is firing event with the whole part as value (123).
            // Pressing BACKSPACE again will remove the delimiter and the native input will fire event with the whole part as value again (123).
            // Example: type "123.456", select/mark "456" and press BACKSPACE - the native input is firing event with the whole part as value (123).
            // Example: type "123.456", select/mark "123.456" and press BACKSPACE - the native input is firing event with empty value.
            const delimiterCase = this.isTypeNumber
                && (e.inputType === "deleteContentForward" || e.inputType === "deleteContentBackward")
                && !e.target.value.includes(".")
                && this.value.includes(".");
            // Handle special numeric notation with "e", example "12.5e12"
            const eNotationCase = emptyValueFiredOnNumberInput && e.data === "e";
            // Handle special numeric notation with "-", example "-3"
            // When pressing BACKSPACE, the native input fires event with empty value
            const minusRemovalCase = emptyValueFiredOnNumberInput
                && this.value.startsWith("-")
                && this.value.length === 2
                && (e.inputType === "deleteContentForward" || e.inputType === "deleteContentBackward");
            if (delimiterCase || eNotationCase || minusRemovalCase) {
                this.value = e.target.value;
                this._keepInnerValue = true;
            }
            // ----------------- End ------------------
        }
        if (e.target === inputDomRef) {
            this.focused = true;
            // stop the native event, as the semantic "input" would be fired.
            e.stopImmediatePropagation();
        }
        this.fireEventByAction(INPUT_ACTIONS.ACTION_ENTER, e);
        this.hasSuggestionItemSelected = false;
        this._isValueStateFocused = false;
        if (this.Suggestions) {
            this.Suggestions.updateSelectedItemPosition(-1);
        }
        this.isTyping = true;
    }
    _startsWithMatchingItems(str) {
        const textProp = this.suggestionItems[0].text ? "text" : "textContent";
        return StartsWith(str, this.suggestionItems, textProp);
    }
    _getFirstMatchingItem(current) {
        if (!this.suggestionItems.length) {
            return;
        }
        const matchingItems = this._startsWithMatchingItems(current).filter(item => !item.groupItem);
        if (matchingItems.length) {
            return matchingItems[0];
        }
    }
    _handleTypeAhead(item) {
        const value = item.text ? item.text : item.textContent || "";
        this._innerValue = value;
        this.value = value;
        this._performTextSelection = true;
        this._shouldAutocomplete = false;
    }
    _handleResize() {
        this._inputWidth = this.offsetWidth;
    }
    _updateAssociatedLabelsTexts() {
        this._associatedLabelsTexts = getAssociatedLabelForTexts(this);
        this._accessibleLabelsRefTexts = getAllAccessibleNameRefTexts(this);
    }
    _closePicker() {
        this.open = false;
    }
    _afterOpenPicker() {
        // Set initial focus to the native input
        if (isPhone()) {
            (this.getInputDOMRef()).focus();
        }
        this._handlePickerAfterOpen();
    }
    _afterClosePicker() {
        this.announceSelectedItem();
        // close device's keyboard and prevent further typing
        if (isPhone()) {
            this.blur();
            this.focused = false;
        }
        this.open = false;
        this.isTyping = false;
        if (this.hasSuggestionItemSelected) {
            this.focus();
        }
        this._handlePickerAfterClose();
    }
    _handleSuggestionItemPress(e) {
        this.Suggestions?.fnOnSuggestionItemPress(e);
    }
    _handleSelectionChange(e) {
        this.Suggestions?.fnOnSuggestionItemPress(e);
    }
    _handleItemMouseOver(e) {
        this.Suggestions?.fnOnSuggestionItemMouseOver(e);
    }
    _handleItemMouseOut(e) {
        this.Suggestions?.fnOnSuggestionItemMouseOut(e);
    }
    _handlePickerAfterOpen() {
        this.Suggestions?._onOpen();
        this.fireEvent("open", null, false, false);
    }
    _handlePickerAfterClose() {
        this.Suggestions?._onClose();
        this.fireEvent("close", null, false, false);
    }
    openValueStatePopover() {
        this.valueStateOpen = true;
    }
    closeValueStatePopover() {
        this.valueStateOpen = false;
    }
    _handleValueStatePopoverAfterClose() {
        this.valueStateOpen = false;
    }
    _getValueStatePopover() {
        return this.shadowRoot.querySelector("[ui5-popover]");
    }
    enableSuggestions() {
        if (this.Suggestions) {
            return;
        }
        const Suggestions = getFeature("InputSuggestions");
        if (Suggestions) {
            this.Suggestions = new Suggestions(this, "suggestionItems", true, false);
        }
        else {
            throw new Error(`You have to import "@ui5/webcomponents/dist/features/InputSuggestions.js" module to use ui5-input suggestions`);
        }
    }
    acceptSuggestion(item, keyboardUsed) {
        if (item.groupItem) {
            return;
        }
        const value = this.typedInValue || this.value;
        const itemText = item.text || item.textContent || ""; // keep textContent for compatibility
        const fireChange = keyboardUsed
            ? this.valueBeforeItemSelection !== itemText : value !== itemText;
        this.hasSuggestionItemSelected = true;
        if (fireChange) {
            this.value = itemText;
            this.valueBeforeItemSelection = itemText;
            this.lastConfirmedValue = itemText;
            this._performTextSelection = true;
            this.fireEvent(INPUT_EVENTS.CHANGE);
            // value might change in the change event handler
            this.typedInValue = this.value;
            this.previousValue = this.value;
        }
        this.valueBeforeSelectionStart = "";
        this.isTyping = false;
        this.open = false;
    }
    /**
     * Updates the input value on item select.
     * @param item The item that is on select
     */
    updateValueOnSelect(item) {
        const nonSelectable = item.type === "Inactive" || item.groupItem;
        const itemValue = nonSelectable ? this.valueBeforeSelectionStart : (item.effectiveTitle || item.textContent || "");
        this.value = itemValue;
        this._performTextSelection = true;
    }
    fireEventByAction(action, e) {
        if (this.disabled || this.readonly) {
            return;
        }
        const inputValue = this.getInputValue();
        const isUserInput = action === INPUT_ACTIONS.ACTION_ENTER;
        this.value = inputValue;
        this.typedInValue = inputValue;
        this.valueBeforeSelectionStart = inputValue;
        if (isUserInput) { // input
            this.fireEvent(INPUT_EVENTS.INPUT, { inputType: e.inputType });
            // Angular two way data binding
            this.fireEvent("value-changed");
            this.fireResetSelectionChange();
        }
    }
    getInputValue() {
        const domRef = this.getDomRef();
        if (domRef) {
            return (this.getInputDOMRef()).value;
        }
        return "";
    }
    getInputDOMRef() {
        if (isPhone() && this.Suggestions) {
            return this.Suggestions._getPicker().querySelector(".ui5-input-inner-phone");
        }
        return this.nativeInput;
    }
    getInputDOMRefSync() {
        if (isPhone() && this.Suggestions?._getPicker()) {
            return this.Suggestions._getPicker().querySelector(".ui5-input-inner-phone").shadowRoot.querySelector("input");
        }
        return this.nativeInput;
    }
    /**
     * Returns a reference to the native input element
     * @protected
     */
    get nativeInput() {
        const domRef = this.getDomRef();
        return domRef ? domRef.querySelector(`input`) : null;
    }
    get nativeInputWidth() {
        return this.nativeInput ? this.nativeInput.offsetWidth : 0;
    }
    getSuggestionByListItem(item) {
        const key = parseInt(item.getAttribute("data-ui5-key"));
        return this.suggestionItems[key];
    }
    /**
     * Returns if the suggestions popover is scrollable.
     * The method returns `Promise` that resolves to true,
     * if the popup is scrollable and false otherwise.
     */
    isSuggestionsScrollable() {
        if (!this.Suggestions) {
            return Promise.resolve(false);
        }
        return this.Suggestions._isScrollable();
    }
    /* Suggestions interface  */
    onItemMouseOver(e) {
        const item = e.target;
        const suggestion = this.getSuggestionByListItem(item);
        suggestion && suggestion.fireEvent("mouseover", {
            item: suggestion,
            targetRef: item,
        });
    }
    onItemMouseOut(e) {
        const item = e.target;
        const suggestion = this.getSuggestionByListItem(item);
        suggestion && suggestion.fireEvent("mouseout", {
            item: suggestion,
            targetRef: item,
        });
    }
    onItemMouseDown(e) {
        e.preventDefault();
    }
    onItemSelected(suggestionItem, listItem, keyboardUsed) {
        const shouldFireSelectionChange = !keyboardUsed && !listItem?.focused && this.valueBeforeItemSelection !== suggestionItem.text;
        if (shouldFireSelectionChange) {
            this.fireSelectionChange(suggestionItem, listItem, true);
        }
        this.acceptSuggestion(suggestionItem, keyboardUsed);
    }
    onItemSelect(item) {
        this.valueBeforeItemSelection = this.value;
        this.updateValueOnSelect(item);
        this.announceSelectedItem();
        this.fireSelectionChange(this.getSuggestionByListItem(item), item, true);
    }
    get valueStateTypeMappings() {
        return {
            "Positive": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_SUCCESS),
            "Information": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_INFORMATION),
            "Negative": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_ERROR),
            "Critical": Input_1.i18nBundle.getText(VALUE_STATE_TYPE_WARNING),
        };
    }
    valueStateTextMappings() {
        return {
            "Positive": Input_1.i18nBundle.getText(VALUE_STATE_SUCCESS),
            "Information": Input_1.i18nBundle.getText(VALUE_STATE_INFORMATION),
            "Negative": Input_1.i18nBundle.getText(VALUE_STATE_ERROR),
            "Critical": Input_1.i18nBundle.getText(VALUE_STATE_WARNING),
        };
    }
    announceSelectedItem() {
        const invisibleText = this.shadowRoot.querySelector(`#selectionText`);
        if (invisibleText) {
            invisibleText.textContent = this.itemSelectionAnnounce;
        }
    }
    fireSelectionChange(item, targetRef, isValueFromSuggestions) {
        if (this.Suggestions) {
            this.fireEvent(INPUT_EVENTS.SELECTION_CHANGE, { item, targetRef });
            this._isLatestValueFromSuggestions = isValueFromSuggestions;
        }
    }
    fireResetSelectionChange() {
        if (this._isLatestValueFromSuggestions) {
            this.fireSelectionChange(null, null, false);
        }
    }
    get _readonly() {
        return this.readonly && !this.disabled;
    }
    get _headerTitleText() {
        return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_TITLE);
    }
    get clearIconAccessibleName() {
        return Input_1.i18nBundle.getText(INPUT_CLEAR_ICON_ACC_NAME);
    }
    get inputType() {
        return this.type.toLowerCase();
    }
    get isTypeNumber() {
        return this.type === InputType.Number;
    }
    get suggestionsTextId() {
        return this.showSuggestions ? `suggestionsText` : "";
    }
    get valueStateTextId() {
        return this.hasValueState ? `valueStateDesc` : "";
    }
    get accInfo() {
        const ariaHasPopupDefault = this.showSuggestions ? "dialog" : undefined;
        const ariaAutoCompleteDefault = this.showSuggestions ? "list" : undefined;
        const ariaDescribedBy = this._inputAccInfo.ariaDescribedBy ? `${this.suggestionsTextId} ${this.valueStateTextId} ${this._inputAccInfo.ariaDescribedBy}`.trim() : `${this.suggestionsTextId} ${this.valueStateTextId}`.trim();
        const info = {
            "input": {
                "ariaRoledescription": this._inputAccInfo && (this._inputAccInfo.ariaRoledescription || undefined),
                "ariaDescribedBy": ariaDescribedBy || undefined,
                "ariaInvalid": this.valueState === ValueState.Negative ? "true" : undefined,
                "ariaHasPopup": this._inputAccInfo.ariaHasPopup ? this._inputAccInfo.ariaHasPopup : ariaHasPopupDefault,
                "ariaAutoComplete": this._inputAccInfo.ariaAutoComplete ? this._inputAccInfo.ariaAutoComplete : ariaAutoCompleteDefault,
                "role": this._inputAccInfo && this._inputAccInfo.role,
                "ariaControls": this._inputAccInfo && this._inputAccInfo.ariaControls,
                "ariaExpanded": this._inputAccInfo && this._inputAccInfo.ariaExpanded,
                "ariaDescription": this._inputAccInfo && this._inputAccInfo.ariaDescription,
                "ariaLabel": (this._inputAccInfo && this._inputAccInfo.ariaLabel) || this._accessibleLabelsRefTexts || this.accessibleName || this._associatedLabelsTexts || undefined,
            },
        };
        return info;
    }
    get nativeInputAttributes() {
        return {
            "min": this.isTypeNumber ? this._nativeInputAttributes.min : undefined,
            "max": this.isTypeNumber ? this._nativeInputAttributes.max : undefined,
            "step": this.isTypeNumber ? (this._nativeInputAttributes.step || "any") : undefined,
        };
    }
    get ariaValueStateHiddenText() {
        if (!this.hasValueState) {
            return;
        }
        const valueState = this.valueState !== ValueState.None ? this.valueStateTypeMappings[this.valueState] : "";
        if (this.shouldDisplayDefaultValueStateMessage) {
            return this.valueStateText ? `${valueState} ${this.valueStateText}` : valueState;
        }
        return `${valueState}`.concat(" ", this.valueStateMessage.map(el => el.textContent).join(" "));
    }
    get itemSelectionAnnounce() {
        return this.Suggestions ? this.Suggestions.itemSelectionAnnounce : "";
    }
    get iconsCount() {
        const slottedIconsCount = this.icon ? this.icon.length : 0;
        const clearIconCount = Number(this._effectiveShowClearIcon) ?? 0;
        return slottedIconsCount + clearIconCount;
    }
    get classes() {
        return {
            popover: {
                "ui5-suggestions-popover": this.showSuggestions,
                "ui5-popover-with-value-state-header-phone": this._isPhone && this.showSuggestions && this.hasValueStateMessage,
                "ui5-popover-with-value-state-header": !this._isPhone && this.showSuggestions && this.hasValueStateMessage,
            },
            popoverValueState: {
                "ui5-valuestatemessage-root": true,
                "ui5-valuestatemessage-header": true,
                "ui5-valuestatemessage--success": this.valueState === ValueState.Positive,
                "ui5-valuestatemessage--error": this.valueState === ValueState.Negative,
                "ui5-valuestatemessage--warning": this.valueState === ValueState.Critical,
                "ui5-valuestatemessage--information": this.valueState === ValueState.Information,
            },
        };
    }
    get styles() {
        const remSizeIxPx = parseInt(getComputedStyle(document.documentElement).fontSize);
        const stylesObject = {
            popoverHeader: {
                "max-width": this._inputWidth ? `${this._inputWidth}px` : "",
            },
            suggestionPopoverHeader: {
                "display": this._listWidth === 0 ? "none" : "inline-block",
                "width": this._listWidth ? `${this._listWidth}px` : "",
            },
            suggestionsPopover: {
                "min-width": this._inputWidth ? `${this._inputWidth}px` : "",
                "max-width": this._inputWidth && (this._inputWidth / remSizeIxPx) > 40 ? `${this._inputWidth}px` : "40rem",
            },
            innerInput: {
                "padding": "",
            },
        };
        return stylesObject;
    }
    get suggestionSeparators() {
        return "None";
    }
    get shouldDisplayOnlyValueStateMessage() {
        return this.hasValueStateMessage && !this.readonly && !this.open && this.focused;
    }
    get shouldDisplayDefaultValueStateMessage() {
        return !this.valueStateMessage.length && this.hasValueStateMessage;
    }
    get hasValueState() {
        return this.valueState !== ValueState.None;
    }
    get hasValueStateMessage() {
        return this.hasValueState && this.valueState !== ValueState.Positive
            && (!this._inputIconFocused // Handles the cases when valueStateMessage is forwarded (from datepicker e.g.)
                || !!(this._isPhone && this.Suggestions)); // Handles Input with suggestions on mobile
    }
    get valueStateText() {
        return this.valueState !== ValueState.None ? this.valueStateTextMappings()[this.valueState] : undefined;
    }
    get suggestionsText() {
        return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS);
    }
    get availableSuggestionsCount() {
        if (this.showSuggestions && (this.value || this.Suggestions.isOpened())) {
            const nonGroupItems = this.suggestionObjects.filter(item => !item.groupItem);
            switch (nonGroupItems.length) {
                case 0:
                    return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_NO_HIT);
                case 1:
                    return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_ONE_HIT);
                default:
                    return Input_1.i18nBundle.getText(INPUT_SUGGESTIONS_MORE_HITS, nonGroupItems.length);
            }
        }
        return undefined;
    }
    get step() {
        return this.isTypeNumber ? "any" : undefined;
    }
    get _isPhone() {
        return isPhone();
    }
    get _isSuggestionsFocused() {
        return !this.focused && this.Suggestions && this.Suggestions.isOpened();
    }
    /**
     * Returns the placeholder value.
     * @protected
     */
    get _placeholder() {
        return this.placeholder;
    }
    /**
     * This method is relevant for sap_horizon theme only
     */
    get _valueStateInputIcon() {
        const iconPerValueState = {
            Negative: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929L8.58579 10L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L10 8.58579L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L11.4142 10L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L10 11.4142L7.70711 13.7071Z" fill="#EE3939"/>`,
            Critical: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.8619 0.49298C11.6823 0.187541 11.3544 0 11 0C10.6456 0 10.3177 0.187541 10.1381 0.49298L0.138066 17.493C-0.0438112 17.8022 -0.0461447 18.1851 0.13195 18.4965C0.310046 18.8079 0.641283 19 1 19H21C21.3587 19 21.69 18.8079 21.868 18.4965C22.0461 18.1851 22.0438 17.8022 21.8619 17.493L11.8619 0.49298ZM11 6C11.5523 6 12 6.44772 12 7V10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10V7C10 6.44772 10.4477 6 11 6ZM11 16C11.8284 16 12.5 15.3284 12.5 14.5C12.5 13.6716 11.8284 13 11 13C10.1716 13 9.5 13.6716 9.5 14.5C9.5 15.3284 10.1716 16 11 16Z" fill="#F58B00"/>`,
            Positive: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L8 11.5858L6.70711 10.2929C6.31658 9.90237 5.68342 9.90237 5.29289 10.2929C4.90237 10.6834 4.90237 11.3166 5.29289 11.7071L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289Z" fill="#36A41D"/>`,
            Information: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H15C16.6569 18 18 16.6569 18 15V3C18 1.34315 16.6569 0 15 0H3ZM9 6.5C9.82843 6.5 10.5 5.82843 10.5 5C10.5 4.17157 9.82843 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5C7.5 5.82843 8.17157 6.5 9 6.5ZM9 8.5C9.55228 8.5 10 8.94772 10 9.5V13.5C10 14.0523 9.55228 14.5 9 14.5C8.44771 14.5 8 14.0523 8 13.5V9.5C8 8.94772 8.44771 8.5 9 8.5Z" fill="#1B90FF"/>`,
        };
        if (this.valueState !== ValueState.None) {
            return `
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none">
				${iconPerValueState[this.valueState]};
			</svg>
			`;
        }
        return "";
    }
    get _valueStatePopoverHorizontalAlign() {
        return this.effectiveDir !== "rtl" ? "Start" : "End";
    }
    /**
     * This method is relevant for sap_horizon theme only
     */
    get _valueStateMessageInputIcon() {
        const iconPerValueState = {
            Negative: "error",
            Critical: "alert",
            Positive: "sys-enter-2",
            Information: "information",
        };
        return this.valueState !== ValueState.None ? iconPerValueState[this.valueState] : "";
    }
    /**
     * Returns the caret position inside the native input
     * @protected
     */
    getCaretPosition() {
        return getCaretPosition(this.nativeInput);
    }
    /**
     * Sets the caret to a certain position inside the native input
     * @protected
     */
    setCaretPosition(pos) {
        setCaretPosition(this.nativeInput, pos);
    }
    /**
     * Removes the fractional part of floating-point number.
     * @param value the numeric value of Input of type "Number"
     */
    removeFractionalPart(value) {
        if (value.includes(".")) {
            return value.slice(0, value.indexOf("."));
        }
        if (value.includes(",")) {
            return value.slice(0, value.indexOf(","));
        }
        return value;
    }
    static async onDefine() {
        const Suggestions = getFeature("InputSuggestions");
        [Input_1.i18nBundle] = await Promise.all([
            getI18nBundle("@ui5/webcomponents"),
            Suggestions ? Suggestions.init() : Promise.resolve(),
        ]);
    }
};
__decorate([
    property({ type: Boolean })
], Input.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "highlight", void 0);
__decorate([
    property()
], Input.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "noTypeahead", void 0);
__decorate([
    property({ type: InputType, defaultValue: InputType.Text })
], Input.prototype, "type", void 0);
__decorate([
    property()
], Input.prototype, "value", void 0);
__decorate([
    property({ noAttribute: true })
], Input.prototype, "_innerValue", void 0);
__decorate([
    property({ type: ValueState, defaultValue: ValueState.None })
], Input.prototype, "valueState", void 0);
__decorate([
    property()
], Input.prototype, "name", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "showSuggestions", void 0);
__decorate([
    property({ validator: Integer })
], Input.prototype, "maxlength", void 0);
__decorate([
    property()
], Input.prototype, "accessibleName", void 0);
__decorate([
    property({ defaultValue: "" })
], Input.prototype, "accessibleNameRef", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "showClearIcon", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "open", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "_effectiveShowClearIcon", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "focused", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "valueStateOpen", void 0);
__decorate([
    property({ type: Boolean })
], Input.prototype, "_isValueStateFocused", void 0);
__decorate([
    property({ type: Object, noAttribute: true })
], Input.prototype, "_inputAccInfo", void 0);
__decorate([
    property({ type: Object, noAttribute: true })
], Input.prototype, "_nativeInputAttributes", void 0);
__decorate([
    property({ validator: Integer })
], Input.prototype, "_inputWidth", void 0);
__decorate([
    property({ validator: Integer })
], Input.prototype, "_listWidth", void 0);
__decorate([
    property({ type: Boolean, noAttribute: true })
], Input.prototype, "_inputIconFocused", void 0);
__decorate([
    property({ type: String, noAttribute: true, defaultValue: undefined })
], Input.prototype, "_associatedLabelsTexts", void 0);
__decorate([
    property({ type: String, noAttribute: true, defaultValue: undefined })
], Input.prototype, "_accessibleLabelsRefTexts", void 0);
__decorate([
    slot({ type: HTMLElement, "default": true })
], Input.prototype, "suggestionItems", void 0);
__decorate([
    slot()
], Input.prototype, "icon", void 0);
__decorate([
    slot({
        type: HTMLElement,
        invalidateOnChildChange: true,
    })
], Input.prototype, "valueStateMessage", void 0);
Input = Input_1 = __decorate([
    customElement({
        tag: "ui5-input",
        languageAware: true,
        formAssociated: true,
        renderer: litRender,
        template: InputTemplate,
        styles: [
            inputStyles,
            ResponsivePopoverCommonCss,
            ValueStateMessageCss,
            SuggestionsCss,
        ],
        get dependencies() {
            const Suggestions = getFeature("InputSuggestions");
            return [Popover, ResponsivePopover, Icon].concat(Suggestions ? Suggestions.dependencies : []);
        },
    })
    /**
     * Fired when the input operation has finished by pressing Enter or on focusout.
     * @public
     */
    ,
    event("change")
    /**
     * Fired when the value of the component changes at each keystroke,
     * and when a suggestion item has been selected.
     * @public
     */
    ,
    event("input")
    /**
     * Fired when the user navigates to a suggestion item via the ARROW keys,
     * as a preview, before the final selection.
     * @param {HTMLElement} item The previewed suggestion item.
     * @param {HTMLElement} targetRef The DOM ref of the suggestion item.
     * @public
     * @since 2.0.0
     */
    ,
    event("selection-change", {
        detail: {
            /**
            * @public
            */
            item: { type: HTMLElement },
            /**
            * @public
            */
            targetRef: { type: HTMLElement },
        },
    })
    /**
     * Fired when the user scrolls the suggestion popover.
     * @param {Integer} scrollTop The current scroll position.
     * @param {HTMLElement} scrollContainer The scroll container.
     * @protected
     * @since 1.0.0-rc.8
     */
    ,
    event("suggestion-scroll", {
        detail: {
            /**
            * @public
            */
            scrollTop: { type: Integer },
            /**
            * @public
            */
            scrollContainer: { type: HTMLElement },
        },
    })
    /**
     * Fired when the suggestions picker is open.
     * @public
     * @since 2.0.0
     */
    ,
    event("open")
    /**
     * Fired when the suggestions picker is closed.
     * @public
     * @since 2.0.0
     */
    ,
    event("close")
], Input);
Input.define();
export default Input;
//# sourceMappingURL=Input.js.map