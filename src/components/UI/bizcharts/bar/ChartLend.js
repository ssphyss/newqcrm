import React from 'react';
import {Chart, Tooltip, Geom} from "bizcharts";
import './../index.scss'

// 投資筆數

const data = [
    { year: '10/06', sales: 52 },
    { year: '10/07', sales: 61 },
    { year: '10/08', sales: 85 },
    { year: '10/09', sales: 48 },
    { year: '10/10', sales: 62 },
    { year: '10/11', sales: 31 },
    { year: '10/12', sales: 30 },
];

const cols = {
    'sales': {tickInterval: 20},
};

export default class ChartLend extends React.Component{
    render(){
        return(
            <div>
                {/* <h2 className='Chart__num'>216,215</h2>                 */}
                <Chart 
                    padding="auto" 
                    width={90} 
                    height={100} 
                    data={data} 
                    scale={cols}                    
                    forceFit
                >
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom 
                        type="interval" 
                        position="year*sales" 
                        color='rgb(20, 179, 172)'

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