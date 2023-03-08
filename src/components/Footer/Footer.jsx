import React from "react";
import { Container } from "reactstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="logo text-center">
          <h2 className=" d-flex align-items-center ">ALUTRA</h2>
        </div>

        <div className=" mt-4 text-center">
          <p className="copyright">Developed by Sherifdeen Ishola.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
