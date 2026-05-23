import {  Search } from "lucide-react"
import Image from "next/image"

export default function Home() {


   const boxes = [
    {
      title: "How to deposit",
      desc: "Detailed information about deposit processes into Apollo, including eligibility for inclusion in Apollo.",
      linktext: "How to deposit page",
      href:"/info/deposit",
      desc2:"Recent submissions",
      logo2:"/cam-col-logo.jpeg"
    },
    {
      title: "Data reuse",
      desc: "Information on how to discover, reuse and cite data in Apollo.",
      linktext: "Data reuse page",
      href:"/info/dataReuse",
      desc2:"Research data and Softwares",
       logo2:"/research-data.jpeg"
     
    },
    {
      title: "Governance",
      desc: "Detailed information about repository governance and an outline of key relevant policies. ",
      linktext: "Governance and policies page",
      href:"/info/govtPolicy",
      desc2:"Theses",
       logo2:"/theses-col-logo.jpeg"
    },
  ]


  return (
    <div className=" mt-10 mx-15 flex-col justify-center">
      <div>
          <h1 className="text-4xl font-bold text-black">
              Apollo - University of Cambridge Repository
          </h1>
          <p className="text-gray-600 mt-2">
          Apollo is the institutional repository of the University of Cambridge,
            managed by the  Open Research Systems team based in Cambridge University 
            Library. The Repository is committed to store and preserve the University’s 
            research outputs. Research outputs can include, but are not limited to, publications,
            conference proceedings, book chapters, monographs, theses, various forms of research
              data (video recordings, spreadsheets, computational scripts, code, images etc.),
              presentations and others. 
          </p>
      </div>
      <div>
            <div className="flex flex-wrap gap-6 justify-center mt-10">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="w-[250px] border border-gray-300 rounded-md p-6 bg-white shadow-sm hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-bold mb-4 text-taupe-950">{box.title}</h2>

                <p className="text-gray-700 leading-7 mb-6">
                  {box.desc}
                </p>

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


      <div className="flex  items-center justify-center mt-7 "> 
        <div className="flex  items-center w-full max-w-xl border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search the repository..."
            className="flex-1 px-4 py-3 outline-none text-gray-700"
          />
          <button className="bg-teal-700 px-5 py-3 text-white hover:bg-teal-800 transition">
            <span className="flex items-center font-serif text-2xl gap-3">
                <Search size={20} />
                <h3>Search</h3>
            </span>
            
          </button>
        </div>
      </div>

        
      
             <div className="flex flex-wrap gap-3 justify-evenly mt-10 w-[full]  ">
                  {boxes.map((box, index) => (
                    <div
                      key={index}
                      className=" w-[350px] border border-gray-300 pb-5  bg-white shadow-sm hover:shadow-lg transition"
                    >
                      <span>
                      <Image
                        src={box.logo2}
                        alt="Logo"
                        width={400}
                        height={200}
                      />
                        <h2 className="text-2xl font-serif p-5 text-taupe-950">{box.desc2}</h2>
                      </span>
                    
                      <span className="flex justify-center">
                          <button className=" bg-teal-700 px-2 py-2 ro text-white hover:bg-teal-800 transition rounded-md p-6 shadow-sm hover:shadow-lg">View</button>

                      </span>
                    </div>
                  ))}
              </div>


              <div className="flex-col justify-start items-center mt-15 border-t border-gray-300">
                <span className="flex items-center gap-3 p-5 text-teal-700">
                    <Image
                        src="/small-email-icon.png"
                        alt="Logo"
                        width={20}
                        height={30}
                      />
                   
                    <p className="text-gray-600">Contact us at <a href="#" className="text-sky-700 font-medium hover:underline">support@repository.cam.ac.uk</a></p>
                </span>
                 <span className="ml-5 flex items-center gap-3  text-teal-700">
                    <Image
                        src="/small-Twitter-icon.png"
                        alt="Logo"
                        width={20}
                        height={30}
                      />
                    <p className="text-gray-600">TweeterFollow us on twitter - <a href="#" className="text-sky-700 font-medium hover:underline"> @CamOpenAccess </a>or  <a href="#" className="text-sky-700 font-medium hover:underline"> @CamOpenData </a></p>
                </span>
                 <span className="flex items-center gap-3 p-3 text-teal-700">
                    <Image
                        src="/UnlockingResearch.png"
                        alt="Logo"
                        width={20}
                        height={30}
                      />
                    <p className="text-gray-600">Unlocking research blogRead the  <a href="#" className="text-sky-700 font-medium hover:underline">Unlocking Research </a>blog</p>
                </span>
                
              </div>
     
    </div>
  )
}