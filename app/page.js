"use client";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { useRef } from "react";

export default function Home() {

  const scrollRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main className="overflow-hidden">
      <div className="relative z-100">
        <Navbar scrollRef={scrollRef} />
      </div>
      <div className="grid grid-cols-2 relative top-[50px]">
        <div className="col-span-2 lg:col-span-1 p-5 relative top-[50px]">
          <Sidebar scrollRef={scrollRef} nextRef={nextRef}/>
        </div>
        <div className="col-span-2 lg:col-span-1 p-5 relative top-[50px]">
          <section id="about">
            <About nextRef={nextRef}/>
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id='skills' >
            <Skills />
          </section>
          <section  id="certificates">
            <Certificates />
          </section>
          <section id="contacts">
            <Contacts />
          </section>
        </div>
      </div>
      <div className="mt-[80px] w-full relative z-50">
        <Footer scrollRef={scrollRef}/>
      </div>
    </main>
  );
}
