import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
export default `.ui5-dynamic-page-header-actions-root{position:relative;display:flex;justify-content:center;align-items:center;width:100%;.ui5-dynamic-page-header-action{position:relative;z-index:1;min-width:1.5rem;height:1.5rem;background-color:var(--_ui5-v2-8-0-rc-1_dynamic_page_header-actions-background);border:1px solid var(--sapButton_BorderColor);box-shadow:var(--_ui5-v2-8-0-rc-1_dynamic_page_header-actions-box-shadow);color:var(--_ui5-v2-8-0-rc-1_dynamic_page_header-actions-color)}.ui5-dynamic-page-header-action-pin[pressed]{background-color:var(--_ui5-v2-8-0-rc-1_dynamic_page_header-actions-background-pressed);color:var(--_ui5-v2-8-0-rc-1_dynamic_page_header-actions-color-pressed)}.ui5-dynamic-page-header-actions--wrapper{position:absolute;display:flex;gap:.5rem;z-index:1;&:before,&:after{content:"";position:absolute;top:50%;transform:translateY(-100%);width:6.125rem;height:.0625rem;z-index:0}&:before{right:50%;background:linear-gradient(to right,transparent,var(--_ui5-v2-8-0-rc-1_dynamic_page_actions-lines-color))}&:after{left:50%;background:linear-gradient(to left,transparent,var(--_ui5-v2-8-0-rc-1_dynamic_page_actions-lines-color))}}}
`;
//# sourceMappingURL=DynamicPageHeaderActions.css.js.map