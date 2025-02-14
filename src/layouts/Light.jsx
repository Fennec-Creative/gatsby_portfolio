import React from "react";
import { Script } from "gatsby";

import ScrollToTop from "components/scrollToTop";
import LoadingScreen from "components/Loading-Screen";

import "styles/main.css";
import "styles/preloader.css";  

const LightTheme = ({ children, mobileappstyle, useSkin, customstyle }) => {
  React.useEffect(() => {
    window.theme = "light";
    let darkStyles = document.querySelector('link[href="/css/dark.css"]');
    let lightStyles = document.querySelector('link[href="/css/light.css"]');
    if (darkStyles) {
      if (!lightStyles) {
        let lightStylesheet = document.createElement('link');
        lightStylesheet.rel = "stylesheet";
        lightStylesheet.href = "/css/light.css";
        document.head.appendChild(lightStylesheet)
      }
      darkStyles.remove();
    }

    if (mobileappstyle) {
      let mobileAppCssLink = document.createElement('link');
      mobileAppCssLink.rel = "stylesheet";
      mobileAppCssLink.href = "/css/mobile-app-light.css";
      document.head.appendChild(mobileAppCssLink)
    }
    
    if (useSkin) {
      let skinCssLink = document.createElement('link');
      skinCssLink.rel = "stylesheet";
      skinCssLink.href = "/css/arch-skin-light.css";
      document.head.appendChild(skinCssLink)
    }

    if (customstyle) {
      let customCssLink = document.createElement('link');
      customCssLink.rel = "stylesheet";
      customCssLink.href = "/css/fc-custom.css";
      document.head.appendChild(customCssLink)
    }
  }, [mobileappstyle, useSkin, customstyle]);
  
  return (
    <>
      <LoadingScreen />
      { children }
      <ScrollToTop />

      <Script src="/js/wowInit.js"></Script>
    </>
  );
};

export default LightTheme;
