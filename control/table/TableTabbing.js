sap.ui.define([], function() {
	"use strict";
	
	var TableTabbing = {

		onTabPrevious: function(oEvent, that) {
			//Focus on previous input
			var aInputs = jQuery(oEvent.target).closest("tr").find("input");
			var bFlag = false;
			for (var i = 1; i < aInputs.length; i++) {
				if (aInputs[i] === oEvent.target) {
					that._getKeyboardExtension()._setSilentFocus(jQuery(aInputs[i - 1]));
					bFlag = true;
				}
			}
			if (!bFlag) {
				var prevRow = jQuery(oEvent.target).closest("tr").prev();
				if (prevRow.length) {
					var lastInput = prevRow.find("input").last();
					that._getKeyboardExtension()._setSilentFocus(jQuery(lastInput));
				} else {
					aInputs = jQuery(oEvent.delegateTarget).find("input");
					for (var i = 0; i < aInputs.length; i++) {
						if (aInputs[i].id.match("col")) {
							that._getKeyboardExtension()._setSilentFocus(jQuery(aInputs[i - 1]));
							break;
						}
					}
				}
			}
		},
		onTabNext: function(oEvent, that) {
			var aInputs = jQuery(oEvent.target).closest("tr").find("input");
			var bFlag = false;
			for (var i = 0; i < aInputs.length - 1; i++) {
				if (aInputs[i] === oEvent.target) {
					that._getKeyboardExtension()._setSilentFocus(jQuery(aInputs[i + 1]));
					bFlag = true;
				}
			}
			if (!bFlag) {
				var nextRow = jQuery(oEvent.target).closest("tr").next();
				var firstInput = nextRow.find("input").first();
				that._getKeyboardExtension()._setSilentFocus(jQuery(firstInput));
			}
		}
	};
	return TableTabbing;
});