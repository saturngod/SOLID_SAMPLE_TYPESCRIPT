import { Car } from './Car';
import { ElectricCar } from './ElectricCar';
import { RentalService } from './RentalService';
import { ToyCar } from './ToyCar';

const rentalService = new RentalService();

const car = new Car();
const electricCar = new ElectricCar();
const toyCar = new ToyCar();

console.log(rentalService.rentVehicle(car)); // Car rented
console.log(rentalService.rentVehicle(electricCar)); // Electric car rented
console.log(rentalService.rentVehicle(toyCar)); // Error: Method not supported