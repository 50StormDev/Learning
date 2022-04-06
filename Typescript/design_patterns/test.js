// sample code for Create Clients using Factory Method for the mini Project 
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
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.createAccount = function () {
        var client = this.register();
        return "".concat(client.type, " Client with a Limit of ").concat(client.defaultLimit, "\u00A5 has been created!");
    };
    return Creator;
}());
var CreateCommon = /** @class */ (function (_super) {
    __extends(CreateCommon, _super);
    function CreateCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateCommon.prototype.register = function () {
        return new CommonAccount();
    };
    return CreateCommon;
}(Creator));
var CreatePremiun = /** @class */ (function (_super) {
    __extends(CreatePremiun, _super);
    function CreatePremiun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreatePremiun.prototype.register = function () {
        return new PremiumAccount();
    };
    return CreatePremiun;
}(Creator));
var CommonAccount = /** @class */ (function () {
    function CommonAccount() {
        this.type = "Common";
        this.defaultLimit = 1000;
    }
    CommonAccount.prototype.create = function () {
        return "Welcome, this is a Common Account!";
    };
    return CommonAccount;
}());
var PremiumAccount = /** @class */ (function () {
    function PremiumAccount() {
        this.type = "Premium";
        this.defaultLimit = 9000;
    }
    PremiumAccount.prototype.create = function () {
        return "Welcome to Premium!";
    };
    return PremiumAccount;
}());
function clientCode3(creator) {
    console.log("\nRegister:");
    console.log(creator.createAccount());
}
clientCode3(new CreateCommon);
clientCode3(new CreatePremiun);
