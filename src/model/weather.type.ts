export interface Forecast {
    temperature: { low: number; high: number };
    date: string;
    forecast: string;
    relative_humidity: { low: number; high: number };
    wind: { speed: { low: number; high: number }; direction: string };
    timestamp: string;
  }
  
  // Define a type for items in weatherData
  export interface WeatherItem {
    update_timestamp: string;
    timestamp: string;
    forecasts: Forecast[];
  }
  
  // Define the main weather type
  export interface weather {
    items: WeatherItem[];
    api_info: { status: string };
  }
  