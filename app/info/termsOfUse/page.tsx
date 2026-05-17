import React from 'react'

const   TermsOfUse = () => {
      const policyData = [
    {
      title: "Policy version:",
      value: "2",
    },
    {
      title: "Policy identifier:",
      value: "https://doi.org/10.17863/CAM.81261",
      link:true
    },
    {
      title: "Policy reviewer:",
      value: "	Head of Open Research Systems",
    },
    {
      title: "Policy review date:",
      value: "	2022/02/08",
    },
    {
      title: "Policy creator:",
      value: "	Office of Scholarly Communication",
    },
    {
      title: "Policy creation date:",
      value: "	2016/01/18",
    },
  ]
   
  return (
     <div className=" mt-10 mx-20 flex-col justify-center  text-black">
      <div>
          <h1 className="text-2xl font-serif mt-5 ">
             Overview
          </h1>
          <p className='mt-4'>The Repository Terms of Use (Terms of Use) forms the framework that determines how members of the University and the community of end-users interact with Apollo. The Terms of Use cover: </p>
              <ul className='list-disc pl-6  leading-7'>
                <li>The types of Research Outputs that qualify for deposit into Apollo and the means by which they are assessed. </li>
                <li>The terms under which end-users may access material on Apollo.</li>
                <li>Responsibilities of depositors, including ensuring that Research Outputs were generated in accordance with the University's research, integrity and ethics policies. </li>
                <li>Apollo's commitment to the responsible and sustainable management of Research Outputs deposited in the Repository to ensure long-term access to those works. </li>

              </ul>
              <h1 className="text-2xl font-serif mt-5 ">
                    Purpose of the University of Cambridge repository (“Repository”)
              </h1>
              <p className='mt-4'>
                 The <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> University of Cambridge</a> is committed to disseminating and preserving its research and scholarship as widely as possible. In keeping with this commitment, 
                 the University supports the principle that the results of its research should be freely accessible and re-usable, and therefore supports its staff in making
                  their scholarly research outputs (“Research Outputs” or “Outputs”) available via the Repository. The University of Cambridge is committed to make all Outputs 
                  available in accordance with the <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> FAIR principles: </a> Findable, Accessible, Interoperable and Re-usable. 
              </p>
              <p className='mt-4'>
               <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> https://www.repository.cam.ac.uk </a> (the “Site”) is operated by the Chancellor, Masters and Scholars of the University of Cambridge acting by and through the Cambridge University Library of West Road, 
                Cambridge CB3 9DR, United Kingdom (“We”). The Repository currently used at the University of Cambridge is DSpace, which is an open source repository software package. 
              </p>
                <h1 className="text-2xl font-serif mt-5 ">
                     What can be deposited into the Repository
              </h1>
              <p className='mt-4'>
                Only Research Outputs connected to the University of Cambridge can be deposited in the Repository. By connected We mean Research Outputs authored by current or former University of Cambridge researchers, research students or staff members; Outputs of research 
                conducted at the University of Cambridge; Research Outputs that appear in a journal published, or a conference hosted, by the University; or Outputs resulting from research undertaken using University facilities. Research Outputs can include, but are not limited
                 to, publications, conference proceedings, book chapters, monographs, theses, various forms of research data (video recordings, spreadsheets, images etc.), presentations and others. We reserve the right not to accept material produced at the University which
                  does not directly relate to research which has taken place here. 
              </p>
              <p className='mt-4'>
                Data that contains research from <b>human participants and/or personal data, may only be published in Apollo if the data has been anonymised</b>, where steps have been taken to minimise the risk of re-identification. In addition, consent must be obtained from participants to share their data publicly. 
              </p>
              <p className='mt-4'>
                Those depositing Research Outputs (“Depositors”) must have the authority or permission to do so. Barring exceptional circumstances (as deemed by Head of the Office of Scholarly Communication), the metadata about Research Outputs will be made publicly available, 
                in line with the FAIR principles. Wherever possible depositors will be asked to make their Research Outputs publicly available, allowing for appropriate embargoes, where applicable and necessary. 
              </p>
              <p className='mt-4'>
                Researchers are strongly encouraged to submit their Research Outputs in open formats, to facilitate their long-term preservation. However, it is not always possible to export Research Outputs into open formats; therefore Research Outputs in proprietary file formats will be also accepted by the Repository. 
                Guidance on file formats is available on <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>  www.data.cam.ac.uk</a> webpages. 
              </p>

               <h1 className="text-2xl font-serif mt-5 ">
                    End user access and use of Research Outputs deposited into the Repository
                </h1>
                <p className='mt-4'>
                    Research Outputs are made available in the Repository on terms agreed with Depositors so that as an end user you may use the Research Output only if you abide by the licence or other terms under which it has been released, e.g. the terms of a specific Creative Commons Licence. 
                </p>
                <p className='mt-4'> Unless indicated otherwise, Research Outputs made publicly available in the Repository are protected by copyright with all rights reserved. </p>
                <p className='mt-4'>To ensure licence compliance and good research practice, Research Outputs also need to be properly acknowledged, including citing their author/s and full bibliographical details in the suggested form: author/s, publication year, title, URL of Research Outputs in the Repository. </p>
               
               <h1 className="text-2xl font-serif mt-5">
                 Deposition workflow
               </h1>
               <p className='mt-4'> Prior to deposition, all Research Outputs submitted to the Repository will be scrutinised by the Office of Scholarly Communication to validate the following: </p>
               <ul className='list-disc pl-5'>
                <li>Are Research Outputs submitted by (or on behalf of) a current/former University of Cambridge researcher, research students, or a member of staff? </li>
                <li>Are these Research Outputs connected with the University of Cambridge?</li>
                <li>Is the submission accompanied by appropriate metadata description?</li>
                <li>Is the funder properly acknowledged?</li>
               </ul>


               <h1 className="text-2xl font-serif mt-5">
                    Responsibilities of Depositors
                </h1>
               <p className='mt-4'>Depositors are responsible for ensuring that any Research Outputs submitted to the Repository were generated in accordance with the  <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> University’s Research Policies</a>, the  <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>University’s Research Integrity and Ethics guidelines</a> and in accordance with policies of relevant research funders. </p>
                <p className='mt-4'>Depositors are responsible for the content and the quality of submitted files, including ensuring that if the submission contains material for which the Depositor does not hold copyright, and that exceeds fair dealing permitted by law, the Depositor will have obtained the permission of the copyright owner to grant the University the rights required to make these Research Outputs available by the Repository, and that such third party-owned material is clearly identified and acknowledged within the text or content of the submission. </p>
             <p className='mt-4'> Depositors are responsible for ensuring that submitted Research Outputs have an appropriate metadata description. </p>
             <p className='mt-4'>By submitting their Research Output to the Repository, Depositors are offered a choice of licences they may wish to attach to their Research Outputs and must be willing and able to grant the University the right and licence to preserve and distribute their Research Outputs via the Repository (see
                <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> the University of Cambridge Repository DEPOSIT LICENCE AGREEMENT Version 2.1)</a>. 
            </p>

            <h1 className="text-2xl font-serif mt-5">
                Responsibilities of the Repository
            </h1>
            <p className='mt-4'>
                The Repository is responsible for the curation of deposited Research Outputs, as well as for storing and sharing Research Outputs according to the guidelines of research funders. The Repository is managed by the Open Research Systems team within Digital Initiatives and its content is curated by the <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>  Office of Scholarly Communication.</a> 
            </p>
            <p className='mt-4'>
                We are committed to the responsible and sustainable management of Research Outputs deposited in the Repository and to ensure long-term access to those works.<a  href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>Digital preservation policies</a>  and strategies and the technologies employed are shaped and informed by best practice in the field and are reviewed regularly to ensure that they remain current with evolving technologies and institutional practices.
            </p>
            <p className='mt-4'>
                We strive to maintain the availability of deposited works in the Repository indefinitely, but for technical, administrative, or legal reasons it may be necessary, and the Repository reserves the right, to remove deposits without notice. Upon such an occurrence the metadata record indicating storage of Research Outputs in the Repository may remain visible in perpetuity. 
            </p>
            <p className='mt-4'>
                The digital assets in the Repository are research outputs of the University and should the Library cease to exist, responsibility for the assets of the library (print and digital) would be determined by the University’s governance. The Repository and its data would be transferred to an appropriate archive or database controlled and managed within the University of Cambridge. The Repository's <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> succession plan</a> outlines the considerations that are relevant when assessing and determining suitable options for the transfer of content in Apollo, together with a list of those options. 
            </p> 

            <h1 className="text-2xl font-serif mt-5">
                Other applicable terms
            </h1>

            <p className='mt-4'>
                To the extent permitted by law, We exclude all conditions, warranties, representations or other terms which may apply to the Site or any content on it, whether express or implied. We will
                 not be liable for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with use of, or inability to use the Site, or use of or reliance on 
                 any content displayed on the Site, nor for loss of profits, business or revenue, loss of anticipated savings, loss of business opportunity, goodwill or reputation of any indirect or consequential loss or damage. 
                Nothing in these terms of use excludes or limits our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law. 
            </p>
            <p className='mt-4'>
                 Where the Site contains links to other sites or resources provided by third parties, We have no control over the content of those sites or resources. 
            </p>
            <p className='mt-4'>
                These terms of use, their subject matter and formation are governed by English law and you and We agree that the courts of England and Wales will have non-exclusive jurisdiction in case of disputes or claims. 
            </p>
            <p className='mt-4'>
                These terms of use (together with the documents referred to in it) explain the terms on which you may make use of the Site, whether as a guest or a registered user. By using the Site, you confirm that
                 you accept these terms of use and that you agree to comply with them. These terms of use refer to the following additional terms, which also apply to your use of the Site. The Privacy
                  Policy <a  href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>(https://www.lib.cam.ac.uk/privacy-policy) </a> sets out the terms on which any personal data collected from you, or provided by you is processed. By using this Site, you consent to such 
                  processing and you warrant that all data provided by you is accurate. The Cookie Policy <a  href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>(https://www.lib.cam.ac.uk/privacy-policy)</a> sets out information about the cookies on this Site. Additionally, all 
                  information collected from you, or provided by you might be used by the University of Cambridge for reporting purposes, and might be imported into Symplectic Elements, or other University’s information 
                  systems. The DOI Policy <a  href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>(https://doi.org/10.17863/CAM.10214)</a> sets out the terms on which Digital Object Identifiers will be assigned to Research Outputs deposited to Apollo. The Notice and takedown po
                  licy<a  href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> (https://doi.org/10.17863/CAM.81260)</a> sets out the terms by which you may request material is removed from the Repository. These terms of use incorporate all relevant University of Cambridge policies. 
            </p>

            <h1 className="text-2xl font-serif mt-5">
                Contact details
            </h1>
            <ul>
                <li>Email: <a  href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>support@repository.cam.ac.uk</a></li>
                <li>Open Research Systems</li>
                <li>Cambridge University Library</li>
                <li>West Road</li>
                <li>Cambridge</li>
                <li>CB3 9DR</li>
                <li>United Kingdom</li>
            </ul>


      </div>

       <div>
         <div className="max-w-6xl mx-20 mt-3">

        {/* Top Border */}
        <div className="mb-5  mt-5 border-t border-gray-300 ">
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

export default   TermsOfUse;