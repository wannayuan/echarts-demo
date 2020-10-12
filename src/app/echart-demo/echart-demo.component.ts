import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-echart-demo',
  templateUrl: './echart-demo.component.html',
  styleUrls: ['./echart-demo.component.less'],
})
export class EchartDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let mychart = echarts.init(document.getElementById('main'));
    let option  = {
      title: {
        text: 'Echarts 入门示例'
      },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5,20,36,10,10,20]
        }]
    };
    mychart.setOption(option);
  }
}
