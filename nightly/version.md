commit b4dea675f5793c28ee9f0123d0e8bf6bd38c0b83
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Thu Sep 14 14:02:53 2023 +0300

    fix(ui5-switch): fix text alignment in all themes (#7416)
    
    In order to fix the visual design in all themes, we had to introduce an alternate CSS variable. This was added because in Horizon themes for example, for the Text and Graphical Switch, the variable --_ui5_switch_text_inactive_left needs to have a different value for each of the styles in order to be properly aligned.
