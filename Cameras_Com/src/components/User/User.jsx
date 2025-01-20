import React from 'react'
import {useParams} from 'react-router-dom'
export default function User() {
    const {userid}=useParams()
  return (
    <div className='text-center text-2xl bg-slate-700 text-white px-5 py-5'>
      User:{userid}
    </div>
  )
}
