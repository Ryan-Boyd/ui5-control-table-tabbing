/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the ProjectName.control.table.AnalyticalTable control
sap.ui.define([],
	function() {
	"use strict";

	return {
		aggregations : {
			columns : {
				domRef : ".sapUiTableColHdrScr"
			},
			// fake aggregations with a dom ref pointing to scrollbars
			// since scrollbars aren't part of columns aggregation dom ref, this is needed to allow overlay scrolling
			hScroll : {
				ignore: false,
				domRef : function() {
					return this.$("hsb").get(0);
				}
			},
			vScroll : {
				ignore: false,
				domRef : function() {
					return this.$("vsb").get(0);
				}
			}
		}
	};

}, /* bExport= */ false);