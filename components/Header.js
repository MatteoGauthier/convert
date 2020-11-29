import Link from "next/link";
const Header = () => {
  return (
    <div className="flex flex-col items-center mb-12 space-y-4">
      <h1 className="mb-4 font-extrabold ">
        <Link href="/">
          <a className="flex flex-col">
            <span className="text-5xl leading-normal text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-blue-500">Convert your files</span>
            <span className="text-4xl leading-4 text-blue-gray-800">without headache</span>
          </a>
        </Link>
      </h1>
      <hr className="w-1/12 border-gray-300" />
      <p className="w-full text-lg text-center text-cool-gray-600">
        FFMPEG toolset inside your browser powered by WebAssembly and contributors of the ffmpegwasm project. This website currently support audio files conversion, but video conversion will come soon.
      </p>
    </div>
  );
};

export default Header;
