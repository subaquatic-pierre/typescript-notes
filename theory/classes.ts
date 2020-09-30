/* Modifiers

public -> Can be accessed anywhere anytime
private -> Can only be accessed by other methods in the class
protected -> Can only be accessed within inheritance tree

*/

class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }
  public drive(): void {
    console.log('Driving ...');
  }

  protected turn(): void {
    console.log('Turning ...');
  }
}

class Car extends Vehicle {
  constructor(private wheels: number, color: string) {
    super(color);
  }
  private honk(): void {
    console.log('Hoot !!');
  }

  startHonking(): void {
    this.honk();
  }

  startTurning(): void {
    this.turn();
  }

  printWheels(): void {
    console.log(this.wheels);
  }
}

const car = new Car(4, 'red');

car.startHonking();
car.startTurning();

console.log(car.color);
car.printWheels();
