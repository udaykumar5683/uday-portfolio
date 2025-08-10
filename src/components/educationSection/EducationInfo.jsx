const EducationInfo = ({ number, text }) => {
  if (typeof number !== 'number') {
    console.warn('EducationInfo: number prop should be a number');
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-cyan">{number}</p>
      <p className="font-bold text-xl text-lightGrey uppercase -mt-4">{text}</p>
    </div>
  );
};

export default EducationInfo;