import React from 'react';
import { Button, Card } from 'antd';
import { Table } from 'antd';
import { Select} from 'antd';

const Option = Select.Option;

export default class Basic3 extends React.Component{ 

    state = {}

    componentDidMount() {
        const data = [
            {
                id: '0',
                account: 'user01',
                userName: 'PhyPhy',
                password: '1',
                email: 'aaa@gmail.com',
                permission: '1',
                                               
            },
            {
                id: '1',
                account: 'user02',
                userName: 'SSSS',
                password: '1',
                email: 'aaa@gmail.com',
                permission: '3'
            },
            {
                id: '2',
                account: 'user03',
                userName: 'PPPP',
                password: '1',
                email: 'aaa@gmail.com',
                permission: '2'
            }
        ]        

        this.setState({
            dataSource: data
        })
    }    
    render(){
        const columns = [
            {
                fixed: 'left',
                width: 230,
                key: 'opa',
                title: '操作',
                dataIndex: 'opa',
                // 改成箭頭函式,讓他指向調用方本身,react
                render:(text,item)=>{
                    return <div>
                        <Button style={{margin: 0}} onClick={(item)=>{this.handleEdit(item)}}>編輯</Button>
                        <Button style={{margin: 0}} onClick={(item)=>{this.handleView(item)}}>查看</Button>
                        <Button style={{margin: 0}} onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                    </div>                                                         
                }
            },
            {
                title: '帳號',                 //抬頭
                dataIndex: 'account',         //id對應的字段是id。字段返回的數據值
                key: 'account',
                render: text => <a href="https://www.google.com.tw/">{text}</a>,
            }, 
            {
                title: '用戶名',          
                dataIndex: 'userName',       // 用戶名對應的字段是userName,對應 
                key: 'userName'
            },
            {
                title: '密碼',
                dataIndex: 'password',
                key: 'password'
            }, 
            {
                title: 'email',
                dataIndex: 'email',
                key: 'email'
            }, 
            {
                title: '權限',
                dataIndex: 'permission',
                key: 'permission',
                render: () => {
                    return (
                        <Select defaultValue="一般權限" style={{ width: 120 }}>
                            <Option value="一般權限">一般權限</Option>
                            <Option value="系統權限">系統權限</Option>
                            <Option value="主管權限">主管權限</Option>
                            <Option value="行政權限">行政權限</Option>
                        </Select>  
                    )                   
                }
            }
        ];
        
        return(
            <div>
                <Card
                    className='card-wrap'
                    title="基礎表格2"
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