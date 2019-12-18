/*
 * @Author: liqi@hiynn.com 
 * @Date: 2018-03-13 12:47:07 
 * @Description: 公用 Loading
 * @Last Modified by: liqi@hiynn.com
 * @Last Modified time: 2018-03-14 18:00:03
 */

import React from 'react'
import { Spin, Icon } from 'antd'

class Loading extends React.Component {
  render() {
    const { spinning } = this.props

    const style = {
      display: spinning ? 'flex' : 'none',
      position: 'fixed',
      top: '50%',
      left: '50%',
      zIndex: '9999',
      transform: 'translate(-50%, -50%)',
      width: '80px',
      height: '80px',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, .54)',
      borderRadius: '10px'      
    }

    return (
      <div style={style}>
        <Spin 
          spinning={spinning}
          size='large' />
      </div>
    )
  }
}

export default Loading