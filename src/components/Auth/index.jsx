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
    <DarkTheme>
      <section className="section-padding min-area fc-lbg-dark-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="s-head text-center mb-80">
                <h2 className="mb-20">Authentication Required</h2>
              </div>
              <form onSubmit={handleSubmit} className="text-center">
                <div className="mb-20">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    style={{
                      width: "100%",
                      padding: "15px",
                      border: "1px solid #2a2a2a",
                      borderRadius: "4px",
                      marginBottom: "15px",
                      fontSize: "16px",
                      background: "rgba(255,255,255,0.02)",
                      color: "#fff",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
                    color: "#fff",
                    border: "none",
                    padding: "15px 40px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "16px",
                    transition: "all 0.3s ease",
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? "Authenticating..." : "Submit"}
                </button>
                {error && (
                  <p
                    style={{
                      color: "#c471ed",
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
