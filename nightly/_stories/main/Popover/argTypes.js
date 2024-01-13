export default {
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
    "showAt": {
        "description": "Shows the popover.",
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
                },
                {
                    "name": "preventInitialFocus",
                    "default": "false",
                    "description": "prevents applying the focus inside the popover",
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
                "description": "Resolved when the popover is open"
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