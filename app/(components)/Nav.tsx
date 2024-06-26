import Link from 'next/link';

const Nav = async () => {
  return (
    <header className='bg-gray-600 text-gray-100'>
      <nav className='flex justify-between items-center w-full px-10 py-4'>
        <div>My Site</div>
        <div className='flex gap-10'>
          <Link href='/public'>Home</Link>
          <Link href='/create-user'>Create User</Link>
          <Link href='/client-member'>Client Member</Link>
          <Link href='/member'>Member</Link>
          <Link href='/public'>login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
