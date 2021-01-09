import { useDropArea } from "react-use";
import { UploadIcon } from "./Icons";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { transcode} from "../utils/ffmpeg";
const DropZone = () => {
  const [bond, state] = useDropArea({
    onFiles: (file) => {
      // setInputFile(file);
      transcode(e.target.files[0]);
    },
  });
  return (
    <label className="inline-flex flex-grow lg:h-full h-28 text-3xl font-semibold text-gray-200 space-x-2.5 items-center justify-center w-full border border-dashed rounded-md border-gray-200">
      <VisuallyHidden>
        <input
          type="file"
          onChange={(e) => {
            // setInputFile(e.target.files[0]);
            transcode(e.target.files[0]);
          }}
        />
      </VisuallyHidden>
      <UploadIcon />
      <div>Drop something here.</div>
    </label>
  );
};

export default DropZone;
