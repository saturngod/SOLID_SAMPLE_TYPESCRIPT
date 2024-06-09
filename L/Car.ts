import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
    rent(): string {
        return "Car rented";
    }
}