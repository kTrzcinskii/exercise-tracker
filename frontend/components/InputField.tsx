import { InputHTMLAttributes } from "react";
import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className='mb-3'>
        <label className='block text-gray-700 lg:text-lg font-bold mb-1'>
          {label}
          <input
            className='lg:text-lg mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-75 transition-all duration-75 ease-in-out'
            {...field}
            {...props}
          />
        </label>
        {meta.touched && meta.error ? (
          <div className='error text-red-500 text-sm lg:text-md'>
            {meta.error}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default InputField;
