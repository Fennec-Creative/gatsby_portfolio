import React from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import DarkTheme from "layouts/Dark";
import HeaderMain from "components/Case-studies-components/EverBright/header-main";
import IntroMain from "components/Case-studies-components/EverBright/intro-main";
import ProblemMain from "components/Case-studies-components/EverBright/problem-main";
import RoleMain from "components/Case-studies-components/EverBright/role-main";
import ResearchMain from "components/Case-studies-components/EverBright/research-main";
import Results1 from "components/Case-studies-components/EverBright/research-results-main";
import StrategyMain from "components/Case-studies-components/EverBright/strategy-main";
import Feature1Main from "components/Case-studies-components/EverBright/feature1-main";
import Feature2Main from "components/Case-studies-components/EverBright/feature2-main";
import Feature3Main from "components/Case-studies-components/EverBright/feature3-main";
import Feature4Main from "components/Case-studies-components/EverBright/feature4-main";
import ResultsMain from "components/Case-studies-components/EverBright/results-main";
import NextMain from "components/Case-studies-components/EverBright/next-main";


const Main = () => {
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
    <DarkTheme mobileappstyle customstyle>
      <NavbarArch navbarRef={navbarRef} />
      <HeaderMain />
      <IntroMain />
      <ProblemMain />
      <RoleMain />
      <ResearchMain />
      <Results1 style="4item" />
      <StrategyMain />
      <Feature1Main />  
      <Feature2Main />
      <Feature3Main />
      <Feature4Main />
      <ResultsMain />
      <NextMain />
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>MyEverBright - Case Study</title>
    </>
  )
}

export default Main;
