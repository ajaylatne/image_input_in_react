import React from 'react'
import { saveImageToDB } from '../APIServices/APIServices';



function GetImage() {
 function saveImage(data){
    saveImageToDB(data).then().catch()
 }  
 
 
 function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('fileInput');
    const reader = new FileReader();
    if(file){
        reader.addEventListener('load', function(e){
            const imageUrl = JSON.stringify(e.target.result);
            const imageData = {
                "name": file.name,
                "type": file.type,
                "size": file.size,
                "dataUrl": imageUrl
            }
            saveImage(imageData);
            document.getElementById('image-input').reset();


        })
    }
    reader.readAsDataURL(file);

 }


  return (
    <form onSubmit={ handleSubmit } id="image-input">
      <input type="file" name="fileInput" required accept='image/*'/>
      <br/>
      <br/>
      <input type='submit'/>
    </form>
  )
}

export default GetImage
