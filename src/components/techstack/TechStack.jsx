function TechStack() {
  return (
    <section className="border-t-2 border-custom-gray bg-custom-black-2 h-screen">
      <div className="container mx-auto px-4 md:px-0 py-20 lg:py-40">
        <div className="grid grid-cols-12 md:gap-20">
          <div className="col-span-full lg:col-start-4">
            <h1 className="text-4xl lg:text-7xl font-montreal-medium text-white">
              WHAT CAN <span className="border-b-2 border-white">I DO</span> FOR
              YOU?
            </h1>
          </div>
          <div className="col-span-full md:col-span-9 mt-10 md:mt-0">
            <p className="text-lg lg:text-4xl font-montreal-regular text-white">
              With some experience and expertise, I present something that can
              help solve your problem.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white mt-20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">01</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <h2 className="text-3xl font-semibold">Design</h2>
            <p className="font-montreal-light text-xl">
              With a solid track record in designing websites, I deliver strong
              and user-friendly digital designs. (Since 2024 only in combination
              with development)
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">02</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <h2 className="text-3xl font-semibold">Development</h2>
            <p className="font-montreal-light text-xl">
              I build scalable websites from scratch that fit seamlessly with
              design. My focus is on micro animations, transitions, and
              interaction. Build with Kirby CMS or Webflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
