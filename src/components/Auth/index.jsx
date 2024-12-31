import React, { useState } from "react";
import DarkTheme from "../../layouts/Dark";

const Auth = ({ onAuthenticated }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isDevelopment = process.env.NODE_ENV === "development";
  const enableLogging = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/.netlify/functions/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const responseText = await response.text();

      if (enableLogging && isDevelopment) {
        console.log("Response status:", response.status);
        console.log("Response text:", responseText);
      }

      if (response.status === 200) {
        try {
          sessionStorage.setItem("isAuthenticated", "true");
          onAuthenticated(); // Call the callback instead of navigating
        } catch (parseError) {
          if (isDevelopment) {
            console.error("Parse error:", parseError);
          }
          setError("Invalid server response format");
        }
      } else {
        try {
          const result = JSON.parse(responseText);
          setError(result?.message || "Authentication failed");
        } catch {
          setError("Authentication failed");
        }
      }
    } catch (err) {
      if (enableLogging && isDevelopment) {
        console.error("Auth error details:", err);
      }
      setError("Connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetAuth = () => {
    sessionStorage.removeItem("isAuthenticated");
    window.location.reload(); // Just reload the page instead of navigating
  };

  // Always render the auth form if we haven't redirected yet
  return (
    <DarkTheme customstyle>

      <section className="section-padding min-areaf contact">
        <div className="container">
          
          <div className="row justify-content-center">
            <div className="fc-icon-container">
            <span className="icon">
                  <img src="/img/auth-lock-icon.svg" className="skills-icon" alt=" " />
              </span>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-8">
              <div className="s-head text-center mb-80">
                <h2 className="mb-20">This Content is Protected</h2>
                <p>To view, please enter the password. </p>
              </div>
              <form onSubmit={handleSubmit} className="text-center form">
                <div className="mb-20 contact-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="nav-link fc-btn .ripple margin-more-b mt-20"
                  disabled={isLoading}
                >
                  {isLoading ? "Authenticating..." : "Submit"}
                </button>
                {error && (
                  <p
                    style={{
                      color: "#E596FF",
                      marginTop: "15px",
                      fontSize: "14px",
                      opacity: 0.8,
                    }}
                  >
                    {error}
                  </p>
                )}
              </form>
              {isDevelopment && (
                <>
                  <div
                    style={{
                      position: "fixed",
                      bottom: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    Development Mode Active
                  </div>
                  <button
                    onClick={resetAuth}
                    style={{
                      position: "fixed",
                      bottom: "10px",
                      right: "10px",
                      background: "#12c2e9",
                      color: "#fff",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Reset Auth
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </DarkTheme>
  );
};

export default Auth;
