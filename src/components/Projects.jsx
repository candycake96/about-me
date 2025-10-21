import React from "react";

const projects = [
  {
    title: "Employee Management System",
    description: "ระบบจัดการข้อมูลพนักงาน ใช้ React + Node.js + MySQL",
    link: "#",
  },
  {
    title: "Inventory Web App",
    description: "ระบบจัดการคลังสินค้าและสต๊อกสินค้าแบบออนไลน์",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "เว็บไซต์ Portfolio ส่วนตัว แสดงผลงานและประวัติการทำงาน",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 border-bottom">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-5">Projects</h2>
        <div className="row g-4">
          {projects.map((project, i) => (
            <div key={i} className="col-md-4">
              <div className="card h-100 shadow-sm hover-shadow">
                <div className="card-body d-flex flex-column">
                  <h3 className="h5 fw-semibold">{project.title}</h3>
                  <p className="text-muted flex-grow-1">{project.description}</p>
                  {project.link && (
                    <a href={project.link} className="mt-auto btn btn-outline-primary">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
