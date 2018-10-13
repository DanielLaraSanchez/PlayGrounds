import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs'
import { DataService } from '../../../services/data.service';

//@Component code removed for brevity
@Component({
selector: 'app-graphs',
 templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
 })

export class GraphsComponent implements OnInit {

  chart = []; // This will hold our chart info

  constructor(private _weather: WeatherService,private data: DataService) {}

  ngOnInit() {
    let population = [];
       let countrynames = [];
       this.data.getData().subscribe(
        res => {
          for(let keys in res){
            population.push(res[keys].population)
           countrynames.push(res[keys].name)
}

    // this._weather.dailyForecast().subscribe(
    //   res => {
    //     let temp_max = res['list'].map(res => res.main.temp_max);
    //     let temp_min = res['list'].map(res => res.main.temp_min);
    //     let alldates = res['list'].map(res => res.dt)
    //
    //     let weatherDates = []
    //     alldates.forEach((res) => {
    //
    //         let jsdate = new Date(res * 1000)
    //         weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
    //     })

        this.chart = new Chart('myCanvas', {
         type: 'line',
         data: {
           labels: countrynames,
           datasets: [
             {
               data: population,
               borderColor: "#3cba9f",
               fill: false
             },
             // {
             //   data: temp_min,
             //   borderColor: "#ffcc00",
             //   fill: false
             // },
           ]
         },
         options: {
           legend: {
             display: false
           },
           scales: {
             xAxes: [{
               display: true
             }],
             yAxes: [{
               display: true
             }],
           }
         }
       });
            })
  }
}

// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../../../services/data.service';
// import { Chart } from 'chart.js';
// import { Observable } from 'rxjs';
//
// @Component({
//   selector: 'app-graphs',
//   templateUrl: './graphs.component.html',
//   styleUrls: ['./graphs.component.css']
// })
// export class GraphsComponent implements OnInit {
//
//   datagraphs$: Object;
//   chart: any;
//   constructor(private data: DataService) { }
//
//   ngOnInit() {
//     let population = [];
//     let countrynames = [];
//     this.data.getData().subscribe(
//       res => {
//         for(let keys in res){
//         population.push(res[keys].population)
//         countrynames.push(res[keys].name)
// }
//       })
//       const ctx = <HTMLCanvasElement> document.getElementById('myCanvas');
//
//       this.chart = new Chart('myCanvas', {
//           type: 'line',
//           data: {
//             labels: population,
//             datasets: [
//               {
//                 data: population,
//                 borderColor: "#3cba9f",
//                 fill: false
//               },
//               {
//                 data: population,
//                 borderColor: "#ffcc00",
//                 fill: false
//               },
//             ]
//           },
//           options: {
//             legend: {
//               display: false
//             },
//             scales: {
//               xAxes: [{
//                 display: true
//               }],
//               yAxes: [{
//                 display: true
//               }],
//             }
//           }
//         });
//
//
// // res[0].population
//   }
//
// }
