import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import { isEnter } from "@ui5/webcomponents-base/dist/Keys.js";
import getActiveElement from "@ui5/webcomponents-base/dist/util/getActiveElement.js";
import TableRowTemplate from "./generated/templates/TableRowTemplate.lit.js";
import TableRowBase from "./TableRowBase.js";
import TableRowCss from "./generated/themes/TableRow.css.js";
import TableCell from "./TableCell.js";
import RadioButton from "./RadioButton.js";

/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-table-row` component represents a row in the `ui5-table`.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/TableRow.js";`
 *
 * @constructor
 * @extends TableRowBase
 * @since 2.0.0
 * @public
 * @experimental This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.
 */
@customElement({
	tag: "ui5-table-row",
	styles: [TableRowBase.styles, TableRowCss],
	template: TableRowTemplate,
	dependencies: [...TableRowBase.dependencies, RadioButton, TableCell],
})
class TableRow extends TableRowBase {
	/**
	 * Defines the cells of the component.
	 *
	 * **Note:** Use `ui5-table-cell` for the intended design.
	 *
	 * @public
	 */
	@slot({
		type: HTMLElement,
		"default": true,
		individualSlots: true,
		invalidateOnChildChange: {
			properties: ["_popin"],
			slots: false,
		},
	})
	cells!: Array<TableCell>;

	/**
	 * Unique identifier of the row.
	 *
	 * @default ""
	 * @public
	 */
	@property()
	rowKey = "";

	/**
	 * Defines the position of the row respect to the total number of rows within the table when the <code>ui5-table-virtualizer</code> feature is used.
	 *
     * @default -1
     * @public
     */
	@property({ type: Number })
	position = -1;

	/**
	 * Defines the interactive state of the row.
	 *
	 * @default false
	 * @public
	 */
	@property({ type: Boolean })
	interactive = false;

	/**
	 * Defines the navigated state of the row.
	 *
	 * @default false
	 * @public
	 */
	@property({ type: Boolean })
	navigated = false;

	/**
	 * Defines whether the row is movable.
	 *
	 * @default false
	 * @public
	 */
	@property({ type: Boolean })
	movable = false;

	@property({ type: Boolean, noAttribute: true })
	_renderNavigated = false;

	onBeforeRendering() {
		super.onBeforeRendering();
		this.toggleAttribute("_interactive", this._isInteractive);
		if (this.position !== -1) {
			this.setAttribute("aria-rowindex", `${this.position + 1}`);
		}
		if (this._renderNavigated && this.navigated) {
			this.setAttribute("aria-current", "true");
		} else {
			this.removeAttribute("aria-current");
		}
		if (this.movable) {
			this.setAttribute("draggable", "true");
		} else {
			this.removeAttribute("draggable");
		}
	}

	async focus(focusOptions?: FocusOptions | undefined): Promise<void> {
		this.setAttribute("tabindex", "-1");
		HTMLElement.prototype.focus.call(this, focusOptions);
		return Promise.resolve();
	}

	_onkeydown(e: KeyboardEvent, eventOrigin: HTMLElement) {
		super._onkeydown(e, eventOrigin);
		if (e.defaultPrevented) {
			return;
		}

		if (eventOrigin === this && this._isInteractive && isEnter(e)) {
			this.toggleAttribute("_active", true);
			this._table?._onRowPress(this);
		}
	}

	_onclick() {
		if (this._isInteractive && this === getActiveElement()) {
			this._table?._onRowPress(this);
		}
	}

	_onkeyup() {
		this.removeAttribute("_active");
	}

	_onfocusout() {
		this.removeAttribute("_active");
	}

	get _isInteractive() {
		return this.interactive;
	}
}

TableRow.define();

export default TableRow;
