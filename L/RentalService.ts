import { Vehicle } from "./Vehicle";

export class RentalService {
    rentVehicle(vehicle: Vehicle): boolean {
        if (vehicle.checkTirePressure()) {
            console.log(vehicle.rent());
            return true;
        }
        return false
    }
}