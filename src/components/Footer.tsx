import { Link } from "react-router-dom";

function Auth() {
  return (
    <footer className="bg-black border-t border-t-[#333333]">
      <div className="max-w-fit mx-auto md:max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="hover:underline underline-offset-4">
            Addis Arts
          </Link>
          . All Rights Reserved.
        </span>

        <p className="text-sm text-gray-400 sm:text-center mt-3 sm:mt-0">
          Made with ❤️ by{" "}
          <a
            href="http://mikiasworash.vercel.app"
            target="_blank"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            M
          </a>
        </p>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 md:mt-0">
          <li>
            <Link
              to="/about"
              className="hover:underline underline-offset-4 me-4 md:me-6"
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link
              to="#"
              className="hover:underline underline-offset-4 me-4 md:me-6"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="hover:underline underline-offset-4 me-4 md:me-6"
            >
              Terms
            </Link>
          </li> */}
          <li>
            <Link to="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Auth;
