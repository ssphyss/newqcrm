import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import { Drawer } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
// import styles from './less/common.less';
import './less/common.less';
import logo from './assets/logo-white.svg';
import './layout/index.scss';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

let isMobile;
enquireScreen(b => {
    isMobile = b;
});

export default class Admin extends React.Component{    

    // 抽屜 visible: false不顯示；visible: true顯示
    // 選單 collapsed: false顯示 (不管是不是手機都打開))
    state = {
        visible: isMobile ? true :  false,
        isMobile
    };
   
    // 抽屜點空白處收合
    onClose = () => {
        this.setState({
          visible: false,     
        });
    };  

    // 選單抽屜控制
    toggle = () => {
        this.setState({
            visible: isMobile ? true :  false,
            collapsed: isMobile ? false : !this.state.collapsed,
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

    componentWillUnmount() {
        unenquireScreen(this.enquireHandler);
    }

    render() {
        // const { logo, collapsed, onCollapse, fixSiderbar, theme } = this.props;
        const { isMobile } = this.state;
        // const { isMobile, collapsed } = this.state;
        console.log('是手機嗎? isMobile：', isMobile);   // true和undefined ,預設false
        // console.log('收合嗎? collapsed', collapsed); 

        return (
            isMobile ? (
            <Layout>                
                <Drawer
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    style={{
                        padding: 0,
                        height: '100vh',
                    }}
                >
                    <Sider 
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        breakpoint="lg"       
                        width={256}
                    >
                        {/* <div className="logo" /> */}
                        {/* <div className={styles.logo} key="logo"></div> */}
                        <div className='logo' key="logo">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                                <h1>Money SQ</h1>
                            </Link>
                        </div>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={this.state.collapsed}
                            style={{ padding: '16px 0', width: '100%' }}
                        >
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="inbox" />
                                <span>Option 3</span>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="11">Option 11</Menu.Item>
                                    <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Sider>
                </Drawer>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
            ) :(
            <Layout>
                <Sider   
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    breakpoint="lg"
                    width={256}
                >
                    {/* <div className="logo" /> */}
                    {/* <div className={styles.logo} key="logo"></div> */}
                    <div className='logo' key="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                            <h1>Ant Design Pro</h1>
                        </Link>
                    </div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                        style={{ padding: '16px 0', width: '100%' }}
                    >
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="inbox" />
                            <span>Option 3</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </Sider>                
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
                    </Content>
                </Layout>
            </Layout>      
            )
        );
  }
}

