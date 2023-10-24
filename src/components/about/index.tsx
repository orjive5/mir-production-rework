const About = () => {

  return (
    <section
      className="flex flex-col md:flex-row relative top-[100px] gap-10 bg-[#121214] px-5 md:px-10 lg:px-40 2xl:px-80 pt-5 md:pt-10 lg:pt-20 pb-20 md:pb-28 rounded-t-[50px]"
    >
      <div id="about" className="absolute top-[-100px]"></div>
      <h2 className="text-2xl md:text-3xl text-center md:text-left md:min-w-[200px] lg:min-w-[300px] 2xl:min-w-[400px] font-bold tracking-wide music-artists music-gradient">
        ABOUT
      </h2>
      <article className="text-base md:text-2xl text-center md:text-left leading-normal text-muted-foreground flex flex-col gap-10">
        <p>
          MIR Production specializes in producing music artists from around the world. We organize concerts and tours for musicians of all genres.
        </p>
        <p>
          Our primary objective is to promote artists in the global music market and provide support for aspiring performers. We are keen on forming new professional relationships and engaging in mutually beneficial cooperation.
        </p>
      </article>
    </section>
  );
};

export default About;
