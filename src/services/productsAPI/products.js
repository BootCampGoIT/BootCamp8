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

export const getProducts = async () => {
  try {
    const response = await axios.get("/products.json");
    if (response.data) {
      console.log("response :>> ", response.data);
      const categories = Object.keys(response.data);
      console.log("categories :>> ", categories); //["tools", "toys", "cars"]
      const products = categories.reduce((acc, category) => {
        const categoryKeys = Object.keys(response.data[category]); //["-Mfb7eAtYbe7JETQtOgs", "-Mfb7jxFtAjMkX3x0I2n"]
        console.log("categoryKeys :>> ", categoryKeys);

        acc[category] = categoryKeys.map((key) => ({
          id: key,
          ...response.data[category][key],
        }));
        return acc;
      }, {});
      console.log("products :>> ", products);
      return products;
    } else {
      return {};
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductByCategory = async (category) => {
  try {
    return await axios.get(`/products/${category}.json`);
  } catch (error) {
    throw new Error(error);
  }
};

export const removeProductByID = async (category, id) => {
  try {
    const res = await axios.delete(`/products/${category}/${id}.json`);
    console.log('res :>> ', res);
  } catch (error) {
    // throw new Error(error)
    console.dir(error);
  }
};

// const data = {};
// const value = "cars";
// const value2 = "tools";
// data[value] = [];
// data[value2] = [];

// [1, 2, 3, 4, 5].forEach((num) => console.log(num));
// [1, 2, 3, 4, 5].map((num) => num + 1);

// [1, 2, 3, 4, 5].reduce((acc, num) => {
//   acc += num;
//   return acc;
// }, 0);

// [1, 2, 3, 4, 5].reduce((acc, num) => {
//   acc[num] = [];

//   return acc;
// }, {});

// [1, 2, 3, 4, 5]
//   .map((num) => ({ id: num, name: "" }))
//   .find((item) => item.id === 3)
//   [(1, 2, 3, 4, 5)].filter((num) => num > 3);

// [1, 2, 3, 4, 5].some((num) => num === 3); //true
// [1, 2, 3, 4, 5].every((num) => num === 5); //false
