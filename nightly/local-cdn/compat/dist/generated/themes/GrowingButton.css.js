import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-compat", "sap_horizon", async () => defaultTheme);
export default `.ui5-table-growing-row{display:flex;align-items:center;padding:var(--_ui5-v2-7-0-rc-2_load_more_padding);border-top:1px solid var(--sapList_BorderColor);border-bottom:var(--_ui5-v2-7-0-rc-2_load_more_border-bottom);box-sizing:border-box;cursor:pointer;outline:none}.ui5-table-growing-row-inner{display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:var(--_ui5-v2-7-0-rc-2_load_more_text_height);width:100%;color:var(--sapButton_TextColor);background-color:var(--sapList_Background);border:var(--_ui5-v2-7-0-rc-2_load_more_border);border-radius:var(--_ui5-v2-7-0-rc-2_load_more_border_radius);box-sizing:border-box}.ui5-table-growing-row-inner:focus-visible{outline:var(--_ui5-v2-7-0-rc-2_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:-.125rem;border-color:transparent}.ui5-table-growing-row-inner:hover{background-color:var(--sapList_Hover_Background)}.ui5-table-growing-row-inner:active,.ui5-table-growing-row-inner.ui5-table-growing-row-inner--active{background-color:var(--sapList_Active_Background);border-color:var(--sapList_Active_Background)}.ui5-table-growing-row-inner:active>*,.ui5-table-growing-row-inner.ui5-table-growing-row-inner--active>*{color:var(--sapList_Active_TextColor)}.ui5-table-growing-row-text,.ui5-table-growing-row-subtext{width:100%;text-align:center;font-family:"72override",var(--sapFontFamily);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}.ui5-table-growing-row-text{height:var(--_ui5-v2-7-0-rc-2_load_more_text_height);padding:.875rem 1rem 0;font-size:var(--_ui5-v2-7-0-rc-2_load_more_text_font_size);font-weight:700}.ui5-table-growing-row-subtext{font-size:var(--sapFontSize);padding:var(--_ui5-v2-7-0-rc-2_load_more_desc_padding)}
`;
//# sourceMappingURL=GrowingButton.css.js.map