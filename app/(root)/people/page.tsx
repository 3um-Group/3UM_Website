"use client";
import React, { useState } from "react";
// import "../../../public/assets/styles/style.css";
import './page.css';


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
            open=""
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
  href: string;
  dialogId: string;
}

interface DirectoryBioProps {
  name: string;
  title: string;
  business: string;
  location: string;
  href: string;
  dialogId: string;
  onClick: () => void;
}

const DirectoryBio: React.FC<DirectoryBioProps> = ({
  name,
  title,
  business,
  location,
  href,
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
  ariaLabel: string;
  imgSrc: string;
  imgAlt: string;
  name: string;
  jobTitle: string;
  location: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const DirectoryBioLightbox: React.FC<DirectoryBioLightboxProps> = ({
  dialogId,
  ariaLabel,
  imgSrc,
  imgAlt,
  name,
  jobTitle,
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
        aria-label={ariaLabel}
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
          <div className="bstn-bio__image-wrap">
            <img
              className="bstn-bio__image wp-post-image"
              data-src={imgSrc}
              alt={imgAlt}
              src={imgSrc}
            />
          </div>

          <div className="bstn-bio__meta">
            <h3 className="bstn-bio__name is-style-h4 mb-zero" itemProp="name">
              {name}
            </h3>
            <p className="bstn-bio__job-title mt-zero" itemProp="jobTitle">
              {jobTitle}
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
    ariaLabel: "",
    imgSrc: "",
    imgAlt: "",
    name: "",
    jobTitle: "",
    location: "",
    description: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("All");
  const [selectedBusinessUnit, setSelectedBusinessUnit] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const handleBioClick = (bio) => {
    setCurrentBio(bio);
    setLightboxOpen(true);
  };

  const bios = [
    {
      name: "Qasim Abbas",
      title: "Sr. Managing Director",
      business: "Tactical Opportunities",
      location: "London",
      href: "https://www.blackstone.com/people/qasim-abbas/",
      dialogId: "bio-lightbox-5479",
      imgSrc:
        "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
      imgAlt: "Qasim Abbas",
      description: `
        <p style="text-align: justify;">Qasim Abbas is a Senior Managing Director in the Tactical Opportunities group at Blackstone. Mr. Abbas leads the group’s European investment strategy, with a particular focus on financial services, and is a member of the Tactical Opportunities Investment Committee. Mr. Abbas has been responsible for leading the group’s investments in Currencies Direct, Hipgnosis, Ki Insurance, Prima, NIBC, Rothesay Life, The Northview Group, performing mortgage pool acquisitions, FinTech platforms as well as the establishment of de novo lending platforms.</p>
        <p style="text-align: justify;">Before joining Blackstone in 2012, Mr. Abbas was a Portfolio Manager with Trafalgar Asset Managers (a European credit-focused hedge fund), where he invested and traded in European Asset-Backed and Mortgage-Backed Securities across a range of asset classes. Prior to that, he was responsible for establishing a Europe-focused mortgage loan portfolio trading and investment desk at UBS AG in London, and previously spent eight years at Citigroup in emerging markets, securitization, and asset-backed special situations roles.</p>
        <p style="text-align: justify;">Mr. Abbas received a B.A. in Economics and Government from Clark University. He currently serves as a director of Currencies Direct, NIBC, The Northview Group, Hipgnosis and Lombard International, and was formerly a director of Rothesay Life.</p>
      `,
    },
    {
      name: "Abbas",
      title: " Director",
      business: "Tactical",
      location: "Dallas",
      href: "https://www.blackstone.com/people/qasim-abbas/",
      dialogId: "bio-lightbox-5479",
      imgSrc:
        "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
      imgAlt: "Abbas",
      description: `
        <p style="text-align: justify;">Before joining Blackstone in 2012, Mr. Abbas was a Portfolio Manager with Trafalgar Asset Managers (a European credit-focused hedge fund), where he invested and traded in European Asset-Backed and Mortgage-Backed Securities across a range of asset classes. Prior to that, he was responsible for establishing a Europe-focused mortgage loan portfolio trading and investment desk at UBS AG in London, and previously spent eight years at Citigroup in emerging markets, securitization, and asset-backed special situations roles.</p>
        <p style="text-align: justify;">Mr. Abbas received a B.A. in Economics and Government from Clark University. He currently serves as a director of Currencies Direct, NIBC, The Northview Group, Hipgnosis and Lombard International, and was formerly a director of Rothesay Life.</p>
      `,
    },

    {
      name: "Abbas",
      title: " Director",
      business: "Tactical",
      location: "Dallas",
      href: "https://www.blackstone.com/people/qasim-abbas/",
      dialogId: "bio-lightbox-5479",
      imgSrc:
        "https://www.blackstone.com/wp-content/uploads/sites/2/2020/07/1075724-photo.jpg?v=1679936315",
      imgAlt: "Abbas",
      description: `
        <p style="text-align: justify;">Before joining Blackstone in 2012, Mr. Abbas was a Portfolio Manager with Trafalgar Asset Managers (a European credit-focused hedge fund), where he invested and traded in European Asset-Backed and Mortgage-Backed Securities across a range of asset classes. Prior to that, he was responsible for establishing a Europe-focused mortgage loan portfolio trading and investment desk at UBS AG in London, and previously spent eight years at Citigroup in emerging markets, securitization, and asset-backed special situations roles.</p>
        <p style="text-align: justify;">Mr. Abbas received a B.A. in Economics and Government from Clark University. He currently serves as a director of Currencies Direct, NIBC, The Northview Group, Hipgnosis and Lombard International, and was formerly a director of Rothesay Life.</p>
      `,
    },
    // Add more bios here...
  ];
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
    { value: "Sr. Managing Director", label: "Sr. Managing Director" },
    { value: "Managing Director", label: "Managing Director" },
    { value: "Operating Partner", label: "Operating Partner" },
    { value: "Chairman", label: "Chairman" },
    { value: "Vice Chairman", label: "Vice Chairman" },
    { value: "Senior Advisory Director", label: "Senior Advisory Director" },
    { value: "Chair Of Blackstone Japan", label: "Chair Of Blackstone Japan" },
    { value: "Senior Operating Partner", label: "Senior Operating Partner" },
  ];

  const buOptions = [
    { value: "All", label: "All" },
    { value: "Sr. Managing Director", label: "Sr. Managing Director" },
    { value: "Managing Director", label: "Managing Director" },
    { value: "Operating Partner", label: "Operating Partner" },
    { value: "Chairman", label: "Chairman" },
    { value: "Vice Chairman", label: "Vice Chairman" },
    { value: "Senior Advisory Director", label: "Senior Advisory Director" },
    { value: "Chair Of Blackstone Japan", label: "Chair Of Blackstone Japan" },
    { value: "Senior Operating Partner", label: "Senior Operating Partner" },
  ];

  const locOptions = [
    { value: "All", label: "All" },
    { value: "Sr. Managing Director", label: "Sr. Managing Director" },
    { value: "Managing Director", label: "Managing Director" },
    { value: "Operating Partner", label: "Operating Partner" },
    { value: "Chairman", label: "Chairman" },
    { value: "Vice Chairman", label: "Vice Chairman" },
    { value: "Senior Advisory Director", label: "Senior Advisory Director" },
    { value: "Chair Of Blackstone Japan", label: "Chair Of Blackstone Japan" },
    { value: "Senior Operating Partner", label: "Senior Operating Partner" },
  ];
  const description1 = `
    <p style="text-align: justify;">Dontae X. Y. López is the CEO, Chairman, and Co-Founder of 3UM, as well as one of the builders of SuperDAO. Known as the "Boy Genius" in tech circles and 3UM, Mr. López has been the driving force behind 3UM's groundbreaking advancements in AI, quantum computing, and decentralized systems.</p><br>
    <p style="text-align: justify;">With an insatiable curiosity and a prodigious intellect, Mr. López has been instrumental in every aspect of 3UM's development since its inception. His multifaceted expertise spans artificial intelligence, quantum algorithms, blockchain architecture, and ethical AI governance, making him a rare polymath in the tech industry.</p><br>
    <p style="text-align: justify;">Prior to founding 3UM, Mr. López distinguished himself in the world of venture capital, where he established and led the Denver office for IØTA. In this role, he demonstrated an exceptional ability to bridge international investors with innovative portfolio companies, with a particular focus on Web3 technologies. His strategic vision and network-building skills were pivotal in attracting significant global investment to cutting-edge projects.</p><br>
    <p style="text-align: justify;">Mr. López's business acumen extends beyond the tech sector. In his tenure at a firm, he orchestrated over $1 billion in transactions, showcasing his ability to navigate complex financial landscapes and deliver substantial results.</p><br>
    <p style="text-align: justify;">Currently pursuing a degree in Liberal Arts at the esteemed Harvard Extension School, Mr. López embodies the Renaissance ideal of broad, interdisciplinary knowledge. This educational background complements his technological expertise, allowing him to approach problems with a unique, holistic perspective.</p><br>
    <p style="text-align: justify;">At 3UM, Mr. López wears multiple hats with remarkable efficacy. He sits on the Compliance Board, ensuring that the company's innovations align with regulatory standards while pushing the boundaries of what's possible. As a key member of the Board of Directors, he guides the company's strategic direction, leveraging his deep understanding of both technology and market dynamics.</p><br>
    <p style="text-align: justify;">Beyond 3UM, Mr. López's expertise is highly sought after in the broader tech ecosystem. He serves on the boards of several companies in the fields of technology, supply chain management, Web3, and quantum computing, further cementing his status as a cross-industry thought leader.</p><br>
    <p style="text-align: justify;">A dedicated philanthropist, Mr. López is committed to leveraging technology for social good. His charitable initiatives focus on bridging the digital divide and promoting STEM education in underserved communities, reflecting his belief in the transformative power of technology to create positive societal change.</p><br>
    <p style="text-align: justify;">Mr. López's visionary leadership and technical brilliance have positioned 3UM at the vanguard of the AI revolution. His ability to synthesize complex concepts across disciplines – from quantum physics to ethical AI deployment – has been crucial in developing 3UM's pioneering technologies.</p><br>
    <p style="text-align: justify;">A sought-after speaker and thought leader, Mr. López continues to shape the future of technology, driving innovations that promise to redefine the intersection of AI, quantum computing, and blockchain technology, while simultaneously working to ensure these advancements benefit society at large.</p><br>
  `;

  const description2 = `
  <p style="text-align: justify;">Juan Carlos Portilla Jaimes serves as the Head of Compliance at 3UM, bringing a wealth of expertise in international financial law, anti-money laundering, and financial crime prevention to this critical role.</p><br>
  <p style="text-align: justify;">With an LL.M. in International Law and certifications in anti-money laundering (CAMS) and fraud examination (CFE), Juan Carlos is uniquely qualified to navigate the complex regulatory landscape. He is fluent in English and Spanish, with proficiency in Portuguese and French.</p><br>
  <p style="text-align: justify;">Juan Carlos's distinguished career includes positions at Wells Fargo, Wise Inc., and American Express, where he honed his skills in compliance and financial crime risk management. His academic contributions extend to lecturing on international financial law at Sabana University and publishing scholarly works in prestigious journals, including the Harvard International Law Journal and Cambridge Law Review.</p><br>
  <p style="text-align: justify;">At 3UM, Juan Carlos leads the compliance team in developing and implementing robust programs to ensure regulatory adherence, prevent financial crimes, and uphold the highest standards of ethical business conduct. His global perspective and deep understanding of emerging compliance challenges position 3UM at the forefront of responsible financial practices.</p><br>
  <p style="text-align: justify;">Juan Carlos's thought leadership in the field is evident through his publications on transnational financial crime and his ability to translate complex regulatory requirements into effective operational strategies. His expertise continues to shape industry standards and contribute to the evolving dialogue on global financial compliance.</p><br>
`;

  const description3 = `
  <p style="text-align: justify;">Dwight Spencer serves as the Chief Technology Officer (CTO) of 3UM, bringing over 20 years of exceptional experience in IT service delivery and software leadership to the company's cutting-edge technological initiatives. As a visionary technology leader, Mr. Spencer plays a crucial role in driving 3UM's innovation and operational excellence, with a particular focus on architecting and delivering robust solutions across cloud-based infrastructure, DevOps, and full-stack development.</p><br>
  <p style="text-align: justify;">At 3UM, Mr. Spencer leverages his extensive background to spearhead the integration of quantum computing, artificial intelligence, and blockchain technologies into the company's core offerings. His deep commitment to incorporating cutting-edge technologies and best practices has been instrumental in positioning 3UM at the forefront of technological innovation.</p><br>
  <p style="text-align: justify;">Mr. Spencer's career is distinguished by his ability to navigate complex technological landscapes and align IT strategies with business objectives, consistently delivering tangible outcomes. His expertise in information security and automation has been pivotal in enhancing 3UM's data governance compliance and operational efficiency, ensuring the company maintains the highest standards of security in its groundbreaking work.</p><br>
  <p style="text-align: justify;">Prior to joining 3UM, Mr. Spencer fostered successful partnerships with prominent clients such as Fidelity, Lockheed Martin, New York Times, Verizon, CapitalOne, and IBM. This experience in delivering tailored solutions to address critical business challenges and drive digital transformation has proved invaluable in 3UM's mission to revolutionize decision-making processes through advanced AI and quantum technologies.</p><br>
  <p style="text-align: justify;">Mr. Spencer's educational background is equally impressive, holding a Master's degree in Computer Science and a Finance degree from Cornell University. This unique combination of technical expertise and financial acumen allows him to bridge the gap between technological innovation and business strategy, making him an indispensable asset to 3UM's leadership team.</p><br>
  <p style="text-align: justify;">As CTO of 3UM, Mr. Spencer continues to explore emerging technologies, positioning the company at the cutting edge of innovation in quantum-inspired AI, blockchain integration, and decentralized systems. His strategic vision and technical prowess are driving 3UM's efforts to develop next-generation solutions that promise to reshape the landscape of AI-driven decision-making and data processing.</p><br>
  <p style="text-align: justify;">Under Mr. Spencer's technological leadership, 3UM is poised to push the boundaries of what's possible in the realms of AI, quantum computing, and blockchain technology. His unparalleled expertise and forward-thinking approach ensure that 3UM remains at the vanguard of the technological revolution, consistently delivering innovative solutions that address the complex challenges of our rapidly evolving digital world.</p><br>
`;

  const description5 = `
  <p style="text-align: justify;">Collin Schwartz serves as the Chief Legal Officer of 3UM, bringing over two decades of expertise in regulatory compliance, financial services law, and corporate legal affairs. In this pivotal role, he guides 3UM through complex legal and regulatory landscapes while also serving on key internal committees.</p><br>
  <p style="text-align: justify;">At 3UM, Mr. Schwartz is an integral member of the Compliance Board, Ethics Committee, and Investment Board. These positions allow him to shape the company's strategic direction, ensure adherence to regulatory standards, and maintain the highest ethical practices across all operations.</p><br>
  <p style="text-align: justify;">With a Juris Doctor from New York Law School, Mr. Schwartz has built an impressive career spanning fintech startups, global financial institutions, and major corporations. His background includes key positions at companies like SoLo Funds Inc., TruSight, and MUFG Securities Americas Inc., where he honed his skills in managing legal teams, advising executives, and implementing robust compliance programs.</p><br>
  <p style="text-align: justify;">As Chief Legal Officer, Mr. Schwartz oversees all legal and regulatory matters at 3UM, drawing on his proven ability to navigate intricate regulatory environments, develop risk management strategies, and support business growth through sound legal counsel. His experience in both traditional finance and emerging technologies uniquely positions him to address the diverse legal challenges facing 3UM in today's rapidly evolving business landscape.</p><br>
  <p style="text-align: justify;">Mr. Schwartz’s expertise extends to areas such as fintech regulation, blockchain technology, and corporate governance. As a certified Blockchain Expert, he brings cutting-edge knowledge to 3UM's legal strategy and board discussions, ensuring the company remains at the forefront of legal and regulatory compliance in its field.</p><br>
  <p style="text-align: justify;">Through his multifaceted role at 3UM, Mr. Schwartz continues to drive the company's success by aligning legal strategies with business objectives while maintaining the highest standards of compliance and ethics.</p><br>
`;
  const description6 = `
  <p style="text-align: justify;">Nathan E. Floyd is the Head of Corporate for 3UM, bringing over 15 years of distinguished experience in technology, consumer goods, social media, manufacturing, public sector, and sustainability spaces. His career is marked by a unique blend of legal expertise and strategic business acumen.</p><br>
  <p style="text-align: justify;">At 3UM, Mr. Floyd leverages his extensive background in emerging technologies and complex legal landscapes to guide the company's corporate strategy and legal affairs. His expertise encompasses areas such as the metaverse, infrastructure, automotive sector, and various cutting-edge projects, positioning 3UM at the forefront of technological innovation.</p><br>
  <p style="text-align: justify;">Prior to joining 3UM, Mr. Floyd served as Chief of Staff to the CEO at Suntory Holdings LLC, where he demonstrated exceptional leadership in global risk management, compliance, and strategic operations. His efforts led to significant cost reductions and a 5% year-over-year profitability increase through innovative business process re-engineering projects.</p><br>
  <p style="text-align: justify;">At LINE Corporation, Mr. Floyd played a pivotal role in the company's global expansion as Senior Counsel, advising on international business development and IP legal strategy. His tenure at Morrison & Foerster LLP saw him execute several high-profile tech M&A deals, including transactions valued at billions of dollars.</p><br>
  <p style="text-align: justify;">Mr. Floyd's educational background is equally impressive, holding a Juris Doctor from Harvard Law School, where he received honors in International Law Research. He also earned dual degrees from Stanford University: a Bachelor of Science in Engineering (BioDesign) and a Bachelor of Arts in Asian Studies (Japanese), both with notable honors.</p><br>
  <p style="text-align: justify;">Admitted to the California Bar and holding Japanese Highly-Skilled Worker status, Mr. Floyd is fluent in English and professionally proficient in Japanese. This linguistic capability, combined with his cross-cultural experience, makes him a valuable asset in global business environments.</p><br>
  <p style="text-align: justify;">Beyond his professional achievements, Mr. Floyd maintains a diverse set of interests, including social dance, hip-hop, martial arts (holding a black belt in Taekwondo), community service, mentorship, and sports. This well-rounded background contributes to his holistic approach to both legal and business challenges.</p><br>
  <p style="text-align: justify;">Nathan E. Floyd's career exemplifies the intersection of legal expertise, technological innovation, and global business strategy, positioning him as a leading figure in the evolving landscape of international corporate law and technology. His role at 3UM continues to build upon this impressive foundation, driving the company's growth and innovation in the tech sector.</p><br>
`;

  const description7 = `
  <p style="text-align: justify;">Juan Carlos Portilla Jaimes serves as the Head of Compliance at 3UM, bringing a wealth of expertise in international financial law, anti-money laundering, and financial crime prevention to this critical role.</p><br>
  <p style="text-align: justify;">With an LL.M. in International Law and certifications in anti-money laundering (CAMS) and fraud examination (CFE), Juan Carlos is uniquely qualified to navigate the complex regulatory landscape. He is fluent in English and Spanish, with proficiency in Portuguese and French.</p><br>
  <p style="text-align: justify;">Juan Carlos's distinguished career includes positions at Wells Fargo, Wise Inc., and American Express, where he honed his skills in compliance and financial crime risk management. His academic contributions extend to lecturing on international financial law at Sabana University and publishing scholarly works in prestigious journals, including the Harvard International Law Journal and Cambridge Law Review.</p><br>
  <p style="text-align: justify;">At 3UM, Juan Carlos leads the compliance team in developing and implementing robust programs to ensure regulatory adherence, prevent financial crimes, and uphold the highest standards of ethical business conduct. His global perspective and deep understanding of emerging compliance challenges position 3UM at the forefront of responsible financial practices.</p><br>
  <p style="text-align: justify;">Juan Carlos's thought leadership in the field is evident through his publications on transnational financial crime and his ability to translate complex regulatory requirements into effective operational strategies. His expertise continues to shape industry standards and contribute to the evolving dialogue on global financial compliance.</p><br>
`;
  const description8 = `
  <p style="text-align: justify;">Matthew Jackson is an analytical professional with over 13 years of experience in data analysis, digital marketing, and business intelligence. His expertise includes delivering insights, strategic recommendations, and developing data-driven narratives to enhance marketing performance.</p><br>
  <p style="text-align: justify;">Matthew is highly skilled in translating complex data into actionable insights, with a focus on improving efficiency and driving targeted advertising touch points. He has extensive experience in the Biotech, Pharma, CPG, and Digital Marketing industries, with a strong foundation in statistical analysis, data strategy, business intelligence, experimental design, and data visualization.</p><br>
`;

  const description9 = `
  <p style="text-align: justify;">Gregory Betz serves as our Head of Blockchain at 3UM, is a pioneering force in the distributed ledger technology landscape. With nearly a decade of hands-on experience, he has been at the forefront of blockchain innovation since its early days.</p><br>
  <p style="text-align: justify;">His journey began with mastering the intricacies of the Bitcoin Core source code, establishing a foundation that would propel him to the cutting edge of blockchain development. As a Senior Blockchain Engineer at Duality Solutions, Greg played a pivotal role in architecting both Proof of Work and Proof of Stake cryptocurrencies, showcasing his versatility and deep understanding of consensus mechanisms.</p><br>
  <p style="text-align: justify;">Greg's expertise extends beyond cryptocurrencies to the realm of smart contracts. His tenure at ConsenSys, a global leader in blockchain technology, saw him contribute to the Ethereum ecosystem during critical moments, including the aftermath of the DAO hack. This experience solidified his reputation as a problem-solver in high-stakes blockchain environments.</p><br>
  <p style="text-align: justify;">A polymath in the Web3 space, Greg's skillset spans the entire blockchain development lifecycle. From conceptualizing and drafting comprehensive whitepapers to designing robust tokenomics models, he brings a holistic approach to blockchain projects. His proficiency in C++ and Solidity, combined with his strategic insight, makes him an invaluable asset in bridging the gap between technical innovation and practical application.</p><br>
  <p style="text-align: justify;">Greg's contributions to the field have established him as a thought leader in blockchain technology, sought after for his ability to navigate the complex intersection of cryptography, distributed systems, and economic models. At 3UM, he continues to push the boundaries of what's possible in the decentralized digital landscape, driving our blockchain initiatives with unparalleled expertise and vision.</p><br>
`;

  const description10 = `
  <p style="text-align: justify;">Charles "Chuck" Parker, Head of Business Development at 3UM, is a visionary leader with over two decades of experience at the intersection of AI, healthcare, and technology standards. His career is marked by a series of groundbreaking initiatives that have shaped the landscape of digital health and interoperability.</p><br>
  <p style="text-align: justify;">As the former Executive Director of the Continua Health Alliance, Chuck spearheaded global efforts to establish interoperability standards for personal health devices, working with industry giants like Qualcomm, Samsung, and IBM. His leadership at Xcertia, in collaboration with the American Medical Association and HIMSS, set the benchmark for healthcare app standards, addressing critical areas such as privacy, security, and functionality.</p><br>
  <p style="text-align: justify;">Chuck's expertise extends to AI in healthcare, having served on FDA committees to develop frameworks for qualifying and certifying AI as medical devices. His work with IEEE, Bluetooth, GSMA, and ITU has positioned him as a global authority on technology standards and their practical implementation.</p><br>
  <p style="text-align: justify;">At 3UM, Chuck leverages his extensive network and deep industry knowledge to forge strategic partnerships and drive business growth. His unique blend of technical acumen and business savvy enables him to identify emerging opportunities at the convergence of blockchain, AI, and healthcare technologies.</p><br>
  <p style="text-align: justify;">Chuck's academic background includes a Master of Science in Healthcare Informatics from Northeastern University, complementing his practical experience with a solid theoretical foundation. His ability to bridge the gap between complex technical concepts and real-world business applications makes him an invaluable asset to 3UM's leadership team.</p><br>
  <p style="text-align: justify;">As a sought-after speaker and thought leader, Chuck continues to shape the future of digital health and technology standards, ensuring that 3UM remains at the forefront of innovation in the rapidly evolving tech landscape.</p><br>
`;

const description11 = `
  <p style="text-align: justify;">Sherry Chi is a dedicated Data Analyst with a Master’s degree in Data Science from the University of Southern California and a Bachelor’s degree in Financial Mathematics & Statistics from the University of California, Santa Barbara. Sherry has developed expertise in building up Python-based ETL pipelines, applying Machine Learning techniques for predictive analytics, and transforming datasets into business insights for stakeholders.</p><br>
  <p style="text-align: justify;">As a Data Scientist in VISIONARYAI, Sherry reconstructed over 110k question-answer pairs to train the Transformer model, which surpassed GPT-2 benchmarks. To ensure customer satisfaction, she developed a CRM system for fraud detection, saving users $16,000 in losses. Additionally, Sherry leveraged data storytelling skills to promote the Chatbot products to different audiences. To persuade professionals, she explained the models and algorithms behind the Chatbot in detail and compared it with GPT-2 based on effectiveness and accuracy. To persuade non-technical audiences, she used relatable analogies and interactive activities to keep them engaged, highlighting the user-friendly features.</p><br>
  <p style="text-align: justify;">Sherry’s internship at AXA Investment Managers further honed her skills in financial modeling and data analysis. To increase efficiency, she automated the Python-based ETL pipeline and completed the data migration from a local server to MongoDB, saving the team 6 hours of manual work on reports and improving data retrieval time by 15%. She also volunteered to collaborate with the Fraud Detection team to assess the performance of Random Forest and Boosting models, restricting over 400 abnormal transactions and enhancing annual revenue by 1%.</p><br>
  <p style="text-align: justify;">Sherry’s educational background in both Technology and Finance provides her with comprehensive insights. She always finds innovative ways to resolve old problems and maintains a balance between cost and efficiency. Her dedication to continuous learning and willingness for growth, combined with her proven track record, makes her a valuable asset to any data-driven team.</p><br>
`;


const description12 = `
  <p style="text-align: justify;">Born and raised in Bielefeld, Germany, Niklas has enriched his academic journey by studying in the United States, becoming proficient in both German and English. This bilingual and bicultural background enables him to communicate effectively and professionally in diverse environments, a highly valuable skill in the global business arena.</p><br>
  <p style="text-align: justify;">Niklas is an ambitious graduate student-athlete at St. Thomas University, currently pursuing an MBA in International Business and Finance. He previously earned a Bachelor's degree in Business Administration with a concentration in Management and a minor in Economics from Presbyterian College. Alongside his academic achievements, Niklas has gained professional experience in technological solutions consulting and project management.</p><br>
  <p style="text-align: justify;">Niklas aims to harness his technological, linguistic, quantitative analytical, and economic expertise to build a successful career in business development and innovative economic strategy. His enthusiasm for understanding disparities in economic growth across different regions drives his interest in contributing to the future economy.</p><br>
  <p style="text-align: justify;">Niklas’s diverse skill set and international experience make him a versatile and valuable asset in the field of international business.</p><br>
`;

const description13 = `
  <p style="text-align: justify;">Alex Wroe is a dedicated Analyst with a passion for data analysis and strategic decision-making. Graduating with a Bachelor of Science in Sports Marketing and a minor in Data Analytics from the University of South Florida, Alex has honed a unique skill set that combines analytical prowess with industry knowledge. Alex also holds an Associate of Arts in Business Administration from Harford Community College, where he was a member of the Men's Lacrosse Team and achieved the distinction of being an Academic All-American. Alex's skill set extends beyond his academic and professional achievements. With a keen ability to network, solve problems, think critically, collaborate effectively, and adapt to diverse environments, he is a versatile professional poised to make significant contributions in the fields of finance, data analysis, and beyond. Driven by a passion for leveraging data insights to drive business success, Alex is committed to continuous learning and growth, seeking opportunities to apply his expertise in innovative ways and make a positive impact in the dynamic intersection of sports, analytics, and finance.</p><br>
`;

const description14 = `
  <p style="text-align: justify;">Alex Wroe is a dedicated Analyst with a passion for data analysis and strategic decision-making. Graduating with a Bachelor of Science in Sports Marketing and a minor in Data Analytics from the University of South Florida, Alex has honed a unique skill set that combines analytical prowess with industry knowledge. Alex also holds an Associate of Arts in Business Administration from Harford Community College, where he was a member of the Men's Lacrosse Team and achieved the distinction of being an Academic All-American. Alex's skill set extends beyond his academic and professional achievements. With a keen ability to network, solve problems, think critically, collaborate effectively, and adapt to diverse environments, he is a versatile professional poised to make significant contributions in the fields of finance, data analysis, and beyond. Driven by a passion for leveraging data insights to drive business success, Alex is committed to continuous learning and growth, seeking opportunities to apply his expertise in innovative ways and make a positive impact in the dynamic intersection of sports, analytics, and finance.</p><br>
`;


  return (
    <div id="content" role="main" className="site-content">
      <div className="container-fluid">
        <h3 className="wp-block-heading has-text-align-center mt-xxlarge">
          Leadership
        </h3>
        <h4 className="wp-block-heading">Executive Officers</h4>
        <div className="bstn-bio-grid mb-small bstn-bio-grid--4-columns">
          <BioItem
            name="Dontae X. Y. López"
            jobTitle="Chairman, CEO, & Co-Founder"
            dialogId="bio-dontae-x-y-lopez"
            ariaLabel="Dontae X. Y. López"
            description={description1}
          />
          <BioItem
            name="Jin Hong"
            jobTitle="President & Chief Operating Officer"
            dialogId="bio-jin-hong"
            ariaLabel="Jin Hong"
            description={description2}
          />
          <BioItem
            name="Dwight Spencer"
            jobTitle="Chief Technology Officer"
            dialogId="bio-dwight-spencer"
            ariaLabel="Dwight Spencer"
            description={description3}
          />
          <BioItem
            name="Lawrence W. Sinnott"
            jobTitle="Chief Financial Officer"
            dialogId="bio-lawrence-sinnott"
            ariaLabel="Lawrence W. Sinnott"
            description="Stephen A. Schwarzman is the Chairman, CEO & Co-Founder of Blackstone. Since founding Blackstone, Mr. Schwarzman has been involved in all phases of the firm's development."
          />
          <BioItem
            name="Collin Schwartz"
            jobTitle="Chief Legal Officer"
            dialogId="bio-collin-schwartz"
            ariaLabel="Collin Schwartz"
            description={description5}
          />
        </div>

        <h4 className="wp-block-heading">Senior Leadership</h4>
        <div className="bstn-bio-grid mb-small bstn-bio-grid--4-columns">
          <BioItem
            name="Nathan E. Floyd"
            jobTitle="Head of Corporate"
            dialogId="bio-nathan-e-floyd"
            ariaLabel="Nathan E. Floyd"
            description={description6}
          />
          <BioItem
            name="Juan Carlos Portilla"
            jobTitle="Head of Compliance"
            dialogId="bio-juan-carlos-portilla"
            ariaLabel="Juan Carlos Portilla"
            description={description7}
          />
          <BioItem
            name="Matthew Jackson"
            jobTitle="Head of Data"
            dialogId="bio-matthew-jackson"
            ariaLabel="Matthew Jackson"
            description={description8}
          />
          <BioItem
            name="Gregory Betz"
            jobTitle="Head of Blockchain"
            dialogId="bio-gregory-betz"
            ariaLabel="Gregory Betz"
            description={description9}
          />
          <BioItem
            name="Charles Parker"
            jobTitle="Head of Business Development"
            dialogId="bio-charles-parker"
            ariaLabel="Charles Parker"
            description={description10}
          />
        </div>

        <h3 className="wp-block-heading has-text-align-center mt-xxlarge">
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
          <BioItem
            name="Patrick (Alex) Wroe"
            jobTitle="Junior Analyst"
            dialogId="bio-Patrick-jackson"
            ariaLabel="Patrick (Alex) Wroe"
            description={description13}
          />
          <BioItem
            name="Parmi Pandya"
            jobTitle="Junior Marketing Associate"
            dialogId="bio-parmi-pandya"
            ariaLabel="Parmi Pandya"
            description={description14}
          />
          <BioItem
            name="Charles Parker"
            jobTitle="Head of Business Development"
            dialogId="bio-charles-parker"
            ariaLabel="Charles Parker"
            description={description10}
          />
        </div>

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
                business={bio.business}
                location={bio.location}
                href={bio.href}
                dialogId={bio.dialogId}
                onClick={() => handleBioClick(bio)}
              />
            ))}

            {/* //dynamic popup , no change */}
            <DirectoryBioLightbox
              dialogId={currentBio.dialogId}
              ariaLabel={currentBio.name}
              imgSrc={currentBio.imgSrc}
              imgAlt={currentBio.imgAlt}
              name={currentBio.name}
              jobTitle={currentBio.jobTitle}
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
