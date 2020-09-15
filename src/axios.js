import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c48f2.cloudfunctions.net/api",
  //http://localhost:5001/clone-c48f2/us-central1/api",
});

export default instance;
