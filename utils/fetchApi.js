import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
     const {data} = await axios.get((url), {
          headers: {
               'X-RapidAPI-Key': 'b6c81705b2msh6dba127d0f600f5p18c3f6jsn68cd5abde8d2',
               'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
             }
     })

     return data;
}