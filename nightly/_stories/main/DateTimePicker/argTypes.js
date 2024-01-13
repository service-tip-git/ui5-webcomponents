export default {
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
    "dateValue": {
        "control": {
            "type": false
        }
    },
    "primaryCalendarType": {
        "control": "select",
        "options": [
            "Gregorian",
            "Islamic",
            "Japanese",
            "Buddhist",
            "Persian"
        ]
    },
    "secondaryCalendarType": {
        "control": "select",
        "options": [
            "Gregorian",
            "Islamic",
            "Japanese",
            "Buddhist",
            "Persian"
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
                }
            }
        }
    },
    "isValid": {
        "description": "Checks if a value is valid against the current date format of the DatePicker.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "value",
                    "type": {
                        "text": "string"
                    },
                    "description": "A value to be tested against the current date format"
                }
            ],
            "returnValue": {
                "type": {
                    "text": "boolean"
                }
            }
        }
    },
    "isInValidRange": {
        "description": "Checks if a date is between the minimum and maximum date.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "value",
                    "type": {
                        "text": "string"
                    },
                    "description": "A value to be checked"
                }
            ],
            "returnValue": {
                "type": {
                    "text": "boolean"
                }
            }
        }
    },
    "formatValue": {
        "description": "Formats a Java Script date object into a string representing a locale date\naccording to the <code>formatPattern</code> property of the DatePicker instance",
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
                "description": "The date as string"
            }
        }
    },
    "closePicker": {
        "description": "Closes the picker.",
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
        "description": "Checks if the picker is open.",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "returnValue": {
                "type": {
                    "text": "boolean"
                },
                "description": "true if the picker is open, false otherwise"
            }
        }
    }
};
export const componentInfo = {
    "package": "@ui5/webcomponents"
};
//# sourceMappingURL=argTypes.js.map