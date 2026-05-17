import React from 'react'

const Trust = () => {
  return (
    <div className=" mt-10 mx-15 flex-col justify-center text-black  leading-7 ">
        <div>
            <h1 className="text-2xl font-serif  ">
                Trustworthy Digital Repository
            </h1>
            <h3 className="text-[20px] font-serif  ">
                What makes a repository trustworthy?
            </h3>
        </div>
        
    
        <blockquote  >
              <div className="relative max-w-2xl mx-auto mt-16 flex justify-center ">
                    
                    {/* Quote Circle */}
                    <div className="absolute -top-6 left-25 w-10 h-10 rounded-full bg-[#006d6f] flex items-center justify-center text-white text-2xl font-bold shadow-md">
                        “
                    </div>

                    {/* Card */}
                    <div className=" shadow-2xl rounded-sm bg-white w-3/4 px-15 py-10 " >
                        
                        <p className="italic   text-[#2f2f2f]">
                        A trusted digital repository is one whose mission is to provide
                        reliable, long-term access to managed digital resources to its
                        designated community, now and in the future.
                        </p>

                        {/* Divider */}
                        <div className="border-t border-gray-300 my-3"></div>

                        {/* Citation */}
                        <p className="italic  text-gray-600 ">
                        — Definition in Trusted Digital Repositories: Attributes and
                        Responsibilities. An RLG-OCLC Report
                        </p>
                    </div>
                    </div>




        </blockquote>

        <div className='mt-8'>
            <p className='mt-2'>
                Apollo is the institutional repository of the University of Cambridge. Apollo's core mission
                is to provide access, store and preserve the University’s research outputs for the long term. 
                Apollo underpins the commitment of the University of Cambridge to preserve for the long-term and 
                provide access to its research as widely as possible in order to contribute to society as well as 
                to academic advancement. 
            </p>
        </div>

        <div>
            <h1 className="text-2xl font-serif mt-3" >
                CoreTrustSeal Certification
            </h1>
            <p className='mt-2'>
                Apollo achieved the CoreTrustSeal certification in May 2023. CoreTrustSeal is a peer-reviewed certification that measures our application 
                against its <b><a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Trustworthy Data Repositories Requirements catalogue and procedures.</a></b>
            </p>
            <p className='mt-2'>
                CoreTrustSeal (CTS) is an international, community based, non-governmental, and non-profit organization promoting sustainable and trustworthy
                 data infrastructures. The CoreTrustSeal, launched in 2017, defines requirements and offers core level certification for Trustworthy Data
                  Repositories holding data for long-term preservation. It is the culmination of a cooperative effort between the Data Seal of Approval (DSA)
                   and the<a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> World Data System</a> of the International Science Council (WDS), under the umbrella of the <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> Research Data Alliance </a>(RDA), to harmonize 
                   their data repository certifications. 
            </p>

            <h2 className='mt-2 text-[18px]'>
                What does this mean for Apollo?
            </h2>
            <p className='mt-2'>
                CoreTrustSeal is a self-assessment status for repositories, awarded based on meeting 16 requirements that reflect the characteristics of trustworthy repositories. 
                The self-assessment has involved a detailed appraisal of our policies, internal procedures and documentation and has led to substantial improvements, and further 
                development and enhancement of our public documentation and users guidance. 
            </p>
            <p className='mt-2'>
                Following certification, we are in a much stronger position to demonstrate the value of Apollo to key internal stakeholders, as well as our research communities. 
                More importantly, CTS provides us with the opportunity to not only demonstrate the trustworthiness and robustness of the systems and processes involved in curating, 
                making available, and preserving the University’s research outputs for the long-term, but also to meet funder requirements which are increasingly requiring more open 
                practices and the deposit of publicly funded outputs in repositories with a trustworthy status. 
            </p>
            <h1 className="text-2xl font-serif mt-3" >
                Relevant standards of trust
            </h1>
            <p className='mt-2'>
                The CoreTrustSeal certification is envisioned as the first step in a global framework for repository certification which includes the extended level certification 
                (nestor-Seal DIN 31644) and the formal level certification (ISO 16363). Ultimately, CoreTrustSeal will also endeavour to provide core level certification for other 
                research entities such as data services and software.
            </p>

            <h1 className="text-2xl font-serif mt-3" >
                Further information
            </h1>
            <ul>
                  <li>
                <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>
                    Apollo CoreTrustSeal peer-reviewed certification (full application)
                </a>
            </li>
            <li>
                <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>
                    Trusted Digital Repositories: Attributes and Responsibilities. An RLG-OCLC Report
                </a>
            </li>
            <li>
                <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>
                    COAR Community Framework for Good Practices in Repositories
                </a>
            </li>

            </ul>
          

            <h1 className="text-2xl font-serif mt-3" >
                Acknowledgement
            </h1>
            <p className='mt-2'>
                We would like to acknowledge the support of <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>FAIRsFAIR</a> in our CoreTrustSeal certification journey. In 2020 Apollo was selected 
                for FAIRsFAIR Trust & FAIR certification support. FAIRsFAIR is playing a key role in the contribution to policies and practices for
                 broader adoption of FAIR practices, and in the development of standards for FAIR certification of repositories. Through an Open Call 
                 run between July and August 2019, Apollo was chosen by FAIRsFAIR to be <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>supported on the path towards achieving CoreTrustSeal certification.</a> 
            </p>
        </div>
      
        
             
        
    </div>
  )
}

export default Trust
