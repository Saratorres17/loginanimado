import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.css';

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Bienvenido, ${email}!`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="login-container w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="https://example.com/animal-logo.png" // Reemplaza con una URL de una imagen de un animal
            alt="Animal Logo"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Inicia sesión con tu cuenta animal</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field w-full"
              placeholder="Ingresa tu correo"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field w-full"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
