import axios from "axios";
import { IUser } from "../../lib/IUser";

const getAllUsersAPI = async (): Promise<IUser[]> => {
  let endpoint = "http://localhost:5000/api/users";

  const response = await axios.get(endpoint);

  return response.data;
};

export default getAllUsersAPI;
