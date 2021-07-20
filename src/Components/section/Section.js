import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section
      className='sectionWrapper'
      style={{
        border: "1px solid black",
        margin: "20px",
        borderRadius: "20px",
      }}>
      <h2>{title || "No title"}</h2>

      {children}
    </section>
  );
};

// Section.defaultProps = {
//   title: "No title",
// };

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default Section;

// null, undefined, false, "", 0, NaN, -0
