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
      <div>
        <label className='block text-gray-700 lg:text-lg font-bold mb-3'>
          {label}
          <input
            className='lg:text-lg mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
            {...field}
            {...props}
          />
        </label>
      </div>
      {meta.touched && meta.error ? (
        <div className='error text-red-500 text-lg'>{meta.error}</div>
      ) : null}
    </>
  );
};

export default InputField;
