import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className='border-b border-stone-200 bg-white shadow-sm'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
        <Link to='/' className='text-xl font-bold text-orange-600'>
          Zwiggy
        </Link>
        <nav className='flex items-center gap-4 text-stone-700'>
          <Link to='/' className='hover:text-orange-600'>
            Home
          </Link>
          {user?.role == 'restuarant' && (
            <Link to='/restuarant/create'>Create Restuarant</Link>
          )}
          {user ? (
            <>
              <span className='text-sm font-medium '>{user.name}</span>
              <button
                className='px-3 py-1 rounded text-white hover:text-orange-800 bg-orange-600'
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to='/signup' className='hover:text-orange-600 '>
                Signup
              </Link>
              <Link to='/signin' className='hover:text-orange-600'>
                Signin
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
