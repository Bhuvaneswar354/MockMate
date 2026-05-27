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
    alert(
      error.response?.data?.message || "Signup Failed"
    );
  }
};