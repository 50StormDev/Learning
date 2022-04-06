// sample code for Create Account using Factory Method

// Creator base class for create Account
abstract class Creator {
  
  abstract register(): Account 

  createAccount(): string {
    const client = this.register()
    return `${client.type} Client with a Limit of ${client.defaultLimit}¥ has been created!`
  }
}

// ConcreteCreator (SubClass of Creator) for create Common account
class CreateCommon extends Creator {
  register(): Account {
    return new CommonAccount()
  }
}

// ConcreteCreator (SubClass of Creator) for create Premium account
class CreatePremiun extends Creator {
  register(): Account {
    return new PremiumAccount()
  }
}

// Interface of Account especifying the attributes and methods
interface Account {
  type: string
  defaultLimit: number
  create(): string
}

// ConcreteProduct for isntanciate a Common Account
class CommonAccount implements Account {
  type: string = "Common"
  defaultLimit = 1000
  create(): string{
    return `Welcome, this is a Common Account!`
  }
  
}

// ConcreteProduct for isntanciate a Premium Account
class PremiumAccount implements Account {
  type: string = "Premium"
  defaultLimit: number = 9000
  create(): string {
    return `Welcome to Premium!`
  }
}

// Client Code to create account
function clientCode3(creator: Creator){
  console.log("\nRegister:")
  console.log(creator.createAccount())
}

clientCode3(new CreateCommon) // expect: "Common Client with a Limit of 1000¥ has been created!"
clientCode3(new CreatePremiun) // expect: "Premium Client with a Limit of 9000¥ has been created!"
