import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 30 }: Props) => {
  const [isTextExpanded, setExpandable] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;

  return (
    <div style={{ fontFamily: "Arial" }}>
      {isTextExpanded ? children + " " : children.slice(0, maxChar) + "..."}
      <button onClick={() => setExpandable(!isTextExpanded)}>
        {isTextExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
