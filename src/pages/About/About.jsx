import Blog from "../../components/Blog/Blog.jsx";
import Fluid from "../../components/Figure/Figure.jsx";

import "./About.scss";

const About = () => {
  const blogPost = {
    title: "Lorem Ipsum",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  const blogPost2 = {
    title: "Lorem Ipsum",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  const picture1 = "/temp2.jpg";
  const picture2 = "/temp1.jpg";

  return (
    <div className="divCenter">
      <div className="aboutContainer">
        <Blog {...blogPost} />
        <Fluid path={picture1} />

        <Blog {...blogPost2} />
        <Fluid path={picture2} />
      </div>
    </div>
  );
};

export default About;
