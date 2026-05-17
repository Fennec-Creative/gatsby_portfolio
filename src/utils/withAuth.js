import React, { useEffect } from "react";
import { navigate } from "gatsby";

export const withAuth = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      const isAuthenticated =
        sessionStorage.getItem("isAuthenticated") === "true";
      if (!isAuthenticated) {
        // Store the current path and navigate to auth page.
        // replace: true so back-button skips the protected page (otherwise
        // we'd loop: protected → /auth → back → protected → /auth ...).
        sessionStorage.setItem("redirectAfterAuth", window.location.pathname);
        navigate("/auth", { replace: true });
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};
