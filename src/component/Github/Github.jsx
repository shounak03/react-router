import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shounak03')
    //     .then(resp=>resp.json())
    //     .then(data=>setData(data))
    // })
  return (
    <div className='text-center m-4 bg-gray-200 text-black p-4 text-3xl '>
        Github Followers: {data.followers}

        <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

//optimized version of useEffect, loades data while routing itself
export const infoLoader = async()=>{
    const resp = await fetch('https://api.github.com/users/shounak03');
    const data = await resp.json();
    return data;
}