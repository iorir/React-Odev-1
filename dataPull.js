import axios from "axios";
const getData = async (userId) => {
  if (typeof userId === "number") {
    let userInfo;
    let userPosts;
    let mergedData;
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        userInfo = res.data;
      });
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((res) => {
        userPosts = res.data;
      });
    mergedData = {
      ...userInfo,
      ...userPosts,
    };
    return mergedData;
  } else {
    console.log("Numara girişi yapılmadı");
  }
};

export default getData;
