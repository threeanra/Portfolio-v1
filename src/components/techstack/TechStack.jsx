const VisionCraftTech = () => {
  const bubbleData1 = ["Typescript", "Next.js", "Express.js"];
  const bubbleData2 = ["Kotlin", "MongoDB", "Laravel"];

  const renderBubbles = (items) =>
    items.map((item, index) => (
      <div
        key={index}
        className="px-3 py-1 border border-black rounded-full text-md font-montreal-medium"
      >
        {item}
      </div>
    ));

  return (
    <section
      id="about"
      className="w-full pt-28 pb-28 bg-background-color lg:pb-36 overflow-hidden"
    >
      <div className="container mx-auto px-7 lg:px-0 flex gap-5 flex-col">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Main Text */}
          <div className="text-[100px] lg:text-[320px] font-bold uppercase leading-none">
            Tech
          </div>
          {/* Bubbles */}
          <div className="space-y-2 lg:mt-[170px] w-1/3 md:w-auto self-center lg:mb-5">
            {renderBubbles(bubbleData1)}
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-end gap-5">
          {/* Bubbles */}
          <div className="space-y-2 lg:mt-[170px] w-1/3 md:w-auto self-center lg:mb-5">
            {renderBubbles(bubbleData2)}
          </div>
          {/* Main Text */}
          <div className="text-[100px] lg:text-[320px] font-bold uppercase leading-none self-end">
            Stack
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionCraftTech;
