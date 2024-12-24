import React from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import LightTheme from "layouts/Light";
import HeaderLanguage from "components/Case-studies-components/EverBright/Visual-Language/header-language";
import IntroLanguage from "components/Case-studies-components/EverBright/Visual-Language/intro-language";
import GoalsLanguage from "components/Case-studies-components/EverBright/Visual-Language/goals-language";
import ProcessOverviewLanguage from "components/Case-studies-components/EverBright/Visual-Language/process-overview-language";
import ProductDefinitionLanguage from "components/Case-studies-components/EverBright/Visual-Language/product-definition-language";
import IdeationWorkshopLanguage from "components/Case-studies-components/EverBright/Visual-Language/ideation-workshop-language";
import KeyFeaturesLanguage from "components/Case-studies-components/EverBright/Visual-Language/key-features-language";
import WireframesExplorationLanguage from "components/Case-studies-components/EverBright/Visual-Language/wireframes-exploration-language";
import DesignTrendsResearch from "components/Case-studies-components/EverBright/Research/design-trends-research";
import EarlyIterationsLanguage from "components/Case-studies-components/EverBright/Visual-Language/early-iterations-language";
import FinalDirectionLanguage from "components/Case-studies-components/EverBright/Visual-Language/final-direction-language";
import NextStepsLanguage from "components/Case-studies-components/EverBright/Visual-Language/next-steps-language.jsx";
import LightFooter from "components/Case-studies-components/EverBright/light-footer.jsx";


const VisualLanguage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

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
      <HeaderLanguage />
      <IntroLanguage />
      <GoalsLanguage />
      <ProcessOverviewLanguage />
      <ProductDefinitionLanguage />
      <IdeationWorkshopLanguage />
      <DesignTrendsResearch />
      <KeyFeaturesLanguage />  
      <WireframesExplorationLanguage />
      <EarlyIterationsLanguage />
      <FinalDirectionLanguage />
      <NextStepsLanguage />
      <LightFooter />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Contact Dark</title>
    </>
  )
}

export default VisualLanguage;
