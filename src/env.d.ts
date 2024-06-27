/// <reference types="astro/client" />

declare global {
    interface MonetizationEvent extends Event {
        readonly paymentPointer: string;
        readonly incomingPayment: string;
        readonly amount: PaymentCurrencyAmount;
    }

    interface ElementEventMap {
        monetization: MonetizationEvent;
    }
}

export {};