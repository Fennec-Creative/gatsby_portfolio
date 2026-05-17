import React from "react";
import { navigate } from "gatsby";
import Auth from "../components/Auth";

const AuthPage = () => {
  const handleAuthenticated = () => {
    const redirectPath = sessionStorage.getItem("redirectAfterAuth") || "/";
    // replace: true so /auth is removed from history — back from the
    // unlocked page returns to the original referrer, not the auth form.
    navigate(redirectPath, { replace: true });
  };

  return <Auth onAuthenticated={handleAuthenticated} />;
};

export default AuthPage;
