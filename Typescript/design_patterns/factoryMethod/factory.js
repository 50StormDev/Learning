// Factory Method is a pattern that overide constructor using a method, that way can reusable
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Code based on the logistics example at https://refactoring.guru/design-patterns/factory-method
var Logistics = /** @class */ (function () {
    function Logistics() {
    }
    Logistics.prototype.createTransport = function () {
        var transport = this.planDelivery();
        return "Your order is been ".concat(transport.deliver());
    };
    return Logistics;
}());
var RoadLogistics = /** @class */ (function (_super) {
    __extends(RoadLogistics, _super);
    function RoadLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoadLogistics.prototype.planDelivery = function () {
        return new Truck();
    };
    return RoadLogistics;
}(Logistics));
var SeaLogistics = /** @class */ (function (_super) {
    __extends(SeaLogistics, _super);
    function SeaLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeaLogistics.prototype.planDelivery = function () {
        return new Ship();
    };
    return SeaLogistics;
}(Logistics));
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function () {
        return "Deliver by land in a box.";
    };
    return Truck;
}());
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.deliver = function () {
        return "Deliver by sea in a container.";
    };
    return Ship;
}());
function clientCode(logistics) {
    console.log("\nLogistic Example: ");
    console.log("Order has been placed");
    console.log(logistics.createTransport());
}
clientCode(new RoadLogistics);
clientCode(new SeaLogistics);
// Code based on the #Pseudocode at the same site 
var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    Dialog.prototype.createButton = function () {
        var dialog = this.render();
        return dialog.platform();
    };
    return Dialog;
}());
var WindowsDialog = /** @class */ (function (_super) {
    __extends(WindowsDialog, _super);
    function WindowsDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowsDialog.prototype.render = function () {
        return new WindowsButton();
    };
    return WindowsDialog;
}(Dialog));
var WebDialog = /** @class */ (function (_super) {
    __extends(WebDialog, _super);
    function WebDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDialog.prototype.render = function () {
        return new HTMLButton();
    };
    return WebDialog;
}(Dialog));
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.platform = function () {
        return "This is a Windows Button";
    };
    return WindowsButton;
}());
var HTMLButton = /** @class */ (function () {
    function HTMLButton() {
    }
    HTMLButton.prototype.platform = function () {
        return "This is a HTML Button";
    };
    return HTMLButton;
}());
function clientCode2(dialog) {
    console.log("\nPseudocode example:");
    console.log(dialog.createButton());
}
clientCode2(new WindowsDialog);
clientCode2(new WebDialog);
