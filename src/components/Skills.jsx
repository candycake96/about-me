import React from "react";

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: ["HTML", "CSS", "React", "Bootstrap"] },
    { title: "Backend", skills: ["Node.js", "Express", "PHP", "MySQL"] },
    { title: "Tools", skills: ["Git", "VSCode", "Figma", "Postman"] },
  ];

  return (
    <section id="skills" className="py-5 border-bottom">
      <div className="container">
        <h2 className="text-center display-5 fw-bold mb-5">Skills</h2>
        <div className="row g-4">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="col-md-4">
              <div className="card h-100 border-start border-4 border-primary shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5 fw-semibold mb-3">{cat.title}</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="badge bg-primary">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
