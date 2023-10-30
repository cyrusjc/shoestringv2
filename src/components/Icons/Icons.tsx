import React from "react";
import { IconContext } from "react-icons";
import "./Icons.css";

interface Props {
  icon: React.ReactNode;
  url: string;
}

function Icons({ icon, url }: Props) {
  return (
    <IconContext.Provider value={{ size: "40", className: "logo" }}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </IconContext.Provider>
  );
}
export default Icons;
