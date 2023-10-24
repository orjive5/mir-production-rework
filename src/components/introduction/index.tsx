import { brandList } from "@/constants/brandList";
import Image from "next/image";
import Link from "next/link";

const Introduction = () => {

  return (
    <section
      className="flex flex-col justify-center items-center pt-40 sm:pt-56 md:pb-20 px-5 md:px-10 lg:px-40 2xl:px-80"
    >
      <div id="introduction" className="absolute top-[-100px]"></div>
      <div className="bg-border py-2 px-4 rounded-3xl">
        <h2 className="opacity-80 font-semibold tracking-widest text-xs sm:text-base">
          SINCE 2010
        </h2>
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl sm:text-5xl mt-5 sm:mt-10 mb-20 leading-none tracking-wide font-bold text-center">
        <h1>
          PRODUCING{" "}
          <div className="inline-block music-artists music-gradient">
            MUSIC ARTISTS
          </div>{" "}
          FROM ALL AROUND THE WORLD
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20">
        {brandList.map((brand) => {
          return (
            <Link
                key={brand.src}
                href={brand.a}
                rel="noopener noreferrer"
                target='_blank'
                className="flex items-center relative h-16 sm:h-12 md:h-16 lg:h-24"
            >
              <Image
                  src={brand.src}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-auto h-full object-cover box-border overflow-hidden cursor-pointer hover:opacity-80"
                  alt={brand.alt}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Introduction;