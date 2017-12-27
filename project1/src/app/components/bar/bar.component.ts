import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

  constructor() { }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: false
  };

  public barChartLabels:string[] = ['PL', 'GB', 'DE', 'NL'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

    public barChartData:any[] = [
    {data: [71, 80, 81, 71], label: 'Percentage'}
  ];

}
