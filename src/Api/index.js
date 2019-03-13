import axios from "axios";
const API = "https://rickandmortyapi.com/api/";

export const get_characters = async () => {
  try {
    let res = await axios.get(`${API}\character`);
    return res.data;
  } catch (e) {
    return e;
  }
};
