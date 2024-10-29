import { get } from "../../utils/api";

export const getTop4Supplier = async () => {
  const response = await get("/users/top-4");
  return response;
};

export const getTop9Supplier = async (page = 1) => {
  const response = await get(`/users/top-9/${page}`);
  console.log({data:response.data});

  return response;
};
