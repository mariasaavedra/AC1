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
    <main className='p-2'>
      {/*  header */}
      <nav className='flex justify-between'>
        <span>AC_1</span>
        <span>TECHNICAL APPAREL STUDIO</span>
      </nav>
      {/* chapters */}
      <ul className='flex justify-center py-8'>
        <li>CH_1</li>
        <li>CH_2</li>
        <li>CH_3</li>
      </ul>
      {/* sign-up */}
      <section className='my-4 flex flex-col text-center'>
        <span>SIGN UP FOR ACCESS</span>
        <input type='text'></input>
        <button>JOIN</button>
      </section>

      {/* password link */}
      <Link className='my-4 flex flex-col text-center' href='#'>
        PASSWORD
      </Link>

      {/* footer */}
      <footer className='flex justify-between'>
        <Falcon />
        <span>FOUNDERS CLUB</span>
      </footer>
    </main>
  );
}
