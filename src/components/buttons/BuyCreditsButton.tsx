import Link from 'next/link';

const BuyCreditsButton = () => {
  return (
    <Link href='https://buy.stripe.com/test_9AQ9DyaU28iBdIQ3cd'>
      <button className='rounded-md border border-violet-400 px-3 py-2 text-sm font-medium uppercase text-white shadow-lg duration-150 hover:bg-violet-400'>
        Buy Credits
      </button>
    </Link>
  );
};

export default BuyCreditsButton;
