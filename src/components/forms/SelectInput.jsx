import React from "react";

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
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value} // Use value prop here to control the selected option
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">{placeholder}</option>
        {datas.length > 0 &&
          datas.map((data, index) => (
            <option key={index} value={data.value}>
              {data.menu}
            </option>
          ))}
      </select>
      {validations &&
        validations.map(
          (validation, index) =>
            validation.name === name && (
              <p key={index} className="mt-2 text-sm text-red-500">
                {validation.message}
              </p>
            )
        )}
    </div>
  );
};

export default SelectInput;
