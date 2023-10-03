import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";

// Template
import DynamicPageHeaderTemplate from "./generated/templates/DynamicPageHeaderTemplate.lit.js";

// Styles
import DynamicPageHeaderCss from "./generated/themes/DynamicPageHeader.css.js";

@event("click")
/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * @constructor
 * @alias sap.ui.webc.fiori.DynamicPageHeader
 * @extends sap.ui.webc.base.UI5Element
 * @tagname ui5-dynamic-page-header
 * @public
 */
@customElement({
	tag: "ui5-dynamic-page-header",
	renderer: litRender,
	styles: DynamicPageHeaderCss,
	template: DynamicPageHeaderTemplate,
})
class DynamicPageHeader extends UI5Element {
	static i18nBundle: I18nBundle;

	static async onDefine() {
		DynamicPageHeader.i18nBundle = await getI18nBundle("@ui5/webcomponents-fiori");
	}

	@slot({ type: HTMLElement })
	heading!: HTMLElement[];

	@slot({ type: HTMLElement })
	snappedHeading!: HTMLElement[];

	@slot({ type: HTMLElement })
	expandedHeading!: HTMLElement[];

	@slot({ type: HTMLElement })
	actions!: HTMLElement[];

	@slot({ type: HTMLElement })
	navigationActions!: HTMLElement[];

	@slot({ "default": true, type: HTMLElement })
	content!: HTMLElement[];

	@slot({ type: HTMLElement })
	snappedContent!: HTMLElement[];

	@slot({ type: HTMLElement })
	expandedContent!: HTMLElement[];

	@slot({ type: HTMLElement })
	breadcrumbs!: HTMLElement[];

	@property({ type: Boolean })
	snapped!: boolean;

	get hasBreadcrumb() {
		return !!this.breadcrumbs.length;
	}

	get hasHeading() {
		return !!this.heading.length;
	}
}

DynamicPageHeader.define();

export default DynamicPageHeader;
