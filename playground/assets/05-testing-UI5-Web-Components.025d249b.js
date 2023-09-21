import{j as e}from"./jsx-runtime.97c1caca.js";import{M as n}from"./index.07c56737.js";import{u as t}from"./index.3107f185.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.a9aaf75f.js";import"../sb-preview/runtime.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";function o(r){const s=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a",h2:"h2",h4:"h4",ul:"ul",li:"li",em:"em",pre:"pre",ol:"ol",h3:"h3"},t(),r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(n,{title:"Docs/Development/Testing UI5 Web Components"}),`
`,e.exports.jsx(s.h1,{id:"testing-ui5-web-components",children:"Testing UI5 Web Components"}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Note:"})," All examples in this tutorial are taken from the demo UI5 Web Component (",e.exports.jsx(s.code,{children:"ui5-demo"}),`), generated by the package initialization script.
For more information on creating a new package with a demo Web Component inside, click `,e.exports.jsx(s.a,{href:"./?path=/docs/docs-custom-ui5-web-components-packages--docs",children:"here"}),"."]}),`
`,e.exports.jsx(s.h2,{id:"1-prerequisites",children:"1. Prerequisites"}),`
`,e.exports.jsxs(s.p,{children:["The test framework of choice for UI5 Web Components is ",e.exports.jsx(s.a,{href:"https://webdriver.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebdriverIO"}),` or WDIO for short.
It has a straightforward API - `,e.exports.jsx(s.a,{href:"https://webdriver.io/docs/api.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://webdriver.io/docs/api.html"}),", and has excellent support for Web Components."]}),`
`,e.exports.jsxs(s.p,{children:["The browser of choice for test execution is ",e.exports.jsx(s.a,{href:"https://www.google.com/chrome/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Google Chrome"}),", respectively the used WebDriver is ",e.exports.jsx(s.a,{href:"https://chromedriver.chromium.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"ChromeDriver"}),"."]}),`
`,e.exports.jsx(s.h4,{id:"managing-chromedriver",children:"Managing ChromeDriver"}),`
`,e.exports.jsxs(s.p,{children:["ChromeDriver is a peer dependency of ",e.exports.jsx(s.code,{children:"@ui5/webcomponents-tools"}),". Therefore, you are expected to install and upgrade it manually."]}),`
`,e.exports.jsxs(s.p,{children:["You can install it with ",e.exports.jsx(s.code,{children:"npm"}),":"]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"npm i --save-dev chromedriver"})}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["or with ",e.exports.jsx(s.code,{children:"yarn"}),":"]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"yarn add -D chromedriver"})}),`
`]}),`
`,e.exports.jsx(s.p,{children:`Google Chrome and ChromeDriver need to be the same version to work together. Whenever you update Google Chrome on
your system (or it updates automatically, if allowed), you are expected to also update ChromeDriver to the respective version.`}),`
`,e.exports.jsx(s.h2,{id:"2-running-the-tests",children:"2. Running the tests"}),`
`,e.exports.jsx(s.h2,{id:"21-test-configuration",children:"2.1 Test configuration"}),`
`,e.exports.jsxs(s.p,{children:["The configuration for WDIO can be found in the ",e.exports.jsx(s.code,{children:"config/"})," directory under ",e.exports.jsx(s.code,{children:"wdio.conf.js"}),"."]}),`
`,e.exports.jsxs(s.p,{children:["As explained ",e.exports.jsx(s.a,{href:"./?path=/docs/docs-development-custom-ui5-web-components-packages--docs",children:"here"})," in the section about the ",e.exports.jsx(s.code,{children:"config/"}),` directory, you can
customize, or even completely replace the default configuration.`]}),`
`,e.exports.jsx(s.p,{children:"However, before doing so, please note the following two benefits of working with the default configuration, provided by UI5 Web Components:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Hooks, synchronizing the execution of all relevant WDIO commands (e.g. ",e.exports.jsx(s.code,{children:"click"}),", ",e.exports.jsx(s.code,{children:"url"}),", ",e.exports.jsx(s.code,{children:"$"}),", ",e.exports.jsx(s.code,{children:"$$"}),`) with the rendering of the framework to
ensure consistency when reading or changing the state of the components.`]}),`
`,e.exports.jsxs(s.li,{children:["Additional API methods: ",e.exports.jsx(s.code,{children:"setProperty"}),", ",e.exports.jsx(s.code,{children:"setAttribute"}),", ",e.exports.jsx(s.code,{children:"removeAttribute"}),", ",e.exports.jsx(s.code,{children:"hasClass"}),"."]}),`
`]}),`
`,e.exports.jsx(s.p,{children:"So our recommendation would be to modify it, if necessary, but not completely replace it."}),`
`,e.exports.jsx(s.h2,{id:"22-running-all-tests",children:"2.2 Running all tests"}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:"npm run test"})}),`
`,e.exports.jsx(s.p,{children:"or"}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:"yarn test"})}),`
`,e.exports.jsxs(s.p,{children:["This will ",e.exports.jsx(s.em,{children:"launch a static server"})," and execute all tests found in the ",e.exports.jsx(s.code,{children:"test/specs/"})," directory of your package."]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Note:"})," Before running the tests for the first time, make sure you've built the project, or at least the dev server is running (",e.exports.jsx(s.code,{children:"build"})," or ",e.exports.jsx(s.code,{children:"start"})," commands)."]}),`
`,e.exports.jsx(s.h2,{id:"23-running-a-single-test-spec",children:"2.3 Running a single test spec"}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:"npm run test test/specs/Demo.spec.js"})}),`
`,e.exports.jsx(s.p,{children:"or"}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:"yarn test test/specs/Demo.spec.js"})}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Note:"}),` Executing a single test spec only makes sense for debugging purposes, therefore no test server is launched for it.
Make sure you're running the `,e.exports.jsx(s.code,{children:"start"}),` command while running single test specs, as it provides a server and the ability to change
files, and test the changes on the fly.`]}),`
`,e.exports.jsx(s.h2,{id:"3-writing-tests",children:"3. Writing tests"}),`
`,e.exports.jsx(s.p,{children:"The simplest test would look something like this:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`describe("ui5-demo rendering", async () => {
	await browser.url("test/pages/index.html");

	it("tests if web component is correctly rendered", async () => {
		const innerContent = await browser.$("#myFirstComponent").shadow$("div");
		assert.ok(innerContent, "content rendered");
	});
});
`})}),`
`,e.exports.jsx(s.p,{children:"Key points:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Load the test page with the ",e.exports.jsx(s.code,{children:"browser.url"})," command. You can do this once for each test suite or for each individual test."]}),`
`,e.exports.jsxs(s.li,{children:["You can access the Web Components with ",e.exports.jsx(s.code,{children:"$"})," or ",e.exports.jsx(s.code,{children:"$$"}),"."]}),`
`,e.exports.jsxs(s.li,{children:["You can access the shadow roots with ",e.exports.jsx(s.code,{children:"shadow$"})," or ",e.exports.jsx(s.code,{children:"shadow$$"}),"."]}),`
`,e.exports.jsxs(s.li,{children:["Simulate mouse interaction with the Web Components by calling the ",e.exports.jsx(s.code,{children:"click"})," command on the Web Component itself or certain parts of its shadow root."]}),`
`,e.exports.jsxs(s.li,{children:["Simulate keyboard with the ",e.exports.jsx(s.code,{children:"keys"})," command."]}),`
`,e.exports.jsxs(s.li,{children:["You can read the DOM with commands such as ",e.exports.jsx(s.code,{children:"getHTML"}),", ",e.exports.jsx(s.code,{children:"getProperty"}),", ",e.exports.jsx(s.code,{children:"getAttribute"}),", etc."]}),`
`,e.exports.jsxs(s.li,{children:["You can modify the DOM with commands such as ",e.exports.jsx(s.code,{children:"setProperty"}),", ",e.exports.jsx(s.code,{children:"setAttribute"})," etc."]}),`
`]}),`
`,e.exports.jsx(s.p,{children:"For WDIO capabilities, see:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Official API: ",e.exports.jsx(s.a,{href:"https://webdriver.io/docs/api.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://webdriver.io/docs/api.html"}),"."]}),`
`,e.exports.jsxs(s.li,{children:["Additional commands provided in our standard WDIO configuration: ",e.exports.jsx(s.code,{children:"setProperty"}),", ",e.exports.jsx(s.code,{children:"setAttribute"}),", ",e.exports.jsx(s.code,{children:"removeAttribute"}),", ",e.exports.jsx(s.code,{children:"hasClass"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Note:"}),` The standard WDIO configuration we provide automatically synchronizes all test commands' execution with the framework rendering cycle.
Therefore, in the example above, the `,e.exports.jsx(s.code,{children:"shadow$"}),` command will internally wait for all rendering to be over before being executed. The
same holds true for commands that modify the DOM such as `,e.exports.jsx(s.code,{children:"setAttribute"})," or ",e.exports.jsx(s.code,{children:"click"}),"."]}),`
`,e.exports.jsx(s.h2,{id:"4-debugging-tests",children:"4. Debugging tests"}),`
`,e.exports.jsx(s.p,{children:"Debugging with WDIO is really simple. Just follow these 3 steps:"}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Change the WDIO configuration file ",e.exports.jsx(s.code,{children:"config/wdio.conf.js"})," to disable ",e.exports.jsx(s.code,{children:"headless"})," mode for Google Chrome as follows:"]}),`
`,e.exports.jsx(s.p,{children:"From:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`module.exports = require("@ui5/webcomponents-tools/components-package/wdio.js");
`})}),`
`,e.exports.jsx(s.p,{children:"to:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`const result = require("@ui5/webcomponents-tools/components-package/wdio.js");
result.config.capabilities[0]["goog:chromeOptions"].args = ['--disable-gpu']; // From: ['--disable-gpu', '--headless']
module.exports = result;
`})}),`
`,e.exports.jsx(s.p,{children:"If you happen to debug often, it's recommended to keep the file in this format and just comment out the middle line when you're done debugging."}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Set a breakpoint with ",e.exports.jsx(s.code,{children:"browser.debug"})," somewhere in your test:"]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`it("tests if web component is correctly rendered", async () => {
    const innerContent = await browser.$("#myFirstComponent").shadow$("div");
    await browser.debug();
    assert.ok(innerContent, "content rendered");
});
`})}),`
`,e.exports.jsxs(s.p,{children:["For more on ",e.exports.jsx(s.code,{children:"debug"}),", see ",e.exports.jsx(s.a,{href:"https://webdriver.io/docs/api/browser/debug.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://webdriver.io/docs/api/browser/debug.html"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"Run the single test spec and wait for the browser to open and pause on your breakpoint:"}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"Run the dev server, if you haven't already:"}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:"yarn start"})}),`
`,e.exports.jsx(s.p,{children:"or"}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"npm run start"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"Run the single test spec:"}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:"yarn test test/specs/Demo.spec.js"})}),`
`,e.exports.jsx(s.p,{children:"or"}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"npm run test test/specs/Demo.spec.js"}),"."]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.p,{children:`Google Chrome will then open in a new window, controlled by WDIO via the ChromeDriver, and your test will pause on your
breakpoint of choice. Proceed to debug normally.`}),`
`,e.exports.jsx(s.h2,{id:"5-best-practices-for-writing-tests",children:"5. Best practices for writing tests"}),`
`,e.exports.jsxs(s.h3,{id:"do-not-overuse-assertok",children:["Do not overuse ",e.exports.jsx(s.code,{children:"assert.ok"})]}),`
`,e.exports.jsxs(s.p,{children:["When an ",e.exports.jsx(s.code,{children:"assert.ok"}),` fails, the error you get is "Expected something to be true, but it was false". This is fine when you're passing a Boolean, but not ok when there is an expression inside `,e.exports.jsx(s.code,{children:"assert.ok"})," and you'd like to know which part of the expression is not as expected."]}),`
`,e.exports.jsxs(s.p,{children:["For example, when ",e.exports.jsx(s.code,{children:'assert.ok(a === b, "They match")'})," fails, the error just says that an expression that was expected to be true was false. However, if you use ",e.exports.jsx(s.code,{children:'assert.strictEqual(a, b, "They match")'}),", and it fails, the error will say that ",e.exports.jsx(s.code,{children:"a"})," was expected to be a certain value, but it was another value, which makes it much easier to debug."]}),`
`,e.exports.jsx(s.p,{children:"Prefer one of the following, when applicable:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"assert.notOk(a)"})," instead of ",e.exports.jsx(s.code,{children:"assert.ok(!a)"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"assert.strictEqual(a, b)"})," instead of ",e.exports.jsx(s.code,{children:"assert.ok(a === b)"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"assert.isBelow(a, b)"})," instead of ",e.exports.jsx(s.code,{children:"assert.ok(a < b)"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"assert.isAbove(a, b)"})," instead of ",e.exports.jsx(s.code,{children:"assert.ok(a > b)"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"assert.exists"})," / ",e.exports.jsx(s.code,{children:"assert.notExists"})," when checking for ",e.exports.jsx(s.code,{children:"null"})," or ",e.exports.jsx(s.code,{children:"undefined"})]}),`
`]}),`
`,e.exports.jsxs(s.h3,{id:"do-not-overuse-assertstrictequal",children:["Do not overuse ",e.exports.jsx(s.code,{children:"assert.strictEqual"})]}),`
`,e.exports.jsx(s.p,{children:"Use:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"assert.ok"})," instead of ",e.exports.jsx(s.code,{children:"assert.strictEqual(a, true)"})]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"assert.notOk"})," instead of ",e.exports.jsx(s.code,{children:"assert.strictEqual(a, false)"})]}),`
`]}),`
`,e.exports.jsxs(s.h3,{id:"use-isexisting-to-check-dom",children:["Use ",e.exports.jsx(s.code,{children:"isExisting"})," to check DOM"]}),`
`,e.exports.jsx(s.p,{children:"Preferred:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`assert.ok(await browser.$(<SELECTOR>).isExisting())
`})}),`
`,e.exports.jsx(s.p,{children:"instead of:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`assert.ok((await browser.$$(<SELECTOR>)).length)
`})}),`
`,e.exports.jsxs(s.h3,{id:"do-not-use-browserexecuteasync-for-properties",children:["Do not use ",e.exports.jsx(s.code,{children:"browser.executeAsync"})," for properties"]}),`
`,e.exports.jsxs(s.p,{children:["We have custom commands such as ",e.exports.jsx(s.code,{children:"getProperty"})," and ",e.exports.jsx(s.code,{children:"setProperty"})," to fill in gaps in the WDIO standard command set. Use them instead of manually setting properties with ",e.exports.jsx(s.code,{children:"executeAsync"}),"."]}),`
`,e.exports.jsxs(s.h3,{id:"use-assertinclude-instead-of-string-functions",children:["Use ",e.exports.jsx(s.code,{children:"assert.include"})," instead of string functions"]}),`
`,e.exports.jsx(s.p,{children:"Use:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`assert.include(text, EXPECTED_TEXT, "Text found")
assert.notInclude(text, NOT_EXPECTED_TEXT, "Text not found")
`})}),`
`,e.exports.jsx(s.p,{children:"instead of:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`assert.ok(text.indexOf(EXPECTED_TEXT) > -1, "Text found")
assert.ok(text.includes(EXPECTED_TEXT), "Text found")
assert.notOk(text.includes(NOT_EXPECTED_TEXT), "Text not found")
`})}),`
`,e.exports.jsx(s.h3,{id:"extract-variables-before-asserting",children:"Extract variables before asserting"}),`
`,e.exports.jsxs(s.p,{children:["Avoid complex expressions inside ",e.exports.jsx(s.code,{children:"assert"}),"s by extracting parts of them to variables and only asserting the variables."]}),`
`,e.exports.jsx(s.h2,{id:"6-using-the-synchronous-syntax-for-writing-texts",children:"6. Using the synchronous syntax for writing texts"}),`
`,e.exports.jsxs(s.p,{children:["WebdriverIO still supports (although now deprecated) the ",e.exports.jsx(s.em,{children:"synchronous"})," syntax for writing tests. Click ",e.exports.jsx(s.a,{href:"https://webdriver.io/docs/sync-vs-async/",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),' for more information on "sync vs async".']}),`
`,e.exports.jsxs(s.p,{children:["UI5 Web Components versions up to, including, ",e.exports.jsx(s.code,{children:"1.0.0-rc.15"}),", used to recommend the ",e.exports.jsx(s.em,{children:"synchronous"})," syntax, as it is easier to use."]}),`
`,e.exports.jsxs(s.p,{children:["If you have already written tests for your custom UI5 Web Components using the ",e.exports.jsx(s.em,{children:"synchronous"})," syntax, and you update to a later version than ",e.exports.jsx(s.code,{children:"1.0.0-rc.15"}),`, your tests will no longer run.
You have 2 options:`]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Rewrite all tests to use the ",e.exports.jsx(s.em,{children:"asynchronous"})," syntax. Click the link above to see some examples. This is the ",e.exports.jsx(s.strong,{children:"recommended"})," approach, because the ",e.exports.jsx(s.em,{children:"synchronous"})," syntax will no longer work with future ",e.exports.jsx(s.code,{children:"nodejs"})," versions."]}),`
`,e.exports.jsxs(s.li,{children:["For the time being, adapt your WebdriverIO configuration to continue supporting the ",e.exports.jsx(s.em,{children:"synchronous"})," syntax."]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"51-supporting-the-synchronous-syntax-for-writing-tests",children:"5.1 Supporting the synchronous syntax for writing tests"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Change your ",e.exports.jsx(s.code,{children:"config/wdio.conf.js"})," file's content from:"]}),`
`]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`module.exports = require("@ui5/webcomponents-tools/components-package/wdio.js");
`})}),`
`,e.exports.jsx(s.p,{children:"to:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-js",children:`module.exports = require("@ui5/webcomponents-tools/components-package/wdio.sync.js");
`})}),`
`,e.exports.jsxs(s.p,{children:["This will give you the exact same WebdriverIO configuration, but with ",e.exports.jsx(s.em,{children:"synchronous"})," custom commands (such as ",e.exports.jsx(s.code,{children:"getProperty"}),", ",e.exports.jsx(s.code,{children:"setProperty"}),", ",e.exports.jsx(s.code,{children:"hasClass"}),", etc.)."]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Manually install ",e.exports.jsx(s.code,{children:"@wdio/sync"})]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["You can install it with ",e.exports.jsx(s.code,{children:"npm"}),":"]}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:"npm i --save-dev @wdio/sync"})}),`
`,e.exports.jsxs(s.p,{children:["or with ",e.exports.jsx(s.code,{children:"yarn"}),":"]}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.code,{children:"yarn add -D @wdio/sync"})}),`
`,e.exports.jsxs(s.p,{children:["Just installing the package (with no extra configuration) is enough to let WebdriverIO run the ",e.exports.jsx(s.em,{children:"synchronous"})," tests."]}),`
`,e.exports.jsxs(s.p,{children:["Next: ",e.exports.jsx(s.a,{href:"./?path=/docs/docs-development-deep-dive-and-best-practices--docs",children:"Deep dive and best practices"})]})]})}function g(r={}){const{wrapper:s}=Object.assign({},t(),r.components);return s?e.exports.jsx(s,Object.assign({},r,{children:e.exports.jsx(o,r)})):o(r)}export{g as default};
//# sourceMappingURL=05-testing-UI5-Web-Components.025d249b.js.map
