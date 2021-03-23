import { IoMdPizza } from "react-icons/io";
import React, { useState, useEffect } from "react";

interface ScrollProps {
  showBelow: number;
}
const Scroll: React.FC<ScrollProps> = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <div className='show-btn'>
      {show && (
        <button onClick={() => handleClick()} className="to-top-btn">
          <IoMdPizza color="black" size={40} />
        </button>
      )}
    </div>
  );
};
export default Scroll;
