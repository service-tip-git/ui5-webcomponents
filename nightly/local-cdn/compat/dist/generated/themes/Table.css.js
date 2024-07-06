import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-compat", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-compat", fileName: "themes/Table.css.ts", content: `[growing-button]{display:flex;align-items:center;padding:var(--_ui5-v2-0-0_load_more_padding);border-top:1px solid var(--sapList_BorderColor);border-bottom:var(--_ui5-v2-0-0_load_more_border-bottom);box-sizing:border-box;cursor:pointer;outline:none}[growing-button-inner]{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:var(--_ui5-v2-0-0_load_more_text_height);width:100%;color:var(--sapButton_TextColor);background-color:var(--sapList_Background);border:var(--_ui5-v2-0-0_load_more_border);border-radius:var(--_ui5-v2-0-0_load_more_border_radius);box-sizing:border-box}[growing-button-inner]:focus-visible{outline:var(--_ui5-v2-0-0_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:-.125rem;border-color:transparent}[growing-button-inner]:hover{background-color:var(--sapList_Hover_Background)}[growing-button-inner]:active,[growing-button-inner][active]{background-color:var(--sapList_Active_Background);border-color:var(--sapList_Active_Background)}[growing-button-inner]:active>*,[growing-button-inner][active]>*{color:var(--sapList_Active_TextColor)}[growing-button-text],[growing-button-subtext]{width:100%;text-align:center;font-family:"72override",var(--sapFontFamily);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}[growing-button-text]{height:var(--_ui5-v2-0-0_load_more_text_height);padding:.875rem 1rem 0;font-size:var(--_ui5-v2-0-0_load_more_text_font_size);font-weight:700}[growing-button-subtext]{font-size:var(--sapFontSize);padding:var(--_ui5-v2-0-0_load_more_desc_padding)}:host(:not([hidden])){display:inline-block;width:100%}.ui5-table-root{position:relative;border-bottom:var(--ui5-v2-0-0_table_bottom_border)}table{width:100%;border-spacing:0;border-collapse:collapse}.ui5-table-header-row-navigated{width:.1875rem;background:var(--sapList_HeaderBackground);vertical-align:middle}.ui5-table-header-row{color:var(--sapList_HeaderTextColor);height:var(--ui5-v2-0-0_table_header_row_height);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:var(--ui5-v2-0-0_table_header_row_font_weight);border-bottom:var(--ui5-v2-0-0_table_header_row_border_width) solid var(--ui5-v2-0-0_table_header_row_border_bottom_color)}.ui5-table-header-row:focus{outline:var(--ui5-v2-0-0_table_header_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--ui5-v2-0-0_table_focus_outline_offset)}tr{height:3rem}.ui5-table-no-data-row{display:flex;align-items:center;width:100%;height:auto;justify-content:center;text-align:center;padding:.5rem 1rem;font-family:"72override",var(--sapFontFamily);font-size:.875rem;box-sizing:border-box;color:var(--sapTextColor);min-height:3rem;background-color:var(--sapList_Background)}.ui5-table-end-row{height:0px}:host([busy]) .ui5-table-busy-row{position:absolute;inset:0;outline:none;z-index:100}:host([busy]) .ui5-table-busy-ind{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}:host([busy]) [growing-button]{opacity:.72}:host [growing-button]{border-bottom:var(--_ui5-v2-0-0_table_load_more_border-bottom)}.ui5-table-select-all-column{width:var(--ui5-v2-0-0_table_multiselect_column_width);text-align:center}:host([sticky-column-header]) .ui5-table-header-row{position:sticky;top:0;z-index:99}th{background:var(--sapList_HeaderBackground)}.ui5-table-focusarea{position:fixed}
` };
export default styleData;
//# sourceMappingURL=Table.css.js.map