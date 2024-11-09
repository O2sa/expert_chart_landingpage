import React from "react";

function Section({ children }) {
  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      {children}
    </div>
  );
}

export default Section;
