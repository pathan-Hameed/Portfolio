import "./project.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import Calculator from "../../assets/Calculator.png";
import currency from "../../assets/currency.jpg";
import gsoc from "../../assets/gsoc.jpg";
import portfolio from "../../assets/portfolio.jpg";

export default function Project() {
  return <div className="projects">
     <ProjectCard
        title="Mobile Calculator App "
        description="Responsive calculator that handles real-time expression previews and displays the latest two calculations."
        image={Calculator}
        link="https://example.com"
        tags={["javascript", "DOM", "CSS grid"]}
      />

      <ProjectCard
        title="Currency Converter "
        description="A responsive currency conversion app that fetches live data using external REST APIs."
        image={currency}
        link="https://portfolio.com"
        tags={["JavaScript", "CSS grid", "REST APIs"]}
      />

      <ProjectCard
        title="H-AI Website Builder"
        description="A simple no-code website builder with drag-and-drop elements and editable text areas."
        image={currency}
        link="https://portfolio.com"
        tags={["React", "CSS", "Node.js"]}
      />

      <ProjectCard
        title="GSoC Info Website"
        description="An informational website explaining GSoC with clean navigation and modern UI."
        image={gsoc}
        link="https://portfolio.com"
        tags={["React", "React Router"]}
      />

      <ProjectCard
        title="Portfolio Website"
        description="Developed a mobile-first design personal portfolio which includes all my works in React."
        image={portfolio}
        link="https://portfolio.com"
        tags={["React", "CSS"]}
      />
  </div>;
}
