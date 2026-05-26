import { Link } from "react-router-dom";

export default function Home() {

  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#050816] via-[#0b1120] to-black text-white">

      {/* BACKGROUND GLOWS */}

      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full"></div>



      {/* NAVBAR */}

      <nav className="relative z-50 border-b border-white/10">

        <div className="max-w-[1500px] mx-auto flex justify-between items-center px-6 lg:px-16 py-4">

          {/* LOGO */}

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">

              <span className="text-black text-xl font-bold">
                ✦
              </span>

            </div>

            <div>

              <h1 className="text-2xl font-bold tracking-tight">

                Mock<span className="text-green-400">Mate</span>

              </h1>

              <p className="text-gray-400 text-sm">
                Code Together
              </p>

            </div>

          </div>



          {/* BUTTON */}

          <Link
            to="/signup"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20"
          >

            Get Started →

          </Link>

        </div>

      </nav>



      {/* HERO SECTION */}

      <section className="relative z-10 max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 lg:px-16 py-20 min-h-[90vh]">

        {/* LEFT SIDE */}

        <div>

          {/* BADGE */}

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-300 mb-8 backdrop-blur-xl">

            ⚡ Real-time Collaboration

          </div>



          {/* HEADING */}

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">

            <span className="text-green-400">
              Code Together,
            </span>

            <br />

            Learn Together

          </h1>



          {/* DESCRIPTION */}

          <p className="text-gray-400 text-lg lg:text-xl mt-8 leading-relaxed max-w-2xl">

            The ultimate platform for collaborative coding interviews
            and pair programming. Connect face-to-face, code in
            real-time, and ace your technical interviews.

          </p>



          {/* FEATURE TAGS */}

          <div className="flex flex-wrap gap-4 mt-10">

            <div className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-200">

              ✓ Live Video Chat

            </div>

            <div className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-200">

              ✓ Code Editor

            </div>

            <div className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-200">

              ✓ Multi-Language

            </div>

          </div>



          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5 mt-12">

            <Link
              to="/signup"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-green-500/20"
            >

              Start Coding Now →

            </Link>


            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-lg hover:bg-white/10 transition-all duration-300">

              ▶ Watch Demo

            </button>

          </div>



          {/* STATS */}

          <div className="grid grid-cols-3 gap-5 mt-16">

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <h2 className="text-4xl font-bold text-green-400">
                10K+
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                Active Users
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <h2 className="text-4xl font-bold text-green-400">
                50K+
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                Sessions
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <h2 className="text-4xl font-bold text-green-400">
                99.9%
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                Uptime
              </p>

            </div>

          </div>

        </div>



        {/* RIGHT SIDE */}

        <div className="relative flex justify-center items-center">

          {/* GLOW */}

          <div className="absolute w-[600px] h-[600px] bg-green-500/10 blur-[150px] rounded-full"></div>



          {/* MAIN CARD */}

          <div className="relative w-full max-w-2xl rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-2xl shadow-green-500/10">

            {/* FLOATING BADGES */}

            <div className="absolute top-10 left-[-30px] px-5 py-4 rounded-2xl bg-[#1d2b1f] border border-green-500/20 shadow-xl">

              <h2 className="text-green-400 font-bold text-2xl">
                CSS
              </h2>

            </div>


            <div className="absolute top-36 left-[-30px] px-5 py-4 rounded-2xl bg-[#1d2b1f] border border-green-500/20 shadow-xl">

              <h2 className="text-green-400 font-bold text-2xl">
                HTML
              </h2>

            </div>


            <div className="absolute top-64 left-[-30px] px-5 py-4 rounded-2xl bg-[#1d2b1f] border border-green-500/20 shadow-xl">

              <h2 className="text-green-400 font-bold text-2xl">
                C++
              </h2>

            </div>



            {/* MAIN VISUAL */}

            <div className="rounded-[30px] bg-gradient-to-br from-[#101827] to-[#0f172a] border border-white/10 p-10">

              <div className="flex flex-col items-center justify-center">

                {/* AVATAR */}

                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-7xl shadow-2xl shadow-green-500/20">

                  👨‍💻

                </div>



                {/* SCREEN */}

                <div className="mt-10 w-full rounded-3xl bg-black/50 border border-green-500/10 p-6">

                  <div className="flex gap-3 mb-4">

                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>

                  </div>


                  <div className="space-y-3">

                    <div className="h-4 rounded bg-green-500/30 w-[80%]"></div>

                    <div className="h-4 rounded bg-green-500/20 w-[65%]"></div>

                    <div className="h-4 rounded bg-green-500/10 w-[90%]"></div>

                    <div className="h-4 rounded bg-green-500/20 w-[50%]"></div>

                    <div className="h-4 rounded bg-green-500/30 w-[75%]"></div>

                  </div>

                </div>



                {/* MINI FLOATING CARDS */}

                <div className="flex gap-5 mt-10">

                  <div className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm">

                    🎥 Video Call

                  </div>

                  <div className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm">

                    💻 Live Coding

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}