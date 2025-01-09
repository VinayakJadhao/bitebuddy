import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const [isLoading, setIsLoading] = useState(false); 
  let navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      const response = await fetch(`${backendUrl}/api/CreateUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        setCredentials({ name: "", email: "", password: "", geolocation: "" });
        setTimeout(() => {
          // alert("Account Created successfully!");
          localStorage.setItem("authToken", json.authToken);
          navigate("/");
        }, 2000); 
      } else {
        alert("Enter valid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false); 
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        <h4 className="text-center text-black mt-3">Sign-Up</h4>

        {isLoading ? ( 
          <div className="text-center">
            <img
              src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
              alt="Loading..."
              style={{ width: "150px", margin: "auto" }}
            />
            <p>Processing your request...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label fw-bold text-black "
              >
                Enter your name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={credentials.name}
                onChange={onChange}
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label fw-bold text-black"
              >
                Enter your email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={credentials.email}
                onChange={onChange}
                id="exampleInputEmail1"
                placeholder="Email"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fw-bold text-black"
              >
                Enter your password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={credentials.password}
                onChange={onChange}
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="geolocation"
                className="form-label fw-bold text-black"
              >
                Enter your address
              </label>
              <input
                type="text"
                className="form-control"
                name="geolocation"
                value={credentials.geolocation}
                onChange={onChange}
                id="geolocation"
                placeholder="Address"
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 fw-bold"
              style={{
                padding: "12px",
                fontSize: "18px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Register
            </button>

            <div className="d-flex justify-content-between">
              <span className="text-muted mt-3">
                <Link to="/LogIn" style={{ textDecoration: "none" }}>
                  LogIn Now?
                </Link>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
