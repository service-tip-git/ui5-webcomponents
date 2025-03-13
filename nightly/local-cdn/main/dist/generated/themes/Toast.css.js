import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `:host{font-family:"72override",var(--sapFontFamily);color:var(--sapContent_ContrastTextColor);font-size:var(--sapFontSize);position:fixed;display:none;box-sizing:border-box;max-width:15rem;overflow:hidden;background:var(--_ui5-v2-8-1-rc-0_toast_background);box-shadow:var(--_ui5-v2-8-1-rc-0_toast_shadow);border-radius:var(--sapElement_BorderCornerRadius);transition-property:opacity;opacity:1;word-wrap:break-word;text-align:center;text-overflow:ellipsis;white-space:pre-line;padding:1rem;inset:unset;margin:0;border:none}.ui5-toast-root{height:100%;width:100%;padding:0;outline:none;box-sizing:border-box}:host([open]){display:block}:host(:not([placement])){bottom:var(--_ui5-v2-8-1-rc-0_toast_vertical_offset);left:50%;transform:translate(-50%)}:host([placement="TopStart"]){top:var(--_ui5-v2-8-1-rc-0_toast_vertical_offset);left:var(--_ui5-v2-8-1-rc-0_toast_horizontal_offset)}:host([placement="MiddleStart"]){left:var(--_ui5-v2-8-1-rc-0_toast_horizontal_offset);top:50%;transform:translateY(-50%)}:host([placement="BottomStart"]){left:var(--_ui5-v2-8-1-rc-0_toast_horizontal_offset);bottom:var(--_ui5-v2-8-1-rc-0_toast_vertical_offset)}:host([placement="TopCenter"]){top:var(--_ui5-v2-8-1-rc-0_toast_vertical_offset);left:50%;transform:translate(-50%)}:host([placement="MiddleCenter"]){left:50%;top:50%;transform:translate(-50%,-50%)}:host([placement="BottomCenter"]){bottom:var(--_ui5-v2-8-1-rc-0_toast_vertical_offset);left:50%;transform:translate(-50%)}:host([placement="TopEnd"]){right:var(--_ui5-v2-8-1-rc-0_toast_horizontal_offset);top:var(--_ui5-v2-8-1-rc-0_toast_vertical_offset)}:host([placement="MiddleEnd"]){right:var(--_ui5-v2-8-1-rc-0_toast_horizontal_offset);top:50%;transform:translateY(-50%)}:host([placement="BottomEnd"]){right:var(--_ui5-v2-8-1-rc-0_toast_horizontal_offset);bottom:var(--_ui5-v2-8-1-rc-0_toast_vertical_offset)}:host([focused]){outline-width:var(--sapContent_FocusWidth);outline-style:var(--sapContent_FocusStyle);outline-color:var(--sapContent_FocusColor);outline-offset:var(--_ui5-v2-8-1-rc-0_toast_offset_width)}
`;
//# sourceMappingURL=Toast.css.js.map