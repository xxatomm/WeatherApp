
//  servicios para llamadas a la API

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(data.message);
  } catch (error) {
    throw error;
  }
};

export const getWeatherByLocation = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(data.message);
  } catch (error) {
    throw error;
  }
};