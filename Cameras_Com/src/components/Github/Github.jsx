import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
  const data=useLoaderData()
  // const [data, setData] = useState()
  // useEffect(() => {
  //   fetch('https://api.github.com/users/samarth336')
  //     .then(Response => Response.json())
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //     })
  // }, [])
  return (
    <div className='text-center bg-slate-500 py-5 text-white text-2xl'>
      Github follower:{data.followers}
      <img className='w-52 mx-5' src={data.avatar_url} alt="Git Picture" />
    </div>
  )
}

export const githubInfo=async()=>{
  const response = await fetch('https://api.github.com/users/samarth336')
  return response.json()
}
