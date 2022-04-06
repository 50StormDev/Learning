// Builder is a creational design pattern that lets you construct complex objects step by step.
// Create Concrete Builder 
var ConcreteSandwichBuilder = /** @class */ (function () {
    function ConcreteSandwichBuilder() {
        this.reset();
    }
    ConcreteSandwichBuilder.prototype.reset = function () {
        this.sandwich = new Sandwich();
    };
    ConcreteSandwichBuilder.prototype.addHamburger = function (num) {
        this.sandwich.ingredients.hamburger = num;
    };
    ConcreteSandwichBuilder.prototype.addCheese = function (num) {
        this.sandwich.ingredients.cheese = num;
    };
    ConcreteSandwichBuilder.prototype.addEgg = function (num) {
        this.sandwich.ingredients.egg = num;
    };
    ConcreteSandwichBuilder.prototype.addBacon = function (num) {
        this.sandwich.ingredients.bacon = num;
    };
    ConcreteSandwichBuilder.prototype.getSandwich = function () {
        var completed = this.sandwich;
        this.reset();
        return completed;
    };
    return ConcreteSandwichBuilder;
}());
// Create the Product
var Sandwich = /** @class */ (function () {
    function Sandwich() {
        this.ingredients = {};
    }
    Sandwich.prototype.show = function () {
        console.log(this.ingredients);
    };
    return Sandwich;
}());
function clientCode5(builder) {
    builder.addHamburger(2);
    builder.addCheese(1);
    builder.addBacon(3);
    builder.addEgg(1);
    console.log("\nIngredients:");
    builder.getSandwich().show();
    console.log("\n");
}
clientCode5(new ConcreteSandwichBuilder);
