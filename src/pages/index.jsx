import React from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import DarkTheme from "layouts/Dark";
import IntroFC from "components/Home-page/intro-fc";
import PortfolioFc from "components/Home-page/portfolio-fc";
import AboutFc from "components/Home-page/about-fc";
import Footer2 from "components/Footer2/footer2";

const MobileAppDark = () => {
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
      <IntroFC />
      <PortfolioFc grid={2} hideFilter filterPosition="center" />
      <AboutFc />
      <Footer2 />
    </DarkTheme>
    </div>
  );
};

export const Head = () => {
  return (
    <>
      <title>Fennec Creative</title>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
    </>
  )
}

export default MobileAppDark;
