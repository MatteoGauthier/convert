import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">{children}</div>
      <footer className="flex items-center justify-center py-12 space-x-10 text-cool-gray-300 xl:py-20">
        <Link href="/">
          <a className="text-lg ">Home</a>
        </Link>
        <a className="text-lg " href="https://github.com/MatteoGauthier/convert">
          Github
        </a>
        <a className="text-lg " href="https://twitter.com/MatteoGauthier_">
          Contact
        </a>
      </footer>
    </>
  );
}
