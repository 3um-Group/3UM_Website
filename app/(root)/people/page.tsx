"use client";
import React, { useState } from "react";
// import "../../../public/assets/styles/style.css";
import "./page.css";
import backgroundImage from "../../../public/assets/img3.jpg";

interface Bio {
  dialogId: string;
  business: string;
  name: string;
  title: string;
  location: string;
  description: string;
}
const bios = [
  {
    name: "Luis Jorge",
    title: "Software Engineer II",
    business: "Technology",
    location: "New York",
    // href: "https://www.blackstone.com/people/qasim-abbas/",
    dialogId: "bio-lightbox-5479",

    description: `
<br><p style="text-align: justify;">Luis is a Software Engineer II at 3UM, a first-generation Dominican American deeply passionate about technology and its transformative potential. With over 8 years of hands-on experience in Python development, specializing in Django and Flask APIs, he is adept in multiple programming languages including C++, C#, C, Python, Java, and JavaScript.</p><br>
<p style="text-align: justify;">Luis's technical expertise is bolstered by his AWS Developer Associate certification and extensive knowledge in networking and security (CCNA). He has led backend development projects and contributed significantly to system architecture and project management as a Software Engineering Fellow with Hack.Diversity. Additionally, he is enhancing his full-stack development skills at Flatiron School Coding Bootcamp. Luis aims to revolutionize enterprise infrastructure, making it more efficient and sustainable while constantly staying at the forefront of emerging technologies through continuous learning and collaboration.</p><br>
`,
  },

  {
    name: "Ganesh Sarakadam",
    title: "Frontend Engineer",
    business: "Technology",
    location: "Columbus",
    // href: "https://www.blackstone.com/people/qasim-abbas/",
    dialogId: "bio-lightbox-5479",

    description: `
<br><p style="text-align: justify;">Ganesh Sarakadam is a Frontend Engineer at 3UM with over four years of experience in building scalable, high-quality solutions. With a strong foundation in JavaScript and Python, Ganesh is adept in frameworks such as React, Redux, and Node.js. His technical expertise extends to various databases including MySQL, PostgreSQL, Elasticsearch, and MongoDB, and he is proficient in tools like Docker, Kubernetes, and CI/CD.</p><br>
<p style="text-align: justify;">Ganesh's professional experience includes significant roles such as a Research Assistant at Ohio University, where he pioneered a real-time weather data archive and developed a Python scheduler for efficient data processing. At Berkadia, he played a key role in developing RESTful Web APIs and microservices architecture, optimizing resource allocation on AWS ECS, and enhancing the efficiency of ticket processing operations.</p><br>
<p style="text-align: justify;">In his projects, Ganesh has demonstrated his ability to design responsive web applications and engineer robust workflow systems, achieving high levels of performance and efficiency. He holds a Master of Science in Computer Science from Ohio University.</p><br>
<p style="text-align: justify;">At 3UM, Ganesh applies his frontend engineering skills to drive the development of innovative solutions in AI, blockchain, and quantum computing, contributing to the company's mission of advancing technology and creating an intelligent ecosystem.</p><br>
`,
  },

  {
    name: "Silpa Vijayan Geetha",
    title: "Frontend Engineer",
    business: "Technology",
    location: "Carrollton",
    // href: "https://www.blackstone.com/people/qasim-abbas/",
    dialogId: "bio-lightbox-5479",
    // imgSrc:
    //   "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
    // imgAlt: "Abbas",
    description: `
<br><p style="text-align: justify;">Silpa Vijayan Geetha is a Frontend Developer at 3UM, bringing a strong track record of leading web development projects and enhancing software functionalities across various high-stakes industries. Her career highlights include developing an advanced interactive application at Diaconia and streamlining operations and enhancing security protocols for the aviation sector at IBS Software.</p><br>

<p style="text-align: justify;">Silpa holds a Master of Science in Computer Science with a focus on Artificial Intelligence and Database (Cloud Computing) from the University of Texas at Arlington. She is skilled in implementing cutting-edge technologies and developing scalable web solutions. Beyond her frontend expertise, Silpa is also proficient in backend technologies, allowing her to manage comprehensive software solutions effectively.</p><br>

<p style="text-align: justify;">At 3UM, Silpa is dedicated to contributing to the company's vision of transforming the technological landscape. Her strategic approach to software development and commitment to excellence align with 3UM's objectives of driving innovation and leading transformative changes in the tech industry.</p><br>
`,
  },

  {
    name: "Sumanth Sadu",
    title: "Generative AI Engineer",
    business: "Research & Development",
    location: "Los Angeles",
    // href: "https://www.blackstone.com/people/qasim-abbas/",
    dialogId: "bio-lightbox-5479",
    // imgSrc:
    //   "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
    // imgAlt: "Abbas",
    description: `
<br><p style="text-align: justify;">Venkata Sai Sumanth Sadu is a Generative AI Engineer at 3UM with a strong background in data science, machine learning, and AI development. He holds a Master of Science in Computer Science from the University of Southern California and a Bachelor's in Computer Science and Engineering from the Indian Institute of Information Technology.</p><br>

<p style="text-align: justify;">Sumanth has extensive experience across various roles and industries. At USC, he developed dashboards and APIs for risk management. At Reliance Jio, he worked on image quality assessment using advanced AI models. At Swiggy, he implemented comprehensive data pipelines and machine learning models to improve data accuracy and operational efficiency. His tenure at DRDO involved deploying object detection and tracking models for defense applications, and he also developed an audio emotion recognition system.</p><br>

<p style="text-align: justify;">He has also served as a Machine Learning Cloud Engineer at FEBA Technologies, where he designed machine learning courses and developed video analytics systems for fraud detection. Sumanth's technical expertise includes Python, Java, SQL, TensorFlow, PyTorch, and cloud platforms like AWS and GCP.</p><br>

<p style="text-align: justify;">At 3UM, Sumanth leverages his skills in generative AI and machine learning to drive innovation and integrate cutting-edge AI solutions, making significant contributions to the company's mission.</p><br>
`,
  },

  {
    name: "Kargi Chauhan",
    title: "Generative AI Engineer",
    business: "Research & Development",
    location: "Tucson",
    // href: "https://www.blackstone.com/people/qasim-abbas/",
    dialogId: "bio-lightbox-5479",
    // imgSrc:
    //   "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
    // imgAlt: "Abbas",
    description: `
<br><p style="text-align: justify;">Kargi Chauhan is a Generative AI Engineer at 3UM, bringing a rich background in data science, machine learning, and AI from her extensive experience in research and development. She is currently completing her BS in Information Science (Data Science) and Game Design at the University of Arizona. Kargi has a strong foundation in implementing advanced AI solutions, with a focus on scalability and reliability.</p><br>

<p style="text-align: justify;">At SpaceTrex, Kargi designed attitude estimation and lighting systems for CubeSat Satellites, integrating advanced machine learning algorithms and managing large datasets. Her role at Mining Engineering saw her spearhead a project to develop a virtual replica of the St. Xavier Mine, utilizing immersive learning technologies to enhance educational tools for students.</p><br>

<p style="text-align: justify;">Kargi's experience extends to Aerospace Engineering, where she improved prediction accuracy in aerospace research through Bayesian models. She has also played a pivotal role in developing production infrastructures at Tech Core and contributed to the Summer of Code program by creating tools for seamless rendering in 3D environments.</p><br>

<p style="text-align: justify;">Her technical proficiency spans languages such as Python, C/C++, and R, and she has expertise in big data machine learning tools like Spark and Hadoop. Kargi's dedication to pushing the boundaries of AI technology makes her an invaluable asset to the 3UM team.</p><br>
`,
  },

  {
    name: "Vahini Walia",
    title: "Generative AI Intern",
    business: "Research & Development",
    location: "Edison",
    // href: "https://www.blackstone.com/people/qasim-abbas/",
    dialogId: "bio-lightbox-5479",
    // imgSrc:
    //   "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
    // imgAlt: "Abbas",
    description: `
<br><p style="text-align: justify;">Vahini Walia is a Generative AI Intern at 3UM, contributing her strong background in statistics, machine learning, and software development to the company’s AI projects. Currently pursuing her Bachelor’s degree in Statistics and Machine Learning at Carnegie Mellon University, Vahini has demonstrated exceptional skills in programming and data analysis through various academic and extracurricular activities.</p><br>

<p style="text-align: justify;">Her experience includes working on projects related to financial modeling, environmental awareness, and cybersecurity. Vahini has developed applications using Python, Java, C++, and other programming languages, showcasing her ability to tackle complex problems and deliver innovative solutions. Her involvement in initiatives like Smart Women Securities and the Green Cause highlights her commitment to applying her technical skills for positive social impact.</p><br>

<p style="text-align: justify;">At 3UM, Vahini is excited to continue learning and contributing to the development of cutting-edge AI technologies, driven by her passion for technology and its transformative potential.</p><br>
`,
  },
  {
    name: "Xiangyuan (Sherry) Chi",
    title: "Data Analyst",
    business: "Technology",
    location: "Los Angeles",
    // href: "https://www.blackstone.com/people/qasim-abbas/",
    dialogId: "bio-lightbox-5479",

    description: `
      <br><p style="text-align: justify;">Sherry Chi is a Data Analyst at 3UM with a Master’s degree in Data Science from the University of Southern California and a Bachelor’s degree in Financial Mathematics & Statistics from the University of California, Santa Barbara. She has developed expertise in building Python-based ETL pipelines, applying machine learning techniques for predictive analytics, and transforming datasets into actionable business insights.</p><br>
<p style="text-align: justify;">In her role as a Data Scientist at VISIONARYAI, Sherry reconstructed over 110k question-answer pairs to train a Transformer model that surpassed GPT-2 benchmarks. She also developed a CRM system for fraud detection, saving users $16,000 in losses. Her data storytelling skills were instrumental in promoting Chatbot products to diverse audiences, effectively communicating complex models to professionals and engaging non-technical audiences with relatable analogies and interactive activities.</p><br>
<p style="text-align: justify;">During her internship at AXA Investment Managers, Sherry honed her financial modeling and data analysis skills. She automated a Python-based ETL pipeline and migrated data from a local server to MongoDB, saving the team 6 hours of manual work and improving data retrieval time by 15%. She also collaborated with the Fraud Detection team to assess Random Forest and Boosting models, restricting over 400 abnormal transactions and enhancing annual revenue by 1%.</p><br>
<p style="text-align: justify;">Sherry’s educational background in technology and finance provides her with comprehensive insights. Her innovative approach to problem-solving and balancing cost and efficiency, combined with her dedication to continuous learning, make her a valuable asset to the data-driven team at 3UM.</p><br>
`,
  },
  {
    name: "Niklas Hoener",
    title: "Data Analyst",
    business: "Technology",
    location: "Los Angeles",
    // href: "https://www.blackstone.com/people/qasim-abbas/",
    dialogId: "bio-lightbox-5479",
    // imgSrc:
    //   "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
    // imgAlt: "Abbas",
    description: `
       <br><p style="text-align: justify;">Born and raised in Bielefeld, Germany, Niklas has enriched his academic journey by studying in the United States, becoming proficient in both German and English. This bilingual and bicultural background enables him to communicate effectively and professionally in diverse environments, a highly valuable skill in the global business arena.</p><br>
<p style="text-align: justify;">Niklas is an ambitious graduate student-athlete at St. Thomas University, currently pursuing an MBA in International Business and Finance. He previously earned a Bachelor's degree in Business Administration with a concentration in Management and a minor in Economics from Presbyterian College. Alongside his academic achievements, Niklas has gained professional experience in technological solutions consulting and project management.</p><br>
<p style="text-align: justify;">Niklas aims to harness his technological, linguistic, quantitative analytical, and economic expertise to build a successful career in business development and innovative economic strategy. His enthusiasm for understanding disparities in economic growth across different regions drives his interest in contributing to the future economy.</p><br>
<p style="text-align: justify;">Niklas’s diverse skill set and international experience make him a versatile and valuable asset in the field of international business.</p><br>
`,
  },

  //     {
  //       name: "Patrick (Alex) Wroe",
  //       title: "Junior Analyst",
  //       business: "Tactical",
  //       location: "Dallas",
  //       // href: "https://www.blackstone.com/people/qasim-abbas/",
  //       dialogId: "bio-lightbox-5479",
  //       // imgSrc:
  //       //   "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
  //       // imgAlt: "Abbas",
  //       description: `
  //        <br><p style="text-align: justify;">Alex Wroe is a dedicated Analyst with a passion for data analysis and strategic decision-making. Graduating with a Bachelor of Science in Sports Marketing and a minor in Data Analytics from the University of South Florida, Alex has honed a unique skill set that combines analytical prowess with industry knowledge. Alex also holds an Associate of Arts in Business Administration from Harford Community College, where he was a member of the Men's Lacrosse Team and achieved the distinction of being an Academic All-American. Alex's skill set extends beyond his academic and professional achievements. With a keen ability to network, solve problems, think critically, collaborate effectively, and adapt to diverse environments, he is a versatile professional poised to make significant contributions in the fields of finance, data analysis, and beyond. Driven by a passion for leveraging data insights to drive business success, Alex is committed to continuous learning and growth, seeking opportunities to apply his expertise in innovative ways and make a positive impact in the dynamic intersection of sports, analytics, and finance.</p><br>
  // `,
  //     },

  {
    name: "Parmi Pandya",
    title: "Marketing Associate",
    business: "Marketing",
    location: "New York",
    // href: "https://www.blackstone.com/people/qasim-abbas/",
    dialogId: "bio-lightbox-5479",
    // imgSrc:
    //   "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
    // imgAlt: "Abbas",
    description: `
    <br><p style="text-align: justify;">Parmi Pandya recently joined 3UM as a Junior Marketing Associate, bringing a wealth of experience in site merchandising, marketing operations, and project management. Parmi's career is marked by significant achievements, including roles at Amazon Business and Afterpay x Square. In these roles, she successfully revamped web page layouts, led end-to-end campaigns, and optimized digital content strategies.</p><br>
    <p style="text-align: justify;">With a Master of Science in Integrated Marketing from New York University and a background in Business Management and Project Management, Parmi possesses a robust skill set in driving innovative marketing strategies and enhancing customer engagement.</p><br>
    <p style="text-align: justify;">At 3UM, Parmi is enthusiastic about contributing to 3UM's mission to revolutionize access to cutting-edge technologies. Her dedication to optimizing digital content and fostering strategic marketing initiatives aligns perfectly with 3UM's commitment to innovation and transformation in the tech industry.</p><br>
`,
  }, {
    name: "Chandana Srinivasa Yatisha",
    title: "Software Analysis in Machine Learning",
    business: "Technology",
    location: "New York",
    dialogId: "bio-lightbox-5479",
    description: `<br><p style="text-align: justify;">Chandana Srinivasa Yatisha with a Master’s degree in Computer Engineering from New York University, Chandana leverages her diverse background in data science, machine learning, and software development as a Software Analyst in Machine Learning at 3um. Her experiences include designing workflows for a psychology lab, consulting as a software engineer at Accenture, and crafting machine learning algorithms for a space startup.
Chandana is a staunch advocate for women and minorities in tech, and she is deeply passionate about the ethical use of AI and data. She's an active participant in organizations and events like The Grace Hopper Conference and the WomenTech Network, striving to foster inclusive and equitable tech communities. She has a proven track record of developing innovative solutions using Python, Java, SQL, and other technologies.
At 3um, Chandana is dedicated to harnessing her skills in AI and data science to drive forward-thinking solutions and make a positive impact. She is committed to contributing to projects that not only advance technological capabilities but also uphold ethical standards.
</p><br>`
  }

  //     {
  //       name: "Igor Nazarenko",
  //       title: "Product Designer",
  //       business: "Tactical",
  //       location: "Dallas",
  //       // href: "https://www.blackstone.com/people/qasim-abbas/",
  //       dialogId: "bio-lightbox-5479",
  //       // imgSrc:
  //       //   "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
  //       // imgAlt: "Abbas",
  //       description: `
  //             <br><p style="text-align: justify;">Igor Nazarenko is a highly experienced and versatile product designer with a wide range of skills in illustration, web design, graphic design, UX and UI design, and design leadership. As a Senior Product Designer with several leadership roles, Igor has worked across various industries including biotech, healthcare, cyber security, and supply chain, showcasing his ability to adapt to different work environments and apply his skills effectively. He is passionate about creating intuitive and effective design solutions, and has a track record of delivering high-quality work that meets the needs of stakeholders and end users.</p><br>

  // `,
  //     },

  //     {
  //       name: "Andronikki (Nikki) Gerohrsitodoulos",
  //       title: "Junior Researcher and Team Leader",
  //       business: "Tactical",
  //       location: "Dallas",
  //       // href: "https://www.blackstone.com/people/qasim-abbas/",
  //       dialogId: "bio-lightbox-5479",
  //       // imgSrc:
  //       //   "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
  //       // imgAlt: "Abbas",
  //       description: `
  //             <br><p style="text-align: justify;">Andronikki (Nikki) Gerohristodoulos is a cognitive neuroscientist specializing in extended reality (XR) and human factors engineering. Nikki's extensive experience includes research at NASA where she contributed to space mission projects aimed to enhance crew autonomy on long duration space flights using XR and AI methods, as well as the CUNY Graduate Center, where she investigated neurocognitive solutions to improve user experiences in virtual reality environments. Her innovative research and unique technical proficiency provide an essential foundation for neural network and machine learning research and development. </p><br>

  // `,
  //     },

  {
    name: "Brian Brueggert",
    title: "Head of Research & Development",
    business: "Research & Development",
    location: "Crawfordsville",
    // href: "https://www.blackstone.com/people/qasim-abbas/",
    dialogId: "bio-lightbox-5479",
    // imgSrc:
    //   "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
    // imgAlt: "Abbas",
    description: `
    <br><p style="text-align: justify;">Brian Brueggert is a physicist, mathematician and software developer/engineer with over 20 years of experience across government research, academia and the private sector. His experience includes both theoretical and experimental
quantum physics, quantum computing (gate-based and adiabatic), quantum
cryptography, algebraic modeling, mathematical optimization, architecting and developing pioneering solutions for complex, dynamical systems, and utilizing high-tech software stacks to prescribe valuable actions and derive meaningful
insights from large volumes of data, in an automated, optimized, dynamized and scalable manner. He has worked extensively in cloud, fog and edge solutions, centralized databases (relational/non-relational), decentralized distributed ledger technology, data science, Al, ML (regular and federated), data engineering (ETL/ELT pipelines), devops and APl's, among other related and non-related areas.
.</p><br>
`,
  },

  // Add more bios here...
];
interface BioItemProps {
  name: string;
  jobTitle: string;
  dialogId: string;
  ariaLabel: string;
  description: string;
}

