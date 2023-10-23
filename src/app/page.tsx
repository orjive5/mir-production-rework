import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {

  return (
    <main className="bg-black text-white min-h-screen w-full">
        <Navbar />
        <Introduction />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </main>
  )
}
