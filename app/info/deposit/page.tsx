import Image from 'next/image'
import React from 'react'

const DepositPage = () => {
     const boxes = [
    {
      title: "Open Access and Scholarly Outputs",
    //   headline:"Apollo repository digital preservation policy",
      parag1: "A mediated deposit service is available. Please use the Open Access  upload form to register your article details.",
      parag2:"If you have other content you would like the team to add on your behalf, please email support@repository.cam.ac.uk with details of the items in question. ",
      link: "Open Access upload form",
     
    },
    {
      title: "Research data",
    //   headline:"CUL digital preservation policy",
      parag1: " A mediated deposit service is available - please use the Data upload form. If you have any questions, please contact the Research Data Management team.",
    //   parag2:"These policies sit within a broad policy landscape determined by Cambridge University Library, the University of Cambridge, the higher education sector, research funders, UK Government etc. ",
      link: "Data upload form",
     
    },
   

    {
       title: " Theses",
    //   headline:"Persistent identifiers in Apollo",
      parag1: " A mediated deposit service is available - please access the Theses information page where further information is provided. If you have any questions, please contact support@repository.cam.ac.uk.",
    //   parag2:"This policy outlines the criteria by which material is assessed - both in terms of the full text content and the associated metadata - and how requests to update material once a DOI has been granted are handled.  ",
      link: "Preparing to deposit your thesis in Apollo",
    },
   
  ]
  return (
     <div className=" mt-10 mx-15 flex-col justify-center  text-black ">
      <div>
          <h1 className="text-2xl font-serif  ">
             Deposit content into Apollo: overview of systems at Cambridge
          </h1>
              <p className='mt-2'>
              To streamline how researchers manage their research information (publications and grants), and to fulfil 
              open access and funder requirements, Apollo integrates with relevant systems within the University. The diagram 
              below provides detailed information about key systems, their role and how Apollo interacts with them.
              </p>
             
      </div>
      <div className='mt-10 flex justify-center'>
        <Image
            src="/ApolloElements-md.svg"
            alt="Logo"
            width={1000}
            height={200}
            />
      </div>

      <div>
             <h1 className="text-2xl font-serif  ">
            What can be deposited into the Repository?
          </h1>
             <p className='mt-2'>
                The <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> Repository terms of use</a>  determine the types of content that can be deposited into Apollo.
              </p>
             <p className='mt-2'>
                Only Research Outputs connected to the University of Cambridge can be deposited in the Repository. By "connected" we mean Research Outputs authored by current or former
                 University of Cambridge researchers, research students or staff members; Outputs of research conducted at the University of Cambridge; Research Outputs that appear
                  in a journal published, or a conference hosted, by the University; or Outputs resulting from research undertaken using University facilities.
              </p>
              <p className='mt-4'>
                The way to deposit your research depends on the type of output. Regardless of the output type, we ask you to check that:
              </p>

               <ul className="list-disc pl-10 text-[17px] mt-2">

                    <li>you have the <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>right</a> to deposit the material</li>

                    <li>the material is available in <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>suitable electronic format(s)</a></li>

                    
              </ul>

               <div>
                <div className="flex flex-wrap gap-6 justify-center mt-10">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="w-[350px] border border-gray-300 rounded-md p-6 bg-white shadow-sm hover:shadow-lg transition"
              >
                <h2 className="font-semibold text-taupe-950">{box.title}</h2>

                <p className="text-gray-700 leading-7 mb-3">{box.parag1}</p>
                <p className="text-gray-700 leading-7 mb-3">{box.parag2}</p>
                

                <a
                  href="#"
                  className="text-sky-700 font-medium hover:underline"
                >
                  {box.link}
                </a>
              </div>
            ))}
          </div>
            </div>

              
      </div>

      <div className='mt-3 leading-10'>
         <h1 className="text-2xl font-serif ">
                Batch uploads
          </h1>
              <p className='mt-2'>
                While most deposits to the Apollo repository will be via Symplectic Elements, 
                we also offer a batch upload service where the material is complex and / or extensive.
              </p>
              <p>
                We need two things for a batch upload:
              </p>
              
              <ol className="list-decimal pl-10 text-[17px] mt-2">
                    <li>
                       A spreadsheet containing data describing the items for upload (this is also referred to elsewhere as metadata). Because we need particular information, and for that information to be in a certain format, we will supply a template spreadsheet.
                    </li>

                    <li>
                       The files themselves.
                    </li>
                </ol>
             <p>Once we receive the spreadsheet and the files we will upload the material to Apollo on your behalf and report back once the DOIs have been created.</p>
             <p>To obtain further advice and to also get a copy of the relevant template spreadsheet please contact:
                <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>support@repository.cam.ac.uk</a> 
            </p>
           
           <h1 className="text-2xl font-serif ">
              Research data
          </h1>
              <p >
              For all questions relating to the batch deposit of material that supports or underpins your research outputs please contact the Research 
              Data Management team:  <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>info@data.cam.ac.uk</a>
              </p>
               
           <h1 className="text-2xl font-serif ">
             Repository service
          </h1>
              <p >
                For to all other material (eg reports, working papers, books, etc.) please contact the Repository team:  <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>: support@repository.cam.ac.uk;</a>
              </p>
              <p>If you're unsure which applies please contact the Repository team as they'll route the enquiry to the appropriate service.</p>
            <h1 className="text-2xl font-serif ">
                Self-archiving
            </h1>
              <p >
                In some instances you may be allowed to self-archive your material on the repository. Please contact  <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>: support@repository.cam.ac.uk;</a>
                with the details of which collection(s) you wish to submit your material to. Once the team has allowed you access rights to deposit in that collection, they will send you an email letting you know that you can deposit your material.
              </p>
              <p>If you would like a new community and/or collection to be created please email us:</p>
               <ul className="list-disc pl-10 text-[17px] mt-2">
                    <li>The name of the organisational entity such as Department or Institution.</li>
                    <li>A description of which types of content the community/collection will contain (e.g. research publications, working papers, images).</li>
                </ul>

      </div>
        
    </div>
  )
}

export default DepositPage