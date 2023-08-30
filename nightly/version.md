commit 725d08d81d270ab9f975960fb08717b2e4e794de
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Wed Aug 30 14:45:24 2023 +0300

    chore: update Toolbar (#7512)
    
    - hide overflow popup `arrow`
    - fix `padding` in the overflow
    - add `@abstract` to all Toolbar* components
    - ToolbarItem becomes a pure class, not a customElement
    - ToolbarSelect now supports `width` attribute (the property was present, but the value was not propagated in the template to the ui5-select)
    - The `width` property has all the JSDoc required in all components that have it ToolbarSelect, ToolbarButton and ToolbarSpacer
    - The "width" property is now public  in ToolbarSelect as well (it was public in ToolbarButton and ToolbarSpacer )
