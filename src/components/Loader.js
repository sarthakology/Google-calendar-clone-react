import React, { useContext } from 'react';
import GlobalContext from "../context/GlobalContext";

const Loader = () => {
  const { loader } = useContext(GlobalContext);

  if (!loader) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div>
    </div>
  );
};

export default Loader;
