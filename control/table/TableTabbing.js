sap.ui.define([], function() {
	"use strict";
	
	var TableTabbing = {
		
		sInput: "input:not([readonly='readonly'])",
		
		onTabPrevious: function(oEvent, that) {
			var aInputs = jQuery(oEvent.target).closest("tr").find(this.sInput);
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
					var lastInput = prevRow.find(this.sInput).last();
					that._getKeyboardExtension()._setSilentFocus(jQuery(lastInput));
				} else {
					aInputs = jQuery(oEvent.delegateTarget).find(this.sInput);
					for (var i = 0; i < aInputs.length; i++) {
						if (aInputs[i].id.match("col")) {
							that._getKeyboardExtension()._setSilentFocus(jQuery(aInputs[i - 1]));
							break;
						}
					}
				}
			}
			oEvent.preventDefault();
		},
		onTabNext: function(oEvent, that) {
			var aInputs = jQuery(oEvent.target).closest("tr").find(this.sInput);
			var bFlag = false;
			for (var i = 0; i < aInputs.length - 1; i++) {
				if (aInputs[i] === oEvent.target) {
					that._getKeyboardExtension()._setSilentFocus(jQuery(aInputs[i + 1]));
					bFlag = true;
					oEvent.preventDefault();
				}
			}
			if (!bFlag) {
				var nextRow = jQuery(oEvent.target).closest("tr").next();
				var firstInput = nextRow.find(this.sInput).first();
				if (firstInput.length){
					that._getKeyboardExtension()._setSilentFocus(jQuery(firstInput));
				}
				else {
					aInputs = jQuery(oEvent.delegateTarget).find(this.sInput);
					for (var i = aInputs.length - 1; i > 0; i--) {
						if (aInputs[i].id.match("col")) {
							that._getKeyboardExtension()._setSilentFocus(jQuery(aInputs[i + 1]));
							break;
						}
					}
				}
				oEvent.preventDefault();
			}
			
		}
	};
	return TableTabbing;
});