import axios from "axios";
<<<<<<< HEAD
import getFromLocalStorage from "./getFromLocalStorage"; 
const addBookToCart = async (id,toast) => {
  try {
    const userId = localStorage.getItem('id')
    const url = `${process.env.REACT_APP_SERVER_BASE_URL_DEV}auth/addCart/${userId}`;
    const token = getFromLocalStorage("token");
    const totalData = {
      bookId:id
=======
import getFromLocalStorage from "./getFromLocalStorage";
const addBookToCart = async (id, toast) => {
  try {
    const userId = localStorage.getItem("id");
    const url = `${process.env.REACT_APP_SERVER_BASE_URL_DEV}auth/addCart/${userId}`;
    const token = getFromLocalStorage("token");
    const totalData = {
      bookId: id,
>>>>>>> fa89b8e485d8e9c8fba43cf011894449d31eceb3
    };
    axios
      .post(url, totalData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast({
<<<<<<< HEAD
            title: "Book added to cart successfully",
            status: "success",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
=======
          title: "Book added to cart successfully",
          status: "success",
          position: "bottom-left",
          duration: 9000,
          isClosable: true,
>>>>>>> fa89b8e485d8e9c8fba43cf011894449d31eceb3
        });
      })
      .catch((err) => {
        console.log("err", err);
        toast({
<<<<<<< HEAD
            title: "Something went wrong",
            status: "error",
            position: "bottom-left",
            duration: 9000,
            isClosable: true,
        });
      });
      console.log(id);
=======
          title: "Something went wrong",
          status: "error",
          position: "bottom-left",
          duration: 9000,
          isClosable: true,
        });
      });
    console.log(id);
>>>>>>> fa89b8e485d8e9c8fba43cf011894449d31eceb3
  } catch (err) {
    console.log(err);
  }
};

export default addBookToCart;
