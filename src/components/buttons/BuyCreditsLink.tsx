'use client';

import { useUser } from '@clerk/nextjs';
import { handleBuyCredits } from '~/lib/stripe';

const BuyCreditsLink = () => {
  const { user } = useUser();

  if (user) {
    return (
      <button
        onClick={handleBuyCredits}
        className='underline'
      >
        Buy Credits
      </button>
    );
  } else {
    return <span> </span>;
  }
};

export default BuyCreditsLink;
