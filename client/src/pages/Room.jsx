import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import Editor from "@monaco-editor/react";
import axios from "axios";



const socket = io("https://mockmate-1-xig2.onrender.com");
function Room() {

  const { roomId } = useParams();

  const username = localStorage.getItem("username");

  const myVideo = useRef();




  // STATES

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [code, setCode] = useState(
    'console.log("Hello MockMate");'
  );

  const [output, setOutput] = useState("");

  const [language, setLanguage] = useState("javascript");

  const [cameraOn, setCameraOn] = useState(true);

  const [micOn, setMicOn] = useState(true);

  const [stream, setStream] = useState(null);




  // CAMERA ACCESS

  useEffect(() => {

    navigator.mediaDevices

      .getUserMedia({

        video: true,

        audio: true,

      })

      .then((currentStream) => {

        setStream(currentStream);




        if (myVideo.current) {

          myVideo.current.srcObject = currentStream;

        }

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);




  // JOIN ROOM

  useEffect(() => {

    socket.emit("join-room", roomId);

  }, [roomId]);




  // RECEIVE MESSAGE

  useEffect(() => {

    const receiveMessage = (data) => {

      setMessages((prev) => [...prev, data]);

    };




    socket.on("receive-message", receiveMessage);




    return () => {

      socket.off("receive-message", receiveMessage);

    };

  }, []);




  // SEND MESSAGE

  const sendMessage = () => {

    if (!message.trim()) return;




    const data = {

      roomId,

      text: message,

      username,

    };




    setMessages((prev) => [

      ...prev,

      data,

    ]);




    socket.emit("send-message", data);




    setMessage("");

  };




  // RUN CODE USING JDOODLE

  const runCode = async () => {

    try {

      setOutput("Running...");




      const languageMap = {

        javascript: {

          language: "nodejs",

          versionIndex: "4",

        },




        python: {

          language: "python3",

          versionIndex: "5",

        },




        java: {

          language: "java",

          versionIndex: "4",

        },




        cpp: {

          language: "cpp17",

          versionIndex: "1",

        },




        c: {

          language: "c",

          versionIndex: "5",

        },

      };




      const selectedLanguage =

        languageMap[language];




      const response = await axios.post(

        const socket = io("https://mockmate-1-xig2.onrender.com"),

        {

          code: code,

          language:

            selectedLanguage.language,

          versionIndex:

            selectedLanguage.versionIndex,

        }

      );




      setOutput(

        response.data.output ||

        "Code Executed Successfully"

      );

    }

    catch (error) {

      console.log(error);




      setOutput("Error running code");

    }

  };




  // TOGGLE CAMERA

  const toggleCamera = () => {

    if (!stream) return;




    const videoTrack =

      stream.getVideoTracks()[0];




    if (!videoTrack) return;




    videoTrack.enabled =

      !videoTrack.enabled;




    setCameraOn(videoTrack.enabled);

  };




  // TOGGLE MIC

  const toggleMic = () => {

    if (!stream) return;




    const audioTrack =

      stream.getAudioTracks()[0];




    if (!audioTrack) return;




    audioTrack.enabled =

      !audioTrack.enabled;




    setMicOn(audioTrack.enabled);

  };




  return (

    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-black text-white flex overflow-hidden">




      {/* LEFT SIDE */}

      <div className="flex-1 p-6 overflow-y-auto">




        {/* HEADER */}

        <h1 className="text-5xl font-bold mb-2">

          Interview Room

        </h1>




        <p className="text-green-400 text-xl mb-2">

          Room ID: {roomId}

        </p>




        <p className="text-gray-400 mb-6">

          Logged in as: {username}

        </p>




        {/* VIDEO */}

        <div className="mb-6">

          <video
            ref={myVideo}
            autoPlay
            muted
            playsInline
            className="w-[350px] rounded-3xl border border-white/10"
          />

        </div>




        {/* BUTTONS */}

        <div className="flex gap-4 mb-6 flex-wrap">

          <button
            onClick={toggleCamera}
            className="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-2xl"
          >

            {cameraOn

              ? "📷 Camera Off"

              : "📷 Camera On"}

          </button>




          <button
            onClick={toggleMic}
            className="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-2xl"
          >

            {micOn

              ? "🎤 Mic Off"

              : "🎤 Mic On"}

          </button>




          <button
            onClick={runCode}
            className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-2xl text-black font-bold"
          >

            Run Code

          </button>

        </div>




        {/* LANGUAGE */}

        <div className="mb-4 flex items-center gap-4">

          <label className="text-lg font-semibold">

            Language:

          </label>




          <select
            value={language}
            onChange={(e) =>

              setLanguage(e.target.value)

            }
            className="bg-[#111827] border border-gray-700 text-white px-4 py-2 rounded-xl outline-none"
          >

            <option value="javascript">

              JavaScript

            </option>

            <option value="python">

              Python

            </option>

            <option value="java">

              Java

            </option>

            <option value="cpp">

              C++

            </option>

            <option value="c">

              C

            </option>

          </select>

        </div>




        {/* EDITOR */}

        <div className="h-[400px] rounded-3xl overflow-hidden border border-white/10">

          <Editor
            height="100%"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
          />

        </div>




        {/* OUTPUT */}

        <div className="mt-4 bg-black border border-white/10 rounded-2xl p-4">

          <h2 className="text-xl font-bold mb-3 text-green-400">

            Output

          </h2>




          <pre className="whitespace-pre-wrap">

            {output}

          </pre>

        </div>

      </div>




      {/* CHAT PANEL */}

      <div className="w-[380px] border-l border-white/10 bg-white/5 p-5 flex flex-col">

        <h2 className="text-3xl font-bold mb-5">

          Live Chat

        </h2>




        {/* MESSAGES */}

        <div className="flex-1 overflow-y-auto space-y-3 mb-4">

          {messages.map((msg, index) => (

            <div
              key={index}
              className="bg-green-500/10 border border-green-500/20 p-3 rounded-2xl"
            >

              <span className="text-green-400 font-bold">

                {msg.username}:

              </span>{" "}

              {msg.text}

            </div>

          ))}

        </div>




        {/* CHAT INPUT */}

        <div className="flex gap-2">

          <input
            type="text"
            placeholder="Type message..."
            value={message}
            onChange={(e) =>

              setMessage(e.target.value)

            }
            className="flex-1 p-3 rounded-xl bg-[#111827] border border-gray-700 outline-none"
          />




          <button
            onClick={sendMessage}
            className="px-5 bg-green-500 rounded-xl text-black font-semibold"
          >

            Send

          </button>

        </div>

      </div>

    </div>

  );

}

export default Room;