import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};
const Button = ({ children }: ButtonProps) => {
  return (
    <button className="buttons text-white bg-gradient-to-r from-gray-900 to-gray-700 px-7 py-2 rounded-md mt-4">
      {children}
    </button>
  );
};

export default Button;
