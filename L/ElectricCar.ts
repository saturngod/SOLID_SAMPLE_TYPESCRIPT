import { Vehicle } from "./Vehicle";

export class ElectricCar extends Vehicle {
    rent(): string {
        return "Electric car rented";
    }

    chargeBattery(): string {
        return "Battery charging";
    }
}
