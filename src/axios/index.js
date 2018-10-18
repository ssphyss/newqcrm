import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
// import Utils from './../utils/utils'

export default class Axios {
    // 定義靜態
    // static requestList(_this,url,params,isMock){
    //     var data = {
    //         params: params,
    //         isMock
    //     }
    //     this.ajax({
    //         url,
    //         data
    //     }).then((data)=>{
    //         if (data && data.result){
    //             let list = data.result.item_list.map((item, index) => {
    //                 item.key = index;
    //                 return item;
    //             });
    //             _this.setState({
    //                 list,
    //                 pagination: Utils.pagination(data, (current) => {
    //                     _this.params.page = current;
    //                     _this.requestList();
    //                 })
    //             })
    //         }
    //     });
    // }
    // 定義靜態方法
    // resolve 成功 , reject 失敗
    // response 後端的回傳

    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                // debugger;
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }    
 
    static ajax(options){
        let loading;
        if (options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let baseApi = '';
        if(options.isMock){
            baseApi = 'https://easy-mock.com/mock/5ba5d407489c246a8645c6cb/mockapi';
        }else{
            baseApi = 'https://easy-mock.com/mock/5ba5d407489c246a8645c6cb/mockapi';
        }
        // let baseApi = 'https://easy-mock.com/mock/5ba5d407489c246a8645c6cb/mockapi';
        return new Promise((resolve,reject)=>{
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                // 這裡的200是http狀態的請求碼的200
                if (response.status == '200'){
                    let res = response.data;
                    // 這裡的0是後端定義的業務帶碼 0
                    if (res.code == '0'){
                        resolve(res);

                    // 錯誤攔截
                    // 報錯引用組件Modal
                    // 比如要抓 ==0 結果來源code==100
                    }else{
                        Modal.info({
                            title: "提示",
                            content: res.msg
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        });
    }
    // static ajax(options){
    //     let loading;
    //     if (options.data && options.data.isShowLoading !== false){
    //         loading = document.getElementById('ajaxLoading');
    //         loading.style.display = 'block';
    //     }
    //     let baseApi = '';
    //     if(options.isMock){
    //         baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
    //     }else{
    //         baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
    //     }
    //     return new Promise((resolve,reject)=>{
    //         axios({
    //             url:options.url,
    //             method:'get',
    //             baseURL:baseApi,
    //             timeout:5000,
    //             params: (options.data && options.data.params) || ''
    //         }).then((response)=>{
    //             if (options.data && options.data.isShowLoading !== false) {
    //                 loading = document.getElementById('ajaxLoading');
    //                 loading.style.display = 'none';
    //             }
    //             if (response.status == '200'){
    //                 let res = response.data;
    //                 if (res.code == '0'){
    //                     resolve(res);
    //                 }else{
    //                     Modal.info({
    //                         title:"提示",
    //                         content:res.msg
    //                     })
    //                 }
    //             }else{
    //                 reject(response.data);
    //             }
    //         })
    //     });
    // }

    // let baseApi = 'https://easy-mock.com/mock/5ba5d407489c246a8645c6cb/api';
    // let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
    // https://easy-mock.com/mock/5ba5d407489c246a8645c6cb/mockapi/table/list#!method=get
    // let baseApi = 'https://easy-mock.com/mock/5ba5d407489c246a8645c6cb/mockapi';
    // let baseUrl ='+/table/list

    // 返回要滿足Promise ,用 then方式接收
    // Promise 會接收一個回調函數,參數(resolve,reject)
}