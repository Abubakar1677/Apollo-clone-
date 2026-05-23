"use client"

import {
  Globe2,
  LogIn,
  Search,
  Menu,
  X,
} from "lucide-react"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LogMenu from "./LogMenu"

export default function Navbar() {

  const [aboutOpen, setAboutOpen] = useState(false)
  const [browseOpen, setBrowseOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  // SEARCH STATE


  const aboutNav = [
    {
      title: "About us",
      link: "/info/about",
    },
    {
      title: "Governance and policies",
      link: "/info/govtPolicy",
    },
    {
      title: "DOI Policy",
      link: "/info/doiPolicy",
    },
    {
      title: "How-to deposit",
      link: "/info/deposit",
    },
    {
      title: "Data reuse",
      link: "/info/dataReuse",
    },
    {
      title: "Preservation",
      link: "/info/preserv",
    },
    {
      title: "Terms of Use",
      link: "/info/termsOfUse",
    },
    {
      title: "Trustworthy repository",
      link: "/info/trust",
    },
    {
      title: "Service level",
      link: "/info/serviceLab",
    },
    {
      title: "Privacy Statement",
      link: "/info/privacy",
    },
    {
      title: "Contact us",
      link: "/info/contact",
    },
  ]

  return (
    <div className="w-full">

      {/* TOP BLACK BAR */}
      <div className="bg-black w-full px-6 py-3">

        <Image
          src="/ucam.png"
          alt="Logo"
          width={150}
          height={20}
        />

      </div>

      {/* MAIN NAVBAR */}
      <header className="bg-[#1e7680] text-white shadow-md w-full">

        <div className="flex items-center justify-between px-6 lg:px-10 py-6">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-10">

            {/* LOGO */}
            <a href="/" className="hover:cursor-pointer">

              <Image
                src="/apollo_logo_alt.svg"
                alt="Logo"
                width={150}
                height={20}
              />

            </a>

            {/* DESKTOP NAV */}
            <div className="hidden min-[1050px]:flex">

              <ul className="flex gap-6 items-center font-medium">

                {/* ABOUT */}
                <li
                  className="relative flex items-center gap-1 hover:text-gray-200 cursor-pointer"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  About
                  <span className="text-sm">▼</span>

                  {aboutOpen && (

                    <div className="absolute top-5 left-0 w-[230px] bg-[#1e7680] shadow-xl rounded-sm z-50">

                      {aboutNav.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="block px-4 py-3 hover:bg-[#006d6d]"
                        >
                          {item.title}
                        </a>
                      ))}

                    </div>

                  )}

                </li>

                {/* COMMUNITIES */}
                <li className="hover:text-gray-200 cursor-pointer">
                  Communities & Collections
                </li>

                {/* BROWSE */}
                <li
                  className="relative flex items-center gap-1 hover:text-gray-200 cursor-pointer"
                  onMouseEnter={() => setBrowseOpen(true)}
                  onMouseLeave={() => setBrowseOpen(false)}
                >
                  Browse Apollo
                  <span className="text-sm">▼</span>

                  {browseOpen && (

                    <div className="absolute top-5 left-0 w-[220px] bg-[#1e7680] shadow-xl py-3 rounded-sm z-50">

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

                {/* STATISTICS */}
                <li className="hover:text-gray-200 cursor-pointer">
                  Statistics
                </li>

              </ul>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* SEARCH + GLOBE */}
            <LogMenu />

            {/* MOBILE MENU BUTTON */}
            <div className="min-[1050px]:hidden">

              <button onClick={() => setMobileMenu(!mobileMenu)}>

                {mobileMenu ? (
                  <X size={32} />
                ) : (
                  <Menu size={32} />
                )}

              </button>

            </div>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>

  {mobileMenu && (

    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-[1050px]:hidden overflow-hidden bg-[#1e7680] text-white"
    >

      <div className="px-8 pb-8 pt-2">

        <ul className="flex flex-col gap-5 font-medium">

          {/* ABOUT */}
          <li>

            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full flex items-center justify-between hover:text-gray-200"
            >
              <span>About</span>

              <motion.span
                animate={{ rotate: aboutOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm"
              >
                ▼
              </motion.span>

            </button>

            <AnimatePresence>

              {aboutOpen && (

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >

                  <div className="flex flex-col mt-3 ml-4 gap-3 text-[17px]">

                    {aboutNav.map((item, index) => (

                      <a
                        key={index}
                        href={item.link}
                        className="hover:text-gray-200"
                      >
                        {item.title}
                      </a>

                    ))}

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </li>

          {/* COMMUNITIES */}
          <li className="hover:text-gray-200 cursor-pointer">
            Communities & Collections
          </li>

          {/* BROWSE */}
          <li>

            <button
              onClick={() => setBrowseOpen(!browseOpen)}
              className="w-full flex items-center justify-between hover:text-gray-200"
            >
              <span>Browse Apollo</span>

              <motion.span
                animate={{ rotate: browseOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm"
              >
                ▼
              </motion.span>

            </button>

                <AnimatePresence>

                  {browseOpen && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >

                      <div className="flex flex-col mt-3 ml-4 gap-3 text-[17px]">

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
                            className="hover:text-gray-200"
                          >
                            {item}
                          </a>

                        ))}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </li>

              {/* STATISTICS */}
              <li className="hover:text-gray-200 cursor-pointer">
                Statistics
              </li>

            </ul>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

    </div>
  )
}