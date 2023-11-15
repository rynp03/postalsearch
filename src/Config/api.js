import axios from "axios";

const URL = "https://api.zippopotam.us/in";

export const getAddress = async (zcode) => {
     try {
          return await axios.get(`${URL}/${zcode}`);
     } catch (error) {
          console.log("Error While fetching data", error);
     }
}