import React from 'react';
import { Card } from 'antd';
import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="https://www.google.com.tw/">{text}</a>,
    }, 
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, 
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
            {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
            </span>
        ),
    }, 
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
            <a href="https://www.google.com.tw/">查看 {record.name}</a>
            <Divider type="vertical" />
            <a href="https://www.google.com.tw/">取消</a>
            </span>
        ),
    }
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    }, 
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    }
];

export default class BorrowList extends React.Component{ 
    render(){
        return(
            <Card
                title="借款管理13"
                extra={<a href="https://www.google.com.tw/">More</a>}
                // style={{ width: 300 }}
            >
                <Table columns={columns} dataSource={data} />
            </Card>
        )
    }
}