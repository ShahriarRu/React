import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Ot9Y4MSE_qhMF916X0Din928Umhrg8-UI7PdW3E--Tg",
  },
});
