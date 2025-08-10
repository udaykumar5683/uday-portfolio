import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am a B. Tech Computer Science student with a focus on AI and Machine Learning, driven by a strong interest in turning ideas into real-world tech solutions. 
        I have built projects in app, web, and game development using tools like Python, Java, Kotlin, and Android Studio.
         I enjoy solving problems, learning new technologies, and bringing creative concepts—like gamified coding apps or image enhancement models—to life. I am currently looking to gain hands-on experience through internships where I can grow as a developer and contribute meaningfully to a team.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
