import React, { useRef, useEffect } from "react";
import "./header.css";
import { Container } from "reactstrap";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        if (headerRef.current) {
          headerRef.current.classList.add("header__shrink");
        }
      } else {
        if (headerRef.current) {
          headerRef.current.classList.remove("header__shrink");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="logo">
          <h2 className=" d-flex gap-2 align-items-center mt-4">ALTURA</h2>
        </div>
      </Container>
    </header>
  );
};

export default Header;
