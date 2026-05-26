import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
  "https://mockmate-1-xig2.onrender.com/api/auth/signup",
  {
    name,
    email,
    password,
  }
);

      alert(response.data.message);

      setName("");
      setEmail("");
      setPassword("");

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert("Signup Failed");

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-black flex justify-center items-center px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

        <h1 className="text-white text-4xl font-bold mb-3 text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Join MockMate and start coding together.
        </p>

        <form onSubmit={handleSignup} className="space-y-5">

          <input
            type="text"
            placeholder="Enter Name"
            className="w-full p-4 rounded-xl bg-[#111827] text-white border border-gray-700 outline-none focus:border-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

            Signup

          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-green-400 hover:text-green-300"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Signup;