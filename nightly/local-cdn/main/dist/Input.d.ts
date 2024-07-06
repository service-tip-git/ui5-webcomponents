import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type { ClassMap } from "@ui5/webcomponents-base/dist/types.js";
import type { ResizeObserverCallback } from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type { IFormInputElement } from "@ui5/webcomponents-base/dist/features/InputElementsFormSupport.js";
import "@ui5/webcomponents-icons/dist/decline.js";
import "@ui5/webcomponents-icons/dist/not-editable.js";
import "@ui5/webcomponents-icons/dist/error.js";
import "@ui5/webcomponents-icons/dist/alert.js";
import "@ui5/webcomponents-icons/dist/sys-enter-2.js";
import "@ui5/webcomponents-icons/dist/information.js";
import type SuggestionItem from "./SuggestionItem.js";
import type { SuggestionComponent } from "./features/InputSuggestions.js";
import type InputSuggestions from "./features/InputSuggestions.js";
import type { PopupScrollEventDetail } from "./Popup.js";
import InputType from "./types/InputType.js";
import Popover from "./Popover.js";
import type { IIcon } from "./Icon.js";
import type PopoverHorizontalAlign from "./types/PopoverHorizontalAlign.js";
import type { ListItemClickEventDetail, ListSelectionChangeEventDetail } from "./List.js";
/**
 * Interface for components that represent a suggestion item, usable in `ui5-input`
 * @public
 */
