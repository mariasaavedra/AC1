import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';

import Falcon from '@/components/Falcon/Falcon';

export default function HomePage() {
  const BG = {
    CH_1: '/images/1.png',
    CH_2: '/images/2.png',
    CH_3: '/images/3.png',
  };

  const [background, setBackground] = useState(BG.CH_1);

  return (
    <main
      className=' ac-grid absolute inset-0 h-screen p-2 text-white'
      style={{
        background: `url(${background}) no-repeat center center / cover`,
      }}
    >
      {/*  header */}
      <nav className='flex justify-between'>
        <span>AC_1</span>
        <span>TECHNICAL APPAREL STUDIO</span>
      </nav>
      <article className='flex  flex-col '>
        {/* chapters */}
        <ul className='my-16 mt-12 flex justify-center py-8'>
          <li
            onClick={() => setBackground(BG.CH_1)}
            className='m-4 cursor-pointer'
          >
            CH_1
          </li>
          <li
            onClick={() => setBackground(BG.CH_2)}
            className='m-4 cursor-pointer'
          >
            CH_2
          </li>
          <li
            onClick={() => setBackground(BG.CH_3)}
            className='m-4 cursor-pointer'
          >
            CH_3
          </li>
        </ul>
        {/* sign-up */}
        <section className='my-16 flex flex-col text-center'>
          <span className='my-8'>SIGN UP FOR ACCESS</span>
          <div className='search-wrapper relative w-[80vw] max-w-sm self-center'>
            <input
              className='w-full border-white bg-transparent text-white placeholder-white'
              type='text'
              placeholder='ENTER E-MAIL'
            ></input>
            <button className='absolute bottom-0 right-2 top-0 border-l-[1px] border-white px-2 pl-4 text-center text-white'>
              JOIN
            </button>
          </div>
        </section>
        <Link className='my-16 flex flex-col text-center' href='/#'>
          PASSWORD
        </Link>
      </article>

      {/* footer */}
      <footer className='flex justify-between p-2'>
        <Falcon />
        <span>FOUNDERS CLUB</span>
      </footer>
    </main>
  );
}
