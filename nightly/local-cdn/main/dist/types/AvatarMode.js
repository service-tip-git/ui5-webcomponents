/**
 * Different Avatar modes.
 * @public
 */
var AvatarMode;
(function (AvatarMode) {
    /**
     * Image mode (by default).
     * Configures the component to internally render role="img".
     * @public
     * @since 2.20
     */
    AvatarMode["Image"] = "Image";
    /**
     * Decorative mode.
     * Configures the component to internally render role="presentation" and aria-hidden="true",
     * making it purely decorative without semantic content or interactivity.
     * @public
     * @since 2.20
     */
    AvatarMode["Decorative"] = "Decorative";
    /**
     * Interactive mode.
     * Configures the component to internally render role="button".
     * This mode also supports focus and enables keyboard interaction.
     * @public
     * @since 2.20
     */
    AvatarMode["Interactive"] = "Interactive";
})(AvatarMode || (AvatarMode = {}));
export default AvatarMode;
//# sourceMappingURL=AvatarMode.js.map