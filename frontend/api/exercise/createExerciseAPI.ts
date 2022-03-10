import axios from "axios";

const createExercieAPI = async (
  userId: string,
  description: string,
  duration: number,
  date: string
) => {
  const endpoint = `https://exercise-tracker-kt.herokuapp.com/api/users/${userId}/exercises`;

  try {
    const response = await axios.post(
      endpoint,
      { description, duration, date },
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

export default createExercieAPI;
