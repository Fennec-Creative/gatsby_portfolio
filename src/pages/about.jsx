import React from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import DarkTheme from "layouts/Dark";
import IntroAbout from "components/About/intro-about";
import SkillsAbout from "components/About/skills-about";
import ExperienceAbout from "components/About/experience-about";
import Footer2 from "components/Footer2/footer2";

const About = () => {
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
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
  }, [navbarRef]);

  return (
    <div className="darkhome-body">
    <DarkTheme mobileappstyle customstyle>
      <NavbarArch navbarRef={navbarRef} />
      <IntroAbout />
      <SkillsAbout style="4item" />
      <ExperienceAbout />
      <Footer2 />
    </DarkTheme>
    </div>
  );
};

export const Head = () => {
  return (
    <>
      <title>FC - About Chelsea</title>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
    </>
  )
}

export default About;
