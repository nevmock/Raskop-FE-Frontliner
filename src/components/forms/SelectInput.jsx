import React from 'react';

const SelectInput = ({
  id,
  name,
  required = false,
  onChange,
  value,
  datas,
  validations,
  placeholder,
  disabled = false,
  label = null,
  icon = null,
}) => {
  return (
    <div className="w-full ">
      {label && (
        <div className="flex justify-between">
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {label}
          </label>
        </div>
      )}

      <div className="relative w-full ">
        <select
          id={id}
          name={name}
          value={value} // Use value prop here to control the selected option
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        >
          <option value="">{placeholder}</option>
          {datas.length > 0 &&
            datas.map((data, index) => (
              <option key={index} value={data.value}>
                {data.label}
              </option>
            ))}
        </select>
        {validations &&
          validations.map(
            (validation, index) =>
              (validation.name === name ||
                (validation.name === 'media_uri' && type === 'image')) && (
                <p key={index} className="mt-2 text-sm text-red-500">
                  {validation.message}
                </p>
              )
          )}
        {icon && (
          <div className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-black flex justify-center items-center">
            {icon}
          </div>
        )}
      </div>
    </div>

    // <div>
    //   <label
    //     htmlFor={id}
    //     className="block mb-2 text-sm font-medium text-gray-900"
    //   >
    //     {label}
    //   </label>
    //   <select
    //     id={id}
    //     name={name}
    //     value={value} // Use value prop here to control the selected option
    //     onChange={onChange}
    //     placeholder={placeholder}
    //     required={required}
    //     disabled={disabled}
    //     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
    //   >
    //     <option value="">{placeholder}</option>
    //     {datas.length > 0 &&
    //       datas.map((data, index) => (
    //         <option key={index} value={data.value}>
    //           {data.label}
    //         </option>
    //       ))}
    //   </select>
    //   {validations &&
    //     validations.map(
    //       (validation, index) =>
    //         validation.name === name && (
    //           <p key={index} className="mt-2 text-sm text-red-500">
    //             {validation.message}
    //           </p>
    //         )
    //     )}
    // </div>
  );
};

export default SelectInput;
