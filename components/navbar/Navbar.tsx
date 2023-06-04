import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 bg-gray-800 px-6 py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-white">Logo</div>

        {/* Buscador */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="mr-2 rounded-md bg-gray-200 px-4 py-2 focus:outline-none"
          />
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Buscar
          </button>
        </div>

        {/* Login */}
        <div className="text-white">
          <button className="rounded-md border border-white bg-transparent px-4 py-2 hover:bg-white hover:text-black">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
