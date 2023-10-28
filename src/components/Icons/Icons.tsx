import React from "react";
import { FiInstagram } from "react-icons/fi";

interface Props {
  icon: React.ReactNode;
  url: string;
}

function Icons({ icon, url }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
}
export default Icons;
