const About = () => {

  return (
    <section
      className="flex flex-col md:flex-row relative top-[100px] gap-10 bg-[#121214] px-10 md:px-20 lg:px-40 2xl:px-80 pt-16 pb-20 md:pt-20 md:pb-28 rounded-t-[50px]"
    >
      <h2 className="text-2xl md:text-3xl text-center md:text-left md:min-w-[200px] lg:min-w-[300px] 2xl:min-w-[400px] font-bold tracking-wide music-artists music-gradient">
        ABOUT
      </h2>
      <article className="text-xl md:text-2xl text-left leading-normal text-muted-foreground flex flex-col gap-10">
        <p>
          MIR Production is specializing in producing music artists from all
          around the world. We organize concerts and tours for musicians of all
          musical genres.
        </p>
        <p>
          The main objective of the agency is the promotion of artists on the
          world music market as well as support for aspiring performers. We are
          interested in forming new professional relations and mutually
          beneficial cooperation.
        </p>
      </article>
    </section>
  );
};

export default About;
