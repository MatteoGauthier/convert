import React from "react";
import FormatPicker from "./FormatPicker";

const Main = ({className}) => {
  return (
    <div className="inline-flex items-start justify-start w-full mb-8 space-x-8">
      <div className="inline-flex flex-col items-start justify-start w-full space-y-3">
        <div className="flex flex-col items-start justify-start space-y-2">
          <p className="text-lg font-medium leading-none text-gray-900">Files to convert</p>
          <p className="w-full text-base leading-tight text-gray-500">Click to choice the file you wanted to convert or use the drag and drop feature</p>
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-center px-14 py-9 w-full h-full border rounded-md border-gray-200">
          <div className="flex items-center justify-center py-1 pl-0.5 pr-1 w-7 h-7">
            <div className="w-6 h-6 border-2 border-gray-200 opacity-50"></div>
          </div>
          <p className="text-2xl font-bold leading-normal text-gray-200">Drop your files here</p>
        </div>
      </div>
      <div className="inline-flex flex-col items-start justify-start w-full space-y-3">
        <div className="flex flex-col items-start justify-start space-y-2">
          <p className="text-lg font-medium leading-none text-gray-900">Output file format</p>
          <p className="text-base leading-none text-gray-500">Choose the outfile format for the file you wanted to convert</p>
        </div>

        <FormatPicker/>

      </div>
    </div>
  );
};

export default Main;
