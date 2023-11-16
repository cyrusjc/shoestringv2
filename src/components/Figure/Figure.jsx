import Image from "react-bootstrap/Image";

import "./Figure.scss";

function Fluid({ path }) {
  return (
    <div className="divCenter">
      <div className="image-container divCenter">
        <div className="image">
          <Image src={path} fluid />
        </div>
      </div>
    </div>
  );
}

export default Fluid;
