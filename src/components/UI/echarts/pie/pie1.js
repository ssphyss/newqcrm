import React from 'react';
import echartTheme from './../echartTheme'
// import echarts from 'echarts'
//按需加载
import echarts from 'echarts/lib/echarts'
// 导入圓餅图
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'

export default class Pie1 extends React.Component{

    // 1.註冊主題
    componentWillMount(){
        echarts.registerTheme('Imooc', echartTheme);
    }

    getOption = () => {
        let option = {
            // title:{
            //     text: '用戶訂單',
            //     x:'center'
            // },
            legend:{
                orient:'vertical',
                right:10,
                top:20,
                bottom:20,
                data: ['借款', '投資'],
                color: ['#bed606', '#bed606'],
            },
            tooltip:{
                trigger:'item',
                formatter:'{a}<br/>{b}:{c}({d}%)'
            },
            series:[
                {
                    name:'订单量',
                    type:'pie',
                    data:[
                        {
                            value:1000,
                            name:'借款一'                            
                        },
                        {
                            value:2000,
                            name: '投資'
                        },
                    ]
                }
            ]
        }
        return option;
    }

    

    

    render(){
        return (
            <div>
                {/* <Card title='圓餅圖1' className='card-wrap'>
                    <ReactEcharts option={this.getOption()} theme='Imooc'></ReactEcharts>
                </Card>            */}
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