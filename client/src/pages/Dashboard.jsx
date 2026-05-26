import { useNavigate } from "react-router-dom";

import { useState } from "react";

import DSAChart from "../Components/DSAChart";

function Dashboard() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [roomId, setRoomId] = useState("");




  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };




  // CREATE ROOM

  const createRoom = () => {

    if (!username) {

      alert("Please enter username");

      return;

    }



    localStorage.setItem("username", username);



    const id = Math.random().toString(36).substring(2, 8);

    navigate(`/room/${id}`);

  };




  // JOIN ROOM

  const joinRoom = () => {

    if (!username || !roomId) {

      alert("Please enter username and room ID");

      return;

    }



    localStorage.setItem("username", username);



    navigate(`/room/${roomId}`);

  };




  return (
    

    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-black text-white flex">




      {/* SIDEBAR */}

      <div className="w-[260px] border-r border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between">

        <div>




          {/* LOGO */}

          <div className="flex items-center gap-3 mb-12">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">

              ✦

            </div>



            <div>

              <h1 className="text-2xl font-bold">

                Mock<span className="text-green-400">Mate</span>

              </h1>



              <p className="text-gray-400 text-sm">

                Dashboard

              </p>

            </div>

          </div>




          {/* MENU */}

          <div className="space-y-4">

            <button className="w-full text-left px-5 py-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400">

              🏠 Dashboard

            </button>



            <button
  onClick={() => navigate("/interviews")}
  className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/5 transition-all"
>
  💻 Interviews
</button>



            <button
  onClick={() => navigate("/resume-interview")}
  className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/5 transition-all"
>
  📄 Resume Interview
</button>

<button
  onClick={() => navigate("/analytics")}
  className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/5 transition-all"
>
  📊 Analytics
</button>

<button
  onClick={() => navigate("/settings")}
  className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/5 transition-all"
>
  ⚙ Settings
</button>
          </div>

        </div>




        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-semibold transition-all duration-300"
        >

          Logout

        </button>

      </div>




      {/* MAIN CONTENT */}

      <div className="flex-1 p-10 overflow-y-auto">




        {/* HEADER */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold">

            Welcome Back 👋

          </h1>



          <p className="text-gray-400 mt-3 text-lg">

            Ready for your next coding interview?

          </p>

        </div>




        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h2 className="text-green-400 text-4xl font-bold">

              12

            </h2>



            <p className="text-gray-400 mt-2">

              Interviews Completed

            </p>

          </div>




          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h2 className="text-green-400 text-4xl font-bold">

              8

            </h2>



            <p className="text-gray-400 mt-2">

              Practice Sessions

            </p>

          </div>




          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h2 className="text-green-400 text-4xl font-bold">

              92%

            </h2>



            <p className="text-gray-400 mt-2">

              Performance Score

            </p>

          </div>

        </div>




        {/* ROOM SECTION */}

        <div className="grid lg:grid-cols-2 gap-8">




          {/* CREATE ROOM */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-4">

              Create Interview Room

            </h2>



            <p className="text-gray-400 mb-8">

              Start a new coding interview session instantly.

            </p>




            {/* USERNAME */}

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#111827] border border-gray-700 outline-none focus:border-green-500 mb-5"
            />




            <button
              onClick={createRoom}
              className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-all duration-300"
            >

              + Create Room

            </button>

          </div>




          {/* JOIN ROOM */}

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-4">

              Join Interview Room

            </h2>



            <p className="text-gray-400 mb-8">

              Enter room code shared by interviewer.

            </p>




            {/* USERNAME */}

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#111827] border border-gray-700 outline-none focus:border-green-500 mb-5"
            />




            {/* ROOM ID */}

            <input
              type="text"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#111827] border border-gray-700 outline-none focus:border-green-500 mb-5"
            />




            <button
              onClick={joinRoom}
              className="w-full bg-white/10 hover:bg-white/20 py-4 rounded-2xl font-semibold transition-all duration-300"
            >

              Join Room

            </button>

          </div>

        </div>




        {/* RECENT ACTIVITY */}

        <div className="mt-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">

            Recent Activity

          </h2>




          <div className="space-y-5">

            <div className="flex justify-between items-center bg-black/20 p-5 rounded-2xl">

              <div>

                <h3 className="font-semibold">

                  Frontend Interview

                </h3>



                <p className="text-gray-400 text-sm">

                  React + Tailwind

                </p>

              </div>



              <span className="text-green-400">

                Completed

              </span>

            </div>




            <div className="flex justify-between items-center bg-black/20 p-5 rounded-2xl">

              <div>

                <h3 className="font-semibold">

                  DSA Practice Session

                </h3>



                <p className="text-gray-400 text-sm">

                  Arrays & Hashmaps

                </p>

              </div>



              <span className="text-yellow-400">

                Ongoing

              </span>

            </div>

          </div>

        </div>
                {/* DSA CHART */}

        <div className="mt-10">
          <DSAChart />
        </div>   

      </div>

    </div>
    

  );
  

}

export default Dashboard;