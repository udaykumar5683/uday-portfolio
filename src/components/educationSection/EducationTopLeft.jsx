import EducationInfo from "./EducationInfo";

const EducationTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Education
      </p>
      <div className="flex justify-center items-center gap-4">
        <EducationInfo number="B.Tech" text="Degree" />
      </div>
    </div>
  );
};

export default EducationTopLeft;