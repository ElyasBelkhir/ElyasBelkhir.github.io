import React from 'react'
import Proj from '../assets/PersonalPortfolioPicture.jpg'

function ProjectItem({image, name, about, link}: { image: string; name: string; about: string; link: string }) {
  return (


  <div className="card" style={{width: '18rem'}}>
    <img src={image} className="card-img-top" alt="..."/>
    <div className="card-body" >
      <h5 className="card-title" >{name}</h5>
      <p className="card-text" >{about}</p>
      <a className="btn btn-primary" 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >Link</a>
    </div>
  </div>
   
  
  );
}

export default ProjectItem