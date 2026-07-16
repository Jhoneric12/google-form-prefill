// -----------------------------------------------------------------------------
// Google Form config
// -----------------------------------------------------------------------------
// Base viewform URL .
export const GOOGLE_FORM_BASE =
  "https://docs.google.com/forms/d/e/1FAIpQLScx1aLyGXK6pd8rZnM0HaxkpUKN5tR4AzndNqovan5aKj183g/viewform";

// The "Position" dropdown's entry ID inside the form.
export const POSITION_ENTRY_ID = "entry.73458788";

/**
 * Builds a prefilled Google Form link for a given position value.
 * The value passed in MUST exactly match one of the dropdown's option
 * labels in the form, otherwise the dropdown will show blank/unselected.
 */
export function buildApplyLink(position) {
  const params = new URLSearchParams({
    usp: "pp_url",
    [POSITION_ENTRY_ID]: position,
  });
  return `${GOOGLE_FORM_BASE}?${params.toString()}`;
}

// -----------------------------------------------------------------------------
// Careers — full-time roles
// -----------------------------------------------------------------------------
export const careers = [
  {
    id: "frontend-developer",
    title: "Front-End Developer",
    employmentType: "Full-time",
    minExperience: "2+ years",
    location: "On-site / Hybrid",
    stack: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs"],
    summary:
      "Build and maintain user-facing features for our web products, turning designs into fast, accessible interfaces.",
    requirements: [
      "Minimum of 2 years of professional experience in front-end development",
      "Strong hands-on experience with React.js (hooks, component architecture, state management)",
      "Solid understanding of HTML5, CSS3, and modern JavaScript (ES6+)",
      "Experience consuming and integrating REST APIs",
      "Familiarity with responsive design and cross-browser compatibility",
      "Comfortable using Git for version control",
      "Exposure to build tools such as Vite or Webpack is a plus",
      "Bachelor's degree in Computer Science, Information Technology, or a related field preferred",
    ],
    // Must match a valid Google Form dropdown option exactly.
    formPosition: "Frontend Developer",
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    employmentType: "Full-time",
    minExperience: "2+ years",
    location: "On-site / Hybrid",
    stack: ["Python", "Django", "REST APIs", "PostgreSQL", "Git"],
    summary:
      "Design and maintain the server-side logic, databases, and APIs that power our applications.",
    requirements: [
      "Minimum of 2 years of professional experience in back-end development",
      "Proficiency in Python and the Django framework",
      "Experience designing and consuming RESTful APIs",
      "Solid understanding of relational databases (e.g. PostgreSQL, MySQL)",
      "Familiarity with ORM usage, database migrations, and query optimization",
      "Comfortable using Git for version control",
      "Understanding of authentication, authorization, and security best practices",
      "Bachelor's degree in Computer Science, Information Technology, or a related field preferred",
    ],
    formPosition: "Backend Developer",
  },
];

// -----------------------------------------------------------------------------
// Internship (OJT) roles
// -----------------------------------------------------------------------------
const INTERN_FORM_POSITION = "Intern (OJT)";

export const internships = [
  {
    id: "intern-frontend",
    title: "Front-End Developer",
    description:
      "As a Front-End Developer intern, you'll work alongside our development team to build and improve the interfaces our users interact with every day. You'll get hands-on practice with React, component-based design, and translating mockups into working screens, while learning how a real production codebase is structured, reviewed, and shipped. This role is a good fit for students who enjoy the visual, interactive side of software and want to sharpen their HTML, CSS, and JavaScript fundamentals in a real-world setting.",
    formPosition: INTERN_FORM_POSITION,
  },
  {
    id: "intern-backend",
    title: "Back-End Developer",
    description:
      "As a Back-End Developer intern, you'll assist in building and maintaining the logic, APIs, and databases that power our applications behind the scenes. You'll be introduced to Python and Django in a practical setting, learning how data flows from the database to the API and finally to the interface. Mentors will guide you through writing clean, testable code and understanding how backend systems stay reliable as they scale, making this a strong starting point for anyone curious about server-side development.",
    formPosition: INTERN_FORM_POSITION,
  },
  {
    id: "intern-mobile",
    title: "Mobile Developer",
    description:
      "As a Mobile Developer intern, you'll support the team in building and testing features for our mobile applications. You'll gain exposure to mobile-specific concerns such as navigation, performance, and platform guidelines, while working closely with designers and senior developers to bring app screens to life. This internship suits students who are interested in how software behaves differently on phones and tablets compared to the web, and who want practical experience shipping something people carry in their pocket.",
    formPosition: INTERN_FORM_POSITION,
  },
  {
    id: "intern-uiux",
    title: "UI/UX",
    description:
      "As a UI/UX intern, you'll take part in the research, wireframing, and prototyping that shapes how our products look and feel. You'll help translate user needs into flows and layouts, receive feedback from senior designers, and see how design decisions get handed off to development. This role is well suited to students who enjoy thinking about usability, visual hierarchy, and the small details that make an interface easy and pleasant to use.",
    formPosition: INTERN_FORM_POSITION,
  },
  {
    id: "intern-qa",
    title: "Quality Assurance",
    description:
      "As a Quality Assurance intern, you'll help make sure our applications work the way they're supposed to before they reach users. You'll write and execute test cases, log and track bugs, and work with developers to verify fixes across our web and mobile products. This internship is a great fit for detail-oriented students who want to understand software from the testing side and learn how quality is built into the development process rather than checked at the end.",
    formPosition: INTERN_FORM_POSITION,
  },
];