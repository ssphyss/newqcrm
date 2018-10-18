import React from 'react';
import { Card } from 'antd';
import { Table } from 'antd';

export default class Basic1 extends React.Component{ 

    state = {}

    componentDidMount() {
        const data = [
            {
                id: '0',
                userName: 'Phy',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '台北市',
                time: '09:00'
            },
            {
                id: '1',
                userName: 'SS',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '台北市',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'PP',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '台北市',
                time: '09:00'
            }
        ]        

        this.setState({
            dataSource: data
        })
    }    
    render(){
        const columns = [
            {
                title: 'id',             //抬頭
                dataIndex: 'id',         //id對應的字段是id。字段返回的數據值
                key: 'id'
            }, 
            {
                title: '用戶名',          
                dataIndex: 'userName',       // 用戶名對應的字段是userName,對應 
                key: 'userName'
            },
            {
                title: '性別',
                dataIndex: 'sex',
                key: 'sex'
            }, 
            {
                title: '狀態',
                dataIndex: 'state',
                key: 'state'
            }, 
            {
                title: '愛好',
                dataIndex: 'interest',
                key: 'interest'
            }, 
            {
                title: '生日',
                dataIndex: 'birthday',
                key: 'birthday'
            }, 
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address'
            }, 
            {
                title: '早起時間',
                dataIndex: 'time',
                key: 'time'
            }
        ];
        
        return(
            <div>
                <Card
                    title="基礎表格1"
                    extra={<a target='_blank' rel="noopener noreferrer" href="https://ant.design/components/table-cn/#components-table-demo-edit-row">More</a>}
                >
                    <Table 
                        // bordered
                        columns={columns}   // 表頭
                        dataSource={this.state.dataSource} 
                        pagination={false}
                    />
                </Card>                
            </div>
            
        )
    }
}