import Link from "next/link";
const Header = () => {
  return (
    <div className="flex flex-col items-start mx-4 mt-10 mb-12 space-y-4 sm:mx-8 lg:mx-o lg:items-center">
      <h1 className="mb-4 font-extrabold ">
        <Link href="/">
          <a className="flex flex-col">
            <span className="text-3xl leading-normal text-transparent sm:text-5xl bg-clip-text bg-gradient-to-br from-blue-700 to-blue-500">Convert your files</span>
            <span className="text-2xl leading-4 sm:text-4xl text-blue-gray-800">without headache</span>
          </a>
        </Link>
      </h1>
      <hr className="w-1/12 border-gray-300" />
      <p className="text-base sm:w-10/12 sm:text-lg lg:text-center lg:w-full text-cool-gray-600">
        FFMPEG toolset inside your browser powered by WebAssembly and contributors of the ffmpegwasm project. This website currently support audio files conversion, but video conversion will come soon.
      </p>
    </div>
  );
};

export default Header;
