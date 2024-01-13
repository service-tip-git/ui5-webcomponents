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
        "description": "Shows popover on desktop and dialog on mobile.",
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
                "description": "Resolves when the responsive popover is open"
            }
        }
    },
    "close": {
        "description": "Closes the popover/dialog.",
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
    "isOpen": {
        "description": "Tells if the responsive popover is open.",
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
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents"
};
//# sourceMappingURL=argTypes.js.map