declare const _default: {
    valueState: {
        control: string;
        options: string[];
    };
    dateValue: {
        control: {
            type: boolean;
        };
    };
    primaryCalendarType: {
        control: string;
        options: string[];
    };
    secondaryCalendarType: {
        control: string;
        options: string[];
    };
    valueStateMessage: {
        control: {
            type: string;
        };
        table: {
            type: {};
        };
    };
    openPicker: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            returnValue: {
                type: {
                    text: string;
                };
            };
        };
    };
    isValid: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: {
                    text: string;
                };
                description: string;
            }[];
            returnValue: {
                type: {
                    text: string;
                };
            };
        };
    };
    isInValidRange: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: {
                    text: string;
                };
                description: string;
            }[];
            returnValue: {
                type: {
                    text: string;
                };
            };
        };
    };
    formatValue: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: {
                    text: string;
                };
                description: string;
            }[];
            returnValue: {
                type: {
                    text: string;
                };
                description: string;
            };
        };
    };
    closePicker: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            returnValue: {
                type: {
                    text: string;
                };
            };
        };
    };
    isOpen: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            returnValue: {
                type: {
                    text: string;
                };
                description: string;
            };
        };
    };
};
export default _default;
export declare const componentInfo: {
    package: string;
};
export type StoryArgsSlots = {
    valueStateMessage: string;
};
