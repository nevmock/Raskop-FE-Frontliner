import React from "react";

const TextArea = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  label = null,
  validations,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
      ></textarea>
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

export default TextArea;