const BioItem: React.FC<BioItemProps> = ({
  name,
  jobTitle,
  dialogId,
  ariaLabel,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bstn-bio bstn-bio-grid__item" data-filters="">
        <button
          className="bstn-bio__inner"
          aria-label={ariaLabel}
          data-a11y-dialog-show={dialogId}
          data-gtm-category="Page Engagement"
          data-gtm-action="Expanded Content"
          data-gtm-label={`People Expanded Content | ${name}`}
          data-gtm-component_title="Leadership"
          data-gtm-component_type="People Listing"
          data-gtm-click_url={`#${dialogId}`}
          data-gtm-click_text={name}
          onClick={handleOpen}
        >
          <div
            className="bstn-bio__meta"
            data-gtm-category="Page Engagement"
            data-gtm-action="Expanded Content"
            data-gtm-label={`People Expanded Content | ${name}`}
            data-gtm-component_title="Leadership"
            data-gtm-component_type="People Listing"
            data-gtm-click_url={`#${dialogId}`}
            data-gtm-click_text={name}
          >
            <h3
              className="bstn-bio__name is-style-h5"
              data-gtm-category="Page Engagement"
              data-gtm-action="Expanded Content"
              data-gtm-label={`People Expanded Content | ${name}`}
              data-gtm-component_title="Leadership"
              data-gtm-component_type="People Listing"
              data-gtm-click_url={`#${dialogId}`}
              data-gtm-click_text={name}
            >
              {name}
            </h3>
            <p
              className="bstn-bio__job-title"
              data-gtm-category="Page Engagement"
              data-gtm-action="Expanded Content"
              data-gtm-label={`People Expanded Content | ${name}`}
              data-gtm-component_title="Leadership"
              data-gtm-component_type="People Listing"
              data-gtm-click_url={`#${dialogId}`}
              data-gtm-click_text={name}
            >
              {jobTitle}
            </p>
          </div>
          <svg
            version="1.1"
            x="0px"
            y="0px"
            width="312.728px"
            height="285.456px"
            viewBox="106 113.272 312.728 285.456"
            enableBackground="new 106 113.272 312.728 285.456"
            data-gtm-category="Page Engagement"
            data-gtm-action="Expanded Content"
            data-gtm-label={`People Expanded Content | ${name}`}
            data-gtm-component_title="Leadership"
            data-gtm-component_type="People Listing"
            data-gtm-click_url={`#${dialogId}`}
            data-gtm-click_text={name}
          >
            <polygon
              fill="currentColor"
              points="406,243.272 406,243.272 276,113.272 263.272,126 384.272,247 106,247 106,265 384.272,265
                     263.272,386 276,398.728 406,268.728 418.728,256 "
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          id={dialogId}
          className="bio-lightbox -modal-open"
          data-a11y-dialog-native=""
          aria-hidden="false"
        >
          <div
            className="dialog-overlay"
            tabIndex={-1}
            data-a11y-dialog-hide=""
            onClick={handleClose}
          ></div>
          <div
            className="dialog-content dialog-content--bio "
            aria-label={name}
            role="dialog"
          >
            <button
              className="dialog-close-button"
              type="button"
              data-a11y-dialog-hide=""
              aria-label="Close this dialog window"
              onClick={handleClose}
            >
              <svg
                style={{ display: "inline" }}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="357px"
                height="357px"
                viewBox="0 0 357 357"
                xmlSpace="preserve"
              >
                <polygon
                  fill="currentColor"
                  points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"
                ></polygon>
              </svg>
            </button>

            <div className="bstn-bio__dialog-wrapper">
              <div className="bstn-bio__meta">
                <h3
                  className="bstn-bio__name is-style-h4 mb-zero"
                  itemProp="name"
                >
                  {name}
                </h3>

                <p className="bstn-bio__job-title mt-zero" itemProp="jobTitle">
                  {jobTitle}
                </p>

                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

//2nd comp
interface Option {
  value: string;
  label: string;
}

interface DirectoryFilterProps {
  options: Option[];
  defaultLabel: string;
  defaultValue: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DirectoryFilter: React.FC<DirectoryFilterProps> = ({
  options,
  defaultLabel,
  defaultValue,
  id,
  onChange,
}) => {
  return (
    <div className="directory-filters__item">
      <select
        id={id}
        data-filter="title"
        className="directory-filters__select bstn-select"
        data-select-open="false"
        onChange={onChange}
      >
        <option value={defaultValue} disabled>
          {defaultLabel}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            data-gtm-category="Page Engagement"
            data-gtm-action="Filter Click"
            data-gtm-label={`Title Filter | ${option.label}`}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// table row comp

interface DirectoryBioProps {
  name: string;
  title: string;
  business: string;
  location: string;
  dialogId: string;
  onClick: () => void;
}

const DirectoryBio: React.FC<DirectoryBioProps> = ({
  name,
  title,
  business,
  location,
  dialogId,
  onClick,
}) => {
  return (
    <a
      className="wp-block-columns directory-bio"
      data-a11y-dialog-show={dialogId}
      data-gtm-category="Page Engagement"
      data-gtm-action="Expanded Content"
      data-gtm-label={`Our People | ${name}`}
      onClick={onClick}
    >
      <div className="wp-block-column is-style-h5 name">{name}</div>
      <div className="wp-block-column title" data-searchable-title={title}>
        {title}
      </div>
      <div className="wp-block-column business">{business}</div>
      <div
        className="wp-block-column location"
        data-searchable-location={location}
      >
        {location}
      </div>
      <div className="wp-block-column directory-bio__arrow">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="312.728px"
          height="285.456px"
          viewBox="106 113.272 312.728 285.456"
          enableBackground="new 106 113.272 312.728 285.456"
          xmlSpace="preserve"
        >
          <polygon
            fill="currentColor"
            points="406,243.272 406,243.272 276,113.272 263.272,126 384.272,247 106,247 106,265 384.272,265
              263.272,386 276,398.728 406,268.728 418.728,256 "
          />
        </svg>
      </div>
    </a>
  );
};

interface DirectoryBioLightboxProps {
  dialogId: string;
  name: string;
  title: string;
  location: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const DirectoryBioLightbox: React.FC<DirectoryBioLightboxProps> = ({
  dialogId,
  name,
  title,
  location,
  description,
  isOpen,
  onClose,
}) => {
  return (
    <div
      id={dialogId}
      className={`bio-lightbox directory-bio-lightbox ${
        isOpen ? "-modal-open" : ""
      }`}
      data-a11y-dialog-native=""
      aria-hidden={!isOpen}
    >
      <div
        className="dialog-overlay"
        tabIndex={-1}
        data-a11y-dialog-hide=""
        onClick={onClose}
      ></div>

      <div
        className="dialog-content dialog-content--bio"
        role="dialog"
      >
        <button
          className="dialog-close-button"
          type="button"
          data-a11y-dialog-hide=""
          aria-label="Close this dialog window"
          onClick={onClose}
        >
          <svg
            style={{ display: "inline" }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="357px"
            height="357px"
            viewBox="0 0 357 357"
            xmlSpace="preserve"
          >
            <polygon
              fill="currentColor"
              points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"
            ></polygon>
          </svg>
        </button>

        <div className="bstn-bio__dialog-wrapper">
          {/* <div className="bstn-bio__image-wrap">
            <img
              className="bstn-bio__image wp-post-image"
              data-src={imgSrc}
              alt={imgAlt}
              src={imgSrc}
            />
          </div> */}

          <div className="bstn-bio__meta">
            <h3 className="bstn-bio__name is-style-h4 mb-zero" itemProp="name">
              {name}
            </h3>
            <p className="bstn-bio__job-title mt-zero" itemProp="jobTitle">
              {title}
            </p>
            <p className="bstn-bio__job-title mt-zero">{location}</p>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentBio, setCurrentBio] = useState({
    dialogId: "",
    business: "",
    name: "",
    title: "",
    location: "",
    description: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("All");
  const [selectedBusinessUnit, setSelectedBusinessUnit] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const handleBioClick = (bio: Bio) => {
    setCurrentBio(bio);
    setLightboxOpen(true);
  };

  //search feature
  const filteredBios = bios.filter((bio) => {
    const matchesSearchTerm =
      bio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bio.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bio.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTitle = selectedTitle === "All" || bio.title === selectedTitle;
    const matchesBusinessUnit =
      selectedBusinessUnit === "All" || bio.business === selectedBusinessUnit;
    const matchesLocation =
      selectedLocation === "All" || bio.location === selectedLocation;

    return (
      matchesSearchTerm &&
      matchesTitle &&
      matchesBusinessUnit &&
      matchesLocation
    );
  });

  const titleOptions = [
    { value: "All", label: "All" },
    { value: "Software Engineer II", label: "Software Engineer II" },
    { value: "Frontend Engineer", label: "Frontend Engineer" },
    { value: "Generative AI Engineer", label: "Generative AI Engineer" },
    { value: "Generative AI Intern", label: "Generative AI Intern" },
    { value: "Data Analyst", label: "Data Analyst" },
    { value: "Junior Analyst", label: "Junior Analyst" },
    { value: "Marketing Associate", label: "Marketing Associate" },
    { value: "Product Designer", label: "Product Designer" },
    {
      value: "Junior Researcher and Team Leader",
      label: "Junior Researcher and Team Leader",
    },
    {
      value: "Head of Research & Development",
      label: "Head of Research & Development",
    },
  ];

  const buOptions = [
    { value: "All", label: "All" },
    { value: "Technology", label: "Technology" },
    { value: "Research & Development", label: "Research & Development" },
    { value: "Marketing", label: "Marketing" },
  ];

  const locOptions = [
    { value: "All", label: "All" },
    { value: "New York", label: "New York" },
    { value: "Columbus", label: "Columbus" },
    { value: "Carrollton", label: "Carrollton" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "Tucson", label: "Tucson" },
    { value: "Edison", label: "Edison" },
    { value: "Crawfordsville", label: "Crawfordsville" },
    { value: "Senior Operating Partner", label: "Senior Operating Partner" },
  ];
  
  const descriptions = [`
<br><p style="text-align: justify;">Dontae López is the CEO and Co-Founder of 3UM, He is the creator of 3UM-ID, 3UM-Fortuna, and Genesis as well as one of the builders of SuperDAO. Mr. López has been the driving force behind 3UM's groundbreaking advancements in AI, quantum computing, and decentralized systems.</p><br>

<p style="text-align: justify;">His multifaceted expertise spans artificial intelligence, quantum algorithms, blockchain architecture, and ethical AI governance, making him a rare polymath in the tech industry. His ability to synthesize complex concepts across disciplines – from quantum physics to ethical AI deployment – has been crucial in developing 3UM's pioneering technologies.</p><br>

<p style="text-align: justify;">Before founding 3UM, Mr. López distinguished himself in the world of venture capital, where he established and led the Denver office for IØTA, attracting significant global investment to cutting-edge projects. He also orchestrated over $1 billion in transactions, showcasing his ability to navigate complex financial landscapes and deliver substantial results.</p><br>

<p style="text-align: justify;">Beyond 3UM, Mr. López's expertise is highly sought after in the broader tech ecosystem. He serves on the boards of several companies in the fields of technology, supply chain management, Web3, and quantum computing, further cementing his status as a cross-industry thought leader. He is also an approved mentor and member of the ForbesBLK.</p><br>
`,`
<br><p style="text-align: justify;">Jin Hong is the Chief Operating Officer, a co-founder of 3UM, and the creator of SuperDAO. With over 25 years of exemplary leadership experience, Mr. Hong is renowned for his ability to drive business operations with an unwavering focus on profitability and sustainable growth.</p><br>
<p style="text-align: justify;">As the creator of SuperDAO, Mr. Hong has redefined AI in the blockchain space, incorporating advanced voting mechanisms and AI-driven analytics to enable more efficient and equitable decision-making models.</p><br>
<p style="text-align: justify;">As a seasoned executive, Mr. Hong has consistently demonstrated his prowess in spearheading business expansion initiatives and establishing new divisions from inception to market dominance. His career is marked by impressive achievements across various industries, including AI technologies, finance, entertainment, information technology, F&B, and professional services, with senior positions at Management Consulting Group, Hyundai, DXC Technology, Fidelity National Financial, and Orion Group.</p><br>
<p style="text-align: justify;">Under Mr. Hong's leadership, 3UM continues to push the boundaries of what's possible in the realms of AI, quantum computing, and blockchain technology. His unparalleled problem-solving skills, coupled with his commitment to innovation, position 3UM at the cutting edge of the next technological revolution.</p><br>
`,`
  <br><p style="text-align: justify;">Dwight Spencer is the Chief Technology Officer (CTO) of 3UM and co-founder, bringing over 20 years of experience in IT service delivery and software leadership. As a technology leader, Dwight drives 3UM's innovation, focusing on architecting solutions across cloud-based infrastructure, DevOps, and full-stack development.</p><br>
  <p style="text-align: justify;">At 3UM, Dwight integrates quantum computing, artificial intelligence, and blockchain technologies into the company's offerings. His expertise in information security and automation enhances 3UM's data governance and operational efficiency, ensuring top-tier security standards.</p><br>
  <p style="text-align: justify;">Dwight has partnered with clients such as Fidelity, Lockheed Martin, New York Times, Verizon, CapitalOne, and IBM, delivering solutions that drive digital transformation. His educational background includes a Master's degree in Computer Science and a Finance degree from Cornell University, allowing him to bridge technological innovation and business strategy.</p><br>
  <p style="text-align: justify;">As CTO, Dwight explores emerging technologies, positioning 3UM at the forefront of quantum-inspired AI, blockchain integration, and decentralized systems. His strategic vision and technical expertise drive 3UM's efforts to develop next-generation solutions, reshaping AI-driven decision-making and data processing. Under his leadership, 3UM is poised to push the boundaries of AI, quantum computing, and blockchain technology.</p><br>
`,`
<br><p style="text-align: justify;">Lawrence W. Sinnott, MBA, CPA, CGMA, is an accomplished Chief Financial Officer with a proven track record of driving financial excellence and strategic growth in technology firms and government sectors. With extensive experience in financial leadership, contract management, and operational enhancement, Lawrence leverages his expertise to optimize revenue, reduce costs, and secure substantial contracts, consistently propelling organizational success and expansion.</p><br>
`,`
  <br><p style="text-align: justify;">Collin Schwartz serves as the Chief Legal Officer of 3UM, bringing over two decades of expertise in regulatory compliance, financial services law, and corporate legal affairs. In this pivotal role, he guides 3UM through complex legal and regulatory landscapes while also serving on key internal committees.</p><br>
  <p style="text-align: justify;">At 3UM, Mr. Schwartz is an integral member of the Compliance Board, Ethics Committee, and Investment Board. These positions allow him to shape the company's strategic direction, ensure adherence to regulatory standards, and maintain the highest ethical practices across all operations.</p><br>
  <p style="text-align: justify;">With a Juris Doctor from New York Law School, Mr. Schwartz has built an impressive career spanning fintech startups, global financial institutions, and major corporations. His background includes key positions at companies like SoLo Funds Inc., TruSight, and MUFG Securities Americas Inc., where he honed his skills in managing legal teams, advising executives, and implementing robust compliance programs.</p><br>
  <p style="text-align: justify;">As Chief Legal Officer, Mr. Schwartz oversees all legal and regulatory matters at 3UM, drawing on his proven ability to navigate intricate regulatory environments, develop risk management strategies, and support business growth through sound legal counsel. His experience in both traditional finance and emerging technologies uniquely positions him to address the diverse legal challenges facing 3UM in today's rapidly evolving business landscape.</p><br>
  <p style="text-align: justify;">Mr. Schwartz’s expertise extends to areas such as fintech regulation, blockchain technology, and corporate governance. As a certified Blockchain Expert, he brings cutting-edge knowledge to 3UM's legal strategy and board discussions, ensuring the company remains at the forefront of legal and regulatory compliance in its field.</p><br>
  <p style="text-align: justify;">Through his multifaceted role at 3UM, Mr. Schwartz continues to drive the company's success by aligning legal strategies with business objectives while maintaining the highest standards of compliance and ethics.</p><br>
`,`
 <br><p style="text-align: justify;">Nathan E. Floyd is the Head of Corporate for 3UM, bringing over 15 years of distinguished experience in technology, consumer goods, social media, manufacturing, public sector, and sustainability spaces. His career is marked by a unique blend of legal expertise and strategic business acumen.</p><br>
  <p style="text-align: justify;">At 3UM, Mr. Floyd leverages his extensive background in emerging technologies and complex legal landscapes to guide the company's corporate strategy and legal affairs. His expertise encompasses areas such as the metaverse, infrastructure, automotive sector, and various cutting-edge projects, positioning 3UM at the forefront of technological innovation.</p><br>
  <p style="text-align: justify;">Prior to joining 3UM, Mr. Floyd served as Chief of Staff to the CEO at Suntory Holdings LLC, where he demonstrated exceptional leadership in global risk management, compliance, and strategic operations. His efforts led to significant cost reductions and a 5% year-over-year profitability increase through innovative business process re-engineering projects.</p><br>
  <p style="text-align: justify;">At LINE Corporation, Mr. Floyd played a pivotal role in the company's global expansion as Senior Counsel, advising on international business development and IP legal strategy. His tenure at Morrison & Foerster LLP saw him execute several high-profile tech M&A deals, including transactions valued at billions of dollars.</p><br>
  <p style="text-align: justify;">Mr. Floyd's educational background is equally impressive, holding a Juris Doctor from Harvard Law School, where he received honors in International Law Research. He also earned dual degrees from Stanford University: a Bachelor of Science in Engineering (BioDesign) and a Bachelor of Arts in Asian Studies (Japanese), both with notable honors.</p><br>
  <p style="text-align: justify;">Admitted to the California Bar and holding Japanese Highly-Skilled Worker status, Mr. Floyd is fluent in English and professionally proficient in Japanese. This linguistic capability, combined with his cross-cultural experience, makes him a valuable asset in global business environments.</p><br>
  <p style="text-align: justify;">Beyond his professional achievements, Mr. Floyd maintains a diverse set of interests, including social dance, hip-hop, martial arts (holding a black belt in Taekwondo), community service, mentorship, and sports. This well-rounded background contributes to his holistic approach to both legal and business challenges.</p><br>
  <p style="text-align: justify;">Nathan E. Floyd's career exemplifies the intersection of legal expertise, technological innovation, and global business strategy, positioning him as a leading figure in the evolving landscape of international corporate law and technology. His role at 3UM continues to build upon this impressive foundation, driving the company's growth and innovation in the tech sector.</p><br>
`,`
  <br><p style="text-align: justify;">Juan Carlos Portilla Jaimes serves as the Head of Compliance at 3UM, bringing a wealth of expertise in international financial law, anti-money laundering, and financial crime prevention to this critical role.</p><br>
  <p style="text-align: justify;">With an LL.M. in International Law and certifications in anti-money laundering (CAMS) and fraud examination (CFE), Juan Carlos is uniquely qualified to navigate the complex regulatory landscape. He is fluent in English and Spanish, with proficiency in Portuguese and French.</p><br>
  <p style="text-align: justify;">Juan Carlos's distinguished career includes positions at Wells Fargo, Wise Inc., and American Express, where he honed his skills in compliance and financial crime risk management. His academic contributions extend to lecturing on international financial law at Sabana University and publishing scholarly works in prestigious journals, including the Harvard International Law Journal and Cambridge Law Review.</p><br>
  <p style="text-align: justify;">At 3UM, Juan Carlos leads the compliance team in developing and implementing robust programs to ensure regulatory adherence, prevent financial crimes, and uphold the highest standards of ethical business conduct. His global perspective and deep understanding of emerging compliance challenges position 3UM at the forefront of responsible financial practices.</p><br>
  <p style="text-align: justify;">Juan Carlos's thought leadership in the field is evident through his publications on transnational financial crime and his ability to translate complex regulatory requirements into effective operational strategies. His expertise continues to shape industry standards and contribute to the evolving dialogue on global financial compliance.</p><br>
`,`
  <br><p style="text-align: justify;">Matthew Jackson is an analytical professional with over 13 years of experience in data analysis, digital marketing, and business intelligence. His expertise includes delivering insights, strategic recommendations, and developing data-driven narratives to enhance marketing performance.Matthew is highly skilled in translating complex data into actionable insights, with a focus on improving efficiency and driving targeted advertising touch points. He has extensive experience in the Biotech, Pharma, CPG, and Digital Marketing industries, with a strong foundation in statistical analysis, data strategy, business intelligence, experimental design, and data visualization.</p><br>
`,`
  <br><p style="text-align: justify;">Gregory Betz is the Head of Blockchain at 3UM. With nearly a decade of experience, he has been a leading figure in blockchain innovation since its inception. Greg began his career by mastering the Bitcoin Core source code, which laid the groundwork for his future in blockchain development. As a Senior Blockchain Engineer at Duality Solutions, he played a key role in creating both Proof of Work and Proof of Stake cryptocurrencies, demonstrating his deep understanding of consensus mechanisms.</p><br>
<p style="text-align: justify;">At ConsenSys, Greg contributed significantly to the Ethereum ecosystem, particularly during the aftermath of the DAO hack, cementing his reputation as a problem-solver in critical blockchain environments. His expertise spans the entire blockchain development lifecycle, including smart contracts and tokenomics models.</p><br>
<p style="text-align: justify;">Greg's skills in C++ and Solidity, along with his strategic insight, make him a vital asset in bridging technical innovation and practical application. His contributions have positioned him as a thought leader in blockchain technology, known for navigating the complexities of cryptography, distributed systems, and economic models. At 3UM, Greg drives blockchain initiatives with his extensive knowledge and vision.</p><br>
`,`
  <br><p style="text-align: justify;">Charles "Chuck" Parker is the Head of Business Development at 3UM. With over two decades of experience in AI, healthcare, and technology standards, Chuck has significantly influenced digital health and interoperability.</p><br>
<p style="text-align: justify;">As the former Executive Director of the Continua Health Alliance, he led global efforts to establish interoperability standards for personal health devices, collaborating with companies like Qualcomm, Samsung, and IBM. At Xcertia, working with the American Medical Association and HIMSS, he developed healthcare app standards focusing on privacy, security, and functionality. Chuck's expertise includes serving on FDA committees for AI in healthcare, contributing to frameworks for qualifying and certifying AI as medical devices. He has worked with IEEE, Bluetooth, GSMA, and ITU, establishing himself as a global authority on technology standards.</p><br>
<p style="text-align: justify;">At 3UM, Chuck leverages his industry knowledge and network to create strategic partnerships and drive business growth. He holds a Master of Science in Healthcare Informatics from Northeastern University, enhancing his practical experience with a strong theoretical foundation. As a recognized speaker and thought leader, Chuck continues to shape the future of digital health and technology standards.</p><br>
`,`
  <br><p style="text-align: justify;">Sherry Chi is a Data Analyst at 3UM with a Master’s degree in Data Science from the University of Southern California and a Bachelor’s degree in Financial Mathematics & Statistics from the University of California, Santa Barbara. She has developed expertise in building Python-based ETL pipelines, applying machine learning techniques for predictive analytics, and transforming datasets into actionable business insights.<br></p>
<p style="text-align: justify;">In her role as a Data Scientist at VISIONARYAI, Sherry reconstructed over 110k question-answer pairs to train a Transformer model that surpassed GPT-2 benchmarks. She also developed a CRM system for fraud detection, saving users $16,000 in losses. Her data storytelling skills were instrumental in promoting Chatbot products to diverse audiences, effectively communicating complex models to professionals and engaging non-technical audiences with relatable analogies and interactive activities.<br></p>
<p style="text-align: justify;">During her internship at AXA Investment Managers, Sherry honed her financial modeling and data analysis skills. She automated a Python-based ETL pipeline and migrated data from a local server to MongoDB, saving the team 6 hours of manual work and improving data retrieval time by 15%. She also collaborated with the Fraud Detection team to assess Random Forest and Boosting models, restricting over 400 abnormal transactions and enhancing annual revenue by 1%.<br></p>
<p style="text-align: justify;">Sherry’s educational background in technology and finance provides her with comprehensive insights. Her innovative approach to problem-solving and balancing cost and efficiency, combined with her dedication to continuous learning, make her a valuable asset to the data-driven team at 3UM.<br></p>
`,`
  <br><p style="text-align: justify;">Born and raised in Bielefeld, Germany, Niklas has enriched his academic journey by studying in the United States, becoming proficient in both German and English. This bilingual and bicultural background enables him to communicate effectively and professionally in diverse environments, a highly valuable skill in the global business arena.</p><br>
  <p style="text-align: justify;">Niklas is an ambitious graduate student-athlete at St. Thomas University, currently pursuing an MBA in International Business and Finance. He previously earned a Bachelor's degree in Business Administration with a concentration in Management and a minor in Economics from Presbyterian College. Alongside his academic achievements, Niklas has gained professional experience in technological solutions consulting and project management.</p><br>
  <p style="text-align: justify;">Niklas aims to harness his technological, linguistic, quantitative analytical, and economic expertise to build a successful career in business development and innovative economic strategy. His enthusiasm for understanding disparities in economic growth across different regions drives his interest in contributing to the future economy.</p><br>
  <p style="text-align: justify;">Niklas’s diverse skill set and international experience make him a versatile and valuable asset in the field of international business.</p><br>
`,`<br><p style="text-align: justify;">Chandana Srinivasa Yatisha with a Master’s degree in Computer Engineering from New York University, Chandana leverages her diverse background in data science, machine learning, and software development as a Software Analyst in Machine Learning at 3um. Her experiences include designing workflows for a psychology lab, consulting as a software engineer at Accenture, and crafting machine learning algorithms for a space startup.
Chandana is a staunch advocate for women and minorities in tech, and she is deeply passionate about the ethical use of AI and data. She's an active participant in organizations and events like The Grace Hopper Conference and the WomenTech Network, striving to foster inclusive and equitable tech communities. She has a proven track record of developing innovative solutions using Python, Java, SQL, and other technologies.
At 3um, Chandana is dedicated to harnessing her skills in AI and data science to drive forward-thinking solutions and make a positive impact. She is committed to contributing to projects that not only advance technological capabilities but also uphold ethical standards.
</p><br>`;

  return (
    <div id="content" role="main" className="site-content">
      <div className="container-fluid">
        <section
          className="py-16 md:py-32"
          style={{
            backgroundImage: "url(/assets/img3.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight mb-6">
              Our People
            </h1>
          </div>
        </section>
        <h3 className="wp-block-heading has-text-align-center mt-xxlarge">
          Leadership
        </h3>
        <h4 className="wp-block-heading">Executive Officers</h4>
        <div className="bstn-bio-grid mb-small bstn-bio-grid--4-columns">
          <BioItem
            name="Dontae López"
            jobTitle="CEO & Co-Founder"
            dialogId="bio-dontae-x-y-lopez"
            ariaLabel="CEO & Co-Founder"
            description={descriptions[1]}
          />
          <BioItem
            name="Jin Hong"
            jobTitle="COO & Co-Founder"
            dialogId="bio-jin-hong"
            ariaLabel="Jin Hong"
            description={descriptions[2]}
          />
          <BioItem
            name="Dwight Spencer"
            jobTitle="CTO & Co-Founder"
            dialogId="bio-dwight-spencer"
            ariaLabel="Dwight Spencer"
            description={description[3]}
          />
          <BioItem
            name="Lawrence W. Sinnott"
            jobTitle="Chief Financial Officer"
            dialogId="bio-lawrence-sinnott"
            ariaLabel="Lawrence W. Sinnott"
            description={description[4]}
          />
          <BioItem
            name="Collin Schwartz"
            jobTitle="Chief Legal Officer"
            dialogId="bio-collin-schwartz"
            ariaLabel="Collin Schwartz"
            description={description[5]}
          />
        </div>

        <h4 className="wp-block-heading">Senior Leadership</h4>
        <div className="bstn-bio-grid mb-small bstn-bio-grid--4-columns">
          <BioItem
            name="Nathan E. Floyd"
            jobTitle="Head of Corporate"
            dialogId="bio-nathan-e-floyd"
            ariaLabel="Nathan E. Floyd"
            description={descriptions[6]}
          />
          <BioItem
            name="Juan Carlos Portilla"
            jobTitle="Head of Compliance"
            dialogId="bio-juan-carlos-portilla"
            ariaLabel="Juan Carlos Portilla"
            description={descriptions[7]}
          />
          <BioItem
            name="Matthew Jackson"
            jobTitle="Head of Data"
            dialogId="bio-matthew-jackson"
            ariaLabel="Matthew Jackson"
            description={descriptions[8]}
          />
          <BioItem
            name="Gregory Betz"
            jobTitle="Head of Blockchain"
            dialogId="bio-gregory-betz"
            ariaLabel="Gregory Betz"
            description={descriptions[9]}
          />
          <BioItem
            name="Charles Parker"
            jobTitle="Head of Business Development"
            dialogId="bio-charles-parker"
            ariaLabel="Charles Parker"
            description={descriptions[10]}
          />
        </div>

        {/* <h3 className="wp-block-heading has-text-align-center mt-xxlarge">
          Board Members
        </h3>

        <div className="bstn-bio-grid mb-small bstn-bio-grid--4-columns">
          <BioItem
            name="Xiangyuan (Sherry) Chi"
            jobTitle="Data Analyst"
            dialogId="bio-xiangyuan-chi"
            ariaLabel="Xiangyuan (Sherry) Chi"
            description={description11}
          />
          <BioItem
            name="Niklas Hoener"
            jobTitle="Head of Compliance"
            dialogId="bio-niklas-hoener"
            ariaLabel="Niklas Hoener"
            description={description12}
          />
          
        </div> */}

        <h3 className="has-text-align-center">Directory</h3>
        <div id="people-directory" className="people-directory mb-xlarge">
          <div id="directory-filters" className="directory-filters">
            <div className="directory-filters__item">
              <input
                type="text"
                placeholder="Search"
                id="directory-search-filter"
                className="search"
                data-gtm-category="Page Engagement"
                data-gtm-action="Search Field Click"
                data-gtm-label="Our People | Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <DirectoryFilter
              options={titleOptions}
              defaultLabel="Title"
              defaultValue="All"
              id="directory-title-filter"
              onChange={(e) => setSelectedTitle(e.target.value)}
            />
            <DirectoryFilter
              options={buOptions}
              defaultLabel="Business Unit"
              defaultValue="All"
              id="directory-business-filter"
              onChange={(e) => setSelectedBusinessUnit(e.target.value)}
            />
            <DirectoryFilter
              options={locOptions}
              defaultLabel="Location"
              defaultValue="All"
              id="directory-location-filter"
              onChange={(e) => setSelectedLocation(e.target.value)}
            />
          </div>

          {/* table */}
          <figure className="wp-block-table directory-bio__table">
            <table>
              <thead>
                <tr>
                  <th className="has-text-align-left">Name</th>
                  <th className="has-text-align-left">Title</th>
                  <th className="has-text-align-left">Business Unit</th>
                  <th className="has-text-align-left">Location</th>
                </tr>
              </thead>
            </table>
          </figure>
          <div className="list">
            {filteredBios.map((bio, index) => (
              <DirectoryBio
                key={index}
                name={bio.name}
                title={bio.title}
                business={bio.business} // Adjust if necessary
                location={bio.location}
                dialogId={bio.dialogId}
                onClick={() => handleBioClick(bio)}
              />
            ))}

            {/* //dynamic popup , no change */}
            <DirectoryBioLightbox
              dialogId={currentBio.dialogId}
              name={currentBio.name}
              title={currentBio.title}
              location={currentBio.location}
              description={currentBio.description}
              isOpen={isLightboxOpen}
              onClose={() => setLightboxOpen(false)}
            />
          </div>
        </div>
      </div>

      {/* <div>
        <ProfileCard profiles={profiles} />
         <Member executives={leaderShip} /> 
      </div> */}
    </div>
  );
};

export default page;
