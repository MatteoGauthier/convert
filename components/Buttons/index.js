import React from "react";
import { DownloadIcon, RefreshIcon, TerminalIcon } from "../Icons/";
export const DownloadButton = () => {
  return (
    <div className="flex flex-1 w-full sm:flex-initial space-x-2.5 items-center justify-start px-3 py-2.5 sm:w-72 h-full rounded" style={{ background: "linear-gradient(95deg, rgba(29,78,216,1), rgba(59,130,246,1))" }}>
      <p className="text-lg font-medium leading-none text-white">Download converted files</p>
      <DownloadIcon />
    </div>
  );
};
export const ClearButton = () => {
  return (
    <div className="sm:flex opacity-20 hidden space-x-2.5 items-center justify-start px-2 sm:px-3 sm:py-2.5 py-2 h-full bg-blue-200 rounded">
      <p className="text-sm leading-none text-blue-600 sm:text-lg">Convert a few more files</p>
      <RefreshIcon />
    </div>
  );
};
export const LogsButton = () => {
  return (
    <div className="sm:flex opacity-20 hidden space-x-2.5 items-center justify-start px-2 sm:px-3 sm:py-2.5 py-2 h-full bg-gray-100 rounded">
      <p className="text-sm leading-none text-gray-500 sm:text-lg">View logs</p>
      <TerminalIcon />
    </div>
  );
};

export const ButtonsGroup = ({ children }) => {
  return <div className="flex flex-wrap items-center justify-center w-full px-4 sm:space-x-6 sm:px-8">{children}</div>;
};
