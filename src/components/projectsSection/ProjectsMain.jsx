import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Employee Management System",
    year: "Developed a comprehensive employee management system using Python and MySQL. The system enables HR teams to manage employee records, including attendance, salary details, and personal information. Features include data storage, retrieval, and updates with secure access.",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/udaykumar5683/Employee-Management-System",
  },
  {
    name: "Low-Light Image Enhancement",
    year: "Developed a system to enhance images taken in low-light conditions using Python, OpenCV, and deep learning (Zero-DCE). Applied techniques like CLAHE, Gamma Correction, and CNN-based curve estimation to improve brightness and contrast. Evaluated results using PSNR and SSIM metrics for quality measurement.",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://github.com/udaykumar5683/Image-Enhancement-System",
  },
  {
    name: "College Event Management System",
    year: "A college event management project is a system designed to plan, organize, and manage events within a college. It allows students, faculty, and organizers to register events, schedule activities, manage resources, and track participants.",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/udaykumar5683/college-Event-Management",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}  // Add this line - you were missing this prop
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;