import { Component, Inject, inject ,PLATFORM_ID } from '@angular/core';
import { WeatherService } from './weather.service';
import { weather, WeatherItem } from '../model/weather.type';
import { catchError } from 'rxjs';
import data  from '../assets/data.json'
import  {AgGridModule}  from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { isPlatformBrowser } from '@angular/common';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-basic-dist';
import { waitForAsync } from '@angular/core/testing';

PlotlyModule.plotlyjs = PlotlyJS;

// Register the module
ModuleRegistry.registerModules([ClientSideRowModelModule]);
@Component({
  selector: 'app-root',
  imports:[AgGridModule,PlotlyModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  weatherService = inject(WeatherService);
  weatherData!: weather;
  // weatherData = {
  //     "items": [
  //       {
  //         "update_timestamp": "2019-12-24T06:02:12+08:00",
  //         "timestamp": "2019-12-24T05:31:00+08:00",
  //         "forecasts": [
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-25",
  //             "forecast": "Afternoon thundery showers.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 15,
  //                 "high": 25
  //               },
  //               "direction": "NNE"
  //             },
  //             "timestamp": "2019-12-25T00:00:00+08:00"
  //           },
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-26",
  //             "forecast": "Afternoon thundery showers.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 10,
  //                 "high": 20
  //               },
  //               "direction": "NNE"
  //             },
  //             "timestamp": "2019-12-26T00:00:00+08:00"
  //           },
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-27",
  //             "forecast": "Afternoon thundery showers.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 10,
  //                 "high": 25
  //               },
  //               "direction": "NNW"
  //             },
  //             "timestamp": "2019-12-27T00:00:00+08:00"
  //           },
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-28",
  //             "forecast": "Afternoon thundery showers.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 10,
  //                 "high": 25
  //               },
  //               "direction": "NNW"
  //             },
  //             "timestamp": "2019-12-28T00:00:00+08:00"
  //           }
  //         ]
  //       },
  //       {
  //         "update_timestamp": "2019-12-24T10:32:12+08:00",
  //         "timestamp": "2019-12-24T09:55:00+08:00",
  //         "forecasts": [
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-25",
  //             "forecast": "Afternoon thundery showers.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 15,
  //                 "high": 25
  //               },
  //               "direction": "NNE"
  //             },
  //             "timestamp": "2019-12-25T00:00:00+08:00"
  //           },
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-26",
  //             "forecast": "Afternoon thundery showers.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 10,
  //                 "high": 20
  //               },
  //               "direction": "NNE"
  //             },
  //             "timestamp": "2019-12-26T00:00:00+08:00"
  //           },
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-27",
  //             "forecast": "Afternoon thundery showers.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 10,
  //                 "high": 25
  //               },
  //               "direction": "NNW"
  //             },
  //             "timestamp": "2019-12-27T00:00:00+08:00"
  //           },
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-28",
  //             "forecast": "Fair and occasionally windy.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 15,
  //                 "high": 25
  //               },
  //               "direction": "NNW"
  //             },
  //             "timestamp": "2019-12-28T00:00:00+08:00"
  //           }
  //         ]
  //       },
  //       {
  //         "update_timestamp": "2019-12-24T17:32:12+08:00",
  //         "timestamp": "2019-12-24T17:19:00+08:00",
  //         "forecasts": [
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-25",
  //             "forecast": "Afternoon thundery showers.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 15,
  //                 "high": 25
  //               },
  //               "direction": "NNE"
  //             },
  //             "timestamp": "2019-12-25T00:00:00+08:00"
  //           },
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-26",
  //             "forecast": "Afternoon thundery showers.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 10,
  //                 "high": 20
  //               },
  //               "direction": "NNE"
  //             },
  //             "timestamp": "2019-12-26T00:00:00+08:00"
  //           },
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-27",
  //             "forecast": "Afternoon thundery showers.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 10,
  //                 "high": 25
  //               },
  //               "direction": "NNW"
  //             },
  //             "timestamp": "2019-12-27T00:00:00+08:00"
  //           },
  //           {
  //             "temperature": {
  //               "low": 24,
  //               "high": 34
  //             },
  //             "date": "2019-12-28",
  //             "forecast": "Fair and occasionally windy.",
  //             "relative_humidity": {
  //               "low": 55,
  //               "high": 95
  //             },
  //             "wind": {
  //               "speed": {
  //                 "low": 15,
  //                 "high": 25
  //               },
  //               "direction": "NNW"
  //             },
  //             "timestamp": "2019-12-28T00:00:00+08:00"
  //           }
  //         ]
  //       }
  //     ],
  //     "api_info": {
  //       "status": "healthy"
  //     }
  //   };
  rowData: any[] = [];
  selectedDate: string = '25-12-2019'; // User-selected date in dd-mm-yyyy format

  colDefs = [
    { field: 'Date', headerName: 'Date' },
    { field: 'max-temperature', headerName: 'Max Temperature' },
    { field: 'min-temperature', headerName: 'Min Temperature' },
    { field: 'max-humidity', headerName: 'Max Humidity' },
    { field: 'min-humidity', headerName: 'Min Humidity' }
  ];

  defaultColDef = { sortable: true, filter: true };
  chartData: any[] = [];
  chartLayout: any = {};

  ngOnInit(): void {
    this.weatherService
    .getWeatherForecast()
    .pipe(
      catchError((e)=>{
        console.log(e);
        throw e;
      })
    ).subscribe((data)=>{
      this.weatherData = data;
      if (data) {
        console.log(this.weatherData);
        console.log("David");
        this.updateRowDataByDate(this.selectedDate);
        this.generateChart();
      }
    });

    import('plotly.js-basic-dist').then(PlotlyJS => {
      PlotlyModule.plotlyjs = PlotlyJS;
      this.generateChart();
    }).catch(error => {
      console.error('Error loading Plotly:', error);
    });
  }



  updateRowDataByDate(selectedDate: string): void {
    const items = this.weatherData.items;
    let forecastFound = false;
  
    // Reformat the user-selected date (dd-mm-yyyy) to yyyy-mm-dd for comparison
    const formattedSelectedDate = this.convertToISODate(selectedDate);
  
    // Iterate over all items to find the forecast for the selected date
    for (let item of items) {
      for (let forecast of item.forecasts) {
        if (forecast.date === formattedSelectedDate) {
          // Matching forecast found, update the grid data
          this.rowData = [
            {
              Date: forecast.date,
              'max-temperature': forecast.temperature.high,
              'min-temperature': forecast.temperature.low,
              'max-humidity': forecast.relative_humidity.high,
              'min-humidity': forecast.relative_humidity.low
            }
          ];
          forecastFound = true;
          break; // Exit inner loop once forecast is found
        }
      }
      if (forecastFound) {
        break; // Exit outer loop if a forecast is found
      }
    }
    // Show an error message if no forecast is found
    if (!forecastFound) {
      alert('No forecast found for the entered date. Please try a different date.');
      this.rowData = []; // Clear the grid if no data is found
    }
  }
  
  // Helper function to convert dd-mm-yyyy or yyyy-mm-dd to yyyy-mm-dd format
  convertToISODate(date: string): string {
    const parts = date.split('-');
    if (parts[0].length === 4) {
      // Already in yyyy-mm-dd format
      return date;
    } else {
      // Convert from dd-mm-yyyy to yyyy-mm-dd
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
  }
  
    isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Check if running in the browser
  }

  generateChart(): void {
    const forecasts = this.weatherData.items[0].forecasts;

    // Extracting dates, high/low temperatures, and humidity levels
    const dates = forecasts.map(f => f.date);
    const highTemps = forecasts.map(f => f.temperature.high);
    const lowTemps = forecasts.map(f => f.temperature.low);
    const highHumidity = forecasts.map(f => f.relative_humidity.high);
    const lowHumidity = forecasts.map(f => f.relative_humidity.low);

    // Defining bar traces for Plotly
    const tempTrace = {
      x: dates,
      y: highTemps,
      type: 'bar',
      name: 'High Temperature (°C)',
      marker: { color: 'rgb(255,99,71)', opacity: 0.7 }
    };

    const humidityTrace = {
      x: dates,
      y: highHumidity,
      type: 'bar',
      name: 'High Humidity (%)',
      marker: { color: 'rgb(54,162,235)', opacity: 0.7 }
    };

    this.chartData = [tempTrace, humidityTrace];

    // Defining chart layout
    this.chartLayout = {
      title: 'Weather Forecast: Temperature and Humidity',
      barmode: 'group',
      xaxis: { title: 'Date' },
      yaxis: { title: 'Value' }
    };
  }

  
}

