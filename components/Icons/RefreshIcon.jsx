import * as React from "react";

function RefreshIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 4l.582 5m0 0a8.001 8.001 0 0115.356 2M4.582 9H9m11 11l-.581-5m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        stroke="#2563EB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RefreshIcon;