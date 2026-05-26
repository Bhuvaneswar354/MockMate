import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://mockmate-1-xig2.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      navigate("/dashboard");

    } catch (error) {
  console.log("FULL ERROR:", error);
  console.log("RESPONSE:", error.response);
  console.log("DATA:", error.response?.data);

  alert(error.response?.data?.message || error.message);
}

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-black flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

        <h1 className="text-white text-4xl font-bold mb-3 text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to continue your interview journey.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-4 rounded-xl bg-[#111827] text-white border border-gray-700 outline-none focus:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-4 rounded-xl bg-[#111827] text-white border border-gray-700 outline-none focus:border-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black p-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
          >

            Login

          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">

          Don’t have an account?{" "}

          <Link
            to="/signup"
            className="text-green-400 hover:text-green-300"
          >
            Signup
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;