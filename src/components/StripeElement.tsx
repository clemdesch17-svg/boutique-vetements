"use client";

import { useEffect, useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

export default function StripeElement({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;
    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: { return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success` },
    });
    if (error) setErrorMessage(error.message);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {clientSecret ? (
        <PaymentElement />
      ) : (
        <div className="w-full bg-gray-200 h-10 animate-pulse" />
      )}
      {errorMessage && <div className="text-sm text-red-600">{errorMessage}</div>}
      <button
        disabled={!stripe || loading}
        className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
      >
        {loading ? 'Traitement…' : 'Payer'}
      </button>
    </form>
  );
}
