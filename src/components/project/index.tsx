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
    <section className="flex items-start gap-5 md:gap-10 pb-10 border-b border-[hsla(0,0%,100%,.06)]">
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
        <div className="w-full flex flex-col md:gap-5 justify-between min-h-32 text-left">
            <Link rel="noopener noreferrer" target='_blank' href={linkTo}>
                <h2 className="text-xl md:text-2xl cursor-pointer underline">
                    {title}
                </h2>
            </Link>
            <p className="text-muted-foreground">
                {description}
            </p>
            <p className="text-muted-foreground">
                {year}
            </p>
        </div>
    </section>
  );
};

export default Project;
