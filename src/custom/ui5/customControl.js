sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    "use strict";
    return Control.extend("custom.ui5.customControl", {
        metadata: {
            properties: {},
            aggregations: {},
            events: {}
        },

        renderer: function (oRM, oControl) {
            console.log("renderer");

            oRM.write("<div class='customControl'>");
            oRM.write("<span>customControl</span>");
            oRM.write("</div>");
        },

        init: function () { 
            console.log("init");
        },

        onBeforeRendering: function () { 
            console.log("onBeforeRendering");
        },

        onAfterRendering: function () { 
            console.log("onAfterRendering");
        },

        exit: function () { 
            console.log("exit");
        }
    });
});