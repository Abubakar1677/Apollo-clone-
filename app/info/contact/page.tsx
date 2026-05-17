import React from 'react'


const Contact = () => {

   const boxes = [
    {
      title: "Questions about Apollo",
      desc: "Contact the Repository's support team if you have any questions about using Apollo, or if you experience any issues, or would like to provide general feedback. ",
      link: "support@repository.cam.ac.uk",

     
    },
    {
      title: "Questions about Symplectic Elements",
      desc: "Symplectic Elements is the University's research information management system where Cambridge researchers can manage their research profile and publications. ",
      desc2:'Open Access publications, and research datasets can be submitted to Apollo via this system. ',
      link:"Find out more",
      link2:"Contact the Research Information Team",
     
    },
    {
      title: "Open Research",
      desc: "Open Research aims to make the knowledge gained from academic research openly available as soon as possible. Want to know more? ",
      link: "Website",
      link2:'Contact us',
    },
     {
      title: "Open Access",
      desc: " Find our more about open access, funder policies and how to deposit your publications.  ",
      link: "Website",
      link2:'Contact us',
    },

     {
      title: "Research Data",
      desc: "Find out more about how best to organise, store and preserve your research data, as well as how to share your data to increase the reach and impact of your research and meet any funder requirements.  ",
      link: "Website",
      link2:'Contact us',
     
    },
    {
      title: "Theses",
      desc: "Questions about depositing or accessing University of Cambridge theses ",
     link: "Website",
      link2:'Contact us',
    },

  ]
  return (
    <div className=" mt-10 mx-15 flex-col justify-center  text-black ">
      <div>
          
              <p className='mt-2'>
                Do you have any questions about Apollo or Open Research at the University of Cambridge?
              </p>
              <p className='mt-6'>
                contact us 
              </p>

      </div>
    
    
     <div className="flex flex-wrap gap-3 justify-evenly mt-10 w-[full]  ">
                      {boxes.map((box, index) => (
                        <div
                          key={index}
                          className="px-3 w-[350px] border border-gray-300 pb-5  bg-white shadow-sm hover:shadow-lg transition"
                        >
                            <h3 className='text-[18px] mt-3'>{box.title}</h3>
                            <p className='mt-3'>{box.desc}</p>
                            <p className='mt-3'>{box.desc2}</p>
                            <p className='mt-3'>
                                <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>{box.link}</a>
                            </p>
                             <p className='mt-3'>
                                <a href='#'  className='text-[#1c617c] hover:underline hover:text-[#124154]'>{box.link2}</a>
                            </p>
                       
                        
                        
                        </div>
                      ))}
                  </div>
    </div>
  )
}

export default Contact;