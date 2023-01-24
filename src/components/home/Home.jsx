import React from 'react'
import Services from '../services/Services'

const dumyData = [
    {
        image: "https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674466090/house_gipnwl.png",
        title: "We have experienced man power",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit explicabo alias"
    }, {
        image: "https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674466090/house_gipnwl.png",
        title: "We have experienced man power",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit explicabo alias"
    },
    {
        image: "https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674466090/house_gipnwl.png",
        title: "We have experienced man power",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit explicabo alias"
    },
    {
        image: "https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674466090/house_gipnwl.png",
        title: "We have experienced man power",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit explicabo alias"
    },
    {
        image: "https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674466090/house_gipnwl.png",
        title: "We have experienced man power",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit explicabo alias"
    },
    {
        image: "https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674466090/house_gipnwl.png",
        title: "We have experienced man power",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odit explicabo alias"
    },
]

const Home = () => {
    return (
        <div>
            <div
                className="flex flex-col md:flex-row items-center justify-between px-10 mx-auto h-[80vh] bg-[#af9568] my-auto">

                <div className='flex  flex-col h-1/2 justify-between w-2/3 md:w-1/2 mt-10'>
                    <h1 className='md:text-6xl text-4xl font-bold'>We will make your house Shiny</h1>
                    <p className='my-5 text-sm md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita cupiditate, qui explicabo adipisci cumque officia nihil consequatur! Quisquam soluta beatae molestias deleniti aperiam in ipsum dolores est itaque reiciendis?</p>
                    <button className='bg-black text-white px-5 py-1 md:py-3 w-[120px] md:w-[150px]'>Call Us</button>
                </div>
                <div className='bg-black w-2/5 h-2/3 hidden md:block'>
                    <img src="https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674470623/spacejoy-XpbtQfr9Skg-unsplash_lwqtxm.jpg" className='h-full w-full' alt="" />
                </div>

            </div>

            <Services />

            {/* why us */}

            <div className="mt-20  bg-[url('https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674475423/pexels-pande-putu-hadi-wiguna-8209361_ltlh85.jpg')] h-auto bg-center bg-no-repeat bg-cover pb-10"
            >
                <div className='bg-gradient-to-b  from-[rgb(57,89,58,1)] to-[rgb(57,89,58,0)] w-full h-full'>

                    <h1 className="text-2xl md:text-4xl text-center text-white font-semibold">Why Us?</h1>


                    <div className="flex items-center justify-between flex-wrap px-10">

                        {
                            dumyData.map((data, i) => (
                                <div className="md:w-1/4 mx-2 mt-5 w-2/3 md:mr-5 mx-auto rounded-xl bg-[#af9568] 
    flex flex-col items-start cursor-pointer px-5 py-10 
    transition ease-in-out delay-150 bg-[#7f8382] hover:-translate-y-1
     hover:scale-110  duration-300" key={i}>
                                    <div className=' bg-cyan rounded-full bg-white  p-5'>
                                        <img src={data.image} alt=""
                                            className='w-[50px]'
                                        />
                                    </div>
                                    <h1 className='text-2xl font-semibold mb-5'>{data.title}</h1>
                                    <p className='text-center text-sm'>{data.description}</p>
                                </div>
                            ))
                        }


                    </div>

                </div>
            </div>




            <div>
                <h1 className='text-4xl font-semibold mt-10 text-center'>Your Review</h1>


                <div className="flex items-center justify-between max-h-[80vh] px-10">
                    <div className="md:w-1/3 hidden">
                        <img src="https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674460939/spacejoy-5oWo6A2IKTc-unsplash_zkl7up.jpg" className='w-full h-[300px]' alt="" />
                    </div>
                    <div className="md:w-1/3 w-full">
                        <div className="w-full">
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Username
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="review">
                                        Review
                                    </label>
                                    <textarea id="review" name="review" rows="4" cols="50"
                                        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                                        Tell your thoughts about us
                                    </textarea>

                                </div>

                                <div className="flex items-center justify-between">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Submit your review
                                    </button>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home