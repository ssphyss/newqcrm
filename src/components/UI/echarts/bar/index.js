import React from 'react';
import { Card } from "antd";

// 主題
import echartTheme from './../echartTheme';

// 導入所有圖
// import echarts from 'echarts';
// 按需加载
import echarts from 'echarts/lib/echarts'

// 导入柱形图相關選項
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

import ReactEcharts from 'echarts-for-react'

export default class Bar extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     };
    // }
    // 1.註冊主題
    componentWillMount(){
        echarts.registerTheme('Imooc', echartTheme);
    }

    getOption = () => {
        let option = {
            title : {
                text: '用戶訂單'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis : 
            {
                type : 'value'
            },
            series: [
                {
                    name:'訂單量',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        }
        return option;
    }

    getOption2 = () => {
        let option = {
            title : {
                text: '用戶訂單'
            },
            legend: {
                data: ['A', 'B', 'C']
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis : 
            {
                type : 'value'
            },
            series: [
                {
                    name:'訂單量1',
                    type:'bar',
                    // barWidth: '20%',
                    data:[100, 112, 150, 334, 190, 430, 220]
                },
                {
                    name:'訂單量2',
                    type:'bar',
                    // barWidth: '20%',
                    data:[400, 202, 200, 104, 390, 130, 1220]
                },
                {
                    name:'訂單量3',
                    type:'bar',
                    // barWidth: '20%',
                    data:[60, 662, 500, 234, 690, 730, 620]
                }
            ]
        }
        return option;
    }

    getOption3 = () => {
        let option = {
            title: {
                text: '深圳月最低生活费组成（单位:元）',
                subtext: 'From ExcelHome',
                sublink: 'http://e.weibo.com/1341556070/AjQH99che'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[1];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type : 'category',
                splitLine: {show:false},
                data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
            },
            yAxis: {
                type : 'value'
            },
            series: [
                {
                    name: '辅助',
                    type: 'bar',
                    stack:  '总量',
                    itemStyle: {
                        normal: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: [0, 1700, 1400, 1200, 300, 0]
                },
                {
                    name: '生活费',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data:[2900, 1200, 300, 200, 900, 300]
                }
            ]
        };        
        return option;
    }

    getOption4 = () => {
        let option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['利润', '支出', '收入']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            series : [
                {
                    name:'利润',
                    type:'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data:[200, 170, 240, 244, 200, 220, 210]
                },
                {
                    name:'收入',
                    type:'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data:[320, 302, 341, 374, 390, 450, 420]
                },
                {
                    name:'支出',
                    type:'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    data:[-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        };
        return option;
    }
    render(){
        return (
            <div>
                <Card title='柱狀圖1' className='card-wrap'>
                    {/* 2.使用主題 */}
                    <ReactEcharts option={this.getOption()} theme='Imooc'></ReactEcharts>
                </Card>

                <Card title='柱狀圖2' className='card-wrap'>
                    <ReactEcharts option={this.getOption2()} theme='Imooc'></ReactEcharts>
                </Card>

                <Card title='柱狀圖3' className='card-wrap'>
                    <ReactEcharts option={this.getOption3()} theme='Imooc'></ReactEcharts>
                </Card>

                <Card title='柱狀圖4' className='card-wrap'>
                    <ReactEcharts option={this.getOption4()} theme='Imooc'></ReactEcharts>
                </Card>
            </div>
        )
    }
}