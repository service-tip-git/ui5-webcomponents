var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WritingAssistant_1;
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event-strict.js";
import { i18n } from "@ui5/webcomponents-base/dist/decorators.js";
import jsxRenderer from "@ui5/webcomponents-base/dist/renderer/JsxRenderer.js";
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import announce from "@ui5/webcomponents-base/dist/util/InvisibleMessage.js";
import { WRITING_ASSISTANT_LABEL, VERSIONING_PREVIOUS_BUTTON_TEXT, VERSIONING_NEXT_BUTTON_TEXT, WRITING_ASSISTANT_GENERATING_ANNOUNCEMENT, WRITING_ASSISTANT_TOOLBAR_ACCESSIBLE_NAME, WRITING_ASSISTANT_BUTTON_ACCESSIBLE_NAME, WRITING_ASSISTANT_BUTTON_TOOLTIP, } from "./generated/i18n/i18n-defaults.js";
// Styles
import WritingAssistantCss from "./generated/themes/WritingAssistant.css.js";
// Templates
import WritingAssistantTemplate from "./WritingAssistantTemplate.js";
import Versioning from "./Versioning.js";
import ToolbarLabel from "./ToolbarLabel.js";
// UI5 Components
import Toolbar from "@ui5/webcomponents/dist/Toolbar.js";
import ToolbarSpacer from "@ui5/webcomponents/dist/ToolbarSpacer.js";
import ToolbarButton from "@ui5/webcomponents/dist/ToolbarButton.js";
// Icons
import "@ui5/webcomponents-icons/dist/ai.js";
import "@ui5/webcomponents-icons/dist/stop.js";
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-ai-textarea-toolbar` component provides a specialized toolbar for AI TextArea functionality.
 * It manages different states of the AI assistant and provides version navigation capabilities.
 *
 * ### Structure
 * The `ui5-ai-textarea-toolbar` consists of the following elements:
 * - AI Generate Button: Triggers AI text generation or stops ongoing generation
 * - Version Navigation: Allows navigation between multiple AI-generated results
 * - Action Label: Displays the current AI action being performed
 *
 * ### ES6 Module Import
 *
 * `import "@sap-webcomponents/ai/dist/WritingAssistant.js";`
 *
 * @constructor
 * @extends UI5Element
 * @since 2.16.0
 * @private
 */
let WritingAssistant = WritingAssistant_1 = class WritingAssistant extends UI5Element {
    constructor() {
        super(...arguments);
        /**
         * Defines whether the Writing Assistant is currently loading.
         *
         * When `true`, indicates that an AI action is in progress.
         *
         * @default false
         */
        this.loading = false;
        /**
         * Defines the action text of the AI Writing Assistant.
         *
         * This text is displayed in the toolbar to indicate the current or last
         * performed AI action (e.g., "Generated text", "Simplified text").
         *
         * @default ""
         * @public
         */
        this.actionText = "";
        /**
         * Indicates the index of the currently displayed result version.
         *
         * The index is **1-based** (i.e. `1` represents the first result).
         * This property is synchronized with the parent AI TextArea component.
         *
         * @default 1
         * @public
         * @since 2.16.0
         */
        this.currentVersionIndex = 1;
        /**
         * Indicates the total number of result versions available.
         *
         * This property determines whether version navigation controls are displayed.
         * When totalVersions > 1, previous/next buttons become available.
         *
         * @default 1
         * @public
         */
        this.totalVersions = 1;
    }
    /**
     * Handles the version change event from the versioning component.
     */
    handleVersionChange(e) {
        this.fireDecoratorEvent("version-change", { backwards: e.detail.backwards });
    }
    /**
     * Handles the click event for the AI generate button.
     * Toggles between generate and stop states based on current button state.
     *
     * @public
     */
    handleButtonClick(e) {
        const target = e.target;
        if (target?.dataset?.state === "generating") {
            this.fireDecoratorEvent("stop-generation");
        }
        else {
            this.fireDecoratorEvent("button-click", { clickTarget: target });
            announce(WritingAssistant_1.i18nBundleAi.getText(WRITING_ASSISTANT_GENERATING_ANNOUNCEMENT), "Polite");
        }
    }
    get _ariaLabel() {
        return WritingAssistant_1.i18nBundleAi.getText(WRITING_ASSISTANT_LABEL);
    }
    get _previousButtonAccessibleName() {
        return WritingAssistant_1.i18nBundleAi.getText(VERSIONING_PREVIOUS_BUTTON_TEXT);
    }
    get _nextButtonAccessibleName() {
        return WritingAssistant_1.i18nBundleAi.getText(VERSIONING_NEXT_BUTTON_TEXT);
    }
    get _toolbarAccessibleName() {
        return WritingAssistant_1.i18nBundleAi.getText(WRITING_ASSISTANT_TOOLBAR_ACCESSIBLE_NAME);
    }
    get _buttonAccessibleName() {
        return WritingAssistant_1.i18nBundleAi.getText(WRITING_ASSISTANT_BUTTON_ACCESSIBLE_NAME);
    }
    get _buttonTooltip() {
        return WritingAssistant_1.i18nBundleAi.getText(WRITING_ASSISTANT_BUTTON_TOOLTIP);
    }
};
__decorate([
    property({ type: Boolean })
], WritingAssistant.prototype, "loading", void 0);
__decorate([
    property()
], WritingAssistant.prototype, "actionText", void 0);
__decorate([
    property({ type: Number })
], WritingAssistant.prototype, "currentVersionIndex", void 0);
__decorate([
    property({ type: Number })
], WritingAssistant.prototype, "totalVersions", void 0);
__decorate([
    i18n("@ui5/webcomponents-ai")
], WritingAssistant, "i18nBundleAi", void 0);
WritingAssistant = WritingAssistant_1 = __decorate([
    customElement({
        tag: "ui5-ai-writing-assistant",
        languageAware: true,
        renderer: jsxRenderer,
        template: WritingAssistantTemplate,
        styles: [WritingAssistantCss],
        dependencies: [
            Versioning,
            ToolbarLabel,
            Toolbar,
            ToolbarSpacer,
            ToolbarButton,
        ],
    })
    /**
     * Fired when the user clicks on version navigation buttons.
     *
     * @public
     */
    ,
    event("version-change")
    /**
     * Fired when the user clicks on the AI button.
     *
     * @public
     */
    ,
    event("button-click")
    /**
     * Fired when the user clicks on the "Stop" button to stop ongoing AI text generation.
     *
     * @public
     */
    ,
    event("stop-generation")
], WritingAssistant);
WritingAssistant.define();
export default WritingAssistant;
//# sourceMappingURL=WritingAssistant.js.map