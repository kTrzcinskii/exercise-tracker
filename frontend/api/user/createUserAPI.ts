import axios from "axios";
import { IUser } from "../../lib/IUser";

const endpoint = "http://localhost:5000/api/users";

const createUserAPI = async (username: string): Promise<IUser> => {
  try {
    const response = await axios.post(
      endpoint,
      {
        username,
      },
      {
        validateStatus: () => true,
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("There must be a problem with a server, try againt later");
  }
};

export default createUserAPI;
