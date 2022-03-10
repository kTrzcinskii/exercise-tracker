import axios from "axios";
import { ISingleUser } from "../../lib/IUser";

const getSingleUserAPI = async (id: string): Promise<ISingleUser> => {
  let endpoint = `https://exercise-tracker-kt.herokuapp.com/api/users/${id}/logs`;

  const response = await axios.get(endpoint);

  return response.data;
};

export default getSingleUserAPI;
