import Link from "next/link";

export default function Certificates() {
  return (
    <main className="mb-14">
        <h2 className="text-white text-xl font-bold mb-2">Certificates</h2>
        <div className="mt-8 text-white">
            <h3 className="text-lg font-bold mb-1">ITI UI/UX Development Track</h3>
            <span className="block w-[80%] mb-4 opacity-90">Information Technology Institute (ITI) – Ministry of Communications and Information Technology</span>
            <span className="block mb-6"><span className="font-bold">Duration: </span>From May 19, 2024 to October 09, 2024</span>
            <Link href="https://drive.google.com/file/d/1HfyyzfJOHuCsNoMG3i1V_Msg2RZbfNye/view?usp=sharing" target="_blank" className="certificate-btn font-bold flex items-center transition-all duration-500 hover:opacity-100">
                <span>View Certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ms-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </Link>
        </div>
    </main>
  )
}
