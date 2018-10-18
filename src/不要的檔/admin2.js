import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'dva/router';
import { Layout, Menu, Icon, Drawer } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import logo from './assets/logo-white.svg';
import './less/common.less';
import './layout/index.scss';
// 選單
import menuConfig from './config/menuConfig.js';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

let isMobile;
enquireScreen(b => {
    isMobile = b;
});

export default class Admin extends React.Component{    

    // 抽屜 visible狀態？手機true顯示：電腦false不顯示
    // 選單 collapsed狀態？手機false顯示：電腦false顯示
    state = {
        isMobile,
        visible: isMobile ? false :  false,
        // collapsed: isMobile ? false :  false   
        collapsed: false  
    };

    // 抽屜點空白處 visible狀態？手機false不顯示：電腦false不顯示
    onClose = () => {
        this.setState({
            visible: false, 
            collapsed: !this.state.visible  
        });
    };  

    // 選單抽屜控制
    toggle = () => {
        // 抽屜 visible狀態？手機true顯示：電腦false不顯示
        // 選單 collapsed狀態？手機false顯示：電腦false顯示
        this.setState({
            // visible:  !this.state.visible,
            // collapsed: isMobile ? this.state.collapsed : !this.state.visible   
            // visible: isMobile ? true :  false,            
            // collapsed: isMobile? true: true
            collapsed: !this.state.collapsed        
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
					<SubMenu title={item.title} key={item.path}>                        
                        { this.renderMenu(item.children)}                
					</SubMenu>
                )
                // item.children.map((item) => {
                //     return <SubMenu title={item.title} path={item.path}>
                //          <Menu.Item title={item.title} path={item.path}>{item.title}</Menu.Item>
                //     </SubMenu>
                // })                
            }
            return <Menu.Item title={item.title} key={item.path}>
                {/* {item.title} */}
                <NavLink to={item.path}>{item.title}</NavLink>
                <NavLink to={item.path}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    
    render() {
        // const { logo, collapsed, onCollapse, fixSiderbar, theme } = this.props;
        const { isMobile } = this.state;
        const { visible } = this.state;
        const { collapsed } = this.state;
        
        isMobile ? (console.log('1.是手機嗎? isMobile：', isMobile)):(console.log('3.收合嗎? collapsed', collapsed))
        // console.log('1.是手機嗎? isMobile：', isMobile);   // true和undefined ,預設false
        // console.log('2.抽屜開嗎? visible', visible); 
        // console.log('3.收合嗎? collapsed', collapsed); 

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
                            {/* <Menu.Item key="1">
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
                            </SubMenu> */}
                            {/* 抓取動態的菜單文件 */}
                            { this.state.menuTreeNode }
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
                        {/* <Menu.Item key="1">
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
                        </SubMenu> */}
                        {/* 抓取動態的菜單文件 */}
                        { this.state.menuTreeNode }
                    </Menu>
                </Sider>                
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            // onClick={this.toggle}
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

