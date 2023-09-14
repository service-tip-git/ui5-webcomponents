commit acf5c6683b828e6dec0094eba6a73c14d7566ada
Author: Stoyan <88034608+hinzzx@users.noreply.github.com>
Date:   Thu Sep 14 22:53:37 2023 +0300

    docs: enhance storybook samples (#7454)
    
    *Bar
    Cleared the JSDoc enums;
    Changed the story name to -> Basic
    *Button
    Cleared JSDoc enums;
    Remove redunant Storybook samples;
    *DatePicker
    Cleared JSDoc enums;
    *DynamicSideContent
    Added custom styling to the native HTML tags as changing the themes wasn't updating the content. For example on Dark themes like Evening Horizon, both the background and the text would appear dark, which led to poor user experience;
    *FileUploader
    Cleared JSDoc enums
    Moved the Custom FileUploader sample to lower position, because we do not encourage using non-focusable elements;
    *Menu
    Fixed wrong property name headerText -> header-text because it wasnt showing on Mobile Devices;
    Changed sample name -> Basic with Header Text -> Basic
    *SplitButton
    Cleared JSDoc enums;
    Remove redunant Storybook samples;
    *StepInput
    Cleared JSDoc enums;
    Wrapped the main story component in the Storybook in a div with max-width: 13rem, due to component being stretched to the whole page, causing poor user experience;
    Simplified and removed redunant Storybook samples;
    *Switch
    Remove redunant Storybook samples;
    Reduced the Textual Switch samples because we do not encourage using Text in our switch component;
    *ToggleButton
    Enhance samples;
