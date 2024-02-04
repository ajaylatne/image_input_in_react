import axios from "axios";


const baseUrl = 'http://localhost:8000/images'
function saveImageToDB(data){
    return axios.post(baseUrl, data)
}

function showImagesFromDB(){
    return axios.get(baseUrl)
}
export { saveImageToDB, showImagesFromDB }