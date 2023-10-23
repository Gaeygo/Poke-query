import axios, { AxiosInstance } from "axios";


const instance  = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
        "Content-Type": "application/json",
        "key": "63a63cc5-1f3c-4e8a-8681-4221812c7aa3"
    }
    
})

// const log = (ins: AxiosInstance) :void => {
//     console.log(ins);
    
// }

export default instance