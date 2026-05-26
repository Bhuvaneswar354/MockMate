function Settings() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        ⚙ Settings
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Profile Settings */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            👤 Profile Settings
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-2xl bg-[#111827] mb-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-2xl bg-[#111827] mb-4"
          />

          <input
            type="text"
            placeholder="College Name"
            className="w-full p-4 rounded-2xl bg-[#111827] mb-4"
          />

          <input
            type="text"
            placeholder="Branch"
            className="w-full p-4 rounded-2xl bg-[#111827]"
          />

        </div>

        {/* Interview Preferences */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            🎤 Interview Preferences
          </h2>

          <div className="space-y-6">

            <label className="flex justify-between items-center">
              <span>Camera</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex justify-between items-center">
              <span>Microphone</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex justify-between items-center">
              <span>Dark Mode</span>
              <input type="checkbox" defaultChecked />
            </label>

            <div>

              <p className="mb-3">
                Interview Duration
              </p>

              <select className="w-full p-4 rounded-2xl bg-[#111827]">

                <option>15 Minutes</option>
                <option>30 Minutes</option>
                <option>45 Minutes</option>
                <option>60 Minutes</option>

              </select>

            </div>

          </div>

        </div>

      </div>

      {/* Coding Preferences */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-8">

        <h2 className="text-3xl font-bold mb-6">
          💻 Coding Preferences
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <p className="mb-3">
              Default Programming Language
            </p>

            <select className="w-full p-4 rounded-2xl bg-[#111827]">

              <option>Python</option>
              <option>Java</option>
              <option>C</option>
              <option>C++</option>
              <option>JavaScript</option>

            </select>

          </div>

          <div>

            <p className="mb-3">
              Editor Theme
            </p>

            <select className="w-full p-4 rounded-2xl bg-[#111827]">

              <option>Dark</option>
              <option>Light</option>

            </select>

          </div>

        </div>

      </div>

      {/* Save Button */}

      <div className="mt-8">

        <button
          className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all"
        >
          💾 Save Settings
        </button>

      </div>

    </div>

  );

}

export default Settings;