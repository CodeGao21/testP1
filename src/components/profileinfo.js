import React from 'react';
import { useLocation } from 'react-router-dom'; // Importar useLocation

export function ProfileInfo() {
  const location = useLocation(); // Usar useLocation para recibir los datos
  const { user } = location.state || {}; // Obtener el objeto user del estado

  // Función para decidir si se renderiza un campo como <p> o <input>
  const renderField = (value) => {
    const isEditable = Math.random() > 0.5; // 50% de probabilidad de ser <input> o <p>
    if (isEditable) {
      return (
        <input
          type="text"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          value={value}
          readOnly={!isEditable} // ReadOnly si es <input> aleatorio
        />
      );
    } else {
      return <p className="text-base text-gray-700">{value}</p>;
    }
  };

  return (
    <section className="h-screen bg-gray-100/50">
      <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <a href="#" className="relative block">
                <img
                  alt="profile"
                  src="https://picsum.photos/90"
                  className="mx-auto object-cover rounded-full h-16 w-16"
                />
              </a>
              <h1 className="text-gray-600">
                {user?.username || 'Username'}
              </h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          {/* Fullname */}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Fullname</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative">
                {renderField(user?.fullname || '')}
              </div>
            </div>
          </div>

          <hr />

          {/* Description */}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Description</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative">
                {renderField(user?.description || '')}
              </div>
            </div>
          </div>

          <hr />

          {/* URL */}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">URL</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className="relative">
                {renderField(user?.url || '')}
              </div>
            </div>
          </div>

          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
