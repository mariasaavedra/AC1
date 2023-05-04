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
    <div className='absolute inset-0 bg-black'>
      <main
        className=' ac-grid h-full p-2 text-white '
        // style={{
        //   background: `url(${background}) no-repeat center center / cover`,
        // }}
      >
        {/*  header */}
        <nav className='relative flex justify-between'>
          <span className='text-sm'>AC__1</span>
          <span className='text-sm'>TECHNICAL APPAREL STUDIO</span>
        </nav>
        <article className='relative flex  flex-col '>
          {/* password */}
          <section className='my-16 flex flex-col text-center'>
            <span className='my-8 text-sm'>PASSWORD *</span>
            <div className='search-wrapper relative w-[80vw] max-w-sm self-center'>
              <input
                className='w-full border-white bg-transparent text-xs text-white placeholder-white'
                type='password'
              ></input>
              <button className='absolute bottom-0 right-2 top-0 border-l-[1px] border-white px-2 pl-4 text-center text-xs text-white'>
                LOGIN
              </button>
            </div>
          </section>
          <Link className='my-16 flex flex-col text-center text-sm' href='/'>
            BACK
          </Link>
        </article>

        {/* footer */}
        <footer className='z-5  relative flex justify-between p-2'>
          <Falcon />
          <span className='text-sm'>FOUNDERS CLUB</span>
        </footer>
      </main>
    </div>
  );
}
