import React from 'react';
import { Col, Row} from 'antd';
// import Bar1 from './../../components/UI/echarts/bar/bar1';
// import Bar2 from './../../components/UI/echarts/bar/bar2';
// import Bar3 from './../../components/UI/echarts/bar/bar3';
// import Bar4 from './../../components/UI/echarts/bar/bar4';
// import Pie1 from './../../components/UI/echarts/pie/pie1';
// import Bizcharts from './../../components/UI/bizcharts/bar';
// import BorrowList from './../../components/Borrow/BorrowList';

import CardChartBorrow from './../../components/UI/Card/CardChartBorrow';
import CardChartLend from './../../components/UI/Card/CardChartLend';
import CardChartVisit from './../../components/UI/Card/CardChartVisit';
import CardChartDif from './../../components/UI/Card/CardChartDif';

export default class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <h1>總覽</h1>    

                <div style={{marginBottom: '50px'}}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <CardChartBorrow />
                        </Col>

                        <Col span={6}>                    
                            <CardChartLend />                             
                        </Col>

                        <Col span={6}>
                            <CardChartVisit />      
                        </Col>
                        
                        <Col span={6}>
                            <CardChartDif />  
                        </Col>
                    </Row>
                </div>


                <div style={{margin: '50px 0'}}>
                    {/* <Row gutter={16}>
                        <Col span={6}>
                            <Bar1 />
                        </Col>
                        <Col span={6}>
                            <Bar2 />
                        </Col>
                        <Col span={6}>                            
                            <Bar3 />
                        </Col>
                        <Col span={6}>
                            <Pie1 />                  
                        </Col>
                    </Row> */}
                </div>
                
                <div style={{marginTop: '50px'}}>
                    
                </div>
            </div>
        )
    }
}