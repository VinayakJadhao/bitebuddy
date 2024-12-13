import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); 
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await fetch("http://localhost:5000/api/LogInUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        setLoading(false); 
        navigate("/");
      } else {
        setLoading(false); 
        alert("Enter valid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false); 
      alert("An error occurred. Please try again.");
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
        <h4 className="text-center text-black mt-1">LogIn</h4>

        {loading ? ( 
          <div className="text-center">
            <img
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" 
              alt="Loading..."
              style={{ width: "100px", height: "100px" }}
            />
            <p>Logging in...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={credentials.email}
                onChange={onChange}
                id="email"
                placeholder=" E-mail"
                style={{
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  padding: "12px",
                  fontSize: "16px",
                }}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                value={credentials.password}
                onChange={onChange}
                id="password"
                placeholder="Password"
                style={{
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  padding: "12px",
                  fontSize: "16px",
                }}
                required
              />
            </div>

          
            <div className="d-flex justify-content-between">
              <span className="text-muted">
                <Link to="/Signup" style={{ textDecoration: "none" }}>
                  Register Now?
                </Link>
              </span>
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 mt-4"
              style={{
                padding: "12px",
                fontSize: "18px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
