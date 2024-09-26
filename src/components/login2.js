import { useState } from 'react';

const Login2 = () => {
  const [email, setEmail] = useState(''); // Estado para el correo
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [error, setError] = useState(''); // Estado para manejar los errores

  const handleSubmit = () => {
    // Validación del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('El correo no tiene un formato válido');
      return;
    }

    // Validación de la contraseña
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Si no hay errores, limpiar el mensaje de error
    setError('');

    // Aquí puedes hacer la petición POST para enviar el correo y la contraseña
    // Ejemplo de redirección:
    console.log("Login exitoso"); // Puedes manejar la redirección o el manejo de estado global aquí.
    window.location.href = '/home'; // Redirigir al home
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Imagen al lado del formulario */}
        <div className="w-1/2 h-auto hidden md:block">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Imagen de login"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Contenedor del formulario */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Correo electrónico</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Ingrese su correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login2;
