import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  year: number;
  src: string;
  alt: string;
  linkTo: string;
};

const Project = ({
  title,
  description,
  year,
  src,
  alt,
  linkTo,
}: ProjectProps) => {
  return (
    <section className="break-words flex items-start gap-5 md:gap-10 pb-10 border-b border-[hsla(0,0%,100%,.06)]">
        <div className="relative w-28 h-32 md:w-44 md:h-48 rounded">
          <Image
              src={src}
              width="0"
              height="0"
              sizes="100vw"
              className="rounded w-full h-full object-cover"
              alt={alt}
          />
        </div>
        <div className="w-full flex flex-col gap-1 md:gap-5 justify-between min-h-32">
          <Link rel="noopener noreferrer" target={linkTo === '#contact' ? '_self' : '_blank'} href={linkTo}>
              <h2 className="text-center md:text-left text-xl md:text-2xl cursor-pointer underline">
                  {title}
              </h2>
          </Link>
          <p className="max-w-full text-base md:text-2xl text-center md:text-left text-muted-foreground overflow-hidden">
              {description}
          </p>
          <p className="text-base md:text-2xl text-center md:text-left text-muted-foreground">
              {year}
          </p>
        </div>
    </section>
  );
};

export default Project;
