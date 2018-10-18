import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
// import './IndexPage.less';
import './index.scss';


function IndexPage() {
  return (
    <div className='box'>
      <h1 className={styles.title}>123Yay! Welcome to dva!</h1>
      {/* <div className='{styles.welcome}' /> */}
      <div className='welcome' />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="http://localhost:3000/admin/">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
