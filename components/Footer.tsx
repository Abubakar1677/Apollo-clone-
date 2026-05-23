import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-[#1e7680] text-gray-300 mt-10 pt-5 border-t border-gray-800"'>
        <div className=' flex justify-evenly items-start'>
            <div className='text-center'>
                <h3 className='text-2xl font-semibold text-white p-2'>Apollo</h3>
                 <ul>
                        <li className=" hover:text-gray-200 hover:underline cursor-pointer">
                            <a href='/info/about'>
                                  About us
                            </a>
                            
                         
                        </li>

                         <li className=" hover:text-gray-200 hover:underline cursor-pointer p-2 ">
                            <a href='/info/contact'>
                                   Contact us
                            </a>
                           
                        </li>

                         <li className=" hover:text-gray-200 hover:underline cursor-pointer">
                            <a href='/info/govtPolicy'>
                                   Governance and policies
                            </a>
                         
                        </li>

                        <li className=" hover:text-gray-200 hover:underline cursor-pointer p-2">
                              Notice and takedown
                        </li>
                </ul>
            </div>

            <div className='text-center'>
                <h3 className='text-2xl font-semibold text-white p-2' >Cambridge University Library</h3>
                 <ul>
                        <li className=" hover:text-gray-200 hover:underline cursor-pointer">
                            <a href='https://www.lib.cam.ac.uk/accessibility'>
                                    Accessibility
                            </a>
                           
                        </li>

                         <li className=" hover:text-gray-200 hover:underline cursor-pointer p-2">
                            <a href='https://www.lib.cam.ac.uk/privacy-policy'>
                                     Privacy policy
                            </a>
                        
                        </li>

                         <li className=" hover:text-gray-200 hover:underline cursor-pointer">
                            <a href='https://www.openresearch.cam.ac.uk/copyright-licensing-citation'>
                                Copyright
                            </a>
                            
                        </li>

                </ul>
            </div>

                      <a
                        href="https://dataverse.nl/dataset.xhtml?persistentId=doi:10.34894/XP3HQ7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer inline-block"
                        >
                        <Image
                            src="/cts-trans.svg"
                            alt="Logo"
                            width={200}
                            height={30}
                            className="pointer-events-none relative z-50"
                        />
                        </a>
           
            <div>
                <Image
                    src="/Apollo.svg"
                    alt="Logo"
                    width={200}
                    height={30}
                    />
                    <Image
                    src="/core_sustaining_member_line.svg"
                    alt="Logo"
                    width={200}
                    height={30}
                    />
                    
                    
            </div>
            
            
        </div>
        
        <div className='bg-black flex-col justify-center text-center'>
            
            <span className=" hover:text-gray-200 hover:underline cursor-pointer">University of Cambridge </span> <span>© {new Date().getFullYear()} </span>
            <div>
                <span className=" hover:text-gray-200 hover:underline cursor-pointer">Cookie settings |</span>
                <span className=" hover:text-gray-200 hover:underline cursor-pointer"> Privacy policy | </span>
                <span className=" hover:text-gray-200 hover:underline cursor-pointer">Terms of Use </span>

              
            </div>

            
        </div>
    </footer>
  )
}


   
    
  



   
   
   
  