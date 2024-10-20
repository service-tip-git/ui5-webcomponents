import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/AvatarGroup.css.ts", content: `:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:block;width:100%}:host{--_ui5-v2-4-0-rc-1_button_focused_border: var(--_ui5-v2-4-0-rc-1_avatar_group_button_focus_border)}.ui5-avatar-group-items:focus{outline:none}:host([type="Group"][desktop]) .ui5-avatar-group-items:focus,:host([type="Group"]) .ui5-avatar-group-items:focus-visible{outline:var(--_ui5-v2-4-0-rc-1_avatar_outline);outline-offset:var(--_ui5-v2-4-0-rc-1_avatar_focus_offset);border-radius:var(--_ui5-v2-4-0-rc-1_avatar_group_focus_border_radius)}.ui5-avatar-group-root{display:flex}.ui5-avatar-group-items{white-space:nowrap;position:relative;display:inline-flex}:host([type="Group"]) .ui5-avatar-group-items{cursor:pointer}:host([type="Group"]) ::slotted([ui5-button]),:host([type="Group"]) ::slotted([ui5-avatar]){pointer-events:none}.ui5-avatar-group-overflow-btn{overflow:visible}.ui5-avatar-group-overflow-btn::part(button){min-width:auto}::slotted([ui5-button]:not([hidden])),.ui5-avatar-group-overflow-btn:not([hidden]){--_ui5-v2-4-0-rc-1_button_base_padding: 0;border-radius:50%;display:inline-flex;text-overflow:initial;z-index:0}::slotted([ui5-button][desktop]:focus),.ui5-avatar-group-overflow-btn[desktop]:focus{outline:var(--_ui5-v2-4-0-rc-1_avatar_outline);outline-offset:var(--_ui5-v2-4-0-rc-1_avatar_overflow_button_focus_offset)}.ui5-avatar-group-overflow-btn::part(button):focus-visible:after{outline:var(--_ui5-v2-4-0-rc-1_avatar_outline);outline-offset:var(--_ui5-v2-4-0-rc-1_avatar_focus_offset);border-radius:50%}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xs{height:2rem;width:2rem;min-width:2rem;font-size:.75rem}::slotted([ui5-button]),.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-s{height:3rem;width:3rem;min-width:3rem;font-size:1.125rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-m{height:4rem;width:4rem;min-width:4rem;font-size:1.625rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-l{height:5rem;width:5rem;min-width:5rem;font-size:2rem}.ui5-avatar-group-overflow-btn.ui5-avatar-group-overflow-btn-xl{height:7rem;width:7rem;min-width:7rem;font-size:2.75rem}
` };
export default styleData;
//# sourceMappingURL=AvatarGroup.css.js.map