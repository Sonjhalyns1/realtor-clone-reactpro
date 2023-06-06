import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../firebase'
import { toast } from 'react-toastify'

export default function Contacting({userRef, listing}) {
    const [landlord, setLandlord] = useState(null)
    const [message, setMessage] = useState("")
    useEffect(() => {
        async function getLandlord(){
            const docRef = doc(db, "users", userRef)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setLandlord(docSnap.data())
            }else{
                toast.error("Could not get landlord data")
            }
        }
        getLandlord();
    },[userRef]
    )
    function onChange(e){
        setMessage(e.target.value);
    }
    
  return (
    <>{landlord !== null && (
        <div className='flex flex-col w-full'>
            <p className='mb-3'> Contact {landlord.name} about this listing.</p>
            <div>
                <textarea 
                name='message'
                id= "message"
                rows= "2"
                value = {message}
                onChange= {onChange}
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md transition duration-150 ease-in-out focus:bg-white go'>

                </textarea>
            </div>
            <a href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}>
                <button className='mt-2 w-full px-7 py-3 bg-blue-600 text-white rounded text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-700 active:shadow-lg text-center'>
                    send Message
                </button>
                
            </a>
        </div>

    )}</>
  )
}
