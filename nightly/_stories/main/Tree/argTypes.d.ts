declare const _default: {
    default: {
        control: {
            type: string;
        };
        table: {
            type: {};
        };
    };
    header: {
        control: {
            type: string;
        };
        table: {
            type: {};
        };
    };
    walk: {
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
    default: string;
    header: string;
};
