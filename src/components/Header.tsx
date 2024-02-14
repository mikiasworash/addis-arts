import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 bg-black w-full mx-auto border-b border-b-[#333333]">
      <div className="max-w-fit md:max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          <Link to="/" className="text-white hover:text-gray-200 text-xl">
            Addis Arts
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 md:mt-0">
          <li>
            <Link
              to="/"
              className="hover:underline underline-offset-4 me-4 md:me-6"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/offers"
              className="hover:underline underline-offset-4 me-4 md:me-6"
            >
              Offers
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:underline underline-offset-4">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
