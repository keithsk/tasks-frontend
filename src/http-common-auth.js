import axios from "axios";

export default axios.create({
  headers: {
    "Content-type": "application/json",
    "Authorization": {
      toString () {
        
        return localStorage.getItem('token');

      }
    }
  }
});