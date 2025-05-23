"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Sidebar({scrollRef, nextRef}) {

    const [activeTab, setActiveTab] = useState(null)

    useEffect(() => {
        scrollRef.current.addEventListener("click" , () => {
            setActiveTab(null)
        })
        nextRef.current.addEventListener("click", () => {
            setActiveTab("projects")
        })

        return () => {
            scrollRef.current.removeEventListener("click" , () => {
                setActiveTab(null)
            })
            nextRef.current.removeEventListener("click", () => {
                setActiveTab("projects")
            })
        }
    }, [scrollRef])

    return (
        <motion.main className="relative lg:fixed w-[100%] lg:w-1/2"
            initial={{ x: -50, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once:true, amount: 0 }}>
            <div className="hero-container relative bg-cover object-cover bg-center">
                <div className="content text-white px-10 lg:px-20">
                    <div className="text">
                        <h1 className="text-3xl font-bold tracking-tight mb-4">Hello,<br/>I'm Mennat-Allah</h1>
                        <p className="opacity-80 text-sm leading-[20px]">
                            A dedicated Frontend Developer focused on building clean, responsive interfaces, eager to grow and contribute to impactful experiences
                        </p>
                    </div>
                    <ul className="hidden lg:flex lg:flex-col lg:justify-evenly mt-10">
                        <li className={`${activeTab === 'about' ? 'active' : ''} py-1 text-sm cursor-pointer transition-all duration-200 tracking-[0.5px] opacity-50 hover:opacity-100 hover:translate-x-4`}
                            onClick={() => setActiveTab('about')}
                        ><a href="#about" className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-white me-2' height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-440v-80h560v80H200Z"/></svg>
                            About Me</a></li>
                        <li className={`${activeTab === 'projects' ? 'active' : ''} py-1 text-sm cursor-pointer transition-all duration-200 tracking-[0.5px] opacity-50 hover:opacity-100 hover:translate-x-4`}
                            onClick={() => setActiveTab('projects')}
                        ><a href="#projects" className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-white me-2' height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-440v-80h560v80H200Z"/></svg>
                            Projects</a></li>
                        <li className={`${activeTab === 'skills' ? 'active' : ''} py-1 text-sm cursor-pointer transition-all duration-200 tracking-[0.5px] opacity-50 hover:opacity-100 hover:translate-x-4`}
                            onClick={() => setActiveTab('skills')}
                        ><a href="#skills" className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-white me-2' height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-440v-80h560v80H200Z"/></svg>
                            Skills</a></li>
                        <li className={`${activeTab === 'certificates' ? 'active' : ''} py-1 text-sm cursor-pointer transition-all duration-200 tracking-[0.5px] opacity-50 hover:opacity-100 hover:translate-x-4`}
                            onClick={() => setActiveTab('certificates')}
                        ><a href="#certificates" className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-white me-2' height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-440v-80h560v80H200Z"/></svg>
                            Certificates</a></li>
                        <li className={`${activeTab === 'contact' ? 'active' : ''} py-1 text-sm cursor-pointer transition-all duration-200 tracking-[0.5px] opacity-50 hover:opacity-100 hover:translate-x-4`}
                            onClick={() => setActiveTab('contact')}
                        ><a href="#contacts" className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-white me-2' height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-440v-80h560v80H200Z"/></svg>
                            Contact Me</a></li>
                    </ul>
                    <ul className='flex lg:justify-start mt-12'>
                        <li className='me-3'>
                            <Link href="https://github.com/mennatallahmahmoud" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} height={"20px"} className='fill-white opacity-50 transition-all duration-1000 hover:opacity-100' viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                <span className='sr-only'>Visit My Github Profile</span>
                            </Link>
                        </li>
                        <li className='me-3'>
                            <Link href="https://www.linkedin.com/in/mennatallahmahmoud" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={"20px"} height={"20px"} className='fill-white opacity-50 transition-all duration-1000 hover:opacity-100' viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>                        
                                <span className='sr-only'>Visit My LinkedIn Profile</span>
                            </Link>
                        </li>
                        <li className='me-3'>
                            <Link href="https://www.codewars.com/users/mennahamed" target='_blank'>
                                <Image src='/assests/codewars.svg' alt='Codewars Profile' width={20} height={20} className='opacity-50 transition-all duration-1000 hover:opacity-100'/>
                                <span className='sr-only'>Visit My Codewars Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.main>
    )
}
