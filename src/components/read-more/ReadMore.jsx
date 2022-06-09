import React, { useState } from "react";

import { ReadMoreWrapper } from "./ReadMore.styles";

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <ReadMoreWrapper>
      {isReadMore ? text.slice(0, 220) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...Read More" : " Show Less"}
      </span>
    </ReadMoreWrapper>
  );
};
