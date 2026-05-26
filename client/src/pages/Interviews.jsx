function Interviews() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-black text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        Interviews
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-4">
            Upcoming Interview
          </h2>

          <p>Frontend Developer</p>
          <p className="text-gray-400">
            Tomorrow • 10:00 AM
          </p>

          <button className="mt-5 bg-green-500 text-black px-5 py-3 rounded-2xl font-semibold">
            Join
          </button>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-4">
            Previous Interview
          </h2>

          <p>DSA Round</p>

          <p className="text-green-400">
            Score: 85%
          </p>

        </div>

      </div>

    </div>
  );
}

export default Interviews;