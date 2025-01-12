import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `:host([invisible]){display:block;width:var(--_ui5-v2-6-2_button_base_min_width)}:host([_fixed]){margin-inline-start:auto}[ui5-icon]{display:flex;width:var(--_ui5-v2-6-2_button_base_min_width)}
`;
//# sourceMappingURL=TableRowActionBase.css.js.map