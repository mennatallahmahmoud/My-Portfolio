import Link from "next/link";
import { motion } from "framer-motion";

export default function About({nextRef}) {

  return (
    <motion.main className="mb-14"
        initial={{ x: 50, opacity: 0}}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once:true, amount: 0 }}>
      <p className="text-white p-5 opacity-90 leading-[27px]">
          Hello! I’m Mennat-Allah, a passionate Frontend Developer with a background in a different field, but a strong drive led me to switch careers and dive into the world of web development since 2023.
          <br/><br/>
          Since then, I’ve been focused on learning and building projects using technologies like JavaScript, React.js, and Next.js.
          Throughout my learning journey, I developed several practical projects, which are available on my <Link href={`https://github.com/mennatallahmahmoud`} target="_blank" className="font-bold cursor-pointer">GitHub</Link>.
          <br/><br/>
          I’m currently open to internships, junior-level roles, and freelancing, where I can contribute to meaningful projects, collaborate with experienced developers, and continue growing in the field of Frontend Development.
          My goal is to turn creative ideas into clean, responsive, and user-friendly interfaces while constantly improving my skills.
      </p>
      <Link ref={nextRef} href="#projects" className="text-white font-bold justify-center items-center hidden md:flex mt-5">
          <span className="tracking-[1px]">What’s Next?</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ms-3 explore-btn">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
      </Link>
    </motion.main>
  )
}
