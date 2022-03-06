import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { CgSpinner } from "react-icons/cg";
import useCreateUser from "../hooks/mutation/useCreateUser";
import Button from "./Button";
import CloseBtn from "./CloseBtn";
import InputField from "./InputField";
import * as Yup from "yup";

interface CreateUserModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const validationSchema = Yup.object({
  username: Yup.string().required("Please enter username"),
});

const CreateUserModal: React.FC<CreateUserModalProps> = ({
  showModal,
  setShowModal,
}) => {
  const { mutateAsync, isError, error } = useCreateUser();

  const router = useRouter();

  return (
    <div
      className={`${
        showModal ? "z-10 opacity-100" : "delay-500 -z-10 opacity-0"
      } absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center transition-all duration-100 ease-in-out`}
    >
      <div
        className={`${
          showModal ? "delay-100" : "-translate-y-[200%]"
        } bg-white py-5 px-8 md:py-8 md:px-11 lg:py-11 lg:px-14 xl:py-16 xl:px-20 rounded-md shadow-lg shadow-slate-800 relative transition-all duration-500 ease-in-out`}
      >
        <CloseBtn onClick={() => setShowModal(false)} />
        <div>
          <h2 className='text-3xl text-blue-800 font-semibold text-center mb-8'>
            Create New User
          </h2>
        </div>
        <Formik
          initialValues={{ username: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setErrors }) => {
            const value = await mutateAsync(values);
            if (value.Error) {
              setErrors({ username: value.Error });
            }

            if (isError) {
              setErrors({ username: error?.message });
            }

            if (value.username && value._id) {
              router.push(`/user/${value._id}`);
            }
          }}
        >
          {({ values, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div className='flex flex-col'>
                <InputField
                  label='Username'
                  name='username'
                  placeholder='enter username'
                  type='text'
                  value={values.username}
                />
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  classNames='btn-primary w-36 mx-auto mt-8'
                >
                  {isSubmitting ? (
                    <CgSpinner className='inline-block mr-2 animate-spin text-xl' />
                  ) : (
                    "Create User"
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateUserModal;
