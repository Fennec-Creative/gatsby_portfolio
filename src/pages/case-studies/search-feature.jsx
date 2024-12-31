import React from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import LightTheme from "layouts/Light";
import HeaderSearch from "components/Case-studies-components/Search-Feature/header-search";
import IntroSearch from "components/Case-studies-components/Search-Feature/intro-search";
import ProblemSearch from "components/Case-studies-components/Search-Feature/problem-search";
import ResearchSearch from "components/Case-studies-components/Search-Feature/research-search";
import ResultsSearch from "components/Case-studies-components/Search-Feature/results-search";
import UserzoomSearch from "components/Case-studies-components/Search-Feature/userzoom-search";
import AnalysisSearch from "components/Case-studies-components/Search-Feature/analysis-search";
import KeyFeaturesSearch from "components/Case-studies-components/Search-Feature/key-features-search";
import DesignPrinciplesSearch from "components/Case-studies-components/Search-Feature/design-principles-search";
import InitialSketchesSearch from "components/Case-studies-components/Search-Feature/initial-sketches-search";
import WireframesSearch from "components/Case-studies-components/Search-Feature/wireframes-search";
import IterationsTestingSearch from "components/Case-studies-components/Search-Feature/iterations-testing-search";
import FinalDesignSearch from "components/Case-studies-components/Search-Feature/final-design-search";
import FinalDetailsSearch from "components/Case-studies-components/Search-Feature/final-details-search";
import FinalFlowSearch from "components/Case-studies-components/Search-Feature/final-flow-search";
import ConclusionSearch from "components/Case-studies-components/Search-Feature/conclusion-search";
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
      <HeaderSearch />
      <IntroSearch />
      <ProblemSearch />
      <ResearchSearch />
      <UserzoomSearch />
      <ResultsSearch />
      <AnalysisSearch />
      <KeyFeaturesSearch style="4item"/>
      <DesignPrinciplesSearch />
      <InitialSketchesSearch />
      <WireframesSearch />
      <IterationsTestingSearch />
      <FinalDesignSearch />
      <FinalDetailsSearch />
      <FinalFlowSearch />
      <ConclusionSearch />
      
      <LightFooter />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>A Better Search Experience - Case Study</title>
    </>
  )
}

export default VisualLanguage;
