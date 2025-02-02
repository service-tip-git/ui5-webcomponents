import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `.inputIcon{color:var(--_ui5-v2-7-0-rc-2_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-7-0-rc-2_input_icon_padding);border-inline-start:var(--_ui5-v2-7-0-rc-2_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-7-0-rc-2_input_icon_border_radius)}.inputIcon.inputIcon--pressed{background:var(--_ui5-v2-7-0-rc-2_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-7-0-rc-2_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-7-0-rc-2_select_hover_icon_left_border);color:var(--_ui5-v2-7-0-rc-2_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-7-0-rc-2_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-7-0-rc-2_select_hover_icon_left_border);color:var(--_ui5-v2-7-0-rc-2_input_icon_pressed_color)}.inputIcon:not(.inputIcon--pressed):not(:active):hover{background:var(--_ui5-v2-7-0-rc-2_input_icon_hover_bg);box-shadow:var(--_ui5-v2-7-0-rc-2_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-7-0-rc-2_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-7-0-rc-2_input_icon_box_shadow)}:host{min-width:calc(var(--_ui5-v2-7-0-rc-2_input_min_width) + (var(--_ui5-v2-7-0-rc-2-input-icons-count)*var(--_ui5-v2-7-0-rc-2_input_icon_width)))}:host([tokenizer-available]){min-width:calc(var(--_ui5-v2-7-0-rc-2_input_min_width) + (var(--_ui5-v2-7-0-rc-2-input-icons-count)*var(--_ui5-v2-7-0-rc-2_input_icon_width)) + var(--_ui5-v2-7-0-rc-2_input_tokenizer_min_width))}.ui5-multi-input-tokenizer{min-width:var(--_ui5-v2-7-0-rc-2_input_tokenizer_min_width);max-width:calc(100% - 3rem - var(--_ui5-v2-7-0-rc-2-input-icons-count) * var(--_ui5-v2-7-0-rc-2_input_icon_min_width));border:none;width:auto;height:100%}:host([readonly]) .ui5-multi-input-tokenizer::part(n-more-text){color:var(--sapLinkColor)}.ui5-multi-input-tokenizer::part(n-more-text){padding-inline-end:var(--_ui5-v2-7-0-rc-2_input_inner_space_to_n_more_text)}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v2-7-0-rc-2_input_inner_padding_with_icon)}:host([tokenizer-available]) [inner-input]{padding-inline-start:var(--_ui5-v2-7-0-rc-2_input_inner_space_to_tokenizer)}:host(:not([tokenizer-available])) .ui5-multi-input-tokenizer{--_ui5-v2-7-0-rc-2_input_tokenizer_min_width: 0px;width:var(--_ui5-v2-7-0-rc-2_input_tokenizer_min_width)}
`;
//# sourceMappingURL=MultiInput.css.js.map