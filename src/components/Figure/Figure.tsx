import path from "path";
import Figure from "react-bootstrap/Figure";

function FigureExample(desc: string, pathToPic: string) {
  return (
    <Figure>
      <Figure.Image width={171} height={180} alt="171x180" src={pathToPic} />
      <Figure.Caption>{desc}</Figure.Caption>
    </Figure>
  );
}

export default FigureExample;
