import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {

  grid = true;
  xAxis = true;
  yAxis = true;

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "Spain",
      "value": 2000000
    },
    {
      "name": "Italy",
      "value": 2200000
    },
    {
      "name": "France",
      "value": 4100000
    }
  ]
}
