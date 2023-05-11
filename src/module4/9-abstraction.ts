//interface

// interface IVehicle {
//   name: string;
//   model: string;
// }
// const vehicle: IVehicle = {
//   name: "car",
//   model: "2000",
// };

// USING interface
interface IVehicle {
  startEngine(): void;
  StopEngine(): void;
  move(): void;
}

// I am telling that type of Vehicle class will be IVehicle by using implements
class Vehicle implements IVehicle{
  name:string;
  brand:string;
  model: string

  constructor(name:string, brand:string, model:string){
    this.name = name;
    this.brand = brand;
    this.model = model
  }

  startEngine(): void {
    
  }
  StopEngine(): void {
    
  }
  move(): void {
    
  }
}

const vehicle1 = new Vehicle("Car", "Toyota", "55022");

//using abstract class
abstract class Vehicle1 {
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}

  // By using IVehicle, I must have to use below properties
  //   startEngine(): void {
  //     console.log("I am starting engine..");
  //   }
  abstract startEngine(): void; // means that, function with abstract hould not have function body
  //   StopEngine(): void {
  //     console.log("I am stopping engine..");
  //   }
  abstract StopEngine(): void;

  abstract move(): void;
  //   I can use any other method. It will be ok like this
  test() {
    console.log("I am for testing purpose");
  }
}

class Child1 extends Vehicle1 {
  // I can now use all prpperty of abstract class, but here i have to write function body because we did not use function body in parent
  startEngine(): void {
    console.log("Starting Engine");
  }
  StopEngine(): void {
    console.log("Stopping Engine");
  }
 
  move(): void {
    console.log("Moving");
  }
}

const c1 = new Child1("car", "BMW", "#87e87y8e");
c1.StopEngine();
