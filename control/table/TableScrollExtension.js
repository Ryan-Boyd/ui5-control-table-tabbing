/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides helper ProjectName.control.table.TableScrollExtension.
sap.ui.define(['jquery.sap.global', './TableExtension', './TableUtils'],
	function(jQuery, TableExtension, TableUtils) {
	"use strict";

	/*
	 * Provides utility functions used this extension
	 */
	//var ExtensionHelper = {
	//    private functions should go here
	//};


	/*
	 * Event handling for scrolling.
	 * "this" in the function context is the table instance.
	 */
	var ExtensionDelegate = {
		// TBD: Event handlers like ontouchstart should go here
	};


	/**
	 * Extension for ProjectName.control.table.Table which handles scrolling.
	 *
	 * @class Extension for ProjectName.control.table.Table which handles scrolling.
	 *
	 * @extends ProjectName.control.table.TableExtension
	 * @author SAP SE
	 * @version 1.42.8
	 * @constructor
	 * @private
	 * @alias ProjectName.control.table.TableScrollExtension
	 */
	var TableScrollExtension = TableExtension.extend("ProjectName.control.table.TableScrollExtension", /* @lends ProjectName.control.table.TableScrollExtension */ {

		/*
		 * @see TableExtension._init
		 */
		_init : function(oTable, sTableType, mSettings) {
			this._type = sTableType;
			this._delegate = ExtensionDelegate;

			// Register the delegate
			oTable.addEventDelegate(this._delegate, oTable);

			return "ScrollExtension";
		},

		/*
		 * @see TableExtension._attachEvents
		 */
		_attachEvents : function() {
			// TBD: Registration for scrolling related events (see Table#_attachEvents) should go here
		},

		/*
		 * @see TableExtension._detachEvents
		 */
		_detachEvents : function() {
			// TBD: Deregistration for scrolling related events (see Table#_detachEvents) should go here
		},

		/*
		 * Enables debugging for the extension
		 */
		_debug : function() {
			this._ExtensionDelegate = ExtensionDelegate;
			// this._ExtensionHelper = ExtensionHelper;
			// ...
		},

		/*
		 * @see sap.ui.base.Object#destroy
		 */
		destroy : function() {
			// Deregister the delegates
			var oTable = this.getTable();
			if (oTable) {
				oTable.removeEventDelegate(this._delegate);
			}
			this._delegate = null;

			TableExtension.prototype.destroy.apply(this, arguments);
		}

		// "Public" functions which allow the table to communicate with this extension should go here

	});

	return TableScrollExtension;

}, /* bExport= */ true);