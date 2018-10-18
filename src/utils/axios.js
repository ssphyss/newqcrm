import axios from 'axios'
import { Modal } from 'antd'

export default class Axios {
    static async ajax(options){
        let loading = null;
        if(typeof options.loading === 'undefined'){
            loading = document.getElementById('ajaxLoading');
            if(loading){
                loading.style.display = 'block';
            }else{
                loading = null;
            }
        }else{
            if(options.loading === true){
                loading = document.getElementById('ajaxLoading');
                loading.style.display = 'block';
            }
        }

        console.log('dom', loading);
        // if (options.data && options.data.isShowLoading !== false){
        //     loading = document.getElementById('ajaxLoading');
        //     loading.style.display = 'block';
        //     console.log('aaa', loading);
        // }
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method: options.method,
                timeout:30000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                if (loading !== null) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                console.log(response);
                if (response.status == '200'){
                    let res = response.data;
                    resolve(res);
                }else{
                    reject(response.data);
                }
            })
        });
    }
}