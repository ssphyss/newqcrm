import React from 'react';

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

export default class Bar3 extends React.Component{

    // 1.註冊主題
    componentWillMount(){
        echarts.registerTheme('MSQtheme', echartTheme);
    }

    getOption = () => {
        // app.title = '正负条形图';
        let option = {
            // title : {
            //     text: '借款筆數'
            // },
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
                    data : ['一','二','三','四','五','六','日']
                }
            ],
            series : [
                {
                    name:'利润',
                    type:'bar',
                    // color: ['rgb(255, 122, 8)'],
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
                    color: '#bed606',
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
                    color: ['#14b3ac'],
                    label: {
                        normal: {
                            show: true,
                            position: 'left'
                        }
                    },
                    data:[-120, -132, -101, -134, -190, -230, -210]
                }
            ]
        }
        return option;
    }
    
    render(){
        return (
            <div>
                {/* <ReactEcharts option={this.getOption()} theme='MSQtheme'></ReactEcharts> */}
                {/* <Card title='差異分析' className='card-wrap'>
                </Card> */}
                <div className='chart-box'>
                    <h3>差異分析</h3>  
                    <h1>120,000</h1>
                    <ReactEcharts 
                        option={this.getOption()} 
                        theme='MSQtheme'
                        style={{height: '170px'}}
                        // style={{height: '200px', padding: '20px' }}
                        >
                    </ReactEcharts>
                </div> 
            </div>
        )
    }
}