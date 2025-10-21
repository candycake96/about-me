import React from "react";

const experiences = [
  { title: "Full-Stack Developer", company: "NCL Thailand", duration: "2023 - Present", desc: "Developed internal systems using React, Node.js, and MySQL; collaborated with HR and IT teams to automate workflow processes." },
  { title: "IT Support", company: "XYZ Hospital", duration: "2021 - 2023", desc: "Handled technical troubleshooting and helped integrate hospital management software." }
];

const Experience = () => {
  return (
    <section id="experience" className="py-5 border-bottom">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5">Experience</h2>
        <div className="row g-4">
          {experiences.map((exp, i) => (
            <div key={i} className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 fw-semibold">{exp.title}</h3>
                  <div className="text-primary fw-bold">{exp.company}</div>
                  <div className="text-muted small mb-3">{exp.duration}</div>
                  <p className="mb-0">{exp.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
