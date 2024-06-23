// @ts-nocheck
import { registerI18nLoader } from "@ui5/webcomponents-base/dist/asset-registries/i18n.js";
const importMessageBundle = async (localeId) => {
    switch (localeId) {
        case "en": return (await import(/* webpackChunkName: "ui5-webcomponents-ai-messagebundle-en" */ "../assets/i18n/messagebundle_en.json")).default;
        default: throw "unknown locale";
    }
};
const importAndCheck = async (localeId) => {
    const data = await importMessageBundle(localeId);
    if (typeof data === "string" && data.endsWith(".json")) {
        throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
    }
    return data;
};
const localeIds = ["en",];
localeIds.forEach(localeId => {
    registerI18nLoader("@ui5/webcomponents-ai", localeId, importAndCheck);
});
//# sourceMappingURL=i18n.js.map