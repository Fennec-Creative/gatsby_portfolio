import React from "react";
import { Script } from "gatsby";

import ScrollToTop from "components/scrollToTop";
import LoadingScreen from "components/Loading-Screen";

import "styles/main.css";
import "styles/preloader.css";  

const DarkTheme = ({ children, useSkin, mobileappstyle, customstyle }) => {
  React.useEffect(() => {
    window.theme = "dark";
    let lightStyles = document.querySelector('link[href="/css/light.css"]');
    let darkStyles = document.querySelector('link[href="/css/dark.css"]');
    if (lightStyles) {
      if (!darkStyles) {
        let darkStylesheet = document.createElement('link');
        darkStylesheet.rel = "stylesheet";
        darkStylesheet.href = "/css/dark.css";
        document.head.appendChild(darkStylesheet)
      }
      lightStyles.remove();
    }
    if (useSkin) {
      let skinCssLink = document.createElement('link');
      skinCssLink.rel = "stylesheet";
      skinCssLink.href = "/css/arch-skin-dark.css";
      document.head.appendChild(skinCssLink)
    }

    if (mobileappstyle) {
      let mobileAppCssLink = document.createElement('link');
      mobileAppCssLink.rel = "stylesheet";
      mobileAppCssLink.href = "/css/mobile-app-dark.css";
      document.head.appendChild(mobileAppCssLink)
    }
   if (customstyle) {
      let customCssLink = document.createElement('link');
      customCssLink.rel = "stylesheet";
      customCssLink.href = "/css/fc-custom.css";
      document.head.appendChild(customCssLink)
    }
  }, [useSkin, mobileappstyle, customstyle]);

  return (
    <>
      <LoadingScreen />
      { children }
      <ScrollToTop />

      <Script src="/js/wowInit.js"></Script>
    </>
  );
};

export default DarkTheme;
