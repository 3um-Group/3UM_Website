"use client";
import React, { useState } from "react";
// import Member from "@/components/ourpeople_components/Member";
// import ProfileCard from "@/components/ourpeople_components/Profile";

// import "../../../public/assets/styles/style.css";
import "./page.css"

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
        <p>Qasim Abbas is a Senior Managing Director in the Tactical Opportunities group at Blackstone. Mr. Abbas leads the group’s European investment strategy, with a particular focus on financial services, and is a member of the Tactical Opportunities Investment Committee. Mr. Abbas has been responsible for leading the group’s investments in Currencies Direct, Hipgnosis, Ki Insurance, Prima, NIBC, Rothesay Life, The Northview Group, performing mortgage pool acquisitions, FinTech platforms as well as the establishment of de novo lending platforms.</p>
        <p>Before joining Blackstone in 2012, Mr. Abbas was a Portfolio Manager with Trafalgar Asset Managers (a European credit-focused hedge fund), where he invested and traded in European Asset-Backed and Mortgage-Backed Securities across a range of asset classes. Prior to that, he was responsible for establishing a Europe-focused mortgage loan portfolio trading and investment desk at UBS AG in London, and previously spent eight years at Citigroup in emerging markets, securitization, and asset-backed special situations roles.</p>
        <p>Mr. Abbas received a B.A. in Economics and Government from Clark University. He currently serves as a director of Currencies Direct, NIBC, The Northview Group, Hipgnosis and Lombard International, and was formerly a director of Rothesay Life.</p>
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
        <p>Before joining Blackstone in 2012, Mr. Abbas was a Portfolio Manager with Trafalgar Asset Managers (a European credit-focused hedge fund), where he invested and traded in European Asset-Backed and Mortgage-Backed Securities across a range of asset classes. Prior to that, he was responsible for establishing a Europe-focused mortgage loan portfolio trading and investment desk at UBS AG in London, and previously spent eight years at Citigroup in emerging markets, securitization, and asset-backed special situations roles.</p>
        <p>Mr. Abbas received a B.A. in Economics and Government from Clark University. He currently serves as a director of Currencies Direct, NIBC, The Northview Group, Hipgnosis and Lombard International, and was formerly a director of Rothesay Life.</p>
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
  const description = `
    <p>Dontae X. Y. López is the CEO, Chairman, and Co-Founder of 3UM, as well as one of the builders of SuperDAO. Known as the "Boy Genius" in tech circles and 3UM, Mr. López has been the driving force behind 3UM's groundbreaking advancements in AI, quantum computing, and decentralized systems.</p>
    <p>With an insatiable curiosity and a prodigious intellect, Mr. López has been instrumental in every aspect of 3UM's development since its inception. His multifaceted expertise spans artificial intelligence, quantum algorithms, blockchain architecture, and ethical AI governance, making him a rare polymath in the tech industry.</p>
    <p>Prior to founding 3UM, Mr. López distinguished himself in the world of venture capital, where he established and led the Denver office for IØTA. In this role, he demonstrated an exceptional ability to bridge international investors with innovative portfolio companies, with a particular focus on Web3 technologies. His strategic vision and network-building skills were pivotal in attracting significant global investment to cutting-edge projects.</p>
    <p>Mr. López's business acumen extends beyond the tech sector. In his tenure at a firm, he orchestrated over $1 billion in transactions, showcasing his ability to navigate complex financial landscapes and deliver substantial results.</p>
    <p>Currently pursuing a degree in Liberal Arts at the esteemed Harvard Extension School, Mr. López embodies the Renaissance ideal of broad, interdisciplinary knowledge. This educational background complements his technological expertise, allowing him to approach problems with a unique, holistic perspective.</p>
    <p>At 3UM, Mr. López wears multiple hats with remarkable efficacy. He sits on the Compliance Board, ensuring that the company's innovations align with regulatory standards while pushing the boundaries of what's possible. As a key member of the Board of Directors, he guides the company's strategic direction, leveraging his deep understanding of both technology and market dynamics.</p>
    <p>Beyond 3UM, Mr. López's expertise is highly sought after in the broader tech ecosystem. He serves on the boards of several companies in the fields of technology, supply chain management, Web3, and quantum computing, further cementing his status as a cross-industry thought leader.</p>
    <p>A dedicated philanthropist, Mr. López is committed to leveraging technology for social good. His charitable initiatives focus on bridging the digital divide and promoting STEM education in underserved communities, reflecting his belief in the transformative power of technology to create positive societal change.</p>
    <p>Mr. López's visionary leadership and technical brilliance have positioned 3UM at the vanguard of the AI revolution. His ability to synthesize complex concepts across disciplines – from quantum physics to ethical AI deployment – has been crucial in developing 3UM's pioneering technologies.</p>
    <p>A sought-after speaker and thought leader, Mr. López continues to shape the future of technology, driving innovations that promise to redefine the intersection of AI, quantum computing, and blockchain technology, while simultaneously working to ensure these advancements benefit society at large.</p>
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
            description={description}
          />
          <BioItem
            name="Jin Hong"
            jobTitle="President & Chief Operating Officer"
            dialogId="bio-jin-hong"
            ariaLabel="Jin Hong"
            description="Stephen A. Schwarzman is the Chairman, CEO & Co-Founder of Blackstone. Since founding Blackstone, Mr. Schwarzman has been involved in all phases of the firm's development."
          />
          <BioItem
            name="Dwight Spencer"
            jobTitle="Chief Technology Officer"
            dialogId="bio-dwight-spencer"
            ariaLabel="Dwight Spencer"
            description="Stephen A. Schwarzman is the Chairman, CEO & Co-Founder of Blackstone. Since founding Blackstone, Mr. Schwarzman has been involved in all phases of the firm's development."
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
            jobTitle="Chairman, CEO & Co-Founder"
            dialogId="bio-collin-schwartz"
            ariaLabel="Collin Schwartz"
            description="Stephen A. Schwarzman is the Chairman, CEO & Co-Founder of Blackstone. Since founding Blackstone, Mr. Schwarzman has been involved in all phases of the firm's development."
          />
        </div>

        <h4 className="wp-block-heading">Senior Leadership</h4>
        <div className="bstn-bio-grid mb-small bstn-bio-grid--4-columns">
          <BioItem
            name="Nathan E. Floyd"
            jobTitle="Head of Corporate"
            dialogId="bio-nathan-e-floyd"
            ariaLabel="Nathan E. Floyd"
            description="Stephen A. Schwarzman is the Chairman, CEO & Co-Founder of Blackstone. Since founding Blackstone, Mr. Schwarzman has been involved in all phases of the firm's development."
          />
          <BioItem
            name="Juan Carlos Portilla"
            jobTitle="Chairman, CEO & Co-Founder"
            dialogId="bio-stephen-a-schwarzman"
            ariaLabel="Juan Carlos Portilla"
            description="Stephen A. Schwarzman is the Chairman, CEO & Co-Founder of Blackstone. Since founding Blackstone, Mr. Schwarzman has been involved in all phases of the firm's development."
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