import React from "react";

const TheFooter = () => {
  return (
    <footer className="footer bg-dark text-light text-center p-2">
      <p className="p-0 m-0">
        All rights reseved &copy;{new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default TheFooter;
