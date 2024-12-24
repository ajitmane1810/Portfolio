import React from "react";

const Button = ({
  text,
  onClick,
  type = "button",
  color = "blue",
  size = "medium",
  border = "solid",
  className = "",
  disabled = false,
}) => {
  const baseStyles =
    "text-3xl font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200";

  // Define button colors based on the "color" prop
  const colorClasses = {
    blue: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    red: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    green: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
    gray: "bg-gray-900 text-white hover:bg-gray-600 focus:ring-gray-500",
  };

  // Define button sizes based on the "size" prop
  const sizeClasses = {
    small: "px-10 py-2 text-sm",
    medium: "px-16 py-3 text-base",
    large: "px-20 py-4 text-lg",
  };

  const borderClasses = {
    solid: "border-2 border-solid border-slate-300",
    dashed: "border-2 border-dashed border-gray-700",
    dotted: "border-2 border-dotted border-gray-700",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${colorClasses[color]} ${sizeClasses[size]} ${
        borderClasses[border]
      } ${className} ${disabled && "opacity-50 cursor-not-allowed"}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
