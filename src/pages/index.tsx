import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import TicTacToe from './TicTacToe';

export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Head>
        <title>Recact Playground</title>
      </Head>
      <div className='max-w-screen-lg mx-auto space-y-10'>
        <h1 className='text-4xl text-red-600 font-bold'>React Quickly</h1>
        <div className='p-20'>
          <span className='block'>Clicked {count} times!</span>
          <div className='space-x-6'>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
          </div>
        </div>
        {/* <div>
          <ul className='flex flex-col space-y-4'>
            <Link href='#'>Read more about React</Link>
            <Link href='#'>Read more about React</Link>
            <Link href='#'>Read more about React</Link>
          </ul>
        </div> */}
        <TicTacToe />
      </div>
    </>
  );
}
