import { useDropArea } from "react-use";
import { useState, useEffect, useCallback } from "react";
import Select from "../components/Select";
import { transcode } from "../utils/ffmpeg";

export default function IndexPage() {

  const [bond, state] = useDropArea({
    onFiles: (file) => {
      // setInputFile(file);
      processTranscoding(e.target.files[0]);
    },
  });

  const processTranscoding = async (inputFile) => {
    const data = await transcode(inputFile, outputType);
    const el = document.createElement("a");
      el.href = data.url;
      el.setAttribute("download", data.filename);
      el.click();
  };
  // const [inputFile, setInputFile] = useState(null);

  const [outputType, setoutputType] = useState("wav");
  const choices = [
    ["wav", "wav"],
    ["mp3", "mp3"],
  ];

  return (
    <div className="flex items-center justify-center h-screen max-w-screen-xl mx-auto">
      <Select values={choices} selectedValue="mp3" onValueChange={setoutputType} />

      <label {...bond} className="flex items-center justify-center w-full h-56 text-3xl font-semibold text-gray-700 border border-blue-200 border-dashed rounded-md">
        <input
          type="file"
          onChange={(e) => {
            // setInputFile(e.target.files[0]);
            processTranscoding(e.target.files[0]);
          }}
          className="hidden"
        />
        <div>Drop something here.</div>
      </label>
    </div>
  );
}
