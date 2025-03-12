import React from "react";

export const FileDecor = ({ position }) => {
  return (
    <img
      className={`file-decor ${position}__file-decor`}
      src="./src/assets/svg/small-file.svg"
      srcSet="./src/assets/svg/small-file.svg 1000w , ./src/assets/svg/long-file.svg "
      alt="Decor"
    />
  );
};
