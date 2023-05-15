'use client';

const BuyCreditsButton = () => {
  const handleBuyCredits = async () => {
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

  // console.log(process.env.NEXT_PUBLIC_STRIPE_KEY);
  // console.log(process.env.STRIPE_SECRET_KEY);

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
