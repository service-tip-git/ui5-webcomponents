export default {
    "default": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {}
        }
    },
    "header": {
        "control": {
            "type": "text"
        },
        "table": {
            "type": {}
        }
    },
    "walk": {
        "description": "Perform Depth-First-Search walk on the tree and run a callback on each node",
        "table": {
            "category": "methods"
        },
        "UI5CustomData": {
            "parameters": [
                {
                    "name": "callback",
                    "type": {
                        "text": "WalkCallback",
                        "references": [
                            {
                                "name": "WalkCallback",
                                "package": "@ui5/webcomponents",
                                "module": "dist/Tree.js"
                            }
                        ]
                    },
                    "description": "function to execute on each node of the tree with 3 arguments: the node, the level and the index"
                }
            ],
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