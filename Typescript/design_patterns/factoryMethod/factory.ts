// Factory Method is a pattern that overide constructor using a method, that way can reusable

// Code based on the logistics example at https://refactoring.guru/design-patterns/factory-method

abstract class Logistics {
  public abstract planDelivery(): Transport //method is abstract to force the subclass to override
  
  
  public createTransport(): string {
    const transport = this.planDelivery();
    return `Your order is been ${transport.deliver()}`
  }
}

class RoadLogistics extends Logistics {
  public planDelivery(): Transport {
    return new Truck()
  }
}

class SeaLogistics extends Logistics {
  public planDelivery(): Transport {
    return new Ship()
  }
}

interface Transport {
  deliver(): string
}

class Truck implements Transport {
  deliver(): string {
    return "Deliver by land in a box."
  }
}

class Ship implements Transport {
  deliver(): string {
    return "Deliver by sea in a container."
  }
}

function clientCode(logistics: Logistics){
  console.log("\nLogistic Example: ")
  console.log("Order has been placed")
  console.log(logistics.createTransport())
}

clientCode(new RoadLogistics)
clientCode(new SeaLogistics)






// Code based on the #Pseudocode at the same site 
abstract class Dialog {
  public abstract render(): Button 

  public createButton(): string {
    const dialog = this.render()
    return dialog.platform()
  }
}

class WindowsDialog extends Dialog {
  public render(): Button {
    return new WindowsButton()
  }
}

class WebDialog extends Dialog {
  public render(): Button {
    return new HTMLButton()
  }
}

interface Button {
  platform(): string 
}

class WindowsButton implements Button {
  platform(): string {
    return "This is a Windows Button"
  }
}

class HTMLButton implements Button {
  platform(): string {
    return "This is a HTML Button"
  }
}

function clientCode2(dialog: Dialog){
  console.log(`\nPseudocode example:`)
  console.log(dialog.createButton())
}

clientCode2(new WindowsDialog)
clientCode2(new WebDialog)
