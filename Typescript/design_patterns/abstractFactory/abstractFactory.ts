// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes 

// Code based on the Furniture example at https://refactoring.guru/design-patterns/abstract-factory

// Create Product Interface
interface Chair {
  type(): string
}

// Create Concrete Product for Victorian
class VictorianChair implements Chair {
  type(): string {
    return "Victorian Chair"
  }
}

// Create Concrete Product for Modern
class ModernChair implements Chair {
  type(): string {
    return "Modern Chair"
  }
}

// Same above, but now for Sofas
interface Sofa {
  type(): string
}

class VictorianSofa implements Sofa {
  type(): string {
    return "Victorian Sofa"
  }
}

class ModernSofa implements Sofa {
  type(): string {
    return "Modern Sofa"
  }
}

// Same above, but now for Tables
interface Table {
  type(): string
}

class VictorianTable implements Table {
  type(): string {
    return "Victorian Table"
  }
}

class ModernTable implements Table {
  type(): string {
    return "Modern Table"
  }
}


// Create de Abstract Factory
interface FurnitureFactory {
  createChair(): Chair
  createSofa(): Sofa
  createTable(): Table
}

// Create Concrete Factory for Victorian
class VictorianFurnitureFactory implements FurnitureFactory{
  createChair(): Chair {
    return new VictorianChair()
  }
  createSofa(): Sofa {
    return new VictorianSofa()
  }
  createTable(): Table {
    return new VictorianTable()
  }
}

// Create Concreate Factory for Modern
class ModernFurnitureFactory implements FurnitureFactory{
  createChair(): Chair {
    return new ModernChair()
  }
  createSofa(): Sofa {
    return new ModernSofa()
  }
  createTable(): Table {
    return new ModernTable()
  }
}

function clientCode4(factory: FurnitureFactory){
  console.log("fornitures:")
  console.log(factory.createChair().type())
  console.log(factory.createSofa().type())
  console.log(factory.createTable().type())
  console.log("\n\n")
}

clientCode4(new VictorianFurnitureFactory)
clientCode4(new ModernFurnitureFactory)