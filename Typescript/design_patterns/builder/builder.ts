// Builder is a creational design pattern that lets you construct complex objects step by step.

// Create Builder with all steps
interface SandwichBuilder {
  addHamburger(num: number): void 
  addCheese(num: number): void
  addEgg(num: number): void
  addBacon(num: number): void
  getSandwich(): Sandwich
}

// Create Concrete Builder 
class ConcreteSandwichBuilder implements SandwichBuilder {
  private sandwich: Sandwich
  
  constructor(){
    this.reset()
  }

  public reset(): void {
    this.sandwich = new Sandwich();
  }

  addHamburger(num: number): void {
    this.sandwich.ingredients.hamburger = num
  }

  addCheese(num: number): void {
    this.sandwich.ingredients.cheese = num
  }
  

  addEgg(num: number): void {
    this.sandwich.ingredients.egg = num
  }
  

  addBacon(num: number): void {
    this.sandwich.ingredients.bacon = num
  }
  
  getSandwich(): Sandwich {
    const completed = this.sandwich
    this.reset()
    return completed
  }

}

// Create interface of the Product
interface ISandwich {
  [key: string]: number
}

// Create the Product
class Sandwich {
  public ingredients: ISandwich = {}
  
  public show(): void {
    console.log(this.ingredients)
  }
}

function clientCode5(builder: SandwichBuilder){
  builder.addHamburger(2)
  builder.addCheese(1)
  builder.addBacon(3)
  builder.addEgg(1)
  console.log("\nIngredients:")
  builder.getSandwich().show()
  console.log("\n")

}

clientCode5(new ConcreteSandwichBuilder)
