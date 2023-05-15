'use client';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

const BuyCreditsButton = () => {
  const handleBuyCredits = async () => {
    const data = await fetch('/api/stripe/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: 1, stripePromise }),
    });

    if (!data.ok) {
      return new Error('Failed to create order');
    }

    const { url } = await data.json();

    window.location.href = url;
  };

  return (
    <button
      onClick={handleBuyCredits}
      className='rounded-md border border-violet-400 px-3 py-2 text-sm font-medium uppercase text-white shadow-lg duration-150 hover:bg-violet-400'
    >
      Buy Credits
    </button>
  );
};

export default BuyCreditsButton;
