// Define a Person and your properties 
interface PersonInterface {
  firstName: string
  lastName: string
  email: string
}

// Create a class Person and implements PesonInterface 
class Person implements PersonInterface {
  firstName: string
  lastName: string
  email: string

  constructor(firstName: string, lastName: string, email: string){
    this.firstName = firstName
    this.lastName = lastName 
    this.email = email
  }
}

// Define an Interface for a client
interface ClientInterface {
  // Properties
  firstName: string
  lastName: string
  email: string

  // Methods 
  balanceInquiry(password: string):void
  action(password: string, method:string, amount: number): void
}

// Create a Class Client and implements the ClientInterface
class Client extends Person implements ClientInterface  {
  private readonly id: number
  private  _pin: string
  private  _balance: number

  constructor(user: Person, pin: string) {
    super(user.firstName, user.lastName, user.email)
    this.id = 1
    this._pin = pin 
    this._balance = 0
    console.log("Client Created!")
  }
  
  // Check if the password is correct, if is correct show the balance, if id not correct prompt "password invalid!"
  balanceInquiry(password: string): void{
    if(this._pin === password){
      console.log(`Your Balance is ${this._balance}¥`)
    } else {
      console.log("Password invalid!")
    }
  }

  // Get the password, the method and the amount of money, if the password is correct then procced to the actions
  action(password: string, method: string, amount: number): void{
    if(this._pin === password){
      switch (method) {
      case "deposit":
        this._balance += amount
        console.log(`You Success deposit ${amount}¥ \n Your balance is now ${this._balance}¥`)
        break;
      case "withdraw":
        if(this._balance < amount){
          console.log("Not enough money!")
        } else {
          this._balance -= amount
          console.log(`You Success withdraw ${amount}¥ \n Your balance is now ${this._balance}¥`)
        }
        break;
      default:
        console.log("Action Not Found!")
        break;
      }
    } else {
      console.log("Password Invalid")
    }
  }

}


let user1: Person = new Person("Rafael","Igarashi", "rafael@igarashi.com") 
let client1: Client = new Client(user1, "1234") //Client Created!
client1.balanceInquiry("2345") //Password Invalid!
client1.balanceInquiry("1234") //Your Balance is 0¥
client1.action("2334", "deposit", 1000) // Password Invalid
client1.action("1234", "deposit", 1000) // Your balance is now 1000¥
client1.action("1234", "withdraw", 500)  // Your balance is now 500¥
client1.action("1234", "withdraw", 1500) // Not enough money!

