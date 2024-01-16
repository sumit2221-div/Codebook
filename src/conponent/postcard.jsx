import React ,{useState} from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  

 
  

  
  
  
  return (
    <Link to = {`/post/ ${$id}`}>
        <div className='flex w-screen h-screen bg-grey-500 ' >
            <div className='h-[400px] w-[300px] bg-slate-300 text-black  rounded-xl justify-center align-items-center py-2 px-3'>
            <h2 className='relative right-[35%] justify-start text-black' > {title}</h2>
            
            <img   src={appwriteService. getFilePreview(featuredImage)} alt={title}
                className='rounded-xl h-[300px] w-[280px] justify-center align-items-center ' />
                 
                 

            </div>
          

        </div>
    </Link>
  )
}

export default PostCard
