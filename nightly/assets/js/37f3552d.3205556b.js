"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[9336],{25994:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=o(31085),r=o(71184);const s={},i="Development Workflow",l={id:"docs/contributing/development-workflow",title:"Development Workflow",description:"This article explains the daily development workflow for component developers: from forking to merging changes.",source:"@site/docs/docs/5-contributing/01-development-workflow.md",sourceDirName:"docs/5-contributing",slug:"/docs/contributing/development-workflow",permalink:"/ui5-webcomponents/nightly/docs/contributing/development-workflow",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Contributing",permalink:"/ui5-webcomponents/nightly/docs/contributing/"},next:{title:"Conventions and Guidelines",permalink:"/ui5-webcomponents/nightly/docs/contributing/conventions-and-guidelines"}},c={},h=[{value:"1. Fork the UI5 Web Components repository",id:"1-fork-the-ui5-web-components-repository",level:2},{value:"2. Clone the UI5 Web Components repository.",id:"2-clone-the-ui5-web-components-repository",level:2},{value:"3. Run the project",id:"3-run-the-project",level:2},{value:"4. Develop",id:"4-develop",level:2},{value:"5. Open pull request (PR) from fork",id:"5-open-pull-request-pr-from-fork",level:2},{value:"6. Update pull request, created from a fork",id:"6-update-pull-request-created-from-a-fork",level:2},{value:"7. Sync the fork",id:"7-sync-the-fork",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"development-workflow",children:"Development Workflow"}),"\n",(0,t.jsx)(n.p,{children:"This article explains the daily development workflow for component developers: from forking to merging changes."}),"\n",(0,t.jsx)(n.h2,{id:"1-fork-the-ui5-web-components-repository",children:"1. Fork the UI5 Web Components repository"}),"\n",(0,t.jsxs)(n.p,{children:["See how to fork a repo ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/github/getting-started-with-github/fork-a-repo",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"2-clone-the-ui5-web-components-repository",children:"2. Clone the UI5 Web Components repository."}),"\n",(0,t.jsxs)(n.p,{children:["See how to clone a repo ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"3-run-the-project",children:"3. Run the project"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"3.0."})," Make sure you have the following prerequisites installed:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://yarnpkg.com/en",children:"Yarn"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," (",(0,t.jsx)(n.strong,{children:"version 14 or higher"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"3.1."})," Install all dependencies."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"yarn\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"3.2."})," Build and serve the project."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"yarn start\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once the project is served, you can explore the components in the browser that will automaticall open the dev server URL, usually:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The server will reload the pages whenever you make changes in the code."}),"\n",(0,t.jsx)(n.h2,{id:"4-develop",children:"4. Develop"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4.1."})," Read the dedicated tutorials for component developers:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/ui5-webcomponents/nightly/docs/contributing/conventions-and-guidelines",children:"Development Conventions and Guidelines"}),";"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/ui5-webcomponents/nightly/docs/development/package",children:"Developing Custom UI5 Web Components"}),";"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4.2."})," Create a local branch within your fork and work with it as usual."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4.3."})," Before committing, run the linter to check if your code is written according to the project eslint configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ yarn lint\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4.4."})," Before committing, run the test of the component you are working on (see the article for testing above) to catch issues as soon as possible."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ cd packages/main\n$ yarn test test/specs/Button.spec.js\n"})}),"\n",(0,t.jsx)(n.h2,{id:"5-open-pull-request-pr-from-fork",children:"5. Open pull request (PR) from fork"}),"\n",(0,t.jsx)(n.p,{children:"You can open a pull request to the upstream repository from any branch or commit in your fork.\nWe recommend that you make changes in a topic branch (not in your local main branch), so that you can push followup commits if you receive feedback on your pull request."}),"\n",(0,t.jsx)(n.p,{children:"You can open a pull request from the Github UI."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"5.1."}),' Find the "Pull requests" tab and then press the "New pull request" button.']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"5.2."})," Compare the main branch of the upstream with a branch from your fork."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The full guide on how to open PR from fork can be found ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"5.3."})," Once the PR is created you would have to accept a Developer Certificate of Origin (DCO).\nJust follow the link posted in the PR by the CLA assistant."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This is required only for your first PR."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"5.4."})," Immediately after the PR is created, a central build process starts to verify the change,\nbuilding the project and running all tests.\nIn case you are interested in the build output, you can follow the link at the bottom of the PR page."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"5.5."})," Wait for our code review and approval.\nAfter the PR is approved, the UI5 Web Components team will merge the change into the main branch."]}),"\n",(0,t.jsx)(n.h2,{id:"6-update-pull-request-created-from-a-fork",children:"6. Update pull request, created from a fork"}),"\n",(0,t.jsx)(n.p,{children:"You often would need to update your pull request, especially when you need to address review comments.\nTo update your pull request, you have to push commits to the branch, that the pull request is based on\nand the changes will be reflected in the pull request."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," We recommend syncing your fork before pushing commits to resolve merge conflicts beforehand."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The full guide on how to update PR can be found ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"7-sync-the-fork",children:"7. Sync the fork"}),"\n",(0,t.jsx)(n.p,{children:"With the time your fork will be out of sync with the original repository\nand you would need to update it."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"7.1."})," Specify a new remote upstream repository that will be synced with the fork."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ git remote add upstream https://github.com/SAP/ui5-webcomponents.git\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"7.2."})," Fetch the branches and their respective commits from the upstream repository.\nCommits to main will be stored in a local branch, upstream/main."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ git fetch upstream\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"7.3."})," Check out your fork's local main branch."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ git checkout main\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"7.4."})," Merge the changes from upstream/main into your local main branch.\nThis brings your fork's main branch into sync with the upstream repository, without losing your local changes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ git merge upstream/main\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The full guide on how to sync a fork can be found ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork",children:"here"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},71184:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var t=o(14041);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);