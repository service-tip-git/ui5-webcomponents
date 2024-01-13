declare const _default: {
    header: {
        control: {
            type: string;
        };
        table: {
            type: {};
        };
    };
    footer: {
        control: {
            type: string;
        };
        table: {
            type: {};
        };
    };
    default: {
        control: {
            type: string;
        };
        table: {
            type: {};
        };
    };
    showAt: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: ({
                name: string;
                type: {
                    text: string;
                };
                description: string;
                default?: undefined;
                optional?: undefined;
            } | {
                name: string;
                default: string;
                description: string;
                optional: boolean;
                type: {
                    text: string;
                };
            })[];
            returnValue: {
                type: {
                    text: string;
                };
                description: string;
            };
        };
    };
    applyFocus: {
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
            };
        };
    };
    close: {
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
};
export default _default;
export declare const componentInfo: {
    package: string;
};
export type StoryArgsSlots = {
    header: string;
    footer: string;
    default: string;
};
