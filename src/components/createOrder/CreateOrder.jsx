import { Button } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import { toast } from 'react-toastify';


const CreateOrder = ({ user }) => {

    const [orderDate, setOrderDate] = useState({
        startDate: new Date()

    });
    const [orders, setOrders] = useState([])
    const [success, setSuccess] = useState(false)

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setOrderDate(newValue);
    }


    const handleBook = async () => {

        const config = {
            headers: { "Content-Type": "application/json" },

        };

        console.log(orderDate)

        const { data } = await axios.post(
            `https://assignment-11-server-roan-one.vercel.app/api/order/create`,
            {
                orderDate,
                user
            },
            config
        );

        toast(data.message)

        setSuccess(data.success)

        console.log(data)
    }

    useEffect(() => {
        async function fetchOrder() {
            await fetch(`https://assignment-11-server-roan-one.vercel.app/api/orders/me`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${user.accessToken}`,
                    email: user.email
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data.orders)

                )

            console.log(orders)
        }

        fetchOrder()
    }, [orders, user.accessToken, user.email])

    return (
        <div className='ml-10 my-10 w-[80%] mx-auto'>

            {
                success ? <h1 className='text-[green] mb-5'>Your Order Placed successfully !</h1> : ''
            }

            <h1>Select Date: </h1>


            <Datepicker
                asSingle={true}
                placeholder={"Pick Date for booked us"}
                minDate={new Date()}
                value={orderDate}
                onChange={handleValueChange}

            />

            <h2 className='mt-5'>You can also book us by calling this number:
                <span className='text-indigo-500 font-medium text-xl'> 88018255930**</span></h2>

            <Button onClick={() => handleBook()} size="md"
                className='bg-black  rounded-md mt-5'>Book Now</Button>
            <div className='bg-lightgray'>

                <h1 className='text-2xl font-semibold mt-5'>Your Orders: </h1>

                {orders.length === 0 ?
                    <><h1 className='text-xl'>You have no orders</h1></> :
                    orders.map(order => (
                        <div key={order._id} className='flex items-center flex-wrap mt-5
         justify-between w-[80%] mx-auto bg-white p-4'>
                            <h1>Email : {order.email}</h1>
                            <p>Name: {order.username}</p>
                            <h2>Date: {order.orderDate.startDate}</h2>


                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CreateOrder