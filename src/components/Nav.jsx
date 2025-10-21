import React from "react";

const Nav = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navHeight = document.querySelector(".navbar").offsetHeight;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - navHeight - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand text-primary fw-bold" href="#">Supakorn.m</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            {["about", "skills", "experience", "projects", "education", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <button
                  className="btn btn-link nav-link"
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
