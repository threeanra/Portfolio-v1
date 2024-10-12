import TestImage from "../../src/assets/12222.png";

const Project = ({ number, image, title, description }) => (
  <div className="lg:px-0 flex md:space-x-10 items-start">
    <div className="w-1/3 sticky top-2 hidden md:block">
      <h2 className="font-montreal-medium text-[280px]">{number}.</h2>
    </div>

    <div className="md:w-4/6  space-y-5 md:mt-[100px] mt-10 w-full">
      <img src={image} alt="" className="rounded-lg" />
      <h3 className="font-montreal-medium text-xl">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export const Projects = () => {
  const projects = [
    {
      number: "01",
      image: TestImage,
      title: "Project Name 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt corrupti aperiam distinctio alias laboriosam inventore earum id pariatur maiores!",
    },
    {
      number: "02",
      image: TestImage,
      title: "Project Name 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt corrupti aperiam distinctio alias laboriosam inventore earum id pariatur maiores!",
    },
    {
      number: "03",
      image: TestImage,
      title: "Project Name 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt corrupti aperiam distinctio alias laboriosam inventore earum id pariatur maiores!",
    },
  ];

  return (
    <section className="bg-background-color">
      <div className="container mx-auto px-7 lg:px-0">
        <h1>Recent Works</h1>
        {projects.map((project, index) => (
          <Project
            key={index}
            number={project.number}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};
