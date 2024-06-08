import Head from 'next/head';
import Image from 'next/image';

import AccountDeletionForm from '@/components/AccountDeletionForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>{'Fitastic'} Account Support</title>
        <meta
          name='description'
          content={`
          Account deletion request process for the Fitastic app.`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-row gap-4 items-center justify-center h-screen'>
        <div className='flex flex-col gap-4 items-center'>
          <Image
            alt='Company logo'
            height={80}
            width={300}
            src='https://firebasestorage.googleapis.com/v0/b/fitastic-86443.appspot.com/o/Picture1.png?alt=media&token=d5c860a0-93f3-4720-a72a-0d715e1f1393'
          />
          <AccountDeletionForm />
        </div>
        <div className='flex flex-col gap-4'>
          <Image
            alt='Company logo'
            height={500}
            width={256}
            src='https://firebasestorage.googleapis.com/v0/b/fitastic-86443.appspot.com/o/Component%2035.png?alt=media&token=0dfdbb63-7b5a-449d-884c-8c4de0d79bc0'
          />
          <p className='w-64 text-sm text-gray-500 dark:text-gray-400 text-center'>
            Alternatively, you can delete your account directly inside the app
            via Settings {'->'} "Delete My Account"
          </p>
        </div>
      </div>
    </>
  );
}
