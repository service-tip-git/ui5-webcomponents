commit 5def83bb75b520cb57dbdd4c1bf4eb8a54d5990a
Author: gmkv <georgi.minkov@sap.com>
Date:   Thu Aug 31 14:31:35 2023 +0300

    fix(ui5-radio-button): avoid nesting elements with tab-index within each other (#7488)
    
    Removed native input workaround to make forms work and replaced with ElementInternals to keep the same form submit functionality.
    
    Fixes #7419
