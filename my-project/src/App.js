// src/App.js
import React from 'react';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Mi Página con React y Tailwind</h1>
      </header>

      <nav className="bg-gray-200 p-2 text-center space-x-4">
        <a href="#inicio" className="text-blue-600 hover:underline">Inicio</a>
        <a href="#servicios" className="text-blue-600 hover:underline">Servicios</a>
        <a href="#contacto" className="text-blue-600 hover:underline">Contacto</a>
      </nav>

      <main className="flex-grow p-4">
        <section className="max-w-md mx-auto bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold mb-2">Bienvenido a mi página</h2>
          <p className="text-gray-700">Esta es una simple página creada con React y Tailwind CSS.</p>
        </section>
      </main>

      <footer className="bg-blue-600 text-white text-center p-2 mt-auto">
        <p>© 2024 Jesús Carlos López Villalba</p>
      </footer>
    </div>
  );
}

export default App;
