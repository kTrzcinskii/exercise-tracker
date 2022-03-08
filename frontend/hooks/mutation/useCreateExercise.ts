import { useMutation } from "react-query";
import createExercieAPI from "../../api/exercise/createExerciseAPI";
import { ICreateExerciseParams, IExerciseResponse } from "../../lib/IUser";

const useCreateExercise = () => {
  return useMutation<IExerciseResponse, Error, ICreateExerciseParams>(
    async ({ userId, description, duration, date }) =>
      createExercieAPI(userId, description, duration, date)
  );
};

export default useCreateExercise;
