import React from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import LightTheme from "layouts/Light";
import HeaderQuest from "components/Case-studies-components/CleanQuest/header-quest";
import IntroQuest from "components/Case-studies-components/CleanQuest/intro-quest";
import ProblemQuest from "components/Case-studies-components/CleanQuest/problem-quest";
import MeetTheUsers from "components/Case-studies-components/CleanQuest/meet-the-users-quest";
import ProtoJourney from "components/Case-studies-components/CleanQuest/proto-journey-quest";
import ResearchQuest from "components/Case-studies-components/CleanQuest/research-take-aways-quest";
import KeyUxPrinciples from "components/Case-studies-components/CleanQuest/key-ux-principles-quest";
import OctalysisQuest from "components/Case-studies-components/CleanQuest/octalysis-quest";
import InitialSketches from "components/Case-studies-components/CleanQuest/initial-sketches-quest";
import WireframesQuest from "components/Case-studies-components/CleanQuest/wireframes-quest";
import UserTesting from "components/Case-studies-components/CleanQuest/user-testing-quest";
import FinalDesign from "components/Case-studies-components/CleanQuest/final-design-quest";
import KeyFeatures from "components/Case-studies-components/CleanQuest/key-features-quest";
import ConclusionQuest from "components/Case-studies-components/CleanQuest/conclusion-quest";

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
      <HeaderQuest />
      <IntroQuest />
      <ProblemQuest />
      <MeetTheUsers />
      <ProtoJourney />
      <ResearchQuest />
      <KeyUxPrinciples/>
      <OctalysisQuest />
      <InitialSketches />
      <WireframesQuest />
      <UserTesting />
      <FinalDesign />
      <KeyFeatures />
      <ConclusionQuest />

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
