import { useQuery } from "react-query";
import getSingleUserAPI from "../../api/user/getSingleUserAPI";
import { ISingleUser } from "../../lib/IUser";

const useLoadSingleUser = (userId: string) => {
  return useQuery<ISingleUser, Error>(["singleUser", userId], () =>
    getSingleUserAPI(userId)
  );
};

export default useLoadSingleUser;
