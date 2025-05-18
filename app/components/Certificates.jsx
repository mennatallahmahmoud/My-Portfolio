"use client";

import Link from "next/link";
import { useRef } from "react";

export default function Certificates() {

  const certificateRef = useRef(null)

  return (
    <main className="mb-14">
        <h2 className="text-white text-xl font-bold mb-2">Certificates</h2>
        <div className="mt-8 text-white">
            <h3 className="text-lg font-bold mb-1">ITI UI/UX Development Track</h3>
            <span className="block w-[80%] mb-4 opacity-90">Information Technology Institute (ITI) – Ministry of Communications and Information Technology</span>
            <span className="block mb-6"><span className="font-bold">Duration: </span>From May 19, 2024 to October 09, 2024</span>
            <button className="certificate-btn font-bold flex items-center transition-all duration-500 hover:opacity-100 cursor-pointer"
              onClick={() => {
                certificateRef.current.classList.remove("hidden")
              }}>
                <span>View Certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ms-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </button>
            <div ref={certificateRef} className="relative hidden">
              <iframe src="/assests/iti-certificate.pdf" className="w-full h-[400px] lg:h-[600px] ">ITI Certificates</iframe>
              <Link href="/assests/iti-certificate.pdf" download className="absolute flex items-center font-bold bottom-2.5 left-1/2 -translate-x-1/2 transition-all duration-500 bg-[#0055a6] hover:bg-[#002d81] mb-3 px-10 py-2 rounded-md cursor-pointer">Download
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3 ms-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
              <button className="absolute top-20 right-15 cursor-pointer transition-all duration-500 bg-[#0000006b] hover:bg-red-600 rounded-md "
                onClick={() => {
                  certificateRef.current.classList.add("hidden")
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-8 p-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
        </div>
    </main>
  )
}
