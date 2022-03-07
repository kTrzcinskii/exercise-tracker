import { useFormikContext, useField } from "formik";
import { forwardRef, HTMLProps } from "react";
import DatePicker from "react-datepicker";

type InputProps = HTMLProps<HTMLInputElement>;

const DatePickerField = ({ ...props }: { [x: string]: any; name: string }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  const CustomInput = forwardRef<HTMLInputElement, InputProps>(
    ({ value, onClick, onChange }, ref) => {
      return (
        <input
          onClick={onClick}
          ref={ref}
          value={value}
          onChange={onChange}
          className='lg:text-lg mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-75 transition-all duration-75 ease-in-out'
        />
      );
    }
  );

  CustomInput.displayName = "CustomInput";

  return (
    <div className='mb-3'>
      <label
        className='block text-gray-700 lg:text-lg font-bold mb-1'
        onClick={(e) => e.preventDefault()}
      >
        Date
        <DatePicker
          {...field}
          {...props}
          selected={(field.value && new Date(field.value)) || null}
          onChange={(val) => {
            setFieldValue(field.name, val);
          }}
          customInput={<CustomInput />}
          shouldCloseOnSelect={true}
          dateFormat='yyyy-MM-dd'
        />
      </label>
      {meta.touched && meta.error ? (
        <div className='error text-red-500 text-sm lg:text-md'>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default DatePickerField;
