import * as React from "react";

function TerminalIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.4 6a2.4 2.4 0 012.4-2.4h14.4A2.4 2.4 0 0121.6 6v12a2.4 2.4 0 01-2.4 2.4H4.8A2.4 2.4 0 012.4 18V6zm3.952 1.552a1.2 1.2 0 011.696 0l3.6 3.6a1.2 1.2 0 010 1.696l-3.6 3.6a1.2 1.2 0 01-1.696-1.696L9.103 12 6.352 9.248a1.2 1.2 0 010-1.696zM13.2 14.4a1.2 1.2 0 100 2.4h3.6a1.2 1.2 0 100-2.4h-3.6z"
        fill="#6B7280"
      />
    </svg>
  );
}

export default TerminalIcon;