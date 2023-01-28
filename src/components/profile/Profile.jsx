import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
const Profile = ({ user, setUser }) => {

    const navigate = useNavigate()

    const auth = getAuth();

    const handleSignOut = () => {


        signOut(auth).then(() => {
            toast("Sign Out success")
            setUser({})
            navigate("/")

        }).catch((error) => {
            toast(error)
        });
    }

    return (
        <div className='my-10'>
            <h2>Your name:{user.displayName}</h2>
            <h3>Your email: {user.email}</h3>
            <button onClick={() => handleSignOut()}
                style={{ padding: '.5rem', background: 'black', color: 'white', cursor: 'pointer' }}>Sign Out</button>

        </div>
    )
}

export default Profile