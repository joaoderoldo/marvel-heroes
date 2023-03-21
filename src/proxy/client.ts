import axios from "axios";

import getParams from "@/proxy/clientParams";

const client = axios.create({
  baseURL: __API_URL__,
  params: getParams(),
});

export default client;
