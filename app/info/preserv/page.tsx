import Image from 'next/image'
import React from 'react'

const preservation = () => {
  return (
    <div className=" mt-20 mx-20 flex-col justify-center  text-black text-[15px]  ">
         <div>
             <h1 className="text-2xl font-serif m-2 ">
               Preservation of research outputs in Apollo
             </h1>
                 <p className='mt-2'>
                 Apollo, the University of Cambridge’s institutional repository, underpins the 
                 University’s commitment to preserve for the long-term and provide access as widely
                  as possible to its research outputs to contribute to society as well as to academic advancement. 
                 </p>
                <h1 className="text-2xl font-serif mt-4 ">
                    Apollo publication workflow
                </h1>
                
         </div>
         <div className='mt-10 flex justify-center'>
           <Image
               src="/ApolloDeposit.svg"
               alt="Logo"
               width={1500}
               height={300}
               />
         </div>
   
         <div>
                <h1 className="text-2xl font-serif  ">
              Depositing research outputs in Apollo
             </h1>
                <p className='mt-2'>
                    The <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>How-to deposit guidance page </a> outlines the steps depositors need to complete to 
                    deposit their content within Apollo. Further information on this topic can be found 
                    on the <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Open Access website </a>and the  <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Research data website.</a> 
                 </p>
                <p className='mt-2'>
                    The deposit route, workflow, and checklists depend on the type of material:
                </p>
                  
                  <ul className="list-disc pl-10 text-[17px] mt-2">
   
                       <li>Deposit of open access outputs, PhD theses, and research datasets is performed directly by users with access to the University’s CRIS system,  <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Symplectic Elements </a> (behind institutional login).</li>
                        <li>Deposit of scholarly outputs other than open access material are deposited in batch using command line tools available to Repository administrators. Depositors are responsible for supplying metadata in the format and quality requested. </li>
   
                       
                 </ul>

                 <p> Alternative methods for depositing research outputs are available for depositors that do not have access to Symplectic Elements, including via the  <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>repository's support email or as described in UIS's Microsoft Onedrive page.</a> </p>
   
                 
   
         <div className='mt-3 leading-10'>
            <h1 className="text-2xl font-serif ">
                Archival and management procedures in Apollo
             </h1>
                 <p className='mt-2'>
                 Apollo’s core activities include the preservation, curation, and dissemination of the research outputs of the University with the aim of guaranteeing that all content entrusted to it by depositors remains suitable for the needs of its primary users now and in the future. In this capacity, Apollo services
                  actively work to promote and facilitate: 
                 </p>

                <ul className="list-disc pl-10 text-[17px] mt-2">
                    <li>Secure storage of data</li>
                    <li>Reliability and usability of data</li>
                    <li>Quality and integrity of data</li>
                    <li>Publication of and access to data</li>
                </ul>
                <p className='mt-2'>Once a research output is published in Apollo, a persistent Digital Object Identifier is minted and associated with the output.</p>
                <p className='mt-2'>The primary means by which repository users can comment on or rate item metadata is by contacting the repository’s support team. Feedback and suggestions received in this respect are reviewed 
                    regularly by the relevant repository teams, and actioned where appropriate. More information about the repository's quality assurance processes is provided in the Research Data page's quality
                     assurance section. </p>
                 <p className='mt-2'>The CUL Digital Preservation team is responsible for the ingest workflows, preservation storage, and preservation planning. The team works with the Open Research Systems and Scholarly Communications teams to 
                    ensure services the Digital Preservation team creates and maintains are fit for purpose. </p>
                <p className='mt-2'>The vast majority of content in Apollo is openly available. However, there are situations where content is subject to different levels of security or access restrictions. Several dissemination workflows are available 
                    within the repository to deal with such situations. </p>
                <p className='mt-2'>For open access content, access levels are set automatically upon submission review based on journal policies information available via services such as Sherpa/RoMEO and then reviewed by the Open Access team prior to publication in Apollo. </p>
                <p>Apollo users can request access to content that is under embargo. While copyright prevents the repository from making embargoed content available, authors are entitled to distribute embargoed manuscripts on an individual-to-individual basis (see Apollo 
                    Request a Copy for full details about this managed service). Management of access requests for embargoed content is facilitated through Apollo's Request a copy service.</p>
                 <h1 className="text-2xl font-serif">
                    Policy
                 </h1>
                 <p>Detailed information about Apollo collection management processes can be found in the Apollo Repository Digital Preservation Policy.</p>
                
   
         </div>
           
            </div>
       </div>
  )
}

export default preservation