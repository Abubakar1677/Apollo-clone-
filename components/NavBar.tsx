"use client"

import { Globe2, Key, LogIn, Search } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"


export default function Navbar() {

  const [aboutOpen, setAboutOpen] = useState(false)
  const [browseOpen, setBrowseOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

                  

  const aboutNav  = [
    {
      title: "About us",
      desc: "Detailed information about deposit processes into Apollo, including eligibility for inclusion in Apollo.",
      link: "/info/about",
      desc2:"Recent submissions",
    },
    {
      title:   "Governance and policies",
      desc: "Information on how to discover, reuse and cite data in Apollo.",
      link: "/info/govtPolicy",
       desc2:"Research data and Softwares",
    },
    {
      title:"DOI Policy",
      desc: "Detailed information about repository governance and an outline of key relevant policies. ",
      link: "/info/doiPolicy",
       desc2:"Theses",
    },
     {
      title:  "How-to deposit",
      desc: "Detailed information about deposit processes into Apollo, including eligibility for inclusion in Apollo.",
      link: "/info/deposit",
      desc2:"Recent submissions",
    },
    {
      title:   "Data reuse",
      desc: "Information on how to discover, reuse and cite data in Apollo.",
      link:"/info/dataReuse",
       desc2:"Research data and Softwares",
    },
    {
      title:  "Preservation",
      desc: "Detailed information about repository governance and an outline of key relevant policies. ",
      link: "/info/preserv",
       desc2:"Theses",
    },
    {
      title:    "Terms of Use",
      desc: "Information on how to discover, reuse and cite data in Apollo.",
      link: "/info/termsOfUse",
       desc2:"Research data and Softwares",
    },
    {
      title:  "Trustworthy repository",
      desc: "Detailed information about repository governance and an outline of key relevant policies. ",
      link: "/info/trust",
       desc2:"Theses",
    },
     {
      title:    "Service level",
      desc: "Detailed information about deposit processes into Apollo, including eligibility for inclusion in Apollo.",
      link:"/info/serviceLab",
      desc2:"Recent submissions",
    },
    {
      title:  "Privacy Statement",
      desc: "Information on how to discover, reuse and cite data in Apollo.",
      link:"/info/privacy",
       desc2:"Research data and Softwares",
    },
    {
      title:  "Contact us",
      desc: "Detailed information about repository governance and an outline of key relevant policies. ",
      link:"/info/contact",
       desc2:"Theses",
    },
  ]



 

  return (
      <div className="bg-red-600 w-full ">
         <div className="bg-black w-full px-6 py-3">
            <Image
                    src="/ucam.png"
                    alt="Logo"
                    width={150}
                    height={20}/>
           
                  
      </div>

        <header className="bg-[#1e7680]  text-white  shadow-md w-full">
          <div className="flex items-center justify-between mx-10 p-6">

            {/* left */}
            <div className="flex justify-between items-center gap-10">

              <div className="text-3xl hover:cursor-pointer">
                <a href="/">
                   <Image
                    src="/apollo_logo_alt.svg"
                    alt="Logo"
                    width={150}
                    height={20}/>
                </a>
               
                  
              </div>

              <div>
                <ul className="hidden md:flex gap-6 items-center font-medium">

                  {/* ABOUT DROPDOWN */}
                <li
                  className="relative flex items-center gap-1 hover:text-gray-200 cursor-pointer"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  About <span className="text-sm">▼</span>

                  {aboutOpen && (
                    <div className="absolute top-5 left-0 w-[210px]  bg-[#1e7680] shadow-xl rounded-sm z-50">

                      {aboutNav.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="block px-3 py-2 hover:bg-[#006d6d] "
                        >
                            {item.title}
                        
                        </a>
                      ))}

                    </div>
                  )}
                </li>

                  {/* OTHER LINKS */}
                  <li className="hover:text-gray-200 cursor-pointer">
                    Communities & Collections
                  </li>

                    <li
                      className="relative flex items-center gap-1 hover:text-gray-200 cursor-pointer"
                      onMouseEnter={() => setBrowseOpen(true)}
                      onMouseLeave={() => setBrowseOpen(false)}
                    >
                  Browse Apollo 
                  
                  <span className="text-sm">▼</span>

                  {browseOpen && (
                    <div className="absolute top-5 left-0 w-[200px] bg-[#1e7680] shadow-xl py-3 rounded-sm z-50">
                      {[
                        "By Author",
                        "By Title",
                        "By Subject",
                        "By Type",
                        "By Subject Category",
                      ].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-5 py-3 hover:bg-[#006d6d]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </li>

                  <li className="hover:text-gray-200 cursor-pointer">
                    Statistics
                  </li>

                </ul>
              </div>
            </div>

            {/* right */}
            <div>
              <ul className="hidden md:flex gap-6 items-center font-medium">

                <li className="hover:text-gray-200 cursor-pointer">
                  <Search size={20} />
                </li>

                <li className="hover:text-gray-200 cursor-pointer">
                  <Globe2 size={20} />
                </li>

                <li className="relative flex items-center gap-1 hover:text-gray-200 hover:underline cursor-pointer"
                      onMouseEnter={() => setLoginOpen(true)}
                      onMouseLeave={() => setLoginOpen(false)}
                        >
                  Log In
                  <span className="text-sm">▼</span>

                    {loginOpen && (
                        <div className="absolute top-6 right-[-15px] w-[300px] bg-white shadow-xl rounded-sm z-50 p-5 flex flex-col gap-3">

                    <div className="bg-[#bee0e0] rounded-sm p-3">
                      <p className="text-[#008080] text-sm">
                        Please note that log in via username/password is only available to Repository staff.
                      </p>
                    </div>

                    <button className="flex items-center justify-center gap-2 w-full bg-[#008080] hover:bg-[#006d6d] p-2 rounded-sm text-white font-semibold">
                      <LogIn size={20} />
                      Log in with Shibboleth
                    </button>

                    <div className="flex flex-col gap-2">
                      <input
                        placeholder="Email"
                        className="p-2 border rounded text-black"
                      />
                      <input
                        placeholder="Password"
                        type="password"
                        className="p-2 border rounded text-black"
                      />


                    </div>

                    <div>
                      
                        <button className="flex items-center justify-center gap-2 w-full bg-[#008080] hover:bg-[#006d6d] p-2 rounded-sm text-white font-semibold">
                          <LogIn size={20} />
                          Log in 
                        </button>
                    </div>

                    <div className="py-4 ">
                      <p className="text-gray-600 hover:bg-gray-400">Have you forgotten your password ? </p>
                    </div>

                    

                  </div>
                      )}
                </li>

              </ul>
            </div>

          </div>
        </header>
    </div>
   
  )
}