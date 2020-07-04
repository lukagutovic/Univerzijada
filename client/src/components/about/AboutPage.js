import React from 'react'
// import TuristickiSadrzaj from '../TuristickiSadrzaj/TuristickiSadrzaj'
import PostData from '../../JSON/data.json'


const AboutPage = () => {
 
  return (
    <div className="container">
     {PostData.map((postDetail, index)=> {
        return <div className="cards-wrapper">
   <div className="cards">
      <div className="card-item">
        <div className="card-image">
      <img className="travell-images" src={postDetail.image} />
        </div>
        <div className="card-info">
     <h2 className="card-title">{postDetail.name}</h2>
     <p className="card-intro">{postDetail.description.slice(0, 100)}...</p>
        </div>
      </div>
    </div>
     </div>
   })}
   

  </div>
  )

}

export default AboutPage
