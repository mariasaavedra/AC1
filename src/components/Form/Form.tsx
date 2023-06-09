import jsonp from 'jsonp';
import { useRouter } from 'next/router';
import React from 'react';

export default function Form() {
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();

    let email;
    if (emailRef.current) {
      email = emailRef.current.value || '';
    }
    const url =
      'https://gmail.us21.list-manage.com/subscribe/post-json?u=c850c15167457bd1a503cd522&id=0bea8341ff&f_id=00fa51e1f0';
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
      const { msg, result } = data;
      if (result !== 'success') {
        alert(msg);
      } else {
        router.push('/welcome');
      }
    });
  }

  return (
    <section className='my-16 flex flex-col text-center'>
      <span className='my-8 text-xs'>SIGN UP FOR ACCESS</span>
      <div className='search-wrapper relative w-[80vw] max-w-sm self-center'>
        <div id='mc_embed_signup'>
          <form
            action='https://gmail.us21.list-manage.com/subscribe/post-json?u=c850c15167457bd1a503cd522&id=0bea8341ff&f_id=00fa51e1f0'
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            className='validate'
            target='hiddenFrame'
            onSubmit={handleSubmit}
          >
            <div id='mc_embed_signup_scroll'>
              <div className='mc-field-group'>
                <input
                  type='email'
                  ref={emailRef}
                  name='EMAIL'
                  placeholder='ENTER E-MAIL'
                  className='required  email w-full border-white bg-transparent bg-transparent py-[13px] text-xs text-white placeholder-white'
                  id='mce-EMAIL'
                  autoComplete='email'
                  required={true}
                />
                <span id='mce-EMAIL-HELPERTEXT' className='helper_text' />
                <input
                  type='submit'
                  value='JOIN'
                  name='subscribe'
                  id='mc-embedded-subscribe'
                  className='button absolute bottom-0 right-2 top-0 border-l-[1px] border-white px-2 pl-4 text-center text-xs text-white'
                />
              </div>
              <div id='mce-responses' className='clear foot'>
                <div
                  className='response'
                  id='mce-error-response'
                  style={{ display: 'none' }}
                />
                <div
                  className='response'
                  id='mce-success-response'
                  style={{ display: 'none' }}
                />
              </div>{' '}
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden='true'
              >
                <input
                  type='text'
                  name='b_c850c15167457bd1a503cd522_0bea8341ff'
                  tabIndex={-1}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
