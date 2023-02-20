import React, { useState } from "react";
import cl from "./Navbar.module.scss";
import logo from "../../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const NavbarMenu = () => (
  <ul className={cl.list}>
    <li className={cl.item}>
      <a href="#Home" className={cl.link}>
        Home
      </a>
    </li>
    <li className={cl.item}>
      <a href="#wgpt" className={cl.link}>
        What is GPT?
      </a>
    </li>
    <li className={cl.item}>
      <a href="#possibilities" className={cl.link}>
        Open AI
      </a>
    </li>
    <li className={cl.item}>
      <a href="#features" className={cl.link}>
        Case Studies
      </a>
    </li>
    <li className={cl.item}>
      <a href="#blog" className={cl.link}>
        Library
      </a>
    </li>
  </ul>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={[cl.root, "section__padding"].join(" ")}>
      <div className="container">
        <div className={cl.content}>
          <div className={cl.links}>
            <div className={cl.logo}>
              <img src={logo} alt="" />
            </div>
            <NavbarMenu />
          </div>

          <div className={cl.sign}>
            <p className={cl.signIn}>Sign in</p>
            <a href="#!" className={cl.signUp}>
              Sign up
            </a>
          </div>

          {/* !MOBILE CONTENT */}
          <div className={cl.mobileMenu}>
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}

            {toggleMenu && (
              <div
                className={[cl.mobileMenu__content, "scale-up-center"].join(
                  " "
                )}
              >
                <NavbarMenu />

                <div className={cl.mobileMenu__sign}>
                  <p className={cl.signIn}>Sign in</p>
                  <a href="#!" className={cl.signUp}>
                    Sign up
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
