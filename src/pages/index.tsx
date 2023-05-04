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
    <div className='absolute inset-0'>
      <video
        autoPlay={true}
        muted={true}
        className='absolute z-0'
        width='100%'
        height='100%'
        controls={false}
      >
        <source src='/video/CH1.mp4' type='video/mp4' />
      </video>

      <main
        className=' ac-grid h-full overflow-hidden p-2 text-white '
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
          {/* chapters */}
          <ul className='relative my-16 mt-12 flex justify-center py-8'>
            <li
              onClick={() => setBackground(BG.CH__1)}
              className='m-4 flex cursor-pointer flex-col'
            >
              CH_1
              <img
                className='mt-4 self-end'
                width='18px'
                src='/images/speaker.svg'
                alt='sound icon'
              />
            </li>
            <li
              onClick={() => setBackground(BG.CH__2)}
              className='m-4 cursor-pointer'
            >
              CH_2
            </li>
            <li
              onClick={() => setBackground(BG.CH__3)}
              className='m-4 cursor-pointer'
            >
              CH_3
            </li>
          </ul>
          {/* sign-up */}
          <section className='my-16 flex flex-col text-center'>
            <span className='my-8 text-xs'>SIGN UP FOR ACCESS</span>
            <div className='search-wrapper relative w-[80vw] max-w-sm self-center'>
              <input
                className='w-full border-white bg-transparent text-xs text-white placeholder-white'
                type='text'
                placeholder='ENTER E-MAIL'
              ></input>
              <button className='absolute bottom-0 right-2 top-0 border-l-[1px] border-white px-2 pl-4 text-center text-xs text-white'>
                JOIN
              </button>
            </div>
          </section>
          <Link className='my-16 flex flex-col text-center text-sm' href='/#'>
            PASSWORD
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
