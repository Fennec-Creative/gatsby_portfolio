import React, { useEffect } from "react";
import { navigate } from "gatsby";

export const withAuth = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      const isAuthenticated =
        sessionStorage.getItem("isAuthenticated") === "true";
      if (!isAuthenticated) {
        // Store the current path and navigate to auth page
        sessionStorage.setItem("redirectAfterAuth", window.location.pathname);
        navigate("/auth");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};
