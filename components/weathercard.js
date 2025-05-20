//componente para mostrar el clima  
const WeatherCard = ({ weatherData }) => {
    if (!weatherData) {
      return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
          <p className="text-center text-gray-500">
            Busca una ciudad para ver el clima
          </p>
        </div>
      );
    }
  
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">{weatherData.name}</h2>
          <div className="mt-4">
            <span className="text-6xl font-bold text-gray-900">
              {Math.round(weatherData.main.temp)}°C
            </span>
          </div>
          <p className="text-xl capitalize mt-4 text-gray-700">
            {weatherData.weather[0].description}
          </p>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-500">Humedad</p>
            <p className="text-gray-500 text-xl font-semibold">{weatherData.main.humidity}%</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-500">Viento</p>
            <p className="text-gray-500 text-xl font-semibold">{weatherData.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;