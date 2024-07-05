import React, { useState } from "react";
/*We no longer need this component because we replace it with a Reusable Component "Box"*/
const WatchedBox = ({ children }) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && <>{children}</>}
    </div>
  );
};

export default WatchedBox;
