import React from 'react';
import axios from 'axios'
import { Card } from 'antd';
import { Table } from 'antd';

export default class Basic2 extends React.Component{ 

    state = {
        dataSource: []
    }

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
            }
        ]        

        this.setState({
            dataSource: data
        })

        this.request()
    } 
 
    request = () => {  
        let baseUrl= 'https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi' 
        axios.get( baseUrl + '/table/list-basic2')
        .then((res) => {
            console.log('通過JSON',JSON.stringify(res.data));
            console.log(res.data.result.list)
            if(res.data.code === 0){                
                res.data.result.list.map((item, index) => {                    
                    item.key = index;
                    return item
                })
                this.setState({
                    dataSource: res.data.result.list              
                })
            }
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
                key: 'sex',
                render(sex){
                    return sex === 1 ?'男':'女'
                }
            }, 
            {
                title: '狀態',
                dataIndex: 'state',
                key: 'state',
                render(state){
                    let config = {
                        '1': '設計師',
                        '2': '工程師',
                        '3': '老師',
                        '4': '醫師',
                        '5': '其他'
                    }
                    return config[state];
                }
            }, 
            {
                title: '愛好',
                dataIndex: 'interest',
                key: 'interest',
                render(abc){
                    let config = {
                        '1': '桌球',
                        '2': '羽球',
                        '3': '籃球',
                        '4': '爬山',
                        '5': '唱歌',
                        '6': '游泳',
                        '7': '棒球',
                        '8': '瑜珈'
                    }
                    return config[abc];
                }
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
                    title="基礎表格2(拉Mock動態數據)"
                    extra={<a target='_blank' rel="noopener noreferrer" href="https://ant.design/components/table-cn/#components-table-demo-edit-row">More</a>}
                >
                    <Table 
                        // bordered
                        columns={columns}   // 表頭
                        dataSource={this.state.dataSource} 
                        // pagination={false}
                    />
                </Card>       
            </div>            
        )
    }
}