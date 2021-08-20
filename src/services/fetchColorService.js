import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      console.log("fetchColorService", res);

      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default fetchColorService;
