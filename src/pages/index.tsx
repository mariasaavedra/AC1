import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';

import Falcon from '@/components/Falcon/Falcon';

export default function HomePage() {
  const BG = {
    CH__1: '/video/CH1.mp4',
    CH__2: '/video/CH2.mp4',
    CH__3: '/video/CH3.mp4',
  };

  const speaker = {
    unmuted: '/images/speaker.svg',
    muted: '/images/speaker-muted.png',
  };

  const [background, setBackground] = useState(BG.CH__1);
  const [isMuted, setisMuted] = useState(true);
  const [speakerImg, setSpeakerImg] = useState('');
  const router = useRouter();

  React.useEffect(() => {
    if (isMuted) {
      setSpeakerImg(speaker.muted);
    } else {
      setSpeakerImg(speaker.unmuted);
    }
  }, [isMuted]);

  React.useEffect(() => {
    setTimeout(() => {
      setisMuted(false);
    }, 500);
  });

  return (
    <>
      <main className='ac-grid relative z-10 h-[100dvh] max-h-screen overflow-hidden p-4 pt-2 text-white'>
        {/*  header */}
        <nav className='relative flex justify-between p-2'>
          <span className='text-sm'>AC__1</span>
          <span className='text-sm'>TECHNICAL APPAREL STUDIO</span>
        </nav>
        <article className='relative flex  flex-col '>
          {/* chapters */}
          <ul className='relative my-8 mt-12 flex justify-center py-8'>
            <li
              onClick={() => {
                setBackground(BG.CH__1);
              }}
              className='m-4 flex cursor-pointer flex-col'
            >
              CH_1
            </li>
            <li
              onClick={() => setBackground(BG.CH__2)}
              className='m-4 cursor-pointer'
            >
              CH_2
            </li>
            <li className='m-4 flex cursor-pointer flex-col'>
              <span onClick={() => setBackground(BG.CH__3)}>CH_3</span>
              <img
                onClick={() => {
                  setisMuted((prev) => !prev);
                }}
                className='mt-4 self-end'
                width='18px'
                src={speakerImg}
                alt='sound icon'
              />
            </li>
          </ul>
          {/* sign-up */}
          <section className='my-16 flex flex-col text-center'>
            <span className='my-8 text-xs'>SIGN UP FOR ACCESS</span>
            <div className='search-wrapper relative w-[80vw] max-w-sm self-center'>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push('/welcome');
                }}
              >
                <input
                  className='w-full border-white bg-transparent text-xs text-white placeholder-white'
                  type='text'
                  placeholder='ENTER E-MAIL'
                ></input>
                <button
                  type='submit'
                  className='absolute bottom-0 right-2 top-0 border-l-[1px] border-white px-2 pl-4 text-center text-xs text-white'
                >
                  <Link href='/welcome'>JOIN</Link>
                </button>
              </form>
            </div>
          </section>
          <Link
            className='my-16 flex flex-col text-center text-sm'
            href='/password'
          >
            PASSWORD
          </Link>
        </article>

        {/* footer */}
        <footer className='z-5 flex justify-between p-2 py-1'>
          <Falcon />
          <span className='text-sm'>FOUNDERS CLUB</span>
        </footer>
      </main>
      <video
        autoPlay={true}
        src={background}
        muted={true}
        playsInline={true}
        className='fixed bottom-0 left-0 right-0 top-0 z-0 min-h-screen w-screen object-cover'
      ></video>
    </>
  );
}
