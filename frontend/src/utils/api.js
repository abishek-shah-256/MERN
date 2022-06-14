import axios from "axios"

const api = axios.create({
     //instance create garxa that describe data ka bata aauxa
     baseURL: "http://localhost:5000",
     headers : {
         "Content-Type": "application/json"
 
     },
     withCredentials : true
})

export default api;
