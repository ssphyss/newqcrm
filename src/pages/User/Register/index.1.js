import React from 'react';
import { Card, DatePicker, Form, Icon, Input, InputNumber, Button, Checkbox, Row, Col, Message, Radio, Select, Switch, TimePicker, Upload } from 'antd';
import moment from 'moment';
import logo from './../../../assets/logo-white.svg';
import './../../index.scss';
import './index.scss';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

// export default class Login extends React.Component {
class Register extends React.Component {
    state={}
    // 送出表單
    // handleSubmit = ()=>{
    //     let userInfo = this.props.form.getFieldsValue();
    //     this.props.form.validateFields((err,values)=>{
    //         if(!err){
    //             Message.success(`${userInfo.userName}恭喜你已經通過驗證,密碼為${userInfo.userPwd}`)
    //         }
    //     })
    // }
    handleSubmit = ()=>{
        // 獲取所有屬性值
        // 重置用form.resetFieldsValue();?
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        Message.success(`${userInfo.userName} 恭喜你，通過本次的註冊申請，密碼：${userInfo.userPwd}`)
    }
    getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    // AntD 上傳圖片
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false,
            }));
        }
    }

    render(){
        // antD固定的,一定要這樣寫才能驗證
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 6                
            },
            wrapperCol: {
                xs: 24,
                sm: 18
            }
        }
        const rowObject = {
            minRows: 4, maxRows: 6
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:6
                    // 佔據12列偏移4列
                }
            }
        }
        
        return (
            <div className='login'>
                <div className='login__box'>
                    <div className='logo' key="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <Card title="註冊帳戶" className='card-wrap'>
                        {/* <h1>登入</h1> */}
                        <Row>
                            <Col span='24'>
                                {/* 預設已經 layout='horizontal' */}
                                <Form layout="">
                                    <Form.Item>
                                        {
                                            getFieldDecorator('userNameX',{
                                                initialValue: '',     /*初始值*/
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '用戶名不能為空'
                                                    },
                                                    {
                                                        min: 5, max: 10,
                                                        message: '長度不在範圍內'
                                                    },
                                                    {
                                                        // pattern: /^\w/g,
                                                        pattern: new RegExp('^\\w+$','g'),
                                                        message: '用戶名必須為英文字母或數字'
                                                    }
                                                ]
                                            })(
                                                <Input prefix={<Icon type='user'/>} placeholder='請輸入用戶名'/>
                                            )
                                        }
                                        {/* <Input placeholder='請輸入用戶名'/> */}
                                    </Form.Item>
                                    <FormItem label="用戶名" {...formItemLayout}>
                                        {
                                            getFieldDecorator('userName', {
                                                initialValue: '',
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '用戶名不能為空'
                                                    }
                                                ]
                                            })(
                                                <Input placeholder="請輸入用戶名" />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label="密碼" {...formItemLayout}>
                                        {
                                            getFieldDecorator('userPwd', {
                                                initialValue: '',
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '密碼不能為空'
                                                    }
                                                ]
                                            })(
                                                <Input type="password" placeholder="請輸入密碼" />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label="性别" {...formItemLayout}>
                                        {
                                            getFieldDecorator('sex', {
                                                initialValue: '1'
                                            })(
                                                <RadioGroup>
                                                    <Radio value="1">男</Radio>
                                                    <Radio value="2">女</Radio>
                                                </RadioGroup>
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label="年齡" {...formItemLayout}>
                                        {
                                            getFieldDecorator('age', {
                                                initialValue: 18
                                            })(
                                                <InputNumber  />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label="當前狀態" {...formItemLayout}>
                                        {
                                            getFieldDecorator('state', {
                                                initialValue: '2'
                                            })(
                                                <Select>
                                                    <Option value="1">咸鱼一条</Option>
                                                    <Option value="2">风华浪子</Option>
                                                    <Option value="3">北大才子一枚</Option>
                                                    <Option value="4">百度FE</Option>
                                                    <Option value="5">创业者</Option>
                                                </Select>
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label="休閒興趣" {...formItemLayout}>
                                        {
                                            getFieldDecorator('interest', {
                                                initialValue: ['1','6']
                                            })(
                                                <Select mode="multiple">
                                                    <Option value="1">桌球</Option>
                                                    <Option value="2">籃球</Option>
                                                    <Option value="3">羽球</Option>
                                                    <Option value="4">跑步</Option>
                                                    <Option value="5">爬山</Option>
                                                    <Option value="6">唱歌</Option>
                                                    <Option value="7">足球</Option>
                                                    <Option value="8">游泳</Option>
                                                </Select>
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label="是否已婚" {...formItemLayout}>
                                        {
                                            getFieldDecorator('isMarried', {
                                                valuePropName:'checked',
                                                initialValue: true
                                            })(
                                                <Switch/>
                                            )
                                        }
                                    </FormItem>
                                    {/* yarn add moment --save 把插件安裝在package*/}
                                    <FormItem label="生日" {...formItemLayout}>
                                        {/* {
                                            getFieldDecorator('birthday')(
                                                <DatePicker
                                                    showTime
                                                    format="YYYY-MM-DD HH:mm:ss"
                                                />
                                            )
                                        } */}
                                        {
                                            getFieldDecorator('birthday',{
                                                initialValue: moment('2018-08-08 12:00:01')
                                            })(
                                                <DatePicker
                                                    showTime
                                                    format="YYYY-MM-DD HH:mm:ss"
                                                />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label="聯絡地址" {...formItemLayout}>
                                        {
                                            getFieldDecorator('address',{
                                                initialValue:'台北市大安森林公園'
                                            })(
                                                <TextArea
                                                    // 拿出來寫在外面
                                                    // autosize={
                                                    //     {
                                                    //         minRows: 4,
                                                    //         maxRows: 10
                                                    //     }
                                                    // }
                                                    autosize={rowObject}
                                                />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label="早起時間" {...formItemLayout}>
                                        {
                                            getFieldDecorator('time')(
                                                <TimePicker/>
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label="大頭貼" {...formItemLayout}>
                                        {
                                            getFieldDecorator('userImg')(
                                                <Upload
                                                    listType="picture-card"
                                                    showUploadList={false}
                                                    action="//jsonplaceholder.typicode.com/posts/"
                                                    onChange={this.handleChange}
                                                >
                                                {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                                                </Upload>
                                            )
                                        }
                                    </FormItem>
                                    <FormItem {...offsetLayout}>
                                        {
                                            getFieldDecorator('userImg')(
                                            <Checkbox>我已閱讀過<a href="#">協議事項</a></Checkbox>
                                            )
                                        }
                                    </FormItem>
                                    <FormItem {...offsetLayout}>
                                        <Button type="primary" onClick={this.handleSubmit}>註冊</Button>
                                    </FormItem>
                                </Form>  
                            </Col>
                        </Row>                                      
                    </Card>
                </div>
            </div>            
        )
    }
}

export default Form.create()(Register);