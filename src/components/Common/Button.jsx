import React from 'react';

function Button({children, className}) {
    return (
        <button className={` text-white border-none py-3 px-5 ${className || ""}`}>
          {children}  
        </button>
    );
}

export default Button;