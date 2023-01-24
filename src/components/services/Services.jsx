import React from 'react'

const servicesData = [
  {
    image: 'https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674465582/dustpan_zj7quh.png',
    title: "Cleaning House",
    description: "Our team can wash and clean your house perfectly. There will be no dirty anywhere"

  },
  {
    image: 'https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674466090/house_gipnwl.png',
    title: "Cleaning House",
    description: "Our team can wash and clean your house perfectly. There will be no dirty anywhere"

  }, {
    image: 'https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674466295/washing-machine_dyhzmv.png',
    title: "Cleaning House",
    description: "Our team can wash and clean your house perfectly. There will be no dirty anywhere"

  }
]

const Services = () => {
  return (
    <div className='px-10 mt-10 h-auto'>
      <h1 className='mx-auto text-3xl border-b-4 border-black mb-5 w-[200px]'>Our Services</h1>

      <div className="flex items-center justify-between flex-wrap">

        {
          servicesData.map(service => (
            <div className="md:w-1/4 mt-5 w-2/3 mx-auto rounded-xl bg-gray 
            flex flex-col items-center cursor-pointer px-5 py-10 
            transition ease-in-out delay-150 bg-[#7f8382] hover:-translate-y-1
             hover:scale-110  duration-300" key={service.image}>
              <div className=' bg-cyan rounded-full bg-[#af9568]  p-5'>
                <img src={service.image} alt=""
                  className='w-[50px]'
                />
              </div>
              <h1 className='text-2xl font-semibold mb-5'>{service.title}</h1>
              <p className='text-center text-sm'>{service.description}</p>
            </div>
          ))
        }


      </div>


    

    </div>
  )
}

export default Services