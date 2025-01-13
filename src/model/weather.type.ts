// export type weather={
//     items : {
//         id:{
//             update_timestamp:string;
//             timestamp:string;
//             forecasts:{
//                 id_sub:{
//                     temprature:{
//                         low:number;
//                         high:number;
//                     };
//                     date:string;
//                     forecast:string;
//                     relative_humidity:{
//                         low:number;
//                         high:number;
//                     };
//                     wind:{
//                         speed:{
//                             low:number;
//                             high:number;
//                         };
//                         direction:string;
//                     };
//                     timestamp:string;
//                 };
//             };
//         };
//     };
//     api_info : string;
// }
// export type items={
//     id:[];
// }

// export type id={
//     update_timestamp:string;
//     timestamp:string;
//     forecasts:[];
// }

// export type forecasts={
//     id_sub:[];
// }

// export type id_sub={
//     temprature:[];
//     date:string;
//     forecast:string;
//     relative_humidity:[];
//     wind:[];
//     timestamp:string;
// }

// export type temprature={
//     low:number;
//     high:number;
// }

// export type relative_humidity={
//     low:number;
//     high:number;
// }

// export type wind={
//     speed:[];
//     direction:string;
// }

// export type speed={
//     low:number;
//     high:number;
// }

// export interface weather {
//     items: Array<{
//       update_timestamp: string;
//       timestamp: string;
//       forecasts: Array<{
//         temperature: { low: number; high: number };
//         date: string;
//         forecast: string;
//         relative_humidity: { low: number; high: number };
//         wind: { speed: { low: number; high: number }; direction: string };
//         timestamp: string;
//       }>;
//     }>;
//     api_info: { status: string };
//   }
// Define a type for the forecast
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
  