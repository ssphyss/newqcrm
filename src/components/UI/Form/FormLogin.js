import React from 'react';
import { Button, Card, Checkbox, Form, Icon, Input, Message} from 'antd';
import './../../../sass/all.scss'


import { DatePicker, Col, TimePicker, Select, Cascader, InputNumber } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

// const FormItem = Form.Item;

// export default class FormLogin extends React.Component {
// 一定要改用  Form.create()(FormLogin) 去創建 ,最後一行
class FormLogin extends React.Component {
    // 送出表單
    handleSubmit = ()=>{
        // 獲取表單所有值
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                Message.success(`${userInfo.userName}恭喜你已經通過驗證！密碼為：${userInfo.userPwd}`)
            }
        })
    }
    render(){
        // antD固定的,一定要這樣寫才能驗證,引入form後自動有
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title='登入行內表單' className='card-wrap card-bg'>
                    <Form layout='inline'>
                        <Form.Item>
                            <Input prefix={<Icon type='user'/>} placeholder='請輸入用戶名'/>
                        </Form.Item>
                        <Form.Item>
                            <Input prefix={<Icon type='user'/>} placeholder='請輸入密碼'/>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary'>登錄</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title='登入行內表單 - 動態獲取值' className='card-wrap card-bg'>
                    <Form>
                        <Form.Item label="用戶名">
                            {
                                getFieldDecorator('userName',{
                                    initialValue: '',         // 初始值空白
                                    rules: [
                                        {
                                            required: true,   // 要求必填
                                            message: '用戶名不能為空'
                                        },
                                        {
                                            // pattern: /^\w/g,
                                            pattern: new RegExp('^\\w+$','g'),
                                            message: '用戶名必須為英文字母或數字'
                                        }
                                        // {
                                        //     min: 6,
                                        //     message: '密碼太短'
                                        // },
                                        // {
                                        //     max: 11,
                                        //     message: '密碼太長'
                                        // }
                                    ]
                                })(<Input prefix={<Icon type='user'/>} placeholder='請輸入用戶名'/>)
                            }
                        </Form.Item>
                        <Form.Item label="輸入密碼">
                            {
                                getFieldDecorator('userPwd',{
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密碼不能為空'
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
                                    valuePropName: 'checked',
                                    initialValue: true,    
                                    rules: []
                                })(
                                    <Checkbox> 記住密碼</Checkbox>
                                )
                            }
                            <a href='https://www.google.com.tw/' style={{float: 'right'}}>忘記密碼</a>      
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' className="login-form-button" onClick={this.handleSubmit}>登錄</Button>
                            或 <a href="https://www.google.com.tw/">立即註冊 now!</a>
                        </Form.Item>
                    </Form> 
                </Card>
                <Card title='登入行內表單 - 動態獲取值和圖標' className='card-wrap card-bg'>
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="失敗 Fail"
                        validateStatus="error"
                        help="Should be combination of numbers & alphabets"
                    >
                        <Input placeholder="unavailable choice" id="error" />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="警告 Warning"
                        validateStatus="warning"
                    >
                        <Input placeholder="Warning" id="warning" />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="驗證中 Validating"
                        hasFeedback
                        validateStatus="validating"
                        help="The information is being validated..."
                    >
                        <Input placeholder="I'm the content is being validated" id="validating" />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="成功 Success"
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input placeholder="I'm the content" id="success" />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="警告 Warning"
                        hasFeedback
                        validateStatus="warning"
                    >
                        <Input placeholder="Warning" id="warning2" />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="失敗 Fail"
                        hasFeedback
                        validateStatus="error"
                        help="Should be combination of numbers & alphabets"
                    >
                        <Input placeholder="unavailable choice" id="error2" />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="成功 Success"
                        hasFeedback
                        validateStatus="success"
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Warning"
                        hasFeedback
                        validateStatus="warning"
                    >
                        <TimePicker style={{ width: '100%' }} />
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Error"
                        hasFeedback
                        validateStatus="error"
                    >
                        <Select defaultValue="1">
                            <Option value="1">Option 1</Option>
                            <Option value="2">Option 2</Option>
                            <Option value="3">Option 3</Option>
                        </Select>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Validating"
                        hasFeedback
                        validateStatus="validating"
                        help="The information is being validated..."
                    >
                        <Cascader defaultValue={['1']} options={[]} />
                    </FormItem>

                    <FormItem
                        label="inline"
                        {...formItemLayout}
                    >
                        <Col span={11}>
                            <FormItem validateStatus="error" help="Please select the correct date">
                            <DatePicker />
                            </FormItem>
                        </Col>
                        <Col span={2}>
                            <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                            -
                            </span>
                        </Col>
                        <Col span={11}>
                            <FormItem>
                                <DatePicker />
                            </FormItem>
                        </Col>
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="Success"
                        hasFeedback
                        validateStatus="success"
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </FormItem>
                </Form>
                </Card>
            </div>            
        )
    }
}

export default Form.create()(FormLogin);