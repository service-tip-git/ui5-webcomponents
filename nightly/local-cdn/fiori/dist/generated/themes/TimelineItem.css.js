import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
export default `:host(:not([hidden])){display:block}.ui5-tli-root{display:flex}:host([layout="Vertical"]) .ui5-tli-indicator{position:relative;width:2rem}:host([layout="Horizontal"]) .ui5-tli-indicator{position:relative;display:flex;height:2rem;align-items:center}:host([layout="Vertical"]) .ui5-tli-indicator:before{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);width:.0625rem;position:absolute;inset-block-start:2rem;bottom:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_before_bottom);inset-inline-start:50%}:host([state="Positive"]) .ui5-tli-icon{color:var(--sapPositiveElementColor)}:host([state="Negative"]) .ui5-tli-icon{color:var(--sapNegativeElementColor)}:host([state="Critical"]) .ui5-tli-icon{color:var(--sapCriticalElementColor)}:host([state="Information"]) .ui5-tli-icon{color:var(--sapInformativeElementColor)}:host(:not([icon])[layout="Vertical"]) .ui5-tli-indicator:before{inset-block-start:1.75rem}:host([position-in-group][layout="Vertical"]) .ui5-tli-indicator:before{bottom:-1.5rem}:host([position-in-group][layout="Vertical"]) .ui5-tli-indicator.ui5-tli-indicator-large-line:before{bottom:-1.75rem}:host(:first-child[layout="Vertical"]:not([first-item-in-timeline])[icon]) .ui5-tli-indicator:after{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);width:.0625rem;position:absolute;inset-block-start:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_after_top);bottom:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_before_bottom);inset-inline-start:50%;height:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_after_height)}:host(:not([position-in-group])[layout="Vertical"]) .ui5-tli-indicator.ui5-tli-indicator-large-line:before{bottom:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_before_without_icon_bottom)}:host([layout="Vertical"]):not([icon]) .ui5-tli-indicator:before{bottom:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_before_without_icon_bottom);inset-block-start:1.875rem}:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator:before{inset-block-start:50%;inset-inline-end:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_before_without_icon_right);inset-inline-start:1rem}:host([layout="Vertical"]):not([icon]) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{bottom:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_before_bottom)}:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{inset-inline-end:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_before_right)}:host(:not([icon])) .ui5-tli-indicator:after{content:"";display:inline-block;box-sizing:border-box;border:.0625rem solid var(--sapContent_NonInteractiveIconColor);background-color:var(--sapContent_NonInteractiveIconColor);border-radius:50%;width:.375rem;height:.375rem;position:absolute;inset-block-start:.9375rem;inset-inline-start:51.75%;transform:translate(-50%)}:host([layout="Horizontal"]:not([icon])) .ui5-tli-indicator:after{inset-block-start:.84rem;inset-inline-start:.9625rem}:host(:last-child) .ui5-tli-indicator:before{display:none}.ui5-tli-icon-outer{display:flex;justify-content:center;align-items:center;margin-block-start:.25rem;height:1.625rem;width:2rem}:host([layout="Horizontal"]) .ui5-tli-icon-outer{margin-block-start:0rem;height:1.3125rem}.ui5-tli-icon{color:var(--sapContent_NonInteractiveIconColor);height:1.375rem;width:1.375rem}:host([layout="Horizontal"]) .ui5-tli-dummy-icon-container{height:1.375rem;width:1.375rem;display:inline-block;outline:none}.ui5-tli-bubble{background:var(--sapGroup_ContentBackground);border:.0625rem solid var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_border_color);box-sizing:border-box;border-radius:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_border_radius);flex:1;position:relative;margin-left:.5rem;padding:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_content_padding);word-break:break-word}:host([layout="Horizontal"]) .ui5-tli-bubble{margin-top:.5rem;margin-left:0}.ui5-tli-bubble:focus{outline:none}.ui5-tli-bubble:focus:after{content:"";border:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_border_width) var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_border_style) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_focus_border_radius);position:absolute;inset-block-start:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_border_top);inset-inline-end:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_border_right);bottom:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_border_bottom);inset-inline-start:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_border_left);pointer-events:none}:host([layout="Horizontal"]) .ui5-tli-bubble:focus:after{inset-block-start:var(--_ui5-v2-7-0-rc-2_TimelineItem_horizontal_bubble_focus_top_offset);inset-inline-start:var(--_ui5-v2-7-0-rc-2_TimelineItem_horizontal_bubble_focus_left_offset)}.ui5-tli-bubble-arrow{width:var(--_ui5-v2-7-0-rc-2_TimelineItem_arrow_size);padding-bottom:var(--_ui5-v2-7-0-rc-2_TimelineItem_arrow_size);position:absolute;pointer-events:none;top:0;left:0;overflow:hidden}.ui5-tli-bubble-arrow:before{content:"";background:var(--sapGroup_ContentBackground);border:.0625rem solid var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_border_color);position:absolute;top:0;left:0;width:100%;height:100%;transform-origin:0 100%;transform:rotate(45deg)}:host([layout="Horizontal"]) .ui5-tli-bubble-arrow:before{transform:rotate(315deg)}.ui5-tli-bubble-arrow--left{left:calc(-1 * var(--_ui5-v2-7-0-rc-2_TimelineItem_arrow_size))}.ui5-tli-bubble-arrow--top{inset-block-start:calc(-1 * var(--_ui5-v2-7-0-rc-2_TimelineItem_arrow_size))}.ui5-tli-bubble-arrow--left:before{left:50%;width:50%;transform-origin:100% 100%}.ui5-tli-bubble-arrow--top:before{left:42%;width:75%;transform-origin:152% 104%}.ui5-tli-title,.ui5-tli-desc{color:var(--sapTextColor);font-family:var(--sapFontFamily);font-weight:400;font-size:var(--sapFontSize)}.ui5-tli-title span{display:inline-block}.ui5-tli-subtitle{color:var(--sapContent_LabelColor);font-family:var(--sapFontFamily);font-weight:400;font-size:var(--sapFontSmallSize);padding-block-start:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_content_subtitle_padding_top)}.ui5-tli-desc{padding-block-start:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_content_description_padding_top)}:dir(rtl) .ui5-tli-bubble-arrow--left{right:calc(-1 * var(--_ui5-v2-7-0-rc-2_TimelineItem_arrow_size));left:auto;transform:scaleX(-1)}:dir(rtl) .ui5-tli-bubble-arrow--top{right:0;left:auto;transform:scaleX(-1)}:dir(rtl) .ui5-tli-bubble{margin-left:auto;margin-right:.5rem}:host([layout="Horizontal"]:dir(rtl)) .ui5-tli-bubble{margin-right:0}:dir(rtl) .ui5-tli-bubble:focus:after{left:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_rtl_left_offset);right:var(--_ui5-v2-7-0-rc-2_TimelineItem_bubble_rtl_right_offset)}:host([layout="Horizontal"]:dir(rtl)) .ui5-tli-bubble:focus:after{right:0}:host([layout="Horizontal"]:not([icon]):dir(rtl)) .ui5-tli-indicator:after{right:.625rem}:host([layout="Horizontal"]:not([icon]):dir(rtl)) .ui5-tli-indicator:before{right:1.9375rem;left:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_before_right)}:host([layout="Horizontal"]:dir(rtl)) .ui5-tli-indicator:before{left:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_before_right);right:2.125rem}:host{align-content:end}:host([hide-bubble]){display:none}.ui5-tli-group-item-btn-arrow{position:absolute;width:.5rem;height:.5rem;transform:rotate(45deg);border:.0625rem solid var(--sapButton_BorderColor);background-color:var(--sapButton_Background);inset-inline-end:4.25rem;inset-block-start:.8125rem;border-inline-end-color:transparent;border-block-start-color:transparent}.ui5-tli-root:hover .ui5-tli-group-item-btn-arrow{background-color:var(--sapButton_Hover_Background)}:host([layout="Horizontal"]) .ui5-tli-root{flex-direction:column}:host([layout="Horizontal"][is-next-item-group]:last-child:not([last-item])) .ui5-tli-indicator:before{height:.0625rem;inset-block-start:50%;inset-inline-start:1.75rem}:host([position-in-group][layout="Horizontal"][is-next-item-group]:last-child:not([last-item])) .ui5-tli-indicator:before{inset-inline-start:1.625rem;width:calc(100% + .5rem)}:host([layout="Vertical"]:last-child:not([last-item])) .ui5-tli-indicator:before{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);inset-block-start:2rem;position:absolute;height:var(--_ui5-v2-7-0-rc-2_timeline_tli_indicator_before_height)}:host(:not([icon])[layout="Vertical"]:last-child:not([last-item])) .ui5-tli-indicator:before{inset-block-start:1.75rem}:host([layout="Horizontal"]){height:auto;min-width:3rem;margin-inline-end:.25rem}:host([icon][layout="Horizontal"]:not([last-item])) .ui5-tli-indicator:after,:host(:not([icon])[layout="Horizontal"]:not([last-item])) .ui5-tli-indicator:before{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);height:.0625rem;inset-block-start:1rem;position:absolute;width:var(--_ui5-v2-7-0-rc-2_timeline_tli_horizontal_indicator_after_width);inset-inline-start:1.5rem}:host([icon][layout="Horizontal"]:not([last-item])) .ui5-tli-indicator:after{inset-inline-start:var(--_ui5-v2-7-0-rc-2_timeline_tli_horizontal_indicator_after_left)}:host([icon][layout="Horizontal"]:not([last-item]):not([is-next-item-group])) .ui5-tli-indicator:after{width:calc(var(--_ui5-v2-7-0-rc-2_timeline_tli_icon_horizontal_indicator_after_width) + 1.25rem)}:host(:not([icon])[layout="Horizontal"]:not([last-item])[is-next-item-group]) .ui5-tli-indicator:before{width:var(--_ui5-v2-7-0-rc-2_timeline_tli_horizontal_without_icon_indicator_before_width)}:host([is-next-item-group][icon][layout="Horizontal"]:not([last-item])) .ui5-tli-indicator.ui5-tli-indicator-large-line:after{width:var(--_ui5-v2-7-0-rc-2_timeline_tli_horizontal_indicator_short_after_width)}:host([icon][layout="Horizontal"]:not([last-item])) .ui5-tli-indicator-short-line:after{content:"";display:inline-block;background-color:var(--sapContent_ForegroundBorderColor);height:.0625rem;inset-block-start:1rem;position:absolute;width:100%;inset-inline-start:1.9375rem}:host(:not([position-in-group])[icon][layout="Horizontal"]:not([last-item])) .ui5-tli-indicator-short-line:after{width:var(--_ui5-v2-7-0-rc-2_timeline_tli_horizontal_indicator_short_after_width)}:host([position-in-group][icon][layout="Horizontal"]:not([last-item])) .ui5-tli-indicator-short-line:after{width:calc(100% - .5rem)}:host([icon][layout="Horizontal"]:not([last-item]):not([is-next-item-group])) .ui5-tli-indicator-large-line:after{width:var(--_ui5-v2-7-0-rc-2_timeline_tli_icon_horizontal_indicator_after_width)}:host([position-in-group]:not([icon])[layout="Horizontal"]:not([last-item]):not([is-next-item-group])) .ui5-tli-indicator:before{width:calc(100% + .125rem)}:host([position-in-group]:not([icon])[layout="Horizontal"]:not([last-item]):not([is-next-item-group])) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{width:100%}:host([position-in-group][icon][layout="Horizontal"]:not([last-item]):not([is-next-item-group])) .ui5-tli-indicator-large-line:after{width:calc(100% - .25rem)}:host(:not([icon])[layout="Horizontal"]:not([last-item]):not([is-next-item-group])) .ui5-tli-indicator:before{width:var(--_ui5-v2-7-0-rc-2_timeline_tli_horizontal_indicator_before_width);inset-inline-start:1.625rem}:host(:not([icon])[layout="Horizontal"]:not([last-item])) .ui5-tli-indicator.ui5-tli-indicator-short-line:before{width:var(--_ui5-v2-7-0-rc-2_timeline_tli_without_icon_horizontal_indicator_before_width);inset-inline-start:1.5rem}
`;
//# sourceMappingURL=TimelineItem.css.js.map