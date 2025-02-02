import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
export default `:host{box-sizing:border-box;height:var(--_ui5-v2-7-0-rc-2_list_item_base_height);background-color:var(--ui5-v2-7-0-rc-2-listitem-background-color);border-bottom:.0625rem solid transparent}:host(:not([hidden])){display:block}:host([disabled]){opacity:var(--_ui5-v2-7-0-rc-2-listitembase_disabled_opacity);pointer-events:none}:host([actionable]:not([disabled]):not([ui5-li-group-header])){cursor:pointer}:host([has-border]){border-bottom:var(--ui5-v2-7-0-rc-2-listitem-border-bottom)}:host([selected]){background-color:var(--sapList_SelectionBackgroundColor);border-bottom:var(--ui5-v2-7-0-rc-2-listitem-selected-border-bottom);.ui5-li-additional-text{text-shadow:var(--sapContent_TextShadow)}}:host([actionable]:not([active]):not([selected]):not([ui5-li-group-header]):hover){background-color:var(--sapList_Hover_Background);.ui5-li-additional-text{text-shadow:var(--sapContent_TextShadow)}}:host([actionable][selected]:not([active],[data-moving]):hover){background-color:var(--sapList_Hover_SelectionBackground)}:host([active][actionable]:not([data-moving])),:host([active][actionable][selected]:not([data-moving])){background-color:var(--sapList_Active_Background)}:host([desktop]:not([data-moving])) .ui5-li-root.ui5-li--focusable:focus:after,:host([desktop][focused]:not([data-moving])) .ui5-li-root.ui5-li--focusable:after,:host(:not([data-moving])) .ui5-li-root.ui5-li--focusable:focus-visible:after,:host([desktop]:not([data-moving])) .ui5-li-root .ui5-li-content:focus:after,:host([desktop][focused]:not([data-moving])) .ui5-li-root .ui5-li-content:after,:host(:not([data-moving])) .ui5-li-root .ui5-li-content:focus-visible:after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:.125rem;pointer-events:none}.ui5-li-root{position:relative;display:flex;align-items:center;width:100%;height:100%;padding:var(--_ui5-v2-7-0-rc-2_list_item_base_padding);box-sizing:border-box;background-color:inherit}.ui5-li-root.ui5-li--focusable{outline:none}.ui5-li-content{display:flex;align-items:center;flex:auto;overflow:hidden;max-width:100%;font-family:"72override",var(--sapFontFamily);color:var(--sapList_TextColor)}.ui5-li-content .ui5-li-title{color:var(--sapList_TextColor);font-size:var(--_ui5-v2-7-0-rc-2_list_item_title_size)}.ui5-li-text-wrapper{display:flex;flex-direction:row;justify-content:space-between;flex:auto;min-width:1px;line-height:normal}
`;
//# sourceMappingURL=ListItemBase.css.js.map