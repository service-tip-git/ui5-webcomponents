commit 97c4a1259005225c54457dd269754d1eae2277c4
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Tue Aug 29 10:50:08 2023 +0300

    chore: fix storybook build, Toolbar story and some Toolbar TS constructions (#7499)
    
    Since the Toolbar PR has been merged the "nightly" storybook stopped deploying due to errors when building the story of the Toolbar, see https://github.com/SAP/ui5-webcomponents/actions/runs/5974432275/job/16208568004#step:4:3210 tracked down to wrong jsdoc.
    
    - fixed wrong namespaces, make use of appendocs
    
    - fixed some TS construction has been fixed
    
    In ToolbarItem.js
    ```js
    export type { ToolbarItem };
    export default ToolbarItem;
    ```
    
    changed to
    ```js
    export default ToolbarItem;
    ```
    
    In Toolbar.js
    ```js
    import type { ToolbarItem } from "./ToolbarItem.js";
    ```
    
    changed to
    ```js
     import type ToolbarItem from "./ToolbarItem.js";
     ```
    
    - showcase ui5-toolbar-select and ui5-toolbar-select-option in the storybook
