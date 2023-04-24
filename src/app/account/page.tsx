import { NextPage } from 'next';
import UserInformation from '~/components/account-components/UserInformation';
import AccountSettings from '~/components/account-components/AccountSettings';

const AccountPage: NextPage = () => {
  return (
    <main className='py-20'>
      <div className='flex w-full flex-col items-center justify-center gap-8'>
        <UserInformation />
        <AccountSettings />
      </div>
    </main>
  );
};

export default AccountPage;
