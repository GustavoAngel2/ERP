import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    HighchartsChartModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Ventas Mensuales 2024',
    },
    xAxis: {
      categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    },
    series: [
      {
        type: 'line',
        name: 'Ventas',
        data: [150, 200, 170, 220, 260, 300],
      },
    ],
  };
}
