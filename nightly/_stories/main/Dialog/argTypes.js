export default {
    "state": {
        "control": "select",
        "options": [
            "None",
            "Success",
            "Warning",
            "Error",
            "Information"
        ]
    },
    "header": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {}
        }
    },
    "footer": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {}
        }
    },
    "default": {
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
            "parameters": [
                {
                    "name": "preventInitialFocus",
                    "default": "false",
                    "description": "Prevents applying the focus inside the popup",
                    "optional": true,
                    "type": {
                        "text": "boolean"
                    }
                }
            ],
            "returnValue": {
                "type": {
                    "text": "Promise<void>"
                },
                "description": "Resolves when the dialog is open"
            }
        }
    },
    "applyFocus": {
        "description": "Focuses the element denoted by <code>initialFocus</code>, if provided,\nor the first focusable element otherwise.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": {
                    "text": "Promise<void>"
                },
                "description": "Promise that resolves when the focus is applied"
            }
        }
    },
    "isOpen": {
        "description": "Tells if the component is opened",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": {
                    "text": "boolean"
                }
            }
        }
    },
    "close": {
        "description": "Closes the popup.",
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