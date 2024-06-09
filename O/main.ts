import { CreditCardPayment } from './CreditCardPayment';
import { PayPalPayment } from './PayPalPayment';
import { PaymentContext } from './PaymentContext';

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

const processCreditCardPayment = (amount: number) => {
    const paymentContext = new PaymentContext(creditCardPayment);
    paymentContext.processPayment(amount);
};

const processPayPalPayment = (amount: number) => {
    const paymentContext = new PaymentContext(payPalPayment);
    paymentContext.processPayment(amount);
};

processCreditCardPayment(100); // Processing credit card payment of $100
processPayPalPayment(200); // Processing PayPal payment of $200
