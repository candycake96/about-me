import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Thanyathron S. | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
