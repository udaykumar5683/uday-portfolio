import SingleSkill from "./SingleSkill";
import { FaPython } from "react-icons/fa";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill:"Java",
    icon: FaJava,
  },
  
  {
    skill:"C",
    icon: TbCircleLetterCFilled,
  },
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  
  {
    skill: "SQL",
    icon: TbSql,
  },
  
  {
    skill: "DSA",
    icon: FaDatabase,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
