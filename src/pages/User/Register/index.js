import React from 'react';
import { Card, Form, Icon, Input, Button, Checkbox, Row, Col, Message } from 'antd';
import logo from './../../../assets/logo-white.svg';
import './../index.scss';
import './index.scss';

const FormItem = Form.Item;
// const RadioGroup = Radio.Group;
// const Option = Select.Option;
// const TextArea = Input.TextArea;

// export default class Login extends React.Component {
class Register extends React.Component {
    state={}
    // 送出表單
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                Message.success(`${userInfo.userName}恭喜你已經通過驗證,密碼為${userInfo.userPwd}`)
            }
        })
    }
    // handleSubmit = ()=>{
    //     // 獲取所有屬性值
    //     // 重置用form.resetFieldsValue();?
    //     let userInfo = this.props.form.getFieldsValue();
    //     console.log(JSON.stringify(userInfo))
    //     Message.success(`${userInfo.userName} 恭喜你，通過本次的註冊申請，密碼：${userInfo.userPwd}`)
    // }
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
        // const formItemLayout = {
        //     labelCol: {
        //         xs: 24,
        //         sm: 6                
        //     },
        //     wrapperCol: {
        //         xs: 24,
        //         sm: 18
        //     }
        // }
        // const rowObject = {
        //     minRows: 4, maxRows: 6
        // }
        // const offsetLayout = {
        //     wrapperCol:{
        //         xs:24,
        //         sm:{
        //             span:12,
        //             offset:6
        //             // 佔據12列偏移4列
        //         }
        //     }
        // }
        
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
                                <Form>                                    
                                    {/* <FormItem label="用戶名" {...formItemLayout}> */}
                                    <Form.Item label="用戶名">
                                        {
                                            getFieldDecorator('userName', {
                                                initialValue: '',   /*初始值*/
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
                                                <Input  prefix={<Icon type='user'/>} placeholder="請輸入用戶名" />
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item label="信箱">
                                        {
                                            getFieldDecorator('usermail', {
                                                initialValue: '',   /*初始值*/
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '信箱不能為空'
                                                    },
                                                    // {
                                                    //     min: 5, max: 10,
                                                    //     message: '長度不在範圍內'
                                                    // },
                                                    {
                                                        // pattern: /^\w/g,
                                                        pattern: new RegExp('^\\w+$','g'),
                                                        message: '信箱必須為英文字母或數字'
                                                    }
                                                ]
                                            })(
                                                <Input  prefix={<Icon type='mail'/>} placeholder="請輸入用信箱" />
                                            )
                                        }
                                    </Form.Item>
                                    <FormItem label="密碼">
                                        {
                                            getFieldDecorator('userPwd', {
                                                initialValue: '',
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '密碼不能為空'
                                                    },
                                                    {
                                                        min: 6,
                                                        message: '密碼太短'
                                                    },
                                                    {
                                                        max: 11,
                                                        message: '密碼太長'
                                                    }
                                                ]
                                            })(
                                                <Input  prefix={<Icon type='lock'/>} type="password" placeholder="請輸入密碼" />
                                            )
                                        }
                                    </FormItem>
                                    <FormItem label="密碼確認">
                                        {
                                            getFieldDecorator('userPwdAgain', {
                                                initialValue: '',
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '密碼不能為空'
                                                    },
                                                    {
                                                        min: 6,
                                                        message: '密碼太短'
                                                    },
                                                    {
                                                        max: 11,
                                                        message: '密碼太長'
                                                    }
                                                ]
                                            })(
                                                <Input  prefix={<Icon type='lock'/>} type="password" placeholder="請輸入密碼" />
                                            )
                                        }
                                    </FormItem>
                                    {/* <FormItem {...offsetLayout}> */}
                                    <FormItem>
                                        {
                                            getFieldDecorator('userRead', {
                                                valuePropName: 'checked',  /*一定要記得寫才會預設打勾*/
                                                initialValue: true,        /*初始值*/
                                                rules: []
                                            })(
                                            <Checkbox>我已閱讀過<a href="https://www.google.com.tw/">協議事項</a></Checkbox>
                                            )
                                        }
                                    </FormItem>
                                    <FormItem>
                                        <Button type="primary" className="login-form-button" onClick={this.handleSubmit}>註冊</Button>
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