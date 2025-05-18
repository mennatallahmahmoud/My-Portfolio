import MyProjects from "../../data/data.json";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {

    const projects = MyProjects.projects.map((project) => (
        <motion.div key={project.id}
            initial={{ y: 50, opacity: 0}}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once:true, amount: 0 }}>
            <Link href={project.link} target="_blank">
                <div className="mt-4 text-white flex flex-col md:flex-row items-start justify-center gap-4 transition-all duration-700 bg-[#0000003b] hover:bg-[#0000006b] hover:-translate-x-3 p-7 rounded-[6px]">
                    <figure className="lg:flex-[60%] mt-1">
                        <img
                        src={project.img}
                        alt={project.title} className="w-44 rounded"/>
                    </figure>
                    <div>
                        <h2 className="text-lg font-bold mb-1 flex items-center">
                            <span>{project.title}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ms-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </h2>
                        <p className="mb-3 text-sm opacity-85">{project.desc}</p>
                        <div className="tools">
                            {project.tools.map((p, i) => (
                                <span key={i} className="bg-[#ffffff33] text-sm py-1 px-3 rounded-2xl me-2">{p}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    ))

  return (
    <main className="mb-14">
        <h2 className="text-white text-xl font-bold mb-2">Projects</h2>
        <div className="mt-8 ">
            {projects}
        </div>
        <div className="mt-8 text-white">
            <Link href="/assests/Mennat-Allah Mahmoud-Resume.pdf" target="_blank" className="resume-btn font-bold flex items-center transition-all duration-500 cursor-pointer">
                <span>View Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ms-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </Link>
            <Link href="/assests/Mennat-Allah Mahmoud-Resume.pdf" download target="_blank" className="download-btn font-bold flex items-center transition-all duration-500 cursor-pointer">
                <span>Download Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ms-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </Link>
        </div>
    </main>
  )
}
