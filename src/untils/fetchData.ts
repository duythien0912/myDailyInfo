import * as fetchImport from "isomorphic-unfetch";

const fetch = fetchImport.default || fetchImport;

export const fetchData = config => {
  const host =
    process.env.NODE_ENV === "production"
      ? "http://mydailyinfobackend.now.sh/"
      : "http://localhost:4000/";
  return fetch(host, config);
};
