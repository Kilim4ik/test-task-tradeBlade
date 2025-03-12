import React from "react";

export const FileDecor = ({ position }) => {
  return (
    <img
      className={`file-decor ${position}__file-decor`}
      src="./svg/small-file.svg"
      srcSet="./svg/small-file.svg 1000w , ./svg/long-file.svg "
      alt="Decor"
    />
  );
};
