import React from "react";
import "./home.css";

export default function Home() {
  const cardData = [
    {
      title: "Card 2",
      desc: "This is card twoThis is card twoThis is card twoThis is card twoThis is card twoThis is card two",
      buttonText: "Read More",
      tag: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "Card 2",
      desc: "This is card twoThis is card twoThis is card twoThis is card twoThis is card twoThis is card two",
      buttonText: "Read More",
      tag: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "Card 2",
      desc: "This is card twoThis is card twoThis is card twoThis is card twoThis is card twoThis is card two",
      buttonText: "Read More",
      tag: ["HTML", "CSS", "Javascript", "react", "next.sj"],
    },
    {
      title: "Card 2",
      desc: "This is card twoThis is card twoThis is card twoThis is card twoThis is card twoThis is card two",
      buttonText: "Read More",
      tag: ["HTML", "CSS", "Javascript", "react", "next.sj", "react", "next.sj"],
    },
    {
      title: "Card 2",
      desc: "This is card twoThis is card twoThis is card twoThis is card twoThis is card twoThis is card two",
      buttonText: "Read More",
      tag: ["HTML", "CSS", "Javascript", "react", "next.sj"],
    },
  ];

  const skills = [
    { category: "Languages", items: ["Java", "JavaScript"] },
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "React"] },
    { category: "Backend", items: ["Node.js", "MySQL", "MongoDB", "Express.js"] },
    { category: "Frameworks & Libraries", items: ["Bootstrap", "React.js"] },
    { category: "SEO & Performance Optimization", items: ["Page Speed Optimization", "On-Page SEO"] },
    { category: "Version Control & Tools", items: ["Git", "GitHub", "npm"] },
    { category: "UI/UX & Design", items: ["Figma", "Responsive Web Design"] },
    { category: "Collaboration & Agile Methodologies", items: [] },
  ];

  return (
    <div className="homepage">
      
      <h1 className="heading">ABDUL HAMEED KHAN</h1>

      <p className="greetings greet">
      Motivated and detail-oriented web developer with hands-on experience in front-end and back-end technologies, including HTML, CSS, JavaScript, React. Strong understanding of website optimization, SEO best practices, and responsive design. Skilled in collaborating with teams to enhance user experience and implement new features. Eager to contribute to dynamic web development projects, troubleshoot complex issues, and continuously learn new technologies.
      </p>

      <h1 className="sub-head">ABOUT</h1>

      <p className="greetings">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        quaerat nemo aliquid fugiat, nisi eius eligendi quod consequatur at cum.
      </p>
      <p className="greetings">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        quaerat nemo aliquid fugiat, nisi eius eligendi quod consequatur at cum.
      </p>
      <p className="greetings">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        quaerat nemo aliquid fugiat, nisi eius eligendi quod consequatur at cum.
      </p>

      <div className="projects">
        <h1 className="sub-head">PROJECTS</h1>
        <div className="cards-container">
          {cardData.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-ctnt">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>{item.buttonText}</button>
              </div>
                <div className="tag">
                  {item.tag.map((val) => (
                    <span>{val}</span>
                  ))}
                </div>
              </div>
          ))}
        </div>
      </div>
      
      <div className="skills">
        <h1 className="sub-head">SKILLS</h1>
        <div className="skill-container">
        {skills.map((skill, index) => (
          <div key={index} className="lines">
            <h3>{skill.category}</h3>
            <p>{skill.items + ""}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
