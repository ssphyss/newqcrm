import React from 'react';
import { Card, Form, Input, InputNumber, Button, Message, Icon, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Row, Col } from "antd";
import moment from 'moment';
import './index.scss';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component{

    state={}

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
                // 小於576
                xs:24,
                // 大於576
                sm:{ 
                    span:12,
                    offset:6
                    // 佔據12列偏移4列
                }
            }
        }
        return (
            <div>
                <Card title="註冊表單1" className='card-wrap card-bg'>
                    <Row>
                        <Col span='20'>
                            <Form layout="horizontal">
                                <FormItem label="用戶名">
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
                                <FormItem label="密碼">
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
                            </Form>
                        </Col>
                    </Row>
                </Card>

                <Card title="註冊表單2 - 分欄 " className='card-wrap card-bg'>
                    <Row>
                        <Col span='20'>
                            <Form layout="horizontal">
                                <FormItem label="用戶名" {...formItemLayout}>
                                    {
                                        getFieldDecorator('userName2', {
                                            initialValue: '',
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
                                            <Input placeholder="請輸入用戶名" />
                                        )
                                    }
                                </FormItem>
                                <FormItem label="密碼" {...formItemLayout}>
                                    {
                                        getFieldDecorator('userPwd2', {
                                            initialValue: '',
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '密碼不能為空'
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
                                                placeholder='請選擇日期'
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
                                            <TimePicker
                                                placeholder='請選擇時間'
                                            />
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
                                        getFieldDecorator('userRead', {
                                            valuePropName: 'checked',  /*一定要記得寫才會預設打勾*/
                                            initialValue: true,        /*初始值*/
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '一定要勾選'
                                                }
                                            ]
                                        })(
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
        );
    }
}

export default Form.create()(FormRegister);