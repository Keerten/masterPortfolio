/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Keerten's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Keerten Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Keerten",
  logo_name: "Keerten",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1g-1el2rAaP1pNNSLSww1kVCzF5c7PiLZ/view?usp=sharing",
  portfolio_repository: "https://github.com/keerten",
  githubProfile: "https://github.com/keerten",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/keerten",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/keerten-a63221195/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:keertenk@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Keerten/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/Keerten/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Mobile Application Developement",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable, production-ready mobile applications for various use cases.",
        "⚡ Experience working with mobile app development, including iOS and Android projects.",
        "⚡ Creating user-friendly interfaces and ensuring optimal performance for mobile applications.",
      ],
      softwareSkills: [
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "skill-icons:androidstudio-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "logos-swift",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "X Code",
          fontAwesomeClassname: "logos:xcode",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "FireStore",
          fontAwesomeClassname: "vscode-icons:file-type-firestore",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux.",
        "⚡ Developing web applications using React, including integration with backend services.",
        "⚡ Creating web application backends using Node.js, Express, and Flask.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
    },

    {
      siteName: "Coursera",
      iconifyClassname: "logos:coursera",
      style: {
        color: "#1F8ACB",
      },
    },
    {
      siteName: "Udemy",
      iconifyClassname: "logos:udemy-icon",
      style: {
        color: "#1F8ACB",
      },
    },
    {
      siteName: "IBM",
      iconifyClassname: "logos:ibm",
      style: {
        color: "#1F8ACB",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "George Brown College",
      subtitle: "Mobile Application Development & Strategy",
      logo_path: "gbclogo.png",
      alt_name: "GBC College",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ I have completed coursework in fundamental software engineering topics such as Data Structures, Algorithms, Database Management Systems, Operating Systems, and Computer Architecture.",
        "⚡ In addition to core subjects, I have undertaken specialized training in Mobile App Development, User Interface Design, Agile Methodologies, and Cloud-based Application Deployment.",
        "⚡ I have consistently maintained a high academic standard, reflected in my 4.0 GPA, and was recognized with the Outstanding Academic Achievement Award for exceptional performance throughout my studies.",
      ],
      website_link: "https://www.georgebrown.ca/",
    },
    {
      title: "Goswami Ganesh Dutta Sanatan Dharam College Chandigarh",
      subtitle: "Bachelors of Computer Applications",
      logo_path: "ggdsdlogo.png",
      alt_name: "GGDSD College",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ Broad Curriculum: Covers key areas like Programming (C/C++), Web Development, Database Management, Computer Networks, and Software Project Management.",
        "⚡ Hands-On Labs: Includes practical labs each semester for skills in programming, databases, web development, and multimedia.",
        "⚡ Advanced Topics and Projects: Features specialized subjects like Java Programming, E-Commerce, and a major project in the final semester.",
      ],
      website_link: "https://www.ggdsd.ac.in",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I am working with Subway Sandwiches as Senior Sandwich artist taking good care of food standards and serving customers with closing and managing the store efficiently.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Sandwich Artist",
          company: "Subway Sandwiches",
          company_url: "https://www.subway.com/",
          logo_path: "subway_logo.png",
          duration: "December 2023 - Present",
          location: "Toronto, ON, CA",
          description:
            "As a Senior Sandwich Artist at Subway, I bring leadership to the team, ensuring our sandwiches meet the highest quality and service standards. Leveraging my advanced knowledge of recipes and procedures, I contribute to a positive customer experience while guiding and supporting my fellow team members.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Mobile Applications and Web Applications and ensure best user experience.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "keerten.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Android, iOS, React Native, Web Apps and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "McCormack Street, Toronto, ON, Canada",
    locality: "McCormack Rd",
    country: "CA",
    region: "Toronto",
    postalCode: "M3N 3P5",
    streetAddress: "Wesron Rd",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/vqSHjsNtDUddCo2G9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
