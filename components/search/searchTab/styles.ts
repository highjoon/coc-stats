const buttonStyle = (isActive: boolean) => {
  return `${
    isActive ? "bg-header text-white" : "text-neutral-400 bg-gray-600"
  } w-1/2 h-full font-bold transition duration-300 ease focus:outline-none border-default border-1`;
};

export default buttonStyle;
