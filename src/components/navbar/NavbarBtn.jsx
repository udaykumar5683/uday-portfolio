import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      <a 
        href="https://drive.google.com/file/d/16kVkGdAhHTcBo_RKB51JB8Q0P9gUjn07/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-cyan transition-all duration-500"
      >
        Resume
      </a>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
