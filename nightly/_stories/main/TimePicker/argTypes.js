export default {
    "dateValue": {
        "control": {
            "type": false
        }
    },
    "valueState": {
        "control": "select",
        "options": [
            "None",
            "Success",
            "Warning",
            "Error",
            "Information"
        ]
    },
    "valueStateMessage": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {}
        }
    },
    "openPicker": {
        "description": "Opens the picker.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": {
                    "text": "Promise<void>"
                },
                "description": "Resolves when the picker is open"
            }
        }
    },
    "closePicker": {
        "description": "Closes the picker",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": {
                    "text": "Promise<void>"
                },
                "description": "Resolves when the picker is closed"
            }
        }
    },
    "isOpen": {
        "description": "Checks if the picker is open",
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
    "formatValue": {
        "description": "Formats a Java Script date object into a string representing a locale date and time\naccording to the <code>formatPattern</code> property of the TimePicker instance",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "date",
                    "type": {
                        "text": "Date"
                    },
                    "description": "A Java Script date object to be formatted as string"
                }
            ],
            "returnValue": {
                "type": {
                    "text": "string"
                },
                "description": "formatted value"
            }
        }
    },
    "isValid": {
        "description": "Checks if a value is valid against the current <code>formatPattern</code> value.\n\n<br><br>\n<b>Note:</b> an empty string is considered as valid value.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "value",
                    "type": {
                        "text": "string | undefined"
                    },
                    "description": "The value to be tested against the current date format"
                }
            ],
            "returnValue": {
                "type": {
                    "text": "boolean"
                }
            }
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents"
};
//# sourceMappingURL=argTypes.js.map