export interface PaymentStrategy {
    processPayment(amount: number): void;
}

