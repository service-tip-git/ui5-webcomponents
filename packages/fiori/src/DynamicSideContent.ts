import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import event from "@ui5/webcomponents-base/dist/decorators/event-strict.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import i18n from "@ui5/webcomponents-base/dist/decorators/i18n.js";
import getEffectiveScrollbarStyle from "@ui5/webcomponents-base/dist/util/getEffectiveScrollbarStyle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import jsxRenderer from "@ui5/webcomponents-base/dist/renderer/JsxRenderer.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import SideContentPosition from "./types/SideContentPosition.js";
import SideContentVisibility from "./types/SideContentVisibility.js";
import SideContentFallDown from "./types/SideContentFallDown.js";
import DynamicSideContentTemplate from "./DynamicSideContentTemplate.js";
import type {
	AccessibilityAttributes,
} from "@ui5/webcomponents-base";

// Styles
import DynamicSideContentCss from "./generated/themes/DynamicSideContent.css.js";

// Texts
import {
	DSC_MAIN_ARIA_LABEL,
	DSC_SIDE_ARIA_LABEL,
} from "./generated/i18n/i18n-defaults.js";

// Breakpoint-related constants
const S_M_BREAKPOINT = 720,	// Breakpoint between S and M screen sizes
	M_L_BREAKPOINT = 1024, // Breakpoint between M and L screen sizes
	L_XL_BREAKPOINT = 1440, // Breakpoint between L and XL screen sizes
	MINIMUM_WIDTH_BREAKPOINT = 960; // Minimum width of the control where main and side contents are side by side

type DynamicSideContentLayoutChangeEventDetail = {
	currentBreakpoint: string,
	previousBreakpoint: string | undefined,
	mainContentVisible: boolean,
	sideContentVisible: boolean,
}

type DynamicSideContentAriaAccessibilityAttributes = Pick<AccessibilityAttributes, "ariaLabel">;
type DynamicSideContentAccessibilityAttributes = {
	mainContent?: DynamicSideContentAriaAccessibilityAttributes,
	sideContent?: DynamicSideContentAriaAccessibilityAttributes,
}

/**
 * @class
 *
 * ### Overview
 *
 * The DynamicSideContent (`ui5-dynamic-side-content`) is a layout component that allows additional content
 * to be displayed in a way that flexibly adapts to different screen sizes. The side
 * content appears in a container next to or directly below the main content
 * (it doesn't overlay). When the side content is triggered, the main content becomes
 * narrower (if appearing side-by-side). The side content contains a separate scrollbar
 * when appearing next to the main content.
 *
 * ### Usage
 *
 * *When to use?*
 *
 * Use this component if you want to display relevant information that is not critical
 * for users to complete a task. Users should have access to all the key functions and
 * critical information in the app even if they do not see the side content. This is
 * important because on smaller screen sizes it may be difficult to display the side
 * content in a way that is easily accessible for the user.
 *
 * *When not to use?*
 *
 * Don't use it if you want to display navigation or critical information that prevents
 * users from completing a task when they have no access to the side content.
 *
 * ### Responsive Behavior
 *
 * Screen width \> 1440px
 *
 * - Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px
 * each).
 * - If the application defines a trigger, the side content can be hidden.
 *
 * Screen width \<\= 1440px and \> 1024px
 *
 * - Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of
 * 320px each). If the side content width falls below 320 px, it automatically slides
 * under the main content, unless the app development team specifies that it should
 * disappear.
 *
 * Screen width \<\= 1024px and \> 720px
 *
 * - The side content ratio is fixed to 340px, and the main content takes the rest
 * of the width. Only if the `sideContentFallDown` is set to `OnMinimumWidth`
 * and screen width is \<\= 960px and \> 720px the side content falls below the main content.
 *
 * Screen width \<\= 720px (for example on a mobile device)
 *
 * - In this case, the side content automatically disappears from the screen (unless
 * specified to stay under the content by setting of `sideContentVisibility`
 * property to `AlwaysShow`) and can be triggered from a pre-set trigger
 * (specified within the app). When the side content is triggered, it replaces the main
 * content. We recommend that you always place the trigger for the side content in the
 * same location, such as in the app footer.
 *
 * A special case allows switching the comparison mode between the main and side content.
 * In this case, the screen is split into 50:50 percent for main vs. side content. The
 * responsive behavior of the equal split is the same as in the standard view - the
 * side content disappears on screen widths of less than 720 px and can only be
 * viewed by triggering it.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-fiori/dist/DynamicSideContent.js";`
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.1.0
 * @slot {Array<HTMLElement>} default - Defines the main content.
 */
@customElement({
	tag: "ui5-dynamic-side-content",
	renderer: jsxRenderer,
	styles: [DynamicSideContentCss, getEffectiveScrollbarStyle()],
	template: DynamicSideContentTemplate,
})
/**
 * Fires when the current breakpoint has been changed.
 * @param {string} currentBreakpoint the current breakpoint.
 * @param {string | undefined} previousBreakpoint the breakpoint that was active before change to current breakpoint.
 * @param {boolean} mainContentVisible visibility of the main content.
 * @param {boolean} sideContentVisible visibility of the side content.
 * @public
 */
