import { useMutation } from "react-query";
import createUserAPI from "../../api/user/createUserAPI";
import { ICreateUserParams, IUser } from "../../lib/IUser";

const useCreateUser = () => {
  return useMutation<IUser, Error, ICreateUserParams>(
    async ({ username }) => await createUserAPI(username)
  );
};

export default useCreateUser;
