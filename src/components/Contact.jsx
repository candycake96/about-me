import React from "react";

const contacts = [
  { type: "Email", value: "thanyathron.s@nclthailand.com", link: "mailto:thanyathron.s@nclthailand.com" },
  { type: "Phone", value: "+66 123 4567", link: "tel:+661234567" },
  { type: "LinkedIn", value: "linkedin.com/in/thanyathron", link: "https://linkedin.com/in/thanyathron" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-5">Contact</h2>
        <div className="d-flex flex-column align-items-center gap-3">
          {contacts.map((c, i) => (
            <a 
              key={i} 
              href={c.link} 
              className="btn btn-outline-primary btn-lg w-auto"
              target={c.type === "LinkedIn" ? "_blank" : "_self"} 
              rel={c.type === "LinkedIn" ? "noreferrer" : undefined}
            >
              {c.type}: {c.value}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
