import React from "react";
import { DownloadIcon, RefreshIcon, TerminalIcon } from "../Icons/";
export const DownloadButton = () => {
  return (
    <div className="flex space-x-2.5 items-center justify-start px-3 py-2.5 w-72 h-full rounded" style={{ background: "linear-gradient(95deg, rgba(29,78,216,1), rgba(59,130,246,1))" }}>
      <p className="text-lg font-medium leading-none text-white">Download converted files</p>
      <DownloadIcon />
    </div>
  );
};
export const ClearButton = () => {
  return (
    <div className="flex space-x-2.5 items-center justify-start px-3 py-2.5 h-full bg-blue-200 rounded">
      <p className="text-lg leading-none text-blue-600">Convert a few more files</p>
      <RefreshIcon />
    </div>
  );
};
export const LogsButton = () => {
  return (
    <div className="flex space-x-2.5 items-center justify-start px-3 py-2.5 h-full bg-gray-100 rounded">
      <p className="text-lg leading-none text-gray-500">View logs</p>
      <TerminalIcon />
    </div>
  );
};

export const ButtonsGroup = ({ children }) => {
  return <div className="flex items-center justify-center space-x-6">{children}</div>;
};
