import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
} from "@material-tailwind/react";
const Reviews = ({ user }) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {

        async function fetchReviews() {
            const { data } = await axios.get(
                `/api/reviews`

            );
            setReviews(data.reviews)
            console.log(reviews)
        }

        fetchReviews()
    }, [reviews])

    return (
        <div className="mt-20  bg-[url('https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674475423/pexels-pande-putu-hadi-wiguna-8209361_ltlh85.jpg')] h-auto bg-center bg-no-repeat bg-cover pb-10"
        >
            <div className='bg-gradient-to-b  from-[rgb(57,89,58,1)] to-[rgb(57,89,58,0)] w-full h-full'>

                <h1 className="text-2xl md:text-4xl text-center text-white font-semibold">Why Us?</h1>


                <div className="flex items-center justify-between flex-wrap px-10">

                    {
                        reviews.map(({ email, username, userImage, reviewText }) => (
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

                                {
                                    user.email === "thenaim33@gmail.com" || user.email === "programminghero001@gmail.com" ?
                                        <Button size="md" className="hidden lg:inline-block bg-black rounded-md">
                                            <Link to="/login">Login</Link>
                                        </Button> : ""
                                }

                            </div>
                        ))
                    }


                </div>

            </div>
        </div>
    )
}

export default Reviews