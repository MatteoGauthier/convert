import React from "react";

const Input = () => {
  const readFromBlobOrFile = (blob) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = ({
        target: {
          error: { code },
        },
      }) => {
        reject(Error(`File could not be read! Code=${code}`));
      };
      fileReader.readAsArrayBuffer(blob);
    });
  const onFileUploaded = async ({ target: { files } }) => {
      const file = new Uint8Array(await readFromBlobOrFile(files[0]));
      console.log(file);
    // setMessage("Loading FFmpeg.wasm");
    // if (!ffmpeg.isLoaded()) {
    //   setMessage("Loading ffmpeg.wasm-core, may take few minutes");
    //   await ffmpeg.load();
    // }
    // ffmpeg.FS("writeFile", inFilename, await fetchFile(file));
    // setMessage("Start to run command");
    // const start = Date.now();
    // await ffmpeg.run(...args);
    // setMessage(`Done in ${Date.now() - start} ms`);
    // const data = ffmpeg.FS("readFile", outFilename);
    // setVideoSrc(URL.createObjectURL(new Blob([data.buffer], { type: mediaType })));
  };
  return (
    <div>
      <input type="file" onChange={onFileUploaded} />
    </div>
  );
};

export default Input;
