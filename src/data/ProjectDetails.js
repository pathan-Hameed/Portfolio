// src/data/projectDetails.js

import Calculator from "../assets/Calculator.png";
import currency from "../assets/currency.jpg";
import gsoc from "../assets/gsoc.jpg";
import portfolio from "../assets/portfolio.jpg";

const projectDetails = {
  "Mobile Calculator App ": {
    image: Calculator,
    extraDescription: "This calculator supports chained operations and updates results live as the user types.",
    techStack: "JavaScript, DOM, CSS Grid",
    challenges: "Handling operator precedence and real-time updates was tricky.",
    github: "https://github.com/pathan-Hameed/JS-Calculator",
    netlify: "https://domcalculatr.netlify.app/"
  },
  "Currency Converter ": {
    image: currency,
    extraDescription: "Fetches real-time exchange rates using a reliable third-party API.",
    techStack: "JavaScript, REST APIs, CSS Grid",
    challenges: "Parsing API responses and syncing input values.",
    github: "https://github.com/pathan-Hameed/Currency-Converter",
    netlify: "https://convertercurrenc.netlify.app/"
  },
  "GSoC Info Website": {
    image: gsoc,
    extraDescription: "Educational layout with FAQs, timeline, and contribution guides.",
    techStack: "React, React Router",
    challenges: "Designing a clean and accessible layout.",
    github: "https://github.com/pathan-Hameed/GSoC2025",
    netlify: "https://code-companions-gsoc2025.netlify.app/"
  },
  "Portfolio Website": {
    image: portfolio,
    extraDescription: "Fully responsive personal portfolio to showcase skills and projects.",
    techStack: "React, CSS Modules",
    challenges: "Making layout mobile-first and optimizing performance.",
    github: "https://github.com/pathan-Hameed/Portfolio",
    netlify: "https://netlify.com/in/yourprofile"
  }
};

export default projectDetails;
