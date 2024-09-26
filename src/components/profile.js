import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Crear una instancia de useNavigate

  useEffect(() => {
    // Hacer la solicitud a la API de Mockaroo
    axios
      .get('https://my.api.mockaroo.com/insta.json?key=c3b25970')
      .then(response => {
        // Aquí seleccionas solo un usuario, por ejemplo el primero
        setUser(response.data[0]);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // Mientras se cargan los datos muestra un mensaje de carga
  if (!user) {
    return <div>Loading...</div>;
  }

  // Función para manejar el click en la imagen de perfil
  const handleProfileClick = () => {
    // Redirigir a la ruta '/profileinfo' pasando el objeto user como estado
    navigate('/profileinfo', { state: { user } });
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-2xl w-80">
      <div className="flex flex-row items-start gap-4">
        <img
          src="https://picsum.photos/90"
          alt="User profile"
          className="cursor-pointer"
          onClick={handleProfileClick} // Añadir onClick para redirigir
        />
        <div className="flex flex-col justify-between w-full h-28">
          <div>
            <p className="text-xl font-medium text-gray-800 dark:text-black">
              {user.username}
            </p>
            <p className="text-xs text-gray-400">{user.fullname}</p>
            <p className="text-xs text-gray-400">{user.description}</p>
            <p className="text-xs text-blue-400">
              <a href={user.url} target="_blank" rel="noopener noreferrer">
                {user.url}
              </a>
            </p>
          </div>
          <div className="w-full p-2 bg-blue-100 rounded-lg dark:bg-white">
            <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
              <p className="flex flex-col">
                Posts
                <span className="font-bold text-black dark:text-indigo-500">
                  {user.posts}
                </span>
              </p>
              <p className="flex flex-col">
                Followers
                <span className="font-bold text-black dark:text-indigo-500">
                  {user.followers}
                </span>
              </p>
              <p className="flex flex-col">
                Following
                <span className="font-bold text-black dark:text-indigo-500">
                  {user.suscriptions}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
