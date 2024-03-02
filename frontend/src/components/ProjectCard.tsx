import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProjectCard = ({name, comments}) => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/project/${comments}`)} className='w-[80vw] hover:scale-105 transition-all 400ms cursor-pointer my-5 mx-auto border-2 border-black rounded-lg p-4'>
        <div className='font-bold text-2xl'>{name}</div>
        <div>Comments: {comments}</div>
    </div>
  )
}

export default ProjectCard