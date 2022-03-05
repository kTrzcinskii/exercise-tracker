import { Formik, Form } from "formik";
import { Dispatch, SetStateAction } from "react";
import { CgSpinner } from "react-icons/cg";
import Button from "../Button";
import CloseBtn from "../CloseBtn";
import InputField from "../InputField";

interface CreateLogModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const CreateLogModal: React.FC<CreateLogModalProps> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <div
      className={`${
        showModal ? "z-10 opacity-100" : "delay-500 -z-10 opacity-0"
      } fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center transition-all duration-100 ease-in-out`}
    >
      <div
        className={`${
          showModal ? "delay-100" : "-translate-x-[500%]"
        } bg-white py-5 px-8 md:py-8 md:px-11 lg:py-11 lg:px-14 xl:py-16 xl:px-20 rounded-md shadow-lg shadow-slate-800 relative transition-all duration-500 ease-in-out`}
      >
        <CloseBtn onClick={() => setShowModal(false)} />
        <div>
          <h2 className='text-3xl text-blue-800 font-semibold text-center mb-8'>
            Add New Exercise
          </h2>
        </div>
        <Formik
          initialValues={{
            description: "",
            duration: "",
            date: `${new Date().toISOString().slice(0, 10)}`,
          }}
          onSubmit={async (values, { setErrors }) => {
            console.log(values);
          }}
        >
          {({ values, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div className='flex flex-col'>
                <InputField
                  label='Description'
                  name='description'
                  placeholder='enter description'
                  type='text'
                  value={values.description}
                />
                <InputField
                  label='Duration'
                  name='duration'
                  placeholder='enter duration'
                  type='number'
                  value={values.duration}
                />
                <InputField
                  label='Date'
                  name='Date'
                  type='date'
                  value={values.date}
                />
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  classNames='btn-primary w-44 mx-auto mt-8'
                >
                  {isSubmitting ? (
                    <CgSpinner className='inline-block mr-2 animate-spin text-xl' />
                  ) : (
                    "Add New Exercise"
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

export default CreateLogModal;
