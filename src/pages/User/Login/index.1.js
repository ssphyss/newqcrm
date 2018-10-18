import React from 'react';

import { Card, Form, Icon, Input, Button, Checkbox, Row, Col, Message } from 'antd';
import { Link } from 'dva/router';
import logo from './../../../assets/logo-white.svg';
import './../index.scss';
import './index.scss';

// const FormItem = Form.Item;

// export default class Login extends React.Component {
class Login extends React.Component {

    state = {
        iconLoading: false
    }

    // // 送出表單
    // handleSubmit = ()=>{
    //     // 獲取表單所有值
    //     let userInfo = this.props.form.getFieldsValue();
    //     this.props.form.validateFields((err,values)=>{
    //         if(!err){
    //             Message.success(`${userInfo.userName}恭喜你已經通過驗證,密碼為${userInfo.userPwd}`)
    //         }
    //     })
    // }

    // 送出表單
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(userInfo);
        this.props.form.validateFields(async (err,values)=>{
            if(!err){
                try {
                    //const res = await axios.post('/login',userInfo);
                    this.setState({iconLoading: true})
                    const res = await Axios.ajax({
                        url: '/login',
                        method:'post',
                        params: userInfo
                    })
                    console.log(res);
                    if(res.items[0].login === 'success'){
                        message.success(`${userInfo.userName}恭喜你已經通過驗證，正幫您轉入系統中心`);
                        setTimeout(() => {
                            this.setState({iconLoading: false})
                            this.props.history.replace('/admin');
                        }, 500);
                    }else{
                        message.error('登錄失敗');
                        this.setState({iconLoading: false})
                        this.props.form.resetFields();
                    }
                } catch (error) {
                    message.error('伺服器錯誤');
                    this.setState({iconLoading: false})
                }
                // message.success(`${userInfo.userName}恭喜你已經通過驗證,密碼為${userInfo.userPwd}`)
            }
        })
    }
    render(){
        // antD固定的,一定要這樣寫才能驗證
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>                
                <div className='login__box'>
                    <div className='logo' key="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <Card title="登入帳戶" className='card-wrap'>
                        <Row>
                            <Col span='24'>
                                <Form>
                                    <Form.Item label="用戶名">
                                        {
                                            getFieldDecorator('userName',{
                                                initialValue: '',     /*初始值*/
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '用戶名不能為空'
                                                    },
                                                    {
                                                        pattern: new RegExp('^\\w+$','g'),
                                                        message: '用戶名必須為英文字母或數字'
                                                    }
                                                ]
                                            })(
                                                <Input prefix={<Icon type='user'/>} placeholder='請輸入用戶名'/>
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item label="輸入密碼">
                                        {
                                            getFieldDecorator('userPwd',{
                                                initialValue: '',  /*初始值*/
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '密碼不能為空'
                                                    },
                                                    {
                                                        pattern: new RegExp('^\\w+$','g'),
                                                        message: '用戶名必須為英文字母或數字'
                                                    }                                               
                                                ]
                                            })(
                                                <Input prefix={<Icon type='lock'/>} type='password' placeholder='請輸入密碼'/>
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item>
                                        {
                                            getFieldDecorator('remember',{
                                                valuePropName: 'checked',  /*一定要記得寫才會預設打勾*/
                                                initialValue: true,       /*初始值*/
                                                rules: []
                                            })(
                                                <Checkbox> 記住密碼</Checkbox>
                                            )
                                        }
                                        <a href='https://www.google.com.tw/' style={{float: 'right'}}>忘記密碼</a>      
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type='primary' className="login-form-button" onClick={this.handleSubmit}>登錄</Button>
                                        或 
                                        {/* <a href="https://www.google.com.tw/">立即註冊 now!</a> */}
                                        <Link to={'/User/Register'}>立即註冊 now!</Link>
                                    </Form.Item>
                                </Form>  
                            </Col>
                        </Row>                                      
                    </Card>
                </div>
            </div>            
        )
    }
}

export default Form.create()(Login);