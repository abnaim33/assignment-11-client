import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const CreateReview = ({ user }) => {

    const [error, setError] = useState(false)

    const [reviewData, setReviewData] = useState({
        userImage: user.photoURL ? user.photoURL : "https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674622093/user_iany8v.png",
        reviewText: "",
        email: user.email ? user.email : "",
        username: user.displayName ? user.displayName : ""
        // username: ""

    })

    const handleReviewSubmit = async () => {

        if (!user.email) {
            toast("Please login first to submit review")
        }

        if (!reviewData.email || !reviewData.username || !reviewData.reviewText) {
            setError(true)
        }

        else {
            // console.log(reviewData)

            const config = {
                headers: { "Content-Type": "application/json" },
            };

            // const { name, price, description, imageUrl } = product
            const { data } = await axios.post(
                `https://assignment-11-server-roan-one.vercel.app/api/review/create`,
                reviewData,
                config
            );


            toast(data.message)
            setError(false)
            setReviewData({
                userImage: "",
                reviewText: "",
                email: "",
                // username: user.displayName ? user.displayName : ""
                username: ""

            })

        }
    }

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setReviewData({ ...reviewData, [name]: value })
    }

    return (
        <div>
            <h1 className='text-4xl font-semibold mt-10 text-center'>Your Review</h1>


            <div className="flex items-center justify-between max-h-[80vh] px-10">
                <div className="md:w-1/3 hidden md:block">
                    <img src="https://res.cloudinary.com/dsuh9ww6d/image/upload/v1674460939/spacejoy-5oWo6A2IKTc-unsplash_zkl7up.jpg" className='w-full h-[300px]' alt="" />
                </div>
                <div className="md:w-1/3 w-full">
                    <div className="w-full">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                            onSubmit={() => handleReviewSubmit()}>
                            {error &&
                                <p className="text-red-500 text-xs italic">Please add all fields</p>
                            }




                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                                    required
                                    name="username"
                                    value={reviewData.username}
                                    onChange={handleChangeInput} />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"
                                    name="email"
                                    placeholder="Your email address"
                                    value={reviewData.email}
                                    onChange={handleChangeInput} />

                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
                                    Review
                                </label>
                                <textarea id="review" name="reviewText" rows="4" cols="50"
                                    className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={reviewData.reviewText}
                                    onChange={handleChangeInput}>

                                </textarea>

                            </div>

                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                                    onClick={() => handleReviewSubmit()}>
                                    Submit your review
                                </button>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateReview