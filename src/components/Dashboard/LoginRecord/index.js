import React from 'react';
import { Card } from 'antd';
import { Table } from 'antd';
import axios from 'axios'

const data = [
    // {
    //     key: '1',
    //     name: 'John Brown',
    //     loginTime: '2018-10-13',
    //     useTime: '36mins',
    //     ipAddress: '192.168.1.1'
    // }
    {
        key: '1',
        name: 'John Brown',
        login_start: '2018-10-13',
        operating_time: '36mins',
        ip_address: '192.168.1.1'
    }
];

export default class LoginRecord extends React.Component{ 

    state = {
        dataSource: []
    }

    componentDidMount() { 

        this.setState({
            dataSource: data
        })

        this.request()
    } 
 
    request = () => {  
        let baseUrl= 'https://easy-mock.com/mock/5bc1d12e52815755b2b7b2a9/msqapi' 
        axios.get( baseUrl + '/dashboard/loginRecord')
        .then((res) => {
            console.log('通過JSON',JSON.stringify(res.data));
            console.log(res.data.result)
            if(res.data.code === 0){       
                console.log('AA',res.data.result)      
                res.data.result.map((item, index) => {                    
                    item.key = index;
                    return item
                })
                this.setState({
                    dataSource: res.data.result     
                })
            }
        })
    }
    
    render(){

        const columns = [
            {
                title: '登入帳號',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="https://www.google.com.tw/">{text}</a>,
            }, 
            {
                title: '登入時間',
                dataIndex: 'login_start',
                key: 'login_start',
            },
            {
                title: '操作時間',
                dataIndex: 'operating_time',
                key: 'operating_time',
            },
            {
                title: 'IP 位置',
                dataIndex: 'ip_address',
                key: 'ip_address',
            }
        ];

        return(
            <Card
                title="登入者記錄"
                extra={<a href="https://www.google.com.tw/">More</a>}
                // style={{ width: 300 }}
            >
                <Table columns={columns} dataSource={this.state.dataSource} />
            </Card>
        )
    }
}