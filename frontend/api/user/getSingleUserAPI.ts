import axios from "axios";
import { ISingleUser, IUser } from "../../lib/IUser";

const getSingleUserAPI = async (id: string): Promise<ISingleUser> => {
  let endpoint = `http://localhost:5000/api/users/${id}/logs`;

  const response = await axios.get(endpoint);

  return response.data;
};

export default getSingleUserAPI;
