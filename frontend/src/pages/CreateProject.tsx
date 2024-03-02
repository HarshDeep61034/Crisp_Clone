import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreateProject = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      function handleCreateProject(){
        navigate("/projectid");
      }

  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden flex justify-center items-center'>
            <div>
            <p className='text-center my-3 text-red-500'>{error.length > 0 ? "Error : " + error : ""}</p>
      <form className='flex border-2 p-7 rounded-xl border-black flex-col' onSubmit={handleSubmit((data) => handleCreateProject(data))}>
      <p className='text-center font-bold text-xl'>Create new Project</p>
      <input className='p-4 py-3 my-4 border-2 outline-none border-black rounded-lg' type='text'  placeholder='Project Name' {...register('name', {required: true})} />
      {errors.name && <p className='text-red-500'>Please enter a Project name</p>}
      <input className='p-4 py-3 my-4 border-2 outline-none border-black rounded-lg' type='text'  placeholder='Discord Webhook URL' {...register('url', {required: true})} />
      {errors.url && <p className='text-red-500'>Please enter a webhook URL</p>}
      <input className='px-4 py-2 bordwe-2 border-green-700 bg-green-500 text-white rounded-xl cursor-pointer' type="submit" />
      <p className='text-center'>{loading ? " Authenticating User... " : ""}</p>
    </form>
    </div>
            
        </div>
  )
}

export default CreateProject