import React from 'react';
import styles from '../loading/Loading.module.css';
import loadingLogo from '../../midia/logoLoading2.gif'

function Loading() {
 return(
  <div className={styles.loading}>
    <img src= {loadingLogo} alt='carregando'/>
  </div>
 )
}
export default Loading;