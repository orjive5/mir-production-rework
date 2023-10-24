import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {

  return (
    <main className="relative bg-black text-white min-h-screen relative w-full">
        <div id="home" className="absolute top-0"></div>
        <Navbar />
        <Introduction />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </main>
  )
}
