// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes 
var VictorianChair = /** @class */ (function () {
    function VictorianChair() {
    }
    VictorianChair.prototype.type = function () {
        return "Victorian Chair";
    };
    return VictorianChair;
}());
var ModernChair = /** @class */ (function () {
    function ModernChair() {
    }
    ModernChair.prototype.type = function () {
        return "Modern Chair";
    };
    return ModernChair;
}());
var VictorianSofa = /** @class */ (function () {
    function VictorianSofa() {
    }
    VictorianSofa.prototype.type = function () {
        return "Victorian Sofa";
    };
    return VictorianSofa;
}());
var ModernSofa = /** @class */ (function () {
    function ModernSofa() {
    }
    ModernSofa.prototype.type = function () {
        return "Modern Sofa";
    };
    return ModernSofa;
}());
var VictorianTable = /** @class */ (function () {
    function VictorianTable() {
    }
    VictorianTable.prototype.type = function () {
        return "Victorian Table";
    };
    return VictorianTable;
}());
var ModernTable = /** @class */ (function () {
    function ModernTable() {
    }
    ModernTable.prototype.type = function () {
        return "Modern Table";
    };
    return ModernTable;
}());
// Concrete Factory for Victorian
var VictorianFurnitureFactory = /** @class */ (function () {
    function VictorianFurnitureFactory() {
    }
    VictorianFurnitureFactory.prototype.createChair = function () {
        return new VictorianChair();
    };
    VictorianFurnitureFactory.prototype.createSofa = function () {
        return new VictorianSofa();
    };
    VictorianFurnitureFactory.prototype.createTable = function () {
        return new VictorianTable();
    };
    return VictorianFurnitureFactory;
}());
// Concreate Factory for Modern
var ModernFurnitureFactory = /** @class */ (function () {
    function ModernFurnitureFactory() {
    }
    ModernFurnitureFactory.prototype.createChair = function () {
        return new ModernChair();
    };
    ModernFurnitureFactory.prototype.createSofa = function () {
        return new ModernSofa();
    };
    ModernFurnitureFactory.prototype.createTable = function () {
        return new ModernTable();
    };
    return ModernFurnitureFactory;
}());
function clientCode4(factory) {
    console.log("fornitures:");
    console.log(factory.createChair().type());
    console.log(factory.createSofa().type());
    console.log(factory.createTable().type());
    console.log("\n\n");
}
clientCode4(new VictorianFurnitureFactory);
clientCode4(new ModernFurnitureFactory);
