/*
 * @Author: liqi@hiynn.com 
 * @Date: 2018-03-13 11:32:33 
 * @Description: 登录页
 * @Last Modified by:   lvjn
 * @Last Modified time: 2018-04-03 11:55:43
 */
import {withRouter} from 'react-router-dom'

import React, { Component } from 'react'
import { message } from 'antd'
import md5 from 'js-md5'
import './Login.scss'
import PropTypes from 'prop-types'

// component
import {Loading} from 'com/index'

// 服务器端口
// import { post } from 'src/utils/fetch.js'
// import config from 'public/libs/commonJs/config'
// const baseUrl = `http://${config.ip}:${config.port}/${config.path}/`;


class Login extends Component {
	constructor(props) {
		super(props)
		this.handleLoginEvent = this.handleLoginEvent.bind(this)
		this.state = {
			userCode: '',
			password: '',
			spinning: false
		}
	}

	/******************** 表单事件 ********************/
	handleUserCodeChange(e) {
		const userCode = e.target.value
		this.setState({ userCode })
	}
	handlePasswordChange(e) {
		const password = e.target.value
		this.setState({ password })
	}
	/******************** 表单事件 ********************/

	render() {
		const { userCode, password, spinning } = this.state

		return (
			<div className='login-panel'>
				{/* 加载中图标 */}
				<Loading spinning={spinning}/>

				{/* 标题 */}
				<div className='login-title'></div>

				{/* 表单 */}
				<div className='login-auth-wrapper'>
					{/* 用户名 */}
					<div className="login-input">
						<div className="login-label-wrapper">
							<span className='icon icon-user-code'></span>
							<span className='login-label'>用户名</span>
						</div>
						<input
							type="text"
							autoFocus
							value={userCode}
							onChange={this.handleUserCodeChange.bind(this)} />
					</div>

					{/* 密码 */}
					<div className="login-input">
						<div className="login-label-wrapper">
							<span className='icon icon-password'></span>
							<span className='login-label'>密 码</span>						
						</div>
						<input
							type="password"
							value={password}
							onChange={this.handlePasswordChange.bind(this)} />
					</div>
					
					{/* 登录按钮 */}
					<div
						className='login-submit'
						onClick={this.handleLoginEvent}>确定登录</div>
				</div>

			</div>
		)
	}

	componentDidMount() {
		document.onkeydown = (e) => {
			if (e && e.keyCode == 13) {
				this.handleLoginEvent()
			}
		}
	}

	/**
	 * 当点击登录按钮时触发
	 * - 发起登录请求, 将 token userName menuList 存入 sessionStorage 中, 并跳转页面
	 * @return {void} void
	 */
	handleLoginEvent() {
		const { userCode, password } = this.state

		this.setState({ spinning: true })	
		// this.props.loginFun && this.props.loginFun(userCode, password)
		axios({
            method: 'post',
			url: realAddressUrlOne + '/sys/login',
			data:{
				username:userCode,
				password:md5(password)
			}
        }).then((res) => {
			console.log('res',res);
			
            if(res.data.code === 200){
				let token = res.data.result.token;
				sessionStorage.setItem('token', token);
				sessionStorage.setItem('userName', userCode);
				sessionStorage.setItem('password', password);

				byjc_cq.call(monitorType, "byjc_cd", { area: 'token_pc',tokenPc:token }); //把token传给成都团队

				this.props.history.push('/main/flyCont')
            }else{
				this.setState({ spinning: false })
				message.error(res.data.msg)
			}
        });	

		// // 发起请求		
		// post(`${baseUrl}login`, {
		// 	userCode,
		// 	password: md5(password)
		// })
		// .then(res => {
		// 	if(res.code == 0) {
		// 		const { userName, menuList, token } = res.result;
		// 		this.setState({ spinning: false })

		// 		// 设置本地缓存
		// 		if(menuList.length > 0) {
		// 			const routerPath = menuList[0].path;
		// 			console.log('routerPath----->', routerPath)
		// 			sessionStorage.setItem('token', token)
		// 			sessionStorage.setItem('userName', userName)
		// 			sessionStorage.setItem('menuList', JSON.stringify(menuList))
		// 			message.success(res.msg)
		// 			window.location.pathname = routerPath;
		// 		}else {
		// 			message.warn('该用户没有权限')
		// 		}
						
		// 	}else {
		// 		this.setState({ spinning: false })
		// 		message.error(res.msg)
		// 	}

		// 	// switch (res.code) {

		// 	// 	case 0:
		// 	// 		const { userName, menuList, token } = res.result
		// 	// 		const routerPath = menuList[0].path;
		// 	// 		debugger;
		// 	// 		console.log('routerPath----->', routerPath);
		// 	// 		this.setState({ spinning: false })

		// 	// 		// 设置本地缓存
		// 	// 		sessionStorage.setItem('token', token)
		// 	// 		sessionStorage.setItem('userName', userName)
		// 	// 		sessionStorage.setItem('menuList', JSON.stringify(menuList))
		// 	// 		message.success(res.msg)

		// 	// 		window.location.pathname = routerPath;	
		// 	// 		// window.location.pathname = 'situation';	
		// 	// 		break
		// 	// 	case 1:
		// 	// 		this.setState({ spinning: false })
		// 	// 		message.error(res.msg)
				
		// 	// }
		// })		
	}
}

Login.propTypes = {
	// loginFun:PropTypes.func.isRequired,
}
Login.defaultProps = {}
export default withRouter(Login)