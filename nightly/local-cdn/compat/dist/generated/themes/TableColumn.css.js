import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-compat", "sap_horizon", async () => defaultTheme);
export default `:host{display:contents}th{background:var(--sapList_HeaderBackground);width:inherit;font-weight:var(--ui5-v2-13-0_table_header_row_font_weight);font-size:var(--sapFontMediumSize);font-family:var(--ui5-v2-13-0_table_header_row_font_family);padding:.5rem;box-sizing:border-box;text-align:start;vertical-align:middle}:host([first]) th{padding-inline-start:1rem}th ::slotted([ui5-label]){font-weight:var(--ui5-v2-13-0_table_header_row_font_weight);font-size:var(--sapFontMediumSize);font-family:var(--ui5-v2-13-0_table_header_row_font_family)}
`;
//# sourceMappingURL=TableColumn.css.js.map