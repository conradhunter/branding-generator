import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
  typescript: true,
});

export const handleBuyCredits = async () => {
  const data = await fetch('/api/stripe/create-checkout', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
    },
    body: JSON.stringify({ quantity: 1 }),
  });

  if (!data.ok) {
    return new Error('Failed to create order');
  }

  const { url } = await data.json();

  window.location.href = url;
};
