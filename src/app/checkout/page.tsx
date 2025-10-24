'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeElement from '@/components/StripeElement';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Elements stripe={stripePromise} options={{ mode: 'payment', currency: 'eur' }}>
        {/* passer le montant total du panier (en centimes) */}
        <StripeElement amount={1500} />
      </Elements>
    </div>
  );
}
