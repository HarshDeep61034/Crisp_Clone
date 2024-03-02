import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectPage = () => {
    const {id} = useParams();
  return (
    <div>ProjectPage of {id}</div>
  )
}

export default ProjectPage