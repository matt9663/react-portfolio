const skills = [
  {
    title: "Front-End",
    headerIcon: "laptop-code",
    technologies: [
      {
        name: "HTML5",
        logo: ["fab", "html5"],
      },
      {
        name: "CSS3",
        logo: ["fab", "css3-alt"],
      },
      {
        name: "Javascript (ES6)",
        logo: ["fab", "js-square"],
      },
      {
        name: "React",
        logo: ["fab", "react"],
      },
      {
        name: "Sass",
        logo: ["fab", "sass"],
      },
      {
        name: "jQuery",
        logo: "",
      },

      {
        name: "Fetch API",
        logo: "",
      },
      {
        name: "Responsive Design",
        logo: "",
      },
    ],
  },
  {
    title: "Back-End",
    headerIcon: "server",
    technologies: [
      {
        name: "Node.js",
        logo: ["fab", "node-js"],
      },
      {
        name: "Express",
        logo: "",
      },
      {
        name: "PostgreSQL",
        logo: "",
      },
      {
        name: "SQL",
        logo: "",
      },
      {
        name: "Firebase",
        logo: "",
      },
    ],
  },
  {
    title: "Tooling/Testing",
    headerIcon: "terminal",
    technologies: [
      {
        name: "Git/Github",
        logo: ["fab", "github"],
      },
      {
        name: "Chrome Dev Tools",
        logo: ["fab", "chrome"],
      },
      {
        name: "JIRA/Confluence",
        logo: ["fab", "jira"],
      },
      {
        name: "Jest",
        logo: "",
      },
      {
        name: "Mocha",
        logo: "",
      },
      {
        name: "Chai",
        logo: "",
      },
      {
        name: "TDD",
        logo: "",
      },
      {
        name: "Heroku",
        logo: "",
      },
      {
        name: "Vercel/Zeit",
        logo: "",
      },
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "JamFinder",
    subtitle: "Musician's Social Network",
    description:
      "Networking tool for musicians. Create bands, find new memebers, & collaborate via a shared message board. User authentication handled via JWT. Built with React, NodeJs/Express, and PostgreSQL.",
    img:
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/images/JamfinderScreenshot.png",
    liveUrl: "https://jamfinder-app.now.sh/",
    clientRepo: "https://github.com/matt9663/jamfinder-client-app",
    serverRepo: "https://github.com/matt9663/jamfinder-server-api",
  },
  {
    id: 2,
    title: "Fitscribe",
    subtitle: "Workout Builder/Planner App",
    description:
      "Add exercises to a global database and build personal workouts. Plan your week out and mark workouts as completed as you go. User authentication handled via JWT. Built with React, NodeJs/Express, and PostgreSQL.",
    img:
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/images/fitscribe.png",
    liveUrl: "https://fitscribe-app.now.sh/",
    clientRepo: "https://github.com/matt9663/fitscribe-app",
    serverRepo: "https://github.com/matt9663/fitscribe-server",
  },
  {
    id: 3,
    title: "Learn To Play Guitar App",
    subtitle: "Song-learning materials compiler",
    description:
      "This app aggregates materials from around the web to help users learn songs on the guitar. It pulls lyrics, a reference video, and tablature from 3 external APIs. Built with HTML, CSS, Javascript, & jQuery.",
    img:
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/images/AppSS_Cropped.png",
    liveUrl: "https://matt9663.github.io/learn-to-play/",
    clientRepo: "https://github.com/matt9663/learn-to-play",
  },
  {
    id: 4,
    title: "Beatles Triva",
    subtitle: "Fab Four Quiz App",
    description:
      "Quiz app that tests the depths of the user’s obscure knowledge on the Fab Four. Questions sourced from the depths of my own obscure knowledge.  Built with HTML, CSS, Javascript, & jQuery.",
    img:
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/images/BeatlesSS.PNG",
    liveUrl: "https://matt9663.github.io/quiz-app/index.html",
    clientRepo: "https://github.com/matt9663/quiz-app",
  },
];

module.exports = { skills, projects };
