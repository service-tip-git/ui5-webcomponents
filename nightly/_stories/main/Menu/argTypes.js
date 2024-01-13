export default {
    "default": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {}
        }
    },
    "showAt": {
        "description": "Shows the Menu near the opener element.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "opener",
                    "type": {
                        "text": "HTMLElement"
                    },
                    "description": "the element that the popover is shown at"
                }
            ],
            "returnValue": {
                "type": {
                    "text": "Promise<void>"
                }
            }
        }
    },
    "close": {
        "description": "Closes the Menu.",
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
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents"
};
//# sourceMappingURL=argTypes.js.map