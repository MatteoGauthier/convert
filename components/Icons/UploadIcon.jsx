import * as React from "react";

function UploadIcon(props) {
  return (
    <svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 10.5v14m-4.667-4.667A5.833 5.833 0 018.265 8.265a5.836 5.836 0 0111.47 0 5.836 5.836 0 01-1.068 11.568H9.333zM10.5 14l3.5-3.5-3.5 3.5zm3.5-3.5l3.5 3.5-3.5-3.5z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UploadIcon;
