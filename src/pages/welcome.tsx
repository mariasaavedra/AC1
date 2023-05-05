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
        <Link href='/'>
          <span className='text-sm'>AC__1</span>
        </Link>
        <span className='text-sm'>TECHNICAL APPAREL STUDIO</span>
      </nav>
      <article className='relative  flex flex-col self-center '>
        {/* sign-up */}
        <section className='my-16 flex flex-col text-center'>
          <span className='my-8 text-sm'>WELCOME TO FOUNDERS CLUB</span>
          <span className='my-8 text-sm'>PASSWORD EMAILED UPON LAUNCH</span>
        </section>
        <Link className='my-16 flex flex-col text-center text-sm' href='/#'>
          BACK
        </Link>
      </article>

      {/* footer */}
      <footer className='z-5  relative flex justify-between p-2'>
        <Falcon />
        <span className='text-sm'>FOUNDERS CLUB</span>
      </footer>
    </main>
  );
}
