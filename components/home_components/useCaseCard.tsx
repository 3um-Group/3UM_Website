// const UseCaseCard = ({ stat, description, quote, author, role, company, isVisible }:any) => {
//     return (
//         <section data-testid="TestimonialRecord-198432507"
//         className="flex w-full snap-center flex-col overflow-hidden rounded-2xl border border-gray-200 md:min-w-[770px] md:flex-row lg:min-w-[970px]">
//         <div
//             className="flex w-full items-center justify-center bg-gradient-to-br p-16 md:px-9 md:py-10 flex w-full items-center justify-center bg-gradient-to-br p-16 md:px-9 md:py-10 from-gradient-decorative-purple-100 to-gradient-decorative-purple-200">
//             <h2 className="flex flex-col gap-2 text-center"><span
//                     className="font-stat-300 md:font-stat-400 font-semibold text-white-950">3.5M+</span><span
//                     className="font-paragraph-size-300 md:font-paragraph-size-600 text-gray-200">wallets integrated</span></h2>
//         </div>
//         <div className="flex flex-col gap-6 bg-white-950 p-6 md:gap-12 md:p-10">
//             <blockquote className="font-paragraph-size-300 md:font-paragraph-size-600 text-gray-950"><span
//                     className="">Infrastructure that’s both reliable and scalable, so that we can stay up when our customers
//                     need us most - that’s huge for Collab.Land. Alchemy is the GOAT here.</span></blockquote>
//             <div
//                 className="flex flex-row items-center justify-between gap-6 md:flex-col md:items-start md:justify-normal lg:flex-row lg:items-center lg:justify-between lg:gap-0">
//                 <div>
//                     <p className="font-paragraph-size-300 md:font-paragraph-size-500 font-semibold text-gray-950">Raymond Feng
//                     </p><span className="font-paragraph-size-200 md:font-paragraph-size-500 font-medium text-gray-500">CTO and
//                         Co-founder</span>
//                 </div>
//                 {/* <img alt="CollabLand-logo" loading="lazy" width="150" height="60" decoding="async" data-nimg="1"
//                     className="h-fit w-[116px] md:w-[146.47px]"
//                     src="https://www.datocms-assets.com/105223/1705721180-collabland.svg" style="color: transparent;"> */}
//             </div>
//         </div>
//     </section>
//     );
//   };
const UseCaseCard = ({ description, quote }:any) => {
    return (
        //   <div className="flex-shrink-0 w-full md:w-1/3 snap-center p-4">
        //     <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        //       {/* <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-400 to-purple-500 p-8 flex items-center justify-center">
        //         <div className="text-center">
        //           <h3 className="text-4xl font-bold text-white">{stat}</h3>
        //           <p className="text-white mt-2">{description}</p>
        //         </div>
        //       </div> */}
        //       <div className="w-full md:w-full p-8">
        //         <blockquote className="text-gray-800 mb-4">{quote}</blockquote>
        //         {/* <div className="flex items-center justify-between">
        //           <div>
        //             <p className="font-semibold">{author}</p>
        //             <p className="text-gray-600">{role}</p>
        //           </div>
        //           <img src={`/path-to-${company.toLowerCase()}-logo.png`} alt={company} className="h-8" />
        //         </div> */}
        //       </div>
        //     </div>
        //   </div>
<div className="flex-shrink-0 w-full md:w-[600px] lg:w-[800px] snap-center p-4">
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row h-[400px] md:h-[365px]">
        <div className="w-full flex flex-col justify-center items-center p-8">
            <div className="text-6xl font-bold text-white">{description}</div>
            <div className="text-xl text-white mt-4">{quote}</div>
        </div>
    </div>
</div>


    

    );
};

export default UseCaseCard;