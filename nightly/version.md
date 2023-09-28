commit 50499ac1378deb18c18c649090591c0c36d44567
Author: Nikolay Hristov <n.hristov@sap.com>
Date:   Thu Sep 28 09:54:44 2023 +0300

    feat(ui5-time-picker): mobile input and code optimization (#7549)
    
    With this pull request a mobile input functionality is being added to the TimePicker.
    On mobile devices (phones), the manual input of the time is not allowed in the component's input field, but separate popover is opened. In this popover all of te input fields for hours/minutes/seconds are of numeric type which allows displaying of pure numeric keyboard. This will ease input of the desired time.
    
    Also, optimizations are made in order to reduce codebase as there were similar functionalities used both by TimeSelectionClocks and TimeSelectionInputs private components.
    
    Tests are added and some are modified because of oprimization.
