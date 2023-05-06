import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='relative flex justify-between p-2'>
      <Link href='/'>
        <span className='text-sm'>AC__1</span>
      </Link>

      <span className='text-sm'>TECHNICAL APPAREL STUDIO</span>
    </nav>
  );
}
