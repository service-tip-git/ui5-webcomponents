import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
export default `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;max-width:100%;min-height:var(--_ui5-v2-6-2_list_item_base_height);background:var(--ui5-v2-6-2-listitem-background-color);cursor:pointer}.ui5-nli-focusable:focus{outline:none}:host([desktop]) .ui5-nli-focusable:focus:not(.ui5-nli-group-root):after,.ui5-nli-focusable:focus-visible:not(.ui5-nli-group-root):after{content:"";border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);position:absolute;inset:0;pointer-events:none}.ui5-state-icon{min-width:1rem;min-height:1rem;padding-inline-end:var(--_ui5-v2-6-2-notification_item-state-icon-padding)}:host(:not([wrapping-type="Normal"])) .ui5-nli-title-text{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}:host(:not([wrapping-type="Normal"])) .ui5-nli-description{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}:host([_show-more-pressed]) .ui5-nli-title-text{-webkit-line-clamp:unset}:host([_show-more-pressed]) .ui5-nli-description{-webkit-line-clamp:unset}:host([read]) .ui5-nli-title-text{font-weight:400}:host(:first-of-type){border-top-left-radius:var(--_ui5-v2-6-2-notification_item-border-radius);border-top-right-radius:var(--_ui5-v2-6-2-notification_item-border-radius)}:host(:last-of-type){border-bottom-left-radius:var(--_ui5-v2-6-2-notification_item-border-radius);border-bottom-right-radius:var(--_ui5-v2-6-2-notification_item-border-radius)}:host(:first-of-type) .ui5-nli-focusable:after{border-top-left-radius:var(--_ui5-v2-6-2-notification_item-border-radius);border-top-right-radius:var(--_ui5-v2-6-2-notification_item-border-radius)}:host(:last-of-type) .ui5-nli-focusable:after{border-bottom-left-radius:var(--_ui5-v2-6-2-notification_item-border-radius);border-bottom-right-radius:var(--_ui5-v2-6-2-notification_item-border-radius)}:host([has-border]){border-bottom:var(--_ui5-v2-6-2-notification_item-border-bottom)}:host([ui5-li-notification]){margin:var(--_ui5-v2-6-2-notification_item-margin);border-left:var(--_ui5-v2-6-2-notification_item-border-top-left-right);border-right:var(--_ui5-v2-6-2-notification_item-border-top-left-right);border-top:var(--_ui5-v2-6-2-notification_item-border-top-left-right);border-radius:var(--_ui5-v2-6-2-notification_item-border-radius)}.ui5-nli-root{position:relative;width:100%;box-sizing:border-box;cursor:pointer;border-radius:var(--_ui5-v2-6-2-notification_item-border-radius);border:1px solid transparent}.ui5-nli-root:hover{background-color:var(--_ui5-v2-6-2-notification_item-background-color-hover);border-radius:var(--_ui5-v2-6-2-notification_item-border-radius)}:host([desktop]) .ui5-nli-root:focus:active,.ui5-nli-root:focus-visible:active{background-color:var(--_ui5-v2-6-2-notification_item-background-color-active);border-radius:var(--_ui5-v2-6-2-notification_item-border-radius);border:var(--_ui5-v2-6-2-notification_item-border-active)}.ui5-nli-content-wrapper{width:100%;display:flex;flex-direction:row-reverse;padding-inline:var(--_ui5-v2-6-2-notification_item-root-padding-inline);padding-block:1rem;position:relative;box-sizing:border-box}.ui5-nli-content{display:flex;flex-direction:column;flex:1;min-width:0;width:100%;padding-inline:var(--_ui5-v2-6-2-notification_item-content-padding);font-family:"72override",var(--sapFontFamily);box-sizing:border-box}.ui5-nli-content.ui5-nli-content-with-importance{margin-bottom:2rem}.ui5-nli-actions{position:absolute;top:.5rem;right:.5rem}:dir(rtl) .ui5-nli-actions{left:.5rem;right:auto}.ui5-nli-title-text-wrapper{display:flex;flex-direction:row}.ui5-nli-title-text{display:flex;margin-bottom:var(--_ui5-v2-6-2-notification_item-title-margin-bottom);box-sizing:border-box;color:var(--sapGroup_TitleTextColor);font-weight:700;font-size:var(--sapFontHeader6Size)}.ui5-nli-two-buttons .ui5-nli-title-text{padding-inline-end:var(--_ui5-v2-6-2-notification_item-title-padding-end-two-buttons)}.ui5-nli-one-button .ui5-nli-title-text{padding-inline-end:var(--_ui5-v2-6-2-notification_item-title-padding-end-one-button)}.ui5-nli-description{display:flex;margin-top:var(--_ui5-v2-6-2-notification_item-description-margin-top);color:var(--sapTextColor);font-size:var(--sapFontSize);box-sizing:border-box}.ui5-nli-footer{display:flex;color:var(--sapContent_LabelColor);font-size:var(--sapFontSize);margin-top:var(--_ui5-v2-6-2-notification_item-footer-margin-top);box-sizing:border-box;flex-wrap:wrap;align-items:center}.ui5-nli-footer-divider{position:relative;align-items:center;margin-inline:.5rem}.ui5-nli-footnotes{display:flex}.ui5-nli-footer-showMore{margin-inline-start:1rem}.ui5-nli-importance{width:fit-content;position:absolute;bottom:1rem}::slotted([slot^="footnotes"]){color:var(--sapContent_LabelColor);font-size:var(--sapFontSize);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui5-nli-menu-btn{margin-inline-end:.125rem}:host([desktop]) .ui5-nli-focusable:not(.ui5-nli-group-root):focus:after,.ui5-nli-focusable:not(.ui5-nli-group-root):focus-visible:after{border-radius:var(--_ui5-v2-6-2-notification_item-border-radius);top:var(--_ui5-v2-6-2-notification_item-focus-offset);right:var(--_ui5-v2-6-2-notification_item-focus-offset);bottom:var(--_ui5-v2-6-2-notification_item-focus-offset);left:var(--_ui5-v2-6-2-notification_item-focus-offset)}[ui5-busy-indicator]{width:100%;border-radius:var(--_ui5-v2-6-2-notification_item-border-radius)}
`;
//# sourceMappingURL=NotificationListItem.css.js.map