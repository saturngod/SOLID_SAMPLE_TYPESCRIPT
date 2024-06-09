import { PaymentStrategy } from './PaymentStrategy';

export class PaymentContext {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    processPayment(amount: number): void {
        this.strategy.processPayment(amount);
    }
}
