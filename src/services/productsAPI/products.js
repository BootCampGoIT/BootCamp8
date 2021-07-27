import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const createNewAdv = async (state) => {
  try {
    const response = await axios.post(
      `/products/${state.category.toLowerCase()}.json`,
      state
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
