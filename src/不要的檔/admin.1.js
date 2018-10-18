import React from 'react';
import { NavLink } from 'dva/router';
import { Layout, Menu, Icon, Drawer } from 'antd';
import './layout/index.scss';
import './sass/all.scss';
import menuConfig from './config/menuConfig.js';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import SiderBar from './layout/Sider';
import isLogin from './hoc/isLogin';

const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;
let isMobile;

class Admin extends React.Component{    
// export default class Admin extends React.Component{    
    
    state = {
        isMobile,
        collapsed: false,
        visible: false
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    toggle = () => {
        this.setState({
            visible: !this.state.visible,
            // collapsed: !this.state.collapsed,
            collapsed: this.state.visible
        });
    }

    // 是否是手機?
    componentDidMount() {
        this.enquireHandler = enquireScreen(mobile => {
            const { isMobile } = this.state;
            if (isMobile !== mobile) {
                this.setState({
                    isMobile: mobile,
                });
            }
        });
    }

    componentWillMount(){       
        unenquireScreen(this.enquireHandler);
        const menuTreeNode = this.renderMenu(menuConfig);
        this.setState({
            menuTreeNode
        });        
    }

    // 選單
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu key={item.path} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                        { this.renderMenu(item.children)}  
                    </SubMenu>
					// <SubMenu title={item.title} key={item.path}>   
                    //     <Icon type={item.icon}/>                     
                    //     { this.renderMenu(item.children)}                
					// </SubMenu>
                )
                // item.children.map((item) => {
                //     return <SubMenu title={item.title} path={item.path}>
                //          <Menu.Item title={item.title} path={item.path}>{item.title}</Menu.Item>
                //     </SubMenu>
                // })                
            }
            return (
                // <Menu.Item title={item.title} key={item.path}>
                //        <NavLink to={item.path}>{item.title}</NavLink>
                // </Menu.Item>
                <Menu.Item key={item.path}>
                    {/* <Icon type={item.icon} /> */}
                    <span><NavLink to={item.path}>{item.title}</NavLink></span>
                </Menu.Item>
            )
        })
    }
    render() {
        const { isMobile } = this.state;
        const { collapsed } = this.state;
        // const { visible } = this.state;
        // const { onClose } = this.state;
        // const { isMobile, visible, onClose } = this.state;
        
        isMobile ? (console.log('1.是手機嗎? isMobile：', isMobile)):(console.log('3.收合嗎? collapsed', collapsed))
        return (
            isMobile? (
            <Layout>                
                <Drawer
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    style={{
                        padding: 0,
                        height: '100vh',
                        background: '#04403e'
                    }}
                >                            
                    <SiderBar { ...this.state } />
                </Drawer>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 'auto' }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
            ):(
            <Layout>                           
                <SiderBar { ...this.state } />
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 'auto' }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
            )
            
        );
    }
  }
  
export default isLogin(Admin);