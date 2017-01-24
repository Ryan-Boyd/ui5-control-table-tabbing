/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * Initialization Code and shared classes of library ProjectName.control.table.
 */
sap.ui.define(['jquery.sap.global', 'sap/ui/core/Core',
	'sap/ui/core/library', // library dependency
	'sap/ui/unified/library'], // library dependency
	function(jQuery, Core) {

	"use strict";

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name : "ProjectName.control.table",
		version: "1.42.8",
		dependencies : ["sap.ui.core","sap.ui.unified"],
		types: [
			"ProjectName.control.table.NavigationMode",
			"ProjectName.control.table.SelectionBehavior",
			"ProjectName.control.table.SelectionMode",
			"ProjectName.control.table.SortOrder",
			"ProjectName.control.table.VisibleRowCountMode",
			"ProjectName.control.table.SharedDomRef"
		],
		interfaces: [],
		controls: [
			"ProjectName.control.table.AnalyticalColumnMenu",
			"ProjectName.control.table.AnalyticalTable",
			"ProjectName.control.table.ColumnMenu",
			"ProjectName.control.table.Table",
			"ProjectName.control.table.TreeTable"
		],
		elements: [
			"ProjectName.control.table.AnalyticalColumn",
			"ProjectName.control.table.Column",
			"ProjectName.control.table.Row"
		],
		extensions: {
			flChangeHandlers: {
				"ProjectName.control.table.Column": {
					"propertyChange" : "default"
				},
				"ProjectName.control.table.Table" : {
					"moveElements": "default"
				},
				"ProjectName.control.table.AnalyticalTable" : {
					"moveElements": "default"
				}
			}
		}
	});

	/* eslint-disable no-undef */
	/**
	 * Table-like controls, mainly for desktop scenarios.
	 *
	 * @namespace
	 * @alias ProjectName.control.table
	 * @author SAP SE
	 * @version 1.42.8
	 * @public
	 */
	var thisLib = ProjectName.control.table;
	/* eslint-enable no-undef */

	/**
	 * Navigation mode of the table
	 *
	 * @version 1.42.8
	 * @enum {string}
	 * @public
	 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
	 */
	thisLib.NavigationMode = {

		/**
		 * Uses the scrollbar control.
		 * @public
		 */
		Scrollbar : "Scrollbar",

		/**
		 * Uses the paginator control.
		 * This option must no longer be used. Using a scrollbar is the only navigation mode which is supported by
		 * the <code>ProjectName.control.table</code> library. The <code>navigationMode</code> property has always been a visual representation. No matter which navigation mode
		 * is used, data fetched from an OData service is loaded page-wise.
		 * @public
		 * @deprecated As of version 1.38, replaced by {@link ProjectName.control.table.NavigationMode.Scrollbar}
		 */
		Paginator : "Paginator"

	};


	/**
	 * Selection behavior of the table
	 *
	 * @version 1.42.8
	 * @enum {string}
	 * @public
	 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
	 */
	thisLib.SelectionBehavior = {

		/**
		 * Rows can be selected on the complete row.
		 * @public
		 */
		Row : "Row",

		/**
		 * Rows can only be selected on the row selector.
		 * @public
		 */
		RowSelector : "RowSelector",

		/**
		 * Rows can only be selected on the row (and the selector is hidden).
		 * @public
		 */
		RowOnly : "RowOnly"

	};


	/**
	 * Selection mode of the table
	 *
	 * @version 1.42.8
	 * @enum {string}
	 * @public
	 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
	 */
	thisLib.SelectionMode = {

		/**
		 * Select multiple rows at a time (toggle behavior).
		 * @public
		 */
		MultiToggle : "MultiToggle",

		/**
		 * Select multiple rows at a time.
		 * @public
		 * @deprecated As of version 1.38, replaced by {@link ProjectName.control.table.SelectionMode.MultiToggle}
		 */
		Multi : "Multi",

		/**
		 * Select one row at a time.
		 * @public
		 */
		Single : "Single",

		/**
		 * No rows can be selected.
		 * @public
		 */
		None : "None"

	};


	/**
	 * Sort order of a column
	 *
	 * @version 1.42.8
	 * @enum {string}
	 * @public
	 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
	 */
	thisLib.SortOrder = {

		/**
		 * Sort Order: ascending.
		 * @public
		 */
		Ascending : "Ascending",

		/**
		 * Sort Order: descending.
		 * @public
		 */
		Descending : "Descending"

	};


	/**
	 * VisibleRowCountMode of the table
	 *
	 * @version 1.42.8
	 * @enum {string}
	 * @public
	 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
	 */
	thisLib.VisibleRowCountMode = {

		/**
		 * The table always has as many rows as defined in the visibleRowCount property.
		 * @public
		 */
		Fixed : "Fixed",

		/**
		 * After rendering the table has as many rows as defined in visibleRowCount property. The user is able to change the visible rows by moving a grip with the mouse. The visibleRowCount property is changed accordingly.
		 * @public
		 */
		Interactive : "Interactive",

		/**
		 * The table automatically fills the height of the surrounding container.
		 * The visibleRowCount property is automatically changed accordingly.
		 * All rows need the same height, otherwise the auto mode doesn't always work as expected.
		 * The height of all siblings within the same layout container of the table will be subtracted from the available height.
		 * For performance reasons, it is recommended to add no siblings in the table's parent container.
		 * @public
		 */
		Auto : "Auto"

	};

	/**
	 * Shared DOM Reference IDs of the table.
	 *
	 * Contains IDs of shared DOM references, which should be accessible to inheriting controls via getDomRef() function.
	 *
	 * @version 1.42.8
	 * @enum {string}
	 * @public
	 */
	thisLib.SharedDomRef = {

		/**
		 * The element id of the Horizontal Scroll Bar of the ProjectName.control.table.Table.
		 * @public
		 */
		HorizontalScrollBar : "hsb",

		/**
		 * The element id of the Vertical Scroll Bar of the ProjectName.control.table.Table.
		 * @public
		 */
		VerticalScrollBar : "vsb"
	};

	/**
	 * Details about the group event to distinguish between different actions associated with grouping
	 * @enum {string}
	 * @public
	 * @type {{group: string, ungroup: string, ungroupAll: string, moveUp: string, moveDown: string, showGroupedColumn: string, hideGroupedColumn: string}}
	 */
	thisLib.GroupEventType = {
		/**
		 * Group Column
		 * @public
		 */
		group: "group",
		/**
		 * Ungroup Column
		 * @public
		 */
		ungroup: "ungroup",
		/**
		 * Ungroup All Columns
		 * @public
		 */
		ungroupAll: "ungroupAll",
		/**
		 * Change the group order of the columns. Move column one position up in the group sequence
		 * @public
		 */
		moveUp: "moveUp",
		/**
		 * Change the group order of the columns. Move column one position down in the group sequence
		 * @public
		 */
		moveDown: "moveDown",
		/**
		 * Show grouped column also as a column, not just as group header
		 * @public
		 */
		showGroupedColumn: "showGroupedColumn",
		/**
		 * Show grouped column only as group header
		 * @public
		 */
		hideGroupedColumn: "hideGroupedColumn"
	};

	// map the new Column to the old ColumnHeader
	thisLib.ColumnHeader = thisLib.Column;


	//factory for table to create labels an textviews to be overwritten by commons and mobile library
	if (!thisLib.TableHelper) {
		thisLib.TableHelper = {
			createLabel: function(mConfig){ throw new Error("no Label control available!"); }, /* must return a Label control */
			createTextView: function(mConfig){ throw new Error("no TextView control available!"); }, /* must return a textview control */
			createTextField: function(mConfig){ throw new Error("no TextField control available!"); }, /* must return a textfield control */
			createImage: function(mConfig){ throw new Error("no Image control available!"); }, /* must return a textview control */
			bFinal: false /* if true, the helper must not be overwritten by an other library */
		};
	}

	return thisLib;

});