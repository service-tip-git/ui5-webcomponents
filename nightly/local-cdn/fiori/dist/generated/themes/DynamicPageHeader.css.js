import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
export default `:host{background-color:var(--_ui5-v2-13-0_dynamic_page_header_background_color);display:block;box-shadow:var(--_ui5-v2-13-0_dynamic_page_header-box-shadow)}.ui5-dynamic-page-header-root{background:inherit}
`;
//# sourceMappingURL=DynamicPageHeader.css.js.map