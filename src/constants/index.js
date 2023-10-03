import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    frv,
    scotiabank,
    uoft,
    momentum,
    carrent,
    lc,
    research,
    jobit,
    tripguide,
    threejs,
    ai,
    cube,
    gale,
    model
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "A.I. Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Data Engineer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Momentum Health",
      icon: momentum,
      iconBg: "#383E56",
      date: "May 2022 - August 2022",
      points: [
        "Developed company’s website using Bootstrap, HTML, CSS, and Javascript, while utilizing jQuery for front-end interactivity and Spring (Java) for backend integration.",
        "Collaborated with a developer team in an agile environment, leveraging GitHub for streamlined teamwork and version control.",
      ],
    },
    {
      title: "Data Assosciate",
      company_name: "Front Row Ventures",
      icon: frv,
      iconBg: "#E6DEDD",
      date: "May 2021 - December 2022",
      points: [
        "Support investments in student lead startups in the technology sector throughout Canada.",
        "Engineered dashboards for clients using SQL, PowerBI and AirTable, enabling the transformation of large data into visually appealing and understandable formats and allowing for conclusions to be drawn from key metrics.",
        "Utilized AirTable to develop and deploy automations that optimized internal workflow efficiency.",
        "Managed website operations, overseeing regular updates to enhance both user interface and user experience.",
        "Collaborated with cross-functional teams to craft engaging newsletters and impactful blog posts, effectively cultivating a robust online media presence."
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Human Factors and Applied Statistics Lab",
      icon: uoft,
      iconBg: "#383E56",
      date: "May 2022 - April 2023",
      points: [
        "Reviewed 215 studies focused on training artificial intelligence and implementing algorithms on both ECG and EEG signals to identify driver distraction and drowsiness in the context of semi-autonomous vehicles.",
        "Developed Python scripts to analyze real-time eye tracking data, effectively determining participants’ visual attention to the road in a study based on semi-autonomous vehicles.",
        "Conducted study analyzing EEG and ECG signals from participants while driving to determine their level of drowsiness."
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Scotiabank (Global Banking & Markets)",
      icon: scotiabank,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Developed full-stack web applications utilizing SQL, C#, HTML/CSS, JavaScript, jQuery, and Vue.js to automate processes and enhance data visualization.",
        "Created a hardware tracker to automate the tracking of over $2 million dollars worth of computers.",
        "Constructed an automation assuring outstanding approval is received when booking large ($1MM+) transactions and requesting hierarchy/administrative changes.",
        "Working with internal clients and stakeholders to identify inefficient practices and provide technical solutions to optimize resources."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Eye Tracking Software",
      description:
        "Among the numerous projects I've undertaken, I found developing this code particularly engaging. The code parsed real-time camera data to detect if participants focused within a defined area of interest. If a participant gazed outside this area for two consecutive seconds, the code triggered an alert. This technology was employed in studies on mitigating driver distraction in self-driving vehicles. The image above provides a glimpse into the software being used by the dev team.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "tensorflow",
          color: "pink-text-gradient",
        },
      ],
      image: research,
      source_code_link: "https://github.com/stoty61/eyeTrackingSoftware",
    },
    {
      name: "Leicester City Transfer Window Suggestions",
      description:
        "For my course project in Analytics in Action I chose to build a machine learning model for Leicester City, a soccer team that quickly fell from championship level pedigree. By first building a model to identify Leicester's largest weakness, we were able to train another model to search for undervalued players that could fill the holes on the team. In the end, 2 out of 3 of our suggested transfer players had breakout seasons!",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
      ],
      image: lc,
      source_code_link: "https://colab.research.google.com/drive/1Sm950yodV24QVeb-m6T1PKIMAvdX7g82?usp=sharing",
    },
    {
      name: "Landscape Generation",
      description:
        "As a part of my third year course, Applied Fundamentals of Deep Learning, I had the opportunity to undertake a project of my choice. Along with 3 other team members, we decided to train a variational autoencoder capable of generating landscapes (depicted above). In order to better train the model, we additionally used a convolutional neural network that would try to predict whether or not the images are AI generated. As a result, we managed to create some realistic looking landscapes!",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pytorch",
          color: "green-text-gradient",
        },
        {
          name: "tensorflow",
          color: "pink-text-gradient",
        },
      ],
      image: ai,
      source_code_link: "https://colab.research.google.com/drive/1vrgkcLxbubi8-ADopykTX3rqPNYzEuJB?usp=sharing",
    },
    {
      name: "The Final Cube",
      description:
        "The Final Cube is a game I developed using Unity and C#. This project is a particular favourite of mine as I have been passionate about video games my whole life and always hoped to make one myself. I am particularly proud of the effort I put into the UI/UX. It is available to play on Macbook, download link and preview in the GitHub link.",
      tags: [
        {
          name: "c-sharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "UI/UX",
          color: "pink-text-gradient",
        },
      ],
      image: cube,
      source_code_link: "https://github.com/stoty61/FinalCube",
    },
    {
      name: "Stochastic Financial Modelling",
      description:
        "This project was an amazing oppurtunity to apply my mathematical abilities to economics. By treating direct costs as variable costs following a PERT distribution, I was able to calculate the expected net present worth of a company in 15 years' time.",
      tags: [
        {
          name: "excel",
          color: "blue-text-gradient",
        },
        {
          name: "statistics",
          color: "green-text-gradient",
        },
        {
          name: "financial modelling",
          color: "pink-text-gradient",
        },
      ],
      image: model,
      source_code_link: "https://drive.google.com/drive/folders/1UWZHF84f_y1T0YZ4CO9Ox_f57XCjCApU",
    },
    {
      name: "Gale Shapley Algorithm",
      description:
        "The Gale-Shapley Algorithm is a widely recognized method that optimally matches suitors to receivers. I successfully implemented the algorithm in Java, allowing for the optimal pairing of students with user-designed schools. Furthermore, the versatility of this algorithm lends itself to effortless adaptation for diverse applications.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Algorithms",
          color: "green-text-gradient",
        },
        {
          name: "O.O.P.",
          color: "pink-text-gradient",
        },
      ],
      image: gale,
      source_code_link: "https://drive.google.com/drive/folders/1Qo6accnL9Ube8SpwJMhnOnZluLn4jM1c",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };