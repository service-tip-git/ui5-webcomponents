# First Steps

*This section explains how to build abstract items for existing ui5 components in order to be compatible with UI5 Toolbar.*
*It will help create the abstract item for component ui5-dummy-component*

## Abstract items

UI5-Toolbar is a composite web component, which slots different UI5 components, desigining them as abstract items. Their design matches the original component
and they listen for the same events, as in the original ones and can implement the same APIs, depending on the abstract item representation in either
toolbar or popover template.

In order to be suitable for usage inside ui5-toolbar, each component should align to following guidelines:

1. The component needs to implement a class with component name of the following type:

```
    ToolbarDummyComponent.ts
```

2. The class should extend **ToolbarItem** base class, which should be also added as a dependency.

3. Inside the module there should be two template getters: for toolbar and popover representation.

```
    static get toolbarTemplate() {
        return ToolbarDummyComponentTemplate;
    }

    static get toolbarPopoverTemplate() {
        return ToolbarPopoverDummyComponentTemplate;
    }
```

4. Inside the module there should be a registry call for the item inside Toolbar. **registerToolbarItem** helper should be added as a dependency.

```
    registerToolbarItem(ToolbarDummyComponent);
```

5. It needs to contain **customElement** decorator, which is good to contain custom tag name:

```
    @customElement({
        tag: "ui5-toolbar-dummy-component"
    })
```

6. The component needs to implement two template files with name of the following type:

```
    ToolbarDummyComponent.hbs and ToolbarDummyComponentPopover.hbs
```

7. In the templates there should be mapping of the properties that needs to be used in the component inside Toolbar.

8. Inside the module there should be mapping of events that the component is subscribed to in order to pass them to the abstract item.
The subscription should look like that:

```
     get subscribedEvents() {
        const map = new Map();

		map.set("click", { preventClosing: true });
		map.set("change", { preventClosing: false });

		return map;
	}

```
9. The new abstract item's DOM root element needs to have **"ui5-tb-item"** class in order to get default styles for item (margins etc.).
10. The new class needs to be added to the bundle file in the corresponding library.