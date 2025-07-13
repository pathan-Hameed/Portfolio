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
    github: "https://github.com/username/calculator",
    vercel: "https://vercel.com/in/yourprofile"
  },
  "Currency Converter ": {
    image: currency,
    extraDescription: "Fetches real-time exchange rates using a reliable third-party API.",
    techStack: "JavaScript, REST APIs, CSS Grid",
    challenges: "Parsing API responses and syncing input values.",
    github: "https://github.com/username/currency-converter",
    vercel: "https://vercel.com/in/yourprofile"
  },
  "GSoC Info Website": {
    image: gsoc,
    extraDescription: "Educational layout with FAQs, timeline, and contribution guides.",
    techStack: "React, React Router",
    challenges: "Designing a clean and accessible layout.",
    github: "https://github.com/username/gsoc-site",
    vercel: "https://vercel.com/in/yourprofile"
  },
  "Portfolio Website": {
    image: portfolio,
    extraDescription: "Fully responsive personal portfolio to showcase skills and projects.",
    techStack: "React, CSS Modules",
    challenges: "Making layout mobile-first and optimizing performance.",
    github: "https://github.com/username/portfolio",
    vercel: "https://vercel.com/in/yourprofile"
  }
};

export default projectDetails;
