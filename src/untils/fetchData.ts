import * as fetchImport from "isomorphic-unfetch";

const fetch = fetchImport.default || fetchImport;

export const fetchData = config => {
  const host =
    process.env.NODE_ENV === "production"
      ? "https://mydailyinfobackend.now.sh/"
      : "http://localhost:4000/";
  return fetch(host, config);
};
