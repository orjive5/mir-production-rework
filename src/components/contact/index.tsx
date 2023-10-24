import { Mail, Smartphone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center relative bg-muted rounded-t-[50px] px-10 md:px-20 lg:px-40 2xl:px-80 pt-16 pb-32 md:pt-20">
      <div id="contact" className="absolute top-[-120px]"></div>
      <div className="flex flex-col items-center gap-5 w-full md:w-2/3 contact-bg py-5 sm:py-20 rounded-xl">
        <h2 className="text-xl md:text-3xl font-bold">
          LET'S WORK TOGETHER
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <Mail className="w-6 h-6" />
            <p className="text-xs sm:text-sm md:text-xl font-semibold">
              OFFICE@MIRPRODUCTION.COM
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Smartphone className="w-6 h-6" />
            <p className="text-xs sm:text-sm md:text-xl font-semibold">
              +381640648147
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin className="w-6 h-6" />
            <p className="text-xs sm:text-sm md:text-xl font-semibold">
              BELGRADE, SERBIA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;