import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5 border-bottom">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4">About Me</h2>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px", lineHeight: "1.8" }}>
          I am a doctor and software developer with experience in both healthcare and IT systems, 
          specializing in <span className="fw-bold">React</span>, <span className="fw-bold">Node.js</span>, and <span className="fw-bold">MySQL</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
