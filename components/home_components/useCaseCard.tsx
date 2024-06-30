const UseCaseCard = ({ description, quote }) => {
    return (
      <div className="flex-shrink-0 w-full snap-center p-4">
        <div className="bg-gradient-to-br from-3UM-color to-black  rounded-3xl shadow-lg overflow-hidden flex flex-col items-center justify-center h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] p-8">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">{description}</div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-4">{quote}</div>
        </div>
      </div>
    );
  };
  
  export default UseCaseCard;
  