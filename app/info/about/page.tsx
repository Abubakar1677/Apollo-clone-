import Image from 'next/image'
import React from 'react'

const AboutUs = () => {

    const faqs = [
    {
      question: "Who is responsible for Apollo?",
      answer:
        "Apollo itself is managed by the Open Research Systems team which is part of Digital Initiatives and based in Cambridge University Library. Teams within Open Research at the University Library are responsible for managing and curating the content available on Apollo.",
    },
    {
      question:
        "I'm a researcher at Cambridge - do I need to deposit my research to Apollo?",
      answer:
        "The Open Research site will help you to decide if you need to deposit your research output and the best route to do so.",
    },
    {
      question:
        "I believe content on Apollo is infringing my copyright or other rights. What should I do?",
      answer:
        "Please see our Notice and takedown policy page.",
    },
    {
      question: "How can I contact Apollo?",
      answer:
        "Details of the teams responsible for Apollo and its content are available on our Contact us page.",
    },
  ]

  return (
     <div className=" mt-10 mx-15 flex-col justify-center  text-gray-600 ">
      <div>
          <h1 className="text-2xl font-serif ">
             What is Apollo?
          </h1>
              <p className='mt-2'>
              Apollo is the institutional repository of the <a href='https://www.cam.ac.uk/' target='_blank'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>University of Cambridge.</a> It was established
              in 2003 as a service to share the research outputs of the University. The Repository is 
              committed to store and preserve the University’s research outputs. Research outputs can
                include, but are not limited to, publications, conference proceedings, book chapters, 
                monographs, theses, various forms of research data (video recordings, spreadsheets,
                computational scripts, code, images etc.), presentations and others. 
              </p>
              <p className='mt-2'>
                As outlined in <a href='/info/termsOfUse' target='_blank'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Apollo’s terms of use,</a> the Repository is responsible for the curation of 
                deposited research outputs, as well as for storing and sharing those outputs according to 
                the guidelines of research funders and abiding to principles and recommendations from <a href='https://doi.org/10.17863/CAM.71114'  target='_blank' className='text-[#1c617c] hover:underline hover:text-[#124154]'>Cambridge 
                University Library’s (CUL) Digital Preservation Policy.</a>  Apollo underpins the commitment of the
                 University of Cambridge to preserve for the long-term and provide access to its research 
                 as widely as possible in order to contribute to society as well as to academic advancement. 
                 Its primary focus is on providing open access to the University’s research publications. 
                 For further information, see the relevant  <a href='https://www.openaccess.cam.ac.uk/' target='_blank'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Open Access pages.</a> 
              </p>
      </div>

      <div className='mt-4' >
        <h1 className="text-2xl font-serif ">Benefits of using Apollo</h1>
        <span className='flex justify-center'>
            <Image
            src='/Apollo-benefits.svg'
            alt="Logo"
            width={1000}
            height={200}
          />
        </span>
       
      </div>

      <div>
         <h1 className="text-2xl font-serif mt-2 mb-2">Governance and policies</h1>
          <p>Our <a href='/info/govtPolicy'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Governance and Policies </a> page contains further information on the governance structure and relevant policies. </p>
            <div className='mt-4'>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-sm border border-gray-300"
                  >
                    {/* Question */}
                    <div className="bg-gray-100 px-8 py-5  text-sky-700">
                      <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>
                        {faq.question}
                      </a>
                      
                    </div>

                    {/* Answer */}
                    <div className="border-t border-gray-300 bg-white px-8 py-2 leading-9 text-gray-800">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
           
      </div>

          <div className="mt-6 px-14 py-5">
        <div className="max-w-5xl">

          {/* Information About Apollo */}
          <section className="mb-10">
            <h1 className="text-2xl font-normanl mb-2  text-black">
              Information about Apollo
            </h1>

            <ul className="list-disc pl-6  leading-7">
              <li>
                <a
                  href="/info/contact"
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  Contact us
                </a>
              </li>

              <li>
                <a
                  href="/info/govtPolicy"
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  Apollo policies and governance
                </a>
              </li>

              <li className="text-black">Related links</li>

              <div className="ml-4 mt-1">
                <li>
                  <a
                    href="https://v2.sherpa.ac.uk/id/repository/109"
                    className="text-[#1c617c] hover:text-[#124154] hover:underline"
                  >
                    Apollo record at the OpenDOAR directory
                  </a>
                </li>

                {/* re3data image */}
                <div className="mt-2 mb-2">
                  <Image
                    src="/Apollo2.svg"
                    alt="Logo"
                    width={280}
                    height={120}
                  />
                </div>

                <li>
                  <a
                    href="https://doi.org/10.25504/FAIRsharing.38c26a"
                    target='_blank'
                    className="text-[#1c617c] hover:text-[#124154] hover:underline"
                  >
                    Apollo record at Fairsharing.org
                  </a>
                </li>

                <div className="mt-2 text-[17px] text-black">
                   <Image
                    src="/"
                    alt="GBE – FAO AGRIS data provider 2025"
                    width={300}
                    height={20}
                  />
                  
                </div>
              </div>
            </ul>
          </section>

          {/* Policies */}
          <section className="mb-3">
            <h1 className="mb-2 text-2xl font-normal text-black">
              Policies
            </h1>

            <ul className="list-disc pl-6 text-[17px] leading-7">
              <li>
                <a
                  href="/info/preserv"
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  Apollo repository preservation policy
                </a>
              </li>

              <li>
                <a
                  href="/info/termsOfuse"
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  Terms of use
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  Notice and takedown policy
                </a>
              </li>

              <li>
                <a
                  href="/info/doiPolicy"
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  DOI policy
                </a>
              </li>

              <li>
                <a
                  href="/info/serviceLab"
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  Apollo repository service level
                </a>
              </li>
            </ul>
          </section>

          {/* Organisations */}
          <section>
            <h1 className="mb-2 text-2xl font-normal text-black">
              Organisations
            </h1>

            <ul className="list-disc pl-6 text-[17px] leading-7">
              <li>
                <a
                  href="https://www.cam.ac.uk/"
                  target='_blank'
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  University of Cambridge
                </a>
              </li>

              <li>
                <a
                  href="https://www.lib.cam.ac.uk/"
                  target='_blank'
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  Cambridge University Library
                </a>
              </li>

              <li>
                <a
                  href="https://osc.cam.ac.uk/"
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  Open Research
                </a>
              </li>

              <li>
                <a
                  href="/info/govtPolicy"
                  className="text-[#1c617c] hover:text-[#124154] hover:underline"
                >
                  Open Research Systems
                </a>
              </li>
            </ul>
          </section>

        </div>
      </div>

    </div>
  )
}

export default AboutUs