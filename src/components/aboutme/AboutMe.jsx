import Photo from "../../assets/Photo-testing.jpeg";
import Button from "../Element/button/Button";

function AboutMe() {
  return (
    <section id="about" className="w-full py-28 bg-custom-black-2">
      <div className="container mx-auto px-7 lg:px-0">
        <div className="grid grid-cols-12 md:gap-20">
          <div className="col-span-full lg:col-span-6"></div>
          <div className="col-span-full lg:col-span-6 md:flex flex-col m-0">
            <p className="text-5xl md:text-[95px] 2xl:text-8xl md:mb-5 text-start font-montreal-medium text-white ">
              A brief intro, <br />
              who am I?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 md:gap-20 md:mt-10">
          <div className="col-span-full md:col-span-4 md:flex flex-col">
            <img
              src={Photo}
              alt="Photo"
              className="md:w-auto h-auto xl:h-[25rem] 2xl:h-[32rem] object-cover rounded-lg my-5 md:my-0"
            />
          </div>
          <div className="col-span-full md:col-span-5 lg:col-span-8 2xl:pr-[50px]">
            <p className="text-lg lg:text-2xl 2xl:text-3xl leading-normal font-montreal-regular text-white tracking-regular">
              7th semester Informatics Engineering student who is pursuing a
              bachelor's degree at Indraprastra PGRI University. Who is very
              enthusiastic about technology, has experience in Android using
              Kotlin programming language and Android architecture, and has
              skills in developing web applications.
            </p>
            <div className="mt-10 flex flex-col lg:flex-row md:gap-30 xl:pr-10 2xl:pr-12">
              <p className="text-white font-montreal-light w-full mb-5 md:mb-0 ">
                ABOUT ME
              </p>
              <p className="text-white font-montreal-light text-lg">
                I am a person who really likes simple and clean design, with
                very small details that are considered as much as possible, in
                order to realize the comfort of each other. as well as happy to
                learn about new things and have good analytical skills to adapt
                to the surrounding environment quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
