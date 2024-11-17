/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="ui5-date-picker-root" style="${styleMap(this.styles.main)}"><${scopeTag("ui5-input", tags, suffix)} id="${ifDefined(this._id)}-inner" class="ui5-date-picker-input" placeholder="${ifDefined(this._placeholder)}" type="${ifDefined(this.type)}" value="${ifDefined(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${ifDefined(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${ifDefined(this.accInfo)}" @ui5-change="${ifDefined(this._onInputChange)}" @ui5-input="${ifDefined(this._onInputInput)}" @ui5-submit="${ifDefined(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length ? block1.call(this, context, tags, suffix) : undefined}${!this.readonly ? block2.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-input", tags, suffix)}></div><${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-responsive-popover" .opener=${ifDefined(this)} ?open="${this.open}" allow-target-overlap placement="Bottom" horizontal-align="Start" accessible-name="${ifDefined(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${ifDefined(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-close="${ifDefined(this.onResponsivePopoverAfterClose)}" @ui5-open="${ifDefined(this.onResponsivePopoverAfterOpen)}" @ui5-before-open="${ifDefined(this.onResponsivePopoverBeforeOpen)}">${this.showHeader ? block3.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-calendar", tags, suffix)} id="${ifDefined(this._id)}-calendar" primary-calendar-type="${ifDefined(this._primaryCalendarType)}" secondary-calendar-type="${ifDefined(this.secondaryCalendarType)}" format-pattern="${ifDefined(this._formatPattern)}" .selectionMode="${ifDefined(this._calendarSelectionMode)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" .calendarWeekNumbering="${ifDefined(this.calendarWeekNumbering)}" @ui5-selection-change="${ifDefined(this.onSelectedDatesChange)}" @ui5-show-month-view="${ifDefined(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${ifDefined(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${ifDefined(this._calendarCurrentPicker)}" ._pickersMode="${ifDefined(this._calendarPickersMode)}"><${scopeTag("ui5-date-range", tags, suffix)} start-value="${ifDefined(this.startValue)}" end-value="${ifDefined(this.endValue)}"></${scopeTag("ui5-date-range", tags, suffix)}></${scopeTag("ui5-calendar", tags, suffix)}>${this.showFooter ? block4.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<div class="ui5-date-picker-root" style="${styleMap(this.styles.main)}"><ui5-input id="${ifDefined(this._id)}-inner" class="ui5-date-picker-input" placeholder="${ifDefined(this._placeholder)}" type="${ifDefined(this.type)}" value="${ifDefined(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${ifDefined(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${ifDefined(this.accInfo)}" @ui5-change="${ifDefined(this._onInputChange)}" @ui5-input="${ifDefined(this._onInputInput)}" @ui5-submit="${ifDefined(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length ? block1.call(this, context, tags, suffix) : undefined}${!this.readonly ? block2.call(this, context, tags, suffix) : undefined}</ui5-input></div><ui5-responsive-popover id="${ifDefined(this._id)}-responsive-popover" .opener=${ifDefined(this)} ?open="${this.open}" allow-target-overlap placement="Bottom" horizontal-align="Start" accessible-name="${ifDefined(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${ifDefined(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-close="${ifDefined(this.onResponsivePopoverAfterClose)}" @ui5-open="${ifDefined(this.onResponsivePopoverAfterOpen)}" @ui5-before-open="${ifDefined(this.onResponsivePopoverBeforeOpen)}">${this.showHeader ? block3.call(this, context, tags, suffix) : undefined}<ui5-calendar id="${ifDefined(this._id)}-calendar" primary-calendar-type="${ifDefined(this._primaryCalendarType)}" secondary-calendar-type="${ifDefined(this.secondaryCalendarType)}" format-pattern="${ifDefined(this._formatPattern)}" .selectionMode="${ifDefined(this._calendarSelectionMode)}" .minDate="${ifDefined(this.minDate)}" .maxDate="${ifDefined(this.maxDate)}" .calendarWeekNumbering="${ifDefined(this.calendarWeekNumbering)}" @ui5-selection-change="${ifDefined(this.onSelectedDatesChange)}" @ui5-show-month-view="${ifDefined(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${ifDefined(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${ifDefined(this._calendarCurrentPicker)}" ._pickersMode="${ifDefined(this._calendarPickersMode)}"><ui5-date-range start-value="${ifDefined(this.startValue)}" end-value="${ifDefined(this.endValue)}"></ui5-date-range></ui5-calendar>${this.showFooter ? block4.call(this, context, tags, suffix) : undefined}</ui5-responsive-popover>`; }
function block1(context, tags, suffix) { return html `<slot name="valueStateMessage" slot="valueStateMessage"></slot>`; }
function block2(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} id="${ifDefined(this._id)}-value-help" slot="icon" name="${ifDefined(this.openIconName)}" tabindex="-1" accessible-name="${ifDefined(this.openIconTitle)}" mode=${ifDefined(this._iconMode)} show-tooltip @click="${this._togglePicker}" class="inputIcon" ?pressed="${this.open}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon id="${ifDefined(this._id)}-value-help" slot="icon" name="${ifDefined(this.openIconName)}" tabindex="-1" accessible-name="${ifDefined(this.openIconTitle)}" mode=${ifDefined(this._iconMode)} show-tooltip @click="${this._togglePicker}" class="inputIcon" ?pressed="${this.open}"></ui5-icon>`; }
function block3(context, tags, suffix) { return suffix ? html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><${scopeTag("ui5-button", tags, suffix)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._togglePicker}"></${scopeTag("ui5-button", tags, suffix)}></div></div>` : html `<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${ifDefined(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._togglePicker}"></ui5-button></div></div>`; }
function block4(context, tags, suffix) { return html ``; }
export default block0;
//# sourceMappingURL=DateRangePickerTemplate.lit.js.map