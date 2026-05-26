function Analytics() {

  const skills = [
    { name: "React", score: 90 },
    { name: "Python", score: 85 },
    { name: "Java", score: 80 },
    { name: "DSA", score: 75 },
    { name: "SQL", score: 82 },
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        📊 Analytics Dashboard
      </h1>

      {/* Top Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white/5 p-6 rounded-3xl">
          <h2>Total Interviews</h2>
          <p className="text-4xl font-bold mt-3 text-green-400">15</p>
        </div>

        <div className="bg-white/5 p-6 rounded-3xl">
          <h2>Average Score</h2>
          <p className="text-4xl font-bold mt-3 text-green-400">82%</p>
        </div>

        <div className="bg-white/5 p-6 rounded-3xl">
          <h2>Best Score</h2>
          <p className="text-4xl font-bold mt-3 text-green-400">95%</p>
        </div>

        <div className="bg-white/5 p-6 rounded-3xl">
          <h2>Practice Hours</h2>
          <p className="text-4xl font-bold mt-3 text-green-400">42</p>
        </div>

      </div>

      {/* Skills */}

      <div className="bg-white/5 rounded-3xl p-8 mb-10">

        <h2 className="text-3xl font-bold mb-6">
          🧠 Skill Progress
        </h2>

        {skills.map((skill) => (

          <div key={skill.name} className="mb-5">

            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.score}%</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3">

              <div
                className="bg-green-400 h-3 rounded-full"
                style={{ width: `${skill.score}%` }}
              />

            </div>

          </div>

        ))}

      </div>

      {/* Achievements */}

      <div className="bg-white/5 rounded-3xl p-8 mb-10">

        <h2 className="text-3xl font-bold mb-6">
          🏆 Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="bg-black/20 p-5 rounded-2xl">
            🏅 First Interview Completed
          </div>

          <div className="bg-black/20 p-5 rounded-2xl">
            🏅 10 Interviews Completed
          </div>

          <div className="bg-black/20 p-5 rounded-2xl">
            🏅 React Expert
          </div>

          <div className="bg-black/20 p-5 rounded-2xl">
            🏅 DSA Beginner
          </div>

        </div>

      </div>

      {/* DSA Progress */}

      <div className="bg-white/5 rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          📚 DSA Progress
        </h2>

        <div className="space-y-3 text-lg">

          <p>✅ Arrays</p>
          <p>✅ Strings</p>
          <p>✅ Hashing</p>
          <p>🟡 Linked List</p>
          <p>🟡 Trees</p>
          <p>❌ Graphs</p>
          <p>❌ Dynamic Programming</p>

        </div>

      </div>

    </div>

  );

}

export default Analytics;