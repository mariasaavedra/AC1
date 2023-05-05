import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';

import Falcon from '@/components/Falcon/Falcon';

export default function HomePage() {
  const BG = {
    CH__1: '/video/CH1.mp4',
    CH__2: '/images/2.png',
    CH__3: '/images/3.png',
  };

  const [background, setBackground] = useState(BG.CH__1);

  return (
    <main className='ac-grid relative z-10 h-[100dvh] bg-black p-4 pt-2 text-white'>
      {/*  header */}
      <nav className='relative flex justify-between p-2'>
        <span className='text-sm'>AC__1</span>
        <span className='text-sm'>TECHNICAL APPAREL STUDIO</span>
      </nav>
      <article className='relative flex  flex-col items-center  self-center '>
        {/* sign-up */}
        <section className='w-md my-16 flex flex-col text-center'>
          <span className='my-8 text-xs'>PASSWORD</span>
          <div className='relative'>
            <input
              className='w-[100%] min-w-[300px] border-white bg-transparent text-xs text-white placeholder-white'
              type='password'
            ></input>
            <button
              type='submit'
              className='absolute bottom-0 right-2 top-0 border-l-[1px] border-white px-2 pl-4 text-center text-xs text-white'
            >
              <Link href='/welcome'>LOGIN</Link>
            </button>
          </div>

          <Link
            className='my-16 mt-32 flex flex-col text-center text-sm'
            href='/'
          >
            BACK
          </Link>
        </section>
      </article>

      {/* footer */}
      <footer className='z-5  relative flex justify-between p-2'>
        <Falcon />
        <span className='text-sm'>FOUNDERS CLUB</span>
      </footer>
    </main>
  );
}
