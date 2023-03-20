import axios from "axios";

import getParams from "@/proxy/clientParams";

console.log(getParams());

const client = axios.create({
  baseURL: __API_URL__,
  params: getParams(),
});

export default client;
