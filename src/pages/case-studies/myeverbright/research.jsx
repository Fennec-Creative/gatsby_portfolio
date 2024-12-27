import React from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import LightTheme from "layouts/Light";
import HeaderResearch from "components/Case-studies-components/EverBright/Research/header-research";
import IntroResearch from "components/Case-studies-components/EverBright/Research/intro-research";
import ResearchGoalsResearch from "components/Case-studies-components/EverBright/Research/research-goals-research";
import SolutionResearch from "components/Case-studies-components/EverBright/Research/solution-research";
import CompetitiveResearch from "components/Case-studies-components/EverBright/Research/competitive-research";
import HeuristicsResearch from "components/Case-studies-components/EverBright/Research/heuristics-research";
import HeatmapResearch from "components/Case-studies-components/EverBright/Research/heatmap-research";
import CardSortResearch from "components/Case-studies-components/EverBright/Research/card-sort-research";
import DesignTrendsResearch from "components/Case-studies-components/EverBright/Research/design-trends-research";
import ContextInquiresResearch from "components/Case-studies-components/EverBright/Research/context-inquires-research";
import KeyFindingsResearch from "components/Case-studies-components/EverBright/Research/key-findings-research.jsx";
import NextStepsResearch from "components/Case-studies-components/EverBright/Research/next-steps-research.jsx";
import LightFooter from "components/Case-studies-components/EverBright/light-footer.jsx";


const Research = () => {
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
      <HeaderResearch />
      <IntroResearch />
      <ResearchGoalsResearch />
      <SolutionResearch />
      <CompetitiveResearch />
      <HeuristicsResearch />
      <HeatmapResearch />  
      <CardSortResearch />
      <DesignTrendsResearch />
      <ContextInquiresResearch />
      <KeyFindingsResearch style="4item" />
      <NextStepsResearch />
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

export default Research;
