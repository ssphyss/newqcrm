import React from 'react';
import { Card } from 'antd';
import { Tooltip } from 'antd';
import { Icon } from 'antd';
import ChartBorrow from './../../../components/UI/bizcharts/bar/ChartBorrow';
import './index.scss'

export default class CardChartBorrow extends React.Component{
    
    render(){
            
        return(
            <div>
                <Card
                    title={'借款筆數'}
                    extra={
                        <div>
                            <a href="https://www.google.com.tw/">More</a>
                            <Tooltip title="prompt text">
                                <span><Icon type="info-circle" theme="outlined" /> </span>                                
                            </Tooltip>
                        </div>
                    }
                    bordered={false}                     
                    // haverable={true}                    
                    loading={false}
                    type={'inner'}   // inner 變小   
                    // headStyle={{display:'none'}}
                    // style={{ height: '200px' }}                 
                >       
                    <div className='chartTop'>                        
                        <ChartBorrow />
                        <h2 className='Chart__num'>111,111</h2> 
                    </div>
                    <div className='hr'/>           
                </Card>
            </div>
        )
    }
}