import React from 'react'

const DoiPolicy = () => {
      const policyData = [
    {
      title: "Policy version:",
      value: "4",
    },
    {
      title: "Date of last policy review:",
      value: "October 2025",
    },
    {
      title: "Name of reviewer:",
      value: "Open Research Systems",
    },
    {
      title: "Original policy creation date:",
      value: "2016/11/09",
    },
    {
      title: "Name of creator:",
      value: "Marta Teperek and Danny Kingsley",
    },
    {
      title: "Date for next review:",
      value: "October 2027",
    },
    {
      title: "Frequency of reviews:",
      value: "At least every 2 years",
    },
    {
      title: "Review is the responsibility of:",
      value: "Open Research Systems",
    },
    {
      title: "Location of policy:",
      value: "https://doi.org/10.17863/CAM.10214.3",
      link: true,
    },
    {
      title: "Related policies:",
      value: "Repository terms of use",
      link: true,
    },
  ]
  
  return (
   <div className=" mt-10 mx-20 flex-col justify-center  text-gray-600 ">
      <div>
          <h1 className="text-black text-2xl font-serif  ">
            Background
          </h1>
              <p className='mt-2'>
              <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Digital Object Identifiers</a> (DOIs)
               are persistent links to digital objects. The University of Cambridge holds a licence to assign DOIs to
                selected scholarly research outputs ("Research Outputs") deposited into the University of Cambridge
                 research repository "Apollo" ("Repository"). All DOIs assigned by the University of Cambridge need 
                 to be registered,and be compliant with the requirements of the DataCite organisation.  
              </p>
              
                <h1 className="text-black text-2xl font-serif">
                What types of Research Outputs can get a DOI?
                </h1>
              <p className='mt-2'>
                The University of Cambridge will assign DOIs with the Cambridge prefix (CAM) to selected Research 
                Outputs, including datasets, theses and working papers. For Research Outputs which already have DOIs, we 
                will not assign a Cambridge DOI to the record. 
              </p>
                <h1 className="text-black text-2xl font-serif">
                Modifications to Research Outputs
                </h1>
              <p className='mt-2'>
                Modifications to Research Outputs once a DOI has been assigned are allowed. In cases where such 
                modifications involve changing one or more files associated with the record, this will result in a 
                new version being created, and a versioned DOI will be assigned. When changes only involve
                 modifications of the metadata associated with a record, these can be performed on the same version, 
                 following DataCite best practice guide  <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>( https://zenodo.org/doi/10.5281/zenodo.3559799).</a> 
              </p>
              <p className='mt-2'>
                The only exception where modifications to Research Outputs are not permitted is for research theses: modifications to the 
                record will only be accepted until the final version of the thesis is deposited in the repository. 
              </p>
              <h1 className="text-black text-2xl font-serif">
                Take down policy
                </h1>
              <p className='mt-2'>
                Content held in the Repository is intended for long-term preservation; however, in some cases items may be
                 withdrawn. Reasons for withdrawal might include, for example: 
              </p>


               <ul className="list-disc pl-10 text-[17px] mt-2">

                    <li>Proven copyright violation or plagiarism</li>

                    <li>Legal requirements</li>

                    <li>National security</li>

                    <li>Falsified research</li>

                    <li>Ethical requirements</li>
              </ul>

               <p className='mt-2'>
                    Withdrawn items will retain the DOI, and the withdrawal notice will be 
                    indicated on the landing page of the Research record in the Repository,
                     but the Research Output itself will not be accessible. More information r
                     elated to the takedown policy is available from the related policies link. 

              </p>

               <p className='mt-2'>
                We reserve the right to act with discretion in cases not covered by this policy, or 
                where circumstances require additional flexibility. 
                </p>
      </div>

      <div>
         <div className="max-w-6xl">

        {/* Top Border */}
        <div className="mb-5  mt-4 border-t border-gray-300 ">
          <h1 className="font-bold text-gray-900 pt-5 ">
            Revision history
          </h1>
        </div>

        {/* Table */}
        <div className="overflow-hidden border border-gray-300">
          {policyData.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 border-b border-gray-300 ${
                index % 2 === 0 ? "bg-[#e9e9e9]" : "bg-white"
              }`}
            >
              {/* Left */}
              <div className="px-5 py-5  text-gray-800">
                {item.title}
              </div>

              {/* Right */}
              <div className=" py-5  text-gray-800">
                {item.link ? (
                  <a
                    href="#"
                    className="text-[#1c617c] hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
      </div>
    </div>
  )
}

export default DoiPolicy