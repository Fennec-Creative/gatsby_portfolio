import React from "react";
import { navigate } from "gatsby";
import Auth from "../components/Auth";

const AuthPage = () => {
  const handleAuthenticated = () => {
    const redirectPath = sessionStorage.getItem("redirectAfterAuth") || "/";
    navigate(redirectPath);
  };

  return <Auth onAuthenticated={handleAuthenticated} />;
};

export default AuthPage;
