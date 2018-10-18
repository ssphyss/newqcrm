import React from 'react';
import {Chart, Axis, Tooltip, Geom} from "bizcharts";
import './../index.scss'

// 投資筆數

const data = [
    { year: '10/06', sales: 12 },
    { year: '10/07', sales: 21 },
    { year: '10/08', sales: 45 },
    { year: '10/09', sales: 18 },
    { year: '10/10', sales: 22 },
    { year: '10/11', sales: 51 },
    { year: '10/12', sales: 30 },
];

const cols = {
    'sales': {tickInterval: 20},
};

export default class ChartLend extends React.Component{
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
                        color='#14b3ac'

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