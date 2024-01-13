declare const _default: {
    sortItems: {
        control: {
            type: string;
        };
        table: {
            type: {};
        };
    };
    filterItems: {
        control: {
            type: string;
        };
        table: {
            type: {};
        };
    };
    show: {
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
    setConfirmedSettings: {
        description: string;
        table: {
            category: string;
        };
        UI5CustomData: {
            parameters: {
                name: string;
                type: {
                    text: string;
                    references: {
                        name: string;
                        package: string;
                        module: string;
                    }[];
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
};
export default _default;
export declare const componentInfo: {
    package: string;
};
export type StoryArgsSlots = {
    sortItems: string;
    filterItems: string;
};
