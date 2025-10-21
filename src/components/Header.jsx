import React from "react";

const Header = () => {
  return (
    <header className="bg-dark text-white py-5">
      <div className=" text-center">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
          style={{
            width: "144px",
            height: "144px",
            fontSize: "3rem",
            background: "linear-gradient(45deg, #f56565, #ed64a6, #805ad5)",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          👨‍💻
        </div>

        <h1 className="display-4 fw-bold mb-2">Thanyathron S.</h1>
        <div className="h4 fw-light text-secondary mb-3">Full-Stack Developer</div>
        <p className="lead text-secondary mb-4">
          Creative developer with a passion for{" "}
          <span className="text-white fw-bold">user-friendly web applications</span> and{" "}
          <span className="text-white fw-bold">efficient backend systems</span>.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <a
            href="#projects"
            className="btn btn-primary fw-bold"
            style={{
              background: "linear-gradient(to right, #f56565, #06b6d4)",
              borderRadius: "50px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-outline-secondary fw-bold"
            style={{ borderRadius: "50px" }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
