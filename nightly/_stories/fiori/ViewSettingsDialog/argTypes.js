export default {
    "sortItems": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {}
        }
    },
    "filterItems": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {}
        }
    },
    "show": {
        "description": "Shows the dialog.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": {
                    "text": "void"
                }
            }
        }
    },
    "setConfirmedSettings": {
        "description": "Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>.\nThis method can be used after the dialog is initially open, as the dialog needs\nto set its initial settings.<br>\nThe <code>ui5-view-settings-dialog</code> throws an event called \"before-open\",\nwhich can be used as a trigger point.<br>\nThe object should have the following format:<br>\n<pre>\n{\nsortOrder: \"Ascending\",\nsortBy: \"Name\",\nfilters: [\n\t{\"Filter 1\": [\"Some filter 1\", \"Some filter 2\"]},\n\t{\"Filter 2\": [\"Some filter 4\"]},\n]\n}\n</pre>",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "settings",
                    "type": {
                        "text": "VSDSettings",
                        "references": [
                            {
                                "name": "VSDSettings",
                                "package": "@ui5/webcomponents-fiori",
                                "module": "dist/ViewSettingsDialog.js"
                            }
                        ]
                    },
                    "description": "predefined settings."
                }
            ],
            "returnValue": {
                "type": {
                    "text": "void"
                }
            }
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori"
};
//# sourceMappingURL=argTypes.js.map