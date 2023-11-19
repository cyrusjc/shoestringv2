import Image from "react-bootstrap/Image";

import "./Figure.scss";

function Fluid({ path }) {
  return (
    <div className="">
      <div className="image-container">
        <div className="image">
          <Image src={path} fluid />
        </div>
      </div>
    </div>
  );
}

export default Fluid;
