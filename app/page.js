'use client';

import { useState } from 'react';
import SearchBar from '../components/searchbar';
import WeatherCard from '../components/weathercard';
import { getWeatherByCity, getWeatherByLocation } from '../services/weather';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      setError(null);
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    } catch (err) {
      setError('No se pudo encontrar el clima para esta ciudad');
      setWeatherData(null);
    }
  };

  const handleLocationSearch = async (lat, lon) => {
    try {
      setError(null);
      const data = await getWeatherByLocation(lat, lon);
      setWeatherData(data);
    } catch (err) {
      setError('No se pudo obtener el clima para tu ubicación');
      setWeatherData(null);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-black via-slate-900 to-slate-600 text-white">
      <nav className="p-4 flex justify-between items-center">
        <div className="flex-1 flex justify-left">
          <img src="/logoXXATOMM.jpg" alt="XxAtomm" className="h-30" />
        </div>
      </nav>

      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">The Weather Explorer</h1>
        <p className="text-xl mb-12 text-gray-300">Descubra el tiempo del mundo</p>
        
        <div className="max-w-2xl mx-auto">
          <SearchBar onSearch={handleSearch} onLocationSearch={handleLocationSearch} />
        </div>

        {error && (
          <div className="w-full max-w-md mx-auto mt-4 p-4 bg-red-900/50 text-red-200 rounded-lg">
            {error}
          </div>
        )}

        <div className="mt-8">
          <WeatherCard weatherData={weatherData} />
        </div>
      </div>
      <footer className="rounded-lg shadow-sm m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">XxAtomm™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                  <a href="#" className="hover:underline">Contact</a>
              </li>
          </ul>
          </div>
      </footer>
    </main>
  );
}