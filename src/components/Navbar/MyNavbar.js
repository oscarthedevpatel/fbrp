import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import React from "react";

const Navigation = () => {
  function utilityClick() {
    document.getElementById("utility").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="container">
      <button className="button">NOT PORN</button>
      <button className="button">NOT PORN</button>
      <button className="button">NOT PORN</button>
      <button className="button">NOT PORN</button>
      <button className="button">NOT PORN</button>
    </div>
  );
};

export default Navigation;
