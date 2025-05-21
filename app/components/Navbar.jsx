"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Navbar({scrollRef}) {

    const menuBtnRef = useRef(null)
    const mainMenuRef = useRef(null)
    const navIcon = useRef(null)
    const [activeTab, setActiveTab] = useState(null)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
    
        const toggleMenu = (e) => {
            e.stopPropagation()
            mainMenuRef.current.classList.toggle("hidden")
            navIcon.current.classList.toggle("nav-icon")
        }
        const hideMenu = (e) => {
            if(!menuBtnRef.current.contains(e.target)) {
                mainMenuRef.current.classList.add("hidden");
                navIcon.current.classList.remove("nav-icon")
            }
        }
        const handleScroll = () => {
            if(window.scrollY >= 100) {
                setScrolled(true);
                
            } else {
                setScrolled(false);
            }
        }

        menuBtnRef.current.addEventListener("click", toggleMenu)
        document.addEventListener("click", hideMenu)
        window.addEventListener("scroll", handleScroll)
        scrollRef.current.addEventListener("click" , () => {
            setActiveTab(null)
        })

        return () => {
            menuBtnRef.current.removeEventListener("click", toggleMenu)
            document.removeEventListener("click", hideMenu)
            window.removeEventListener("scroll", handleScroll)
            scrollRef.current.removeEventListener("click" , () => {
                setActiveTab(null)
            })
        }

    }, [])


  return (
    <main className={`fixed w-full z-20 mx-auto transition-all duration-500 shadow-sm lg:shadow-none ${scrolled ? 'bg-[#012885] lg:bg-transparent' : ''}`}>
        <div className="container navbar bg-transparent mx-auto">
            <div className="navbar-start ms-5">
                <Link className="logo" href='/'>
                    <Image src="/assests/MY-LOGO.png" alt="My Logo" width={90} height={90}/>
                    <span className='sr-only'>Reload The Page</span>
                </Link>
            </div>
            <div className="navbar-end me-5">
                <div className="dropdown">
                    <div ref={menuBtnRef} className="relative menu-btn cursor-pointer lg:hidden">
                        <svg ref={navIcon} xmlns="http://www.w3.org/2000/svg" className="fill-white" height="32px" viewBox="0 -960 960 960" width="32px"><path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"/></svg>                
                    </div>  
                    <div ref={mainMenuRef} className="hidden">
                        <ul
                            className="main-menu absolute right-0 flex flex-col justify-evenly bg-white shadow-lg rounded-box z-1 mt-3 w-60 p-2">
                            <li id="about-nav" className={`${activeTab === 'about-nav' ? 'bg-[#012885] text-white' : ''} text-[#012885] text-center my-1 cursor-pointer shadow-sm transition-all duration-200 tracking-[0.5px] rounded hover:bg-[#012885] hover:text-white`}
                                onClick={() => {setActiveTab("about-nav")}}
                            ><a href="#about" className="block w-full h-full py-4 my-1">About Me</a></li>
                            <li id="projects-nav" className={`${activeTab === 'projects-nav' ? 'bg-[#012885] text-white' : ''} text-[#012885] text-center my-1 cursor-pointer shadow-sm transition-all duration-200 tracking-[0.5px] rounded hover:bg-[#012885] hover:text-white`}
                                onClick={() => {setActiveTab("projects-nav")}}
                            ><a href="#projects" className="block w-full h-full py-4 my-1">Projects</a></li>
                            <li id="skills-nav" className={`${activeTab === 'skills-nav' ? 'bg-[#012885] text-white' : ''} text-[#012885] text-center my-1 cursor-pointer shadow-sm transition-all duration-200 tracking-[0.5px] rounded hover:bg-[#012885] hover:text-white`}
                                onClick={() => {setActiveTab("skills-nav")}}
                            ><a href="#skills" className="block w-full h-full py-4 my-1">Skills</a></li>
                            <li id="certificates-nav" className={`${activeTab === 'certificates-nav' ? 'bg-[#012885] text-white' : ''} text-[#012885] text-center my-1 cursor-pointer shadow-sm transition-all duration-200 tracking-[0.5px] rounded hover:bg-[#012885] hover:text-white`}
                                onClick={() => {setActiveTab("certificates-nav")}}
                            ><a href="#certificates" className="block w-full h-full py-4 my-1">Certificates</a></li>
                            <li id="contact-nav" className={`${activeTab === 'contact-nav' ? 'bg-[#012885] text-white' : ''} text-[#012885] text-center my-1 cursor-pointer shadow-sm transition-all duration-200 tracking-[0.5px] rounded hover:bg-[#012885] hover:text-white`}
                                onClick={() => {setActiveTab("contact-nav")}}
                            ><a href="#contacts" className="block w-full h-full py-4 my-1">Contact Me</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </main>
  )
}
