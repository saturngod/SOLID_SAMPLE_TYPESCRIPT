import { Vehicle } from "./Vehicle";

export class ToyCar extends Vehicle {
    
    rent(): string {
        return "Toy car rented";
    }

    checkTirePressure(): boolean {
        //we assume it will return a string
        //but throw error
        //broke Liskov Substitution Principle
        throw new Error("Method not supported");
    }
}