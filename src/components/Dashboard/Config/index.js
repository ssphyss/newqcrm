import React from 'react';
import { Card, Form, Icon, Input, InputNumber, Button, Row, Col, Message, Radio, Select, Switch, Upload } from 'antd';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

// export default class Login extends React.Component {
class Config extends React.Component {
    state={
        
    }
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
            <div className=''>
                <div className=''>
                

                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="臉書設定" key="1">
                            <Card title="臉書設定" className='card-wrap card-wrap__fb'>
                            <Row>
                                <Col span='24'>
                                    {/* 預設已經 layout='horizontal' */}
                                    <Form layout="">
                                        <FormItem label="臉書-FB粉絲頁面網址" {...formItemLayout}>                                        {
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
                                        <FormItem label="臉書-FB帳號ID/ACCOUNTID" {...formItemLayout}>
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
                                        <FormItem label="臉書-FB API " {...formItemLayout}>
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
                                        <FormItem label="臉書-FB SECRET CODE" {...formItemLayout}>
                                            {
                                                getFieldDecorator('age', {
                                                    initialValue: 18
                                                })(
                                                    <InputNumber  />
                                                )
                                            }
                                        </FormItem>
                                        {/* <FormItem label="當前狀態" {...formItemLayout}>
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
                                        </FormItem>                                     */}
                                        <FormItem label="是否開啟" {...formItemLayout}>
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
                                        
                                        <FormItem label="備註" {...formItemLayout}>
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
                                        <FormItem label="臉書大頭貼" {...formItemLayout}>
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
                                        {/* <FormItem>
                                            {
                                                getFieldDecorator('userImg')(
                                                <Checkbox>我已閱讀過<a href="#">協議事項</a></Checkbox>
                                                )
                                            }
                                        </FormItem> */}
                                        <FormItem>
                                            <Button type="primary" className="login-form-button" onClick={this.handleSubmit}>儲存</Button>
                                        </FormItem>
                                    </Form>  
                                </Col>
                            </Row>                                      
                        </Card>
                        </TabPane>
                        <TabPane tab="Google + 設定" key="2">
                        <Card title="Google + 設定" className='card-wrap card-wrap__google'>
                        <Row>
                            <Col span='24'>
                                {/* 預設已經 layout='horizontal' */}
                                <Form layout="">
                                    <FormItem label="臉書-FB粉絲頁面網址" {...formItemLayout}>                                        {
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
                                    <FormItem label="臉書-FB帳號ID/ACCOUNTID" {...formItemLayout}>
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
                                    <FormItem label="臉書-FB API " {...formItemLayout}>
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
                                    <FormItem label="臉書-FB SECRET CODE" {...formItemLayout}>
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
                                    <FormItem label="是否開啟" {...formItemLayout}>
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
                                    
                                    <FormItem label="備註" {...formItemLayout}>
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
                                    <FormItem label="臉書大頭貼" {...formItemLayout}>
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
                                    {/* <FormItem>
                                        {
                                            getFieldDecorator('userImg')(
                                            <Checkbox>我已閱讀過<a href="#">協議事項</a></Checkbox>
                                            )
                                        }
                                    </FormItem> */}
                                    <FormItem>
                                        <Button type="primary" className="login-form-button" onClick={this.handleSubmit}>儲存</Button>
                                    </FormItem>
                                </Form>  
                            </Col>
                        </Row>                                      
                    </Card>
                        </TabPane>

                    </Tabs>

                    
                    
                </div>
            </div>            
        )
    }
}

export default Form.create()(Config);