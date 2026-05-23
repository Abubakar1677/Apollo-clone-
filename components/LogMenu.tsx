"use client"

import {
  Globe2,
  LogIn,
  Search,
} from "lucide-react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const LogMenu = () => {

  const [loginOpen, setLoginOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (

    <ul className="flex gap-4 items-center font-medium">

      {/* SEARCH */}
      <li>

        <motion.div
          animate={{
            width: searchOpen ? 220 : 42,
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
          className="h-[42px] bg-white rounded-md overflow-hidden border border-gray-300 flex items-center"
        >

          {/* INPUT */}
          <AnimatePresence>

            {searchOpen && (

              <motion.input
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                type="text"
                placeholder="Search"
                className="w-full h-full px-4 text-black outline-none"
              />

            )}

          </AnimatePresence>

          {/* SEARCH BUTTON */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className={`
              min-w-[42px]
              h-full
              flex
              items-center
              justify-center
              transition-all
              duration-300

              ${
                searchOpen
                  ? "text-gray-500 hover:text-[#1e7680]"
                  : "text-white bg-[#1e7680] hover:bg-[#155c63]"
              }
            `}
          >
            <Search size={20} />
          </button>

        </motion.div>

      </li>

      {/* LANGUAGE */}
      <li className="hover:text-gray-200 cursor-pointer">
        <Globe2 size={20} />
      </li>

      {/* LOGIN */}
      <li
        className="relative hidden min-[1050px]:flex items-center gap-1 hover:text-gray-200 hover:underline cursor-pointer"
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

            <button className="flex items-center justify-center gap-2 w-full bg-[#008080] hover:bg-[#006d6d] p-2 rounded-sm text-white font-semibold">

              <LogIn size={20} />
              Log in

            </button>

          </div>

        )}

      </li>

    </ul>

  )
}

export default LogMenu