@event("layout-change", {
	bubbles: true,
})
class DynamicSideContent extends UI5Element {
	eventDetails!: {
		"layout-change": DynamicSideContentLayoutChangeEventDetail
	}
	/**
	 * Defines the visibility of the main content.
	 * @default false
	 * @public
	 *
	 */
	@property({ type: Boolean })
	hideMainContent = false;

	/**
	 * Defines the visibility of the side content.
	 * @default false
	 * @public
	 *
	 */
	@property({ type: Boolean })
	hideSideContent = false;

	/**
	 * Defines whether the side content is positioned before the main content (left side
	 * in LTR mode), or after the the main content (right side in LTR mode).

	 * @default "End"
	 * @public
	 *
	 */
	@property()
	sideContentPosition: `${SideContentPosition}` = "End";

	/**
	 * Defines on which breakpoints the side content is visible.
 	 * @default "ShowAboveS"
	 * @public
	 *
	 */
	@property()
	sideContentVisibility: `${SideContentVisibility}` = "ShowAboveS";

	/**
	 * Defines on which breakpoints the side content falls down below the main content.
	 * @default "OnMinimumWidth"
	 * @public
	 *
	 */
	@property()
	sideContentFallDown: `${SideContentFallDown}` = "OnMinimumWidth";

	/**
	 * Defines whether the component is in equal split mode. In this mode, the side and
	 * the main content take 50:50 percent of the container on all screen sizes
	 * except for phone, where the main and side contents are switching visibility
	 * using the toggle method.
	 * @default false
	 * @public
	 *
	 */
	@property({ type: Boolean })
	equalSplit = false;

	/**
	* Defines additional accessibility attributes on different areas of the component.
	*
	* The accessibilityAttributes object has the following fields:
	*
	*  - **mainContent**: `mainContent.ariaLabel` defines the aria-label of the main content area. Accepts any string.
	*  - **sideContent**: `sideContent.ariaLabel` defines the aria-label of the side content area. Accepts any string.
	*
	* @default {}
	* @public
	* @since 2.6.0
	*/
	@property({ type: Object })
	accessibilityAttributes: DynamicSideContentAccessibilityAttributes = {};

	/**
	 * @private
	 */
	@property({ noAttribute: true })
	_mcSpan = "0";

	/**
	 * @private
	 */
	@property({ noAttribute: true })
	_scSpan = "0";

	/**
	 * @private
	 */
	@property({ type: Boolean, noAttribute: true })
	_toggled = false;

	/**
	 * @private
	 */
	@property({ noAttribute: true })
	_currentBreakpoint?: string;

	/**
	 * Defines the side content.
	 * @public
	 */
	@slot()
	sideContent!: Array<HTMLElement>;

	constructor() {
		super();
		this._handleResizeBound = this.handleResize.bind(this);
	}

	_handleResizeBound: () => void;

	@i18n("@ui5/webcomponents-fiori")
	static i18nBundle: I18nBundle;

	onAfterRendering() {
		this._resizeContents();
	}

	onEnterDOM() {
		ResizeHandler.register(this, this._handleResizeBound);
	}

	onExitDOM() {
		ResizeHandler.deregister(this, this._handleResizeBound);
	}

	/**
	 * Toggles visibility of main and side contents on S screen size (mobile device).
	 * @public
	 */
	toggleContents(): void {
		if (this.breakpoint === this.sizeS && this.sideContentVisibility !== SideContentVisibility.AlwaysShow) {
			this._toggled = !this._toggled;
		}
	}

	get classes() {
		const gridPrefix = "ui5-dsc-span",
			mcSpan = this._toggled ? this._scSpan : this._mcSpan,
			scSpan = this._toggled ? this._mcSpan : this._scSpan;

		return {
			main: {
				"ui5-dsc-main": true,
				[`${gridPrefix}-${mcSpan}`]: true,
			},
			side: {
				"ui5-dsc-side": true,
				[`${gridPrefix}-${scSpan}`]: true,
			},
		};
	}

	get styles() {
		const isToggled = this.breakpoint === this.sizeS && this._toggled,
			mcSpan = isToggled ? this._scSpan : this._mcSpan,
			scSpan = isToggled ? this._mcSpan : this._scSpan,
			contentHeight = this.breakpoint === this.sizeS && this.sideContentVisibility !== SideContentVisibility.AlwaysShow ? "100%" : "auto";

		return {
			root: {
				"flex-wrap": this._mcSpan === "12" ? "wrap" : "nowrap",
			},
			main: {
				"height": mcSpan === this.span12 ? contentHeight : "100%",
			},
			side: {
				"height": scSpan === this.span12 ? contentHeight : "100%",
			},
		};
	}

