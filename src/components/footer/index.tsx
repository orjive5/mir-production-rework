import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="footer" className="z-10 flex items-center relative justify-center bg-secondary-foreground top-[-50px] min-h-[300px] w-full rounded-t-[50px] px-20 py-40">
      <div className="relative top-7 flex flex-col items-center gap-5 justify-center">
        <Link href='#home' className="relative w-16 sm:w-20 cursor-pointer hover:opacity-80">
          <Image
              src='/logo.png'
              width="0"
              height="0"
              sizes="100vw"
              className="rounded w-full h-full object-cover"
              alt="Mir Production logo"
          />
        </Link>
        <h2>
          Copyright &copy; 2022 MIR Production. All Rights Reserved.
        </h2>
      </div>
      <div className="bg-secondary-foreground absolute bottom-[-56px] h-32 w-full z-0"></div>
    </section>
  );
};

export default Footer;
