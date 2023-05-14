'use client';

const BuyCreditsButton = () => {
  const handleBuyCredits = async () => {
    const data = await fetch('/api/stripe/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorisation: `Bearer ${process.env.STRIPE_SECRET_KEY!}`,
      },
      body: JSON.stringify({ quantity: 1, test: 'test' }),
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
