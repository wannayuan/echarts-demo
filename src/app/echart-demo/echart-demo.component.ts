import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-echart-demo',
  templateUrl: './echart-demo.component.html',
  styleUrls: ['./echart-demo.component.less'],
})
export class EchartDemoComponent implements OnInit {
  test1: string;
  test2: string;
  constructor() {}

  ngOnInit(): void {
    this.test1 = 'cardTitle1';
    this.test2 = 'cardTitle2';
    let mychart = echarts.init(document.getElementById('main'));
    let option = {
      title: {
        text: 'Echarts 入门示例',
      },
      tooltip: {},
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    mychart.setOption(option);

    let mychart1 = echarts.init(document.getElementById('main1'));
    let option1 = {
      title: {
        text: '多个坐标系示例',
      },
      dataset: {
        source: [
          ['Jan', 34, 20, 21],
          ['Feb', 28, 14, 20],
          ['Mar', 45, 32, 11],
          ['Apr', 69, 46, 34],
          ['May', 39, 24, 20],
          ['Jun', 43, 23, 33],
          ['Jul', 33, 23, 56],
          ['Aug', 20, 21, 22],
          ['Sep', 23, 45, 16],
          ['Oct', 33, 20, 12],
          ['Nov', 39, 24, 11],
          ['Dec', 11, 23, 20],
        ],
      },
      grid: [
        {
          top: 40,
          bottom: '58%',
        },
        {
          top: '58%',
          bottom: 40,
        },
      ],
      xAxis: [
        {
          type: 'category',
          gridIndex: 0,
        },
        {
          type: 'category',
          gridIndex: 1,
        },
      ],
      yAxis: [
        {
          type: 'value',
          gridIndex: 0,
        },
        {
          type: 'value',
          gridIndex: 1,
        },
      ],
      series: [
        {
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          encode: { x: 0, y: 1 },
        },
        {
          type: 'line',
          xAxisIndex: 1,
          yAxisIndex: 1,
          encode: { x: 0, y: 2 },
        },
        {
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          encode: { x: 0, y: 3 },
        },
      ],
    };
    mychart1.setOption(option1);

    let mychart2 = echarts.init(document.getElementById('main2'));
    let option2 = {
      backgroundColor: '#2c343c',
      series: [
        {
          name: '视频来源',
          type: 'pie',
          radius: '55%',
          data: [
            { value: 235, name: '视频广告' },
            { value: 274, name: '联盟广告' },
            { value: 310, name: '邮件营销' },
            { value: 335, name: '直接访问' },
            { value: 400, name: '搜索引擎' },
          ],
          roseType: 'angle',
          label: {
            textStyle: {
              color: 'rgba(255,255,255,0.3)',
            },
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255.255.255.0.3)',
            },
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0,0,0,0.5)',
          },
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1],
            },
          },
        },
      ],
    };
    mychart2.setOption(option2);
  }
}
