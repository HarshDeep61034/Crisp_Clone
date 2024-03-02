import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className='w-[100vw] text-white h-16 bg-sky-500 flex justify-between items-center'>
          <div className='mx-5 text-2xl font-bold'>Crisp_Clone <button onClick={()=>navigate("/new")} className='w-9 h-9 border-2 border-white mx-4 hover:bg-white hover:text-sky-500'>+</button></div>
          <div className='mx-5 text-xl font-semibold'>
            Harsh Deep
          </div>
        </div>
        <ProjectCard  name="Next_JS_Course" comments={69}/>
        <ProjectCard  name="Kafka_Course" comments={40}/>
    </div>
  )
}

export default Dashboard