import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import CreateReview from '../review/CreateReview'
import Services from '../services/Services'



const Home = ({ user }) => {


    const [reviews, setReviews] = useState([])

    useEffect(() => {

        async function fetchReviews() {
            const { data } = await axios.get(
                `https://assignment-11-server-roan-one.vercel.app/api/reviews`

            );
            setReviews(data.reviews)
            console.log(reviews)
        }

        fetchReviews()
    }, [reviews])

    return (
        <div>
            <div
                className="flex flex-col md:flex-row items-center justify-between px-10 mx-auto md:h-[80vh] bg-[#af9568] my-auto">

                <div className='flex  flex-col h-auto md:h-1/2 justify-between w-2/3 md:w-1/2 my-10'>
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
                            reviews.length > 0 && reviews.map(({ email, username, userImage, reviewText }) => (
                                <div className="md:w-1/4 mx-2 mt-5 w-2/3 md:mr-5 mx-auto rounded-xl bg-[#af9568] 
    flex flex-col items-center cursor-pointer px-5 py-10 
    transition ease-in-out delay-150 bg-[#7f8382] hover:-translate-y-1
     hover:scale-110  duration-300" key={email}>

                                    <img src={userImage} alt="userImage"
                                        className='w-[80px] rounded-full'
                                    />

                                    <h3 className='text-md font-semibold mb-5'>{username}</h3>
                                    <h1 className='text-xl font-semibold mb-5'>{email}</h1>
                                    <p className='text-center text-sm'>{reviewText}</p>
                                </div>
                            ))
                        }


                    </div>

                </div>
            </div>



            <CreateReview user={user} />


        </div>
    )
}

export default Home