	get accInfo(): DynamicSideContentAccessibilityAttributes {
		return {
			mainContent: {
				ariaLabel: this.accessibilityAttributes.mainContent?.ariaLabel || DynamicSideContent.i18nBundle.getText(DSC_MAIN_ARIA_LABEL),
			},
			sideContent: {
				ariaLabel: this.accessibilityAttributes.sideContent?.ariaLabel || DynamicSideContent.i18nBundle.getText(DSC_SIDE_ARIA_LABEL),
			},
		};
	}

	get sizeS() {
		return "S";
	}

	get sizeM() {
		return "M";
	}

	get sizeL() {
		return "L";
	}

	get sizeXL() {
		return "XL";
	}

	get span0() {
		return "0";
	}

	get span3() {
		return "3";
	}

	get span4() {
		return "4";
	}

	get span6() {
		return "6";
	}

	get span8() {
		return "8";
	}

	get span9() {
		return "9";
	}

	get span12() {
		return "12";
	}

	get spanFixed() {
		return "fixed";
	}

	get containerWidth() {
		return (this.parentElement as HTMLElement).getBoundingClientRect().width;
	}

	get breakpoint() {
		let size;

		if (this.containerWidth <= S_M_BREAKPOINT) {
			size = this.sizeS;
		} else if (this.containerWidth > S_M_BREAKPOINT && this.containerWidth <= M_L_BREAKPOINT) {
			size = this.sizeM;
		} else if (this.containerWidth > M_L_BREAKPOINT && this.containerWidth <= L_XL_BREAKPOINT) {
			size = this.sizeL;
		} else {
			size = this.sizeXL;
		}

		return size;
	}

	get _isSideContentFirst() {
		return this.sideContentPosition === SideContentPosition.Start;
	}

	handleResize() {
		this._resizeContents();
	}

	_resizeContents() {
		let mainSize!: string,
			sideSize!: string,
			sideVisible = false;

		// initial set contents sizes
		switch (this.breakpoint) {
		case this.sizeS:
			mainSize = this.span12;
			sideSize = this.span12;
			break;
		case this.sizeM:
			if (this.sideContentFallDown === SideContentFallDown.BelowXL
				|| this.sideContentFallDown === SideContentFallDown.BelowL
				|| (this.containerWidth <= MINIMUM_WIDTH_BREAKPOINT && this.sideContentFallDown === SideContentFallDown.OnMinimumWidth)) {
				mainSize = this.span12;
				sideSize = this.span12;
			} else {
				mainSize = this.equalSplit ? this.span6 : this.spanFixed;
				sideSize = this.equalSplit ? this.span6 : this.spanFixed;
			}
			sideVisible = this.sideContentVisibility === SideContentVisibility.ShowAboveS
				|| this.sideContentVisibility === SideContentVisibility.AlwaysShow;
			break;
		case this.sizeL:
			if (this.sideContentFallDown === SideContentFallDown.BelowXL) {
				mainSize = this.span12;
				sideSize = this.span12;
			} else {
				mainSize = this.equalSplit ? this.span6 : this.span8;
				sideSize = this.equalSplit ? this.span6 : this.span4;
			}
			sideVisible = this.sideContentVisibility === SideContentVisibility.ShowAboveS
				|| this.sideContentVisibility === SideContentVisibility.ShowAboveM
				|| this.sideContentVisibility === SideContentVisibility.AlwaysShow;
			break;
		case this.sizeXL:
			mainSize = this.equalSplit ? this.span6 : this.span9;
			sideSize = this.equalSplit ? this.span6 : this.span3;
			sideVisible = this.sideContentVisibility !== SideContentVisibility.NeverShow;
		}

		if (this.sideContentVisibility === SideContentVisibility.AlwaysShow) {
			sideVisible = true;
		}

		// modify sizes of the contents depending on hideMainContent and hideSideContent properties
		if (this.hideSideContent) {
			mainSize = this.hideMainContent ? this.span0 : this.span12;
			sideSize = this.span0;
			sideVisible = false;
		}

		if (this.hideMainContent) {
			mainSize = this.span0;
			sideSize = this.hideSideContent ? this.span0 : this.span12;
			sideVisible = true;
		}

		// set final sizes of the contents
		if (!sideVisible) {
			mainSize = this.span12;
			sideSize = this.span0;
		}

		// fire "layout-change" event
		if (this._currentBreakpoint !== this.breakpoint) {
			const eventParams = {
				currentBreakpoint: this.breakpoint,
				previousBreakpoint: this._currentBreakpoint,
				mainContentVisible: mainSize !== this.span0,
				sideContentVisible: sideSize !== this.span0,
			};
			this.fireDecoratorEvent("layout-change", eventParams);
			this._currentBreakpoint = this.breakpoint;
		}

		// update contents sizes
		this._setSpanSizes(mainSize, sideSize);
	}

	_setSpanSizes(mainSize: string, sideSize: string) {
		this._mcSpan = mainSize;
		this._scSpan = sideSize;
		if (this.breakpoint !== this.sizeS) {
			this._toggled = false;
		}
	}
}

DynamicSideContent.define();

export default DynamicSideContent;
export type {
	DynamicSideContentLayoutChangeEventDetail,
	DynamicSideContentAccessibilityAttributes,
};
