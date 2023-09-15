import { Component } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {

  legenda = true;
  title = "Covid % population";

  single = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        },
        {
          "name": "2012",
          "value": 2940000
        },
        {
          "name": "2013",
          "value": 5940000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        },
        {
          "name": "2012",
          "value": 8540000
        },
        {
          "name": "2013",
          "value": 7940000
        }
      ]
    },

    {
      "name": "Spain",
      "series": [
        {
          "name": "2010",
          "value": 2870000
        },
        {
          "name": "2011",
          "value": 8270000
        },
        {
          "name": "2012",
          "value": 5540000
        },
        {
          "name": "2013",
          "value": 7940000
        }
      ]
    },
  ]

}
