import React from "react";

const educationList = [
  {
    degree: "Doctor of Medicine",
    institution: "Chiang Mai University",
    year: "2015 - 2021",
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "NCL Training Center",
    year: "2022",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-5 border-bottom bg-light">
      <div className="container text-center">
        <h2 className="mb-5 fw-bold">Education</h2>
        <div className="row justify-content-center g-4">
          {educationList.map((edu, i) => (
            <div key={i} className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{edu.degree}</h5>
                  <p className="card-text text-secondary mb-1">{edu.institution}</p>
                  <p className="text-muted small">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
