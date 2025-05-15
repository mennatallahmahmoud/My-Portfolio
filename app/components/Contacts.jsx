import Link from "next/link";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <main className="mb-14">
        <h2 className="text-white text-xl font-bold mb-1">Get In Touch</h2>
        <span className="block text-sm mb-2 text-white w-[80%]">Feel free to reach out for freelance, full-time, or collaboration opportunities.</span>
        <div className="mt-8 text-white">
          <motion.div
            initial={{ x: 100, skew: 10, opacity: 0 }}
            whileInView={{ x: 0, skew: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}>
            <Link href="https://wa.me/201091821803" target="_blank" className="relative w-fit flex items-start md:items-center gap-1.5 before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:bg-[#4aae20] before:rounded-tr-[20px] before:rounded-tl-[3px] before:rounded-br-[20px] before:rounded-bl-[3px] before:transition-all before:duration-1000 px-[20px] py-[10px] hover:before:w-full">
                <img src="/assests/whatsapp.svg" alt="Whatsapp Icon" className="contact-icon relative z-5 w-4 mt-1 md:mt-0"/>
                <p className="relative z-5 tracking-[1px] text-sm md:text-base">Reach out instantly via WhatsApp!</p>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, skew: 10, opacity: 0 }}
            whileInView={{ x: 0, skew: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}>
            <Link href="mailto:mennamahamed@gmail.com" target="_blank" className="relative w-fit mt-1 flex items-start md:items-center gap-1.5 before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:bg-[#4e5860] before:rounded-tr-[20px] before:rounded-tl-[3px] before:rounded-br-[20px] before:rounded-bl-[3px] before:transition-all before:duration-1000 px-[20px] py-[10px] hover:before:w-full">
                <img src="/assests/email.svg" alt="Email Icon" className="contact-iconrelative z-5 w-5 mt-1 md:mt-0"/>
                <p className="relative z-5 tracking-[1px] text-sm md:text-base">For business inquiries, please send me an Email.</p>
            </Link>
          </motion.div>
        </div>
    </main>
  )
}
