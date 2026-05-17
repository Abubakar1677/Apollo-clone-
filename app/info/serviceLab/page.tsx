import React from 'react'

const ServiceLab = () => {
  return (
     <div className=" mt-10 mx-15 flex-col justify-center  text-black ">
      <div>
          <h1 className="text-2xl font-serif  ">
            Service level definition
          </h1>
              <p className='mt-2'>
                    This page describes the service level definition of Apollo repository, the University of 
                    Cambridge Institutional Repository.
              </p>

              <h1 className="text-2xl font-serif mt-3">
                Overview
              </h1>
              <p className='mt-2'>
                Apollo was established in 2003 as a service to share the research outputs of the University. The Repository is 
                committed to store and preserve the University’s research outputs. The Open Research Systems Team is responsible for 
                managing Apollo (Repository service and technical aspects of the underpinning software platform), and its
                 integrations with other University systems. Apollo is designed to be scalable and highly resilient. 
              </p>
              <p className='mt-3'>
                Apollo is available from the University website at: https://www.repository.cam.ac.uk.
              </p>
              <h1 className="text-2xl font-serif mt-3">
                Functionality
              </h1>
              <p className='mt-3'>
                Apollo is an online repository system which allows Cambridge University researchers to publish, share, describe, embargo,
                 and license their research outputs for discovery and use by others via the Internet. The Repository includes support for h
                 arvesting protocols (via appropriate metadata schemas), a robust REST-ful API, a user interface for deposit and administration,
                  search and browse facilities, repository and item-level usage statistics, time-stamped submissions and persistent identifiers. Apollo's 
                  underpinning repository platform is DSpace, a very widely used open source repository platform managed by LYRASIS, a non-profit membership organisation. 
              </p>
              <p className='mt-3'>
                 As described in the Repository's Terms of Use, only research outputs connected to the University of Cambridge can be deposited in Apollo. By 
                 connected we mean research outputs authored by current or former University of Cambridge researchers, research students or staff members; outputs 
                 of research conducted at the University of Cambridge; research outputs that appear in a journal published, or a conference hosted, by the University
                 ; or outputs resulting from research undertaken using University facilities.
              </p>

              <h4>
                Depositors may:
              </h4>
              <ul className='list-disc pl-20'>
                <li>
                    Access the deposit service via the University's CRIS system, Symplectic Elements (behind institutional login). Deposit of open access outputs, 
                    PhD theses and research datasets is performed directly by users with access to Symplectic Elements, which is integrated with Apollo repository. In
                     cases where depositors don't have access to Symplectic Elements, alternative methods for depositing research outputs are available. 
                </li>
                <li>
                    Manage (upload, view, edit and update metadata and data files) their submissions into the repository via the University's CRIS system prior to 
                    publication in the repository. Submitted content (both metadata and files) are subject to quality checks. Deposit of particularly large or more 
                    complex outputs can be deposited in batch using command line tools available to repository administrators. Depositors have the responsibility of s
                    upplying metadata in the format and quality requested and as outlined in our guidance
                </li>
                <li>
                    Request modifications to published content in Apollo. In most cases this will require a new deposit including the original content, together 
                    with new files and updated metadata. A new DOI is minted for the new version, and links between versions are maintained by using appropriate "Relationships" metadata.
                </li>
                <li>
                    Request new communities, or collections to be created within the repository.
                </li>
                <li>
                    Apply temporary access restrictions on metadata (embargo at the research output level) and/or associated digital assets. The process for setting access 
                    restrictions varies with the content type. Apollo users can request access to content that is under embargo. While copyright prevents the repository
                     from making embargoed content available, authors are entitled to distribute embargoed manuscripts on an individual-to-individual basis 
                     (see Apollo Request a Copy for full details about this managed service). Management of access requests for embargoed content is facilitated through Apollo's Request a copy service. 

                </li>
                <li>
                    Request withdrawal of a repository item from public view or supersede it with a newer version. A public metadata landing page will remain, as described in our DOI policy. 

                </li>
                <li>Use the citation and permanent identifier (Digital Object Identifier, DOI) generated by the repository to cite the repository item in published papers, or other research outputs. </li>
                <li> Attach an open data licence to each repository item by default or alternatively include a statement of intellectual property rights. </li>
              </ul>
              <p className='mt-3'>
                The repository service operates according to a set of policies, which are available from the home page of the repository. These include a Depositor agreement, Terms of Use, Digital Object Identifier (DOI) policy, and a preservation policy. 
              </p>

              <h1 className="text-2xl font-serif mt-3">
                Availability
              </h1>
              <p className='mt-3'>
                pollo repository is available 24x7. Target availability is 99% measured over a year, excluding planned maintenance periods. Core hours of support are 9AM to 5PM during University working days. 
              </p>
              <p className='mt-3'>
                There is no regular scheduled maintenance period, with all routine maintenance announced on the service home page in advance. Any reduction in performance or resilience during maintenance periods will be managed to reduce its effect, 
                normally resulting in only a few minutes' partial service loss. 
              </p>
              
              <h1 className="text-2xl font-serif mt-3">
                Resilience
              </h1>
              <p className='mt-3'>
                The service is designed to be highly resilient. Apollo repository runs on a server at one of the data centres provided by the University Information 
                Services (UIS,<a  href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> https://help.uis.cam.ac.uk/service/network-services/hosting-services/hosting/data-centre)</a>. Apollo is replicated to a second repository 
                site (in a second, geographically separate data centre) that we can failover to. This second site has a full repository stack installed, and should
                 Apollo's main repository site go down, we can switch over and maintain access. 
              </p>

              <h1 className="text-2xl font-serif mt-3">
                Backup
              </h1>
              
              <p className='mt-3'>
                To ensure safe archival and prevent loss of data, Apollo stores data files on storage platforms with many layers of redundancy, where all data is encrypted in flight to protect against security threats. 
              </p>
              <p className='mt-3'>
                A backup and tape management strategy is in place for Apollo and describes how often and when backups occur and how tapes are to be handled. Backup (full and incremental) is managed for both hot storage and offline physical 
                media (tape). Hourly snapshots are taken of both the Apollo database and associated file store (storing the repository’s content files). The data entrusted to Apollo (RDBMS and asset stores) are present in three discrete physical 
                locations, and snapshots and backups are verified against the current active Apollo system at the time they are made. 
              </p>
              
              <h1 className="text-2xl font-serif mt-3">
                Disaster Recovery
              </h1>
              <p className='mt-3'> The information and resources necessary to recreate services in the event of a major disaster are stored securely off-site so that these remain accessible. </p>
                <p className='mt-3'>Backups of all critical data including databases are kept, and can be recovered back in place. The repository asset stores are replicated to two physical locations to mitigate against extended periods of data availability
                     in the event of a disaster. The repository server can access replicated data across the network until the damage caused by the disaster is repaired. Apollo maintains separate backups of both the metadata database and the file store in two geographically separate data centres. A third copy of the content is backed up to tape. 
                </p>
                <p className='mt-3'>In the event of data corruption affecting both Apollo sites (data corruption or deletion being replicated) or a major external event, a service copy can be restored from tape backups.</p>
                <h1 className="text-2xl font-serif mt-3">
                    Service support
                </h1>
                <p className='mt-3'>
                    User support is provided by the relevant teams within Office of Scholarly Communication, Open Research Systems and Digital Initiatives. Details are available at our Contact us page. Any problem reports or queries should be emailed to us via<a  href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'> support@repository.cam.ac.uk. </a>
                </p>




      </div>

    </div>
  )
}

export default ServiceLab