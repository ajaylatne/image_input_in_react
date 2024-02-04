import React, { useEffect, useState } from 'react'
import { showImagesFromDB } from '../APIServices/APIServices';


function ShowImage() {
  const [images, setImages] = useState([]);

  function showImages(){
    showImagesFromDB().then((request)=>{ setImages(request.data) }).catch()
  }

  useEffect(()=>{ showImages() }, [])
  return (
    <div>
      {
        images.map((image)=>{
          const url = JSON.parse(image.dataUrl);
          return(
          <div key={ image.id }>
              <img src={ url } width={"100px"}/>
          </div>
        )})
      }
    </div>
  )
}

export default ShowImage
