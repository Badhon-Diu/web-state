import "../../../tailwind.css";
import { Navicon } from "../../Icons/Icons";
import Hero from "./Hero";
import Navbar from "./Navbar";
const Navhero = () => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "blog-grids.html" },
  ];

  const authLinks = {
    signIn: { label: "Sign In", href: "signin.html" },
    signUp: { label: "Sign Up", href: "signup.html" },
  };
  return (
    <>
      <Navbar
        logo={<Navicon></Navicon>}
        menuItems={menuItems}
        authLinks={authLinks}
      />
      <Hero></Hero>
    </>
  );
};

export default Navhero;
