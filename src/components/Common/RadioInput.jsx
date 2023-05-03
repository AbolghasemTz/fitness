import React from "react";

function RadioInput({ formik, name,radioOptions }) {
  return (
    <div>
      {radioOptions.map((item) => (
     <div className="mt-4 " key={item.value}>
        <input
          type="radio"
          id={item.value}
          name={name}
          value={item.value}
          onChange={formik.handleChange}
          checked={formik.values.gender === item.value}
         className="accent-[#E31C25] h-3 w-3 "
        />
        <label htmlFor={item.value} className="ml-2 text-gray-700 font-[600]">{item.label}</label>
     </div >
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <div className="mt-1 mb-2 text-xs text-red-600">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
}

export default RadioInput;