interface IInputSuggestionItem extends UI5Element {
    focused: boolean;
    additionalText?: string;
    items?: IInputSuggestionItem[];
}
interface IInputSuggestionItemSelectable extends IInputSuggestionItem {
    text?: string;
    selected: boolean;
}
type NativeInputAttributes = {
    min?: number;
    max?: number;
    step?: number;
};
type AccInfo = {
    ariaRoledescription?: string;
    ariaDescribedBy?: string;
    ariaHasPopup?: string;
    ariaAutoComplete?: string;
    role?: string;
    ariaControls?: string;
    ariaExpanded?: string;
    ariaDescription?: string;
    ariaLabel?: string;
};
declare enum INPUT_ACTIONS {
    ACTION_ENTER = "enter",
    ACTION_USER_INPUT = "input"
}
type InputEventDetail = {
    inputType: string;
};
type InputSelectionChangeEventDetail = {
    item: IInputSuggestionItem | null;
};
type InputSuggestionScrollEventDetail = {
    scrollTop: number;
    scrollContainer: HTMLElement;
};
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
declare class Input extends UI5Element implements SuggestionComponent, IFormInputElement {
    /**
     * Defines whether the component is in disabled state.
     *
     * **Note:** A disabled component is completely noninteractive.
     * @default false
     * @public
     */
    disabled: boolean;
    /**
     * Defines if characters within the suggestions are to be highlighted
     * in case the input value matches parts of the suggestions text.
     *
     * **Note:** takes effect when `showSuggestions` is set to `true`
     * @default false
     * @private
     * @since 1.0.0-rc.8
     */
    highlight: boolean;
    /**
     * Defines a short hint intended to aid the user with data entry when the
     * component has no value.
     * @default undefined
     * @public
     */
    placeholder?: string;
    /**
     * Defines whether the component is read-only.
     *
     * **Note:** A read-only component is not editable,
     * but still provides visual feedback upon user interaction.
     * @default false
     * @public
     */
    readonly: boolean;
    /**
     * Defines whether the component is required.
     * @default false
     * @public
     * @since 1.0.0-rc.3
     */
    required: boolean;
    /**
     * Defines whether the value will be autcompleted to match an item
     * @default false
     * @public
     * @since 1.4.0
     */
    noTypeahead: boolean;
    /**
     * Defines the HTML type of the component.
     *
     * **Notes:**
     *
     * - The particular effect of this property differs depending on the browser
     * and the current language settings, especially for type `Number`.
     * - The property is mostly intended to be used with touch devices
     * that use different soft keyboard layouts depending on the given input type.
     * @default "Text"
     * @public
     */
    type: `${InputType}`;
    /**
     * Defines the value of the component.
     *
     * **Note:** The property is updated upon typing.
     * @default ""
     * @formEvents change input
     * @formProperty
     * @public
     */
    value: string;
    /**
     * Defines the inner stored value of the component.
     *
     * **Note:** The property is updated upon typing. In some special cases the old value is kept (e.g. deleting the value after the dot in a float)
     * @default ""
     * @private
     */
    _innerValue: string;
    /**
     * Defines the value state of the component.
     * @default "None"
     * @public
     */
    valueState: `${ValueState}`;
    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * @default undefined
     * @public
     */
    name?: string;
    /**
     * Defines whether the component should show suggestions, if such are present.
     *
     * **Note:** You need to import the `InputSuggestions` module
     * from `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.
     * @default false
     * @public
     */
    showSuggestions: boolean;
    /**
     * Sets the maximum number of characters available in the input field.
     *
     * **Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.
     * @default undefined
     * @since 1.0.0-rc.5
     * @public
     */
    maxlength?: number;
    /**
     * Defines the accessible ARIA name of the component.
     * @default undefined
     * @public
     * @since 1.0.0-rc.15
     */
    accessibleName?: string;
    /**
     * Receives id(or many ids) of the elements that label the input.
     * @default undefined
     * @public
     * @since 1.0.0-rc.15
     */
    accessibleNameRef?: string;
    /**
     * Defines whether the clear icon of the input will be shown.
     * @default false
     * @public
     * @since 1.2.0
     */
    showClearIcon: boolean;
    /**
     * Defines whether the suggestions picker is open.
     * The picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.
     * The picker will close automatically and `close` event will be fired if the input is not in the viewport.
     * @default false
     * @public
     * @since 2.0.0
     */
    open: boolean;
    /**
     * Defines whether the clear icon is visible.
     * @default false
     * @private
     * @since 1.2.0
     */
    _effectiveShowClearIcon: boolean;
    /**
     * @private
     */
    focused: boolean;
    valueStateOpen: boolean;
    /**
     * Indicates whether the visual focus is on the value state header
     * @private
     */
    _isValueStateFocused: boolean;
    _inputAccInfo: AccInfo;
    _nativeInputAttributes: NativeInputAttributes;
    _inputWidth?: number;
    _listWidth?: number;
    _inputIconFocused: boolean;
    /**
     * Constantly updated value of texts collected from the associated labels
     * @private
     */
    _associatedLabelsTexts?: string;
    /**
     * Constantly updated value of texts collected from the accessibleNameRef elements
     * @private
     */
    _accessibleLabelsRefTexts?: string;
    /**
     * Defines the suggestion items.
     *
     * **Note:** The suggestions would be displayed only if the `showSuggestions`
     * property is set to `true`.
     *
     * **Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.
     *
     * **Note:** Importing the Input Suggestions Support feature:
     *
     * `import "@ui5/webcomponents/dist/features/InputSuggestions.js";`
     *
     * automatically imports the `<ui5-suggestion-item>` and `<ui5-suggestion-item-group>` for your convenience.
     * @public
     */
    suggestionItems: Array<IInputSuggestionItem>;
    /**
     * Defines the icon to be displayed in the component.
     * @public
     */
    icon: Array<IIcon>;
    /**
     * Defines the value state message that will be displayed as pop up under the component.
     * The value state message slot should contain only one root element.
     *
     * **Note:** If not specified, a default text (in the respective language) will be displayed.
     *
     * **Note:** The `valueStateMessage` would be displayed,
     * when the component is in `Information`, `Warning` or `Error` value state.
     *
     * **Note:** If the component has `suggestionItems`,
     * the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
     * @since 1.0.0-rc.6
     * @public
     */
    valueStateMessage: Array<HTMLElement>;
    hasSuggestionItemSelected: boolean;
    valueBeforeItemSelection: string;
    valueBeforeSelectionStart: string;
    previousValue: string;
    firstRendering: boolean;
    typedInValue: string;
    lastConfirmedValue: string;
    isTyping: boolean;
    _handleResizeBound: ResizeObserverCallback;
    _keepInnerValue: boolean;
    _shouldAutocomplete?: boolean;
    _keyDown?: boolean;
    _isKeyNavigation?: boolean;
    Suggestions?: InputSuggestions;
    _selectedText?: string;
    _clearIconClicked?: boolean;
    _focusedAfterClear: boolean;
    _changeToBeFired?: boolean;
    _performTextSelection?: boolean;
    _isLatestValueFromSuggestions: boolean;
    static i18nBundle: I18nBundle;
    get formValidityMessage(): string;
    get formValidity(): ValidityStateFlags;
    formElementAnchor(): Promise<HTMLElement | undefined>;
    get formFormattedValue(): FormData | string | null;
    constructor();
    onEnterDOM(): void;
    onExitDOM(): void;
    _highlightSuggestionItem(item: SuggestionItem): void;
    _isGroupItem(item: IInputSuggestionItem): boolean;
    onBeforeRendering(): void;
    onAfterRendering(): void;
    _onkeydown(e: KeyboardEvent): void;
    _onkeyup(e: KeyboardEvent): void;
    _handleUp(e: KeyboardEvent): void;
    _handleDown(e: KeyboardEvent): void;
    _handleSpace(e: KeyboardEvent): void;
    _handleTab(): void;
    _handleEnter(e: KeyboardEvent): void;
    _handlePageUp(e: KeyboardEvent): void;
    _handlePageDown(e: KeyboardEvent): void;
    _handleHome(e: KeyboardEvent): void;
    _handleEnd(e: KeyboardEvent): void;
    _handleEscape(): void;
    _onfocusin(e: FocusEvent): void;
    /**
     * Called on "focusin" of the native input HTML Element.
     * **Note:** implemented in MultiInput, but used in the Input template.
     */
    innerFocusIn(): void | undefined;
    _onfocusout(e: FocusEvent): void;
    _clearPopoverFocusAndSelection(): void;
    _click(): void;
    _handleChange(): void;
    _clear(): void;
    _iconMouseDown(): void;
    _scroll(e: CustomEvent<PopupScrollEventDetail>): void;
    _handleInput(e: InputEvent | CustomEvent<InputEventDetail>): void;
    _startsWithMatchingItems(str: string): Array<IInputSuggestionItemSelectable>;
    _getFirstMatchingItem(current: string): IInputSuggestionItemSelectable | undefined;
    _handleSelectionChange(e: CustomEvent<ListSelectionChangeEventDetail>): void;
    _handleTypeAhead(item: IInputSuggestionItemSelectable): void;
    _handleResize(): void;
    _updateAssociatedLabelsTexts(): void;
    _closePicker(): void;
    _afterOpenPicker(): void;
    _afterClosePicker(): void;
    _handlePickerAfterOpen(): void;
    _handlePickerAfterClose(): void;
    openValueStatePopover(): void;
    closeValueStatePopover(): void;
    _handleValueStatePopoverAfterClose(): void;
    _getValueStatePopover(): Popover;
    enableSuggestions(): void;
    acceptSuggestion(item: IInputSuggestionItemSelectable, keyboardUsed: boolean): void;
    /**
     * Updates the input value on item select.
     * @param item The item that is on select
     */
    updateValueOnSelect(item: IInputSuggestionItem): void;
    fireEventByAction(action: INPUT_ACTIONS, e: InputEvent): void;
    getInputValue(): string;
    getInputDOMRef(): HTMLInputElement | Input | null;
    getInputDOMRefSync(): HTMLInputElement | null;
    /**
     * Returns a reference to the native input element
     * @protected
     */
    get nativeInput(): HTMLInputElement | null;
    get nativeInputWidth(): number;
    /**
     * Returns if the suggestions popover is scrollable.
     * The method returns `Promise` that resolves to true,
     * if the popup is scrollable and false otherwise.
     */
    isSuggestionsScrollable(): boolean | Promise<boolean>;
    onItemMouseDown(e: MouseEvent): void;
    onItemSelected(suggestionItem: IInputSuggestionItemSelectable, keyboardUsed: boolean): void;
    _handleSuggestionItemPress(e: CustomEvent<ListItemClickEventDetail>): void;
    onItemSelect(item: IInputSuggestionItem): void;
    get _flattenItems(): Array<IInputSuggestionItem>;
    get _selectableItems(): Array<IInputSuggestionItemSelectable>;
    get valueStateTypeMappings(): {
        Positive: string;
        Information: string;
        Negative: string;
        Critical: string;
    };
    valueStateTextMappings(): {
        Positive: string;
        Information: string;
        Negative: string;
        Critical: string;
    };
    announceSelectedItem(): void;
    fireSelectionChange(item: IInputSuggestionItem | null, isValueFromSuggestions: boolean): void;
    fireResetSelectionChange(): void;
    get _readonly(): boolean;
    get _headerTitleText(): string;
    get clearIconAccessibleName(): string;
    get inputType(): string;
    get isTypeNumber(): boolean;
    get suggestionsTextId(): "" | "suggestionsText";
    get valueStateTextId(): "" | "valueStateDesc";
    get accInfo(): {
        input: {
            ariaRoledescription: string | undefined;
            ariaDescribedBy: string | undefined;
            ariaInvalid: string | undefined;
            ariaHasPopup: string | undefined;
            ariaAutoComplete: string | undefined;
            role: string | undefined;
            ariaControls: string | undefined;
            ariaExpanded: string | undefined;
            ariaDescription: string | undefined;
            ariaLabel: string | undefined;
        };
    };
    get nativeInputAttributes(): {
        min: number | undefined;
        max: number | undefined;
        step: string | number | undefined;
    };
    get ariaValueStateHiddenText(): string | undefined;
    get itemSelectionAnnounce(): string;
    get iconsCount(): number;
    get classes(): ClassMap;
    get styles(): {
        popoverHeader: {
            "max-width": string;
        };
        suggestionPopoverHeader: {
            display: string;
            width: string;
        };
        suggestionsPopover: {
            "min-width": string;
            "max-width": string;
        };
        innerInput: {
            padding: string;
        };
    };
    get suggestionSeparators(): string;
    get shouldDisplayOnlyValueStateMessage(): boolean;
    get shouldDisplayDefaultValueStateMessage(): boolean;
    get hasValueState(): boolean;
    get hasValueStateMessage(): boolean;
    get valueStateText(): string | undefined;
    get suggestionsText(): string;
    get availableSuggestionsCount(): string | undefined;
    get step(): "any" | undefined;
    get _isPhone(): boolean;
    get _isSuggestionsFocused(): boolean | undefined;
    /**
     * Returns the placeholder value.
     * @protected
     */
    get _placeholder(): string | undefined;
    /**
     * This method is relevant for sap_horizon theme only
     */
    get _valueStateInputIcon(): string;
    get _valueStatePopoverHorizontalAlign(): `${PopoverHorizontalAlign}`;
    /**
     * This method is relevant for sap_horizon theme only
     */
    get _valueStateMessageInputIcon(): string;
    /**
     * Returns the caret position inside the native input
     * @protected
     */
    getCaretPosition(): number | null;
    /**
     * Sets the caret to a certain position inside the native input
     * @protected
     */
    setCaretPosition(pos: number | null): void;
    /**
     * Removes the fractional part of floating-point number.
     * @param value the numeric value of Input of type "Number"
     */
    removeFractionalPart(value: string): string;
    static onDefine(): Promise<void>;
}
export default Input;
export type { IInputSuggestionItem, IInputSuggestionItemSelectable, InputSuggestionScrollEventDetail, InputSelectionChangeEventDetail, InputEventDetail, };
