var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Versioning_1;
import ToolbarItem from "@ui5/webcomponents/dist/ToolbarItem.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event-strict.js";
import jsxRenderer from "@ui5/webcomponents-base/dist/renderer/JsxRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { VERSIONING_PREVIOUS_BUTTON_TEXT, VERSIONING_NEXT_BUTTON_TEXT, VERSIONING_PREVIOUS_BUTTON_TOOLTIP, VERSIONING_NEXT_BUTTON_TOOLTIP, } from "./generated/i18n/i18n-defaults.js";
// UI5 Components
import Button from "@ui5/webcomponents/dist/Button.js";
import Label from "@ui5/webcomponents/dist/Label.js";
import ToolbarButton from "@ui5/webcomponents/dist/ToolbarButton.js";
import ToolbarLabel from "./ToolbarLabel.js";
// Types
import VersioningTemplate from "./VersioningTemplate.js";
// Styles
import VersioningCss from "./generated/themes/Versioning.css.js";
// Icons
import "@ui5/webcomponents-icons/dist/navigation-left-arrow.js";
import "@ui5/webcomponents-icons/dist/navigation-right-arrow.js";
var LastClickedButton;
(function (LastClickedButton) {
    LastClickedButton["None"] = "";
    LastClickedButton["Previous"] = "previous";
    LastClickedButton["Next"] = "next";
})(LastClickedButton || (LastClickedButton = {}));
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-ai-versioning` component provides navigation controls for AI-generated content versions.
 * It displays the current version index and total versions, with previous/next navigation buttons.
 * This component extends ToolbarItem to participate in toolbar overflow behavior as a single unit.
 *
 * ### Structure
 * The `ui5-ai-versioning` consists of the following elements:
 * - Previous Button: Navigates to the previous version (disabled when at first version)
 * - Version Counter: Shows current version / total versions (e.g., "2 / 5")
 * - Next Button: Navigates to the nex
 * t version (disabled when at last version)
 *
 * ### Focus Management
 * The component automatically manages focus when users reach version boundaries,
 * moving focus to the available navigation button when one becomes disabled.
 *
 * ### Responsive Behavior
 * When used in a toolbar, the entire versioning component (buttons + label) will overflow
 * together as a single unit when there is insufficient space.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-ai/dist/Versioning.js";`
 *
 * @constructor
 * @extends ToolbarItem
 * @since 2.16.0
 * @private
 */
let Versioning = Versioning_1 = class Versioning extends ToolbarItem {
    constructor() {
        super(...arguments);
        /**
         * Indicates the index of the currently displayed result version.
         *
         * This property represents the current position in the version history.
         * @default 0
         * @public
         */
        this.currentStep = 0;
        /**
         * The total number of available result versions.
         *
         * Note: Versioning is hidden if the value is `0`.
         *
         * @default 0
         * @public
         */
        this.totalSteps = 0;
        this._previousCurrentStep = 0;
        this._previousTotalSteps = 0;
        this._lastClickedButton = LastClickedButton.None;
    }
    static async onDefine() {
        Versioning_1.i18nBundle = await getI18nBundle("@ui5/webcomponents-ai");
    }
    onAfterRendering() {
        this._manageFocus();
        this._previousCurrentStep = this.currentStep;
        this._previousTotalSteps = this.totalSteps;
        this._lastClickedButton = LastClickedButton.None;
    }
    /**
     * Manages focus when navigation buttons become disabled/enabled.
     * Automatically moves focus to available button when user reaches boundaries.
     * @private
     */
    _manageFocus() {
        if (!this.shadowRoot) {
            return;
        }
        const previousButton = this.shadowRoot.querySelector("[data-ui5-versioning-button=\"previous\"]");
        const nextButton = this.shadowRoot.querySelector("[data-ui5-versioning-button=\"next\"]");
        if (!previousButton || !nextButton) {
            return;
        }
        const isPreviousDisabled = this.currentStep <= 1;
        const isNextDisabled = this.currentStep === this.totalSteps;
        const wasPreviousDisabled = this._previousCurrentStep <= 1;
        const wasNextDisabled = this._previousCurrentStep === this._previousTotalSteps;
        if (isPreviousDisabled && !wasPreviousDisabled && !isNextDisabled && this._lastClickedButton === LastClickedButton.Previous && nextButton instanceof HTMLElement) {
            nextButton.focus();
            this._lastClickedButton = LastClickedButton.None;
        }
        else if (isNextDisabled && !wasNextDisabled && !isPreviousDisabled && this._lastClickedButton === LastClickedButton.Next && previousButton instanceof HTMLElement) {
            previousButton.focus();
            this._lastClickedButton = LastClickedButton.None;
        }
    }
    handlePreviousVersionClick() {
        this._lastClickedButton = LastClickedButton.Previous;
        this.fireDecoratorEvent("version-change", { backwards: true });
    }
    handleNextVersionClick() {
        this._lastClickedButton = LastClickedButton.Next;
        this.fireDecoratorEvent("version-change", { backwards: false });
    }
    get _previousButtonAccessibleName() {
        return Versioning_1.i18nBundle.getText(VERSIONING_PREVIOUS_BUTTON_TEXT);
    }
    get _nextButtonAccessibleName() {
        return Versioning_1.i18nBundle.getText(VERSIONING_NEXT_BUTTON_TEXT);
    }
    get _previousButtonTooltip() {
        return Versioning_1.i18nBundle.getText(VERSIONING_PREVIOUS_BUTTON_TOOLTIP);
    }
    get _nextButtonTooltip() {
        return Versioning_1.i18nBundle.getText(VERSIONING_NEXT_BUTTON_TOOLTIP);
    }
    /**
     * @override
     */
    get classes() {
        return {
            root: {
                ...super.classes.root,
                "ui5-ai-versioning": true,
            },
        };
    }
};
__decorate([
    property({ type: Number })
], Versioning.prototype, "currentStep", void 0);
__decorate([
    property({ type: Number })
], Versioning.prototype, "totalSteps", void 0);
Versioning = Versioning_1 = __decorate([
    customElement({
        tag: "ui5-ai-versioning",
        renderer: jsxRenderer,
        styles: VersioningCss,
        template: VersioningTemplate,
        dependencies: [
            Button,
            Label,
            ToolbarButton,
            ToolbarLabel,
        ],
    })
    /**
     * Fired when the user clicks on version navigation buttons.
     *
     * @public
     */
    ,
    event("version-change")
], Versioning);
Versioning.define();
export default Versioning;
//# sourceMappingURL=Versioning.js.map