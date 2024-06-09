import { PaymentMethod } from './PaymentMethod';

export class PaymentProcessor {
    private paymentMethod: PaymentMethod;

    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    processPayment(amount: number): void {
        this.paymentMethod.processPayment(amount);
    }
}