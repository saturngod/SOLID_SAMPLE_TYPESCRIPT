import { PaymentMethod } from './PaymentMethod';

export class PayPalPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}