import { useNavigate } from "react-router-dom";

const About = () => {
  const navi = useNavigate();
  //used to navigate ,useNavigate router hook should be used in top in the fn component like link
  return (
    <>
      <h1> About </h1>
      <button onClick={() => navi("/home")}> Home </button>
    </>
  );
};

export default About;
