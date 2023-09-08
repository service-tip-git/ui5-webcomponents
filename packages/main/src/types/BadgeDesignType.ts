/**
 * Defines badge design types.
 *
 * @readonly
 * @enum {string}
 * @public
 * @author SAP SE
 * @alias sap.ui.webc.main.types.BadgeDesignType
 */
enum BadgeDesignType {
	/**
	 * Color scheme design type.
	 * @public
	 * @type {ColorScheme}
	 */
	ColorScheme = "ColorScheme",

	/**
	 * Value state design type.
	 * @public
	 * @type {ValueState}
	 */
	ValueState = "ValueState",

	/**
	 * Value state inverted design type.
	 * @public
	 * @type {ValueState}
	 */
	ValueStateInverted = "ValueStateInverted",

	/**
	 * First color set of indication colors design type.
	 * @public
	 * @type {IndicationColorsSet1}
	 */
	IndicationColorsSet1 = "IndicationColorsSet1",

	/**
	 * Second color set of indication colors design type.
	 * @public
	 * @type {IndicationColorsSet2}
	 */
	IndicationColorsSet2 = "IndicationColorsSet2",
}

export default BadgeDesignType;
