// import Footer from '@/components/Footer/Footer';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';

// import Form from '@/components/Form/Form';
// import Navbar from '@/components/Navbar/Navbar';
// import Password from '@/components/Password/Password';

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

  const Navbar = dynamic(() =>
    import('@/components/Navbar/Navbar').then((mod) => mod)
  );
  const Form = dynamic(() =>
    import('@/components/Form/Form').then((mod) => mod)
  );
  const Password = dynamic(() =>
    import('@/components/Password/Password').then((mod) => mod)
  );
  const Footer = dynamic(() =>
    import('@/components/Footer/Footer').then((mod) => mod)
  );

  const videoRef = React.useRef(null);

  return (
    <>
      <main className='ac-grid relative z-10 h-[100dvh] max-h-screen overflow-hidden p-4 pt-2 text-white'>
        <Navbar />
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
              {isMuted ? (
                <Image
                  onClick={() => {
                    setisMuted((prev) => !prev);
                  }}
                  className='mt-4 self-end'
                  width={18}
                  height={18}
                  src={speaker.muted}
                  alt='sound icon'
                />
              ) : (
                <Image
                  onClick={() => {
                    setisMuted((prev) => !prev);
                  }}
                  className='mt-4 self-end'
                  width={18}
                  height={18}
                  src={speaker.unmuted}
                  alt='sound icon'
                />
              )}
            </li>
          </ul>
          <Form />
          <Password />
        </article>

        {/* footer */}
        <Footer />
      </main>
      <video
        preload='none'
        ref={videoRef}
        autoPlay={true}
        poster='/video/CH1.jpeg'
        src={background}
        muted={isMuted}
        playsInline={true}
        className='lazy fixed bottom-0 left-0 right-0 top-0 z-0 min-h-screen w-screen object-cover'
      ></video>
    </>
  );
}
