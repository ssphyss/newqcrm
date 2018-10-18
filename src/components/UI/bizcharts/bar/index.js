import React from 'react';
import {Chart, Axis, Tooltip, Geom} from "bizcharts";
import './../index.scss'

// const { Chart, Axis, Geom, Tooltip } = window.BizCharts;

const data = [
    { year: '2011年', sales: 38 },
    { year: '2012年', sales: 52 },
    { year: '2013年', sales: 61 },
    { year: '2014年', sales: 145 },
    { year: '2015年', sales: 48 },
    { year: '2016年', sales: 38 },
    { year: '2017年', sales: 38 },
    { year: '2018年', sales: 38 },
];

const cols = {
    'sales': {tickInterval: 20},
};

const hhh = {
    backgroundColor: 'rgb(229, 255, 31)'
}

export default class Bizcharts extends React.Component{
    render(){
        return(
            <div>
                <h2 className='Chart__num'>216,215</h2>                
                <Chart 
                    padding="auto" 
                    width='100%'
                    height={100} 
                    data={data} 
                    scale={cols}
                    
                    forceFit
                >
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom 
                        type="interval" 
                        position="year*sales" 
                        color='rgb(203, 224, 41)'

                    />
                </Chart>
                {/* <Chart height={400} data={data} scale={cols} forceFit>
                    <Axis name="year" />
                    <Axis name="sales" />
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom type="interval" position="year*sales" />
                </Chart> */}
            </div>
        )
    }
}