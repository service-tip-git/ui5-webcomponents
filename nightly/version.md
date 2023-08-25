commit 174f4b462de254fd3eaab41a06d26c016c360d5d
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Fri Aug 25 12:15:26 2023 +0300

    fix(framework): fix OpenUI5Support usage in applyTheme (#7485)
    
    OpenUI5Support should have been imported as a type, not importing the feature itself. Importing the feature is done by the consumers, when they need better OpenUI5 integration.
