import * as React from "react";

function DownloadIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22V10m-5 6a4 4 0 01-.88-7.903A5.001 5.001 0 1115.9 6h.1a5 5 0 011 9.9L7 16zm2 3l3 3-3-3zm3 3l3-3-3 3z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DownloadIcon;