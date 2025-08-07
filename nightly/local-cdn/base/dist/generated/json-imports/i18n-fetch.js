// @ts-nocheck
import { registerI18nLoader } from "@ui5/webcomponents-base/dist/asset-registries/i18n.js";
const importMessageBundle = async (localeId) => {
    switch (localeId) {
        case "en": return (await fetch(new URL("../assets/i18n/messagebundle_en.json", import.meta.url))).json();
        case "en_US_sappsd": return (await fetch(new URL("../assets/i18n/messagebundle_en_US_sappsd.json", import.meta.url))).json();
        case "en_US_saprigi": return (await fetch(new URL("../assets/i18n/messagebundle_en_US_saprigi.json", import.meta.url))).json();
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
const localeIds = ["en",
    "en_US_sappsd",
    "en_US_saprigi",];
localeIds.forEach(localeId => {
    registerI18nLoader("@ui5/webcomponents-base", localeId, importAndCheck);
});
//# sourceMappingURL=i18n-fetch.js.map