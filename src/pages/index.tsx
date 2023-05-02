import Link from 'next/link';
import * as React from 'react';

import Falcon from '@/components/Falcon/Falcon';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main className=' ac-grid h-screen  p-2'>
      {/*  header */}
      <nav className='flex justify-between'>
        <span>AC_1</span>
        <span>TECHNICAL APPAREL STUDIO</span>
      </nav>
      <article className='flex  flex-col '>
        {/* chapters */}
        <ul className='my-16 flex justify-center py-8'>
          <li className='m-4'>CH_1</li>
          <li className='m-4'>CH_2</li>
          <li className='m-4'>CH_3</li>
        </ul>
        {/* sign-up */}
        <section className='my-16 flex flex-col text-center'>
          <span className='my-2'>SIGN UP FOR ACCESS</span>
          <div className='search-wrapper relative'>
            <input
              className='w-full border-black'
              type='text'
              placeholder='ENTER E-MAIL'
            ></input>
            <button className='absolute bottom-0 right-2 top-0 border-l-[1px] border-black px-2 pl-4 text-center text-black'>
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
