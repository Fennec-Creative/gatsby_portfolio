import React from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import LightTheme from "layouts/Light";
import HeaderPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/header-power.jsx";
import IntroPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/intro-power.jsx";
import ProblemPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/problem-power.jsx";
import RolePower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/role-power.jsx";
import ResearchPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/research-power.jsx";
import InitialSketchesPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/initial-sketches-power.jsx";
import InitialIterationPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/initial-iteration-power.jsx";
import GraphicDesignPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/graphic-design-power.jsx";
import FinalGraphicPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/final-graphic-power.jsx";
import EarlyIterationsPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/early-iterations-power.jsx";
import TestingPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/testing-power.jsx";
import FinalIterationPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/final-iteration-power.jsx";
import AllCombinationsPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/all-combinations-power.jsx";
import KeyFeaturesPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/key-features-power.jsx";
import DocumentationHandoffPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/documentation-handoff-power.jsx";
import NextStepsPower from "components/Case-studies-components/EverBright/Real-Time-Power-Flow/next-steps-power.jsx";
import LightFooter from "components/Case-studies-components/EverBright/light-footer.jsx";
import { withAuth } from "../../../utils/withAuth";


const RealTimePowerFlow = () => {
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
      <HeaderPower />
      <IntroPower />
      <ProblemPower />
      <RolePower />
      <ResearchPower style="4item" />
      <InitialSketchesPower />
      <InitialIterationPower />
      <GraphicDesignPower />
      <FinalGraphicPower />
      <EarlyIterationsPower />
      <TestingPower />
      <FinalIterationPower />
      <KeyFeaturesPower />
      <AllCombinationsPower />
      <DocumentationHandoffPower />
      
      <NextStepsPower />
      <LightFooter />
    </LightTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Real-Time Power Flow Case Study</title>
    </>
  )
}

export default withAuth(RealTimePowerFlow);
