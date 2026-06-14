import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="bg-black text-white">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">

        <div
          className="
            absolute
            left-1/2
            top-40
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/20
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-20
            right-20
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-600/20
            blur-[150px]
          "
        />

      </div>

      <Navbar />

      <main className="mx-auto max-w-7xl px-6">

        {/* 1. Hero */}
        <Hero />
        <About />
        <Skills />

        {/* 2. Projects */}
        <Projects />
        

        {/* 5. Achievements */}
        <Achievements />

        {/* 6. Contact */}
        <Contact />

      </main>

      <Footer />

    </div>
  );
}