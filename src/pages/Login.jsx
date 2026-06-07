import { useState } from "react";
import "../styles/login.css";

export default function Login({ onLogin }) {
  const [userId, setUserId] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userId === "admin" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "authenticated",
        "true"
      );

      onLogin();
    } else {
      alert(
        "Invalid User ID or Password"
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-card">
          <div className="logo-area">
            <h2>
              KUEHNE + NAGEL
            </h2>

            <p>
              Virtual Experience
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) =>
                setUserId(
                  e.target.value
                )
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <button
              type="submit"
            >
              Enter Virtual Tour
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}