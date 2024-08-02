import Photo from "../../assets/Photo-testing.jpeg";
import Button from "../Element/button/Button";

function AboutMe() {
  return (
    <section id="about" className="w-full py-28 bg-custom-black">
      <div className="container mx-auto px-7 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image with text overlay for small screens */}
          <div className="lg:hidden">
            <h1 className="text-5xl md:text-[58px] md:ml-3 md:mb-5 text-start font-montreal-medium text-white pb-5">
              A brief intro, who am I?
            </h1>
            <img
              src={Photo}
              alt="Photo"
              className="rounded-xl w-full object-cover"
            />
            <div className="flex items-center">
              <h1 className="text-lg md:text-xl text-justify font-montreal-regular text-white pt-6">
                7th semester Informatics Engineering student who is pursuing a
                bachelor's degree at Indraprastra PGRI University. Who is very
                enthusiastic about technology, has experience in Android using
                Kotlin programming language and Android architecture, and has
                skills in developing web applications.
              </h1>
            </div>
            <div className="lg:mt-6 2xl:mt-10">
              <Button variant="bg-white h-12 text-custom-black text-lg mt-5 font-montreal-regular">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Image for larger screens */}
          <div className="hidden lg:flex">
            <img
              src={Photo}
              alt="Photo"
              className="rounded-xl w-full h-[30rem] xl:h-[40rem] 2xl:h-[48rem] object-cover"
            />
          </div>

          {/* Text for larger screens */}
          <div className="hidden lg:flex flex-col sticky top-20 self-start">
            <h1 className="leading-normal lg:text-[48px] 2xl:text-[63px] font-montreal-medium text-white">
              A brief intro, who am I?
            </h1>
            <p className="lg:text-xl 2xl:text-3xl leading-normal mt-8 font-montreal-light text-white tracking-regular">
              7th semester Informatics Engineering student who is pursuing a
              bachelor's degree at Indraprastra PGRI University. Who is very
              enthusiastic about technology, has experience in Android using
              Kotlin programming language and Android architecture, and has
              skills in developing web applications.
            </p>
            <div className="mt-auto lg:mt-6 2xl:mt-10">
              <Button variant="bg-white text-custom-black 2xl:text-2xl lg:h-[75px] font-montreal-regular">
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
