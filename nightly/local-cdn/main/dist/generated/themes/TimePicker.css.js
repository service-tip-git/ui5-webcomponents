import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-8-0-rc-1_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-8-0-rc-1_input_icon_padding);border-inline-start:var(--_ui5-v2-8-0-rc-1_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-8-0-rc-1_input_icon_border_radius)}.inputIcon.inputIcon--pressed{background:var(--_ui5-v2-8-0-rc-1_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-8-0-rc-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-8-0-rc-1_select_hover_icon_left_border);color:var(--_ui5-v2-8-0-rc-1_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-8-0-rc-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-8-0-rc-1_select_hover_icon_left_border);color:var(--_ui5-v2-8-0-rc-1_input_icon_pressed_color)}.inputIcon:not(.inputIcon--pressed):not(:active):hover{background:var(--_ui5-v2-8-0-rc-1_input_icon_hover_bg);box-shadow:var(--_ui5-v2-8-0-rc-1_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-8-0-rc-1_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-8-0-rc-1_input_icon_box_shadow)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v2-8-0-rc-1_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-8-0-rc-1_input_readonly_background)}:host([disabled]){opacity:var(--_ui5-v2-8-0-rc-1_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-8-0-rc-1-input_disabled_background);border-color:var(--_ui5-v2-8-0-rc-1_input_disabled_border_color)}:host([value-state="Negative"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-8-0-rc-1_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-8-0-rc-1_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-8-0-rc-1_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-8-0-rc-1_input_success_icon_box_shadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-8-0-rc-1_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-8-0-rc-1_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-8-0-rc-1_input_value_state_success_border_color);border-width:var(--_ui5-v2-8-0-rc-1_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-8-0-rc-1_input_value_state_information_border_color);border-width:var(--_ui5-v2-8-0-rc-1_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-8-0-rc-1_input_error_icon_box_shadow);color:var(--_ui5-v2-8-0-rc-1_input_icon_error_pressed_color)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-8-0-rc-1_input_warning_icon_box_shadow);color:var(--_ui5-v2-8-0-rc-1_input_icon_warning_pressed_color)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-8-0-rc-1_input_information_icon_box_shadow);color:var(--_ui5-v2-8-0-rc-1_input_icon_information_pressed_color)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-8-0-rc-1_input_success_icon_box_shadow);color:var(--_ui5-v2-8-0-rc-1_input_icon_success_pressed_color)}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-8-0-rc-1_input_error_warning_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-8-0-rc-1_input_information_icon_padding)}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal}:host{min-width:calc(var(--_ui5-v2-8-0-rc-1_input_min_width) + var(--_ui5-v2-8-0-rc-1_input_icon_width));height:var(--_ui5-v2-8-0-rc-1_input_height);color:var(--sapField_TextColor);background-color:var(--sapField_Background);border-radius:var(--_ui5-v2-8-0-rc-1-time_picker_border_radius);margin:var(--_ui5-v2-8-0-rc-1_input_margin_top_bottom) 0;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}:host([value-state="Negative"]){background-color:var(--sapField_InvalidBackground)}:host(:not([disabled]):hover){background:var(--sapField_Hover_Background)}.ui5-time-picker-root{line-height:inherit;letter-spacing:inherit;word-spacing:inherit;height:inherit}:host .ui5-time-picker-input{width:100%;color:inherit;background-color:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;margin:inherit;height:inherit}.ui5-time-picker-popover::part(header){padding:0}
`;
//# sourceMappingURL=TimePicker.css.js.map