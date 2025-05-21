import MySkills from '../../data/data.json';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Skills() {

  const skills = MySkills.skills.map((skill) => (
    <div key={skill.name} className='flex items-center justify-center text-white gap-2 bg-[#ffffff21] rounded-4xl w-fit transition-all duration-500 py-3 px-4 border-2 border-transparent hover:border-[#ffffffc2] hover:bg-[#ffffff3b]'>
      {skill.icon !== "" &&
        <Image src={skill.icon} alt={skill.name} width={32} height={20}/>
      }
      <span className='font-bold'>{skill.name}</span>
    </div>
  ))

  return (
    <main className="mb-14">
      <h2 className="text-white text-xl font-bold mb-2">Skills</h2>
      <motion.div className='mt-8 flex flex-wrap gap-3'
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        viewport={{ once:true, amount: 0.6 }}>
        {skills}
      </motion.div>
    </main>
  )
}
