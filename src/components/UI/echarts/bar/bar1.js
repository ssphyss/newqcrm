import React from 'react';
import './../index.scss'

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

export default class Bar1 extends React.Component{

    // 1.註冊主題
    componentWillMount(){
        echarts.registerTheme('MSQtheme', echartTheme);
    }

    getOption = () => {
        let option = {
            // title : {
            //     text: '借款筆數'
            // },
            color: ['#bed606'],
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['一', '二', '三', '四', '五', '六', '日']
            },
            yAxis : 
            {
                type : 'value',
                show: false
            },
            series: [
                {
                    name:'借款量',
                    type:'bar',
                    barWidth: '50%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        }
        return option;
    }
    
    render(){
        return (
            <div >
                {/* <ReactEcharts 
                    option={this.getOption()} 
                    theme='MSQtheme'
                    // style={{height: '200px', padding: '20px' }}
                    >
                </ReactEcharts> */}
                {/* <Card title='借款筆數'></Card> */}
                <div className='chart-box'>
                    <h3>借款筆數</h3>
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