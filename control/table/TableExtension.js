/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides helper ProjectName.control.table.TableExtension.
sap.ui.define(['jquery.sap.global', 'sap/ui/base/Object', './TableUtils'],
	function(jQuery, BaseObject, TableUtils) {
	"use strict";

	/**
	 * Base class of extensions for ProjectName.control.table.Table, ...
	 *
	 * @class Base class of extensions for ProjectName.control.table.Table, ...
	 *
	 * @extends sap.ui.base.Object
	 * @author SAP SE
	 * @version 1.42.8
	 * @constructor
	 * @private
	 * @alias ProjectName.control.table.TableExtension
	 */
	var TableExtension = BaseObject.extend("ProjectName.control.table.TableExtension", /* @lends ProjectName.control.table.TableExtension */ {

		constructor : function(oTable, mSettings) {
			BaseObject.call(this);
			this._table = oTable;
			this._settings = mSettings || {};

			this._type = TableExtension.TABLETYPES.STANDARD;
			if (TableUtils.isInstanceOf(oTable, "ProjectName/control/table/TreeTable")) {
				this._type = TableExtension.TABLETYPES.TREE;
			} else if (TableUtils.isInstanceOf(oTable, "ProjectName/control/table/AnalyticalTable")) {
				this._type = TableExtension.TABLETYPES.ANALYTICAL;
			}

			var sName = this._init(this._table, this._type, this._settings);

			//Attaching a getter to the related table control
			if (sName) {
				var that = this;
				oTable["_get" + sName] = function(){ return that; };
			}
		},

		/*
		 * @see sap.ui.base.Object#destroy
		 */
		destroy : function() {
			this._table = null;
			this._type = null;
			BaseObject.prototype.destroy.apply(this, arguments);
		},

		/*
		 * @see sap.ui.base.Object#getInterface
		 */
		getInterface : function() { return this; }

	});

	TableExtension.TABLETYPES = {
		TREE: "TREE",
		ANALYTICAL: "ANALYTICAL",
		STANDARD: "STANDARD"
	};

	/*
	 * Returns the related table control.
	 * @public (Part of the API for Table control only!)
	 */
	TableExtension.prototype.getTable = function() {
		return this._table;
	};

	/*
	 * Init function may be overridden by the subclasses
	 */
	TableExtension.prototype._init = function(oTable, sTableType, mSettings) { return null; };

	/*
	 * Hook which allows the extension to attach for additional browser events after the rendering of the table control.
	 * Might be overridden in subclasses.
	 * @see ProjectName.control.table.Table#_attachEvents
	 */
	TableExtension.prototype._attachEvents = function() {};

	/*
	 * Hook which allows the extension to detach previously attached browser event handlers.
	 * Might be overridden in subclasses.
	 * @see ProjectName.control.table.Table#_detachEvents
	 */
	TableExtension.prototype._detachEvents = function() {};


	/*
	 * Informs all registered extensions of the given table to attach their additional events, if needed.
	 * @see ProjectName.control.table.TableExtension#_attachEvents
	 * @public (Part of the API for Table control only!)
	 */
	TableExtension.attachEvents = function(oTable) {
		if (!oTable._aExtensions) {
			return;
		}
		for (var i = 0; i < oTable._aExtensions.length; i++) {
			oTable._aExtensions[i]._attachEvents();
		}
	};

	/*
	 * Informs all registered extensions of the given table to detach their previously attached
	 * browser event handlers, if needed.
	 * @see ProjectName.control.table.TableExtension#_detachEvents
	 * @public (Part of the API for Table control only!)
	 */
	TableExtension.detachEvents = function(oTable) {
		if (!oTable._aExtensions) {
			return;
		}
		for (var i = 0; i < oTable._aExtensions.length; i++) {
			oTable._aExtensions[i]._detachEvents();
		}
	};

	/*
	 * Initializes the Extension with the given type and attaches it to the given Table control.
	 * @public (Part of the API for Table control only!)
	 */
	TableExtension.enrich = function(oTable, oExtensionClass, mSettings) {
		if (!oExtensionClass || !(oExtensionClass.prototype instanceof TableExtension)) {
			return null;
		}

		var oExtension = new oExtensionClass(oTable, mSettings);
		if (!oTable._aExtensions) {
			oTable._aExtensions = [];
		}
		oTable._aExtensions.push(oExtension);
		return oExtension;
	};

	/*
	 * Detaches and destroy all registered extensions of the given Table control.
	 * @public (Part of the API for Table control only!)
	 */
	TableExtension.cleanup = function(oTable) {
		if (!oTable._bExtensionsInitialized || !oTable._aExtensions) {
			return;
		}
		for (var i = 0; i < oTable._aExtensions.length; i++) {
			oTable._aExtensions[i].destroy();
		}
		delete oTable._aExtensions;
		delete oTable._bExtensionsInitialized;
	};

	return TableExtension;

});