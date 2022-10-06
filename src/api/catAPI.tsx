import axios from "axios";

export const getCat = async () => {
  let res = await axios.get(`https://cataas.com/cat?json=true`);

  console.log(
    `we hagve reached the end of the initial API call ${res.data.id}`
  );
  return res;
};
