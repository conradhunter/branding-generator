'use client';

import { handleBuyCredits } from '~/lib/stripe';

const BuyCreditsButton = () => {
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
