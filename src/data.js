const skills = [
  {
    title: "Front-End",
    headerIcon: "laptop-code",
    technologies: [
      {
        name: "HTML5",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/HTML5_Badge_64.png",
      },
      {
        name: "CSS3",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/css.png",
      },
      {
        name: "Javascript (ES6)",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/javascript.png",
      },
      {
        name: "React",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/react.png",
      },
      {
        name: "Sass",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/sass.png",
      },
      {
        name: "jQuery",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/jquery.png",
      },

      {
        name: "Fetch API",
      },
      {
        name: "Responsive Design",
      },
    ],
  },
  {
    title: "Back-End",
    headerIcon: "server",
    technologies: [
      {
        name: "Node.js",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/node.png",
      },
      {
        name: "PostgreSQL",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/icons8-postgresql-50.png",
      },
      {
        name: "SQL",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/icons8-sql-50.png",
      },
      {
        name: "Firebase",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/icons8-firebase-50.png",
      },
      {
        name: "Express",
        imageUrl: "",
      },
    ],
  },
  {
    title: "Tooling/Testing",
    headerIcon: "terminal",
    technologies: [
      {
        name: "Git/Github",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/GitHub-Mark-64px.png",
      },
      {
        name: "Chrome Dev Tools",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/chrome.png",
      },
      {
        name: "JIRA/Confluence",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/jira.png",
      },
      {
        name: "Jest",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/jest.png",
      },
      {
        name: "Mocha",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/mocha.png",
      },
      {
        name: "Chai",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/chai.png",
      },
      {
        name: "Heroku",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/heroku-logo-stroke-purple.png",
      },
      {
        name: "Vercel/Zeit",
        imageUrl:
          "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/zeit.png",
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
    techIcons: [
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/react.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/css.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/node.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/icons8-postgresql-50.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/heroku-logo-stroke-purple.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/zeit.png",
    ],
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
    techIcons: [
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/react.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/css.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/node.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/icons8-postgresql-50.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/heroku-logo-stroke-purple.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/zeit.png",
    ],
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
    techIcons: [
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/javascript.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/css.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/HTML5_Badge_64.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/jquery.png",
    ],
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
    techIcons: [
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/javascript.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/css.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/HTML5_Badge_64.png",
      "https://raw.githubusercontent.com/matt9663/react-portfolio/master/src/assets/logo-icons/jquery.png",
    ],
  },
];

module.exports = { skills, projects };
