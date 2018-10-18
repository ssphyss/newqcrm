import React, { Fragment } from 'react';
import { Spin } from 'antd';
import { connect } from 'dva';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function isLogin(Comp){
    class WrappComp extends Comp {
        state = {
            login: false
        }
        componentDidMount(){
            // console.log(this.props);
            this.props.dispatch({type:'auth/asyncCurrentUser',history: this.props.history});
        } 
        componentWillReceiveProps(nextProps){
            console.log(nextProps.auth._id);
            if(nextProps.auth._id !== ''){
                this.setState({
                    login: true
                })
            }
        }
        render(){
            return(
                <Fragment>
                    <div id='ajaxLoading' style={{display:'none'}}>
                        <Spin />
                    </div> 
                {  this.state.login === true ?
                    <Comp {...this.props}></Comp>
                    : null
                }
                </Fragment>

            )
        }
    }
    return connect(mapStateToProps)(withRouter(WrappComp));
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default isLogin