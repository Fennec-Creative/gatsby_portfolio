import React from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import LightTheme from "layouts/Light";
import HeaderAxil from "components/Case-studies-components/Axil/header-axil";
import IntroAxil from "components/Case-studies-components/Axil/intro-axil";
import ProblemAxil from "components/Case-studies-components/Axil/problem-axil";
import ExperienceAxil from "components/Case-studies-components/Axil/experience-axil";
import WhoBuiltAxil from "components/Case-studies-components/Axil/who-built-axil";
import ResearchAxil from "components/Case-studies-components/Axil/research-axil";
import DesignPrinciplesAxil from "components/Case-studies-components/Axil/design-principles-axil";
import IntroducingAxil from "components/Case-studies-components/Axil/introducing-axil";
import KeyFeaturesAxil from "components/Case-studies-components/Axil/key-features-axil";
import FeatureBreakdownAxil from "components/Case-studies-components/Axil/feature-breakdown-axil";
import ConclusionAxil from "components/Case-studies-components/Axil/conclusion-axil";

import LightFooter from "components/Case-studies-components/EverBright/light-footer.jsx";


const VisualLanguage = () => {
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });

    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <LightTheme mobileappstyle customstyle>
      <NavbarArch navbarRef={navbarRef} />
      <HeaderAxil />
      <IntroAxil />
      <ProblemAxil />
      <ExperienceAxil />
      <WhoBuiltAxil />
      <ResearchAxil />
      <DesignPrinciplesAxil />
      <IntroducingAxil />
      <KeyFeaturesAxil style="4item"/>
      <FeatureBreakdownAxil />
      <ConclusionAxil />

      <LightFooter />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Axil Design System - Case Study</title>
    </>
  )
}

export default VisualLanguage;
