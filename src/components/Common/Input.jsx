import React from "react";

function Input({ type, placeholder, formik, name }) {
  return (
    <>
      <input
        {...formik.getFieldProps(name)}
        type={type}
        placeholder={placeholder}
        className="bg-white w-full h-[50px] mt-6 
            appearance-none border border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight
            focus:outline-none focus:bg-white focus:border-[#E31C25]"
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="mt-1 mb-2 text-xs text-red-600">
          {formik.errors[name]}
        </div>
      )}
    </>
  );
}

export default Input;
