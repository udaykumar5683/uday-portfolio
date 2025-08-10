import EducationTopLeft from "./EducationTopLeft";
import EducationTopMiddle from "./EducationTopMiddle";
import EducationTopRight from "./EducationTopRight";

const EducationTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
      <EducationTopLeft />
      <EducationTopMiddle />
      <EducationTopRight />
    </div>
  );
};

export default EducationTop;