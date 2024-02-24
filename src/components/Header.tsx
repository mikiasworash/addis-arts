import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="fixed top-0 bg-black w-full mx-auto border-b border-b-[#333333] z-50">
      <div className="max-w-fit md:max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          <Link to="/" className="text-white hover:text-gray-200 text-xl">
            Addis Arts
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 md:mt-0">
          <li>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </li>
          <li>
            <SignedOut>
              <Link
                to="/login"
                className="hover:underline underline-offset-4 mr-4"
              >
                Sign In
              </Link>
            </SignedOut>
          </li>
          <li>
            <SignedOut>
              <Link
                to="/register"
                className="hover:underline underline-offset-4"
              >
                Sign Up
              </Link>
            </SignedOut>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
