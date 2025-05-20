//componente para buscar el clima
'use client'
import { useState } from 'react';

const SearchBar = ({onSearch, onLocationSearch}) => {
    const [city, setCity] = useState(''); // city es el estadi actual y setcity es para la actualzacion

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()){
            onSearch(city);
        }
    }
    const handleLocationSearch = () => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords;
                onLocationSearch(latitude, longitude);
            }, (error) => {
                console.error('Error al obtener la ubicación', error);alert("No se puedo encontrar tu ubicación, por favor intente buscar una ciudad manualmente")
            })
        }else{
            alert("Tu navegador no soporta geolocalizacion, por favor intente buscar una ciudad manualmente")
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Buscar ciudad..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Buscar
            </button>

            <button
              type="button"
              onClick={handleLocationSearch}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Mi ubicación
            </button>
          </form>
        </div>
      );
    };
    export default SearchBar;
