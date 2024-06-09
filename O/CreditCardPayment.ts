import { PaymentStrategy } from './PaymentStrategy';

export class CreditCardPayment implements PaymentStrategy {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}
