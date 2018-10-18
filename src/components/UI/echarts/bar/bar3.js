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
        let option = {
            // title : {
            //     text: '借款筆數'
            // },
            color: ['#14b3ac'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                data: ['一', '二', '三', '四', '五', '六', '日']
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        }
        return option;
    }
    
    render(){
        return (
            <div>
                {/* <ReactEcharts option={this.getOption()} theme='MSQtheme'></ReactEcharts> */}
                {/* <Card title='造訪人次' className='card-wrap'>
                </Card> */}
                <div className='chart-box'>
                    <h3>造訪人次</h3>  
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