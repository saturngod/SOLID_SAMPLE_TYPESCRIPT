import { CreditCardPayment } from './CreditCardPayment';
import { PayPalPayment } from './PayPalPayment';
import { PaymentProcessor } from './PaymentProcessor';

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

const creditCardPaymentProcessor = new PaymentProcessor(creditCardPayment);
creditCardPaymentProcessor.processPayment(100); // Processing credit card payment of $100

const payPalPaymentProcessor = new PaymentProcessor(payPalPayment);
payPalPaymentProcessor.processPayment(200); // Processing PayPal payment of $200