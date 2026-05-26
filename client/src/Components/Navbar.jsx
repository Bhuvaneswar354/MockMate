import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}

        <div>

          <h1 className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">

            MockMate

          </h1>

        </div>

        {/* Links */}

        <div className="flex items-center gap-8 text-lg">

          <Link
            to="/"
            className="hover:text-green-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="hover:text-green-400 transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;