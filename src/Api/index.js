import axios from "axios";
const API = "https://rickandmortyapi.com/api/";

export const get_characters = async (page = 1) => {
  try {
    let res = await axios.get(`${API}/character/?page=${page}`);
    return res.data;
  } catch (e) {
    return e;
  }
};
