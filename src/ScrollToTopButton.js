import React from 'react';
import { FaArrowUp } from 'react-icons/fa';


const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="scroll-to-top-button"
      onClick={scrollToTop}
      title="Go to top"
    >
            <FaArrowUp />

    </button>
  );
};

export default ScrollToTopButton;
