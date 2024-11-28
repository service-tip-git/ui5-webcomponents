import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/StepInput.css.ts", content: `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-5-0-rc-1_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-5-0-rc-1_input_icon_padding);border-inline-start:var(--_ui5-v2-5-0-rc-1_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-5-0-rc-1_input_icon_border_radius)}.inputIcon[pressed]{background:var(--_ui5-v2-5-0-rc-1_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-5-0-rc-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-5-0-rc-1_select_hover_icon_left_border);color:var(--_ui5-v2-5-0-rc-1_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-5-0-rc-1_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-5-0-rc-1_select_hover_icon_left_border);color:var(--_ui5-v2-5-0-rc-1_input_icon_pressed_color)}.inputIcon:not([pressed]):not(:active):hover{background:var(--_ui5-v2-5-0-rc-1_input_icon_hover_bg);box-shadow:var(--_ui5-v2-5-0-rc-1_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-5-0-rc-1_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-5-0-rc-1_input_icon_box_shadow)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v2-5-0-rc-1_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-5-0-rc-1_input_readonly_background)}:host([disabled]){opacity:var(--_ui5-v2-5-0-rc-1_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-5-0-rc-1-input_disabled_background);border-color:var(--_ui5-v2-5-0-rc-1_input_disabled_border_color)}:host([value-state="Negative"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-5-0-rc-1_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-5-0-rc-1_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-5-0-rc-1_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:not([pressed]):not(:active):hover{box-shadow:var(--_ui5-v2-5-0-rc-1_input_success_icon_box_shadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-5-0-rc-1_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-5-0-rc-1_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-5-0-rc-1_input_value_state_success_border_color);border-width:var(--_ui5-v2-5-0-rc-1_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-5-0-rc-1_input_value_state_information_border_color);border-width:var(--_ui5-v2-5-0-rc-1_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-5-0-rc-1_input_error_icon_box_shadow);color:var(--_ui5-v2-5-0-rc-1_input_icon_error_pressed_color)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-5-0-rc-1_input_warning_icon_box_shadow);color:var(--_ui5-v2-5-0-rc-1_input_icon_warning_pressed_color)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-5-0-rc-1_input_information_icon_box_shadow);color:var(--_ui5-v2-5-0-rc-1_input_icon_information_pressed_color)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon[pressed]{box-shadow:var(--_ui5-v2-5-0-rc-1_input_success_icon_box_shadow);color:var(--_ui5-v2-5-0-rc-1_input_icon_success_pressed_color)}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-5-0-rc-1_input_error_warning_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-5-0-rc-1_input_information_icon_padding)}:host(:not([hidden])){display:inline-block;width:100%;line-height:normal;letter-spacing:normal;word-spacing:normal}:host{--ui5-v2-5-0-rc-1_input_focus_pseudo_element_content: none;color:var(--sapField_TextColor);background-color:var(--sapField_Background);border:var(--_ui5-v2-5-0-rc-1_step_input_border_style);border-radius:var(--sapField_BorderCornerRadius);box-sizing:border-box;height:var(--_ui5-v2-5-0-rc-1_input_height);position:relative;margin:var(--_ui5-v2-5-0-rc-1_input_margin_top_bottom) 0;min-width:var(--_ui5-v2-5-0-rc-1_step_input_min_width);text-align:right;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}:host .ui5-step-input-input{text-align:inherit;height:inherit}:host(:not([value-state]):not([readonly]):not([disabled])){box-shadow:none}:host(:not([value-state]):not([readonly]):not([disabled]):hover),:host([value-state="None"]:not([readonly]):not([disabled]):hover){background-color:var(--_ui5-v2-5-0-rc-1_step_input_border_color_hover);border:var(--_ui5-v2-5-0-rc-1_step_input_border_hover)}:host(:not([value-state]):not([readonly]):not([disabled]):not([focused]):hover),:host([value-state="None"]:not([readonly]):not([disabled]):not([focused]):hover){background-color:var(--sapField_Hover_Background);border:var(--_ui5-v2-5-0-rc-1_step_input_border_style_hover);box-shadow:var(--sapField_Hover_Shadow)}:host([value-state="Positive"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_InformationShadow)}:host([value-state="Critical"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Negative"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled]):hover),:host([value-state="Negative"]:not([readonly]):not([disabled]):hover),:host([value-state="Information"]:not([readonly]):not([disabled]):hover),:host([value-state="Critical"]:not([readonly]):not([disabled]):hover){background-color:var(--_ui5-v2-5-0-rc-1-step_input_button_state_hover_background_color)}:host(:not([value-state]):not([readonly]):not([disabled])[focused]),:host([value-state="None"]:not([readonly]):not([disabled])[focused]),:host([value-state="Positive"]:not([readonly]):not([disabled])[focused]),:host([value-state="Negative"]:not([readonly]):not([disabled])[focused]),:host([value-state="Information"]:not([readonly]):not([disabled])[focused]),:host([value-state="Critical"]:not([readonly]):not([disabled])[focused]){background-color:var(--sapField_Focus_Background)}:host([value-state="Positive"]:not([readonly]):not([disabled])):after,:host([value-state="Negative"]:not([readonly]):not([disabled])):after,:host([value-state="None"]:not([readonly]):not([disabled])):after,:host([value-state="Information"]:not([readonly]):not([disabled])):after,:host([value-state="Critical"]:not([readonly]):not([disabled])):after{position:absolute;content:"";inset:-1px;outline:none;pointer-events:none;border-radius:var(--sapField_BorderCornerRadius);border-style:var(--_ui5-v2-5-0-rc-1_input_error_warning_border_style);z-index:1;border-width:0px}:host([value-state="Information"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_InformationColor);border-width:var(--_ui5-v2-5-0-rc-1_input_information_border_width)}:host([value-state="Critical"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_WarningColor);border-width:2px}:host([value-state="Positive"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_SuccessColor);border-width:1px}:host([value-state="Negative"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_InvalidColor);border-width:var(--_ui5-v2-5-0-rc-1_input_information_border_width)}:host([value-state]):after{border-width:var(--_ui5-v2-5-0-rc-1_input_state_border_width)}:host([value-state="Negative"]:not([readonly]):not([disabled])) .ui5-step-input-input{background-color:var(--_ui5-v2-5-0-rc-1_input_input_background_color)}:host([value-state="Negative"]:not([readonly]):not([disabled])) .ui5-step-input-input:hover{background-color:var(--_ui5-v2-5-0-rc-1_step_input_input_error_background_color)}:host([value-state]:not([value-state="None"]) .ui5-step-input-input[focused]){outline:none}:host .ui5-step-input-input{width:100%;color:inherit;background-color:inherit;border:var(--_ui5-v2-5-0-rc-1_step_input_input_border);box-sizing:border-box;vertical-align:top;margin-top:var(--_ui5-v2-5-0-rc-1_step_input_input_margin_top);min-width:var(--_ui5-v2-5-0-rc-1_step_input_min_width);padding-inline-start:var(--_ui5-v2-5-0-rc-1_step_input_padding);padding-inline-end:var(--_ui5-v2-5-0-rc-1_step_input_padding);position:relative;outline:none;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-step-input-input[readonly]{padding:0}:host .ui5-step-input-input:hover,:host .ui5-step-input-input[focused]{box-shadow:none}:host .ui5-step-input-root{white-space:nowrap;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;height:inherit}:host .ui5-step-input-input[text-align=left]{text-align:left}:host .ui5-step-input-input[text-align=center]{text-align:center}:host .ui5-step-input-input[text-align=right]{text-align:right}:host .ui5-step-icon{position:absolute;display:var(--_ui5-v2-5-0-rc-1_step_input_button_display);height:2rem;height:100%;background-color:var(--_ui5-v2-5-0-rc-1_step_input_button_background_color);z-index:0}:host .ui5-step-icon[focused]{border:none;outline:none}:host .ui5-step-icon.ui5-step-dec{left:var(--_ui5-v2-5-0-rc-1_step_input_button_left);z-index:1}:host .ui5-step-icon.ui5-step-inc{right:var(--_ui5-v2-5-0-rc-1_step_input_button_right)}:host .ui5-step-icon *:not([clickable]),:host .ui5-step-icon *:not([clickable]):active,:host .ui5-step-icon *:not([clickable]):hover{opacity:.5;background-color:transparent;color:var(--sapContent_IconColor)}:host .ui5-step-icon :not([clickable]) *:hover,:host .ui5-step-icon :not([clickable]) *:active{background-color:var(--sapField_Background);color:var(--sapContent_IconColor)}:host .ui5-step-input-input[focused]:after{position:absolute;content:"";border:var(--_ui5-v2-5-0-rc-1_step_input_input_border_focused_after);top:var(--_ui5-v2-5-0-rc-1_step_input_input_border_top_bottom_focused_after);right:0;bottom:var(--_ui5-v2-5-0-rc-1_step_input_input_border_top_bottom_focused_after);border-radius:var(--_ui5-v2-5-0-rc-1_step_input_input_border_radius_focused_after);left:0;outline:none;pointer-events:none;z-index:1}:host .ui5-step-input-input[focused]{outline:none}:host([value-state="Information"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-5-0-rc-1_step_input_input_information_border_color_focused_after)}:host([value-state="Critical"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-5-0-rc-1_step_input_input_warning_border_color_focused_after)}:host([value-state="Positive"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-5-0-rc-1_step_input_input_success_border_color_focused_after)}:host([value-state="Negative"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-5-0-rc-1_step_input_input_error_border_color_focused_after)}:host .ui5-step-input-input::-webkit-outer-spin-button,:host .ui5-step-input-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}:host([disabled]) .ui5-step-icon{background-color:var(--_ui5-v2-5-0-rc-1_step_input_disabled_button_background)}:host([disabled]) .ui5-step-icon [ui5-icon]{color:var(--sapField_ReadOnly_BorderColor)}
` };
export default styleData;
//# sourceMappingURL=StepInput.css.js.map