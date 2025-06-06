sap.ui.define([
    "sap/base/Log",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
], function(Log, Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        formatter: formatter,
        onInit: function() {
			// Person
            var oPersonModel = new JSONModel({
                "Eid": "leslie.gonzales",
                "Enabled": true,
                "Address": {
                  "Street": "M Salud St",
                  "City": "Imus City",
                  "Zip": "4103",
                  "Country": "Philippines"
                },
                "SalesAmount": 999999.00,
                "CurrencyCode": "USD"
              });
            this.getView().setModel(oPersonModel,"person");
		},

		onItemSelected(oEvent) {
			const oSelectedItem = oEvent.getSource();
			const oContext = oSelectedItem.getBindingContext("ProductsModel");
			const sPath = oContext.getPath();
			const oProductDetailPanel = this.byId("productDetailsPanel");
			oProductDetailPanel.bindElement({ path: sPath, model: "ProductsModel" });
		}
    });
});