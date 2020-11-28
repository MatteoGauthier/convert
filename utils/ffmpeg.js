import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

function transformName(name, ext) {
  return name.replace(/\.[^.\/]+$/g, "." + ext);
}

export async function transcode(file, outType) {
  console.log(file);
  console.log(outType);
  // Initialisation
  const ffmpeg = createFFmpeg({ log: true });
  await ffmpeg.load();
  const outputName = transformName(file.name, outType);
  console.log(outputName);

  // Start process
  await ffmpeg.FS("writeFile", file.name, await fetchFile(file));
  await ffmpeg.run("-i", file.name, outputName);
  const data = ffmpeg.FS("readFile", outputName);
  const url = URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }));
  return {url,filename: outputName}
}
