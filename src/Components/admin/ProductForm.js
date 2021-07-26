import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import { createCopy } from "../../utils/deepCopy";
import { ProductFormStyled } from "./ProductFormStyled";

const categories = ["Tools", "Toys"];

const INITIAL_STATE = {
  name: "",
  image: "",
  description: "",
  price: 0,
  category: categories[0],
  isSale: false,
  isAddData: false,
  changed: false,
};

function toDataURL(element) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
}

const ProductForm = ({ addNewProduct }) => {
  const [state, setState] = useState(INITIAL_STATE);
  useEffect(() => {
    const data = localStorage.getItem("productData");
    data && setState((prev) => ({ ...prev, ...JSON.parse(data) }));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("productData", JSON.stringify(state));
  // }, [state.name]);

  useEffect(() => {
    return () => {
      localStorage.setItem("productData", JSON.stringify(state));
    };
  });

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    // const { name, image, description, price, category, isSale } = state;
    try {
      const response = await axios.post(
        "https://shopbc8-30b11-default-rtdb.firebaseio.com/products.json",
        state
      );
      addNewProduct({ ...state, id: response.data.name });
    } catch (error) {
      //   console.log(error.response.data.error);
      setState((prev) => ({ ...prev, error: error.response.data.error }));
    }

    setState({ ...INITIAL_STATE });
  };

  const onHandleChange = async (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setState((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    if (type === "file") {
      const result = await toDataURL(e.target);
      console.log("result :>> ", result);
      setState((prev) => ({ ...prev, [name]: result }));
      return;
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ProductFormStyled>
      <form onSubmit={onHandleSubmit} className='productForm'>
        <label>
          Name
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Image
          <input type='file' name='image' onChange={onHandleChange} />
        </label>
        <label>
          Description
          <textarea
            name='description'
            cols='30'
            rows='10'
            value={state.description}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Price
          <input
            type='number'
            name='price'
            value={state.price}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Category
          <select
            name='category'
            value={state.category}
            onChange={onHandleChange}>
            {categories.map((category) => (
              <option value={category.toLowerCase()} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Is sale
          <input
            type='checkbox'
            name='isSale'
            checked={state.isSale}
            onChange={onHandleChange}
          />
        </label>

        <button type='submit'>Add product</button>
      </form>
    </ProductFormStyled>
  );
};

export default ProductForm;




// class ProductForm extends Component {
//   state = { ...INITIAL_STATE };

//   componentDidMount() {
//     const data = localStorage.getItem("productData");
//     data && this.setState((prev) => ({ ...prev, ...JSON.parse(data) }));
//   }

//   componentDidUpdate(prevProps, prevState) {
//     !prevState.changed && this.setState({ changed: true });

//     // localStorage.setItem("productData", JSON.stringify(this.state));
//   }

//   componentWillUnmount() {
//     localStorage.setItem("productData", JSON.stringify(this.state));
//   }

//   onHandleSubmit = async (e) => {
//     e.preventDefault();

//     // const result = { ...this.state };
//     // delete result.isAddData;
//     // console.log("result :>> ", result);

//     // console.log({
//     //   ...Object.keys(this.state) // []
//     //     .filter((item) => item !== "isAddData")
//     //     .reduce((acc, item) => {
//     //       acc[item] = this.state[item];
//     //       return acc;
//     //     }, {}),
//     // });

//     // const { name, image, description, price, category, isSale } = this.state;
//     // try {
//     //   const response = await axios.post(
//     //     "https://shopbc8-30b11-default-rtdb.firebaseio.com/products.json",
//     //     {
//     //       ...Object.keys(this.state) // []
//     //         .filter((item) => item !== "isAddData")
//     //         .reduce((acc, item) => {
//     //           acc[item] = this.state[item];
//     //           return acc;
//     //         }, {}),
//     //     }
//     //   );
//     //   this.props.addNewProduct({ ...this.state, id: response.data.name });
//     // } catch (error) {
//     //   //   console.log(error.response.data.error);
//     //   this.setState({ error: error.response.data.error });
//     // }

//     this.setState({ ...INITIAL_STATE });
//   };

//   onHandleChange = async (e) => {
//     const { name, value, checked, type } = e.target;
//     if (type === "checkbox") {
//       this.setState({ [name]: checked });
//       return;
//     }

//     if (type === "file") {
//       const result = await toDataURL(e.target);
//       console.log("result :>> ", result);
//       this.setState({ [name]: result });
//       return;
//     }
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { name, image, description, price, category, isSale } = this.state;
//     return (
//       <ProductFormStyled>
//         <form onSubmit={this.onHandleSubmit} className='productForm'>
//           <label>
//             Name
//             <input
//               type='text'
//               name='name'
//               value={name}
//               onChange={this.onHandleChange}
//             />
//           </label>
//           <label>
//             Image
//             <input type='file' name='image' onChange={this.onHandleChange} />
//           </label>
//           <label>
//             Description
//             <textarea
//               name='description'
//               cols='30'
//               rows='10'
//               value={description}
//               onChange={this.onHandleChange}
//             />
//           </label>
//           <label>
//             Price
//             <input
//               type='number'
//               name='price'
//               value={price}
//               onChange={this.onHandleChange}
//             />
//           </label>
//           <label>
//             Category
//             <select
//               name='category'
//               value={category}
//               onChange={this.onHandleChange}>
//               {categories.map((category) => (
//                 <option value={category.toLowerCase()} key={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label>
//             Is sale
//             <input
//               type='checkbox'
//               name='isSale'
//               checked={isSale}
//               onChange={this.onHandleChange}
//             />
//           </label>

//           <button type='submit'>Add product</button>
//         </form>
//       </ProductFormStyled>
//     );
//   }
// }

// export default ProductForm;

// const user = {
//   "name": "Alex",
//   "age": 30,
// };
// console.log(user.name);

// console.log(user["name"]); //Alex

// console.log(user.age);

// const getInfo = (key) => {
//   console.log(user[key]);
// };

// getInfo("name");
// getInfo("age");

// ===================
// const user = {
//   name: "Alex",
//   age: 30,
// };

// const newUser = { ...user };

// delete newUser.age;

// console.log("user :>> ", user);
// console.log("newUser :>> ", newUser);

// ===================
// const users = [
//   {
//     name: "Alex",
//     age: 30,
//   },
//   {
//     name: "Nikita",
//     age: 30,
//   },
// ];

// const newUsers = [...users];

// newUsers.pop();

// console.log("users :>> ", users);
// console.log('newUsers :>> ', newUsers);

// ----------------

// const data = [{ name: "1" }, { name: "2" }];

// const newData = createCopy(data);
// newData[0].name = "5";
// console.log("data :>> ", data);
// console.log("newData :>> ", newData);
