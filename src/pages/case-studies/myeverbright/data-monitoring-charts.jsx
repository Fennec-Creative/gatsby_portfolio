import React from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import LightTheme from "layouts/Light";
import HeaderData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/header-data";
import IntroData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/intro-data";
import ProblemData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/problem-data";
import RoleData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/role-data";
import ResearchData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/research-data";
import InitialSketchesData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/initial-sketches-data";
import InitialIterationData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/initial-iteration-data";
import UsabilityTestingData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/usability-testing-data";
import FinalIterationData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/final-iteration-data";
import KeyFeaturesData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/key-features-data";
import DocumentationHandoffData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/documentation-handoff-data";
import NextStepsData from "components/Case-studies-components/EverBright/Data-Monitoring-Charts/next-steps-data";
import LightFooter from "components/Case-studies-components/EverBright/light-footer.jsx";


const DataMonitoringCharts = () => {
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
      <HeaderData />
      <IntroData />
      <ProblemData />
      <RoleData />
      <ResearchData style="4item" />
      <InitialSketchesData />
      <InitialIterationData />
      <UsabilityTestingData />
      <FinalIterationData />
      <KeyFeaturesData />
      <DocumentationHandoffData />
      <NextStepsData />
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

export default DataMonitoringCharts;
