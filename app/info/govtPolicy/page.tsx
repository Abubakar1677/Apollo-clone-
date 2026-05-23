import Image from 'next/image'
import React from 'react'

const GovtPolicy = () => {
     const boxes = [
    {
      title: "Repository preservation",
      headline:"Apollo repository digital preservation policy",
      parag1: "An overview of Apollo's digital preservation policy outlining how research outputs deposited in the repository are managed and preserved is publicly available. ",
      parag2:"This policy is part of a wider digital preservation policy for Cambridge University Libraries. ",
      linktext: "Apollo preservation page",
      href:"/info/preserv"
     
    },
    {
      title: "CUL digital preservation policy",
      headline:"CUL digital preservation policy",
      parag1: " Cambridge University Libraries (CUL) wider Digital Preservation Policy outlines the approaches to preserving digital collection materials held by Cambridge University Libraries.",
      parag2:"These policies sit within a broad policy landscape determined by Cambridge University Library, the University of Cambridge, the higher education sector, research funders, UK Government etc. ",
      linktext: "CUL digital preservation policy",
       href:"https://doi.org/10.17863/CAM.71114"
     
    },
   

    {
       title: " DOI policy",
      headline:"Persistent identifiers in Apollo",
      parag1: " Qualifying material deposited in Apollo may be assigned a persistent identifier in the form of a Digital Object Identifier (DOI).  ",
      parag2:"This policy outlines the criteria by which material is assessed - both in terms of the full text content and the associated metadata - and how requests to update material once a DOI has been granted are handled.  ",
      linktext: "DOI policy",
       href:"/info/doiPolicy"
    },
    {
      title: "Repository service level",
      parag1: "The service level definition for Apollo, the University of Cambridge institutional repository.  ",
      linktext: "Service level definition",
       href:"/info/serviceLab"
     
    },
    {
      title: "Repository Terms of Use",
      parag1: "The Repository Terms of Use (Terms of Use) forms the framework that determines how members of the University and the community of end-users interact with Apollo.  ",
      linktext: "Repository Terms of Use",
       href:"/info/termsOfUse"
     
    },
    {
       title: "Notice and takedown policy",
      parag1: "Outlines the process by which parties who feel that material deposited in Apollo infringes their rights may act.  ",
      linktext: "Notice and takedown policy",
       href:"/info/preserv"
    },
  ]
  return (
    <div className=" mt-10 mx-15 flex-col justify-center  text-gray-600 ">
            <div>
                <h1 className="text-2xl font-serif text-black ">
                   Open Research Systems team
                </h1>
                    <p className='mt-2'>
                    The ORS team is part of the Digital Iniatives Directorate (Digital Initiatives) 
                    within <a href='https://www.lib.cam.ac.uk/' target='_blank'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Cambridge University Library</a> . 
                    The ORS team is responsible for managing Apollo (Repository service and technical aspects of the underpinning 
                    software platform), and its integrations with other University systems.
                    </p>
                    <p className='mt-4'>
                        In addition to service ownership, the ORS team is responsible for technical & software development,
                         maintenance and platform upgrades of Apollo and associated integrations, together with user support.  
                    </p>
                    <p className='mt-4'>
                        While ownership of the Repository service lies within ORS, other units are involved in managing the 
                        technical infrastructure and operational aspects of Apollo. The technical infrastructure and 
                        storage are owned by Digital Initiatives and managed by the Digital Services team. 
                    </p>

                <h1 className="text-2xl font-serif text-black ">
                  Digital Initiatives
                </h1>
                    <p className='mt-2'>
                    The Digital Initiatives Directorate brings together all the teams responsible for delivering the digital 
                    services provided by Cambridge University Library. The DevOps team are directly responsible for managing
                     the technical infrastructure that underpins Apollo, including the primary and multicopy/redundancy 
                     storage servers based in the Universitys two data centres. 
                    </p>
                    <p className='mt-4'>
                        The data centres are the responsibility of <a href='https://www.uis.cam.ac.uk/' target='_blank'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>University Information Services (UIS).</a>    
                    </p>
                   
                    <h1 className="text-2xl font-serif text-black ">
                        Content
                    </h1>
                    <p className='mt-2'>
                        Teams within the  <a href='https://osc.cam.ac.uk/' target='_blank' className='text-[#1c617c] hover:underline hover:text-[#124154]'>Office of Scholarly Communication</a> manage
                         and curate the repositorys content. Open access submissions, research datasets and doctoral theses are primarily deposited into 
                         Apollo via the Universitys CRIS (Current Research Information System), which is owned by the Research Information Office. 
                    
                    </p>
                   

                <h1 className="text-2xl font-serif text-black ">
                   Responsibility
                </h1>
                    <p className='mt-2'>
                        The ORS team report directly to the Head of Digital Initiatives, who is themselves a Deputy Director of Cambridge University
                        Library and part of the Senior Leadership Team. The <a href=' https://www.lib.cam.ac.uk/about-library/library-management/senior-leadership-team' target='_blank'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Senior Leadership </a>Team form part of the <a href='https://www.lib.cam.ac.uk/about-library/library-management' target='_blank'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>governance structure of the Library.</a>  
                  
                    </p>

                    

            </div>

            <div className='flex justify-center mt-5'>
                <Image
                    src='/ors-organigram.png'
                    alt="Logo"
                    width={1000}
                    height={200}
                    />
            </div>

            <div>
                 <h1 className="text-2xl font-serif text-black ">
                        Policies
                    </h1>
                    <p className='mt-2'>
                        The Repositorys main policies concern: the preservation processes for research outputs 
                        deposited, managed, and stored in the repository; the service level definition for
                         the repository; the use of Apollo by members of the University and end-users; the 
                         assignment of persistent identifiers (DOIs); and guidelines by which the presence of 
                         material that potentially infringes rights may be addressed. 
                    </p>
                    <p>Apollo Repository policies are registered in OpenDOAR (Directory of Open Access Repositories).</p>
            </div>

            <div>
                <div className="flex flex-wrap gap-6 justify-center mt-10">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="w-[350px] border border-gray-300 rounded-md p-6 bg-white shadow-sm hover:shadow-lg transition"
              >
                <h2 className="font-semibold text-taupe-950">{box.title}</h2>
                <h3 className=" font-normal mb-2 text-gray-600 ">{box.headline}</h3>

                <p className="text-gray-700 leading-7 mb-3">{box.parag1}</p>
                <p className="text-gray-700 leading-7 mb-3">{box.parag2}</p>
                

                <a
                  href={box.href}
                  className="text-sky-700 font-medium hover:underline"
                >
                  {box.linktext}
                </a>
              </div>
            ))}
          </div>
            </div>
        
    </div>
  )
}

export default GovtPolicy