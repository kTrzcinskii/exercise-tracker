import { Formik, Form } from "formik";
import { Dispatch, SetStateAction } from "react";
import { CgSpinner } from "react-icons/cg";
import Button from "./Button";
import CloseBtn from "./CloseBtn";
import InputField from "./InputField";

interface CreateUserModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <div
      className={`${
        showModal ? "z-10" : "-z-10"
      } absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center`}
    >
      <div
        className={`${
          showModal
            ? "h-[286px] w-[346px] md:h-[310px] md:w-[382px] lg:h-[346px] lg:w-[426px] xl:h-[386px] xl:w-[473px]"
            : "w-0 h-0 py-0 px-0"
        } bg-white py-5 px-8 md:py-8 md:px-11 lg:py-11 lg:px-14 xl:py-16 xl:px-20 rounded-md shadow-lg shadow-slate-800 relative transition-all duration-200 ease-in-out`}
      >
        <div
          className={`${
            showModal ? "opacity-100" : "opacity-0"
          } transition-all duration-1000 ease-in-out`}
        >
          <CloseBtn onClick={() => setShowModal(false)} />
          <div>
            <h2 className='text-3xl text-blue-800 font-semibold text-center mb-8'>
              Create New User
            </h2>
          </div>
          <Formik
            initialValues={{ username: "" }}
            onSubmit={(values, { setErrors }) => {}}
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
    </div>
  );
};

export default CreateUserModal;
