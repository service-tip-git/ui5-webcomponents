import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
export default `.ui5-sn-item-ul{margin:0;padding:0;list-style:none}.ui5-sn-item{display:flex;align-items:center;width:auto;box-sizing:border-box;text-decoration:none;position:relative;height:var(--_ui5-v2-8-1-rc-0_side_navigation_item_height);min-height:var(--_ui5-v2-8-1-rc-0_side_navigation_item_height);cursor:pointer;color:inherit;background-color:var(--sapList_Background);border-radius:var(--_ui5-v2-8-1-rc-0_side_navigation_item_border_radius);transition:var(--_ui5-v2-8-1-rc-0_side_navigation_item_transition);margin-block-end:var(--_ui5-v2-8-1-rc-0_side_navigation_item_bottom_margin)}:host(.ui5-sn-item-hidden[side-nav-collapsed]),:host([side-nav-collapsed]) .ui5-sn-item-hidden{display:none}:host([design="Action"]){color:var(--sapButton_TextColor)}:host([design="Action"]) .ui5-sn-item:not(.ui5-sn-item-disabled):active [ui5-icon],:host([design="Action"]) .ui5-sn-item:not(.ui5-sn-item-disabled):active .ui5-sn-item-text{color:var(--_ui5-v2-8-1-rc-0_side_navigation_active_text_color)}:host([design="Action"]) .ui5-sn-item{border:var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);box-sizing:content-box}:host([design="Action"]:not([side-nav-collapsed])) .ui5-sn-item{max-width:-moz-available;max-width:-webkit-fill-available;max-width:fill-available}:host([design="Action"]) .ui5-sn-item:not(.ui5-sn-item-disabled):hover{border:var(--_ui5-v2-8-1-rc-0_side_navigation_action_item_border_hover);background:var(--sapButton_Hover_Background)}:host([design="Action"]) .ui5-sn-item:not(.ui5-sn-item-disabled):active{border:var(--_ui5-v2-8-1-rc-0_side_navigation_action_item_border_active);background:var(--sapButton_Active_Background)}.ui5-sn-item:focus{outline:none}:host([desktop]) .ui5-sn-item:focus:after,.ui5-sn-item:focus-visible:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;content:"";inset:var(--_ui5-v2-8-1-rc-0_side_navigation_item_focus_border_offset);z-index:2;pointer-events:none;border-radius:var(--_ui5-v2-8-1-rc-0_side_navigation_item_focus_border_radius)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:focus:before{border:var(--_ui5-v2-8-1-rc-0_side_navigation_selected_and_focused_border_style_color)}.ui5-sn-item.ui5-sn-item-group:before,.ui5-sn-item.ui5-sn-item-level1:before{border:var(--_ui5-v2-8-1-rc-0_side_navigation_group_border_style_color);border-width:var(--_ui5-v2-8-1-rc-0_side_navigation_group_border_width)}.ui5-sn-item-group[aria-expanded=true]:before,.ui5-sn-item-level1[aria-expanded=true]:before{border-width:var(--_ui5-v2-8-1-rc-0_side_navigation_group_expanded_border_width)}.ui5-sn-item:before{content:"";position:absolute;inset:0;pointer-events:none}.ui5-sn-item.ui5-sn-item-disabled{opacity:var(--sapContent_DisabledOpacity);cursor:default}:host([ui5-side-navigation-item][in-popover][unselectable]) .ui5-sn-item{cursor:unset}:host(:not([ui5-side-navigation-item][in-popover][unselectable])) .ui5-sn-item:not(.ui5-sn-item-disabled):hover{background:var(--sapList_Hover_Background)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected{background:var(--_ui5-v2-8-1-rc-0_side_navigation_collapsed_selected_item_background)}.ui5-sn-item:not(.ui5-sn-item-disabled):active .ui5-sn-item-text,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active .ui5-sn-item-text{color:var(--sapList_Active_TextColor)}.ui5-sn-item:not(.ui5-sn-item-disabled):active [ui5-icon],.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active [ui5-icon]{color:var(--sapList_Active_TextColor)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:hover{background:var(--_ui5-v2-8-1-rc-0_side_navigation_collapsed_selected_item_background_hover)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:active,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected.ui5-sn-item-active,:host(:not([ui5-side-navigation-item][in-popover][unselectable])) .ui5-sn-item:not(.ui5-sn-item-disabled):active,.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-active,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:active,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected.ui5-sn-item-active{background:var(--sapList_Active_Background)}.ui5-sn-item:before{border:var(--_ui5-v2-8-1-rc-0_side_navigation_item_border_style_color);border-width:var(--_ui5-v2-8-1-rc-0_side_navigation_item_border_width)}:host([side-nav-collapsed]) .ui5-sn-item:before{border-width:var(--_ui5-v2-8-1-rc-0_side_navigation_item_border_width)}.ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:before{border:var(--_ui5-v2-8-1-rc-0_side_navigation_selected_border_style_color);border-width:var(--_ui5-v2-8-1-rc-0_side_navigation_selected_border_width)}:host(:not([design="Action"])) .ui5-sn-item:not(.ui5-sn-item-disabled):not(.ui5-sn-item-selected):hover:before{border:var(--_ui5-v2-8-1-rc-0_side_navigation_hover_border_style_color);border-width:var(--_ui5-v2-8-1-rc-0_side_navigation_hover_border_width)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-disabled).ui5-sn-item-selected:before{border-radius:var(--_ui5-v2-8-1-rc-0_side_navigation_item_border_radius)}:host([in-popover]:last-of-type) .ui5-sn-item:not(:hover):not(:active):before{border:var(--_ui5-v2-8-1-rc-0_side_navigation_last_item_border_style)}.ui5-sn-item-icon{color:var(--_ui5-v2-8-1-rc-0_side_navigation_icon_color);padding-inline-start:1rem;padding-inline-end:var(--_ui5-v2-8-1-rc-0_side_navigation_icon_padding_inline_end)}:host([design="Action"]) .ui5-sn-item-icon{color:var(--sapButton_TextColor)}.ui5-sn-item-toggle-icon,.ui5-sn-item-external-link-icon{color:var(--_ui5-v2-8-1-rc-0_side_navigation_expand_icon_color);min-width:2rem;height:.875rem}:host([design="Action"]) .ui5-sn-item-toggle-icon,:host([design="Action"]) .ui5-sn-item-external-link-icon{color:var(--sapButton_TextColor)}.ui5-sn-item-external-link-icon{min-width:3rem}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-toggle-icon,:host(:not([side-nav-collapsed])) .ui5-sn-item-toggle-icon{min-width:var(--_ui5-v2-8-1-rc-0_side_navigation_expand_icon_width);padding-inline:.25rem .375rem;padding-block:.25rem;border-inline-start:.0625rem solid var(--sapTextColor);margin-inline-start:1rem}:host([unselectable]:not([side-nav-collapsed])) .ui5-sn-item-toggle-icon,:host(:not([side-nav-collapsed])) .ui5-sn-item-group .ui5-sn-item-toggle-icon,:host([unselectable][side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-toggle-icon,:host([unselectable][side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-toggle-icon{border-inline-start:none}:host([in-popover]) .ui5-sn-item-toggle-icon{display:none}:host([side-nav-collapsed]) .ui5-sn-item{justify-content:center}:host([slot="fixedItems"]:not(side-nav-collapsed)) .ui5-sn-item.ui5-sn-item-level1{margin-top:var(--_ui5-v2-8-1-rc-0_side_navigation_first_fixed_item_margin_top)}:host([side-nav-collapsed]) .ui5-sn-item-icon{padding-inline-end:1rem}:host([design="Action"][side-nav-collapsed]) .ui5-sn-item-icon{padding-inline-end:calc(1rem - 1px);padding-inline-start:calc(1rem - 1px)}:host([side-nav-collapsed]) .ui5-sn-item-text{display:none}:host([side-nav-collapsed]) .ui5-sn-item-toggle-icon{display:var(--_ui5-v2-8-1-rc-0_side_navigation_item_expand_icon_visibility);font-size:.75rem;position:absolute;inset-inline-end:var(--_ui5-v2-8-1-rc-0_side_navigation_item_expand_icon_right)}:host([side-nav-collapsed]) .ui5-sn-item-external-link-icon{display:none}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus{width:var(--_ui5-v2-8-1-rc-0_side_navigation_item_collapsed_hover_focus_width);box-shadow:var(--_ui5-v2-8-1-rc-0_side_navigation_box_shadow);z-index:1;padding-inline-end:var(--_ui5-v2-8-1-rc-0_side_navigation_item_collapsed_padding_right)}:host([side-nav-collapsed]) a.ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover:not(.ui5-sn-item-with-expander),:host([side-nav-collapsed]) a.ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus:not(.ui5-sn-item-with-expander){padding-inline-end:0}:host([unselectable][side-nav-collapsed]) .ui5-sn-item.ui5-sn-item.ui5-sn-item-with-expander:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover,:host([unselectable][side-nav-collapsed]) .ui5-sn-item.ui5-sn-item.ui5-sn-item-with-expander:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus{padding-inline-end:var(--_ui5-v2-8-1-rc-0_side_navigation_item_collapsed_unselectable_padding)}:host([unselectable][side-nav-collapsed]) div.ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):not(.ui5-sn-item-with-expander):hover,:host([unselectable][side-nav-collapsed]) div.ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):not(.ui5-sn-item-with-expander):focus{padding-inline-end:var(--_ui5-v2-8-1-rc-0_side_navigation_action_item_collapsed_padding)}:host([side-nav-collapsed]) .ui5-sn-item.ui5-sn-item-selected:hover,:host([side-nav-collapsed]) .ui5-sn-item.ui5-sn-item-selected:focus{background:var(--sapList_SelectionBackgroundColor)}:host([side-nav-collapsed]) div.ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover:not(.ui5-sn-item-with-expander),:host([side-nav-collapsed]) div.ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus:not(.ui5-sn-item-with-expander),:host([side-nav-collapsed]) a.ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover:not(.ui5-sn-item-with-expander):not([target=_blank]),:host([side-nav-collapsed]) a.ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus:not(.ui5-sn-item-with-expander):not([target=_blank]){padding-inline-end:var(--_ui5-v2-8-1-rc-0_side_navigation_item_collapsed_hover_focus_padding_right)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-text,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-text,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-external-link-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-external-link-icon{display:var(--_ui5-v2-8-1-rc-0_side_navigation_item_collapsed_hover_focus_display)}:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):hover .ui5-sn-item-toggle-icon,:host([side-nav-collapsed]) .ui5-sn-item:not(.ui5-sn-item-active):not(.ui5-sn-item-no-hover-effect):focus .ui5-sn-item-toggle-icon{left:var(--_ui5-v2-8-1-rc-0_side_navigation_item_expand_icon_hover_left);right:var(--_ui5-v2-8-1-rc-0_side_navigation_item_expand_icon_hover_right)}.ui5-sn-item[aria-expanded=false]~.ui5-sn-item-ul{display:none}.ui5-sn-item-text{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui5-sn-item-with-expander .ui5-sn-item-icon:after{display:var(--_ui5-v2-8-1-rc-0_side_navigation_triangle_display);content:"";width:0;height:0;border-left:.375rem solid transparent;border-bottom:.375rem solid var(--_ui5-v2-8-1-rc-0_side_navigation_triangle_color);position:absolute;right:.1875rem;bottom:.125rem}.ui5-sn-item-separator{min-height:.625rem}:host{font-size:var(--sapFontSmallSize);font-family:var(--sapFontSemiboldFamily);color:var(--sapContent_LabelColor)}.ui5-sn-item.ui5-sn-item-group{min-height:2rem;padding-inline-start:var(--_ui5-v2-8-1-rc-0_side_navigation_group_padding);gap:.4375rem;font-family:var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-sn-item.ui5-sn-item-group:hover .ui5-sn-item-toggle-icon,.ui5-sn-item.ui5-sn-item-group:focus .ui5-sn-item-toggle-icon{display:block}:host(:first-child) .ui5-sn-item-separator:first-child,:host(:last-child) .ui5-sn-item-separator:last-child,.ui5-sn-item-group-below-group.ui5-sn-item-separator,.ui5-sn-item-group-below-group .ui5-sn-item-separator:first-child{display:none}.ui5-sn-spacer{margin:var(--_ui5-v2-8-1-rc-0_side_navigation_navigation_separator_margin);height:var(--_ui5-v2-8-1-rc-0_side_navigation_navigation_separator_height);min-height:var(--_ui5-v2-8-1-rc-0_side_navigation_navigation_separator_height);background-color:var(--_ui5-v2-8-1-rc-0_side_navigation_navigation_separator_background_color);border-radius:var(--_ui5-v2-8-1-rc-0_side_navigation_navigation_separator_radius)}.ui5-sn-collapsed .ui5-sn-spacer{margin:var(--_ui5-v2-8-1-rc-0_side_navigation_navigation_separator_margin_collapsed)}:host(:not([hidden])){display:inline-block;height:100%;min-width:var(--_ui5-v2-8-1-rc-0_side_navigation_width);width:var(--_ui5-v2-8-1-rc-0_side_navigation_width);max-width:100%;transition:width .3s,min-width .3s;box-shadow:var(--_ui5-v2-8-1-rc-0_side_navigation_box_shadow);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);background:var(--sapList_Background)}:host([collapsed]){min-width:var(--_ui5-v2-8-1-rc-0_side_navigation_collapsed_width);width:var(--_ui5-v2-8-1-rc-0_side_navigation_collapsed_width)}.ui5-sn-root{height:100%;display:flex;flex-direction:column;box-sizing:border-box;border-radius:inherit;border-inline-end:var(--_ui5-v2-8-1-rc-0_side_navigation_border_right)}.ui5-sn-flexible{display:flex;flex-direction:column;flex:1;min-height:0;position:relative;box-sizing:border-box}.ui5-sn-fixed{position:relative}.ui5-sn-list{margin:0;list-style:none;box-sizing:border-box;overflow:hidden auto}.ui5-sn-list.ui5-sn-flexible{padding:var(--_ui5-v2-8-1-rc-0_side_navigation_padding-flexible)}.ui5-sn-list.ui5-sn-fixed{padding:var(--_ui5-v2-8-1-rc-0_side_navigation_padding-fixed)}.ui5-sn-collapsed .ui5-sn-list{overflow:visible;display:flex;flex-direction:column}:host([in-popover]) .ui5-sn-list{padding:var(--_ui5-v2-8-1-rc-0_side_navigation_parent_popup_padding)}.ui5-sn-item-overflow{margin-top:auto}
`;
//# sourceMappingURL=SideNavigation.css.js.map