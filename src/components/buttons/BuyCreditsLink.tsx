'use client';

import { handleBuyCredits } from '~/lib/stripe';

const BuyCreditsLink = () => {
  return (
    <button
      onClick={handleBuyCredits}
      className='underline'
    >
      Buy Credits
    </button>
  );
};

export default BuyCreditsLink;
