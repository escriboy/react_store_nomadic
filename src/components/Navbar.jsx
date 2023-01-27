import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import User from './User';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
import Button from './ui/Button';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="py-3 flex justify-between mt-2 px-2">
      <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <Link
              className="inline-block no-underline hover:text-black hover:underline py-2 px-4 text-xl"
              to="/products"
            >
              Shop
            </Link>
            {user && user.isAdmin && (
              <Link
                to="/products/new"
                className="inline-block no-underline hover:text-black hover:underline py-2 px-4 text-xl"
              >
                Add Products
              </Link>
            )}
          </ul>
        </nav>
      </div>

      <div className="order-1 md:order-2 md:flex md:items-center">
        <Link to="/" className="flex items-center text-2xl text-gray-800">
          <AiOutlineShopping className="mr-2 mb-1.5" />
          <h1 className="tracking-widest font-bold mt-1">NOMADIC</h1>
        </Link>
      </div>

      <div className="order-2 md:order-3 flex items-center">
        <nav className="text-xl">
          <ul className="md:flex items-center justify-between text-gray-700 pt-4 md:pt-0">
            {user && (
              <Link
                to="/carts"
                className="inline-block no-underline hover:text-black hover:underline py-2 px-2"
              >
                <CartStatus />
              </Link>
            )}
            {user && <User user={user} />}
            {/*{!user && (*/}
            {/*  <button*/}
            {/*    onClick={login}*/}
            {/*    className="inline-block no-underline hover:text-black hover:underline py-2 px-4 mr-4"*/}
            {/*  >*/}
            {/*    Login*/}
            {/*  </button>*/}
            {/*)}*/}
            {/*{user && (*/}
            {/*  <button*/}
            {/*    onClick={logout}*/}
            {/*    className="inline-block no-underline hover:text-black hover:underline py-2 px-4 mr-4"*/}
            {/*  >*/}
            {/*    Logout*/}
            {/*  </button>*/}
            {/*)}*/}
            {!user && <Button text={'Login'} onClick={login} />}
            {user && <Button text={'Logout'} onClick={logout} />}
          </ul>
        </nav>
        {/*<button>Login</button>*/}
      </div>
    </header>
  );
}
