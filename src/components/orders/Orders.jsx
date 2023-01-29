import { Button } from '@material-tailwind/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Orders = ({ user }) => {
    const navigate = useNavigate()

    const [orders, setOrders] = useState([])
    const [orderStatus, setOrderStatus] = useState('')
    const [changes, setChanges] = useState(false)

    useEffect(() => {
        async function fetchOrders() {
            await fetch(`https://assignment-11-server-roan-one.vercel.app/api/orders/all`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${user.accessToken}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data.orders)

                )


        }

        fetchOrders()

        if (user.email !== 'thenaim33@gmail.com') {
            navigate('/order')
        }

    }, [user.accessToken, navigate, user.email])




    const handleUpdate = async (order) => {
        if (!changes) {
            toast('Noting to update')
        } else {


            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.put(
                `https://assignment-11-server-roan-one.vercel.app/api/order/update/${order._id}`,
                { ...order, orderStatus: orderStatus },
                config
            );

            toast(data.message)


        }
    }

    const handleDelete = async (id) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.put(
            `https://assignment-11-server-roan-one.vercel.app/api/order/update/${id}`,
            id,
            config
        );

        toast(data.message)
    }

    return (
        <div className='bg-[lightgray] py-10'>
            {
                orders.map(order => (
                    <div key={order._id} className='flex items-center flex-wrap mt-5
                     justify-between w-[80%] mx-auto bg-white p-4'>
                        <h1>Email : {order.email}</h1>

                        <h2>Date: {order.orderDate.startDate}</h2>


                        {order.orderStatus === 'Pending' &&
                            <div className='flex  items-center mt-5 md:mt-0'>
                                <label htmlFor="status">Order Status: </label>
                                <select id="status" name="orderStatus" form="orderForm"
                                    className='h-18'
                                    onChange={(e) => {
                                        setOrderStatus(e.target.value)
                                        setChanges(true)
                                    }
                                    }>
                                    <option value={order.orderStatus}>{order.orderStatus}</option>
                                    <option value="Received">Received</option>
                                    <option value="Delivered">Delivered</option>

                                </select>
                            </div>
                        }


                        {order.orderStatus === 'Received' &&
                            <div className='flex  items-center mt-5 md:mt-0'>
                                <label htmlFor="status">Order Status</label>
                                <select id="status" name="orderStatus" form="orderForm"
                                    onChange={(e) => {
                                        setOrderStatus(e.target.value)
                                        setChanges(true)
                                    }
                                    }>
                                    <option value={order.orderStatus}>{order.orderStatus}</option>
                                    <option value="saab">Delivered</option>
                                    <option value="opel">Pending</option>

                                </select>
                            </div>
                        }

                        {order.orderStatus === 'Delivered' &&
                            <div className='flex  items-center mt-5 md:mt-0'>
                                <label htmlFor="status">Order Status: </label>
                                <select id="status" name="orderStatus" form="orderForm"
                                    onChange={(e) => {
                                        setOrderStatus(e.target.value)
                                        setChanges(true)
                                    }
                                    }>
                                    <option value={order.orderStatus}>{order.orderStatus}</option>
                                    <option value="saab">Received</option>
                                    <option value="opel">Pending</option>

                                </select>
                            </div>
                        }
                        <Button size="md" className="inline-block bg-indigo-500 rounded-md"
                            onClick={() => handleUpdate(order)}>
                            Update
                        </Button>


                        <Button size="md" className="inline-block bg-black rounded-md"
                            onClick={() => handleDelete(order._id)}>
                            Delete
                        </Button>

                    </div>
                ))
            }
        </div>
    )
}

export default Orders