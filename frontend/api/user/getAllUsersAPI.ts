import axios from "axios";
import { IUser } from "../../lib/IUser";

const getAllUsersAPI = async (): Promise<IUser[]> => {
  let endpoint = "https://exercise-tracker-kt.herokuapp.com/api/users";

  const response = await axios.get(endpoint);

  return response.data;
};

export default getAllUsersAPI;
