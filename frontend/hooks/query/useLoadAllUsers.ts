import { useQuery } from "react-query";
import getAllUsersAPI from "../../api/user/getAllUsersAPI";
import { IUser } from "../../lib/IUser";

const useLoadAllUsers = () => {
  return useQuery<IUser[], Error>("allUsers", () => getAllUsersAPI());
};

export default useLoadAllUsers;
