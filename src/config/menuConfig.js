// const menuList = [];
// export default menuList;
const menuList = [
// export default [
    // 控制台
    // {
    //     title:'首頁',
    //     path:'/admin/home'
    // },
    // UI
    {
        title:'登入',
        path:'/User/Login',
        icon: 'user'
        // type: '_blank'
    },
    {
        title:'註冊',
        path:'/User/Register',
        icon: 'user',
    },
    {
        title:'UI 組件',
        path:'/admin/ui',
        icon: 'star',
        children:[
            {
                title:'表單',
                path:'/admin/form',
                children:[
                    {
                        title:'登錄',
                        path:'/admin/Form/Login'
                    },
                    {
                        title:'註冊',
                        path:'/admin/Form/Register'                    
                    }
                ]
            },
            {
                title:'表格',
                path:'/admin/table',
                children:[
                    {
                        title:'基礎表格',
                        path:'/admin/table/basic'

                    },
                    {
                        title:'高級表格',
                        path:'/admin/table/high'
                    }
                ]
            },
            {
                title:'圖標',
                path:'/admin/charts',
                children:[
                    {
                        title:'柱形圖',
                        path:'/admin/charts/bar'
                    },
                    {
                        title:'餅圖',
                        path:'/admin/charts/pie'
                    },
                    {
                        title:'折線圖',
                        path:'/admin/charts/line'
                    },
                ]
            },
            {
                title:'卡片',
                path:'/admin/ui/card',
            },
            {
                title:'按鈕',
                path:'/admin/ui/buttons',
            },
            {
                title:'彈框',
                path:'/admin/ui/modals',
            },
            {
                title:'Loading',
                path:'/admin/ui/loadings',
            },
            {
                title:'通知提醒',
                path:'/admin/ui/notice',
            },
            {
                title:'全局Message',
                path:'/admin/ui/messages',
            },
            {
                title:'Tab頁籤',
                path:'/admin/ui/tabs',
            },
            {
                title:'圖片畫廊',
                path:'/admin/ui/gallery',
            },
            {
                title:'輪播圖',
                path:'/admin/ui/carousel',
            },
            {
                title:'富文本',
                path:'/admin/rich'
            }            
        ]
    },
    {
        title:'控制台',
        path:'/dashboard',
        icon: 'pie-chart',
        children:[
            {
                title:'控制台總覽',
                path:'/dashboard/analysis',
            },
            {
                title:'登入者記錄',
                path:'/dashboard/loginRecord',
            },
            {
                title:'系統參數設定',
                path:'/dashboard/config',
            },
            // {
            //     title:'前台網站設定',
            //     path:'/dashboard/config2',
            // },
            {
                title:'管理者帳號設定',
                path:'/dashboard/adminMembers',
            }
            // {
            //     title:'管理者權限',
            //     path:'/dashboard/accountSet2',
            // }
        ]
    },
    {
        title:'借款管理',
        path:'/borrow',
        icon: 'pie-chart',
        children:[
            {
                title:'借款總覽',
                path:'/borrow/analysis',
            },
            {
                title:'借款分類',
                path:'/borrow/Category',
            },
            {
                title:'借款管理',
                path:'/borrow/list',
            },
            {
                title:'借款訊息設定',
                path:'/borrow/config',
            }
        ]
    },
    {
        title:'投資管理',
        path:'/lend',
        icon: 'bar-chart',
        children:[
            {
                title:'投資總覽',
                path:'/lend/analysis',
            },
            {
                title:'投資分類',
                path:'/lend/Category',
            },
            {
                title:'投資管理',
                path:'/lend/list',
            },
            {
                title:'投資訊息設定',
                path:'/lend/config',
            }
        ]
    },
    {
        title:'會員管理',
        path:'/member',
        icon: 'user',        
        children:[
            {
                title:'會員總覽',
                path:'/member/analysis',
            },
            {
                title:'會員分類',
                path:'/member/Category',
            },
            {
                title:'會員管理',
                path:'/member/list',
            },
            {
                title:'會員訊息設定',
                path:'/member/config',
            }
        ]
    },
    {
        title:'最新消息管理',
        path:'/article',
        icon: 'notification',
        children:[
            {
                title:'新增文章',
                path:'/article/articleAdd',
            },
            {
                title:'文章分類',
                path:'/article/articleCategory',
            },
            {
                title:'文章管理',
                path:'/article/articleList',
            },
            {
                title:'標籤管理',
                path:'/article/articleTag',
            }
        ]
    },
    {
        title:'廣告管理',
        path:'/Banner',    
        icon: 'picture',
        children:[
            {
                title:'新增廣告',
                path:'/Banner/analysis',
            },
            {
                title:'廣告分類',
                path:'/Banner/loginRecord',
            },
            {
                title:'廣告管理',
                path:'/Banner/config',
            },
            {
                title:'廣告版位設定',
                path:'/Banner/config',
            }
        ]
    },
    {
        title:'訂單管理',
        path:'/admin/order',
        icon: 'smile',
        // btnList:[
        //     {
        //         title:'訂單詳情',
        //         path:'detail'
        //     },
        //     {
        //         title:'結束訂單',
        //         path:'finish'
        //     }
        // ]
        children:[
            {
                title:'訂單列表',
                path:'/admin/order/order-list'
            },
            {
                title:'訂單列表2',
                path:'/admin/order/order-list2'
            },
            {
                title:'訂單詳情',
                path:'/admin/order/order-detail/1'
            },
            {
                title:'訂單詳情(外聯)',
                path:'/common/order/detail/1'
            },
            {
                title:'結束訂單',
                path:'/admin/order/finish'
            }
        ]
    },
    {
        title:'員工管理',
        path:'/admin/user',
        icon: 'user-add',
    },
    {
        title:'車輛地圖',
        path:'/admin/bikeMap',
        icon: 'global',
    },
    {
        title:'權限設置',
        path:'/admin/permission',
        icon: 'setting',
    }
        // {
    //     title:'表單',
    //     // path:'/admin/form',
    //     path:'/admin/login',
    //     children:[
    //         {
    //             title:'登錄',
    //             // path:'/admin/form/login',
    //             path:'/admin/login',
    //         },
    //         {
    //             title:'註冊',
    //             path:'/admin/form/reg',
    //         }
    //     ]
    // },
    // {
    //     title:'表格',
    //     path:'/admin/table',
    //     children:[
    //         {
    //             title:'合併表格',
    //             path:'/admin/table/basic',
    //         },
    //         {
    //             title:'基礎表格1',
    //             // path:'/admin/table/basic',
    //             path:'/admin/table/basicTable1',
    //         },
    //         {
    //             title:'基礎表格2',
    //             // path:'/admin/table/basic',
    //             path:'/admin/table/basicTable2',
    //         },
    //         {
    //             title:'高級表格',
    //             path:'/admin/table/high',
    //         }
    //     ]
    // },
    // {
    //     title:'富文本',
    //     path:'/admin/rich'
    // },
];
export default menuList;