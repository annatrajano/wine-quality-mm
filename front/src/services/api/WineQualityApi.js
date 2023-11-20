// Main imports
import axios from "axios";

//Define API BASE_URL
const  REACT_APP_API_WINE_QUALITY = "http://127.0.0.1:5000"; 

// Create axios instance, with specif request props(headers, auth, body, etc...)
export default axios.create({
    baseURL: REACT_APP_API_WINE_QUALITY,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
});