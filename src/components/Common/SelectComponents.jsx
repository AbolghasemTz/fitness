import React from "react";

function Select({ selectOptions, name, formik }) {
  return (

    <div className="w-36">
      <select
        {...formik.getFieldProps(name)}
        name={name}
        className="bg-white h-auto mt-6 
            border border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight
            focus:outline-none focus:bg-white focus:border-[#E31C25]"
      >
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="mt-1 mb-2 text-xs text-red-600">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
}

export default Select;
