import React from 'react';
import {Chart, Geom, Tooltip, Coord, Legend} from "bizcharts";
import './../index.scss'
import DataSet from '@antv/data-set';
const { DataView } = DataSet;

// 差異分析

const data = [
          { item: '事例一', count: 40 },
          { item: '事例二', count: 21 },
          { item: '事例三', count: 17 },
          { item: '事例四', count: 13 },
          { item: '事例五', count: 9 }
        ];
        const dv = new DataView();
        dv.source(data).transform({
          type: 'percent',
          field: 'count',
          dimension: 'item',
          as: 'percent'
        });
        const cols = {
          percent: {
            formatter: val => {
              val = (val * 100) + '%';
              return val;
            }
          }
        }   

export default class ChartDif extends React.Component{
    render(){
        return(
            <div>
                {/* <h2 className='Chart__num'>111,111</h2>                 */}
                <Chart 
                    height={100} 
                    data={dv} 
                    scale={cols} 
                    padding={0} 
                    forceFit
                >
                    <Coord type='theta' radius={0.75} />
            
                    <Legend position='right' offsetY={20}  />
                    <Tooltip 
                        showTitle={false} 
                        itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                    />
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color='item'
                        tooltip={['item*percent',(item, percent) => {
                            percent = percent * 100 + '%';
                            return {
                                name: item,
                                value: percent
                            };
                        }]}
                        style={{lineWidth: 1,stroke: '#fff'}}
                    >              
                    </Geom>
                </Chart>
            </div>
        )
    }
}