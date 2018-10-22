import React from 'react';
import { Button, Card } from 'antd';
import { Table } from 'antd';
import { Select, Form, Input, Icon} from 'antd';

const Option = Select.Option;

export default class Basic3 extends React.Component{ 

    state = {
        editing: false,
        key: '',
        userNameInputValue: '',
        permissionValue: ''
    }

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

    handleEdit = (id) => {
        console.log('key', id);
        this.setState({
            editing: true,
            key: id
        })
    } 

    cancelHandler = () => {
        this.setState({
            editing: false,
            key: '',
            userNameInputValue: ''
        })
    }

    permissionHandler = (permission) => {
        switch (permission) {
            case '1':
                return '一般權限'
            case '2':
                return '系統權限'
            case '3':
                return '主管權限'
            default:
                break;
        }
    }

    saveHandler = () => {
        const [...dataSource] = this.state.dataSource;

        //找出id對應的筆數
        let index;
        dataSource.forEach((item, i)=>{
            if(item.id === this.state.key){
                index = i;
            }
        })
        //更改對應id資料的username
        if(this.state.userNameInputValue !== ''){
            dataSource[index].userName = this.state.userNameInputValue;
        }
        //更改對應id資料的permission
        if(this.state.permissionValue !== ''){
            dataSource[index].permission = this.state.permissionValue;
        }
        //還原
        this.setState({
            dataSource,
            editing: false,
            key: '',
            userNameInputValue: ''
        })
    }

    handleDelete = (id) => {
        const [...dataSource] = this.state.dataSource;

        //找出id對應的筆數
        let index;
        dataSource.forEach((item, i)=>{
            if(item.id === this.state.key){
                index = i;
            }
        })
        
        //刪除此筆資料
        dataSource.splice(index, 1);

        //存進state，並將資料還原
        this.setState({
            dataSource,
            editing: false,
            key: '',
            userNameInputValue: ''
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
                    if(item.id === this.state.key){
                        return (
                            <div>
                                <a
                                    onClick={this.saveHandler}
                                >save</a>
                                <a 
                                    style={{display:"inline-block",marginLeft: '15px'}}
                                    onClick={this.cancelHandler}
                                >cancel</a>
                            </div>
                        )
                    }else{
                        return (
                            <div>
                                <Button style={{margin: 0}} onClick={()=>{this.handleEdit(item.id)}}>編輯</Button>
                                <Button style={{margin: 0}} onClick={()=>{this.handleView(item.id)}}>查看</Button>
                                <Button style={{margin: 0}} onClick={()=>{this.handleDelete(item.id)}}>删除</Button>
                            </div> 
                        ) 
                    }
                                                       
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
                key: 'userName',
                render: (text, item) => {
                    if(this.state.editing && this.state.key === item.id){
                        return (
                            <Input 
                                value={this.state.userNameInputValue || text} 
                                placeholder="Basic usage" 
                                onChange={(e)=>{
                                    this.setState({
                                        userNameInputValue: e.target.value
                                    })
                                }}
                            />
                        )
                    }else{
                        return text;
                    }
                }
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
                render: (text, item) => {
                    if(this.state.editing && this.state.key === item.id){
                        return (
                            <Select
                                onChange={(value)=>{
                                    this.setState({
                                        permissionValue: value
                                    })
                                }}
                                defaultValue={item.permission} 
                                style={{ width: 120 }}
                            >
                                <Option value="1">一般權限</Option>
                                <Option value="2">系統權限</Option>
                                <Option value="3">主管權限</Option>
                                <Option value="4">行政權限</Option>
                            </Select>  
                        ) 
                    }else{
                        return this.permissionHandler(text);
                    }
                  
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