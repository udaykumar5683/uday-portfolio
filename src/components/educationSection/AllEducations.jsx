import React from "react";
import SingleEducation from "./SingleEducation";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const educations = [
  {
    company: "Ballari Institute of Technology and Management",
    job: "B.Tech Computer Science Engineering (AI&ML)",
    responsibilities: [
      "Branch: Computer Science Engineering",
      "Specialization: Artificial Intelligence and Machine Learning",
      "CGPA: 8.1",
      "City: Ballari",
      "State: Karnataka",
      
    ],
  },
  {
    job: "PCMC",
    company: "Sri Vidyaniketan PU College",
    responsibilities: [
      "Physics, Chemistry, Mathematics, Computer Science",
      "Percentage: 85%",
      "City: Gangavathi",
      "State: Karnataka",
    ],
  },
  {
    job: "SSLC",
    company: "Little Hearts School",
    responsibilities: [
      "Percentage: 84%",
      "City: Gangavathi",
      "State: Karnataka",
    ],
  },
];

const AllEducations = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {educations.map((education, index) => {
        return (
          <React.Fragment key={index}>
            <SingleEducation education={education} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllEducations;