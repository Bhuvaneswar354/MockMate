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
    console.log(error);
    alert(
      error.response?.data?.message || "Login Failed"
    );
  }
};