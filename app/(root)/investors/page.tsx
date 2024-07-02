// import "./page.css";
import img1 from '@/public/assets/img1.png';
import img2 from '@/public/assets/img2.jpeg';

import Image from 'next/image';



interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (

    <section className="px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-container relative md:lg:max-w-6xl lg:max-w-6xl">
        <div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl text-center font-bold md:lg:text-left sm:text-5xl">
                Welcome Investors
              </h1>
            </div>
            <div className="w-full  lg:w-1/2">
              <p className="max-w-3xl mx-auto mt-4 text-base text-justify">
                Join us in shaping the future with our groundbreaking
                intelligent ecosystem. Discover opportunities for investment and
                growth within the 3UM ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageSection: React.FC = () => {
  return (
    <section className="px-6">
      <div className="w-full max-w-6xl mx-auto relative">
        <div className="shadow rounded-xl">
            <div className="grid overflow-hidden rounded-xl">
            <Image
              src={img1}
              alt="Stock Market"
            />
            </div>
        </div>
    </div>
    </section>
  );
}

interface InstitutionalInvestorsProps {
  eyebrow: string;
  title: string;
  description: string;
  firstTitle:string;
  returnsTitle: string;
  returnsDescription: string;
  alignmentTitle: string;
  alignmentDescription: string;
}

const InstitutionalInvestorsSection: React.FC<InstitutionalInvestorsProps> = ({
  eyebrow,
  title,
  description,
  firstTitle,
  returnsTitle,
  returnsDescription,
  alignmentTitle,
  alignmentDescription,
}) => {
  return (
    <section
      aria-labelledby={`Headers-Eyebrow-${eyebrow}`}
      className="px-6 py-16 md:py-24 lg:py-32"
    >
      {/* image col */}
      <div className="mx-auto max-w-container relative md:lg:max-w-6xl lg:max-w-6xl">
        <div className="mb-4">
          <h2 className="text-lg font-semibold uppercase tracking-widest mb-2">
            {eyebrow}
          </h2>
          <h3 className="text-2xl mb-4 text-justify">{title}</h3>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 py-12 lg:items-center">
          <div className="mt-10 lg:mt-0">
          <Image
              src={img2}
              alt="Stock"
            />
          </div>

          <div className="mt-4 space-y-12">
            <div className="flex">
              <div className="ml-4">
                <h4 className="text-2xl font-bold">{firstTitle}</h4>
                <p className="mt-2 text-justify">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="ml-4">
                <h4 className="text-2xl font-bold">{returnsTitle}</h4>
                <p className="mt-2 text-justify">
                  {" "}
                  {returnsDescription}
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="ml-4">
                <h4 className="text-2xl font-bold">{alignmentTitle}</h4>
                <p className="mt-2 text-justify">
                  {alignmentDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};
const page = () => {
  return (
    <main id="primary" className="site__main site-main">
      <div className="default-page default-page--content-only">
        <div className="pt-0 pb-0">
          <div className="sm:px-0">
            <PageHeader
              title="Institutional Investors"
              description="We invest on behalf of the world’s largest institutional investors, including endowments, sovereign wealth funds and pension funds that provide retirement benefits for over 100 million teachers, firefighters, nurses and others."
            />

            <ImageSection/>
            

            <InstitutionalInvestorsSection
              eyebrow="Investor Overview"
              title="3UM is committed to providing our investors with the information and resources they need to make informed decisions. Explore our investor relations and learn about our mission, vision, and strategic initiatives."
              firstTitle="Our Mission"
              description="3UM seeks to revolutionize the way businesses and individuals access, develop, and leverage cutting-edge technologies such as Artificial Intelligence (AI), Web3, and Quantum Computing. We are driven by the heartfelt desire to solve the problem of complexity and fragmentation in the current technology landscape. Our software and app provide a user-friendly ecosystem that simplifies access to these advanced technologies. With our main products, 3UM Finance and 3UM Genesis, we aim to create a seamless environment for innovation while offering customizable solutions that cater to the specific needs of tech-savvy individuals and businesses. We differentiate ourselves through seamless integration, a user-friendly interface, robust ecosystem, scalability, security measures, comprehensive support services, and future-proofing capabilities. By empowering our customers with simplified access to advanced technologies, we strive to drive innovation, efficiency, and growth in the digital age."
              returnsTitle="Strategic Initiatives"
              returnsDescription="3UM focuses on several key projects and areas that drive our mission forward. Our strategic initiatives encompass cutting-edge technological advancements and behind-the-scenes projects aimed at integrating AI, blockchain, and quantum computing into our intelligent ecosystem. These initiatives are designed to foster innovation, enhance security, and provide seamless connectivity across various applications and industries. By focusing on these critical areas, we aim to create transformative solutions that not only meet the current needs of businesses but also anticipate future challenges and opportunities."
              alignmentTitle="Growth Opportunities"
              alignmentDescription="3UM is committed to unlocking potential areas for growth and innovation within our intelligent ecosystem. Our strategic focus includes expanding our technological capabilities in AI, blockchain, and quantum computing, while continuously enhancing the integration and performance of these technologies. We are actively exploring new market segments and developing groundbreaking solutions to address the evolving needs of various industries. Additionally, we seek data center partners worldwide to strengthen our infrastructure and support our global expansion. By investing in research and development, fostering strategic partnerships, and leveraging our robust infrastructure, we aim to create transformative opportunities that drive sustainable growth and deliver significant value to our stakeholders. Join us as we pioneer the future of technology and build a more intelligent, connected world."
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
