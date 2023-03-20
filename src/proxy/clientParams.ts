import { Md5 } from "ts-md5";

const getKeysFromEnv = () => {
  const PUBLIC_KEY = __PUBLIC_KEY__ || "";
  const PRIVATE_KEY = __PRIVATE_KEY__ || "";

  return { PUBLIC_KEY, PRIVATE_KEY };
};

const getParams = () => {
  const timestamp = Number(new Date());
  const md5Hash = new Md5();
  const { PUBLIC_KEY, PRIVATE_KEY } = getKeysFromEnv();

  md5Hash.appendStr(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  return { apikey: __PUBLIC_KEY__, ts: timestamp, hash: md5Hash.end() };
};

export default getParams;
